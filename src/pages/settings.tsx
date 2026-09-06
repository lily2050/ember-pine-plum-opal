import { Badge, Button, Card, CardH, Input, PageHead } from "@/components/ui";
import { fd } from "@/lib/dates";
import { useApp } from "@/lib/store";
import type { LeaveType, PermType } from "@/lib/types";
import { useState } from "react";

export function SettingsPage() {
  const { db, saveDb, exportJson, importJson, resetSeed, flash, openModal, softDel } = useApp();
  const s = db.settings;
  const [org, setOrg] = useState(s.orgName);
  const [dept, setDept] = useState(s.dept);
  const [year, setYear] = useState(s.fiscalYear);
  const [title, setTitle] = useState(s.appTitle);
  const [bal, setBal] = useState(s.defaultBalance);
  const [npt, setNpt] = useState("");
  const [nlim, setNlim] = useState(4);
  const [nlt, setNlt] = useState("");
  const [hDate, setHDate] = useState("");
  const [hName, setHName] = useState("");
  const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

  return (
    <div>
      <PageHead
        title="الإعدادات"
        desc="القوائم ديناميكية: أضف نوع إجازة أو حد ساعات دون تعديل المعادلات"
        actions={
          <>
            <Button variant="secondary" onClick={exportJson}>
              تصدير JSON
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                const inp = document.createElement("input");
                inp.type = "file";
                inp.accept = "application/json";
                inp.onchange = () => {
                  const f = inp.files?.[0];
                  if (!f) return;
                  const r = new FileReader();
                  r.onload = () => {
                    const err = importJson(String(r.result));
                    if (err) flash(err, "err");
                  };
                  r.readAsText(f);
                };
                inp.click();
              }}
            >
              استيراد
            </Button>
            <Button variant="danger" onClick={resetSeed}>
              إعادة التجريبية
            </Button>
          </>
        }
      />
      <div className="mb-3 grid gap-3 lg:grid-cols-2">
        <Card className="p-4">
          <h3 className="mb-3 font-bold">بيانات المؤسسة</h3>
          <label className="mb-2 block text-xs text-muted">اسم المؤسسة</label>
          <Input className="mb-2" value={org} onChange={(e) => setOrg(e.target.value)} />
          <label className="mb-2 block text-xs text-muted">القطاع</label>
          <Input className="mb-2" value={dept} onChange={(e) => setDept(e.target.value)} />
          <label className="mb-2 block text-xs text-muted">عنوان النظام</label>
          <Input className="mb-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          <label className="mb-2 block text-xs text-muted">السنة المالية</label>
          <Input className="mb-2" value={year} onChange={(e) => setYear(e.target.value)} />
          <label className="mb-2 block text-xs text-muted">الرصيد الافتراضي</label>
          <Input type="number" className="mb-3" value={bal} onChange={(e) => setBal(Number(e.target.value))} />
          <Button
            onClick={() => {
              saveDb((d) => ({
                ...d,
                settings: { ...d.settings, orgName: org, dept, appTitle: title, fiscalYear: year, defaultBalance: bal },
              }));
              flash("تم حفظ الإعدادات");
            }}
          >
            حفظ
          </Button>
        </Card>
        <Card className="p-4">
          <h3 className="mb-3 font-bold">أيام الراحة الأسبوعية</h3>
          <div className="flex flex-wrap gap-2">
            {days.map((d) => {
              const on = s.restDays.includes(d);
              return (
                <button
                  key={d}
                  type="button"
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    on ? "border-primary bg-primary text-white" : "border-border bg-card"
                  }`}
                  onClick={() =>
                    saveDb((cur) => ({
                      ...cur,
                      settings: {
                        ...cur.settings,
                        restDays: on
                          ? cur.settings.restDays.filter((x) => x !== d)
                          : [...cur.settings.restDays, d],
                      },
                    }))
                  }
                >
                  {d}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] text-muted">الأيام المحددة تُستبعد من أيام العمل عند حساب الإجازات.</p>
        </Card>
      </div>

      <Card className="mb-3">
        <CardH extra={<Button onClick={() => openModal("user")}>إضافة مستخدم</Button>}>المستخدمون والصلاحيات</CardH>
        <div className="p-3">
          {db.users.map((u, i) => (
            <div key={u.username} className="mb-1.5 flex flex-wrap items-center justify-between gap-2 rounded-md bg-th px-3 py-2 text-sm">
              <div>
                <strong>{u.username}</strong> — {u.name} <Badge tone="info">{u.role}</Badge>
                <div className="text-[11px] text-muted">
                  {u.role === "admin" || u.perms.includes("all")
                    ? "كل الشاشات"
                    : u.hiddenScreens.length
                      ? `مخفي: ${u.hiddenScreens.join(" · ")}`
                      : "كل الشاشات ظاهرة"}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-xs font-semibold text-primary" onClick={() => openModal("user", i)}>
                  تعديل
                </button>
                {u.username !== "admin" ? (
                  <button className="text-xs font-semibold text-err" onClick={() => softDel("users", i)}>
                    حذف
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-3 grid gap-3 lg:grid-cols-2">
        <Card>
          <CardH>أنواع الإجازات</CardH>
          <div className="p-3">
            <div className="mb-3 flex gap-2">
              <Input placeholder="اسم جديد" value={nlt} onChange={(e) => setNlt(e.target.value)} />
              <Button
                onClick={() => {
                  if (!nlt.trim()) return;
                  const rec: LeaveType = {
                    code: "LV" + String(db.leaveTypes.length + 1).padStart(2, "0"),
                    name: nlt.trim(),
                    affectsBalance: true,
                    maxYear: 0,
                    needsApproval: true,
                    notes: "",
                  };
                  saveDb((d) => ({ ...d, leaveTypes: [...d.leaveTypes, rec] }));
                  setNlt("");
                }}
              >
                إضافة
              </Button>
            </div>
            {db.leaveTypes.map((t, i) => (
              <div key={t.code} className="mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm">
                <span>
                  {t.name}{" "}
                  <span className="text-[11px] text-muted">{t.affectsBalance ? "يخصم من الرصيد" : "بدون خصم"}</span>
                </span>
                <div className="flex items-center gap-2">
                  <label className="text-[11px]">
                    <input
                      type="checkbox"
                      checked={t.affectsBalance}
                      onChange={(e) =>
                        saveDb((d) => ({
                          ...d,
                          leaveTypes: d.leaveTypes.map((x, ix) =>
                            ix === i ? { ...x, affectsBalance: e.target.checked } : x,
                          ),
                        }))
                      }
                    />{" "}
                    تخصم
                  </label>
                  <button
                    className="text-xs text-err"
                    onClick={() => saveDb((d) => ({ ...d, leaveTypes: d.leaveTypes.filter((_, x) => x !== i) }))}
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardH>أنواع الأذونات (حد مرات شهري)</CardH>
          <div className="p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              <Input className="flex-1" placeholder="اسم النوع" value={npt} onChange={(e) => setNpt(e.target.value)} />
              <Input className="w-28" type="number" value={nlim} onChange={(e) => setNlim(Number(e.target.value))} />
              <Button
                onClick={() => {
                  if (!npt.trim()) return;
                  const rec: PermType = {
                    code: "PR" + String(db.permTypes.length + 1).padStart(2, "0"),
                    name: npt.trim(),
                    monthlyCount: nlim,
                    needsApproval: true,
                  };
                  saveDb((d) => ({ ...d, permTypes: [...d.permTypes, rec] }));
                  setNpt("");
                }}
              >
                إضافة
              </Button>
            </div>
            {db.permTypes.map((t, i) => (
              <div key={t.code} className="mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm">
                <span>
                  {t.name} <span className="text-[11px] text-muted">حد شهري (عدد): {t.monthlyCount || "بدون"}</span>
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    className="h-8 w-16 rounded border border-border bg-card px-1 text-xs"
                    value={t.monthlyCount}
                    onChange={(e) =>
                      saveDb((d) => {
                        const permTypes = d.permTypes.map((x, ix) =>
                          ix === i ? { ...x, monthlyCount: Number(e.target.value) } : x,
                        );
                        return { ...d, permTypes };
                      })
                    }
                  />
                  <button
                    className="text-xs text-err"
                    onClick={() => saveDb((d) => ({ ...d, permTypes: d.permTypes.filter((_, x) => x !== i) }))}
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
            <p className="mt-2 text-[11px] text-muted">حدود الساعات تُدار من شاشة الأذونات (قواعد الحدود).</p>
          </div>
        </Card>
      </div>

      <Card>
        <CardH>العطل الرسمية</CardH>
        <div className="p-3">
          <div className="mb-3 flex flex-wrap gap-2">
            <Input type="date" className="w-44" value={hDate} onChange={(e) => setHDate(e.target.value)} />
            <Input className="min-w-[140px] flex-1" placeholder="اسم العطلة" value={hName} onChange={(e) => setHName(e.target.value)} />
            <Button
              onClick={() => {
                if (!hDate || !hName.trim()) return;
                saveDb((d) => ({
                  ...d,
                  holidays: [...d.holidays, { date: hDate, name: hName.trim(), notes: "" }],
                }));
                setHDate("");
                setHName("");
              }}
            >
              إضافة
            </Button>
          </div>
          {db.holidays.map((h, i) => (
            <div key={h.date + h.name} className="mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm">
              <span>
                {fd(h.date)} · {h.name}
              </span>
              <button
                className="text-xs text-err"
                onClick={() => saveDb((d) => ({ ...d, holidays: d.holidays.filter((_, x) => x !== i) }))}
              >
                حذف
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
