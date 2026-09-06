import type {
  AppDB,
  Employee,
  LimitApply,
  LimitCheck,
  PermLimit,
  Permission,
} from "./types";

export function durationToMinutes(s: string): number {
  if (!s) return 0;
  const h = s.match(/(\d+)\s*س/) || s.match(/(\d+)\s*ساعة/);
  const m = s.match(/(\d+)\s*د/);
  if (!h && !m) {
    const n = Number.parseFloat(s);
    return Number.isNaN(n) ? 0 : Math.round(n * 60);
  }
  return (h ? Number(h[1]) * 60 : 0) + (m ? Number(m[1]) : 0);
}

export function minutesToLabel(mins: number): string {
  const n = Math.max(0, Math.round(mins));
  const h = Math.floor(n / 60);
  const m = n % 60;
  if (h && m) return `${h} س ${m} د`;
  if (h) return h === 1 ? "ساعة واحدة" : `${h} ساعة`;
  return `${m} دقيقة`;
}

export function timeRangeMinutes(from: string, to: string): number {
  if (!from || !to) return 0;
  const [sh, sm] = from.split(":").map(Number);
  const [eh, em] = to.split(":").map(Number);
  let mins = eh * 60 + em - (sh * 60 + sm);
  if (mins < 0) mins += 24 * 60;
  return mins;
}

export function hoursLabelFromRange(from: string, to: string): string {
  return minutesToLabel(timeRangeMinutes(from, to));
}

function inWindow(window: PermLimit["window"], date: string, permDate: string) {
  if (window === "all") return true;
  if (window === "day") return permDate === date;
  return permDate.slice(0, 7) === date.slice(0, 7);
}

export function limitApply(limit: PermLimit): LimitApply {
  if (limit.apply === "each" || limit.apply === "group") return limit.apply;
  if (limit.scope === "department" || limit.scope === "section") return "group";
  return "each";
}

export function empMatchesScope(limit: PermLimit, emp: Employee, permType: string) {
  switch (limit.scope) {
    case "all":
      return true;
    case "employee":
      return emp.code === limit.scopeValue;
    case "department":
      return emp.dept === limit.scopeValue;
    case "section":
      return emp.section === limit.scopeValue;
    case "jobCategory":
      return emp.grade === limit.scopeValue;
    case "permType":
      return permType === limit.scopeValue;
    default:
      return false;
  }
}

export function typeMatches(limit: PermLimit, permType: string) {
  if (limit.types === "all") return true;
  return permType === limit.types;
}

export function isApprovedPerm(p: Permission) {
  return (p.status || "معتمدة") !== "ملغاة" && p.status !== "مسودة";
}

export function usedMinutesForLimit(
  db: AppDB,
  limit: PermLimit,
  emp: Employee,
  date: string,
  excludeId?: string,
) {
  const apply = limitApply(limit);
  return db.permissions.reduce((sum, p) => {
    if (excludeId && p.id === excludeId) return sum;
    if (!isApprovedPerm(p)) return sum;
    if (!inWindow(limit.window, date, p.date)) return sum;
    if (!typeMatches(limit, p.type)) return sum;
    const pe = db.employees.find((e) => e.code === p.empCode);
    if (!pe) return sum;
    if (apply === "each") {
      if (p.empCode !== emp.code) return sum;
      return sum + durationToMinutes(p.duration);
    }
    if (!empMatchesScope(limit, pe, p.type)) return sum;
    return sum + durationToMinutes(p.duration);
  }, 0);
}

export function checkPermLimits(
  db: AppDB,
  emp: Employee,
  permType: string,
  date: string,
  addMinutes: number,
  excludeId?: string,
): LimitCheck {
  const violations: LimitCheck["violations"] = [];
  const matches: LimitCheck["matches"] = [];
  for (const limit of db.permLimits) {
    if (!limit.enabled) continue;
    if (!empMatchesScope(limit, emp, permType)) continue;
    if (!typeMatches(limit, permType)) continue;
    const used = usedMinutesForLimit(db, limit, emp, date, excludeId);
    const max = Math.round(limit.maxHours * 60);
    const row = { limit, usedMinutes: used, addMinutes, maxMinutes: max };
    matches.push(row);
    if (used + addMinutes > max) violations.push(row);
  }
  return { ok: violations.length === 0, violations, matches };
}

export function hoursByType(perms: Permission[]) {
  const map = new Map<string, number>();
  for (const p of perms) {
    if (!isApprovedPerm(p)) continue;
    map.set(p.type || "أخرى", (map.get(p.type || "أخرى") || 0) + durationToMinutes(p.duration));
  }
  return [...map.entries()]
    .map(([type, minutes]) => ({ type, minutes }))
    .sort((a, b) => b.minutes - a.minutes);
}

export function monthlyCountUsed(
  db: AppDB,
  empCode: string,
  type: string,
  month: string,
  excludeId?: string,
) {
  return db.permissions.filter((p) => {
    if (excludeId && p.id === excludeId) return false;
    if (p.status === "ملغاة") return false;
    return p.empCode === empCode && p.type === type && p.date.slice(0, 7) === month;
  }).length;
}

export const SCOPE_LABEL: Record<PermLimit["scope"], string> = {
  all: "الكل",
  employee: "موظف",
  department: "إدارة",
  section: "قسم",
  jobCategory: "فئة وظيفية",
  permType: "نوع إذن",
};

export const WINDOW_LABEL: Record<PermLimit["window"], string> = {
  day: "يومي",
  month: "شهري",
  all: "كل الأذونات",
};

export const APPLY_LABEL: Record<LimitApply, string> = {
  each: "لكل موظف",
  group: "مجموع مشترك",
};

export function scopeValueLabel(limit: PermLimit, db: AppDB) {
  if (limit.scope === "all") return "كل الموظفين";
  if (limit.scope === "employee") {
    return db.employees.find((e) => e.code === limit.scopeValue)?.name || limit.scopeValue || "—";
  }
  return limit.scopeValue || "—";
}
