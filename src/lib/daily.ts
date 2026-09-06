import { isHoliday, isRest } from "./dates";
import { isApprovedPerm } from "./hours";
import type { AppDB, DailyRow } from "./types";

const SKIP = new Set(["منتهي الخدمة", "موقوف", "مستقيل", "منتهي", "إيقاف"]);

export function dailyRows(db: AppDB, ds: string): DailyRow[] {
  const rows: DailyRow[] = [];
  for (const emp of db.employees) {
    if (SKIP.has(emp.status)) continue;
    let st = "حاضر";
    let det = "";
    const leave = db.leaves.find(
      (l) =>
        l.empCode === emp.code &&
        (l.status === "معتمدة" || !l.status) &&
        l.from <= ds &&
        ds <= l.to,
    );
    if (leave) {
      st = "إجازة";
      det = leave.type;
    } else {
      const att = db.attendance.find((a) => a.empCode === emp.code && a.date === ds);
      if (att && att.status && att.status !== "حاضر" && att.recStatus !== "ملغاة") {
        st = att.status;
        det = att.recStatus || "";
      } else {
        const mis = db.missions.find(
          (m) =>
            m.empCode === emp.code &&
            (m.status === "معتمدة" || !m.status) &&
            m.from <= ds &&
            ds <= m.to,
        );
        if (mis) {
          st = "مأمورية";
          det = [mis.type, mis.org].filter(Boolean).join(" · ");
        } else {
          const perm = db.permissions.find(
            (p) => p.empCode === emp.code && p.date === ds && isApprovedPerm(p),
          );
          if (perm) {
            st = "إذن";
            det = `${perm.type} ${perm.from}-${perm.to}`;
          } else if (isHoliday(db, ds)) {
            st = "عطلة رسمية";
            det = db.holidays.find((h) => h.date === ds)?.name || "";
          } else if (isRest(db, ds)) {
            st = "راحة";
          }
        }
      }
    }
    rows.push({
      code: emp.code,
      name: emp.name,
      jn: emp.jobNo,
      dept: emp.dept,
      sec: emp.section,
      sub: emp.subSection,
      pos: emp.position,
      grade: emp.grade,
      st,
      det,
    });
  }
  return rows;
}

export function dailyCounts(rows: DailyRow[]) {
  const counts: Record<string, number> = {};
  for (const r of rows) counts[r.st] = (counts[r.st] || 0) + 1;
  return counts;
}
