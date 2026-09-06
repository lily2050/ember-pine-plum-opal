import { ModalHost } from "@/components/forms";
import { useApp } from "@/lib/store";
import type { PageId } from "@/lib/types";
import { fd, todayYmd } from "@/lib/dates";
import {
  Building2,
  CalendarCheck,
  ClipboardList,
  FileSearch,
  FolderOpen,
  LayoutGrid,
  LogOut,
  MapPin,
  Menu,
  Moon,
  Search,
  Settings,
  Sun,
  Timer,
  Trash2,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";

const NAV: { id: PageId; label: string; icon: typeof Users }[] = [
  { id: "dashboard", label: "لوحة التحكم", icon: LayoutGrid },
  { id: "employees", label: "الموظفون", icon: Users },
  { id: "profile", label: "ملف موظف", icon: FolderOpen },
  { id: "leaves", label: "الإجازات", icon: ClipboardList },
  { id: "permissions", label: "الأذونات", icon: Timer },
  { id: "missions", label: "المأموريات", icon: MapPin },
  { id: "attendance", label: "الحضور", icon: CalendarCheck },
  { id: "sections", label: "الأقسام", icon: Building2 },
  { id: "search", label: "البحث", icon: Search },
  { id: "reports", label: "التقارير", icon: FileSearch },
  { id: "trash", label: "المحذوفات", icon: Trash2 },
  { id: "settings", label: "الإعدادات", icon: Settings },
];

export function Shell({ children }: { children: ReactNode }) {
  const { db, page, setPage, user, logout, theme, toggleTheme, sidebarOpen, setSidebar, openModal, toast } =
    useApp();
  const hidden = new Set(user?.hiddenScreens || []);
  const items = NAV.filter((n) => !hidden.has(n.id));

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-bg text-fg">
        {sidebarOpen ? (
          <button
            className="fixed inset-0 z-30 bg-black/30 md:hidden"
            aria-label="إغلاق القائمة"
            onClick={() => setSidebar(false)}
          />
        ) : null}
        <aside
          className={`fixed bottom-0 right-0 top-0 z-40 flex w-[250px] flex-col bg-sidebar text-white transition-transform ${
            sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <div className="border-b border-white/10 px-4 py-5">
            <div className="text-[10px] opacity-70">نظام المتابعة</div>
            <div className="mt-1 text-lg font-extrabold leading-tight">{db.settings.appTitle}</div>
            <div className="mt-1 text-[11px] opacity-70">{db.settings.orgName}</div>
          </div>
          <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
            {items.map((n) => {
              const Icon = n.icon;
              const on = page === n.id;
              return (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setPage(n.id)}
                  className={`flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-right text-[13px] ${
                    on ? "bg-white/15 font-semibold" : "text-white/85 hover:bg-white/8"
                  }`}
                >
                  <Icon className="size-4 opacity-90" strokeWidth={1.75} />
                  {n.label}
                </button>
              );
            })}
          </nav>
        </aside>
        <div className="md:mr-[250px]">
          <header className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-3 py-2.5 md:px-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-md border border-border bg-card md:hidden"
                onClick={() => setSidebar(!sidebarOpen)}
                aria-label="القائمة"
              >
                <Menu className="size-4" />
              </button>
              <button
                type="button"
                className="grid size-9 place-items-center rounded-md border border-border bg-card"
                onClick={toggleTheme}
                aria-label="الوضع الليلي"
              >
                {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
              <div>
                <div className="text-sm font-bold">{db.settings.orgName}</div>
                <div className="text-[11px] text-muted">
                  {db.settings.dept} · {fd(todayYmd())}
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                className="rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white"
                onClick={() => {
                  setPage("permissions");
                  openModal("perm");
                }}
              >
                تسجيل إذن
              </button>
              <button
                type="button"
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold"
                onClick={() => {
                  setPage("leaves");
                  openModal("leave");
                }}
              >
                تسجيل إجازة
              </button>
              <button
                type="button"
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold"
                onClick={() => {
                  setPage("missions");
                  openModal("mission");
                }}
              >
                مأمورية
              </button>
              <button
                type="button"
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold"
                onClick={() => setPage("employees")}
              >
                موظفون
              </button>
              <span className="px-2 text-[11px] text-muted">
                {user?.name} ({user?.role})
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold"
                onClick={logout}
              >
                <LogOut className="size-3.5" /> خروج
              </button>
            </div>
          </header>
          <main className="px-3 py-4 md:px-5 md:py-5">{children}</main>
        </div>
        <ModalHost />
        {toast ? (
          <div
            className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl px-4 py-2.5 text-sm text-white ${
              toast.kind === "err" ? "bg-err" : "bg-ok"
            }`}
          >
            {toast.text}
          </div>
        ) : null}
      </div>
    </div>
  );
}
