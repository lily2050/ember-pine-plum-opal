import { cn } from "@/lib/cn";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "pill";
}) {
  const styles = {
    primary: "bg-primary text-white border-transparent hover:bg-primary-2",
    secondary: "bg-card text-fg border-border hover:bg-th",
    ghost: "bg-transparent text-primary border-transparent hover:bg-primary-soft",
    danger: "bg-err/10 text-err border-err/30 hover:bg-err/20",
    pill: "rounded-full bg-card text-fg border-border hover:bg-th",
  }[variant];
  return (
    <button
      type={props.type ?? "button"}
      className={cn(
        "inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors disabled:opacity-45",
        styles,
        className,
      )}
      {...props}
    />
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-fg outline-none focus:border-primary-2",
        props.className,
      )}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-fg outline-none focus:border-primary-2",
        props.className,
      )}
    />
  );
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm text-fg outline-none focus:border-primary-2",
        props.className,
      )}
    />
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1.5 block text-xs font-semibold text-muted">{label}</span>
      {children}
    </label>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-card shadow-sm", className)}>
      {children}
    </div>
  );
}

export function CardH({ children, extra }: { children: ReactNode; extra?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-border bg-th/60 px-4 py-3 text-sm font-bold">
      <span>{children}</span>
      {extra}
    </div>
  );
}

export function Kpi({
  label,
  value,
  tone = "default",
}: {
  label: string;
  value: ReactNode;
  tone?: "default" | "ok" | "warn" | "err" | "teal";
}) {
  const color = {
    default: "text-fg",
    ok: "text-ok",
    warn: "text-warn",
    err: "text-err",
    teal: "text-primary",
  }[tone];
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="text-[11px] font-medium text-muted">{label}</div>
      <div className={cn("mt-1 text-2xl font-extrabold tabular-nums", color)}>{value}</div>
    </div>
  );
}

export function Badge({
  children,
  tone = "muted",
}: {
  children: ReactNode;
  tone?: "ok" | "warn" | "err" | "info" | "muted" | "work";
}) {
  const map = {
    ok: "bg-ok/15 text-ok",
    warn: "bg-warn/15 text-warn",
    err: "bg-err/15 text-err",
    info: "bg-primary-soft text-primary",
    muted: "bg-th text-muted",
    work: "bg-primary-soft text-primary",
  }[tone];
  return (
    <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold", map)}>
      {children}
    </span>
  );
}

export function statusTone(s: string): "ok" | "warn" | "err" | "muted" | "work" | "info" {
  if (s === "معتمدة" || s === "نشط" || s === "حاضر") return "ok";
  if (s === "مسودة" || s === "إذن" || s === "راحة") return "warn";
  if (s === "ملغاة" || s === "موقوف" || s === "غائب" || s === "غياب بدون إذن") return "err";
  if (s === "إجازة" || s === "عطلة رسمية" || s === "غياب بعذر") return "info";
  return "work";
}

export function Modal({
  title,
  sub,
  children,
  footer,
  onClose,
}: {
  title: string;
  sub?: string;
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4" onClick={onClose}>
      <div
        className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-border bg-card px-4 py-3">
          <div>
            <h3 className="text-base font-bold">{title}</h3>
            {sub ? <p className="text-[11px] text-muted">{sub}</p> : null}
          </div>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-full bg-th text-sm"
            onClick={onClose}
            aria-label="إغلاق"
          >
            ×
          </button>
        </div>
        <div className="px-4 py-4">{children}</div>
        <div className="sticky bottom-0 flex gap-2 border-t border-border bg-card px-4 py-3">{footer}</div>
      </div>
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="px-4 py-10 text-center text-sm text-muted">{children}</div>;
}

export function PageHead({
  title,
  desc,
  actions,
}: {
  title: string;
  desc?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
      <div>
        <h1 className="text-[22px] font-extrabold tracking-tight">{title}</h1>
        {desc ? <p className="mt-0.5 text-xs text-muted">{desc}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}

export function Pager({
  page,
  pages,
  total,
  onPage,
}: {
  page: number;
  pages: number;
  total: number;
  onPage: (n: number) => void;
}) {
  if (pages <= 1) {
    return total ? (
      <div className="border-t border-border px-3 py-2 text-xs text-muted">{total} سجل</div>
    ) : null;
  }
  return (
    <div className="flex items-center justify-between gap-2 border-t border-border px-3 py-2 text-xs text-muted">
      <span>{total} سجل</span>
      <div className="flex items-center gap-1">
        <Button variant="secondary" className="min-h-8 px-2 py-1 text-xs" disabled={page <= 1} onClick={() => onPage(page - 1)}>
          السابق
        </Button>
        <span className="px-2 tabular-nums">
          {page} / {pages}
        </span>
        <Button
          variant="secondary"
          className="min-h-8 px-2 py-1 text-xs"
          disabled={page >= pages}
          onClick={() => onPage(page + 1)}
        >
          التالي
        </Button>
      </div>
    </div>
  );
}

export function paginate<T>(rows: T[], page: number, size = 12) {
  const pages = Math.max(1, Math.ceil(rows.length / size));
  const p = Math.min(Math.max(1, page), pages);
  return { page: p, pages, slice: rows.slice((p - 1) * size, p * size), total: rows.length };
}

export function Tabs({
  items,
  value,
  onChange,
}: {
  items: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="mb-3 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs font-semibold",
            value === t.id ? "border-primary bg-primary text-white" : "border-border bg-card",
          )}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
