import { Badge, Button, Card, Input, PageHead, Pager, paginate, statusTone } from "@/components/ui";
import { fd } from "@/lib/dates";
import { printTable } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function AttendancePage() {
  const { db, openModal, softDel, saveDb, flash } = useApp();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const rows = useMemo(
    () =>
      db.attendance.filter((a) => {
        if (!q) return true;
        return `${a.empName} ${a.empCode} ${a.status} ${a.id || ""}`.toLowerCase().includes(q.toLowerCase());
      }),
    [db.attendance, q],
  );
  const pg = paginate(rows, page, 12);
  return (
    <div>
      <PageHead
        title="الحضور والغياب"
        desc="السجلات اليدوية تتجاوز الحساب التلقائي في الموقف اليومي"
        actions={
          <>
            <Button
              variant="secondary"
              onClick={() =>
                printTable(
                  db.settings.orgName,
                  "سجل الحضور والغياب",
                  ["رقم", "التاريخ", "الموظف", "الموقف", "حضور", "انصراف", "الحالة"],
                  rows.map((a) => [a.id, fd(a.date), a.empName, a.status, a.in, a.out, a.recStatus]),
                )
              }
            >
              طباعة
            </Button>
            <Button onClick={() => openModal("att")}>تسجيل حضور / غياب</Button>
          </>
        }
      />
      <Input
        className="mb-3"
        placeholder="بحث..."
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
                <th>التاريخ</th>
                <th>الموظف</th>
                <th>الموقف</th>
                <th>حضور</th>
                <th>انصراف</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((a) => {
                const i = db.attendance.indexOf(a);
                return (
                  <tr key={a.id || i}>
                    <td>{a.id}</td>
                    <td>{fd(a.date)}</td>
                    <td className="font-semibold">{a.empName}</td>
                    <td>
                      <Badge tone={statusTone(a.status)}>{a.status}</Badge>
                    </td>
                    <td>{a.in || "—"}</td>
                    <td>{a.out || "—"}</td>
                    <td>
                      <Badge tone={statusTone(a.recStatus)}>{a.recStatus}</Badge>
                    </td>
                    <td className="whitespace-nowrap">
                      <button className="text-xs font-semibold text-primary" onClick={() => openModal("att", i)}>
                        تعديل
                      </button>{" "}
                      <button
                        className="text-xs font-semibold text-muted"
                        onClick={() => {
                          saveDb((d) => {
                            const attendance = d.attendance.map((x, ix) =>
                              ix === i ? { ...x, recStatus: "ملغاة" } : x,
                            );
                            return { ...d, attendance };
                          });
                          flash("أُلغي السجل");
                        }}
                      >
                        إلغاء
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => softDel("attendance", i)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!pg.slice.length ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-muted">
                    لا سجلات يدوية
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
