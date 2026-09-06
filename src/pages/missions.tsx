import { Badge, Button, Card, Input, PageHead, Pager, paginate, statusTone } from "@/components/ui";
import { fd } from "@/lib/dates";
import { printTable } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function MissionsPage() {
  const { db, openModal, softDel, saveDb, flash } = useApp();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const rows = useMemo(
    () =>
      db.missions.filter((m) => {
        if (!q) return true;
        return `${m.empName} ${m.id} ${m.type} ${m.org} ${m.place}`.toLowerCase().includes(q.toLowerCase());
      }),
    [db.missions, q],
  );
  const pg = paginate(rows, page, 12);
  return (
    <div>
      <PageHead
        title="المأموريات"
        desc={`${rows.length} حركة · جهة المأمورية والفترة تُحفظ مع رقم تكليف`}
        actions={
          <>
            <Button
              variant="secondary"
              onClick={() =>
                printTable(
                  db.settings.orgName,
                  "سجل المأموريات",
                  ["رقم", "الموظف", "النوع", "الجهة", "من", "إلى", "أيام", "الحالة"],
                  rows.map((m) => [m.id, m.empName, m.type, m.org, fd(m.from), fd(m.to), m.days, m.status]),
                )
              }
            >
              طباعة
            </Button>
            <Button onClick={() => openModal("mission")}>تسجيل مأمورية</Button>
          </>
        }
      />
      <Input
        className="mb-3"
        placeholder="بحث برقم المأمورية أو الموظف أو الجهة"
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setPage(1);
        }}
      />
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>رقم</th>
                <th>الموظف</th>
                <th>النوع</th>
                <th>الجهة</th>
                <th>من</th>
                <th>إلى</th>
                <th>الأيام</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((m) => {
                const i = db.missions.indexOf(m);
                return (
                  <tr key={m.id}>
                    <td className="font-semibold">{m.id}</td>
                    <td>{m.empName}</td>
                    <td>{m.type}</td>
                    <td>{m.org}</td>
                    <td>{fd(m.from)}</td>
                    <td>{fd(m.to)}</td>
                    <td>{m.days}</td>
                    <td>
                      <Badge tone={statusTone(m.status)}>{m.status}</Badge>
                    </td>
                    <td className="whitespace-nowrap">
                      <button className="text-xs font-semibold text-primary" onClick={() => openModal("mission", i)}>
                        تعديل
                      </button>{" "}
                      <button
                        className="text-xs font-semibold text-muted"
                        onClick={() => {
                          saveDb((d) => {
                            const missions = d.missions.map((x, ix) => (ix === i ? { ...x, status: "ملغاة" } : x));
                            return { ...d, missions };
                          });
                          flash("أُلغيت المأمورية");
                        }}
                      >
                        إلغاء
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => softDel("missions", i)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!pg.slice.length ? (
                <tr>
                  <td colSpan={9} className="py-8 text-center text-muted">
                    لا مأموريات
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
