import { Badge, Button, Card, PageHead } from "@/components/ui";
import { fd } from "@/lib/dates";
import { useApp } from "@/lib/store";

export function TrashPage() {
  const { db, restoreTrash, purgeTrash, emptyTrash } = useApp();
  return (
    <div>
      <PageHead
        title="المحذوفات"
        desc={`${db.trash.length} سجل`}
        actions={
          <Button variant="danger" onClick={emptyTrash} disabled={!db.trash.length}>
            تفريغ السلة
          </Button>
        }
      />
      <Card>
        <div className="tbl-scroll">
          <table>
            <thead>
              <tr>
                <th>النوع</th>
                <th>البيان</th>
                <th>تاريخ الحذف</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {db.trash.map((t, i) => {
                const d = t.data as { name?: string; empName?: string; id?: string };
                return (
                  <tr key={i}>
                    <td>
                      <Badge>{t.collection}</Badge>
                    </td>
                    <td>{d.name || d.empName || d.id || "سجل"}</td>
                    <td>{fd(t.deletedAt)}</td>
                    <td>
                      <button className="text-xs font-semibold text-primary" onClick={() => restoreTrash(i)}>
                        استعادة
                      </button>{" "}
                      <button className="text-xs font-semibold text-err" onClick={() => purgeTrash(i)}>
                        حذف نهائي
                      </button>
                    </td>
                  </tr>
                );
              })}
              {!db.trash.length ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-muted">
                    السلة فارغة
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
