import { Badge, Button, Card, Input, PageHead, Pager, paginate, Select, statusTone } from "@/components/ui";
import { printTable, toCsv, downloadText } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function EmployeesPage() {
  const { db, openModal, softDel, setProfile, flash } = useApp();
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("");
  const [page, setPage] = useState(1);
  const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
  const rows = useMemo(
    () =>
      db.employees.filter((e) => {
        if (dept && e.dept !== dept) return false;
        if (!q) return true;
        const hay = `${e.name} ${e.code} ${e.jobNo} ${e.nationalId} ${e.section} ${e.position}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      }),
    [db.employees, q, dept],
  );
  const pg = paginate(rows, page, 12);

  const exportRows = () => {
    downloadText(
      "موظفون.csv",
      toCsv(
        ["الكود", "الرقم الوظيفي", "الاسم", "الإدارة", "القسم", "الوظيفة", "الفئة", "الرصيد", "الحالة"],
        rows.map((e) => [e.code, e.jobNo, e.name, e.dept, e.section, e.position, e.grade, e.balNow, e.status]),
      ),
      "text/csv;charset=utf-8",
    );
    flash("تم تصدير CSV");
  };

  return (
    <div>
      <PageHead
        title="الموظفون"
        desc={`${rows.length} موظف`}
        actions={
          <>
            <Button variant="secondary" onClick={exportRows}>
              CSV
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                printTable(
                  db.settings.orgName,
                  "كشف الموظفين",
                  ["الكود", "الرقم الوظيفي", "الاسم", "الإدارة", "القسم", "الوظيفة", "الفئة", "الرصيد", "الحالة"],
                  rows.map((e) => [e.code, e.jobNo, e.name, e.dept, e.section, e.position, e.grade, e.balNow, e.status]),
                )
              }
            >
              طباعة
            </Button>
            <Button onClick={() => openModal("emp")}>إضافة موظف</Button>
          </>
        }
      />
      <div className="mb-3 flex flex-wrap gap-2">
        <Input
          className="min-w-[200px] flex-1"
          placeholder="بحث بالاسم أو الكود أو الرقم الوظيفي..."
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
        />
        <Select
          value={dept}
          onChange={(e) => {
            setDept(e.target.value);
            setPage(1);
          }}
          className="w-44"
        >
          <option value="">كل الإدارات</option>
          {depts.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </Select>
      </div>
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>الكود</th>
                <th>الرقم الوظيفي</th>
                <th>الاسم</th>
                <th>الإدارة</th>
                <th>القسم</th>
                <th>الوظيفة</th>
                <th>الفئة</th>
                <th>الرصيد</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((e) => {
                const idx = db.employees.indexOf(e);
                return (
                  <tr key={e.code}>
                    <td>{e.code}</td>
                    <td>{e.jobNo}</td>
                    <td className="font-semibold">{e.name}</td>
                    <td>{e.dept}</td>
                    <td>{e.section}</td>
                    <td>{e.position}</td>
                    <td>{e.grade}</td>
                    <td className="tabular-nums">{e.balNow}</td>
                    <td>
                      <Badge tone={statusTone(e.status)}>{e.status}</Badge>
                    </td>
                    <td>
                      <button className="text-xs font-semibold text-primary" onClick={() => setProfile(e.code)}>
                        الملف
                      </button>{" "}
                      <button className="text-xs font-semibold text-primary" onClick={() => openModal("emp", idx)}>
                        تعديل
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => softDel("employees", idx)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!pg.slice.length ? (
                <tr>
                  <td colSpan={10} className="py-8 text-center text-muted">
                    لا نتائج
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
