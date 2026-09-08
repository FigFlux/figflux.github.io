const j = "http://www.w3.org/2000/svg", E = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g, y = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }, B = /* @__PURE__ */ new Set(["class", "style"]), N = (t) => Math.max(0, Math.min(1, t)), L = (t) => {
  const r = N(t);
  return r * r * (3 - 2 * r);
};
function $(t) {
  return Array.from(t.children);
}
function m(t, r) {
  var l;
  const i = r == null ? void 0 : r(t);
  if (i) return `custom:${i}`;
  const n = t.getAttribute("data-transition-key");
  if (n) return `transition:${n}`;
  const a = t.getAttribute("data-mark"), e = t.getAttribute("data-key") ?? t.getAttribute("data-record-key");
  if (a && e) return `mark:${a}:${e}`;
  if (e) return `key:${t.tagName}:${e}`;
  const c = t.getAttribute("data-guide");
  if (c) return `guide:${t.tagName}:${c}`;
  const u = t.getAttribute("data-panel");
  if (u) return `panel:${t.tagName}:${u}`;
  const d = t.getAttribute("data-annotation");
  if (d) return `annotation:${t.tagName}:${d}`;
  if (!t.closest("[data-guide], [data-annotation]")) return null;
  const s = t.getAttribute("id");
  if (s) return `id:${s}`;
  if (t.tagName.toLowerCase() === "text") {
    const o = (l = t.textContent) == null ? void 0 : l.replace(/\s+/g, " ").trim();
    if (o) return `text:${o}`;
  }
  return null;
}
function k(t) {
  return t.replace(E, "#");
}
function A(t) {
  return Array.from(t.matchAll(E), (r) => Number(r[0]));
}
function F(t, r) {
  return k(t) === k(r) && A(t).length === A(r).length;
}
function O(t, r, i) {
  const n = A(t), a = A(r);
  let e = 0;
  return r.replace(E, () => {
    const c = n[e] + (a[e] - n[e]) * i;
    return e += 1, Number.isInteger(c) ? String(c) : Number(c.toFixed(4)).toString();
  });
}
function w(t, r) {
  return {
    a: t.a * r.a + t.c * r.b,
    b: t.b * r.a + t.d * r.b,
    c: t.a * r.c + t.c * r.d,
    d: t.b * r.c + t.d * r.d,
    e: t.a * r.e + t.c * r.f + t.e,
    f: t.b * r.e + t.d * r.f + t.f
  };
}
function P(t, r) {
  if (t === "matrix" && r.length === 6) {
    const [i, n, a, e, c, u] = r;
    return { a: i, b: n, c: a, d: e, e: c, f: u };
  }
  if (t === "translate") return { ...y, e: r[0] ?? 0, f: r[1] ?? 0 };
  if (t === "scale") return { a: r[0] ?? 1, b: 0, c: 0, d: r[1] ?? r[0] ?? 1, e: 0, f: 0 };
  if (t === "rotate") {
    const i = (r[0] ?? 0) * Math.PI / 180, n = { a: Math.cos(i), b: Math.sin(i), c: -Math.sin(i), d: Math.cos(i), e: 0, f: 0 };
    if (r.length < 3) return n;
    const [a, e] = r.slice(1);
    return w(w({ ...y, e: a, f: e }, n), { ...y, e: -a, f: -e });
  }
  return t === "skewX" ? { ...y, c: Math.tan((r[0] ?? 0) * Math.PI / 180) } : t === "skewY" ? { ...y, b: Math.tan((r[0] ?? 0) * Math.PI / 180) } : null;
}
function C(t) {
  if (!(t != null && t.trim())) return y;
  let r = y, i = "";
  for (const n of t.matchAll(/([a-zA-Z]+)\s*\(([^)]*)\)/g)) {
    const a = P(n[1], A(n[2]));
    if (!a) return null;
    r = w(r, a), i += n[0];
  }
  return i.replace(/\s+/g, "") === t.replace(/\s+/g, "") ? r : null;
}
function R(t, r, i) {
  const n = C(t), a = C(r);
  if (!n || !a) return null;
  const e = (c, u) => c + (u - c) * i;
  return `matrix(${e(n.a, a.a)} ${e(n.b, a.b)} ${e(n.c, a.c)} ${e(n.d, a.d)} ${e(n.e, a.e)} ${e(n.f, a.f)})`;
}
function p(t) {
  const r = t.trim().toLowerCase();
  if (r === "none" || r === "transparent") return null;
  const i = r.match(/^#([0-9a-f]{3})$/i);
  if (i) return [...i[1]].map((c) => Number.parseInt(c + c, 16)).concat(1);
  const n = r.match(/^#([0-9a-f]{6})([0-9a-f]{2})?$/i);
  if (n) {
    const c = n[1];
    return [Number.parseInt(c.slice(0, 2), 16), Number.parseInt(c.slice(2, 4), 16), Number.parseInt(c.slice(4, 6), 16), n[2] ? Number.parseInt(n[2], 16) / 255 : 1];
  }
  const a = r.match(/^rgba?\(([^)]+)\)$/);
  if (!a) return null;
  const e = A(a[1]);
  return e.length < 3 ? null : [e[0], e[1], e[2], e[3] ?? 1];
}
function V(t, r, i) {
  const n = p(t), a = p(r);
  if (!n || !a) return null;
  const e = n.map((c, u) => c + (a[u] - c) * i);
  return `rgba(${Math.round(e[0])},${Math.round(e[1])},${Math.round(e[2])},${Number(e[3].toFixed(4))})`;
}
function x(t) {
  return t === "opacity" || t === "fill-opacity" || t === "stroke-opacity" ? "1" : ["x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "width", "height", "stroke-width"].includes(t) ? "0" : t === "transform" ? "" : null;
}
function v(t, r, i, n) {
  if (r === i) return r;
  if (t === "transform") return R(r, i, n) ?? (n < 0.5 ? r : i);
  const a = r ?? x(t), e = i ?? x(t);
  if (a === null || e === null) return n < 0.5 ? r : i;
  const c = V(a, e, n);
  return c || (F(a, e) ? O(a, e, n) : n < 0.5 ? r : i);
}
function z(t, r, i) {
  if (t.tagName !== r.tagName || t.tagName.toLowerCase() === "text" && t.textContent !== r.textContent) return !1;
  if (i.pairSemanticContainers && m(t, i.identity)) return !0;
  const a = /* @__PURE__ */ new Set([...Array.from(t.attributes, (e) => e.name), ...Array.from(r.attributes, (e) => e.name)]);
  for (const e of a) {
    if (e.startsWith("data-") || e.startsWith("aria-") || e === "role") continue;
    const c = t.getAttribute(e), u = r.getAttribute(e);
    if (c === u || e === "transform" && R(c, u, 0.5) !== null) continue;
    const d = c ?? x(e), s = u ?? x(e);
    if (!(d !== null && s !== null && (V(d, s, 0.5) !== null || F(d, s))))
      return !1;
  }
  return !0;
}
function S(t) {
  var n;
  const r = Array.from(t.attributes).filter((a) => !a.name.startsWith("data-") && !a.name.startsWith("aria-") && a.name !== "role").map((a) => `${a.name}=${a.value}`).sort().join(";"), i = $(t).length ? "" : ((n = t.textContent) == null ? void 0 : n.replace(/\s+/g, " ").trim()) ?? "";
  return `${t.tagName}[${r}](${i}){${$(t).map(S).join("|")}}`;
}
function D(t, r, i) {
  const n = $(t), a = $(r), e = /* @__PURE__ */ new Map();
  a.forEach((s, l) => {
    const o = m(s, i.identity);
    o && e.set(o, [...e.get(o) ?? [], l]);
  });
  const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
  n.forEach((s, l) => {
    const o = m(s, i.identity);
    if (!o) return;
    const f = e.get(o), b = f == null ? void 0 : f.find((g) => !c.has(g) && z(s, a[g], i));
    b !== void 0 && (u.set(l, b), c.add(b));
  });
  const d = /* @__PURE__ */ new Map();
  return a.forEach((s, l) => {
    if (m(s, i.identity)) return;
    const o = S(s);
    d.set(o, [...d.get(o) ?? [], l]);
  }), n.forEach((s, l) => {
    if (u.has(l) || m(s, i.identity)) return;
    const o = d.get(S(s)), f = o == null ? void 0 : o.find((b) => !c.has(b));
    f !== void 0 && (u.set(l, f), c.add(f));
  }), { sourceChildren: n, targetChildren: a, pairs: u, usedTargets: c };
}
function G(t) {
  const r = Number(t.getAttribute("opacity") ?? 1);
  return Number.isFinite(r) ? r : 1;
}
function T(t, r) {
  t.setAttribute("opacity", String(Number((G(t) * N(r)).toFixed(4))));
}
function U(t, r, i, n) {
  (/* @__PURE__ */ new Set([...Array.from(r.attributes, (e) => e.name), ...Array.from(i.attributes, (e) => e.name)])).forEach((e) => {
    if (e.startsWith("data-") || e.startsWith("aria-") || e === "role") return;
    const c = v(e, r.getAttribute(e), i.getAttribute(e), n);
    c === null ? t.removeAttribute(e) : t.setAttribute(e, c);
  });
}
function W(t, r, i, n, a, e) {
  var o;
  U(t, r, i, n), (o = e.motion) == null || o.call(e, {
    work: t,
    source: r,
    target: i,
    progress: n,
    segmentIndex: a,
    identity: m(r, e.identity),
    phase: "matched"
  });
  const { sourceChildren: c, targetChildren: u, pairs: d, usedTargets: s } = D(r, i, e), l = $(t);
  c.forEach((f, b) => {
    var M;
    const g = l[b], h = d.get(b);
    if (h === void 0) {
      T(g, 1 - n), (M = e.motion) == null || M.call(e, {
        work: g,
        source: f,
        target: f,
        progress: n,
        segmentIndex: a,
        identity: m(f, e.identity),
        phase: "exit"
      });
      return;
    }
    W(g, f, u[h], n, a, e);
  }), u.forEach((f, b) => {
    var h;
    if (s.has(b)) return;
    const g = f.cloneNode(!0);
    T(g, n), (h = e.motion) == null || h.call(e, {
      work: g,
      source: f,
      target: f,
      progress: n,
      segmentIndex: a,
      identity: m(f, e.identity),
      phase: "enter"
    }), t.appendChild(g);
  });
}
function _(t, r) {
  const i = /* @__PURE__ */ new Map();
  B.forEach((n) => {
    const a = t.getAttribute(n);
    a && i.set(n, a);
  });
  for (const n of Array.from(t.attributes)) t.removeAttribute(n.name);
  for (const n of Array.from(r.attributes)) t.setAttribute(n.name, n.value);
  i.forEach((n, a) => {
    if (a === "class") {
      const e = new Set(`${n} ${t.getAttribute("class") ?? ""}`.split(/\s+/).filter(Boolean));
      t.setAttribute("class", Array.from(e).join(" "));
    } else t.setAttribute(a, n);
  });
}
function Y(t, r, i) {
  return Array.from({ length: r }, (n, a) => {
    const e = document.createElementNS(j, "svg");
    return t(e, a), i == null || i(e, a), e.setAttribute("data-snapshot-index", String(a)), e;
  });
}
function X(t, r) {
  const i = N(t);
  if (i <= r[0]) return { index: 0, local: 0 };
  for (let n = 0; n < r.length - 1; n += 1) {
    const a = r[n], e = r[n + 1];
    if (i <= e) return { index: n, local: e === a ? 1 : N((i - a) / (e - a)) };
  }
  return { index: r.length - 2, local: 1 };
}
function I(t, r, i, n) {
  _(t, r), t.replaceChildren(...Array.from(r.childNodes, (a) => a.cloneNode(!0))), t.setAttribute("data-animation-progress", i.toFixed(6)), t.setAttribute("data-snapshot-segment", String(n)), t.setAttribute("data-scene-authority", "stage-8-snapshot");
}
function q(t, r, i, n, a = {}) {
  if (r.length < 2 || r.length !== i.length)
    throw new Error("SVG snapshot sequence requires one position per keyframe and at least two keyframes");
  const e = N(Number.isFinite(n) ? n : 0), { index: c, local: u } = X(e, i);
  if (u === 0) return I(t, r[c], e, c);
  if (u === 1) return I(t, r[c + 1], e, c);
  const d = r[c], s = r[c + 1], l = (a.easing ?? L)(u), o = d.cloneNode(!0);
  W(o, d, s, l, c, a), _(t, o), t.replaceChildren(...Array.from(o.childNodes, (f) => f.cloneNode(!0))), t.setAttribute("data-animation-progress", e.toFixed(6)), t.setAttribute("data-snapshot-segment", String(c)), t.setAttribute("data-scene-authority", "stage-8-snapshot-transition");
}
export {
  N as a,
  Y as c,
  q as r,
  L as s
};
