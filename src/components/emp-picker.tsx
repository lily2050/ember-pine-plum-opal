import { Input } from "@/components/ui";
import type { Employee } from "@/lib/types";
import { useEffect, useMemo, useRef, useState } from "react";

export function EmpPicker({
  employees,
  value,
  onChange,
}: {
  employees: Employee[];
  value: string;
  onChange: (code: string) => void;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const selected = employees.find((e) => e.code === value);
  const hits = useMemo(() => {
    const s = q.trim().toLowerCase();
    const src = employees.filter((e) => e.status !== "موقوف");
    if (!s) return src.slice(0, 8);
    return src
      .filter((e) =>
        `${e.name} ${e.code} ${e.jobNo} ${e.nationalId} ${e.dept}`.toLowerCase().includes(s),
      )
      .slice(0, 8);
  }, [employees, q]);

  useEffect(() => {
    const onDoc = (ev: MouseEvent) => {
      if (!wrap.current?.contains(ev.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={wrap}>
      <Input
        placeholder="ابحث بالاسم أو الرقم الوظيفي أو القومي..."
        value={open ? q : selected ? `${selected.name} — ${selected.jobNo}` : q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          if (value) onChange("");
        }}
        onFocus={() => {
          setOpen(true);
          if (selected) setQ("");
        }}
      />
      {open ? (
        <div className="absolute z-30 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-border bg-card shadow-lg">
          {hits.length ? (
            hits.map((e) => (
              <button
                key={e.code}
                type="button"
                className="block w-full px-3 py-2 text-right text-sm hover:bg-primary-soft"
                onMouseDown={(ev) => ev.preventDefault()}
                onClick={() => {
                  onChange(e.code);
                  setQ("");
                  setOpen(false);
                }}
              >
                {e.name}{" "}
                <span className="text-[11px] text-muted">
                  {e.jobNo} · {e.dept}
                </span>
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-xs text-muted">لا نتائج</div>
          )}
        </div>
      ) : null}
    </div>
  );
}
