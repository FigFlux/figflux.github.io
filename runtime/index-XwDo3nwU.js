class b {
  constructor() {
    this._partials = new Float64Array(32), this._n = 0;
  }
  add(t) {
    const r = this._partials;
    let i = 0;
    for (let e = 0; e < this._n && e < 32; e++) {
      const f = r[e], l = t + f, u = Math.abs(t) < Math.abs(f) ? t - (l - f) : f - (l - t);
      u && (r[i++] = u), t = l;
    }
    return r[i] = t, this._n = i + 1, this;
  }
  valueOf() {
    const t = this._partials;
    let r = this._n, i, e, f, l = 0;
    if (r > 0) {
      for (l = t[--r]; r > 0 && (i = l, e = t[--r], l = i + e, f = e - (l - i), !f); )
        ;
      r > 0 && (f < 0 && t[r - 1] < 0 || f > 0 && t[r - 1] > 0) && (e = f * 2, i = l + e, e == i - l && (l = i));
    }
    return l;
  }
}
function* Dt(n) {
  for (const t of n)
    yield* t;
}
function Et(n) {
  return Array.from(Dt(n));
}
var T = 1e-6, $ = Math.PI, W = $ / 2, bn = $ / 4, K = $ * 2, k = 180 / $, B = $ / 180, F = Math.abs, qt = Math.atan, gn = Math.atan2, q = Math.cos, O = Math.sin, Ot = Math.sign || function(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}, tn = Math.sqrt;
function Xt(n) {
  return n > 1 ? 0 : n < -1 ? $ : Math.acos(n);
}
function vn(n) {
  return n > 1 ? W : n < -1 ? -W : Math.asin(n);
}
function J() {
}
function Pn(n, t) {
  n && tt.hasOwnProperty(n.type) && tt[n.type](n, t);
}
var nt = {
  Feature: function(n, t) {
    Pn(n.geometry, t);
  },
  FeatureCollection: function(n, t) {
    for (var r = n.features, i = -1, e = r.length; ++i < e; ) Pn(r[i].geometry, t);
  }
}, tt = {
  Sphere: function(n, t) {
    t.sphere();
  },
  Point: function(n, t) {
    n = n.coordinates, t.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, t) {
    for (var r = n.coordinates, i = -1, e = r.length; ++i < e; ) n = r[i], t.point(n[0], n[1], n[2]);
  },
  LineString: function(n, t) {
    On(n.coordinates, t, 0);
  },
  MultiLineString: function(n, t) {
    for (var r = n.coordinates, i = -1, e = r.length; ++i < e; ) On(r[i], t, 0);
  },
  Polygon: function(n, t) {
    it(n.coordinates, t);
  },
  MultiPolygon: function(n, t) {
    for (var r = n.coordinates, i = -1, e = r.length; ++i < e; ) it(r[i], t);
  },
  GeometryCollection: function(n, t) {
    for (var r = n.geometries, i = -1, e = r.length; ++i < e; ) Pn(r[i], t);
  }
};
function On(n, t, r) {
  var i = -1, e = n.length - r, f;
  for (t.lineStart(); ++i < e; ) f = n[i], t.point(f[0], f[1], f[2]);
  t.lineEnd();
}
function it(n, t) {
  var r = -1, i = n.length;
  for (t.polygonStart(); ++r < i; ) On(n[r], t, 1);
  t.polygonEnd();
}
function en(n, t) {
  n && nt.hasOwnProperty(n.type) ? nt[n.type](n, t) : Pn(n, t);
}
function Xn(n) {
  return [gn(n[1], n[0]), vn(n[2])];
}
function un(n) {
  var t = n[0], r = n[1], i = q(r);
  return [i * q(t), i * O(t), O(r)];
}
function _n(n, t) {
  return n[0] * t[0] + n[1] * t[1] + n[2] * t[2];
}
function Nn(n, t) {
  return [n[1] * t[2] - n[2] * t[1], n[2] * t[0] - n[0] * t[2], n[0] * t[1] - n[1] * t[0]];
}
function Cn(n, t) {
  n[0] += t[0], n[1] += t[1], n[2] += t[2];
}
function wn(n, t) {
  return [n[0] * t, n[1] * t, n[2] * t];
}
function Yn(n) {
  var t = tn(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= t, n[1] /= t, n[2] /= t;
}
function Zn(n, t) {
  function r(i, e) {
    return i = n(i, e), t(i[0], i[1]);
  }
  return n.invert && t.invert && (r.invert = function(i, e) {
    return i = t.invert(i, e), i && n.invert(i[0], i[1]);
  }), r;
}
function Bn(n, t) {
  return F(n) > $ && (n -= Math.round(n / K) * K), [n, t];
}
Bn.invert = Bn;
function Yt(n, t, r) {
  return (n %= K) ? t || r ? Zn(et(n), ot(t, r)) : et(n) : t || r ? ot(t, r) : Bn;
}
function rt(n) {
  return function(t, r) {
    return t += n, F(t) > $ && (t -= Math.round(t / K) * K), [t, r];
  };
}
function et(n) {
  var t = rt(n);
  return t.invert = rt(-n), t;
}
function ot(n, t) {
  var r = q(n), i = O(n), e = q(t), f = O(t);
  function l(u, v) {
    var g = q(v), o = q(u) * g, a = O(u) * g, c = O(v), p = c * r + o * i;
    return [
      gn(a * e - p * f, o * r - c * i),
      vn(p * e + a * f)
    ];
  }
  return l.invert = function(u, v) {
    var g = q(v), o = q(u) * g, a = O(u) * g, c = O(v), p = c * e - a * f;
    return [
      gn(a * e + c * f, o * r + p * i),
      vn(p * r - o * i)
    ];
  }, l;
}
function Zt(n, t, r, i, e, f) {
  if (r) {
    var l = q(t), u = O(t), v = i * r;
    e == null ? (e = t + i * K, f = t - v / 2) : (e = ut(l, e), f = ut(l, f), (i > 0 ? e < f : e > f) && (e += i * K));
    for (var g, o = e; i > 0 ? o > f : o < f; o -= v)
      g = Xn([l, -u * q(o), -u * O(o)]), n.point(g[0], g[1]);
  }
}
function ut(n, t) {
  t = un(t), t[0] -= n, Yn(t);
  var r = Xt(-t[1]);
  return ((-t[2] < 0 ? -r : r) + K - T) % K;
}
function _t() {
  var n = [], t;
  return {
    point: function(r, i, e) {
      t.push([r, i, e]);
    },
    lineStart: function() {
      n.push(t = []);
    },
    lineEnd: J,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var r = n;
      return n = [], t = null, r;
    }
  };
}
function Rn(n, t) {
  return F(n[0] - t[0]) < T && F(n[1] - t[1]) < T;
}
function yn(n, t, r, i) {
  this.x = n, this.z = t, this.o = r, this.e = i, this.v = !1, this.n = this.p = null;
}
function wt(n, t, r, i, e) {
  var f = [], l = [], u, v;
  if (n.forEach(function(h) {
    if (!((w = h.length - 1) <= 0)) {
      var w, d = h[0], P = h[w], E;
      if (Rn(d, P)) {
        if (!d[2] && !P[2]) {
          for (e.lineStart(), u = 0; u < w; ++u) e.point((d = h[u])[0], d[1]);
          e.lineEnd();
          return;
        }
        P[0] += 2 * T;
      }
      f.push(E = new yn(d, h, null, !0)), l.push(E.o = new yn(d, null, E, !1)), f.push(E = new yn(P, h, null, !1)), l.push(E.o = new yn(P, null, E, !0));
    }
  }), !!f.length) {
    for (l.sort(t), ft(f), ft(l), u = 0, v = l.length; u < v; ++u)
      l[u].e = r = !r;
    for (var g = f[0], o, a; ; ) {
      for (var c = g, p = !0; c.v; ) if ((c = c.n) === g) return;
      o = c.z, e.lineStart();
      do {
        if (c.v = c.o.v = !0, c.e) {
          if (p)
            for (u = 0, v = o.length; u < v; ++u) e.point((a = o[u])[0], a[1]);
          else
            i(c.x, c.n.x, 1, e);
          c = c.n;
        } else {
          if (p)
            for (o = c.p.z, u = o.length - 1; u >= 0; --u) e.point((a = o[u])[0], a[1]);
          else
            i(c.x, c.p.x, -1, e);
          c = c.p;
        }
        c = c.o, o = c.z, p = !p;
      } while (!c.v);
      e.lineEnd();
    }
  }
}
function ft(n) {
  if (t = n.length) {
    for (var t, r = 0, i = n[0], e; ++r < t; )
      i.n = e = n[r], e.p = i, i = e;
    i.n = e = n[0], e.p = i;
  }
}
function Fn(n) {
  return F(n[0]) <= $ ? n[0] : Ot(n[0]) * ((F(n[0]) + $) % K - $);
}
function Bt(n, t) {
  var r = Fn(t), i = t[1], e = O(i), f = [O(r), -q(r), 0], l = 0, u = 0, v = new b();
  e === 1 ? i = W + T : e === -1 && (i = -W - T);
  for (var g = 0, o = n.length; g < o; ++g)
    if (c = (a = n[g]).length)
      for (var a, c, p = a[c - 1], h = Fn(p), w = p[1] / 2 + bn, d = O(w), P = q(w), E = 0; E < c; ++E, h = S, d = R, P = z, p = y) {
        var y = a[E], S = Fn(y), M = y[1] / 2 + bn, R = O(M), z = q(M), I = S - h, L = I >= 0 ? 1 : -1, C = L * I, _ = C > $, Y = d * R;
        if (v.add(gn(Y * L * O(C), P * z + Y * q(C))), l += _ ? I + L * K : I, _ ^ h >= r ^ S >= r) {
          var D = Nn(un(p), un(y));
          Yn(D);
          var A = Nn(f, D);
          Yn(A);
          var s = (_ ^ I >= 0 ? -1 : 1) * vn(A[2]);
          (i > s || i === s && (D[0] || D[1])) && (u += _ ^ I >= 0 ? 1 : -1);
        }
      }
  return (l < -T || l < T && v < -1e-12) ^ u & 1;
}
function yt(n, t, r, i) {
  return function(e) {
    var f = t(e), l = _t(), u = t(l), v = !1, g, o, a, c = {
      point: p,
      lineStart: w,
      lineEnd: d,
      polygonStart: function() {
        c.point = P, c.lineStart = E, c.lineEnd = y, o = [], g = [];
      },
      polygonEnd: function() {
        c.point = p, c.lineStart = w, c.lineEnd = d, o = Et(o);
        var S = Bt(g, i);
        o.length ? (v || (e.polygonStart(), v = !0), wt(o, Ht, S, r, e)) : S && (v || (e.polygonStart(), v = !0), e.lineStart(), r(null, null, 1, e), e.lineEnd()), v && (e.polygonEnd(), v = !1), o = g = null;
      },
      sphere: function() {
        e.polygonStart(), e.lineStart(), r(null, null, 1, e), e.lineEnd(), e.polygonEnd();
      }
    };
    function p(S, M) {
      n(S, M) && e.point(S, M);
    }
    function h(S, M) {
      f.point(S, M);
    }
    function w() {
      c.point = h, f.lineStart();
    }
    function d() {
      c.point = p, f.lineEnd();
    }
    function P(S, M) {
      a.push([S, M]), u.point(S, M);
    }
    function E() {
      u.lineStart(), a = [];
    }
    function y() {
      P(a[0][0], a[0][1]), u.lineEnd();
      var S = u.clean(), M = l.result(), R, z = M.length, I, L, C;
      if (a.pop(), g.push(a), a = null, !!z) {
        if (S & 1) {
          if (L = M[0], (I = L.length - 1) > 0) {
            for (v || (e.polygonStart(), v = !0), e.lineStart(), R = 0; R < I; ++R) e.point((C = L[R])[0], C[1]);
            e.lineEnd();
          }
          return;
        }
        z > 1 && S & 2 && M.push(M.pop().concat(M.shift())), o.push(M.filter(Gt));
      }
    }
    return c;
  };
}
function Gt(n) {
  return n.length > 1;
}
function Ht(n, t) {
  return ((n = n.x)[0] < 0 ? n[1] - W - T : W - n[1]) - ((t = t.x)[0] < 0 ? t[1] - W - T : W - t[1]);
}
const lt = yt(
  function() {
    return !0;
  },
  Wt,
  Kt,
  [-$, -W]
);
function Wt(n) {
  var t = NaN, r = NaN, i = NaN, e;
  return {
    lineStart: function() {
      n.lineStart(), e = 1;
    },
    point: function(f, l) {
      var u = f > 0 ? $ : -$, v = F(f - t);
      F(v - $) < T ? (n.point(t, r = (r + l) / 2 > 0 ? W : -W), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(u, r), n.point(f, r), e = 0) : i !== u && v >= $ && (F(t - i) < T && (t -= i * T), F(f - u) < T && (f -= u * T), r = Jt(t, r, f, l), n.point(i, r), n.lineEnd(), n.lineStart(), n.point(u, r), e = 0), n.point(t = f, r = l), i = u;
    },
    lineEnd: function() {
      n.lineEnd(), t = r = NaN;
    },
    clean: function() {
      return 2 - e;
    }
  };
}
function Jt(n, t, r, i) {
  var e, f, l = O(n - r);
  return F(l) > T ? qt((O(t) * (f = q(i)) * O(r) - O(i) * (e = q(t)) * O(n)) / (e * f * l)) : (t + i) / 2;
}
function Kt(n, t, r, i) {
  var e;
  if (n == null)
    e = r * W, i.point(-$, e), i.point(0, e), i.point($, e), i.point($, 0), i.point($, -e), i.point(0, -e), i.point(-$, -e), i.point(-$, 0), i.point(-$, e);
  else if (F(n[0] - t[0]) > T) {
    var f = n[0] < t[0] ? $ : -$;
    e = r * f / 2, i.point(-f, e), i.point(0, e), i.point(f, e);
  } else
    i.point(t[0], t[1]);
}
function Qt(n) {
  var t = q(n), r = 2 * B, i = t > 0, e = F(t) > T;
  function f(o, a, c, p) {
    Zt(p, n, r, c, o, a);
  }
  function l(o, a) {
    return q(o) * q(a) > t;
  }
  function u(o) {
    var a, c, p, h, w;
    return {
      lineStart: function() {
        h = p = !1, w = 1;
      },
      point: function(d, P) {
        var E = [d, P], y, S = l(d, P), M = i ? S ? 0 : g(d, P) : S ? g(d + (d < 0 ? $ : -$), P) : 0;
        if (!a && (h = p = S) && o.lineStart(), S !== p && (y = v(a, E), (!y || Rn(a, y) || Rn(E, y)) && (E[2] = 1)), S !== p)
          w = 0, S ? (o.lineStart(), y = v(E, a), o.point(y[0], y[1])) : (y = v(a, E), o.point(y[0], y[1], 2), o.lineEnd()), a = y;
        else if (e && a && i ^ S) {
          var R;
          !(M & c) && (R = v(E, a, !0)) && (w = 0, i ? (o.lineStart(), o.point(R[0][0], R[0][1]), o.point(R[1][0], R[1][1]), o.lineEnd()) : (o.point(R[1][0], R[1][1]), o.lineEnd(), o.lineStart(), o.point(R[0][0], R[0][1], 3)));
        }
        S && (!a || !Rn(a, E)) && o.point(E[0], E[1]), a = E, p = S, c = M;
      },
      lineEnd: function() {
        p && o.lineEnd(), a = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return w | (h && p) << 1;
      }
    };
  }
  function v(o, a, c) {
    var p = un(o), h = un(a), w = [1, 0, 0], d = Nn(p, h), P = _n(d, d), E = d[0], y = P - E * E;
    if (!y) return !c && o;
    var S = t * P / y, M = -t * E / y, R = Nn(w, d), z = wn(w, S), I = wn(d, M);
    Cn(z, I);
    var L = R, C = _n(z, L), _ = _n(L, L), Y = C * C - _ * (_n(z, z) - 1);
    if (!(Y < 0)) {
      var D = tn(Y), A = wn(L, (-C - D) / _);
      if (Cn(A, z), A = Xn(A), !c) return A;
      var s = o[0], N = a[0], X = o[1], Z = a[1], G;
      N < s && (G = s, s = N, N = G);
      var ln = N - s, V = F(ln - $) < T, x = V || ln < T;
      if (!V && Z < X && (G = X, X = Z, Z = G), x ? V ? X + Z > 0 ^ A[1] < (F(A[0] - s) < T ? X : Z) : X <= A[1] && A[1] <= Z : ln > $ ^ (s <= A[0] && A[0] <= N)) {
        var m = wn(L, (-C + D) / _);
        return Cn(m, z), [A, Xn(m)];
      }
    }
  }
  function g(o, a) {
    var c = i ? n : $ - n, p = 0;
    return o < -c ? p |= 1 : o > c && (p |= 2), a < -c ? p |= 4 : a > c && (p |= 8), p;
  }
  return yt(l, u, f, i ? [0, -n] : [-$, n - $]);
}
function Ut(n, t, r, i, e, f) {
  var l = n[0], u = n[1], v = t[0], g = t[1], o = 0, a = 1, c = v - l, p = g - u, h;
  if (h = r - l, !(!c && h > 0)) {
    if (h /= c, c < 0) {
      if (h < o) return;
      h < a && (a = h);
    } else if (c > 0) {
      if (h > a) return;
      h > o && (o = h);
    }
    if (h = e - l, !(!c && h < 0)) {
      if (h /= c, c < 0) {
        if (h > a) return;
        h > o && (o = h);
      } else if (c > 0) {
        if (h < o) return;
        h < a && (a = h);
      }
      if (h = i - u, !(!p && h > 0)) {
        if (h /= p, p < 0) {
          if (h < o) return;
          h < a && (a = h);
        } else if (p > 0) {
          if (h > a) return;
          h > o && (o = h);
        }
        if (h = f - u, !(!p && h < 0)) {
          if (h /= p, p < 0) {
            if (h > a) return;
            h > o && (o = h);
          } else if (p > 0) {
            if (h < o) return;
            h < a && (a = h);
          }
          return o > 0 && (n[0] = l + o * c, n[1] = u + o * p), a < 1 && (t[0] = l + a * c, t[1] = u + a * p), !0;
        }
      }
    }
  }
}
var an = 1e9, Mn = -an;
function Vt(n, t, r, i) {
  function e(g, o) {
    return n <= g && g <= r && t <= o && o <= i;
  }
  function f(g, o, a, c) {
    var p = 0, h = 0;
    if (g == null || (p = l(g, a)) !== (h = l(o, a)) || v(g, o) < 0 ^ a > 0)
      do
        c.point(p === 0 || p === 3 ? n : r, p > 1 ? i : t);
      while ((p = (p + a + 4) % 4) !== h);
    else
      c.point(o[0], o[1]);
  }
  function l(g, o) {
    return F(g[0] - n) < T ? o > 0 ? 0 : 3 : F(g[0] - r) < T ? o > 0 ? 2 : 1 : F(g[1] - t) < T ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2;
  }
  function u(g, o) {
    return v(g.x, o.x);
  }
  function v(g, o) {
    var a = l(g, 1), c = l(o, 1);
    return a !== c ? a - c : a === 0 ? o[1] - g[1] : a === 1 ? g[0] - o[0] : a === 2 ? g[1] - o[1] : o[0] - g[0];
  }
  return function(g) {
    var o = g, a = _t(), c, p, h, w, d, P, E, y, S, M, R, z = {
      point: I,
      lineStart: Y,
      lineEnd: D,
      polygonStart: C,
      polygonEnd: _
    };
    function I(s, N) {
      e(s, N) && o.point(s, N);
    }
    function L() {
      for (var s = 0, N = 0, X = p.length; N < X; ++N)
        for (var Z = p[N], G = 1, ln = Z.length, V = Z[0], x, m, En = V[0], rn = V[1]; G < ln; ++G)
          x = En, m = rn, V = Z[G], En = V[0], rn = V[1], m <= i ? rn > i && (En - x) * (i - m) > (rn - m) * (n - x) && ++s : rn <= i && (En - x) * (i - m) < (rn - m) * (n - x) && --s;
      return s;
    }
    function C() {
      o = a, c = [], p = [], R = !0;
    }
    function _() {
      var s = L(), N = R && s, X = (c = Et(c)).length;
      (N || X) && (g.polygonStart(), N && (g.lineStart(), f(null, null, 1, g), g.lineEnd()), X && wt(c, u, s, f, g), g.polygonEnd()), o = g, c = p = h = null;
    }
    function Y() {
      z.point = A, p && p.push(h = []), M = !0, S = !1, E = y = NaN;
    }
    function D() {
      c && (A(w, d), P && S && a.rejoin(), c.push(a.result())), z.point = I, S && o.lineEnd();
    }
    function A(s, N) {
      var X = e(s, N);
      if (p && h.push([s, N]), M)
        w = s, d = N, P = X, M = !1, X && (o.lineStart(), o.point(s, N));
      else if (X && S) o.point(s, N);
      else {
        var Z = [E = Math.max(Mn, Math.min(an, E)), y = Math.max(Mn, Math.min(an, y))], G = [s = Math.max(Mn, Math.min(an, s)), N = Math.max(Mn, Math.min(an, N))];
        Ut(Z, G, n, t, r, i) ? (S || (o.lineStart(), o.point(Z[0], Z[1])), o.point(G[0], G[1]), X || o.lineEnd(), R = !1) : X && (o.lineStart(), o.point(s, N), R = !1);
      }
      E = s, y = N, S = X;
    }
    return z;
  };
}
const Gn = (n) => n;
var Dn = new b(), Hn = new b(), Mt, Rt, Wn, Jn, j = {
  point: J,
  lineStart: J,
  lineEnd: J,
  polygonStart: function() {
    j.lineStart = mt, j.lineEnd = jt;
  },
  polygonEnd: function() {
    j.lineStart = j.lineEnd = j.point = J, Dn.add(F(Hn)), Hn = new b();
  },
  result: function() {
    var n = Dn / 2;
    return Dn = new b(), n;
  }
};
function mt() {
  j.point = kt;
}
function kt(n, t) {
  j.point = Pt, Mt = Wn = n, Rt = Jn = t;
}
function Pt(n, t) {
  Hn.add(Jn * n - Wn * t), Wn = n, Jn = t;
}
function jt() {
  Pt(Mt, Rt);
}
var fn = 1 / 0, $n = fn, dn = -fn, In = dn, Ln = {
  point: xt,
  lineStart: J,
  lineEnd: J,
  polygonStart: J,
  polygonEnd: J,
  result: function() {
    var n = [[fn, $n], [dn, In]];
    return dn = In = -($n = fn = 1 / 0), n;
  }
};
function xt(n, t) {
  n < fn && (fn = n), n > dn && (dn = n), t < $n && ($n = t), t > In && (In = t);
}
var Kn = 0, Qn = 0, cn = 0, zn = 0, An = 0, on = 0, Un = 0, Vn = 0, sn = 0, Nt, $t, Q, U, H = {
  point: nn,
  lineStart: at,
  lineEnd: ct,
  polygonStart: function() {
    H.lineStart = ti, H.lineEnd = ii;
  },
  polygonEnd: function() {
    H.point = nn, H.lineStart = at, H.lineEnd = ct;
  },
  result: function() {
    var n = sn ? [Un / sn, Vn / sn] : on ? [zn / on, An / on] : cn ? [Kn / cn, Qn / cn] : [NaN, NaN];
    return Kn = Qn = cn = zn = An = on = Un = Vn = sn = 0, n;
  }
};
function nn(n, t) {
  Kn += n, Qn += t, ++cn;
}
function at() {
  H.point = bt;
}
function bt(n, t) {
  H.point = ni, nn(Q = n, U = t);
}
function ni(n, t) {
  var r = n - Q, i = t - U, e = tn(r * r + i * i);
  zn += e * (Q + n) / 2, An += e * (U + t) / 2, on += e, nn(Q = n, U = t);
}
function ct() {
  H.point = nn;
}
function ti() {
  H.point = ri;
}
function ii() {
  It(Nt, $t);
}
function ri(n, t) {
  H.point = It, nn(Nt = Q = n, $t = U = t);
}
function It(n, t) {
  var r = n - Q, i = t - U, e = tn(r * r + i * i);
  zn += e * (Q + n) / 2, An += e * (U + t) / 2, on += e, e = U * n - Q * t, Un += e * (Q + n), Vn += e * (U + t), sn += e * 3, nn(Q = n, U = t);
}
function Lt(n) {
  this._context = n;
}
Lt.prototype = {
  _radius: 4.5,
  pointRadius: function(n) {
    return this._radius = n, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._line === 0 && this._context.closePath(), this._point = NaN;
  },
  point: function(n, t) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(n, t), this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(n, t);
        break;
      }
      default: {
        this._context.moveTo(n + this._radius, t), this._context.arc(n, t, this._radius, 0, K);
        break;
      }
    }
  },
  result: J
};
var mn = new b(), qn, zt, At, pn, hn, Sn = {
  point: J,
  lineStart: function() {
    Sn.point = ei;
  },
  lineEnd: function() {
    qn && Tt(zt, At), Sn.point = J;
  },
  polygonStart: function() {
    qn = !0;
  },
  polygonEnd: function() {
    qn = null;
  },
  result: function() {
    var n = +mn;
    return mn = new b(), n;
  }
};
function ei(n, t) {
  Sn.point = Tt, zt = pn = n, At = hn = t;
}
function Tt(n, t) {
  pn -= n, hn -= t, mn.add(tn(pn * pn + hn * hn)), pn = n, hn = t;
}
let st, Tn, pt, ht;
class gt {
  constructor(t) {
    this._append = t == null ? Ct : oi(t), this._radius = 4.5, this._ = "";
  }
  pointRadius(t) {
    return this._radius = +t, this;
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    this._line === 0 && (this._ += "Z"), this._point = NaN;
  }
  point(t, r) {
    switch (this._point) {
      case 0: {
        this._append`M${t},${r}`, this._point = 1;
        break;
      }
      case 1: {
        this._append`L${t},${r}`;
        break;
      }
      default: {
        if (this._append`M${t},${r}`, this._radius !== pt || this._append !== Tn) {
          const i = this._radius, e = this._;
          this._ = "", this._append`m0,${i}a${i},${i} 0 1,1 0,${-2 * i}a${i},${i} 0 1,1 0,${2 * i}z`, pt = i, Tn = this._append, ht = this._, this._ = e;
        }
        this._ += ht;
        break;
      }
    }
  }
  result() {
    const t = this._;
    return this._ = "", t.length ? t : null;
  }
}
function Ct(n) {
  let t = 1;
  this._ += n[0];
  for (const r = n.length; t < r; ++t)
    this._ += arguments[t] + n[t];
}
function oi(n) {
  const t = Math.floor(n);
  if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
  if (t > 15) return Ct;
  if (t !== st) {
    const r = 10 ** t;
    st = t, Tn = function(e) {
      let f = 1;
      this._ += e[0];
      for (const l = e.length; f < l; ++f)
        this._ += Math.round(arguments[f] * r) / r + e[f];
    };
  }
  return Tn;
}
function di(n, t) {
  let r = 3, i = 4.5, e, f;
  function l(u) {
    return u && (typeof i == "function" && f.pointRadius(+i.apply(this, arguments)), en(u, e(f))), f.result();
  }
  return l.area = function(u) {
    return en(u, e(j)), j.result();
  }, l.measure = function(u) {
    return en(u, e(Sn)), Sn.result();
  }, l.bounds = function(u) {
    return en(u, e(Ln)), Ln.result();
  }, l.centroid = function(u) {
    return en(u, e(H)), H.result();
  }, l.projection = function(u) {
    return arguments.length ? (e = u == null ? (n = null, Gn) : (n = u).stream, l) : n;
  }, l.context = function(u) {
    return arguments.length ? (f = u == null ? (t = null, new gt(r)) : new Lt(t = u), typeof i != "function" && f.pointRadius(i), l) : t;
  }, l.pointRadius = function(u) {
    return arguments.length ? (i = typeof u == "function" ? u : (f.pointRadius(+u), +u), l) : i;
  }, l.digits = function(u) {
    if (!arguments.length) return r;
    if (u == null) r = null;
    else {
      const v = Math.floor(u);
      if (!(v >= 0)) throw new RangeError(`invalid digits: ${u}`);
      r = v;
    }
    return t === null && (f = new gt(r)), l;
  }, l.projection(n).digits(r).context(t);
}
function jn(n) {
  return function(t) {
    var r = new kn();
    for (var i in n) r[i] = n[i];
    return r.stream = t, r;
  };
}
function kn() {
}
kn.prototype = {
  constructor: kn,
  point: function(n, t) {
    this.stream.point(n, t);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function xn(n, t, r) {
  var i = n.clipExtent && n.clipExtent();
  return n.scale(150).translate([0, 0]), i != null && n.clipExtent(null), en(r, n.stream(Ln)), t(Ln.result()), i != null && n.clipExtent(i), n;
}
function Ft(n, t, r) {
  return xn(n, function(i) {
    var e = t[1][0] - t[0][0], f = t[1][1] - t[0][1], l = Math.min(e / (i[1][0] - i[0][0]), f / (i[1][1] - i[0][1])), u = +t[0][0] + (e - l * (i[1][0] + i[0][0])) / 2, v = +t[0][1] + (f - l * (i[1][1] + i[0][1])) / 2;
    n.scale(150 * l).translate([u, v]);
  }, r);
}
function ui(n, t, r) {
  return Ft(n, [[0, 0], t], r);
}
function fi(n, t, r) {
  return xn(n, function(i) {
    var e = +t, f = e / (i[1][0] - i[0][0]), l = (e - f * (i[1][0] + i[0][0])) / 2, u = -f * i[0][1];
    n.scale(150 * f).translate([l, u]);
  }, r);
}
function li(n, t, r) {
  return xn(n, function(i) {
    var e = +t, f = e / (i[1][1] - i[0][1]), l = -f * i[0][0], u = (e - f * (i[1][1] + i[0][1])) / 2;
    n.scale(150 * f).translate([l, u]);
  }, r);
}
var vt = 16, ai = q(30 * B);
function dt(n, t) {
  return +t ? si(n, t) : ci(n);
}
function ci(n) {
  return jn({
    point: function(t, r) {
      t = n(t, r), this.stream.point(t[0], t[1]);
    }
  });
}
function si(n, t) {
  function r(i, e, f, l, u, v, g, o, a, c, p, h, w, d) {
    var P = g - i, E = o - e, y = P * P + E * E;
    if (y > 4 * t && w--) {
      var S = l + c, M = u + p, R = v + h, z = tn(S * S + M * M + R * R), I = vn(R /= z), L = F(F(R) - 1) < T || F(f - a) < T ? (f + a) / 2 : gn(M, S), C = n(L, I), _ = C[0], Y = C[1], D = _ - i, A = Y - e, s = E * D - P * A;
      (s * s / y > t || F((P * D + E * A) / y - 0.5) > 0.3 || l * c + u * p + v * h < ai) && (r(i, e, f, l, u, v, _, Y, L, S /= z, M /= z, R, w, d), d.point(_, Y), r(_, Y, L, S, M, R, g, o, a, c, p, h, w, d));
    }
  }
  return function(i) {
    var e, f, l, u, v, g, o, a, c, p, h, w, d = {
      point: P,
      lineStart: E,
      lineEnd: S,
      polygonStart: function() {
        i.polygonStart(), d.lineStart = M;
      },
      polygonEnd: function() {
        i.polygonEnd(), d.lineStart = E;
      }
    };
    function P(I, L) {
      I = n(I, L), i.point(I[0], I[1]);
    }
    function E() {
      a = NaN, d.point = y, i.lineStart();
    }
    function y(I, L) {
      var C = un([I, L]), _ = n(I, L);
      r(a, c, o, p, h, w, a = _[0], c = _[1], o = I, p = C[0], h = C[1], w = C[2], vt, i), i.point(a, c);
    }
    function S() {
      d.point = P, i.lineEnd();
    }
    function M() {
      E(), d.point = R, d.lineEnd = z;
    }
    function R(I, L) {
      y(e = I, L), f = a, l = c, u = p, v = h, g = w, d.point = y;
    }
    function z() {
      r(a, c, o, p, h, w, f, l, e, u, v, g, vt, i), d.lineEnd = S, S();
    }
    return d;
  };
}
var pi = jn({
  point: function(n, t) {
    this.stream.point(n * B, t * B);
  }
});
function hi(n) {
  return jn({
    point: function(t, r) {
      var i = n(t, r);
      return this.stream.point(i[0], i[1]);
    }
  });
}
function gi(n, t, r, i, e) {
  function f(l, u) {
    return l *= i, u *= e, [t + n * l, r - n * u];
  }
  return f.invert = function(l, u) {
    return [(l - t) / n * i, (r - u) / n * e];
  }, f;
}
function St(n, t, r, i, e, f) {
  if (!f) return gi(n, t, r, i, e);
  var l = q(f), u = O(f), v = l * n, g = u * n, o = l / n, a = u / n, c = (u * r - l * t) / n, p = (u * t + l * r) / n;
  function h(w, d) {
    return w *= i, d *= e, [v * w - g * d + t, r - g * w - v * d];
  }
  return h.invert = function(w, d) {
    return [i * (o * w - a * d + c), e * (p - a * w - o * d)];
  }, h;
}
function Si(n) {
  return vi(function() {
    return n;
  })();
}
function vi(n) {
  var t, r = 150, i = 480, e = 250, f = 0, l = 0, u = 0, v = 0, g = 0, o, a = 0, c = 1, p = 1, h = null, w = lt, d = null, P, E, y, S = Gn, M = 0.5, R, z, I, L, C;
  function _(s) {
    return I(s[0] * B, s[1] * B);
  }
  function Y(s) {
    return s = I.invert(s[0], s[1]), s && [s[0] * k, s[1] * k];
  }
  _.stream = function(s) {
    return L && C === s ? L : L = pi(hi(o)(w(R(S(C = s)))));
  }, _.preclip = function(s) {
    return arguments.length ? (w = s, h = void 0, A()) : w;
  }, _.postclip = function(s) {
    return arguments.length ? (S = s, d = P = E = y = null, A()) : S;
  }, _.clipAngle = function(s) {
    return arguments.length ? (w = +s ? Qt(h = s * B) : (h = null, lt), A()) : h * k;
  }, _.clipExtent = function(s) {
    return arguments.length ? (S = s == null ? (d = P = E = y = null, Gn) : Vt(d = +s[0][0], P = +s[0][1], E = +s[1][0], y = +s[1][1]), A()) : d == null ? null : [[d, P], [E, y]];
  }, _.scale = function(s) {
    return arguments.length ? (r = +s, D()) : r;
  }, _.translate = function(s) {
    return arguments.length ? (i = +s[0], e = +s[1], D()) : [i, e];
  }, _.center = function(s) {
    return arguments.length ? (f = s[0] % 360 * B, l = s[1] % 360 * B, D()) : [f * k, l * k];
  }, _.rotate = function(s) {
    return arguments.length ? (u = s[0] % 360 * B, v = s[1] % 360 * B, g = s.length > 2 ? s[2] % 360 * B : 0, D()) : [u * k, v * k, g * k];
  }, _.angle = function(s) {
    return arguments.length ? (a = s % 360 * B, D()) : a * k;
  }, _.reflectX = function(s) {
    return arguments.length ? (c = s ? -1 : 1, D()) : c < 0;
  }, _.reflectY = function(s) {
    return arguments.length ? (p = s ? -1 : 1, D()) : p < 0;
  }, _.precision = function(s) {
    return arguments.length ? (R = dt(z, M = s * s), A()) : tn(M);
  }, _.fitExtent = function(s, N) {
    return Ft(_, s, N);
  }, _.fitSize = function(s, N) {
    return ui(_, s, N);
  }, _.fitWidth = function(s, N) {
    return fi(_, s, N);
  }, _.fitHeight = function(s, N) {
    return li(_, s, N);
  };
  function D() {
    var s = St(r, 0, 0, c, p, a).apply(null, t(f, l)), N = St(r, i - s[0], e - s[1], c, p, a);
    return o = Yt(u, v, g), z = Zn(t, N), I = Zn(o, z), R = dt(z, M), A();
  }
  function A() {
    return L = C = null, _;
  }
  return function() {
    return t = n.apply(this, arguments), _.invert = t.invert && Y, D();
  };
}
export {
  di as g,
  Si as p
};
