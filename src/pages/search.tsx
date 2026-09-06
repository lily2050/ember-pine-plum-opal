import { Card, CardH, Input, PageHead } from "@/components/ui";
import { fd } from "@/lib/dates";
import { useApp } from "@/lib/store";
import { useState } from "react";

export function SearchPage() {
  const { db, setProfile } = useApp();
  const [q, setQ] = useState("");
  const s = q.trim().toLowerCase();
  const emps = s
    ? db.employees.filter((e) => `${e.name} ${e.jobNo} ${e.code} ${e.nationalId} ${e.dept}`.toLowerCase().includes(s))
    : [];
  const leaves = s ? db.leaves.filter((l) => `${l.empName} ${l.id} ${l.type}`.toLowerCase().includes(s)) : [];
  const perms = s ? db.permissions.filter((p) => `${p.empName} ${p.id} ${p.type}`.toLowerCase().includes(s)) : [];
  return (
    <div>
      <PageHead title="البحث الشامل" desc="موظفون · إجازات · أذونات" />
      <Input placeholder="اكتب للبحث..." value={q} onChange={(e) => setQ(e.target.value)} className="mb-4" />
      {!s ? (
        <p className="text-sm text-muted">ابدأ بالكتابة للبحث في السجلات</p>
      ) : (
        <div className="space-y-3">
          <Card>
            <CardH>الموظفون ({emps.length})</CardH>
            {emps.slice(0, 20).map((e) => (
              <button
                key={e.code}
                type="button"
                className="block w-full border-b border-border px-4 py-2 text-right text-sm hover:bg-th"
                onClick={() => setProfile(e.code)}
              >
                {e.name} · {e.jobNo} · {e.dept}
              </button>
            ))}
            {!emps.length ? <p className="px-4 py-6 text-sm text-muted">لا نتائج</p> : null}
          </Card>
          <Card>
            <CardH>الإجازات ({leaves.length})</CardH>
            <div className="tbl-scroll">
              <table>
                <tbody>
                  {leaves.slice(0, 20).map((l) => (
                    <tr key={l.id}>
                      <td>{l.id}</td>
                      <td>{l.empName}</td>
                      <td>{l.type}</td>
                      <td>{fd(l.from)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <CardH>الأذونات ({perms.length})</CardH>
            <div className="tbl-scroll">
              <table>
                <tbody>
                  {perms.slice(0, 20).map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.empName}</td>
                      <td>{p.type}</td>
                      <td>{p.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
