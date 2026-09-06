import { Badge, Button, Card, CardH, Input, Kpi, statusTone } from "@/components/ui";
import { dailyCounts, dailyRows } from "@/lib/daily";
import { fd, todayYmd } from "@/lib/dates";
import { hoursByType, minutesToLabel } from "@/lib/hours";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function DashboardPage() {
  const { db, setPage, user, openModal } = useApp();
  const [day, setDay] = useState(todayYmd());
  const month = day.slice(0, 7);
  const daily = useMemo(() => dailyRows(db, day), [db, day]);
  const counts = dailyCounts(daily);
  const active = db.employees.filter((e) => e.status === "نشط" || e.status === "موظفين دائمين").length;
  const monthLeaves = db.leaves.filter((l) => l.from.slice(0, 7) === month && l.status === "معتمدة");
  const monthPerms = db.permissions.filter((p) => p.date.slice(0, 7) === month && p.status === "معتمدة");
  const leaveDays = monthLeaves.reduce((a, l) => a + (l.workDays || 0), 0);
  const byType = hoursByType(monthPerms);
  const totalMins = byType.reduce((a, x) => a + x.minutes, 0);
  const max = Math.max(1, ...byType.map((x) => x.minutes));
  const byDept: Record<string, number> = {};
  db.employees.forEach((e) => {
    const k = e.dept || "غير محدد";
    byDept[k] = (byDept[k] || 0) + 1;
  });
  const mxD = Math.max(1, ...Object.values(byDept));
  const byLeave: Record<string, number> = {};
  monthLeaves.forEach((l) => {
    byLeave[l.type] = (byLeave[l.type] || 0) + (l.workDays || 0);
  });
  const mxL = Math.max(1, ...Object.values(byLeave));

  const kpiMap: Record<string, { l: string; v: number | string; t?: "ok" | "warn" | "err" | "teal" }> = {
    emps: { l: "الموظفون النشطون", v: active, t: "teal" },
    present: { l: "حاضر", v: counts["حاضر"] || 0, t: "ok" },
    absent: { l: "غائب اليوم", v: (counts["غائب"] || 0) + (counts["غياب بدون إذن"] || 0) + (counts["غياب بعذر"] || 0), t: "err" },
    leaves: { l: "إجازة اليوم", v: counts["إجازة"] || 0, t: "warn" },
    perms: { l: "إذن اليوم", v: counts["إذن"] || 0 },
    missions: { l: "مأمورية اليوم", v: counts["مأمورية"] || 0 },
    balance: { l: "مجموع الأرصدة", v: db.employees.reduce((a, e) => a + (e.balNow || 0), 0), t: "teal" },
    hours: { l: "ساعات الأذونات", v: minutesToLabel(totalMins), t: "ok" },
    used: { l: "أيام مستخدمة", v: db.employees.reduce((a, e) => a + (e.balUsed || 0), 0), t: "warn" },
    approved: { l: "إجازات معتمدة", v: db.leaves.filter((l) => l.status === "معتمدة").length },
    sections: { l: "أقسام فرعية", v: db.sections.length },
  };
  const widgets = (db.settings.dashWidgets?.length
    ? db.settings.dashWidgets
    : ["emps", "present", "leaves", "perms", "hours", "balance"]
  ).filter((k) => kpiMap[k]);

  const recent = [
    ...db.leaves.slice(-8).map((l) => ({
      k: l.id,
      t: "إجازة",
      name: l.empName,
      det: `${l.type} · ${l.workDays} يوم`,
      d: l.from || l.date,
    })),
    ...db.permissions.slice(-8).map((p) => ({
      k: p.id,
      t: "إذن",
      name: p.empName,
      det: `${p.type} · ${p.duration}`,
      d: p.date,
    })),
    ...db.missions.slice(-6).map((m) => ({
      k: m.id,
      t: "مأمورية",
      name: m.empName,
      det: `${m.type} · ${m.org}`,
      d: m.from || m.date,
    })),
  ]
    .sort((a, b) => String(b.d).localeCompare(String(a.d)))
    .slice(0, 12);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-[22px] font-extrabold">لوحة التحكم</h1>
          <p className="text-xs text-muted">
            مرحباً {user?.name} · مؤشرات اليوميات والأذونات — {fd(day)}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Input type="date" className="w-44" value={day} onChange={(e) => setDay(e.target.value)} />
          <Button variant="secondary" onClick={() => openModal("dash")}>
            تخصيص اللوحة
          </Button>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {widgets.map((k) => {
          const x = kpiMap[k]!;
          return <Kpi key={k} label={x.l} value={x.v} tone={x.t} />;
        })}
      </div>
      <div className="mb-4 grid gap-3 lg:grid-cols-3">
        <Card>
          <CardH extra={<button className="text-xs text-primary" onClick={() => setPage("reports")}>تقرير</button>}>
            الموقف اليومي
          </CardH>
          <div className="space-y-2 p-4">
            {["حاضر", "إجازة", "إذن", "مأمورية", "راحة", "عطلة رسمية", "غياب بعذر", "غياب بدون إذن"].map((k) => (
              <div key={k} className="flex items-center gap-2 text-xs">
                <span className="w-28 text-muted">{k}</span>
                <div className="meter flex-1">
                  <span style={{ width: `${daily.length ? ((counts[k] || 0) / daily.length) * 100 : 0}%` }} />
                </div>
                <span className="w-8 text-left font-semibold tabular-nums">{counts[k] || 0}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardH extra={<button className="text-xs text-primary" onClick={() => setPage("permissions")}>التفاصيل</button>}>
            ساعات الأذونات حسب النوع
          </CardH>
          <div className="space-y-2 p-4">
            {byType.length ? (
              byType.map((x) => (
                <div key={x.type} className="flex items-center gap-2 text-xs">
                  <span className="w-24 truncate text-muted">{x.type}</span>
                  <div className="meter flex-1">
                    <span style={{ width: `${(x.minutes / max) * 100}%` }} />
                  </div>
                  <span className="w-20 text-left font-semibold tabular-nums">{minutesToLabel(x.minutes)}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted">لا أذونات هذا الشهر</p>
            )}
          </div>
        </Card>
        <Card>
          <CardH>الموظفون حسب الإدارة</CardH>
          <div className="space-y-2 p-4">
            {Object.entries(byDept)
              .sort((a, b) => b[1] - a[1])
              .map(([k, v]) => (
                <div key={k} className="flex items-center gap-2 text-xs">
                  <span className="w-28 truncate text-muted">{k}</span>
                  <div className="meter flex-1">
                    <span style={{ width: `${(v / mxD) * 100}%` }} />
                  </div>
                  <span className="w-8 text-left font-semibold tabular-nums">{v}</span>
                </div>
              ))}
          </div>
        </Card>
      </div>
      <div className="mb-4 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardH>أيام الإجازات حسب النوع ({leaveDays} يوم عمل)</CardH>
          <div className="space-y-2 p-4">
            {Object.keys(byLeave).length ? (
              Object.entries(byLeave)
                .sort((a, b) => b[1] - a[1])
                .map(([k, v]) => (
                  <div key={k} className="flex items-center gap-2 text-xs">
                    <span className="w-32 truncate text-muted">{k}</span>
                    <div className="meter flex-1">
                      <span style={{ width: `${(v / mxL) * 100}%` }} />
                    </div>
                    <span className="w-10 text-left font-semibold tabular-nums">{v}</span>
                  </div>
                ))
            ) : (
              <p className="p-2 text-sm text-muted">لا إجازات هذا الشهر</p>
            )}
          </div>
        </Card>
        <Card>
          <CardH
            extra={
              <span className="flex gap-2">
                <button className="text-xs text-primary" onClick={() => setPage("leaves")}>
                  الإجازات
                </button>
                <button className="text-xs text-primary" onClick={() => setPage("permissions")}>
                  الأذونات
                </button>
                <button className="text-xs text-primary" onClick={() => setPage("missions")}>
                  المأموريات
                </button>
              </span>
            }
          >
            آخر الحركات
          </CardH>
          <div className="divide-y divide-border">
            {recent.map((r) => (
              <div key={r.k} className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-[11px] text-muted">{r.det}</div>
                </div>
                <div className="text-left">
                  <Badge tone={r.t === "إذن" ? "info" : r.t === "مأمورية" ? "work" : "warn"}>{r.t}</Badge>
                  <div className="mt-0.5 text-[11px] text-muted">{fd(r.d)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
