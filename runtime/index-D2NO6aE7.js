import { d as At } from "./transition-space-Df4GnxL9.js";
import { c as Pe, w as Se, e as p } from "./svg-DSCeB79j.js";
import { p as Ae } from "./csv-Ha6vz5IV.js";
import { a as ue } from "./ascending-vNPAb124.js";
function Mt(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function yt(e) {
  let t, n, a;
  e.length !== 2 ? (t = ue, n = (s, u) => ue(e(s), u), a = (s, u) => e(s) - u) : (t = e === ue || e === Mt ? e : Ot, n = e, a = e);
  function r(s, u, l = 0, y = s.length) {
    if (l < y) {
      if (t(u, u) !== 0) return y;
      do {
        const d = l + y >>> 1;
        n(s[d], u) < 0 ? l = d + 1 : y = d;
      } while (l < y);
    }
    return l;
  }
  function o(s, u, l = 0, y = s.length) {
    if (l < y) {
      if (t(u, u) !== 0) return y;
      do {
        const d = l + y >>> 1;
        n(s[d], u) <= 0 ? l = d + 1 : y = d;
      } while (l < y);
    }
    return l;
  }
  function i(s, u, l = 0, y = s.length) {
    const d = r(s, u, l, y - 1);
    return d > l && a(s[d - 1], u) > -a(s[d], u) ? d - 1 : d;
  }
  return { left: r, center: i, right: o };
}
function Ot() {
  return 0;
}
function Gt(e) {
  return e === null ? NaN : +e;
}
const jt = yt(ue), $t = jt.right;
yt(Gt).center;
const Rt = Math.sqrt(50), Tt = Math.sqrt(10), Lt = Math.sqrt(2);
function ce(e, t, n) {
  const a = (t - e) / Math.max(0, n), r = Math.floor(Math.log10(a)), o = a / Math.pow(10, r), i = o >= Rt ? 10 : o >= Tt ? 5 : o >= Lt ? 2 : 1;
  let s, u, l;
  return r < 0 ? (l = Math.pow(10, -r) / i, s = Math.round(e * l), u = Math.round(t * l), s / l < e && ++s, u / l > t && --u, l = -l) : (l = Math.pow(10, r) * i, s = Math.round(e / l), u = Math.round(t / l), s * l < e && ++s, u * l > t && --u), u < s && 0.5 <= n && n < 2 ? ce(e, t, n * 2) : [s, u, l];
}
function Bt(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [r, o, i] = a ? ce(t, e, n) : ce(e, t, n);
  if (!(o >= r)) return [];
  const s = o - r + 1, u = new Array(s);
  if (a)
    if (i < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -i;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * i;
  else if (i < 0) for (let l = 0; l < s; ++l) u[l] = (r + l) / -i;
  else for (let l = 0; l < s; ++l) u[l] = (r + l) * i;
  return u;
}
function Ee(e, t, n) {
  return t = +t, e = +e, n = +n, ce(e, t, n)[2];
}
function _t(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, r = a ? Ee(t, e, n) : Ee(e, t, n);
  return (a ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
const vt = "figure2story-transition-space/v1", Xt = "bar-c-to-bar-d", Wt = "ener02-fig3", zt = {
  transition_id: "ener02-fig3 · bar (c) → bar (d)",
  panel_i: "bar (c)",
  panel_j: "bar (d)"
}, Vt = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: null
}, Yt = {
  width: 1920,
  height: 1080
}, Kt = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel bar (c)",
    progress: 0
  },
  {
    index: 1,
    kind: "lcm",
    label: "Combined Data",
    progress: 0.5
  },
  {
    index: 2,
    kind: "panel-j",
    label: "Panel bar (d)",
    progress: 1
  }
], qt = {
  worlds: [
    {
      id: "project-comparison-world",
      dimensions: 2,
      keyframe_indices: [
        1
      ]
    }
  ],
  cameras: [
    {
      id: "project-comparison-camera",
      world_id: "project-comparison-world",
      projection: "orthographic front view",
      keyframe_indices: [
        1
      ]
    }
  ],
  viewports: [
    {
      id: "project-transition-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "bar-c-plane",
      panel: "bar (c)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "projects.vintage-2022"
      ],
      position_fields: [
        "outcome",
        "status",
        "capacity_mw",
        "stack offset"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    },
    {
      id: "bar-c-lcm-plane",
      panel: "bar (c)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "projects.vintage-2022"
      ],
      position_fields: [
        "outcome",
        "status",
        "capacity_mw",
        "stack offset"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "project-comparison-world",
      camera_id: "project-comparison-camera"
    },
    {
      id: "bar-d-lcm-plane",
      panel: "bar (d)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "projects.vintage-2023"
      ],
      position_fields: [
        "outcome",
        "status",
        "capacity_mw",
        "stack offset"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "project-comparison-world",
      camera_id: "project-comparison-camera"
    },
    {
      id: "bar-d-plane",
      panel: "bar (d)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "projects.vintage-2023"
      ],
      position_fields: [
        "outcome",
        "status",
        "capacity_mw",
        "stack offset"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [],
      world_id: null,
      camera_id: null
    }
  ],
  objects: [
    {
      id: "shared-project-records",
      role: "reference-keyed project segments reused across vintages and stack instances",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "bar-c-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "project-comparison-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "bar-d-plane"
          }
        }
      ]
    },
    {
      id: "vintage-2022-only-records",
      role: "source-only project segments",
      keyframe_indices: [
        0,
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "bar-c-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "bar-c-lcm-plane"
          }
        }
      ]
    },
    {
      id: "vintage-2023-only-records",
      role: "target-only project segments",
      keyframe_indices: [
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "bar-d-lcm-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "bar-d-plane"
          }
        }
      ]
    },
    {
      id: "axes-guides-and-legend",
      role: "shared capacity scale, outcome legend, labels and brackets",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0
          ],
          host: {
            kind: "panel-plane",
            id: "bar-c-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "project-comparison-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "bar-d-plane"
          }
        }
      ]
    },
    {
      id: "frame-backdrop",
      role: "single viewport backdrop",
      keyframe_indices: [
        0,
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1,
            2
          ],
          host: {
            kind: "viewport",
            id: "project-transition-viewport"
          }
        }
      ]
    }
  ]
}, Ut = {
  schema_version: vt,
  id: Xt,
  figure_id: Wt,
  pair: zt,
  modules: Vt,
  frame: Yt,
  keyframes: Kt,
  scene: qt
};
function Jt(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function ye(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function X(e) {
  return e = ye(Math.abs(e)), e ? e[1] : NaN;
}
function Zt(e, t) {
  return function(n, a) {
    for (var r = n.length, o = [], i = 0, s = e[0], u = 0; r > 0 && s > 0 && (u + s + 1 > a && (s = Math.max(1, a - u)), o.push(n.substring(r -= s, r + s)), !((u += s + 1) > a)); )
      s = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Qt(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var en = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function pe(e) {
  if (!(t = en.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Me({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
pe.prototype = Me.prototype;
function Me(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Me.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function tn(e) {
  e: for (var t = e.length, n = 1, a = -1, r; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = r = n;
        break;
      case "0":
        a === 0 && (a = n), r = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(r + 1) : e;
}
var fe;
function nn(e, t) {
  var n = ye(e, t);
  if (!n) return fe = void 0, e.toPrecision(t);
  var a = n[0], r = n[1], o = r - (fe = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + ye(e, Math.max(0, t + o - 1))[0];
}
function Le(e, t) {
  var n = ye(e, t);
  if (!n) return e + "";
  var a = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + a : a.length > r + 1 ? a.slice(0, r + 1) + "." + a.slice(r + 1) : a + new Array(r - a.length + 2).join("0");
}
const Be = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Jt,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Le(e * 100, t),
  r: Le,
  s: nn,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function _e(e) {
  return e;
}
var ve = Array.prototype.map, Xe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function an(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? _e : Zt(ve.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", r = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? _e : Qt(ve.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function l(d, c) {
    d = pe(d);
    var h = d.fill, m = d.align, C = d.sign, w = d.symbol, b = d.zero, g = d.width, H = d.comma, F = d.precision, $ = d.trim, k = d.type;
    k === "n" ? (H = !0, k = "g") : Be[k] || (F === void 0 && (F = 12), $ = !0, k = "g"), (b || h === "0" && m === "=") && (b = !0, h = "0", m = "=");
    var K = (c && c.prefix !== void 0 ? c.prefix : "") + (w === "$" ? n : w === "#" && /[boxX]/.test(k) ? "0" + k.toLowerCase() : ""), Ce = (w === "$" ? a : /[%p]/.test(k) ? i : "") + (c && c.suffix !== void 0 ? c.suffix : ""), $e = Be[k], St = /[defgprs%]/.test(k);
    F = F === void 0 ? 6 : /[gprs]/.test(k) ? Math.max(1, Math.min(21, F)) : Math.max(0, Math.min(20, F));
    function Re(f) {
      var R = K, N = Ce, B, Te, te;
      if (k === "c")
        N = $e(f) + N, f = "";
      else {
        f = +f;
        var ne = f < 0 || 1 / f < 0;
        if (f = isNaN(f) ? u : $e(Math.abs(f), F), $ && (f = tn(f)), ne && +f == 0 && C !== "+" && (ne = !1), R = (ne ? C === "(" ? C : s : C === "-" || C === "(" ? "" : C) + R, N = (k === "s" && !isNaN(f) && fe !== void 0 ? Xe[8 + fe / 3] : "") + N + (ne && C === "(" ? ")" : ""), St) {
          for (B = -1, Te = f.length; ++B < Te; )
            if (te = f.charCodeAt(B), 48 > te || te > 57) {
              N = (te === 46 ? r + f.slice(B + 1) : f.slice(B)) + N, f = f.slice(0, B);
              break;
            }
        }
      }
      H && !b && (f = t(f, 1 / 0));
      var ae = R.length + f.length + N.length, O = ae < g ? new Array(g - ae + 1).join(h) : "";
      switch (H && b && (f = t(O + f, O.length ? g - N.length : 1 / 0), O = ""), m) {
        case "<":
          f = R + f + N + O;
          break;
        case "=":
          f = R + O + f + N;
          break;
        case "^":
          f = O.slice(0, ae = O.length >> 1) + R + f + N + O.slice(ae);
          break;
        default:
          f = O + R + f + N;
          break;
      }
      return o(f);
    }
    return Re.toString = function() {
      return d + "";
    }, Re;
  }
  function y(d, c) {
    var h = Math.max(-8, Math.min(8, Math.floor(X(c) / 3))) * 3, m = Math.pow(10, -h), C = l((d = pe(d), d.type = "f", d), { suffix: Xe[8 + h / 3] });
    return function(w) {
      return C(m * w);
    };
  }
  return {
    format: l,
    formatPrefix: y
  };
}
var re, W, pt;
rn({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function rn(e) {
  return re = an(e), W = re.format, pt = re.formatPrefix, re;
}
function on(e) {
  return Math.max(0, -X(Math.abs(e)));
}
function sn(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(X(t) / 3))) * 3 - X(Math.abs(e)));
}
function ln(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, X(t) - X(e)) + 1;
}
const un = `source_stage,source_node,target_stage,target_node,capacity_mw
status2021,Concept,status2022,Concept,12
status2021,Concept,status2022,Delayed/out,500
status2021,FID/Construction,status2022,Delayed/out,120
status2021,FID/Construction,status2022,FID/Construction,598.505
status2021,Feasibility study,status2022,Delayed/out,2472.431659195924
status2021,Feasibility study,status2023out,Delayed/out,1
status2021,Feasibility study,status2022,FID/Construction,64
status2021,Feasibility study,status2022,Feasibility study,415.23727104817607
status2021,Feasibility study,status2022,No info,100
stat21t22,New,status2022,Concept,169.9073033707865
stat21t22,New,status2022,FID/Construction,499.02256554307115
stat21t22,New,status2022,Feasibility study,832.7783438510082
stat21t22,New,status2022,Newly operational,2.525138525473295
status2022,Concept,status2023,Delayed/out,169.9073033707865
status2022,Concept,status2023,No info,12
status2022,Delayed/out,status2023,Delayed/out,3092.431659195924
status2022,FID/Construction,status2023,Delayed/out,202.35252808988764
status2022,FID/Construction,status2023,FID/Construction,208.6700374531835
status2022,FID/Construction,status2023,No info,465
status2022,FID/Construction,status2023,Operational,284.005
status2022,FID/Construction,status2023out,Operational,6.5
status2022,Feasibility study,status2023,Delayed/out,1174.5656148991843
status2022,Feasibility study,status2023out,Delayed/out,3
status2022,Feasibility study,status2023,FID/Construction,7
status2022,Feasibility study,status2023,Feasibility study,9.45
status2022,Feasibility study,status2023,No info,54
status2022,Newly operational,status2023,Newly operational,2.525138525473295
status2022,No info,status2023,No info,100
stat22t23,New,status2023,FID/Construction,246.82716369993534
stat22t23,New,status2023,Feasibility study,103.94620209327381
stat22t23,New,status2023,Newly operational,122.21890290390438
status2023,Delayed/out,status2023out,Delayed/out,4639.257105555783
status2023,FID/Construction,status2023out,Delayed/out,367.92741310204354
status2023,FID/Construction,status2023out,No info,25.254885340692557
status2023,FID/Construction,status2023out,Operational,94.06104240418654
status2023,Feasibility study,status2023out,Delayed/out,28.75
status2023,Feasibility study,status2023out,No info,80.25
status2023,Feasibility study,status2023out,Operational,4.396202093273819
status2023,Newly operational,status2023out,Newly operational,124.74404142937767
status2023,No info,status2023out,No info,631
status2023,Operational,status2023out,Delayed/out,1
status2023,Operational,status2023out,No info,0.005
status2023,Operational,status2023out,Operational,75
`, dn = `vintage,status,outcome,capacity_mw,share_of_vintage,share_within_status,status_width
announced_2021,Concept,Delayed,512,0.11953752248646622,1,0.10758377023781959
announced_2021,FID/Construction,Delayed,251,0.05860140262520121,0.3493364694748123,0.15097554069282143
announced_2021,FID/Construction,No info,465.005,0.10856551883558442,0.647184083618068,0.15097554069282143
announced_2021,FID/Construction,On time,2.5,5.836793090159484e-4,0.0034794469071196443,0.15097554069282143
announced_2021,Feasibility study,Delayed,2912.6689302441,0.6800258354388391,0.9541384921853266,0.641440689069359
announced_2021,Feasibility study,No info,140,0.0326860413048931,0.04586150781467324,0.641440689069359
announced_2022,Concept,Delayed,169.9073033707865,0.06543829910488703,0.9340323352738615,0.06305399392530696
announced_2022,Concept,No info,12,0.004621694145454021,0.06596766472613845,0.06305399392530696
announced_2022,FID/Construction,Delayed,613.0225655430711,0.23610023351680134,0.5255105697032385,0.40435002151358584
announced_2022,FID/Construction,No info,465.005,0.17909257384223728,0.39862324194929694,0.40435002151358584
announced_2022,FID/Construction,On time,88.5,0.03408499432272341,0.07586618834746461,0.40435002151358584
announced_2022,Feasibility study,Delayed,1192.0156148991841,0.4590942990557779,0.955128766554316,0.4325959845611071
announced_2022,Feasibility study,No info,56,0.02156790601211877,0.04487123344568386,0.4325959845611071
announced_2023,FID/Construction,Delayed,368.9274131020435,0.6128976448333459,0.7551577877489709,0.7304538062095395
announced_2023,FID/Construction,No info,25.254885340692557,0.04195584062376341,0.05169424300399236,0.7304538062095395
announced_2023,FID/Construction,On time,94.36118092965984,0.15676185477571228,0.19314796924703673,0.7304538062095395
announced_2023,Feasibility study,Delayed,28.75,0.04776226071355904,0.2535358280901837,0.16954619379046038
announced_2023,Feasibility study,No info,80.25,0.13331900599176044,0.7076956592778172,0.16954619379046038
announced_2023,Feasibility study,On time,4.396202093273819,0.007303393061858717,0.03876851263199919,0.16954619379046038
`, cn = `reference,region,name2021,status2021,year2021,capacity2021,name2022,status2022,year2022,capacity2022,name2023,status2023,year2023,capacity2023,name2023out,status2023out,year2023out,capacity2023out,stat21t22,stat22t23,stat23t23out,capacity
1,Europe,Solar PV Plant port of Sines - phase I,FID/Construction,2023,10,Solar PV Plant port of Sines (Phase 1),,2025,100,Solar PV Plant port of Sines (Phase 1),,2025,100,,,2025,,Delayed/out,,,10
3,Europe,H2GO - 1st phase,,2021,2.5,H2GO - 1st phase,,2022,2,H2GO Energy Park Oude-Tonge - 1st phase,FID/Construction,2023,2.5,H2GO Energy Park Oude-Tonge - 1st phase,,2024,2.5,,Delayed/in,Delayed/out,2.5
6,Europe,Norsk e-Fuel Phase 1,Feasibility study,2023,22,Norsk e-Fuel Phase 1,,2024,25.13179159612129,Norsk e-Fuel Phase 1,,2026,50.26358319224258,,,2026,,Delayed/out,,,22
14,Europe,CRI project in Norway,Feasibility study,2023,110.43165919592401,CRI project in Norway,,2025,110.43165919592401,CRI project in Norway,,2025,193.73975297530532,,,2025,,Delayed/out,,,110.43165919592401
178,Europe,"Westkuste 100 (Phase 1) - HyScale 100, Heide",FID/Construction,2023,30,"Westkuste 100 (Phase 1) - HyScale 100, Heide",FID/Construction,2023,30,"Westkuste 100 (Phase 1) - HyScale 100, Heide",,2026,30,,,2026,,,Delayed/out,,30
205,Europe,"HySynergy, phase 1",,2022,20,"HySynergy, phase 1",,2022,20,"HySynergy, phase 1",FID/Construction,2023,20,"HySynergy, phase 1",,2024,20,,Delayed/in,Delayed/out,20
500,Europe,"REMOTE - Spain, Canary Island",,2021,0.08,"REMOTE - Spain, Canary Island",,2022,0.08,"REMOTE - Spain, Canary Islands",Operational,2023,0.08,"REMOTE - Spain, Canary Islands",Operational,2023,0.08,,Delayed/in,,0.08
510,Europe,"Hyoffwind Zeebrugge, 2nd phase",FID/Construction,2023,24,"Hyoffwind Zeebrugge, 2nd phase",FID/Construction,2023,24,Hyoffwind Zeebrugge,,2025,25,,,2025,,,Delayed/out,,24
514,Europe,"Power-to-Methanol, Antwerp, phase 1",Feasibility study,2023,10,"Power-to-Methanol, Antwerp, phase 1",Feasibility study,2023,10,"Power-to-Methanol, Antwerp, phase 1",,2024,10,,,2024,,,Delayed/out,,10
516,Europe,Green Fuels for Denmark - Phase 1,Feasibility study,2023,10,Green Fuels for Denmark - Phase 1,Feasibility study,2023,10,Green Fuels for Denmark - Phase 1,,2024,10,,,2024,,,Delayed/out,,10
540,Europe,Statkraft-CELSA-Mo green H2 for steel production,Feasibility study,2023,45,Statkraft-CELSA-Mo green H2 for steel production,,2024,45,Statkraft-CELSA-Mo green H2 for steel production,,2024,45,,,2024,,Delayed/out,,,45
548,Europe,"Green fertilizer project Porsgrunn, phase 1",Feasibility study,2023,25,"Green fertilizer project Porsgrunn-Heroya, phase 1",FID/Construction,2023,24,"Green fertilizer project Porsgrunn-Heroya, phase 1 - SKREI",FID/Construction,2023,24,"Green fertilizer project Porsgrunn-Heroya, phase 1 - SKREI",,2024,24,,,Delayed/out,24
549,Europe,4Kvinnherad Power-to-Gas,Feasibility study,2023,45,4Kvinnherad Power-to-Gas,Feasibility study,2023,45,4Kvinnherad Power-to-Gas,,2024,45,,,2024,,,Delayed/out,,45
566,Europe,Green Hydrogen for Scotland,Feasibility study,2023,20,Green Hydrogen for Scotland,FID/Construction,2023,20,Green Hydrogen for Scotland,,2024,20,,,2024,,,Delayed/out,,20
571,N. America,CF Industries - Donaldsonville Nitrogen Complex,FID/Construction,2023,20,CF Industries - Donaldsonville Nitrogen Complex,FID/Construction,2023,20,CF Industries - Donaldsonville Nitrogen Complex,,2024,20,,,2024,,,Delayed/out,,20
574,Europe,,,,,"Get H2 Lingen, phase 1",FID/Construction,2023,10,"H2 Pilotanlage  Lingen, phase 1",FID/Construction,2023,14,"H2 Pilotanlage  Lingen, phase 1",,2024,10,New,,Delayed/out,10
578,Australia,H2U - Eyre Peninsula Gateway Hydrogen Project at Port Bonython.,,2022,75,H2U - Eyre Peninsula Gateway Hydrogen Project at Port Bonython.,Feasibility study,2023,100,"Eyre Peninsula Gateway Hydrogen Project, phase 1",,2024,100,,,2024,,Delayed/in,Delayed/out,,100
597,Europe,,,,,,,,,HyGreen Provence (Phase 1),Feasibility study,2023,1,HyGreen Provence (Phase 1),,2024,1,,New,Delayed/out,1
602,Europe,"Hysencia, Phase I",Feasibility study,2023,20,"Hysencia, Phase I",Feasibility study,2023,20,"Hysencia, Phase I",,2024,40,,,2024,,,Delayed/out,,20
625,Europe,Repsol Bilbao port synfuels project,,2024,10,"Repsol Bilbao port synfuels project, pahse 1",,2022,2.5,"Repsol Basque Hydrogen Corrido Bilbao, phase 1",FID/Construction,2023,2.5,"Repsol Basque Hydrogen Corrido Bilbao, phase 1",Operational,2023,2.5,,Delayed/in,,2.5
637,Europe,Multiphly,,2022,2.6,Multiphly,,2022,2.6,Multiphly,Operational,2023,2.5,Multiphly,Operational,2023,2.5,,Delayed/in,,2.5
645,Europe,Hyport - Toulouse-Blagnac Airport,,2021,0.842696629213483,Hyport - Toulouse-Blagnac Airport,,2022,0.842696629213483,Hyport - Toulouse-Blagnac Airport,Operational,2023,2,Hyport - Toulouse-Blagnac Airport,Operational,2023,1,,Delayed/in,,1
702,Europe,GldH2,Feasibility study,2023,2,GldH2,Feasibility study,2023,2,GldH2,FID/Construction,2023,2,GldH2,,2024,2,,,Delayed/out,2
727,C. + S. America,Walmart Quilicura forklifts,,2021,0.37350572058898973,Walmart Quilicura forklifts,,2021,0.37350572058898973,Wally - Walmart Quilicura forklifts,Operational,2023,0.6,Wally - Walmart Quilicura forklifts,Operational,2023,0.6,,Delayed/in,,0.6
753,Australia,Engie - Yara Pilbara test,Feasibility study,2023,10,Engie - Yara Pilbara test,Feasibility study,2023,10,"Engie - Yara Pilbara test, phase I",,2024,10,,,2024,,,Delayed/out,,10
768,Europe,Ribatejo natural gas power plant,,2022,1,Ribatejo natural gas power plant,Operational,2023,1,Ribatejo natural gas power plant,Operational,2023,1,Ribatejo natural gas power plant,Operational,2023,1,Delayed/in,,,1
771,Europe,Hollandse Kust (noord) - CrossWind - Pernis Refinery,Feasibility study,2023,200,Holland Hydrogen - phase 1,,2025,200,Holland Hydrogen - phase 1,,2025,200,,,2025,,Delayed/out,,,200
772,Australia,Sun Metals Zinc Refinery,,2022,1,"Sun Metals Zinc Refinery, phase I",,2022,1,"Sun Metals Zinc Refinery, phase I",FID/Construction,2023,1,"Sun Metals Zinc Refinery, phase I",,2024,1,,Delayed/in,Delayed/out,1
776,Europe,Fertiberia/Iberdrola - Palos de la Frontera I,Feasibility study,2023,230,Fertiberia/Iberdrola - Palos de la Frontera I,,2024,210,Iberdrola - Palos de la Frontera I,,2026,200,,,2026,,Delayed/out,,,230
789,Europe,Hysolar Green on Road - Nieuwegein,,2021,2,Hysolar Green on Road - Nieuwegein,,2022,2,Hysolar Green on Road - Nieuwegein,FID/Construction,2023,2,Hysolar Green on Road - Nieuwegein,,2024,2,,Delayed/in,Delayed/out,2
792,Europe,Kopernikus 2.0,,2021,0.25,Kopernikus 2.0,,2021,0.25,Kopernikus 2.0,Operational,2023,0.25,Kopernikus 2.0,Operational,2023,0.06,,Delayed/in,,0.06
793,Europe,,,,,E-CO2MET Raffinerie Mitteldeutschland,Operational,2023,1,E-CO2MET Raffinerie Mitteldeutschland,Operational,2023,1,E-CO2MET Raffinerie Mitteldeutschland,Operational,2023,1,New,,,1
798,Australia,Hydrogen Park Gladstone,,2022,0.175,Hydrogen Park Gladstone,,2022,0.175,Hydrogen Park Gladstone,FID/Construction,2023,0.175,Hydrogen Park Gladstone,,2024,0.175,,Delayed/in,Delayed/out,0.175
811,Europe,Bad Lauchstädt energy park,FID/Construction,2023,30,Bad Lauchstädt energy park,,2024,30,Bad Lauchstädt energy park,,2025,30,,,2025,,Delayed/out,,,30
817,N. America,LADWP - NREL Intermountain Power Project,Feasibility study,2023,1000,Advanced Clean Energy Storage (ACES),,2025,220,Advanced Clean Energy Storage (ACES),,2025,220,,,2025,,Delayed/out,,,1000
818,Europe,"DJEWELS Chemiepark - Delfzijl, Phase 2",Feasibility study,2023,40,"DJEWELS Chemiepark - Delfzijl, Phase 2",,2025,40,"DJEWELS Chemiepark - Delfzijl, Phase 2",,2026,40,,,2026,,Delayed/out,,,40
819,Europe,H2ermes,Feasibility study,2023,100,H2ermes,,2025,100,H2ermes,,2025,100,,,2025,,Delayed/out,,,100
820,Europe,"H2V Normandy, 2nd phase",Feasibility study,2023,100,,,,,,,,,,,,,No info,,,100
821,Europe,"H2V59, 2nd phase",Feasibility study,2023,100,"H2V59, 2nd phase",,2024,165,"H2V 59, 2nd phase",,2029,300,,,2029,,Delayed/out,,,100
831,Asia,,,,,,,,,Baicheng City Bus Company - Songyuan City,FID/Construction,2023,6,Baicheng City Bus Company - Songyuan City,Operational,2023,6,,New,,6
848,Europe,Centrale Vlissingen - VoltH2,Feasibility study,2023,25,Vlissingen - VoltH2 - phase I,,2025,25,Vlissingen - VoltH2 - phase I,,2025,25,,,2025,,Delayed/out,,,25
850,Europe,Green lab skive,,2022,12,Green lab skive,FID/Construction,2023,12,Green lab skive (Phase I),FID/Construction,2023,6,Green lab skive (Phase I),Operational,2023,6,Delayed/in,,,6
872,Europe,"H100 Fife Project, Levenmouth",FID/Construction,2023,5,"H100 Fife Project, Levenmouth",FID/Construction,2023,5,"H100 Fife Project, Levenmouth",,2024,5,,,2024,,,Delayed/out,,5
874,Europe,Gela refinery,Feasibility study,2023,20,Gela refinery,Feasibility study,2023,20,Gela refinery,,2025,20,,,2025,,,Delayed/out,,20
875,Europe,Taranto Sustainable Refinery,Feasibility study,2023,10,Taranto Sustainable Refinery,Feasibility study,2023,10,Taranto Sustainable Refinery,,2025,10,,,2025,,,Delayed/out,,10
883,Europe,Western Jutland Green ammonia project,FID/Construction,2023,10,REDDAP,FID/Construction,2023,10,REDDAP - REnewable Distributed & Dynamic Ammonia Plant,,2024,10,,,2024,,,Delayed/out,,10
885,Europe,Get H2 Nukleus,Feasibility study,2023,100,"Get H2 Lingen, phase 4",,2025,100,"Get H2 Lingen, phase 2",,2025,100,,,2025,,Delayed/out,,,100
901,Australia,H2TAS,Feasibility study,2023,10,H2TAS - phase I,Feasibility study,2023,10,H2TAS - phase I,,2025,350,,,2025,,,Delayed/out,,10
902,Australia,Sumitomo Queensland,Feasibility study,2023,1.587271048176081,Sumitomo Queensland,Feasibility study,2023,1.587271048176081,Sumitomo Queensland,,2025,2.5,Sumitomo Queensland,,2025,2.5,,Delayed/out,,1.587271048176081
908,Europe,Compostilla - Endesa,Feasibility study,2023,4,Compostilla - Endesa,Feasibility study,2023,4,Compostilla - Endesa,,2024,4,,,2024,,,Delayed/out,,4
911,Europe,Hidrogeno El Cierzo,Feasibility study,2023,7.2,Hidrogeno El Cierzo,Feasibility study,2023,7.2,Hidrogeno El Cierzo,,2024,7.2,,,2024,,,Delayed/out,,7.2
924,Australia,,,,,KOGAN HYDROGEN DEMONSTRATION PROJECT,FID/Construction,2023,0.7,KOGAN HYDROGEN DEMONSTRATION PROJECT,FID/Construction,2023,0.7,KOGAN HYDROGEN DEMONSTRATION PROJECT,,2024,0.7,New,,Delayed/out,0.7
929,Australia,"Hydrogen Park Murray Valley, Victoria",Feasibility study,2023,10,"Hydrogen Park Murray Valley, Victoria",Feasibility study,2023,10,"Hydrogen Park Murray Valley, Victoria",,2025,10,,,2025,,,Delayed/out,,10
930,Australia,Clean Energy Innovation Park,Feasibility study,2023,10,Clean Energy Innovation Park,Feasibility study,2023,10,,,,,,,,,,No info,,10
938,Europe,Abanto Technology Park,,2022,2,Abanto Technology Park,,2022,2.5,Abanto Technology Park,Operational,2023,2.5,Abanto Technology Park,Operational,2023,2.5,,Delayed/in,,2.5
941,N. America,Florida Power & Light utility pilot plant,Feasibility study,2023,20,Cavendish NextGen Hydrogen Hub,FID/Construction,2023,25,Cavendish NextGen Hydrogen Hub,FID/Construction,2023,25,Cavendish NextGen Hydrogen Hub,,2024,25,,,Delayed/out,20
962,Australia,Eco Energy World Quenssland project,Feasibility study,2023,200,Eco Energy World Quenssland project,,2024,200,Eco Energy World Quensland project,,2024,200,,,2024,,Delayed/out,,,200
981,Asia,ITM-Sumitomo Coorp,,2021,1.4,ITM-Sumitomo Coorp,,2021,1.4,ITM-Sumitomo Coorp,FID/Construction,2023,1.4,ITM-Sumitomo Coorp,,2024,1.4,,Delayed/in,Delayed/out,1.4
983,Europe,OMV Schwechat Refinery,FID/Construction,2023,10,OMV Schwechat Refinery,FID/Construction,2023,10,OMV Schwechat Refinery,FID/Construction,2023,10,OMV Schwechat Refinery,,2024,10,,,Delayed/out,10
993,Europe,Aquamarine,FID/Construction,2023,2.5,Aquamarine,FID/Construction,2023,2.5,Aquamarine,Operational,2023,2,Aquamarine,Operational,2023,2,,,,2
1000,N. America,,,,,,,,,Prince George refinery,FID/Construction,2023,53.06249999999999,Prince George refinery,Operational,2023,53.06249999999999,,New,,53.06249999999999
1012,Asia,Yanqing Hydrogen Energy Industrial Park,,2022,5.898876404494381,Yanqing Hydrogen Energy Industrial Park,,2022,5.898876404494381,Yanqing Hydrogen Energy Industrial Park,Operational,2023,6.8164794007490626,Yanqing Hydrogen Energy Industrial Park,Operational,2023,6.8164794007490626,,Delayed/in,,6.8164794007490626
1017,Asia,CGN Baicheng Hydrogen Production Project - Jilin,,2022,0.22499999999999998,CGN Baicheng Hydrogen Production Project - Jilin,Operational,2023,0.22499999999999998,CGN Baicheng Hydrogen Production Project - Jilin,Operational,2023,0.22499999999999998,CGN Baicheng Hydrogen Production Project - Jilin,Operational,2023,0.22499999999999998,Delayed/in,,,0.22499999999999998
1022,Europe,,,,,H2Pioneer,,2022,2,H2Pioneer - H2 Carinthia,FID/Construction,2023,2,H2Pioneer - H2 Carinthia,,2024,2,,Delayed/in,Delayed/out,2
1029,Europe,Birsfelden power plant,,2022,2.5,Birsfelden power plant,,2022,2.5,Birsfelden power plant,FID/Construction,2023,2.5,Birsfelden power plant,,2026,15,,Delayed/in,Delayed/out,2.5
1033,Europe,Greening of Gas (GoG) - Net4Gas DEMO,Feasibility study,2023,0.44999999999999996,Greening of Gas (GoG) - Net4Gas DEMO,Feasibility study,2023,0.44999999999999996,Greening of Gas (GoG) - Net4Gas DEMO,Feasibility study,2023,0.44999999999999996,Greening of Gas (GoG) - Net4Gas DEMO,,2024,0.44999999999999996,,,Delayed/out,0.44999999999999996
1050,Europe,P2G Velke Kapusany,Feasibility study,2023,78,P2G Velke Kapusany,Feasibility study,2023,78,P2G Velke Kapusany,,2024,78,,,2024,,,Delayed/out,,78
1064,Europe,vHyGO -4th facility in St Nazaire,,2021,1.5,vHyGO -4th facility in St Nazaire,,2021,1.5,Vallée Hydrogène Grand Ouest (VHyGO) - Saint-Nazaire,Operational,2023,1.5,Vallée Hydrogène Grand Ouest (VHyGO) - Saint-Nazaire,Operational,2023,1.5,,Delayed/in,,1.5
1074,Australia,Green Hydrogen Systems - Skai Energies,,2022,0.19382022471910113,Green Hydrogen Systems - Skai Energies,,2022,0.19382022471910113,Hydrogen Fuels Australia refuelling station - H2FA,FID/Construction,2023,0.19382022471910113,Hydrogen Fuels Australia refuelling station - H2FA,,2024,0.19382022471910113,,Delayed/in,Delayed/out,0.19382022471910113
1076,Asia,,,,,,,,,Pertamina Ulubelu geothermal plant,FID/Construction,2023,0.21067415730337075,Pertamina Ulubelu geothermal plant,,2024,0.21067415730337075,,New,Delayed/out,0.21067415730337075
1088,Europe,"Gen2 Energy - Vitol, 1st site",FID/Construction,2023,80,"Gen2 Energy Suldal in Ryfylke, 1st phase",,2024,10,"Gen2 Energy Suldal in Ryfylke, 1st phase",,2026,10,,,2026,,Delayed/out,,,80
1090,Europe,BP Castellon refinery,Feasibility study,2023,20,"BP Castellon refinery, phase 1",Feasibility study,2023,20,"BP Castellon refinery, phase 1",,2026,25,,,2026,,,Delayed/out,,20
1091,Europe,SmartQuart project - Kaisersesch,,2022,1,SmartQuart project - Kaisersesch,,2022,1,SmartQuart project - Kaisersesch,FID/Construction,2023,1,SmartQuart project - Kaisersesch,Operational,2023,1,,Delayed/in,,1
1102,Europe,ZEHUS,Feasibility study,2023,4,ZEHUS,Feasibility study,2023,4,ZEHUS,,2024,4,,,2024,,,Delayed/out,,4
1105,Europe,Green H2 for Chemical Application - North,Concept,2023,2,Green H2 for Chemical Application - North,Concept,2023,2,Green H2 for Chemical Application - North,,2024,2,,,2024,,,Delayed/out,,2
1106,Europe,Green H2 for Chemical Application - South,Concept,2023,10,Green H2 for Chemical Application - South,Concept,2023,10,Green H2 for Chemical Application - South,,2024,10,,,2024,,,Delayed/out,,10
1108,N. America,Road Runner,Feasibility study,2023,20,Road Runner,Feasibility study,2023,20,Road Runner,,2024,20,,,2024,,,Delayed/out,,20
1121,Europe,Hydrogen Mill,,2022,2,Hydrogen Mill,,2022,2,Hydrogen Wind Turbine,FID/Construction,2023,2.3,Hydrogen Wind Turbine,Operational,2023,2.3,,Delayed/in,,2.3
1123,Asia,Sinopec - Ordos,,2022,115.43789441280592,Sinopec - Ordos,Feasibility study,2023,115.43789441280592,Sinopec - Ordos,,2024,346.31368323841775,,,2024,,Delayed/in,Delayed/out,,115.43789441280592
1124,Asia,,,,,Sinopec - Kuqa,FID/Construction,2023,260,Sinopec - Kuqa,Operational,2023,260,Sinopec - Kuqa,Operational,2023,52,New,,,52
1127,Europe,EI-H2 - Aghada (phase 1),Feasibility study,2023,50,EI-H2 - Aghada (phase 1),Feasibility study,2023,50,EI-H2 - Aghada (phase 1),,2024,50,,,2024,,,Delayed/out,,50
1128,Europe,Green lab skive (Phase II),FID/Construction,2023,12,Green lab skive (Phase II),FID/Construction,2023,12,Green lab skive (Phase II),,2024,18,,,2024,,,Delayed/out,,12
1134,Other,,,,,Green H2 New Zealand - Taranaki,FID/Construction,2023,4.213483146067415,Green H2 New Zealand - Taranaki,,2024,4.213483146067415,,,2024,,New,Delayed/out,,4.213483146067415
1141,N. America,SoHyCal,,2022,7.5,SoHyCal,,2022,7.5,SoHyCal,FID/Construction,2023,7.5,SoHyCal,Operational,2023,7.5,,Delayed/in,,7.5
1150,N. America,Palo Verde Generating Station,Feasibility study,2023,20,Palo Verde Generating Station,Feasibility study,2023,20,,,,,,,,,,No info,,20
1151,N. America,Bruce Nuclear Generating Station,Feasibility study,2023,3,Bruce Nuclear Generating Station,Feasibility study,2023,3,Bruce Nuclear Generating Station,,2024,3,,,2024,,,Delayed/out,,3
1156,Europe,Hydrogen Lab Bremerhaven (phase 1),,2022,2,Hydrogen Lab Bremerhaven (phase 1),,2022,2,Hydrogen Lab Bremerhaven (phase 1),FID/Construction,2023,2,Hydrogen Lab Bremerhaven (phase 1),Operational,2023,1,,Delayed/in,,1
1179,Australia,Badgingarra Renewable Hydrogen Project,Feasibility study,2023,10,Badgingarra Renewable Hydrogen Project,Feasibility study,2023,10,,,,,,,,,,No info,,10
1180,Australia,BHP Nickel West Green Hydrogen,Feasibility study,2023,10,BHP Nickel West Green Hydrogen,Feasibility study,2023,10,BHP Nickel West Green Hydrogen,,2024,10,,,2024,,,Delayed/out,,10
1181,Australia,Dawson Mine,Feasibility study,2023,10,Dawson Mine,Feasibility study,2023,10,Dawson Mine,,2024,10,,,2024,,,Delayed/out,,10
1182,N. America,"Candem County (GA), green power plant",,2022,36.51685393258427,"Candem County (GA), green power plant",,2022,36.51685393258427,"Camden County (GA), green power plant",FID/Construction,2023,40,"Camden County (GA), green power plant",,2024,73.03370786516854,,Delayed/in,Delayed/out,40
1184,Europe,Lhyfe offshore electrolyser,,2022,2,Lhyfe offshore electrolyser,,2022,2,Sealhyfe,Operational,2023,1,Sealhyfe,Operational,2023,1,,Delayed/in,,1
1187,Europe,Hofors rolling project,,2022,17,Hofors rolling project,FID/Construction,2023,20,Hofors rolling project,Operational,2023,20,Hofors rolling project,Operational,2023,20,Delayed/in,,,20
1254,Australia,APA Renewable Methane Demonstration Project,FID/Construction,2023,0.005,APA Renewable Methane Demonstration Project,FID/Construction,2023,0.005,APA Renewable Methane Demonstration Project,Operational,2023,0.005,,,2023,,,,No info,0.005
1258,Australia,Christmas Creek Renewable Hydrogen Mobility Project,,2022,0.7,Christmas Creek Renewable Hydrogen Mobility Project,,2022,0.7,Christmas Creek Renewable Hydrogen Mobility Project,FID/Construction,2023,0.7,Christmas Creek Renewable Hydrogen Mobility Project,,2024,0.7,,Delayed/in,Delayed/out,0.7
1259,Australia,ABEL Energy Bell Bay Powerfuels Project,Feasibility study,2023,100,ABEL Energy Bell Bay Powerfuels Project,,2025,100,ABEL Energy Bell Bay Powerfuels Project - phase 1,,2027,240,,,2027,,Delayed/out,,,100
1263,Australia,Swinburne University of Technology Victorian Hydrogen Hub – CSIRO Hydrogen Refuelling Station,,2022,0.042134831460674156,Swinburne University of Technology Victorian Hydrogen Hub – CSIRO Hydrogen Refuelling Station,,2022,0.042134831460674156,Swinburne University of Technology Victorian Hydrogen Hub – CSIRO Hydrogen Refuelling Station,FID/Construction,2023,0.042134831460674156,Swinburne University of Technology Victorian Hydrogen Hub – CSIRO Hydrogen Refuelling Station,Operational,2023,0.042134831460674156,,Delayed/in,,0.042134831460674156
1268,Europe,,,,,Port of Mukran,Feasibility study,2023,14,,,,,,,,,New,No info,,14
1272,Europe,Freienbach plant,Feasibility study,2023,10,Freienbach plant,Feasibility study,2023,10,Freienbach plant,,2024,10,,,2024,,,Delayed/out,,10
1273,Europe,"Siemens-Air Liquide Oberhausen, Phase 1",FID/Construction,2023,20,"Siemens-Air Liquide Oberhausen, Phase 1",FID/Construction,2023,20,"Trailblazer - Siemens-Air Liquide Oberhausen, Phase 1",FID/Construction,2023,20,"Trailblazer - Siemens-Air Liquide Oberhausen, Phase 1",,2024,20,,,Delayed/out,20
1274,Europe,"Siemens-Air Liquide Oberhausen, Phase 1",Feasibility study,2023,10,"Siemens-Air Liquide Oberhausen, Phase 1",Feasibility study,2023,10,"Trailblazer - Siemens-Air Liquide Oberhausen, Phase 2",,2024,10,,,2024,,,Delayed/out,,10
1275,Europe,Trafford Low Carbon Energy Park,Feasibility study,2023,200,Trafford Low Carbon Energy Park (Phase 1),,2024,17.5,Trafford Low Carbon Energy Park - phase 1,,2025,20,,,2025,,Delayed/out,,,200
1288,Europe,Energy-Norweigian Catapult Centre,,2022,0.9,Energy-Norweigian Catapult Centre,,2022,0.9,Energy-Norweigian Catapult Centre,Operational,2023,0.9,Energy-Norweigian Catapult Centre,Operational,2023,0.9,,Delayed/in,,0.9
1294,Europe,Octopus Hydrogen,,2022,0.9,Octopus Hydrogen,,2022,0.9,Octopus Hydrogen - MIRA Technology Park,FID/Construction,2023,0.9,,,2023,,,Delayed/in,No info,0.9
1301,Europe,H2 Évora - GreenGas II,,2022,0.3001385254732954,H2 Évora - GreenGas II,Operational,2023,0.3001385254732954,H2 Évora - GreenGas II,FID/Construction,2023,0.3001385254732954,H2 Évora - GreenGas II,Operational,2023,0.3001385254732954,Delayed/in,,,0.3001385254732954
1312,Asia,Inner Mongolia green hydrogen,FID/Construction,2023,465,Inner Mongolia green hydrogen,FID/Construction,2023,465,,,,,,,,,,No info,,465
1314,Europe,Heroya Industrial Park,,2022,5.06,Heroya Industrial Park,,2022,5.06,Heroya Industrial Park,FID/Construction,2023,5.5,Heroya Industrial Park,Operational,2023,5.5,,Delayed/in,,5.5
1321,C. + S. America,Power-to-gas Coquimbo,,2022,0.15,Power-to-gas Coquimbo,,2022,0.15,H2GN - Power-to-gas Coquimbo,Operational,2023,0.15,H2GN - Power-to-gas Coquimbo,Operational,2023,0.15,,Delayed/in,,0.15
1325,Other,Southland green hydrogen project,Concept,2023,500,Southland green hydrogen project,,2027,600,Southland green hydrogen project,,2027,600,,,2027,,Delayed/out,,,500
1345,Europe,,,,,Hypster,FID/Construction,2023,1,Hypster,Operational,2023,1,Hypster,Operational,2023,1,New,,,1
1348,Other,,,,,Unknown ITM peoject,Concept,2023,12,,,,,,,,,New,No info,,12
1355,Europe,,,,,Port of Gothenburg - Statkraft,Feasibility study,2023,4,Port of Gothenburg - Statkraft,Feasibility study,2023,4,Port of Gothenburg - Statkraft,,2024,4,New,,Delayed/out,4
1386,Europe,,,,,Steinbeis Innovation Center Braunschweig,FID/Construction,2023,1,Steinbeis Innovation Center Braunschweig,Operational,2023,1,Steinbeis Innovation Center Braunschweig,,2024,1,New,,Delayed/out,1
1391,Europe,,,,,Carlentini Energy park (Sicily),FID/Construction,2023,4,Carlentini Energy park (Sicily),FID/Construction,2023,4,Carlentini Energy park (Sicily),,2025,4,New,,Delayed/out,4
1393,Europe,,,,,"Herne Bay, Kent",Concept,2023,17.907303370786515,"Herne Bay, Kent",,2024,32.558733401430025,,,2024,,New,Delayed/out,,17.907303370786515
1418,Asia,,,,,"NTPC-Technip-L&T MeOH project, Vindhyachal",,2022,5,"NTPC-Technip-L&T MeOH project, Vindhyachal",Operational,2023,5,"NTPC-Technip-L&T MeOH project, Vindhyachal",Operational,2023,5,,Delayed/in,,5
1440,Australia,,,,,"Desert Bloom, phase 1",Feasibility study,2023,400,"Desert Bloom, phase 1",,2024,400,,,2024,,New,Delayed/out,,400
1449,Asia,,,,,,,,,NTPC green hydrogen mobiity project - Ladakh,FID/Construction,2023,0.8,NTPC green hydrogen mobiity project - Ladakh,Operational,2023,0.8,,New,,0.8
1458,Other,,,,,Sasolburg green hydrogen project,Feasibility study,2023,12.640449438202246,Sasolburg green hydrogen project,,2024,60,,,2024,,New,Delayed/out,,12.640449438202246
1467,Europe,,,,,Coagener Los Barrios,FID/Construction,2023,1,"Los Barrios coal plant, Cadiz, phase 1",FID/Construction,2023,5,"Los Barrios coal plant, Cadiz, phase 1",,2024,5,New,,Delayed/out,1
1478,Europe,,,,,Belfort HRS,FID/Construction,2023,1,NFC Belfort (Phase 1),FID/Construction,2023,1,NFC Belfort (Phase 1),Operational,2023,1,New,,,1
1482,Europe,,,,,Lhyfe-Enerparc Luckau project,Feasibility study,2023,5,Lhyfe-Enerparc Luckau project,Feasibility study,2023,5,Lhyfe-Enerparc Luckau project,,2024,5,New,,Delayed/out,5
1487,Europe,,,,,Dorset Green H2 Project,,2022,0.87,Dorset Green H2 Project,FID/Construction,2023,0.9,Dorset Green H2 Project,Operational,2023,0.9,,Delayed/in,,0.9
1501,Europe,,,,,Alcázar de San Juan - pHYnix,FID/Construction,2023,10,Alcázar de San Juan - pHYnix,,2024,10,,,2024,,New,Delayed/out,,10
1506,Europe,,,,,"European Energy, phase I",Feasibility study,2023,6,"European Energy, phase I",FID/Construction,2023,3,"European Energy, phase I",,2024,3,New,,Delayed/out,3
1507,Europe,,,,,"European Energy, phase II",,2024,6,"European Energy, phase II",FID/Construction,2023,9,"European Energy, phase II",,2024,9,,Early,Delayed/out,9
1511,Europe,,,,,Port of Aabenraa Methanol,FID/Construction,2023,50,Port of Aabenraa Methanol,,2024,50,Port of Aabenraa Methanol,,2024,50,New,Delayed/out,,50
1530,Europe,,,,,Octopus Hydrogen - BayWa MoU,Concept,2023,30,Octopus Hydrogen - BayWa MoU,,2024,15,,,2024,,New,Delayed/out,,30
1531,C. + S. America,,,,,"Atacama Hydrogen Hub, phase 1",,2022,10,"Atacama Hydrogen Hub, phase 1",Feasibility study,2023,10,"Atacama Hydrogen Hub, phase 1",,2024,10,,Delayed/in,Delayed/out,10
1535,C. + S. America,,,,,San Pedro de Atacama project,Feasibility study,2023,2.2,San Pedro de Atacama project,,2024,2,,,2024,,New,Delayed/out,,2.2
1552,Other,,,,,O&L group - CMB.TECH hydrogen hub,FID/Construction,2023,4,O&L group - CMB.TECH hydrogen hub,FID/Construction,2023,4,O&L group - CMB.TECH hydrogen hub,,2024,4,New,,Delayed/out,4
1588,N. America,,,,,"New Fortress Energy green hydrogen US gulf, phase 1",Feasibility study,2023,120,"New Fortress Energy green hydrogen US gulf, phase 1",,2025,100,,,2025,,New,Delayed/out,,120
1610,N. America,,,,,Ari Products Arizona,FID/Construction,2023,21.53558052434457,Air Products Arizona,FID/Construction,2023,37.78172021814837,Air Products Arizona,,2024,37.78172021814837,New,,Delayed/out,21.53558052434457
1611,Europe,,,,,"H2UDF, phase I",Concept,2023,5,"H2UDF, phase I",,2024,2.5,,,2024,,New,Delayed/out,,5
1631,Europe,,,,,"Get H2 Lingen, phase 2",FID/Construction,2023,4,"H2 Pilotanlage Lingen, phase 2",,2024,4,,,2024,,New,Delayed/out,,4
1653,Europe,,,,,PROMETHEAN,Concept,2023,54,PROMETHEAN,,2024,54,,,2024,,New,Delayed/out,,54
1661,Europe,,,,,Vätgas Ljungby,Feasibility study,2023,2,Vätgas Ljungby,FID/Construction,2023,2,,,2023,,New,,No info,2
1675,Europe,,,,,"NeptHyne, phase 1",Concept,2023,1,"NeptHyne, phase 1",,2024,1,,,2024,,New,Delayed/out,,1
1688,Europe,,,,,Zero Emission Mobility Corridor,Feasibility study,2023,34,Zero Emission Mobility Corridor,,2024,34,,,2024,,New,Delayed/out,,34
1697,Europe,,,,,Hyperion H2 Setúbal,Feasibility study,2023,7.5,Green H2 Setúbal Project,,2024,7.5,,,2024,,New,Delayed/out,,7.5
1714,Europe,,,,,Szazhalombatta refinery,Feasibility study,2023,10,Szazhalombatta refinery,,2024,10,,,2024,,New,Delayed/out,,10
1735,Europe,,,,,H2 Emden Electrolyzer,Concept,2023,50,"H2 Emden Electrolyzer, phase 1",,2024,10,,,2024,,New,Delayed/out,,50
1752,Europe,,,,,Dijon Métropole Smart EnergHy,FID/Construction,2023,1,Dijon Métropole Smart EnergHy (DMSE) - Station 1,FID/Construction,2023,1,Dijon Métropole Smart EnergHy (DMSE) - Station 1,,2024,1,New,,Delayed/out,1
1759,Asia,,,,,GAIL Vijaipur project,FID/Construction,2023,10,GAIL Vijaipur project,FID/Construction,2023,10,GAIL Vijaipur project,,2024,10,New,,Delayed/out,10
1768,Europe,,,,,Hysetco taxi project,,2024,2.5,Porte de St Cloud HRS station,Operational,2023,2.5,Porte de St Cloud HRS station,Operational,2023,2.5,,Early,,2.5
1796,Asia,,,,,,,,,Chicheng Wind-Hydrogen-Storage Energy Integration Demonstration,Operational,2023,9,Chicheng Wind-Hydrogen-Storage Energy Integration Demonstration,Operational,2023,9,,New,,9
1808,C. + S. America,,,,,"Unigel, phase I",FID/Construction,2023,60,"Unigel, phase I",FID/Construction,2023,60,"Unigel, phase I",,2024,60,New,,Delayed/out,60
1819,Australia,,,,,Viva Energy HRS,FID/Construction,2023,2.434456928838951,Viva Energy HRS,FID/Construction,2023,2.434456928838951,Viva Energy HRS,,2024,2.5,New,,Delayed/out,2.434456928838951
1828,N. America,,,,,"Saint John, New Brunswick refinery",FID/Construction,2023,5,"Saint John, New Brunswick refinery",FID/Construction,2023,5,"Saint John, New Brunswick refinery",,2024,5,New,,Delayed/out,5
1830,Europe,,,,,Ineratec PtX plant in Frankfurt,FID/Construction,2023,10,Ineratec PtX plant in Frankfurt,,2024,10,Ineratec PtX plant in Frankfurt,,2024,10,New,Delayed/out,,10
1835,Europe,,,,,,,,,Pau-Lescar Biofactory,Feasibility study,2023,1,Pau-Lescar Biofactory,,2024,1,,New,Delayed/out,1
1869,N. America,,,,,,,,,HTEC Burnaby plant,FID/Construction,2023,2.1067415730337076,HTEC Burnaby plant,,2024,2.1067415730337076,,New,Delayed/out,2.1067415730337076
1871,Europe,,,,,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",FID/Construction,2023,3,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",FID/Construction,2023,4.5,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",,2024,4.5,New,,Delayed/out,3
1894,Australia,,,,,Great Southern Project,FID/Construction,2023,3.139044943820225,Great Southern Project,,2024,7.6,,,2024,,New,Delayed/out,,3.139044943820225
1931,Europe,,,,,Energy Hub at MIRA Technology Park.,,2022,1.1,Energy Hub at MIRA Technology Park.,Operational,2023,1,Energy Hub at MIRA Technology Park.,,2024,1,,Delayed/in,Delayed/out,1
1958,N. America,,,,,,,,,"Plug Power Charleston, Tenesse (former United Hydrogen), expansion 2",FID/Construction,2023,21.354885340692558,,,2023,,,New,No info,21.354885340692558
1962,Asia,,,,,,,,,Chifeng Energy Internet of Things Zero Carbon Hydrogen Ammonia Demostration Project - Phase 1,FID/Construction,2023,35,Chifeng Energy Internet of Things Zero Carbon Hydrogen Ammonia Demostration Project - Phase 1,,2024,323.22610435585653,,New,Delayed/out,35
1970,Asia,,,,,,,,,"NTPC Green Hydrogen Blending Project (Kawas, Surat)",Operational,2023,0.0065,"NTPC Green Hydrogen Blending Project (Kawas, Surat)",Operational,2023,0.0065,,New,,0.0065
1971,Asia,,,,,,,,,NTPC Green Hydrogen Mobility Project - Delhi,FID/Construction,2023,1.6,NTPC Green Hydrogen Mobility Project - Delhi,Operational,2023,1.6,,New,,1.6
1979,Europe,,,,,,,,,GROHW,Operational,2023,0.5,GROHW,Operational,2023,0.5,,New,,0.5
1980,N. America,,,,,,,,,NASA’s Ames Research Center,Operational,2023,4,NASA’s Ames Research Center,Operational,2023,4,,New,,4
1986,N. America,,,,,,,,,Constellation - Nine Mile Point Nuclear Plant,Operational,2023,1,Constellation - Nine Mile Point Nuclear Plant,Operational,2023,1,,New,,1
2028,Europe,,,,,,,,,Energie Steiermark plant in Styria,Operational,2023,1,Energie Steiermark plant in Styria,Operational,2023,1,,New,,1
2065,Asia,,,,,,,,,Hygenco JSL Plant,FID/Construction,2023,1,Hygenco JSL Plant,,2024,1,,New,Delayed/out,1
2098,Europe,,,,,,,,,Pamesa - eCombustible,Operational,2023,8,Pamesa - eCombustible,Operational,2023,8,,New,,8
2105,Europe,,,,,,,,,Hy2B plant in Pfeffenhausen,FID/Construction,2023,5,Hy2B plant in Pfeffenhausen,,2024,5,,New,Delayed/out,5
2126,Asia,,,,,,,,,Jingneng Chagannur Wind Poer Hydrogen Production Project,FID/Construction,2023,2.216407572725873,Jingneng Chagannur Wind Poer Hydrogen Production Project,Operational,2023,2.216407572725873,,New,,2.216407572725873
2243,Europe,,,,,,,,,H2 production for a H2 Fuell station,FID/Construction,2023,1,H2 production for a H2 Fuell station,,2024,1,,New,Delayed/out,1
2244,Europe,,,,,,,,,Hydrogen for fuel cell testing and heat recovery,FID/Construction,2023,1,,,2023,,,New,No info,1
2286,Australia,,,,,,,,,Kumbarilla Renewable Energy Park (K-REP) - phase 1,Feasibility study,2023,0.25,,,2023,,,New,No info,0.25
2287,Australia,,,,,,,,,Kumbarilla Renewable Energy Park (K-REP)- phase 2,Feasibility study,2023,80,,,2023,,,New,No info,80
2288,Asia,,,,,,,,,Three Gorges Corp.'s Inner Mongolia project,Operational,2023,69,Three Gorges Corp.'s Inner Mongolia project,Operational,2023,75,,New,,69
2305,Other,,,,,,,,,"Daures Green Hydrogen Village, phase 1",FID/Construction,2023,0.5,"Daures Green Hydrogen Village, phase 1",,2024,0.5,,New,Delayed/out,0.5
2341,C. + S. America,,,,,,,,,Prothium,FID/Construction,2023,2.3,Prothium,Operational,2023,2.3,,New,,2.3
2353,C. + S. America,,,,,,,,,SITP Hydrogen Bus,Operational,2023,0.165,SITP Hydrogen Bus,Operational,2023,0.165,,New,,0.165
2357,C. + S. America,,,,,,,,,UCSC project,FID/Construction,2023,0.025,UCSC project,,2024,0.025,,New,Delayed/out,0.025
2367,Europe,,,,,,,,,BÜKKABRÁNY PtG,FID/Construction,2023,1,BÜKKABRÁNY PtG,,2024,1,,New,Delayed/out,1
2370,Europe,,,,,,,,,Strandmollen Ljungby,FID/Construction,2023,3,Strandmollen Ljungby,,2024,3,,New,Delayed/out,3
2372,Europe,,,,,,,,,Hitachi Zosen Inova HZI PtH Buchs,FID/Construction,2023,2.3,Hitachi Zosen Inova HZI PtH Buchs,,2024,2.3,,New,Delayed/out,2.3
2373,Europe,,,,,,,,,Arbikie Distillery,FID/Construction,2023,0.9,Arbikie Distillery,,2024,0.9,,New,Delayed/out,0.9
2416,Europe,,,,,,,,,Wien Energie -  Simmering,Feasibility study,2023,3,Wien Energie -  Simmering,,2024,3,,New,Delayed/out,3
2418,Europe,,,,,,,,,Renewable Gasfield,Operational,2023,2.0009235031553025,Renewable Gasfield,Operational,2023,2.0009235031553025,,New,,2.0009235031553025
2436,Europe,,,,,,,,,H-FLEX-E​,Feasibility study,2023,4.3,H-FLEX-E​,,2024,4.3,,New,Delayed/out,4.3
2445,Asia,,,,,,,,,Hydrogen Based Microgrid at NETRA,FID/Construction,2023,0.34,Hydrogen Based Microgrid at NETRA,Operational,2023,0.34,,New,,0.34
2446,Asia,,,,,,,,,Chusul Project,FID/Construction,2023,1,Chusul Project,,2024,0.2,,New,Delayed/out,1
2452,Europe,,,,,,,,,Convion SOE R&D ELY,Feasibility study,2023,0.125,Convion SOE R&D ELY,Operational,2023,0.125,,New,,0.125
2464,Asia,,,,,,,,,HPCL Vizag Facility H2,Feasibility study,2023,4.271202093273819,HPCL Vizag Facility H2,Operational,2023,4.271202093273819,,New,,4.271202093273819
2503,Europe,,,,,,,,,Gaznat methanation project,Operational,2023,0.5,Gaznat methanation project,Operational,2023,0.5,,New,,0.5
2537,Europe,,,,,,,,,GET H2 TransHyDE hydrogen project - Lingen,Operational,2023,0.25,GET H2 TransHyDE hydrogen project - Lingen,Operational,2023,0.25,,New,,0.25
2550,Europe,,,,,,,,,HyPilot project,FID/Construction,2023,1,HyPilot project,,2024,1,,New,Delayed/out,1
10548,Europe,"Green fertilizer project Porsgrunn, phase 1",Feasibility study,2023,25,"Green fertilizer project Porsgrunn-Heroya, phase 1",,2023,24,"Green fertilizer project Porsgrunn-Heroya, phase 1 - SKREI",,2023,24,"Green fertilizer project Porsgrunn-Heroya, phase 1 - SKREI",,2024,24,Cap/out,,Delayed/out,1
20941,N. America,Florida Power & Light utility pilot plant,,2023,20,Cavendish NextGen Hydrogen Hub,FID/Construction,2023,25,Cavendish NextGen Hydrogen Hub,FID/Construction,2023,25,Cavendish NextGen Hydrogen Hub,,2024,25,Cap/in,,Delayed/out,5
30850,Europe,Green lab skive,,2022,12,Green lab skive,FID/Construction,2023,12,Green lab skive (Phase I),,2023,6,Green lab skive (Phase I),Operational,2023,6,Delayed/in,Cap/out,,6
30993,Europe,Aquamarine,FID/Construction,2023,2.5,Aquamarine,FID/Construction,2023,2.5,Aquamarine,,2023,2,Aquamarine,Operational,2023,2,,Cap/out,,0.5
31506,Europe,,,,,"European Energy, phase I",Feasibility study,2023,6,"European Energy, phase I",,2023,3,"European Energy, phase I",,2024,3,New,Cap/out,Delayed/out,3
40574,Europe,,,,,"Get H2 Lingen, phase 1",,2023,10,"H2 Pilotanlage  Lingen, phase 1",FID/Construction,2023,14,"H2 Pilotanlage  Lingen, phase 1",,2024,10,,Cap/in,Delayed/out,4
41467,Europe,,,,,Coagener Los Barrios,,2023,1,"Los Barrios coal plant, Cadiz, phase 1",FID/Construction,2023,5,"Los Barrios coal plant, Cadiz, phase 1",,2024,5,,Cap/in,Delayed/out,4
41610,N. America,,,,,Ari Products Arizona,,2023,21.53558052434457,Air Products Arizona,FID/Construction,2023,37.78172021814837,Air Products Arizona,,2024,37.78172021814837,,Cap/in,Delayed/out,16.2461396938038
41871,Europe,,,,,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",,2023,3,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",FID/Construction,2023,4.5,"Norwegian Hydrogen, Hellesylt Hydrogen Hub 1st project",,2024,4.5,,Cap/in,Delayed/out,1.5
50645,Europe,Hyport - Toulouse-Blagnac Airport,,2021,0.842696629213483,Hyport - Toulouse-Blagnac Airport,,2022,0.842696629213483,Hyport - Toulouse-Blagnac Airport,Operational,2023,2,Hyport - Toulouse-Blagnac Airport,,2023,1,,Delayed/in,Cap/out,1
50792,Europe,Kopernikus 2.0,,2021,0.25,Kopernikus 2.0,,2021,0.25,Kopernikus 2.0,Operational,2023,0.25,Kopernikus 2.0,,2023,0.06,,Delayed/in,Cap/out,0.19
51124,Asia,,,,,Sinopec - Kuqa,FID/Construction,2023,260,Sinopec - Kuqa,Operational,2023,260,Sinopec - Kuqa,,2023,52,New,,Cap/out,208
51156,Europe,Hydrogen Lab Bremerhaven (phase 1),,2022,2,Hydrogen Lab Bremerhaven (phase 1),,2022,2,Hydrogen Lab Bremerhaven (phase 1),FID/Construction,2023,2,Hydrogen Lab Bremerhaven (phase 1),,2023,1,,Delayed/in,Cap/out,1
61819,Australia,,,,,Viva Energy HRS,,2023,2.434456928838951,Viva Energy HRS,,2023,2.434456928838951,Viva Energy HRS,,2024,2.5,,,Cap/in,0.06554307116104896
`;
Ae(un).map((e) => ({
  sourceStage: e.source_stage,
  sourceNode: e.source_node,
  targetStage: e.target_stage,
  targetNode: e.target_node,
  capacityMw: Number(e.capacity_mw)
}));
const yn = (e) => e === "No info" ? "Disappeared" : e;
Ae(dn).map((e) => ({
  vintage: e.vintage,
  status: e.status,
  outcome: yn(e.outcome),
  capacityMw: Number(e.capacity_mw),
  shareOfVintage: Number(e.share_of_vintage),
  shareWithinStatus: Number(e.share_within_status),
  statusWidth: Number(e.status_width)
}));
const pn = Ae(cn), ie = (e, t, n) => e[t] === n;
function fn(e) {
  return ie(e, "status2023out", "Operational") ? "On time" : ["stat21t22", "stat22t23", "stat23t23out"].some((t) => ie(e, t, "No info")) ? "Disappeared" : ie(e, "stat23t23out", "Cap/out") || ["stat21t22", "stat22t23", "stat23t23out"].some((t) => ie(e, t, "Delayed/out")) ? "Delayed" : null;
}
function j(e) {
  const t = `status${e}`, n = `year${e}`;
  return pn.flatMap((a) => {
    if (!a[t] || a[t] === "Operational" || Number(a[n]) !== 2023) return [];
    const r = fn(a), o = Number(a.capacity);
    return !r || !Number.isFinite(o) || o <= 0 ? [] : [{
      key: `${e}:${a.reference}`,
      status: a[t],
      outcome: r,
      capacityMw: o
    }];
  }).sort((a, r) => {
    const o = { "On time": 0, Delayed: 1, Disappeared: 2 };
    return o[a.outcome] - o[r.outcome] || a.capacityMw - r.capacityMw;
  });
}
const z = ["FID/Construction", "Feasibility study", "Concept"], V = {
  Disappeared: "#c37e80",
  Delayed: "#ffc277",
  "On time": "#7fb27b"
}, Y = {
  Disappeared: "#8b0000",
  Delayed: "#ff8c00",
  "On time": "#006400"
};
function hn(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Oe(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ft(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function ee() {
}
var q = 0.7, he = 1 / q, v = "\\s*([+-]?\\d+)\\s*", U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", M = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gn = /^#([0-9a-f]{3,8})$/, mn = new RegExp(`^rgb\\(${v},${v},${v}\\)$`), bn = new RegExp(`^rgb\\(${M},${M},${M}\\)$`), Dn = new RegExp(`^rgba\\(${v},${v},${v},${U}\\)$`), Cn = new RegExp(`^rgba\\(${M},${M},${M},${U}\\)$`), wn = new RegExp(`^hsl\\(${U},${M},${M}\\)$`), Hn = new RegExp(`^hsla\\(${U},${M},${M},${U}\\)$`), We = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Oe(ee, J, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ze,
  // Deprecated! Use color.formatHex.
  formatHex: ze,
  formatHex8: En,
  formatHsl: Fn,
  formatRgb: Ve,
  toString: Ve
});
function ze() {
  return this.rgb().formatHex();
}
function En() {
  return this.rgb().formatHex8();
}
function Fn() {
  return ht(this).formatHsl();
}
function Ve() {
  return this.rgb().formatRgb();
}
function J(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = gn.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ye(t) : n === 3 ? new x(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? oe(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? oe(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = mn.exec(e)) ? new x(t[1], t[2], t[3], 1) : (t = bn.exec(e)) ? new x(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Dn.exec(e)) ? oe(t[1], t[2], t[3], t[4]) : (t = Cn.exec(e)) ? oe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = wn.exec(e)) ? Ue(t[1], t[2] / 100, t[3] / 100, 1) : (t = Hn.exec(e)) ? Ue(t[1], t[2] / 100, t[3] / 100, t[4]) : We.hasOwnProperty(e) ? Ye(We[e]) : e === "transparent" ? new x(NaN, NaN, NaN, 0) : null;
}
function Ye(e) {
  return new x(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function oe(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new x(e, t, n, a);
}
function kn(e) {
  return e instanceof ee || (e = J(e)), e ? (e = e.rgb(), new x(e.r, e.g, e.b, e.opacity)) : new x();
}
function Fe(e, t, n, a) {
  return arguments.length === 1 ? kn(e) : new x(e, t, n, a ?? 1);
}
function x(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Oe(x, Fe, ft(ee, {
  brighter(e) {
    return e = e == null ? he : Math.pow(he, e), new x(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? q : Math.pow(q, e), new x(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new x(L(this.r), L(this.g), L(this.b), ge(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ke,
  // Deprecated! Use color.formatHex.
  formatHex: Ke,
  formatHex8: xn,
  formatRgb: qe,
  toString: qe
}));
function Ke() {
  return `#${T(this.r)}${T(this.g)}${T(this.b)}`;
}
function xn() {
  return `#${T(this.r)}${T(this.g)}${T(this.b)}${T((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qe() {
  const e = ge(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${L(this.r)}, ${L(this.g)}, ${L(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ge(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function L(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function T(e) {
  return e = L(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ue(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new S(e, t, n, a);
}
function ht(e) {
  if (e instanceof S) return new S(e.h, e.s, e.l, e.opacity);
  if (e instanceof ee || (e = J(e)), !e) return new S();
  if (e instanceof S) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, r = Math.min(t, n, a), o = Math.max(t, n, a), i = NaN, s = o - r, u = (o + r) / 2;
  return s ? (t === o ? i = (n - a) / s + (n < a) * 6 : n === o ? i = (a - t) / s + 2 : i = (t - n) / s + 4, s /= u < 0.5 ? o + r : 2 - o - r, i *= 60) : s = u > 0 && u < 1 ? 0 : i, new S(i, s, u, e.opacity);
}
function Nn(e, t, n, a) {
  return arguments.length === 1 ? ht(e) : new S(e, t, n, a ?? 1);
}
function S(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Oe(S, Nn, ft(ee, {
  brighter(e) {
    return e = e == null ? he : Math.pow(he, e), new S(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? q : Math.pow(q, e), new S(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, r = 2 * n - a;
    return new x(
      we(e >= 240 ? e - 240 : e + 120, r, a),
      we(e, r, a),
      we(e < 120 ? e + 240 : e - 120, r, a),
      this.opacity
    );
  },
  clamp() {
    return new S(Je(this.h), se(this.s), se(this.l), ge(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ge(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Je(this.h)}, ${se(this.s) * 100}%, ${se(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Je(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function se(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function we(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ge = (e) => () => e;
function In(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Pn(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Sn(e) {
  return (e = +e) == 1 ? gt : function(t, n) {
    return n - t ? Pn(t, n, e) : Ge(isNaN(t) ? n : t);
  };
}
function gt(e, t) {
  var n = t - e;
  return n ? In(e, n) : Ge(isNaN(e) ? t : e);
}
const Ze = function e(t) {
  var n = Sn(t);
  function a(r, o) {
    var i = n((r = Fe(r)).r, (o = Fe(o)).r), s = n(r.g, o.g), u = n(r.b, o.b), l = gt(r.opacity, o.opacity);
    return function(y) {
      return r.r = i(y), r.g = s(y), r.b = u(y), r.opacity = l(y), r + "";
    };
  }
  return a.gamma = e, a;
}(1);
function An(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), r;
  return function(o) {
    for (r = 0; r < n; ++r) a[r] = e[r] * (1 - o) + t[r] * o;
    return a;
  };
}
function Mn(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function On(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, r = new Array(a), o = new Array(n), i;
  for (i = 0; i < a; ++i) r[i] = je(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(s) {
    for (i = 0; i < a; ++i) o[i] = r[i](s);
    return o;
  };
}
function Gn(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function me(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function jn(e, t) {
  var n = {}, a = {}, r;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (r in t)
    r in e ? n[r] = je(e[r], t[r]) : a[r] = t[r];
  return function(o) {
    for (r in n) a[r] = n[r](o);
    return a;
  };
}
var ke = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, He = new RegExp(ke.source, "g");
function $n(e) {
  return function() {
    return e;
  };
}
function Rn(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Tn(e, t) {
  var n = ke.lastIndex = He.lastIndex = 0, a, r, o, i = -1, s = [], u = [];
  for (e = e + "", t = t + ""; (a = ke.exec(e)) && (r = He.exec(t)); )
    (o = r.index) > n && (o = t.slice(n, o), s[i] ? s[i] += o : s[++i] = o), (a = a[0]) === (r = r[0]) ? s[i] ? s[i] += r : s[++i] = r : (s[++i] = null, u.push({ i, x: me(a, r) })), n = He.lastIndex;
  return n < t.length && (o = t.slice(n), s[i] ? s[i] += o : s[++i] = o), s.length < 2 ? u[0] ? Rn(u[0].x) : $n(t) : (t = u.length, function(l) {
    for (var y = 0, d; y < t; ++y) s[(d = u[y]).i] = d.x(l);
    return s.join("");
  });
}
function je(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Ge(t) : (n === "number" ? me : n === "string" ? (a = J(t)) ? (t = a, Ze) : Tn : t instanceof J ? Ze : t instanceof Date ? Gn : Mn(t) ? An : Array.isArray(t) ? On : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? jn : me)(e, t);
}
function Ln(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Bn(e) {
  return function() {
    return e;
  };
}
function _n(e) {
  return +e;
}
var Qe = [0, 1];
function _(e) {
  return e;
}
function xe(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Bn(isNaN(t) ? NaN : 0.5);
}
function vn(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Xn(e, t, n) {
  var a = e[0], r = e[1], o = t[0], i = t[1];
  return r < a ? (a = xe(r, a), o = n(i, o)) : (a = xe(a, r), o = n(o, i)), function(s) {
    return o(a(s));
  };
}
function Wn(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, r = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    r[i] = xe(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(s) {
    var u = $t(e, s, 1, a) - 1;
    return o[u](r[u](s));
  };
}
function zn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Vn() {
  var e = Qe, t = Qe, n = je, a, r, o, i = _, s, u, l;
  function y() {
    var c = Math.min(e.length, t.length);
    return i !== _ && (i = vn(e[0], e[c - 1])), s = c > 2 ? Wn : Xn, u = l = null, d;
  }
  function d(c) {
    return c == null || isNaN(c = +c) ? o : (u || (u = s(e.map(a), t, n)))(a(i(c)));
  }
  return d.invert = function(c) {
    return i(r((l || (l = s(t, e.map(a), me)))(c)));
  }, d.domain = function(c) {
    return arguments.length ? (e = Array.from(c, _n), y()) : e.slice();
  }, d.range = function(c) {
    return arguments.length ? (t = Array.from(c), y()) : t.slice();
  }, d.rangeRound = function(c) {
    return t = Array.from(c), n = Ln, y();
  }, d.clamp = function(c) {
    return arguments.length ? (i = c ? !0 : _, y()) : i !== _;
  }, d.interpolate = function(c) {
    return arguments.length ? (n = c, y()) : n;
  }, d.unknown = function(c) {
    return arguments.length ? (o = c, d) : o;
  }, function(c, h) {
    return a = c, r = h, y();
  };
}
function Yn() {
  return Vn()(_, _);
}
function Kn(e, t, n, a) {
  var r = _t(e, t, n), o;
  switch (a = pe(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = sn(r, i)) && (a.precision = o), pt(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = ln(r, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = on(r)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return W(a);
}
function qn(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Bt(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var r = t();
    return Kn(r[0], r[r.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), r = 0, o = a.length - 1, i = a[r], s = a[o], u, l, y = 10;
    for (s < i && (l = i, i = s, s = l, l = r, r = o, o = l); y-- > 0; ) {
      if (l = Ee(i, s, n), l === u)
        return a[r] = i, a[o] = s, t(a);
      if (l > 0)
        i = Math.floor(i / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        i = Math.ceil(i * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return e;
  }, e;
}
function mt() {
  var e = Yn();
  return e.copy = function() {
    return zn(e, mt());
  }, hn.apply(e, arguments), qn(e);
}
const et = 1920, tt = 1080, E = { top: 238, bottom: 770 }, Un = {
  2022: { labelX: 592, totalX: 248, totalW: 232, statusX: 522, statusW: 434 },
  2023: { labelX: 1328, totalX: 984, totalW: 232, statusX: 1258, statusW: 434 }
};
function P(e, t, n, a, r = "e02-label", o = {}) {
  const i = p("text", { x: t, y: n, class: r, ...o }, a);
  return e.appendChild(i), i;
}
function nt(e) {
  return j(e).map((t) => ({
    ...t,
    vintage: e,
    reference: t.key.slice(t.key.indexOf(":") + 1)
  }));
}
function Jn(e, t, n, a, r, o, i, s) {
  e.appendChild(p("rect", {
    x: n,
    y: a,
    width: r,
    height: Math.max(0.65, o),
    fill: V[t.outcome],
    stroke: Y[t.outcome],
    "stroke-width": 1.25,
    "data-mark": "project-segment",
    "data-key": t.reference,
    "data-binding": String(t.vintage),
    "data-instance": i,
    "data-scene-id": s
  }));
}
function Zn(e, t) {
  return t.has(e.reference) ? "shared-project-records" : e.vintage === 2022 ? "2022-only-project-records" : "2023-only-project-records";
}
function at(e, t, n, a, r, o, i) {
  const s = E.bottom - E.top;
  let u = 0;
  for (const l of t) {
    const y = l.capacityMw / r * s;
    Jn(e, l, n, E.bottom - u - y, a, y, o, Zn(l, i)), u += y;
  }
}
function rt(e, t, n, a) {
  const r = Un[t], o = n.reduce((c, h) => c + h.capacityMw, 0), i = p("g", {
    "data-scope": String(t),
    "data-scene-id": "bar-geometry-template",
    "data-geometry-ref": "renderer:ener02-fig3-bottom-panel-geometry"
  });
  P(i, r.labelX, 142, String(t), "e02-bottom-title", {
    "font-weight": 700,
    "text-anchor": "middle",
    "data-guide": "vintage-label"
  }), P(i, r.totalX + r.totalW / 2, 205, "Total", "e02-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subtitle"
  }), P(i, r.statusX + r.statusW / 2, 205, "By status", "e02-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subtitle"
  }), i.appendChild(p("rect", {
    x: r.totalX,
    y: E.top,
    width: r.totalW,
    height: E.bottom - E.top,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.8,
    "data-guide": "frame"
  })), i.appendChild(p("rect", {
    x: r.statusX,
    y: E.top,
    width: r.statusW,
    height: E.bottom - E.top,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.8,
    "data-guide": "frame"
  })), at(i, n, r.totalX + 10, r.totalW - 20, o, "total", a);
  const s = new Map(z.map((c) => [
    c,
    n.filter((h) => h.status === c).reduce((h, m) => h + m.capacityMw, 0)
  ])), u = z.filter((c) => (s.get(c) ?? 0) > 0), l = 14, y = r.statusW - 20 - l * Math.max(0, u.length - 1);
  let d = r.statusX + 10;
  for (const c of u) {
    const h = s.get(c) ?? 0, m = y * h / o, C = n.filter((b) => b.status === c);
    at(i, C, d, m, h, "by-status", a), (c === "FID/Construction" ? ["FID/", "construction"] : c === "Feasibility study" ? ["Feasibility", "study"] : [c]).forEach((b, g) => P(i, d + m / 2, 811 + g * 23, b, "e02-status-label", {
      "text-anchor": "middle",
      "data-guide": "status-label"
    })), i.appendChild(p("path", {
      d: `M${d},890v-14M${d},883H${d + m}M${d + m},890v-14`,
      fill: "none",
      stroke: "#444",
      "stroke-width": 1.5,
      "data-guide": "status-capacity-bracket"
    })), P(i, d + m / 2, 925, `${W(".1f")(h / 1e3)} GW`, "e02-capacity", {
      "text-anchor": "middle",
      "data-guide": "status-capacity-label"
    }), d += m + l;
  }
  i.appendChild(p("path", {
    d: `M${r.totalX + 10},890v-14M${r.totalX + 10},883H${r.totalX + r.totalW - 10}M${r.totalX + r.totalW - 10},890v-14`,
    fill: "none",
    stroke: "#444",
    "stroke-width": 1.5,
    "data-guide": "capacity-bracket"
  })), P(i, r.totalX + r.totalW / 2, 925, `${W(".1f")(o / 1e3)} GW`, "e02-capacity", {
    "text-anchor": "middle",
    "data-guide": "capacity-label"
  }), e.appendChild(i);
}
function Qn(e) {
  const t = p("g", { "data-guide": "shared-axes", "data-scene-id": "bar-geometry-template" }), n = 198;
  t.appendChild(p("path", {
    d: `M${n},${E.top}V${E.bottom}`,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.8
  }));
  for (const a of [0, 25, 50, 75, 100]) {
    const r = E.bottom - a / 100 * (E.bottom - E.top);
    t.appendChild(p("path", {
      d: `M${n - 9},${r}H${n}M${n},${r}H1692`,
      stroke: a === 0 || a === 100 ? "#bbb" : "#e4e4e4",
      "stroke-width": a === 0 || a === 100 ? 1.2 : 1
    })), P(t, n - 15, r + 7, String(a), "e02-tick", {
      "text-anchor": "end",
      "data-guide": "tick-label"
    });
  }
  P(t, 103, (E.top + E.bottom) / 2, "Share of capacity additions in 2023 (%)", "e02-axis-title", {
    transform: `rotate(-90 103 ${(E.top + E.bottom) / 2})`,
    "text-anchor": "middle",
    "data-guide": "axis-title"
  }), P(t, 960, 76, "Announcements by vintage VERSUS outcome in 2024", "e02-title", {
    "text-anchor": "middle",
    "data-guide": "title"
  }), e.appendChild(t);
}
function ea(e) {
  const t = p("g", {
    transform: "translate(1692 282)",
    "data-guide": "outcome",
    "data-scene-id": "outcome-guide",
    "data-geometry-ref": "renderer:ener02-fig3-outcome-guide"
  });
  P(t, 0, 0, "Outcome", "e02-subtitle"), ["Disappeared", "Delayed", "On time"].forEach((n, a) => {
    t.appendChild(p("rect", {
      x: 0,
      y: 24 + a * 38,
      width: 24,
      height: 24,
      fill: V[n],
      stroke: Y[n],
      "data-guide": "legend-swatch",
      "data-key": n
    })), P(t, 34, 44 + a * 38, n, "e02-legend", { "data-guide": "legend-label" });
  }), e.appendChild(t);
}
function ta(e) {
  Pe(e), Se(e, et, tt), e.setAttribute("viewBox", `0 0 ${et} ${tt}`), e.setAttribute("role", "img"), e.setAttribute("aria-label", "LCM: 2022 and 2023 announcement cohorts in adjacent Total and By status regions"), e.classList.add("e02-root");
  const t = p("g", {
    "data-panel": "bar (d)",
    "data-keyframe-index": "1",
    "data-keyframe-kind": "lcm",
    "data-scene-id": "joint-vintage-panel",
    "data-geometry-ref": "candidate:bar-d-vintage-offset-2d"
  }), n = nt(2022), a = nt(2023), r = new Set(n.map((s) => s.reference)), o = new Set(a.map((s) => s.reference).filter((s) => r.has(s)));
  if (n.length !== 93 || a.length !== 84 || o.size !== 25)
    throw new Error(`LCM cohort mismatch: ${n.length} + ${a.length}; shared=${o.size}`);
  Qn(t), rt(t, 2022, n, o), rt(t, 2023, a, o), ea(t), e.appendChild(t);
  const i = e.querySelectorAll('[data-mark="project-segment"]');
  if (i.length !== 354) throw new Error(`LCM mark mismatch: expected 354, received ${i.length}`);
  return e;
}
const Z = 1920, Q = 1080, na = [
  { kind: "panel-i", label: "Panel bar (c)" },
  { kind: "lcm", label: "Combined Data" },
  { kind: "panel-j", label: "Panel bar (d)" }
], it = { "On time": 0, Delayed: 1, Disappeared: 2 };
function A(e, t, n, a, r, o = {}) {
  const i = p("text", { x: t, y: n, class: r, ...o }, a);
  return e.appendChild(i), i;
}
function Ne(e) {
  return e.key.slice(e.key.indexOf(":") + 1);
}
function le(e, t, n, a) {
  e.appendChild(p("g", {
    "data-scene-id": t,
    "data-parent-id": n ?? "",
    "data-anchor": a,
    "aria-label": t
  }));
}
function ot(e, t, n, a, r, o, i, s, u, l) {
  let y = 0;
  for (const d of t) {
    const c = d.capacityMw / i * o, h = Ne(d), m = l.has(h) ? "shared-project-records" : `${s}-only-project-records`;
    e.appendChild(p("rect", {
      x: n,
      y: r + o - y - c,
      width: a,
      height: Math.max(0.7, c),
      fill: V[d.outcome],
      stroke: Y[d.outcome],
      "stroke-width": 1.25,
      "data-mark": "project-segment",
      "data-key": `${s}:${h}:${u}`,
      "data-reference": h,
      "data-vintage": s,
      "data-outcome": d.outcome,
      "data-record-group": m,
      "data-scene-id": m
    })), y += c;
  }
}
function aa(e, t, n) {
  A(e, t, n, "Outcome", "e02-kf-subtitle", { "data-guide": "legend-title" }), ["Disappeared", "Delayed", "On time"].forEach((a, r) => {
    e.appendChild(p("rect", {
      x: t,
      y: n + 24 + r * 39,
      width: 24,
      height: 24,
      fill: V[a],
      stroke: Y[a],
      "data-guide": "legend-swatch",
      "data-key": a
    })), A(e, t + 34, n + 44 + r * 39, a, "e02-kf-legend", { "data-guide": "legend-label" });
  });
}
function st(e, t, n, a, r) {
  e.appendChild(p("path", {
    d: `M${t},${a + 8}v-14M${t},${a}H${n}M${n},${a + 8}v-14`,
    fill: "none",
    stroke: "#555",
    "stroke-width": 1.5,
    "data-guide": "capacity-bracket"
  })), A(e, (t + n) / 2, a + 43, `${W(".1f")(r / 1e3)} GW`, "e02-kf-capacity", {
    "text-anchor": "middle",
    "data-guide": "capacity-label"
  });
}
function ra(e, t, n, a, r) {
  const o = j(t).sort(
    (g, H) => it[g.outcome] - it[H.outcome] || g.capacityMw - H.capacityMw
  ), i = o.reduce((g, H) => g + H.capacityMw, 0), s = mt().domain([0, 100]).range([n.y + n.height, n.y]), u = n.width * 0.31, l = n.width * 0.055, y = n.x + u + l, d = n.width - u - l;
  A(e, n.x + u / 2, n.y - 35, "Total", "e02-kf-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subplot-title"
  }), A(e, y + d / 2, n.y - 35, "By status", "e02-kf-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subplot-title"
  });
  for (const g of [0, 25, 50, 75, 100]) {
    const H = s(g);
    e.appendChild(p("path", {
      d: `M${n.x - 8},${H}H${n.x + n.width}`,
      stroke: "#e5e5e5",
      "stroke-width": 1,
      "data-guide": "gridline"
    })), e.appendChild(p("path", { d: `M${n.x - 8},${H}H${n.x}`, stroke: "#333", "data-guide": "tick" })), A(e, n.x - 15, H + 7, String(g), "e02-kf-tick", {
      "text-anchor": "end",
      "data-guide": "tick-label"
    });
  }
  e.appendChild(p("rect", {
    x: n.x,
    y: n.y,
    width: u,
    height: n.height,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.6,
    "data-guide": "frame"
  })), e.appendChild(p("rect", {
    x: y,
    y: n.y,
    width: d,
    height: n.height,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.6,
    "data-guide": "frame"
  }));
  const c = 10;
  ot(e, o, n.x + c, u - c * 2, n.y, n.height, i, t, "total", a);
  const h = new Map(z.map((g) => [
    g,
    o.filter((H) => H.status === g).reduce((H, F) => H + F.capacityMw, 0)
  ])), m = z.filter((g) => (h.get(g) ?? 0) > 0), C = 13, w = d - c * 2 - C * Math.max(0, m.length - 1);
  let b = y + c;
  for (const g of m) {
    const H = h.get(g) ?? 0, F = w * H / i, $ = o.filter((K) => K.status === g);
    ot(e, $, b, F, n.y, n.height, H, t, "by-status", a), (g === "FID/Construction" ? ["FID/", "construction"] : g === "Feasibility study" ? ["Feasibility", "study"] : [g]).forEach((K, Ce) => A(e, b + F / 2, n.y + n.height + 40 + Ce * 23, K, "e02-kf-status", {
      "text-anchor": "middle",
      "data-guide": "status-label"
    })), st(e, b, b + F, n.y + n.height + 113, H), b += F + C;
  }
  st(e, n.x + c, n.x + u - c, n.y + n.height + 113, i);
}
function ia() {
  const e = new Set(j(2022).map(Ne));
  return new Set(j(2023).map(Ne).filter((t) => e.has(t)));
}
function lt(e, t) {
  const n = t === 2022 ? "source-bar-panel" : "target-bar-panel", r = p("g", {
    "data-panel": `bar (${t === 2022 ? "c" : "d"})`,
    "data-key": t,
    "data-keyframe-index": t === 2022 ? 0 : 2,
    "data-keyframe-kind": t === 2022 ? "panel-i" : "panel-j",
    "data-scene-id": n
  }), o = ia(), i = { x: 690, y: 235, width: 540, height: 500 };
  A(r, 960, 115, "Announcements", "e02-kf-title", { "text-anchor": "middle", "data-guide": "title" }), A(r, 960, 151, `by ${t} VERSUS outcome in 2024`, "e02-kf-title", { "text-anchor": "middle", "data-guide": "title" }), ra(r, t, i, o), A(r, 575, 485, "Share of capacity additions in 2023 (%)", "e02-kf-axis-title", {
    transform: "rotate(-90 575 485)",
    "text-anchor": "middle",
    "data-guide": "axis-title"
  }), aa(r, 1280, 330), e.appendChild(r), le(e, "bar-geometry-template", n, "local Total and By status coordinate frame"), le(e, "outcome-guide", n, "external composition guide"), le(e, "shared-project-records", n, `${t}-bound Total and By status segment geometry`), le(e, t === 2022 ? "2022-only-project-records" : "2023-only-project-records", n, `${t} vintage region`);
  const s = t === 2022 ? 93 : 84, u = e.querySelectorAll('[data-mark="project-segment"]');
  if (j(t).length !== s || u.length !== s * 2 || o.size !== 25)
    throw new Error(`Endpoint cohort mismatch for ${t}: records=${j(t).length}, marks=${u.length}, shared=${o.size}`);
}
function oa(e) {
  ta(e);
}
function de(e, t) {
  return Pe(e), Se(e, Z, Q), e.setAttribute("viewBox", `0 0 ${Z} ${Q}`), e.classList.add("e02-root", "e02-keyframe"), e.setAttribute("data-transition", "ener02-fig3-bar-c-to-bar-d"), e.setAttribute("data-frame-index", String(t)), t === 0 ? lt(e, 2022) : t === 1 ? oa(e) : lt(e, 2023), e;
}
const bt = {
  labelX: 960,
  totalX: 690,
  totalW: 167.4,
  statusX: 887.1,
  statusW: 342.9,
  top: 235,
  bottom: 735,
  subtitleY: 200,
  statusLabelY: 775,
  bracketY: 848,
  capacityY: 891,
  statusGap: 13
}, be = {
  2022: {
    labelX: 592,
    totalX: 248,
    totalW: 232,
    statusX: 522,
    statusW: 434,
    top: 238,
    bottom: 770,
    subtitleY: 205,
    statusLabelY: 811,
    bracketY: 883,
    capacityY: 925,
    statusGap: 14
  },
  2023: {
    labelX: 1328,
    totalX: 984,
    totalW: 232,
    statusX: 1258,
    statusW: 434,
    top: 238,
    bottom: 770,
    subtitleY: 205,
    statusLabelY: 811,
    bracketY: 883,
    capacityY: 925,
    statusGap: 14
  }
}, Dt = {
  axisX: 690,
  gridStartX: 682,
  gridEndX: 1230,
  top: 235,
  bottom: 735,
  tickLabelX: 675,
  titleX: 575,
  titleY: 485,
  titleFontSize: 24
}, Ct = {
  axisX: 198,
  gridStartX: 198,
  gridEndX: 1692,
  top: 238,
  bottom: 770,
  tickLabelX: 183,
  titleX: 103,
  titleY: 504,
  titleFontSize: 25
}, wt = { x: 1280, y: 330 }, Ht = { x: 1692, y: 282 }, ut = { "On time": 0, Delayed: 1, Disappeared: 2 }, Et = (e) => Math.max(0, Math.min(1, e)), D = (e, t, n) => e + (t - e) * n, sa = (e) => {
  const t = Et(e);
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}, G = (e, t, n) => sa((e - t) / (n - t));
function Ft(e, t, n) {
  return {
    labelX: D(e.labelX, t.labelX, n),
    totalX: D(e.totalX, t.totalX, n),
    totalW: D(e.totalW, t.totalW, n),
    statusX: D(e.statusX, t.statusX, n),
    statusW: D(e.statusW, t.statusW, n),
    top: D(e.top, t.top, n),
    bottom: D(e.bottom, t.bottom, n),
    subtitleY: D(e.subtitleY, t.subtitleY, n),
    statusLabelY: D(e.statusLabelY, t.statusLabelY, n),
    bracketY: D(e.bracketY, t.bracketY, n),
    capacityY: D(e.capacityY, t.capacityY, n),
    statusGap: D(e.statusGap, t.statusGap, n)
  };
}
function kt(e, t, n) {
  return {
    axisX: D(e.axisX, t.axisX, n),
    gridStartX: D(e.gridStartX, t.gridStartX, n),
    gridEndX: D(e.gridEndX, t.gridEndX, n),
    top: D(e.top, t.top, n),
    bottom: D(e.bottom, t.bottom, n),
    tickLabelX: D(e.tickLabelX, t.tickLabelX, n),
    titleX: D(e.titleX, t.titleX, n),
    titleY: D(e.titleY, t.titleY, n),
    titleFontSize: D(e.titleFontSize, t.titleFontSize, n)
  };
}
function xt(e, t, n) {
  return { x: D(e.x, t.x, n), y: D(e.y, t.y, n) };
}
function I(e, t, n, a, r, o = {}) {
  const i = p("text", { x: t, y: n, class: r, ...o }, a);
  return e.appendChild(i), i;
}
function Ie(e) {
  return e.key.slice(e.key.indexOf(":") + 1);
}
function la() {
  const e = new Set(j(2022).map(Ie));
  return new Set(j(2023).map(Ie).filter((t) => e.has(t)));
}
function ua(e) {
  return j(e).sort(
    (t, n) => ut[t.outcome] - ut[n.outcome] || t.capacityMw - n.capacityMw
  );
}
function dt(e, t, n, a, r, o, i, s, u, l, y = 1) {
  let d = 0;
  for (const c of t) {
    const h = c.capacityMw / i * o, m = Ie(c), C = l.has(m) ? "shared-project-records" : `${s}-only-project-records`, w = r + o - d - h, b = Math.max(0.65, h * y);
    e.appendChild(p("rect", {
      x: n,
      y: D(r + o, w, y),
      width: a,
      height: b,
      fill: V[c.outcome],
      stroke: Y[c.outcome],
      "stroke-width": 1.25,
      "data-mark": "project-segment",
      "data-key": `${s}:${m}:${u}`,
      "data-reference": m,
      "data-vintage": s,
      "data-binding": s,
      "data-instance": u,
      "data-outcome": c.outcome,
      "data-record-group": C,
      "data-scene-id": C
    })), d += h;
  }
}
function ct(e, t, n, a, r, o) {
  e.appendChild(p("path", {
    d: `M${t},${a + 8}v-14M${t},${a}H${n}M${n},${a + 8}v-14`,
    fill: "none",
    stroke: "#555",
    "stroke-width": 1.5,
    "data-guide": "capacity-bracket"
  })), I(e, (t + n) / 2, r, `${W(".1f")(o / 1e3)} GW`, "e02-kf-capacity", {
    "text-anchor": "middle",
    "data-guide": "capacity-label"
  });
}
function De(e, t, n, a, r, o = 1) {
  const i = la(), s = ua(t), u = s.reduce((w, b) => w + b.capacityMw, 0), l = n.bottom - n.top, y = p("g", {
    opacity: a,
    "data-vintage-carrier": t,
    "data-parent-id": "joint-vintage-panel",
    "data-anchor": `${t} vintage region`,
    "data-scene-id": "bar-geometry-template"
  });
  r && I(y, n.labelX, 142, String(t), "e02-bottom-title", {
    "font-weight": 700,
    "text-anchor": "middle",
    "data-guide": "vintage-label"
  }), I(y, n.totalX + n.totalW / 2, n.subtitleY, "Total", "e02-kf-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subplot-title"
  }), I(y, n.statusX + n.statusW / 2, n.subtitleY, "By status", "e02-kf-subtitle", {
    "text-anchor": "middle",
    "data-guide": "subplot-title"
  }), y.appendChild(p("rect", {
    x: n.totalX,
    y: n.top,
    width: n.totalW,
    height: l,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.6,
    "data-guide": "frame"
  })), y.appendChild(p("rect", {
    x: n.statusX,
    y: n.top,
    width: n.statusW,
    height: l,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.6,
    "data-guide": "frame"
  }));
  const d = 10;
  dt(y, s, n.totalX + d, n.totalW - d * 2, n.top, l, u, t, "total", i, o);
  const c = new Map(z.map((w) => [
    w,
    s.filter((b) => b.status === w).reduce((b, g) => b + g.capacityMw, 0)
  ])), h = z.filter((w) => (c.get(w) ?? 0) > 0), m = n.statusW - d * 2 - n.statusGap * Math.max(0, h.length - 1);
  let C = n.statusX + d;
  for (const w of h) {
    const b = c.get(w) ?? 0, g = m * b / u, H = s.filter(($) => $.status === w);
    dt(y, H, C, g, n.top, l, b, t, "by-status", i, o), (w === "FID/Construction" ? ["FID/", "construction"] : w === "Feasibility study" ? ["Feasibility", "study"] : [w]).forEach(($, k) => I(y, C + g / 2, n.statusLabelY + k * 23, $, "e02-kf-status", {
      "text-anchor": "middle",
      "data-guide": "status-label"
    })), ct(y, C, C + g, n.bracketY, n.capacityY, b), C += g + n.statusGap;
  }
  return ct(y, n.totalX + d, n.totalX + n.totalW - d, n.bracketY, n.capacityY, u), e.appendChild(y), y;
}
function Nt(e, t) {
  const n = p("g", {
    "data-guide": "shared-axes",
    "data-scene-id": "bar-geometry-template",
    "data-parent-id": "joint-vintage-panel"
  });
  n.appendChild(p("path", {
    d: `M${t.axisX},${t.top}V${t.bottom}`,
    fill: "none",
    stroke: "#333",
    "stroke-width": 1.6
  }));
  for (const a of [0, 25, 50, 75, 100]) {
    const r = t.bottom - a / 100 * (t.bottom - t.top);
    n.appendChild(p("path", {
      d: `M${t.gridStartX},${r}H${t.gridEndX}`,
      stroke: "#e5e5e5",
      "stroke-width": 1,
      "data-guide": "gridline"
    })), n.appendChild(p("path", {
      d: `M${t.axisX - 8},${r}H${t.axisX}`,
      stroke: "#333",
      "stroke-width": 1,
      "data-guide": "tick"
    })), I(n, t.tickLabelX, r + 7, String(a), "e02-kf-tick", {
      "text-anchor": "end",
      "data-guide": "tick-label"
    });
  }
  I(n, t.titleX, t.titleY, "Share of capacity additions in 2023 (%)", "e02-kf-axis-title", {
    transform: `rotate(-90 ${t.titleX} ${t.titleY})`,
    "text-anchor": "middle",
    "data-guide": "axis-title",
    style: `font-size:${t.titleFontSize}px`
  }), e.appendChild(n);
}
function It(e, t) {
  const n = p("g", {
    transform: `translate(${t.x} ${t.y})`,
    "data-guide": "outcome",
    "data-scene-id": "outcome-guide",
    "data-parent-id": "joint-vintage-panel"
  });
  I(n, 0, 0, "Outcome", "e02-kf-subtitle", { "data-guide": "legend-title" }), ["Disappeared", "Delayed", "On time"].forEach((a, r) => {
    n.appendChild(p("rect", {
      x: 0,
      y: 24 + r * 39,
      width: 24,
      height: 24,
      fill: V[a],
      stroke: Y[a],
      "data-guide": "legend-swatch",
      "data-key": a
    })), I(n, 34, 44 + r * 39, a, "e02-kf-legend", { "data-guide": "legend-label" });
  }), e.appendChild(n);
}
function Pt(e, t, n, a) {
  n > 0 && I(e, 960, 76, "Announcements by vintage VERSUS outcome in 2024", "e02-title", {
    opacity: n,
    "text-anchor": "middle",
    "data-guide": "title"
  }), a > 0 && (I(e, 960, 115, "Announcements", "e02-kf-title", {
    opacity: a,
    "text-anchor": "middle",
    "data-guide": "title"
  }), I(e, 960, 151, `by ${t} VERSUS outcome in 2024`, "e02-kf-title", {
    opacity: a,
    "text-anchor": "middle",
    "data-guide": "title"
  }));
}
function da(e, t) {
  Pe(e), Se(e, Z, Q), e.setAttribute("viewBox", `0 0 ${Z} ${Q}`), e.setAttribute("role", "img"), e.setAttribute("aria-label", "Animated transition from panel bar (c), through the two-vintage LCM, to panel bar (d)"), e.classList.add("e02-root", "e02-keyframe"), e.setAttribute("data-transition", "ener02-fig3-bar-c-to-bar-d"), e.setAttribute("data-animation-progress", t.toFixed(6));
}
function ca(e, t) {
  const n = p("g", {
    "data-scene-id": "joint-vintage-panel",
    "data-keyframe-from": 0,
    "data-keyframe-to": 1
  }), a = G(t, 0, 0.72), r = G(t, 0.28, 1), o = 1 - G(t, 0, 0.36), i = G(t, 0.36, 0.72);
  Nt(n, kt(Dt, Ct, a)), De(n, 2022, Ft(bt, be[2022], a), 1, a > 0.62), De(n, 2023, be[2023], r, !0, r), It(n, xt(wt, Ht, a)), Pt(n, 2022, i, o), e.appendChild(n);
}
function ya(e, t) {
  const n = p("g", {
    "data-scene-id": "joint-vintage-panel",
    "data-keyframe-from": 1,
    "data-keyframe-to": 2
  }), a = G(t, 0, 0.82), r = G(t, 0.16, 0.78), o = 1 - G(t, 0.46, 0.72), i = G(t, 0.72, 1);
  Nt(n, kt(Ct, Dt, a));
  const s = De(n, 2022, be[2022], 1 - r, !0);
  s.setAttribute("transform", `translate(${-760 * r} 0)`), s.setAttribute("data-exit-edge", "left"), De(n, 2023, Ft(be[2023], bt, a), 1, 1 - G(t, 0.58, 0.94) > 0.01), It(n, xt(Ht, wt, a)), Pt(n, 2023, o, i), e.appendChild(n);
}
function pa(e, t) {
  const n = Et(t);
  if (n <= 1e-9) return de(e, 0);
  if (Math.abs(n - 0.5) <= 1e-9) return de(e, 1);
  if (n >= 1 - 1e-9) return de(e, 2);
  da(e, n), n < 0.5 ? ca(e, n * 2) : ya(e, (n - 0.5) * 2);
  const a = e.querySelectorAll('[data-mark="project-segment"]');
  if (a.length !== 354) throw new Error(`Transition mark mismatch: expected 354, received ${a.length}`);
  return e;
}
const fa = na.map((e, t) => Object.freeze({ index: t, ...e })), Da = At(
  Ut,
  {
    frame: Object.freeze({ width: Z, height: Q }),
    keyframes: fa,
    renderKeyframe: de,
    renderAnimation: pa
  }
);
export {
  na as KEYFRAMES,
  Q as KEYFRAME_H,
  fa as KEYFRAME_SEQUENCE,
  Z as KEYFRAME_W,
  Da as barCToBarDTransitionSpace,
  pa as renderBarCToBarDAnimation,
  de as renderKeyframe
};
