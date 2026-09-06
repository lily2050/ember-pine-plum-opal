import { Badge, Button, Card, CardH, Input, Kpi, PageHead, Pager, paginate, Select, statusTone, Tabs } from "@/components/ui";
import { dailyCounts, dailyRows } from "@/lib/daily";
import { fd, todayYmd } from "@/lib/dates";
import { hoursByType, minutesToLabel } from "@/lib/hours";
import { printTable } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function ReportsPage() {
  const { db } = useApp();
  const [tab, setTab] = useState("daily");
  return (
    <div>
      <PageHead title="التقارير" desc="يومي · شهري · فترة · موظف · إدارة" />
      <Tabs
        items={[
          { id: "daily", label: "يومي" },
          { id: "monthly", label: "شهري" },
          { id: "range", label: "بين تاريخين" },
          { id: "emp", label: "موظف" },
          { id: "dept", label: "إدارة" },
        ]}
        value={tab}
        onChange={setTab}
      />
      {tab === "daily" ? <Daily dbOrg={db.settings.orgName} /> : null}
      {tab === "monthly" ? <Monthly /> : null}
      {tab === "range" ? <Range /> : null}
      {tab === "emp" ? <EmpRep /> : null}
      {tab === "dept" ? <DeptRep /> : null}
    </div>
  );
}

function Daily({ dbOrg }: { dbOrg: string }) {
  const { db } = useApp();
  const [day, setDay] = useState(todayYmd());
  const [q, setQ] = useState("");
  const [st, setSt] = useState("");
  const [dept, setDept] = useState("");
  const [page, setPage] = useState(1);
  const all = useMemo(() => dailyRows(db, day), [db, day]);
  const counts = dailyCounts(all);
  const depts = [...new Set(all.map((r) => r.dept).filter(Boolean))].sort();
  const rows = all.filter((r) => {
    if (st && r.st !== st) return false;
    if (dept && r.dept !== dept) return false;
    if (q && !`${r.name} ${r.jn} ${r.dept} ${r.sec} ${r.pos} ${r.st}`.toLowerCase().includes(q.toLowerCase()))
      return false;
    return true;
  });
  const pg = paginate(rows, page, 14);
  const statuses = ["حاضر", "إجازة", "إذن", "راحة", "عطلة رسمية", "غائب", "غياب بدون إذن", "غياب بعذر"];
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <Input type="date" className="w-44" value={day} onChange={(e) => { setDay(e.target.value); setPage(1); }} />
        <Input className="min-w-[160px] flex-1" placeholder="بحث..." value={q} onChange={(e) => { setQ(e.target.value); setPage(1); }} />
        <Select className="w-36" value={st} onChange={(e) => { setSt(e.target.value); setPage(1); }}>
          <option value="">كل المواقف</option>
          {statuses.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </Select>
        <Select className="w-40" value={dept} onChange={(e) => { setDept(e.target.value); setPage(1); }}>
          <option value="">كل الإدارات</option>
          {depts.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </Select>
        <Button
          variant="secondary"
          onClick={() =>
            printTable(
              dbOrg,
              `التقرير اليومي — ${fd(day)}`,
              ["الموظف", "الرقم الوظيفي", "الإدارة", "القسم", "الوظيفة", "الموقف", "التفاصيل"],
              rows.map((r) => [r.name, r.jn, r.dept, r.sec, r.pos, r.st, r.det]),
            )
          }
        >
          طباعة
        </Button>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Kpi label="المعروض / الإجمالي" value={`${rows.length} / ${all.length}`} tone="teal" />
        <Kpi label="حاضر" value={counts["حاضر"] || 0} tone="ok" />
        <Kpi label="إجازة" value={counts["إجازة"] || 0} tone="warn" />
        <Kpi label="إذن" value={counts["إذن"] || 0} />
      </div>
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>الموظف</th>
                <th>الرقم الوظيفي</th>
                <th>الإدارة</th>
                <th>القسم</th>
                <th>الوظيفة</th>
                <th>الموقف</th>
                <th>التفاصيل</th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((r) => (
                <tr key={r.code}>
                  <td className="font-semibold">{r.name}</td>
                  <td>{r.jn}</td>
                  <td>{r.dept}</td>
                  <td>{r.sec}</td>
                  <td>{r.pos}</td>
                  <td>
                    <Badge tone={statusTone(r.st)}>{r.st}</Badge>
                  </td>
                  <td>{r.det}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pager page={pg.page} pages={pg.pages} total={pg.total} onPage={setPage} />
      </Card>
    </>
  );
}

function Monthly() {
  const { db } = useApp();
  const [month, setMonth] = useState(todayYmd().slice(0, 7));
  const [q, setQ] = useState("");
  const from = month + "-01";
  const last = new Date(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0).getDate();
  const to = month + "-" + String(last).padStart(2, "0");
  const leaves = db.leaves.filter((l) => l.from >= from && l.from <= to && l.status !== "ملغاة");
  const perms = db.permissions.filter((p) => p.date >= from && p.date <= to && p.status === "معتمدة");
  const hours = hoursByType(perms);
  const byType: Record<string, number> = {};
  leaves.forEach((l) => {
    byType[l.type] = (byType[l.type] || 0) + (l.workDays || 0);
  });
  const filtered = leaves.filter((l) =>
    q ? `${l.empName} ${l.type} ${l.id}`.toLowerCase().includes(q.toLowerCase()) : true,
  );
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <Input type="month" className="w-44" value={month} onChange={(e) => setMonth(e.target.value)} />
        <Input className="min-w-[160px] flex-1" placeholder="تصفية الإجازات..." value={q} onChange={(e) => setQ(e.target.value)} />
        <Button
          variant="secondary"
          onClick={() =>
            printTable(
              db.settings.orgName,
              `التقرير الشهري — ${month}`,
              ["الموظف", "النوع", "من", "إلى", "أيام عمل"],
              filtered.map((l) => [l.empName, l.type, fd(l.from), fd(l.to), l.workDays]),
            )
          }
        >
          طباعة
        </Button>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Kpi label="إجازات" value={leaves.length} tone="warn" />
        <Kpi label="أيام عمل مخصومة" value={Object.values(byType).reduce((a, n) => a + n, 0)} tone="teal" />
        <Kpi label="أذونات" value={perms.length} />
        <Kpi label="ساعات الأذونات" value={minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0))} tone="ok" />
      </div>
      <div className="mb-3 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardH>توزيع أيام الإجازات</CardH>
          <div className="p-4 text-sm">
            {Object.keys(byType).length ? (
              Object.entries(byType).map(([k, v]) => (
                <div key={k} className="mb-1 flex justify-between">
                  <span>{k}</span>
                  <b>{v}</b>
                </div>
              ))
            ) : (
              <p className="text-muted">لا بيانات</p>
            )}
          </div>
        </Card>
        <Card>
          <CardH>توزيع ساعات الأذونات</CardH>
          <div className="p-4 text-sm">
            {hours.length ? (
              hours.map((h) => (
                <div key={h.type} className="mb-1 flex justify-between">
                  <span>{h.type}</span>
                  <b>{minutesToLabel(h.minutes)}</b>
                </div>
              ))
            ) : (
              <p className="text-muted">لا بيانات</p>
            )}
          </div>
        </Card>
      </div>
      <Card>
        <CardH>إجازات الشهر</CardH>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>الموظف</th>
                <th>النوع</th>
                <th>من</th>
                <th>إلى</th>
                <th>أيام عمل</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((l) => (
                <tr key={l.id}>
                  <td>{l.empName}</td>
                  <td>{l.type}</td>
                  <td>{fd(l.from)}</td>
                  <td>{fd(l.to)}</td>
                  <td>{l.workDays}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

function Range() {
  const { db } = useApp();
  const [from, setFrom] = useState(todayYmd().slice(0, 8) + "01");
  const [to, setTo] = useState(todayYmd());
  const [q, setQ] = useState("");
  const leaves = db.leaves.filter((l) => {
    if (l.status === "ملغاة") return false;
    if (l.to < from || l.from > to) return false;
    if (q && !`${l.empName} ${l.type} ${l.id}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const perms = db.permissions.filter((p) => p.date >= from && p.date <= to);
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <Input type="date" className="w-40" value={from} onChange={(e) => setFrom(e.target.value)} />
        <Input type="date" className="w-40" value={to} onChange={(e) => setTo(e.target.value)} />
        <Input className="min-w-[160px] flex-1" placeholder="تصفية..." value={q} onChange={(e) => setQ(e.target.value)} />
        <Button
          variant="secondary"
          onClick={() =>
            printTable(
              db.settings.orgName,
              `تقرير الفترة ${fd(from)} ← ${fd(to)}`,
              ["نوع", "رقم", "الموظف", "التفاصيل", "من", "إلى"],
              [
                ...leaves.map((l) => ["إجازة", l.id, l.empName, l.type, fd(l.from), fd(l.to)]),
                ...perms.map((p) => ["إذن", p.id, p.empName, `${p.type} · ${p.duration}`, fd(p.date), ""]),
              ],
            )
          }
        >
          طباعة
        </Button>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        <Kpi label="إجازات" value={leaves.length} tone="warn" />
        <Kpi label="أذونات" value={perms.length} />
      </div>
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>نوع</th>
                <th>رقم</th>
                <th>الموظف</th>
                <th>التفاصيل</th>
                <th>من</th>
                <th>إلى</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((l) => (
                <tr key={l.id}>
                  <td>
                    <Badge tone="warn">إجازة</Badge>
                  </td>
                  <td>{l.id}</td>
                  <td>{l.empName}</td>
                  <td>{l.type}</td>
                  <td>{fd(l.from)}</td>
                  <td>{fd(l.to)}</td>
                </tr>
              ))}
              {perms.map((p) => (
                <tr key={p.id}>
                  <td>
                    <Badge tone="info">إذن</Badge>
                  </td>
                  <td>{p.id}</td>
                  <td>{p.empName}</td>
                  <td>
                    {p.type} · {p.duration}
                  </td>
                  <td>{fd(p.date)}</td>
                  <td>—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

function EmpRep() {
  const { db, setProfile } = useApp();
  const [emp, setEmp] = useState("");
  const e = db.employees.find((x) => x.code === emp);
  const leaves = e ? db.leaves.filter((l) => l.empCode === e.code) : [];
  const perms = e ? db.permissions.filter((p) => p.empCode === e.code) : [];
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <Select className="max-w-sm flex-1" value={emp} onChange={(ev) => setEmp(ev.target.value)}>
          <option value="">اختر موظفاً</option>
          {db.employees.map((x) => (
            <option key={x.code} value={x.code}>
              {x.name} — {x.jobNo}
            </option>
          ))}
        </Select>
        {e ? (
          <Button variant="secondary" onClick={() => setProfile(e.code)}>
            فتح الملف
          </Button>
        ) : null}
      </div>
      {!e ? (
        <p className="text-sm text-muted">اختر موظفاً لعرض تقريره</p>
      ) : (
        <>
          <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
            <Kpi label="إجازات" value={leaves.length} tone="warn" />
            <Kpi label="أذونات" value={perms.length} />
            <Kpi label="رصيد حالي" value={e.balNow} tone="ok" />
          </div>
          <Card>
            <div className="tbl-scroll">
              <table>
                <thead>
                  <tr>
                    <th>نوع</th>
                    <th>رقم</th>
                    <th>تفاصيل</th>
                    <th>من</th>
                    <th>إلى</th>
                    <th>حالة</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((l) => (
                    <tr key={l.id}>
                      <td>إجازة</td>
                      <td>{l.id}</td>
                      <td>{l.type}</td>
                      <td>{fd(l.from)}</td>
                      <td>{fd(l.to)}</td>
                      <td>
                        <Badge tone={statusTone(l.status)}>{l.status}</Badge>
                      </td>
                    </tr>
                  ))}
                  {perms.map((p) => (
                    <tr key={p.id}>
                      <td>إذن</td>
                      <td>{p.id}</td>
                      <td>
                        {p.type} · {p.duration}
                      </td>
                      <td>{fd(p.date)}</td>
                      <td>—</td>
                      <td>
                        <Badge tone={statusTone(p.status)}>{p.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </>
  );
}

function DeptRep() {
  const { db, setProfile } = useApp();
  const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
  const [d, setD] = useState("");
  const [q, setQ] = useState("");
  const emps = db.employees.filter((e) => {
    if (e.dept !== d) return false;
    if (q && !`${e.name} ${e.jobNo} ${e.section} ${e.position}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });
  const hours = hoursByType(db.permissions.filter((p) => emps.some((e) => e.code === p.empCode)));
  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <Select className="max-w-sm flex-1" value={d} onChange={(e) => setD(e.target.value)}>
          <option value="">اختر إدارة</option>
          {depts.map((x) => (
            <option key={x}>{x}</option>
          ))}
        </Select>
        <Input className="w-48" placeholder="تصفية..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {!d ? (
        <p className="text-sm text-muted">اختر إدارة</p>
      ) : (
        <>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <Kpi label="موظفون" value={emps.length} tone="teal" />
            <Kpi label="ساعات أذونات المجموعة" value={minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0))} />
          </div>
          <Card>
            <div className="tbl-scroll">
              <table>
                <thead>
                  <tr>
                    <th>الرقم الوظيفي</th>
                    <th>الاسم</th>
                    <th>القسم</th>
                    <th>الوظيفة</th>
                    <th>الفئة</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {emps.map((e) => (
                    <tr key={e.code}>
                      <td>{e.jobNo}</td>
                      <td className="font-semibold">{e.name}</td>
                      <td>{e.section}</td>
                      <td>{e.position}</td>
                      <td>{e.grade}</td>
                      <td>
                        <button className="text-xs font-semibold text-primary" onClick={() => setProfile(e.code)}>
                          الملف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}
    </>
  );
}
