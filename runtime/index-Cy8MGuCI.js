var Gt = Object.defineProperty;
var Yt = (i, t, n) => t in i ? Gt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : i[t] = n;
var X = (i, t, n) => Yt(i, typeof t != "symbol" ? t + "" : t, n);
import { d as Rt } from "./transition-space-Df4GnxL9.js";
import { p as ft } from "./csv-Ha6vz5IV.js";
import "./three.module-yo8ZErO2.js";
import { O as xt, a as Nt, V as A, b as zt, Q as Pt } from "./three.core-DAeQ9pKY.js";
const Kt = "figure2story-transition-space/v1", Ut = "bar-to-stacked", Zt = "clin06-fig1", Qt = {
  transition_id: "clin06-fig1 · bar (b) → stacked bar (b)",
  panel_i: "bar (b)",
  panel_j: "stacked bar (b)"
}, Jt = {
  entry: "index.ts",
  keyframes: "keyframes.ts",
  animation: "animation.ts",
  audit: null
}, te = {
  width: 1920,
  height: 1080
}, ee = [
  {
    index: 0,
    kind: "panel-i",
    label: "Panel bar (b)",
    progress: 0
  },
  {
    index: 1,
    kind: "lcm",
    label: "LCM",
    progress: 0.5
  },
  {
    index: 2,
    kind: "panel-j",
    label: "Panel stacked bar (b)",
    progress: 1
  }
], ne = {
  worlds: [
    {
      id: "bar-to-stacked-world",
      dimensions: 3,
      keyframe_indices: [
        1
      ]
    }
  ],
  cameras: [
    {
      id: "bar-to-stacked-camera",
      world_id: "bar-to-stacked-world",
      projection: "orthographic",
      keyframe_indices: [
        1
      ]
    }
  ],
  viewports: [
    {
      id: "bar-to-stacked-viewport",
      keyframe_indices: [
        0,
        1,
        2
      ]
    }
  ],
  planes: [
    {
      id: "source-coding-plane",
      panel: "bar (b)",
      keyframe_indices: [
        0
      ],
      result_refs: [
        "bar (b).coding-mutations"
      ],
      position_fields: [
        "Patient ID",
        "Number of coding mutations in tumour"
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
      id: "vaccine-peptide-xy-plane",
      panel: "stacked bar (b)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "stacked bar (b).vaccine-peptides"
      ],
      position_fields: [
        "Patient ID",
        "Number of vaccine peptides"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Y"
      ],
      world_id: "bar-to-stacked-world",
      camera_id: "bar-to-stacked-camera"
    },
    {
      id: "coding-mutation-xz-plane",
      panel: "bar (b)",
      keyframe_indices: [
        1
      ],
      result_refs: [
        "bar (b).coding-mutations"
      ],
      position_fields: [
        "Patient ID",
        "Number of coding mutations in tumour"
      ],
      local_axes: [
        "x",
        "y"
      ],
      world_axes: [
        "X",
        "Z"
      ],
      world_id: "bar-to-stacked-world",
      camera_id: "bar-to-stacked-camera"
    },
    {
      id: "target-stacked-plane",
      panel: "stacked bar (b)",
      keyframe_indices: [
        2
      ],
      result_refs: [
        "stacked bar (b).vaccine-peptides"
      ],
      position_fields: [
        "Patient ID",
        "Number of vaccine peptides"
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
      id: "coding-bars",
      role: "nine patient-keyed coding-mutation bars",
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
            id: "source-coding-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "coding-mutation-xz-plane"
          }
        }
      ]
    },
    {
      id: "snv-segments",
      role: "nine patient-keyed SNV vaccine-peptide segments",
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
            id: "vaccine-peptide-xy-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-stacked-plane"
          }
        }
      ]
    },
    {
      id: "indel-segments",
      role: "nine patient-keyed Indel vaccine-peptide segments",
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
            id: "vaccine-peptide-xy-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-stacked-plane"
          }
        }
      ]
    },
    {
      id: "coding-plane-structure",
      role: "coding background surface, grid, bounds and local guides",
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
            id: "source-coding-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "coding-mutation-xz-plane"
          }
        }
      ]
    },
    {
      id: "vaccine-plane-structure",
      role: "vaccine background surface, grid, bounds and local guides",
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
            id: "vaccine-peptide-xy-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-stacked-plane"
          }
        }
      ]
    },
    {
      id: "patient-id-axis",
      role: "single Patient ID axis, ticks, labels and title",
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
            id: "source-coding-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "world",
            id: "bar-to-stacked-world"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-stacked-plane"
          }
        }
      ]
    },
    {
      id: "coding-measure-axis",
      role: "coding-mutation measure axis, ticks, labels and title",
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
            id: "source-coding-plane"
          }
        },
        {
          keyframe_indices: [
            1
          ],
          host: {
            kind: "panel-plane",
            id: "coding-mutation-xz-plane"
          }
        }
      ]
    },
    {
      id: "vaccine-measure-axis",
      role: "vaccine-peptide measure axis, ticks, labels and title",
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
            id: "vaccine-peptide-xy-plane"
          }
        },
        {
          keyframe_indices: [
            2
          ],
          host: {
            kind: "panel-plane",
            id: "target-stacked-plane"
          }
        }
      ]
    },
    {
      id: "vaccine-class-legend",
      role: "screen-aligned vaccine mutation-class legend",
      keyframe_indices: [
        1,
        2
      ],
      hosts: [
        {
          keyframe_indices: [
            1,
            2
          ],
          host: {
            kind: "viewport",
            id: "bar-to-stacked-viewport"
          }
        }
      ]
    }
  ]
}, ie = {
  schema_version: Kt,
  id: Ut,
  figure_id: Zt,
  pair: Qt,
  modules: Jt,
  frame: te,
  keyframes: ee,
  scene: ne
}, oe = `Patient ID,Number of SNVs in vaccine,Number of Indels in the Vaccine,Number of coding mutations in tumor
101,9,3,50
102,6,2,45
104,14,3,81
105,16,3,37
106,13,3,114
107,8,4,78
108,12,3,37
109,10,6,29
110,14,1,44
`, ae = `ID,Cohort,Stage,Vaccine_Start_Months,Prime_End_Months,Boost1_Months,Boost2_Months_Months,DFS_Months
16097-101,Vaccine + ipilimumab,III,4.10958904109589,4.8,6.6410958904109503,8.3178082191780796,43.4958904109589
16097-102,Vaccine + ipilimumab,III,3.9780821917808198,4.7342465753424596,6.4767123287671202,8.3178082191780796,43.561643835616401
16097-104,Vaccine + ipilimumab,IV NED,5.52328767123287,6.1150684931506802,7.9561643835616396,9.8301369863013601,34.652054794520502
16097-105,Vaccine + ipilimumab,III,4.8657534246575302,5.4904109589040999,7.3315068493150601,9.4027397260273897,38.169863013698603
16097-106,Vaccine + ipilimumab,III,5.5561643835616401,6.2136986301369799,8.5150684931506806,10.1260273972602,35.441095890410899
16097-107,Vaccine alone,III,3.91232876712328,5.4246575342465704,7.2986301369862998,9.1397260273972591,28.799999999999901
16097-108,Vaccine alone,IV NED,4.8328767123287601,5.52328767123287,7.4301369863013598,9.2383561643835606,24.7561643835616
16097-109,Vaccine alone,III,3.91232876712328,4.6027397260273899,6.4767123287671202,8.2849315068493095,25.7753424657534
16097-110,Vaccine alone,III,3.7808219178082099,4.4054794520547897,6.24657534246575,8.0876712328767102,19.758904109589
`, re = `Patient ID,Gene,Variant class
101,PIK3CA,SNV
101,VHL,Indel
102,BAP1,SNV
105,KDM5C,Indel
107,BAP1,Indel
108,KDM5C,Indel
109,PBRM1,Indel
`, S = ft(oe).map((i) => ({
  id: i["Patient ID"],
  snv: Number(i["Number of SNVs in vaccine"]),
  indel: Number(i["Number of Indels in the Vaccine"]),
  coding: Number(i["Number of coding mutations in tumor"])
}));
ft(ae).map((i) => {
  const t = Number(i.Vaccine_Start_Months), n = Number(i.DFS_Months);
  return {
    id: i.ID.split("-").pop() ?? i.ID,
    cohort: i.Cohort,
    stage: i.Stage,
    start: t,
    prime: Number(i.Prime_End_Months),
    boost1: Number(i.Boost1_Months),
    boost2: Number(i.Boost2_Months_Months),
    dfs: n,
    // Source Data reports DFS from first vaccination; panel c begins at surgery.
    followUpFromSurgery: t + n
  };
});
ft(re).map((i) => ({
  id: i["Patient ID"],
  gene: i.Gene,
  type: i["Variant class"]
}));
const at = Math.PI / 180;
function ce(i, t) {
  const n = i * at, e = t * at;
  return {
    forward: new A(
      Math.sin(n) * Math.cos(e),
      Math.sin(e),
      Math.cos(n) * Math.cos(e)
    ),
    up: new A(
      -Math.sin(n) * Math.sin(e),
      Math.cos(e),
      -Math.cos(n) * Math.sin(e)
    )
  };
}
function se(i) {
  const t = [];
  for (const n of i.x)
    for (const e of i.y)
      for (const o of i.z) t.push({ x: n, y: e, z: o });
  return t;
}
function de({
  azimuthDeg: i,
  elevationDeg: t,
  depthCompression: n,
  viewport: e,
  frustum: o = null,
  fitBounds: a = null,
  fitBox: c = null
}) {
  const h = new xt();
  h.scale.set(1, 1, n), h.updateMatrixWorld(!0);
  const { forward: d, up: l } = ce(i, t), r = new Nt(-1, 1, 1, -1, 0.1, 2e4);
  r.position.copy(d).multiplyScalar(5e3), r.up.copy(l), r.lookAt(0, 0, 0), r.updateMatrixWorld(!0);
  const p = ({ x, y, z: k }) => {
    const M = new A(x, y, k);
    return h.localToWorld(M), M.applyMatrix4(r.matrixWorldInverse);
  };
  let s = e;
  if (o)
    Object.assign(r, o);
  else {
    if (!a || !c) throw new Error("A fitted projector requires fitBounds and fitBox");
    const x = se(a).map(p), y = Math.min(...x.map((j) => j.x)), k = Math.max(...x.map((j) => j.x)), M = Math.min(...x.map((j) => j.y)), z = Math.max(...x.map((j) => j.y)), _ = c.x1 - c.x0, F = c.y1 - c.y0, R = Math.min(_ / (k - y), F / (z - M)), K = _ / R, U = F / R, O = (y + k) / 2, E = (M + z) / 2;
    r.left = O - K / 2, r.right = O + K / 2, r.top = E + U / 2, r.bottom = E - U / 2, s = c;
  }
  r.updateProjectionMatrix();
  const f = (x) => {
    const y = new A(x.x, x.y, x.z);
    h.localToWorld(y);
    const k = y.clone().applyMatrix4(r.matrixWorldInverse), M = y.clone().project(r);
    return {
      x: s.x0 + (M.x + 1) * (s.x1 - s.x0) / 2,
      y: s.y0 + (1 - M.y) * (s.y1 - s.y0) / 2,
      depth: -k.z
    };
  };
  return {
    sceneRoot: h,
    camera: r,
    project: f,
    readableAngle: (x, y) => {
      const k = f(x), M = f(y);
      let z = Math.atan2(M.y - k.y, M.x - k.x) / at;
      return z > 90 && (z -= 180), z < -90 && (z += 180), z;
    },
    metadata: { azimuthDeg: i, elevationDeg: t, rollDeg: 0, depthCompression: n }
  };
}
const rt = { width: 1920, height: 1080 }, V = { width: 2168, height: 1284 }, le = [
  { index: 0, kind: "panel-i", label: "Panel bar (b)" },
  { index: 1, kind: "lcm", label: "LCM" },
  { index: 2, kind: "panel-j", label: "Panel stacked bar (b)" }
], w = "#262323", L = "#4f4b4b", Mt = "#d9d7d7", vt = "#8180bd", Q = "#fcc492", J = "#a91e22";
function pe(i, t = {}, n) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", i);
  return Object.entries(t).forEach(([o, a]) => e.setAttribute(o, String(a))), n !== void 0 && (e.textContent = n), e;
}
function u(i, t, n = {}, e) {
  const o = pe(t, n, e);
  return i.appendChild(o), o;
}
function ct(i) {
  return i.map((t, n) => `${n ? "L" : "M"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ") + " Z";
}
function he(i) {
  return i.map((t, n) => `${n ? "L" : "M"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ");
}
const mt = de({
  azimuthDeg: 34,
  elevationDeg: 24,
  depthCompression: 0.7,
  viewport: { x0: 0, y0: 0, x1: V.width, y1: V.height },
  frustum: { left: -1084, right: 1084, top: 800, bottom: -484 }
}), fe = (i) => mt.project(i), v = fe, Et = mt.readableAngle(
  { x: -720, y: 0, z: 0 },
  { x: 720, y: 0, z: 0 }
), xe = mt.readableAngle(
  { x: -720, y: 0, z: 0 },
  { x: -720, y: 0, z: 590 }
);
function q(i, t, n, e, o, a = {}) {
  const c = v(t);
  return u(i, "text", {
    x: c.x + n,
    y: c.y + e,
    fill: w,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 24,
    ...a
  }, o);
}
function B(i, t, n, e = {}) {
  return u(i, "path", {
    d: he([v(t), v(n)]),
    fill: "none",
    stroke: L,
    "stroke-width": 2,
    ...e
  });
}
function ot(i, t, n, e, o) {
  return {
    key: i,
    role: t,
    panel: n,
    points: e,
    fill: o,
    depth: e.reduce((a, c) => a + v(c).depth, 0) / e.length
  };
}
function me(i) {
  const t = u(i, "g", { "data-panel": "stacked bar (b)", "data-guide": "World XY plane" });
  u(t, "path", {
    d: ct([
      { x: -720, y: 0, z: 0 },
      { x: 720, y: 0, z: 0 },
      { x: 720, y: 560, z: 0 },
      { x: -720, y: 560, z: 0 }
    ].map(v)),
    fill: "#fffaf7",
    stroke: "#777172",
    "stroke-width": 2.2,
    opacity: 0.78
  });
  const e = u(i, "g", { "data-panel": "bar (b)", "data-guide": "World XZ plane" });
  u(e, "path", {
    d: ct([
      { x: -720, y: 0, z: 0 },
      { x: 720, y: 0, z: 0 },
      { x: 720, y: 0, z: 590 },
      { x: -720, y: 0, z: 590 }
    ].map(v)),
    fill: "#f7f6fb",
    stroke: "#777172",
    "stroke-width": 2.2,
    opacity: 0.88
  }), [5, 10, 15, 20].forEach((a) => {
    B(t, { x: -720, y: a * 28, z: 0 }, { x: 720, y: a * 28, z: 0 }, {
      stroke: Mt,
      "stroke-width": 1.25
    });
  }), [30, 60, 90, 120].forEach((a) => {
    B(e, { x: -720, y: 0, z: a * 4.9 }, { x: 720, y: 0, z: a * 4.9 }, {
      stroke: Mt,
      "stroke-width": 1.25
    });
  });
}
function ye(i) {
  const t = u(i, "g", { "data-guide": "shared World axes" }), n = u(t, "g", { "data-guide": "Patient ID World X guide" }), e = u(t, "g", { "data-guide": "Number of vaccine peptides World Y guide" }), o = u(t, "g", { "data-guide": "Number of coding mutations World Z guide" });
  B(n, { x: -720, y: 0, z: 0 }, { x: 720, y: 0, z: 0 }, { stroke: w, "stroke-width": 3 }), B(e, { x: -720, y: 0, z: 0 }, { x: -720, y: 590, z: 0 }, { stroke: w, "stroke-width": 3 }), B(o, { x: -720, y: 0, z: 0 }, { x: -720, y: 0, z: 590 }, { stroke: w, "stroke-width": 3 });
  const a = v({ x: -720, y: 0, z: 0 });
  u(t, "circle", { cx: a.x, cy: a.y, r: 6, fill: "#fff", stroke: w, "stroke-width": 2.5 }), [0, 5, 10, 15, 20].forEach((f) => {
    const m = f * 28;
    B(e, { x: -720, y: m, z: 0 }, { x: -738, y: m, z: 0 }, { stroke: w, "stroke-width": 2 }), q(e, { x: -738, y: m, z: 0 }, -10, 8, String(f), { "text-anchor": "end" });
  }), [30, 60, 90, 120].forEach((f) => {
    const m = f * 4.9;
    B(o, { x: -720, y: 0, z: m }, { x: -738, y: 0, z: m }, { stroke: w, "stroke-width": 2 }), q(o, { x: -738, y: 0, z: m }, -15, 7, String(f), { "text-anchor": "end" });
  });
  const c = v({ x: -720, y: 290, z: 0 });
  q(e, { x: -720, y: 290, z: 0 }, -70, 0, "No. of peptides per vaccine", {
    "font-size": 27,
    "font-weight": 600,
    "text-anchor": "middle",
    transform: `rotate(-90 ${c.x - 70} ${c.y})`
  });
  const h = v({ x: -720, y: 0, z: 330 }), d = h.x - 110, l = h.y - 30;
  u(o, "text", {
    x: d,
    y: l,
    fill: w,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 27,
    "font-weight": 600,
    "text-anchor": "middle",
    transform: `rotate(${xe} ${d} ${l})`
  }, "No. of coding mutations");
  const r = v({ x: 720, y: 0, z: 0 }), p = r.x + 44, s = r.y + 40;
  q(n, { x: 720, y: 0, z: 0 }, 44, 40, "Patient ID", {
    "font-size": 28,
    "font-weight": 600,
    "text-anchor": "start",
    transform: `rotate(${Et} ${p} ${s})`
  });
}
function ue(i) {
  const t = [];
  S.forEach((d, l) => {
    const r = -660 + l * 165, p = d.coding * 4.9;
    t.push(ot(
      `${d.id}:coding`,
      "coding-mutation count on World Z",
      "bar (b)",
      [
        { x: r - 37, y: 0, z: 0 },
        { x: r + 37, y: 0, z: 0 },
        { x: r + 37, y: 0, z: p },
        { x: r - 37, y: 0, z: p }
      ],
      vt
    ));
    const s = d.indel * 28, f = (d.indel + d.snv) * 28;
    t.push(ot(
      `${d.id}:indel`,
      "Indel vaccine-peptide segment on World Y",
      "stacked bar (b)",
      [
        { x: r - 37, y: 0, z: 0 },
        { x: r + 37, y: 0, z: 0 },
        { x: r + 37, y: s, z: 0 },
        { x: r - 37, y: s, z: 0 }
      ],
      J
    )), t.push(ot(
      `${d.id}:snv`,
      "SNV vaccine-peptide segment on World Y",
      "stacked bar (b)",
      [
        { x: r - 37, y: s, z: 0 },
        { x: r + 37, y: s, z: 0 },
        { x: r + 37, y: f, z: 0 },
        { x: r - 37, y: f, z: 0 }
      ],
      Q
    ));
  });
  const a = /* @__PURE__ */ new Map();
  t.forEach((d) => a.set(d.key, [...a.get(d.key) ?? [], d])), [...a.entries()].map(([d, l]) => ({
    key: d,
    faces: l,
    depth: l.reduce((r, p) => r + p.depth, 0) / l.length
  })).sort((d, l) => l.depth - d.depth).forEach(({ key: d, faces: l }) => {
    const r = l[0], p = u(i, "g", {
      "data-panel": r.panel,
      "data-mark": r.role.includes("segment") ? "bar segment" : "bar",
      "data-key": d,
      "data-role": r.role
    });
    l.sort((s, f) => f.depth - s.depth).forEach((s) => {
      u(p, "path", {
        d: ct(s.points.map(v)),
        fill: s.fill,
        stroke: w,
        "stroke-width": 1.35,
        opacity: 0.92,
        "data-geometry": "planar-rectangle"
      });
    });
  });
  const h = u(i, "g", { "data-guide": "Patient ID axis labels" });
  S.forEach((d, l) => {
    const r = -660 + l * 165, p = v({ x: r, y: 0, z: 0 });
    q(h, { x: r, y: 0, z: 0 }, 12, 55, d.id, {
      "font-size": 25,
      "text-anchor": "middle",
      transform: `rotate(${Et} ${p.x + 12} ${p.y + 55})`
    });
  });
}
function ge(i) {
  const t = u(i, "g", {
    "data-guide": "vaccine mutation class legend",
    transform: "translate(710 1015)"
  });
  u(t, "rect", { x: 0, y: 0, width: 34, height: 28, fill: Q, stroke: w, "stroke-width": 2 }), u(t, "text", {
    x: 52,
    y: 25,
    fill: w,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 30
  }, "SNV mutations"), u(t, "rect", { x: 390, y: 0, width: 34, height: 28, fill: J, stroke: w, "stroke-width": 2 }), u(t, "text", {
    x: 442,
    y: 25,
    fill: w,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 30
  }, "Frameshift Indel mutations");
}
function yt(i, t, n, e, o) {
  for (; i.firstChild; ) i.removeChild(i.firstChild);
  return i.setAttribute("viewBox", `0 0 ${V.width} ${V.height}`), i.setAttribute("width", String(rt.width)), i.setAttribute("height", String(rt.height)), i.setAttribute("role", "img"), i.setAttribute("aria-label", o), i.setAttribute("data-keyframe-index", String(t)), i.setAttribute("data-keyframe-kind", n), i.setAttribute("data-keyframe-label", e), u(i, "rect", { x: 0, y: 0, width: V.width, height: V.height, fill: "#fff" }), u(i, "g", { "data-safe-area": "inset-3.75-percent" });
}
function T(i, t, n, e, o = {}) {
  return u(i, "text", {
    x: t,
    y: n,
    fill: w,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 30,
    ...o
  }, e);
}
function jt(i, t, n, e) {
  const o = (n - t) / S.length;
  u(i, "line", {
    x1: t,
    y1: e,
    x2: n,
    y2: e,
    stroke: L,
    "stroke-width": 2.2
  }), S.forEach((a, c) => {
    const h = t + (c + 0.5) * o;
    u(i, "line", { x1: h, y1: e, x2: h, y2: e + 13, stroke: L, "stroke-width": 2 }), T(i, h, e + 50, a.id, { "text-anchor": "middle", "font-size": 29 });
  }), T(i, (t + n) / 2, e + 100, "Patient ID", {
    "text-anchor": "middle",
    "font-size": 32,
    "font-weight": 600
  });
}
function ke(i) {
  const t = yt(
    i,
    0,
    "panel-i",
    "Panel bar (b)",
    "Coding mutation counts for nine patients"
  ), n = u(t, "g", { "data-panel": "bar (b)" }), e = { left: 480, right: 1740, top: 305, bottom: 830 }, o = (d) => e.bottom - d / 120 * (e.bottom - e.top), a = u(n, "g", { "data-guide": "axes, ticks, titles, and units" });
  u(a, "line", { x1: e.left, y1: e.top, x2: e.left, y2: e.bottom, stroke: L, "stroke-width": 2.2 }), [0, 60, 120].forEach((d) => {
    const l = o(d);
    u(a, "line", { x1: e.left - 14, y1: l, x2: e.left, y2: l, stroke: L, "stroke-width": 2 }), T(a, e.left - 28, l + 10, String(d), { "text-anchor": "end", "font-size": 31 });
  }), T(a, 330, (e.top + e.bottom) / 2, "No. of coding mutations", {
    "text-anchor": "middle",
    "font-size": 34,
    "font-weight": 600,
    transform: `rotate(-90 330 ${(e.top + e.bottom) / 2})`
  }), jt(a, e.left, e.right, e.bottom);
  const c = (e.right - e.left) / S.length, h = 72;
  S.forEach((d, l) => {
    const r = e.left + (l + 0.5) * c - h / 2, p = o(d.coding);
    u(n, "rect", {
      x: r,
      y: p,
      width: h,
      height: e.bottom - p,
      fill: vt,
      stroke: w,
      "stroke-width": 2.4,
      "data-mark": "bar",
      "data-role": "coding-mutation count per patient",
      "data-key": d.id
    });
  });
}
function be(i) {
  const t = yt(
    i,
    2,
    "panel-j",
    "Panel stacked bar (b)",
    "Stacked SNV and frameshift Indel vaccine peptide counts for nine patients"
  ), n = u(t, "g", { "data-panel": "stacked bar (b)" }), e = { left: 515, right: 1710, top: 205, bottom: 805 }, o = (l) => e.bottom - l / 20 * (e.bottom - e.top), a = u(n, "g", { "data-guide": "axes, ticks, titles, units, and fill legend" });
  u(a, "line", { x1: e.left, y1: e.top, x2: e.left, y2: e.bottom, stroke: L, "stroke-width": 2.2 }), [0, 5, 10, 15, 20].forEach((l) => {
    const r = o(l);
    u(a, "line", { x1: e.left - 14, y1: r, x2: e.left, y2: r, stroke: L, "stroke-width": 2 }), T(a, e.left - 28, r + 10, String(l), { "text-anchor": "end", "font-size": 31 });
  }), T(a, 350, (e.top + e.bottom) / 2, "No. of peptides per vaccine", {
    "text-anchor": "middle",
    "font-size": 34,
    "font-weight": 600,
    transform: `rotate(-90 350 ${(e.top + e.bottom) / 2})`
  }), jt(a, e.left, e.right, e.bottom);
  const c = (e.right - e.left) / S.length, h = 78;
  S.forEach((l, r) => {
    const p = e.left + (r + 0.5) * c - h / 2, s = o(l.indel), f = o(l.indel + l.snv);
    u(n, "rect", {
      x: p,
      y: s,
      width: h,
      height: e.bottom - s,
      fill: J,
      stroke: w,
      "stroke-width": 2.4,
      "data-mark": "bar segment",
      "data-role": "Indel vaccine-peptide count",
      "data-key": `${l.id}:indel`
    }), u(n, "rect", {
      x: p,
      y: f,
      width: h,
      height: s - f,
      fill: Q,
      stroke: w,
      "stroke-width": 2.4,
      "data-mark": "bar segment",
      "data-role": "SNV vaccine-peptide count",
      "data-key": `${l.id}:snv`
    });
  });
  const d = u(t, "g", {
    "data-guide": "vaccine mutation class legend",
    transform: "translate(710 1015)"
  });
  u(d, "rect", { x: 0, y: 0, width: 34, height: 28, fill: Q, stroke: w, "stroke-width": 2 }), T(d, 52, 25, "SNV mutations", { "font-size": 30 }), u(d, "rect", { x: 390, y: 0, width: 34, height: 28, fill: J, stroke: w, "stroke-width": 2 }), T(d, 442, 25, "Frameshift Indel mutations", { "font-size": 30 });
}
function ze(i, t) {
  if (t === 0) ke(i);
  else if (t === 1) Me(i);
  else if (t === 2) be(i);
  else throw new Error(`Unknown bar-to-stacked keyframe index: ${t}`);
}
function Me(i) {
  const t = yt(
    i,
    1,
    "lcm",
    "LCM",
    "Orthographic joint space of coding mutations and stacked vaccine peptides for nine patients"
  ), n = u(t, "g", {
    "data-keyframe-index": 1,
    "data-keyframe-kind": "lcm",
    "data-world-basis": "right-handed X=patient,Y=peptides,Z=coding",
    "data-camera": "orthographic azimuth=34 elevation=24 roll=0 depth-compression=.7"
  });
  me(n), ue(n), ye(n), ge(n);
}
const wt = { x: -390, y: 92 };
function Tt(i, t) {
  if (t <= 0) return;
  const n = i.querySelector(
    '[data-guide="vaccine mutation class legend"]'
  ), e = n == null ? void 0 : n.querySelectorAll("rect").item(1), o = n == null ? void 0 : n.querySelectorAll("text").item(1);
  if (!e || !o) return;
  const a = `translate(${wt.x * t} ${wt.y * t})`;
  e.setAttribute("transform", a), o.setAttribute("transform", a);
}
function we(i, t) {
  ze(i, t), t === 1 && Tt(i, 1);
}
const st = Math.PI / 180, _e = (i) => i.x.flatMap((t) => i.y.flatMap((n) => i.z.map((e) => ({ x: t, y: n, z: e })))), $e = (i, t) => {
  const n = i * st, e = t * st;
  return {
    forward: new A(
      Math.sin(n) * Math.cos(e),
      Math.sin(e),
      Math.cos(n) * Math.cos(e)
    ),
    up: new A(
      -Math.sin(n) * Math.sin(e),
      Math.cos(e),
      -Math.cos(n) * Math.sin(e)
    )
  };
};
class Ae {
  constructor(t) {
    X(this, "root", new xt());
    X(this, "camera");
    X(this, "projectionBox");
    X(this, "depthCompression");
    this.depthCompression = t.depthCompression;
    const { forward: n, up: e } = $e(t.azimuthDeg, t.elevationDeg);
    if (this.camera = new Nt(-1, 1, 1, -1, 0.1, 2e4), this.camera.position.copy(n).multiplyScalar(5e3), this.camera.up.copy(e), this.camera.lookAt(0, 0, 0), this.camera.updateMatrixWorld(!0), t.frustum)
      Object.assign(this.camera, t.frustum), this.projectionBox = t.viewport;
    else {
      if (!t.fitBounds || !t.fitBox)
        throw new Error("TransitionScene fitted camera requires fitBounds and fitBox");
      const o = _e(t.fitBounds).map((y) => this.worldPoint(y).applyMatrix4(this.camera.matrixWorldInverse)), a = Math.min(...o.map((y) => y.x)), c = Math.max(...o.map((y) => y.x)), h = Math.min(...o.map((y) => y.y)), d = Math.max(...o.map((y) => y.y)), l = t.fitBox.x1 - t.fitBox.x0, r = t.fitBox.y1 - t.fitBox.y0, p = Math.min(l / (c - a), r / (d - h)), s = l / p, f = r / p, m = (a + c) / 2, x = (h + d) / 2;
      this.camera.left = m - s / 2, this.camera.right = m + s / 2, this.camera.top = x + f / 2, this.camera.bottom = x - f / 2, this.projectionBox = t.fitBox;
    }
    this.camera.updateProjectionMatrix(), this.root.updateMatrixWorld(!0);
  }
  worldPoint(t) {
    return new A(t.x, t.y, t.z * this.depthCompression);
  }
  projectWorld(t) {
    const n = this.worldPoint(t), e = n.clone().applyMatrix4(this.camera.matrixWorldInverse), o = n.clone().project(this.camera);
    return this.fromNdc(o, -e.z);
  }
  projectLocal(t, n) {
    this.root.updateMatrixWorld(!0);
    const e = new A(n.x, n.y, n.z).applyMatrix4(t.matrixWorld), o = e.clone().applyMatrix4(this.camera.matrixWorldInverse), a = e.clone().project(this.camera);
    return this.fromNdc(a, -o.z);
  }
  screenPose(t, n, e, o, a) {
    const c = this.unproject(t), h = this.unproject(n).sub(c).divideScalar(o), d = this.unproject(e).sub(c).divideScalar(a), l = new A().crossVectors(h, d).normalize().multiplyScalar(Math.sqrt(h.length() * d.length()));
    return this.matrixPose(new zt().makeBasis(h, d, l).setPosition(c));
  }
  worldPose(t, n, e) {
    const o = this.worldPoint(t), a = this.worldPoint(n), c = this.worldPoint(e), h = new A().crossVectors(a, c).normalize().multiplyScalar(Math.sqrt(a.length() * c.length()));
    return this.matrixPose(new zt().makeBasis(a, c, h).setPosition(o));
  }
  applyPose(t, n, e, o) {
    t.position.copy(n.position).lerp(e.position, o), t.quaternion.copy(n.quaternion).slerp(e.quaternion, o), t.scale.copy(n.scale).lerp(e.scale, o), t.updateMatrix(), this.root.updateMatrixWorld(!0);
  }
  angle(t, n, e) {
    const o = this.projectLocal(t, n), a = this.projectLocal(t, e);
    let c = Math.atan2(a.y - o.y, a.x - o.x) / st;
    return c > 90 && (c -= 180), c < -90 && (c += 180), c;
  }
  matrixPose(t) {
    const n = new A(), e = new Pt(), o = new A();
    return t.decompose(n, e, o), { position: n, quaternion: e, scale: o };
  }
  unproject(t) {
    const n = (t.x - this.projectionBox.x0) / (this.projectionBox.x1 - this.projectionBox.x0) * 2 - 1, e = 1 - (t.y - this.projectionBox.y0) / (this.projectionBox.y1 - this.projectionBox.y0) * 2;
    return new A(n, e, 0).unproject(this.camera);
  }
  fromNdc(t, n) {
    return {
      x: this.projectionBox.x0 + (t.x + 1) * (this.projectionBox.x1 - this.projectionBox.x0) / 2,
      y: this.projectionBox.y0 + (1 - t.y) * (this.projectionBox.y1 - this.projectionBox.y0) / 2,
      depth: n
    };
  }
}
const H = (i, t) => {
  const n = new xt();
  return n.name = t, i.add(n), n;
}, Se = "http://www.w3.org/2000/svg", W = { width: 2168, height: 1284 }, P = "#262323", dt = "#4f4b4b", _t = "#8180bd", Bt = "#fcc492", Lt = "#a91e22", tt = 37, Ie = 39 * 1440 / 1195, Ne = new Pt().setFromAxisAngle(new A(1, 0, 0), Math.PI), Dt = (i) => Math.max(0, Math.min(1, i)), g = (i, t, n) => i + (t - i) * n, Pe = (i) => {
  const t = Dt(i);
  return t * t * t * (t * (t * 6 - 15) + 10);
}, $ = (i, t, n) => Pe((i - t) / (n - t)), ut = (i) => {
  if (i <= 0) return dt;
  if (i >= 1) return P;
  const t = (n, e) => Math.round(g(n, e, i));
  return `rgb(${t(79, 38)} ${t(75, 35)} ${t(75, 35)})`;
};
function Ct(i) {
  return {
    position: i.position.clone(),
    quaternion: i.quaternion.clone().multiply(Ne),
    scale: new A(i.scale.x, -i.scale.y, i.scale.z)
  };
}
function Vt(i, t, n, e, o, a) {
  t.position.copy(n.position).lerp(e.position, o), t.quaternion.copy(n.quaternion).slerp(e.quaternion, a), t.scale.copy(n.scale).lerp(e.scale, a), t.updateMatrix(), i.root.updateMatrixWorld(!0);
}
function b(i, t = {}, n) {
  const e = document.createElementNS(Se, i);
  return Object.entries(t).forEach(([o, a]) => e.setAttribute(o, String(a))), n !== void 0 && (e.textContent = n), e;
}
function Wt(i, t) {
  return i.replaceChildren(), Object.entries({
    viewBox: `0 0 ${W.width} ${W.height}`,
    width: 1920,
    height: 1080,
    role: "img",
    "data-transition-segment": t,
    "data-scene-authority": "three-object3d-camera"
  }).forEach(([n, e]) => i.setAttribute(n, String(e))), i.append(b("rect", { x: 0, y: 0, width: W.width, height: W.height, fill: "#fff" })), i.appendChild(b("g", { "data-safe-area": "inset-3.75-percent" }));
}
const Ht = () => new Ae({
  azimuthDeg: 34,
  elevationDeg: 24,
  depthCompression: 0.7,
  viewport: { x0: 0, y0: 0, x1: W.width, y1: W.height },
  frustum: { left: -1084, right: 1084, top: 800, bottom: -484 }
});
function gt(i) {
  return i.map((t, n) => `${n ? "L" : "M"}${t.x.toFixed(2)},${t.y.toFixed(2)}`).join(" ") + " Z";
}
function D(i, t, n, e = {}, o = !1) {
  o ? i.append(b("path", {
    d: `M${t.x.toFixed(2)},${t.y.toFixed(2)} L${n.x.toFixed(2)},${n.y.toFixed(2)}`,
    fill: "none",
    stroke: dt,
    "stroke-width": 2,
    ...e
  })) : i.append(b("line", { x1: t.x, y1: t.y, x2: n.x, y2: n.y, stroke: dt, "stroke-width": 2, ...e }));
}
function G(i, t, n, e = {}) {
  i.append(b("text", { x: t.x, y: t.y, fill: P, "font-family": "Arial, Helvetica, sans-serif", "font-size": 26, ...e }, n));
}
function ve(i, t) {
  return [i - 180, i, i + 180].reduce((n, e) => Math.abs(e - t) < Math.abs(n - t) ? e : n);
}
function kt(i, t, n) {
  return n.map((e) => i.projectLocal(t, e));
}
function N(i, t, n, e) {
  const o = i.projectLocal(t, n);
  if (e > 1e-6) return o;
  const a = (c) => {
    const h = Math.round(c * 2) / 2;
    return Math.abs(c - h) < 1e-6 ? h : c;
  };
  return { ...o, x: a(o.x), y: a(o.y) };
}
function et(i, t, n, e, o, a, c) {
  const h = b("g", { "data-panel": c, "data-attachment": n.name }), d = c === "bar (b)" ? 0.88 : 0.78;
  h.append(b("path", { d: gt(kt(t, n, [
    { x: 0, y: 0, z: 0 },
    { x: 1440, y: 0, z: 0 },
    { x: 1440, y: e, z: 0 },
    { x: 0, y: e, z: 0 }
  ])), fill: o, stroke: "#777172", "stroke-width": 2.2, opacity: d * a })), (c === "bar (b)" ? [147, 294, 441, 588] : [140, 280, 420, 560]).forEach((r) => D(h, t.projectLocal(n, { x: 0, y: r, z: 0 }), t.projectLocal(n, { x: 1440, y: r, z: 0 }), {
    stroke: "#d9d7d7",
    "stroke-width": 1.25,
    opacity: a
  }, !0)), i.append(h);
}
function nt(i, t, n, e, o, a) {
  const c = b("g", { "data-guide": "Patient ID", "data-attachment": n.name });
  i.append(c);
  const h = N(t, n, { x: 0, y: 0, z: 0 }, o), d = N(t, n, { x: 1440, y: 0, z: 0 }, o), l = o > 1 - 1e-6, r = ut(o);
  D(c, h, d, { stroke: r, "stroke-width": g(2.2, 3, o) }, l);
  const p = o <= 1e-6 ? 0 : t.angle(n, { x: 0, y: 0, z: 0 }, { x: 1, y: 0, z: 0 });
  S.forEach((K, U) => {
    const O = e[U], E = N(t, n, { x: O, y: 0, z: 0 }, o);
    D(c, E, N(t, n, { x: O, y: -a, z: 0 }, o), { stroke: r, opacity: 1 - o }, l);
    const j = { x: E.x, y: E.y + 50, depth: E.depth }, bt = { x: E.x + 12, y: E.y + 55, depth: E.depth }, it = {
      x: g(j.x, bt.x, o),
      y: g(j.y, bt.y, o)
    };
    G(c, it, K.id, {
      "font-size": g(29, 25, o),
      "text-anchor": "middle",
      transform: `rotate(${p} ${it.x} ${it.y})`
    });
  });
  const s = N(t, n, { x: 720, y: 0, z: 0 }, o), f = { x: s.x, y: s.y + 100, depth: s.depth }, m = { x: d.x + 44, y: d.y + 40, depth: d.depth }, x = $(o, 0.72, 1), y = g(32, 28, x), k = b("text", {
    x: 0,
    y: 0,
    fill: P,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": y,
    "font-weight": 600,
    "text-anchor": "start"
  }, "Patient ID");
  c.append(k);
  const M = k.getComputedTextLength(), z = g(f.x - M / 2, m.x, x), _ = g(70, 180, $(o, 0.45, 0.55)), F = g(f.y, m.y, x) + _ * Math.sin(Math.PI * o), R = g(f.x, m.x, x);
  k.setAttribute("x", String(z)), k.setAttribute("y", String(F)), k.setAttribute("transform", `rotate(${p} ${R} ${F})`);
}
function lt(i, t, n, e, o = 1) {
  const a = b("g", { "data-guide": "Number of coding mutations", "data-attachment": n.name, opacity: o }), c = ut(e), h = g(588, 590, e);
  D(a, N(t, n, { x: 0, y: 0, z: 0 }, e), N(t, n, { x: 0, y: h, z: 0 }, e), {
    stroke: c,
    "stroke-width": g(2.2, 3, e)
  }, e > 1 - 1e-6);
  const d = g(16, 18, e);
  [0, 30, 60, 90, 120].forEach((m) => {
    const x = m * 4.9, y = m === 0 ? 1 - e : [60, 120].includes(m) ? 1 : e, k = N(t, n, { x: -d, y: x, z: 0 }, e);
    D(a, N(t, n, { x: 0, y: x, z: 0 }, e), k, { stroke: c, opacity: y }, e > 1 - 1e-6), G(a, {
      x: k.x + g(-14, -15, e),
      y: k.y + g(10, 7, e),
      depth: k.depth
    }, String(m), {
      "text-anchor": "end",
      "font-size": g(31, 24, e),
      opacity: y
    });
  });
  const l = N(t, n, { x: -171.428571, y: 294, z: 0 }, e), r = t.projectLocal(n, { x: 0, y: 330, z: 0 }), p = { x: r.x - 110, y: r.y - 30, depth: r.depth }, s = {
    x: g(l.x, p.x, e),
    y: g(l.y, p.y, e),
    depth: g(l.depth, p.depth, e)
  }, f = e <= 1e-6 ? -90 : ve(
    t.angle(n, { x: 0, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }),
    g(-90, -30, e)
  );
  G(a, s, "No. of coding mutations", {
    "font-size": g(34, 27, e),
    "font-weight": 600,
    "text-anchor": "middle",
    transform: `rotate(${f} ${s.x} ${s.y})`
  }), i.append(a);
}
function pt(i, t, n, e, o = 1) {
  const a = b("g", { "data-guide": "Number of vaccine peptides", "data-attachment": n.name, opacity: o }), c = ut(e), h = g(560, 590, e);
  D(a, N(t, n, { x: 0, y: 0, z: 0 }, e), N(t, n, { x: 0, y: h, z: 0 }, e), {
    stroke: c,
    "stroke-width": g(2.2, 3, e)
  }, e > 1 - 1e-6);
  const d = g(16.870293, 18, e);
  [0, 5, 10, 15, 20].forEach((m) => {
    const x = m * 28, y = N(t, n, { x: -d, y: x, z: 0 }, e);
    D(a, N(t, n, { x: 0, y: x, z: 0 }, e), y, { stroke: c }, e > 1 - 1e-6), G(a, {
      x: y.x + g(-14, -10, e),
      y: y.y + g(10, 8, e),
      depth: y.depth
    }, String(m), { "text-anchor": "end", "font-size": g(31, 24, e) });
  });
  const l = t.projectLocal(n, { x: 0, y: 280, z: 0 }), r = { x: l.x - 165, y: l.y, depth: l.depth }, p = t.projectLocal(n, { x: 0, y: 290, z: 0 }), s = { x: p.x - 70, y: p.y, depth: p.depth }, f = {
    x: g(r.x, s.x, e),
    y: g(r.y, s.y, e)
  };
  G(a, f, "No. of peptides per vaccine", {
    "font-size": g(34, 27, e),
    "font-weight": 600,
    "text-anchor": "middle",
    transform: `rotate(-90 ${f.x} ${f.y})`
  }), i.append(a);
}
function Ft(i, t, n, e, o, a = 1) {
  return S.map((c, h) => {
    const d = H(t, `coding-row-${c.id}`);
    d.position.x = n[h], d.updateMatrix();
    const l = c.coding * 4.9, r = kt(i, d, [
      { x: -e, y: 0, z: 0 },
      { x: e, y: 0, z: 0 },
      { x: e, y: l, z: 0 },
      { x: -e, y: l, z: 0 }
    ]), p = b("g", {
      "data-mark": "bar",
      "data-key": c.id,
      "data-record-key": `Patient ID=${c.id}`,
      "data-parent": t.name,
      opacity: g(1, 0.92, o) * a
    });
    if (o < 1e-6) {
      const s = r.map((m) => m.x), f = r.map((m) => m.y);
      p.append(b("rect", {
        x: Math.min(...s),
        y: Math.min(...f),
        width: Math.max(...s) - Math.min(...s),
        height: Math.max(...f) - Math.min(...f),
        fill: _t,
        stroke: P,
        "stroke-width": 2.4
      }));
    } else
      p.append(b("path", {
        d: gt(r),
        fill: _t,
        stroke: P,
        "stroke-width": g(2.4, 1.35, o)
      }));
    return { depth: r.reduce((s, f) => s + f.depth, 0) / r.length, node: p };
  });
}
function Ot(i, t, n, e, o, a) {
  return S.flatMap((c, h) => {
    const d = H(t, `peptide-row-${c.id}`);
    d.position.x = e[h], d.updateMatrix();
    const l = c.indel * 28 * $(n, 0.18, 0.64), r = c.snv * 28 * $(n, 0.32, 0.82);
    return [
      { key: "indel", y0: 0, y1: l, fill: Lt },
      { key: "snv", y0: l, y1: l + r, fill: Bt }
    ].filter((s) => s.y1 - s.y0 > 1e-6).map((s) => {
      const f = kt(i, d, [
        { x: -o, y: s.y0, z: 0 },
        { x: o, y: s.y0, z: 0 },
        { x: o, y: s.y1, z: 0 },
        { x: -o, y: s.y1, z: 0 }
      ]), m = b("g", {
        "data-mark": "bar segment",
        "data-key": `${c.id}:${s.key}`,
        "data-record-key": `Patient ID=${c.id};mutation class=${s.key}`,
        "data-parent": t.name,
        opacity: g(1, 0.92, a)
      });
      if (a < 1e-6) {
        const x = f.map((k) => k.x), y = f.map((k) => k.y);
        m.append(b("rect", {
          x: Math.min(...x),
          y: Math.min(...y),
          width: Math.max(...x) - Math.min(...x),
          height: Math.max(...y) - Math.min(...y),
          fill: s.fill,
          stroke: P,
          "stroke-width": 2.4
        }));
      } else
        m.append(b("path", {
          d: gt(f),
          fill: s.fill,
          stroke: P,
          "stroke-width": g(2.4, 1.35, a)
        }));
      return { depth: f.reduce((x, y) => x + y.depth, 0) / f.length, node: m };
    });
  });
}
function Xt(i, t = 1) {
  const n = b("g", { "data-guide": "vaccine mutation class legend", "data-guide-placement": "locked-across-lcm-and-panel-j", transform: "translate(710 1015)", opacity: t });
  n.append(b("rect", { x: 0, y: 0, width: 34, height: 28, fill: Bt, stroke: P, "stroke-width": 2 })), n.append(b("text", { x: 52, y: 25, fill: P, "font-family": "Arial", "font-size": 30 }, "SNV mutations")), n.append(b("rect", { x: 390, y: 0, width: 34, height: 28, fill: Lt, stroke: P, "stroke-width": 2 })), n.append(b("text", { x: 442, y: 25, fill: P, "font-family": "Arial", "font-size": 30 }, "Frameshift Indel mutations")), i.append(n);
}
function Ee(i, t) {
  const n = Wt(i, 0), e = Ht(), o = H(e.root, "coding-world-xz-carrier"), a = H(e.root, "peptide-world-xy-carrier"), c = Ct(e.screenPose(
    { x: 480, y: 830 },
    { x: 1740, y: 830 },
    { x: 480, y: 305 },
    1440,
    588
  )), h = e.worldPose(
    { x: -720, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 0, z: 1 }
  ), d = e.worldPose({ x: -720, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }), l = $(t, 0, 0.28), r = $(t, 0.3, 0.8);
  Vt(e, o, c, h, l, r), e.applyPose(a, d, d, 1), et(n, e, a, 560, "#fffaf7", $(t, 0.38, 0.72), "stacked bar (b)"), et(n, e, o, 590, "#f7f6fb", $(t, 0.3, 0.64), "bar (b)");
  const p = r, s = S.map((z, _) => g(80 + _ * 160, 60 + _ * 165, p)), f = S.map((z, _) => 60 + _ * 165), m = b("g", { "data-layer": "guides" });
  n.append(m), p <= 1e-6 ? (lt(m, e, o, p), nt(m, e, o, s, p, 13 * 588 / 525)) : (nt(m, e, o, s, p, 13 * 588 / 525), lt(m, e, o, p)), pt(m, e, a, 1, $(t, 0.46, 0.84));
  const x = e.projectLocal(o, { x: 0, y: 0, z: 0 });
  m.append(b("circle", {
    cx: x.x,
    cy: x.y,
    r: 6,
    fill: "#fff",
    stroke: P,
    "stroke-width": 2.5,
    opacity: $(t, 0.64, 0.92),
    "data-guide": "shared World origin"
  }));
  const y = $(t, 0.25, 0.92), k = [
    ...Ft(e, o, s, g(41.142857, tt, p), p),
    ...Ot(e, a, y, f, tt, 1)
  ].sort((z, _) => _.depth - z.depth), M = b("g", { "data-layer": "marks" });
  k.forEach(({ node: z }) => M.append(z)), p < 0.5 ? n.append(m, M) : n.append(M, m), Xt(n, $(t, 0.55, 0.92));
}
function je(i, t) {
  const n = Wt(i, 1), e = Ht(), o = H(e.root, "coding-world-xz-exit-carrier"), a = H(e.root, "peptide-world-xy-carrier"), c = e.worldPose(
    { x: -720, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 0, z: 1 }
  ), h = Ct(e.screenPose(
    { x: -430, y: 1190 },
    { x: 1010, y: 1190 },
    { x: -430, y: 602 },
    1440,
    588
  )), d = e.worldPose({ x: -720, y: 0, z: 0 }, { x: 1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }), l = e.screenPose({ x: 515, y: 805 }, { x: 1710, y: 805 }, { x: 515, y: 205 }, 1440, 560);
  e.applyPose(a, d, l, $(t, 0, 0.8));
  const r = $(t, 0.14, 0.66);
  Vt(e, o, c, h, r, r);
  const p = 1 - $(t, 0.3, 0.4);
  et(n, e, a, 560, "#fffaf7", 1 - $(t, 0.56, 0.88), "stacked bar (b)"), et(n, e, o, 590, "#f7f6fb", p, "bar (b)");
  const s = $(t, 0, 0.8), f = S.map((z, _) => g(60 + _ * 165, 80 + _ * 160, s)), m = S.map((z, _) => 60 + _ * 165), x = b("g", { "data-layer": "guides" });
  n.append(x), s >= 1 - 1e-6 ? (pt(x, e, a, 1 - s), nt(x, e, a, f, 1 - s, 13 * 560 / 600)) : (nt(x, e, a, f, 1 - s, 13 * 560 / 600), pt(x, e, a, 1 - s)), lt(x, e, o, 1, p);
  const y = e.projectLocal(a, { x: 0, y: 0, z: 0 });
  x.append(b("circle", {
    cx: y.x,
    cy: y.y,
    r: 6,
    fill: "#fff",
    stroke: P,
    "stroke-width": 2.5,
    opacity: 1 - $(t, 0.24, 0.58),
    "data-guide": "shared World origin"
  }));
  const k = [
    ...Ot(e, a, 1, f, g(tt, Ie, s), 1 - s),
    ...Ft(e, o, m, tt, 1, p)
  ].sort((z, _) => _.depth - z.depth), M = b("g", { "data-layer": "marks" });
  k.forEach(({ node: z }) => M.append(z)), s < 0.5 ? n.append(M, x) : n.append(x, M), Xt(n, 1);
}
function Te(i, t) {
  const n = Dt(Number.isFinite(t) ? t : 0);
  n <= 0.5 ? Ee(i, n * 2) : je(i, n * 2 - 1), i.setAttribute("data-animation-progress", n.toFixed(6)), i.setAttribute("data-transition-table", "Step 6");
}
const Be = "http://www.w3.org/2000/svg", C = "109", Le = /* @__PURE__ */ new Set(["101", "102", "104", "105", "106", "107", "108", "109", "110"]), De = "#8180bd", Ce = "#fcc492", Y = "#a91e22", Z = "#262323";
function I(i, t = {}, n) {
  const e = document.createElementNS(Be, i);
  return Object.entries(t).forEach(([o, a]) => e.setAttribute(o, String(a))), n !== void 0 && (e.textContent = n), e;
}
const Ve = (i) => Math.max(0, Math.min(1, i)), ht = (i) => {
  const t = Ve(i);
  return t * t * t * (t * (t * 6 - 15) + 10);
};
function $t(i, t, n, e, o) {
  return i <= t || i >= o ? 0 : i < n ? ht((i - t) / (n - t)) : i <= e ? 1 : ht((o - i) / (o - e));
}
function We(i) {
  var o;
  if (i.tagName.toLowerCase() === "rect") {
    const a = i, c = Number(a.getAttribute("x")), h = Number(a.getAttribute("y")), d = Number(a.getAttribute("width")), l = Number(a.getAttribute("height"));
    if ([c, h, d, l].every(Number.isFinite))
      return { left: c, top: h, right: c + d, bottom: h + l };
  }
  const t = (((o = i.getAttribute("d")) == null ? void 0 : o.match(/-?\d+(?:\.\d+)?/g)) ?? []).map(Number);
  if (t.length < 4) return null;
  const n = t.filter((a, c) => c % 2 === 0), e = t.filter((a, c) => c % 2 === 1);
  return {
    left: Math.min(...n),
    top: Math.min(...e),
    right: Math.max(...n),
    bottom: Math.max(...e)
  };
}
function At(i) {
  const t = i.flatMap(
    (n) => [...n.querySelectorAll("rect, path")].map(We).filter((e) => e !== null)
  );
  return t.length ? {
    left: Math.min(...t.map((n) => n.left)),
    top: Math.min(...t.map((n) => n.top)),
    right: Math.max(...t.map((n) => n.right)),
    bottom: Math.max(...t.map((n) => n.bottom))
  } : null;
}
function St(i, t, n) {
  i.append(I("rect", {
    x: t.left - 11,
    y: t.top - 11,
    width: t.right - t.left + 11 * 2,
    height: t.bottom - t.top + 11 * 2,
    rx: 10,
    fill: "none",
    stroke: Y,
    "stroke-width": 5,
    opacity: n
  }));
}
function He(i, t, n) {
  const e = I("g", {
    transform: "translate(1430 72)",
    opacity: t,
    "data-annotation": "Patient 109 contrast"
  });
  e.append(I("rect", {
    x: 0,
    y: 0,
    width: 650,
    height: 216,
    rx: 18,
    fill: "#ffffff",
    "fill-opacity": 0.94,
    stroke: Z,
    "stroke-width": 2.5
  })), e.append(I("text", {
    x: 34,
    y: 46,
    fill: Z,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 29,
    "font-weight": 700
  }, "PATIENT 109")), e.append(I("rect", { x: 34, y: 72, width: 34, height: 24, rx: 3, fill: De })), e.append(I("text", {
    x: 88,
    y: 94,
    fill: Z,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 27
  }, "29 coding mutations — low"));
  const o = I("g", { opacity: n });
  o.append(I("rect", { x: 34, y: 122, width: 34, height: 12, rx: 2, fill: Ce })), o.append(I("rect", { x: 34, y: 134, width: 34, height: 12, rx: 2, fill: Y })), o.append(I("text", {
    x: 88,
    y: 145,
    fill: Z,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 27,
    "font-weight": 700
  }, "16 vaccine peptides — high")), o.append(I("text", {
    x: 88,
    y: 190,
    fill: Y,
    "font-family": "Arial, Helvetica, sans-serif",
    "font-size": 24,
    "font-weight": 700
  }, "Low mutations do not imply a low stack")), e.append(o), i.append(e);
}
function Fe(i, t) {
  const n = Math.max(
    $t(t, 0.06, 0.14, 0.42, 0.5),
    $t(t, 0.5, 0.57, 0.88, 0.98)
  );
  if (n <= 0) return;
  const e = 1 - n * 0.72;
  i.querySelectorAll("[data-mark]").forEach((r) => {
    var s;
    if ((s = r.dataset.key) != null && s.startsWith(`${C}:`) || r.dataset.key === C) return;
    const p = Number(r.getAttribute("opacity") ?? 1);
    r.setAttribute("opacity", String(p * e));
  }), i.querySelectorAll("[data-guide] text").forEach((r) => {
    var s;
    const p = ((s = r.textContent) == null ? void 0 : s.trim()) ?? "";
    Le.has(p) && (p === C ? (r.setAttribute("fill", Y), r.setAttribute("font-weight", "700")) : r.setAttribute("opacity", String(e)));
  });
  const o = i.querySelector(
    `[data-mark="bar"][data-key="${C}"]`
  ), a = [
    i.querySelector(`[data-key="${C}:indel"]`),
    i.querySelector(`[data-key="${C}:snv"]`)
  ].filter((r) => r !== null), c = o ? At([o]) : null, h = At(a), d = t < 0.5 ? ht((t - 0.28) / 0.12) : 1, l = I("g", {
    "data-guide": "Patient 109 low-mutation high-stack contrast",
    "pointer-events": "none"
  });
  if (c && St(l, c, n), h && St(l, h, n * d), c && h) {
    const r = { x: (c.left + c.right) / 2, y: c.top }, p = { x: (h.left + h.right) / 2, y: h.top }, s = Math.min(r.y, p.y) - 70;
    l.append(I("path", {
      d: `M${r.x} ${r.y} C${r.x} ${s} ${p.x} ${s} ${p.x} ${p.y}`,
      fill: "none",
      stroke: "#ffffff",
      "stroke-width": 9,
      opacity: n * d * 0.9
    })), l.append(I("path", {
      d: `M${r.x} ${r.y} C${r.x} ${s} ${p.x} ${s} ${p.x} ${p.y}`,
      fill: "none",
      stroke: Y,
      "stroke-width": 3,
      "stroke-dasharray": "10 8",
      opacity: n * d
    }));
  }
  He(l, n, d), i.append(l);
}
const qt = (i) => Math.max(0, Math.min(1, i)), It = (i) => {
  const t = qt(i);
  return t * t * t * (t * (t * 6 - 15) + 10);
};
function Oe(i, t) {
  Te(i, t);
  const n = qt(Number.isFinite(t) ? t : 0), e = n <= 0.5 ? It(n * 2) : It((1 - n) * 2);
  Tt(i, e), Fe(i, n);
}
const Ke = Rt(
  ie,
  {
    frame: rt,
    keyframes: le,
    renderKeyframe: we,
    renderAnimation: Oe
  }
);
export {
  Ke as barToStackedTransitionSpace
};
