export function downloadText(filename: string, text: string, mime = "text/plain;charset=utf-8") {
  const blob = new Blob([text], { type: mime });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export function toCsv(headers: string[], rows: Array<Array<string | number | undefined>>) {
  const esc = (v: string | number | undefined) => {
    const s = v == null ? "" : String(v);
    if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  };
  return "\uFEFF" + [headers.map(esc).join(","), ...rows.map((r) => r.map(esc).join(","))].join("\n");
}

export function openPrint(title: string, bodyHtml: string) {
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
  <script>setTimeout(function(){window.print()},350)<` + `/script>
  </body></html>`;
  w.document.open();
  w.document.write(html);
  w.document.close();
  return true;
}

export function printTable(
  org: string,
  title: string,
  headers: string[],
  rows: Array<Array<string | number | undefined>>,
  extra = "",
) {
  const stamp = new Date().toLocaleString("ar-EG");
  const printDate = new Date().toLocaleDateString("ar-EG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const th = headers.map((h) => `<th>${h}</th>`).join("");
  const body =
    rows
      .map((r) => `<tr>${r.map((c) => `<td>${c ?? ""}</td>`).join("")}</tr>`)
      .join("") || `<tr><td colspan="${headers.length}" style="text-align:center;color:#666">لا سجلات</td></tr>`;
  return openPrint(
    title,
    `<h1>${org}</h1>
    <div class="print-date">تاريخ الطباعة: ${printDate}</div>
    <div class="meta">${title} · ${rows.length} سجل · ${stamp}</div>
    ${extra}
    <table><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table>`,
  );
}
