export type PageId =
  | "dashboard"
  | "employees"
  | "profile"
  | "leaves"
  | "permissions"
  | "missions"
  | "attendance"
  | "sections"
  | "search"
  | "reports"
  | "trash"
  | "settings";

export type Employee = {
  code: string;
  jobNo: string;
  name: string;
  enName?: string;
  nationalId: string;
  dept: string;
  section: string;
  subSection: string;
  position: string;
  grade: string;
  hiredAt: string;
  birth: string;
  gender: string;
  status: string;
  phone: string;
  email: string;
  manager: string;
  marital?: string;
  insurance?: string;
  salary?: number | string;
  hazardPct?: number | string;
  address?: string;
  balYear: number;
  balUsed: number;
  balNow: number;
  notes: string;
};

export type Leave = {
  id: string;
  date: string;
  empCode: string;
  empName: string;
  dept: string;
  type: string;
  from: string;
  to: string;
  days: number;
  workDays: number;
  holDays: number;
  status: string;
  decision: string;
  notes: string;
  user: string;
  registeredAt: string;
};

export type Permission = {
  id: string;
  date: string;
  empCode: string;
  empName: string;
  jobNo: string;
  subSection: string;
  type: string;
  from: string;
  to: string;
  duration: string;
  status: string;
  notes: string;
  registeredAt: string;
};

export type LeaveType = {
  code: string;
  name: string;
  affectsBalance: boolean;
  maxYear: number;
  needsApproval: boolean;
  notes: string;
};

export type PermType = {
  code: string;
  name: string;
  monthlyCount: number;
  needsApproval: boolean;
};

export type Department = {
  code: string;
  name: string;
  manager: string;
  notes: string;
};

export type Position = { code: string; name: string; notes: string };
export type Holiday = { date: string; name: string; notes: string };
export type Section = {
  name: string;
  parent: string;
  dept: string;
};

export type MissionType = {
  code: string;
  name: string;
  needsApproval: boolean;
  notes: string;
};

export type Mission = {
  id: string;
  date: string;
  empCode: string;
  empName: string;
  dept: string;
  type: string;
  org: string;
  place: string;
  from: string;
  to: string;
  tFrom: string;
  tTo: string;
  days: number;
  status: string;
  notes: string;
  ref?: string;
};

export type Attendance = {
  id?: string;
  date: string;
  empCode: string;
  empName: string;
  status: string;
  in: string;
  out: string;
  recStatus: string;
};

export type AppUser = {
  username: string;
  password: string;
  name: string;
  role: string;
  perms: string[];
  hiddenScreens: string[];
};

export type LimitScope =
  | "all"
  | "employee"
  | "department"
  | "section"
  | "jobCategory"
  | "permType";

export type LimitWindow = "day" | "month" | "all";
export type LimitApply = "each" | "group";

export type PermLimit = {
  id: string;
  name: string;
  enabled: boolean;
  scope: LimitScope;
  scopeValue: string;
  window: LimitWindow;
  types: "all" | string;
  maxHours: number;
  /** each = سقف لكل موظف داخل المستوى، group = سقف مشترك لمجموع المستوى */
  apply?: LimitApply;
  notes: string;
};

export type TrashItem = {
  collection: string;
  deletedAt: string;
  data: unknown;
};

export type PrintOpts = {
  font: string;
  size: number;
  dateMode: "print" | "report";
};

export type Settings = {
  orgName: string;
  dept: string;
  fiscalYear: string;
  defaultBalance: number;
  restDays: string[];
  appTitle: string;
  dashWidgets?: string[];
  print?: PrintOpts;
};

export type AppDB = {
  employees: Employee[];
  leaves: Leave[];
  permissions: Permission[];
  leaveTypes: LeaveType[];
  permTypes: PermType[];
  departments: Department[];
  positions: Position[];
  holidays: Holiday[];
  missions: Mission[];
  missionTypes: MissionType[];
  attendance: Attendance[];
  sections: Section[];
  users: AppUser[];
  settings: Settings;
  permLimits: PermLimit[];
  trash: TrashItem[];
};

export type LimitCheck = {
  ok: boolean;
  violations: {
    limit: PermLimit;
    usedMinutes: number;
    addMinutes: number;
    maxMinutes: number;
  }[];
  matches: {
    limit: PermLimit;
    usedMinutes: number;
    addMinutes: number;
    maxMinutes: number;
  }[];
};

export type DailyRow = {
  code: string;
  name: string;
  jn: string;
  dept: string;
  sec: string;
  sub: string;
  pos: string;
  grade: string;
  st: string;
  det: string;
};
