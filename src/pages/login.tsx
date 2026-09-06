import { Button } from "@/components/ui";
import { useApp } from "@/lib/store";
import { useState } from "react";

export function LoginPage() {
  const { login, db } = useApp();
  const [u, setU] = useState("admin");
  const [p, setP] = useState("admin");
  const [err, setErr] = useState("");
  const go = () => {
    const m = login(u, p);
    if (m) setErr(m);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-sidebar p-4">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-card p-6 text-fg shadow-2xl">
        <h1 className="text-center text-xl font-extrabold leading-snug text-primary">{db.settings.appTitle}</h1>
        <p className="mb-5 mt-1 text-center text-xs text-muted">نظام شؤون الموظفين — تسجيل الدخول</p>
        <label className="mb-1 block text-xs font-semibold text-muted">اسم المستخدم</label>
        <input
          className="mb-3 h-10 w-full rounded-md border border-border bg-card px-3"
          value={u}
          onChange={(e) => setU(e.target.value)}
        />
        <label className="mb-1 block text-xs font-semibold text-muted">كلمة المرور</label>
        <input
          type="password"
          className="mb-3 h-10 w-full rounded-md border border-border bg-card px-3"
          value={p}
          onChange={(e) => setP(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") go();
          }}
        />
        {err ? <div className="mb-3 rounded-md bg-warn/20 px-3 py-2 text-xs text-warn">{err}</div> : null}
        <Button className="w-full" onClick={go}>
          دخول
        </Button>
        <p className="mt-3 text-center text-[11px] text-muted">admin / admin · hr / hr · viewer / viewer</p>
      </div>
    </div>
  );
}
