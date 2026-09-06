import type { AppDB } from "./types";

const DAY_NAMES = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

export function todayYmd() {
  const d = new Date();
  const z = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

export function fd(v?: string) {
  if (!v) return "—";
  const s = String(v).slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return v;
  const [y, m, d] = s.split("-");
  return `${d}/${m}/${y}`;
}

export function isRest(db: AppDB, ymd: string) {
  const rest = db.settings.restDays?.length
    ? db.settings.restDays
    : ["الجمعة", "السبت"];
  const dt = new Date(ymd + "T12:00:00");
  return rest.includes(DAY_NAMES[dt.getDay()] || "");
}

export function isHoliday(db: AppDB, ymd: string) {
  return (db.holidays || []).some((h) => h.date === ymd);
}

export function workDays(db: AppDB, from: string, to: string, deductHol = true) {
  if (!from || !to) return 0;
  const s = new Date(from + "T12:00:00");
  const e = new Date(to + "T12:00:00");
  if (e < s) return 0;
  let c = 0;
  for (const t = new Date(s); t <= e; t.setDate(t.getDate() + 1)) {
    const y = t.getFullYear();
    const m = String(t.getMonth() + 1).padStart(2, "0");
    const d = String(t.getDate()).padStart(2, "0");
    const ds = `${y}-${m}-${d}`;
    if (isRest(db, ds)) continue;
    if (deductHol && isHoliday(db, ds)) continue;
    c++;
  }
  return c;
}

export function calendarDays(from: string, to: string) {
  if (!from || !to) return 0;
  const s = new Date(from + "T12:00:00").getTime();
  const e = new Date(to + "T12:00:00").getTime();
  if (e < s) return 0;
  return Math.round((e - s) / 86400000) + 1;
}

export function nextId(prefix: string, ids: string[]) {
  let mx = 0;
  for (const id of ids) {
    if (!id.startsWith(prefix)) continue;
    const n = Number.parseInt(id.replace(/\D/g, ""), 10);
    if (n > mx) mx = n;
  }
  return prefix + String(mx + 1).padStart(6, "0");
}
