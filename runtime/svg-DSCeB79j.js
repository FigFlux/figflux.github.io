const h = "http://www.w3.org/2000/svg";
function s(t, i = {}, n) {
  const e = document.createElementNS(h, t);
  for (const [r, o] of Object.entries(i)) e.setAttribute(r, String(o));
  return n !== void 0 && (e.textContent = n), e;
}
function a(t, i, n) {
  const e = s("rect", {
    width: i,
    height: n,
    fill: "#ffffff",
    "data-chrome": "backdrop"
  });
  t.insertBefore(e, t.firstChild);
}
function l(t, i, n, e, r, o, d = {}) {
  const c = { x: i, y: n, class: e, ...d };
  o !== void 0 && o > 0 && (c.textLength = o, c.lengthAdjust = "spacingAndGlyphs");
  const f = s("text", c, r);
  return t.appendChild(f), f;
}
function u(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
}
export {
  u as c,
  s as e,
  l as t,
  a as w
};
