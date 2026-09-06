import { Shell } from "@/components/shell";
import { AttendancePage } from "@/pages/attendance";
import { DashboardPage } from "@/pages/dashboard";
import { EmployeesPage } from "@/pages/employees";
import { LeavesPage } from "@/pages/leaves";
import { LoginPage } from "@/pages/login";
import { MissionsPage } from "@/pages/missions";
import { PermissionsPage } from "@/pages/permissions";
import { ProfilePage } from "@/pages/profile";
import { ReportsPage } from "@/pages/reports";
import { SearchPage } from "@/pages/search";
import { SectionsPage } from "@/pages/sections";
import { SettingsPage } from "@/pages/settings";
import { TrashPage } from "@/pages/trash";
import { useApp } from "@/lib/store";
import { useEffect, useLayoutEffect } from "react";

export function App() {
  const { hydrate, user, page, theme, hydrated } = useApp();
  useLayoutEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }, [theme, hydrated]);

  if (!hydrated) {
    return (
      <div className="grid min-h-screen place-items-center bg-sidebar text-white">
        <div className="text-sm opacity-80">جاري التحميل…</div>
      </div>
    );
  }

  if (!user) return <LoginPage />;

  return (
    <Shell>
      {page === "dashboard" ? <DashboardPage /> : null}
      {page === "employees" ? <EmployeesPage /> : null}
      {page === "profile" ? <ProfilePage /> : null}
      {page === "leaves" ? <LeavesPage /> : null}
      {page === "permissions" ? <PermissionsPage /> : null}
      {page === "missions" ? <MissionsPage /> : null}
      {page === "attendance" ? <AttendancePage /> : null}
      {page === "sections" ? <SectionsPage /> : null}
      {page === "search" ? <SearchPage /> : null}
      {page === "reports" ? <ReportsPage /> : null}
      {page === "trash" ? <TrashPage /> : null}
      {page === "settings" ? <SettingsPage /> : null}
    </Shell>
  );
}
