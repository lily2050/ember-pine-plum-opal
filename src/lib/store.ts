import { create } from "zustand";
import seedJson from "../data/seed.json";
import { calendarDays, nextId, todayYmd, workDays } from "./dates";
import { checkPermLimits, hoursLabelFromRange, monthlyCountUsed, timeRangeMinutes } from "./hours";
import { downloadText } from "./io";
import type {
  AppDB,
  AppUser,
  Attendance,
  Employee,
  Leave,
  Mission,
  PageId,
  PermLimit,
  Permission,
  Section,
} from "./types";

const KEY = "diwan_hr_v2";
const USER_KEY = "diwan_hr_user";

function normalizeDb(raw: Partial<AppDB> | AppDB): AppDB {
  const base = structuredClone(seedJson as AppDB);
  const merged: AppDB = {
    ...base,
    ...raw,
    settings: { ...base.settings, ...(raw.settings || {}) },
    employees: raw.employees || base.employees,
    leaves: raw.leaves || base.leaves,
    permissions: raw.permissions || base.permissions,
    leaveTypes: raw.leaveTypes || base.leaveTypes,
    permTypes: raw.permTypes || base.permTypes,
    departments: raw.departments || base.departments,
    positions: raw.positions || base.positions,
    holidays: raw.holidays || base.holidays,
    missions: raw.missions || base.missions,
    missionTypes: raw.missionTypes?.length ? raw.missionTypes : base.missionTypes,
    attendance: raw.attendance || base.attendance,
    sections: raw.sections || base.sections,
    users: raw.users?.length ? raw.users : base.users,
    permLimits: (raw.permLimits?.length ? raw.permLimits : base.permLimits).map((l) => ({
      ...l,
      apply:
        l.apply === "each" || l.apply === "group"
          ? l.apply
          : l.scope === "department" || l.scope === "section"
            ? "group"
            : "each",
    })),
    trash: raw.trash || [],
  };
  return merged;
}

const emptyDb = (): AppDB => normalizeDb(seedJson as AppDB);

function persist(db: AppDB) {
  try {
    localStorage.setItem(KEY, JSON.stringify(db));
    localStorage.setItem(KEY + "_bak", JSON.stringify(db));
    localStorage.setItem(KEY + "_bak_ts", String(Date.now()));
  } catch {
    /* ignore quota */
  }
}

function loadDb(): AppDB {
  try {
    const s = localStorage.getItem(KEY) || localStorage.getItem("diwan_hr_v1");
    if (s) return normalizeDb(JSON.parse(s) as AppDB);
  } catch {
    /* fallthrough */
  }
  return emptyDb();
}

export type ModalKind = null | "emp" | "leave" | "perm" | "limit" | "user" | "mission" | "att" | "section" | "dash";

type Store = {
  hydrated: boolean;
  db: AppDB;
  page: PageId;
  user: AppUser | null;
  theme: "light" | "dark";
  sidebarOpen: boolean;
  profileCode: string;
  toast: { text: string; kind: "ok" | "err" } | null;
  modal: ModalKind;
  editIndex: number | null;
  hydrate: () => void;
  setPage: (p: PageId) => void;
  login: (u: string, p: string) => string | null;
  logout: () => void;
  toggleTheme: () => void;
  setSidebar: (v: boolean) => void;
  setProfile: (code: string) => void;
  flash: (text: string, kind?: "ok" | "err") => void;
  openModal: (k: ModalKind, idx?: number | null) => void;
  closeModal: () => void;
  saveDb: (patch: Partial<AppDB> | ((d: AppDB) => AppDB)) => void;
  saveEmployee: (emp: Employee, idx: number | null) => void;
  saveLeave: (leave: Omit<Leave, "id" | "registeredAt">, idx: number | null) => string | null;
  savePerm: (
    perm: Omit<Permission, "id" | "duration" | "registeredAt"> & { duration?: string },
    idx: number | null,
  ) => string | null;
  saveLimit: (limit: PermLimit, idx: number | null) => void;
  saveUser: (user: AppUser, idx: number | null) => string | null;
  saveMission: (m: Omit<Mission, "id"> & { id?: string }, idx: number | null) => string | null;
  saveAttendance: (a: Omit<Attendance, "id"> & { id?: string }, idx: number | null) => string | null;
  saveSection: (s: Section, idx: number | null) => void;
  softDel: (collection: keyof AppDB, idx: number) => void;
  restoreTrash: (i: number) => void;
  purgeTrash: (i: number) => void;
  emptyTrash: () => void;
  resetSeed: () => void;
  restoreBackup: () => string | null;
  importJson: (raw: string) => string | null;
  exportJson: () => void;
};

export const useApp = create<Store>((set, get) => ({
  hydrated: false,
  db: emptyDb(),
  page: "dashboard",
  user: null,
  theme: "light",
  sidebarOpen: false,
  profileCode: "",
  toast: null,
  modal: null,
  editIndex: null,

  hydrate: () => {
    const db = loadDb();
    let user: AppUser | null = null;
    try {
      const s = sessionStorage.getItem(USER_KEY);
      if (s) user = JSON.parse(s) as AppUser;
    } catch {
      user = null;
    }
    let theme: "light" | "dark" = "light";
    try {
      if (localStorage.getItem("diwan_theme") === "dark") theme = "dark";
    } catch {
      /* ignore */
    }
    set({ db, user, hydrated: true, theme });
  },

  setPage: (p) => set({ page: p, sidebarOpen: false }),

  login: (u, p) => {
    const user = get().db.users.find((x) => x.username === u && x.password === p);
    if (!user) return "اسم المستخدم أو كلمة المرور غير صحيحة";
    try {
      sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    } catch {
      /* ignore */
    }
    set({ user, page: "dashboard" });
    return null;
  },

  logout: () => {
    try {
      sessionStorage.removeItem(USER_KEY);
    } catch {
      /* ignore */
    }
    set({ user: null, page: "dashboard" });
  },

  toggleTheme: () => {
    const next = get().theme === "light" ? "dark" : "light";
    try {
      localStorage.setItem("diwan_theme", next);
    } catch {
      /* ignore */
    }
    set({ theme: next });
  },

  setSidebar: (v) => set({ sidebarOpen: v }),
  setProfile: (code) => set({ profileCode: code, page: "profile" }),
  flash: (text, kind = "ok") => {
    set({ toast: { text, kind } });
    window.setTimeout(() => set({ toast: null }), 2800);
  },
  openModal: (k, idx = null) => set({ modal: k, editIndex: idx ?? null }),
  closeModal: () => set({ modal: null, editIndex: null }),

  saveDb: (patch) => {
    const db = typeof patch === "function" ? patch(get().db) : { ...get().db, ...patch };
    persist(db);
    set({ db });
  },

  saveEmployee: (emp, idx) => {
    get().saveDb((db) => {
      const employees = [...db.employees];
      if (idx != null && employees[idx]) employees[idx] = emp;
      else {
        if (!emp.code) {
          emp.code = "EMP" + String(employees.length + 1).padStart(4, "0");
          const codes = new Set(employees.map((e) => e.code));
          let n = employees.length + 1;
          while (codes.has(emp.code)) {
            n += 1;
            emp.code = "EMP" + String(n).padStart(4, "0");
          }
        }
        if (!emp.jobNo) emp.jobNo = "J" + emp.code.slice(3);
        emp.balYear ||= db.settings.defaultBalance || 30;
        emp.balUsed ||= 0;
        emp.balNow = emp.balYear - emp.balUsed;
        employees.push(emp);
      }
      return { ...db, employees };
    });
    get().flash("تم حفظ الموظف");
    get().closeModal();
  },

  saveLeave: (leave, idx) => {
    const db = get().db;
    const emp = db.employees.find((e) => e.code === leave.empCode);
    if (!emp) return "حدد الموظف";
    if (!leave.from || !leave.to) return "حدد فترة الإجازة";
    const wd = workDays(db, leave.from, leave.to, true);
    const days = calendarDays(leave.from, leave.to);
    const lt = db.leaveTypes.find((t) => t.name === leave.type);
    const rec: Leave = {
      ...leave,
      empName: emp.name,
      dept: emp.dept,
      days,
      workDays: wd,
      holDays: Math.max(0, days - wd),
      id: idx != null ? db.leaves[idx]!.id : nextId("LEV-", db.leaves.map((l) => l.id)),
      registeredAt: idx != null ? db.leaves[idx]!.registeredAt : todayYmd(),
      user: get().user?.name || "مدير",
    };

    const affects = lt?.affectsBalance && rec.status === "معتمدة";
    get().saveDb((cur) => {
      const employees = cur.employees.map((e) => ({ ...e }));
      const leaves = [...cur.leaves];
      const apply = (sign: 1 | -1, row: Leave) => {
        if (!lt?.affectsBalance || row.status !== "معتمدة") return;
        const i = employees.findIndex((e) => e.code === row.empCode);
        if (i < 0) return;
        employees[i]!.balUsed = Math.max(0, employees[i]!.balUsed + sign * row.workDays);
        employees[i]!.balNow = employees[i]!.balYear - employees[i]!.balUsed;
      };
      if (idx != null && leaves[idx]) {
        apply(-1, leaves[idx]!);
        leaves[idx] = rec;
        if (affects) apply(1, rec);
      } else {
        if (affects) apply(1, rec);
        leaves.push(rec);
      }
      return { ...cur, employees, leaves };
    });
    get().flash(idx != null ? "تم تعديل الإجازة" : `تم — ${rec.id}`);
    get().closeModal();
    return null;
  },

  savePerm: (perm, idx) => {
    const db = get().db;
    const emp = db.employees.find((e) => e.code === perm.empCode);
    if (!emp) return "حدد الموظف";
    if (!perm.date) return "حدد تاريخ الإذن";
    const mins = timeRangeMinutes(perm.from, perm.to);
    if (mins <= 0) return "المدة غير صحيحة";
    const duration = hoursLabelFromRange(perm.from, perm.to);

    if ((perm.status || "معتمدة") === "معتمدة") {
      const chk = checkPermLimits(
        db,
        emp,
        perm.type,
        perm.date,
        mins,
        idx != null ? db.permissions[idx]?.id : undefined,
      );
      if (!chk.ok) {
        const v = chk.violations[0]!;
        const win =
          v.limit.window === "day" ? "يومياً" : v.limit.window === "month" ? "شهرياً" : "إجمالاً";
        return `تجاوز الحد «${v.limit.name}» (${v.limit.maxHours} ساعة ${win}). المستخدم ${Math.round((v.usedMinutes / 60) * 10) / 10}س + المطلوب ${Math.round((v.addMinutes / 60) * 10) / 10}س.`;
      }
      const pt = db.permTypes.find((t) => t.name === perm.type);
      if (pt && pt.monthlyCount > 0) {
        const used = monthlyCountUsed(
          db,
          emp.code,
          perm.type,
          perm.date.slice(0, 7),
          idx != null ? db.permissions[idx]?.id : undefined,
        );
        if (used >= pt.monthlyCount) {
          return `تجاوز الحد الشهري لعدد مرات هذا النوع (${pt.monthlyCount}).`;
        }
      }
    }

    const rec: Permission = {
      ...perm,
      empName: emp.name,
      jobNo: emp.jobNo,
      subSection: perm.subSection || emp.subSection,
      duration,
      id: idx != null ? db.permissions[idx]!.id : nextId("PER-", db.permissions.map((p) => p.id)),
      registeredAt: idx != null ? db.permissions[idx]!.registeredAt : todayYmd(),
    };
    get().saveDb((cur) => {
      const permissions = [...cur.permissions];
      if (idx != null && permissions[idx]) permissions[idx] = rec;
      else permissions.push(rec);
      return { ...cur, permissions };
    });
    get().flash(idx != null ? "تم تعديل الإذن" : `تم — ${rec.id}`);
    get().closeModal();
    return null;
  },

  saveLimit: (limit, idx) => {
    get().saveDb((db) => {
      const permLimits = [...db.permLimits];
      if (!limit.id) limit.id = nextId("LIM-", permLimits.map((x) => x.id));
      if (idx != null && permLimits[idx]) permLimits[idx] = limit;
      else permLimits.push(limit);
      return { ...db, permLimits };
    });
    get().flash("تم حفظ قاعدة الحد");
    get().closeModal();
  },

  saveUser: (user, idx) => {
    if (!user.username.trim()) return "أدخل اسم المستخدم";
    const db = get().db;
    const clash = db.users.find(
      (u, i) => u.username === user.username && (idx == null || i !== idx),
    );
    if (clash) return "اسم المستخدم مستخدم";
    get().saveDb((cur) => {
      const users = [...cur.users];
      if (idx != null && users[idx]) users[idx] = user;
      else users.push(user);
      return { ...cur, users };
    });
    get().flash("تم حفظ المستخدم");
    get().closeModal();
    return null;
  },

  saveMission: (m, idx) => {
    const db = get().db;
    const emp = db.employees.find((e) => e.code === m.empCode);
    if (!emp) return "حدد الموظف";
    if (!m.from || !m.to) return "حدد فترة المأمورية";
    const days = calendarDays(m.from, m.to);
    const rec: Mission = {
      ...m,
      empName: emp.name,
      dept: emp.dept,
      days,
      id: idx != null && db.missions[idx] ? db.missions[idx]!.id : nextId("MIS-", db.missions.map((x) => x.id)),
      date: m.date || todayYmd(),
    };
    get().saveDb((cur) => {
      const missions = [...cur.missions];
      if (idx != null && missions[idx]) missions[idx] = rec;
      else missions.push(rec);
      return { ...cur, missions };
    });
    get().flash(idx != null ? "تم تعديل المأمورية" : `تم — ${rec.id}`);
    get().closeModal();
    return null;
  },

  saveAttendance: (a, idx) => {
    const db = get().db;
    const emp = db.employees.find((e) => e.code === a.empCode);
    if (!emp) return "حدد الموظف";
    if (!a.date) return "حدد التاريخ";
    const rec: Attendance = {
      ...a,
      empName: emp.name,
      id: idx != null && db.attendance[idx]?.id ? db.attendance[idx]!.id : nextId("ABS-", db.attendance.map((x) => x.id || "")),
    };
    get().saveDb((cur) => {
      const attendance = [...cur.attendance];
      if (idx != null && attendance[idx]) attendance[idx] = rec;
      else attendance.push(rec);
      return { ...cur, attendance };
    });
    get().flash("تم حفظ سجل الحضور");
    get().closeModal();
    return null;
  },

  saveSection: (s, idx) => {
    if (!s.name.trim()) return;
    get().saveDb((db) => {
      const sections = [...db.sections];
      if (idx != null && sections[idx]) sections[idx] = s;
      else sections.push(s);
      return { ...db, sections };
    });
    get().flash("تم حفظ القسم الفرعي");
    get().closeModal();
  },

  softDel: (collection, idx) => {
    get().saveDb((db) => {
      const arr = [...(db[collection] as unknown[])];
      const item = arr[idx];
      if (item == null) return db;
      arr.splice(idx, 1);
      const trash = [
        ...db.trash,
        { collection: String(collection), deletedAt: new Date().toISOString(), data: item },
      ];
      return { ...db, [collection]: arr, trash } as AppDB;
    });
    get().flash("نُقل إلى المحذوفات");
  },

  restoreTrash: (i) => {
    get().saveDb((db) => {
      const t = db.trash[i];
      if (!t) return db;
      const trash = db.trash.filter((_, x) => x !== i);
      const key = t.collection as keyof AppDB;
      const arr = [...((db[key] as unknown[]) || []), t.data];
      return { ...db, trash, [key]: arr } as AppDB;
    });
    get().flash("تمت الاستعادة");
  },

  purgeTrash: (i) => {
    get().saveDb((db) => ({ ...db, trash: db.trash.filter((_, x) => x !== i) }));
    get().flash("حُذف نهائياً");
  },

  emptyTrash: () => {
    get().saveDb((db) => ({ ...db, trash: [] }));
    get().flash("تم تفريغ السلة");
  },

  resetSeed: () => {
    const db = emptyDb();
    persist(db);
    set({ db });
    get().flash("تمت إعادة البيانات التجريبية");
  },

  restoreBackup: () => {
    try {
      const b = localStorage.getItem(KEY + "_bak");
      if (!b) return "لا يوجد نسخ احتياطي تلقائي";
      const db = normalizeDb(JSON.parse(b) as AppDB);
      persist(db);
      set({ db });
      get().flash("تمت الاستعادة من النسخ الاحتياطي");
      return null;
    } catch {
      return "فشل الاستعادة";
    }
  },

  importJson: (raw) => {
    try {
      const data = JSON.parse(raw) as AppDB;
      if (!Array.isArray(data.employees)) return "ملف غير صالح";
      const db = normalizeDb(data);
      persist(db);
      set({ db });
      get().flash("تم الاستيراد");
      return null;
    } catch (e) {
      return e instanceof Error ? e.message : "فشل الاستيراد";
    }
  },

  exportJson: () => {
    downloadText("ديوان_" + todayYmd() + ".json", JSON.stringify(get().db, null, 2), "application/json");
    get().flash("تم التصدير");
  },
}));
