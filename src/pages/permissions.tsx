import {
  Badge,
  Button,
  Card,
  CardH,
  Input,
  Kpi,
  PageHead,
  Pager,
  paginate,
  Select,
  statusTone,
} from "@/components/ui";
import { fd, todayYmd } from "@/lib/dates";
import {
  APPLY_LABEL,
  SCOPE_LABEL,
  WINDOW_LABEL,
  hoursByType,
  isApprovedPerm,
  limitApply,
  minutesToLabel,
  monthlyCountUsed,
  scopeValueLabel,
  usedMinutesForLimit,
} from "@/lib/hours";
import { printTable } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function PermissionsPage() {
  const { db, openModal, softDel } = useApp();
  const [q, setQ] = useState("");
  const [month, setMonth] = useState(todayYmd().slice(0, 7));
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    return db.permissions.filter((p) => {
      if (month && p.date.slice(0, 7) !== month) return false;
      if (type && p.type !== type) return false;
      if (!q) return true;
      return `${p.empName} ${p.empCode} ${p.jobNo} ${p.id} ${p.type}`.toLowerCase().includes(q.toLowerCase());
    });
  }, [db.permissions, q, month, type]);

  const monthRows = db.permissions.filter((p) => p.date.slice(0, 7) === month && isApprovedPerm(p));
  const byType = hoursByType(monthRows);
  const totalMins = byType.reduce((a, x) => a + x.minutes, 0);
  const maxT = Math.max(1, ...byType.map((x) => x.minutes));
  const pg = paginate(rows, page, 12);

  return (
    <div>
      <PageHead
        title="الأذونات الشهرية"
        desc="ساعات حسب النوع · حدود يومية وشهرية على الموظف والإدارة والقسم والفئة والنوع"
        actions={
          <>
            <Button
              variant="secondary"
              onClick={() =>
                printTable(
                  db.settings.orgName,
                  `سجل الأذونات — ${month}`,
                  ["رقم", "التاريخ", "الموظف", "الرقم الوظيفي", "النوع", "من", "إلى", "المدة", "الحالة"],
                  rows.map((p) => [p.id, fd(p.date), p.empName, p.jobNo, p.type, p.from, p.to, p.duration, p.status]),
                )
              }
            >
              طباعة
            </Button>
            <Button variant="secondary" onClick={() => openModal("limit")}>
              قاعدة حد
            </Button>
            <Button onClick={() => openModal("perm")}>تسجيل إذن</Button>
          </>
        }
      />
      <div className="mb-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        <Kpi label="أذونات الفترة" value={rows.length} tone="teal" />
        <Kpi label={`شهر ${month}`} value={monthRows.length} tone="warn" />
        <Kpi label="إجمالي الساعات" value={minutesToLabel(totalMins)} tone="ok" />
        <Kpi label="أنواع مسجّلة" value={byType.length} />
      </div>

      <Card className="mb-3">
        <CardH>ساعات كل نوع — {month}</CardH>
        <div className="grid gap-3 p-4 md:grid-cols-2">
          {byType.length ? (
            byType.map((x) => (
              <div key={x.type}>
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-semibold">{x.type}</span>
                  <span className="tabular-nums text-muted">{minutesToLabel(x.minutes)}</span>
                </div>
                <div className="meter">
                  <span style={{ width: `${(x.minutes / maxT) * 100}%` }} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted">لا ساعات معتمدة هذا الشهر</p>
          )}
        </div>
      </Card>

      <Card className="mb-3">
        <CardH extra={<Button variant="ghost" onClick={() => openModal("limit")}>إضافة حد</Button>}>
          قواعد حدود الساعات
        </CardH>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>القاعدة</th>
                <th>المستوى</th>
                <th>القيمة</th>
                <th>الاحتساب</th>
                <th>الفترة</th>
                <th>الأنواع</th>
                <th>الحد (ساعة)</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {db.permLimits.map((lim, i) => (
                <tr key={lim.id}>
                  <td className="font-semibold">{lim.name}</td>
                  <td>{SCOPE_LABEL[lim.scope]}</td>
                  <td>{scopeValueLabel(lim, db)}</td>
                  <td>
                    <Badge tone={limitApply(lim) === "group" ? "info" : "muted"}>
                      {APPLY_LABEL[limitApply(lim)]}
                    </Badge>
                  </td>
                  <td>{WINDOW_LABEL[lim.window]}</td>
                  <td>{lim.types === "all" ? "كل الأنواع" : lim.types}</td>
                  <td className="tabular-nums">{lim.maxHours}</td>
                  <td>
                    <Badge tone={lim.enabled ? "ok" : "muted"}>{lim.enabled ? "مفعّل" : "متوقف"}</Badge>
                  </td>
                  <td>
                    <button className="text-xs font-semibold text-primary" onClick={() => openModal("limit", i)}>
                      تعديل
                    </button>{" "}
                    <button className="text-xs font-semibold text-err" onClick={() => softDel("permLimits", i)}>
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mb-3">
        <CardH>استهلاك حدود الساعات ({month})</CardH>
        <LimitsUsage month={month} />
      </Card>

      <Card className="mb-3">
        <CardH>حدود عدد المرات الشهرية حسب النوع</CardH>
        <CountLimits month={month} />
      </Card>

      <div className="mb-3 flex flex-wrap gap-2">
        <Input
          className="min-w-[200px] flex-1"
          placeholder="بحث..."
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
        />
        <Input
          type="month"
          className="w-40"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
            setPage(1);
          }}
        />
        <Select
          className="w-40"
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            setPage(1);
          }}
        >
          <option value="">كل الأنواع</option>
          {db.permTypes.map((t) => (
            <option key={t.code}>{t.name}</option>
          ))}
        </Select>
      </div>
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>رقم</th>
                <th>التاريخ</th>
                <th>الموظف</th>
                <th>الرقم الوظيفي</th>
                <th>النوع</th>
                <th>من</th>
                <th>إلى</th>
                <th>المدة</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((p) => {
                const i = db.permissions.indexOf(p);
                return (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{fd(p.date)}</td>
                    <td className="font-semibold">{p.empName}</td>
                    <td>{p.jobNo}</td>
                    <td>{p.type}</td>
                    <td>{p.from}</td>
                    <td>{p.to}</td>
                    <td>{p.duration}</td>
                    <td>
                      <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                    </td>
                    <td>
                      <button className="text-xs font-semibold text-primary" onClick={() => openModal("perm", i)}>
                        تعديل
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => softDel("permissions", i)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!pg.slice.length ? (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-muted">
                    لا أذونات
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
        <Pager page={pg.page} pages={pg.pages} total={pg.total} onPage={setPage} />
      </Card>
    </div>
  );
}

function LimitsUsage({ month }: { month: string }) {
  const { db } = useApp();
  const day = todayYmd();
  const enabled = db.permLimits.filter((l) => l.enabled);
  if (!enabled.length) return <p className="p-4 text-sm text-muted">لا قواعد مفعّلة</p>;

  const groupLimits = enabled.filter((l) => limitApply(l) === "group");
  const eachLimits = enabled.filter((l) => limitApply(l) === "each");

  const groupRows = groupLimits.map((limit) => {
    const date = limit.window === "day" ? day : month + "-01";
    const sample = db.employees.find((e) => e.status === "نشط") || db.employees[0];
    const used = sample ? usedMinutesForLimit(db, limit, sample, date) : 0;
    const max = limit.maxHours * 60;
    const pct = max ? Math.min(100, Math.round((used / max) * 100)) : 0;
    return { limit, used, max, pct };
  });

  const eachRows = db.employees
    .filter((e) => e.status === "نشط")
    .map((emp) => {
      const cells = eachLimits.map((limit) => {
        const date = limit.window === "day" ? day : month + "-01";
        const used = usedMinutesForLimit(db, limit, emp, date);
        const max = limit.maxHours * 60;
        const pct = max ? Math.min(100, Math.round((used / max) * 100)) : 0;
        return { limit, used, max, pct };
      });
      return { emp, cells };
    })
    .filter((r) => r.cells.some((c) => c.used > 0));

  return (
    <div className="space-y-3 p-0">
      {groupRows.length ? (
        <div className="p-3">
          <div className="mb-2 text-xs font-bold text-muted">حدود مشتركة (مجموع المستوى)</div>
          <div className="grid gap-2 md:grid-cols-2">
            {groupRows.map((c) => (
              <div key={c.limit.id} className="rounded-md border border-border p-3">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="font-semibold">{c.limit.name}</span>
                  <span className={`tabular-nums ${c.pct >= 100 ? "text-err" : ""}`}>
                    {minutesToLabel(c.used)} / {c.limit.maxHours}س
                  </span>
                </div>
                <div className="meter">
                  <span
                    style={{
                      width: `${c.pct}%`,
                      background: c.pct >= 100 ? "var(--color-err)" : c.pct >= 80 ? "var(--color-warn)" : undefined,
                    }}
                  />
                </div>
                <div className="mt-1 text-[11px] text-muted">
                  {SCOPE_LABEL[c.limit.scope]} · {WINDOW_LABEL[c.limit.window]}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {eachLimits.length ? (
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>الموظف</th>
                <th>الإدارة</th>
                <th>الفئة</th>
                {eachLimits.map((l) => (
                  <th key={l.id}>{l.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {eachRows.length ? (
                eachRows.map((r) => (
                  <tr key={r.emp.code}>
                    <td className="font-semibold">{r.emp.name}</td>
                    <td>{r.emp.dept}</td>
                    <td>{r.emp.grade}</td>
                    {r.cells.map((c) => (
                      <td key={c.limit.id} className={c.pct >= 100 ? "bg-err/10" : ""}>
                        <div className="text-[11px] tabular-nums">
                          {minutesToLabel(c.used)} / {c.limit.maxHours}س
                        </div>
                        <div className="meter mt-1 w-24">
                          <span
                            style={{
                              width: `${c.pct}%`,
                              background:
                                c.pct >= 100 ? "var(--color-err)" : c.pct >= 80 ? "var(--color-warn)" : undefined,
                            }}
                          />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3 + eachLimits.length} className="py-6 text-center text-muted">
                    لا استهلاك فردي ظاهر لهذه الفترة
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

function CountLimits({ month }: { month: string }) {
  const { db } = useApp();
  const types = db.permTypes.filter((t) => t.monthlyCount > 0);
  const rows = db.employees
    .filter((e) => e.status === "نشط")
    .flatMap((emp) =>
      types
        .map((t) => {
          const used = monthlyCountUsed(db, emp.code, t.name, month);
          return { emp, type: t.name, lim: t.monthlyCount, used, rem: Math.max(0, t.monthlyCount - used) };
        })
        .filter((r) => r.used > 0),
    );
  if (!rows.length) return <p className="p-4 text-sm text-muted">لا استخدام لحدود العدد هذا الشهر</p>;
  return (
    <div className="tbl-scroll">
      <table>
        <thead>
          <tr>
            <th>الموظف</th>
            <th>النوع</th>
            <th>الحد</th>
            <th>المستخدم</th>
            <th>المتبقي</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.emp.code + r.type} className={r.rem === 0 ? "bg-err/10" : ""}>
              <td>{r.emp.name}</td>
              <td>{r.type}</td>
              <td>{r.lim}</td>
              <td>{r.used}</td>
              <td>{r.rem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
