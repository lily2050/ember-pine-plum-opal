import { Badge, Button, Card, CardH, Kpi, PageHead, statusTone } from "@/components/ui";
import { fd } from "@/lib/dates";
import {
  APPLY_LABEL,
  checkPermLimits,
  hoursByType,
  minutesToLabel,
} from "@/lib/hours";
import { openPrint } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function ProfilePage() {
  const { db, profileCode, setProfile, openModal } = useApp();
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [];
    return db.employees
      .filter((e) => `${e.name} ${e.code} ${e.jobNo} ${e.nationalId}`.toLowerCase().includes(s))
      .slice(0, 10);
  }, [q, db.employees]);
  const e = db.employees.find((x) => x.code === profileCode);
  const leaves = e ? db.leaves.filter((l) => l.empCode === e.code) : [];
  const perms = e ? db.permissions.filter((p) => p.empCode === e.code) : [];
  const hours = hoursByType(perms);
  const today = new Date().toISOString().slice(0, 10);

  const printProfile = () => {
    if (!e) return;
    const printDate = new Date().toLocaleDateString("ar-EG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const lv = leaves
      .map(
        (l) =>
          `<tr><td>${l.id}</td><td>${l.type}</td><td>${fd(l.from)}</td><td>${fd(l.to)}</td><td>${l.workDays}</td><td>${l.status}</td></tr>`,
      )
      .join("");
    const pr = perms
      .map(
        (p) =>
          `<tr><td>${p.id}</td><td>${fd(p.date)}</td><td>${p.type}</td><td>${p.from}</td><td>${p.to}</td><td>${p.duration}</td><td>${p.status}</td></tr>`,
      )
      .join("");
    openPrint(
      "ملف موظف",
      `<h1>${db.settings.orgName}</h1>
      <div class="print-date">تاريخ الطباعة: ${printDate}</div>
      <h2 style="margin:0 0 6px">${e.name}</h2>
      <div class="meta">${e.jobNo} · ${e.dept} · ${e.position} · فئة ${e.grade}</div>
      <h3>البيانات الأساسية</h3>
      <table><tbody>
        <tr><td>القسم</td><td>${e.section || "—"}</td><td>الهاتف</td><td>${e.phone || "—"}</td></tr>
        <tr><td>الرقم القومي</td><td>${e.nationalId || "—"}</td><td>التعيين</td><td>${fd(e.hiredAt)}</td></tr>
      </tbody></table>
      <p>الرصيد السنوي <b>${e.balYear}</b> · المستخدم <b>${e.balUsed}</b> · الحالي <b>${e.balNow}</b></p>
      <h3>الإجازات (${leaves.length})</h3>
      <table><thead><tr><th>رقم</th><th>النوع</th><th>من</th><th>إلى</th><th>أيام</th><th>الحالة</th></tr></thead><tbody>${lv || '<tr><td colspan="6">لا إجازات</td></tr>'}</tbody></table>
      <h3>الأذونات (${perms.length})</h3>
      <table><thead><tr><th>رقم</th><th>التاريخ</th><th>النوع</th><th>من</th><th>إلى</th><th>المدة</th><th>الحالة</th></tr></thead><tbody>${pr || '<tr><td colspan="7">لا أذونات</td></tr>'}</tbody></table>`,
    );
  };

  return (
    <div>
      <PageHead
        title="ملف موظف"
        desc="بيانات الموظف وحركاته وأرصدة الأذونات بالساعات"
        actions={
          e ? (
            <Button variant="secondary" onClick={printProfile}>
              طباعة الملف
            </Button>
          ) : null
        }
      />
      <input
        className="mb-3 h-10 w-full rounded-md border border-border bg-card px-3 text-sm"
        placeholder="ابحث واختر موظفاً..."
        value={q}
        onChange={(ev) => setQ(ev.target.value)}
      />
      {hits.length ? (
        <div className="mb-3 rounded-md border border-border bg-card">
          {hits.map((h) => (
            <button
              key={h.code}
              type="button"
              className="block w-full px-3 py-2 text-right text-sm hover:bg-primary-soft"
              onClick={() => {
                setProfile(h.code);
                setQ("");
              }}
            >
              {h.name} <span className="text-[11px] text-muted">{h.jobNo}</span>
            </button>
          ))}
        </div>
      ) : null}
      {!e ? (
        <p className="py-10 text-center text-sm text-muted">ابحث واختر موظفاً لعرض ملفه</p>
      ) : (
        <>
          <Card className="mb-3 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid size-16 place-items-center rounded-2xl bg-primary text-2xl font-extrabold text-white">
                  {e.name.slice(0, 1)}
                </div>
                <div>
                  <div className="text-xl font-extrabold">{e.name}</div>
                  <div className="mt-1 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="rounded-full bg-th px-2 py-0.5">{e.jobNo}</span>
                    <span className="rounded-full bg-th px-2 py-0.5">{e.dept}</span>
                    <span className="rounded-full bg-th px-2 py-0.5">{e.position}</span>
                    <span className="rounded-full bg-th px-2 py-0.5">فئة {e.grade}</span>
                    <Badge tone={statusTone(e.status)}>{e.status}</Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" onClick={() => openModal("leave")}>
                  إجازة
                </Button>
                <Button onClick={() => openModal("perm")}>إذن</Button>
              </div>
            </div>
          </Card>
          <div className="mb-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            <Kpi label="رصيد سنوي" value={e.balYear} tone="teal" />
            <Kpi label="مستخدم" value={e.balUsed} tone="warn" />
            <Kpi label="الحالي" value={e.balNow} tone="ok" />
            <Kpi label="ساعات الأذونات" value={minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0))} />
          </div>
          <div className="mb-3 grid gap-3 lg:grid-cols-2">
            <Card>
              <CardH>ساعات الأذونات حسب النوع</CardH>
              <div className="p-4 text-sm">
                {hours.length ? (
                  hours.map((h) => (
                    <div key={h.type} className="mb-2 flex justify-between">
                      <span>{h.type}</span>
                      <b className="tabular-nums">{minutesToLabel(h.minutes)}</b>
                    </div>
                  ))
                ) : (
                  <p className="text-muted">لا أذونات</p>
                )}
              </div>
            </Card>
            <Card>
              <CardH>حدود الساعات المطبّقة</CardH>
              <div className="p-4 text-xs">
                {(() => {
                  const chk = checkPermLimits(db, e, "إذن ساعة", today, 0);
                  if (!chk.matches.length) return <p className="text-muted">لا حدود تنطبق مباشرة — جرّب تسجيل إذن لعرض المطابقة حسب النوع</p>;
                  return chk.matches.map((v) => {
                    const pct = v.maxMinutes ? Math.min(100, Math.round((v.usedMinutes / v.maxMinutes) * 100)) : 0;
                    return (
                      <div key={v.limit.id} className="mb-2">
                        <div className="mb-0.5 flex justify-between">
                          <span>
                            {v.limit.name}{" "}
                            <span className="text-muted">({APPLY_LABEL[v.limit.apply === "group" ? "group" : "each"]})</span>
                          </span>
                          <span className="tabular-nums">
                            {minutesToLabel(v.usedMinutes)} / {v.limit.maxHours}س
                          </span>
                        </div>
                        <div className="meter">
                          <span style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </Card>
          </div>
          <Card className="mb-3">
            <CardH>البيانات الأساسية</CardH>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["القسم", e.section],
                ["القسم الفرعي", e.subSection],
                ["الهاتف", e.phone],
                ["الرقم القومي", e.nationalId],
                ["التعيين", fd(e.hiredAt)],
                ["الميلاد", fd(e.birth)],
                ["البريد", e.email],
                ["المدير", e.manager],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-l border-border px-4 py-2.5 text-sm">
                  <div className="text-[11px] text-muted">{k}</div>
                  <div>{v || "—"}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="mb-3">
            <CardH>سجل الإجازات ({leaves.length})</CardH>
            <div className="tbl-scroll">
              <table>
                <thead>
                  <tr>
                    <th>رقم</th>
                    <th>النوع</th>
                    <th>من</th>
                    <th>إلى</th>
                    <th>أيام</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {leaves.map((l) => (
                    <tr key={l.id}>
                      <td>{l.id}</td>
                      <td>{l.type}</td>
                      <td>{fd(l.from)}</td>
                      <td>{fd(l.to)}</td>
                      <td>{l.workDays}</td>
                      <td>
                        <Badge tone={statusTone(l.status)}>{l.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <CardH>سجل الأذونات ({perms.length})</CardH>
            <div className="tbl-scroll">
              <table>
                <thead>
                  <tr>
                    <th>رقم</th>
                    <th>التاريخ</th>
                    <th>النوع</th>
                    <th>من</th>
                    <th>إلى</th>
                    <th>المدة</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {perms.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{fd(p.date)}</td>
                      <td>{p.type}</td>
                      <td>{p.from}</td>
                      <td>{p.to}</td>
                      <td>{p.duration}</td>
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
    </div>
  );
}
