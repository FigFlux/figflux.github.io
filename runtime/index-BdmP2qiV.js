import { d as le } from "./transition-space-Df4GnxL9.js";
import { c as ce, w as de, e as j } from "./svg-DSCeB79j.js";
import { V as A, O as yt, P as se } from "./three.core-DAeQ9pKY.js";
const pe = "figure2story-transition-space/v1", ge = "heatmap-a-to-scatter-a", me = "soc05-fig1", he = {
  transition_id: "soc05-fig1 · heatmap (a) → scatter (a)",
  panel_i: "heatmap (a)",
  panel_j: "scatter (a)"
}, fe = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: "audit.ts"
}, ue = {
  width: 1920,
  height: 1080
}, ye = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel heatmap (a)",
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
    label: "Panel scatter (a)",
    progress: 1
  }
], be = {
  worlds: [
    {
      id: "joint-world",
      dimensions: 3,
      keyframe_indices: [
        1
      ]
    }
  ],
  cameras: [
    {
      id: "lcm-camera",
      world_id: "joint-world",
      projection: "perspective-32deg",
      keyframe_indices: [
        1
      ]
    }
  ],
  viewports: [
    {
      id: "frame-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "source-heatmap-panel",
      panel: "heatmap (a)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "heatmap (a).effect-tiles"
      ],
      position_fields: [
        "socioeconomic variable",
        "trade outcome"
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
      id: "complete-heatmap-plane",
      panel: "heatmap (a)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "heatmap (a).effect-tiles"
      ],
      position_fields: [
        "socioeconomic variable",
        "trade outcome"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "joint-world",
      camera_id: "lcm-camera"
    },
    {
      id: "mean-global-gdp-chart-plane",
      panel: "scatter (a)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "scatter (a).mean-global-gdp-points",
        "scatter (a).mean-global-gdp-fit-line",
        "scatter (a).mean-global-gdp-confidence-band"
      ],
      position_fields: [
        "x_normalized",
        "y_normalized",
        "linear fit geometry",
        "confidence band geometry"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Z"
      ],
      world_id: "joint-world",
      camera_id: "lcm-camera"
    },
    {
      id: "target-scatter-panel",
      panel: "scatter (a)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "scatter (a).mean-global-gdp-points",
        "scatter (a).mean-global-gdp-fit-line",
        "scatter (a).mean-global-gdp-confidence-band"
      ],
      position_fields: [
        "x_normalized",
        "y_normalized",
        "linear fit geometry",
        "confidence band geometry"
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
      id: "selected-cell-carrier",
      role: "value-correspondence-source",
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
            id: "source-heatmap-panel"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        }
      ]
    },
    {
      id: "heatmap-context-cells",
      role: "remaining-15-effect-tiles",
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
            id: "source-heatmap-panel"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "complete-heatmap-plane"
          }
        }
      ]
    },
    {
      id: "matrix-labels",
      role: "heatmap-row-and-column-labels",
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
            id: "source-heatmap-panel"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "complete-heatmap-plane"
          }
        }
      ]
    },
    {
      id: "legend:effect_normalized:fill",
      role: "viewport-effect-legend",
      keyframe_indices: [
        0,
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1
          ],
          host: {
            kind: "viewport",
            id: "frame-viewport"
          }
        }
      ]
    },
    {
      id: "legend:timing:hatch",
      role: "viewport-timing-legend",
      keyframe_indices: [
        0,
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            0,
            1
          ],
          host: {
            kind: "viewport",
            id: "frame-viewport"
          }
        }
      ]
    },
    {
      id: "mean-global-gdp-points",
      role: "regression-points",
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
            id: "mean-global-gdp-chart-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-panel"
          }
        }
      ]
    },
    {
      id: "mean-global-gdp-fit-line",
      role: "linear-fit",
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
            id: "mean-global-gdp-chart-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-panel"
          }
        }
      ]
    },
    {
      id: "mean-global-gdp-confidence-band",
      role: "confidence-band",
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
            id: "mean-global-gdp-chart-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-panel"
          }
        }
      ]
    },
    {
      id: "chart-guides",
      role: "chart-axes-frame-and-titles",
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
            id: "mean-global-gdp-chart-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-panel"
          }
        }
      ]
    },
    {
      id: "cell-to-chart-hinge",
      role: "structural-hinge-contained-within-selected-cell",
      keyframe_indices: [
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        }
      ]
    },
    {
      id: "cell-to-chart-connector",
      role: "contained-contact-neck-expanding-outside-carrier",
      keyframe_indices: [
        1
      ],
      hosts: [
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        }
      ]
    },
    {
      id: "declared-cell-to-chart-correspondence",
      role: "value-level-correspondence",
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
            id: "source-heatmap-panel"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "joint-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-scatter-panel"
          }
        }
      ]
    }
  ]
}, xe = {
  schema_version: pe,
  id: ge,
  figure_id: me,
  pair: he,
  modules: fe,
  frame: ue,
  keyframes: ye,
  scene: be
}, we = `row,column,row_index,column_index,effect_normalized,fill,timing,center_x_px,center_y_px\r
trade-throughput,mean-global-gdp,0,0,0.193,#ffd7c9,lagged,476,319\r
trade-throughput,mean-global-gdp-per-capita,0,1,-0.018,#fcfdfe,lagged,594,319\r
trade-throughput,global-gdp-inequality,0,2,0.053,#fff4f0,lagged,711,319\r
trade-throughput,global-gdp-per-capita-inequality,0,3,-0.579,#97b3d2,lagged,829,319\r
trade-network-connectance,mean-global-gdp,1,0,0.111,#ffe7df,lagged,476,441\r
trade-network-connectance,mean-global-gdp-per-capita,1,1,0.099,#ffece6,lagged,594,441\r
trade-network-connectance,global-gdp-inequality,1,2,0.205,#ffd4c5,lagged,711,441\r
trade-network-connectance,global-gdp-per-capita-inequality,1,3,0.953,#ff2600,lagged,829,441\r
trade-link-density,mean-global-gdp,2,0,0.041,#fff5f2,lagged,476,563\r
trade-link-density,mean-global-gdp-per-capita,2,1,0.064,#fff3ee,lagged,594,563\r
trade-link-density,global-gdp-inequality,2,2,0.216,#ffd2c2,lagged,711,563\r
trade-link-density,global-gdp-per-capita-inequality,2,3,0.93,#ff2604,lagged,829,563\r
total-trade-links,mean-global-gdp,3,0,-0.895,#5087b7,current,476,685\r
total-trade-links,mean-global-gdp-per-capita,3,1,-0.59,#91afd0,current,594,685\r
total-trade-links,global-gdp-inequality,3,2,0.801,#ff4f30,current,711,685\r
total-trade-links,global-gdp-per-capita-inequality,3,3,0.696,#ff6f4d,lagged,829,685\r
`, ke = `plot,point,x_px,y_px,x_normalized,y_normalized\r
mean-global-gdp,1,87,1048,0.078261,0.269697\r
mean-global-gdp,2,178,1056,0.473913,0.293939\r
mean-global-gdp,3,223,1064,0.669565,0.318182\r
mean-global-gdp,4,270,1078,0.873913,0.360606\r
mean-global-gdp,5,188,1081,0.517391,0.369697\r
mean-global-gdp,6,166,1085,0.421739,0.381818\r
mean-global-gdp,7,244,1103,0.76087,0.436364\r
mean-global-gdp,8,98,1104,0.126087,0.439394\r
mean-global-gdp,9,263,1105,0.843478,0.442424\r
mean-global-gdp,10,155,1106,0.373913,0.445455\r
mean-global-gdp,11,207,1108,0.6,0.451515\r
mean-global-gdp,12,196,1116,0.552174,0.475758\r
mean-global-gdp,13,213,1140,0.626087,0.548485\r
mean-global-gdp,14,244,1156,0.76087,0.59697\r
mean-global-gdp,15,280,1210,0.917391,0.760606\r
mean-global-gdp,16,228,1255,0.691304,0.89697\r
mean-global-gdp,17,234,1108,0.717391,0.451515\r
mean-global-gdp,18,183,1066,0.495652,0.324242\r
mean-global-gdp,19,170,1064,0.43913,0.318182\r
mean-global-gdp,20,234,1161,0.717391,0.612121\r
mean-global-gdp-per-capita,1,381,1029,0.082251,0.212121\r
mean-global-gdp-per-capita,2,438,1038,0.329004,0.239394\r
mean-global-gdp-per-capita,3,427,1043,0.281385,0.254545\r
mean-global-gdp-per-capita,4,492,1047,0.562771,0.266667\r
mean-global-gdp-per-capita,5,514,1062,0.658009,0.312121\r
mean-global-gdp-per-capita,6,464,1066,0.441558,0.324242\r
mean-global-gdp-per-capita,7,432,1090,0.30303,0.39697\r
mean-global-gdp-per-capita,8,401,1091,0.168831,0.4\r
mean-global-gdp-per-capita,9,521,1092,0.688312,0.40303\r
mean-global-gdp-per-capita,10,485,1093,0.532468,0.406061\r
mean-global-gdp-per-capita,11,505,1094,0.619048,0.409091\r
mean-global-gdp-per-capita,12,573,1094,0.91342,0.409091\r
mean-global-gdp-per-capita,13,412,1103,0.21645,0.436364\r
mean-global-gdp-per-capita,14,460,1130,0.424242,0.518182\r
mean-global-gdp-per-capita,15,532,1147,0.735931,0.569697\r
mean-global-gdp-per-capita,16,492,1149,0.562771,0.575758\r
mean-global-gdp-per-capita,17,529,1206,0.722944,0.748485\r
mean-global-gdp-per-capita,18,474,1255,0.484848,0.89697\r
mean-global-gdp-per-capita,19,443,1048,0.350649,0.269697\r
mean-global-gdp-per-capita,20,469,1076,0.463203,0.354545\r
global-gdp-inequality,1,835,1051,0.813853,0.278788\r
global-gdp-inequality,2,802,1059,0.670996,0.30303\r
global-gdp-inequality,3,778,1063,0.5671,0.315152\r
global-gdp-inequality,4,759,1066,0.484848,0.324242\r
global-gdp-inequality,5,728,1067,0.350649,0.327273\r
global-gdp-inequality,6,673,1081,0.112554,0.369697\r
global-gdp-inequality,7,750,1084,0.445887,0.378788\r
global-gdp-inequality,8,783,1088,0.588745,0.390909\r
global-gdp-inequality,9,727,1105,0.34632,0.442424\r
global-gdp-inequality,10,858,1106,0.91342,0.445455\r
global-gdp-inequality,11,749,1108,0.441558,0.451515\r
global-gdp-inequality,12,776,1108,0.558442,0.451515\r
global-gdp-inequality,13,717,1110,0.30303,0.457576\r
global-gdp-inequality,14,757,1118,0.47619,0.481818\r
global-gdp-inequality,15,749,1142,0.441558,0.554545\r
global-gdp-inequality,16,679,1157,0.138528,0.6\r
global-gdp-inequality,17,741,1159,0.406926,0.606061\r
global-gdp-inequality,18,740,1210,0.402597,0.760606\r
global-gdp-inequality,19,666,1255,0.082251,0.89697\r
global-gdp-inequality,20,732,1115,0.367965,0.472727\r
global-gdp-per-capita-inequality,1,994,1051,0.294372,0.278788\r
global-gdp-per-capita-inequality,2,1133,1059,0.896104,0.30303\r
global-gdp-per-capita-inequality,3,966,1063,0.17316,0.315152\r
global-gdp-per-capita-inequality,4,1024,1066,0.424242,0.324242\r
global-gdp-per-capita-inequality,5,1041,1067,0.497835,0.327273\r
global-gdp-per-capita-inequality,6,991,1081,0.281385,0.369697\r
global-gdp-per-capita-inequality,7,1068,1084,0.614719,0.378788\r
global-gdp-per-capita-inequality,8,1081,1088,0.670996,0.390909\r
global-gdp-per-capita-inequality,9,1058,1105,0.571429,0.442424\r
global-gdp-per-capita-inequality,10,999,1106,0.316017,0.445455\r
global-gdp-per-capita-inequality,11,1011,1107,0.367965,0.448485\r
global-gdp-per-capita-inequality,12,947,1110,0.090909,0.457576\r
global-gdp-per-capita-inequality,13,1016,1117,0.38961,0.478788\r
global-gdp-per-capita-inequality,14,1019,1142,0.402597,0.554545\r
global-gdp-per-capita-inequality,15,1046,1158,0.519481,0.60303\r
global-gdp-per-capita-inequality,16,1006,1159,0.34632,0.606061\r
global-gdp-per-capita-inequality,17,970,1210,0.190476,0.760606\r
global-gdp-per-capita-inequality,18,1010,1255,0.363636,0.89697\r
global-gdp-per-capita-inequality,19,1048,1110,0.528139,0.457576\r
global-gdp-per-capita-inequality,20,1058,1116,0.571429,0.475758\r
`, at = 1920, nt = 1080, Ae = [
  { index: 0, kind: "panel-i", label: "Panel heatmap (a)" },
  { index: 1, kind: "lcm", label: "Combined Data" },
  { index: 2, kind: "panel-j", label: "Panel scatter (a)" }
], Ut = (t) => {
  const e = t.trim().split(/\r?\n/), n = e[0].split(",");
  return e.slice(1).map((a) => Object.fromEntries(a.split(",").map((r, o) => [n[o], r])));
}, Kt = Ut(we).map((t) => ({
  row: t.row,
  column: t.column,
  rowIndex: Number(t.row_index),
  columnIndex: Number(t.column_index),
  effect: Number(t.effect_normalized),
  fill: t.fill,
  timing: t.timing
})), Yt = Ut(ke).filter((t) => t.plot === "mean-global-gdp").map((t) => ({ plot: t.plot, point: Number(t.point), x: Number(t.x_normalized), y: Number(t.y_normalized) })), St = "http://www.w3.org/2000/svg", g = (t, e = {}) => {
  const n = document.createElementNS(St, t);
  for (const [a, r] of Object.entries(e)) n.setAttribute(a, String(r));
  return n;
}, C = (t, e, n, a = {}) => g(t, { "data-scene-id": e, ...n ? { "data-parent-id": n } : {}, ...a }), L = (t, e, n, a, r = {}) => {
  const o = g("text", { x: e, y: n, ...r });
  return o.textContent = a, t.appendChild(o), o;
}, bt = 0.1, xt = 0.9, wt = 0.18, Ce = 0.42;
function $e() {
  const t = new yt();
  t.name = "joint-world", t.position.set(0, -0.42, 0);
  const e = new yt();
  e.name = "complete-heatmap-plane", t.add(e);
  const n = new yt();
  n.name = "cell-to-chart-hinge", t.add(n);
  const a = new yt();
  a.name = "mean-global-gdp-chart-plane", a.position.set(-0.54, 0, Ce), n.add(a), t.updateMatrixWorld(!0);
  const r = new se(32, at / nt, 0.1, 100);
  return r.position.set(8.1, 5.95, 10.4), r.up.set(0, 1, 0), r.lookAt(new A(2, 1.75, 1.25)), r.updateProjectionMatrix(), r.updateMatrixWorld(!0), { heatmap: e, chart: a, project: (i, l) => {
    const d = i.localToWorld(l.clone()), s = d.clone().applyMatrix4(r.matrixWorldInverse), x = d.clone().project(r);
    return { x: (x.x * 0.5 + 0.5) * at, y: (-x.y * 0.5 + 0.5) * nt, depth: -s.z };
  } };
}
const dt = (t) => t.map((e) => `${e.x.toFixed(2)},${e.y.toFixed(2)}`).join(" ");
function Xt(t) {
  const e = g("defs"), n = g("linearGradient", { id: "effect-ramp", x1: 0, y1: 0, x2: 1, y2: 0 });
  [["0%", "#4f94c8"], ["50%", "#fff"], ["100%", "#ff2600"]].forEach(([r, o]) => n.appendChild(g("stop", { offset: r, "stop-color": o }))), e.appendChild(n);
  const a = g("pattern", { id: "current-hatch", width: 12, height: 12, patternUnits: "userSpaceOnUse" });
  a.appendChild(g("path", { d: "M-3 3L3 -3M-3 15L15 -3M9 15L15 9", stroke: "#111", "stroke-width": 2.6, fill: "none" })), e.appendChild(a), t.appendChild(e);
}
const Zt = ["Trade throughput", "Trade network connectance", "Trade link density", "Total trade links"], Jt = [
  ["Mean global GDP"],
  ["Mean global", "per capita GDP"],
  ["Global GDP", "inequality"],
  ["Global per capita", "GDP inequality"]
];
function Qt(t, e) {
  const n = C("svg", "keyframe-root", null, {
    xmlns: St,
    width: at,
    height: nt,
    viewBox: `0 0 ${at} ${nt}`,
    "data-keyframe-index": t,
    "data-keyframe-kind": e,
    role: "img"
  });
  return n.style.background = "#fff", n.style.fontFamily = "Arial, Helvetica, sans-serif", Xt(n), n;
}
function _e() {
  const t = Qt(0, "panel-i"), e = 1.16, n = (at - 847 * e) / 2 - 50 * e, a = (nt - 748 * e) / 2 - 70 * e, r = C("g", "complete-heatmap-plane", null, {
    "data-panel": "heatmap-a",
    "data-geometry-ref": "renderer:complete-heatmap-panel",
    "data-structural-host": "panel-plane",
    transform: `translate(${n.toFixed(2)} ${a.toFixed(2)}) scale(${e})`,
    "data-local-transform": `uniform-scale(${e}) translate-source-composition`
  }), o = C("g", "heatmap-context-cells", "complete-heatmap-plane", {
    "data-mark": "effect-tile-group",
    "data-geometry-ref": "source-data:remaining-15-effect-tiles"
  }), i = C("g", "selected-cell-carrier", "complete-heatmap-plane", {
    "data-mark": "effect-tile",
    "data-key": "tile:total-trade-links:mean-global-gdp",
    "data-geometry-ref": "source-data:tile:total-trade-links:mean-global-gdp"
  });
  for (const u of Kt) {
    const M = [418, 536, 653, 770, 889], E = [258, 380, 502, 624, 748], y = M[u.columnIndex], m = E[u.rowIndex], _ = M[u.columnIndex + 1] - y, k = E[u.rowIndex + 1] - m, S = g("g", {
      "data-mark": "effect-tile",
      "data-key": `tile:${u.row}:${u.column}`,
      "data-effect": u.effect,
      "data-timing": u.timing
    });
    S.appendChild(g("rect", { x: y, y: m, width: _ - 1, height: k - 1, fill: u.fill })), u.timing === "current" && S.appendChild(g("rect", { x: y + 1, y: m + 1, width: _ - 3, height: k - 3, fill: "url(#current-hatch)" })), u.row === "total-trade-links" && u.column === "mean-global-gdp" ? i.appendChild(S) : o.appendChild(S);
  }
  r.appendChild(o), r.appendChild(i), r.appendChild(g("rect", { x: 407, y: 245, width: 490, height: 512, fill: "none", stroke: "#222", "stroke-width": 2 }));
  const l = C("g", "heatmap-guides", "complete-heatmap-plane", {
    "data-guide": "heatmap-guides",
    "data-geometry-ref": "renderer:effect-colour-scale+matrix-labels+timing-legend",
    "data-structural-host": "panel-plane"
  }), d = C("g", "matrix-labels", "heatmap-guides", { "data-guide": "matrix-labels" }), s = [319, 441, 563, 686];
  Zt.forEach((u, M) => L(d, 395, s[M] + 9, u, {
    "font-size": 22,
    "font-weight": 700,
    "text-anchor": "end"
  })), Jt.forEach((u, M) => {
    const E = [418, 536, 653, 770, 889], y = (E[M] + E[M + 1]) / 2 - 20, m = 235, _ = g("text", { x: y, y: m, "font-size": 21, "font-weight": 700, transform: `rotate(-45 ${y} ${m})`, "text-anchor": "start" });
    u.forEach((k, S) => {
      const T = g("tspan", { x: y, dy: S === 0 ? 0 : 23 });
      T.textContent = k, _.appendChild(T);
    }), d.appendChild(_);
  }), l.appendChild(d);
  const x = C("g", "legend:effect_normalized:fill", "heatmap-guides", { "data-guide": "effect-colour-scale" });
  L(x, 50, 94, "Effect of higher value on trade", { "font-size": 24, "font-weight": 700 }), x.appendChild(g("rect", { x: 119, y: 119, width: 171, height: 30, fill: "url(#effect-ramp)" })), x.appendChild(g("path", { d: "M119 157V150H290V157M204.5 150V159", stroke: "#111", "stroke-width": 5, fill: "none" })), L(x, 119, 182, "Lower trade", { "font-size": 16, "text-anchor": "middle" }), L(x, 204.5, 182, "0", { "font-size": 16, "text-anchor": "middle" }), L(x, 290, 182, "Higher trade", { "font-size": 16, "text-anchor": "middle" }), L(x, 119, 204, "activity/connectivity", { "font-size": 15, "text-anchor": "middle" }), L(x, 290, 204, "activity/connectivity", { "font-size": 15, "text-anchor": "middle" }), l.appendChild(x);
  const f = C("g", "legend:timing:hatch", "heatmap-guides", { "data-guide": "timing-legend" });
  f.appendChild(g("rect", { x: 418, y: 773, width: 45, height: 45, fill: "#fff", stroke: "#222", "stroke-width": 2 })), f.appendChild(g("rect", { x: 420, y: 775, width: 41, height: 41, fill: "url(#current-hatch)" })), L(f, 476, 806, "Current", { "font-size": 17 }), f.appendChild(g("rect", { x: 593, y: 773, width: 45, height: 45, fill: "#fff", stroke: "#222", "stroke-width": 2 })), L(f, 650, 806, "Lagged", { "font-size": 17 }), l.appendChild(f), r.appendChild(l);
  const h = C("g", "declared-cell-to-chart-correspondence", "complete-heatmap-plane", {
    "data-geometry-ref": "GCD:[total-trade-links,mean-global-gdp]",
    "data-key": "total-trade-links|mean-global-gdp"
  });
  return h.appendChild(g("rect", { x: 417, y: 623, width: 119, height: 125, fill: "none", stroke: "#111", "stroke-width": 4 })), r.appendChild(h), t.appendChild(r), t;
}
function Fe(t, e, n, a, r, o) {
  const i = n + 92, l = a + 74, d = r - 130, s = o - 154, x = (m, _) => ({ x: i + m * d, y: l + _ * s }), f = g("g", { "data-layer": "under" });
  f.appendChild(g("rect", { x: i, y: l, width: d, height: s, fill: "#fff" })), [0.25, 0.5, 0.75].forEach((m) => {
    f.appendChild(g("path", { d: `M${i + m * d} ${l}V${l + s}`, stroke: "#dfe3e6", "stroke-width": 1.5 })), f.appendChild(g("path", { d: `M${i} ${l + m * s}H${i + d}`, stroke: "#dfe3e6", "stroke-width": 1.5 }));
  }), t.appendChild(f);
  const h = C("polygon", "mean-global-gdp-confidence-band", e, {
    points: [[0, 0.17], [1, 0.56], [1, 0.84], [0, 0.36]].map(([m, _]) => {
      const k = x(m, _);
      return `${k.x},${k.y}`;
    }).join(" "),
    fill: "#dbe9f4",
    "fill-opacity": 0.78,
    "data-mark": "confidence-band",
    "data-key": "mean-global-gdp",
    "data-geometry-ref": "rendererGeometry:mean-global-gdp:confidence-band"
  });
  t.appendChild(h);
  const u = x(0, 0.26), M = x(1, 0.7);
  t.appendChild(C("path", "mean-global-gdp-fit-line", e, {
    d: `M${u.x} ${u.y}L${M.x} ${M.y}`,
    fill: "none",
    stroke: "#202428",
    "stroke-width": 3,
    "data-mark": "linear-fit",
    "data-key": "mean-global-gdp",
    "data-geometry-ref": "rendererGeometry:mean-global-gdp:linear-fit"
  }));
  const E = C("g", "mean-global-gdp-points", e, {
    "data-mark": "regression-point-group",
    "data-geometry-ref": "source-data:mean-global-gdp-points"
  });
  for (const m of Yt) {
    const _ = x(m.x, m.y);
    E.appendChild(g("circle", {
      cx: _.x,
      cy: _.y,
      r: 8.2,
      fill: "#3c4850",
      stroke: "#111",
      "stroke-width": 1.2,
      "fill-opacity": 0.92,
      "data-mark": "regression-point",
      "data-key": `regression:${m.plot}:${m.point}`
    }));
  }
  t.appendChild(E);
  const y = C("g", "chart-guides", e, { "data-guide": "chart-axes-frame-and-titles" });
  y.appendChild(g("rect", { x: i, y: l, width: d, height: s, fill: "none", stroke: "#222", "stroke-width": 2.2 })), ["−1", "0", "1", "2"].forEach((m, _) => {
    const k = i + _ / 3 * d;
    y.appendChild(g("path", { d: `M${k} ${l + s}v9`, stroke: "#222", "stroke-width": 2 })), L(y, k, l + s + 34, m, { "font-size": 20, "text-anchor": "middle" });
  }), ["2", "0", "−2"].forEach((m, _) => {
    const k = l + _ / 2 * s;
    y.appendChild(g("path", { d: `M${i - 9} ${k}h9`, stroke: "#222", "stroke-width": 2 })), L(y, i - 16, k + 7, m, { "font-size": 20, "text-anchor": "end" });
  }), L(y, n + r / 2, a + o - 16, "Mean global GDP", { "font-size": 27, "font-weight": 700, "text-anchor": "middle", "data-guide": "title:socioeconomic-variable:text" }), L(y, n + 18, a + 34, "Total trade links", { "font-size": 27, "font-weight": 700, "data-annotation": "trade-outcome" }), t.appendChild(y);
}
function Me() {
  const t = Qt(2, "panel-j"), e = C("g", "mean-global-gdp-chart-plane", null, {
    "data-panel": "scatter-a",
    "data-geometry-ref": "renderer:mean-global-gdp-regression-chart",
    "data-structural-host": "panel-plane"
  }), n = C("g", "target-scatter-panel", null, {
    "data-panel": "scatter-a",
    "data-geometry-ref": "renderer:single-mean-global-gdp-regression-chart",
    "data-structural-host": "panel-plane"
  });
  Fe(n, "target-scatter-panel", 665, 133, 590, 814);
  const a = C("g", "declared-cell-to-chart-correspondence", "target-scatter-panel", {
    "data-geometry-ref": "GCD:[total-trade-links,mean-global-gdp]",
    "data-key": "total-trade-links|mean-global-gdp"
  });
  return a.appendChild(g("rect", { x: 665, y: 133, width: 590, height: 814, fill: "none", stroke: "transparent" })), n.appendChild(a), e.appendChild(n), t.appendChild(e), t;
}
function Pe() {
  const t = C("svg", "keyframe-root", null, {
    xmlns: St,
    width: at,
    height: nt,
    viewBox: `0 0 ${at} ${nt}`,
    "data-keyframe-index": 1,
    "data-keyframe-kind": "lcm",
    role: "img"
  });
  t.style.background = "#fff", t.style.fontFamily = "Arial, Helvetica, sans-serif", Xt(t);
  const { heatmap: e, chart: n, project: a } = $e(), r = 2.08, o = 2.25, i = C("g", "cell-to-chart-connector", "cell-to-chart-hinge", {
    "data-geometry-ref": "candidate:heatmap-xy-chart-xz-cell-hinge:contained-contact",
    "data-structural-host": "world",
    "data-contact-footprint": "selected-cell:80%"
  }), l = [
    a(e, new A(bt, 0, 0)),
    a(e, new A(xt, 0, 0)),
    a(e, new A(xt, 0, wt)),
    a(e, new A(bt, 0, wt))
  ], d = [
    a(e, new A(bt, 0, wt)),
    a(e, new A(xt, 0, wt)),
    a(n, new A(r, 0, 0)),
    a(n, new A(0, 0, 0))
  ];
  i.appendChild(g("polygon", {
    points: dt(l),
    fill: "#eef3f6",
    stroke: "#222",
    "stroke-width": 2.2
  })), i.appendChild(g("polygon", {
    points: dt(d),
    fill: "#f6f8fa",
    stroke: "#222",
    "stroke-width": 2.2
  }));
  const s = C("g", "mean-global-gdp-chart-plane", "cell-to-chart-hinge", {
    "data-panel": "scatter-a",
    "data-geometry-ref": "renderer:mean-global-gdp-regression-chart",
    "data-structural-host": "world"
  }), x = [
    a(n, new A(0, 0, 0)),
    a(n, new A(r, 0, 0)),
    a(n, new A(r, 0, o)),
    a(n, new A(0, 0, o))
  ];
  s.appendChild(g("polygon", { points: dt(x), fill: "#fbfcfd", stroke: "#222", "stroke-width": 2.4 }));
  const f = (w, q) => a(n, new A(0.13 + w * (r - 0.26), 0, 0.14 + q * (o - 0.28))), h = C("g", "chart-grid", "mean-global-gdp-chart-plane", { "data-guide": "chart-grid" });
  [0.25, 0.5, 0.75].forEach((w) => {
    const q = f(w, 0), G = f(w, 1), N = f(0, w), R = f(1, w);
    h.appendChild(g("path", { d: `M${q.x} ${q.y}L${G.x} ${G.y}`, stroke: "#dfe3e6", "stroke-width": 1.2 })), h.appendChild(g("path", { d: `M${N.x} ${N.y}L${R.x} ${R.y}`, stroke: "#dfe3e6", "stroke-width": 1.2 }));
  }), s.appendChild(h), s.appendChild(C("polygon", "mean-global-gdp-confidence-band", "mean-global-gdp-chart-plane", {
    points: dt([[0, 0.17], [1, 0.56], [1, 0.84], [0, 0.36]].map(([w, q]) => f(w, q))),
    fill: "#dbe9f4",
    "fill-opacity": 0.78,
    "data-mark": "confidence-band",
    "data-key": "mean-global-gdp",
    "data-geometry-ref": "rendererGeometry:mean-global-gdp:confidence-band"
  }));
  const u = f(0, 0.26), M = f(1, 0.7);
  s.appendChild(C("path", "mean-global-gdp-fit-line", "mean-global-gdp-chart-plane", {
    d: `M${u.x} ${u.y}L${M.x} ${M.y}`,
    fill: "none",
    stroke: "#202428",
    "stroke-width": 3,
    "data-mark": "linear-fit",
    "data-key": "mean-global-gdp",
    "data-geometry-ref": "rendererGeometry:mean-global-gdp:linear-fit"
  }));
  const E = C("g", "mean-global-gdp-points", "mean-global-gdp-chart-plane", {
    "data-mark": "regression-point-group",
    "data-geometry-ref": "source-data:mean-global-gdp-points"
  });
  for (const w of Yt) {
    const q = f(w.x, w.y);
    E.appendChild(g("circle", {
      cx: q.x,
      cy: q.y,
      r: 5.4,
      fill: "#3c4850",
      stroke: "#111",
      "stroke-width": 1.1,
      "fill-opacity": 0.92,
      "data-mark": "regression-point",
      "data-key": `regression:${w.plot}:${w.point}`
    }));
  }
  s.appendChild(E);
  const y = C("g", "chart-guides", "mean-global-gdp-chart-plane", { "data-guide": "chart-axes-frame-and-titles" });
  ["−1", "0", "1", "2"].forEach((w, q) => {
    const G = q / 3, N = a(n, new A(0.13 + G * (r - 0.26), 0, o - 0.08)), R = a(n, new A(0.13 + G * (r - 0.26), 0, o - 0.16));
    y.appendChild(g("path", { d: `M${N.x} ${N.y}L${R.x} ${R.y}`, stroke: "#222", "stroke-width": 1.5 })), L(y, N.x, N.y + 19, w, { "font-size": 14, "text-anchor": "middle" });
  }), ["2", "0", "−2"].forEach((w, q) => {
    const G = q / 2, N = a(n, new A(0.08, 0, 0.14 + G * (o - 0.28)));
    L(y, N.x - 12, N.y + 5, w, { "font-size": 14, "text-anchor": "end" });
  });
  const m = f(0, 1), _ = f(1, 1), k = Math.atan2(_.y - m.y, _.x - m.x) * 180 / Math.PI, S = a(n, new A(r / 2, 0, o + 0.22));
  L(y, S.x, S.y, "Mean global GDP", {
    "font-size": 22,
    "font-weight": 700,
    "text-anchor": "middle",
    transform: `rotate(${k.toFixed(2)} ${S.x} ${S.y})`,
    "data-guide": "title:socioeconomic-variable:text"
  });
  const T = a(n, new A(0, 0, 0.35)), I = a(n, new A(0, 0, o - 0.35)), H = Math.atan2(I.y - T.y, I.x - T.x) * 180 / Math.PI, D = a(n, new A(-0.17, 0, o * 0.57));
  L(y, D.x, D.y, "Total trade links", {
    "font-size": 17,
    "font-weight": 700,
    "text-anchor": "middle",
    transform: `rotate(${H.toFixed(2)} ${D.x} ${D.y})`,
    "data-annotation": "trade-outcome"
  }), s.appendChild(y);
  const F = C("g", "joint-world", null, { "data-geometry-ref": "candidate:heatmap-xy-chart-xz-cell-hinge", "data-structural-host": "world" }), P = C("g", "complete-heatmap-plane", "joint-world", {
    "data-panel": "heatmap-a",
    "data-geometry-ref": "renderer:complete-heatmap-panel",
    "data-structural-host": "world"
  }), b = C("g", "heatmap-context-cells", "complete-heatmap-plane", {
    "data-mark": "effect-tile-group",
    "data-geometry-ref": "source-data:remaining-15-effect-tiles"
  }), v = C("g", "selected-cell-carrier", "cell-to-chart-hinge", {
    "data-mark": "effect-tile",
    "data-key": "tile:total-trade-links:mean-global-gdp",
    "data-geometry-ref": "source-data:tile:total-trade-links:mean-global-gdp"
  });
  for (const w of Kt) {
    const q = w.columnIndex, G = w.columnIndex + 0.985, N = 4 - w.rowIndex, R = N - 0.985, ct = [
      a(e, new A(q, R, 0)),
      a(e, new A(G, R, 0)),
      a(e, new A(G, N, 0)),
      a(e, new A(q, N, 0))
    ], ot = g("g", {
      "data-mark": "effect-tile",
      "data-key": `tile:${w.row}:${w.column}`,
      "data-effect": w.effect,
      "data-timing": w.timing
    });
    ot.appendChild(g("polygon", { points: dt(ct), fill: w.fill, stroke: "#fff", "stroke-width": 1.2 })), w.timing === "current" && ot.appendChild(g("polygon", { points: dt(ct), fill: "url(#current-hatch)" })), w.row === "total-trade-links" && w.column === "mean-global-gdp" ? v.appendChild(ot) : b.appendChild(ot);
  }
  P.appendChild(b);
  const J = C("g", "cell-to-chart-hinge", "joint-world", {
    "data-geometry-ref": "candidate:heatmap-xy-chart-xz-cell-hinge",
    "data-structural-host": "world"
  });
  J.append(i, s, v);
  const Z = [
    a(e, new A(0, 0, 0)),
    a(e, new A(4, 0, 0)),
    a(e, new A(4, 4, 0)),
    a(e, new A(0, 4, 0))
  ];
  P.appendChild(g("polygon", { points: dt(Z), fill: "none", stroke: "#222", "stroke-width": 2.5 }));
  const B = C("g", "heatmap-guides", "complete-heatmap-plane", {
    "data-guide": "matrix-labels",
    "data-geometry-ref": "renderer:effect-colour-scale+matrix-labels+timing-legend"
  });
  Zt.forEach((w, q) => {
    const G = a(e, new A(-0.13, 3.5 - q, 0));
    L(B, G.x, G.y + 7, w, { "font-size": 20, "font-weight": 700, "text-anchor": "end" });
  }), Jt.forEach((w, q) => {
    const G = a(e, new A(q + 0.45, 4.1, 0)), N = a(e, new A(q, 4.16, 0)), R = a(e, new A(q + 1, 4.16, 0)), ct = Math.atan2(R.y - N.y, R.x - N.x) * 180 / Math.PI - 39, ot = g("text", {
      x: G.x,
      y: G.y,
      "font-size": 17,
      "font-weight": 700,
      transform: `rotate(${ct.toFixed(2)} ${G.x} ${G.y})`,
      "text-anchor": "start"
    });
    w.forEach((gt, _t) => {
      const mt = g("tspan", { x: G.x, dy: _t === 0 ? 0 : 19 });
      mt.textContent = gt, ot.appendChild(mt);
    }), B.appendChild(ot);
  }), P.appendChild(B), F.appendChild(J), F.appendChild(P), t.appendChild(F);
  const Q = C("g", "viewport-guides", "keyframe-root", { "data-structural-host": "viewport", transform: "translate(40 0)" }), c = C("g", "legend:effect_normalized:fill", "viewport-guides", { "data-guide": "effect-colour-scale" });
  L(c, 88, 106, "Effect of higher value on trade", { "font-size": 24, "font-weight": 700 }), c.appendChild(g("rect", { x: 88, y: 126, width: 260, height: 30, fill: "url(#effect-ramp)" })), c.appendChild(g("path", { d: "M88 167V158H348V167M218 158V170", stroke: "#111", "stroke-width": 3, fill: "none" })), L(c, 88, 190, "Lower trade", { "font-size": 16, "text-anchor": "middle" }), L(c, 218, 190, "0", { "font-size": 16, "text-anchor": "middle" }), L(c, 348, 190, "Higher trade", { "font-size": 16, "text-anchor": "middle" }), Q.appendChild(c);
  const $ = C("g", "legend:timing:hatch", "viewport-guides", { "data-guide": "timing-legend" });
  $.appendChild(g("rect", { x: 90, y: 238, width: 38, height: 38, fill: "#fff", stroke: "#222", "stroke-width": 2 })), $.appendChild(g("rect", { x: 92, y: 240, width: 34, height: 34, fill: "url(#current-hatch)" })), L($, 140, 264, "Current", { "font-size": 17 }), $.appendChild(g("rect", { x: 232, y: 238, width: 38, height: 38, fill: "#fff", stroke: "#222", "stroke-width": 2 })), L($, 282, 264, "Lagged", { "font-size": 17 }), Q.appendChild($), t.appendChild(Q);
  const z = C("g", "declared-cell-to-chart-correspondence", "cell-to-chart-hinge", {
    "data-geometry-ref": "GCD:[total-trade-links,mean-global-gdp]",
    "data-key": "total-trade-links|mean-global-gdp",
    "data-contact-footprint": "selected-cell:80%"
  }), U = a(e, new A(bt, 0, 0)), rt = a(e, new A(xt, 0, 0));
  return z.appendChild(g("path", {
    d: `M${U.x} ${U.y}L${rt.x} ${rt.y}`,
    stroke: "#111",
    "stroke-width": 5,
    fill: "none"
  })), J.appendChild(z), t;
}
function Ct(t) {
  if (t === 0) return _e();
  if (t === 1) return Pe();
  if (t === 2) return Me();
  throw new RangeError(`Unknown keyframe index: ${t}`);
}
function qe(t, e) {
  return Array.from(t.querySelectorAll(`[data-scene-id="${e}"]`));
}
function tt(t, e) {
  return qe(t, e)[0] ?? null;
}
function ve(t) {
  const e = [];
  let n = t;
  for (; n; )
    n.hasAttribute("data-structural-host") && e.push(n), n = n.parentElement;
  return e;
}
function It(t) {
  if (t.some((n) => !n)) return null;
  const e = t.map((n) => ve(n));
  return e[0].find((n) => e.slice(1).every((a) => a.includes(n))) ?? null;
}
function Ft(t) {
  return t ? `${t.getAttribute("data-scene-id") ?? t.tagName}:${t.getAttribute("data-structural-host") ?? "untyped"}` : "none";
}
function Ee(t, e) {
  return Array.from(t.querySelectorAll("[data-scene-id]")).filter((n) => {
    const a = n.getAttribute("data-scene-id") ?? "";
    return a === e || a.endsWith(`:${e}`);
  });
}
function Se(t) {
  var H, D, F, P;
  const e = [], n = Array.from(t.querySelectorAll("[data-scene-id]")), a = n.map((b) => b.getAttribute("data-scene-id") ?? ""), r = [...new Set(a.filter((b, v) => b && a.indexOf(b) !== v))];
  e.push({
    id: "unique-scene-identity",
    status: r.length === 0 ? "pass" : "fail",
    evidence: r.length === 0 ? `${a.length} unique scene ids` : `duplicates: ${r.join(", ")}`
  });
  const o = n.flatMap((b) => {
    var Z;
    const v = b.getAttribute("data-parent-id");
    return v ? ((Z = b.parentElement) == null ? void 0 : Z.closest(`[data-scene-id="${v}"]`)) ? [] : [`${b.getAttribute("data-scene-id")} -> ${v}`] : [];
  });
  e.push({
    id: "declared-parent-is-dom-ancestor",
    status: o.length === 0 ? "pass" : "fail",
    evidence: o.length === 0 ? "all declared parents are real ancestors" : `broken: ${o.join(", ")}`
  });
  const i = tt(t, "heatmap-context-cells"), l = tt(t, "complete-heatmap-frame"), d = It([i, l]), s = (d == null ? void 0 : d.getAttribute("data-transform-mode")) === "parent-matrix" && d.hasAttribute("transform");
  e.push({
    id: "heatmap-frame-and-cells-share-host",
    status: d !== null && s ? "pass" : "fail",
    evidence: `common host=${Ft(d)}; parent matrix=${s}`
  });
  const x = tt(t, "selected-cell-carrier"), f = tt(t, "mean-global-gdp-chart-plane"), h = It([x, f]), u = (h == null ? void 0 : h.getAttribute("data-transform-mode")) === "parent-matrix" && h.hasAttribute("transform");
  e.push({
    id: "selected-carrier-and-chart-share-parent-matrix",
    status: h !== null && u ? "pass" : "fail",
    evidence: `common host=${Ft(h)}; transform mode=${(h == null ? void 0 : h.getAttribute("data-transform-mode")) ?? "none"}`
  });
  const M = [
    "chart-surface",
    "chart-grid",
    "mean-global-gdp-confidence-band",
    "mean-global-gdp-fit-line",
    "mean-global-gdp-points"
  ], E = M.filter((b) => {
    const v = tt(t, b);
    return !v || !(f != null && f.contains(v));
  });
  e.push({
    id: "chart-local-structure",
    status: E.length === 0 ? "pass" : "fail",
    evidence: E.length === 0 ? `${M.length} chart members inherit chart plane` : `detached: ${E.join(", ")}`
  });
  const y = Array.from(t.querySelectorAll('[data-frame-owner="mean-global-gdp-chart-plane"]')), m = (x == null ? void 0 : x.getAttribute("data-carrier-role")) === "gcd-source-token", _ = M.every((b) => {
    var v;
    return ((v = tt(t, b)) == null ? void 0 : v.getAttribute("data-geometry-owner")) === "chart-carrier";
  });
  e.push({
    id: "single-chart-frame-and-geometry-owner",
    status: y.length === 1 && m && _ ? "pass" : "fail",
    evidence: `chart frame owners=${y.length}; selected is token=${m}; chart members owned=${_}`
  });
  const k = tt(t, "viewport-guide-host"), S = (k == null ? void 0 : k.getAttribute("data-transform-mode")) === "viewport-fixed";
  e.push({
    id: "viewport-guides-use-fixed-host",
    status: k !== null && S ? "pass" : "fail",
    evidence: `host=${Ft(k)}; transform mode=${(k == null ? void 0 : k.getAttribute("data-transform-mode")) ?? "none"}`
  });
  const T = [
    { id: "matrix-labels", expectedHost: d, label: "heatmap plane" },
    { id: "legend:effect_normalized:fill", expectedHost: k, label: "viewport" },
    { id: "legend:timing:hatch", expectedHost: k, label: "viewport" },
    { id: "chart-guides", expectedHost: f, label: "chart plane" }
  ];
  for (const { id: b, expectedHost: v, label: J } of T) {
    const Z = Ee(t, b), B = Z[0] ?? null, Q = B !== null && v !== null && v.contains(B), c = (B == null ? void 0 : B.getAttribute("data-transform-owner")) === (v == null ? void 0 : v.getAttribute("data-scene-id"));
    e.push({
      id: `persistent-${b}`,
      status: Z.length === 1 && Q && c ? "pass" : "fail",
      evidence: `${Z.length} materializations; attached to ${J}=${Q}; transform owner=${c}`
    });
  }
  const I = [
    (H = tt(t, "chart-surface")) == null ? void 0 : H.getAttribute("points"),
    (D = tt(t, "mean-global-gdp-fit-line")) == null ? void 0 : D.getAttribute("d"),
    (P = (F = tt(t, "mean-global-gdp-points")) == null ? void 0 : F.querySelector("circle")) == null ? void 0 : P.getAttribute("cx")
  ].some((b) => b != null);
  return e.push({
    id: "audit-runs-before-dynamic-draw",
    status: I ? "fail" : "pass",
    evidence: I ? "dynamic geometry was written before structural audit" : "persistent topology only; no dynamic geometry yet"
  }), {
    status: e.every((b) => b.status === "pass") ? "pass" : "fail",
    phase: "pre-render",
    checks: e
  };
}
const Lt = "tile:total-trade-links:mean-global-gdp", Le = "http://www.w3.org/2000/svg", Dt = /* @__PURE__ */ new WeakMap();
let kt = null;
const Gt = (t) => Math.max(0, Math.min(1, t)), vt = (t) => {
  const e = Gt(t);
  return e * e * (3 - 2 * e);
}, K = (t, e, n) => vt((t - e) / (n - e)), X = (t, e, n) => t + (e - t) * n, ut = (t, e, n) => ({
  x: X(t.x, e.x, n),
  y: X(t.y, e.y, n)
}), ft = (t, e, n) => t.map((a, r) => ut(a, e[r], n)), et = (t) => t.map(({ x: e, y: n }) => `${e.toFixed(3)},${n.toFixed(3)}`).join(" "), Mt = (t) => `M${t.map(({ x: e, y: n }) => `${e.toFixed(3)} ${n.toFixed(3)}`).join("L")}`, te = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }];
function Ot(t) {
  return t.length !== 4 ? t : [t[3], t[2], t[1], t[0]];
}
function Ge(t, e) {
  const n = t.map((a, r) => [...a, e[r]]);
  for (let a = 0; a < n.length; a++) {
    let r = a;
    for (let i = a + 1; i < n.length; i++)
      Math.abs(n[i][a]) > Math.abs(n[r][a]) && (r = i);
    [n[a], n[r]] = [n[r], n[a]];
    const o = n[a][a];
    if (Math.abs(o) < 1e-10) throw new Error("soc05 animation: singular carrier mapping");
    for (let i = a; i <= n.length; i++) n[a][i] /= o;
    for (let i = 0; i < n.length; i++) {
      if (i === a) continue;
      const l = n[i][a];
      for (let d = a; d <= n.length; d++) n[i][d] -= l * n[a][d];
    }
  }
  return n.map((a) => a[n.length]);
}
function ze(t, e) {
  if (t.length !== 4 || e.length !== 4) throw new Error("soc05 animation: carrier mapping requires four corners");
  const n = [], a = [];
  return t.forEach(({ x: r, y: o }, i) => {
    const l = e[i];
    n.push([r, o, 1, 0, 0, 0, -r * l.x, -o * l.x]), a.push(l.x), n.push([0, 0, 0, r, o, 1, -r * l.y, -o * l.y]), a.push(l.y);
  }), Ge(n, a);
}
function ee(t, e, n) {
  if (Math.abs(n.reduce((i, l, d) => {
    const s = n[(d + 1) % n.length];
    return i + l.x * s.y - s.x * l.y;
  }, 0) / 2) < 1e-6) return n.reduce((i, l) => ({ x: i.x + l.x / n.length, y: i.y + l.y / n.length }), { x: 0, y: 0 });
  const r = ze(e, n), o = r[6] * t.x + r[7] * t.y + 1;
  return {
    x: (r[0] * t.x + r[1] * t.y + r[2]) / o,
    y: (r[3] * t.x + r[4] * t.y + r[5]) / o
  };
}
function Rt(t, e) {
  return ee(t, te, e);
}
function pt(t, e) {
  return ee(t, e, te);
}
function Pt(t, e) {
  const n = t[1].x - t[0].x, a = t[3].y - t[0].y;
  if (Math.abs(n) < 1e-9 || Math.abs(a) < 1e-9) return "matrix(1 0 0 1 0 0)";
  const r = (e[1].x - e[0].x) / n, o = (e[1].y - e[0].y) / n, i = (e[3].x - e[0].x) / a, l = (e[3].y - e[0].y) / a, d = e[0].x - r * t[0].x - i * t[0].y, s = e[0].y - o * t[0].x - l * t[0].y;
  return `matrix(${r.toFixed(8)} ${o.toFixed(8)} ${i.toFixed(8)} ${l.toFixed(8)} ${d.toFixed(8)} ${s.toFixed(8)})`;
}
function Ne(t) {
  return ((t == null ? void 0 : t.match(/[-+]?\d*\.?\d+(?:e[-+]?\d+)?/gi)) ?? []).map(Number);
}
function st(t) {
  const e = Ne(t), n = [];
  for (let a = 0; a < e.length; a += 2) n.push({ x: e[a], y: e[a + 1] });
  return n;
}
function $t(t) {
  const e = (t == null ? void 0 : t.match(/[MLHVZmlhvz]|[-+]?\d*\.?\d+(?:e[-+]?\d+)?/g)) ?? [], n = [];
  let a = "", r = 0, o = { x: 0, y: 0 }, i = { x: 0, y: 0 };
  for (; r < e.length; ) {
    if (/^[MLHVZmlhvz]$/.test(e[r]) && (a = e[r++]), !a) throw new Error(`soc05 animation: malformed path ${t}`);
    const l = a === a.toLowerCase(), d = a.toUpperCase();
    if (d === "Z") {
      o = i, n.push(o), a = "";
      continue;
    }
    if (d === "H") {
      const s = Number(e[r++]);
      o = { x: l ? o.x + s : s, y: o.y };
    } else if (d === "V") {
      const s = Number(e[r++]);
      o = { x: o.x, y: l ? o.y + s : s };
    } else {
      const s = Number(e[r++]), x = Number(e[r++]);
      o = { x: l ? o.x + s : s, y: l ? o.y + x : x };
    }
    d === "M" && n.length === 0 && (i = o), n.push(o), d === "M" && (a = l ? "l" : "L");
  }
  return n;
}
function Vt(t) {
  const e = t.reduce((i, l) => i + l.canonical, 0) / t.length, n = t.reduce((i, l) => i + l.carrier, 0) / t.length, a = t.reduce((i, l) => i + (l.canonical - e) ** 2, 0);
  if (a < 1e-9) throw new Error("soc05 animation: insufficient canonical chart samples");
  const r = t.reduce((i, l) => i + (l.canonical - e) * (l.carrier - n), 0) / a, o = n - r * e;
  return { start: o, end: o + r };
}
function lt(t, e, n, a) {
  return [{ x: t, y: e }, { x: t + n, y: e }, { x: t + n, y: e + a }, { x: t, y: e + a }];
}
function V(t, e) {
  return Number(t.getAttribute(e) ?? 0);
}
function je(t) {
  const e = t == null ? void 0 : t.match(/translate\(\s*([-+\d.]+)[,\s]+([-+\d.]+)\s*\)/), n = t == null ? void 0 : t.match(/scale\(\s*([-+\d.]+)/);
  return { tx: Number((e == null ? void 0 : e[1]) ?? 0), ty: Number((e == null ? void 0 : e[2]) ?? 0), scale: Number((n == null ? void 0 : n[1]) ?? 1) };
}
function qt(t, e) {
  return lt(
    e.tx + V(t, "x") * e.scale,
    e.ty + V(t, "y") * e.scale,
    V(t, "width") * e.scale,
    V(t, "height") * e.scale
  );
}
function W(t, e) {
  const n = t.querySelector(`[data-scene-id="${e}"]`);
  if (!n) throw new Error(`soc05 animation: missing scene object ${e}`);
  return n;
}
function it(t, e) {
  const n = Array.from(t.children).find((a) => a.matches(e));
  if (!n) throw new Error(`soc05 animation: missing direct child ${e}`);
  return n;
}
function Te(t) {
  return Array.from(t.querySelectorAll('g[data-mark="effect-tile"][data-key]')).filter((e) => Array.from(e.children).some((n) => n.matches("rect,polygon")));
}
function Bt(t) {
  const e = /* @__PURE__ */ new Map();
  for (const n of Te(t)) {
    const a = n.getAttribute("data-key");
    a && !e.has(a) && e.set(a, n);
  }
  return e;
}
function At(t, e) {
  for (const n of [t, ...Array.from(t.querySelectorAll("[data-scene-id]"))]) {
    const a = n.getAttribute("data-scene-id");
    a && n.setAttribute("data-scene-id", `${e}:${a}`), n.removeAttribute("data-parent-id");
  }
  return t;
}
function Et(t, e, n = 0.025) {
  const a = t.reduce((r, o) => ({ x: r.x + o.x / t.length, y: r.y + o.y / t.length }), { x: 0, y: 0 });
  return t.map((r) => ({ x: e.x + (r.x - a.x) * n, y: e.y + (r.y - a.y) * n }));
}
function He() {
  if (kt) return kt;
  const t = Ct(0), e = Ct(1), n = Ct(2), a = W(t, "complete-heatmap-plane"), r = je(a.getAttribute("transform")), o = Bt(a), i = W(e, "complete-heatmap-plane"), l = Bt(e), d = W(n, "target-scatter-panel"), s = it(d, 'g[data-layer="under"]'), x = it(s, "rect"), f = V(x, "x"), h = V(x, "y"), u = V(x, "width"), M = V(x, "height"), E = lt(f, h, u, M), y = { x: 720, y: 890 }, m = Array.from(o.entries()).map(([p, O], ht) => {
    const jt = it(O, "rect"), Tt = l.get(p);
    if (!Tt) throw new Error(`soc05 animation: LCM lacks ${p}`);
    const re = it(Tt, "polygon"), oe = qt(jt, r), Ht = Ot(st(re.getAttribute("points"))), Wt = p === Lt, ie = Et(Ht, { x: y.x - ht % 4 * 4, y: y.y + Math.floor(ht / 4) * 4 });
    return {
      key: p,
      fill: jt.getAttribute("fill") ?? "#fff",
      timing: O.getAttribute("data-timing") ?? "lagged",
      source: oe,
      lcm: Ht,
      target: Wt ? E : ie,
      selected: Wt
    };
  });
  if (m.filter((p) => p.selected).length !== 1 || m.length !== 16)
    throw new Error(`soc05 animation: expected 1 selected + 15 context tiles, found ${m.length}`);
  const _ = lt(
    r.tx + 407 * r.scale,
    r.ty + 245 * r.scale,
    490 * r.scale,
    512 * r.scale
  ), k = Ot(st(it(i, 'polygon[fill="none"]').getAttribute("points"))), S = m.find((p) => p.selected).source, T = ut(S[0], S[2], 0.5), I = W(e, "cell-to-chart-connector"), H = Array.from(I.querySelectorAll(":scope > polygon")).map((p) => st(p.getAttribute("points"))), D = W(e, "mean-global-gdp-chart-plane"), F = it(D, "polygon:not([data-mark])"), P = W(e, "chart-grid"), b = Array.from(P.querySelectorAll(":scope > path")).map((p) => $t(p.getAttribute("d"))), v = [0.25, 0.5, 0.75].flatMap((p) => [
    [
      { x: f + p * u, y: h },
      { x: f + p * u, y: h + M }
    ],
    [
      { x: f, y: h + p * M },
      { x: f + u, y: h + p * M }
    ]
  ]);
  if (b.length !== 6 || v.length !== 6) throw new Error("soc05 animation: grid cardinality mismatch");
  const J = W(e, "mean-global-gdp-confidence-band"), Z = W(n, "mean-global-gdp-confidence-band"), B = W(e, "mean-global-gdp-fit-line"), Q = W(n, "mean-global-gdp-fit-line"), c = st(J.getAttribute("points")), $ = st(Z.getAttribute("points")), z = $t(B.getAttribute("d")), U = $t(Q.getAttribute("d")), rt = new Map(Array.from(W(e, "mean-global-gdp-points").querySelectorAll("circle[data-key]")).map((p) => [p.getAttribute("data-key"), p])), w = new Map(Array.from(W(n, "mean-global-gdp-points").querySelectorAll("circle[data-key]")).map((p) => [p.getAttribute("data-key"), p])), q = Array.from(rt.entries()).map(([p, O]) => {
    const ht = w.get(p);
    if (!ht) throw new Error(`soc05 animation: target lacks ${p}`);
    return {
      key: p,
      lcm: { x: V(O, "cx"), y: V(O, "cy") },
      target: { x: V(ht, "cx"), y: V(ht, "cy") }
    };
  });
  if (q.length !== 20) throw new Error(`soc05 animation: expected 20 mean-global-gdp records, found ${q.length}`);
  const G = st(F.getAttribute("points")), N = [
    ...q.map(({ lcm: p, target: O }) => ({ lcmPoint: p, targetPoint: O })),
    ...c.map((p, O) => ({ lcmPoint: p, targetPoint: $[O] })),
    ...z.map((p, O) => ({ lcmPoint: p, targetPoint: U[O] }))
  ].map(({ lcmPoint: p, targetPoint: O }) => ({
    canonical: pt(O, E),
    carrier: pt(p, G)
  })), R = Vt(N.map((p) => ({ canonical: p.canonical.x, carrier: p.carrier.x }))), ct = Vt(N.map((p) => ({ canonical: p.canonical.y, carrier: p.carrier.y }))), ot = {
    lcm: { left: R.start, right: R.end, top: ct.start, bottom: ct.end },
    target: { left: 0, right: 1, top: 0, bottom: 1 }
  }, gt = (p) => pt(p, E), _t = q.map(({ key: p, target: O }) => ({ key: p, canonical: gt(O) })), mt = W(a, "heatmap-guides"), ae = At(W(mt, "matrix-labels").cloneNode(!0), "animation-source"), zt = At(W(mt, "legend:effect_normalized:fill").cloneNode(!0), "animation-source"), Nt = At(W(mt, "legend:timing:hatch").cloneNode(!0), "animation-source"), ne = At(W(d, "chart-guides").cloneNode(!0), "animation-target");
  return kt = {
    tiles: m,
    sourceFrame: _,
    lcmFrame: k,
    connector: H,
    chartSurface: {
      source: Et(G, T, 0),
      lcm: G,
      target: E
    },
    chartPlotWindow: ot,
    grids: v.map((p) => ({ canonical: p.map(gt) })),
    band: { canonical: $.map(gt) },
    fit: { canonical: U.map(gt) },
    points: _t,
    sourceMatrixGuides: ae,
    sourceEffectLegend: zt,
    sourceTimingLegend: Nt,
    guideFrames: {
      effect: {
        source: qt(it(zt, "rect"), r),
        lcm: lt(128, 126, 260, 30)
      },
      timing: {
        source: qt(it(Nt, "rect"), r),
        lcm: lt(130, 238, 38, 38)
      }
    },
    targetChartGuides: ne,
    defs: it(e, "defs").cloneNode(!0)
  }, kt;
}
function We(t) {
  const e = t.selected ? "selected-cell" : "context-cell", n = t.selected ? "selected-cell-carrier" : `context-cell:${t.key}`, a = j("g", {
    "data-scene-id": n,
    "data-role": e,
    "data-mark": "effect-tile",
    "data-key": t.key,
    "data-effect-carrier": t.selected ? "scatter-record-set" : "context-only",
    "data-carrier-role": t.selected ? "gcd-source-token" : "heatmap-member",
    "data-geometry-owner": "heatmap-carrier"
  }), r = j("polygon", { fill: t.fill }), o = j("polygon", { fill: "url(#current-hatch)", opacity: t.timing === "current" ? 1 : 0 });
  return a.append(r, o), { group: a, body: r, hatch: o };
}
function Ie(t, e) {
  var D;
  ce(t), t.setAttribute("xmlns", Le), t.setAttribute("viewBox", `0 0 ${at} ${nt}`), t.setAttribute("role", "img"), t.setAttribute("data-transition-id", "heatmap-a-to-scatter-a"), t.setAttribute("data-scene-authority", "persistent-record-geometry"), t.style.background = "#fff", t.style.fontFamily = "Arial, Helvetica, sans-serif", t.appendChild(e.defs.cloneNode(!0)), de(t, at, nt);
  const n = j("g", {
    "data-scene-id": "transition-structural-host",
    "data-structural-host": "world",
    "data-transform-mode": "parent-matrix",
    transform: "matrix(1 0 0 1 0 0)"
  }), a = j("g", {
    "data-scene-id": "heatmap-panel-host",
    "data-parent-id": "transition-structural-host",
    "data-structural-host": "panel-plane",
    "data-transform-mode": "parent-matrix",
    transform: "matrix(1 0 0 1 0 0)"
  }), r = j("g", {
    "data-scene-id": "selected-chart-host",
    "data-parent-id": "transition-structural-host",
    "data-structural-host": "panel-plane",
    "data-transform-mode": "parent-matrix",
    transform: "matrix(1 0 0 1 0 0)"
  }), o = j("g", {
    "data-scene-id": "viewport-guide-host",
    "data-parent-id": "transition-structural-host",
    "data-structural-host": "viewport",
    "data-transform-mode": "viewport-fixed",
    transform: "matrix(1 0 0 1 0 0)"
  }), i = j("g", {
    "data-scene-id": "heatmap-context-cells",
    "data-parent-id": "heatmap-panel-host",
    "data-record-count": 15
  }), l = [];
  let d = null;
  for (const F of e.tiles) {
    const P = We(F);
    F.selected ? d = P : (l.push(P), i.appendChild(P.group));
  }
  if (!d) throw new Error("soc05 animation: selected cell was not created");
  d.group.setAttribute("data-parent-id", "selected-chart-host"), a.appendChild(i);
  const s = j("polygon", {
    "data-scene-id": "complete-heatmap-frame",
    "data-parent-id": "heatmap-panel-host",
    fill: "none",
    stroke: "#222",
    "data-frame-owner": "heatmap-panel-host",
    "data-geometry-owner": "heatmap-carrier"
  });
  a.appendChild(s);
  const x = j("g", { "data-scene-id": "cell-to-chart-connector", "data-parent-id": "selected-cell-carrier" }), f = e.connector.map((F, P) => {
    const b = j("polygon", {
      "data-scene-id": `connector-surface:${P}`,
      fill: P === 0 ? "#eef3f6" : "#f6f8fa",
      stroke: "#222",
      "stroke-width": 2.2
    });
    return x.appendChild(b), b;
  });
  d.group.appendChild(x);
  const h = j("g", {
    "data-scene-id": "mean-global-gdp-chart-plane",
    "data-parent-id": "selected-chart-host",
    "data-structural-host": "panel-plane",
    "data-transform-mode": "parent-matrix",
    transform: "matrix(1 0 0 1 0 0)",
    "data-panel": "scatter-a",
    "data-gcd-source-key": Lt,
    "data-gcd-record-rule": "plot=mean-global-gdp"
  }), u = j("polygon", {
    "data-scene-id": "chart-surface",
    "data-frame-owner": "mean-global-gdp-chart-plane",
    "data-geometry-owner": "chart-carrier",
    "data-canonical-order": "top-left top-right bottom-right bottom-left",
    "data-canonical-v": "0=plot-top;1=plot-bottom",
    fill: "#fbfcfd",
    stroke: "#222",
    "stroke-width": 2.4
  });
  h.appendChild(u);
  const M = j("g", { "data-scene-id": "chart-grid", "data-layer": "under", "data-geometry-owner": "chart-carrier" }), E = e.grids.map((F, P) => {
    const b = j("path", {
      "data-scene-id": `chart-grid:${P}`,
      "data-canonical-points": et(e.grids[P].canonical),
      fill: "none",
      stroke: "#dfe3e6",
      "stroke-width": 1.5
    });
    return M.appendChild(b), b;
  });
  h.appendChild(M);
  const y = j("polygon", {
    "data-scene-id": "mean-global-gdp-confidence-band",
    "data-mark": "confidence-band",
    "data-key": "mean-global-gdp",
    "data-geometry-owner": "chart-carrier",
    "data-canonical-points": et(e.band.canonical),
    fill: "#dbe9f4",
    "fill-opacity": 0.78
  }), m = j("path", {
    "data-scene-id": "mean-global-gdp-fit-line",
    "data-mark": "linear-fit",
    "data-key": "mean-global-gdp",
    "data-geometry-owner": "chart-carrier",
    "data-canonical-points": et(e.fit.canonical),
    fill: "none",
    stroke: "#202428",
    "stroke-width": 3
  });
  h.append(y, m);
  const _ = j("g", { "data-scene-id": "mean-global-gdp-points", "data-record-count": 20, "data-geometry-owner": "chart-carrier" }), k = e.points.map((F) => {
    const P = j("circle", {
      "data-scene-id": `scatter-point:${F.key}`,
      "data-mark": "regression-point",
      "data-key": F.key,
      fill: "#3c4850",
      stroke: "#111",
      "stroke-width": 1.2,
      "data-canonical-u": F.canonical.x.toFixed(8),
      "data-canonical-v": F.canonical.y.toFixed(8)
    });
    return _.appendChild(P), P;
  });
  h.appendChild(_);
  const S = e.sourceMatrixGuides.cloneNode(!0);
  S.setAttribute("data-parent-id", "heatmap-panel-host"), S.setAttribute("data-transform-owner", "heatmap-panel-host"), a.appendChild(S);
  const T = e.sourceEffectLegend.cloneNode(!0);
  T.setAttribute("data-parent-id", "viewport-guide-host"), T.setAttribute("data-transform-owner", "viewport-guide-host"), o.appendChild(T);
  const I = e.sourceTimingLegend.cloneNode(!0);
  I.setAttribute("data-parent-id", "viewport-guide-host"), I.setAttribute("data-transform-owner", "viewport-guide-host"), o.appendChild(I);
  const H = e.targetChartGuides.cloneNode(!0);
  H.setAttribute("data-parent-id", "mean-global-gdp-chart-plane"), H.setAttribute("data-transform-owner", "mean-global-gdp-chart-plane"), (D = Array.from(H.children).find((F) => F.matches("rect"))) == null || D.remove();
  for (const F of Array.from(H.querySelectorAll(":scope > path"))) {
    const P = $t(F.getAttribute("d")).map((b) => pt(b, e.chartSurface.target));
    F.setAttribute("data-canonical-points", et(P));
  }
  for (const F of Array.from(H.querySelectorAll(":scope > text"))) {
    const P = pt({ x: V(F, "x"), y: V(F, "y") }, e.chartSurface.target);
    F.setAttribute("data-canonical-u", P.x.toFixed(8)), F.setAttribute("data-canonical-v", P.y.toFixed(8));
  }
  return h.appendChild(H), r.append(d.group, h), n.append(r, a, o), t.appendChild(n), {
    root: t,
    context: l,
    selected: d,
    heatmapFrame: s,
    connector: f,
    chartSurface: u,
    grids: E,
    band: y,
    fit: m,
    points: k,
    heatmapMatrixGuides: S,
    effectLegend: T,
    timingLegend: I,
    chartGuides: H
  };
}
function Y(t, e) {
  t.setAttribute("opacity", Gt(e).toFixed(6));
}
function De(t, e, n) {
  const a = Gt(n), r = vt(Math.min(1, a * 2)), o = vt(Math.max(0, (a - 0.5) * 2)), i = K(a, 0.5, 0.62), l = K(a, 0.5, 0.56), d = ft(e.sourceFrame, e.lcmFrame, r), s = a <= 0.5 ? ft(e.chartSurface.source, e.chartSurface.lcm, r) : ft(e.chartSurface.lcm, e.chartSurface.target, o), x = ut(s[0], s[2], 0.5), f = (c) => c.source.map(($, z) => {
    const U = pt($, e.sourceFrame), rt = pt(c.lcm[z], e.lcmFrame);
    return Rt(ut(U, rt, r), d);
  }), h = a <= 0.5 ? e.chartPlotWindow.lcm : {
    left: X(e.chartPlotWindow.lcm.left, e.chartPlotWindow.target.left, o),
    right: X(e.chartPlotWindow.lcm.right, e.chartPlotWindow.target.right, o),
    top: X(e.chartPlotWindow.lcm.top, e.chartPlotWindow.target.top, o),
    bottom: X(e.chartPlotWindow.lcm.bottom, e.chartPlotWindow.target.bottom, o)
  }, u = (c) => Rt({
    x: X(h.left, h.right, c.x),
    y: X(h.top, h.bottom, c.y)
  }, s), M = (c) => c.map(u), E = new Map([...t.context, t.selected].map((c) => [c.group.getAttribute("data-key"), c]));
  let y = [];
  for (const c of e.tiles) {
    const $ = E.get(c.key);
    if (!$) throw new Error(`soc05 animation: persistent node missing for ${c.key}`);
    let z;
    a <= 0.5 ? z = f(c) : c.selected ? z = ft(c.lcm, Et(c.lcm, x, 0), i) : z = c.lcm, c.selected && (y = z), $.body.setAttribute("points", et(z)), $.hatch.setAttribute("points", et(z)), $.body.setAttribute("stroke", c.selected ? "#222" : "#fff"), $.body.setAttribute("stroke-width", (c.selected ? X(4.64, 2.2, r) : X(0, 1.2, r)).toFixed(3)), $.body.setAttribute("fill", c.fill), Y($.hatch, c.timing === "current" ? 1 : 0), Y($.group, c.selected ? 1 - l : 1 - K(a, 0.52, 0.72));
  }
  t.heatmapFrame.setAttribute("points", et(d)), t.heatmapFrame.setAttribute("stroke-width", X(2.32, 2.5, r).toFixed(3)), Y(t.heatmapFrame, 1 - K(a, 0.52, 0.7));
  const m = ut(y[3], y[2], 0.1), _ = ut(y[3], y[2], 0.9), k = a <= 0.5 ? r : 1 - o, S = e.connector[0][0], T = e.connector[0][1], I = e.connector[0][2], H = e.connector[0][3], D = {
    x: _.x + (I.x - T.x) * k,
    y: _.y + (I.y - T.y) * k
  }, F = {
    x: m.x + (H.x - S.x) * k,
    y: m.y + (H.y - S.y) * k
  }, P = [
    [m, _, D, F],
    [F, D, s[1], s[0]]
  ];
  t.connector.forEach((c, $) => {
    c.setAttribute("points", et(P[$])), Y(c, K(a, 0.2, 0.48) * (1 - K(a, 0.52, 0.62)));
  }), t.chartSurface.setAttribute("points", et(s)), Y(t.chartSurface, K(a, 0.12, 0.48)), t.grids.forEach((c, $) => {
    c.setAttribute("d", Mt(M(e.grids[$].canonical))), c.setAttribute("data-canonical-axis", $ % 2 === 0 ? "v" : "u"), Y(c, K(a, 0.14, 0.48));
  }), t.band.setAttribute("points", et(M(e.band.canonical))), t.fit.setAttribute("d", Mt(M(e.fit.canonical)));
  const b = K(a, 0.14, 0.48);
  Y(t.band, b), Y(t.fit, b), t.points.forEach((c, $) => {
    const z = e.points[$], U = u(z.canonical);
    c.setAttribute("cx", U.x.toFixed(3)), c.setAttribute("cy", U.y.toFixed(3)), c.setAttribute("r", X(0, a <= 0.5 ? 5.4 : X(5.4, 8.2, o), b).toFixed(3)), Y(c, b);
  });
  const v = lt(407, 245, 490, 512);
  t.heatmapMatrixGuides.setAttribute("transform", Pt(v, d));
  const J = ft(e.guideFrames.effect.source, e.guideFrames.effect.lcm, r), Z = ft(e.guideFrames.timing.source, e.guideFrames.timing.lcm, r), B = lt(119, 119, 171, 30), Q = lt(418, 773, 45, 45);
  t.effectLegend.setAttribute("transform", Pt(B, J)), t.timingLegend.setAttribute("transform", Pt(Q, Z)), t.chartGuides.removeAttribute("transform");
  for (const c of Array.from(t.chartGuides.querySelectorAll(":scope > path"))) {
    const $ = st(c.getAttribute("data-canonical-points"));
    c.setAttribute("d", Mt(M($)));
  }
  for (const c of Array.from(t.chartGuides.querySelectorAll(":scope > text"))) {
    const $ = {
      x: Number(c.getAttribute("data-canonical-u")),
      y: Number(c.getAttribute("data-canonical-v"))
    }, z = u($);
    if (c.setAttribute("x", z.x.toFixed(3)), c.setAttribute("y", z.y.toFixed(3)), c.getAttribute("data-guide") === "title:socioeconomic-variable:text") {
      const U = u({ x: 0, y: $.y }), rt = u({ x: 1, y: $.y }), w = Math.atan2(rt.y - U.y, rt.x - U.x) * 180 / Math.PI;
      c.setAttribute("transform", `rotate(${w.toFixed(3)} ${z.x.toFixed(3)} ${z.y.toFixed(3)})`);
    } else c.removeAttribute("transform");
  }
  t.heatmapMatrixGuides.setAttribute("data-transform-revision", a.toFixed(6)), t.effectLegend.setAttribute("data-transform-revision", a.toFixed(6)), t.timingLegend.setAttribute("data-transform-revision", a.toFixed(6)), t.chartGuides.setAttribute("data-transform-revision", a.toFixed(6)), Y(t.heatmapMatrixGuides, 1 - K(a, 0.52, 0.7)), Y(t.effectLegend, 1 - K(a, 0.52, 0.7)), Y(t.timingLegend, 1 - K(a, 0.52, 0.7)), Y(t.chartGuides, K(a, 0.34, 0.49)), t.root.setAttribute("data-animation-progress", a.toFixed(6)), t.root.setAttribute("data-keyframe-segment", a < 0.5 ? "a-to-lcm" : a > 0.5 ? "lcm-to-target" : "lcm"), t.root.setAttribute("data-context-cell-count", String(t.context.length)), t.root.setAttribute("data-gcd-source-key", Lt), t.root.setAttribute("data-gcd-target-record-count", String(t.points.length)), t.root.setAttribute("data-chart-canonical-v", "0=plot-top;1=plot-bottom"), t.root.setAttribute("data-chart-plot-window", [
    h.left,
    h.right,
    h.top,
    h.bottom
  ].map((c) => c.toFixed(8)).join(","));
}
function Oe(t) {
  const e = He();
  let n = Dt.get(t);
  return (!n || n.root !== t || t.getAttribute("data-transition-id") !== "heatmap-a-to-scatter-a") && (n = Ie(t, e), Dt.set(t, n)), { geometry: e, scene: n };
}
function Re(t, e, n = {}) {
  const { geometry: a, scene: r } = Oe(t);
  if (n.structureAudit === "strict") {
    const o = Se(t);
    if (t.setAttribute("data-structure-audit-status", o.status), t.setAttribute("data-structure-audit-phase", o.phase), o.status === "fail") {
      const i = o.checks.filter((l) => l.status === "fail").map((l) => `${l.id}: ${l.evidence}`);
      throw new Error(`soc05 animation structure audit failed before draw
${i.join(`
`)}`);
    }
  }
  De(r, a, e);
}
function Ve(t, e) {
  const n = Ct(e);
  for (const a of Array.from(t.attributes)) t.removeAttribute(a.name);
  for (const a of Array.from(n.attributes)) t.setAttribute(a.name, a.value);
  t.replaceChildren(...Array.from(n.childNodes));
}
const Ye = le(
  xe,
  {
    frame: Object.freeze({ width: at, height: nt }),
    keyframes: Ae,
    renderKeyframe: Ve,
    renderAnimation: Re
  }
);
export {
  nt as KEYFRAME_HEIGHT,
  at as KEYFRAME_WIDTH,
  Ye as heatmapAToScatterATransitionSpace,
  Ae as keyframeMetadata,
  Re as renderAnimation,
  Ct as renderKeyframe
};
