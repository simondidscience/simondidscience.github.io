/** Shopify CDN: Minification failed

Line 2582:25 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 2582:33 Transforming default arguments to the configured target environment ("es5") is not supported yet
Line 2590:12 Transforming const to the configured target environment ("es5") is not supported yet
Line 2592:32 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 2593:35 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 2594:37 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 2598:47 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 2603:32 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 2620:16 Transforming const to the configured target environment ("es5") is not supported yet
Line 2623:12 Transforming const to the configured target environment ("es5") is not supported yet
... and 586 more hidden warnings

**/
(() => {
    var e = {
            7111: (e, t, r) => {
                var n = r(9859),
                    i = r(6733),
                    s = r(9821),
                    a = n.TypeError;
                e.exports = function (e) {
                    if (i(e)) return e;
                    throw a(s(e) + " is not a function");
                };
            },
            7988: (e, t, r) => {
                var n = r(9859),
                    i = r(2359),
                    s = r(9821),
                    a = n.TypeError;
                e.exports = function (e) {
                    if (i(e)) return e;
                    throw a(s(e) + " is not a constructor");
                };
            },
            8505: (e, t, r) => {
                var n = r(9859),
                    i = r(6733),
                    s = n.String,
                    a = n.TypeError;
                e.exports = function (e) {
                    if ("object" == typeof e || i(e)) return e;
                    throw a("Can't set " + s(e) + " as a prototype");
                };
            },
            9736: (e, t, r) => {
                var n = r(95),
                    i = r(2391),
                    s = r(1787),
                    a = n("unscopables"),
                    o = Array.prototype;
                null == o[a] && s.f(o, a, { configurable: !0, value: i(null) }),
                    (e.exports = function (e) {
                        o[a][e] = !0;
                    });
            },
            7728: (e, t, r) => {
                var n = r(9859),
                    i = r(1321),
                    s = n.TypeError;
                e.exports = function (e, t) {
                    if (i(t, e)) return e;
                    throw s("Incorrect invocation");
                };
            },
            1176: (e, t, r) => {
                var n = r(9859),
                    i = r(5052),
                    s = n.String,
                    a = n.TypeError;
                e.exports = function (e) {
                    if (i(e)) return e;
                    throw a(s(e) + " is not an object");
                };
            },
            2460: (e, t, r) => {
                var n = r(4229);
                e.exports = n(function () {
                    if ("function" == typeof ArrayBuffer) {
                        var e = new ArrayBuffer(8);
                        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
                    }
                });
            },
            9540: (e, t, r) => {
                var n = r(905),
                    i = r(3231),
                    s = r(9646),
                    a = function (e) {
                        return function (t, r, a) {
                            var o,
                                l = n(t),
                                c = s(l),
                                d = i(a, c);
                            if (e && r != r) {
                                for (; c > d; ) if ((o = l[d++]) != o) return !0;
                            } else for (; c > d; d++) if ((e || d in l) && l[d] === r) return e || d || 0;
                            return !e && -1;
                        };
                    };
                e.exports = { includes: a(!0), indexOf: a(!1) };
            },
            9996: (e, t, r) => {
                var n = r(7636),
                    i = r(5968),
                    s = r(9337),
                    a = r(2991),
                    o = r(9646),
                    l = r(7501),
                    c = i([].push),
                    d = function (e) {
                        var t = 1 == e,
                            r = 2 == e,
                            i = 3 == e,
                            d = 4 == e,
                            u = 6 == e,
                            p = 7 == e,
                            f = 5 == e || u;
                        return function (h, v, m, g) {
                            for (
                                var y,
                                    b,
                                    w = a(h),
                                    x = s(w),
                                    S = n(v, m),
                                    T = o(x),
                                    C = 0,
                                    E = g || l,
                                    O = t ? E(h, T) : r || p ? E(h, 0) : void 0;
                                T > C;
                                C++
                            )
                                if ((f || C in x) && ((b = S((y = x[C]), C, w)), e))
                                    if (t) O[C] = b;
                                    else if (b)
                                        switch (e) {
                                            case 3:
                                                return !0;
                                            case 5:
                                                return y;
                                            case 6:
                                                return C;
                                            case 2:
                                                c(O, y);
                                        }
                                    else
                                        switch (e) {
                                            case 4:
                                                return !1;
                                            case 7:
                                                c(O, y);
                                        }
                            return u ? -1 : i || d ? d : O;
                        };
                    };
                e.exports = {
                    forEach: d(0),
                    map: d(1),
                    filter: d(2),
                    some: d(3),
                    every: d(4),
                    find: d(5),
                    findIndex: d(6),
                    filterReject: d(7),
                };
            },
            1909: (e, t, r) => {
                var n = r(5968);
                e.exports = n([].slice);
            },
            8760: (e, t, r) => {
                var n = r(9859),
                    i = r(3718),
                    s = r(2359),
                    a = r(5052),
                    o = r(95)("species"),
                    l = n.Array;
                e.exports = function (e) {
                    var t;
                    return (
                        i(e) &&
                            ((t = e.constructor),
                            ((s(t) && (t === l || i(t.prototype))) || (a(t) && null === (t = t[o]))) && (t = void 0)),
                        void 0 === t ? l : t
                    );
                };
            },
            7501: (e, t, r) => {
                var n = r(8760);
                e.exports = function (e, t) {
                    return new (n(e))(0 === t ? 0 : t);
                };
            },
            4575: (e, t, r) => {
                var n = r(95)("iterator"),
                    i = !1;
                try {
                    var s = 0,
                        a = {
                            next: function () {
                                return { done: !!s++ };
                            },
                            return: function () {
                                i = !0;
                            },
                        };
                    (a[n] = function () {
                        return this;
                    }),
                        Array.from(a, function () {
                            throw 2;
                        });
                } catch (e) {}
                e.exports = function (e, t) {
                    if (!t && !i) return !1;
                    var r = !1;
                    try {
                        var s = {};
                        (s[n] = function () {
                            return {
                                next: function () {
                                    return { done: (r = !0) };
                                },
                            };
                        }),
                            e(s);
                    } catch (e) {}
                    return r;
                };
            },
            7079: (e, t, r) => {
                var n = r(5968),
                    i = n({}.toString),
                    s = n("".slice);
                e.exports = function (e) {
                    return s(i(e), 8, -1);
                };
            },
            1589: (e, t, r) => {
                var n = r(9859),
                    i = r(1601),
                    s = r(6733),
                    a = r(7079),
                    o = r(95)("toStringTag"),
                    l = n.Object,
                    c =
                        "Arguments" ==
                        a(
                            (function () {
                                return arguments;
                            })()
                        );
                e.exports = i
                    ? a
                    : function (e) {
                          var t, r, n;
                          return void 0 === e
                              ? "Undefined"
                              : null === e
                              ? "Null"
                              : "string" ==
                                typeof (r = (function (e, t) {
                                    try {
                                        return e[t];
                                    } catch (e) {}
                                })((t = l(e)), o))
                              ? r
                              : c
                              ? a(t)
                              : "Object" == (n = a(t)) && s(t.callee)
                              ? "Arguments"
                              : n;
                      };
            },
            8081: (e, t, r) => {
                "use strict";
                var n = r(1787).f,
                    i = r(2391),
                    s = r(8787),
                    a = r(7636),
                    o = r(7728),
                    l = r(9003),
                    c = r(7675),
                    d = r(1832),
                    u = r(7400),
                    p = r(5926).fastKey,
                    f = r(6407),
                    h = f.set,
                    v = f.getterFor;
                e.exports = {
                    getConstructor: function (e, t, r, c) {
                        var d = e(function (e, n) {
                                o(e, f),
                                    h(e, { type: t, index: i(null), first: void 0, last: void 0, size: 0 }),
                                    u || (e.size = 0),
                                    null != n && l(n, e[c], { that: e, AS_ENTRIES: r });
                            }),
                            f = d.prototype,
                            m = v(t),
                            g = function (e, t, r) {
                                var n,
                                    i,
                                    s = m(e),
                                    a = y(e, t);
                                return (
                                    a
                                        ? (a.value = r)
                                        : ((s.last = a =
                                              {
                                                  index: (i = p(t, !0)),
                                                  key: t,
                                                  value: r,
                                                  previous: (n = s.last),
                                                  next: void 0,
                                                  removed: !1,
                                              }),
                                          s.first || (s.first = a),
                                          n && (n.next = a),
                                          u ? s.size++ : e.size++,
                                          "F" !== i && (s.index[i] = a)),
                                    e
                                );
                            },
                            y = function (e, t) {
                                var r,
                                    n = m(e),
                                    i = p(t);
                                if ("F" !== i) return n.index[i];
                                for (r = n.first; r; r = r.next) if (r.key == t) return r;
                            };
                        return (
                            s(f, {
                                clear: function () {
                                    for (var e = m(this), t = e.index, r = e.first; r; )
                                        (r.removed = !0),
                                            r.previous && (r.previous = r.previous.next = void 0),
                                            delete t[r.index],
                                            (r = r.next);
                                    (e.first = e.last = void 0), u ? (e.size = 0) : (this.size = 0);
                                },
                                delete: function (e) {
                                    var t = this,
                                        r = m(t),
                                        n = y(t, e);
                                    if (n) {
                                        var i = n.next,
                                            s = n.previous;
                                        delete r.index[n.index],
                                            (n.removed = !0),
                                            s && (s.next = i),
                                            i && (i.previous = s),
                                            r.first == n && (r.first = i),
                                            r.last == n && (r.last = s),
                                            u ? r.size-- : t.size--;
                                    }
                                    return !!n;
                                },
                                forEach: function (e) {
                                    for (
                                        var t, r = m(this), n = a(e, arguments.length > 1 ? arguments[1] : void 0);
                                        (t = t ? t.next : r.first);

                                    )
                                        for (n(t.value, t.key, this); t && t.removed; ) t = t.previous;
                                },
                                has: function (e) {
                                    return !!y(this, e);
                                },
                            }),
                            s(
                                f,
                                r
                                    ? {
                                          get: function (e) {
                                              var t = y(this, e);
                                              return t && t.value;
                                          },
                                          set: function (e, t) {
                                              return g(this, 0 === e ? 0 : e, t);
                                          },
                                      }
                                    : {
                                          add: function (e) {
                                              return g(this, (e = 0 === e ? 0 : e), e);
                                          },
                                      }
                            ),
                            u &&
                                n(f, "size", {
                                    get: function () {
                                        return m(this).size;
                                    },
                                }),
                            d
                        );
                    },
                    setStrong: function (e, t, r) {
                        var n = t + " Iterator",
                            i = v(t),
                            s = v(n);
                        c(
                            e,
                            t,
                            function (e, t) {
                                h(this, { type: n, target: e, state: i(e), kind: t, last: void 0 });
                            },
                            function () {
                                for (var e = s(this), t = e.kind, r = e.last; r && r.removed; ) r = r.previous;
                                return e.target && (e.last = r = r ? r.next : e.state.first)
                                    ? "keys" == t
                                        ? { value: r.key, done: !1 }
                                        : "values" == t
                                        ? { value: r.value, done: !1 }
                                        : { value: [r.key, r.value], done: !1 }
                                    : ((e.target = void 0), { value: void 0, done: !0 });
                            },
                            r ? "entries" : "values",
                            !r,
                            !0
                        ),
                            d(t);
                    },
                };
            },
            9789: (e, t, r) => {
                "use strict";
                var n = r(3103),
                    i = r(9859),
                    s = r(5968),
                    a = r(6541),
                    o = r(7487),
                    l = r(5926),
                    c = r(9003),
                    d = r(7728),
                    u = r(6733),
                    p = r(5052),
                    f = r(4229),
                    h = r(4575),
                    v = r(4555),
                    m = r(835);
                e.exports = function (e, t, r) {
                    var g = -1 !== e.indexOf("Map"),
                        y = -1 !== e.indexOf("Weak"),
                        b = g ? "set" : "add",
                        w = i[e],
                        x = w && w.prototype,
                        S = w,
                        T = {},
                        C = function (e) {
                            var t = s(x[e]);
                            o(
                                x,
                                e,
                                "add" == e
                                    ? function (e) {
                                          return t(this, 0 === e ? 0 : e), this;
                                      }
                                    : "delete" == e
                                    ? function (e) {
                                          return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                                      }
                                    : "get" == e
                                    ? function (e) {
                                          return y && !p(e) ? void 0 : t(this, 0 === e ? 0 : e);
                                      }
                                    : "has" == e
                                    ? function (e) {
                                          return !(y && !p(e)) && t(this, 0 === e ? 0 : e);
                                      }
                                    : function (e, r) {
                                          return t(this, 0 === e ? 0 : e, r), this;
                                      }
                            );
                        };
                    if (
                        a(
                            e,
                            !u(w) ||
                                !(
                                    y ||
                                    (x.forEach &&
                                        !f(function () {
                                            new w().entries().next();
                                        }))
                                )
                        )
                    )
                        (S = r.getConstructor(t, e, g, b)), l.enable();
                    else if (a(e, !0)) {
                        var E = new S(),
                            O = E[b](y ? {} : -0, 1) != E,
                            P = f(function () {
                                E.has(1);
                            }),
                            M = h(function (e) {
                                new w(e);
                            }),
                            k =
                                !y &&
                                f(function () {
                                    for (var e = new w(), t = 5; t--; ) e[b](t, t);
                                    return !e.has(-0);
                                });
                        M ||
                            (((S = t(function (e, t) {
                                d(e, x);
                                var r = m(new w(), e, S);
                                return null != t && c(t, r[b], { that: r, AS_ENTRIES: g }), r;
                            })).prototype = x),
                            (x.constructor = S)),
                            (P || k) && (C("delete"), C("has"), g && C("get")),
                            (k || O) && C(b),
                            y && x.clear && delete x.clear;
                    }
                    return (T[e] = S), n({ global: !0, forced: S != w }, T), v(S, e), y || r.setStrong(S, e, g), S;
                };
            },
            7081: (e, t, r) => {
                var n = r(8270),
                    i = r(4826),
                    s = r(7933),
                    a = r(1787);
                e.exports = function (e, t) {
                    for (var r = i(t), o = a.f, l = s.f, c = 0; c < r.length; c++) {
                        var d = r[c];
                        n(e, d) || o(e, d, l(t, d));
                    }
                };
            },
            7528: (e, t, r) => {
                var n = r(4229);
                e.exports = !n(function () {
                    function e() {}
                    return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
                });
            },
            3723: (e, t, r) => {
                "use strict";
                var n = r(693).IteratorPrototype,
                    i = r(2391),
                    s = r(5358),
                    a = r(4555),
                    o = r(5495),
                    l = function () {
                        return this;
                    };
                e.exports = function (e, t, r) {
                    var c = t + " Iterator";
                    return (e.prototype = i(n, { next: s(1, r) })), a(e, c, !1, !0), (o[c] = l), e;
                };
            },
            5762: (e, t, r) => {
                var n = r(7400),
                    i = r(1787),
                    s = r(5358);
                e.exports = n
                    ? function (e, t, r) {
                          return i.f(e, t, s(1, r));
                      }
                    : function (e, t, r) {
                          return (e[t] = r), e;
                      };
            },
            5358: (e) => {
                e.exports = function (e, t) {
                    return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
                };
            },
            7675: (e, t, r) => {
                "use strict";
                var n = r(3103),
                    i = r(266),
                    s = r(4231),
                    a = r(1805),
                    o = r(6733),
                    l = r(3723),
                    c = r(7567),
                    d = r(6540),
                    u = r(4555),
                    p = r(5762),
                    f = r(7487),
                    h = r(95),
                    v = r(5495),
                    m = r(693),
                    g = a.PROPER,
                    y = a.CONFIGURABLE,
                    b = m.IteratorPrototype,
                    w = m.BUGGY_SAFARI_ITERATORS,
                    x = h("iterator"),
                    S = "keys",
                    T = "values",
                    C = "entries",
                    E = function () {
                        return this;
                    };
                e.exports = function (e, t, r, a, h, m, O) {
                    l(r, t, a);
                    var P,
                        M,
                        k,
                        $ = function (e) {
                            if (e === h && z) return z;
                            if (!w && e in I) return I[e];
                            switch (e) {
                                case S:
                                case T:
                                case C:
                                    return function () {
                                        return new r(this, e);
                                    };
                            }
                            return function () {
                                return new r(this);
                            };
                        },
                        L = t + " Iterator",
                        A = !1,
                        I = e.prototype,
                        j = I[x] || I["@@iterator"] || (h && I[h]),
                        z = (!w && j) || $(h),
                        D = ("Array" == t && I.entries) || j;
                    if (
                        (D &&
                            (P = c(D.call(new e()))) !== Object.prototype &&
                            P.next &&
                            (s || c(P) === b || (d ? d(P, b) : o(P[x]) || f(P, x, E)),
                            u(P, L, !0, !0),
                            s && (v[L] = E)),
                        g &&
                            h == T &&
                            j &&
                            j.name !== T &&
                            (!s && y
                                ? p(I, "name", T)
                                : ((A = !0),
                                  (z = function () {
                                      return i(j, this);
                                  }))),
                        h)
                    )
                        if (((M = { values: $(T), keys: m ? z : $(S), entries: $(C) }), O))
                            for (k in M) (w || A || !(k in I)) && f(I, k, M[k]);
                        else n({ target: t, proto: !0, forced: w || A }, M);
                    return (s && !O) || I[x] === z || f(I, x, z, { name: h }), (v[t] = z), M;
                };
            },
            8423: (e, t, r) => {
                var n = r(9276),
                    i = r(8270),
                    s = r(5391),
                    a = r(1787).f;
                e.exports = function (e) {
                    var t = n.Symbol || (n.Symbol = {});
                    i(t, e) || a(t, e, { value: s.f(e) });
                };
            },
            7400: (e, t, r) => {
                var n = r(4229);
                e.exports = !n(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, 1, {
                            get: function () {
                                return 7;
                            },
                        })[1]
                    );
                });
            },
            2635: (e, t, r) => {
                var n = r(9859),
                    i = r(5052),
                    s = n.document,
                    a = i(s) && i(s.createElement);
                e.exports = function (e) {
                    return a ? s.createElement(e) : {};
                };
            },
            5694: (e) => {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0,
                };
            },
            8865: (e, t, r) => {
                var n = r(2635)("span").classList,
                    i = n && n.constructor && n.constructor.prototype;
                e.exports = i === Object.prototype ? void 0 : i;
            },
            598: (e, t, r) => {
                var n = r(1333);
                e.exports = n("navigator", "userAgent") || "";
            },
            6358: (e, t, r) => {
                var n,
                    i,
                    s = r(9859),
                    a = r(598),
                    o = s.process,
                    l = s.Deno,
                    c = (o && o.versions) || (l && l.version),
                    d = c && c.v8;
                d && (i = (n = d.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
                    !i &&
                        a &&
                        (!(n = a.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
                        (n = a.match(/Chrome\/(\d+)/)) &&
                        (i = +n[1]),
                    (e.exports = i);
            },
            3837: (e) => {
                e.exports = [
                    "constructor",
                    "hasOwnProperty",
                    "isPrototypeOf",
                    "propertyIsEnumerable",
                    "toLocaleString",
                    "toString",
                    "valueOf",
                ];
            },
            3103: (e, t, r) => {
                var n = r(9859),
                    i = r(7933).f,
                    s = r(5762),
                    a = r(7487),
                    o = r(2079),
                    l = r(7081),
                    c = r(6541);
                e.exports = function (e, t) {
                    var r,
                        d,
                        u,
                        p,
                        f,
                        h = e.target,
                        v = e.global,
                        m = e.stat;
                    if ((r = v ? n : m ? n[h] || o(h, {}) : (n[h] || {}).prototype))
                        for (d in t) {
                            if (
                                ((p = t[d]),
                                (u = e.noTargetGet ? (f = i(r, d)) && f.value : r[d]),
                                !c(v ? d : h + (m ? "." : "#") + d, e.forced) && void 0 !== u)
                            ) {
                                if (typeof p == typeof u) continue;
                                l(p, u);
                            }
                            (e.sham || (u && u.sham)) && s(p, "sham", !0), a(r, d, p, e);
                        }
                };
            },
            4229: (e) => {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            8476: (e, t, r) => {
                var n = r(4229);
                e.exports = !n(function () {
                    return Object.isExtensible(Object.preventExtensions({}));
                });
            },
            3171: (e) => {
                var t = Function.prototype,
                    r = t.apply,
                    n = t.bind,
                    i = t.call;
                e.exports =
                    ("object" == typeof Reflect && Reflect.apply) ||
                    (n
                        ? i.bind(r)
                        : function () {
                              return i.apply(r, arguments);
                          });
            },
            7636: (e, t, r) => {
                var n = r(5968),
                    i = r(7111),
                    s = n(n.bind);
                e.exports = function (e, t) {
                    return (
                        i(e),
                        void 0 === t
                            ? e
                            : s
                            ? s(e, t)
                            : function () {
                                  return e.apply(t, arguments);
                              }
                    );
                };
            },
            4128: (e, t, r) => {
                "use strict";
                var n = r(9859),
                    i = r(5968),
                    s = r(7111),
                    a = r(5052),
                    o = r(8270),
                    l = r(1909),
                    c = n.Function,
                    d = i([].concat),
                    u = i([].join),
                    p = {},
                    f = function (e, t, r) {
                        if (!o(p, t)) {
                            for (var n = [], i = 0; i < t; i++) n[i] = "a[" + i + "]";
                            p[t] = c("C,a", "return new C(" + u(n, ",") + ")");
                        }
                        return p[t](e, r);
                    };
                e.exports =
                    c.bind ||
                    function (e) {
                        var t = s(this),
                            r = t.prototype,
                            n = l(arguments, 1),
                            i = function () {
                                var r = d(n, l(arguments));
                                return this instanceof i ? f(t, r.length, r) : t.apply(e, r);
                            };
                        return a(r) && (i.prototype = r), i;
                    };
            },
            266: (e) => {
                var t = Function.prototype.call;
                e.exports = t.bind
                    ? t.bind(t)
                    : function () {
                          return t.apply(t, arguments);
                      };
            },
            1805: (e, t, r) => {
                var n = r(7400),
                    i = r(8270),
                    s = Function.prototype,
                    a = n && Object.getOwnPropertyDescriptor,
                    o = i(s, "name"),
                    l = o && "something" === function () {}.name,
                    c = o && (!n || (n && a(s, "name").configurable));
                e.exports = { EXISTS: o, PROPER: l, CONFIGURABLE: c };
            },
            5968: (e) => {
                var t = Function.prototype,
                    r = t.bind,
                    n = t.call,
                    i = r && r.bind(n);
                e.exports = r
                    ? function (e) {
                          return e && i(n, e);
                      }
                    : function (e) {
                          return (
                              e &&
                              function () {
                                  return n.apply(e, arguments);
                              }
                          );
                      };
            },
            1333: (e, t, r) => {
                var n = r(9859),
                    i = r(6733),
                    s = function (e) {
                        return i(e) ? e : void 0;
                    };
                e.exports = function (e, t) {
                    return arguments.length < 2 ? s(n[e]) : n[e] && n[e][t];
                };
            },
            8830: (e, t, r) => {
                var n = r(1589),
                    i = r(5300),
                    s = r(5495),
                    a = r(95)("iterator");
                e.exports = function (e) {
                    if (null != e) return i(e, a) || i(e, "@@iterator") || s[n(e)];
                };
            },
            8403: (e, t, r) => {
                var n = r(9859),
                    i = r(266),
                    s = r(7111),
                    a = r(1176),
                    o = r(9821),
                    l = r(8830),
                    c = n.TypeError;
                e.exports = function (e, t) {
                    var r = arguments.length < 2 ? l(e) : t;
                    if (s(r)) return a(i(r, e));
                    throw c(o(e) + " is not iterable");
                };
            },
            5300: (e, t, r) => {
                var n = r(7111);
                e.exports = function (e, t) {
                    var r = e[t];
                    return null == r ? void 0 : n(r);
                };
            },
            9859: (e, t, r) => {
                var n = function (e) {
                    return e && e.Math == Math && e;
                };
                e.exports =
                    n("object" == typeof globalThis && globalThis) ||
                    n("object" == typeof window && window) ||
                    n("object" == typeof self && self) ||
                    n("object" == typeof r.g && r.g) ||
                    (function () {
                        return this;
                    })() ||
                    Function("return this")();
            },
            8270: (e, t, r) => {
                var n = r(5968),
                    i = r(2991),
                    s = n({}.hasOwnProperty);
                e.exports =
                    Object.hasOwn ||
                    function (e, t) {
                        return s(i(e), t);
                    };
            },
            5977: (e) => {
                e.exports = {};
            },
            3777: (e, t, r) => {
                var n = r(1333);
                e.exports = n("document", "documentElement");
            },
            4394: (e, t, r) => {
                var n = r(7400),
                    i = r(4229),
                    s = r(2635);
                e.exports =
                    !n &&
                    !i(function () {
                        return (
                            7 !=
                            Object.defineProperty(s("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a
                        );
                    });
            },
            9337: (e, t, r) => {
                var n = r(9859),
                    i = r(5968),
                    s = r(4229),
                    a = r(7079),
                    o = n.Object,
                    l = i("".split);
                e.exports = s(function () {
                    return !o("z").propertyIsEnumerable(0);
                })
                    ? function (e) {
                          return "String" == a(e) ? l(e, "") : o(e);
                      }
                    : o;
            },
            835: (e, t, r) => {
                var n = r(6733),
                    i = r(5052),
                    s = r(6540);
                e.exports = function (e, t, r) {
                    var a, o;
                    return (
                        s && n((a = t.constructor)) && a !== r && i((o = a.prototype)) && o !== r.prototype && s(e, o),
                        e
                    );
                };
            },
            8511: (e, t, r) => {
                var n = r(5968),
                    i = r(6733),
                    s = r(5353),
                    a = n(Function.toString);
                i(s.inspectSource) ||
                    (s.inspectSource = function (e) {
                        return a(e);
                    }),
                    (e.exports = s.inspectSource);
            },
            5926: (e, t, r) => {
                var n = r(3103),
                    i = r(5968),
                    s = r(5977),
                    a = r(5052),
                    o = r(8270),
                    l = r(1787).f,
                    c = r(8151),
                    d = r(166),
                    u = r(5343),
                    p = r(1441),
                    f = r(8476),
                    h = !1,
                    v = p("meta"),
                    m = 0,
                    g = function (e) {
                        l(e, v, { value: { objectID: "O" + m++, weakData: {} } });
                    },
                    y = (e.exports = {
                        enable: function () {
                            (y.enable = function () {}), (h = !0);
                            var e = c.f,
                                t = i([].splice),
                                r = {};
                            (r[v] = 1),
                                e(r).length &&
                                    ((c.f = function (r) {
                                        for (var n = e(r), i = 0, s = n.length; i < s; i++)
                                            if (n[i] === v) {
                                                t(n, i, 1);
                                                break;
                                            }
                                        return n;
                                    }),
                                    n({ target: "Object", stat: !0, forced: !0 }, { getOwnPropertyNames: d.f }));
                        },
                        fastKey: function (e, t) {
                            if (!a(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                            if (!o(e, v)) {
                                if (!u(e)) return "F";
                                if (!t) return "E";
                                g(e);
                            }
                            return e[v].objectID;
                        },
                        getWeakData: function (e, t) {
                            if (!o(e, v)) {
                                if (!u(e)) return !0;
                                if (!t) return !1;
                                g(e);
                            }
                            return e[v].weakData;
                        },
                        onFreeze: function (e) {
                            return f && h && u(e) && !o(e, v) && g(e), e;
                        },
                    });
                s[v] = !0;
            },
            6407: (e, t, r) => {
                var n,
                    i,
                    s,
                    a = r(8694),
                    o = r(9859),
                    l = r(5968),
                    c = r(5052),
                    d = r(5762),
                    u = r(8270),
                    p = r(5353),
                    f = r(4399),
                    h = r(5977),
                    v = "Object already initialized",
                    m = o.TypeError,
                    g = o.WeakMap;
                if (a || p.state) {
                    var y = p.state || (p.state = new g()),
                        b = l(y.get),
                        w = l(y.has),
                        x = l(y.set);
                    (n = function (e, t) {
                        if (w(y, e)) throw new m(v);
                        return (t.facade = e), x(y, e, t), t;
                    }),
                        (i = function (e) {
                            return b(y, e) || {};
                        }),
                        (s = function (e) {
                            return w(y, e);
                        });
                } else {
                    var S = f("state");
                    (h[S] = !0),
                        (n = function (e, t) {
                            if (u(e, S)) throw new m(v);
                            return (t.facade = e), d(e, S, t), t;
                        }),
                        (i = function (e) {
                            return u(e, S) ? e[S] : {};
                        }),
                        (s = function (e) {
                            return u(e, S);
                        });
                }
                e.exports = {
                    set: n,
                    get: i,
                    has: s,
                    enforce: function (e) {
                        return s(e) ? i(e) : n(e, {});
                    },
                    getterFor: function (e) {
                        return function (t) {
                            var r;
                            if (!c(t) || (r = i(t)).type !== e) throw m("Incompatible receiver, " + e + " required");
                            return r;
                        };
                    },
                };
            },
            1943: (e, t, r) => {
                var n = r(95),
                    i = r(5495),
                    s = n("iterator"),
                    a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (i.Array === e || a[s] === e);
                };
            },
            3718: (e, t, r) => {
                var n = r(7079);
                e.exports =
                    Array.isArray ||
                    function (e) {
                        return "Array" == n(e);
                    };
            },
            6733: (e) => {
                e.exports = function (e) {
                    return "function" == typeof e;
                };
            },
            2359: (e, t, r) => {
                var n = r(5968),
                    i = r(4229),
                    s = r(6733),
                    a = r(1589),
                    o = r(1333),
                    l = r(8511),
                    c = function () {},
                    d = [],
                    u = o("Reflect", "construct"),
                    p = /^\s*(?:class|function)\b/,
                    f = n(p.exec),
                    h = !p.exec(c),
                    v = function (e) {
                        if (!s(e)) return !1;
                        try {
                            return u(c, d, e), !0;
                        } catch (e) {
                            return !1;
                        }
                    };
                e.exports =
                    !u ||
                    i(function () {
                        var e;
                        return (
                            v(v.call) ||
                            !v(Object) ||
                            !v(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? function (e) {
                              if (!s(e)) return !1;
                              switch (a(e)) {
                                  case "AsyncFunction":
                                  case "GeneratorFunction":
                                  case "AsyncGeneratorFunction":
                                      return !1;
                              }
                              return h || !!f(p, l(e));
                          }
                        : v;
            },
            6541: (e, t, r) => {
                var n = r(4229),
                    i = r(6733),
                    s = /#|\.prototype\./,
                    a = function (e, t) {
                        var r = l[o(e)];
                        return r == d || (r != c && (i(t) ? n(t) : !!t));
                    },
                    o = (a.normalize = function (e) {
                        return String(e).replace(s, ".").toLowerCase();
                    }),
                    l = (a.data = {}),
                    c = (a.NATIVE = "N"),
                    d = (a.POLYFILL = "P");
                e.exports = a;
            },
            5052: (e, t, r) => {
                var n = r(6733);
                e.exports = function (e) {
                    return "object" == typeof e ? null !== e : n(e);
                };
            },
            4231: (e) => {
                e.exports = !1;
            },
            9395: (e, t, r) => {
                var n = r(9859),
                    i = r(1333),
                    s = r(6733),
                    a = r(1321),
                    o = r(6969),
                    l = n.Object;
                e.exports = o
                    ? function (e) {
                          return "symbol" == typeof e;
                      }
                    : function (e) {
                          var t = i("Symbol");
                          return s(t) && a(t.prototype, l(e));
                      };
            },
            9003: (e, t, r) => {
                var n = r(9859),
                    i = r(7636),
                    s = r(266),
                    a = r(1176),
                    o = r(9821),
                    l = r(1943),
                    c = r(9646),
                    d = r(1321),
                    u = r(8403),
                    p = r(8830),
                    f = r(7281),
                    h = n.TypeError,
                    v = function (e, t) {
                        (this.stopped = e), (this.result = t);
                    },
                    m = v.prototype;
                e.exports = function (e, t, r) {
                    var n,
                        g,
                        y,
                        b,
                        w,
                        x,
                        S,
                        T = r && r.that,
                        C = !(!r || !r.AS_ENTRIES),
                        E = !(!r || !r.IS_ITERATOR),
                        O = !(!r || !r.INTERRUPTED),
                        P = i(t, T),
                        M = function (e) {
                            return n && f(n, "normal", e), new v(!0, e);
                        },
                        k = function (e) {
                            return C ? (a(e), O ? P(e[0], e[1], M) : P(e[0], e[1])) : O ? P(e, M) : P(e);
                        };
                    if (E) n = e;
                    else {
                        if (!(g = p(e))) throw h(o(e) + " is not iterable");
                        if (l(g)) {
                            for (y = 0, b = c(e); b > y; y++) if ((w = k(e[y])) && d(m, w)) return w;
                            return new v(!1);
                        }
                        n = u(e, g);
                    }
                    for (x = n.next; !(S = s(x, n)).done; ) {
                        try {
                            w = k(S.value);
                        } catch (e) {
                            f(n, "throw", e);
                        }
                        if ("object" == typeof w && w && d(m, w)) return w;
                    }
                    return new v(!1);
                };
            },
            7281: (e, t, r) => {
                var n = r(266),
                    i = r(1176),
                    s = r(5300);
                e.exports = function (e, t, r) {
                    var a, o;
                    i(e);
                    try {
                        if (!(a = s(e, "return"))) {
                            if ("throw" === t) throw r;
                            return r;
                        }
                        a = n(a, e);
                    } catch (e) {
                        (o = !0), (a = e);
                    }
                    if ("throw" === t) throw r;
                    if (o) throw a;
                    return i(a), r;
                };
            },
            693: (e, t, r) => {
                "use strict";
                var n,
                    i,
                    s,
                    a = r(4229),
                    o = r(6733),
                    l = r(2391),
                    c = r(7567),
                    d = r(7487),
                    u = r(95),
                    p = r(4231),
                    f = u("iterator"),
                    h = !1;
                [].keys && ("next" in (s = [].keys()) ? (i = c(c(s))) !== Object.prototype && (n = i) : (h = !0)),
                    null == n ||
                    a(function () {
                        var e = {};
                        return n[f].call(e) !== e;
                    })
                        ? (n = {})
                        : p && (n = l(n)),
                    o(n[f]) ||
                        d(n, f, function () {
                            return this;
                        }),
                    (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h });
            },
            5495: (e) => {
                e.exports = {};
            },
            9646: (e, t, r) => {
                var n = r(4237);
                e.exports = function (e) {
                    return n(e.length);
                };
            },
            3839: (e, t, r) => {
                var n = r(6358),
                    i = r(4229);
                e.exports =
                    !!Object.getOwnPropertySymbols &&
                    !i(function () {
                        var e = Symbol();
                        return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && n && n < 41);
                    });
            },
            8694: (e, t, r) => {
                var n = r(9859),
                    i = r(6733),
                    s = r(8511),
                    a = n.WeakMap;
                e.exports = i(a) && /native code/.test(s(a));
            },
            6596: (e, t, r) => {
                var n = r(9859),
                    i = r(4229),
                    s = r(5968),
                    a = r(3326),
                    o = r(1017).trim,
                    l = r(1647),
                    c = n.parseInt,
                    d = n.Symbol,
                    u = d && d.iterator,
                    p = /^[+-]?0x/i,
                    f = s(p.exec),
                    h =
                        8 !== c(l + "08") ||
                        22 !== c(l + "0x16") ||
                        (u &&
                            !i(function () {
                                c(Object(u));
                            }));
                e.exports = h
                    ? function (e, t) {
                          var r = o(a(e));
                          return c(r, t >>> 0 || (f(p, r) ? 16 : 10));
                      }
                    : c;
            },
            2391: (e, t, r) => {
                var n,
                    i = r(1176),
                    s = r(219),
                    a = r(3837),
                    o = r(5977),
                    l = r(3777),
                    c = r(2635),
                    d = r(4399)("IE_PROTO"),
                    u = function () {},
                    p = function (e) {
                        return "<script>" + e + "</script>";
                    },
                    f = function (e) {
                        e.write(p("")), e.close();
                        var t = e.parentWindow.Object;
                        return (e = null), t;
                    },
                    h = function () {
                        try {
                            n = new ActiveXObject("htmlfile");
                        } catch (e) {}
                        var e, t;
                        h =
                            "undefined" != typeof document
                                ? document.domain && n
                                    ? f(n)
                                    : (((t = c("iframe")).style.display = "none"),
                                      l.appendChild(t),
                                      (t.src = String("javascript:")),
                                      (e = t.contentWindow.document).open(),
                                      e.write(p("document.F=Object")),
                                      e.close(),
                                      e.F)
                                : f(n);
                        for (var r = a.length; r--; ) delete h.prototype[a[r]];
                        return h();
                    };
                (o[d] = !0),
                    (e.exports =
                        Object.create ||
                        function (e, t) {
                            var r;
                            return (
                                null !== e
                                    ? ((u.prototype = i(e)), (r = new u()), (u.prototype = null), (r[d] = e))
                                    : (r = h()),
                                void 0 === t ? r : s(r, t)
                            );
                        });
            },
            219: (e, t, r) => {
                var n = r(7400),
                    i = r(1787),
                    s = r(1176),
                    a = r(905),
                    o = r(5632);
                e.exports = n
                    ? Object.defineProperties
                    : function (e, t) {
                          s(e);
                          for (var r, n = a(t), l = o(t), c = l.length, d = 0; c > d; ) i.f(e, (r = l[d++]), n[r]);
                          return e;
                      };
            },
            1787: (e, t, r) => {
                var n = r(9859),
                    i = r(7400),
                    s = r(4394),
                    a = r(1176),
                    o = r(9310),
                    l = n.TypeError,
                    c = Object.defineProperty;
                t.f = i
                    ? c
                    : function (e, t, r) {
                          if ((a(e), (t = o(t)), a(r), s))
                              try {
                                  return c(e, t, r);
                              } catch (e) {}
                          if ("get" in r || "set" in r) throw l("Accessors not supported");
                          return "value" in r && (e[t] = r.value), e;
                      };
            },
            7933: (e, t, r) => {
                var n = r(7400),
                    i = r(266),
                    s = r(9195),
                    a = r(5358),
                    o = r(905),
                    l = r(9310),
                    c = r(8270),
                    d = r(4394),
                    u = Object.getOwnPropertyDescriptor;
                t.f = n
                    ? u
                    : function (e, t) {
                          if (((e = o(e)), (t = l(t)), d))
                              try {
                                  return u(e, t);
                              } catch (e) {}
                          if (c(e, t)) return a(!i(s.f, e, t), e[t]);
                      };
            },
            166: (e, t, r) => {
                var n = r(7079),
                    i = r(905),
                    s = r(8151).f,
                    a = r(1909),
                    o =
                        "object" == typeof window && window && Object.getOwnPropertyNames
                            ? Object.getOwnPropertyNames(window)
                            : [];
                e.exports.f = function (e) {
                    return o && "Window" == n(e)
                        ? (function (e) {
                              try {
                                  return s(e);
                              } catch (e) {
                                  return a(o);
                              }
                          })(e)
                        : s(i(e));
                };
            },
            8151: (e, t, r) => {
                var n = r(140),
                    i = r(3837).concat("length", "prototype");
                t.f =
                    Object.getOwnPropertyNames ||
                    function (e) {
                        return n(e, i);
                    };
            },
            894: (e, t) => {
                t.f = Object.getOwnPropertySymbols;
            },
            7567: (e, t, r) => {
                var n = r(9859),
                    i = r(8270),
                    s = r(6733),
                    a = r(2991),
                    o = r(4399),
                    l = r(7528),
                    c = o("IE_PROTO"),
                    d = n.Object,
                    u = d.prototype;
                e.exports = l
                    ? d.getPrototypeOf
                    : function (e) {
                          var t = a(e);
                          if (i(t, c)) return t[c];
                          var r = t.constructor;
                          return s(r) && t instanceof r ? r.prototype : t instanceof d ? u : null;
                      };
            },
            5343: (e, t, r) => {
                var n = r(4229),
                    i = r(5052),
                    s = r(7079),
                    a = r(2460),
                    o = Object.isExtensible,
                    l = n(function () {
                        o(1);
                    });
                e.exports =
                    l || a
                        ? function (e) {
                              return !!i(e) && (!a || "ArrayBuffer" != s(e)) && (!o || o(e));
                          }
                        : o;
            },
            1321: (e, t, r) => {
                var n = r(5968);
                e.exports = n({}.isPrototypeOf);
            },
            140: (e, t, r) => {
                var n = r(5968),
                    i = r(8270),
                    s = r(905),
                    a = r(9540).indexOf,
                    o = r(5977),
                    l = n([].push);
                e.exports = function (e, t) {
                    var r,
                        n = s(e),
                        c = 0,
                        d = [];
                    for (r in n) !i(o, r) && i(n, r) && l(d, r);
                    for (; t.length > c; ) i(n, (r = t[c++])) && (~a(d, r) || l(d, r));
                    return d;
                };
            },
            5632: (e, t, r) => {
                var n = r(140),
                    i = r(3837);
                e.exports =
                    Object.keys ||
                    function (e) {
                        return n(e, i);
                    };
            },
            9195: (e, t) => {
                "use strict";
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    i = n && !r.call({ 1: 2 }, 1);
                t.f = i
                    ? function (e) {
                          var t = n(this, e);
                          return !!t && t.enumerable;
                      }
                    : r;
            },
            6540: (e, t, r) => {
                var n = r(5968),
                    i = r(1176),
                    s = r(8505);
                e.exports =
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function () {
                              var e,
                                  t = !1,
                                  r = {};
                              try {
                                  (e = n(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []),
                                      (t = r instanceof Array);
                              } catch (e) {}
                              return function (r, n) {
                                  return i(r), s(n), t ? e(r, n) : (r.__proto__ = n), r;
                              };
                          })()
                        : void 0);
            },
            4059: (e, t, r) => {
                "use strict";
                var n = r(1601),
                    i = r(1589);
                e.exports = n
                    ? {}.toString
                    : function () {
                          return "[object " + i(this) + "]";
                      };
            },
            2914: (e, t, r) => {
                var n = r(9859),
                    i = r(266),
                    s = r(6733),
                    a = r(5052),
                    o = n.TypeError;
                e.exports = function (e, t) {
                    var r, n;
                    if ("string" === t && s((r = e.toString)) && !a((n = i(r, e)))) return n;
                    if (s((r = e.valueOf)) && !a((n = i(r, e)))) return n;
                    if ("string" !== t && s((r = e.toString)) && !a((n = i(r, e)))) return n;
                    throw o("Can't convert object to primitive value");
                };
            },
            4826: (e, t, r) => {
                var n = r(1333),
                    i = r(5968),
                    s = r(8151),
                    a = r(894),
                    o = r(1176),
                    l = i([].concat);
                e.exports =
                    n("Reflect", "ownKeys") ||
                    function (e) {
                        var t = s.f(o(e)),
                            r = a.f;
                        return r ? l(t, r(e)) : t;
                    };
            },
            9276: (e, t, r) => {
                var n = r(9859);
                e.exports = n;
            },
            8787: (e, t, r) => {
                var n = r(7487);
                e.exports = function (e, t, r) {
                    for (var i in t) n(e, i, t[i], r);
                    return e;
                };
            },
            7487: (e, t, r) => {
                var n = r(9859),
                    i = r(6733),
                    s = r(8270),
                    a = r(5762),
                    o = r(2079),
                    l = r(8511),
                    c = r(6407),
                    d = r(1805).CONFIGURABLE,
                    u = c.get,
                    p = c.enforce,
                    f = String(String).split("String");
                (e.exports = function (e, t, r, l) {
                    var c,
                        u = !!l && !!l.unsafe,
                        h = !!l && !!l.enumerable,
                        v = !!l && !!l.noTargetGet,
                        m = l && void 0 !== l.name ? l.name : t;
                    i(r) &&
                        ("Symbol(" === String(m).slice(0, 7) &&
                            (m = "[" + String(m).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                        (!s(r, "name") || (d && r.name !== m)) && a(r, "name", m),
                        (c = p(r)).source || (c.source = f.join("string" == typeof m ? m : ""))),
                        e !== n
                            ? (u ? !v && e[t] && (h = !0) : delete e[t], h ? (e[t] = r) : a(e, t, r))
                            : h
                            ? (e[t] = r)
                            : o(t, r);
                })(Function.prototype, "toString", function () {
                    return (i(this) && u(this).source) || l(this);
                });
            },
            895: (e, t, r) => {
                "use strict";
                var n = r(1176);
                e.exports = function () {
                    var e = n(this),
                        t = "";
                    return (
                        e.global && (t += "g"),
                        e.ignoreCase && (t += "i"),
                        e.multiline && (t += "m"),
                        e.dotAll && (t += "s"),
                        e.unicode && (t += "u"),
                        e.sticky && (t += "y"),
                        t
                    );
                };
            },
            8885: (e, t, r) => {
                var n = r(9859).TypeError;
                e.exports = function (e) {
                    if (null == e) throw n("Can't call method on " + e);
                    return e;
                };
            },
            2079: (e, t, r) => {
                var n = r(9859),
                    i = Object.defineProperty;
                e.exports = function (e, t) {
                    try {
                        i(n, e, { value: t, configurable: !0, writable: !0 });
                    } catch (r) {
                        n[e] = t;
                    }
                    return t;
                };
            },
            1832: (e, t, r) => {
                "use strict";
                var n = r(1333),
                    i = r(1787),
                    s = r(95),
                    a = r(7400),
                    o = s("species");
                e.exports = function (e) {
                    var t = n(e),
                        r = i.f;
                    a &&
                        t &&
                        !t[o] &&
                        r(t, o, {
                            configurable: !0,
                            get: function () {
                                return this;
                            },
                        });
                };
            },
            4555: (e, t, r) => {
                var n = r(1787).f,
                    i = r(8270),
                    s = r(95)("toStringTag");
                e.exports = function (e, t, r) {
                    e && !i((e = r ? e : e.prototype), s) && n(e, s, { configurable: !0, value: t });
                };
            },
            4399: (e, t, r) => {
                var n = r(3036),
                    i = r(1441),
                    s = n("keys");
                e.exports = function (e) {
                    return s[e] || (s[e] = i(e));
                };
            },
            5353: (e, t, r) => {
                var n = r(9859),
                    i = r(2079),
                    s = "__core-js_shared__",
                    a = n[s] || i(s, {});
                e.exports = a;
            },
            3036: (e, t, r) => {
                var n = r(4231),
                    i = r(5353);
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {});
                })("versions", []).push({
                    version: "3.19.1",
                    mode: n ? "pure" : "global",
                    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
                });
            },
            966: (e, t, r) => {
                var n = r(5968),
                    i = r(3329),
                    s = r(3326),
                    a = r(8885),
                    o = n("".charAt),
                    l = n("".charCodeAt),
                    c = n("".slice),
                    d = function (e) {
                        return function (t, r) {
                            var n,
                                d,
                                u = s(a(t)),
                                p = i(r),
                                f = u.length;
                            return p < 0 || p >= f
                                ? e
                                    ? ""
                                    : void 0
                                : (n = l(u, p)) < 55296 ||
                                  n > 56319 ||
                                  p + 1 === f ||
                                  (d = l(u, p + 1)) < 56320 ||
                                  d > 57343
                                ? e
                                    ? o(u, p)
                                    : n
                                : e
                                ? c(u, p, p + 2)
                                : d - 56320 + ((n - 55296) << 10) + 65536;
                        };
                    };
                e.exports = { codeAt: d(!1), charAt: d(!0) };
            },
            1017: (e, t, r) => {
                var n = r(5968),
                    i = r(8885),
                    s = r(3326),
                    a = r(1647),
                    o = n("".replace),
                    l = "[" + a + "]",
                    c = RegExp("^" + l + l + "*"),
                    d = RegExp(l + l + "*$"),
                    u = function (e) {
                        return function (t) {
                            var r = s(i(t));
                            return 1 & e && (r = o(r, c, "")), 2 & e && (r = o(r, d, "")), r;
                        };
                    };
                e.exports = { start: u(1), end: u(2), trim: u(3) };
            },
            3231: (e, t, r) => {
                var n = r(3329),
                    i = Math.max,
                    s = Math.min;
                e.exports = function (e, t) {
                    var r = n(e);
                    return r < 0 ? i(r + t, 0) : s(r, t);
                };
            },
            905: (e, t, r) => {
                var n = r(9337),
                    i = r(8885);
                e.exports = function (e) {
                    return n(i(e));
                };
            },
            3329: (e) => {
                var t = Math.ceil,
                    r = Math.floor;
                e.exports = function (e) {
                    var n = +e;
                    return n != n || 0 === n ? 0 : (n > 0 ? r : t)(n);
                };
            },
            4237: (e, t, r) => {
                var n = r(3329),
                    i = Math.min;
                e.exports = function (e) {
                    return e > 0 ? i(n(e), 9007199254740991) : 0;
                };
            },
            2991: (e, t, r) => {
                var n = r(9859),
                    i = r(8885),
                    s = n.Object;
                e.exports = function (e) {
                    return s(i(e));
                };
            },
            2066: (e, t, r) => {
                var n = r(9859),
                    i = r(266),
                    s = r(5052),
                    a = r(9395),
                    o = r(5300),
                    l = r(2914),
                    c = r(95),
                    d = n.TypeError,
                    u = c("toPrimitive");
                e.exports = function (e, t) {
                    if (!s(e) || a(e)) return e;
                    var r,
                        n = o(e, u);
                    if (n) {
                        if ((void 0 === t && (t = "default"), (r = i(n, e, t)), !s(r) || a(r))) return r;
                        throw d("Can't convert object to primitive value");
                    }
                    return void 0 === t && (t = "number"), l(e, t);
                };
            },
            9310: (e, t, r) => {
                var n = r(2066),
                    i = r(9395);
                e.exports = function (e) {
                    var t = n(e, "string");
                    return i(t) ? t : t + "";
                };
            },
            1601: (e, t, r) => {
                var n = {};
                (n[r(95)("toStringTag")] = "z"), (e.exports = "[object z]" === String(n));
            },
            3326: (e, t, r) => {
                var n = r(9859),
                    i = r(1589),
                    s = n.String;
                e.exports = function (e) {
                    if ("Symbol" === i(e)) throw TypeError("Cannot convert a Symbol value to a string");
                    return s(e);
                };
            },
            9821: (e, t, r) => {
                var n = r(9859).String;
                e.exports = function (e) {
                    try {
                        return n(e);
                    } catch (e) {
                        return "Object";
                    }
                };
            },
            1441: (e, t, r) => {
                var n = r(5968),
                    i = 0,
                    s = Math.random(),
                    a = n((1).toString);
                e.exports = function (e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++i + s, 36);
                };
            },
            6969: (e, t, r) => {
                var n = r(3839);
                e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
            },
            5391: (e, t, r) => {
                var n = r(95);
                t.f = n;
            },
            95: (e, t, r) => {
                var n = r(9859),
                    i = r(3036),
                    s = r(8270),
                    a = r(1441),
                    o = r(3839),
                    l = r(6969),
                    c = i("wks"),
                    d = n.Symbol,
                    u = d && d.for,
                    p = l ? d : (d && d.withoutSetter) || a;
                e.exports = function (e) {
                    if (!s(c, e) || (!o && "string" != typeof c[e])) {
                        var t = "Symbol." + e;
                        o && s(d, e) ? (c[e] = d[e]) : (c[e] = l && u ? u(t) : p(t));
                    }
                    return c[e];
                };
            },
            1647: (e) => {
                e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
            },
            5735: (e, t, r) => {
                "use strict";
                var n = r(905),
                    i = r(9736),
                    s = r(5495),
                    a = r(6407),
                    o = r(7675),
                    l = "Array Iterator",
                    c = a.set,
                    d = a.getterFor(l);
                (e.exports = o(
                    Array,
                    "Array",
                    function (e, t) {
                        c(this, { type: l, target: n(e), index: 0, kind: t });
                    },
                    function () {
                        var e = d(this),
                            t = e.target,
                            r = e.kind,
                            n = e.index++;
                        return !t || n >= t.length
                            ? ((e.target = void 0), { value: void 0, done: !0 })
                            : "keys" == r
                            ? { value: n, done: !1 }
                            : "values" == r
                            ? { value: t[n], done: !1 }
                            : { value: [n, t[n]], done: !1 };
                    },
                    "values"
                )),
                    (s.Arguments = s.Array),
                    i("keys"),
                    i("values"),
                    i("entries");
            },
            9321: (e, t, r) => {
                "use strict";
                r(9789)(
                    "Map",
                    function (e) {
                        return function () {
                            return e(this, arguments.length ? arguments[0] : void 0);
                        };
                    },
                    r(8081)
                );
            },
            6928: (e, t, r) => {
                var n = r(3103),
                    i = r(4229),
                    s = r(2991),
                    a = r(7567),
                    o = r(7528);
                n(
                    {
                        target: "Object",
                        stat: !0,
                        forced: i(function () {
                            a(1);
                        }),
                        sham: !o,
                    },
                    {
                        getPrototypeOf: function (e) {
                            return a(s(e));
                        },
                    }
                );
            },
            8188: (e, t, r) => {
                var n = r(1601),
                    i = r(7487),
                    s = r(4059);
                n || i(Object.prototype, "toString", s, { unsafe: !0 });
            },
            8995: (e, t, r) => {
                var n = r(3103),
                    i = r(6596);
                n({ global: !0, forced: parseInt != i }, { parseInt: i });
            },
            1229: (e, t, r) => {
                var n = r(3103),
                    i = r(1333),
                    s = r(3171),
                    a = r(4128),
                    o = r(7988),
                    l = r(1176),
                    c = r(5052),
                    d = r(2391),
                    u = r(4229),
                    p = i("Reflect", "construct"),
                    f = Object.prototype,
                    h = [].push,
                    v = u(function () {
                        function e() {}
                        return !(p(function () {}, [], e) instanceof e);
                    }),
                    m = !u(function () {
                        p(function () {});
                    }),
                    g = v || m;
                n(
                    { target: "Reflect", stat: !0, forced: g, sham: g },
                    {
                        construct: function (e, t) {
                            o(e), l(t);
                            var r = arguments.length < 3 ? e : o(arguments[2]);
                            if (m && !v) return p(e, t, r);
                            if (e == r) {
                                switch (t.length) {
                                    case 0:
                                        return new e();
                                    case 1:
                                        return new e(t[0]);
                                    case 2:
                                        return new e(t[0], t[1]);
                                    case 3:
                                        return new e(t[0], t[1], t[2]);
                                    case 4:
                                        return new e(t[0], t[1], t[2], t[3]);
                                }
                                var n = [null];
                                return s(h, n, t), new (s(a, e, n))();
                            }
                            var i = r.prototype,
                                u = d(c(i) ? i : f),
                                g = s(e, u, t);
                            return c(g) ? g : u;
                        },
                    }
                );
            },
            8233: (e, t, r) => {
                "use strict";
                var n = r(5968),
                    i = r(1805).PROPER,
                    s = r(7487),
                    a = r(1176),
                    o = r(1321),
                    l = r(3326),
                    c = r(4229),
                    d = r(895),
                    u = "toString",
                    p = RegExp.prototype,
                    f = p.toString,
                    h = n(d),
                    v = c(function () {
                        return "/a/b" != f.call({ source: "a", flags: "b" });
                    }),
                    m = i && f.name != u;
                (v || m) &&
                    s(
                        RegExp.prototype,
                        u,
                        function () {
                            var e = a(this),
                                t = l(e.source),
                                r = e.flags;
                            return "/" + t + "/" + l(void 0 === r && o(p, e) && !("flags" in p) ? h(e) : r);
                        },
                        { unsafe: !0 }
                    );
            },
            8673: (e, t, r) => {
                "use strict";
                var n = r(966).charAt,
                    i = r(3326),
                    s = r(6407),
                    a = r(7675),
                    o = "String Iterator",
                    l = s.set,
                    c = s.getterFor(o);
                a(
                    String,
                    "String",
                    function (e) {
                        l(this, { type: o, string: i(e), index: 0 });
                    },
                    function () {
                        var e,
                            t = c(this),
                            r = t.string,
                            i = t.index;
                        return i >= r.length
                            ? { value: void 0, done: !0 }
                            : ((e = n(r, i)), (t.index += e.length), { value: e, done: !1 });
                    }
                );
            },
            634: (e, t, r) => {
                "use strict";
                var n = r(3103),
                    i = r(7400),
                    s = r(9859),
                    a = r(5968),
                    o = r(8270),
                    l = r(6733),
                    c = r(1321),
                    d = r(3326),
                    u = r(1787).f,
                    p = r(7081),
                    f = s.Symbol,
                    h = f && f.prototype;
                if (i && l(f) && (!("description" in h) || void 0 !== f().description)) {
                    var v = {},
                        m = function () {
                            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : d(arguments[0]),
                                t = c(h, this) ? new f(e) : void 0 === e ? f() : f(e);
                            return "" === e && (v[t] = !0), t;
                        };
                    p(m, f), (m.prototype = h), (h.constructor = m);
                    var g = "Symbol(test)" == String(f("test")),
                        y = a(h.toString),
                        b = a(h.valueOf),
                        w = /^Symbol\((.*)\)[^)]+$/,
                        x = a("".replace),
                        S = a("".slice);
                    u(h, "description", {
                        configurable: !0,
                        get: function () {
                            var e = b(this),
                                t = y(e);
                            if (o(v, e)) return "";
                            var r = g ? S(t, 7, -1) : x(t, w, "$1");
                            return "" === r ? void 0 : r;
                        },
                    }),
                        n({ global: !0, forced: !0 }, { Symbol: m });
                }
            },
            796: (e, t, r) => {
                r(8423)("iterator");
            },
            4115: (e, t, r) => {
                "use strict";
                var n = r(3103),
                    i = r(9859),
                    s = r(1333),
                    a = r(3171),
                    o = r(266),
                    l = r(5968),
                    c = r(4231),
                    d = r(7400),
                    u = r(3839),
                    p = r(4229),
                    f = r(8270),
                    h = r(3718),
                    v = r(6733),
                    m = r(5052),
                    g = r(1321),
                    y = r(9395),
                    b = r(1176),
                    w = r(2991),
                    x = r(905),
                    S = r(9310),
                    T = r(3326),
                    C = r(5358),
                    E = r(2391),
                    O = r(5632),
                    P = r(8151),
                    M = r(166),
                    k = r(894),
                    $ = r(7933),
                    L = r(1787),
                    A = r(9195),
                    I = r(1909),
                    j = r(7487),
                    z = r(3036),
                    D = r(4399),
                    G = r(5977),
                    _ = r(1441),
                    N = r(95),
                    B = r(5391),
                    F = r(8423),
                    R = r(4555),
                    H = r(6407),
                    V = r(9996).forEach,
                    q = D("hidden"),
                    W = "Symbol",
                    X = N("toPrimitive"),
                    Y = H.set,
                    U = H.getterFor(W),
                    K = Object.prototype,
                    J = i.Symbol,
                    Q = J && J.prototype,
                    Z = i.TypeError,
                    ee = i.QObject,
                    te = s("JSON", "stringify"),
                    re = $.f,
                    ne = L.f,
                    ie = M.f,
                    se = A.f,
                    ae = l([].push),
                    oe = z("symbols"),
                    le = z("op-symbols"),
                    ce = z("string-to-symbol-registry"),
                    de = z("symbol-to-string-registry"),
                    ue = z("wks"),
                    pe = !ee || !ee.prototype || !ee.prototype.findChild,
                    fe =
                        d &&
                        p(function () {
                            return (
                                7 !=
                                E(
                                    ne({}, "a", {
                                        get: function () {
                                            return ne(this, "a", { value: 7 }).a;
                                        },
                                    })
                                ).a
                            );
                        })
                            ? function (e, t, r) {
                                  var n = re(K, t);
                                  n && delete K[t], ne(e, t, r), n && e !== K && ne(K, t, n);
                              }
                            : ne,
                    he = function (e, t) {
                        var r = (oe[e] = E(Q));
                        return Y(r, { type: W, tag: e, description: t }), d || (r.description = t), r;
                    },
                    ve = function (e, t, r) {
                        e === K && ve(le, t, r), b(e);
                        var n = S(t);
                        return (
                            b(r),
                            f(oe, n)
                                ? (r.enumerable
                                      ? (f(e, q) && e[q][n] && (e[q][n] = !1), (r = E(r, { enumerable: C(0, !1) })))
                                      : (f(e, q) || ne(e, q, C(1, {})), (e[q][n] = !0)),
                                  fe(e, n, r))
                                : ne(e, n, r)
                        );
                    },
                    me = function (e, t) {
                        b(e);
                        var r = x(t),
                            n = O(r).concat(we(r));
                        return (
                            V(n, function (t) {
                                (d && !o(ge, r, t)) || ve(e, t, r[t]);
                            }),
                            e
                        );
                    },
                    ge = function (e) {
                        var t = S(e),
                            r = o(se, this, t);
                        return (
                            !(this === K && f(oe, t) && !f(le, t)) &&
                            (!(r || !f(this, t) || !f(oe, t) || (f(this, q) && this[q][t])) || r)
                        );
                    },
                    ye = function (e, t) {
                        var r = x(e),
                            n = S(t);
                        if (r !== K || !f(oe, n) || f(le, n)) {
                            var i = re(r, n);
                            return !i || !f(oe, n) || (f(r, q) && r[q][n]) || (i.enumerable = !0), i;
                        }
                    },
                    be = function (e) {
                        var t = ie(x(e)),
                            r = [];
                        return (
                            V(t, function (e) {
                                f(oe, e) || f(G, e) || ae(r, e);
                            }),
                            r
                        );
                    },
                    we = function (e) {
                        var t = e === K,
                            r = ie(t ? le : x(e)),
                            n = [];
                        return (
                            V(r, function (e) {
                                !f(oe, e) || (t && !f(K, e)) || ae(n, oe[e]);
                            }),
                            n
                        );
                    };
                if (
                    (u ||
                        (j(
                            (Q = (J = function () {
                                if (g(Q, this)) throw Z("Symbol is not a constructor");
                                var e = arguments.length && void 0 !== arguments[0] ? T(arguments[0]) : void 0,
                                    t = _(e),
                                    r = function (e) {
                                        this === K && o(r, le, e),
                                            f(this, q) && f(this[q], t) && (this[q][t] = !1),
                                            fe(this, t, C(1, e));
                                    };
                                return d && pe && fe(K, t, { configurable: !0, set: r }), he(t, e);
                            }).prototype),
                            "toString",
                            function () {
                                return U(this).tag;
                            }
                        ),
                        j(J, "withoutSetter", function (e) {
                            return he(_(e), e);
                        }),
                        (A.f = ge),
                        (L.f = ve),
                        ($.f = ye),
                        (P.f = M.f = be),
                        (k.f = we),
                        (B.f = function (e) {
                            return he(N(e), e);
                        }),
                        d &&
                            (ne(Q, "description", {
                                configurable: !0,
                                get: function () {
                                    return U(this).description;
                                },
                            }),
                            c || j(K, "propertyIsEnumerable", ge, { unsafe: !0 }))),
                    n({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: J }),
                    V(O(ue), function (e) {
                        F(e);
                    }),
                    n(
                        { target: W, stat: !0, forced: !u },
                        {
                            for: function (e) {
                                var t = T(e);
                                if (f(ce, t)) return ce[t];
                                var r = J(t);
                                return (ce[t] = r), (de[r] = t), r;
                            },
                            keyFor: function (e) {
                                if (!y(e)) throw Z(e + " is not a symbol");
                                if (f(de, e)) return de[e];
                            },
                            useSetter: function () {
                                pe = !0;
                            },
                            useSimple: function () {
                                pe = !1;
                            },
                        }
                    ),
                    n(
                        { target: "Object", stat: !0, forced: !u, sham: !d },
                        {
                            create: function (e, t) {
                                return void 0 === t ? E(e) : me(E(e), t);
                            },
                            defineProperty: ve,
                            defineProperties: me,
                            getOwnPropertyDescriptor: ye,
                        }
                    ),
                    n(
                        { target: "Object", stat: !0, forced: !u },
                        { getOwnPropertyNames: be, getOwnPropertySymbols: we }
                    ),
                    n(
                        {
                            target: "Object",
                            stat: !0,
                            forced: p(function () {
                                k.f(1);
                            }),
                        },
                        {
                            getOwnPropertySymbols: function (e) {
                                return k.f(w(e));
                            },
                        }
                    ),
                    te &&
                        n(
                            {
                                target: "JSON",
                                stat: !0,
                                forced:
                                    !u ||
                                    p(function () {
                                        var e = J();
                                        return "[null]" != te([e]) || "{}" != te({ a: e }) || "{}" != te(Object(e));
                                    }),
                            },
                            {
                                stringify: function (e, t, r) {
                                    var n = I(arguments),
                                        i = t;
                                    if ((m(t) || void 0 !== e) && !y(e))
                                        return (
                                            h(t) ||
                                                (t = function (e, t) {
                                                    if ((v(i) && (t = o(i, this, e, t)), !y(t))) return t;
                                                }),
                                            (n[1] = t),
                                            a(te, null, n)
                                        );
                                },
                            }
                        ),
                    !Q[X])
                ) {
                    var xe = Q.valueOf;
                    j(Q, X, function (e) {
                        return o(xe, this);
                    });
                }
                R(J, W), (G[q] = !0);
            },
            6886: (e, t, r) => {
                var n = r(9859),
                    i = r(5694),
                    s = r(8865),
                    a = r(5735),
                    o = r(5762),
                    l = r(95),
                    c = l("iterator"),
                    d = l("toStringTag"),
                    u = a.values,
                    p = function (e, t) {
                        if (e) {
                            if (e[c] !== u)
                                try {
                                    o(e, c, u);
                                } catch (t) {
                                    e[c] = u;
                                }
                            if ((e[d] || o(e, d, t), i[t]))
                                for (var r in a)
                                    if (e[r] !== a[r])
                                        try {
                                            o(e, r, a[r]);
                                        } catch (t) {
                                            e[r] = a[r];
                                        }
                        }
                    };
                for (var f in i) p(n[f] && n[f].prototype, f);
                p(s, "DOMTokenList");
            },
            7245: (e, t, r) => {
                "use strict";
                e.exports = r.p + "slideshow/sections/ultimate-slideshow.liquid";
            },
        },
        t = {};
    function r(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var s = (t[n] = { exports: {} });
        return e[n](s, s.exports, r), s.exports;
    }
    (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    })()),
        (() => {
            var e;
            r.g.importScripts && (e = r.g.location + "");
            var t = r.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var n = t.getElementsByTagName("script");
                n.length && (e = n[n.length - 1].src);
            }
            if (!e) throw new Error("Automatic publicPath is not supported in this browser");
            (e = e
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (r.p = e + "../../");
        })(),
        (() => {
            "use strict";
            function e(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
            }
            function t(r = {}, n = {}) {
                Object.keys(n).forEach((i) => {
                    void 0 === r[i]
                        ? (r[i] = n[i])
                        : e(n[i]) && e(r[i]) && Object.keys(n[i]).length > 0 && t(r[i], n[i]);
                });
            }
            r(8995), r(6928), r(8188), r(8233), r(1229), r(5735), r(9321), r(8673), r(6886), r(4115), r(634), r(796);
            const n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: { blur() {}, nodeName: "" },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({ initEvent() {} }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => [],
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: "",
                },
            };
            function i() {
                const e = "undefined" != typeof document ? document : {};
                return t(e, n), e;
            }
            const s = {
                document: n,
                navigator: { userAgent: "" },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: "",
                },
                history: { replaceState() {}, pushState() {}, go() {}, back() {} },
                CustomEvent: function () {
                    return this;
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({ getPropertyValue: () => "" }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: (e) => ("undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e);
                },
            };
            function a() {
                const e = "undefined" != typeof window ? window : {};
                return t(e, s), e;
            }
            class o extends Array {
                constructor(e) {
                    "number" == typeof e
                        ? super(e)
                        : (super(...(e || [])),
                          (function (e) {
                              const t = e.__proto__;
                              Object.defineProperty(e, "__proto__", {
                                  get: () => t,
                                  set(e) {
                                      t.__proto__ = e;
                                  },
                              });
                          })(this));
                }
            }
            function l(e = []) {
                const t = [];
                return (
                    e.forEach((e) => {
                        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
                    }),
                    t
                );
            }
            function c(e, t) {
                return Array.prototype.filter.call(e, t);
            }
            function d(e, t) {
                const r = a(),
                    n = i();
                let s = [];
                if (!t && e instanceof o) return e;
                if (!e) return new o(s);
                if ("string" == typeof e) {
                    const r = e.trim();
                    if (r.indexOf("<") >= 0 && r.indexOf(">") >= 0) {
                        let e = "div";
                        0 === r.indexOf("<li") && (e = "ul"),
                            0 === r.indexOf("<tr") && (e = "tbody"),
                            (0 !== r.indexOf("<td") && 0 !== r.indexOf("<th")) || (e = "tr"),
                            0 === r.indexOf("<tbody") && (e = "table"),
                            0 === r.indexOf("<option") && (e = "select");
                        const t = n.createElement(e);
                        t.innerHTML = r;
                        for (let e = 0; e < t.childNodes.length; e += 1) s.push(t.childNodes[e]);
                    } else
                        s = (function (e, t) {
                            if ("string" != typeof e) return [e];
                            const r = [],
                                n = t.querySelectorAll(e);
                            for (let e = 0; e < n.length; e += 1) r.push(n[e]);
                            return r;
                        })(e.trim(), t || n);
                } else if (e.nodeType || e === r || e === n) s.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof o) return e;
                    s = e;
                }
                return new o(
                    (function (e) {
                        const t = [];
                        for (let r = 0; r < e.length; r += 1) -1 === t.indexOf(e[r]) && t.push(e[r]);
                        return t;
                    })(s)
                );
            }
            d.fn = o.prototype;
            const u = "resize scroll".split(" ");
            function p(e) {
                return function (...t) {
                    if (void 0 === t[0]) {
                        for (let t = 0; t < this.length; t += 1)
                            u.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
                        return this;
                    }
                    return this.on(e, ...t);
                };
            }
            p("click"),
                p("blur"),
                p("focus"),
                p("focusin"),
                p("focusout"),
                p("keyup"),
                p("keydown"),
                p("keypress"),
                p("submit"),
                p("change"),
                p("mousedown"),
                p("mousemove"),
                p("mouseup"),
                p("mouseenter"),
                p("mouseleave"),
                p("mouseout"),
                p("mouseover"),
                p("touchstart"),
                p("touchend"),
                p("touchmove"),
                p("resize"),
                p("scroll");
            const f = {
                addClass: function (...e) {
                    const t = l(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.add(...t);
                        }),
                        this
                    );
                },
                removeClass: function (...e) {
                    const t = l(e.map((e) => e.split(" ")));
                    return (
                        this.forEach((e) => {
                            e.classList.remove(...t);
                        }),
                        this
                    );
                },
                hasClass: function (...e) {
                    const t = l(e.map((e) => e.split(" ")));
                    return c(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0).length > 0;
                },
                toggleClass: function (...e) {
                    const t = l(e.map((e) => e.split(" ")));
                    this.forEach((e) => {
                        t.forEach((t) => {
                            e.classList.toggle(t);
                        });
                    });
                },
                attr: function (e, t) {
                    if (1 === arguments.length && "string" == typeof e)
                        return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let r = 0; r < this.length; r += 1)
                        if (2 === arguments.length) this[r].setAttribute(e, t);
                        else for (const t in e) (this[r][t] = e[t]), this[r].setAttribute(t, e[t]);
                    return this;
                },
                removeAttr: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this;
                },
                transform: function (e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this;
                },
                transition: function (e) {
                    for (let t = 0; t < this.length; t += 1)
                        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this;
                },
                on: function (...e) {
                    let [t, r, n, i] = e;
                    function s(e) {
                        const t = e.target;
                        if (!t) return;
                        const i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), d(t).is(r))) n.apply(t, i);
                        else {
                            const e = d(t).parents();
                            for (let t = 0; t < e.length; t += 1) d(e[t]).is(r) && n.apply(e[t], i);
                        }
                    }
                    function a(e) {
                        const t = (e && e.target && e.target.dom7EventData) || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
                    }
                    "function" == typeof e[1] && (([t, n, i] = e), (r = void 0)), i || (i = !1);
                    const o = t.split(" ");
                    let l;
                    for (let e = 0; e < this.length; e += 1) {
                        const t = this[e];
                        if (r)
                            for (l = 0; l < o.length; l += 1) {
                                const e = o[l];
                                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                                    t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                                    t.dom7LiveListeners[e].push({ listener: n, proxyListener: s }),
                                    t.addEventListener(e, s, i);
                            }
                        else
                            for (l = 0; l < o.length; l += 1) {
                                const e = o[l];
                                t.dom7Listeners || (t.dom7Listeners = {}),
                                    t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                                    t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
                                    t.addEventListener(e, a, i);
                            }
                    }
                    return this;
                },
                off: function (...e) {
                    let [t, r, n, i] = e;
                    "function" == typeof e[1] && (([t, n, i] = e), (r = void 0)), i || (i = !1);
                    const s = t.split(" ");
                    for (let e = 0; e < s.length; e += 1) {
                        const t = s[e];
                        for (let e = 0; e < this.length; e += 1) {
                            const s = this[e];
                            let a;
                            if (
                                (!r && s.dom7Listeners
                                    ? (a = s.dom7Listeners[t])
                                    : r && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
                                a && a.length)
                            )
                                for (let e = a.length - 1; e >= 0; e -= 1) {
                                    const r = a[e];
                                    (n && r.listener === n) ||
                                    (n && r.listener && r.listener.dom7proxy && r.listener.dom7proxy === n)
                                        ? (s.removeEventListener(t, r.proxyListener, i), a.splice(e, 1))
                                        : n || (s.removeEventListener(t, r.proxyListener, i), a.splice(e, 1));
                                }
                        }
                    }
                    return this;
                },
                trigger: function (...e) {
                    const t = a(),
                        r = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < r.length; i += 1) {
                        const s = r[i];
                        for (let r = 0; r < this.length; r += 1) {
                            const i = this[r];
                            if (t.CustomEvent) {
                                const r = new t.CustomEvent(s, { detail: n, bubbles: !0, cancelable: !0 });
                                (i.dom7EventData = e.filter((e, t) => t > 0)),
                                    i.dispatchEvent(r),
                                    (i.dom7EventData = []),
                                    delete i.dom7EventData;
                            }
                        }
                    }
                    return this;
                },
                transitionEnd: function (e) {
                    const t = this;
                    return (
                        e &&
                            t.on("transitionend", function r(n) {
                                n.target === this && (e.call(this, n), t.off("transitionend", r));
                            }),
                        this
                    );
                },
                outerWidth: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return (
                                this[0].offsetWidth +
                                parseFloat(e.getPropertyValue("margin-right")) +
                                parseFloat(e.getPropertyValue("margin-left"))
                            );
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function (e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return (
                                this[0].offsetHeight +
                                parseFloat(e.getPropertyValue("margin-top")) +
                                parseFloat(e.getPropertyValue("margin-bottom"))
                            );
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                styles: function () {
                    const e = a();
                    return this[0] ? e.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        const e = a(),
                            t = i(),
                            r = this[0],
                            n = r.getBoundingClientRect(),
                            s = t.body,
                            o = r.clientTop || s.clientTop || 0,
                            l = r.clientLeft || s.clientLeft || 0,
                            c = r === e ? e.scrollY : r.scrollTop,
                            d = r === e ? e.scrollX : r.scrollLeft;
                        return { top: n.top + c - o, left: n.left + d - l };
                    }
                    return null;
                },
                css: function (e, t) {
                    const r = a();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (n = 0; n < this.length; n += 1) for (const t in e) this[n].style[t] = e[t];
                            return this;
                        }
                        if (this[0]) return r.getComputedStyle(this[0], null).getPropertyValue(e);
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this;
                    }
                    return this;
                },
                each: function (e) {
                    return e
                        ? (this.forEach((t, r) => {
                              e.apply(t, [t, r]);
                          }),
                          this)
                        : this;
                },
                html: function (e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this;
                },
                text: function (e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this;
                },
                is: function (e) {
                    const t = a(),
                        r = i(),
                        n = this[0];
                    let s, l;
                    if (!n || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (s = d(e), l = 0; l < s.length; l += 1) if (s[l] === n) return !0;
                        return !1;
                    }
                    if (e === r) return n === r;
                    if (e === t) return n === t;
                    if (e.nodeType || e instanceof o) {
                        for (s = e.nodeType ? [e] : e, l = 0; l < s.length; l += 1) if (s[l] === n) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function () {
                    let e,
                        t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                        return e;
                    }
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    const t = this.length;
                    if (e > t - 1) return d([]);
                    if (e < 0) {
                        const r = t + e;
                        return d(r < 0 ? [] : [this[r]]);
                    }
                    return d([this[e]]);
                },
                append: function (...e) {
                    let t;
                    const r = i();
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" == typeof t) {
                                const n = r.createElement("div");
                                for (n.innerHTML = t; n.firstChild; ) this[e].appendChild(n.firstChild);
                            } else if (t instanceof o) for (let r = 0; r < t.length; r += 1) this[e].appendChild(t[r]);
                            else this[e].appendChild(t);
                    }
                    return this;
                },
                prepend: function (e) {
                    const t = i();
                    let r, n;
                    for (r = 0; r < this.length; r += 1)
                        if ("string" == typeof e) {
                            const i = t.createElement("div");
                            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
                                this[r].insertBefore(i.childNodes[n], this[r].childNodes[0]);
                        } else if (e instanceof o)
                            for (n = 0; n < e.length; n += 1) this[r].insertBefore(e[n], this[r].childNodes[0]);
                        else this[r].insertBefore(e, this[r].childNodes[0]);
                    return this;
                },
                next: function (e) {
                    return this.length > 0
                        ? e
                            ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
                                ? d([this[0].nextElementSibling])
                                : d([])
                            : this[0].nextElementSibling
                            ? d([this[0].nextElementSibling])
                            : d([])
                        : d([]);
                },
                nextAll: function (e) {
                    const t = [];
                    let r = this[0];
                    if (!r) return d([]);
                    for (; r.nextElementSibling; ) {
                        const n = r.nextElementSibling;
                        e ? d(n).is(e) && t.push(n) : t.push(n), (r = n);
                    }
                    return d(t);
                },
                prev: function (e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e
                            ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                                ? d([t.previousElementSibling])
                                : d([])
                            : t.previousElementSibling
                            ? d([t.previousElementSibling])
                            : d([]);
                    }
                    return d([]);
                },
                prevAll: function (e) {
                    const t = [];
                    let r = this[0];
                    if (!r) return d([]);
                    for (; r.previousElementSibling; ) {
                        const n = r.previousElementSibling;
                        e ? d(n).is(e) && t.push(n) : t.push(n), (r = n);
                    }
                    return d(t);
                },
                parent: function (e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1)
                        null !== this[r].parentNode &&
                            (e
                                ? d(this[r].parentNode).is(e) && t.push(this[r].parentNode)
                                : t.push(this[r].parentNode));
                    return d(t);
                },
                parents: function (e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        let n = this[r].parentNode;
                        for (; n; ) e ? d(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
                    }
                    return d(t);
                },
                closest: function (e) {
                    let t = this;
                    return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
                },
                find: function (e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        const n = this[r].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e]);
                    }
                    return d(t);
                },
                children: function (e) {
                    const t = [];
                    for (let r = 0; r < this.length; r += 1) {
                        const n = this[r].children;
                        for (let r = 0; r < n.length; r += 1) (e && !d(n[r]).is(e)) || t.push(n[r]);
                    }
                    return d(t);
                },
                filter: function (e) {
                    return d(c(this, e));
                },
                remove: function () {
                    for (let e = 0; e < this.length; e += 1)
                        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this;
                },
            };
            Object.keys(f).forEach((e) => {
                Object.defineProperty(d.fn, e, { value: f[e], writable: !0 });
            });
            const h = d;
            function v(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            }
            function m() {
                return Date.now();
            }
            function g(e) {
                return (
                    "object" == typeof e &&
                    null !== e &&
                    e.constructor &&
                    "Object" === Object.prototype.toString.call(e).slice(8, -1)
                );
            }
            function y(e) {
                return "undefined" != typeof window && void 0 !== window.HTMLElement
                    ? e instanceof HTMLElement
                    : e && (1 === e.nodeType || 11 === e.nodeType);
            }
            function b() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let r = 1; r < arguments.length; r += 1) {
                    const n = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                    if (null != n && !y(n)) {
                        const r = Object.keys(Object(n)).filter((e) => t.indexOf(e) < 0);
                        for (let t = 0, i = r.length; t < i; t += 1) {
                            const i = r[t],
                                s = Object.getOwnPropertyDescriptor(n, i);
                            void 0 !== s &&
                                s.enumerable &&
                                (g(e[i]) && g(n[i])
                                    ? n[i].__swiper__
                                        ? (e[i] = n[i])
                                        : b(e[i], n[i])
                                    : !g(e[i]) && g(n[i])
                                    ? ((e[i] = {}), n[i].__swiper__ ? (e[i] = n[i]) : b(e[i], n[i]))
                                    : (e[i] = n[i]));
                        }
                    }
                }
                return e;
            }
            function w(e, t, r) {
                e.style.setProperty(t, r);
            }
            function x(e) {
                let { swiper: t, targetPosition: r, side: n } = e;
                const i = a(),
                    s = -t.translate;
                let o,
                    l = null;
                const c = t.params.speed;
                (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
                const d = r > s ? "next" : "prev",
                    u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
                    p = () => {
                        (o = new Date().getTime()), null === l && (l = o);
                        const e = Math.max(Math.min((o - l) / c, 1), 0),
                            a = 0.5 - Math.cos(e * Math.PI) / 2;
                        let d = s + a * (r - s);
                        if ((u(d, r) && (d = r), t.wrapperEl.scrollTo({ [n]: d }), u(d, r)))
                            return (
                                (t.wrapperEl.style.overflow = "hidden"),
                                (t.wrapperEl.style.scrollSnapType = ""),
                                setTimeout(() => {
                                    (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [n]: d });
                                }),
                                void i.cancelAnimationFrame(t.cssModeFrameID)
                            );
                        t.cssModeFrameID = i.requestAnimationFrame(p);
                    };
                p();
            }
            let S, T, C;
            function E() {
                return (
                    S ||
                        (S = (function () {
                            const e = a(),
                                t = i();
                            return {
                                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                                touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
                                passiveListener: (function () {
                                    let t = !1;
                                    try {
                                        const r = Object.defineProperty({}, "passive", {
                                            get() {
                                                t = !0;
                                            },
                                        });
                                        e.addEventListener("testPassiveListener", null, r);
                                    } catch (e) {}
                                    return t;
                                })(),
                                gestures: "ongesturestart" in e,
                            };
                        })()),
                    S
                );
            }
            const O = {
                    on(e, t, r) {
                        const n = this;
                        if ("function" != typeof t) return n;
                        const i = r ? "unshift" : "push";
                        return (
                            e.split(" ").forEach((e) => {
                                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t);
                            }),
                            n
                        );
                    },
                    once(e, t, r) {
                        const n = this;
                        if ("function" != typeof t) return n;
                        function i() {
                            n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                            for (var r = arguments.length, s = new Array(r), a = 0; a < r; a++) s[a] = arguments[a];
                            t.apply(n, s);
                        }
                        return (i.__emitterProxy = t), n.on(e, i, r);
                    },
                    onAny(e, t) {
                        const r = this;
                        if ("function" != typeof e) return r;
                        const n = t ? "unshift" : "push";
                        return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r;
                    },
                    offAny(e) {
                        const t = this;
                        if (!t.eventsAnyListeners) return t;
                        const r = t.eventsAnyListeners.indexOf(e);
                        return r >= 0 && t.eventsAnyListeners.splice(r, 1), t;
                    },
                    off(e, t) {
                        const r = this;
                        return r.eventsListeners
                            ? (e.split(" ").forEach((e) => {
                                  void 0 === t
                                      ? (r.eventsListeners[e] = [])
                                      : r.eventsListeners[e] &&
                                        r.eventsListeners[e].forEach((n, i) => {
                                            (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                                                r.eventsListeners[e].splice(i, 1);
                                        });
                              }),
                              r)
                            : r;
                    },
                    emit() {
                        const e = this;
                        if (!e.eventsListeners) return e;
                        let t, r, n;
                        for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                        return (
                            "string" == typeof s[0] || Array.isArray(s[0])
                                ? ((t = s[0]), (r = s.slice(1, s.length)), (n = e))
                                : ((t = s[0].events), (r = s[0].data), (n = s[0].context || e)),
                            r.unshift(n),
                            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
                                e.eventsAnyListeners &&
                                    e.eventsAnyListeners.length &&
                                    e.eventsAnyListeners.forEach((e) => {
                                        e.apply(n, [t, ...r]);
                                    }),
                                    e.eventsListeners &&
                                        e.eventsListeners[t] &&
                                        e.eventsListeners[t].forEach((e) => {
                                            e.apply(n, r);
                                        });
                            }),
                            e
                        );
                    },
                },
                P = {
                    updateSize: function () {
                        const e = this;
                        let t, r;
                        const n = e.$el;
                        (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth),
                            (r =
                                void 0 !== e.params.height && null !== e.params.height
                                    ? e.params.height
                                    : n[0].clientHeight),
                            (0 === t && e.isHorizontal()) ||
                                (0 === r && e.isVertical()) ||
                                ((t =
                                    t -
                                    parseInt(n.css("padding-left") || 0, 10) -
                                    parseInt(n.css("padding-right") || 0, 10)),
                                (r =
                                    r -
                                    parseInt(n.css("padding-top") || 0, 10) -
                                    parseInt(n.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(r) && (r = 0),
                                Object.assign(e, { width: t, height: r, size: e.isHorizontal() ? t : r }));
                    },
                    updateSlides: function () {
                        const e = this;
                        function t(t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[t];
                        }
                        function r(e, r) {
                            return parseFloat(e.getPropertyValue(t(r)) || 0);
                        }
                        const n = e.params,
                            { $wrapperEl: i, size: s, rtlTranslate: a, wrongRTL: o } = e,
                            l = e.virtual && n.virtual.enabled,
                            c = l ? e.virtual.slides.length : e.slides.length,
                            d = i.children(`.${e.params.slideClass}`),
                            u = l ? e.virtual.slides.length : d.length;
                        let p = [];
                        const f = [],
                            h = [];
                        let v = n.slidesOffsetBefore;
                        "function" == typeof v && (v = n.slidesOffsetBefore.call(e));
                        let m = n.slidesOffsetAfter;
                        "function" == typeof m && (m = n.slidesOffsetAfter.call(e));
                        const g = e.snapGrid.length,
                            y = e.slidesGrid.length;
                        let b = n.spaceBetween,
                            x = -v,
                            S = 0,
                            T = 0;
                        if (void 0 === s) return;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * s),
                            (e.virtualSize = -b),
                            a
                                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                            n.centeredSlides &&
                                n.cssMode &&
                                (w(e.wrapperEl, "--swiper-centered-offset-before", ""),
                                w(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        const C = n.grid && n.grid.rows > 1 && e.grid;
                        let E;
                        C && e.grid.initSlides(u);
                        const O =
                            "auto" === n.slidesPerView &&
                            n.breakpoints &&
                            Object.keys(n.breakpoints).filter((e) => void 0 !== n.breakpoints[e].slidesPerView).length >
                                0;
                        for (let i = 0; i < u; i += 1) {
                            E = 0;
                            const a = d.eq(i);
                            if ((C && e.grid.updateSlide(i, a, u, t), "none" !== a.css("display"))) {
                                if ("auto" === n.slidesPerView) {
                                    O && (d[i].style[t("width")] = "");
                                    const s = getComputedStyle(a[0]),
                                        o = a[0].style.transform,
                                        l = a[0].style.webkitTransform;
                                    if (
                                        (o && (a[0].style.transform = "none"),
                                        l && (a[0].style.webkitTransform = "none"),
                                        n.roundLengths)
                                    )
                                        E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                                    else {
                                        const e = r(s, "width"),
                                            t = r(s, "padding-left"),
                                            n = r(s, "padding-right"),
                                            i = r(s, "margin-left"),
                                            o = r(s, "margin-right"),
                                            l = s.getPropertyValue("box-sizing");
                                        if (l && "border-box" === l) E = e + i + o;
                                        else {
                                            const { clientWidth: r, offsetWidth: s } = a[0];
                                            E = e + t + n + i + o + (s - r);
                                        }
                                    }
                                    o && (a[0].style.transform = o),
                                        l && (a[0].style.webkitTransform = l),
                                        n.roundLengths && (E = Math.floor(E));
                                } else
                                    (E = (s - (n.slidesPerView - 1) * b) / n.slidesPerView),
                                        n.roundLengths && (E = Math.floor(E)),
                                        d[i] && (d[i].style[t("width")] = `${E}px`);
                                d[i] && (d[i].swiperSlideSize = E),
                                    h.push(E),
                                    n.centeredSlides
                                        ? ((x = x + E / 2 + S / 2 + b),
                                          0 === S && 0 !== i && (x = x - s / 2 - b),
                                          0 === i && (x = x - s / 2 - b),
                                          Math.abs(x) < 0.001 && (x = 0),
                                          n.roundLengths && (x = Math.floor(x)),
                                          T % n.slidesPerGroup == 0 && p.push(x),
                                          f.push(x))
                                        : (n.roundLengths && (x = Math.floor(x)),
                                          (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup ==
                                              0 && p.push(x),
                                          f.push(x),
                                          (x = x + E + b)),
                                    (e.virtualSize += E + b),
                                    (S = E),
                                    (T += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, s) + m),
                            a &&
                                o &&
                                ("slide" === n.effect || "coverflow" === n.effect) &&
                                i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
                            n.setWrapperSize && i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
                            C && e.grid.updateWrapperSize(E, p, t),
                            !n.centeredSlides)
                        ) {
                            const t = [];
                            for (let r = 0; r < p.length; r += 1) {
                                let i = p[r];
                                n.roundLengths && (i = Math.floor(i)), p[r] <= e.virtualSize - s && t.push(i);
                            }
                            (p = t),
                                Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                                    p.push(e.virtualSize - s);
                        }
                        if ((0 === p.length && (p = [0]), 0 !== n.spaceBetween)) {
                            const r = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                            d.filter((e, t) => !n.cssMode || t !== d.length - 1).css({ [r]: `${b}px` });
                        }
                        if (n.centeredSlides && n.centeredSlidesBounds) {
                            let e = 0;
                            h.forEach((t) => {
                                e += t + (n.spaceBetween ? n.spaceBetween : 0);
                            }),
                                (e -= n.spaceBetween);
                            const t = e - s;
                            p = p.map((e) => (e < 0 ? -v : e > t ? t + m : e));
                        }
                        if (n.centerInsufficientSlides) {
                            let e = 0;
                            if (
                                (h.forEach((t) => {
                                    e += t + (n.spaceBetween ? n.spaceBetween : 0);
                                }),
                                (e -= n.spaceBetween),
                                e < s)
                            ) {
                                const t = (s - e) / 2;
                                p.forEach((e, r) => {
                                    p[r] = e - t;
                                }),
                                    f.forEach((e, r) => {
                                        f[r] = e + t;
                                    });
                            }
                        }
                        if (
                            (Object.assign(e, { slides: d, snapGrid: p, slidesGrid: f, slidesSizesGrid: h }),
                            n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
                        ) {
                            w(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                                w(
                                    e.wrapperEl,
                                    "--swiper-centered-offset-after",
                                    e.size / 2 - h[h.length - 1] / 2 + "px"
                                );
                            const t = -e.snapGrid[0],
                                r = -e.slidesGrid[0];
                            (e.snapGrid = e.snapGrid.map((e) => e + t)),
                                (e.slidesGrid = e.slidesGrid.map((e) => e + r));
                        }
                        if (
                            (u !== c && e.emit("slidesLengthChange"),
                            p.length !== g &&
                                (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                            f.length !== y && e.emit("slidesGridLengthChange"),
                            n.watchSlidesProgress && e.updateSlidesOffset(),
                            !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
                        ) {
                            const t = `${n.containerModifierClass}backface-hidden`,
                                r = e.$el.hasClass(t);
                            u <= n.maxBackfaceHiddenSlides ? r || e.$el.addClass(t) : r && e.$el.removeClass(t);
                        }
                    },
                    updateAutoHeight: function (e) {
                        const t = this,
                            r = [],
                            n = t.virtual && t.params.virtual.enabled;
                        let i,
                            s = 0;
                        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                        const a = (e) =>
                            n
                                ? t.slides.filter(
                                      (t) => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                                  )[0]
                                : t.slides.eq(e)[0];
                        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                            if (t.params.centeredSlides)
                                t.visibleSlides.each((e) => {
                                    r.push(e);
                                });
                            else
                                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                    const e = t.activeIndex + i;
                                    if (e > t.slides.length && !n) break;
                                    r.push(a(e));
                                }
                        else r.push(a(t.activeIndex));
                        for (i = 0; i < r.length; i += 1)
                            if (void 0 !== r[i]) {
                                const e = r[i].offsetHeight;
                                s = e > s ? e : s;
                            }
                        (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
                    },
                    updateSlidesOffset: function () {
                        const e = this,
                            t = e.slides;
                        for (let r = 0; r < t.length; r += 1)
                            t[r].swiperSlideOffset = e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop;
                    },
                    updateSlidesProgress: function (e) {
                        void 0 === e && (e = (this && this.translate) || 0);
                        const t = this,
                            r = t.params,
                            { slides: n, rtlTranslate: i, snapGrid: s } = t;
                        if (0 === n.length) return;
                        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                        let a = -e;
                        i && (a = e),
                            n.removeClass(r.slideVisibleClass),
                            (t.visibleSlidesIndexes = []),
                            (t.visibleSlides = []);
                        for (let e = 0; e < n.length; e += 1) {
                            const o = n[e];
                            let l = o.swiperSlideOffset;
                            r.cssMode && r.centeredSlides && (l -= n[0].swiperSlideOffset);
                            const c =
                                    (a + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                                    (o.swiperSlideSize + r.spaceBetween),
                                d =
                                    (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) /
                                    (o.swiperSlideSize + r.spaceBetween),
                                u = -(a - l),
                                p = u + t.slidesSizesGrid[e];
                            ((u >= 0 && u < t.size - 1) || (p > 1 && p <= t.size) || (u <= 0 && p >= t.size)) &&
                                (t.visibleSlides.push(o),
                                t.visibleSlidesIndexes.push(e),
                                n.eq(e).addClass(r.slideVisibleClass)),
                                (o.progress = i ? -c : c),
                                (o.originalProgress = i ? -d : d);
                        }
                        t.visibleSlides = h(t.visibleSlides);
                    },
                    updateProgress: function (e) {
                        const t = this;
                        if (void 0 === e) {
                            const r = t.rtlTranslate ? -1 : 1;
                            e = (t && t.translate && t.translate * r) || 0;
                        }
                        const r = t.params,
                            n = t.maxTranslate() - t.minTranslate();
                        let { progress: i, isBeginning: s, isEnd: a } = t;
                        const o = s,
                            l = a;
                        0 === n
                            ? ((i = 0), (s = !0), (a = !0))
                            : ((i = (e - t.minTranslate()) / n), (s = i <= 0), (a = i >= 1)),
                            Object.assign(t, { progress: i, isBeginning: s, isEnd: a }),
                            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) && t.updateSlidesProgress(e),
                            s && !o && t.emit("reachBeginning toEdge"),
                            a && !l && t.emit("reachEnd toEdge"),
                            ((o && !s) || (l && !a)) && t.emit("fromEdge"),
                            t.emit("progress", i);
                    },
                    updateSlidesClasses: function () {
                        const e = this,
                            { slides: t, params: r, $wrapperEl: n, activeIndex: i, realIndex: s } = e,
                            a = e.virtual && r.virtual.enabled;
                        let o;
                        t.removeClass(
                            `${r.slideActiveClass} ${r.slideNextClass} ${r.slidePrevClass} ${r.slideDuplicateActiveClass} ${r.slideDuplicateNextClass} ${r.slideDuplicatePrevClass}`
                        ),
                            (o = a ? e.$wrapperEl.find(`.${r.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)),
                            o.addClass(r.slideActiveClass),
                            r.loop &&
                                (o.hasClass(r.slideDuplicateClass)
                                    ? n
                                          .children(
                                              `.${r.slideClass}:not(.${r.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                                          )
                                          .addClass(r.slideDuplicateActiveClass)
                                    : n
                                          .children(
                                              `.${r.slideClass}.${r.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                                          )
                                          .addClass(r.slideDuplicateActiveClass));
                        let l = o.nextAll(`.${r.slideClass}`).eq(0).addClass(r.slideNextClass);
                        r.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(r.slideNextClass));
                        let c = o.prevAll(`.${r.slideClass}`).eq(0).addClass(r.slidePrevClass);
                        r.loop && 0 === c.length && ((c = t.eq(-1)), c.addClass(r.slidePrevClass)),
                            r.loop &&
                                (l.hasClass(r.slideDuplicateClass)
                                    ? n
                                          .children(
                                              `.${r.slideClass}:not(.${
                                                  r.slideDuplicateClass
                                              })[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
                                          )
                                          .addClass(r.slideDuplicateNextClass)
                                    : n
                                          .children(
                                              `.${r.slideClass}.${
                                                  r.slideDuplicateClass
                                              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
                                          )
                                          .addClass(r.slideDuplicateNextClass),
                                c.hasClass(r.slideDuplicateClass)
                                    ? n
                                          .children(
                                              `.${r.slideClass}:not(.${
                                                  r.slideDuplicateClass
                                              })[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
                                          )
                                          .addClass(r.slideDuplicatePrevClass)
                                    : n
                                          .children(
                                              `.${r.slideClass}.${
                                                  r.slideDuplicateClass
                                              }[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`
                                          )
                                          .addClass(r.slideDuplicatePrevClass)),
                            e.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        const t = this,
                            r = t.rtlTranslate ? t.translate : -t.translate,
                            { slidesGrid: n, snapGrid: i, params: s, activeIndex: a, realIndex: o, snapIndex: l } = t;
                        let c,
                            d = e;
                        if (void 0 === d) {
                            for (let e = 0; e < n.length; e += 1)
                                void 0 !== n[e + 1]
                                    ? r >= n[e] && r < n[e + 1] - (n[e + 1] - n[e]) / 2
                                        ? (d = e)
                                        : r >= n[e] && r < n[e + 1] && (d = e + 1)
                                    : r >= n[e] && (d = e);
                            s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                        }
                        if (i.indexOf(r) >= 0) c = i.indexOf(r);
                        else {
                            const e = Math.min(s.slidesPerGroupSkip, d);
                            c = e + Math.floor((d - e) / s.slidesPerGroup);
                        }
                        if ((c >= i.length && (c = i.length - 1), d === a))
                            return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
                        const u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                        Object.assign(t, { snapIndex: c, realIndex: u, previousIndex: a, activeIndex: d }),
                            t.emit("activeIndexChange"),
                            t.emit("snapIndexChange"),
                            o !== u && t.emit("realIndexChange"),
                            (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
                    },
                    updateClickedSlide: function (e) {
                        const t = this,
                            r = t.params,
                            n = h(e).closest(`.${r.slideClass}`)[0];
                        let i,
                            s = !1;
                        if (n)
                            for (let e = 0; e < t.slides.length; e += 1)
                                if (t.slides[e] === n) {
                                    (s = !0), (i = e);
                                    break;
                                }
                        if (!n || !s) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                        (t.clickedSlide = n),
                            t.virtual && t.params.virtual.enabled
                                ? (t.clickedIndex = parseInt(h(n).attr("data-swiper-slide-index"), 10))
                                : (t.clickedIndex = i),
                            r.slideToClickedSlide &&
                                void 0 !== t.clickedIndex &&
                                t.clickedIndex !== t.activeIndex &&
                                t.slideToClickedSlide();
                    },
                };
            function M(e) {
                let { swiper: t, runCallbacks: r, direction: n, step: i } = e;
                const { activeIndex: s, previousIndex: a } = t;
                let o = n;
                if ((o || (o = s > a ? "next" : s < a ? "prev" : "reset"), t.emit(`transition${i}`), r && s !== a)) {
                    if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
                    t.emit(`slideChangeTransition${i}`),
                        "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
                }
            }
            const k = {
                    slideTo: function (e, t, r, n, i) {
                        if (
                            (void 0 === e && (e = 0),
                            void 0 === t && (t = this.params.speed),
                            void 0 === r && (r = !0),
                            "number" != typeof e && "string" != typeof e)
                        )
                            throw new Error(
                                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                            );
                        if ("string" == typeof e) {
                            const t = parseInt(e, 10);
                            if (!isFinite(t))
                                throw new Error(
                                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                                );
                            e = t;
                        }
                        const s = this;
                        let a = e;
                        a < 0 && (a = 0);
                        const {
                            params: o,
                            snapGrid: l,
                            slidesGrid: c,
                            previousIndex: d,
                            activeIndex: u,
                            rtlTranslate: p,
                            wrapperEl: f,
                            enabled: h,
                        } = s;
                        if ((s.animating && o.preventInteractionOnTransition) || (!h && !n && !i)) return !1;
                        const v = Math.min(s.params.slidesPerGroupSkip, a);
                        let m = v + Math.floor((a - v) / s.params.slidesPerGroup);
                        m >= l.length && (m = l.length - 1),
                            (u || o.initialSlide || 0) === (d || 0) && r && s.emit("beforeSlideChangeStart");
                        const g = -l[m];
                        if ((s.updateProgress(g), o.normalizeSlideIndex))
                            for (let e = 0; e < c.length; e += 1) {
                                const t = -Math.floor(100 * g),
                                    r = Math.floor(100 * c[e]),
                                    n = Math.floor(100 * c[e + 1]);
                                void 0 !== c[e + 1]
                                    ? t >= r && t < n - (n - r) / 2
                                        ? (a = e)
                                        : t >= r && t < n && (a = e + 1)
                                    : t >= r && (a = e);
                            }
                        if (s.initialized && a !== u) {
                            if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                            if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (u || 0) !== a)
                                return !1;
                        }
                        let y;
                        if (
                            ((y = a > u ? "next" : a < u ? "prev" : "reset"),
                            (p && -g === s.translate) || (!p && g === s.translate))
                        )
                            return (
                                s.updateActiveIndex(a),
                                o.autoHeight && s.updateAutoHeight(),
                                s.updateSlidesClasses(),
                                "slide" !== o.effect && s.setTranslate(g),
                                "reset" !== y && (s.transitionStart(r, y), s.transitionEnd(r, y)),
                                !1
                            );
                        if (o.cssMode) {
                            const e = s.isHorizontal(),
                                r = p ? g : -g;
                            if (0 === t) {
                                const t = s.virtual && s.params.virtual.enabled;
                                t && ((s.wrapperEl.style.scrollSnapType = "none"), (s._immediateVirtual = !0)),
                                    (f[e ? "scrollLeft" : "scrollTop"] = r),
                                    t &&
                                        requestAnimationFrame(() => {
                                            (s.wrapperEl.style.scrollSnapType = ""), (s._swiperImmediateVirtual = !1);
                                        });
                            } else {
                                if (!s.support.smoothScroll)
                                    return x({ swiper: s, targetPosition: r, side: e ? "left" : "top" }), !0;
                                f.scrollTo({ [e ? "left" : "top"]: r, behavior: "smooth" });
                            }
                            return !0;
                        }
                        return (
                            s.setTransition(t),
                            s.setTranslate(g),
                            s.updateActiveIndex(a),
                            s.updateSlidesClasses(),
                            s.emit("beforeTransitionStart", t, n),
                            s.transitionStart(r, y),
                            0 === t
                                ? s.transitionEnd(r, y)
                                : s.animating ||
                                  ((s.animating = !0),
                                  s.onSlideToWrapperTransitionEnd ||
                                      (s.onSlideToWrapperTransitionEnd = function (e) {
                                          s &&
                                              !s.destroyed &&
                                              e.target === this &&
                                              (s.$wrapperEl[0].removeEventListener(
                                                  "transitionend",
                                                  s.onSlideToWrapperTransitionEnd
                                              ),
                                              s.$wrapperEl[0].removeEventListener(
                                                  "webkitTransitionEnd",
                                                  s.onSlideToWrapperTransitionEnd
                                              ),
                                              (s.onSlideToWrapperTransitionEnd = null),
                                              delete s.onSlideToWrapperTransitionEnd,
                                              s.transitionEnd(r, y));
                                      }),
                                  s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                  s.$wrapperEl[0].addEventListener(
                                      "webkitTransitionEnd",
                                      s.onSlideToWrapperTransitionEnd
                                  )),
                            !0
                        );
                    },
                    slideToLoop: function (e, t, r, n) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0);
                        const i = this;
                        let s = e;
                        return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, r, n);
                    },
                    slideNext: function (e, t, r) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        const n = this,
                            { animating: i, enabled: s, params: a } = n;
                        if (!s) return n;
                        let o = a.slidesPerGroup;
                        "auto" === a.slidesPerView &&
                            1 === a.slidesPerGroup &&
                            a.slidesPerGroupAuto &&
                            (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                        const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                        if (a.loop) {
                            if (i && a.loopPreventsSlide) return !1;
                            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
                        }
                        return a.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r);
                    },
                    slidePrev: function (e, t, r) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        const n = this,
                            { params: i, animating: s, snapGrid: a, slidesGrid: o, rtlTranslate: l, enabled: c } = n;
                        if (!c) return n;
                        if (i.loop) {
                            if (s && i.loopPreventsSlide) return !1;
                            n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
                        }
                        function d(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                        }
                        const u = d(l ? n.translate : -n.translate),
                            p = a.map((e) => d(e));
                        let f = a[p.indexOf(u) - 1];
                        if (void 0 === f && i.cssMode) {
                            let e;
                            a.forEach((t, r) => {
                                u >= t && (e = r);
                            }),
                                void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
                        }
                        let h = 0;
                        if (
                            (void 0 !== f &&
                                ((h = o.indexOf(f)),
                                h < 0 && (h = n.activeIndex - 1),
                                "auto" === i.slidesPerView &&
                                    1 === i.slidesPerGroup &&
                                    i.slidesPerGroupAuto &&
                                    ((h = h - n.slidesPerViewDynamic("previous", !0) + 1), (h = Math.max(h, 0)))),
                            i.rewind && n.isBeginning)
                        ) {
                            const i =
                                n.params.virtual && n.params.virtual.enabled && n.virtual
                                    ? n.virtual.slides.length - 1
                                    : n.slides.length - 1;
                            return n.slideTo(i, e, t, r);
                        }
                        return n.slideTo(h, e, t, r);
                    },
                    slideReset: function (e, t, r) {
                        return (
                            void 0 === e && (e = this.params.speed),
                            void 0 === t && (t = !0),
                            this.slideTo(this.activeIndex, e, t, r)
                        );
                    },
                    slideToClosest: function (e, t, r, n) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = 0.5);
                        const i = this;
                        let s = i.activeIndex;
                        const a = Math.min(i.params.slidesPerGroupSkip, s),
                            o = a + Math.floor((s - a) / i.params.slidesPerGroup),
                            l = i.rtlTranslate ? i.translate : -i.translate;
                        if (l >= i.snapGrid[o]) {
                            const e = i.snapGrid[o];
                            l - e > (i.snapGrid[o + 1] - e) * n && (s += i.params.slidesPerGroup);
                        } else {
                            const e = i.snapGrid[o - 1];
                            l - e <= (i.snapGrid[o] - e) * n && (s -= i.params.slidesPerGroup);
                        }
                        return (s = Math.max(s, 0)), (s = Math.min(s, i.slidesGrid.length - 1)), i.slideTo(s, e, t, r);
                    },
                    slideToClickedSlide: function () {
                        const e = this,
                            { params: t, $wrapperEl: r } = e,
                            n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                        let i,
                            s = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            (i = parseInt(h(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                t.centeredSlides
                                    ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2
                                        ? (e.loopFix(),
                                          (s = r
                                              .children(
                                                  `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                                              )
                                              .eq(0)
                                              .index()),
                                          v(() => {
                                              e.slideTo(s);
                                          }))
                                        : e.slideTo(s)
                                    : s > e.slides.length - n
                                    ? (e.loopFix(),
                                      (s = r
                                          .children(
                                              `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                                          )
                                          .eq(0)
                                          .index()),
                                      v(() => {
                                          e.slideTo(s);
                                      }))
                                    : e.slideTo(s);
                        } else e.slideTo(s);
                    },
                },
                $ = {
                    loopCreate: function () {
                        const e = this,
                            t = i(),
                            { params: r, $wrapperEl: n } = e,
                            s = n.children().length > 0 ? h(n.children()[0].parentNode) : n;
                        s.children(`.${r.slideClass}.${r.slideDuplicateClass}`).remove();
                        let a = s.children(`.${r.slideClass}`);
                        if (r.loopFillGroupWithBlank) {
                            const e = r.slidesPerGroup - (a.length % r.slidesPerGroup);
                            if (e !== r.slidesPerGroup) {
                                for (let n = 0; n < e; n += 1) {
                                    const e = h(t.createElement("div")).addClass(
                                        `${r.slideClass} ${r.slideBlankClass}`
                                    );
                                    s.append(e);
                                }
                                a = s.children(`.${r.slideClass}`);
                            }
                        }
                        "auto" !== r.slidesPerView || r.loopedSlides || (r.loopedSlides = a.length),
                            (e.loopedSlides = Math.ceil(parseFloat(r.loopedSlides || r.slidesPerView, 10))),
                            (e.loopedSlides += r.loopAdditionalSlides),
                            e.loopedSlides > a.length && (e.loopedSlides = a.length);
                        const o = [],
                            l = [];
                        a.each((t, r) => {
                            const n = h(t);
                            r < e.loopedSlides && l.push(t),
                                r < a.length && r >= a.length - e.loopedSlides && o.push(t),
                                n.attr("data-swiper-slide-index", r);
                        });
                        for (let e = 0; e < l.length; e += 1)
                            s.append(h(l[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
                        for (let e = o.length - 1; e >= 0; e -= 1)
                            s.prepend(h(o[e].cloneNode(!0)).addClass(r.slideDuplicateClass));
                    },
                    loopFix: function () {
                        const e = this;
                        e.emit("beforeLoopFix");
                        const {
                            activeIndex: t,
                            slides: r,
                            loopedSlides: n,
                            allowSlidePrev: i,
                            allowSlideNext: s,
                            snapGrid: a,
                            rtlTranslate: o,
                        } = e;
                        let l;
                        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                        const c = -a[t] - e.getTranslate();
                        t < n
                            ? ((l = r.length - 3 * n + t),
                              (l += n),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 !== c &&
                                  e.setTranslate((o ? -e.translate : e.translate) - c))
                            : t >= r.length - n &&
                              ((l = -r.length + t + n),
                              (l += n),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 !== c &&
                                  e.setTranslate((o ? -e.translate : e.translate) - c)),
                            (e.allowSlidePrev = i),
                            (e.allowSlideNext = s),
                            e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        const { $wrapperEl: e, params: t, slides: r } = this;
                        e
                            .children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`)
                            .remove(),
                            r.removeAttr("data-swiper-slide-index");
                    },
                };
            function L(e) {
                const t = this,
                    r = i(),
                    n = a(),
                    s = t.touchEventsData,
                    { params: o, touches: l, enabled: c } = t;
                if (!c) return;
                if (t.animating && o.preventInteractionOnTransition) return;
                !t.animating && o.cssMode && o.loop && t.loopFix();
                let d = e;
                d.originalEvent && (d = d.originalEvent);
                let u = h(d.target);
                if ("wrapper" === o.touchEventsTarget && !u.closest(t.wrapperEl).length) return;
                if (((s.isTouchEvent = "touchstart" === d.type), !s.isTouchEvent && "which" in d && 3 === d.which))
                    return;
                if (!s.isTouchEvent && "button" in d && d.button > 0) return;
                if (s.isTouched && s.isMoved) return;
                o.noSwipingClass &&
                    "" !== o.noSwipingClass &&
                    d.target &&
                    d.target.shadowRoot &&
                    e.path &&
                    e.path[0] &&
                    (u = h(e.path[0]));
                const p = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                    f = !(!d.target || !d.target.shadowRoot);
                if (
                    o.noSwiping &&
                    (f
                        ? (function (e, t) {
                              return (
                                  void 0 === t && (t = this),
                                  (function t(r) {
                                      return r && r !== i() && r !== a()
                                          ? (r.assignedSlot && (r = r.assignedSlot),
                                            r.closest(e) || t(r.getRootNode().host))
                                          : null;
                                  })(t)
                              );
                          })(p, d.target)
                        : u.closest(p)[0])
                )
                    return void (t.allowClick = !0);
                if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
                (l.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
                    (l.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
                const v = l.currentX,
                    g = l.currentY,
                    y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                    b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
                if (y && (v <= b || v >= n.innerWidth - b)) {
                    if ("prevent" !== y) return;
                    e.preventDefault();
                }
                if (
                    (Object.assign(s, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0,
                    }),
                    (l.startX = v),
                    (l.startY = g),
                    (s.touchStartTime = m()),
                    (t.allowClick = !0),
                    t.updateSize(),
                    (t.swipeDirection = void 0),
                    o.threshold > 0 && (s.allowThresholdMove = !1),
                    "touchstart" !== d.type)
                ) {
                    let e = !0;
                    u.is(s.focusableElements) && ((e = !1), "SELECT" === u[0].nodeName && (s.isTouched = !1)),
                        r.activeElement &&
                            h(r.activeElement).is(s.focusableElements) &&
                            r.activeElement !== u[0] &&
                            r.activeElement.blur();
                    const n = e && t.allowTouchMove && o.touchStartPreventDefault;
                    (!o.touchStartForcePreventDefault && !n) || u[0].isContentEditable || d.preventDefault();
                }
                t.params.freeMode &&
                    t.params.freeMode.enabled &&
                    t.freeMode &&
                    t.animating &&
                    !o.cssMode &&
                    t.freeMode.onTouchStart(),
                    t.emit("touchStart", d);
            }
            function A(e) {
                const t = i(),
                    r = this,
                    n = r.touchEventsData,
                    { params: s, touches: a, rtlTranslate: o, enabled: l } = r;
                if (!l) return;
                let c = e;
                if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
                    return void (n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", c));
                if (n.isTouchEvent && "touchmove" !== c.type) return;
                const d = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                    u = "touchmove" === c.type ? d.pageX : c.pageX,
                    p = "touchmove" === c.type ? d.pageY : c.pageY;
                if (c.preventedByNestedSwiper) return (a.startX = u), void (a.startY = p);
                if (!r.allowTouchMove)
                    return (
                        h(c.target).is(n.focusableElements) || (r.allowClick = !1),
                        void (
                            n.isTouched &&
                            (Object.assign(a, { startX: u, startY: p, currentX: u, currentY: p }),
                            (n.touchStartTime = m()))
                        )
                    );
                if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (r.isVertical()) {
                        if (
                            (p < a.startY && r.translate <= r.maxTranslate()) ||
                            (p > a.startY && r.translate >= r.minTranslate())
                        )
                            return (n.isTouched = !1), void (n.isMoved = !1);
                    } else if (
                        (u < a.startX && r.translate <= r.maxTranslate()) ||
                        (u > a.startX && r.translate >= r.minTranslate())
                    )
                        return;
                if (
                    n.isTouchEvent &&
                    t.activeElement &&
                    c.target === t.activeElement &&
                    h(c.target).is(n.focusableElements)
                )
                    return (n.isMoved = !0), void (r.allowClick = !1);
                if ((n.allowTouchCallbacks && r.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1))
                    return;
                (a.currentX = u), (a.currentY = p);
                const f = a.currentX - a.startX,
                    v = a.currentY - a.startY;
                if (r.params.threshold && Math.sqrt(f ** 2 + v ** 2) < r.params.threshold) return;
                if (void 0 === n.isScrolling) {
                    let e;
                    (r.isHorizontal() && a.currentY === a.startY) || (r.isVertical() && a.currentX === a.startX)
                        ? (n.isScrolling = !1)
                        : f * f + v * v >= 25 &&
                          ((e = (180 * Math.atan2(Math.abs(v), Math.abs(f))) / Math.PI),
                          (n.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle));
                }
                if (
                    (n.isScrolling && r.emit("touchMoveOpposite", c),
                    void 0 === n.startMoving &&
                        ((a.currentX === a.startX && a.currentY === a.startY) || (n.startMoving = !0)),
                    n.isScrolling)
                )
                    return void (n.isTouched = !1);
                if (!n.startMoving) return;
                (r.allowClick = !1),
                    !s.cssMode && c.cancelable && c.preventDefault(),
                    s.touchMoveStopPropagation && !s.nested && c.stopPropagation(),
                    n.isMoved ||
                        (s.loop && !s.cssMode && r.loopFix(),
                        (n.startTranslate = r.getTranslate()),
                        r.setTransition(0),
                        r.animating && r.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (n.allowMomentumBounce = !1),
                        !s.grabCursor || (!0 !== r.allowSlideNext && !0 !== r.allowSlidePrev) || r.setGrabCursor(!0),
                        r.emit("sliderFirstMove", c)),
                    r.emit("sliderMove", c),
                    (n.isMoved = !0);
                let g = r.isHorizontal() ? f : v;
                (a.diff = g),
                    (g *= s.touchRatio),
                    o && (g = -g),
                    (r.swipeDirection = g > 0 ? "prev" : "next"),
                    (n.currentTranslate = g + n.startTranslate);
                let y = !0,
                    b = s.resistanceRatio;
                if (
                    (s.touchReleaseOnEdges && (b = 0),
                    g > 0 && n.currentTranslate > r.minTranslate()
                        ? ((y = !1),
                          s.resistance &&
                              (n.currentTranslate =
                                  r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** b))
                        : g < 0 &&
                          n.currentTranslate < r.maxTranslate() &&
                          ((y = !1),
                          s.resistance &&
                              (n.currentTranslate =
                                  r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** b)),
                    y && (c.preventedByNestedSwiper = !0),
                    !r.allowSlideNext &&
                        "next" === r.swipeDirection &&
                        n.currentTranslate < n.startTranslate &&
                        (n.currentTranslate = n.startTranslate),
                    !r.allowSlidePrev &&
                        "prev" === r.swipeDirection &&
                        n.currentTranslate > n.startTranslate &&
                        (n.currentTranslate = n.startTranslate),
                    r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate),
                    s.threshold > 0)
                ) {
                    if (!(Math.abs(g) > s.threshold || n.allowThresholdMove))
                        return void (n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove)
                        return (
                            (n.allowThresholdMove = !0),
                            (a.startX = a.currentX),
                            (a.startY = a.currentY),
                            (n.currentTranslate = n.startTranslate),
                            void (a.diff = r.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                        );
                }
                s.followFinger &&
                    !s.cssMode &&
                    (((s.freeMode && s.freeMode.enabled && r.freeMode) || s.watchSlidesProgress) &&
                        (r.updateActiveIndex(), r.updateSlidesClasses()),
                    r.params.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(),
                    r.updateProgress(n.currentTranslate),
                    r.setTranslate(n.currentTranslate));
            }
            function I(e) {
                const t = this,
                    r = t.touchEventsData,
                    { params: n, touches: i, rtlTranslate: s, slidesGrid: a, enabled: o } = t;
                if (!o) return;
                let l = e;
                if (
                    (l.originalEvent && (l = l.originalEvent),
                    r.allowTouchCallbacks && t.emit("touchEnd", l),
                    (r.allowTouchCallbacks = !1),
                    !r.isTouched)
                )
                    return (
                        r.isMoved && n.grabCursor && t.setGrabCursor(!1), (r.isMoved = !1), void (r.startMoving = !1)
                    );
                n.grabCursor &&
                    r.isMoved &&
                    r.isTouched &&
                    (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                    t.setGrabCursor(!1);
                const c = m(),
                    d = c - r.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || (l.composedPath && l.composedPath());
                    t.updateClickedSlide((e && e[0]) || l.target),
                        t.emit("tap click", l),
                        d < 300 && c - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", l);
                }
                if (
                    ((r.lastClickTime = m()),
                    v(() => {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !r.isTouched ||
                        !r.isMoved ||
                        !t.swipeDirection ||
                        0 === i.diff ||
                        r.currentTranslate === r.startTranslate)
                )
                    return (r.isTouched = !1), (r.isMoved = !1), void (r.startMoving = !1);
                let u;
                if (
                    ((r.isTouched = !1),
                    (r.isMoved = !1),
                    (r.startMoving = !1),
                    (u = n.followFinger ? (s ? t.translate : -t.translate) : -r.currentTranslate),
                    n.cssMode)
                )
                    return;
                if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: u });
                let p = 0,
                    f = t.slidesSizesGrid[0];
                for (let e = 0; e < a.length; e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== a[e + t]
                        ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
                        : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
                }
                let h = null,
                    g = null;
                n.rewind &&
                    (t.isBeginning
                        ? (g =
                              t.params.virtual && t.params.virtual.enabled && t.virtual
                                  ? t.virtual.slides.length - 1
                                  : t.slides.length - 1)
                        : t.isEnd && (h = 0));
                const y = (u - a[p]) / f,
                    b = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (d > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection &&
                        (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? h : p + b) : t.slideTo(p)),
                        "prev" === t.swipeDirection &&
                            (y > 1 - n.longSwipesRatio
                                ? t.slideTo(p + b)
                                : null !== g && y < 0 && Math.abs(y) > n.longSwipesRatio
                                ? t.slideTo(g)
                                : t.slideTo(p));
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    !t.navigation || (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
                        ? ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + b),
                          "prev" === t.swipeDirection && t.slideTo(null !== g ? g : p))
                        : l.target === t.navigation.nextEl
                        ? t.slideTo(p + b)
                        : t.slideTo(p);
                }
            }
            function j() {
                const e = this,
                    { params: t, el: r } = e;
                if (r && 0 === r.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const { allowSlideNext: n, allowSlidePrev: i, snapGrid: s } = e;
                (e.allowSlideNext = !0),
                    (e.allowSlidePrev = !0),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.isBeginning &&
                    !e.params.centeredSlides
                        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                        : e.slideTo(e.activeIndex, 0, !1, !0),
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
                    (e.allowSlidePrev = i),
                    (e.allowSlideNext = n),
                    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
            }
            function z(e) {
                const t = this;
                t.enabled &&
                    (t.allowClick ||
                        (t.params.preventClicks && e.preventDefault(),
                        t.params.preventClicksPropagation &&
                            t.animating &&
                            (e.stopPropagation(), e.stopImmediatePropagation())));
            }
            function D() {
                const e = this,
                    { wrapperEl: t, rtlTranslate: r, enabled: n } = e;
                if (!n) return;
                let i;
                (e.previousTranslate = e.translate),
                    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
                    0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                const s = e.maxTranslate() - e.minTranslate();
                (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
                    i !== e.progress && e.updateProgress(r ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1);
            }
            let G = !1;
            function _() {}
            const N = (e, t) => {
                    const r = i(),
                        { params: n, touchEvents: s, el: a, wrapperEl: o, device: l, support: c } = e,
                        d = !!n.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener",
                        p = t;
                    if (c.touch) {
                        const t = !("touchstart" !== s.start || !c.passiveListener || !n.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                        a[u](s.start, e.onTouchStart, t),
                            a[u](s.move, e.onTouchMove, c.passiveListener ? { passive: !1, capture: d } : d),
                            a[u](s.end, e.onTouchEnd, t),
                            s.cancel && a[u](s.cancel, e.onTouchEnd, t);
                    } else
                        a[u](s.start, e.onTouchStart, !1),
                            r[u](s.move, e.onTouchMove, d),
                            r[u](s.end, e.onTouchEnd, !1);
                    (n.preventClicks || n.preventClicksPropagation) && a[u]("click", e.onClick, !0),
                        n.cssMode && o[u]("scroll", e.onScroll),
                        n.updateOnWindowResize
                            ? e[p](
                                  l.ios || l.android
                                      ? "resize orientationchange observerUpdate"
                                      : "resize observerUpdate",
                                  j,
                                  !0
                              )
                            : e[p]("observerUpdate", j, !0);
                },
                B = {
                    attachEvents: function () {
                        const e = this,
                            t = i(),
                            { params: r, support: n } = e;
                        (e.onTouchStart = L.bind(e)),
                            (e.onTouchMove = A.bind(e)),
                            (e.onTouchEnd = I.bind(e)),
                            r.cssMode && (e.onScroll = D.bind(e)),
                            (e.onClick = z.bind(e)),
                            n.touch && !G && (t.addEventListener("touchstart", _), (G = !0)),
                            N(e, "on");
                    },
                    detachEvents: function () {
                        N(this, "off");
                    },
                },
                F = (e, t) => e.grid && t.grid && t.grid.rows > 1,
                R = {
                    addClasses: function () {
                        const e = this,
                            { classNames: t, params: r, rtl: n, $el: i, device: s, support: a } = e,
                            o = (function (e, t) {
                                const r = [];
                                return (
                                    e.forEach((e) => {
                                        "object" == typeof e
                                            ? Object.keys(e).forEach((n) => {
                                                  e[n] && r.push(t + n);
                                              })
                                            : "string" == typeof e && r.push(t + e);
                                    }),
                                    r
                                );
                            })(
                                [
                                    "initialized",
                                    r.direction,
                                    { "pointer-events": !a.touch },
                                    { "free-mode": e.params.freeMode && r.freeMode.enabled },
                                    { autoheight: r.autoHeight },
                                    { rtl: n },
                                    { grid: r.grid && r.grid.rows > 1 },
                                    { "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill },
                                    { android: s.android },
                                    { ios: s.ios },
                                    { "css-mode": r.cssMode },
                                    { centered: r.cssMode && r.centeredSlides },
                                ],
                                r.containerModifierClass
                            );
                        t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                H = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "wrapper",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    resizeObserver: !0,
                    nested: !1,
                    createElements: !1,
                    enabled: !0,
                    focusableElements: "input, select, option, textarea, button, video, label",
                    width: null,
                    height: null,
                    preventInteractionOnTransition: !1,
                    userAgent: null,
                    url: null,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    breakpointsBase: "window",
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    slidesPerGroupAuto: !1,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !0,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: 0.5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: 0.85,
                    watchSlidesProgress: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    loopPreventsSlide: !0,
                    rewind: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    maxBackfaceHiddenSlides: 10,
                    containerModifierClass: "swiper-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0,
                    _emitClasses: !1,
                };
            function V(e, t) {
                return function (r) {
                    void 0 === r && (r = {});
                    const n = Object.keys(r)[0],
                        i = r[n];
                    "object" == typeof i && null !== i
                        ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
                              !0 === e[n] &&
                              (e[n] = { auto: !0 }),
                          n in e && "enabled" in i
                              ? (!0 === e[n] && (e[n] = { enabled: !0 }),
                                "object" != typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0),
                                e[n] || (e[n] = { enabled: !1 }),
                                b(t, r))
                              : b(t, r))
                        : b(t, r);
                };
            }
            const q = {
                    eventsEmitter: O,
                    update: P,
                    translate: {
                        getTranslate: function (e) {
                            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                            const { params: t, rtlTranslate: r, translate: n, $wrapperEl: i } = this;
                            if (t.virtualTranslate) return r ? -n : n;
                            if (t.cssMode) return n;
                            let s = (function (e, t) {
                                void 0 === t && (t = "x");
                                const r = a();
                                let n, i, s;
                                const o = (function (e) {
                                    const t = a();
                                    let r;
                                    return (
                                        t.getComputedStyle && (r = t.getComputedStyle(e, null)),
                                        !r && e.currentStyle && (r = e.currentStyle),
                                        r || (r = e.style),
                                        r
                                    );
                                })(e);
                                return (
                                    r.WebKitCSSMatrix
                                        ? ((i = o.transform || o.webkitTransform),
                                          i.split(",").length > 6 &&
                                              (i = i
                                                  .split(", ")
                                                  .map((e) => e.replace(",", "."))
                                                  .join(", ")),
                                          (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
                                        : ((s =
                                              o.MozTransform ||
                                              o.OTransform ||
                                              o.MsTransform ||
                                              o.msTransform ||
                                              o.transform ||
                                              o
                                                  .getPropertyValue("transform")
                                                  .replace("translate(", "matrix(1, 0, 0, 1,")),
                                          (n = s.toString().split(","))),
                                    "x" === t &&
                                        (i = r.WebKitCSSMatrix
                                            ? s.m41
                                            : 16 === n.length
                                            ? parseFloat(n[12])
                                            : parseFloat(n[4])),
                                    "y" === t &&
                                        (i = r.WebKitCSSMatrix
                                            ? s.m42
                                            : 16 === n.length
                                            ? parseFloat(n[13])
                                            : parseFloat(n[5])),
                                    i || 0
                                );
                            })(i[0], e);
                            return r && (s = -s), s || 0;
                        },
                        setTranslate: function (e, t) {
                            const r = this,
                                { rtlTranslate: n, params: i, $wrapperEl: s, wrapperEl: a, progress: o } = r;
                            let l,
                                c = 0,
                                d = 0;
                            r.isHorizontal() ? (c = n ? -e : e) : (d = e),
                                i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
                                i.cssMode
                                    ? (a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -c : -d)
                                    : i.virtualTranslate || s.transform(`translate3d(${c}px, ${d}px, 0px)`),
                                (r.previousTranslate = r.translate),
                                (r.translate = r.isHorizontal() ? c : d);
                            const u = r.maxTranslate() - r.minTranslate();
                            (l = 0 === u ? 0 : (e - r.minTranslate()) / u),
                                l !== o && r.updateProgress(e),
                                r.emit("setTranslate", r.translate, t);
                        },
                        minTranslate: function () {
                            return -this.snapGrid[0];
                        },
                        maxTranslate: function () {
                            return -this.snapGrid[this.snapGrid.length - 1];
                        },
                        translateTo: function (e, t, r, n, i) {
                            void 0 === e && (e = 0),
                                void 0 === t && (t = this.params.speed),
                                void 0 === r && (r = !0),
                                void 0 === n && (n = !0);
                            const s = this,
                                { params: a, wrapperEl: o } = s;
                            if (s.animating && a.preventInteractionOnTransition) return !1;
                            const l = s.minTranslate(),
                                c = s.maxTranslate();
                            let d;
                            if (((d = n && e > l ? l : n && e < c ? c : e), s.updateProgress(d), a.cssMode)) {
                                const e = s.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
                                else {
                                    if (!s.support.smoothScroll)
                                        return x({ swiper: s, targetPosition: -d, side: e ? "left" : "top" }), !0;
                                    o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
                                }
                                return !0;
                            }
                            return (
                                0 === t
                                    ? (s.setTransition(0),
                                      s.setTranslate(d),
                                      r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
                                    : (s.setTransition(t),
                                      s.setTranslate(d),
                                      r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
                                      s.animating ||
                                          ((s.animating = !0),
                                          s.onTranslateToWrapperTransitionEnd ||
                                              (s.onTranslateToWrapperTransitionEnd = function (e) {
                                                  s &&
                                                      !s.destroyed &&
                                                      e.target === this &&
                                                      (s.$wrapperEl[0].removeEventListener(
                                                          "transitionend",
                                                          s.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      s.$wrapperEl[0].removeEventListener(
                                                          "webkitTransitionEnd",
                                                          s.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      (s.onTranslateToWrapperTransitionEnd = null),
                                                      delete s.onTranslateToWrapperTransitionEnd,
                                                      r && s.emit("transitionEnd"));
                                              }),
                                          s.$wrapperEl[0].addEventListener(
                                              "transitionend",
                                              s.onTranslateToWrapperTransitionEnd
                                          ),
                                          s.$wrapperEl[0].addEventListener(
                                              "webkitTransitionEnd",
                                              s.onTranslateToWrapperTransitionEnd
                                          ))),
                                !0
                            );
                        },
                    },
                    transition: {
                        setTransition: function (e, t) {
                            const r = this;
                            r.params.cssMode || r.$wrapperEl.transition(e), r.emit("setTransition", e, t);
                        },
                        transitionStart: function (e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                { params: n } = r;
                            n.cssMode ||
                                (n.autoHeight && r.updateAutoHeight(),
                                M({ swiper: r, runCallbacks: e, direction: t, step: "Start" }));
                        },
                        transitionEnd: function (e, t) {
                            void 0 === e && (e = !0);
                            const r = this,
                                { params: n } = r;
                            (r.animating = !1),
                                n.cssMode ||
                                    (r.setTransition(0), M({ swiper: r, runCallbacks: e, direction: t, step: "End" }));
                        },
                    },
                    slide: k,
                    loop: $,
                    grabCursor: {
                        setGrabCursor: function (e) {
                            const t = this;
                            if (
                                t.support.touch ||
                                !t.params.simulateTouch ||
                                (t.params.watchOverflow && t.isLocked) ||
                                t.params.cssMode
                            )
                                return;
                            const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            (r.style.cursor = "move"), (r.style.cursor = e ? "grabbing" : "grab");
                        },
                        unsetGrabCursor: function () {
                            const e = this;
                            e.support.touch ||
                                (e.params.watchOverflow && e.isLocked) ||
                                e.params.cssMode ||
                                (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                        },
                    },
                    events: B,
                    breakpoints: {
                        setBreakpoint: function () {
                            const e = this,
                                { activeIndex: t, initialized: r, loopedSlides: n = 0, params: i, $el: s } = e,
                                a = i.breakpoints;
                            if (!a || (a && 0 === Object.keys(a).length)) return;
                            const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                            if (!o || e.currentBreakpoint === o) return;
                            const l = (o in a ? a[o] : void 0) || e.originalParams,
                                c = F(e, i),
                                d = F(e, l),
                                u = i.enabled;
                            c && !d
                                ? (s.removeClass(
                                      `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
                                  ),
                                  e.emitContainerClasses())
                                : !c &&
                                  d &&
                                  (s.addClass(`${i.containerModifierClass}grid`),
                                  ((l.grid.fill && "column" === l.grid.fill) ||
                                      (!l.grid.fill && "column" === i.grid.fill)) &&
                                      s.addClass(`${i.containerModifierClass}grid-column`),
                                  e.emitContainerClasses());
                            const p = l.direction && l.direction !== i.direction,
                                f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
                            p && r && e.changeDirection(), b(e.params, l);
                            const h = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev,
                            }),
                                u && !h ? e.disable() : !u && h && e.enable(),
                                (e.currentBreakpoint = o),
                                e.emit("_beforeBreakpoint", l),
                                f &&
                                    r &&
                                    (e.loopDestroy(),
                                    e.loopCreate(),
                                    e.updateSlides(),
                                    e.slideTo(t - n + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", l);
                        },
                        getBreakpoint: function (e, t, r) {
                            if ((void 0 === t && (t = "window"), !e || ("container" === t && !r))) return;
                            let n = !1;
                            const i = a(),
                                s = "window" === t ? i.innerHeight : r.clientHeight,
                                o = Object.keys(e).map((e) => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return { value: s * t, point: e };
                                    }
                                    return { value: e, point: e };
                                });
                            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let e = 0; e < o.length; e += 1) {
                                const { point: s, value: a } = o[e];
                                "window" === t
                                    ? i.matchMedia(`(min-width: ${a}px)`).matches && (n = s)
                                    : a <= r.clientWidth && (n = s);
                            }
                            return n || "max";
                        },
                    },
                    checkOverflow: {
                        checkOverflow: function () {
                            const e = this,
                                { isLocked: t, params: r } = e,
                                { slidesOffsetBefore: n } = r;
                            if (n) {
                                const t = e.slides.length - 1,
                                    r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > r;
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                                !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                                t && t !== e.isLocked && (e.isEnd = !1),
                                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
                        },
                    },
                    classes: R,
                    images: {
                        loadImage: function (e, t, r, n, i, s) {
                            const o = a();
                            let l;
                            function c() {
                                s && s();
                            }
                            h(e).parent("picture")[0] || (e.complete && i)
                                ? c()
                                : t
                                ? ((l = new o.Image()),
                                  (l.onload = c),
                                  (l.onerror = c),
                                  n && (l.sizes = n),
                                  r && (l.srcset = r),
                                  t && (l.src = t))
                                : c();
                        },
                        preloadImages: function () {
                            const e = this;
                            function t() {
                                null != e &&
                                    e &&
                                    !e.destroyed &&
                                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                                    e.imagesLoaded === e.imagesToLoad.length &&
                                        (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let r = 0; r < e.imagesToLoad.length; r += 1) {
                                const n = e.imagesToLoad[r];
                                e.loadImage(
                                    n,
                                    n.currentSrc || n.getAttribute("src"),
                                    n.srcset || n.getAttribute("srcset"),
                                    n.sizes || n.getAttribute("sizes"),
                                    !0,
                                    t
                                );
                            }
                        },
                    },
                },
                W = {};
            class X {
                constructor() {
                    let e, t;
                    for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    if (
                        (1 === n.length &&
                        n[0].constructor &&
                        "Object" === Object.prototype.toString.call(n[0]).slice(8, -1)
                            ? (t = n[0])
                            : ([e, t] = n),
                        t || (t = {}),
                        (t = b({}, t)),
                        e && !t.el && (t.el = e),
                        t.el && h(t.el).length > 1)
                    ) {
                        const e = [];
                        return (
                            h(t.el).each((r) => {
                                const n = b({}, t, { el: r });
                                e.push(new X(n));
                            }),
                            e
                        );
                    }
                    const s = this;
                    var o;
                    (s.__swiper__ = !0),
                        (s.support = E()),
                        (s.device =
                            (void 0 === (o = { userAgent: t.userAgent }) && (o = {}),
                            T ||
                                (T = (function (e) {
                                    let { userAgent: t } = void 0 === e ? {} : e;
                                    const r = E(),
                                        n = a(),
                                        i = n.navigator.platform,
                                        s = t || n.navigator.userAgent,
                                        o = { ios: !1, android: !1 },
                                        l = n.screen.width,
                                        c = n.screen.height,
                                        d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                                    let u = s.match(/(iPad).*OS\s([\d_]+)/);
                                    const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                                        f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                        h = "Win32" === i;
                                    let v = "MacIntel" === i;
                                    return (
                                        !u &&
                                            v &&
                                            r.touch &&
                                            [
                                                "1024x1366",
                                                "1366x1024",
                                                "834x1194",
                                                "1194x834",
                                                "834x1112",
                                                "1112x834",
                                                "768x1024",
                                                "1024x768",
                                                "820x1180",
                                                "1180x820",
                                                "810x1080",
                                                "1080x810",
                                            ].indexOf(`${l}x${c}`) >= 0 &&
                                            ((u = s.match(/(Version)\/([\d.]+)/)),
                                            u || (u = [0, 1, "13_0_0"]),
                                            (v = !1)),
                                        d && !h && ((o.os = "android"), (o.android = !0)),
                                        (u || f || p) && ((o.os = "ios"), (o.ios = !0)),
                                        o
                                    );
                                })(o)),
                            T)),
                        (s.browser =
                            (C ||
                                (C = (function () {
                                    const e = a();
                                    return {
                                        isSafari: (function () {
                                            const t = e.navigator.userAgent.toLowerCase();
                                            return (
                                                t.indexOf("safari") >= 0 &&
                                                t.indexOf("chrome") < 0 &&
                                                t.indexOf("android") < 0
                                            );
                                        })(),
                                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                            e.navigator.userAgent
                                        ),
                                    };
                                })()),
                            C)),
                        (s.eventsListeners = {}),
                        (s.eventsAnyListeners = []),
                        (s.modules = [...s.__modules__]),
                        t.modules && Array.isArray(t.modules) && s.modules.push(...t.modules);
                    const l = {};
                    s.modules.forEach((e) => {
                        e({
                            swiper: s,
                            extendParams: V(t, l),
                            on: s.on.bind(s),
                            once: s.once.bind(s),
                            off: s.off.bind(s),
                            emit: s.emit.bind(s),
                        });
                    });
                    const c = b({}, H, l);
                    return (
                        (s.params = b({}, c, W, t)),
                        (s.originalParams = b({}, s.params)),
                        (s.passedParams = b({}, t)),
                        s.params &&
                            s.params.on &&
                            Object.keys(s.params.on).forEach((e) => {
                                s.on(e, s.params.on[e]);
                            }),
                        s.params && s.params.onAny && s.onAny(s.params.onAny),
                        (s.$ = h),
                        Object.assign(s, {
                            enabled: s.params.enabled,
                            el: e,
                            classNames: [],
                            slides: h(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () => "horizontal" === s.params.direction,
                            isVertical: () => "vertical" === s.params.direction,
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: s.params.allowSlideNext,
                            allowSlidePrev: s.params.allowSlidePrev,
                            touchEvents: (function () {
                                const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                    t = ["pointerdown", "pointermove", "pointerup"];
                                return (
                                    (s.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
                                    (s.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                                    s.support.touch || !s.params.simulateTouch
                                        ? s.touchEventsTouch
                                        : s.touchEventsDesktop
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: s.params.focusableElements,
                                lastClickTime: m(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: s.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        s.emit("_swiper"),
                        s.params.init && s.init(),
                        s
                    );
                }
                enable() {
                    const e = this;
                    e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
                }
                disable() {
                    const e = this;
                    e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
                }
                setProgress(e, t) {
                    const r = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = r.minTranslate(),
                        i = (r.maxTranslate() - n) * e + n;
                    r.translateTo(i, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className
                        .split(" ")
                        .filter((t) => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "));
                }
                getSlideClasses(e) {
                    const t = this;
                    return e.className
                        .split(" ")
                        .filter((e) => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))
                        .join(" ");
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((r) => {
                        const n = e.getSlideClasses(r);
                        t.push({ slideEl: r, classNames: n }), e.emit("_slideClass", r, n);
                    }),
                        e.emit("_slideClasses", t);
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const { params: r, slides: n, slidesGrid: i, slidesSizesGrid: s, size: a, activeIndex: o } = this;
                    let l = 1;
                    if (r.centeredSlides) {
                        let e,
                            t = n[o].swiperSlideSize;
                        for (let r = o + 1; r < n.length; r += 1)
                            n[r] && !e && ((t += n[r].swiperSlideSize), (l += 1), t > a && (e = !0));
                        for (let r = o - 1; r >= 0; r -= 1)
                            n[r] && !e && ((t += n[r].swiperSlideSize), (l += 1), t > a && (e = !0));
                    } else if ("current" === e)
                        for (let e = o + 1; e < n.length; e += 1)
                            (t ? i[e] + s[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
                    else for (let e = o - 1; e >= 0; e -= 1) i[o] - i[e] < a && (l += 1);
                    return l;
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const { snapGrid: t, params: r } = e;
                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
                    }
                    let i;
                    r.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                            ? (n(), e.params.autoHeight && e.updateAutoHeight())
                            : ((i =
                                  ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                                  e.isEnd &&
                                  !e.params.centeredSlides
                                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                              i || n()),
                        r.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                        e.emit("update");
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const r = this,
                        n = r.params.direction;
                    return (
                        e || (e = "horizontal" === n ? "vertical" : "horizontal"),
                        e === n ||
                            ("horizontal" !== e && "vertical" !== e) ||
                            (r.$el
                                .removeClass(`${r.params.containerModifierClass}${n}`)
                                .addClass(`${r.params.containerModifierClass}${e}`),
                            r.emitContainerClasses(),
                            (r.params.direction = e),
                            r.slides.each((t) => {
                                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
                            }),
                            r.emit("changeDirection"),
                            t && r.update()),
                        r
                    );
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const r = h(e || t.params.el);
                    if (!(e = r[0])) return !1;
                    e.swiper = t;
                    const n = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    let s = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = h(e.shadowRoot.querySelector(n()));
                            return (t.children = (e) => r.children(e)), t;
                        }
                        return r.children(n());
                    })();
                    if (0 === s.length && t.params.createElements) {
                        const e = i().createElement("div");
                        (s = h(e)),
                            (e.className = t.params.wrapperClass),
                            r.append(e),
                            r.children(`.${t.params.slideClass}`).each((e) => {
                                s.append(e);
                            });
                    }
                    return (
                        Object.assign(t, {
                            $el: r,
                            el: e,
                            $wrapperEl: s,
                            wrapperEl: s[0],
                            mounted: !0,
                            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction"),
                            rtlTranslate:
                                "horizontal" === t.params.direction &&
                                ("rtl" === e.dir.toLowerCase() || "rtl" === r.css("direction")),
                            wrongRTL: "-webkit-box" === s.css("display"),
                        }),
                        !0
                    );
                }
                init(e) {
                    const t = this;
                    return (
                        t.initialized ||
                            !1 === t.mount(e) ||
                            (t.emit("beforeInit"),
                            t.params.breakpoints && t.setBreakpoint(),
                            t.addClasses(),
                            t.params.loop && t.loopCreate(),
                            t.updateSize(),
                            t.updateSlides(),
                            t.params.watchOverflow && t.checkOverflow(),
                            t.params.grabCursor && t.enabled && t.setGrabCursor(),
                            t.params.preloadImages && t.preloadImages(),
                            t.params.loop
                                ? t.slideTo(
                                      t.params.initialSlide + t.loopedSlides,
                                      0,
                                      t.params.runCallbacksOnInit,
                                      !1,
                                      !0
                                  )
                                : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                            t.attachEvents(),
                            (t.initialized = !0),
                            t.emit("init"),
                            t.emit("afterInit")),
                        t
                    );
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const r = this,
                        { params: n, $el: i, $wrapperEl: s, slides: a } = r;
                    return (
                        void 0 === r.params ||
                            r.destroyed ||
                            (r.emit("beforeDestroy"),
                            (r.initialized = !1),
                            r.detachEvents(),
                            n.loop && r.loopDestroy(),
                            t &&
                                (r.removeClasses(),
                                i.removeAttr("style"),
                                s.removeAttr("style"),
                                a &&
                                    a.length &&
                                    a
                                        .removeClass(
                                            [
                                                n.slideVisibleClass,
                                                n.slideActiveClass,
                                                n.slideNextClass,
                                                n.slidePrevClass,
                                            ].join(" ")
                                        )
                                        .removeAttr("style")
                                        .removeAttr("data-swiper-slide-index")),
                            r.emit("destroy"),
                            Object.keys(r.eventsListeners).forEach((e) => {
                                r.off(e);
                            }),
                            !1 !== e &&
                                ((r.$el[0].swiper = null),
                                (function (e) {
                                    const t = e;
                                    Object.keys(t).forEach((e) => {
                                        try {
                                            t[e] = null;
                                        } catch (e) {}
                                        try {
                                            delete t[e];
                                        } catch (e) {}
                                    });
                                })(r)),
                            (r.destroyed = !0)),
                        null
                    );
                }
                static extendDefaults(e) {
                    b(W, e);
                }
                static get extendedDefaults() {
                    return W;
                }
                static get defaults() {
                    return H;
                }
                static installModule(e) {
                    X.prototype.__modules__ || (X.prototype.__modules__ = []);
                    const t = X.prototype.__modules__;
                    "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e) => X.installModule(e)), X) : (X.installModule(e), X);
                }
            }
            Object.keys(q).forEach((e) => {
                Object.keys(q[e]).forEach((t) => {
                    X.prototype[t] = q[e][t];
                });
            }),
                X.use([
                    function (e) {
                        let { swiper: t, on: r, emit: n } = e;
                        const i = a();
                        let s = null,
                            o = null;
                        const l = () => {
                                t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"));
                            },
                            c = () => {
                                t && !t.destroyed && t.initialized && n("orientationchange");
                            };
                        r("init", () => {
                            t.params.resizeObserver && void 0 !== i.ResizeObserver
                                ? t &&
                                  !t.destroyed &&
                                  t.initialized &&
                                  ((s = new ResizeObserver((e) => {
                                      o = i.requestAnimationFrame(() => {
                                          const { width: r, height: n } = t;
                                          let i = r,
                                              s = n;
                                          e.forEach((e) => {
                                              let { contentBoxSize: r, contentRect: n, target: a } = e;
                                              (a && a !== t.el) ||
                                                  ((i = n ? n.width : (r[0] || r).inlineSize),
                                                  (s = n ? n.height : (r[0] || r).blockSize));
                                          }),
                                              (i === r && s === n) || l();
                                      });
                                  })),
                                  s.observe(t.el))
                                : (i.addEventListener("resize", l), i.addEventListener("orientationchange", c));
                        }),
                            r("destroy", () => {
                                o && i.cancelAnimationFrame(o),
                                    s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                                    i.removeEventListener("resize", l),
                                    i.removeEventListener("orientationchange", c);
                            });
                    },
                    function (e) {
                        let { swiper: t, extendParams: r, on: n, emit: i } = e;
                        const s = [],
                            o = a(),
                            l = function (e, t) {
                                void 0 === t && (t = {});
                                const r = new (o.MutationObserver || o.WebkitMutationObserver)((e) => {
                                    if (1 === e.length) return void i("observerUpdate", e[0]);
                                    const t = function () {
                                        i("observerUpdate", e[0]);
                                    };
                                    o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0);
                                });
                                r.observe(e, {
                                    attributes: void 0 === t.attributes || t.attributes,
                                    childList: void 0 === t.childList || t.childList,
                                    characterData: void 0 === t.characterData || t.characterData,
                                }),
                                    s.push(r);
                            };
                        r({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                            n("init", () => {
                                if (t.params.observer) {
                                    if (t.params.observeParents) {
                                        const e = t.$el.parents();
                                        for (let t = 0; t < e.length; t += 1) l(e[t]);
                                    }
                                    l(t.$el[0], { childList: t.params.observeSlideChildren }),
                                        l(t.$wrapperEl[0], { attributes: !1 });
                                }
                            }),
                            n("destroy", () => {
                                s.forEach((e) => {
                                    e.disconnect();
                                }),
                                    s.splice(0, s.length);
                            });
                    },
                ]);
            const Y = X;
            function U(e, t, r, n) {
                const s = i();
                return (
                    e.params.createElements &&
                        Object.keys(n).forEach((i) => {
                            if (!r[i] && !0 === r.auto) {
                                let a = e.$el.children(`.${n[i]}`)[0];
                                a || ((a = s.createElement("div")), (a.className = n[i]), e.$el.append(a)),
                                    (r[i] = a),
                                    (t[i] = a);
                            }
                        }),
                    r
                );
            }
            function K(e) {
                let { swiper: t, extendParams: r, on: n, emit: i } = e;
                function s(e) {
                    let r;
                    return (
                        e &&
                            ((r = h(e)),
                            t.params.uniqueNavElements &&
                                "string" == typeof e &&
                                r.length > 1 &&
                                1 === t.$el.find(e).length &&
                                (r = t.$el.find(e))),
                        r
                    );
                }
                function a(e, r) {
                    const n = t.params.navigation;
                    e &&
                        e.length > 0 &&
                        (e[r ? "addClass" : "removeClass"](n.disabledClass),
                        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = r),
                        t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass));
                }
                function o() {
                    if (t.params.loop) return;
                    const { $nextEl: e, $prevEl: r } = t.navigation;
                    a(r, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind);
                }
                function l(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
                }
                function c(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
                }
                function d() {
                    const e = t.params.navigation;
                    if (
                        ((t.params.navigation = U(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev",
                        })),
                        !e.nextEl && !e.prevEl)
                    )
                        return;
                    const r = s(e.nextEl),
                        n = s(e.prevEl);
                    r && r.length > 0 && r.on("click", c),
                        n && n.length > 0 && n.on("click", l),
                        Object.assign(t.navigation, { $nextEl: r, nextEl: r && r[0], $prevEl: n, prevEl: n && n[0] }),
                        t.enabled || (r && r.addClass(e.lockClass), n && n.addClass(e.lockClass));
                }
                function u() {
                    const { $nextEl: e, $prevEl: r } = t.navigation;
                    e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
                        r && r.length && (r.off("click", l), r.removeClass(t.params.navigation.disabledClass));
                }
                r({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                    },
                }),
                    (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    n("init", () => {
                        d(), o();
                    }),
                    n("toEdge fromEdge lock unlock", () => {
                        o();
                    }),
                    n("destroy", () => {
                        u();
                    }),
                    n("enable disable", () => {
                        const { $nextEl: e, $prevEl: r } = t.navigation;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass),
                            r && r[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                    }),
                    n("click", (e, r) => {
                        const { $nextEl: n, $prevEl: s } = t.navigation,
                            a = r.target;
                        if (t.params.navigation.hideOnClick && !h(a).is(s) && !h(a).is(n)) {
                            if (
                                t.pagination &&
                                t.params.pagination &&
                                t.params.pagination.clickable &&
                                (t.pagination.el === a || t.pagination.el.contains(a))
                            )
                                return;
                            let e;
                            n
                                ? (e = n.hasClass(t.params.navigation.hiddenClass))
                                : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                                i(!0 === e ? "navigationShow" : "navigationHide"),
                                n && n.toggleClass(t.params.navigation.hiddenClass),
                                s && s.toggleClass(t.params.navigation.hiddenClass);
                        }
                    }),
                    Object.assign(t.navigation, { update: o, init: d, destroy: u });
            }
            function J(e) {
                return (
                    void 0 === e && (e = ""),
                    `.${e
                        .trim()
                        .replace(/([\.:!\/])/g, "\\$1")
                        .replace(/ /g, ".")}`
                );
            }
            function Q(e) {
                let { swiper: t, extendParams: r, on: n, emit: i } = e;
                const s = "swiper-pagination";
                let a;
                r({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${s}-bullet`,
                        bulletActiveClass: `${s}-bullet-active`,
                        modifierClass: `${s}-`,
                        currentClass: `${s}-current`,
                        totalClass: `${s}-total`,
                        hiddenClass: `${s}-hidden`,
                        progressbarFillClass: `${s}-progressbar-fill`,
                        progressbarOppositeClass: `${s}-progressbar-opposite`,
                        clickableClass: `${s}-clickable`,
                        lockClass: `${s}-lock`,
                        horizontalClass: `${s}-horizontal`,
                        verticalClass: `${s}-vertical`,
                    },
                }),
                    (t.pagination = { el: null, $el: null, bullets: [] });
                let o = 0;
                function l() {
                    return (
                        !t.params.pagination.el ||
                        !t.pagination.el ||
                        !t.pagination.$el ||
                        0 === t.pagination.$el.length
                    );
                }
                function c(e, r) {
                    const { bulletActiveClass: n } = t.params.pagination;
                    e[r]().addClass(`${n}-${r}`)[r]().addClass(`${n}-${r}-${r}`);
                }
                function d() {
                    const e = t.rtl,
                        r = t.params.pagination;
                    if (l()) return;
                    const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        s = t.pagination.$el;
                    let d;
                    const u = t.params.loop
                        ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup)
                        : t.snapGrid.length;
                    if (
                        (t.params.loop
                            ? ((d = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)),
                              d > n - 1 - 2 * t.loopedSlides && (d -= n - 2 * t.loopedSlides),
                              d > u - 1 && (d -= u),
                              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
                            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                    ) {
                        const n = t.pagination.bullets;
                        let i, l, u;
                        if (
                            (r.dynamicBullets &&
                                ((a = n.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                s.css(t.isHorizontal() ? "width" : "height", a * (r.dynamicMainBullets + 4) + "px"),
                                r.dynamicMainBullets > 1 &&
                                    void 0 !== t.previousIndex &&
                                    ((o += d - (t.previousIndex - t.loopedSlides || 0)),
                                    o > r.dynamicMainBullets - 1 ? (o = r.dynamicMainBullets - 1) : o < 0 && (o = 0)),
                                (i = Math.max(d - o, 0)),
                                (l = i + (Math.min(n.length, r.dynamicMainBullets) - 1)),
                                (u = (l + i) / 2)),
                            n.removeClass(
                                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                                    .map((e) => `${r.bulletActiveClass}${e}`)
                                    .join(" ")
                            ),
                            s.length > 1)
                        )
                            n.each((e) => {
                                const t = h(e),
                                    n = t.index();
                                n === d && t.addClass(r.bulletActiveClass),
                                    r.dynamicBullets &&
                                        (n >= i && n <= l && t.addClass(`${r.bulletActiveClass}-main`),
                                        n === i && c(t, "prev"),
                                        n === l && c(t, "next"));
                            });
                        else {
                            const e = n.eq(d),
                                s = e.index();
                            if ((e.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                                const e = n.eq(i),
                                    a = n.eq(l);
                                for (let e = i; e <= l; e += 1) n.eq(e).addClass(`${r.bulletActiveClass}-main`);
                                if (t.params.loop)
                                    if (s >= n.length) {
                                        for (let e = r.dynamicMainBullets; e >= 0; e -= 1)
                                            n.eq(n.length - e).addClass(`${r.bulletActiveClass}-main`);
                                        n.eq(n.length - r.dynamicMainBullets - 1).addClass(
                                            `${r.bulletActiveClass}-prev`
                                        );
                                    } else c(e, "prev"), c(a, "next");
                                else c(e, "prev"), c(a, "next");
                            }
                        }
                        if (r.dynamicBullets) {
                            const i = Math.min(n.length, r.dynamicMainBullets + 4),
                                s = (a * i - a) / 2 - u * a,
                                o = e ? "right" : "left";
                            n.css(t.isHorizontal() ? o : "top", `${s}px`);
                        }
                    }
                    if (
                        ("fraction" === r.type &&
                            (s.find(J(r.currentClass)).text(r.formatFractionCurrent(d + 1)),
                            s.find(J(r.totalClass)).text(r.formatFractionTotal(u))),
                        "progressbar" === r.type)
                    ) {
                        let e;
                        e = r.progressbarOpposite
                            ? t.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : t.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                        const n = (d + 1) / u;
                        let i = 1,
                            a = 1;
                        "horizontal" === e ? (i = n) : (a = n),
                            s
                                .find(J(r.progressbarFillClass))
                                .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`)
                                .transition(t.params.speed);
                    }
                    "custom" === r.type && r.renderCustom
                        ? (s.html(r.renderCustom(t, d + 1, u)), i("paginationRender", s[0]))
                        : i("paginationUpdate", s[0]),
                        t.params.watchOverflow && t.enabled && s[t.isLocked ? "addClass" : "removeClass"](r.lockClass);
                }
                function u() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el;
                    let s = "";
                    if ("bullets" === e.type) {
                        let i = t.params.loop
                            ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
                            : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > r && (i = r);
                        for (let r = 0; r < i; r += 1)
                            e.renderBullet
                                ? (s += e.renderBullet.call(t, r, e.bulletClass))
                                : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                        n.html(s), (t.pagination.bullets = n.find(J(e.bulletClass)));
                    }
                    "fraction" === e.type &&
                        ((s = e.renderFraction
                            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
                        n.html(s)),
                        "progressbar" === e.type &&
                            ((s = e.renderProgressbar
                                ? e.renderProgressbar.call(t, e.progressbarFillClass)
                                : `<span class="${e.progressbarFillClass}"></span>`),
                            n.html(s)),
                        "custom" !== e.type && i("paginationRender", t.pagination.$el[0]);
                }
                function p() {
                    t.params.pagination = U(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination",
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let r = h(e.el);
                    0 !== r.length &&
                        (t.params.uniqueNavElements &&
                            "string" == typeof e.el &&
                            r.length > 1 &&
                            ((r = t.$el.find(e.el)),
                            r.length > 1 && (r = r.filter((e) => h(e).parents(".swiper")[0] === t.el))),
                        "bullets" === e.type && e.clickable && r.addClass(e.clickableClass),
                        r.addClass(e.modifierClass + e.type),
                        r.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        "bullets" === e.type &&
                            e.dynamicBullets &&
                            (r.addClass(`${e.modifierClass}${e.type}-dynamic`),
                            (o = 0),
                            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && r.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                            r.on("click", J(e.bulletClass), function (e) {
                                e.preventDefault();
                                let r = h(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (r += t.loopedSlides), t.slideTo(r);
                            }),
                        Object.assign(t.pagination, { $el: r, el: r[0] }),
                        t.enabled || r.addClass(e.lockClass));
                }
                function f() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const r = t.pagination.$el;
                    r.removeClass(e.hiddenClass),
                        r.removeClass(e.modifierClass + e.type),
                        r.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        t.pagination.bullets &&
                            t.pagination.bullets.removeClass &&
                            t.pagination.bullets.removeClass(e.bulletActiveClass),
                        e.clickable && r.off("click", J(e.bulletClass));
                }
                n("init", () => {
                    p(), u(), d();
                }),
                    n("activeIndexChange", () => {
                        (t.params.loop || void 0 === t.snapIndex) && d();
                    }),
                    n("snapIndexChange", () => {
                        t.params.loop || d();
                    }),
                    n("slidesLengthChange", () => {
                        t.params.loop && (u(), d());
                    }),
                    n("snapGridLengthChange", () => {
                        t.params.loop || (u(), d());
                    }),
                    n("destroy", () => {
                        f();
                    }),
                    n("enable disable", () => {
                        const { $el: e } = t.pagination;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                    }),
                    n("lock unlock", () => {
                        d();
                    }),
                    n("click", (e, r) => {
                        const n = r.target,
                            { $el: s } = t.pagination;
                        if (
                            t.params.pagination.el &&
                            t.params.pagination.hideOnClick &&
                            s.length > 0 &&
                            !h(n).hasClass(t.params.pagination.bulletClass)
                        ) {
                            if (
                                t.navigation &&
                                ((t.navigation.nextEl && n === t.navigation.nextEl) ||
                                    (t.navigation.prevEl && n === t.navigation.prevEl))
                            )
                                return;
                            const e = s.hasClass(t.params.pagination.hiddenClass);
                            i(!0 === e ? "paginationShow" : "paginationHide"),
                                s.toggleClass(t.params.pagination.hiddenClass);
                        }
                    }),
                    Object.assign(t.pagination, { render: u, update: d, init: p, destroy: f });
            }
            function Z(e) {
                let t,
                    { swiper: r, extendParams: n, on: s, emit: a } = e;
                function o() {
                    const e = r.slides.eq(r.activeIndex);
                    let n = r.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || r.params.autoplay.delay),
                        clearTimeout(t),
                        (t = v(() => {
                            let e;
                            r.params.autoplay.reverseDirection
                                ? r.params.loop
                                    ? (r.loopFix(), (e = r.slidePrev(r.params.speed, !0, !0)), a("autoplay"))
                                    : r.isBeginning
                                    ? r.params.autoplay.stopOnLastSlide
                                        ? c()
                                        : ((e = r.slideTo(r.slides.length - 1, r.params.speed, !0, !0)), a("autoplay"))
                                    : ((e = r.slidePrev(r.params.speed, !0, !0)), a("autoplay"))
                                : r.params.loop
                                ? (r.loopFix(), (e = r.slideNext(r.params.speed, !0, !0)), a("autoplay"))
                                : r.isEnd
                                ? r.params.autoplay.stopOnLastSlide
                                    ? c()
                                    : ((e = r.slideTo(0, r.params.speed, !0, !0)), a("autoplay"))
                                : ((e = r.slideNext(r.params.speed, !0, !0)), a("autoplay")),
                                ((r.params.cssMode && r.autoplay.running) || !1 === e) && o();
                        }, n));
                }
                function l() {
                    return (
                        void 0 === t && !r.autoplay.running && ((r.autoplay.running = !0), a("autoplayStart"), o(), !0)
                    );
                }
                function c() {
                    return (
                        !!r.autoplay.running &&
                        void 0 !== t &&
                        (t && (clearTimeout(t), (t = void 0)), (r.autoplay.running = !1), a("autoplayStop"), !0)
                    );
                }
                function d(e) {
                    r.autoplay.running &&
                        (r.autoplay.paused ||
                            (t && clearTimeout(t),
                            (r.autoplay.paused = !0),
                            0 !== e && r.params.autoplay.waitForTransition
                                ? ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                                      r.$wrapperEl[0].addEventListener(e, p);
                                  })
                                : ((r.autoplay.paused = !1), o())));
                }
                function u() {
                    const e = i();
                    "hidden" === e.visibilityState && r.autoplay.running && d(),
                        "visible" === e.visibilityState && r.autoplay.paused && (o(), (r.autoplay.paused = !1));
                }
                function p(e) {
                    r &&
                        !r.destroyed &&
                        r.$wrapperEl &&
                        e.target === r.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            r.$wrapperEl[0].removeEventListener(e, p);
                        }),
                        (r.autoplay.paused = !1),
                        r.autoplay.running ? o() : c());
                }
                function f() {
                    r.params.autoplay.disableOnInteraction ? c() : (a("autoplayPause"), d()),
                        ["transitionend", "webkitTransitionEnd"].forEach((e) => {
                            r.$wrapperEl[0].removeEventListener(e, p);
                        });
                }
                function h() {
                    r.params.autoplay.disableOnInteraction || ((r.autoplay.paused = !1), a("autoplayResume"), o());
                }
                (r.autoplay = { running: !1, paused: !1 }),
                    n({
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1,
                            pauseOnMouseEnter: !1,
                        },
                    }),
                    s("init", () => {
                        r.params.autoplay.enabled &&
                            (l(),
                            i().addEventListener("visibilitychange", u),
                            r.params.autoplay.pauseOnMouseEnter &&
                                (r.$el.on("mouseenter", f), r.$el.on("mouseleave", h)));
                    }),
                    s("beforeTransitionStart", (e, t, n) => {
                        r.autoplay.running &&
                            (n || !r.params.autoplay.disableOnInteraction ? r.autoplay.pause(t) : c());
                    }),
                    s("sliderFirstMove", () => {
                        r.autoplay.running && (r.params.autoplay.disableOnInteraction ? c() : d());
                    }),
                    s("touchEnd", () => {
                        r.params.cssMode && r.autoplay.paused && !r.params.autoplay.disableOnInteraction && o();
                    }),
                    s("destroy", () => {
                        r.$el.off("mouseenter", f),
                            r.$el.off("mouseleave", h),
                            r.autoplay.running && c(),
                            i().removeEventListener("visibilitychange", u);
                    }),
                    Object.assign(r.autoplay, { pause: d, run: o, start: l, stop: c });
            }
            function ee(e) {
                const {
                    effect: t,
                    swiper: r,
                    on: n,
                    setTranslate: i,
                    setTransition: s,
                    overwriteParams: a,
                    perspective: o,
                } = e;
                let l;
                n("beforeInit", () => {
                    if (r.params.effect !== t) return;
                    r.classNames.push(`${r.params.containerModifierClass}${t}`),
                        o && o() && r.classNames.push(`${r.params.containerModifierClass}3d`);
                    const e = a ? a() : {};
                    Object.assign(r.params, e), Object.assign(r.originalParams, e);
                }),
                    n("setTranslate", () => {
                        r.params.effect === t && i();
                    }),
                    n("setTransition", (e, n) => {
                        r.params.effect === t && s(n);
                    }),
                    n("virtualUpdate", () => {
                        r.params.effect === t &&
                            (r.slides.length || (l = !0),
                            requestAnimationFrame(() => {
                                l && r.slides && r.slides.length && (i(), (l = !1));
                            }));
                    });
            }
            function te(e, t) {
                return e.transformEl
                    ? t
                          .find(e.transformEl)
                          .css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" })
                    : t;
            }
            function re(e) {
                let { swiper: t, duration: r, transformEl: n, allSlides: i } = e;
                const { slides: s, activeIndex: a, $wrapperEl: o } = t;
                if (t.params.virtualTranslate && 0 !== r) {
                    let e,
                        r = !1;
                    (e = i ? (n ? s.find(n) : s) : n ? s.eq(a).find(n) : s.eq(a)),
                        e.transitionEnd(() => {
                            if (r) return;
                            if (!t || t.destroyed) return;
                            (r = !0), (t.animating = !1);
                            const e = ["webkitTransitionEnd", "transitionend"];
                            for (let t = 0; t < e.length; t += 1) o.trigger(e[t]);
                        });
                }
            }
            function ne(e) {
                let { swiper: t, extendParams: r, on: n } = e;
                r({ fadeEffect: { crossFade: !1, transformEl: null } }),
                    ee({
                        effect: "fade",
                        swiper: t,
                        on: n,
                        setTranslate: () => {
                            const { slides: e } = t,
                                r = t.params.fadeEffect;
                            for (let n = 0; n < e.length; n += 1) {
                                const e = t.slides.eq(n);
                                let i = -e[0].swiperSlideOffset;
                                t.params.virtualTranslate || (i -= t.translate);
                                let s = 0;
                                t.isHorizontal() || ((s = i), (i = 0));
                                const a = t.params.fadeEffect.crossFade
                                    ? Math.max(1 - Math.abs(e[0].progress), 0)
                                    : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                te(r, e).css({ opacity: a }).transform(`translate3d(${i}px, ${s}px, 0px)`);
                            }
                        },
                        setTransition: (e) => {
                            const { transformEl: r } = t.params.fadeEffect;
                            (r ? t.slides.find(r) : t.slides).transition(e),
                                re({ swiper: t, duration: e, transformEl: r, allSlides: !0 });
                        },
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !t.params.cssMode,
                        }),
                    });
            }
            function ie(e, t, r) {
                const n = "swiper-slide-shadow" + (r ? `-${r}` : ""),
                    i = e.transformEl ? t.find(e.transformEl) : t;
                let s = i.children(`.${n}`);
                return (
                    s.length || ((s = h(`<div class="swiper-slide-shadow${r ? `-${r}` : ""}"></div>`)), i.append(s)), s
                );
            }
            function se(e) {
                let { swiper: t, extendParams: r, on: n } = e;
                r({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                        next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
                    },
                });
                const i = (e) => ("string" == typeof e ? e : `${e}px`);
                ee({
                    effect: "creative",
                    swiper: t,
                    on: n,
                    setTranslate: () => {
                        const { slides: e, $wrapperEl: r, slidesSizesGrid: n } = t,
                            s = t.params.creativeEffect,
                            { progressMultiplier: a } = s,
                            o = t.params.centeredSlides;
                        if (o) {
                            const e = n[0] / 2 - t.params.slidesOffsetBefore || 0;
                            r.transform(`translateX(calc(50% - ${e}px))`);
                        }
                        for (let r = 0; r < e.length; r += 1) {
                            const n = e.eq(r),
                                l = n[0].progress,
                                c = Math.min(Math.max(n[0].progress, -s.limitProgress), s.limitProgress);
                            let d = c;
                            o || (d = Math.min(Math.max(n[0].originalProgress, -s.limitProgress), s.limitProgress));
                            const u = n[0].swiperSlideOffset,
                                p = [t.params.cssMode ? -u - t.translate : -u, 0, 0],
                                f = [0, 0, 0];
                            let h = !1;
                            t.isHorizontal() || ((p[1] = p[0]), (p[0] = 0));
                            let v = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                            c < 0 ? ((v = s.next), (h = !0)) : c > 0 && ((v = s.prev), (h = !0)),
                                p.forEach((e, t) => {
                                    p[t] = `calc(${e}px + (${i(v.translate[t])} * ${Math.abs(c * a)}))`;
                                }),
                                f.forEach((e, t) => {
                                    f[t] = v.rotate[t] * Math.abs(c * a);
                                }),
                                (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length);
                            const m = p.join(", "),
                                g = `rotateX(${f[0]}deg) rotateY(${f[1]}deg) rotateZ(${f[2]}deg)`,
                                y =
                                    d < 0
                                        ? `scale(${1 + (1 - v.scale) * d * a})`
                                        : `scale(${1 - (1 - v.scale) * d * a})`,
                                b = d < 0 ? 1 + (1 - v.opacity) * d * a : 1 - (1 - v.opacity) * d * a,
                                w = `translate3d(${m}) ${g} ${y}`;
                            if ((h && v.shadow) || !h) {
                                let e = n.children(".swiper-slide-shadow");
                                if ((0 === e.length && v.shadow && (e = ie(s, n)), e.length)) {
                                    const t = s.shadowPerProgress ? c * (1 / s.limitProgress) : c;
                                    e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                                }
                            }
                            const x = te(s, n);
                            x.transform(w).css({ opacity: b }), v.origin && x.css("transform-origin", v.origin);
                        }
                    },
                    setTransition: (e) => {
                        const { transformEl: r } = t.params.creativeEffect;
                        (r ? t.slides.find(r) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e),
                            re({ swiper: t, duration: e, transformEl: r, allSlides: !0 });
                    },
                    perspective: () => t.params.creativeEffect.perspective,
                    overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode }),
                });
            }
            function ae(e) {
                return (
                    (ae =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              }),
                    ae(e)
                );
            }
            function oe(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n);
                }
            }
            function le(e, t) {
                if (t && ("object" === ae(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ce(e);
            }
            function ce(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function de(e) {
                var t = "function" == typeof Map ? new Map() : void 0;
                return (
                    (de = function (e) {
                        if (null === e || ((r = e), -1 === Function.toString.call(r).indexOf("[native code]")))
                            return e;
                        var r;
                        if ("function" != typeof e)
                            throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, n);
                        }
                        function n() {
                            return ue(e, arguments, he(this).constructor);
                        }
                        return (
                            (n.prototype = Object.create(e.prototype, {
                                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
                            })),
                            fe(n, e)
                        );
                    }),
                    de(e)
                );
            }
            function ue(e, t, r) {
                return (
                    (ue = pe()
                        ? Reflect.construct
                        : function (e, t, r) {
                              var n = [null];
                              n.push.apply(n, t);
                              var i = new (Function.bind.apply(e, n))();
                              return r && fe(i, r.prototype), i;
                          }),
                    ue.apply(null, arguments)
                );
            }
            function pe() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            }
            function fe(e, t) {
                return (
                    (fe =
                        Object.setPrototypeOf ||
                        function (e, t) {
                            return (e.__proto__ = t), e;
                        }),
                    fe(e, t)
                );
            }
            function he(e) {
                return (
                    (he = Object.setPrototypeOf
                        ? Object.getPrototypeOf
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    he(e)
                );
            }
            function ve(e, t, r) {
                return (
                    t in e
                        ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                        : (e[t] = r),
                    e
                );
            }
            r(7245);
            var me = (function (e) {
                !(function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function");
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: { value: e, writable: !0, configurable: !0 },
                    })),
                        t && fe(e, t);
                })(a, e);
                var t,
                    r,
                    n,
                    i,
                    s =
                        ((t = a),
                        (r = pe()),
                        function () {
                            var e,
                                n = he(t);
                            if (r) {
                                var i = he(this).constructor;
                                e = Reflect.construct(n, arguments, i);
                            } else e = n.apply(this, arguments);
                            return le(this, e);
                        });
                function a() {
                    var e;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        })(this, a),
                        ve(ce((e = s.call(this))), "slideAnimation", void 0),
                        ve(ce(e), "autoplay", void 0),
                        ve(ce(e), "autoplayDelay", void 0),
                        ve(ce(e), "swiper", void 0),
                        e.init(),
                        e
                    );
                }
                return (
                    (n = a),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                (this.slideAnimation = this.dataset.slideAnimation),
                                    (this.autoplay = "yes" === this.dataset.autoplay),
                                    (this.autoplayDelay = parseInt(this.dataset.autoplayDelay, 10));
                                var e = {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    loop: !0,
                                    autoHeight: !0,
                                    modules: [K, Q, Z, ne, se],
                                    effect: "fade",
                                    fadeEffect: { crossFade: !0 },
                                    pagination: {
                                        el: this.querySelector(".ultimate-slideshow-pagination"),
                                        clickable: !0,
                                        type: "bullets",
                                        renderBullet: function (e, t) {
                                            return '<span class="ultimate-slideshow-pagination-item ' + t + '"></span>';
                                        },
                                    },
                                    navigation: {
                                        nextEl: this.querySelector(".ultimate-slideshow-nav-next"),
                                        prevEl: this.querySelector(".ultimate-slideshow-nav-prev"),
                                    },
                                };
                                "fade" === this.slideAnimation
                                    ? ((e.effect = "fade"), (e.fadeEffect = { crossFade: !0 }))
                                    : "slide-right" === this.slideAnimation &&
                                      ((e.effect = "creative"),
                                      (e.creativeEffect = {
                                          prev: { shadow: !0, translate: ["-20%", 0, -1] },
                                          next: { translate: ["100%", 0, 0] },
                                      })),
                                    this.autoplay && (e.autoplay = { delay: this.autoplayDelay }),
                                    (this.swiper = new Y(this.querySelector(".swiper"), e));
                            },
                        },
                    ]) && oe(n.prototype, i),
                    a
                );
            })(de(HTMLElement));
            customElements.get("ultimate-slideshow") || customElements.define("ultimate-slideshow", me);
        })();
})();
