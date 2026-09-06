import { EmpPicker } from "@/components/emp-picker";
import { Button, Field, Input, Modal, Select, Textarea } from "@/components/ui";
import { calendarDays, todayYmd, workDays } from "@/lib/dates";
import {
  APPLY_LABEL,
  checkPermLimits,
  hoursLabelFromRange,
  minutesToLabel,
  monthlyCountUsed,
  timeRangeMinutes,
} from "@/lib/hours";
import { useApp } from "@/lib/store";
import type { AppUser, Attendance, Employee, Leave, Mission, PageId, PermLimit, Permission, Section } from "@/lib/types";
import { useState } from "react";

export const emptyEmp = (): Employee => ({
  code: "",
  jobNo: "",
  name: "",
  enName: "",
  nationalId: "",
  dept: "",
  section: "",
  subSection: "",
  position: "",
  grade: "",
  hiredAt: "",
  birth: "",
  gender: "ذكر",
  status: "نشط",
  phone: "",
  email: "",
  manager: "",
  marital: "",
  insurance: "",
  salary: "",
  hazardPct: "",
  address: "",
  balYear: 30,
  balUsed: 0,
  balNow: 30,
  notes: "",
});

export function EmpForm({
  initial,
  onClose,
  onSave,
}: {
  initial: Employee;
  onClose: () => void;
  onSave: (e: Employee) => void;
}) {
  const { db } = useApp();
  const [f, setF] = useState(initial);
  const set = (k: keyof Employee, v: string | number) => setF((s) => ({ ...s, [k]: v }));
  const depts = [...new Set([...db.departments.map((d) => d.name), ...db.employees.map((e) => e.dept)].filter(Boolean))].sort();
  const secs = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
  const poss = [...new Set([...db.positions.map((p) => p.name), ...db.employees.map((e) => e.position)].filter(Boolean))].sort();
  const subs = [...new Set([...db.sections.map((s) => s.name), ...db.employees.map((e) => e.subSection)].filter(Boolean))].sort();
  return (
    <Modal
      title={initial.code ? "تعديل موظف" : "إضافة موظف"}
      sub="بيانات الموظف الوظيفية والأساسية"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={onClose} className="flex-1">
            إلغاء
          </Button>
          <Button
            className="flex-1"
            disabled={!f.name.trim()}
            onClick={() => onSave({ ...f, balNow: Number(f.balYear) - Number(f.balUsed) })}
          >
            حفظ
          </Button>
        </>
      }
    >
      <div className="grid gap-0 sm:grid-cols-2 sm:gap-3">
        <Field label="اسم الموظف *">
          <Input value={f.name} onChange={(e) => set("name", e.target.value)} />
        </Field>
        <Field label="الرقم الوظيفي">
          <Input value={f.jobNo} onChange={(e) => set("jobNo", e.target.value)} />
        </Field>
        <Field label="English Name">
          <Input dir="ltr" value={f.enName || ""} onChange={(e) => set("enName", e.target.value)} />
        </Field>
        <Field label="الرقم القومي">
          <Input value={f.nationalId} onChange={(e) => set("nationalId", e.target.value)} />
        </Field>
        <Field label="الهاتف">
          <Input value={f.phone} onChange={(e) => set("phone", e.target.value)} />
        </Field>
        <Field label="النوع">
          <Select value={f.gender} onChange={(e) => set("gender", e.target.value)}>
            <option>ذكر</option>
            <option>أنثى</option>
          </Select>
        </Field>
        <Field label="الإدارة">
          <Input list="dept-list" value={f.dept} onChange={(e) => set("dept", e.target.value)} />
          <datalist id="dept-list">
            {depts.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </Field>
        <Field label="القسم">
          <Input list="sec-list" value={f.section} onChange={(e) => set("section", e.target.value)} />
          <datalist id="sec-list">
            {secs.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </Field>
        <Field label="القسم الفرعي">
          <Input list="sub-list" value={f.subSection} onChange={(e) => set("subSection", e.target.value)} />
          <datalist id="sub-list">
            {subs.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </Field>
        <Field label="الوظيفة">
          <Input list="pos-list" value={f.position} onChange={(e) => set("position", e.target.value)} />
          <datalist id="pos-list">
            {poss.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </Field>
        <Field label="الفئة الوظيفية">
          <Select value={f.grade} onChange={(e) => set("grade", e.target.value)}>
            <option value="">—</option>
            {["أولى", "ثانية", "ثالثة", "رابعة", "خامسة"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </Select>
        </Field>
        <Field label="الحالة / نوع العمالة">
          <Select value={f.status} onChange={(e) => set("status", e.target.value)}>
            <option>نشط</option>
            <option>موظفين دائمين</option>
            <option>عمـال عقـود شاملة</option>
            <option>موقوف</option>
            <option>منتهي الخدمة</option>
            <option>إجازة طويلة</option>
          </Select>
        </Field>
        <Field label="تاريخ التعيين">
          <Input type="date" value={f.hiredAt} onChange={(e) => set("hiredAt", e.target.value)} />
        </Field>
        <Field label="تاريخ الميلاد">
          <Input type="date" value={f.birth} onChange={(e) => set("birth", e.target.value)} />
        </Field>
        <Field label="حالة اجتماعية">
          <Input value={f.marital || ""} onChange={(e) => set("marital", e.target.value)} />
        </Field>
        <Field label="الرقم التأميني">
          <Input value={f.insurance || ""} onChange={(e) => set("insurance", e.target.value)} />
        </Field>
        <Field label="الأساسي">
          <Input type="number" value={f.salary ?? ""} onChange={(e) => set("salary", e.target.value)} />
        </Field>
        <Field label="نسبة بدل المخاطر %">
          <Input type="number" value={f.hazardPct ?? ""} onChange={(e) => set("hazardPct", e.target.value)} />
        </Field>
        <Field label="البريد">
          <Input value={f.email} onChange={(e) => set("email", e.target.value)} />
        </Field>
        <Field label="المدير المباشر">
          <Input value={f.manager} onChange={(e) => set("manager", e.target.value)} />
        </Field>
        <Field label="الرصيد السنوي">
          <Input type="number" value={f.balYear} onChange={(e) => set("balYear", Number(e.target.value))} />
        </Field>
        <Field label="المستخدم">
          <Input type="number" value={f.balUsed} onChange={(e) => set("balUsed", Number(e.target.value))} />
        </Field>
      </div>
      <Field label="العنوان">
        <Input value={f.address || ""} onChange={(e) => set("address", e.target.value)} />
      </Field>
      <Field label="ملاحظات">
        <Textarea rows={2} value={f.notes} onChange={(e) => set("notes", e.target.value)} />
      </Field>
    </Modal>
  );
}

export function LeaveForm({
  initial,
  defaultEmp,
  onClose,
  onSave,
}: {
  initial?: Leave;
  defaultEmp?: string;
  onClose: () => void;
  onSave: (l: Omit<Leave, "id" | "registeredAt">) => string | null;
}) {
  const { db } = useApp();
  const [empCode, setEmpCode] = useState(initial?.empCode || defaultEmp || "");
  const [type, setType] = useState(initial?.type || db.leaveTypes[0]?.name || "");
  const [from, setFrom] = useState(initial?.from || todayYmd());
  const [to, setTo] = useState(initial?.to || todayYmd());
  const [status, setStatus] = useState(initial?.status || "معتمدة");
  const [notes, setNotes] = useState(initial?.notes || "");
  const [decision, setDecision] = useState(initial?.decision || "");
  const [err, setErr] = useState("");
  const emp = db.employees.find((e) => e.code === empCode);
  const wd = workDays(db, from, to);
  const days = calendarDays(from, to);
  return (
    <Modal
      title={initial ? "تعديل إجازة" : "تسجيل إجازة"}
      sub="أيام العمل تُحسب بعد استبعاد الراحة والعطل"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              const msg = onSave({
                date: todayYmd(),
                empCode,
                empName: emp?.name || "",
                dept: emp?.dept || "",
                type,
                from,
                to,
                days,
                workDays: wd,
                holDays: Math.max(0, days - wd),
                status,
                decision,
                notes,
                user: "",
              });
              if (msg) setErr(msg);
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <Field label="الموظف">
        <EmpPicker employees={db.employees} value={empCode} onChange={setEmpCode} />
      </Field>
      {emp ? (
        <p className="mb-3 text-xs text-muted">
          الرصيد الحالي: <b>{emp.balNow}</b> · الإدارة: {emp.dept}
        </p>
      ) : null}
      <Field label="نوع الإجازة">
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {db.leaveTypes.map((t) => (
            <option key={t.code}>{t.name}</option>
          ))}
        </Select>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="من">
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Field>
        <Field label="إلى">
          <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </Field>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2 text-center">
        <div className="rounded-md bg-th p-2">
          <div className="text-lg font-extrabold text-primary">{days}</div>
          <div className="text-[11px] text-muted">أيام</div>
        </div>
        <div className="rounded-md bg-th p-2">
          <div className="text-lg font-extrabold text-primary">{wd}</div>
          <div className="text-[11px] text-muted">عمل</div>
        </div>
        <div className="rounded-md bg-th p-2">
          <div className="text-lg font-extrabold text-primary">{Math.max(0, days - wd)}</div>
          <div className="text-[11px] text-muted">عطلات</div>
        </div>
      </div>
      <Field label="الحالة">
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>معتمدة</option>
          <option>مسودة</option>
          <option>ملغاة</option>
        </Select>
      </Field>
      <Field label="رقم القرار">
        <Input value={decision} onChange={(e) => setDecision(e.target.value)} />
      </Field>
      <Field label="ملاحظات">
        <Textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>
      {err ? <div className="rounded-md bg-warn/15 px-3 py-2 text-xs text-warn">{err}</div> : null}
    </Modal>
  );
}

export function PermForm({
  initial,
  defaultEmp,
  onClose,
  onSave,
}: {
  initial?: Permission;
  defaultEmp?: string;
  onClose: () => void;
  onSave: (p: Omit<Permission, "id" | "duration" | "registeredAt">) => string | null;
}) {
  const { db } = useApp();
  const [empCode, setEmpCode] = useState(initial?.empCode || defaultEmp || "");
  const [type, setType] = useState(initial?.type || db.permTypes[0]?.name || "");
  const [date, setDate] = useState(initial?.date || todayYmd());
  const [from, setFrom] = useState(initial?.from || "10:00");
  const [to, setTo] = useState(initial?.to || "12:00");
  const [status, setStatus] = useState(initial?.status || "معتمدة");
  const [notes, setNotes] = useState(initial?.notes || "");
  const [err, setErr] = useState("");
  const emp = db.employees.find((e) => e.code === empCode);
  const mins = timeRangeMinutes(from, to);
  const preview = emp
    ? checkPermLimits(db, emp, type, date, mins, initial?.id)
    : { ok: true, violations: [], matches: [] };
  const pt = db.permTypes.find((t) => t.name === type);
  const usedCount = emp && pt ? monthlyCountUsed(db, emp.code, type, date.slice(0, 7), initial?.id) : 0;

  return (
    <Modal
      title={initial ? "تعديل إذن" : "تسجيل إذن"}
      sub="المدة تُحسب تلقائياً ويُرفض الحفظ عند تجاوز أي حد ساعات أو عدد مرات"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              const msg = onSave({
                empCode,
                empName: emp?.name || "",
                jobNo: emp?.jobNo || "",
                subSection: emp?.subSection || "",
                type,
                date,
                from,
                to,
                status,
                notes,
              });
              if (msg) setErr(msg);
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <Field label="الموظف">
        <EmpPicker employees={db.employees} value={empCode} onChange={setEmpCode} />
      </Field>
      {emp ? (
        <p className="mb-3 text-xs text-muted">
          {emp.dept} · {emp.section} · فئة {emp.grade || "—"}
        </p>
      ) : null}
      <Field label="نوع الإذن">
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {db.permTypes.map((t) => (
            <option key={t.code} value={t.name}>
              {t.name}
              {t.monthlyCount ? ` (حد ${t.monthlyCount}/شهر)` : ""}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="التاريخ">
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="من وقت">
          <Input type="time" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Field>
        <Field label="إلى وقت">
          <Input type="time" value={to} onChange={(e) => setTo(e.target.value)} />
        </Field>
      </div>
      <div className="mb-3 rounded-md bg-th px-3 py-2 text-sm">
        المدة المحسوبة: <strong>{hoursLabelFromRange(from, to)}</strong>
        {pt && pt.monthlyCount > 0 ? (
          <span className="mr-2 text-xs text-muted">
            · مرات هذا النوع: {usedCount}/{pt.monthlyCount}
          </span>
        ) : null}
      </div>
      <Field label="الحالة">
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>معتمدة</option>
          <option>مسودة</option>
          <option>ملغاة</option>
        </Select>
      </Field>
      <Field label="ملاحظات">
        <Textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>
      {emp ? (
        <div className="rounded-md border border-border bg-th/40 p-3 text-xs">
          <div className="mb-2 font-bold">مطابقة حدود الساعات</div>
          {preview.matches.length ? (
            preview.matches.map((v) => {
              const next = v.usedMinutes + v.addMinutes;
              const over = next > v.maxMinutes;
              const pct = v.maxMinutes ? Math.min(100, Math.round((next / v.maxMinutes) * 100)) : 0;
              return (
                <div key={v.limit.id} className="mb-2 last:mb-0">
                  <div className="mb-0.5 flex justify-between gap-2">
                    <span>
                      {v.limit.name}{" "}
                      <span className="text-muted">({APPLY_LABEL[v.limit.apply === "group" ? "group" : "each"]})</span>
                    </span>
                    <span className={over ? "font-semibold text-err" : "tabular-nums"}>
                      {minutesToLabel(next)} / {v.limit.maxHours}س
                    </span>
                  </div>
                  <div className="meter">
                    <span
                      style={{
                        width: `${pct}%`,
                        background: over ? "var(--color-err)" : pct >= 80 ? "var(--color-warn)" : undefined,
                      }}
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-muted">لا قواعد حد تنطبق على هذا الإذن</p>
          )}
          {!preview.ok ? (
            <p className="mt-2 text-err">سيُرفض الحفظ لتجاوز أحد الحدود.</p>
          ) : preview.matches.length ? (
            <p className="mt-2 text-ok">ضمن الحدود الحالية</p>
          ) : null}
        </div>
      ) : null}
      {err ? <div className="mt-3 rounded-md bg-warn/15 px-3 py-2 text-xs text-warn">{err}</div> : null}
    </Modal>
  );
}

export function LimitForm({
  initial,
  onClose,
  onSave,
}: {
  initial?: PermLimit;
  onClose: () => void;
  onSave: (l: PermLimit) => void;
}) {
  const { db } = useApp();
  const [f, setF] = useState<PermLimit>(
    initial || {
      id: "",
      name: "",
      enabled: true,
      scope: "all",
      scopeValue: "",
      window: "day",
      types: "all",
      maxHours: 2,
      apply: "each",
      notes: "",
    },
  );
  const set = <K extends keyof PermLimit>(k: K, v: PermLimit[K]) => setF((s) => ({ ...s, [k]: v }));
  const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
  const secs = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
  const grades = [...new Set(db.employees.map((e) => e.grade).filter(Boolean))].sort();

  return (
    <Modal
      title={initial ? "تعديل حد ساعات" : "حد ساعات جديد"}
      sub="المستوى × النوع × الفترة × طريقة الاحتساب (فردي أو مجموع مشترك)"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button className="flex-1" onClick={() => onSave(f)} disabled={!f.name || !f.maxHours}>
            حفظ
          </Button>
        </>
      }
    >
      <Field label="اسم القاعدة">
        <Input value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="مثال: سقف يومي للموارد البشرية" />
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="المستوى">
          <Select
            value={f.scope}
            onChange={(e) => {
              const scope = e.target.value as PermLimit["scope"];
              set("scope", scope);
              set("scopeValue", "");
              if (scope === "department" || scope === "section") set("apply", "group");
              else set("apply", "each");
            }}
          >
            <option value="all">الكل</option>
            <option value="employee">موظف</option>
            <option value="department">إدارة</option>
            <option value="section">قسم</option>
            <option value="jobCategory">فئة وظيفية</option>
            <option value="permType">نوع إذن</option>
          </Select>
        </Field>
        <Field label="الفترة">
          <Select value={f.window} onChange={(e) => set("window", e.target.value as PermLimit["window"])}>
            <option value="day">يومي</option>
            <option value="month">شهري</option>
            <option value="all">كل الأذونات</option>
          </Select>
        </Field>
      </div>
      <Field label="طريقة الاحتساب">
        <Select value={f.apply || "each"} onChange={(e) => set("apply", e.target.value as PermLimit["apply"])}>
          <option value="each">لكل موظف على حدة</option>
          <option value="group">مجموع مشترك للمستوى</option>
        </Select>
      </Field>
      {f.scope === "employee" ? (
        <Field label="الموظف">
          <EmpPicker employees={db.employees} value={f.scopeValue} onChange={(c) => set("scopeValue", c)} />
        </Field>
      ) : null}
      {f.scope === "department" ? (
        <Field label="الإدارة">
          <Select value={f.scopeValue} onChange={(e) => set("scopeValue", e.target.value)}>
            <option value="">اختر</option>
            {depts.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </Field>
      ) : null}
      {f.scope === "section" ? (
        <Field label="القسم">
          <Select value={f.scopeValue} onChange={(e) => set("scopeValue", e.target.value)}>
            <option value="">اختر</option>
            {secs.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </Field>
      ) : null}
      {f.scope === "jobCategory" ? (
        <Field label="الفئة الوظيفية">
          <Select value={f.scopeValue} onChange={(e) => set("scopeValue", e.target.value)}>
            <option value="">اختر</option>
            {grades.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </Select>
        </Field>
      ) : null}
      {f.scope === "permType" ? (
        <Field label="نوع الإذن">
          <Select
            value={f.scopeValue}
            onChange={(e) => {
              set("scopeValue", e.target.value);
              set("types", e.target.value);
            }}
          >
            <option value="">اختر</option>
            {db.permTypes.map((t) => (
              <option key={t.code}>{t.name}</option>
            ))}
          </Select>
        </Field>
      ) : (
        <Field label="ينطبق على الأنواع">
          <Select value={f.types} onChange={(e) => set("types", e.target.value)}>
            <option value="all">كل الأنواع</option>
            {db.permTypes.map((t) => (
              <option key={t.code}>{t.name}</option>
            ))}
          </Select>
        </Field>
      )}
      <Field label="الحد الأقصى بالساعات">
        <Input
          type="number"
          step="0.25"
          min={0.25}
          value={f.maxHours}
          onChange={(e) => set("maxHours", Number(e.target.value))}
        />
      </Field>
      <label className="mb-3 flex items-center gap-2 text-sm">
        <input type="checkbox" checked={f.enabled} onChange={(e) => set("enabled", e.target.checked)} />
        مفعّل
      </label>
      <Field label="ملاحظات">
        <Textarea rows={2} value={f.notes} onChange={(e) => set("notes", e.target.value)} />
      </Field>
    </Modal>
  );
}

export function MissionForm({
  initial,
  defaultEmp,
  onClose,
  onSave,
}: {
  initial?: Mission;
  defaultEmp?: string;
  onClose: () => void;
  onSave: (m: Omit<Mission, "id"> & { id?: string }) => string | null;
}) {
  const { db } = useApp();
  const [empCode, setEmpCode] = useState(initial?.empCode || defaultEmp || "");
  const [type, setType] = useState(initial?.type || db.missionTypes[0]?.name || "مأمورية داخلية");
  const [org, setOrg] = useState(initial?.org || "");
  const [place, setPlace] = useState(initial?.place || "");
  const [from, setFrom] = useState(initial?.from || todayYmd());
  const [to, setTo] = useState(initial?.to || todayYmd());
  const [tFrom, setTFrom] = useState(initial?.tFrom || "08:00");
  const [tTo, setTTo] = useState(initial?.tTo || "14:00");
  const [status, setStatus] = useState(initial?.status || "معتمدة");
  const [ref, setRef] = useState(initial?.ref || "");
  const [notes, setNotes] = useState(initial?.notes || "");
  const [err, setErr] = useState("");
  const emp = db.employees.find((e) => e.code === empCode);
  const days = calendarDays(from, to);
  return (
    <Modal
      title={initial ? "تعديل مأمورية" : "تسجيل مأمورية"}
      sub="جهة المأمورية والفترة تُحفظ مع رقم تكليف تلقائي"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              const msg = onSave({
                id: initial?.id,
                date: todayYmd(),
                empCode,
                empName: emp?.name || "",
                dept: emp?.dept || "",
                type,
                org,
                place,
                from,
                to,
                tFrom,
                tTo,
                days,
                status,
                notes,
                ref,
              });
              if (msg) setErr(msg);
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <Field label="الموظف">
        <EmpPicker employees={db.employees} value={empCode} onChange={setEmpCode} />
      </Field>
      <Field label="نوع المأمورية">
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          {(db.missionTypes.length ? db.missionTypes : [{ code: "x", name: type, needsApproval: true, notes: "" }]).map(
            (t) => (
              <option key={t.code}>{t.name}</option>
            ),
          )}
        </Select>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="جهة المأمورية">
          <Input value={org} onChange={(e) => setOrg(e.target.value)} />
        </Field>
        <Field label="المكان">
          <Input value={place} onChange={(e) => setPlace(e.target.value)} />
        </Field>
        <Field label="من تاريخ">
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Field>
        <Field label="إلى تاريخ">
          <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} />
        </Field>
        <Field label="من وقت">
          <Input type="time" value={tFrom} onChange={(e) => setTFrom(e.target.value)} />
        </Field>
        <Field label="إلى وقت">
          <Input type="time" value={tTo} onChange={(e) => setTTo(e.target.value)} />
        </Field>
      </div>
      <p className="mb-3 text-xs text-muted">عدد الأيام: {days || 0}</p>
      <Field label="رقم التكليف">
        <Input value={ref} onChange={(e) => setRef(e.target.value)} />
      </Field>
      <Field label="الحالة">
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>معتمدة</option>
          <option>مسودة</option>
          <option>ملغاة</option>
        </Select>
      </Field>
      <Field label="ملاحظات">
        <Textarea rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </Field>
      {err ? <div className="rounded-md bg-warn/15 px-3 py-2 text-xs text-warn">{err}</div> : null}
    </Modal>
  );
}

export function AttForm({
  initial,
  onClose,
  onSave,
}: {
  initial?: Attendance;
  onClose: () => void;
  onSave: (a: Omit<Attendance, "id"> & { id?: string }) => string | null;
}) {
  const { db } = useApp();
  const [empCode, setEmpCode] = useState(initial?.empCode || "");
  const [date, setDate] = useState(initial?.date || todayYmd());
  const [status, setStatus] = useState(initial?.status || "غياب بعذر");
  const [inn, setInn] = useState(initial?.in || "");
  const [out, setOut] = useState(initial?.out || "");
  const [recStatus, setRecStatus] = useState(initial?.recStatus || "معتمدة");
  const [err, setErr] = useState("");
  const emp = db.employees.find((e) => e.code === empCode);
  return (
    <Modal
      title={initial ? "تعديل حضور / غياب" : "تسجيل حضور / غياب"}
      sub="يسجّل الموقف اليومي يدوياً ويتقدّم على الحساب التلقائي"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              const msg = onSave({
                id: initial?.id,
                empCode,
                empName: emp?.name || "",
                date,
                status,
                in: inn,
                out,
                recStatus,
              });
              if (msg) setErr(msg);
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <Field label="الموظف">
        <EmpPicker employees={db.employees} value={empCode} onChange={setEmpCode} />
      </Field>
      <Field label="التاريخ">
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <Field label="الموقف">
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>حاضر</option>
          <option>غائب</option>
          <option>غياب بدون إذن</option>
          <option>غياب بعذر</option>
          <option>إجازة</option>
          <option>مأمورية</option>
        </Select>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="وقت الحضور">
          <Input type="time" value={inn} onChange={(e) => setInn(e.target.value)} />
        </Field>
        <Field label="وقت الانصراف">
          <Input type="time" value={out} onChange={(e) => setOut(e.target.value)} />
        </Field>
      </div>
      <Field label="حالة السجل">
        <Select value={recStatus} onChange={(e) => setRecStatus(e.target.value)}>
          <option>معتمدة</option>
          <option>مسودة</option>
          <option>ملغاة</option>
        </Select>
      </Field>
      {err ? <div className="rounded-md bg-warn/15 px-3 py-2 text-xs text-warn">{err}</div> : null}
    </Modal>
  );
}

export function SectionForm({
  initial,
  onClose,
  onSave,
}: {
  initial?: Section;
  onClose: () => void;
  onSave: (s: Section) => void;
}) {
  const { db } = useApp();
  const [name, setName] = useState(initial?.name || "");
  const [parent, setParent] = useState(initial?.parent || "");
  const [dept, setDept] = useState(initial?.dept || "");
  const parents = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
  const depts = [...new Set([...db.departments.map((d) => d.name), ...db.employees.map((e) => e.dept)].filter(Boolean))].sort();
  return (
    <Modal
      title={initial ? "تعديل قسم فرعي" : "إضافة قسم فرعي"}
      sub="اختر الإدارة والقسم الأصلي من القوائم"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button className="flex-1" disabled={!name.trim()} onClick={() => onSave({ name: name.trim(), parent, dept })}>
            حفظ
          </Button>
        </>
      }
    >
      <Field label="اسم القسم الفرعي">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Field>
      <Field label="القسم الأصلي">
        <Input list="par-list" value={parent} onChange={(e) => setParent(e.target.value)} />
        <datalist id="par-list">
          {parents.map((p) => (
            <option key={p} value={p} />
          ))}
        </datalist>
      </Field>
      <Field label="الإدارة">
        <Input list="dep-list2" value={dept} onChange={(e) => setDept(e.target.value)} />
        <datalist id="dep-list2">
          {depts.map((p) => (
            <option key={p} value={p} />
          ))}
        </datalist>
      </Field>
    </Modal>
  );
}

export function DashConfigForm({ onClose }: { onClose: () => void }) {
  const { db, saveDb, flash } = useApp();
  const all = [
    { k: "emps", l: "إجمالي الموظفين" },
    { k: "present", l: "الحاضر اليوم" },
    { k: "absent", l: "الغائب اليوم" },
    { k: "leaves", l: "في إجازة اليوم" },
    { k: "perms", l: "أذونات اليوم" },
    { k: "missions", l: "مأموريات اليوم" },
    { k: "balance", l: "مجموع الأرصدة" },
    { k: "hours", l: "ساعات الأذونات" },
    { k: "used", l: "أيام مستخدمة" },
    { k: "approved", l: "إجازات معتمدة" },
    { k: "sections", l: "أقسام فرعية" },
  ];
  const cur = new Set(db.settings.dashWidgets || ["emps", "present", "absent", "leaves", "balance"]);
  const [sel, setSel] = useState<string[]>([...cur]);
  const toggle = (k: string) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  return (
    <Modal
      title="تخصيص لوحة التحكم"
      sub="اختر المؤشرات المعروضة في الصف العلوي"
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              saveDb((d) => ({ ...d, settings: { ...d.settings, dashWidgets: sel.length ? sel : ["emps"] } }));
              flash("تم تخصيص اللوحة");
              onClose();
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <div className="flex flex-col gap-1.5">
        {all.map((w) => (
          <label key={w.k} className="flex cursor-pointer items-center gap-2 rounded-md bg-th px-3 py-2 text-sm">
            <input type="checkbox" checked={sel.includes(w.k)} onChange={() => toggle(w.k)} />
            {w.l}
          </label>
        ))}
      </div>
    </Modal>
  );
}

const ALL_SCREENS: { id: PageId; label: string }[] = [
  { id: "dashboard", label: "لوحة التحكم" },
  { id: "employees", label: "الموظفون" },
  { id: "profile", label: "ملف موظف" },
  { id: "leaves", label: "الإجازات" },
  { id: "permissions", label: "الأذونات" },
  { id: "missions", label: "المأموريات" },
  { id: "attendance", label: "الحضور" },
  { id: "sections", label: "الأقسام" },
  { id: "search", label: "البحث" },
  { id: "reports", label: "التقارير" },
  { id: "trash", label: "المحذوفات" },
  { id: "settings", label: "الإعدادات" },
];

export function UserForm({
  initial,
  onClose,
  onSave,
}: {
  initial?: AppUser;
  onClose: () => void;
  onSave: (u: AppUser) => string | null;
}) {
  const [f, setF] = useState<AppUser>(
    initial || {
      username: "",
      password: "",
      name: "",
      role: "hr",
      perms: [],
      hiddenScreens: [],
    },
  );
  const [err, setErr] = useState("");
  const toggle = (id: PageId) => {
    const hid = new Set(f.hiddenScreens);
    if (hid.has(id)) hid.delete(id);
    else hid.add(id);
    setF({ ...f, hiddenScreens: [...hid] });
  };
  return (
    <Modal
      title={initial ? "تعديل مستخدم" : "مستخدم جديد"}
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" className="flex-1" onClick={onClose}>
            إلغاء
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              const msg = onSave(f);
              if (msg) setErr(msg);
            }}
          >
            حفظ
          </Button>
        </>
      }
    >
      <div className="grid sm:grid-cols-2 sm:gap-3">
        <Field label="اسم المستخدم">
          <Input value={f.username} onChange={(e) => setF({ ...f, username: e.target.value })} />
        </Field>
        <Field label="كلمة المرور">
          <Input value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} />
        </Field>
        <Field label="الاسم الظاهر">
          <Input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
        </Field>
        <Field label="الدور">
          <Select value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>
            <option value="admin">مدير</option>
            <option value="hr">موارد بشرية</option>
            <option value="viewer">عرض فقط</option>
          </Select>
        </Field>
      </div>
      <p className="mb-2 text-xs font-semibold text-muted">الشاشات المسموحة</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {ALL_SCREENS.map((s) => {
          const on = !f.hiddenScreens.includes(s.id);
          return (
            <button
              key={s.id}
              type="button"
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                on ? "border-primary bg-primary text-white" : "border-border bg-card"
              }`}
              onClick={() => toggle(s.id)}
            >
              {s.label}
            </button>
          );
        })}
      </div>
      {err ? <div className="rounded-md bg-warn/15 px-3 py-2 text-xs text-warn">{err}</div> : null}
    </Modal>
  );
}

export function ModalHost() {
  const {
    modal,
    db,
    editIndex,
    closeModal,
    savePerm,
    saveLeave,
    saveEmployee,
    saveLimit,
    saveUser,
    saveMission,
    saveAttendance,
    saveSection,
    profileCode,
    page,
  } = useApp();
  const defaultEmp = page === "profile" ? profileCode : "";
  if (modal === "perm") {
    return (
      <PermForm
        initial={editIndex != null ? db.permissions[editIndex] : undefined}
        defaultEmp={defaultEmp}
        onClose={closeModal}
        onSave={(rec) => savePerm(rec, editIndex)}
      />
    );
  }
  if (modal === "leave") {
    return (
      <LeaveForm
        initial={editIndex != null ? db.leaves[editIndex] : undefined}
        defaultEmp={defaultEmp}
        onClose={closeModal}
        onSave={(rec) => saveLeave(rec, editIndex)}
      />
    );
  }
  if (modal === "emp") {
    return (
      <EmpForm
        initial={editIndex != null ? db.employees[editIndex]! : emptyEmp()}
        onClose={closeModal}
        onSave={(emp) => saveEmployee(emp, editIndex)}
      />
    );
  }
  if (modal === "limit") {
    return (
      <LimitForm
        initial={editIndex != null ? db.permLimits[editIndex] : undefined}
        onClose={closeModal}
        onSave={(lim) => saveLimit(lim, editIndex)}
      />
    );
  }
  if (modal === "user") {
    return (
      <UserForm
        initial={editIndex != null ? db.users[editIndex] : undefined}
        onClose={closeModal}
        onSave={(u) => saveUser(u, editIndex)}
      />
    );
  }
  if (modal === "mission") {
    return (
      <MissionForm
        initial={editIndex != null ? db.missions[editIndex] : undefined}
        defaultEmp={defaultEmp}
        onClose={closeModal}
        onSave={(m) => saveMission(m, editIndex)}
      />
    );
  }
  if (modal === "att") {
    return (
      <AttForm
        initial={editIndex != null ? db.attendance[editIndex] : undefined}
        onClose={closeModal}
        onSave={(a) => saveAttendance(a, editIndex)}
      />
    );
  }
  if (modal === "section") {
    return (
      <SectionForm
        initial={editIndex != null ? db.sections[editIndex] : undefined}
        onClose={closeModal}
        onSave={(s) => saveSection(s, editIndex)}
      />
    );
  }
  if (modal === "dash") {
    return <DashConfigForm onClose={closeModal} />;
  }
  return null;
}
