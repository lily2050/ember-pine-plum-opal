import { Badge, Button, Card, Input, PageHead, Pager, paginate, statusTone } from "@/components/ui";
import { fd } from "@/lib/dates";
import { printTable } from "@/lib/io";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function LeavesPage() {
  const { db, openModal, softDel } = useApp();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const rows = useMemo(
    () =>
      db.leaves.filter((l) => {
        if (!q) return true;
        return `${l.empName} ${l.empCode} ${l.id} ${l.type} ${l.dept}`.toLowerCase().includes(q.toLowerCase());
      }),
    [db.leaves, q],
  );
  const pg = paginate(rows, page, 12);
  return (
    <div>
      <PageHead
        title="الإجازات"
        desc={`${rows.length} حركة`}
        actions={
          <>
            <Button
              variant="secondary"
              onClick={() =>
                printTable(
                  db.settings.orgName,
                  "سجل الإجازات",
                  ["رقم", "الموظف", "النوع", "من", "إلى", "أيام عمل", "الحالة"],
                  rows.map((l) => [l.id, l.empName, l.type, fd(l.from), fd(l.to), l.workDays, l.status]),
                )
              }
            >
              طباعة
            </Button>
            <Button onClick={() => openModal("leave")}>تسجيل إجازة</Button>
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
                <th>الموظف</th>
                <th>النوع</th>
                <th>من</th>
                <th>إلى</th>
                <th>أيام عمل</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pg.slice.map((l) => {
                const i = db.leaves.indexOf(l);
                return (
                  <tr key={l.id}>
                    <td>{l.id}</td>
                    <td className="font-semibold">{l.empName}</td>
                    <td>{l.type}</td>
                    <td>{fd(l.from)}</td>
                    <td>{fd(l.to)}</td>
                    <td>{l.workDays}</td>
                    <td>
                      <Badge tone={statusTone(l.status)}>{l.status}</Badge>
                    </td>
                    <td>
                      <button className="text-xs font-semibold text-primary" onClick={() => openModal("leave", i)}>
                        تعديل
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => softDel("leaves", i)}>
                        حذف
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!pg.slice.length ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-muted">
                    لا إجازات
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
