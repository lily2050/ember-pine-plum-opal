import { Button, Card, CardH, Input, PageHead, Select } from "@/components/ui";
import { useApp } from "@/lib/store";
import { useMemo, useState } from "react";

export function SectionsPage() {
  const { db, openModal, softDel } = useApp();
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return db.sections;
    return db.sections.filter((x) => `${x.name} ${x.parent} ${x.dept}`.toLowerCase().includes(s));
  }, [db.sections, q]);
  const tree: Record<string, Record<string, typeof rows>> = {};
  for (const s of db.sections) {
    const d = s.dept || "(بدون إدارة)";
    const p = s.parent || "(بدون قسم)";
    if (!tree[d]) tree[d] = {};
    if (!tree[d]![p]) tree[d]![p] = [];
    tree[d]![p]!.push(s);
  }
  return (
    <div>
      <PageHead
        title="الأقسام الفرعية"
        desc="هيكل الإدارات والأقسام والأقسام الفرعية"
        actions={<Button onClick={() => openModal("section")}>إضافة قسم فرعي</Button>}
      />
      <Input className="mb-3" placeholder="بحث..." value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="mb-3 grid gap-3 lg:grid-cols-2">
        <Card className="p-4">
          <h3 className="mb-3 font-bold">الشجرة</h3>
          {Object.keys(tree).length ? (
            Object.keys(tree)
              .sort()
              .map((d) => (
                <div key={d} className="mb-3">
                  <div className="mb-1 text-sm font-bold text-primary">{d}</div>
                  {Object.keys(tree[d]!)
                    .sort()
                    .map((p) => (
                      <div key={p} className="mb-2 rounded-md bg-th p-2">
                        <div className="mb-1 text-xs font-semibold">{p}</div>
                        <div className="flex flex-wrap gap-1.5">
                          {tree[d]![p]!.map((s) => (
                            <span key={s.name + s.parent} className="rounded-full bg-card px-2 py-0.5 text-[11px]">
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))
          ) : (
            <p className="text-sm text-muted">لا أقسام بعد — أضف من الزر أعلاه أو من الإعدادات</p>
          )}
        </Card>
        <Card>
          <CardH>القائمة</CardH>
          <div className="tbl-scroll">
            <table>
              <thead>
                <tr>
                  <th>القسم الفرعي</th>
                  <th>القسم الأصلي</th>
                  <th>الإدارة</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => {
                  const i = db.sections.indexOf(s);
                  return (
                    <tr key={s.name + s.parent + i}>
                      <td className="font-semibold">{s.name}</td>
                      <td>{s.parent}</td>
                      <td>{s.dept}</td>
                      <td>
                        <button className="text-xs font-semibold text-primary" onClick={() => openModal("section", i)}>
                          تعديل
                        </button>{" "}
                        <button className="text-xs font-semibold text-err" onClick={() => softDel("sections", i)}>
                          حذف
                        </button>
                      </td>
                    </tr>
                  );
                })}
                {!rows.length ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-muted">
                      لا أقسام
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function QuickSectionFields() {
  const { db, saveSection } = useApp();
  const [name, setName] = useState("");
  const [parent, setParent] = useState("");
  const [dept, setDept] = useState("");
  const parents = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
  const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      <Input className="min-w-[120px] flex-1" placeholder="القسم الفرعي" value={name} onChange={(e) => setName(e.target.value)} />
      <Select className="w-40" value={parent} onChange={(e) => setParent(e.target.value)}>
        <option value="">القسم الأصلي</option>
        {parents.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </Select>
      <Select className="w-40" value={dept} onChange={(e) => setDept(e.target.value)}>
        <option value="">الإدارة</option>
        {depts.map((p) => (
          <option key={p}>{p}</option>
        ))}
      </Select>
      <Button
        onClick={() => {
          if (!name.trim()) return;
          saveSection({ name: name.trim(), parent, dept }, null);
          setName("");
        }}
      >
        إضافة
      </Button>
    </div>
  );
}
