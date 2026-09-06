import type { AppDB } from "./types";
import { todayYmd } from "./dates";

declare global {
  interface Window {
    XLSX?: {
      utils: {
        json_to_sheet: (rows: unknown[]) => unknown;
        book_new: () => unknown;
        book_append_sheet: (wb: unknown, ws: unknown, name: string) => void;
        sheet_to_json: (ws: unknown) => Record<string, unknown>[];
      };
      writeFile: (wb: unknown, name: string) => void;
      read: (data: ArrayBuffer, opts: { type: string }) => { SheetNames: string[]; Sheets: Record<string, unknown> };
    };
  }
}

export async function loadXlsx() {
  if (window.XLSX) return window.XLSX;
  await new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "/xlsx.full.min.js";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("تعذر تحميل مكتبة Excel"));
    document.head.appendChild(s);
  });
  if (!window.XLSX) throw new Error("مكتبة Excel غير متاحة");
  return window.XLSX;
}

function empToAr(e: AppDB["employees"][number]) {
  return {
    "كود الموظف": e.code,
    "الرقم الوظيفي": e.jobNo,
    "اسم الموظف": e.name,
    "English Name": e.enName || "",
    "الرقم القومي": e.nationalId,
    الإدارة: e.dept,
    القسم: e.section,
    "القسم الفرعي": e.subSection,
    الوظيفة: e.position,
    الدرجة: e.grade,
    "تاريخ التعيين": e.hiredAt,
    "تاريخ الميلاد": e.birth,
    النوع: e.gender,
    "حالة الموظف": e.status,
    "رقم الهاتف": e.phone,
    "البريد الإلكتروني": e.email,
    "المدير المباشر": e.manager,
    "حالة اجتماعية": e.marital || "",
    "الرقم التأميني": e.insurance || "",
    الأساسي: e.salary ?? "",
    "نسبة بدل المخاطر %": e.hazardPct ?? "",
    العنوان: e.address || "",
    "الرصيد السنوي": e.balYear,
    "الرصيد المستخدم": e.balUsed,
    "الرصيد الحالي": e.balNow,
    ملاحظات: e.notes,
  };
}

function empFromAr(r: Record<string, unknown>) {
  const n = (k: string) => String(r[k] ?? "").trim();
  const num = (k: string) => Number(r[k] || 0);
  return {
    code: n("كود الموظف"),
    jobNo: n("الرقم الوظيفي"),
    name: n("اسم الموظف"),
    enName: n("English Name"),
    nationalId: n("الرقم القومي"),
    dept: n("الإدارة"),
    section: n("القسم"),
    subSection: n("القسم الفرعي"),
    position: n("الوظيفة"),
    grade: n("الدرجة"),
    hiredAt: n("تاريخ التعيين").slice(0, 10),
    birth: n("تاريخ الميلاد").slice(0, 10),
    gender: n("النوع"),
    status: n("حالة الموظف") || "نشط",
    phone: n("رقم الهاتف"),
    email: n("البريد الإلكتروني"),
    manager: n("المدير المباشر"),
    marital: n("حالة اجتماعية"),
    insurance: n("الرقم التأميني"),
    salary: r["الأساسي"] ?? "",
    hazardPct: r["نسبة بدل المخاطر %"] ?? "",
    address: n("العنوان"),
    balYear: num("الرصيد السنوي") || 30,
    balUsed: num("الرصيد المستخدم"),
    balNow: num("الرصيد الحالي") || num("الرصيد السنوي") || 30,
    notes: n("ملاحظات"),
  };
}

export async function exportExcel(db: AppDB) {
  const XLSX = await loadXlsx();
  const wb = XLSX.utils.book_new();
  const sheets: Record<string, unknown[]> = {
    Employees: db.employees.map(empToAr),
    Leave_Transactions: db.leaves.map((l) => ({
      "رقم الحركة": l.id,
      التاريخ: l.date,
      "كود الموظف": l.empCode,
      "اسم الموظف": l.empName,
      الإدارة: l.dept,
      "نوع الإجازة": l.type,
      "تاريخ البداية": l.from,
      "تاريخ النهاية": l.to,
      "عدد الأيام": l.days,
      "أيام العمل": l.workDays,
      "أيام العطلات": l.holDays,
      "حالة الإجازة": l.status,
      "رقم القرار": l.decision,
      ملاحظات: l.notes,
    })),
    Permissions: db.permissions.map((p) => ({
      "رقم الإذن": p.id,
      التاريخ: p.date,
      "كود الموظف": p.empCode,
      "اسم الموظف": p.empName,
      "الرقم الوظيفي": p.jobNo,
      "القسم الفرعي": p.subSection,
      "نوع الإذن": p.type,
      "من وقت": p.from,
      "إلى وقت": p.to,
      المدة: p.duration,
      "حالة الإذن": p.status,
      ملاحظات: p.notes,
    })),
    Missions: db.missions.map((m) => ({
      "رقم المأمورية": m.id,
      التاريخ: m.date,
      "كود الموظف": m.empCode,
      "اسم الموظف": m.empName,
      "نوع المأمورية": m.type,
      "جهة المأمورية": m.org,
      "من تاريخ": m.from,
      "إلى تاريخ": m.to,
      "عدد الأيام": m.days,
      "حالة المأمورية": m.status,
    })),
    Attendance: db.attendance.map((a) => ({
      "رقم الحركة": a.id,
      التاريخ: a.date,
      "كود الموظف": a.empCode,
      "اسم الموظف": a.empName,
      الموقف: a.status,
      "وقت الحضور": a.in,
      "وقت الانصراف": a.out,
    })),
    Leave_Types: db.leaveTypes.map((t) => ({ "كود النوع": t.code, "اسم النوع": t.name, "يؤثر على الرصيد": t.affectsBalance ? "نعم" : "لا" })),
    Permission_Types: db.permTypes.map((t) => ({ "كود النوع": t.code, "اسم النوع": t.name, "الحد الشهري": t.monthlyCount })),
    Perm_Limits: db.permLimits,
    Holidays: db.holidays.map((h) => ({ التاريخ: h.date, "اسم العطلة": h.name })),
    Departments: db.departments.map((d) => ({ "كود الإدارة": d.code, "اسم الإدارة": d.name })),
    Sections: db.sections.map((s) => ({ "اسم القسم الفرعي": s.name, "القسم الأصلي": s.parent, الإدارة: s.dept })),
  };
  for (const [name, rows] of Object.entries(sheets)) {
    const ws = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.book_append_sheet(wb, ws, name);
  }
  XLSX.writeFile(wb, `ديوان_${todayYmd()}.xlsx`);
}

export async function importExcel(file: File): Promise<Partial<AppDB>> {
  const XLSX = await loadXlsx();
  const buf = await file.arrayBuffer();
  const wb = XLSX.read(buf, { type: "array" });
  const json = (name: string) => {
    const sheet = wb.Sheets[name];
    if (!sheet) return [];
    return XLSX.utils.sheet_to_json(sheet);
  };
  const patch: Partial<AppDB> = {};
  const emps = json("Employees");
  if (emps.length) patch.employees = emps.map(empFromAr).filter((e) => e.name || e.code);
  return patch;
}
