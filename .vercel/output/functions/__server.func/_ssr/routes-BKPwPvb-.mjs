import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sun, c as Moon, d as LayoutGrid, f as FolderOpen, i as Timer, l as Menu, m as ClipboardList, o as Settings, p as FileSearch, r as Trash2, s as Search, t as Users, u as LogOut } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKPwPvb-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...parts) {
	return parts.filter(Boolean).join(" ");
}
function Button({ variant = "primary", className, ...props }) {
	const styles = {
		primary: "bg-primary text-white border-transparent hover:bg-primary-2",
		secondary: "bg-card text-fg border-border hover:bg-th",
		ghost: "bg-transparent text-primary border-transparent hover:bg-primary-soft",
		danger: "bg-err/10 text-err border-err/30 hover:bg-err/20",
		pill: "rounded-full bg-card text-fg border-border hover:bg-th"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: props.type ?? "button",
		className: cn("inline-flex min-h-10 items-center justify-center gap-2 rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors disabled:opacity-45", styles, className),
		...props
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cn("h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-fg outline-none focus:border-primary-2", props.className)
	});
}
function Select(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		className: cn("h-10 w-full rounded-md border border-border bg-card px-3 text-sm text-fg outline-none focus:border-primary-2", props.className)
	});
}
function Textarea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: cn("w-full rounded-md border border-border bg-card px-3 py-2.5 text-sm text-fg outline-none focus:border-primary-2", props.className)
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-3 block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-semibold text-muted",
			children: label
		}), children]
	});
}
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden rounded-lg border border-border bg-card shadow-sm", className),
		children
	});
}
function CardH({ children, extra }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 border-b border-border bg-th/60 px-4 py-3 text-sm font-bold",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), extra]
	});
}
function Kpi({ label, value, tone = "default" }) {
	const color = {
		default: "text-fg",
		ok: "text-ok",
		warn: "text-warn",
		err: "text-err",
		teal: "text-primary"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] font-medium text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mt-1 text-2xl font-extrabold tabular-nums", color),
			children: value
		})]
	});
}
function Badge({ children, tone = "muted" }) {
	const map = {
		ok: "bg-ok/15 text-ok",
		warn: "bg-warn/15 text-warn",
		err: "bg-err/15 text-err",
		info: "bg-primary-soft text-primary",
		muted: "bg-th text-muted",
		work: "bg-primary-soft text-primary"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold", map),
		children
	});
}
function statusTone(s) {
	if (s === "معتمدة" || s === "نشط" || s === "حاضر") return "ok";
	if (s === "مسودة" || s === "إذن" || s === "راحة") return "warn";
	if (s === "ملغاة" || s === "موقوف" || s === "غائب" || s === "غياب بدون إذن") return "err";
	if (s === "إجازة" || s === "عطلة رسمية" || s === "غياب بعذر") return "info";
	return "work";
}
function Modal({ title, sub, children, footer, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/35 p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-xl border border-border bg-card shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sticky top-0 z-10 flex items-start justify-between border-b border-border bg-card px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold",
						children: title
					}), sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted",
						children: sub
					}) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-8 place-items-center rounded-full bg-th text-sm",
						onClick: onClose,
						"aria-label": "إغلاق",
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 py-4",
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky bottom-0 flex gap-2 border-t border-border bg-card px-4 py-3",
					children: footer
				})
			]
		})
	});
}
function PageHead({ title, desc, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-wrap items-start justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-[22px] font-extrabold tracking-tight",
			children: title
		}), desc ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-xs text-muted",
			children: desc
		}) : null] }), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			children: actions
		}) : null]
	});
}
function Pager({ page, pages, total, onPage }) {
	if (pages <= 1) return total ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-border px-3 py-2 text-xs text-muted",
		children: [total, " سجل"]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between gap-2 border-t border-border px-3 py-2 text-xs text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [total, " سجل"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "min-h-8 px-2 py-1 text-xs",
					disabled: page <= 1,
					onClick: () => onPage(page - 1),
					children: "السابق"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "px-2 tabular-nums",
					children: [
						page,
						" / ",
						pages
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					className: "min-h-8 px-2 py-1 text-xs",
					disabled: page >= pages,
					onClick: () => onPage(page + 1),
					children: "التالي"
				})
			]
		})]
	});
}
function paginate(rows, page, size = 12) {
	const pages = Math.max(1, Math.ceil(rows.length / size));
	const p = Math.min(Math.max(1, page), pages);
	return {
		page: p,
		pages,
		slice: rows.slice((p - 1) * size, p * size),
		total: rows.length
	};
}
function Tabs({ items, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex flex-wrap gap-1.5",
		children: items.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: cn("rounded-full border px-3 py-1.5 text-xs font-semibold", value === t.id ? "border-primary bg-primary text-white" : "border-border bg-card"),
			onClick: () => onChange(t.id),
			children: t.label
		}, t.id))
	});
}
function EmpPicker({ employees, value, onChange }) {
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const wrap = (0, import_react.useRef)(null);
	const selected = employees.find((e) => e.code === value);
	const hits = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		const src = employees.filter((e) => e.status !== "موقوف");
		if (!s) return src.slice(0, 8);
		return src.filter((e) => `${e.name} ${e.code} ${e.jobNo} ${e.nationalId} ${e.dept}`.toLowerCase().includes(s)).slice(0, 8);
	}, [employees, q]);
	(0, import_react.useEffect)(() => {
		const onDoc = (ev) => {
			if (!wrap.current?.contains(ev.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: wrap,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			placeholder: "ابحث بالاسم أو الرقم الوظيفي أو القومي...",
			value: open ? q : selected ? `${selected.name} — ${selected.jobNo}` : q,
			onChange: (e) => {
				setQ(e.target.value);
				setOpen(true);
				if (value) onChange("");
			},
			onFocus: () => {
				setOpen(true);
				if (selected) setQ("");
			}
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute z-30 mt-1 max-h-52 w-full overflow-y-auto rounded-md border border-border bg-card shadow-lg",
			children: hits.length ? hits.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "block w-full px-3 py-2 text-right text-sm hover:bg-primary-soft",
				onMouseDown: (ev) => ev.preventDefault(),
				onClick: () => {
					onChange(e.code);
					setQ("");
					setOpen(false);
				},
				children: [
					e.name,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] text-muted",
						children: [
							e.jobNo,
							" · ",
							e.dept
						]
					})
				]
			}, e.code)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-2 text-xs text-muted",
				children: "لا نتائج"
			})
		}) : null]
	});
}
var DAY_NAMES = [
	"الأحد",
	"الإثنين",
	"الثلاثاء",
	"الأربعاء",
	"الخميس",
	"الجمعة",
	"السبت"
];
function todayYmd() {
	const d = /* @__PURE__ */ new Date();
	const z = (n) => String(n).padStart(2, "0");
	return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function fd(v) {
	if (!v) return "—";
	const s = String(v).slice(0, 10);
	if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return v;
	const [y, m, d] = s.split("-");
	return `${d}/${m}/${y}`;
}
function isRest(db, ymd) {
	const rest = db.settings.restDays?.length ? db.settings.restDays : ["الجمعة", "السبت"];
	const dt = /* @__PURE__ */ new Date(ymd + "T12:00:00");
	return rest.includes(DAY_NAMES[dt.getDay()] || "");
}
function isHoliday(db, ymd) {
	return (db.holidays || []).some((h) => h.date === ymd);
}
function workDays(db, from, to, deductHol = true) {
	if (!from || !to) return 0;
	const s = /* @__PURE__ */ new Date(from + "T12:00:00");
	const e = /* @__PURE__ */ new Date(to + "T12:00:00");
	if (e < s) return 0;
	let c = 0;
	for (const t = new Date(s); t <= e; t.setDate(t.getDate() + 1)) {
		const ds = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
		if (isRest(db, ds)) continue;
		if (deductHol && isHoliday(db, ds)) continue;
		c++;
	}
	return c;
}
function calendarDays(from, to) {
	if (!from || !to) return 0;
	const s = (/* @__PURE__ */ new Date(from + "T12:00:00")).getTime();
	const e = (/* @__PURE__ */ new Date(to + "T12:00:00")).getTime();
	if (e < s) return 0;
	return Math.round((e - s) / 864e5) + 1;
}
function nextId(prefix, ids) {
	let mx = 0;
	for (const id of ids) {
		if (!id.startsWith(prefix)) continue;
		const n = Number.parseInt(id.replace(/\D/g, ""), 10);
		if (n > mx) mx = n;
	}
	return prefix + String(mx + 1).padStart(6, "0");
}
function durationToMinutes(s) {
	if (!s) return 0;
	const h = s.match(/(\d+)\s*س/) || s.match(/(\d+)\s*ساعة/);
	const m = s.match(/(\d+)\s*د/);
	if (!h && !m) {
		const n = Number.parseFloat(s);
		return Number.isNaN(n) ? 0 : Math.round(n * 60);
	}
	return (h ? Number(h[1]) * 60 : 0) + (m ? Number(m[1]) : 0);
}
function minutesToLabel(mins) {
	const n = Math.max(0, Math.round(mins));
	const h = Math.floor(n / 60);
	const m = n % 60;
	if (h && m) return `${h} س ${m} د`;
	if (h) return h === 1 ? "ساعة واحدة" : `${h} ساعة`;
	return `${m} دقيقة`;
}
function timeRangeMinutes(from, to) {
	if (!from || !to) return 0;
	const [sh, sm] = from.split(":").map(Number);
	const [eh, em] = to.split(":").map(Number);
	let mins = eh * 60 + em - (sh * 60 + sm);
	if (mins < 0) mins += 1440;
	return mins;
}
function hoursLabelFromRange(from, to) {
	return minutesToLabel(timeRangeMinutes(from, to));
}
function inWindow(window, date, permDate) {
	if (window === "all") return true;
	if (window === "day") return permDate === date;
	return permDate.slice(0, 7) === date.slice(0, 7);
}
function limitApply(limit) {
	if (limit.apply === "each" || limit.apply === "group") return limit.apply;
	if (limit.scope === "department" || limit.scope === "section") return "group";
	return "each";
}
function empMatchesScope(limit, emp, permType) {
	switch (limit.scope) {
		case "all": return true;
		case "employee": return emp.code === limit.scopeValue;
		case "department": return emp.dept === limit.scopeValue;
		case "section": return emp.section === limit.scopeValue;
		case "jobCategory": return emp.grade === limit.scopeValue;
		case "permType": return permType === limit.scopeValue;
		default: return false;
	}
}
function typeMatches(limit, permType) {
	if (limit.types === "all") return true;
	return permType === limit.types;
}
function isApprovedPerm(p) {
	return (p.status || "معتمدة") !== "ملغاة" && p.status !== "مسودة";
}
function usedMinutesForLimit(db, limit, emp, date, excludeId) {
	const apply = limitApply(limit);
	return db.permissions.reduce((sum, p) => {
		if (excludeId && p.id === excludeId) return sum;
		if (!isApprovedPerm(p)) return sum;
		if (!inWindow(limit.window, date, p.date)) return sum;
		if (!typeMatches(limit, p.type)) return sum;
		const pe = db.employees.find((e) => e.code === p.empCode);
		if (!pe) return sum;
		if (apply === "each") {
			if (p.empCode !== emp.code) return sum;
			return sum + durationToMinutes(p.duration);
		}
		if (!empMatchesScope(limit, pe, p.type)) return sum;
		return sum + durationToMinutes(p.duration);
	}, 0);
}
function checkPermLimits(db, emp, permType, date, addMinutes, excludeId) {
	const violations = [];
	const matches = [];
	for (const limit of db.permLimits) {
		if (!limit.enabled) continue;
		if (!empMatchesScope(limit, emp, permType)) continue;
		if (!typeMatches(limit, permType)) continue;
		const used = usedMinutesForLimit(db, limit, emp, date, excludeId);
		const max = Math.round(limit.maxHours * 60);
		const row = {
			limit,
			usedMinutes: used,
			addMinutes,
			maxMinutes: max
		};
		matches.push(row);
		if (used + addMinutes > max) violations.push(row);
	}
	return {
		ok: violations.length === 0,
		violations,
		matches
	};
}
function hoursByType(perms) {
	const map = /* @__PURE__ */ new Map();
	for (const p of perms) {
		if (!isApprovedPerm(p)) continue;
		map.set(p.type || "أخرى", (map.get(p.type || "أخرى") || 0) + durationToMinutes(p.duration));
	}
	return [...map.entries()].map(([type, minutes]) => ({
		type,
		minutes
	})).sort((a, b) => b.minutes - a.minutes);
}
function monthlyCountUsed(db, empCode, type, month, excludeId) {
	return db.permissions.filter((p) => {
		if (excludeId && p.id === excludeId) return false;
		if (p.status === "ملغاة") return false;
		return p.empCode === empCode && p.type === type && p.date.slice(0, 7) === month;
	}).length;
}
var SCOPE_LABEL = {
	all: "الكل",
	employee: "موظف",
	department: "إدارة",
	section: "قسم",
	jobCategory: "فئة وظيفية",
	permType: "نوع إذن"
};
var WINDOW_LABEL = {
	day: "يومي",
	month: "شهري",
	all: "كل الأذونات"
};
var APPLY_LABEL = {
	each: "لكل موظف",
	group: "مجموع مشترك"
};
function scopeValueLabel(limit, db) {
	if (limit.scope === "all") return "كل الموظفين";
	if (limit.scope === "employee") return db.employees.find((e) => e.code === limit.scopeValue)?.name || limit.scopeValue || "—";
	return limit.scopeValue || "—";
}
var seed_default = {
	employees: [
		{
			"code": "EMP0001",
			"jobNo": "J1001",
			"name": "أحمد محمد علي",
			"nationalId": "1786579303",
			"dept": "الموارد البشرية",
			"section": "قسم الرواتب",
			"subSection": "",
			"position": "نائب مدير",
			"grade": "ثانية",
			"hiredAt": "2019-02-02",
			"birth": "1986-02-02",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0524942603",
			"email": "emp1@company.sa",
			"manager": "",
			"balYear": 30,
			"balUsed": 0,
			"balNow": 30,
			"notes": ""
		},
		{
			"code": "EMP0002",
			"jobNo": "J1002",
			"name": "فاطمة عبدالله حسن",
			"nationalId": "1896233790",
			"dept": "المالية",
			"section": "قسم الحسابات",
			"subSection": "",
			"position": "أخصائي",
			"grade": "ثالثة",
			"hiredAt": "2020-03-03",
			"birth": "1987-03-03",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0546913810",
			"email": "emp2@company.sa",
			"manager": "",
			"balYear": 30,
			"balUsed": 3,
			"balNow": 27,
			"notes": ""
		},
		{
			"code": "EMP0003",
			"jobNo": "J1003",
			"name": "خالد سعيد العتيبي",
			"nationalId": "1339670711",
			"dept": "تقنية المعلومات",
			"section": "قسم الشبكات",
			"subSection": "",
			"position": "محاسب",
			"grade": "رابعة",
			"hiredAt": "2021-04-04",
			"birth": "1988-04-04",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0528728463",
			"email": "emp3@company.sa",
			"manager": "",
			"balYear": 30,
			"balUsed": 11,
			"balNow": 19,
			"notes": ""
		},
		{
			"code": "EMP0004",
			"jobNo": "J1004",
			"name": "نورة إبراهيم الشمري",
			"nationalId": "1210053353",
			"dept": "العمليات",
			"section": "قسم الدعم",
			"subSection": "",
			"position": "مبرمج",
			"grade": "خامسة",
			"hiredAt": "2022-05-05",
			"birth": "1989-05-05",
			"gender": "ذكر",
			"status": "موقوف",
			"phone": "0583197857",
			"email": "emp4@company.sa",
			"manager": "",
			"balYear": 30,
			"balUsed": 1,
			"balNow": 29,
			"notes": ""
		},
		{
			"code": "EMP0005",
			"jobNo": "J1005",
			"name": "سعد عبدالرحمن القحطاني",
			"nationalId": "1734036506",
			"dept": "التسويق",
			"section": "قسم المبيعات",
			"subSection": "",
			"position": "سكرتير",
			"grade": "أولى",
			"hiredAt": "2023-06-06",
			"birth": "1990-06-06",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0566629388",
			"email": "emp5@company.sa",
			"manager": "",
			"balYear": 30,
			"balUsed": 0,
			"balNow": 30,
			"notes": ""
		},
		{
			"code": "EMP0006",
			"jobNo": "J1006",
			"name": "مريم يوسف الدوسري",
			"nationalId": "1131994523",
			"dept": "الإدارة العامة",
			"section": "قسم التوظيف",
			"subSection": "",
			"position": "مشرف",
			"grade": "ثانية",
			"hiredAt": "2018-07-07",
			"birth": "1991-07-07",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0522575562",
			"email": "emp6@company.sa",
			"manager": "فاطمة عبدالله حسن",
			"balYear": 30,
			"balUsed": 3,
			"balNow": 27,
			"notes": ""
		},
		{
			"code": "EMP0007",
			"jobNo": "J1007",
			"name": "عبدالعزيز فهد الحربي",
			"nationalId": "1349817734",
			"dept": "الموارد البشرية",
			"section": "قسم الرواتب",
			"subSection": "",
			"position": "موظف",
			"grade": "ثالثة",
			"hiredAt": "2019-08-08",
			"birth": "1992-08-08",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0577827638",
			"email": "emp7@company.sa",
			"manager": "خالد سعيد العتيبي",
			"balYear": 30,
			"balUsed": 9,
			"balNow": 21,
			"notes": ""
		},
		{
			"code": "EMP0008",
			"jobNo": "J1008",
			"name": "هند سليمان المطيري",
			"nationalId": "1128492780",
			"dept": "المالية",
			"section": "قسم الحسابات",
			"subSection": "",
			"position": "مدير",
			"grade": "رابعة",
			"hiredAt": "2020-09-09",
			"birth": "1993-09-09",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0585329037",
			"email": "emp8@company.sa",
			"manager": "نورة إبراهيم الشمري",
			"balYear": 30,
			"balUsed": 3,
			"balNow": 27,
			"notes": ""
		},
		{
			"code": "EMP0009",
			"jobNo": "J1009",
			"name": "محمد ناصر الغامدي",
			"nationalId": "1868820204",
			"dept": "تقنية المعلومات",
			"section": "قسم الشبكات",
			"subSection": "",
			"position": "نائب مدير",
			"grade": "خامسة",
			"hiredAt": "2021-10-10",
			"birth": "1994-10-10",
			"gender": "أنثى",
			"status": "موقوف",
			"phone": "0597226012",
			"email": "emp9@company.sa",
			"manager": "سعد عبدالرحمن القحطاني",
			"balYear": 30,
			"balUsed": 11,
			"balNow": 19,
			"notes": ""
		},
		{
			"code": "EMP0010",
			"jobNo": "J1010",
			"name": "سارة خالد الزهراني",
			"nationalId": "1685126461",
			"dept": "العمليات",
			"section": "قسم الدعم",
			"subSection": "",
			"position": "أخصائي",
			"grade": "أولى",
			"hiredAt": "2022-11-11",
			"birth": "1995-11-11",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0566306997",
			"email": "emp10@company.sa",
			"manager": "أحمد محمد علي",
			"balYear": 30,
			"balUsed": 3,
			"balNow": 27,
			"notes": ""
		},
		{
			"code": "EMP0011",
			"jobNo": "J1011",
			"name": "عمر طارق الشهري",
			"nationalId": "1582334538",
			"dept": "التسويق",
			"section": "قسم المبيعات",
			"subSection": "",
			"position": "محاسب",
			"grade": "ثانية",
			"hiredAt": "2023-12-12",
			"birth": "1996-12-12",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0589089901",
			"email": "emp11@company.sa",
			"manager": "فاطمة عبدالله حسن",
			"balYear": 30,
			"balUsed": 4,
			"balNow": 26,
			"notes": ""
		},
		{
			"code": "EMP0012",
			"jobNo": "J1012",
			"name": "لينا ماجد العنزي",
			"nationalId": "1969119330",
			"dept": "الإدارة العامة",
			"section": "قسم التوظيف",
			"subSection": "",
			"position": "مبرمج",
			"grade": "ثالثة",
			"hiredAt": "2018-01-13",
			"birth": "1997-01-13",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0510872248",
			"email": "emp12@company.sa",
			"manager": "خالد سعيد العتيبي",
			"balYear": 30,
			"balUsed": 12,
			"balNow": 18,
			"notes": ""
		},
		{
			"code": "EMP0013",
			"jobNo": "J1013",
			"name": "يوسف راشد البقمي",
			"nationalId": "1965241839",
			"dept": "الموارد البشرية",
			"section": "قسم الرواتب",
			"subSection": "",
			"position": "سكرتير",
			"grade": "رابعة",
			"hiredAt": "2019-02-14",
			"birth": "1998-02-14",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0531429110",
			"email": "emp13@company.sa",
			"manager": "نورة إبراهيم الشمري",
			"balYear": 30,
			"balUsed": 11,
			"balNow": 19,
			"notes": ""
		},
		{
			"code": "EMP0014",
			"jobNo": "J1014",
			"name": "أمل فهد السبيعي",
			"nationalId": "1553778756",
			"dept": "المالية",
			"section": "قسم الحسابات",
			"subSection": "",
			"position": "مشرف",
			"grade": "خامسة",
			"hiredAt": "2020-03-15",
			"birth": "1999-03-15",
			"gender": "ذكر",
			"status": "موقوف",
			"phone": "0555667651",
			"email": "emp14@company.sa",
			"manager": "سعد عبدالرحمن القحطاني",
			"balYear": 30,
			"balUsed": 4,
			"balNow": 26,
			"notes": ""
		},
		{
			"code": "EMP0015",
			"jobNo": "J1015",
			"name": "تركي عبداللطيف الجهني",
			"nationalId": "1266944844",
			"dept": "تقنية المعلومات",
			"section": "قسم الشبكات",
			"subSection": "",
			"position": "موظف",
			"grade": "أولى",
			"hiredAt": "2021-04-16",
			"birth": "1985-04-16",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0538898923",
			"email": "emp15@company.sa",
			"manager": "أحمد محمد علي",
			"balYear": 30,
			"balUsed": 12,
			"balNow": 18,
			"notes": ""
		},
		{
			"code": "EMP0016",
			"jobNo": "J1016",
			"name": "ريم عبدالله الحسيني",
			"nationalId": "1461415646",
			"dept": "العمليات",
			"section": "قسم الدعم",
			"subSection": "",
			"position": "مدير",
			"grade": "ثانية",
			"hiredAt": "2022-05-17",
			"birth": "1986-05-17",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0523718431",
			"email": "emp16@company.sa",
			"manager": "فاطمة عبدالله حسن",
			"balYear": 30,
			"balUsed": 1,
			"balNow": 29,
			"notes": ""
		},
		{
			"code": "EMP0017",
			"jobNo": "J1017",
			"name": "بندر سعود الرشيدي",
			"nationalId": "1507943839",
			"dept": "التسويق",
			"section": "قسم المبيعات",
			"subSection": "",
			"position": "نائب مدير",
			"grade": "ثالثة",
			"hiredAt": "2023-06-18",
			"birth": "1987-06-18",
			"gender": "أنثى",
			"status": "نشط",
			"phone": "0522981052",
			"email": "emp17@company.sa",
			"manager": "خالد سعيد العتيبي",
			"balYear": 30,
			"balUsed": 5,
			"balNow": 25,
			"notes": ""
		},
		{
			"code": "EMP0018",
			"jobNo": "J1018",
			"name": "دانة محمد العتيبي",
			"nationalId": "1469319644",
			"dept": "الإدارة العامة",
			"section": "قسم التوظيف",
			"subSection": "",
			"position": "أخصائي",
			"grade": "رابعة",
			"hiredAt": "2018-07-19",
			"birth": "1988-07-19",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0591030736",
			"email": "emp18@company.sa",
			"manager": "نورة إبراهيم الشمري",
			"balYear": 30,
			"balUsed": 4,
			"balNow": 26,
			"notes": ""
		},
		{
			"code": "EMP0019",
			"jobNo": "J1019",
			"name": "فيصل عبدالعزيز الدوسري",
			"nationalId": "1966647391",
			"dept": "الموارد البشرية",
			"section": "قسم الرواتب",
			"subSection": "",
			"position": "محاسب",
			"grade": "خامسة",
			"hiredAt": "2019-08-20",
			"birth": "1989-08-20",
			"gender": "أنثى",
			"status": "موقوف",
			"phone": "0515831819",
			"email": "emp19@company.sa",
			"manager": "سعد عبدالرحمن القحطاني",
			"balYear": 30,
			"balUsed": 11,
			"balNow": 19,
			"notes": ""
		},
		{
			"code": "EMP0020",
			"jobNo": "J1020",
			"name": "نوف سعد القحطاني",
			"nationalId": "1593303705",
			"dept": "المالية",
			"section": "قسم الحسابات",
			"subSection": "",
			"position": "مبرمج",
			"grade": "أولى",
			"hiredAt": "2020-09-21",
			"birth": "1990-09-21",
			"gender": "ذكر",
			"status": "نشط",
			"phone": "0581971316",
			"email": "emp20@company.sa",
			"manager": "أحمد محمد علي",
			"balYear": 30,
			"balUsed": 1,
			"balNow": 29,
			"notes": ""
		}
	],
	leaves: [
		{
			"id": "LEV-000001",
			"date": "2026-01-15",
			"empCode": "EMP0001",
			"empName": "أحمد محمد علي",
			"dept": "الإدارة العامة",
			"type": "إجازة اعتيادية",
			"from": "2026-01-20",
			"to": "2026-01-22",
			"days": 3,
			"workDays": 3,
			"holDays": 0,
			"status": "معتمدة",
			"decision": "DEC-001",
			"notes": "",
			"user": "Admin",
			"registeredAt": "2026-01-15"
		},
		{
			"id": "LEV-000002",
			"date": "2026-02-01",
			"empCode": "EMP0002",
			"empName": "فاطمة عبدالله حسن",
			"dept": "الموارد البشرية",
			"type": "إجازة عارضة",
			"from": "2026-02-05",
			"to": "2026-02-05",
			"days": 1,
			"workDays": 1,
			"holDays": 0,
			"status": "معتمدة",
			"decision": "",
			"notes": "",
			"user": "Admin",
			"registeredAt": "2026-02-01"
		},
		{
			"id": "LEV-000003",
			"date": "2026-03-10",
			"empCode": "EMP0005",
			"empName": "سعد عبدالرحمن القحطاني",
			"dept": "تقنية المعلومات",
			"type": "إجازة مرضية",
			"from": "2026-03-12",
			"to": "2026-03-14",
			"days": 3,
			"workDays": 3,
			"holDays": 0,
			"status": "معتمدة",
			"decision": "MED-01",
			"notes": "تقرير طبي",
			"user": "Admin",
			"registeredAt": "2026-03-10"
		}
	],
	permissions: [
		{
			"id": "PER-000001",
			"date": "2026-08-31",
			"empCode": "EMP0002",
			"empName": "فاطمة عبدالله حسن",
			"jobNo": "J1002",
			"subSection": "",
			"type": "إذن ساعة",
			"from": "10:00",
			"to": "12:00",
			"duration": "2 ساعة",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-08-31"
		},
		{
			"id": "PER-000002",
			"date": "2026-08-31",
			"empCode": "EMP0008",
			"empName": "هند سليمان المطيري",
			"jobNo": "J1008",
			"subSection": "",
			"type": "إذن طبي",
			"from": "13:00",
			"to": "14:30",
			"duration": "1 س 30 د",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-08-31"
		},
		{
			"id": "PER-000003",
			"date": "2026-09-01",
			"empCode": "EMP0001",
			"empName": "أحمد محمد علي",
			"jobNo": "J1001",
			"subSection": "",
			"type": "إذن ساعة",
			"from": "09:00",
			"to": "11:00",
			"duration": "2 ساعة",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-09-01"
		},
		{
			"id": "PER-000004",
			"date": "2026-09-01",
			"empCode": "EMP0002",
			"empName": "فاطمة عبدالله حسن",
			"jobNo": "J1002",
			"subSection": "",
			"type": "إذن شخصي",
			"from": "12:00",
			"to": "13:30",
			"duration": "1 س 30 د",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-09-01"
		},
		{
			"id": "PER-000005",
			"date": "2026-09-02",
			"empCode": "EMP0003",
			"empName": "خالد سعيد العتيبي",
			"jobNo": "J1003",
			"subSection": "",
			"type": "إذن طبي",
			"from": "08:30",
			"to": "10:00",
			"duration": "1 س 30 د",
			"status": "معتمدة",
			"notes": "تقرير",
			"registeredAt": "2026-09-02"
		},
		{
			"id": "PER-000006",
			"date": "2026-09-02",
			"empCode": "EMP0007",
			"empName": "عبدالعزيز فهد الحربي",
			"jobNo": "J1007",
			"subSection": "",
			"type": "إذن ساعة",
			"from": "11:00",
			"to": "12:00",
			"duration": "1 ساعة",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-09-02"
		},
		{
			"id": "PER-000007",
			"date": "2026-09-03",
			"empCode": "EMP0001",
			"empName": "أحمد محمد علي",
			"jobNo": "J1001",
			"subSection": "",
			"type": "إذن رسمي",
			"from": "09:00",
			"to": "12:00",
			"duration": "3 ساعة",
			"status": "معتمدة",
			"notes": "مهمة",
			"registeredAt": "2026-09-03"
		},
		{
			"id": "PER-000008",
			"date": "2026-09-03",
			"empCode": "EMP0005",
			"empName": "سعد عبدالرحمن القحطاني",
			"jobNo": "J1005",
			"subSection": "",
			"type": "إذن ساعة",
			"from": "10:00",
			"to": "11:30",
			"duration": "1 س 30 د",
			"status": "مسودة",
			"notes": "",
			"registeredAt": "2026-09-03"
		},
		{
			"id": "PER-000009",
			"date": "2026-09-03",
			"empCode": "EMP0010",
			"empName": "سارة خالد الزهراني",
			"jobNo": "J1010",
			"subSection": "",
			"type": "إذن شخصي",
			"from": "13:00",
			"to": "15:00",
			"duration": "2 ساعة",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-09-03"
		},
		{
			"id": "PER-000010",
			"date": "2026-09-03",
			"empCode": "EMP0002",
			"empName": "فاطمة عبدالله حسن",
			"jobNo": "J1002",
			"subSection": "",
			"type": "إذن ساعة",
			"from": "08:00",
			"to": "09:00",
			"duration": "1 ساعة",
			"status": "معتمدة",
			"notes": "",
			"registeredAt": "2026-09-03"
		}
	],
	leaveTypes: [
		{
			"code": "LV01",
			"name": "إجازة اعتيادية",
			"affectsBalance": true,
			"maxYear": 30,
			"needsApproval": true,
			"notes": "السنوية العادية"
		},
		{
			"code": "LV02",
			"name": "إجازة عارضة",
			"affectsBalance": true,
			"maxYear": 7,
			"needsApproval": false,
			"notes": "طارئة"
		},
		{
			"code": "LV03",
			"name": "إجازة مرضية",
			"affectsBalance": false,
			"maxYear": 30,
			"needsApproval": true,
			"notes": "بتقرير طبي"
		},
		{
			"code": "LV04",
			"name": "إجازة وضع",
			"affectsBalance": false,
			"maxYear": 70,
			"needsApproval": true,
			"notes": "للموظفات"
		},
		{
			"code": "LV05",
			"name": "إجازة رعاية طفل",
			"affectsBalance": false,
			"maxYear": 0,
			"needsApproval": true,
			"notes": ""
		},
		{
			"code": "LV06",
			"name": "إجازة بدون مرتب",
			"affectsBalance": false,
			"maxYear": 0,
			"needsApproval": true,
			"notes": ""
		},
		{
			"code": "LV07",
			"name": "إجازة امتحان",
			"affectsBalance": false,
			"maxYear": 15,
			"needsApproval": true,
			"notes": ""
		},
		{
			"code": "LV08",
			"name": "إجازة حج",
			"affectsBalance": false,
			"maxYear": 15,
			"needsApproval": true,
			"notes": "مرة واحدة"
		},
		{
			"code": "LV09",
			"name": "إجازة زواج",
			"affectsBalance": false,
			"maxYear": 5,
			"needsApproval": true,
			"notes": ""
		},
		{
			"code": "LV10",
			"name": "إجازة وفاة",
			"affectsBalance": false,
			"maxYear": 5,
			"needsApproval": false,
			"notes": "قريب من الدرجة الأولى"
		},
		{
			"code": "LV11",
			"name": "إجازة رسمية",
			"affectsBalance": false,
			"maxYear": 0,
			"needsApproval": false,
			"notes": "عطلات رسمية"
		}
	],
	permTypes: [
		{
			"code": "PR01",
			"name": "إذن ساعة",
			"monthlyCount": 8,
			"needsApproval": true
		},
		{
			"code": "PR02",
			"name": "إذن شخصي",
			"monthlyCount": 4,
			"needsApproval": false
		},
		{
			"code": "PR03",
			"name": "إذن طبي",
			"monthlyCount": 4,
			"needsApproval": true
		},
		{
			"code": "PR04",
			"name": "إذن رسمي",
			"monthlyCount": 0,
			"needsApproval": true
		}
	],
	departments: [
		{
			"code": "DEP01",
			"name": "الإدارة العامة",
			"manager": "",
			"notes": ""
		},
		{
			"code": "DEP02",
			"name": "الموارد البشرية",
			"manager": "",
			"notes": ""
		},
		{
			"code": "DEP03",
			"name": "المالية",
			"manager": "",
			"notes": ""
		},
		{
			"code": "DEP04",
			"name": "تقنية المعلومات",
			"manager": "",
			"notes": ""
		},
		{
			"code": "DEP05",
			"name": "العمليات",
			"manager": "",
			"notes": ""
		},
		{
			"code": "DEP06",
			"name": "التسويق",
			"manager": "",
			"notes": ""
		}
	],
	positions: [
		{
			"code": "POS01",
			"name": "مدير",
			"notes": ""
		},
		{
			"code": "POS02",
			"name": "نائب مدير",
			"notes": ""
		},
		{
			"code": "POS03",
			"name": "أخصائي",
			"notes": ""
		},
		{
			"code": "POS04",
			"name": "محاسب",
			"notes": ""
		},
		{
			"code": "POS05",
			"name": "مبرمج",
			"notes": ""
		},
		{
			"code": "POS06",
			"name": "سكرتير",
			"notes": ""
		},
		{
			"code": "POS07",
			"name": "مشرف",
			"notes": ""
		},
		{
			"code": "POS08",
			"name": "موظف",
			"notes": ""
		}
	],
	holidays: [
		{
			"date": "2026-01-01",
			"name": "رأس السنة الميلادية",
			"notes": ""
		},
		{
			"date": "2026-02-22",
			"name": "يوم التأسيس",
			"notes": ""
		},
		{
			"date": "2026-03-20",
			"name": "عيد الفطر (تقريبي)",
			"notes": "يحتاج تأكيد"
		},
		{
			"date": "2026-03-21",
			"name": "عيد الفطر (تقريبي)",
			"notes": ""
		},
		{
			"date": "2026-03-22",
			"name": "عيد الفطر (تقريبي)",
			"notes": ""
		},
		{
			"date": "2026-05-27",
			"name": "عيد الأضحى (تقريبي)",
			"notes": ""
		},
		{
			"date": "2026-05-28",
			"name": "عيد الأضحى (تقريبي)",
			"notes": ""
		},
		{
			"date": "2026-05-29",
			"name": "عيد الأضحى (تقريبي)",
			"notes": ""
		},
		{
			"date": "2026-09-23",
			"name": "اليوم الوطني",
			"notes": ""
		}
	],
	missions: [{
		"id": "MIS-000001",
		"date": "2026-01-10",
		"empCode": "EMP0003",
		"empName": "خالد سعيد العتيبي",
		"dept": "المالية",
		"type": "مأمورية داخلية",
		"org": "وزارة المالية",
		"place": "الرياض",
		"from": "2026-01-12",
		"to": "2026-01-12",
		"tFrom": "08:00",
		"tTo": "14:00",
		"days": 1,
		"status": "معتمدة",
		"notes": ""
	}],
	attendance: [{
		"date": "2026-01-12",
		"empCode": "EMP0014",
		"empName": "أمل فهد السبيعي",
		"status": "غياب بدون إذن",
		"in": "",
		"out": "",
		"recStatus": "معتمدة"
	}, {
		"date": "2026-02-09",
		"empCode": "EMP0011",
		"empName": "عمر طارق الشهري",
		"status": "غياب بعذر",
		"in": "",
		"out": "",
		"recStatus": "معتمدة"
	}],
	sections: [],
	users: [
		{
			"username": "admin",
			"password": "admin",
			"name": "مدير النظام",
			"role": "admin",
			"perms": ["all"],
			"hiddenScreens": []
		},
		{
			"username": "hr",
			"password": "hr",
			"name": "أخصائي موارد بشرية",
			"role": "hr",
			"perms": [],
			"hiddenScreens": ["settings", "trash"]
		},
		{
			"username": "viewer",
			"password": "viewer",
			"name": "مستعرض",
			"role": "viewer",
			"perms": [],
			"hiddenScreens": ["settings", "trash"]
		}
	],
	settings: {
		"orgName": "الشركة العربية للخدمات الإدارية",
		"dept": "قطاع الموارد البشرية",
		"fiscalYear": "2026",
		"defaultBalance": 30,
		"restDays": ["الجمعة", "السبت"],
		"appTitle": "متابعة اليوميات والأذونات الشهرية"
	},
	permLimits: [
		{
			"id": "LIM-01",
			"name": "سقف يومي عام",
			"enabled": true,
			"scope": "all",
			"scopeValue": "",
			"window": "day",
			"types": "all",
			"maxHours": 3,
			"notes": "كل الموظفين — كل الأنواع يومياً",
			"apply": "each"
		},
		{
			"id": "LIM-02",
			"name": "سقف شهري عام",
			"enabled": true,
			"scope": "all",
			"scopeValue": "",
			"window": "month",
			"types": "all",
			"maxHours": 16,
			"notes": "كل الأذونات خلال الشهر",
			"apply": "each"
		},
		{
			"id": "LIM-03",
			"name": "إذن الساعة شهرياً",
			"enabled": true,
			"scope": "permType",
			"scopeValue": "إذن ساعة",
			"window": "month",
			"types": "إذن ساعة",
			"maxHours": 8,
			"notes": "نوع معين على مستوى النوع",
			"apply": "each"
		},
		{
			"id": "LIM-04",
			"name": "الموارد البشرية يومياً",
			"enabled": true,
			"scope": "department",
			"scopeValue": "الموارد البشرية",
			"window": "day",
			"types": "all",
			"maxHours": 4,
			"notes": "مستوى الإدارة",
			"apply": "group"
		},
		{
			"id": "LIM-05",
			"name": "الفئة الأولى يومياً",
			"enabled": true,
			"scope": "jobCategory",
			"scopeValue": "أولى",
			"window": "day",
			"types": "all",
			"maxHours": 2,
			"notes": "مستوى الفئة الوظيفية",
			"apply": "each"
		},
		{
			"id": "LIM-06",
			"name": "مجموع تقنية المعلومات شهرياً",
			"enabled": true,
			"scope": "department",
			"scopeValue": "تقنية المعلومات",
			"window": "month",
			"types": "all",
			"maxHours": 12,
			"apply": "group",
			"notes": "سقف مشترك للإدارة"
		}
	],
	trash: []
};
function downloadText(filename, text, mime = "text/plain;charset=utf-8") {
	const blob = new Blob([text], { type: mime });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = filename;
	a.click();
	URL.revokeObjectURL(a.href);
}
function toCsv(headers, rows) {
	const esc = (v) => {
		const s = v == null ? "" : String(v);
		if (/[",\n]/.test(s)) return `"${s.replace(/"/g, "\"\"")}"`;
		return s;
	};
	return "﻿" + [headers.map(esc).join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n");
}
function openPrint(title, bodyHtml) {
	const w = window.open("", "_blank", "width=980,height=720");
	if (!w) return false;
	const html = `<!DOCTYPE html><html lang="ar" dir="rtl"><head><meta charset="UTF-8"/><title>${title}</title>
  <style>
    body{font-family:"IBM Plex Sans Arabic","Segoe UI",Tahoma,sans-serif;color:#111;padding:22px;direction:rtl;font-size:13px}
    h1{font-size:20px;margin:0 0 4px;color:#0d4f4a}
    .meta{color:#666;font-size:11px;margin-bottom:12px}
    table{width:100%;border-collapse:collapse;font-size:12px}
    th,td{border:1px solid #d6d0c6;padding:6px 8px;text-align:right}
    th{background:#f0ebe3}
    .print-date{font-size:14px;font-weight:800;color:#0d4f4a;margin:6px 0 12px;border:1.5px solid #0d4f4a;display:inline-block;padding:6px 12px;border-radius:8px}
    .kpi{display:inline-block;border:1px solid #e5e0d6;border-radius:10px;padding:8px 12px;margin:0 0 10px 8px}
    .kpi b{display:block;font-size:16px}
    @media print{body{padding:0} .no-print{display:none}}
  </style></head><body>
  <div class="no-print" style="margin-bottom:12px">
    <button onclick="window.print()" style="padding:8px 16px;background:#0d4f4a;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:700">طباعة / حفظ PDF</button>
    <button onclick="window.close()" style="padding:8px 16px;margin-right:8px;border:1px solid #ccc;border-radius:8px;cursor:pointer">إغلاق</button>
  </div>
  ${bodyHtml}
  <script>setTimeout(function(){window.print()},350)<\/script>
  </body></html>`;
	w.document.open();
	w.document.write(html);
	w.document.close();
	return true;
}
function printTable(org, title, headers, rows, extra = "") {
	const stamp = (/* @__PURE__ */ new Date()).toLocaleString("ar-EG");
	const printDate = (/* @__PURE__ */ new Date()).toLocaleDateString("ar-EG", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	const th = headers.map((h) => `<th>${h}</th>`).join("");
	const body = rows.map((r) => `<tr>${r.map((c) => `<td>${c ?? ""}</td>`).join("")}</tr>`).join("") || `<tr><td colspan="${headers.length}" style="text-align:center;color:#666">لا سجلات</td></tr>`;
	return openPrint(title, `<h1>${org}</h1>
    <div class="print-date">تاريخ الطباعة: ${printDate}</div>
    <div class="meta">${title} · ${rows.length} سجل · ${stamp}</div>
    ${extra}
    <table><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table>`);
}
var KEY = "diwan_hr_v2";
var USER_KEY = "diwan_hr_user";
function normalizeDb(raw) {
	const base = structuredClone(seed_default);
	return {
		...base,
		...raw,
		settings: {
			...base.settings,
			...raw.settings || {}
		},
		employees: raw.employees || base.employees,
		leaves: raw.leaves || base.leaves,
		permissions: raw.permissions || base.permissions,
		leaveTypes: raw.leaveTypes || base.leaveTypes,
		permTypes: raw.permTypes || base.permTypes,
		departments: raw.departments || base.departments,
		positions: raw.positions || base.positions,
		holidays: raw.holidays || base.holidays,
		missions: raw.missions || base.missions,
		attendance: raw.attendance || base.attendance,
		sections: raw.sections || base.sections,
		users: raw.users?.length ? raw.users : base.users,
		permLimits: (raw.permLimits?.length ? raw.permLimits : base.permLimits).map((l) => ({
			...l,
			apply: l.apply === "each" || l.apply === "group" ? l.apply : l.scope === "department" || l.scope === "section" ? "group" : "each"
		})),
		trash: raw.trash || []
	};
}
var emptyDb = () => normalizeDb(seed_default);
function persist(db) {
	try {
		localStorage.setItem(KEY, JSON.stringify(db));
		localStorage.setItem(KEY + "_bak", JSON.stringify(db));
	} catch {}
}
function loadDb() {
	try {
		const s = localStorage.getItem(KEY) || localStorage.getItem("diwan_hr_v1");
		if (s) return normalizeDb(JSON.parse(s));
	} catch {}
	return emptyDb();
}
var useApp = create((set, get) => ({
	hydrated: false,
	db: emptyDb(),
	page: "dashboard",
	user: null,
	theme: "light",
	sidebarOpen: false,
	profileCode: "",
	toast: null,
	modal: null,
	editIndex: null,
	hydrate: () => {
		const db = loadDb();
		let user = null;
		try {
			const s = sessionStorage.getItem(USER_KEY);
			if (s) user = JSON.parse(s);
		} catch {
			user = null;
		}
		let theme = "light";
		try {
			if (localStorage.getItem("diwan_theme") === "dark") theme = "dark";
		} catch {}
		set({
			db,
			user,
			hydrated: true,
			theme
		});
	},
	setPage: (p) => set({
		page: p,
		sidebarOpen: false
	}),
	login: (u, p) => {
		const user = get().db.users.find((x) => x.username === u && x.password === p);
		if (!user) return "اسم المستخدم أو كلمة المرور غير صحيحة";
		try {
			sessionStorage.setItem(USER_KEY, JSON.stringify(user));
		} catch {}
		set({
			user,
			page: "dashboard"
		});
		return null;
	},
	logout: () => {
		try {
			sessionStorage.removeItem(USER_KEY);
		} catch {}
		set({
			user: null,
			page: "dashboard"
		});
	},
	toggleTheme: () => {
		const theme = get().theme === "light" ? "dark" : "light";
		try {
			localStorage.setItem("diwan_theme", theme);
		} catch {}
		set({ theme });
	},
	setSidebar: (v) => set({ sidebarOpen: v }),
	setProfile: (code) => set({
		profileCode: code,
		page: "profile"
	}),
	flash: (text, kind = "ok") => {
		set({ toast: {
			text,
			kind
		} });
		window.setTimeout(() => set({ toast: null }), 2800);
	},
	openModal: (k, idx = null) => set({
		modal: k,
		editIndex: idx ?? null
	}),
	closeModal: () => set({
		modal: null,
		editIndex: null
	}),
	saveDb: (patch) => {
		const db = typeof patch === "function" ? patch(get().db) : {
			...get().db,
			...patch
		};
		persist(db);
		set({ db });
	},
	saveEmployee: (emp, idx) => {
		get().saveDb((db) => {
			const employees = [...db.employees];
			if (idx != null && employees[idx]) employees[idx] = emp;
			else {
				if (!emp.code) {
					emp.code = "EMP" + String(employees.length + 1).padStart(4, "0");
					const codes = new Set(employees.map((e) => e.code));
					let n = employees.length + 1;
					while (codes.has(emp.code)) {
						n += 1;
						emp.code = "EMP" + String(n).padStart(4, "0");
					}
				}
				if (!emp.jobNo) emp.jobNo = "J" + emp.code.slice(3);
				emp.balYear ||= db.settings.defaultBalance || 30;
				emp.balUsed ||= 0;
				emp.balNow = emp.balYear - emp.balUsed;
				employees.push(emp);
			}
			return {
				...db,
				employees
			};
		});
		get().flash("تم حفظ الموظف");
		get().closeModal();
	},
	saveLeave: (leave, idx) => {
		const db = get().db;
		const emp = db.employees.find((e) => e.code === leave.empCode);
		if (!emp) return "حدد الموظف";
		if (!leave.from || !leave.to) return "حدد فترة الإجازة";
		const wd = workDays(db, leave.from, leave.to, true);
		const days = calendarDays(leave.from, leave.to);
		const lt = db.leaveTypes.find((t) => t.name === leave.type);
		const rec = {
			...leave,
			empName: emp.name,
			dept: emp.dept,
			days,
			workDays: wd,
			holDays: Math.max(0, days - wd),
			id: idx != null ? db.leaves[idx].id : nextId("LEV-", db.leaves.map((l) => l.id)),
			registeredAt: idx != null ? db.leaves[idx].registeredAt : todayYmd(),
			user: get().user?.name || "مدير"
		};
		const affects = lt?.affectsBalance && rec.status === "معتمدة";
		get().saveDb((cur) => {
			const employees = cur.employees.map((e) => ({ ...e }));
			const leaves = [...cur.leaves];
			const apply = (sign, row) => {
				if (!lt?.affectsBalance || row.status !== "معتمدة") return;
				const i = employees.findIndex((e) => e.code === row.empCode);
				if (i < 0) return;
				employees[i].balUsed = Math.max(0, employees[i].balUsed + sign * row.workDays);
				employees[i].balNow = employees[i].balYear - employees[i].balUsed;
			};
			if (idx != null && leaves[idx]) {
				apply(-1, leaves[idx]);
				leaves[idx] = rec;
				if (affects) apply(1, rec);
			} else {
				if (affects) apply(1, rec);
				leaves.push(rec);
			}
			return {
				...cur,
				employees,
				leaves
			};
		});
		get().flash(idx != null ? "تم تعديل الإجازة" : `تم — ${rec.id}`);
		get().closeModal();
		return null;
	},
	savePerm: (perm, idx) => {
		const db = get().db;
		const emp = db.employees.find((e) => e.code === perm.empCode);
		if (!emp) return "حدد الموظف";
		if (!perm.date) return "حدد تاريخ الإذن";
		const mins = timeRangeMinutes(perm.from, perm.to);
		if (mins <= 0) return "المدة غير صحيحة";
		const duration = hoursLabelFromRange(perm.from, perm.to);
		if ((perm.status || "معتمدة") === "معتمدة") {
			const chk = checkPermLimits(db, emp, perm.type, perm.date, mins, idx != null ? db.permissions[idx]?.id : void 0);
			if (!chk.ok) {
				const v = chk.violations[0];
				const win = v.limit.window === "day" ? "يومياً" : v.limit.window === "month" ? "شهرياً" : "إجمالاً";
				return `تجاوز الحد «${v.limit.name}» (${v.limit.maxHours} ساعة ${win}). المستخدم ${Math.round(v.usedMinutes / 60 * 10) / 10}س + المطلوب ${Math.round(v.addMinutes / 60 * 10) / 10}س.`;
			}
			const pt = db.permTypes.find((t) => t.name === perm.type);
			if (pt && pt.monthlyCount > 0) {
				if (monthlyCountUsed(db, emp.code, perm.type, perm.date.slice(0, 7), idx != null ? db.permissions[idx]?.id : void 0) >= pt.monthlyCount) return `تجاوز الحد الشهري لعدد مرات هذا النوع (${pt.monthlyCount}).`;
			}
		}
		const rec = {
			...perm,
			empName: emp.name,
			jobNo: emp.jobNo,
			subSection: perm.subSection || emp.subSection,
			duration,
			id: idx != null ? db.permissions[idx].id : nextId("PER-", db.permissions.map((p) => p.id)),
			registeredAt: idx != null ? db.permissions[idx].registeredAt : todayYmd()
		};
		get().saveDb((cur) => {
			const permissions = [...cur.permissions];
			if (idx != null && permissions[idx]) permissions[idx] = rec;
			else permissions.push(rec);
			return {
				...cur,
				permissions
			};
		});
		get().flash(idx != null ? "تم تعديل الإذن" : `تم — ${rec.id}`);
		get().closeModal();
		return null;
	},
	saveLimit: (limit, idx) => {
		get().saveDb((db) => {
			const permLimits = [...db.permLimits];
			if (!limit.id) limit.id = nextId("LIM-", permLimits.map((x) => x.id));
			if (idx != null && permLimits[idx]) permLimits[idx] = limit;
			else permLimits.push(limit);
			return {
				...db,
				permLimits
			};
		});
		get().flash("تم حفظ قاعدة الحد");
		get().closeModal();
	},
	saveUser: (user, idx) => {
		if (!user.username.trim()) return "أدخل اسم المستخدم";
		if (get().db.users.find((u, i) => u.username === user.username && (idx == null || i !== idx))) return "اسم المستخدم مستخدم";
		get().saveDb((cur) => {
			const users = [...cur.users];
			if (idx != null && users[idx]) users[idx] = user;
			else users.push(user);
			return {
				...cur,
				users
			};
		});
		get().flash("تم حفظ المستخدم");
		get().closeModal();
		return null;
	},
	softDel: (collection, idx) => {
		get().saveDb((db) => {
			const arr = [...db[collection]];
			const item = arr[idx];
			if (item == null) return db;
			arr.splice(idx, 1);
			const trash = [...db.trash, {
				collection: String(collection),
				deletedAt: (/* @__PURE__ */ new Date()).toISOString(),
				data: item
			}];
			return {
				...db,
				[collection]: arr,
				trash
			};
		});
		get().flash("نُقل إلى المحذوفات");
	},
	restoreTrash: (i) => {
		get().saveDb((db) => {
			const t = db.trash[i];
			if (!t) return db;
			const trash = db.trash.filter((_, x) => x !== i);
			const key = t.collection;
			const arr = [...db[key] || [], t.data];
			return {
				...db,
				trash,
				[key]: arr
			};
		});
		get().flash("تمت الاستعادة");
	},
	purgeTrash: (i) => {
		get().saveDb((db) => ({
			...db,
			trash: db.trash.filter((_, x) => x !== i)
		}));
		get().flash("حُذف نهائياً");
	},
	emptyTrash: () => {
		get().saveDb((db) => ({
			...db,
			trash: []
		}));
		get().flash("تم تفريغ السلة");
	},
	resetSeed: () => {
		const db = emptyDb();
		persist(db);
		set({ db });
		get().flash("تمت إعادة البيانات التجريبية");
	},
	importJson: (raw) => {
		try {
			const data = JSON.parse(raw);
			if (!Array.isArray(data.employees)) return "ملف غير صالح";
			const db = normalizeDb(data);
			persist(db);
			set({ db });
			get().flash("تم الاستيراد");
			return null;
		} catch (e) {
			return e instanceof Error ? e.message : "فشل الاستيراد";
		}
	},
	exportJson: () => {
		downloadText("ديوان_" + todayYmd() + ".json", JSON.stringify(get().db, null, 2), "application/json");
		get().flash("تم التصدير");
	}
}));
var emptyEmp = () => ({
	code: "",
	jobNo: "",
	name: "",
	nationalId: "",
	dept: "",
	section: "",
	subSection: "",
	position: "",
	grade: "",
	hiredAt: "",
	birth: "",
	gender: "",
	status: "نشط",
	phone: "",
	email: "",
	manager: "",
	balYear: 30,
	balUsed: 0,
	balNow: 30,
	notes: ""
});
function EmpForm({ initial, onClose, onSave }) {
	const { db } = useApp();
	const [f, setF] = (0, import_react.useState)(initial);
	const set = (k, v) => setF((s) => ({
		...s,
		[k]: v
	}));
	const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
	const secs = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: initial.code ? "تعديل موظف" : "إضافة موظف",
		onClose,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			onClick: onClose,
			className: "flex-1",
			children: "إلغاء"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "flex-1",
			disabled: !f.name.trim(),
			onClick: () => onSave({
				...f,
				balNow: Number(f.balYear) - Number(f.balUsed)
			}),
			children: "حفظ"
		})] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-0 sm:grid-cols-2 sm:gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "اسم الموظف *",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.name,
						onChange: (e) => set("name", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الرقم الوظيفي",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.jobNo,
						onChange: (e) => set("jobNo", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: "الإدارة",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						list: "dept-list",
						value: f.dept,
						onChange: (e) => set("dept", e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
						id: "dept-list",
						children: depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: d }, d))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
					label: "القسم",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						list: "sec-list",
						value: f.section,
						onChange: (e) => set("section", e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
						id: "sec-list",
						children: secs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: d }, d))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "القسم الفرعي",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.subSection,
						onChange: (e) => set("subSection", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الوظيفة",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.position,
						onChange: (e) => set("position", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الفئة الوظيفية",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: f.grade,
						onChange: (e) => set("grade", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: "—"
						}), [
							"أولى",
							"ثانية",
							"ثالثة",
							"رابعة",
							"خامسة"
						].map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: g }, g))]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الحالة",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: f.status,
						onChange: (e) => set("status", e.target.value),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "نشط" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "موقوف" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الرقم القومي",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.nationalId,
						onChange: (e) => set("nationalId", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الهاتف",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: f.phone,
						onChange: (e) => set("phone", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "تاريخ التعيين",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: f.hiredAt,
						onChange: (e) => set("hiredAt", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "تاريخ الميلاد",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: f.birth,
						onChange: (e) => set("birth", e.target.value)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الرصيد السنوي",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: f.balYear,
						onChange: (e) => set("balYear", Number(e.target.value))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "المستخدم",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						value: f.balUsed,
						onChange: (e) => set("balUsed", Number(e.target.value))
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "ملاحظات",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
				rows: 2,
				value: f.notes,
				onChange: (e) => set("notes", e.target.value)
			})
		})]
	});
}
function LeaveForm({ initial, defaultEmp, onClose, onSave }) {
	const { db } = useApp();
	const [empCode, setEmpCode] = (0, import_react.useState)(initial?.empCode || defaultEmp || "");
	const [type, setType] = (0, import_react.useState)(initial?.type || db.leaveTypes[0]?.name || "");
	const [from, setFrom] = (0, import_react.useState)(initial?.from || todayYmd());
	const [to, setTo] = (0, import_react.useState)(initial?.to || todayYmd());
	const [status, setStatus] = (0, import_react.useState)(initial?.status || "معتمدة");
	const [notes, setNotes] = (0, import_react.useState)(initial?.notes || "");
	const [decision, setDecision] = (0, import_react.useState)(initial?.decision || "");
	const [err, setErr] = (0, import_react.useState)("");
	const emp = db.employees.find((e) => e.code === empCode);
	const wd = workDays(db, from, to);
	const days = calendarDays(from, to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: initial ? "تعديل إجازة" : "تسجيل إجازة",
		sub: "أيام العمل تُحسب بعد استبعاد الراحة والعطل",
		onClose,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			className: "flex-1",
			onClick: onClose,
			children: "إلغاء"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "flex-1",
			onClick: () => {
				const msg = onSave({
					date: todayYmd(),
					empCode,
					empName: emp?.name || "",
					dept: emp?.dept || "",
					type,
					from,
					to,
					days,
					workDays: wd,
					holDays: Math.max(0, days - wd),
					status,
					decision,
					notes,
					user: ""
				});
				if (msg) setErr(msg);
			},
			children: "حفظ"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الموظف",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmpPicker, {
					employees: db.employees,
					value: empCode,
					onChange: setEmpCode
				})
			}),
			emp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs text-muted",
				children: [
					"الرصيد الحالي: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: emp.balNow }),
					" · الإدارة: ",
					emp.dept
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "نوع الإجازة",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					value: type,
					onChange: (e) => setType(e.target.value),
					children: db.leaveTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t.name }, t.code))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "من",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: from,
						onChange: (e) => setFrom(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "إلى",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						value: to,
						onChange: (e) => setTo(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-3 gap-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-th p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-extrabold text-primary",
							children: days
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: "أيام"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-th p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-extrabold text-primary",
							children: wd
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: "عمل"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-md bg-th p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-extrabold text-primary",
							children: Math.max(0, days - wd)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: "عطلات"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الحالة",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onChange: (e) => setStatus(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "معتمدة" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "مسودة" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ملغاة" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "رقم القرار",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: decision,
					onChange: (e) => setDecision(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ملاحظات",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					value: notes,
					onChange: (e) => setNotes(e.target.value)
				})
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-warn/15 px-3 py-2 text-xs text-warn",
				children: err
			}) : null
		]
	});
}
function PermForm({ initial, defaultEmp, onClose, onSave }) {
	const { db } = useApp();
	const [empCode, setEmpCode] = (0, import_react.useState)(initial?.empCode || defaultEmp || "");
	const [type, setType] = (0, import_react.useState)(initial?.type || db.permTypes[0]?.name || "");
	const [date, setDate] = (0, import_react.useState)(initial?.date || todayYmd());
	const [from, setFrom] = (0, import_react.useState)(initial?.from || "10:00");
	const [to, setTo] = (0, import_react.useState)(initial?.to || "12:00");
	const [status, setStatus] = (0, import_react.useState)(initial?.status || "معتمدة");
	const [notes, setNotes] = (0, import_react.useState)(initial?.notes || "");
	const [err, setErr] = (0, import_react.useState)("");
	const emp = db.employees.find((e) => e.code === empCode);
	const mins = timeRangeMinutes(from, to);
	const preview = emp ? checkPermLimits(db, emp, type, date, mins, initial?.id) : {
		ok: true,
		violations: [],
		matches: []
	};
	const pt = db.permTypes.find((t) => t.name === type);
	const usedCount = emp && pt ? monthlyCountUsed(db, emp.code, type, date.slice(0, 7), initial?.id) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: initial ? "تعديل إذن" : "تسجيل إذن",
		sub: "المدة تُحسب تلقائياً ويُرفض الحفظ عند تجاوز أي حد ساعات أو عدد مرات",
		onClose,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			className: "flex-1",
			onClick: onClose,
			children: "إلغاء"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "flex-1",
			onClick: () => {
				const msg = onSave({
					empCode,
					empName: emp?.name || "",
					jobNo: emp?.jobNo || "",
					subSection: emp?.subSection || "",
					type,
					date,
					from,
					to,
					status,
					notes
				});
				if (msg) setErr(msg);
			},
			children: "حفظ"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الموظف",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmpPicker, {
					employees: db.employees,
					value: empCode,
					onChange: setEmpCode
				})
			}),
			emp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs text-muted",
				children: [
					emp.dept,
					" · ",
					emp.section,
					" · فئة ",
					emp.grade || "—"
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "نوع الإذن",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
					value: type,
					onChange: (e) => setType(e.target.value),
					children: db.permTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: t.name,
						children: [t.name, t.monthlyCount ? ` (حد ${t.monthlyCount}/شهر)` : ""]
					}, t.code))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "التاريخ",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					value: date,
					onChange: (e) => setDate(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "من وقت",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "time",
						value: from,
						onChange: (e) => setFrom(e.target.value)
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "إلى وقت",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "time",
						value: to,
						onChange: (e) => setTo(e.target.value)
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 rounded-md bg-th px-3 py-2 text-sm",
				children: [
					"المدة المحسوبة: ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: hoursLabelFromRange(from, to) }),
					pt && pt.monthlyCount > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mr-2 text-xs text-muted",
						children: [
							"· مرات هذا النوع: ",
							usedCount,
							"/",
							pt.monthlyCount
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الحالة",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: status,
					onChange: (e) => setStatus(e.target.value),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "معتمدة" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "مسودة" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "ملغاة" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ملاحظات",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					value: notes,
					onChange: (e) => setNotes(e.target.value)
				})
			}),
			emp ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-th/40 p-3 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 font-bold",
						children: "مطابقة حدود الساعات"
					}),
					preview.matches.length ? preview.matches.map((v) => {
						const next = v.usedMinutes + v.addMinutes;
						const over = next > v.maxMinutes;
						const pct = v.maxMinutes ? Math.min(100, Math.round(next / v.maxMinutes * 100)) : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 last:mb-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-0.5 flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									v.limit.name,
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted",
										children: [
											"(",
											APPLY_LABEL[v.limit.apply === "group" ? "group" : "each"],
											")"
										]
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: over ? "font-semibold text-err" : "tabular-nums",
									children: [
										minutesToLabel(next),
										" / ",
										v.limit.maxHours,
										"س"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "meter",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
									width: `${pct}%`,
									background: over ? "var(--color-err)" : pct >= 80 ? "var(--color-warn)" : void 0
								} })
							})]
						}, v.limit.id);
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "لا قواعد حد تنطبق على هذا الإذن"
					}),
					!preview.ok ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-err",
						children: "سيُرفض الحفظ لتجاوز أحد الحدود."
					}) : preview.matches.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ok",
						children: "ضمن الحدود الحالية"
					}) : null
				]
			}) : null,
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 rounded-md bg-warn/15 px-3 py-2 text-xs text-warn",
				children: err
			}) : null
		]
	});
}
function LimitForm({ initial, onClose, onSave }) {
	const { db } = useApp();
	const [f, setF] = (0, import_react.useState)(initial || {
		id: "",
		name: "",
		enabled: true,
		scope: "all",
		scopeValue: "",
		window: "day",
		types: "all",
		maxHours: 2,
		apply: "each",
		notes: ""
	});
	const set = (k, v) => setF((s) => ({
		...s,
		[k]: v
	}));
	const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
	const secs = [...new Set(db.employees.map((e) => e.section).filter(Boolean))].sort();
	const grades = [...new Set(db.employees.map((e) => e.grade).filter(Boolean))].sort();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: initial ? "تعديل حد ساعات" : "حد ساعات جديد",
		sub: "المستوى × النوع × الفترة × طريقة الاحتساب (فردي أو مجموع مشترك)",
		onClose,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			className: "flex-1",
			onClick: onClose,
			children: "إلغاء"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "flex-1",
			onClick: () => onSave(f),
			disabled: !f.name || !f.maxHours,
			children: "حفظ"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "اسم القاعدة",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: f.name,
					onChange: (e) => set("name", e.target.value),
					placeholder: "مثال: سقف يومي للموارد البشرية"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "المستوى",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: f.scope,
						onChange: (e) => {
							const scope = e.target.value;
							set("scope", scope);
							set("scopeValue", "");
							if (scope === "department" || scope === "section") set("apply", "group");
							else set("apply", "each");
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "الكل"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "employee",
								children: "موظف"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "department",
								children: "إدارة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "section",
								children: "قسم"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "jobCategory",
								children: "فئة وظيفية"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "permType",
								children: "نوع إذن"
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "الفترة",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: f.window,
						onChange: (e) => set("window", e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "day",
								children: "يومي"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "month",
								children: "شهري"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "all",
								children: "كل الأذونات"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "طريقة الاحتساب",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.apply || "each",
					onChange: (e) => set("apply", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "each",
						children: "لكل موظف على حدة"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "group",
						children: "مجموع مشترك للمستوى"
					})]
				})
			}),
			f.scope === "employee" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الموظف",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmpPicker, {
					employees: db.employees,
					value: f.scopeValue,
					onChange: (c) => set("scopeValue", c)
				})
			}) : null,
			f.scope === "department" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الإدارة",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.scopeValue,
					onChange: (e) => set("scopeValue", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "اختر"
					}), depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
				})
			}) : null,
			f.scope === "section" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "القسم",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.scopeValue,
					onChange: (e) => set("scopeValue", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "اختر"
					}), secs.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
				})
			}) : null,
			f.scope === "jobCategory" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الفئة الوظيفية",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.scopeValue,
					onChange: (e) => set("scopeValue", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "اختر"
					}), grades.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
				})
			}) : null,
			f.scope === "permType" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "نوع الإذن",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.scopeValue,
					onChange: (e) => {
						set("scopeValue", e.target.value);
						set("types", e.target.value);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "اختر"
					}), db.permTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t.name }, t.code))]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ينطبق على الأنواع",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: f.types,
					onChange: (e) => set("types", e.target.value),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "all",
						children: "كل الأنواع"
					}), db.permTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t.name }, t.code))]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "الحد الأقصى بالساعات",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "number",
					step: "0.25",
					min: .25,
					value: f.maxHours,
					onChange: (e) => set("maxHours", Number(e.target.value))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mb-3 flex items-center gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: f.enabled,
					onChange: (e) => set("enabled", e.target.checked)
				}), "مفعّل"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "ملاحظات",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					rows: 2,
					value: f.notes,
					onChange: (e) => set("notes", e.target.value)
				})
			})
		]
	});
}
var ALL_SCREENS = [
	{
		id: "dashboard",
		label: "لوحة التحكم"
	},
	{
		id: "employees",
		label: "الموظفون"
	},
	{
		id: "profile",
		label: "ملف موظف"
	},
	{
		id: "leaves",
		label: "الإجازات"
	},
	{
		id: "permissions",
		label: "الأذونات"
	},
	{
		id: "search",
		label: "البحث"
	},
	{
		id: "reports",
		label: "التقارير"
	},
	{
		id: "trash",
		label: "المحذوفات"
	},
	{
		id: "settings",
		label: "الإعدادات"
	}
];
function UserForm({ initial, onClose, onSave }) {
	const [f, setF] = (0, import_react.useState)(initial || {
		username: "",
		password: "",
		name: "",
		role: "hr",
		perms: [],
		hiddenScreens: []
	});
	const [err, setErr] = (0, import_react.useState)("");
	const toggle = (id) => {
		const hid = new Set(f.hiddenScreens);
		if (hid.has(id)) hid.delete(id);
		else hid.add(id);
		setF({
			...f,
			hiddenScreens: [...hid]
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		title: initial ? "تعديل مستخدم" : "مستخدم جديد",
		onClose,
		footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			className: "flex-1",
			onClick: onClose,
			children: "إلغاء"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "flex-1",
			onClick: () => {
				const msg = onSave(f);
				if (msg) setErr(msg);
			},
			children: "حفظ"
		})] }),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid sm:grid-cols-2 sm:gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "اسم المستخدم",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.username,
							onChange: (e) => setF({
								...f,
								username: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "كلمة المرور",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.password,
							onChange: (e) => setF({
								...f,
								password: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "الاسم الظاهر",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: f.name,
							onChange: (e) => setF({
								...f,
								name: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "الدور",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: f.role,
							onChange: (e) => setF({
								...f,
								role: e.target.value
							}),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "admin",
									children: "مدير"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "hr",
									children: "موارد بشرية"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "viewer",
									children: "عرض فقط"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-semibold text-muted",
				children: "الشاشات المسموحة"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap gap-1.5",
				children: ALL_SCREENS.map((s) => {
					const on = !f.hiddenScreens.includes(s.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `rounded-full border px-3 py-1.5 text-xs font-semibold ${on ? "border-primary bg-primary text-white" : "border-border bg-card"}`,
						onClick: () => toggle(s.id),
						children: s.label
					}, s.id);
				})
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md bg-warn/15 px-3 py-2 text-xs text-warn",
				children: err
			}) : null
		]
	});
}
function ModalHost() {
	const { modal, db, editIndex, closeModal, savePerm, saveLeave, saveEmployee, saveLimit, saveUser, profileCode, page } = useApp();
	const defaultEmp = page === "profile" ? profileCode : "";
	if (modal === "perm") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermForm, {
		initial: editIndex != null ? db.permissions[editIndex] : void 0,
		defaultEmp,
		onClose: closeModal,
		onSave: (rec) => savePerm(rec, editIndex)
	});
	if (modal === "leave") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaveForm, {
		initial: editIndex != null ? db.leaves[editIndex] : void 0,
		defaultEmp,
		onClose: closeModal,
		onSave: (rec) => saveLeave(rec, editIndex)
	});
	if (modal === "emp") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmpForm, {
		initial: editIndex != null ? db.employees[editIndex] : emptyEmp(),
		onClose: closeModal,
		onSave: (emp) => saveEmployee(emp, editIndex)
	});
	if (modal === "limit") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitForm, {
		initial: editIndex != null ? db.permLimits[editIndex] : void 0,
		onClose: closeModal,
		onSave: (lim) => saveLimit(lim, editIndex)
	});
	if (modal === "user") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserForm, {
		initial: editIndex != null ? db.users[editIndex] : void 0,
		onClose: closeModal,
		onSave: (u) => saveUser(u, editIndex)
	});
	return null;
}
var NAV = [
	{
		id: "dashboard",
		label: "لوحة التحكم",
		icon: LayoutGrid
	},
	{
		id: "employees",
		label: "الموظفون",
		icon: Users
	},
	{
		id: "profile",
		label: "ملف موظف",
		icon: FolderOpen
	},
	{
		id: "leaves",
		label: "الإجازات",
		icon: ClipboardList
	},
	{
		id: "permissions",
		label: "الأذونات",
		icon: Timer
	},
	{
		id: "search",
		label: "البحث",
		icon: Search
	},
	{
		id: "reports",
		label: "التقارير",
		icon: FileSearch
	},
	{
		id: "trash",
		label: "المحذوفات",
		icon: Trash2
	},
	{
		id: "settings",
		label: "الإعدادات",
		icon: Settings
	}
];
function Shell({ children }) {
	const { db, page, setPage, user, logout, theme, toggleTheme, sidebarOpen, setSidebar, openModal, toast } = useApp();
	const hidden = new Set(user?.hiddenScreens || []);
	const items = NAV.filter((n) => !hidden.has(n.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: theme === "dark" ? "dark" : "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-bg text-fg",
			children: [
				sidebarOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "fixed inset-0 z-30 bg-black/30 md:hidden",
					"aria-label": "إغلاق القائمة",
					onClick: () => setSidebar(false)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: `fixed bottom-0 right-0 top-0 z-40 flex w-[250px] flex-col bg-sidebar text-white transition-transform ${sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-white/10 px-4 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] opacity-70",
								children: "نظام المتابعة"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-lg font-extrabold leading-tight",
								children: db.settings.appTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] opacity-70",
								children: db.settings.orgName
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex-1 space-y-0.5 overflow-y-auto p-2",
						children: items.map((n) => {
							const Icon = n.icon;
							const on = page === n.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setPage(n.id),
								className: `flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-right text-[13px] ${on ? "bg-white/15 font-semibold" : "text-white/85 hover:bg-white/8"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4 opacity-90",
									strokeWidth: 1.75
								}), n.label]
							}, n.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:mr-[250px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-3 py-2.5 md:px-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-9 place-items-center rounded-md border border-border bg-card md:hidden",
									onClick: () => setSidebar(!sidebarOpen),
									"aria-label": "القائمة",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-9 place-items-center rounded-md border border-border bg-card",
									onClick: toggleTheme,
									"aria-label": "الوضع الليلي",
									children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-bold",
									children: db.settings.orgName
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-muted",
									children: [
										db.settings.dept,
										" · ",
										fd(todayYmd())
									]
								})] })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-white",
									onClick: () => {
										setPage("permissions");
										openModal("perm");
									},
									children: "تسجيل إذن"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold",
									onClick: () => {
										setPage("leaves");
										openModal("leave");
									},
									children: "تسجيل إجازة"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold",
									onClick: () => setPage("employees"),
									children: "موظفون"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-2 text-[11px] text-muted",
									children: [
										user?.name,
										" (",
										user?.role,
										")"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold",
									onClick: logout,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), " خروج"]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						className: "px-3 py-4 md:px-5 md:py-5",
						children
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalHost, {}),
				toast ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-xl px-4 py-2.5 text-sm text-white ${toast.kind === "err" ? "bg-err" : "bg-ok"}`,
					children: toast.text
				}) : null
			]
		})
	});
}
var SKIP = /* @__PURE__ */ new Set([
	"منتهي الخدمة",
	"موقوف",
	"مستقيل",
	"منتهي",
	"إيقاف"
]);
function dailyRows(db, ds) {
	const rows = [];
	for (const emp of db.employees) {
		if (SKIP.has(emp.status)) continue;
		let st = "حاضر";
		let det = "";
		const leave = db.leaves.find((l) => l.empCode === emp.code && (l.status === "معتمدة" || !l.status) && l.from <= ds && ds <= l.to);
		if (leave) {
			st = "إجازة";
			det = leave.type;
		} else {
			const att = db.attendance.find((a) => a.empCode === emp.code && a.date === ds);
			if (att && att.status && att.status !== "حاضر") {
				st = att.status;
				det = att.recStatus || "";
			} else {
				const perm = db.permissions.find((p) => p.empCode === emp.code && p.date === ds && isApprovedPerm(p));
				if (perm) {
					st = "إذن";
					det = `${perm.type} ${perm.from}-${perm.to}`;
				} else if (isHoliday(db, ds)) {
					st = "عطلة رسمية";
					det = db.holidays.find((h) => h.date === ds)?.name || "";
				} else if (isRest(db, ds)) st = "راحة";
			}
		}
		rows.push({
			code: emp.code,
			name: emp.name,
			jn: emp.jobNo,
			dept: emp.dept,
			sec: emp.section,
			sub: emp.subSection,
			pos: emp.position,
			grade: emp.grade,
			st,
			det
		});
	}
	return rows;
}
function dailyCounts(rows) {
	const counts = {};
	for (const r of rows) counts[r.st] = (counts[r.st] || 0) + 1;
	return counts;
}
function DashboardPage() {
	const { db, setPage, user } = useApp();
	const [day, setDay] = (0, import_react.useState)(todayYmd());
	const month = day.slice(0, 7);
	const daily = (0, import_react.useMemo)(() => dailyRows(db, day), [db, day]);
	const counts = dailyCounts(daily);
	const active = db.employees.filter((e) => e.status === "نشط").length;
	const monthLeaves = db.leaves.filter((l) => l.from.slice(0, 7) === month && l.status === "معتمدة");
	const monthPerms = db.permissions.filter((p) => p.date.slice(0, 7) === month && p.status === "معتمدة");
	const leaveDays = monthLeaves.reduce((a, l) => a + (l.workDays || 0), 0);
	const byType = hoursByType(monthPerms);
	const totalMins = byType.reduce((a, x) => a + x.minutes, 0);
	const max = Math.max(1, ...byType.map((x) => x.minutes));
	const byDept = {};
	db.employees.forEach((e) => {
		const k = e.dept || "غير محدد";
		byDept[k] = (byDept[k] || 0) + 1;
	});
	const mxD = Math.max(1, ...Object.values(byDept));
	const byLeave = {};
	monthLeaves.forEach((l) => {
		byLeave[l.type] = (byLeave[l.type] || 0) + (l.workDays || 0);
	});
	const mxL = Math.max(1, ...Object.values(byLeave));
	const recent = [...db.leaves.slice(-8).map((l) => ({
		k: l.id,
		t: "إجازة",
		name: l.empName,
		jn: l.empCode,
		det: `${l.type} · ${l.workDays} يوم`,
		d: l.from || l.date
	})), ...db.permissions.slice(-8).map((p) => ({
		k: p.id,
		t: "إذن",
		name: p.empName,
		jn: p.jobNo,
		det: `${p.type} · ${p.duration}`,
		d: p.date
	}))].sort((a, b) => String(b.d).localeCompare(String(a.d))).slice(0, 10);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[22px] font-extrabold",
				children: "لوحة التحكم"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted",
				children: [
					"مرحباً ",
					user?.name,
					" · مؤشرات اليوميات والأذونات — ",
					fd(day)
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				type: "date",
				className: "w-44",
				value: day,
				onChange: (e) => setDay(e.target.value)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "الموظفون النشطون",
					value: active,
					tone: "teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "حاضر",
					value: counts["حاضر"] || 0,
					tone: "ok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إجازة اليوم",
					value: counts["إجازة"] || 0,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إذن اليوم",
					value: counts["إذن"] || 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إجازات الشهر (أيام عمل)",
					value: leaveDays,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "أذونات الشهر",
					value: monthPerms.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "ساعات الأذونات",
					value: minutesToLabel(totalMins),
					tone: "ok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "مجموع الأرصدة",
					value: db.employees.reduce((a, e) => a + (e.balNow || 0), 0),
					tone: "teal"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 grid gap-3 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, {
					extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-primary",
						onClick: () => setPage("reports"),
						children: "تقرير"
					}),
					children: "الموقف اليومي"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 p-4",
					children: [
						"حاضر",
						"إجازة",
						"إذن",
						"راحة",
						"عطلة رسمية"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-24 text-muted",
								children: k
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "meter flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${daily.length ? (counts[k] || 0) / daily.length * 100 : 0}%` } })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-left font-semibold tabular-nums",
								children: counts[k] || 0
							})
						]
					}, k))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, {
					extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-primary",
						onClick: () => setPage("permissions"),
						children: "التفاصيل"
					}),
					children: "ساعات الأذونات حسب النوع"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 p-4",
					children: byType.length ? byType.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-24 truncate text-muted",
								children: x.type
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "meter flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${x.minutes / max * 100}%` } })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-20 text-left font-semibold tabular-nums",
								children: minutesToLabel(x.minutes)
							})
						]
					}, x.type)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "لا أذونات هذا الشهر"
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "الموظفون حسب الإدارة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2 p-4",
					children: Object.entries(byDept).sort((a, b) => b[1] - a[1]).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-28 truncate text-muted",
								children: k
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "meter flex-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${v / mxD * 100}%` } })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-left font-semibold tabular-nums",
								children: v
							})
						]
					}, k))
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 grid gap-3 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "أيام الإجازات حسب النوع" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2 p-4",
				children: Object.keys(byLeave).length ? Object.entries(byLeave).sort((a, b) => b[1] - a[1]).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-32 truncate text-muted",
							children: k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "meter flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${v / mxL * 100}%` } })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 text-left font-semibold tabular-nums",
							children: v
						})
					]
				}, k)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-2 text-sm text-muted",
					children: "لا إجازات هذا الشهر"
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, {
				extra: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-primary",
						onClick: () => setPage("leaves"),
						children: "الإجازات"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs text-primary",
						onClick: () => setPage("permissions"),
						children: "الأذونات"
					})]
				}),
				children: "آخر الحركات"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "divide-y divide-border",
				children: recent.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-2 px-4 py-2.5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: r.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-muted",
						children: r.det
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: r.t === "إذن" ? "info" : "warn",
							children: r.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[11px] text-muted",
							children: fd(r.d)
						})]
					})]
				}, r.k))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "عيّنة الموظفين" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الاسم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرقم الوظيفي" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الإدارة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الفئة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرصيد" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: db.employees.slice(0, 8).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "font-semibold",
					children: e.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.jobNo }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.dept }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.grade }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "tabular-nums",
					children: e.balNow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: statusTone(e.status),
					children: e.status
				}) })
			] }, e.code)) })] })
		})] })
	] });
}
function EmployeesPage() {
	const { db, openModal, softDel, setProfile, flash } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const [dept, setDept] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
	const rows = (0, import_react.useMemo)(() => db.employees.filter((e) => {
		if (dept && e.dept !== dept) return false;
		if (!q) return true;
		return `${e.name} ${e.code} ${e.jobNo} ${e.nationalId} ${e.section} ${e.position}`.toLowerCase().includes(q.toLowerCase());
	}), [
		db.employees,
		q,
		dept
	]);
	const pg = paginate(rows, page, 12);
	const exportRows = () => {
		downloadText("موظفون.csv", toCsv([
			"الكود",
			"الرقم الوظيفي",
			"الاسم",
			"الإدارة",
			"القسم",
			"الوظيفة",
			"الفئة",
			"الرصيد",
			"الحالة"
		], rows.map((e) => [
			e.code,
			e.jobNo,
			e.name,
			e.dept,
			e.section,
			e.position,
			e.grade,
			e.balNow,
			e.status
		])), "text/csv;charset=utf-8");
		flash("تم تصدير CSV");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "الموظفون",
			desc: `${rows.length} موظف`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: exportRows,
					children: "CSV"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => printTable(db.settings.orgName, "كشف الموظفين", [
						"الكود",
						"الرقم الوظيفي",
						"الاسم",
						"الإدارة",
						"القسم",
						"الوظيفة",
						"الفئة",
						"الرصيد",
						"الحالة"
					], rows.map((e) => [
						e.code,
						e.jobNo,
						e.name,
						e.dept,
						e.section,
						e.position,
						e.grade,
						e.balNow,
						e.status
					])),
					children: "طباعة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => openModal("emp"),
					children: "إضافة موظف"
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				className: "min-w-[200px] flex-1",
				placeholder: "بحث بالاسم أو الكود أو الرقم الوظيفي...",
				value: q,
				onChange: (e) => {
					setQ(e.target.value);
					setPage(1);
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: dept,
				onChange: (e) => {
					setDept(e.target.value);
					setPage(1);
				},
				className: "w-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: "كل الإدارات"
				}), depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الكود" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرقم الوظيفي" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الاسم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الإدارة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "القسم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الوظيفة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الفئة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرصيد" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [pg.slice.map((e) => {
				const idx = db.employees.indexOf(e);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.code }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.jobNo }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-semibold",
						children: e.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.dept }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.section }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.position }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.grade }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "tabular-nums",
						children: e.balNow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(e.status),
						children: e.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => setProfile(e.code),
							children: "الملف"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => openModal("emp", idx),
							children: "تعديل"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-err",
							onClick: () => softDel("employees", idx),
							children: "حذف"
						})
					] })
				] }, e.code);
			}), !pg.slice.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 10,
				className: "py-8 text-center text-muted",
				children: "لا نتائج"
			}) }) : null] })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
			page: pg.page,
			pages: pg.pages,
			total: pg.total,
			onPage: setPage
		})] })
	] });
}
function LeavesPage() {
	const { db, openModal, softDel } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const rows = (0, import_react.useMemo)(() => db.leaves.filter((l) => {
		if (!q) return true;
		return `${l.empName} ${l.empCode} ${l.id} ${l.type} ${l.dept}`.toLowerCase().includes(q.toLowerCase());
	}), [db.leaves, q]);
	const pg = paginate(rows, page, 12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "الإجازات",
			desc: `${rows.length} حركة`,
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				onClick: () => printTable(db.settings.orgName, "سجل الإجازات", [
					"رقم",
					"الموظف",
					"النوع",
					"من",
					"إلى",
					"أيام عمل",
					"الحالة"
				], rows.map((l) => [
					l.id,
					l.empName,
					l.type,
					fd(l.from),
					fd(l.to),
					l.workDays,
					l.status
				])),
				children: "طباعة"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => openModal("leave"),
				children: "تسجيل إجازة"
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			className: "mb-3",
			placeholder: "بحث...",
			value: q,
			onChange: (e) => {
				setQ(e.target.value);
				setPage(1);
			}
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "أيام عمل" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [pg.slice.map((l) => {
				const i = db.leaves.indexOf(l);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.id }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-semibold",
						children: l.empName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.to) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.workDays }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(l.status),
						children: l.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => openModal("leave", i),
							children: "تعديل"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-err",
							onClick: () => softDel("leaves", i),
							children: "حذف"
						})
					] })
				] }, l.id);
			}), !pg.slice.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 8,
				className: "py-8 text-center text-muted",
				children: "لا إجازات"
			}) }) : null] })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
			page: pg.page,
			pages: pg.pages,
			total: pg.total,
			onPage: setPage
		})] })
	] });
}
function LoginPage() {
	const { login, db } = useApp();
	const [u, setU] = (0, import_react.useState)("admin");
	const [p, setP] = (0, import_react.useState)("admin");
	const [err, setErr] = (0, import_react.useState)("");
	const go = () => {
		const m = login(u, p);
		if (m) setErr(m);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-sidebar p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-xl border border-white/10 bg-card p-6 text-fg shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-center text-xl font-extrabold leading-snug text-primary",
					children: db.settings.appTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 mt-1 text-center text-xs text-muted",
					children: "نظام شؤون الموظفين — تسجيل الدخول"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1 block text-xs font-semibold text-muted",
					children: "اسم المستخدم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: "mb-3 h-10 w-full rounded-md border border-border bg-card px-3",
					value: u,
					onChange: (e) => setU(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-1 block text-xs font-semibold text-muted",
					children: "كلمة المرور"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "password",
					className: "mb-3 h-10 w-full rounded-md border border-border bg-card px-3",
					value: p,
					onChange: (e) => setP(e.target.value),
					onKeyDown: (e) => {
						if (e.key === "Enter") go();
					}
				}),
				err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 rounded-md bg-warn/20 px-3 py-2 text-xs text-warn",
					children: err
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "w-full",
					onClick: go,
					children: "دخول"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-[11px] text-muted",
					children: "admin / admin · hr / hr · viewer / viewer"
				})
			]
		})
	});
}
function PermissionsPage() {
	const { db, openModal, softDel } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const [month, setMonth] = (0, import_react.useState)(todayYmd().slice(0, 7));
	const [type, setType] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const rows = (0, import_react.useMemo)(() => {
		return db.permissions.filter((p) => {
			if (month && p.date.slice(0, 7) !== month) return false;
			if (type && p.type !== type) return false;
			if (!q) return true;
			return `${p.empName} ${p.empCode} ${p.jobNo} ${p.id} ${p.type}`.toLowerCase().includes(q.toLowerCase());
		});
	}, [
		db.permissions,
		q,
		month,
		type
	]);
	const monthRows = db.permissions.filter((p) => p.date.slice(0, 7) === month && isApprovedPerm(p));
	const byType = hoursByType(monthRows);
	const totalMins = byType.reduce((a, x) => a + x.minutes, 0);
	const maxT = Math.max(1, ...byType.map((x) => x.minutes));
	const pg = paginate(rows, page, 12);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "الأذونات الشهرية",
			desc: "ساعات حسب النوع · حدود يومية وشهرية على الموظف والإدارة والقسم والفئة والنوع",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => printTable(db.settings.orgName, `سجل الأذونات — ${month}`, [
						"رقم",
						"التاريخ",
						"الموظف",
						"الرقم الوظيفي",
						"النوع",
						"من",
						"إلى",
						"المدة",
						"الحالة"
					], rows.map((p) => [
						p.id,
						fd(p.date),
						p.empName,
						p.jobNo,
						p.type,
						p.from,
						p.to,
						p.duration,
						p.status
					])),
					children: "طباعة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => openModal("limit"),
					children: "قاعدة حد"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => openModal("perm"),
					children: "تسجيل إذن"
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "أذونات الفترة",
					value: rows.length,
					tone: "teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: `شهر ${month}`,
					value: monthRows.length,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إجمالي الساعات",
					value: minutesToLabel(totalMins),
					tone: "ok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "أنواع مسجّلة",
					value: byType.length
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: ["ساعات كل نوع — ", month] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 p-4 md:grid-cols-2",
				children: byType.length ? byType.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: x.type
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-muted",
						children: minutesToLabel(x.minutes)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "meter",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${x.minutes / maxT * 100}%` } })
				})] }, x.type)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "لا ساعات معتمدة هذا الشهر"
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, {
				extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					onClick: () => openModal("limit"),
					children: "إضافة حد"
				}),
				children: "قواعد حدود الساعات"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tbl-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "القاعدة" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "المستوى" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "القيمة" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الاحتساب" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الفترة" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الأنواع" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحد (ساعة)" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: db.permLimits.map((lim, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-semibold",
						children: lim.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: SCOPE_LABEL[lim.scope] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: scopeValueLabel(lim, db) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: limitApply(lim) === "group" ? "info" : "muted",
						children: APPLY_LABEL[limitApply(lim)]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: WINDOW_LABEL[lim.window] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: lim.types === "all" ? "كل الأنواع" : lim.types }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "tabular-nums",
						children: lim.maxHours
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: lim.enabled ? "ok" : "muted",
						children: lim.enabled ? "مفعّل" : "متوقف"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => openModal("limit", i),
							children: "تعديل"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-err",
							onClick: () => softDel("permLimits", i),
							children: "حذف"
						})
					] })
				] }, lim.id)) })] })
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
				"استهلاك حدود الساعات (",
				month,
				")"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LimitsUsage, { month })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "حدود عدد المرات الشهرية حسب النوع" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountLimits, { month })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "min-w-[200px] flex-1",
					placeholder: "بحث...",
					value: q,
					onChange: (e) => {
						setQ(e.target.value);
						setPage(1);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "month",
					className: "w-40",
					value: month,
					onChange: (e) => {
						setMonth(e.target.value);
						setPage(1);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					className: "w-40",
					value: type,
					onChange: (e) => {
						setType(e.target.value);
						setPage(1);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "كل الأنواع"
					}), db.permTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t.name }, t.code))]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "التاريخ" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرقم الوظيفي" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "المدة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [pg.slice.map((p) => {
				const i = db.permissions.indexOf(p);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.id }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(p.date) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "font-semibold",
						children: p.empName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.jobNo }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.type }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.from }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.to }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.duration }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(p.status),
						children: p.status
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => openModal("perm", i),
							children: "تعديل"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-err",
							onClick: () => softDel("permissions", i),
							children: "حذف"
						})
					] })
				] }, p.id);
			}), !pg.slice.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 10,
				className: "py-8 text-center text-muted",
				children: "لا أذونات"
			}) }) : null] })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
			page: pg.page,
			pages: pg.pages,
			total: pg.total,
			onPage: setPage
		})] })
	] });
}
function LimitsUsage({ month }) {
	const { db } = useApp();
	const day = todayYmd();
	const enabled = db.permLimits.filter((l) => l.enabled);
	if (!enabled.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-4 text-sm text-muted",
		children: "لا قواعد مفعّلة"
	});
	const groupLimits = enabled.filter((l) => limitApply(l) === "group");
	const eachLimits = enabled.filter((l) => limitApply(l) === "each");
	const groupRows = groupLimits.map((limit) => {
		const date = limit.window === "day" ? day : month + "-01";
		const sample = db.employees.find((e) => e.status === "نشط") || db.employees[0];
		const used = sample ? usedMinutesForLimit(db, limit, sample, date) : 0;
		const max = limit.maxHours * 60;
		return {
			limit,
			used,
			max,
			pct: max ? Math.min(100, Math.round(used / max * 100)) : 0
		};
	});
	const eachRows = db.employees.filter((e) => e.status === "نشط").map((emp) => {
		return {
			emp,
			cells: eachLimits.map((limit) => {
				const date = limit.window === "day" ? day : month + "-01";
				const used = usedMinutesForLimit(db, limit, emp, date);
				const max = limit.maxHours * 60;
				return {
					limit,
					used,
					max,
					pct: max ? Math.min(100, Math.round(used / max * 100)) : 0
				};
			})
		};
	}).filter((r) => r.cells.some((c) => c.used > 0));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 p-0",
		children: [groupRows.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 text-xs font-bold text-muted",
				children: "حدود مشتركة (مجموع المستوى)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 md:grid-cols-2",
				children: groupRows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md border border-border p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1 flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: c.limit.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `tabular-nums ${c.pct >= 100 ? "text-err" : ""}`,
								children: [
									minutesToLabel(c.used),
									" / ",
									c.limit.maxHours,
									"س"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "meter",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
								width: `${c.pct}%`,
								background: c.pct >= 100 ? "var(--color-err)" : c.pct >= 80 ? "var(--color-warn)" : void 0
							} })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 text-[11px] text-muted",
							children: [
								SCOPE_LABEL[c.limit.scope],
								" · ",
								WINDOW_LABEL[c.limit.window]
							]
						})
					]
				}, c.limit.id))
			})]
		}) : null, eachLimits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الإدارة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الفئة" }),
				eachLimits.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: l.name }, l.id))
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: eachRows.length ? eachRows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "font-semibold",
					children: r.emp.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.emp.dept }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.emp.grade }),
				r.cells.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
					className: c.pct >= 100 ? "bg-err/10" : "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] tabular-nums",
						children: [
							minutesToLabel(c.used),
							" / ",
							c.limit.maxHours,
							"س"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "meter mt-1 w-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
							width: `${c.pct}%`,
							background: c.pct >= 100 ? "var(--color-err)" : c.pct >= 80 ? "var(--color-warn)" : void 0
						} })
					})]
				}, c.limit.id))
			] }, r.emp.code)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				colSpan: 3 + eachLimits.length,
				className: "py-6 text-center text-muted",
				children: "لا استهلاك فردي ظاهر لهذه الفترة"
			}) }) })] })
		}) : null]
	});
}
function CountLimits({ month }) {
	const { db } = useApp();
	const types = db.permTypes.filter((t) => t.monthlyCount > 0);
	const rows = db.employees.filter((e) => e.status === "نشط").flatMap((emp) => types.map((t) => {
		const used = monthlyCountUsed(db, emp.code, t.name, month);
		return {
			emp,
			type: t.name,
			lim: t.monthlyCount,
			used,
			rem: Math.max(0, t.monthlyCount - used)
		};
	}).filter((r) => r.used > 0));
	if (!rows.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "p-4 text-sm text-muted",
		children: "لا استخدام لحدود العدد هذا الشهر"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tbl-scroll",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحد" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "المستخدم" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "المتبقي" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
			className: r.rem === 0 ? "bg-err/10" : "",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.emp.name }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.type }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.lim }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.used }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.rem })
			]
		}, r.emp.code + r.type)) })] })
	});
}
function ProfilePage() {
	const { db, profileCode, setProfile, openModal } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		if (!s) return [];
		return db.employees.filter((e) => `${e.name} ${e.code} ${e.jobNo} ${e.nationalId}`.toLowerCase().includes(s)).slice(0, 10);
	}, [q, db.employees]);
	const e = db.employees.find((x) => x.code === profileCode);
	const leaves = e ? db.leaves.filter((l) => l.empCode === e.code) : [];
	const perms = e ? db.permissions.filter((p) => p.empCode === e.code) : [];
	const hours = hoursByType(perms);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const printProfile = () => {
		if (!e) return;
		const printDate = (/* @__PURE__ */ new Date()).toLocaleDateString("ar-EG", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		const lv = leaves.map((l) => `<tr><td>${l.id}</td><td>${l.type}</td><td>${fd(l.from)}</td><td>${fd(l.to)}</td><td>${l.workDays}</td><td>${l.status}</td></tr>`).join("");
		const pr = perms.map((p) => `<tr><td>${p.id}</td><td>${fd(p.date)}</td><td>${p.type}</td><td>${p.from}</td><td>${p.to}</td><td>${p.duration}</td><td>${p.status}</td></tr>`).join("");
		openPrint("ملف موظف", `<h1>${db.settings.orgName}</h1>
      <div class="print-date">تاريخ الطباعة: ${printDate}</div>
      <h2 style="margin:0 0 6px">${e.name}</h2>
      <div class="meta">${e.jobNo} · ${e.dept} · ${e.position} · فئة ${e.grade}</div>
      <h3>البيانات الأساسية</h3>
      <table><tbody>
        <tr><td>القسم</td><td>${e.section || "—"}</td><td>الهاتف</td><td>${e.phone || "—"}</td></tr>
        <tr><td>الرقم القومي</td><td>${e.nationalId || "—"}</td><td>التعيين</td><td>${fd(e.hiredAt)}</td></tr>
      </tbody></table>
      <p>الرصيد السنوي <b>${e.balYear}</b> · المستخدم <b>${e.balUsed}</b> · الحالي <b>${e.balNow}</b></p>
      <h3>الإجازات (${leaves.length})</h3>
      <table><thead><tr><th>رقم</th><th>النوع</th><th>من</th><th>إلى</th><th>أيام</th><th>الحالة</th></tr></thead><tbody>${lv || "<tr><td colspan=\"6\">لا إجازات</td></tr>"}</tbody></table>
      <h3>الأذونات (${perms.length})</h3>
      <table><thead><tr><th>رقم</th><th>التاريخ</th><th>النوع</th><th>من</th><th>إلى</th><th>المدة</th><th>الحالة</th></tr></thead><tbody>${pr || "<tr><td colspan=\"7\">لا أذونات</td></tr>"}</tbody></table>`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "ملف موظف",
			desc: "بيانات الموظف وحركاته وأرصدة الأذونات بالساعات",
			actions: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "secondary",
				onClick: printProfile,
				children: "طباعة الملف"
			}) : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			className: "mb-3 h-10 w-full rounded-md border border-border bg-card px-3 text-sm",
			placeholder: "ابحث واختر موظفاً...",
			value: q,
			onChange: (ev) => setQ(ev.target.value)
		}),
		hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 rounded-md border border-border bg-card",
			children: hits.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "block w-full px-3 py-2 text-right text-sm hover:bg-primary-soft",
				onClick: () => {
					setProfile(h.code);
					setQ("");
				},
				children: [
					h.name,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted",
						children: h.jobNo
					})
				]
			}, h.code))
		}) : null,
		!e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-10 text-center text-sm text-muted",
			children: "ابحث واختر موظفاً لعرض ملفه"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "mb-3 p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid size-16 place-items-center rounded-2xl bg-primary text-2xl font-extrabold text-white",
							children: e.name.slice(0, 1)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xl font-extrabold",
							children: e.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex flex-wrap gap-1.5 text-[11px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-th px-2 py-0.5",
									children: e.jobNo
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-th px-2 py-0.5",
									children: e.dept
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-th px-2 py-0.5",
									children: e.position
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-th px-2 py-0.5",
									children: ["فئة ", e.grade]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: statusTone(e.status),
									children: e.status
								})
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => openModal("leave"),
							children: "إجازة"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => openModal("perm"),
							children: "إذن"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-2 gap-2.5 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "رصيد سنوي",
						value: e.balYear,
						tone: "teal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "مستخدم",
						value: e.balUsed,
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "الحالي",
						value: e.balNow,
						tone: "ok"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						label: "ساعات الأذونات",
						value: minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "ساعات الأذونات حسب النوع" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-sm",
					children: hours.length ? hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "tabular-nums",
							children: minutesToLabel(h.minutes)
						})]
					}, h.type)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted",
						children: "لا أذونات"
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "حدود الساعات المطبّقة" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-xs",
					children: (() => {
						const chk = checkPermLimits(db, e, "إذن ساعة", today, 0);
						if (!chk.matches.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "لا حدود تنطبق مباشرة — جرّب تسجيل إذن لعرض المطابقة حسب النوع"
						});
						return chk.matches.map((v) => {
							const pct = v.maxMinutes ? Math.min(100, Math.round(v.usedMinutes / v.maxMinutes * 100)) : 0;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-0.5 flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										v.limit.name,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted",
											children: [
												"(",
												APPLY_LABEL[v.limit.apply === "group" ? "group" : "each"],
												")"
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "tabular-nums",
										children: [
											minutesToLabel(v.usedMinutes),
											" / ",
											v.limit.maxHours,
											"س"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "meter",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${pct}%` } })
								})]
							}, v.limit.id);
						});
					})()
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "البيانات الأساسية" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3",
					children: [
						["القسم", e.section],
						["القسم الفرعي", e.subSection],
						["الهاتف", e.phone],
						["الرقم القومي", e.nationalId],
						["التعيين", fd(e.hiredAt)],
						["الميلاد", fd(e.birth)],
						["البريد", e.email],
						["المدير", e.manager]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-l border-border px-4 py-2.5 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: v || "—" })]
					}, k))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
					"سجل الإجازات (",
					leaves.length,
					")"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tbl-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "أيام" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" })
					] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: leaves.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.id }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.to) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.workDays }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: statusTone(l.status),
							children: l.status
						}) })
					] }, l.id)) })] })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
				"سجل الأذونات (",
				perms.length,
				")"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tbl-scroll",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "التاريخ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "المدة" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الحالة" })
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: perms.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.id }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(p.date) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.type }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.from }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.to }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.duration }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: statusTone(p.status),
						children: p.status
					}) })
				] }, p.id)) })] })
			})] })
		] })
	] });
}
function ReportsPage() {
	const { db } = useApp();
	const [tab, setTab] = (0, import_react.useState)("daily");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "التقارير",
			desc: "يومي · شهري · فترة · موظف · إدارة"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
			items: [
				{
					id: "daily",
					label: "يومي"
				},
				{
					id: "monthly",
					label: "شهري"
				},
				{
					id: "range",
					label: "بين تاريخين"
				},
				{
					id: "emp",
					label: "موظف"
				},
				{
					id: "dept",
					label: "إدارة"
				}
			],
			value: tab,
			onChange: setTab
		}),
		tab === "daily" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Daily, { dbOrg: db.settings.orgName }) : null,
		tab === "monthly" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monthly, {}) : null,
		tab === "range" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Range, {}) : null,
		tab === "emp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmpRep, {}) : null,
		tab === "dept" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeptRep, {}) : null
	] });
}
function Daily({ dbOrg }) {
	const { db } = useApp();
	const [day, setDay] = (0, import_react.useState)(todayYmd());
	const [q, setQ] = (0, import_react.useState)("");
	const [st, setSt] = (0, import_react.useState)("");
	const [dept, setDept] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const all = (0, import_react.useMemo)(() => dailyRows(db, day), [db, day]);
	const counts = dailyCounts(all);
	const depts = [...new Set(all.map((r) => r.dept).filter(Boolean))].sort();
	const rows = all.filter((r) => {
		if (st && r.st !== st) return false;
		if (dept && r.dept !== dept) return false;
		if (q && !`${r.name} ${r.jn} ${r.dept} ${r.sec} ${r.pos} ${r.st}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	});
	const pg = paginate(rows, page, 14);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-44",
					value: day,
					onChange: (e) => {
						setDay(e.target.value);
						setPage(1);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "min-w-[160px] flex-1",
					placeholder: "بحث...",
					value: q,
					onChange: (e) => {
						setQ(e.target.value);
						setPage(1);
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					className: "w-36",
					value: st,
					onChange: (e) => {
						setSt(e.target.value);
						setPage(1);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "كل المواقف"
					}), [
						"حاضر",
						"إجازة",
						"إذن",
						"راحة",
						"عطلة رسمية",
						"غائب",
						"غياب بدون إذن",
						"غياب بعذر"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					className: "w-40",
					value: dept,
					onChange: (e) => {
						setDept(e.target.value);
						setPage(1);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "كل الإدارات"
					}), depts.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: d }, d))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => printTable(dbOrg, `التقرير اليومي — ${fd(day)}`, [
						"الموظف",
						"الرقم الوظيفي",
						"الإدارة",
						"القسم",
						"الوظيفة",
						"الموقف",
						"التفاصيل"
					], rows.map((r) => [
						r.name,
						r.jn,
						r.dept,
						r.sec,
						r.pos,
						r.st,
						r.det
					])),
					children: "طباعة"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "المعروض / الإجمالي",
					value: `${rows.length} / ${all.length}`,
					tone: "teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "حاضر",
					value: counts["حاضر"] || 0,
					tone: "ok"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إجازة",
					value: counts["إجازة"] || 0,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إذن",
					value: counts["إذن"] || 0
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرقم الوظيفي" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الإدارة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "القسم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الوظيفة" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموقف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "التفاصيل" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: pg.slice.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "font-semibold",
					children: r.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.jn }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.dept }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.sec }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.pos }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: statusTone(r.st),
					children: r.st
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: r.det })
			] }, r.code)) })] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
			page: pg.page,
			pages: pg.pages,
			total: pg.total,
			onPage: setPage
		})] })
	] });
}
function Monthly() {
	const { db } = useApp();
	const [month, setMonth] = (0, import_react.useState)(todayYmd().slice(0, 7));
	const [q, setQ] = (0, import_react.useState)("");
	const from = month + "-01";
	const last = new Date(Number(month.slice(0, 4)), Number(month.slice(5, 7)), 0).getDate();
	const to = month + "-" + String(last).padStart(2, "0");
	const leaves = db.leaves.filter((l) => l.from >= from && l.from <= to && l.status !== "ملغاة");
	const perms = db.permissions.filter((p) => p.date >= from && p.date <= to && p.status === "معتمدة");
	const hours = hoursByType(perms);
	const byType = {};
	leaves.forEach((l) => {
		byType[l.type] = (byType[l.type] || 0) + (l.workDays || 0);
	});
	const filtered = leaves.filter((l) => q ? `${l.empName} ${l.type} ${l.id}`.toLowerCase().includes(q.toLowerCase()) : true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "month",
					className: "w-44",
					value: month,
					onChange: (e) => setMonth(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "min-w-[160px] flex-1",
					placeholder: "تصفية الإجازات...",
					value: q,
					onChange: (e) => setQ(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => printTable(db.settings.orgName, `التقرير الشهري — ${month}`, [
						"الموظف",
						"النوع",
						"من",
						"إلى",
						"أيام عمل"
					], filtered.map((l) => [
						l.empName,
						l.type,
						fd(l.from),
						fd(l.to),
						l.workDays
					])),
					children: "طباعة"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid grid-cols-2 gap-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "إجازات",
					value: leaves.length,
					tone: "warn"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "أيام عمل مخصومة",
					value: Object.values(byType).reduce((a, n) => a + n, 0),
					tone: "teal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "أذونات",
					value: perms.length
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
					label: "ساعات الأذونات",
					value: minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0)),
					tone: "ok"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid gap-3 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "توزيع أيام الإجازات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 text-sm",
				children: Object.keys(byType).length ? Object.entries(byType).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: k }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: v })]
				}, k)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "لا بيانات"
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "توزيع ساعات الأذونات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 text-sm",
				children: hours.length ? hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: h.type }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: minutesToLabel(h.minutes) })]
				}, h.type)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "لا بيانات"
				})
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "إجازات الشهر" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "أيام عمل" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.empName }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.to) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.workDays })
			] }, l.id)) })] })
		})] })
	] });
}
function Range() {
	const { db } = useApp();
	const [from, setFrom] = (0, import_react.useState)(todayYmd().slice(0, 8) + "01");
	const [to, setTo] = (0, import_react.useState)(todayYmd());
	const [q, setQ] = (0, import_react.useState)("");
	const leaves = db.leaves.filter((l) => {
		if (l.status === "ملغاة") return false;
		if (l.to < from || l.from > to) return false;
		if (q && !`${l.empName} ${l.type} ${l.id}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	});
	const perms = db.permissions.filter((p) => p.date >= from && p.date <= to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					value: from,
					onChange: (e) => setFrom(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "date",
					className: "w-40",
					value: to,
					onChange: (e) => setTo(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					className: "min-w-[160px] flex-1",
					placeholder: "تصفية...",
					value: q,
					onChange: (e) => setQ(e.target.value)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => printTable(db.settings.orgName, `تقرير الفترة ${fd(from)} ← ${fd(to)}`, [
						"نوع",
						"رقم",
						"الموظف",
						"التفاصيل",
						"من",
						"إلى"
					], [...leaves.map((l) => [
						"إجازة",
						l.id,
						l.empName,
						l.type,
						fd(l.from),
						fd(l.to)
					]), ...perms.map((p) => [
						"إذن",
						p.id,
						p.empName,
						`${p.type} · ${p.duration}`,
						fd(p.date),
						""
					])]),
					children: "طباعة"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid grid-cols-2 gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "إجازات",
				value: leaves.length,
				tone: "warn"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "أذونات",
				value: perms.length
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "tbl-scroll",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "نوع" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الموظف" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "التفاصيل" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" })
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [leaves.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "warn",
					children: "إجازة"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.id }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.empName }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.to) })
			] }, l.id)), perms.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "info",
					children: "إذن"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.id }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.empName }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
					p.type,
					" · ",
					p.duration
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(p.date) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "—" })
			] }, p.id))] })] })
		}) })
	] });
}
function EmpRep() {
	const { db, setProfile } = useApp();
	const [emp, setEmp] = (0, import_react.useState)("");
	const e = db.employees.find((x) => x.code === emp);
	const leaves = e ? db.leaves.filter((l) => l.empCode === e.code) : [];
	const perms = e ? db.permissions.filter((p) => p.empCode === e.code) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			className: "max-w-sm flex-1",
			value: emp,
			onChange: (ev) => setEmp(ev.target.value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "اختر موظفاً"
			}), db.employees.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
				value: x.code,
				children: [
					x.name,
					" — ",
					x.jobNo
				]
			}, x.code))]
		}), e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "secondary",
			onClick: () => setProfile(e.code),
			children: "فتح الملف"
		}) : null]
	}), !e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "اختر موظفاً لعرض تقريره"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 grid grid-cols-2 gap-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "إجازات",
				value: leaves.length,
				tone: "warn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "أذونات",
				value: perms.length
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
				label: "رصيد حالي",
				value: e.balNow,
				tone: "ok"
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tbl-scroll",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "نوع" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "رقم" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "تفاصيل" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "من" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "إلى" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "حالة" })
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [leaves.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "إجازة" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.to) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: statusTone(l.status),
				children: l.status
			}) })
		] }, l.id)), perms.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "إذن" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.id }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
				p.type,
				" · ",
				p.duration
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(p.date) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: "—" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: statusTone(p.status),
				children: p.status
			}) })
		] }, p.id))] })] })
	}) })] })] });
}
function DeptRep() {
	const { db, setProfile } = useApp();
	const depts = [...new Set(db.employees.map((e) => e.dept).filter(Boolean))].sort();
	const [d, setD] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const emps = db.employees.filter((e) => {
		if (e.dept !== d) return false;
		if (q && !`${e.name} ${e.jobNo} ${e.section} ${e.position}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	});
	const hours = hoursByType(db.permissions.filter((p) => emps.some((e) => e.code === p.empCode)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex flex-wrap gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			className: "max-w-sm flex-1",
			value: d,
			onChange: (e) => setD(e.target.value),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "اختر إدارة"
			}), depts.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: x }, x))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			className: "w-48",
			placeholder: "تصفية...",
			value: q,
			onChange: (e) => setQ(e.target.value)
		})]
	}), !d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "اختر إدارة"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 grid grid-cols-2 gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
			label: "موظفون",
			value: emps.length,
			tone: "teal"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
			label: "ساعات أذونات المجموعة",
			value: minutesToLabel(hours.reduce((a, x) => a + x.minutes, 0))
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tbl-scroll",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الرقم الوظيفي" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الاسم" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "القسم" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الوظيفة" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "الفئة" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: emps.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.jobNo }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
				className: "font-semibold",
				children: e.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.section }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.position }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: e.grade }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "text-xs font-semibold text-primary",
				onClick: () => setProfile(e.code),
				children: "الملف"
			}) })
		] }, e.code)) })] })
	}) })] })] });
}
function SearchPage() {
	const { db, setProfile } = useApp();
	const [q, setQ] = (0, import_react.useState)("");
	const s = q.trim().toLowerCase();
	const emps = s ? db.employees.filter((e) => `${e.name} ${e.jobNo} ${e.code} ${e.nationalId} ${e.dept}`.toLowerCase().includes(s)) : [];
	const leaves = s ? db.leaves.filter((l) => `${l.empName} ${l.id} ${l.type}`.toLowerCase().includes(s)) : [];
	const perms = s ? db.permissions.filter((p) => `${p.empName} ${p.id} ${p.type}`.toLowerCase().includes(s)) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "البحث الشامل",
			desc: "موظفون · إجازات · أذونات"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			placeholder: "اكتب للبحث...",
			value: q,
			onChange: (e) => setQ(e.target.value),
			className: "mb-4"
		}),
		!s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "ابدأ بالكتابة للبحث في السجلات"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
						"الموظفون (",
						emps.length,
						")"
					] }),
					emps.slice(0, 20).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "block w-full border-b border-border px-4 py-2 text-right text-sm hover:bg-th",
						onClick: () => setProfile(e.code),
						children: [
							e.name,
							" · ",
							e.jobNo,
							" · ",
							e.dept
						]
					}, e.code)),
					!emps.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-4 py-6 text-sm text-muted",
						children: "لا نتائج"
					}) : null
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
					"الإجازات (",
					leaves.length,
					")"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tbl-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: leaves.slice(0, 20).map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.id }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.empName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: l.type }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(l.from) })
					] }, l.id)) }) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardH, { children: [
					"الأذونات (",
					perms.length,
					")"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tbl-scroll",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: perms.slice(0, 20).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.id }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.empName }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.type }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.duration })
					] }, p.id)) }) })
				})] })
			]
		})
	] });
}
function SettingsPage() {
	const { db, saveDb, exportJson, importJson, resetSeed, flash, openModal, softDel } = useApp();
	const s = db.settings;
	const [org, setOrg] = (0, import_react.useState)(s.orgName);
	const [dept, setDept] = (0, import_react.useState)(s.dept);
	const [year, setYear] = (0, import_react.useState)(s.fiscalYear);
	const [title, setTitle] = (0, import_react.useState)(s.appTitle);
	const [bal, setBal] = (0, import_react.useState)(s.defaultBalance);
	const [npt, setNpt] = (0, import_react.useState)("");
	const [nlim, setNlim] = (0, import_react.useState)(4);
	const [nlt, setNlt] = (0, import_react.useState)("");
	const [hDate, setHDate] = (0, import_react.useState)("");
	const [hName, setHName] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
			title: "الإعدادات",
			desc: "القوائم ديناميكية: أضف نوع إجازة أو حد ساعات دون تعديل المعادلات",
			actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: exportJson,
					children: "تصدير JSON"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => {
						const inp = document.createElement("input");
						inp.type = "file";
						inp.accept = "application/json";
						inp.onchange = () => {
							const f = inp.files?.[0];
							if (!f) return;
							const r = new FileReader();
							r.onload = () => {
								const err = importJson(String(r.result));
								if (err) flash(err, "err");
							};
							r.readAsText(f);
						};
						inp.click();
					},
					children: "استيراد"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "danger",
					onClick: resetSeed,
					children: "إعادة التجريبية"
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid gap-3 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 font-bold",
						children: "بيانات المؤسسة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs text-muted",
						children: "اسم المؤسسة"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mb-2",
						value: org,
						onChange: (e) => setOrg(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs text-muted",
						children: "القطاع"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mb-2",
						value: dept,
						onChange: (e) => setDept(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs text-muted",
						children: "عنوان النظام"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mb-2",
						value: title,
						onChange: (e) => setTitle(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs text-muted",
						children: "السنة المالية"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mb-2",
						value: year,
						onChange: (e) => setYear(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "mb-2 block text-xs text-muted",
						children: "الرصيد الافتراضي"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "number",
						className: "mb-3",
						value: bal,
						onChange: (e) => setBal(Number(e.target.value))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							saveDb((d) => ({
								...d,
								settings: {
									...d.settings,
									orgName: org,
									dept,
									appTitle: title,
									fiscalYear: year,
									defaultBalance: bal
								}
							}));
							flash("تم حفظ الإعدادات");
						},
						children: "حفظ"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-3 font-bold",
						children: "أيام الراحة الأسبوعية"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							"الأحد",
							"الإثنين",
							"الثلاثاء",
							"الأربعاء",
							"الخميس",
							"الجمعة",
							"السبت"
						].map((d) => {
							const on = s.restDays.includes(d);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `rounded-full border px-3 py-1.5 text-xs font-semibold ${on ? "border-primary bg-primary text-white" : "border-border bg-card"}`,
								onClick: () => saveDb((cur) => ({
									...cur,
									settings: {
										...cur.settings,
										restDays: on ? cur.settings.restDays.filter((x) => x !== d) : [...cur.settings.restDays, d]
									}
								})),
								children: d
							}, d);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[11px] text-muted",
						children: "الأيام المحددة تُستبعد من أيام العمل عند حساب الإجازات."
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, {
				extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => openModal("user"),
					children: "إضافة مستخدم"
				}),
				children: "المستخدمون والصلاحيات"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3",
				children: db.users.map((u, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex flex-wrap items-center justify-between gap-2 rounded-md bg-th px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: u.username }),
						" — ",
						u.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "info",
							children: u.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted",
							children: u.role === "admin" || u.perms.includes("all") ? "كل الشاشات" : u.hiddenScreens.length ? `مخفي: ${u.hiddenScreens.join(" · ")}` : "كل الشاشات ظاهرة"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-primary",
							onClick: () => openModal("user", i),
							children: "تعديل"
						}), u.username !== "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs font-semibold text-err",
							onClick: () => softDel("users", i),
							children: "حذف"
						}) : null]
					})]
				}, u.username))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 grid gap-3 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "أنواع الإجازات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						placeholder: "اسم جديد",
						value: nlt,
						onChange: (e) => setNlt(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!nlt.trim()) return;
							const rec = {
								code: "LV" + String(db.leaveTypes.length + 1).padStart(2, "0"),
								name: nlt.trim(),
								affectsBalance: true,
								maxYear: 0,
								needsApproval: true,
								notes: ""
							};
							saveDb((d) => ({
								...d,
								leaveTypes: [...d.leaveTypes, rec]
							}));
							setNlt("");
						},
						children: "إضافة"
					})]
				}), db.leaveTypes.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						t.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted",
							children: t.affectsBalance ? "يخصم من الرصيد" : "بدون خصم"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "text-[11px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: t.affectsBalance,
									onChange: (e) => saveDb((d) => ({
										...d,
										leaveTypes: d.leaveTypes.map((x, ix) => ix === i ? {
											...x,
											affectsBalance: e.target.checked
										} : x)
									}))
								}),
								" ",
								"تخصم"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-xs text-err",
							onClick: () => saveDb((d) => ({
								...d,
								leaveTypes: d.leaveTypes.filter((_, x) => x !== i)
							})),
							children: "حذف"
						})]
					})]
				}, t.code))]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "أنواع الأذونات (حد مرات شهري)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "flex-1",
								placeholder: "اسم النوع",
								value: npt,
								onChange: (e) => setNpt(e.target.value)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "w-28",
								type: "number",
								value: nlim,
								onChange: (e) => setNlim(Number(e.target.value))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									if (!npt.trim()) return;
									const rec = {
										code: "PR" + String(db.permTypes.length + 1).padStart(2, "0"),
										name: npt.trim(),
										monthlyCount: nlim,
										needsApproval: true
									};
									saveDb((d) => ({
										...d,
										permTypes: [...d.permTypes, rec]
									}));
									setNpt("");
								},
								children: "إضافة"
							})
						]
					}),
					db.permTypes.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-muted",
								children: ["حد شهري (عدد): ", t.monthlyCount || "بدون"]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								className: "h-8 w-16 rounded border border-border bg-card px-1 text-xs",
								value: t.monthlyCount,
								onChange: (e) => saveDb((d) => {
									const permTypes = d.permTypes.map((x, ix) => ix === i ? {
										...x,
										monthlyCount: Number(e.target.value)
									} : x);
									return {
										...d,
										permTypes
									};
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-xs text-err",
								onClick: () => saveDb((d) => ({
									...d,
									permTypes: d.permTypes.filter((_, x) => x !== i)
								})),
								children: "حذف"
							})]
						})]
					}, t.code)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] text-muted",
						children: "حدود الساعات تُدار من شاشة الأذونات (قواعد الحدود)."
					})
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardH, { children: "العطل الرسمية" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "date",
						className: "w-44",
						value: hDate,
						onChange: (e) => setHDate(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "min-w-[140px] flex-1",
						placeholder: "اسم العطلة",
						value: hName,
						onChange: (e) => setHName(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							if (!hDate || !hName.trim()) return;
							saveDb((d) => ({
								...d,
								holidays: [...d.holidays, {
									date: hDate,
									name: hName.trim(),
									notes: ""
								}]
							}));
							setHDate("");
							setHName("");
						},
						children: "إضافة"
					})
				]
			}), db.holidays.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1.5 flex items-center justify-between rounded-md bg-th px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					fd(h.date),
					" · ",
					h.name
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-xs text-err",
					onClick: () => saveDb((d) => ({
						...d,
						holidays: d.holidays.filter((_, x) => x !== i)
					})),
					children: "حذف"
				})]
			}, h.date + h.name))]
		})] })
	] });
}
function TrashPage() {
	const { db, restoreTrash, purgeTrash, emptyTrash } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHead, {
		title: "المحذوفات",
		desc: `${db.trash.length} سجل`,
		actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: "danger",
			onClick: emptyTrash,
			disabled: !db.trash.length,
			children: "تفريغ السلة"
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "tbl-scroll",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "النوع" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "البيان" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "تاريخ الحذف" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {})
		] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [db.trash.map((t, i) => {
			const d = t.data;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: t.collection }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: d.name || d.empName || d.id || "سجل" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: fd(t.deletedAt) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-semibold text-primary",
						onClick: () => restoreTrash(i),
						children: "استعادة"
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-xs font-semibold text-err",
						onClick: () => purgeTrash(i),
						children: "حذف نهائي"
					})
				] })
			] }, i);
		}), !db.trash.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
			colSpan: 4,
			className: "py-8 text-center text-muted",
			children: "السلة فارغة"
		}) }) : null] })] })
	}) })] });
}
function App() {
	const { hydrated, hydrate, user, page, theme } = useApp();
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		document.documentElement.lang = "ar";
		document.documentElement.dir = "rtl";
	}, [theme, hydrated]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center bg-bg text-muted",
		children: "جاري التحميل..."
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginPage, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		page === "dashboard" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DashboardPage, {}) : null,
		page === "employees" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeesPage, {}) : null,
		page === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, {}) : null,
		page === "leaves" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeavesPage, {}) : null,
		page === "permissions" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermissionsPage, {}) : null,
		page === "search" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPage, {}) : null,
		page === "reports" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportsPage, {}) : null,
		page === "trash" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrashPage, {}) : null,
		page === "settings" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsPage, {}) : null
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {});
}
//#endregion
export { Home as component };
