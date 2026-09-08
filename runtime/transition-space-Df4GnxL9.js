const k = "figure2story-transition-space/v1", h = (i) => new Set(i).size === i.length, S = (i, s) => i.length === s.length && i.every((a, c) => a === s[c]);
function d(i, s) {
  return i.includes(s);
}
function K(i) {
  var $;
  const s = [];
  i.schema_version !== k && s.push(`schema_version 必须是 ${k}`), i.id.trim() || s.push("id 不能为空"), i.figure_id.trim() || s.push("figure_id 不能为空"), i.pair.panel_i === i.pair.panel_j && s.push("一个 Transition Space 的两个 endpoint Panel 必须不同");
  const a = i.keyframes.map(({ index: e }) => e), c = i.keyframes.map((e, r) => r);
  S(a, c) || s.push("keyframes.index 必须从 0 开始连续递增"), i.keyframes.length < 2 && s.push("一个 Transition Space 至少需要两个 Keyframes");
  const l = i.keyframes[i.keyframes.length - 1];
  ((($ = i.keyframes[0]) == null ? void 0 : $.progress) !== 0 || (l == null ? void 0 : l.progress) !== 1) && s.push("首尾 Keyframe progress 必须分别为 0 和 1");
  for (let e = 1; e < i.keyframes.length; e += 1)
    i.keyframes[e].progress <= i.keyframes[e - 1].progress && s.push("Keyframe progress 必须严格递增");
  const t = new Set(a), f = (e, r) => {
    new Set(e).size !== e.length && s.push(`${r} 的 keyframe_indices 不得重复`);
    for (const n of e)
      t.has(n) || s.push(`${r} 引用了不存在的 Keyframe ${n}`);
  }, { worlds: p, cameras: u, viewports: m, planes: _, objects: y } = i.scene, w = p.map(({ id: e }) => e), g = u.map(({ id: e }) => e), P = m.map(({ id: e }) => e), j = _.map(({ id: e }) => e), x = y.map(({ id: e }) => e);
  for (const [e, r] of [
    ["World", w],
    ["camera", g],
    ["Viewport", P],
    ["Panel plane", j],
    ["scene object", x]
  ])
    h(r) || s.push(`${e} id 必须唯一`);
  for (const e of p) f(e.keyframe_indices, `World ${e.id}`);
  for (const e of u) {
    f(e.keyframe_indices, `camera ${e.id}`);
    const r = p.find(({ id: n }) => n === e.world_id);
    if (!r) s.push(`camera ${e.id} 引用了不存在的 World ${e.world_id}`);
    else for (const n of e.keyframe_indices)
      d(r.keyframe_indices, n) || s.push(`camera ${e.id} 在 Keyframe ${n} 的 World host 不存在`);
  }
  for (const e of m) f(e.keyframe_indices, `Viewport ${e.id}`);
  for (const e of _)
    if (f(e.keyframe_indices, `Panel plane ${e.id}`), e.result_refs.length ? h(e.result_refs) || s.push(`Panel plane ${e.id} 的 result_refs 不得重复`) : s.push(`Panel plane ${e.id} 缺少 result_refs`), e.position_fields.length ? h(e.position_fields) || s.push(`Panel plane ${e.id} 的 position_fields 不得重复`) : s.push(`Panel plane ${e.id} 缺少 position_fields`), h(e.local_axes) || s.push(`Panel plane ${e.id} 的 local_axes 不得重复`), h(e.world_axes) || s.push(`Panel plane ${e.id} 的 world_axes 不得重复`), e.panel !== i.pair.panel_i && e.panel !== i.pair.panel_j && s.push(`Panel plane ${e.id} 不属于当前 Transition Pair`), e.world_id === null != (e.camera_id === null) && s.push(`Panel plane ${e.id} 的 world_id 与 camera_id 必须同时存在或同时为 null`), e.world_id !== null) {
      const r = p.find(({ id: o }) => o === e.world_id), n = u.find(({ id: o }) => o === e.camera_id);
      r || s.push(`Panel plane ${e.id} 引用了不存在的 World ${e.world_id}`), n || s.push(`Panel plane ${e.id} 引用了不存在的 camera ${e.camera_id}`), n && n.world_id !== e.world_id && s.push(`Panel plane ${e.id} 的 World 与 camera 不属于同一个空间`);
      for (const o of e.keyframe_indices)
        r && !d(r.keyframe_indices, o) && s.push(`Panel plane ${e.id} 在 Keyframe ${o} 的 World 不存在`), n && !d(n.keyframe_indices, o) && s.push(`Panel plane ${e.id} 在 Keyframe ${o} 的 camera 不存在`);
    }
  const I = (e, r) => e.kind === "panel-plane" ? _.some(({ id: n, keyframe_indices: o }) => n === e.id && d(o, r)) : e.kind === "world" ? p.some(({ id: n, keyframe_indices: o }) => n === e.id && d(o, r)) : m.some(({ id: n, keyframe_indices: o }) => n === e.id && d(o, r));
  for (const e of y) {
    f(e.keyframe_indices, `scene object ${e.id}`);
    for (const r of e.hosts) f(r.keyframe_indices, `scene object ${e.id} host`);
    for (const r of e.keyframe_indices) {
      const n = e.hosts.filter(({ keyframe_indices: o }) => d(o, r));
      n.length !== 1 ? s.push(`scene object ${e.id} 在 Keyframe ${r} 必须且只能有一个 structural host`) : I(n[0].host, r) || s.push(`scene object ${e.id} 在 Keyframe ${r} 的 host 不存在或未激活`);
    }
    for (const r of e.hosts)
      for (const n of r.keyframe_indices)
        d(e.keyframe_indices, n) || s.push(`scene object ${e.id} 的 host 覆盖了对象不存在的 Keyframe ${n}`);
  }
  return s;
}
function b(i, s) {
  const a = K(i);
  if ((s.frame.width !== i.frame.width || s.frame.height !== i.frame.height) && a.push("runtime frame 与 transition-space.json 不一致"), s.keyframes.length !== i.keyframes.length)
    a.push("runtime Keyframe 数与 transition-space.json 不一致");
  else for (const [c, l] of s.keyframes.entries()) {
    const t = i.keyframes[c];
    (l.index !== t.index || l.kind !== t.kind || l.label !== t.label) && a.push(`runtime Keyframe ${c} 与 transition-space.json 不一致`);
  }
  if (a.length) throw new Error(`Invalid Transition Space ${i.id}:
${a.join(`
`)}`);
  return Object.freeze({ manifest: i, ...s });
}
export {
  b as d
};
