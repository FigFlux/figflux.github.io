function l(t) {
  const u = [];
  let n = [], e = "", r = !1;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (r) {
      s === '"' ? t[i + 1] === '"' ? (e += '"', i++) : r = !1 : e += s;
      continue;
    }
    if (s === '"') {
      r = !0;
      continue;
    }
    if (s === ",") {
      n.push(e), e = "";
      continue;
    }
    if (s === `
` || s === "\r") {
      s === "\r" && t[i + 1] === `
` && i++, n.push(e), e = "", u.push(n), n = [];
      continue;
    }
    e += s;
  }
  return (e !== "" || n.length) && (n.push(e), u.push(n)), u;
}
function c(t) {
  const n = l(t.replace(/^﻿/, "")).filter((r) => r.length > 1 || (r[0] ?? "").trim() !== "");
  if (!n.length) return [];
  const e = n[0].map((r) => r.trim());
  return n.slice(1).map((r) => {
    const i = {};
    return e.forEach((s, o) => {
      i[s] = (r[o] ?? "").trim();
    }), i;
  });
}
function f(t) {
  if (t === void 0 || t === "") return null;
  const u = Number(t);
  return Number.isFinite(u) ? u : null;
}
export {
  f as n,
  c as p
};
