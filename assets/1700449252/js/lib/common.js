
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
 */
!function (a, b) {
    function c(a) {
        var b = a.length,
        c = fa.type(a);
        return fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    function d(a) {
        var b = oa[a] = {};
        return fa.each(a.match(ha) || [], function (a, c) {
            b[c] = !0
        }),
        b
    }
    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }),
        this.expando = fa.expando + Math.random()
    }
    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(sa, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ra.test(d) ? JSON.parse(d) : d
                } catch (f) {}
                pa.set(a, c, d)
            } else
                d = b;
        return d
    }
    function g() {
        return !0
    }
    function h() {
        return !1
    }
    function i() {
        try {
            return T.activeElement
        } catch (a) {}
    }
    function j(a, b) {
        for (; (a = a[b]) && 1 !== a.nodeType; );
        return a
    }
    function k(a, b, c) {
        if (fa.isFunction(b))
            return fa.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return fa.grep(a, function (a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (Ca.test(b))
                return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function (a) {
            return ba.call(b, a) >= 0 !== c
        })
    }
    function l(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function n(a) {
        var b = Na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++)
            qa.set(a[d], "globalEval", !b || qa.get(b[d], "globalEval"))
    }
    function p(a, b) {
        var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j;
        if (1 === b.nodeType) {
            if (qa.hasData(a) && (f = qa.access(a), g = qa.set(b, f), j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        fa.event.add(b, e, j[e][c])
            }
            pa.hasData(a) && (h = pa.access(a), i = fa.extend({}, h), pa.set(b, i))
        }
    }
    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fa.nodeName(a, c) ? fa.merge([a], d) : d
    }
    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ka.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    function s(a, b) {
        if (b in a)
            return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _a.length; e--; )
            if (b = _a[e] + c, b in a)
                return b;
        return d
    }
    function t(a, b) {
        return a = b || a,
        "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
    }
    function u(b) {
        return a.getComputedStyle(b, null)
    }
    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = qa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qa.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qa.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function w(a, b, c) {
        var d = Ua.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += fa.css(a, c + $a[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + $a[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + $a[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + $a[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + $a[f] + "Width", !0, e)));
        return g
    }
    function y(a, b, c) {
        var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = u(a),
        g = fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Va.test(e))
                return e;
            d = g && (fa.support.boxSizingReliable || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function z(a) {
        var b = T,
        c = Xa[a];
        return c || (c = A(a, b), "none" !== c && c || (Ra = (Ra || fa("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ra[0].contentWindow || Ra[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Ra.detach()), Xa[a] = c),
        c
    }
    function A(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
        d = fa.css(c[0], "display");
        return c.remove(),
        d
    }
    function B(a, b, c, d) {
        var e;
        if (fa.isArray(b))
            fa.each(b, function (b, e) {
                c || bb.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== fa.type(b))
            d(a, b);
        else
            for (e in b)
                B(a + "[" + e + "]", b[e], c, d)
    }
    function C(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d,
            e = 0,
            f = b.toLowerCase().match(ha) || [];
            if (fa.isFunction(c))
                for (; d = f[e++]; )
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function D(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0,
            fa.each(a[i] || [], function (a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }),
            j
        }
        var g = {},
        h = a === sb;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }
    function E(a, c) {
        var d,
        e,
        f = fa.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fa.extend(!0, a, e),
        a
    }
    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; )
            j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0]in d)
            g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }
    function G(a, b, c, d) {
        var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; )
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    function H() {
        return setTimeout(function () {
            Bb = b
        }),
        Bb = fa.now()
    }
    function I(a, b, c) {
        for (var d, e = (Hb[b] || []).concat(Hb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function J(a, b, c) {
        var d,
        e,
        f = 0,
        g = Gb.length,
        h = fa.Deferred().always(function () {
            delete i.elem
        }),
        i = function () {
            if (e)
                return !1;
            for (var b = Bb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: fa.extend({}, b),
            opts: fa.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Bb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function (b) {
                var c = 0,
                d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)
            if (d = Gb[f].call(j, a, k, j.opts))
                return d;
        return fa.map(k, I, j),
        fa.isFunction(j.opts.start) && j.opts.start.call(a, j),
        fa.fx.timer(fa.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function K(a, b) {
        var c,
        d,
        e,
        f,
        g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
    }
    function L(a, c, d) {
        var e,
        f,
        g,
        h,
        i,
        j,
        k = this,
        l = {},
        m = a.style,
        n = a.nodeType && t(a),
        o = qa.get(a, "fxshow");
        d.queue || (i = fa._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function () {
                i.unqueued || j()
            }), i.unqueued++, k.always(function () {
                k.always(function () {
                    i.unqueued--,
                    fa.queue(a, "fx").length || i.empty.fire()
                })
            })),
        1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fa.css(a, "display") && "none" === fa.css(a, "float") && (m.display = "inline-block")),
        d.overflow && (m.overflow = "hidden", k.always(function () {
                m.overflow = d.overflow[0],
                m.overflowX = d.overflow[1],
                m.overflowY = d.overflow[2]
            }));
        for (e in c)
            if (f = c[e], Db.exec(f)) {
                if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                    if ("show" !== f || !o || o[e] === b)
                        continue;
                    n = !0
                }
                l[e] = o && o[e] || fa.style(a, e)
            }
        if (!fa.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qa.access(a, "fxshow", {}),
            g && (o.hidden = !n),
            n ? fa(a).show() : k.done(function () {
                fa(a).hide()
            }),
            k.done(function () {
                var b;
                qa.remove(a, "fxshow");
                for (b in l)
                    fa.style(a, b, l[b])
            });
            for (e in l)
                h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }
    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }
    function N(a, b) {
        var c,
        d = {
            height: a
        },
        e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = $a[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function O(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var P,
    Q,
    R = typeof b,
    S = a.location,
    T = a.document,
    U = T.documentElement,
    V = a.jQuery,
    W = a.$,
    X = {},
    Y = [],
    Z = "2.0.3",
    $ = Y.concat,
    _ = Y.push,
    aa = Y.slice,
    ba = Y.indexOf,
    ca = X.toString,
    da = X.hasOwnProperty,
    ea = Z.trim,
    fa = function (a, b) {
        return new fa.fn.init(a, b, P)
    },
    ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ha = /\S+/g,
    ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ja = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ka = /^-ms-/,
    la = /-([\da-z])/gi,
    ma = function (a, b) {
        return b.toUpperCase()
    },
    na = function () {
        T.removeEventListener("DOMContentLoaded", na, !1),
        a.removeEventListener("load", na, !1),
        fa.ready()
    };
    fa.fn = fa.prototype = {
        jquery: Z,
        constructor: fa,
        init: function (a, c, d) {
            var e,
            f;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ia.exec(a), !e || !e[1] && c)
                    return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof fa ? c[0] : c, fa.merge(this, fa.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), ja.test(e[1]) && fa.isPlainObject(c))
                        for (e in c)
                            fa.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this
                }
                return f = T.getElementById(e[2]),
                f && f.parentNode && (this.length = 1, this[0] = f),
                this.context = T,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
        },
        selector: "",
        length: 0,
        toArray: function () {
            return aa.call(this)
        },
        get: function (a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
        },
        pushStack: function (a) {
            var b = fa.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function (a, b) {
            return fa.each(this, a, b)
        },
        ready: function (a) {
            return fa.ready.promise().done(a),
            this
        },
        slice: function () {
            return this.pushStack(aa.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
            c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        map: function (a) {
            return this.pushStack(fa.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: _,
        sort: [].sort,
        splice: [].splice
    },
    fa.fn.init.prototype = fa.fn,
    fa.extend = fa.fn.extend = function () {
        var a,
        c,
        d,
        e,
        f,
        g,
        h = arguments[0] || {},
        i = 1,
        j = arguments.length,
        k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fa.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (a = arguments[i]))
                for (c in a)
                    d = h[c], e = a[c], h !== e && (k && e && (fa.isPlainObject(e) || (f = fa.isArray(e))) ? (f ? (f = !1, g = d && fa.isArray(d) ? d : []) : g = d && fa.isPlainObject(d) ? d : {}, h[c] = fa.extend(k, g, e)) : e !== b && (h[c] = e));
        return h
    },
    fa.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noConflict: function (b) {
            return a.$ === fa && (a.$ = W),
            b && a.jQuery === fa && (a.jQuery = V),
            fa
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? fa.readyWait++ : fa.ready(!0)
        },
        ready: function (a) {
            (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (Q.resolveWith(T, [fa]), fa.fn.trigger && fa(T).trigger("ready").off("ready")))
        },
        isFunction: function (a) {
            return "function" === fa.type(a)
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window
        },
        isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? X[ca.call(a)] || "object" : typeof a
        },
        isPlainObject: function (a) {
            if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a))
                return !1;
            try {
                if (a.constructor && !da.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        error: function (a) {
            throw Error(a)
        },
        parseHTML: function (a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b, b = !1),
            b = b || T;
            var d = ja.exec(a),
            e = !c && [];
            return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && fa(e).remove(), fa.merge([], d.childNodes))
        },
        parseJSON: JSON.parse,
        parseXML: function (a) {
            var c,
            d;
            if (!a || "string" != typeof a)
                return null;
            try {
                d = new DOMParser,
                c = d.parseFromString(a, "text/xml")
            } catch (e) {
                c = b
            }
            return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + a),
            c
        },
        noop: function () {},
        globalEval: function (a) {
            var b,
            c = eval;
            a = fa.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function (a) {
            return a.replace(ka, "ms-").replace(la, ma)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, d) {
            var e,
            f = 0,
            g = a.length,
            h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1)
                        break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : ea.call(a)
        },
        makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)),
            d
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : ba.call(b, a, c)
        },
        merge: function (a, c) {
            var d = c.length,
            e = a.length,
            f = 0;
            if ("number" == typeof d)
                for (; d > f; f++)
                    a[e++] = c[f];
            else
                for (; c[f] !== b; )
                    a[e++] = c[f++];
            return a.length = e,
            a
        },
        grep: function (a, b, c) {
            var d,
            e = [],
            f = 0,
            g = a.length;
            for (c = !!c; g > f; f++)
                d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },
        map: function (a, b, d) {
            var e,
            f = 0,
            g = a.length,
            h = c(a),
            i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a)
                    e = b(a[f], f, d), null != e && (i[i.length] = e);
            return $.apply([], i)
        },
        guid: 1,
        proxy: function (a, c) {
            var d,
            e,
            f;
            return "string" == typeof c && (d = a[c], c = a, a = d),
            fa.isFunction(a) ? (e = aa.call(arguments, 2), f = function () {
                return a.apply(c || this, e.concat(aa.call(arguments)))
            }, f.guid = a.guid = a.guid || fa.guid++, f) : b
        },
        access: function (a, c, d, e, f, g, h) {
            var i = 0,
            j = a.length,
            k = null == d;
            if ("object" === fa.type(d)) {
                f = !0;
                for (i in d)
                    fa.access(a, c, i, d[i], !0, g, h)
            } else if (e !== b && (f = !0, fa.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function (a, b, c) {
                            return k.call(fa(a), c)
                        })), c))
                for (; j > i; i++)
                    c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
        },
        now: Date.now,
        swap: function (a, b, c, d) {
            var e,
            f,
            g = {};
            for (f in b)
                g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
    }),
    fa.ready.promise = function (b) {
        return Q || (Q = fa.Deferred(), "complete" === T.readyState ? setTimeout(fa.ready) : (T.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", na, !1))),
        Q.promise(b)
    },
    fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        X["[object " + b + "]"] = b.toLowerCase()
    }),
    P = fa(T),
    function (a, b) {
        function c(a, b, c, d) {
            var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            o,
            p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a)
                return c;
            if (1 !== (h = b.nodeType) && 9 !== h)
                return [];
            if (I && !d) {
                if (e = ta.exec(a))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return aa.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName)
                            return aa.apply(c, b.getElementsByClassName(g)), c
                    }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--; )
                            j[i] = l + n(j[i]);
                        o = na.test(a) && b.parentNode || b,
                        p = j.join(",")
                    }
                    if (p)
                        try {
                            return aa.apply(c, o.querySelectorAll(p)),
                            c
                        } catch (q) {}
                    finally {
                        k || b.removeAttribute("id")
                    }
                }
            }
            return v(a.replace(ka, "$1"), b, c, d)
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()],
                a[c] = d
            }
            var b = [];
            return a
        }
        function e(a) {
            return a[N] = !0,
            a
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; )
                z.attrHandle[c[d]] = b
        }
        function h(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d)
                return d;
            if (c)
                for (; c = c.nextSibling; )
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function j(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function k(a) {
            return e(function (b) {
                return b = +b,
                e(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; )
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function l() {}
        function m(a, b) {
            var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = S[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = la.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                d = !1,
                (e = ma.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ka, " ")
                    }), h = h.slice(d.length));
                for (g in z.filter)
                    !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                            value: d,
                            type: g,
                            matches: e
                        }), h = h.slice(d.length));
                if (!d)
                    break
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function o(a, b, c) {
            var d = b.dir,
            e = c && "parentNode" === d,
            f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d]; )
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
             : function (b, c, g) {
                var h,
                i,
                j,
                k = P + " " + f;
                if (g) {
                    for (; b = b[d]; )
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    for (; b = b[d]; )
                        if (1 === b.nodeType || e)
                            if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                if ((h = i[1]) === !0 || h === y)
                                    return h === !0
                            } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0)
                                return !0
            }
        }
        function p(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--; )
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
             : a[0]
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)),
            f && !f[N] && (f = r(f, g)),
            e(function (e, g, h, i) {
                var j,
                k,
                l,
                m = [],
                n = [],
                o = g.length,
                p = e || u(b || "*", h.nodeType ? [h] : h, []),
                r = !a || !e && b ? p : q(p, m, a, h, i),
                s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d)
                    for (j = q(s, n), d(j, [], h, i), k = j.length; k--; )
                        (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; )
                                (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i)
                        }
                        for (k = s.length; k--; )
                            (l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                    }
                } else
                    s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s)
            })
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function (a) {
                    return a === b
                }, g, !0), j = o(function (a) {
                    return ca.call(b, a) > -1
                }, g, !0), k = [function (a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }
                ]; e > h; h++)
                if (c = z.relative[a[h].type])
                    k = [o(p(k), c)];
                else {
                    if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                        return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(ka, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                    }
                    k.push(c)
                }
            return p(k)
        }
        function t(a, b) {
            var d = 0,
            f = b.length > 0,
            g = a.length > 0,
            h = function (e, h, i, j, k) {
                var l,
                m,
                n,
                o = [],
                p = 0,
                r = "0",
                s = e && [],
                t = null != k,
                u = D,
                v = e || g && z.find.TAG("*", k && h.parentNode || h),
                w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; )
                            if (n(l, h, i)) {
                                j.push(l);
                                break
                            }
                        t && (P = w, y = ++d)
                    }
                    f && ((l = !n && l) && p--, e && s.push(l))
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; )
                        n(s, o, h, i);
                    if (e) {
                        if (p > 0)
                            for (; r--; )
                                s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o)
                    }
                    aa.apply(j, o),
                    t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                }
                return t && (P = w, D = u),
                s
            };
            return f ? e(h) : h
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++)
                c(a, b[e], d);
            return d
        }
        function v(a, b, c, d) {
            var e,
            f,
            g,
            h,
            i,
            j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b)
                        return c;
                    a = a.slice(f.shift().value.length)
                }
                for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); )
                    if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
                        if (f.splice(e, 1), a = d.length && n(f), !a)
                            return aa.apply(c, d), c;
                        break
                    }
            }
            return C(a, j)(d, b, !I, c, na.test(a)),
            c
        }
        var w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + -new Date,
        O = a.document,
        P = 0,
        Q = 0,
        R = d(),
        S = d(),
        T = d(),
        U = !1,
        V = function (a, b) {
            return a === b ? (U = !0, 0) : 0
        },
        W = typeof b,
        X = 1 << 31,
        Y = {}
        .hasOwnProperty,
        Z = [],
        $ = Z.pop,
        _ = Z.push,
        aa = Z.push,
        ba = Z.slice,
        ca = Z.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        },
        da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ea = "[\\x20\\t\\r\\n\\f]",
        ga = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ha = ga.replace("w", "w#"),
        ia = "\\[" + ea + "*(" + ga + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ha + ")|)|)" + ea + "*\\]",
        ja = ":(" + ga + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ia.replace(3, 8) + ")*)|.*)\\)|)",
        ka = RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
        la = RegExp("^" + ea + "*," + ea + "*"),
        ma = RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
        na = RegExp(ea + "*[+~]"),
        oa = RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"),
        pa = RegExp(ja),
        qa = RegExp("^" + ha + "$"),
        ra = {
            ID: RegExp("^#(" + ga + ")"),
            CLASS: RegExp("^\\.(" + ga + ")"),
            TAG: RegExp("^(" + ga.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + ia),
            PSEUDO: RegExp("^" + ja),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
            bool: RegExp("^(?:" + da + ")$", "i"),
            needsContext: RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
        },
        sa = /^[^{]+\{\s*\[native \w/,
        ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ua = /^(?:input|select|textarea|button)$/i,
        va = /^h\d$/i,
        wa = /'|\\/g,
        xa = RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"),
        ya = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
        };
        try {
            aa.apply(Z = ba.call(O.childNodes), O.childNodes),
            Z[O.childNodes.length].nodeType
        } catch (za) {
            aa = {
                apply: Z.length ? function (a, b) {
                    _.apply(a, ba.call(b))
                }
                 : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; );
                    a.length = c - 1
                }
            }
        }
        B = c.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        },
        x = c.support = {},
        F = c.setDocument = function (a) {
            var c = a ? a.ownerDocument || a : O,
            d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !B(c), d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload", function () {
                    F()
                }), x.attributes = f(function (a) {
                    return a.className = "i",
                    !a.getAttribute("className")
                }), x.getElementsByTagName = f(function (a) {
                    return a.appendChild(c.createComment("")),
                    !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = f(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                    a.firstChild.className = "i",
                    2 === a.getElementsByClassName("i").length
                }), x.getById = f(function (a) {
                    return H.appendChild(a).id = N,
                    !c.getElementsByName || !c.getElementsByName(N).length
                }), x.getById ? (z.find.ID = function (a, b) {
                    if (typeof b.getElementById !== W && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, z.filter.ID = function (a) {
                    var b = a.replace(xa, ya);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete z.find.ID, z.filter.ID = function (a) {
                    var b = a.replace(xa, ya);
                    return function (a) {
                        var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), z.find.TAG = x.getElementsByTagName ? function (a, c) {
                return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b
            }
                 : function (a, b) {
                var c,
                d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++]; )
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, z.find.CLASS = x.getElementsByClassName && function (a, c) {
                return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b
            }, K = [], J = [], (x.qsa = sa.test(c.querySelectorAll)) && (f(function (a) {
                        a.innerHTML = "<select><option selected=''></option></select>",
                        a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"),
                        a.querySelectorAll(":checked").length || J.push(":checked")
                    }), f(function (a) {
                        var b = c.createElement("input");
                        b.setAttribute("type", "hidden"),
                        a.appendChild(b).setAttribute("t", ""),
                        a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"),
                        a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"),
                        a.querySelectorAll("*,:x"),
                        J.push(",.*:")
                    })), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function (a) {
                    x.disconnectedMatch = L.call(a, "div"),
                    L.call(a, "[s!='']:x"),
                    K.push("!=", ja)
                }), J = J.length && RegExp(J.join("|")), K = K.length && RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
                 : function (a, b) {
                if (b)
                    for (; b = b.parentNode; )
                        if (b === a)
                            return !0;
                return !1
            }, V = H.compareDocumentPosition ? function (a, b) {
                if (a === b)
                    return U = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || M(O, a) ? -1 : b === c || M(O, b) ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
            }
                 : function (a, b) {
                var d,
                e = 0,
                f = a.parentNode,
                g = b.parentNode,
                i = [a],
                j = [b];
                if (a === b)
                    return U = !0, 0;
                if (!f || !g)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0;
                if (f === g)
                    return h(a, b);
                for (d = a; d = d.parentNode; )
                    i.unshift(d);
                for (d = b; d = d.parentNode; )
                    j.unshift(d);
                for (; i[e] === j[e]; )
                    e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, c) : G
        },
        c.matches = function (a, b) {
            return c(a, null, null, b)
        },
        c.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b)))
                try {
                    var d = L.call(a, b);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return c(b, G, null, [a]).length > 0
        },
        c.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a),
            M(a, b)
        },
        c.attr = function (a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()],
            e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
        },
        c.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a)
        },
        c.uniqueSort = function (a) {
            var b,
            c = [],
            d = 0,
            e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (; b = a[e++]; )
                    b === a[e] && (d = c.push(e));
                for (; d--; )
                    a.splice(c[d], 1)
            }
            return a
        },
        A = c.getText = function (a) {
            var b,
            c = "",
            d = 0,
            e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += A(a)
                } else if (3 === e || 4 === e)
                    return a.nodeValue
            } else
                for (; b = a[d]; d++)
                    c += A(b);
            return c
        },
        z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: ra,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(xa, ya),
                    a[3] = (a[4] || a[5] || "").replace(xa, ya),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] =  + (a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] =  + (a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]),
                    a
                },
                PSEUDO: function (a) {
                    var c,
                    d = !a[5] && a[2];
                    return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(xa, ya).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    }
                     : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, d) {
                    return function (e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice(-4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    }
                     : function (b, c, i) {
                        var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p; ) {
                                    for (l = b; l = l[p]; )
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); )
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P)
                                m = j[1];
                            else
                                for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)); );
                            return m -= e,
                            m === d || 0 === m % d && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var d,
                    f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function (a, c) {
                            for (var d, e = f(a, b), g = e.length; g--; )
                                d = ca.call(a, e[g]), a[d] = !(c[d] = e[g])
                        }) : function (a) {
                        return f(a, 0, d)
                    }) : f
                }
            },
            pseudos: {
                not: e(function (a) {
                    var b = [],
                    c = [],
                    d = C(a.replace(ka, "$1"));
                    return d[N] ? e(function (a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; )
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        !c.pop()
                    }
                }),
                has: e(function (a) {
                    return function (b) {
                        return c(a, b).length > 0
                    }
                }),
                contains: e(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                    }
                }),
                lang: e(function (a) {
                    return qa.test(a || "") || c.error("unsupported lang: " + a),
                    a = a.replace(xa, ya).toLowerCase(),
                    function (b) {
                        var c;
                        do
                            if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === H
                },
                focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType)
                            return !1;
                    return !0
                },
                parent: function (a) {
                    return !z.pseudos.empty(a)
                },
                header: function (a) {
                    return va.test(a.nodeName)
                },
                input: function (a) {
                    return ua.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                },
                first: k(function () {
                    return [0]
                }),
                last: k(function (a, b) {
                    return [b - 1]
                }),
                eq: k(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function (a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: k(function (a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: k(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d; )
                        a.push(d);
                    return a
                })
            }
        },
        z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos,
        z.setFilters = new l,
        C = c.compile = function (a, b) {
            var c,
            d = [],
            e = [],
            f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; )
                    f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d))
            }
            return f
        },
        x.sortStable = N.split("").sort(V).join("") === N,
        x.detectDuplicates = U,
        F(),
        x.sortDetached = f(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }),
        f(function (a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, c, d) {
            return d ? b : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
        }),
        x.attributes && f(function (a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || g("value", function (a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b : a.defaultValue
        }),
        f(function (a) {
            return null == a.getAttribute("disabled")
        }) || g(da, function (a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null
        }),
        fa.find = c,
        fa.expr = c.selectors,
        fa.expr[":"] = fa.expr.pseudos,
        fa.unique = c.uniqueSort,
        fa.text = c.getText,
        fa.isXMLDoc = c.isXML,
        fa.contains = c.contains
    }
    (a);
    var oa = {};
    fa.Callbacks = function (a) {
        a = "string" == typeof a ? oa[a] || d(a) : fa.extend({}, a);
        var c,
        e,
        f,
        g,
        h,
        i,
        j = [],
        k = !a.once && [],
        l = function (b) {
            for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            f = !1,
            j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
        },
        m = {
            add: function () {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        fa.each(b, function (b, c) {
                            var e = fa.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                        })
                    }
                    (arguments),
                    f ? h = j.length : c && (g = b, l(c))
                }
                return this
            },
            remove: function () {
                return j && fa.each(arguments, function (a, b) {
                    for (var c; (c = fa.inArray(b, j, c)) > -1; )
                        j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                }),
                this
            },
            has: function (a) {
                return a ? fa.inArray(a, j) > -1 : !(!j || !j.length)
            },
            empty: function () {
                return j = [],
                h = 0,
                this
            },
            disable: function () {
                return j = k = c = b,
                this
            },
            disabled: function () {
                return !j
            },
            lock: function () {
                return k = b,
                c || m.disable(),
                this
            },
            locked: function () {
                return !k
            },
            fireWith: function (a, b) {
                return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)),
                this
            },
            fire: function () {
                return m.fireWith(this, arguments),
                this
            },
            fired: function () {
                return !!e
            }
        };
        return m
    },
    fa.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", fa.Callbacks("once memory"), "resolved"], ["reject", "fail", fa.Callbacks("once memory"), "rejected"], ["notify", "progress", fa.Callbacks("memory")]],
            c = "pending",
            d = {
                state: function () {
                    return c
                },
                always: function () {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function () {
                    var a = arguments;
                    return fa.Deferred(function (c) {
                        fa.each(b, function (b, f) {
                            var g = f[0],
                            h = fa.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = h && h.apply(this, arguments);
                                a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function (a) {
                    return null != a ? fa.extend(a, d) : d
                }
            },
            e = {};
            return d.pipe = d.then,
            fa.each(b, function (a, f) {
                var g = f[2],
                h = f[3];
                d[f[1]] = g.add,
                h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                },
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function (a) {
            var b,
            c,
            d,
            e = 0,
            f = aa.call(arguments),
            g = f.length,
            h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
            i = 1 === h ? a : fa.Deferred(),
            j = function (a, c, d) {
                return function (e) {
                    c[a] = this,
                    d[a] = arguments.length > 1 ? aa.call(arguments) : e,
                    d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                }
            };
            if (g > 1)
                for (b = Array(g), c = Array(g), d = Array(g); g > e; e++)
                    f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f),
            i.promise()
        }
    }),
    fa.support = function (b) {
        var c = T.createElement("input"),
        d = T.createDocumentFragment(),
        e = T.createElement("div"),
        f = T.createElement("select"),
        g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fa(function () {
                var c,
                d,
                f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                g = T.getElementsByTagName("body")[0];
                g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fa.swap(g, null != g.style.zoom ? {
                        zoom: 1
                    }
                         : {}, function () {
                        b.boxSizing = 4 === e.offsetWidth
                    }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                            width: "4px"
                        }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
            }), b) : b
    }
    ({});
    var pa,
    qa,
    ra = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    sa = /([A-Z])/g;
    e.uid = 1,
    e.accepts = function (a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    },
    e.prototype = {
        key: function (a) {
            if (!e.accepts(a))
                return 0;
            var b = {},
            c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    },
                    Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c,
                    fa.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}),
            c
        },
        set: function (a, b, c) {
            var d,
            e = this.key(a),
            f = this.cache[e];
            if ("string" == typeof b)
                f[b] = c;
            else if (fa.isEmptyObject(f))
                fa.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f
        },
        get: function (a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        },
        access: function (a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fa.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
        },
        remove: function (a, c) {
            var d,
            e,
            f,
            g = this.key(a),
            h = this.cache[g];
            if (c === b)
                this.cache[g] = {};
            else {
                fa.isArray(c) ? e = c.concat(c.map(fa.camelCase)) : (f = fa.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(ha) || [])),
                d = e.length;
                for (; d--; )
                    delete h[e[d]]
            }
        },
        hasData: function (a) {
            return !fa.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    },
    pa = new e,
    qa = new e,
    fa.extend({
        acceptData: e.accepts,
        hasData: function (a) {
            return pa.hasData(a) || qa.hasData(a)
        },
        data: function (a, b, c) {
            return pa.access(a, b, c)
        },
        removeData: function (a, b) {
            pa.remove(a, b)
        },
        _data: function (a, b, c) {
            return qa.access(a, b, c)
        },
        _removeData: function (a, b) {
            qa.remove(a, b)
        }
    }),
    fa.fn.extend({
        data: function (a, c) {
            var d,
            e,
            g = this[0],
            h = 0,
            i = null;
            if (a === b) {
                if (this.length && (i = pa.get(g), 1 === g.nodeType && !qa.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; d.length > h; h++)
                        e = d[h].name, 0 === e.indexOf("data-") && (e = fa.camelCase(e.slice(5)), f(g, e, i[e]));
                    qa.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function () {
                pa.set(this, a)
            }) : fa.access(this, function (c) {
                var d,
                e = fa.camelCase(a);
                if (g && c === b) {
                    if (d = pa.get(g, a), d !== b)
                        return d;
                    if (d = pa.get(g, e), d !== b)
                        return d;
                    if (d = f(g, e, b), d !== b)
                        return d
                } else
                    this.each(function () {
                        var d = pa.get(this, e);
                        pa.set(this, e, c),
                        -1 !== a.indexOf("-") && d !== b && pa.set(this, a, c)
                    })
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function (a) {
            return this.each(function () {
                pa.remove(this, a)
            })
        }
    }),
    fa.extend({
        queue: function (a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = qa.get(a, c), d && (!e || fa.isArray(d) ? e = qa.access(a, c, fa.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = fa._queueHooks(a, b),
            g = function () {
                fa.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return qa.get(a, c) || qa.access(a, c, {
                empty: fa.Callbacks("once memory").add(function () {
                    qa.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    fa.fn.extend({
        queue: function (a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--),
            d > arguments.length ? fa.queue(this[0], a) : c === b ? this : this.each(function () {
                var b = fa.queue(this, a, c);
                fa._queueHooks(this, a),
                "fx" === a && "inprogress" !== b[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                fa.dequeue(this, a)
            })
        },
        delay: function (a, b) {
            return a = fa.fx ? fa.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function (b, c) {
                var d = setTimeout(b, a);
                c.stop = function () {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, c) {
            var d,
            e = 1,
            f = fa.Deferred(),
            g = this,
            h = this.length,
            i = function () {
                --e || f.resolveWith(g, [g])
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; )
                d = qa.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(),
            f.promise(c)
        }
    });
    var ta,
    ua,
    va = /[\t\r\n\f]/g,
    wa = /\r/g,
    xa = /^(?:input|select|textarea|button)$/i;
    fa.fn.extend({
        attr: function (a, b) {
            return fa.access(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                fa.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return fa.access(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[fa.propFix[a] || a]
            })
        },
        addClass: function (a) {
            var b,
            c,
            d,
            e,
            f,
            g = 0,
            h = this.length,
            i = "string" == typeof a && a;
            if (fa.isFunction(a))
                return this.each(function (b) {
                    fa(this).addClass(a.call(this, b, this.className))
                });
            if (i)
                for (b = (a || "").match(ha) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : " ")) {
                        for (f = 0; e = b[f++]; )
                            0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = fa.trim(d)
                    }
            return this
        },
        removeClass: function (a) {
            var b,
            c,
            d,
            e,
            f,
            g = 0,
            h = this.length,
            i = 0 === arguments.length || "string" == typeof a && a;
            if (fa.isFunction(a))
                return this.each(function (b) {
                    fa(this).removeClass(a.call(this, b, this.className))
                });
            if (i)
                for (b = (a || "").match(ha) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : "")) {
                        for (f = 0; e = b[f++]; )
                            for (; d.indexOf(" " + e + " ") >= 0; )
                                d = d.replace(" " + e + " ", " ");
                        c.className = a ? fa.trim(d) : ""
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function (c) {
                fa(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)
                    for (var b, d = 0, e = fa(this), f = a.match(ha) || []; b = f[d++]; )
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else (c === R || "boolean" === c) && (this.className && qa.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qa.get(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(va, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },
        val: function (a) {
            var c,
            d,
            e,
            f = this[0];
            return arguments.length ? (e = fa.isFunction(a), this.each(function (d) {
                    var f;
                    1 === this.nodeType && (f = e ? a.call(this, d, fa(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fa.isArray(f) && (f = fa.map(f, function (a) {
                                    return null == a ? "" : a + ""
                                })), c = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                })) : f ? (c = fa.valHooks[f.type] || fa.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wa, "") : null == d ? "" : d)) : void 0
        }
    }),
    fa.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (fa.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--; )
                        d = e[g], (d.selected = fa.inArray(fa(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        },
        attr: function (a, c, d) {
            var e,
            f,
            g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === R ? fa.prop(a, c, d) : (1 === g && fa.isXMLDoc(a) || (c = c.toLowerCase(), e = fa.attrHooks[c] || (fa.expr.match.bool.test(c) ? ua : ta)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fa.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (fa.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function (a, b) {
            var c,
            d,
            e = 0,
            f = b && b.match(ha);
            if (f && 1 === a.nodeType)
                for (; c = f[e++]; )
                    d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!fa.support.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, c, d) {
            var e,
            f,
            g,
            h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !fa.isXMLDoc(a), g && (c = fa.propFix[c] || c, f = fa.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || xa.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }),
    ua = {
        set: function (a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    fa.each(fa.expr.match.bool.source.match(/\w+/g), function (a, c) {
        var d = fa.expr.attrHandle[c] || fa.find.attr;
        fa.expr.attrHandle[c] = function (a, c, e) {
            var f = fa.expr.attrHandle[c],
            g = e ? b : (fa.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fa.expr.attrHandle[c] = f,
            g
        }
    }),
    fa.support.optSelected || (fa.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex,
                null
            }
        }),
    fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        fa.propFix[this.toLowerCase()] = this
    }),
    fa.each(["radio", "checkbox"], function () {
        fa.valHooks[this] = {
            set: function (a, c) {
                return fa.isArray(c) ? a.checked = fa.inArray(fa(a).val(), c) >= 0 : b
            }
        },
        fa.support.checkOn || (fa.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ya = /^key/,
    za = /^(?:mouse|contextmenu)|click/,
    Aa = /^(?:focusinfocus|focusoutblur)$/,
    Ba = /^([^.]*)(?:\.(.+)|)$/;
    fa.event = {
        global: {},
        add: function (a, c, d, e, f) {
            var g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r = qa.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fa.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function (a) {
                        return typeof fa === R || a && fa.event.triggered === a.type ? b : fa.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = a), c = (c || "").match(ha) || [""], k = c.length; k--; )
                    i = Ba.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fa.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fa.event.special[o] || {}, l = fa.extend({
                            type: o,
                            origType: q,
                            data: e,
                            handler: d,
                            guid: d.guid,
                            selector: f,
                            needsContext: f && fa.expr.match.needsContext.test(f),
                            namespace: p.join(".")
                        }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fa.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q = qa.hasData(a) && qa.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(ha) || [""], j = b.length; j--; )
                    if (h = Ba.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; )
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i)
                            fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && (delete q.handle, qa.remove(a, "events"))
            }
        },
        trigger: function (c, d, e, f) {
            var g,
            h,
            i,
            j,
            k,
            l,
            m,
            n = [e || T],
            o = da.call(c, "type") ? c.type : c,
            p = da.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Aa.test(o + fa.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = 0 > o.indexOf(":") && "on" + o, c = c[fa.expando] ? c : new fa.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fa.makeArray(d, [c]), m = fa.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fa.isWindow(e)) {
                    for (j = m.delegateType || o, Aa.test(j + o) || (h = h.parentNode); h; h = h.parentNode)
                        n.push(h), i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0; (h = n[g++]) && !c.isPropagationStopped(); )
                    c.type = g > 1 ? j : m.bindType || o, l = (qa.get(h, "events") || {})[c.type] && qa.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fa.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o,
                f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fa.acceptData(e) || k && fa.isFunction(e[o]) && !fa.isWindow(e) && (i = e[k], i && (e[k] = null), fa.event.triggered = o, e[o](), fa.event.triggered = b, i && (e[k] = i)),
                c.result
            }
        },
        dispatch: function (a) {
            a = fa.event.fix(a);
            var c,
            d,
            e,
            f,
            g,
            h = [],
            i = aa.call(arguments),
            j = (qa.get(this, "events") || {})[a.type] || [],
            k = fa.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fa.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = f.elem, d = 0; (g = f.handlers[d++]) && !a.isImmediatePropagationStopped(); )
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fa.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function (a, c) {
            var d,
            e,
            f,
            g,
            h = [],
            i = c.delegateCount,
            j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j !== this; j = j.parentNode || this)
                    if (j.disabled !== !0 || "click" !== a.type) {
                        for (e = [], d = 0; i > d; d++)
                            g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fa(f, this).index(j) >= 0 : fa.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: j,
                            handlers: e
                        })
                    }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }),
            h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, c) {
                var d,
                e,
                f,
                g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function (a) {
            if (a[fa.expando])
                return a;
            var b,
            c,
            d,
            e = a.type,
            f = a,
            g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = za.test(e) ? this.mouseHooks : ya.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--; )
                c = d[b], a[c] = f[c];
            return a.target || (a.target = T),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== i() && this.focus ? (this.focus(), !1) : b
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === i() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : b
                },
                _default: function (a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    fa.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    },
    fa.Event = function (a, c) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, c && fa.extend(this, c), this.timeStamp = a && a.timeStamp || fa.now(), this[fa.expando] = !0, b) : new fa.Event(a, c)
    },
    fa.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = g,
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = g,
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = g,
            this.stopPropagation()
        }
    },
    fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c,
                d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    fa.support.focusinBubbles || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = 0,
        d = function (a) {
            fa.event.simulate(b, a.target, fa.event.fix(a), !0)
        };
        fa.event.special[b] = {
            setup: function () {
                0 === c++ && T.addEventListener(a, d, !0)
            },
            teardown: function () {
                0 === --c && T.removeEventListener(a, d, !0)
            }
        }
    }),
    fa.fn.extend({
        on: function (a, c, d, e, f) {
            var g,
            i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a)
                    this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1)
                e = h;
            else if (!e)
                return this;
            return 1 === f && (g = e, e = function (a) {
                return fa().off(a),
                g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = fa.guid++)),
            this.each(function () {
                fa.event.add(this, a, e, d, c)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, c, d) {
            var e,
            f;
            if (a && a.preventDefault && a.handleObj)
                return e = a.handleObj, fa(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a)
                    this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b),
            d === !1 && (d = h),
            this.each(function () {
                fa.event.remove(this, a, d, c)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, c) {
            var d = this[0];
            return d ? fa.event.trigger(a, c, d, !0) : b
        }
    });
    var Ca = /^.[^:#\[\.,]*$/,
    Da = /^(?:parents|prev(?:Until|All))/,
    Ea = fa.expr.match.needsContext,
    Fa = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fa.fn.extend({
        find: function (a) {
            var b,
            c = [],
            d = this,
            e = d.length;
            if ("string" != typeof a)
                return this.pushStack(fa(a).filter(function () {
                        for (b = 0; e > b; b++)
                            if (fa.contains(d[b], this))
                                return !0
                    }));
            for (b = 0; e > b; b++)
                fa.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fa.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        has: function (a) {
            var b = fa(a, this),
            c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a]))
                        return !0
            })
        },
        not: function (a) {
            return this.pushStack(k(this, a || [], !0))
        },
        filter: function (a) {
            return this.pushStack(k(this, a || [], !1))
        },
        is: function (a) {
            return !!k(this, "string" == typeof a && Ea.test(a) ? fa(a) : a || [], !1).length
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Ea.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? fa.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? ba.call(fa(a), this[0]) : ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            var c = "string" == typeof a ? fa(a, b) : fa.makeArray(a && a.nodeType ? [a] : a),
            d = fa.merge(this.get(), c);
            return this.pushStack(fa.unique(d))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }),
    fa.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return fa.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return fa.dir(a, "parentNode", c)
        },
        next: function (a) {
            return j(a, "nextSibling")
        },
        prev: function (a) {
            return j(a, "previousSibling")
        },
        nextAll: function (a) {
            return fa.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return fa.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return fa.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return fa.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return fa.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return fa.sibling(a.firstChild)
        },
        contents: function (a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function (a, b) {
        fa.fn[a] = function (c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = fa.filter(d, e)),
            this.length > 1 && (Fa[a] || fa.unique(e), Da.test(a) && e.reverse()),
            this.pushStack(e)
        }
    }),
    fa.extend({
        filter: function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function (a) {
                    return 1 === a.nodeType
                }))
        },
        dir: function (a, c, d) {
            for (var e = [], f = d !== b; (a = a[c]) && 9 !== a.nodeType; )
                if (1 === a.nodeType) {
                    if (f && fa(a).is(d))
                        break;
                    e.push(a)
                }
            return e
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ha = /<([\w:]+)/,
    Ia = /<|&#?\w+;/,
    Ja = /<(?:script|style|link)/i,
    Ka = /^(?:checkbox|radio)$/i,
    La = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ma = /^$|\/(?:java|ecma)script/i,
    Na = /^true\/(.*)/,
    Oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Pa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pa.optgroup = Pa.option,
    Pa.tbody = Pa.tfoot = Pa.colgroup = Pa.caption = Pa.thead,
    Pa.th = Pa.td,
    fa.fn.extend({
        text: function (a) {
            return fa.access(this, function (a) {
                return a === b ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (fa.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function () {
                return fa.clone(this, a, b)
            })
        },
        html: function (a) {
            return fa.access(this, function (a) {
                var c = this[0] || {},
                d = 0,
                e = this.length;
                if (a === b && 1 === c.nodeType)
                    return c.innerHTML;
                if ("string" == typeof a && !Ja.test(a) && !Pa[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ga, "<$1></$2>");
                    try {
                        for (; e > d; d++)
                            c = this[d] || {},
                        1 === c.nodeType && (fa.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = fa.map(this, function (a) {
                return [a.nextSibling, a.parentNode]
            }),
            b = 0;
            return this.domManip(arguments, function (c) {
                var d = a[b++],
                e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fa(this).remove(), e.insertBefore(c, d))
            }, !0),
            b ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b, c) {
            a = $.apply([], a);
            var d,
            e,
            f,
            g,
            h,
            i,
            j = 0,
            k = this.length,
            l = this,
            o = k - 1,
            p = a[0],
            r = fa.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fa.support.checkClone) && La.test(p))
                return this.each(function (d) {
                    var e = l.eq(d);
                    r && (a[0] = p.call(this, d, e.html())),
                    e.domManip(a, b, c)
                });
            if (k && (d = fa.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = fa.map(q(d, "script"), m), g = f.length; k > j; j++)
                    h = d, j !== o && (h = fa.clone(h, !0, !0), g && fa.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, fa.map(f, n), j = 0; g > j; j++)
                        h = f[j], Ma.test(h.type || "") && !qa.access(h, "globalEval") && fa.contains(i, h) && (h.src ? fa._evalUrl(h.src) : fa.globalEval(h.textContent.replace(Oa, "")))
            }
            return this
        }
    }),
    fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        fa.fn[a] = function (a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++)
                c = g === f ? this : this.clone(!0), fa(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }),
    fa.extend({
        clone: function (a, b, c) {
            var d,
            e,
            f,
            g,
            h = a.cloneNode(!0),
            i = fa.contains(a.ownerDocument, a);
            if (!(fa.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++)
                    r(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++)
                        p(f[d], g[d]);
                else
                    p(a, h);
            return g = q(h, "script"),
            g.length > 0 && o(g, !i && q(a, "script")),
            h
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                if (e = a[k], e || 0 === e)
                    if ("object" === fa.type(e))
                        fa.merge(n, e.nodeType ? [e] : e);
                    else if (Ia.test(e)) {
                        for (f = f || m.appendChild(b.createElement("div")), g = (Ha.exec(e) || ["", ""])[1].toLowerCase(), h = Pa[g] || Pa._default, f.innerHTML = h[1] + e.replace(Ga, "<$1></$2>") + h[2], j = h[0]; j--; )
                            f = f.lastChild;
                        fa.merge(n, f.childNodes),
                        f = m.firstChild,
                        f.textContent = ""
                    } else
                        n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++]; )
                if ((!d || -1 === fa.inArray(e, d)) && (i = fa.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                    for (j = 0; e = f[j++]; )
                        Ma.test(e.type || "") && c.push(e);
            return m
        },
        cleanData: function (a) {
            for (var c, d, f, g, h, i, j = fa.event.special, k = 0; (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qa.expando], h && (c = qa.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)
                        for (i = 0; (g = f[i]) !== b; i++)
                            j[g] ? fa.event.remove(d, g) : fa.removeEvent(d, g, c.handle);
                    qa.cache[h] && delete qa.cache[h]
                }
                delete pa.cache[d[pa.expando]]
            }
        },
        _evalUrl: function (a) {
            return fa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    fa.fn.extend({
        wrapAll: function (a) {
            var b;
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstElementChild; )
                            a = a.firstElementChild;
                        return a
                    }).append(this)), this)
        },
        wrapInner: function (a) {
            return fa.isFunction(a) ? this.each(function (b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function () {
                var b = fa(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = fa.isFunction(a);
            return this.each(function (c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Qa,
    Ra,
    Sa = /^(none|table(?!-c[ea]).+)/,
    Ta = /^margin/,
    Ua = RegExp("^(" + ga + ")(.*)$", "i"),
    Va = RegExp("^(" + ga + ")(?!px)[a-z%]+$", "i"),
    Wa = RegExp("^([+-])=(" + ga + ")", "i"),
    Xa = {
        BODY: "block"
    },
    Ya = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Za = {
        letterSpacing: 0,
        fontWeight: 400
    },
    $a = ["Top", "Right", "Bottom", "Left"],
    _a = ["Webkit", "O", "Moz", "ms"];
    fa.fn.extend({
        css: function (a, c) {
            return fa.access(this, function (a, c, d) {
                var e,
                f,
                g = {},
                h = 0;
                if (fa.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++)
                        g[c[h]] = fa.css(a, c[h], !1, e);
                    return g;
                }
                return d !== b ? fa.style(a, c, d) : fa.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function () {
            return v(this, !0)
        },
        hide: function () {
            return v(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                t(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }),
    fa.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Qa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f,
                g,
                h,
                i = fa.camelCase(c),
                j = a.style;
                return c = fa.cssProps[i] || (fa.cssProps[i] = s(j, i)),
                h = fa.cssHooks[c] || fa.cssHooks[i],
                d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wa.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fa.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fa.cssNumber[i] || (d += "px"), fa.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), b)
            }
        },
        css: function (a, c, d, e) {
            var f,
            g,
            h,
            i = fa.camelCase(c);
            return c = fa.cssProps[i] || (fa.cssProps[i] = s(a.style, i)),
            h = fa.cssHooks[c] || fa.cssHooks[i],
            h && "get" in h && (f = h.get(a, !0, d)),
            f === b && (f = Qa(a, c, e)),
            "normal" === f && c in Za && (f = Za[c]),
            "" === d || d ? (g = parseFloat(f), d === !0 || fa.isNumeric(g) ? g || 0 : f) : f
        }
    }),
    Qa = function (a, c, d) {
        var e,
        f,
        g,
        h = d || u(a),
        i = h ? h.getPropertyValue(c) || h[c] : b,
        j = a.style;
        return h && ("" !== i || fa.contains(a.ownerDocument, a) || (i = fa.style(a, c)), Va.test(i) && Ta.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)),
        i
    },
    fa.each(["height", "width"], function (a, c) {
        fa.cssHooks[c] = {
            get: function (a, d, e) {
                return d ? 0 === a.offsetWidth && Sa.test(fa.css(a, "display")) ? fa.swap(a, Ya, function () {
                    return y(a, c, e)
                }) : y(a, c, e) : b
            },
            set: function (a, b, d) {
                var e = d && u(a);
                return w(a, b, d ? x(a, c, d, fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    fa(function () {
        fa.support.reliableMarginRight || (fa.cssHooks.marginRight = {
                get: function (a, c) {
                    return c ? fa.swap(a, {
                        display: "inline-block"
                    }, Qa, [a, "marginRight"]) : b
                }
            }),
        !fa.support.pixelPosition && fa.fn.position && fa.each(["top", "left"], function (a, c) {
            fa.cssHooks[c] = {
                get: function (a, d) {
                    return d ? (d = Qa(a, c), Va.test(d) ? fa(a).position()[c] + "px" : d) : b
                }
            }
        })
    }),
    fa.expr && fa.expr.filters && (fa.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    }, fa.expr.filters.visible = function (a) {
        return !fa.expr.filters.hidden(a)
    }),
    fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        fa.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + $a[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ta.test(a) || (fa.cssHooks[a + b].set = w)
    });
    var ab = /%20/g,
    bb = /\[\]$/,
    cb = /\r?\n/g,
    db = /^(?:submit|button|image|reset|file)$/i,
    eb = /^(?:input|select|textarea|keygen)/i;
    fa.fn.extend({
        serialize: function () {
            return fa.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && eb.test(this.nodeName) && !db.test(a) && (this.checked || !Ka.test(a))
            }).map(function (a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(cb, "\r\n")
                }
            }).get()
        }
    }),
    fa.param = function (a, c) {
        var d,
        e = [],
        f = function (a, b) {
            b = fa.isFunction(b) ? b() : null == b ? "" : b,
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (c === b && (c = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a))
            fa.each(a, function () {
                f(this.name, this.value)
            });
        else
            for (d in a)
                B(d, a[d], c, f);
        return e.join("&").replace(ab, "+")
    },
    fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        fa.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    fa.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var fb,
    gb,
    hb = fa.now(),
    ib = /\?/,
    jb = /#.*$/,
    kb = /([?&])_=[^&]*/,
    lb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    nb = /^(?:GET|HEAD)$/,
    ob = /^\/\//,
    pb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    qb = fa.fn.load,
    rb = {},
    sb = {},
    tb = "*/".concat("*");
    try {
        gb = S.href
    } catch (ub) {
        gb = T.createElement("a"),
        gb.href = "",
        gb = gb.href
    }
    fb = pb.exec(gb.toLowerCase()) || [],
    fa.fn.load = function (a, c, d) {
        if ("string" != typeof a && qb)
            return qb.apply(this, arguments);
        var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)),
        fa.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"),
        h.length > 0 && fa.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function (a) {
            g = arguments,
            h.html(e ? fa("<div>").append(fa.parseHTML(a)).find(e) : a)
        }).complete(d && function (a, b) {
            h.each(d, g || [a.responseText, b, a])
        }),
        this
    },
    fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        fa.fn[b] = function (a) {
            return this.on(b, a)
        }
    }),
    fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gb,
            type: "GET",
            isLocal: mb.test(fb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? E(E(a, fa.ajaxSettings), b) : E(fa.ajaxSettings, a)
        },
        ajaxPrefilter: C(rb),
        ajaxTransport: C(sb),
        ajax: function (a, c) {
            function d(a, c, d, h) {
                var j,
                l,
                s,
                t,
                v,
                x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b),
            c = c || {};
            var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = fa.ajaxSetup({}, c),
            n = m.context || m,
            o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
            p = fa.Deferred(),
            q = fa.Callbacks("once memory"),
            r = m.statusCode || {},
            s = {},
            t = {},
            u = 0,
            v = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === u) {
                        if (!h)
                            for (h = {}; b = lb.exec(g); )
                                h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === u ? g : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b),
                    this
                },
                overrideMimeType: function (a) {
                    return u || (m.mimeType = a),
                    this
                },
                statusCode: function (a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || v;
                    return e && e.abort(b),
                    d(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gb) + "").replace(jb, "").replace(ob, fb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(ha) || [""], null == m.crossDomain && (j = pb.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fb[1] && j[2] === fb[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fb[3] || ("http:" === fb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), D(rb, m, c, w), 2 === u)
                return w;
            k = m.global,
            k && 0 === fa.active++ && fa.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !nb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (ib.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kb.test(f) ? f.replace(kb, "$1_=" + hb++) : f + (ib.test(f) ? "&" : "?") + "_=" + hb++)),
            m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType),
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[l](m[l]);
            if (e = D(sb, m, c, w)) {
                w.readyState = 1,
                k && o.trigger("ajaxSend", [w, m]),
                m.async && m.timeout > 0 && (i = setTimeout(function () {
                        w.abort("timeout")
                    }, m.timeout));
                try {
                    u = 1,
                    e.send(s, d)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    d(-1, x)
                }
            } else
                d(-1, "No Transport");
            return w
        },
        getJSON: function (a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function (a, c) {
            return fa.get(a, b, c, "script")
        }
    }),
    fa.each(["get", "post"], function (a, c) {
        fa[c] = function (a, d, e, f) {
            return fa.isFunction(d) && (f = f || e, e = d, d = b),
            fa.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }),
    fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return fa.globalEval(a),
                a
            }
        }
    }),
    fa.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    fa.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b,
            c;
            return {
                send: function (d, e) {
                    b = fa("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                            b.remove(),
                            c = null,
                            a && e("error" === a.type ? 404 : 200, a.type)
                        }),
                    T.head.appendChild(b[0])
                },
                abort: function () {
                    c && c()
                }
            }
        }
    });
    var vb = [],
    wb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = vb.pop() || fa.expando + "_" + hb++;
            return this[a] = !0,
            a
        }
    }),
    fa.ajaxPrefilter("json jsonp", function (c, d, e) {
        var f,
        g,
        h,
        i = c.jsonp !== !1 && (wb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wb.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fa.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wb, "$1" + f) : c.jsonp !== !1 && (c.url += (ib.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function () {
            return h || fa.error(f + " was not called"),
            h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function () {
            h = arguments
        }, e.always(function () {
                a[f] = g,
                c[f] && (c.jsonpCallback = d.jsonpCallback, vb.push(f)),
                h && fa.isFunction(g) && g(h[0]),
                h = g = b
            }), "script") : b
    }),
    fa.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var xb = fa.ajaxSettings.xhr(),
    yb = {
        0: 200,
        1223: 204
    },
    zb = 0,
    Ab = {};
    a.ActiveXObject && fa(a).on("unload", function () {
        for (var a in Ab)
            Ab[a]();
        Ab = b
    }),
    fa.support.cors = !!xb && "withCredentials" in xb,
    fa.support.ajax = xb = !!xb,
    fa.ajaxTransport(function (a) {
        var c;
        return fa.support.cors || xb && !a.crossDomain ? {
            send: function (d, e) {
                var f,
                g,
                h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields)
                        h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType),
                a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d)
                    h.setRequestHeader(f, d[f]);
                c = function (a) {
                    return function () {
                        c && (delete Ab[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yb[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                                text: h.responseText
                            }
                                 : b, h.getAllResponseHeaders()))
                    }
                },
                h.onload = c(),
                h.onerror = c("error"),
                c = Ab[g = zb++] = c("abort"),
                h.send(a.hasContent && a.data || null)
            },
            abort: function () {
                c && c()
            }
        }
         : b
    });
    var Bb,
    Cb,
    Db = /^(?:toggle|show|hide)$/,
    Eb = RegExp("^(?:([+-])=|)(" + ga + ")([a-z%]*)$", "i"),
    Fb = /queueHooks$/,
    Gb = [L],
    Hb = {
        "*": [function (a, b) {
                var c = this.createTween(a, b),
                d = c.cur(),
                e = Eb.exec(b),
                f = e && e[3] || (fa.cssNumber[a] ? "" : "px"),
                g = (fa.cssNumber[a] || "px" !== f && +d) && Eb.exec(fa.css(c.elem, a)),
                h = 1,
                i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3],
                    e = e || [],
                    g = +d || 1;
                    do
                        h = h || ".5", g /= h, fa.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                c
            }
        ]
    };
    fa.Animation = fa.extend(J, {
        tweener: function (a, b) {
            fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Hb[c] = Hb[c] || [], Hb[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? Gb.unshift(a) : Gb.push(a)
        }
    }),
    fa.Tween = M,
    M.prototype = {
        constructor: M,
        init: function (a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        },
        run: function (a) {
            var b,
            c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    fa.each(["toggle", "show", "hide"], function (a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }),
    fa.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = fa.isEmptyObject(a),
            f = fa.speed(b, c, d),
            g = function () {
                var b = J(this, fa.extend({}, a), f);
                (e || qa.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, c, d) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop,
                b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function () {
                var b = !0,
                c = null != a && a + "queueHooks",
                f = fa.timers,
                g = qa.get(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g)
                        g[c] && g[c].stop && Fb.test(c) && e(g[c]);
                for (c = f.length; c--; )
                    f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && fa.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function () {
                var b,
                c = qa.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = fa.timers,
                g = d ? d.length : 0;
                for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    fa.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        fa.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    fa.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function () {
            fa.isFunction(d.old) && d.old.call(this),
            d.queue && fa.dequeue(this, d.queue)
        },
        d
    },
    fa.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    fa.timers = [],
    fa.fx = M.prototype.init,
    fa.fx.tick = function () {
        var a,
        c = fa.timers,
        d = 0;
        for (Bb = fa.now(); c.length > d; d++)
            a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fa.fx.stop(),
        Bb = b
    },
    fa.fx.timer = function (a) {
        a() && fa.timers.push(a) && fa.fx.start()
    },
    fa.fx.interval = 13,
    fa.fx.start = function () {
        Cb || (Cb = setInterval(fa.fx.tick, fa.fx.interval))
    },
    fa.fx.stop = function () {
        clearInterval(Cb),
        Cb = null
    },
    fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fa.fx.step = {},
    fa.expr && fa.expr.filters && (fa.expr.filters.animated = function (a) {
        return fa.grep(fa.timers, function (b) {
            return a === b.elem
        }).length
    }),
    fa.fn.offset = function (a) {
        if (arguments.length)
            return a === b ? this : this.each(function (b) {
                fa.offset.setOffset(this, a, b)
            });
        var c,
        d,
        e = this[0],
        f = {
            top: 0,
            left: 0
        },
        g = e && e.ownerDocument;
        return g ? (c = g.documentElement, fa.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
                top: f.top + d.pageYOffset - c.clientTop,
                left: f.left + d.pageXOffset - c.clientLeft
            }) : f) : void 0
    },
    fa.offset = {
        setOffset: function (a, b, c) {
            var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = fa.css(a, "position"),
            l = fa(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = fa.css(a, "top"),
            i = fa.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            fa.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    fa.fn.extend({
        position: function () {
            if (this[0]) {
                var a,
                b,
                c = this[0],
                d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || U; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position"); )
                    a = a.offsetParent;
                return a || U
            })
        }
    }),
    fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (c, d) {
        var e = "pageYOffset" === d;
        fa.fn[c] = function (f) {
            return fa.access(this, function (c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, b)
            }, c, f, arguments.length, null)
        }
    }),
    fa.each({
        Height: "height",
        Width: "width"
    }, function (a, c) {
        fa.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function (d, e) {
            fa.fn[e] = function (e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fa.access(this, function (c, d, e) {
                    var f;
                    return fa.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fa.css(c, d, h) : fa.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }),
    fa.fn.size = function () {
        return this.length
    },
    fa.fn.andSelf = fa.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fa : "function" == typeof define && define.amd && define("jquery", [], function () {
        return fa
    }),
    "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fa)
}
(window);
(function () {
    var a = this,
    b = a._,
    c = {},
    d = Array.prototype,
    e = Object.prototype,
    f = Function.prototype,
    g = d.push,
    h = d.slice,
    i = d.concat,
    j = e.toString,
    k = e.hasOwnProperty,
    l = d.forEach,
    m = d.map,
    n = d.reduce,
    o = d.reduceRight,
    p = d.filter,
    q = d.every,
    r = d.some,
    s = d.indexOf,
    t = d.lastIndexOf,
    u = Array.isArray,
    v = Object.keys,
    w = f.bind,
    x = function (a) {
        return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x,
    x.VERSION = "1.4.4";
    var y = x.each = x.forEach = function (a, b, d) {
        if (null != a)
            if (l && a.forEach === l)
                a.forEach(b, d);
            else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)
                    if (b.call(d, a[e], e, a) === c)
                        return
            } else
                for (var g in a)
                    if (x.has(a, g) && b.call(d, a[g], g, a) === c)
                        return
    };
    x.map = x.collect = function (a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function (a, e, f) {
                d[d.length] = b.call(c, a, e, f)
            }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n)
            return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function (a, f, g) {
                e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
            }), !e)
            throw new TypeError(z);
        return c
    },
    x.reduceRight = x.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o)
            return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function (h, i, j) {
                i = g ? g[--f] : --f,
                e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
            }), !e)
            throw new TypeError(z);
        return c
    },
    x.find = x.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }),
        d
    },
    x.filter = x.select = function (a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function (a, e, f) {
                b.call(c, a, e, f) && (d[d.length] = a)
            }), d)
    },
    x.reject = function (a, b, c) {
        return x.filter(a, function (a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    },
    x.every = x.all = function (a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function (a, f, g) {
                return (e = e && b.call(d, a, f, g)) ? void 0 : c
            }), !!e)
    };
    var A = x.some = x.any = function (a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function (a, f, g) {
                return e || (e = b.call(d, a, f, g)) ? c : void 0
            }), !!e)
    };
    x.contains = x.include = function (a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function (a) {
            return a === b
        })
    },
    x.invoke = function (a, b) {
        var c = h.call(arguments, 2),
        d = x.isFunction(b);
        return x.map(a, function (a) {
            return (d ? b : a[b]).apply(a, c)
        })
    },
    x.pluck = function (a, b) {
        return x.map(a, function (a) {
            return a[b]
        })
    },
    x.where = function (a, b, c) {
        return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function (a) {
            for (var c in b)
                if (b[c] !== a[c])
                    return !1;
            return !0
        })
    },
    x.findWhere = function (a, b) {
        return x.where(a, b, !0)
    },
    x.max = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length)
            return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a))
            return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                    value: a,
                    computed: g
                })
        }),
        d.value
    },
    x.min = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length)
            return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a))
            return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            d.computed > g && (d = {
                    value: a,
                    computed: g
                })
        }),
        d.value
    },
    x.shuffle = function (a) {
        var b,
        c = 0,
        d = [];
        return y(a, function (a) {
            b = x.random(c++),
            d[c - 1] = d[b],
            d[b] = a
        }),
        d
    };
    var B = function (a) {
        return x.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    x.sortBy = function (a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function (a, b, e) {
                return {
                    value: a,
                    index: b,
                    criteria: d.call(c, a, b, e)
                }
            }).sort(function (a, b) {
                var c = a.criteria,
                d = b.criteria;
                if (c !== d) {
                    if (c > d || void 0 === c)
                        return 1;
                    if (d > c || void 0 === d)
                        return -1
                }
                return a.index < b.index ? -1 : 1
            }), "value")
    };
    var C = function (a, b, c, d) {
        var e = {},
        f = B(b || x.identity);
        return y(a, function (b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }),
        e
    };
    x.groupBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    },
    x.countBy = function (a, b, c) {
        return C(a, b, c, function (a, b) {
            x.has(a, b) || (a[b] = 0),
            a[b]++
        })
    },
    x.sortedIndex = function (a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            e > c.call(d, a[h]) ? f = h + 1 : g = h
        }
        return f
    },
    x.toArray = function (a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    },
    x.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    },
    x.first = x.head = x.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    },
    x.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    },
    x.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    },
    x.rest = x.tail = x.drop = function (a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    },
    x.compact = function (a) {
        return x.filter(a, x.identity)
    };
    var D = function (a, b, c) {
        return y(a, function (a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }),
        c
    };
    x.flatten = function (a, b) {
        return D(a, b, [])
    },
    x.without = function (a) {
        return x.difference(a, h.call(arguments, 1))
    },
    x.uniq = x.unique = function (a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a,
        f = [],
        g = [];
        return y(e, function (c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }),
        f
    },
    x.union = function () {
        return x.uniq(i.apply(d, arguments))
    },
    x.intersection = function (a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function (a) {
            return x.every(b, function (b) {
                return x.indexOf(b, a) >= 0
            })
        })
    },
    x.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function (a) {
            return !x.contains(b, a)
        })
    },
    x.zip = function () {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = Array(b), d = 0; b > d; d++)
            c[d] = x.pluck(a, "" + d);
        return c
    },
    x.object = function (a, b) {
        if (null == a)
            return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++)
            b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    },
    x.indexOf = function (a, b, c) {
        if (null == a)
            return -1;
        var d = 0,
        e = a.length;
        if (c) {
            if ("number" != typeof c)
                return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s)
            return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b)
                return d;
        return -1
    },
    x.lastIndexOf = function (a, b, c) {
        if (null == a)
            return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t)
            return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; )
            if (a[e] === b)
                return e;
        return -1
    },
    x.range = function (a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0),
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); d > e; )
            f[e++] = a, a += c;
        return f
    },
    x.bind = function (a, b) {
        if (a.bind === w && w)
            return w.apply(a, h.call(arguments, 1));
        var c = h.call(arguments, 2);
        return function () {
            return a.apply(b, c.concat(h.call(arguments)))
        }
    },
    x.partial = function (a) {
        var b = h.call(arguments, 1);
        return function () {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    },
    x.bindAll = function (a) {
        var b = h.call(arguments, 1);
        return 0 === b.length && (b = x.functions(a)),
        y(b, function (b) {
            a[b] = x.bind(a[b], a)
        }),
        a
    },
    x.memoize = function (a, b) {
        var c = {};
        return b || (b = x.identity),
        function () {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    },
    x.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    },
    x.defer = function (a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    },
    x.throttle = function (a, b) {
        var c,
        d,
        e,
        f,
        g = 0,
        h = function () {
            g = new Date,
            e = null,
            f = a.apply(c, d)
        };
        return function () {
            var i = new Date,
            j = b - (i - g);
            return c = this,
            d = arguments,
            0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)),
            f
        }
    },
    x.debounce = function (a, b, c) {
        var d,
        e;
        return function () {
            var f = this,
            g = arguments,
            h = function () {
                d = null,
                c || (e = a.apply(f, g))
            },
            i = c && !d;
            return clearTimeout(d),
            d = setTimeout(h, b),
            i && (e = a.apply(f, g)),
            e
        }
    },
    x.once = function (a) {
        var b,
        c = !1;
        return function () {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    },
    x.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments),
            b.apply(this, c)
        }
    },
    x.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; c >= 0; c--)
                b = [a[c].apply(this, b)];
            return b[0]
        }
    },
    x.after = function (a, b) {
        return 0 >= a ? b() : function () {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    },
    x.keys = v || function (a) {
        if (a !== Object(a))
            throw new TypeError("Invalid object");
        var b = [];
        for (var c in a)
            x.has(a, c) && (b[b.length] = c);
        return b
    },
    x.values = function (a) {
        var b = [];
        for (var c in a)
            x.has(a, c) && b.push(a[c]);
        return b
    },
    x.pairs = function (a) {
        var b = [];
        for (var c in a)
            x.has(a, c) && b.push([c, a[c]]);
        return b
    },
    x.invert = function (a) {
        var b = {};
        for (var c in a)
            x.has(a, c) && (b[a[c]] = c);
        return b
    },
    x.functions = x.methods = function (a) {
        var b = [];
        for (var c in a)
            x.isFunction(a[c]) && b.push(c);
        return b.sort()
    },
    x.extend = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)
                for (var c in b)
                    a[c] = b[c]
        }),
        a
    },
    x.pick = function (a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        return y(c, function (c) {
            c in a && (b[c] = a[c])
        }),
        b
    },
    x.omit = function (a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        for (var e in a)
            x.contains(c, e) || (b[e] = a[e]);
        return b
    },
    x.defaults = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)
                for (var c in b)
                    null == a[c] && (a[c] = b[c])
        }),
        a
    },
    x.clone = function (a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    },
    x.tap = function (a, b) {
        return b(a),
        a
    };
    var E = function (a, b, c, d) {
        if (a === b)
            return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b)
            return a === b;
        a instanceof x && (a = a._wrapped),
        b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b))
            return !1;
        switch (e) {
        case "[object String]":
            return a == b + "";
        case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return +a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b)
            return !1;
        for (var f = c.length; f--; )
            if (c[f] == a)
                return d[f] == b;
        c.push(a),
        d.push(b);
        var g = 0,
        h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length)
                for (; g-- && (h = E(a[g], b[g], c, d)); );
        } else {
            var i = a.constructor,
            k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k))
                return !1;
            for (var l in a)
                if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d))))
                    break;
            if (h) {
                for (l in b)
                    if (x.has(b, l) && !g--)
                        break;
                h = !g
            }
        }
        return c.pop(),
        d.pop(),
        h
    };
    x.isEqual = function (a, b) {
        return E(a, b, [], [])
    },
    x.isEmpty = function (a) {
        if (null == a)
            return !0;
        if (x.isArray(a) || x.isString(a))
            return 0 === a.length;
        for (var b in a)
            if (x.has(a, b))
                return !1;
        return !0
    },
    x.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    },
    x.isArray = u || function (a) {
        return "[object Array]" == j.call(a)
    },
    x.isObject = function (a) {
        return a === Object(a)
    },
    y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        x["is" + a] = function (b) {
            return j.call(b) == "[object " + a + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function (a) {
        return !(!a || !x.has(a, "callee"))
    }),
    "function" != typeof / . /  && (x.isFunction = function (a) {
        return "function" == typeof a
    }),
    x.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    },
    x.isNaN = function (a) {
        return x.isNumber(a) && a != +a
    },
    x.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    },
    x.isNull = function (a) {
        return null === a
    },
    x.isUndefined = function (a) {
        return void 0 === a
    },
    x.has = function (a, b) {
        return k.call(a, b)
    },
    x.noConflict = function () {
        return a._ = b,
        this
    },
    x.identity = function (a) {
        return a
    },
    x.times = function (a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++)
            d[e] = b.call(c, e);
        return d
    },
    x.random = function (a, b) {
        return null == b && (b = a, a = 0),
        a + Math.floor(Math.random() * (b - a + 1))
    };
    var F = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    F.unescape = x.invert(F.escape);
    var G = {
        escape: RegExp("[" + x.keys(F.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (a) {
        x[a] = function (b) {
            return null == b ? "" : ("" + b).replace(G[a], function (b) {
                return F[a][b]
            })
        }
    }),
    x.result = function (a, b) {
        if (null == a)
            return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    },
    x.mixin = function (a) {
        y(x.functions(a), function (b) {
            var c = x[b] = a[b];
            x.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments),
                L.call(this, c.apply(x, a))
            }
        })
    };
    var H = 0;
    x.uniqueId = function (a) {
        var b = ++H + "";
        return a ? a + b : b
    },
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
    J = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = RegExp([(c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source].join("|") + "|$", "g"),
        f = 0,
        g = "__p+='";
        a.replace(e, function (b, c, d, e, h) {
            return g += a.slice(f, h).replace(K, function (a) {
                return "\\" + J[a]
            }),
            c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
            d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"),
            e && (g += "';\n" + e + "\n__p+='"),
            f = h + b.length,
            b
        }),
        g += "';\n",
        c.variable || (g = "with(obj||{}){\n" + g + "}\n"),
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = Function(c.variable || "obj", "_", g)
        } catch (h) {
            throw h.source = g,
            h
        }
        if (b)
            return d(b, x);
        var i = function (a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}",
        i
    },
    x.chain = function (a) {
        return x(a).chain()
    };
    var L = function (a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x),
    y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments),
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0],
            L.call(this, c)
        }
    }),
    y(["concat", "join", "slice"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            return L.call(this, b.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0,
            this
        },
        value: function () {
            return this._wrapped
        }
    })
}).call(this);
define("underscore", (function (global) {
        return function () {
            var ret,
            fn;
            return ret || global._;
        };
    }
        (this)));

(function () {
    var a,
    b = this,
    c = b.Backbone,
    d = [],
    e = d.push,
    f = d.slice,
    g = d.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {},
    a.VERSION = "1.0.0";
    var h = b._;
    h || "undefined" == typeof require || (h = require("underscore")),
    a.$ = b.jQuery || b.Zepto || b.ender || b.$,
    a.noConflict = function () {
        return b.Backbone = c,
        this
    },
    a.emulateHTTP = !1,
    a.emulateJSON = !1;
    var i = a.Events = {
        on: function (a, b, c) {
            if (!k(this, "on", a, [b, c]) || !b)
                return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }),
            this
        },
        once: function (a, b, c) {
            if (!k(this, "once", a, [b, c]) || !b)
                return this;
            var d = this,
            e = h.once(function () {
                d.off(a, e),
                b.apply(this, arguments)
            });
            return e._callback = b,
            this.on(a, e, c)
        },
        off: function (a, b, c) {
            var d,
            e,
            f,
            g,
            i,
            j,
            l,
            m;
            if (!this._events || !k(this, "off", a, [b, c]))
                return this;
            if (!a && !b && !c)
                return this._events = {},
            this;
            for (g = a ? [a] : h.keys(this._events), i = 0, j = g.length; j > i; i++)
                if (a = g[i], f = this._events[a]) {
                    if (this._events[a] = d = [], b || c)
                        for (l = 0, m = f.length; m > l; l++)
                            e = f[l], (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                    d.length || delete this._events[a]
                }
            return this
        },
        trigger: function (a) {
            if (!this._events)
                return this;
            var b = f.call(arguments, 1);
            if (!k(this, "trigger", a, b))
                return this;
            var c = this._events[a],
            d = this._events.all;
            return c && l(c, b),
            d && l(d, arguments),
            this
        },
        stopListening: function (a, b, c) {
            var d = this._listeners;
            if (!d)
                return this;
            var e = !b && !c;
            "object" == typeof b && (c = this),
            a && ((d = {})[a._listenerId] = a);
            for (var f in d)
                d[f].off(b, c, this), e && delete this._listeners[f];
            return this
        }
    },
    j = /\s+/,
    k = function (a, b, c, d) {
        if (!c)
            return !0;
        if ("object" == typeof c) {
            for (var e in c)
                a[b].apply(a, [e, c[e]].concat(d));
            return !1
        }
        if (j.test(c)) {
            for (var f = c.split(j), g = 0, h = f.length; h > g; g++)
                a[b].apply(a, [f[g]].concat(d));
            return !1
        }
        return !0
    },
    l = function (a, b) {
        var c,
        d = -1,
        e = a.length,
        f = b[0],
        g = b[1],
        h = b[2];
        switch (b.length) {
        case 0:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx);
            return;
        case 1:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f);
            return;
        case 2:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g);
            return;
        case 3:
            for (; ++d < e; )
                (c = a[d]).callback.call(c.ctx, f, g, h);
            return;
        default:
            for (; ++d < e; )
                (c = a[d]).callback.apply(c.ctx, b)
        }
    },
    m = {
        listenTo: "on",
        listenToOnce: "once"
    };
    h.each(m, function (a, b) {
        i[b] = function (b, c, d) {
            var e = this._listeners || (this._listeners = {}),
            f = b._listenerId || (b._listenerId = h.uniqueId("l"));
            return e[f] = b,
            "object" == typeof c && (d = this),
            b[a](c, d, this),
            this
        }
    }),
    i.bind = i.on,
    i.unbind = i.off,
    h.extend(a, i);
    var n = a.Model = function (a, b) {
        var c,
        d = a || {};
        b || (b = {}),
        this.cid = h.uniqueId("c"),
        this.attributes = {},
        h.extend(this, h.pick(b, o)),
        b.parse && (d = this.parse(d, b) || {}),
        (c = h.result(this, "defaults")) && (d = h.defaults({}, d, c)),
        this.set(d, b),
        this.changed = {},
        this.initialize.apply(this, arguments)
    },
    o = ["url", "urlRoot", "collection"];
    h.extend(n.prototype, i, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function () {},
        toJSON: function (a) {
            return h.clone(this.attributes)
        },
        sync: function () {
            return a.sync.apply(this, arguments)
        },
        get: function (a) {
            return this.attributes[a]
        },
        escape: function (a) {
            return h.escape(this.get(a))
        },
        has: function (a) {
            return null != this.get(a)
        },
        set: function (a, b, c) {
            var d,
            e,
            f,
            g,
            i,
            j,
            k,
            l;
            if (null == a)
                return this;
            if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c))
                return !1;
            f = c.unset,
            i = c.silent,
            g = [],
            j = this._changing,
            this._changing = !0,
            j || (this._previousAttributes = h.clone(this.attributes), this.changed = {}),
            l = this.attributes,
            k = this._previousAttributes,
            this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e)
                b = e[d], h.isEqual(l[d], b) || g.push(d), h.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b, f ? delete l[d] : l[d] = b;
            if (!i) {
                g.length && (this._pending = !0);
                for (var m = 0, n = g.length; n > m; m++)
                    this.trigger("change:" + g[m], this, l[g[m]], c)
            }
            if (j)
                return this;
            if (!i)
                for (; this._pending; )
                    this._pending = !1, this.trigger("change", this, c);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function (a, b) {
            return this.set(a, void 0, h.extend({}, b, {
                    unset: !0
                }))
        },
        clear: function (a) {
            var b = {};
            for (var c in this.attributes)
                b[c] = void 0;
            return this.set(b, h.extend({}, a, {
                    unset: !0
                }))
        },
        hasChanged: function (a) {
            return null == a ? !h.isEmpty(this.changed) : h.has(this.changed, a)
        },
        changedAttributes: function (a) {
            if (!a)
                return this.hasChanged() ? h.clone(this.changed) : !1;
            var b,
            c = !1,
            d = this._changing ? this._previousAttributes : this.attributes;
            for (var e in a)
                h.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c
        },
        previous: function (a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function () {
            return h.clone(this._previousAttributes)
        },
        fetch: function (a) {
            a = a ? h.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = this,
            c = a.success;
            return a.success = function (d) {
                return b.set(b.parse(d, a), a) ? (c && c(b, d, a), void b.trigger("sync", b, d, a)) : !1
            },
            L(this, a),
            this.sync("read", this, a)
        },
        save: function (a, b, c) {
            var d,
            e,
            f,
            g = this.attributes;
            if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, d && (!c || !c.wait) && !this.set(d, c))
                return !1;
            if (c = h.extend({
                    validate: !0
                }, c), !this._validate(d, c))
                return !1;
            d && c.wait && (this.attributes = h.extend({}, g, d)),
            void 0 === c.parse && (c.parse = !0);
            var i = this,
            j = c.success;
            return c.success = function (a) {
                i.attributes = g;
                var b = i.parse(a, c);
                return c.wait && (b = h.extend(d || {}, b)),
                h.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c), void i.trigger("sync", i, a, c))
            },
            L(this, c),
            e = this.isNew() ? "create" : c.patch ? "patch" : "update",
            "patch" === e && (c.attrs = d),
            f = this.sync(e, this, c),
            d && c.wait && (this.attributes = g),
            f
        },
        destroy: function (a) {
            a = a ? h.clone(a) : {};
            var b = this,
            c = a.success,
            d = function () {
                b.trigger("destroy", b, b.collection, a)
            };
            if (a.success = function (e) {
                (a.wait || b.isNew()) && d(),
                c && c(b, e, a),
                b.isNew() || b.trigger("sync", b, e, a)
            }, this.isNew())
                return a.success(), !1;
            L(this, a);
            var e = this.sync("delete", this, a);
            return a.wait || d(),
            e
        },
        url: function () {
            var a = h.result(this, "urlRoot") || h.result(this.collection, "url") || K();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function (a, b) {
            return a
        },
        clone: function () {
            return new this.constructor(this.attributes)
        },
        isNew: function () {
            return null == this.id
        },
        isValid: function (a) {
            return this._validate({}, h.extend(a || {}, {
                    validate: !0
                }))
        },
        _validate: function (a, b) {
            if (!b.validate || !this.validate)
                return !0;
            a = h.extend({}, this.attributes, a);
            var c = this.validationError = this.validate(a, b) || null;
            return c ? (this.trigger("invalid", this, c, h.extend(b || {}, {
                        validationError: c
                    })), !1) : !0
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    h.each(p, function (a) {
        n.prototype[a] = function () {
            var b = f.call(arguments);
            return b.unshift(this.attributes),
            h[a].apply(h, b)
        }
    });
    var q = a.Collection = function (a, b) {
        b || (b = {}),
        b.url && (this.url = b.url),
        b.model && (this.model = b.model),
        void 0 !== b.comparator && (this.comparator = b.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        a && this.reset(a, h.extend({
                silent: !0
            }, b))
    },
    r = {
        add: !0,
        remove: !0,
        merge: !0
    },
    s = {
        add: !0,
        merge: !1,
        remove: !1
    };
    h.extend(q.prototype, i, {
        model: n,
        initialize: function () {},
        toJSON: function (a) {
            return this.map(function (b) {
                return b.toJSON(a)
            })
        },
        sync: function () {
            return a.sync.apply(this, arguments)
        },
        add: function (a, b) {
            return this.set(a, h.defaults(b || {}, s))
        },
        remove: function (a, b) {
            a = h.isArray(a) ? a.slice() : [a],
            b || (b = {});
            var c,
            d,
            e,
            f;
            for (c = 0, d = a.length; d > c; c++)
                f = this.get(a[c]), f && (delete this._byId[f.id], delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
            return this
        },
        set: function (a, b) {
            b = h.defaults(b || {}, r),
            b.parse && (a = this.parse(a, b)),
            h.isArray(a) || (a = a ? [a] : []);
            var c,
            d,
            f,
            i,
            j,
            k = b.at,
            l = this.comparator && null == k && b.sort !== !1,
            m = h.isString(this.comparator) ? this.comparator : null,
            n = [],
            o = [],
            p = {};
            for (c = 0, d = a.length; d > c; c++)
                (f = this._prepareModel(a[c], b)) && ((i = this.get(f)) ? (b.remove && (p[i.cid] = !0), b.merge && (i.set(f.attributes, b), l && !j && i.hasChanged(m) && (j = !0))) : b.add && (n.push(f), f.on("all", this._onModelEvent, this), this._byId[f.cid] = f, null != f.id && (this._byId[f.id] = f)));
            if (b.remove) {
                for (c = 0, d = this.length; d > c; ++c)
                    p[(f = this.models[c]).cid] || o.push(f);
                o.length && this.remove(o, b)
            }
            if (n.length && (l && (j = !0), this.length += n.length, null != k ? g.apply(this.models, [k, 0].concat(n)) : e.apply(this.models, n)), j && this.sort({
                    silent: !0
                }), b.silent)
                return this;
            for (c = 0, d = n.length; d > c; c++)
                (f = n[c]).trigger("add", f, this, b);
            return j && this.trigger("sort", this, b),
            this
        },
        reset: function (a, b) {
            b || (b = {});
            for (var c = 0, d = this.models.length; d > c; c++)
                this._removeReference(this.models[c]);
            return b.previousModels = this.models,
            this._reset(),
            this.add(a, h.extend({
                    silent: !0
                }, b)),
            b.silent || this.trigger("reset", this, b),
            this
        },
        push: function (a, b) {
            return a = this._prepareModel(a, b),
            this.add(a, h.extend({
                    at: this.length
                }, b)),
            a
        },
        pop: function (a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a),
            b
        },
        unshift: function (a, b) {
            return a = this._prepareModel(a, b),
            this.add(a, h.extend({
                    at: 0
                }, b)),
            a
        },
        shift: function (a) {
            var b = this.at(0);
            return this.remove(b, a),
            b
        },
        slice: function (a, b) {
            return this.models.slice(a, b)
        },
        get: function (a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a]
        },
        at: function (a) {
            return this.models[a]
        },
        where: function (a, b) {
            return h.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function (b) {
                for (var c in a)
                    if (a[c] !== b.get(c))
                        return !1;
                return !0
            })
        },
        findWhere: function (a) {
            return this.where(a, !0)
        },
        sort: function (a) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}),
            h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this)),
            a.silent || this.trigger("sort", this, a),
            this
        },
        sortedIndex: function (a, b, c) {
            b || (b = this.comparator);
            var d = h.isFunction(b) ? b : function (a) {
                return a.get(b)
            };
            return h.sortedIndex(this.models, a, d, c)
        },
        pluck: function (a) {
            return h.invoke(this.models, "get", a)
        },
        fetch: function (a) {
            a = a ? h.clone(a) : {},
            void 0 === a.parse && (a.parse = !0);
            var b = a.success,
            c = this;
            return a.success = function (d) {
                var e = a.reset ? "reset" : "set";
                c[e](d, a),
                b && b(c, d, a),
                c.trigger("sync", c, d, a)
            },
            L(this, a),
            this.sync("read", this, a)
        },
        create: function (a, b) {
            if (b = b ? h.clone(b) : {}, !(a = this._prepareModel(a, b)))
                return !1;
            b.wait || this.add(a, b);
            var c = this,
            d = b.success;
            return b.success = function (e) {
                b.wait && c.add(a, b),
                d && d(a, e, b)
            },
            a.save(null, b),
            a
        },
        parse: function (a, b) {
            return a
        },
        clone: function () {
            return new this.constructor(this.models)
        },
        _reset: function () {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function (a, b) {
            if (a instanceof n)
                return a.collection || (a.collection = this), a;
            b || (b = {}),
            b.collection = this;
            var c = new this.model(a, b);
            return c._validate(a, b) ? c : (this.trigger("invalid", this, a, b), !1)
        },
        _removeReference: function (a) {
            this === a.collection && delete a.collection,
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function (a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }
    });
    var t = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    h.each(t, function (a) {
        q.prototype[a] = function () {
            var b = f.call(arguments);
            return b.unshift(this.models),
            h[a].apply(h, b)
        }
    });
    var u = ["groupBy", "countBy", "sortBy"];
    h.each(u, function (a) {
        q.prototype[a] = function (b, c) {
            var d = h.isFunction(b) ? b : function (a) {
                return a.get(b)
            };
            return h[a](this.models, d, c)
        }
    });
    var v = a.View = function (a) {
        this.cid = h.uniqueId("view"),
        this._configure(a || {}),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    },
    w = /^(\S+)\s*(.*)$/,
    x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(v.prototype, i, {
        tagName: "div",
        $: function (a) {
            return this.$el.find(a)
        },
        initialize: function () {},
        render: function () {
            return this
        },
        remove: function () {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function (b, c) {
            return this.$el && this.undelegateEvents(),
            this.$el = b instanceof a.$ ? b : a.$(b),
            this.el = this.$el[0],
            c !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function (a) {
            if (!a && !(a = h.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                if (h.isFunction(c) || (c = this[a[b]]), c) {
                    var d = b.match(w),
                    e = d[1],
                    f = d[2];
                    c = h.bind(c, this),
                    e += ".delegateEvents" + this.cid,
                    "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c)
                }
            }
            return this
        },
        undelegateEvents: function () {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _configure: function (a) {
            this.options && (a = h.extend({}, h.result(this, "options"), a)),
            h.extend(this, h.pick(a, x)),
            this.options = a
        },
        _ensureElement: function () {
            if (this.el)
                this.setElement(h.result(this, "el"), !1);
            else {
                var b = h.extend({}, h.result(this, "attributes"));
                this.id && (b.id = h.result(this, "id")),
                this.className && (b["class"] = h.result(this, "className"));
                var c = a.$("<" + h.result(this, "tagName") + ">").attr(b);
                this.setElement(c, !1)
            }
        }
    }),
    a.sync = function (b, c, d) {
        var e = y[b];
        h.defaults(d || (d = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        
        if (e === "POST" && c.attributes.forceGetURLTemplate) {
            e = "GET";
            var origURL = c.urlRoot(), appendix = c.attributes.forceGetURLTemplate;
            Object.entries(c.attributes).forEach(([key, value]) => {
                if (appendix.includes(key)) appendix = appendix.replace(":" + key, value);
            });
            d.url = origURL + appendix;
            c.attributes = undefined;
        }
        
        var f = {
            type: e,
            dataType: "json"
        };
        if (d.url || (f.url = h.result(c, "url") || K()), null != d.data || !c || "create" !== b && "update" !== b && "patch" !== b || (f.contentType = "application/json", f.data = JSON.stringify(d.attrs || c.toJSON(d))), d.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", f.data = f.data ? {
                    model: f.data
                }
                 : {}), d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            f.type = "POST",
            d.emulateJSON && (f.data._method = e);
            var g = d.beforeSend;
            d.beforeSend = function (a) {
                return a.setRequestHeader("X-HTTP-Method-Override", e),
                g ? g.apply(this, arguments) : void 0
            }
        }
        "GET" === f.type || d.emulateJSON || (f.processData = !1),
        "PATCH" !== f.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (f.xhr = function () {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var i = d.xhr = a.ajax(h.extend(f, d));
        return c.trigger("request", c, i, d),
        i
    };
    var y = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function () {
        return a.$.ajax.apply(a.$, arguments)
    };
    var z = a.Router = function (a) {
        a || (a = {}),
        a.routes && (this.routes = a.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    },
    A = /\((.*?)\)/g,
    B = /(\(\?)?:\w+/g,
    C = /\*\w+/g,
    D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(z.prototype, i, {
        initialize: function () {},
        route: function (b, c, d) {
            h.isRegExp(b) || (b = this._routeToRegExp(b)),
            h.isFunction(c) && (d = c, c = ""),
            d || (d = this[c]);
            var e = this;
            return a.history.route(b, function (f) {
                var g = e._extractParameters(b, f);
                d && d.apply(e, g),
                e.trigger.apply(e, ["route:" + c].concat(g)),
                e.trigger("route", c, g),
                a.history.trigger("route", e, c, g)
            }),
            this
        },
        navigate: function (b, c) {
            return a.history.navigate(b, c),
            this
        },
        _bindRoutes: function () {
            if (this.routes) {
                this.routes = h.result(this, "routes");
                for (var a, b = h.keys(this.routes); null != (a = b.pop()); )
                    this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function (a) {
            return a = a.replace(D, "\\$&").replace(A, "(?:$1)?").replace(B, function (a, b) {
                return b ? a : "([^/]+)"
            }).replace(C, "(.*?)"),
            new RegExp("^" + a + "$")
        },
        _extractParameters: function (a, b) {
            var c = a.exec(b).slice(1);
            return h.map(c, function (a) {
                return a ? decodeURIComponent(a) : null
            })
        }
    });
    var E = a.History = function () {
        this.handlers = [],
        h.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    },
    F = /^[#\/]|\s+$/g,
    G = /^\/+|\/+$/g,
    H = /msie [\w.]+/,
    I = /\/$/;
    E.started = !1,
    h.extend(E.prototype, i, {
        interval: 50,
        getHash: function (a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function (a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = this.location.pathname;
                    var c = this.root.replace(I, "");
                    a.indexOf(c) || (a = a.substr(c.length))
                } else
                    a = this.getHash();
            return a.replace(F, "")
        },
        start: function (b) {
            if (E.started)
                throw new Error("Backbone.history has already been started");
            E.started = !0,
            this.options = h.extend({}, {
                root: "/"
            }, this.options, b),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(),
            d = document.documentMode,
            e = H.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(G, "/"),
            e && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(c)),
            this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !e ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = c;
            var f = this.location,
            g = f.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !g ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && g && f.hash && (this.fragment = this.getHash().replace(F, ""), this.history.replaceState({}, document.title, this.root + this.fragment + f.search)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function () {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            clearInterval(this._checkUrlInterval),
            E.started = !1
        },
        route: function (a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function (a) {
            var b = this.getFragment();
            return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))),
            b === this.fragment ? !1 : (this.iframe && this.navigate(b), void(this.loadUrl() || this.loadUrl(this.getHash())))
        },
        loadUrl: function (a) {
            var b = this.fragment = this.getFragment(a),
            c = h.any(this.handlers, function (a) {
                return a.route.test(b) ? (a.callback(b), !0) : void 0
            });
            return c
        },
        navigate: function (a, b) {
            if (!E.started)
                return !1;
            if (b && b !== !0 || (b = {
                        trigger: b
                    }), a = this.getFragment(a || ""), this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState)
                    this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace),
                    this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                }
                b.trigger && this.loadUrl(a)
            }
        },
        _updateHash: function (a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else
                a.hash = "#" + b
        }
    }),
    a.history = new E;
    var J = function (a, b) {
        var c,
        d = this;
        c = a && h.has(a, "constructor") ? a.constructor : function () {
            return d.apply(this, arguments)
        },
        h.extend(c, d, b);
        var e = function () {
            this.constructor = c
        };
        return e.prototype = d.prototype,
        c.prototype = new e,
        a && h.extend(c.prototype, a),
        c.__super__ = d.prototype,
        c
    };
    n.extend = q.extend = z.extend = v.extend = E.extend = J;
    var K = function () {
        throw new Error('A "url" property or function must be specified')
    },
    L = function (a, b) {
        var c = b.error;
        b.error = function (d) {
            c && c(a, d, b),
            a.trigger("error", a, d, b)
        }
    }
}).call(this);
define("backbone", ["underscore", "jquery"], (function (global) {
        return function () {
            var ret,
            fn;
            return ret || global.Backbone;
        };
    }
        (this)));

/*
/*
 * LoadManager by Yasunobu Ikeda. April 20, 2010
 * Visit http://clockmaker.jp/ for documentation, updates and examples.
 *
 *
 * Copyright (c) 2010 Yasunobu Ikeda
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function LoadManager() {}
void 0 == this.lmlib && (lmlib = {}), lmlib.LoadingData = function (a, b) {
    this.url = a,
    this.extra = b,
    this.image = null
}, lmlib.CompleteEvent = function () {}, lmlib.CompleteEvent.prototype = {
    target: null
}, lmlib.ProgressEvent = function () {
    this.itemsLoaded = 0,
    this.itemsTotal = 0,
    this.percent = 0,
    this.data = null,
    this.target = null
}, lmlib.ErrorEvent = function () {
    this.data = null,
    this.target = null
}, LoadManager.LOG_VERBOSE = 0, LoadManager.LOG_SILENT = 10, LoadManager.LOG_ERRORS = 4, LoadManager._delegate = function (a, b) {
    var c = function () {
        return a.apply(b, arguments)
    };
    return c.func = a,
    c.thisObj = b,
    c
}, LoadManager.prototype = {
    _queueArr: [],
    _registerArr: [],
    _successArr: [],
    _errorArr: [],
    _isStarted: !1,
    _isRunning: !1,
    _isFinished: !1,
    _currentQueues: [],
    _queueCount: 0,
    numConnections: 6,
    onProgress: null,
    onComplete: null,
    onError: null,
    logLevel: LoadManager.LOG_SILENT,
    getIsRunning: function () {
        return this._isRunning
    },
    getIsFinished: function () {
        return this._isFinished
    },
    getSuccessItems: function () {
        return this._successArr
    },
    getFailedItems: function () {
        return this._errorArr
    },
    getPercent: function () {
        var a = (this._successArr.length + this._errorArr.length) / this._registerArr.length;
        return a = Math.min(1, Math.max(0, a))
    },
    add: function (a, b) {
        this._isStarted && this._log("既にLoadManagerインスタンスがstartしているため、add()することができません。", LoadManager.LOG_ERRORS);
        var c = new lmlib.LoadingData(a, b);
        return this._registerArr.push(c),
        c
    },
    get: function (a) {
        for (var b = 0; b < this._registerArr.length; b++)
            if (this._registerArr[b].url == a)
                return this._registerArr[b];
        return null
    },
    start: function (a) {
        if (this._isStarted)
            throw "既にLoadManagerインスタンスがstartしているため、start()することができません。";
        "number" == typeof a && (this.numConnections = a),
        this._queueArr = this._registerArr.concat(),
        this._execute(this._queueArr[0]),
        this._isStarted = !0
    },
    _loadNextImage: function () {
        for (; this.numConnections > this._queueCount && 0 != this._queueArr.length; ) {
            var a = this._queueArr.shift();
            this._currentQueues.push(a),
            this._execute(a),
            this._queueCount++
        }
        this._isRunning = !0
    },
    _execute: function (a) {
        null == a.image && (a.image = new Image);
        var b = this;
        a.image.onload = function () {
            if (b._log("[LM - Success] " + a.url, LoadManager.LOG_VERBOSE), b._successArr.push(a), "function" == typeof a.callbackFunc && a.callbackFunc(a.image), b._queueCount--, "function" == typeof b.onProgress) {
                var c = new lmlib.ProgressEvent;
                c.target = b,
                c.itemsLoaded = b._successArr.length,
                c.itemTotal = b._registerArr.length,
                c.percent = b.getPercent(),
                c.data = a,
                b.onProgress(c)
            }
            b._checkFinished() || b._delayFunc()
        },
        a.image.onerror = function () {
            if (b._log("[LM - Error] " + a.url, LoadManager.LOG_VERBOSE), b._errorArr.push(a), b._queueCount--, "function" == typeof b.onError) {
                var c = new lmlib.ErrorEvent;
                c.target = this,
                c.data = a,
                b.onError(c)
            }
            b._checkFinished() || b._delayFunc()
        },
        a.image.src = a.url
    },
    _checkFinished: function () {
        if (this._successArr.length + this._errorArr.length == this._registerArr.length) {
            if (this._isRunning = !1, this._isFinished = !0, "function" == typeof this.onComplete) {
                var a = new lmlib.CompleteEvent;
                a.target = this,
                this.onComplete(a)
            }
            return !0
        }
        return !1
    },
    _delayFunc: function () {
        setTimeout(LoadManager._delegate(this._loadNextImage, this), 16)
    },
    _log: function (a, b) {
        this.logLevel <= b
    }
}, window.LoadManager = LoadManager;
define("loadmanager", (function (global) {
        return function () {
            var ret,
            fn;
            return ret || global.LoadManager;
        };
    }
        (this)));

"Pex: https://github.com/PexJS/PexJS";
"version: ec5136d(sjis)";
!function () {
    var a = "1.1.0",
    b = function (a) {},
    c = function (a) {
        throw a
    },
    d = function () {},
    e = function (a) {
        if (a.constructor == Array)
            return [].concat(a);
        var b = {};
        for (var c in a)
            b[c] = a[c];
        return b
    },
    f = {
        shapeDetail: null,
        partialDraw: !1,
        delayEval: !0,
        fixRatio: !0,
        width: null,
        height: null,
        transparent: !1,
        fps: null,
        frameCallback: {},
        disableFrameSkip: !1,
        cacheColoredImage: !0,
        stopOnStart: !1,
        enableButton: !1,
        enableTouch: !1,
        debug: !1,
        suppressLog: {},
        origin: null,
        frameRect: null,
        compileAction: !0,
        operation: {},
        cacheMaxShapeSize: null,
        cacheMaxTotalSize: null,
        onerror: null,
        enableStyleText: !1,
        _enableWorkaroundForUnicolor: !1,
        colorLevels: 16,
        swfBinary: null
    },
    g = {};
    g.Ub = 0,
    g._b = 1,
    g.Nb = 2,
    g.Xb = 4,
    g.Cb = 6,
    g.Hb = 7,
    g.Wb = 8,
    g.$b = 9,
    g.Kb = 10,
    g.Rb = 11,
    g.Tb = 12,
    g.Fb = 20,
    g.Db = 21,
    g.Ob = 22,
    g.Yb = 26,
    g.Zb = 28,
    g.Pb = 32,
    g.Sb = 33,
    g.Ib = 34,
    g.Eb = 35,
    g.Gb = 36,
    g.Jb = 37,
    g.Qb = 39,
    g.Vb = 43,
    g.Mb = 46,
    g.Lb = 48;
    var h = {};
    h.Ab = 0,
    h.tb = 1,
    h.Bb = 2;
    var i = {};
    i.zb = 0,
    i.ub = 16,
    i.xb = 18,
    i.yb = 64,
    i.sb = 65,
    i.wb = 66,
    i.vb = 67;
    var j = {};
    j.S = 4,
    j.X = 5,
    j.V = 6,
    j.fb = 7,
    j.ob = 8,
    j.gb = 9,
    j.W = 23,
    j.o = 10,
    j.mb = 11,
    j.R = 12,
    j.w = 13,
    j.A = 14,
    j.M = 15,
    j.q = 16,
    j.U = 17,
    j.T = 18,
    j.ib = 19,
    j.kb = 20,
    j.jb = 21,
    j.nb = 24,
    j.G = 28,
    j.db = 29,
    j.cb = 32,
    j.hb = 33,
    j.C = 34,
    j.ab = 35,
    j.v = 36,
    j._ = 37,
    j.pb = 38,
    j.eb = 39,
    j.z = 40,
    j.lb = 41,
    j.B = 45,
    j.$ = 48,
    j.Q = 49,
    j.u = 50,
    j.r = 51,
    j.D = 52,
    j.P = 53,
    j.O = 54,
    j.N = 55,
    j.Z = 76,
    j.I = 129,
    j.E = 131,
    j.qb = 138,
    j.bb = 139,
    j.H = 140,
    j.Y = 150,
    j.L = 153,
    j.K = 157,
    j.s = 158,
    j.J = 159,
    j.rb = 141,
    j.F = 154;
    var k = function e(a) {
        var b = a.charCodeAt(0);
        return e.Ch = e.Ch || new RegExp("[｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ]"),
        b >= 32 && 126 >= b || e.Ch.test(a)
    },
    l = function (a, b, c) {
        return [a[0] * b + a[2] * c + 20 * a[4], a[1] * b + a[3] * c + 20 * a[5]]
    },
    m = function (b, d, e) {
        0 != a.indexOf(b.JSON_VERSION) && 1 != a.indexOf(b.JSON_VERSION) && c("src object is not compatible with this Pex version. Please regenerate new one using parse_swf."),
        d || (d = {});
        for (var f = {
                Af: b.Af,
                Ii: [],
                Pd: !0,
                loadingImageCount: 0
            }, g = b.Ii, h = 0, i = g.length; i > h; h++) {
            var j = g[h];
            if (j.hasOwnProperty("img")) {
                var k = d[j.img] || document.createElement("img");
                k.src || (k.onload = function () {
                    0 === --f.loadingImageCount && e && e()
                }, k.src = j.img, ++f.loadingImageCount),
                j.img = k
            }
            f.Ii.push(j)
        }
        return 0 === f.loadingImageCount && e && e(),
        f
    },
    n = function () {
        this.data = {},
        this.Je = [],
        this.debug = !1,
        this.suppressFPS = !1,
        this.af = 0,
        this.rg = 0;
        var a = this;
        !function c() {
            setTimeout(c, 1e3 / 60);
            for (var d = Date.now(), e = !1, f = 0; f < a.Je.length; f++)
                e = a.Je[f].Qi(d) || e;
            e && a.af++;
            var g = a.rg = a.rg || d;
            d - g > 1e3 && (a.debug && !a.suppressFPS && b("fps:" + 1e3 * a.af / (d - g)), a.af = 0, a.rg = d)
        }
        ()
    };
    n.rf = function () {
        var a = n;
        return a.bc ? a.bc : a.bc = new a
    },
    n.prototype.Eg = function (a, b, d) {
        var e;
        if ("string" == typeof a) {
            var f = d && d.name || a;
            if (e = this.data[f]) {
                var g = new p(e, b, d);
                return e.Ic(function (a) {
                    return function () {
                        a.me.apply(a, arguments)
                    }
                }
                    (g)),
                this.Je.push(g),
                g
            }
            if ("string" == typeof f) {
                if (!d || !d.ig) {
                    var h = new Db(d),
                    g = new p(h, b, d);
                    return h.Eg(a, function (a) {
                        return function () {
                            a.me.apply(a, arguments)
                        }
                    }
                        (g)),
                    d && d.solo || (this.data[f] = h),
                    this.Je.push(g),
                    g
                }
                c("unimplemented json reader")
            }
            return null
        }
        if ("object" == typeof a) {
            e = m(a, d && d.Kf);
            var g = new p(e, b, d);
            return g.me(),
            this.Je.push(g),
            g
        }
        return null
    },
    n.prototype.Gj = function (a) {
        for (var b = this.Je, c = b.length, d = 0; c > d; d++)
            if (b[d] == a)
                return b.splice(d, 1), !0;
        return !1
    };
    var o = function (a, c, d) {
        o.Te = o.Te || Date.now(),
        d = d || {};
        var e = n.rf();
        e.debug = e.debug || d.debug;
        for (var g in f)
            g in d || (d[g] = f[g]);
        for (var g in d)
            !g in f && d.debug && b("unknown option: " + g);
        return e.suppressFPS |= d.suppressLog.fps,
        e.Eg(a, c, d)
    };
    window.Pex = o;
    var p = function (a, b, c) {
        this.le = a,
        this.Qd = "string" == typeof b ? document.getElementById(b) : b,
        this.ch = q(c),
        this.canvas = null,
        c.partialDraw ? this.Ih = new ab(this) : this.Ih = new _(this),
        this.onCreateMC = [],
        this.newMcList = [],
        this.kj = new y(this),
        this.ue = {
            name: ""
        },
        this.Qg = {},
        this.$c = null,
        this.Ri = [],
        this.ag = !1,
        this.Sc = null,
        this.jd = [],
        this.Ui = new L(this);
        var d = this;
        this.readyCallbacks = [],
        this.Fj = function () {
            for (var a = d.readyCallbacks, b = a.length, c = 0; b > c; c++)
                a[c]();
            d.Fj = null
        },
        this.noskip = !1,
        this.frameSkipRatio = 0,
        this.logicalRenderCount = 0,
        this.Sf()
    };
    p.prototype.Sf = function () {
        var a = this.ch,
        b = this.le,
        c = new x;
        this.Rc = new r(this, c, b.Ii),
        this.Qh = new t(this, c, null, null),
        this.Ri.push(this.Qh);
        var d = b.Af;
        this.Qh.yh.uc = d.df,
        this.mf = a.fps || d.mf,
        d.nf && this.Ih._h(d.nf),
        this.df = 0,
        this.renderCount = 0,
        this.Vh = !a.stopOnStart
    },
    p.prototype.me = function () {
        var a = this.le;
        a.Pd && (this.ch.debug && b("parse completed: " + (Date.now() - o.Te)), this.Fg = !0);
        var c = a.Af;
        this.Qh && (this.Qh.yh.uc = c.df),
        this.mf = this.ch.fps || c.mf,
        this.Rc.Nc(this.ue),
        c.nf && this.Ih._h(c.nf),
        this.Ih.Ej && this.Ih.Ej()
    },
    p.prototype.Qi = function (a) {
        var c,
        d = this.df;
        if (this.stopFrame)
            c = Number.MAX_VALUE;
        else if (this.yi) {
            if (c = this.mf * (a - this.yi) / 1e3 | 0, this.frameSkipRatio) {
                var e = c * (1 - this.frameSkipRatio) | 0;
                if (e <= this.logicalRenderCount)
                    return;
                this.logicalRenderCount = e
            }
        } else
            this.yi = a, c = 1;
        if (!(d == c || this.le.loadingImageCount > 0)) {
            if (this.Fj && this.Fg && this.Fj(), !this.stopFrame) {
                if (!this.Vh)
                    return;
                (1 >= d || this.ch.disableFrameSkip && c - d > 1 || c - d > 30) && (c = d + 1, this.yi = a - d / this.mf * 1e3)
            }
            for (var f = !1, g = !1, h = []; c > d; ) {
                d++;
                var i;
                if (!this.kj.Vh) {
                    i = this.ag ? this.Si : this.Ri.length - 1;
                    for (var j = i; j >= 0; j--) {
                        var k = this.Ri[j];
                        if (k.dg) {
                            var l = 1;
                            if (k.yh.dc < k.yh.uc && (l = k.yh.dc + 1), !this.gotoFrame(k, l))
                                return this.ch.debug && b("gotoFrame: try to go to non-loading frame at mclist"), this.ag = !0, this.Si = j, !1
                        }
                        k.onEnterFrames.length && h.push(k)
                    }
                    for (var m = h.length, j = 0; m > j; j++)
                        for (var k = h[j], n = k.Cc || "/", o = k.yh.dc, p = k.onEnterFrames, q = p.length, r = 0; q > r; r++)
                            p[r](this.Sc, n, o);
                    h = []
                }
                if (!this.kj.Uh())
                    return this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"), !1;
                if (this.ch.enableButton && this.Bj() && !this.kj.Uh())
                    return this.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"), !1;
                if (this.onCreateMC.length)
                    for (var s = this.onCreateMC, t = s.length, u = this.newMcList, m = u.length, j = 0; m > j; j++)
                        for (var n = u[j].Cc || "/", r = 0; t > r; r++)
                            s[r](this.Sc, n);
                if (this.newMcList = [], this.ag = !1, g = !0, this.noskip && (this.ch.debug && b("noskip frame and force rendering"), this.Ih.Hh(), f = !0, this.noskip = !1), this.stopFrame) {
                    var v = this.Qh.yh.dc,
                    w = this.stopFrame % this.Qh.yh.uc;
                    if (0 == w && (w = this.Qh.yh.uc), v == w) {
                        this.lastStopFrame = this.stopFrame,
                        this.stopFrame = 0;
                        break
                    }
                }
            }
            return this.df = d,
            f || this.Ih.Hh(),
            g && this.renderCount++,
            !0
        }
    },
    p.prototype.Bj = function () {
        for (var a = !1, b = this.jd, c = b.length - 1; c >= 0; c--) {
            var d = b[c],
            e = d.Pg;
            if (!d.Yf) {
                var f = !1;
                for (var g in e.fd) {
                    if (this.Ui._f(g) && d.Zf(!0)) {
                        this.kj.Hc(d.nh, e.fd[g]),
                        f = !0;
                        break
                    }
                    if ("sh" == g && this.Ui.Vg) {
                        if (d.$f(this.Ui.Vg.x, this.Ui.Vg.y)) {
                            this.kj.Hc(d.nh, e.fd[g]),
                            f = !0;
                            break
                        }
                    } else if ("Dh" == g && this.Ui.Wg && d.$f(this.Ui.Wg.x, this.Ui.Wg.y)) {
                        this.kj.Hc(d.nh, e.fd[g]),
                        f = !0;
                        break
                    }
                }
                if (f) {
                    a = !0;
                    break
                }
            }
        }
        return this.Ui.Cd(),
        this.Ui.Dd(),
        a
    },
    p.prototype.gotoFrame = function (a, b, c) {
        b = +b;
        var d = a.yh.dc;
        b = 1 > b ? 1 : b;
        var e = !0;
        if (b > a.yh.uc && (b = a.yh.uc, e = !1), a.Yf || b === d)
            return !0;
        if (b > a.yh.gc)
            return !1;
        var f = !1;
        b == d + 1 && (f = !0);
        var g = a.Pg;
        a.yh.dc = b;
        var h = g.bf[b];
        if (e && h)
            for (var i = h.length, j = 0; i > j; j++)
                this.kj.Hc(a, h[j]);
        if (f) {
            for (var k = g.ef[b], i = k.length, j = 0; i > j; j++)
                a.Fh(k[j]);
            for (var l = g.cf[b], m = l.length, j = 0; m > j; j++)
                a.ae(b, l[j]);
            var n = g.gf[b],
            o = !1;
            for (var j in n)
                if (n[j]) {
                    o = !0;
                    var p = a.zd[j],
                    q = g.hf[b][j].Mg;
                    p && !p.ag && q && p.ai(q)
                }
            o && (a.og = this.df)
        } else {
            for (var r = g.ff[d], s = r.length, t = g.ff[b], u = t.length, j = 0, v = 0, l = [], w = []; u > j && s > v; ) {
                var x = t[j],
                y = r[v];
                x === y ? (w[w.length] = x, j++, v++) : y > x ? (l[l.length] = x, j++) : (a.Fh(y), v++)
            }
            if (j != u)
                for (; u > j; )
                    l.push(t[j++]);
            else if (v != s)
                for (; s > v; )
                    a.Fh(r[v++]);
            for (var i = l.length, j = 0; i > j; j++) {
                var z = l[j];
                a.ae(b, z, g.Df[z].bd != b)
            }
            a.og = this.df,
            i = w.length;
            for (var j = 0; i > j; j++) {
                var z = w[j],
                p = a.zd[z],
                q = g.hf[b][z].Mg;
                p && !p.ag && q && p.ai(q)
            }
        }
        var A = this.ch.frameCallback,
        B = A[a.yh.jc];
        if (B || (B = A["" === a.Cc ? "/" : a.Cc]), B) {
            var C = g.jf;
            for (var D in C)
                b == C[D] && B[D] && B[D](this);
            var E = B[b] || b == a.yh.uc && B.last;
            E && E(this)
        }
        return g.noskipFrameList[b] && (this.noskip = !0),
        !0
    },
    p.prototype.getAPI = function () {
        return this.Sc || (this.Sc = new I(this))
    },
    p.prototype.getFPS = function () {
        return this.mf
    },
    p.prototype.setFPS = function (a) {
        this.yi && (this.yi = Date.now() - this.df / a * 1e3),
        this.mf = this.ch.fps = a
    },
    p.prototype.getFrameSkipRatio = function () {
        return this.frameSkipRatio
    },
    p.prototype.setFrameSkipRatio = function (a) {
        return this.logicalRenderCount = this.mf * (Date.now() - this.yi) * (1 - a) / 1e3 | 0,
        this.frameSkipRatio = a,
        !0
    };
    var q = function (a) {
        var b = function (a, c) {
            for (var d in a) {
                var e = a[d];
                e instanceof HTMLElement || e instanceof Function ? c[d] = e : e instanceof Array ? (c[d] = [], b(e, c[d])) : e instanceof Object ? (c[d] = {}, b(e, c[d])) : c[d] = e
            }
        },
        c = {};
        return b(a, c),
        c
    },
    r = function (a, b, c, d, e) {
        this.Ie = a,
        this.Pg = b,
        this.Ii = c,
        this.hd = d,
        this.gd = e,
        this.Qc = 0,
        this.af = 1,
        this.Cf = 0,
        this.Ef = [],
        this.cd = [],
        this.ne = [],
        this.Gf = {},
        this.Ff = {},
        this.ug = {}
    };
    r.prototype.Nc = function (a) {
        this.Ii ? this.Pc(a) : this.Oc(a)
    },
    r.prototype.Pc = function (a) {
        var b = this.Ie,
        c = this.Pg,
        e = this.Ii,
        f = e.length;
        a: for (var h = this.Qc; f > h; h++) {
            var i = e[h];
            switch (i.aj) {
            case g.Ub:
                c.wj = this.af - 1;
                break a;
            case g.$b:
                !b.ch.transparent && (b.$c || (b.$c = i.Kd));
                break;
            case g.Vb:
                c.jf[i.name] = this.af,
                "_noskip" === i.name.toLowerCase() && (c.noskipFrameList[this.af] = !0);
                break;
            case g._b:
                var j = this.af;
                c.ff[j] = [].concat(this.Ef),
                c.cf[j] = this.cd,
                c.ef[j] = this.ne,
                c.gf[j] = this.Ff,
                this.cd = [],
                this.ne = [],
                this.Ff = {};
                var k = {};
                for (var l in this.Gf)
                    k[l] = this.Gf[l];
                c.hf[j] = k,
                this.af++;
                break;
            case g.Yb:
                var m = i.wd,
                n = (i.re, this.ug[i.re]),
                o = m || this.Gf[n].wd,
                p = a[o];
                if (p.aj == g.Mb || o >= 65536 && 4294967295 >= o) {
                    o >= 65536 && (p = a[p.dh]);
                    var q = {},
                    r = this.Gf[n];
                    for (var l in i)
                        q[l] = i[l] || r && r[l];
                    q.wd = s(b, p, i.Ah, a),
                    i = q,
                    m = q.wd
                }
                if (i.Xg && !m) {
                    var t = this.Gf[n],
                    u = {};
                    for (var l in i)
                        u[l] = i[l];
                    for (var l in t)
                        null == i[l] && null != t[l] && (u[l] = t[l]);
                    this.Gf[n] = u,
                    this.Ff[n] = !0
                } else {
                    if (i.Xg) {
                        var t = this.Gf[n],
                        u = {};
                        for (var l in i)
                            u[l] = i[l];
                        for (var l in t)
                            null == i[l] && null != t[l] && (u[l] = t[l]);
                        i = u,
                        this.Ef.splice(this.Ef.indexOf(n), 1),
                        this.ne.push(n)
                    }
                    var v = ++this.Cf;
                    this.Ef.push(v),
                    this.Gf[v] = i,
                    this.cd.push(v);
                    var w = {};
                    w.id = v,
                    w.wd = i.wd,
                    w.tg = i.re,
                    w.bd = this.af,
                    w.rh = i,
                    w.Dj = {},
                    c.Df[v] = w,
                    this.ug[i.re] = v
                }
                break;
            case g.Zb:
                var n = this.ug[i.re];
                this.Ef.splice(this.Ef.indexOf(n), 1),
                this.ne.push(n),
                delete this.Gf[n],
                delete this.ug[i.re];
                break;
            case g.Tb:
                var x = (b.ch.compileAction ? z : A)(i.Gc, b.ch.debug);
                (c.bf[this.af] || (c.bf[this.af] = [])).push(x);
                break;
            case g.Wb:
                break;
            case g.Cb:
            case g.Db:
            case g.Eb:
            case g.Fb:
            case g.Gb:
            case g.Nb:
            case g.Ob:
            case g.Pb:
            case g.Hb:
            case g.Ib:
            case g.Kb:
            case g.Lb:
            case g.Rb:
            case g.Sb:
            case g.Jb:
            case g.Mb:
            case g.Qb:
                a[i.id] = i;
                break;
            default:
                d("Analyzer: unknown tag detected [" + i.aj + "]")
            }
        }
        this.Qc = f,
        c.of = this.af - 1,
        c.Cf = this.Cf,
        c.bj()
    },
    r.prototype.Oc = function (a) {
        for (var b = (this.Ie, this.Pg), c = this.hd, d = this.gd, e = [null, [], [], [], []], f = [null, [], [], [], []], h = [null, [], [], [], []], i = [null, {}, {}, {}, {}
            ], j = c.length, k = 0; j > k; k++) {
            var l = c[k],
            m = l.wd,
            n = (a[m], ++this.Cf),
            o = null,
            p = {
                aj: g.Yb,
                Xg: 0,
                re: l.re,
                wd: m,
                Mg: l.Mg,
                ie: l.Ld,
                name: null,
                Ed: null
            };
            if (l.Ei && (e[1].push(n), i[1][n] = p, f[1].push(n), l.Di || h[2].push(n), o || (o = 1)), l.Di && (e[2].push(n), i[2][n] = p, l.Ei || f[2].push(n), l.Bi || h[3].push(n), o || (o = 2)), l.Bi && (e[3].push(n), i[3][n] = p, l.Di || f[3].push(n), l.Ci || h[4].push(n), o || (o = 3)), l.Ci) {
                for (var q = l.Di, r = 1; 3 >= r; r++)
                    e[r].push(n), i[r][n] = p, q || f[r].push(n);
                o || (o = 4)
            }
            var s = {};
            s.id = n,
            s.wd = m,
            s.tg = l.re + (4 == o ? 65536 : 0),
            s.bd = o,
            s.rh = p,
            s.Dj = {},
            b.Df[n] = s
        }
        for (var k in d) {
            var t = d[k];
            t.lg && (b.fd[t.lg] = z(t.Gc)),
            t.mh ? b.fd.sh = z(t.Gc) : t.kh && (b.fd.Dh = z(t.Gc))
        }
        b.ff = e,
        b.cf = f,
        b.ef = h,
        b.hf = i,
        b.gf = [{}, {}, {}, {}
        ],
        b.jf = {
            ac: 1,
            j: 2,
            d: 3,
            g: 4
        },
        b.bf = {},
        b.of = 3,
        b.Cf = this.Cf,
        b.bj(),
        this.Qc = j
    };
    var s = function (a, b, d, e) {
        d = d || 0;
        var f = 65536 * b.id + d,
        i = e[f];
        if (i)
            return f;
        i = {
            id: f,
            dh: b.id,
            aj: g.Nb
        };
        for (var j = d / 65536, k = 1 - j, l = [], m = 0; 4 > m; m++)
            l.push(b.ti[m] * k + b.Ce[m] * j);
        i.dd = l;
        for (var n = [], o = b.Qe.length, m = 0; o > m; m++) {
            var p = b.Qe[m],
            q = {
                zf: {}
            };
            if (q.aj = p.aj, 0 == p.aj)
                q.Kd = p.start * k + p.end * j;
            else if (16 == p.aj || 18 == p.aj) {
                for (var r = [], s = 0; 6 > s; s++)
                    r[s] = p.start[s] * k + p.end[s] * j;
                q.Mg = r;
                for (var t = [], u = p.zf.Bh.length, s = 0; u > s; s++) {
                    var v = p.zf.Bh[s];
                    t[s] = {
                        Ah: v.xi * k + v.Ge * j,
                        Kd: v.ui * k + v.De * j
                    }
                }
                q.zf.Bh = t
            } else
                c("createVirtualShapeFromMorph: unsupported morphing param:", p.aj);
            n.push(q)
        }
        i.Qe = n;
        for (var w = [], o = b.Bg.length, m = 0; o > m; m++) {
            var x = b.Bg[m],
            y = {
                width: x.zi * k + x.He * j,
                Kd: x.ui * k + x.De * j
            };
            w.push(y)
        }
        i.Bg = w,
        b.vi.length > b.Ee.length && c("createVirtualShapeFromMorph: difference detected at startEdges and endEdges");
        for (var z = b.vi.length, A = [], m = 0; z > m; m++) {
            var B = b.vi[m],
            C = b.Ee[m],
            D = {};
            B.aj == h.tb && C.aj == h.Ab ? (C.aj = h.tb, C.Wc = C.he = C.x / 2, C.Xc = C.ke = C.y / 2) : B.aj == h.Ab && C.aj == h.tb && (B.aj = h.tb, B.Wc = B.he = B.x / 2, B.Xc = B.ke = B.y / 2),
            D.aj = B.aj,
            B.aj == h.Bb ? (D.Ag = B.Ag, D.Oe = B.Oe, D.Pe = B.Pe, D.Ae = B.Ae * k + C.Ae * j, D.Be = B.Be * k + C.Be * j, D.Bg = B.Bg, D.Qe = B.Qe) : B.aj == h.Ab ? (D.x = B.x * k + C.x * j, D.y = B.y * k + C.y * j) : B.aj == h.tb ? (D.he = B.he * k + C.he * j, D.ke = B.ke * k + C.ke * j, D.Wc = B.Wc * k + C.Wc * j, D.Xc = B.Xc * k + C.Xc * j) : c("createVirtualShapeFromMorph: unknown edge type:", B.aj),
            A.push(D)
        }
        return i.hi = A,
        e[f] = i,
        f
    },
    t = function (a, b, c, d, e) {
        this.Ie = a,
        this.Pg = b,
        b.bh = function (a) {
            return function () {
                a.Rg.apply(a, arguments)
            }
        }
        (this),
        this.we = {},
        this.displayListCount = {},
        this.yh = {
            yc: 0,
            Ac: 0,
            dc: 0,
            uc: b.of,
            cc: 100,
            wc: 1,
            xc: 0,
            hc: 0,
            tc: null,
            gc: b.of,
            jc: null,
            ec: null,
            vc: null,
            ic: 1,
            fc: 0,
            zc: 100,
            Bc: 100,
            nc: 0,
            oc: 90,
            rc: 1,
            sc: 1,
            kc: 0,
            lc: 0
        },
        this.hj = {},
        this.ag = !1,
        this.dg = !0,
        this.Xf = !1,
        this.Vf = !1,
        this.Yf = !1,
        this.nh = c,
        this.children = [],
        this.Ad = {},
        this.zd = {},
        this.Tf = 0,
        this.og = 0,
        this.Bd = {
            yd: -1,
            Ug: !0
        },
        this.Pf(d),
        this.Cc = c ? c.Cc + "/" + this.yh.jc : "",
        this.id = null,
        this.onEnterFrames = [],
        e ? this.Ke = !0 : this.Ie.newMcList.push(this),
        this.ue = c && c.ue || a.ue,
        this.Qg = c && c.Qg || a.Qg
    };
    t.prototype.Rg = function () {
        this.yh.gc = this.Pg.of,
        this.Pg.wj && (this.yh.uc = this.Pg.wj)
    },
    t.prototype.Pf = function (a) {
        var b = this.nh;
        if (a && (a.name ? this.yh.jc = a.name : b ? this.yh.jc = "instance" + ++b.Tf : this.yh.jc = "instance1", this.ai(a.Mg)), b) {
            b.children.push(this);
            var c = this.yh.jc;
            b.Ad[c] && b.Ad[c].push(this) || (b.Ad[c] = [this])
        }
    };
    var u = function (a, b, c, d, e, f, h, i) {
        var j = {};
        c *= 20,
        d *= 20;
        var k = h ? c * h : 0,
        l = i ? d * i : 0,
        m = w(a);
        return a[m] = {
            aj: g.Db,
            id: m,
            img: b
        },
        m++,
        j.shapeId = m,
        a[j.shapeId] = {
            aj: g.Nb,
            id: j.shapeId,
            dd: [-k, c - k, -l, d - l],
            Qe: [{
                    aj: 65,
                    _c: j.shapeId - 1,
                    Mg: [20, 0, 0, 20, -k / 20, -l / 20]
                }
            ],
            Bg: [],
            hi: [{
                    aj: 2,
                    Ae: c - k,
                    Be: d - l,
                    Pe: 1
                }, {
                    aj: 0,
                    x: -c,
                    y: 0
                }, {
                    aj: 0,
                    x: 0,
                    y: -d
                }, {
                    aj: 0,
                    x: c,
                    y: 0
                }, {
                    aj: 0,
                    x: 0,
                    y: d
                }
            ]
        },
        m++,
        j.containerId = m,
        a[j.containerId] = {
            aj: g.Qb,
            id: j.containerId,
            df: 1,
            Ji: [{
                    aj: g.Yb,
                    wd: j.shapeId,
                    re: 1,
                    Xg: 0,
                    Mg: [e, 0, 0, f, 0, 0]
                }, {
                    aj: g._b
                }, {
                    aj: g.Ub
                }
            ]
        },
        j.rh = {
            aj: g.Yb,
            wd: j.containerId,
            re: 1,
            Mg: [1, 0, 0, 1, 0, 0],
            Xg: 0
        },
        j
    };
    t.prototype.replaceMovieClip = function (a, b, c, e, f, g) {
        var h = a.width,
        i = a.height;
        if (!h || !i)
            return d("[MovieClip#replaceMovieClip] Unable to replace because image might not be loaded."), !1;
        var j = b ? b / h : 1,
        k = c ? c / i : 1;
        e && (k = j = Math.min(j, k)),
        this._resetDisplayList(),
        this.dg = !1;
        var l = u(this.ue, a, h, i, j, k, f, g),
        m = this.nh.Pg;
        m.Cf++;
        var n = m.Cf,
        o = {},
        p = this.yh.dc;
        o.id = n,
        o.wd = l.containerId,
        o.tg = 1,
        o.bd = p,
        o.rh = l.rh,
        o.Dj = {},
        this.Pg.Df[n] = o;
        for (var q = 1; q <= this.yh.uc; q++)
            this.Pg.hf[q][n] = l.rh;
        return this.ae(this.af, n),
        !0
    },
    t.prototype.Gd = function (a, b) {
        var c = this.nh,
        d = c.Pg,
        e = c.Pg.Df[this.id],
        f = e.id;
        d.Cf++;
        var g = d.Cf,
        h = G(e.rh);
        h.name = a;
        var i = G(e);
        i.rh = h,
        i.id = g,
        i.tg = b,
        c.Pg.Df[g] = i,
        c.ae(null, g);
        var j = c.zd[g],
        k = j.yh,
        l = k.jc;
        k = G(this.yh),
        k.jc = l,
        k.dc = 1,
        j.Xf = !0,
        j.og = this.Ie.df;
        for (var m = d.hf, n = m.length, o = 0, p = 0, q = 1; n > q; q++)
            if (m[q] && m[q][f])
                0 == o && (o = q), p = q - o + 1, m[p][g] = G(m[q][f]), m[p][g].name = a;
            else if (o > 0) {
                p = q - o + 1;
                for (var r = q - o; n > p; )
                    m[p][g] = m[p - r][g], p++;
                break
            }
        return j
    },
    t.prototype.ae = function (a, c, d) {
        var e = this.ue,
        f = this.Ie.ch,
        h = this.Pg.Df[c],
        i = h.wd,
        j = e[i],
        k = h.tg;
        if (this.og = this.Ie.df, this.we[k]) {
            var l = this.displayListCount[k] || 0;
            ++l,
            k = k + "." + ("000" + l).slice(-4),
            h.tg = k,
            this.displayListCount[k] = l
        }
        this.we[k] = h;
        var m = !1;
        switch (j.aj) {
        case g.Hb:
        case g.Ib:
            m = !0;
        case g.Qb:
            var n = h.rh,
            o = this.Ie,
            p = this.Qg,
            q = p[i];
            if (!q) {
                q = new x;
                var s = new r(o, q, j.Ji, j.xd, j.Gc);
                s.Nc(e),
                p[i] = q
            }
            var u = new t(o, q, this, n);
            h.Dj[c] = u,
            m && (u.dg = !1, u.Vf = !0, this.Ie.jd.push(u)),
            o.Ri.push(u);
            o.gotoFrame(u, 1, !1);
            if (u.id = c, this.zd[c] = u, f.replace && n.name)
                for (var v = f.replace, w = v.length, y = 0; w > y; y++) {
                    var z = v[y];
                    n.name == z.name && u.replaceMovieClip(z.img, z.width, z.height, z.keepAspect, z.xratio, z.yratio)
                }
            break;
        case g.Jb:
            var A = e[j.id],
            B = D(this, A.gj),
            C = B[0],
            E = B[1];
            C ? "undefined" == typeof C.hj[E] ? E && (C.hj[E] = A.Rf) : A.Rf = C.hj[E] + "" : this.Ie.ch.debug && b("[DefineEditText:variableName] unable to access: " + A.gj)
        }
    },
    t.prototype.Fh = function (a) {
        var b = this.Pg.Df[a],
        c = (b.wd, b.tg);
        this.og = this.Ie.df,
        delete this.we[c];
        var d = this.zd,
        e = d[a];
        delete d[a],
        e && this.Eh(e)
    },
    t.prototype.Eh = function (a, b) {
        if (a.og = this.Ie.df, !b) {
            var c = a.nh;
            c.og = this.Ie.df;
            for (var d = c.children, e = d.length, f = 0; e > f; f++)
                if (a == d[f]) {
                    d.splice(f, 1);
                    break
                }
            for (var g = c.Ad[a.yh.jc], e = g.length, f = 0; e > f; f++)
                if (a == g[f]) {
                    g.splice(f, 1),
                    0 == g.length && delete c.Ad[a.yh.jc];
                    break
                }
        }
        for (var d = a.children, e = a.children.length, f = 0; e > f; f++)
            a.Eh(d[f], !0);
        for (var h = this.Ie.Ri, e = h.length, f = 0; e > f; f++) {
            var i = h[f];
            if (i == a) {
                h.splice(f, 1);
                break
            }
        }
        for (var j = this.Ie.jd, e = j.length, f = 0; e > f; f++) {
            var k = j[f];
            if (k == a) {
                j.splice(f, 1);
                break
            }
        }
        a.Yf = !0
    },
    t.prototype.Re = function (a) {
        var b = this.Ad,
        c = b[a];
        if (c && c[0])
            return c[0];
        a = a.toLowerCase();
        for (var d in b)
            if (d.toLowerCase() == a)
                return b[d][0];
        return null
    },
    t.prototype.td = function () {
        this.og = this.Ie.df;
        var a = this.yh;
        a.zc = 100 * Math.sqrt(a.rc * a.rc + a.kc * a.kc),
        a.Bc = 100 * Math.sqrt(a.sc * a.sc + a.lc * a.lc),
        a.nc = 180 * Math.atan2(a.kc, a.rc) / Math.PI,
        a.oc = 180 * Math.atan2(a.sc, a.lc) / Math.PI
    },
    t.prototype.sf = function () {
        var a = this.yh;
        return [a.rc, a.kc, a.lc, a.sc, a.yc, a.Ac]
    },
    t.prototype.ci = function (a) {
        var b = this.yh,
        c = (a - b.nc) / 180 * Math.PI,
        d = Math.cos(c),
        e = Math.sin(c),
        f = [d, e, -e, d, 0, 0],
        g = l(f, b.rc, b.kc),
        h = l(f, b.lc, b.sc);
        b.rc = g[0],
        b.kc = g[1],
        b.lc = h[0],
        b.sc = h[1],
        this.td()
    },
    t.prototype.ei = function (a) {
        this.og = this.Ie.df;
        var b = this.yh,
        c = b.zc;
        if (0 != c) {
            var d = a / c;
            b.rc *= d,
            b.kc *= d,
            0 == a ? b.nc = v(b.nc) : 0 > a && (b.nc = 180 * Math.atan2(b.kc, b.rc) / Math.PI)
        } else {
            var e = b.nc / 180 * Math.PI;
            b.rc = a / 100 * Math.cos(e),
            b.kc = a / 100 * Math.sin(e)
        }
        b.zc = 100 * Math.sqrt(b.rc * b.rc + b.kc * b.kc)
    },
    t.prototype.fi = function (a) {
        this.og = this.Ie.df;
        var b = this.yh,
        c = b.Bc;
        if (0 != c) {
            var d = a / c;
            b.sc *= d,
            b.lc *= d,
            0 == a ? b.oc = v(b.oc) : 0 > a && (b.oc = 180 * Math.atan2(b.sc, b.lc) / Math.PI)
        } else {
            var e = b.oc / 180 * Math.PI;
            b.sc = a / 100 * Math.cos(e),
            b.lc = a / 100 * Math.sin(e)
        }
        b.Bc = 100 * Math.sqrt(b.sc * b.sc + b.lc * b.lc)
    },
    t.prototype.bi = function (a, b) {
        this.og = this.Ie.df,
        this.yh[a] = b
    },
    t.prototype.ai = function (a) {
        this.yh.rc = a[0],
        this.yh.kc = a[1],
        this.yh.lc = a[2],
        this.yh.sc = a[3],
        this.yh.yc = a[4],
        this.yh.Ac = a[5],
        this.td()
    },
    t.prototype.wf = function () {
        var a = this.nh;
        if (this.nh) {
            var b = this.ag ? this.sf() : a.Pg.hf[a.yh.dc][this.id].Mg;
            return N(a.wf(), b || [1, 0, 0, 1, 0, 0])
        }
        return this.Ie.Sh || [1, 0, 0, 1, 0, 0]
    },
    t.prototype.Zf = function (a) {
        if (a) {
            for (var b = this; b; ) {
                if (!b.Zf())
                    return !1;
                b = b.nh
            }
            return !0
        }
        var c = this.yh;
        return c.wc - 0 && c.zc > 0 && c.Bc > 0
    },
    t.prototype.qf = function (a) {
        var b = this.we,
        d = this.yh.dc,
        e = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
        for (var f in b) {
            var g,
            h = b[f],
            i = h.id,
            j = this.Pg.hf[d][i],
            k = this.zd[i];
            if (k) {
                var l = k.ag ? k.sf() : j.Mg;
                g = k.qf(l)
            } else {
                var m = this.ue[h.wd],
                n = m.dd;
                n ? g = j.Mg ? O(j.Mg, n) : n : c("bounds not found")
            }
            g[0] < e[0] && (e[0] = g[0]),
            g[1] > e[1] && (e[1] = g[1]),
            g[2] < e[2] && (e[2] = g[2]),
            g[3] > e[3] && (e[3] = g[3])
        }
        if (0 == Object.keys(b).length && (e = [0, 0, 0, 0]), !a)
            if (this.ag)
                a = this.sf();
            else {
                var o = this.nh;
                if (o) {
                    var p = o.yh.dc;
                    a = o.Pg.hf[p][this.id].Mg
                } else
                    a = [1, 0, 0, 1, 0, 0]
            }
        return O(a, e)
    },
    t.prototype.$f = function (a, b) {
        for (var c = this; c; ) {
            if (!c.Zf())
                return !1;
            c = c.nh
        }
        a *= 20,
        b *= 20;
        var d = this.qf(this.wf());
        return d[0] <= a && a <= d[1] && d[2] <= b && b <= d[3]
    };
    var v = function (a) {
        for (; a > 180; )
            a -= 360;
        for (; -180 >= a; )
            a += 360;
        return -150 >= a ? 180 : -120 >= a ? -135 : -60 >= a ? -90 : -30 >= a ? -45 : 30 >= a ? 0 : 60 >= a ? 45 : 120 >= a ? 90 : 150 >= a ? 135 : 180
    };
    t.prototype.bg = function (a) {
        var b = this.og;
        if (b >= a)
            return !0;
        if (this.Wf(a))
            return !0;
        for (var c = this.nh; c; ) {
            if (c.og >= a)
                return !0;
            c = c.nh
        }
        return !1
    },
    t.prototype.Wf = function (a) {
        if (this.Bd.yd == this.Ie.df)
            return this.Bd.Ug;
        this.Bd.yd = this.Ie.df;
        var b = this.we,
        c = this.ue;
        for (var d in b) {
            var e = b[d],
            f = this.zd[e.id];
            if (f && f.bg(a))
                return this.Bd.Ug = !0, !0;
            if (37 == c[e.rh.wd].aj)
                return this.Bd.Ug = !0, !0
        }
        return this.Bd.Ug = !1,
        !1
    },
    t.prototype.loadMovie = function (a, b, c) {
        var d,
        e,
        f = this,
        g = function () {
            if (e.Nc(h), d.Pd) {
                if (d.loadingImageCount > 0)
                    return void setTimeout(g, 0);
                f.ue = h,
                f.Qg = i;
                var a = d.Af.nf,
                b = (a[1] - a[0]) / 20,
                k = (a[3] - a[2]) / 20,
                l = c.width || b,
                m = c.height || k,
                n = l / b,
                o = m / k,
                p = -l * c.xratio || 0,
                q = -m * c.yratio || 0;
                f._startMovie(j, d.Ii, n, o, p, q, c.name, c.onready)
            }
        },
        h = {
            name: this.Cc
        },
        i = {},
        j = w(h),
        k = i[j] = new x;
        if ("object" == typeof b)
            return d = m(b, this.Ie.ch.Kf, g), e = new r(this.Ie, k, d.Ii), e.Nc(h), !0;
        var l = n.rf().data;
        return (d = l[b]) ? (e = new r(this.Ie, k, d.Ii), g(), !0) : (d = l[b] = new Db({
                onerror: c.onerror,
                delayEval: c.delayEval || null == c.delayEval
            }), e = new r(this.Ie, k, d.Ii), d.Eg(b, g), !0)
    },
    t.prototype._startMovie = function (a, b, c, d, e, f, h, i) {
        this.Ie;
        this._resetDisplayList(),
        this.dg = !1;
        var j = this.ue;
        j[a] = {
            aj: g.Qb,
            id: a,
            df: 1,
            Ji: b
        };
        var k = {
            aj: g.Yb,
            wd: a,
            re: 1,
            Mg: [c, 0, 0, d, e, f],
            Xg: 0,
            name: h || ""
        },
        l = ++this.Pg.Cf,
        m = this.yh.dc;
        this.Pg.Df[l] = {
            id: l,
            wd: a,
            tg: 1,
            bd: m,
            rh: k,
            Dj: {}
        };
        for (var n = 1; n <= this.yh.uc; n++)
            this.Pg.hf[n][l] = k;
        this.ae(this.af, l, null),
        i && i()
    },
    t.prototype._resetDisplayList = function () {
        var a = this.we;
        for (var b in a) {
            var c = a[b];
            this.Fh(c.id)
        }
    };
    var w = function (a) {
        for (var b = 4294967296; a[b]; )
            b++;
        return b
    },
    x = function () {
        this.bh = null,
        this.of = 0,
        this.wj = 0,
        this.ff = [],
        this.cf = [],
        this.ef = [],
        this.hf = [],
        this.gf = [],
        this.Df = {},
        this.jf = {},
        this.bf = {},
        this.fd = {},
        this.noskipFrameList = [],
        this.Cf = 0
    };
    x.prototype.bj = function () {
        this.bh && this.bh()
    };
    var y = function (a) {
        this.Ie = a,
        this.Le = new t(a, new x, null, null, !0),
        this.Ec = [],
        this.uh = [],
        this.Vh = !1,
        this.Fc = [],
        this.Sd = [],
        this.ce = null
    };
    y.prototype.Hc = function (a, b, c) {
        var d = this.Fc,
        e = d || (c ? this.uh : this.Ec);
        e[e.length] = [a, b]
    },
    y.prototype.executeAction = function (a, c, d) {
        if (0 == a.yh.dc)
            return this.Hc(a, c, d), !0;
        var e = this.ce,
        f = this.Fc,
        g = this.Sd,
        h = f.splice(0, f.length),
        i = g.splice(0, g.length);
        this.Hc(a, c, d);
        var j = this.Uh();
        return j || this.Ie.ch.debug && b("gotoFrame: try to go to non-loading frame inside VM"),
        this.ce = e,
        f.push.apply(f, h),
        g.push.apply(g, i),
        j
    },
    y.prototype.Uh = function () {
        var a = this.uh,
        c = this.Ec,
        e = this.Fc,
        f = this.Sd;
        a.length && (e = a, this.uh = []),
        c.length && (e.push.apply(e, c), this.Ec = []);
        var g = this.Vh;
        this.Vh = !0;
        var h = this.ce;
        for (this.ce = null; e.length; ) {
            var i = e[0],
            j = i[0];
            if (h = h || {
                    qh: 0,
                    Og: j,
                    eh: j,
                    qi: [],
                    Se: !1,
                    ud: null
                }, j.Yf)
                e.shift(), h = f.pop();
            else {
                var k = i[1],
                l = k(this, h, B, C, D, E, F, G, H, b, d);
                if (!l)
                    return this.ce = h, !1;
                if (h.Se)
                    e.shift(), h = f.pop();
                else {
                    f[f.length] = h,
                    e.unshift.apply(e, h.ud);
                    for (var m = h.ud.length, n = 1; m > n; n++)
                        f[f.length] = null;
                    h = null
                }
            }
        }
        return this.Vh = g,
        !0
    };
    var z = function (a, b) {
        for (var c = "var c=d.qh;var e=d.Og;var f=d.qi;while(c>=0){switch('o'+c){", e = a.length, f = 0; e > f; f++) {
            var g = a[f];
            switch (c += "case 'o" + g._g + "':", g.Id) {
            case j.Z:
                c += "f[f.length]=f[f.length-1];";
                break;
            case j.W:
                c += "f.length--;";
                break;
            case j.o:
                c += "var a=(+f[f.length-1])||0;",
                c += "var b=(+f[f.length-2])||0;",
                c += "f[f.length-2]=a+b;",
                c += "f.length--;";
                break;
            case j.mb:
                c += "var a=(+f[f.length-1])||0;",
                c += "var b=(+f[f.length-2])||0;",
                c += "f[f.length-2]=b-a;",
                c += "f.length--;";
                break;
            case j.R:
                c += "var a=(+f[f.length-1])||0;",
                c += "var b=(+f[f.length-2])||0;",
                c += "f[f.length-2]=a*b;",
                c += "f.length--;";
                break;
            case j.w:
                c += "var a=(+f[f.length-1])||0;",
                c += "var b=(+f[f.length-2])||0;",
                c += "f[f.length-2]=(a==0)?'#ERROR':b/a;",
                c += "f.length--;";
                break;
            case j.M:
                c += "var a=(+f.pop())||0;",
                c += "var b=(+f.pop())||0;",
                c += "f[f.length]=(b<a)?1:0;";
                break;
            case j.A:
                c += "var a=(+f.pop())||0;",
                c += "var b=(+f.pop())||0;",
                c += "f[f.length]=(a==b)?1:0;";
                break;
            case j.q:
                c += "var a=(+f.pop())||0;",
                c += "var b=(+f.pop())||0;",
                c += "f[f.length]=(a&&b)?1:0;";
                break;
            case j.U:
                c += "var a=(+f.pop())||0;",
                c += "var b=(+f.pop())||0;",
                c += "f[f.length]=(a||b)?1:0;";
                break;
            case j.T:
                c += "var a=(+f[f.length-1])||0;",
                c += "f[f.length-1]=(a==0)?1:0;";
                break;
            case j.hb:
                c += "var a=f[f.length-1];a=(a==null)?'':a;",
                c += "var b=f[f.length-2];b=(b==null)?'':b;",
                c += "f[f.length-2]=b+''+a;",
                c += "f.length--;";
                break;
            case j.ib:
                c += "var a=f.pop()+'';",
                c += "var b=f.pop()+'';",
                c += "f[f.length]=(a==b)?1:0;";
                break;
            case j.jb:
                c += "var g=+f.pop();",
                c += "var h=+f.pop()-1;",
                c += "var k=f.pop()+'';",
                c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{",
                c += "h=(h<0)?0:h;",
                c += "g=(g<0)?m(k):g;",
                c += "f[f.length]=n(k,h,g);}";
                break;
            case j.P:
                c += "var g=+f.pop();",
                c += "var h=+f.pop()-1;",
                c += "var k=f.pop()+'';",
                c += "if(isNaN(g)||isNaN(h)){f[f.length]=''}else{",
                c += "h=(h<0)?0:h;",
                c += "g=(g<0)?k.length:g;",
                c += "f[f.length]=k.substr(h,g);}";
                break;
            case j.kb:
                c += "var k=f[f.length-1]+'';",
                c += "f[f.length-1]=m(k);";
                break;
            case j.Q:
                c += "var k=f[f.length-1]+'';",
                c += "f[f.length-1]=k.length;";
                break;
            case j.lb:
                c += "var b=f.pop()+'';",
                c += "var a=f.pop()+'';",
                c += "f[f.length]=(a<b)?1:0;";
                break;
            case j.nb:
                c += "f[f.length-1]=(+(f[f.length-1]))|0;";
                break;
            case j.u:
                d("ActionCharToAscii: unimplemented correctly"),
                c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                break;
            case j.r:
                d("ActionAsciiToChar: unimplemented correctly"),
                c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                break;
            case j.O:
                c += "f[f.length-1]=(f[f.length-1]+'').charCodeAt(0);";
                break;
            case j.N:
                c += "f[f.length-1]=String.fromCharCode(f[f.length-1]);";
                break;
            case j.K:
                c += "var b=+f.pop();",
                c += "if(b){c=" + (null == g.ed ? "-1" : g.$g + g.ed) + ";break;}";
                break;
            case j.L:
                c += "c=" + (null == g.ed ? "-1" : g.$g + g.ed) + ";break;";
                break;
            case j.Y:
                for (var h = g.fj.length, i = 0; h > i; i++) {
                    var k = g.fj[i];
                    c += "f[f.length]=",
                    c += null == k ? "null;" : "string" == typeof k ? "unescape('" + escape(k) + "');" : k + ";"
                }
                break;
            case j.G:
                c += "var o=f.pop();",
                c += "var value;",
                c += "var q=r(e,o);",
                c += "var s=q[0];var t=q[1];",
                c += "value=(s&&(((s==u.Le)?u.Ie.Qh:s).hj[t]));",
                c += "value=(typeof(value)=='undefined')?'':value;",
                c += "f[f.length]=value;";
                break;
            case j.db:
                c += "var value=f.pop();",
                c += "var t=f.pop();",
                c += "var q=r(e,t);",
                c += "q[0] && (((q[0]==u.Le)?u.Ie.Qh:q[0]).hj[q[1]]=value);";
                break;
            case j.C:
                c += "var p=f.pop();",
                c += "var v=f.pop();",
                c += "var w=x(e,v);",
                c += "var name=z[p];",
                c += "if(w&&w!=u.Le){if(!name){f[f.length]=0}else{",
                c += "switch(name){case'tc':f[f.length]=(w.nh&&w.Cc)||'/';break;",
                c += "case'xc':var A=w.qf();f[f.length]=(A[1]-A[0])/20;break;",
                c += "case'hc':var A=w.qf();f[f.length]=(A[3]-A[2])/20;break;",
                c += "case'yc':case'Ac':if(w.ag){f[f.length]=((w.yh[name]*50)|0)/50;}",
                c += "else{var B=w.nh;var C=B&&B.yh.dc;var h=(name=='yc'?4:5);",
                c += "f[f.length]=B?((B.Pg.hf[C][w.id].Mg[h]*50)|0)/50:0}break;",
                c += "default:f[f.length]=w.yh[name];}}}else{f[f.length]=p;}";
                break;
            case j.ab:
                c += "var value=f.pop();",
                c += "var p=f.pop();",
                c += "var v=f.pop();",
                c += "var w=x(e,v);",
                c += "var name=z[p];",
                c += "if(w&&w!=u.Le){var D=(value==parseFloat(value));switch(name){",
                c += "case'nc':if(D){w.ag=true;w.ci(+value);}break;",
                c += "case'zc':if(D){w.ag=true;w.ei(+value);}break;",
                c += "case'Bc':if(D){w.ag=true;w.fi(+value);}break;",
                c += "case'cc':case'yc':case'Ac':if(D){w.ag=true;w.bi(name,(+value)||0);}break;",
                c += "case'fc':case'ic':case'wc':if(value==0||value==1){w.bi(name,+value);}break;",
                c += "case'xc':var A=w.qf();var E=(A[1]-A[0])/20;var F=w.yh.zc;",
                c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.ei(+value/(E||1));break;",
                c += "case'hc':var A=w.qf();var E=(A[3]-A[2])/20;var F=w.yh.Bc;",
                c += "if(F!=0){E/=Math.abs(F)};w.ag=true;w.fi(+value/(E||1));break;",
                c += "case'dc':case'tc':case'uc':case'jc':break;",
                c += "default:w.yh[name]=value;break;}}";
                break;
            case j.V:
                c += "e.dg=true;";
                break;
            case j.fb:
                c += "e.dg=false;";
                break;
            case j.s:
                c += "var o=f.pop();",
                c += "var q=r(e,o);",
                c += "var w=q[0];if(w&&!w.Yf){",
                c += "var G=q[1];var H=w.Pg.jf[(G+'')]||G;",
                c += "if(!isNaN(parseInt(H))){var I=w.Pg.bf[H];if(I){",
                c += "var J=I.length;var q=[];for(var i=0;i<J;i++){q[q.length]=[w,I[i]];}",
                c += "d.Se=false;d.qh=" + g.$g + ";d.Og=e;d.ud=q;return true;}}}";
                break;
            case j.H:
                c += "e.dg=false;var H=e.Pg.jf[unescape('" + escape(g.ng) + "')];",
                c += "if(H){var q=u.Ie.gotoFrame(e,H);if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                break;
            case j.I:
                c += "if(e!=u.Le){e.dg=false;var q=u.Ie.gotoFrame(e," + g.af + ");",
                c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}}";
                break;
            case j.J:
                c += "var o=f.pop()+'';var q=r(e,o);var w=q[0];",
                c += "if(w&&w!=u.Le){var G=q[1];var H=w.Pg.jf[(G+'')]||G;",
                c += "if(!isNaN(parseInt(H))){w.dg=" + (g.play ? "true" : "false") + ";var q=u.Ie.gotoFrame(w,H);",
                c += "if(!q){d.qh=" + g._g + ";d.Og=e;f[f.length]=o;return false;}}}";
                break;
            case j.S:
                c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc+1);",
                c += "if(!q){d.qh=" + g._g + ";d.Og=e;return false;}";
                break;
            case j.X:
                c += "e.dg=false;var q=u.Ie.gotoFrame(e,e.yh.dc-1);";
                break;
            case j.bb:
                c += "e=x(d.eh,'" + g.name + "')||u.Le;";
                break;
            case j.cb:
                c += "var K=f.pop();e=x(d.eh,K)||u.Le;";
                break;
            case j.F:
                if (c += "var L=f.pop();var M=f.pop();", g.Gg && d("not implemented:GetURL2 load sprite. ignored"), c += "if(M){", (1 == g.$h || 2 == g.$h) && (c += "var N=e.hj;", c += "var O=[];for(var P in N){O.push(P+'='+(encodeURI(N[P])||''))}", c += "if(O.length>0)M+=(M.indexOf('?')>=0?'&':'?')+O.join('&');"), g.Hg) {
                    switch (c += "var Q=new XMLHttpRequest();", g.$h) {
                    case 0:
                    case 1:
                        c += "Q.open('GET', M, true);",
                        c += "Q.send('');";
                        break;
                    case 2:
                        c += "Q.open('POST', M, true);",
                        c += "Q.setRequestHeader('Content-Type' ,'application/x-www-form-urlencoded; charset=Shift-jis');",
                        c += "Q.send(O.join('&'));"
                    }
                    c += "Q.onreadystatechange=(function(R){return function(){if(Q.readyState == 4 && Q.status == 200){",
                    c += "var S=x(R,L);",
                    c += "if(!S){console.warn('[getURL2] Not found S');S=R}",
                    c += "var T=decodeURI(Q.responseText).split('&');var J=T.length;",
                    c += "for(var P=0;P<J;P++){var U=T[P].split('=');S.hj[U[0]]=U[1];}",
                    c += "}};})(e);"
                } else
                    switch (g.$h) {
                    case 0:
                    case 1:
                        c += "location.href=M;";
                        break;
                    case 2:
                        c += "var form = document.createElement('form');document.body.appendChild(form);",
                        c += "form.action=M;form.method='post';var N=e.hj;",
                        c += "for(var P in N){var input=document.createElement('input');input.aj='hidden';input.name=P;input.value=encodeURI(N[P]||'');form.appendChild(input);}",
                        c += "form.submit();"
                    }
                c += "}else{EngineLogW(\"'cj' argument of getURL() is empty\");V(e,L);}";
                break;
            case j.v:
                c += "var W=f.pop();var X=''+f.pop();var Y=''+f.pop();",
                c += "var Z=x(e,Y);",
                c += "var $=Z&&Z.wd;",
                c += "var B=(Z&&Z.nh)||null;",
                c += "if(B!=null){var _ = B.we[W];",
                c += "if(_){var ab=_.id;if(_.Dj&&_.Dj[ab]&&_.Dj[ab].Xf){B.Fh(ab);}else{break;}}",
                c += "var bb=Z.Gd(X,W);bb.yh.wc=1;}";
                break;
            case j._:
                c += "var L=''+f.pop();V(e,L);";
                break;
            case j.D:
                c += "f[f.length]=Date.now();";
                break;
            case j.$:
                c += "f[f.length-1]=(Math.random()*f[f.length-1])|0;";
                break;
            case j.B:
                c += "var cb=f.pop();var db=f.length;",
                c += "if(f[db-1]=='JavaScript'){",
                c += "var eb=[];var fb=eval(f[db-2]);f.length-=2;var J=cb-2;for(var i=0;i<J;i++){eb[i]=f.pop();}fb.apply(null,eb);f[f.length]=0;",
                c += "}else{f.length-=cb;f[f.length]=-1;}";
                break;
            case j.pb:
                c += b ? "EngineLogD('Trace: '+f.pop());" : "f.pop();";
                break;
            case 0:
                break;
            default:
                d("not implemented action:" + g.Id),
                c += "/* not implemented */"
            }
        }
        return c += "c=-1;break;default:gb('jump miss');}}d.Se=true;return true;",
        new Function("u,d,m,n,r,x,z,hb,V,EngineLogD,EngineLogW", c)
    },
    A = function (a, b) {
        return function (c, d, e, f, g, h, i, k, l, m, n) {
            for (var o = d.Og, p = d.qi, q = {}, r = a.length, s = 0; r > s; s++) {
                var t = a[s];
                q[t._g] = s
            }
            for (var s = q[d.qh]; r > s; s++) {
                var t = a[s];
                switch (t.Id) {
                case j.Z:
                    p[p.length] = p[p.length - 1];
                    break;
                case j.W:
                    p.length--;
                    break;
                case j.o:
                    var u = +p[p.length - 1] || 0,
                    v = +p[p.length - 2] || 0;
                    p[p.length - 2] = u + v,
                    p.length--;
                    break;
                case j.mb:
                    var u = +p[p.length - 1] || 0,
                    v = +p[p.length - 2] || 0;
                    p[p.length - 2] = v - u,
                    p.length--;
                    break;
                case j.R:
                    var u = +p[p.length - 1] || 0,
                    v = +p[p.length - 2] || 0;
                    p[p.length - 2] = u * v,
                    p.length--;
                    break;
                case j.w:
                    var u = +p[p.length - 1] || 0,
                    v = +p[p.length - 2] || 0;
                    p[p.length - 2] = 0 == u ? "#ERROR" : v / u,
                    p.length--;
                    break;
                case j.M:
                    var u = +p.pop() || 0,
                    v = +p.pop() || 0;
                    p[p.length] = u > v ? 1 : 0;
                    break;
                case j.A:
                    var u = +p.pop() || 0,
                    v = +p.pop() || 0;
                    p[p.length] = u == v ? 1 : 0;
                    break;
                case j.q:
                    var u = +p.pop() || 0,
                    v = +p.pop() || 0;
                    p[p.length] = u && v ? 1 : 0;
                    break;
                case j.U:
                    var u = +p.pop() || 0,
                    v = +p.pop() || 0;
                    p[p.length] = u || v ? 1 : 0;
                    break;
                case j.T:
                    var u = +p[p.length - 1] || 0;
                    p[p.length - 1] = 0 == u ? 1 : 0;
                    break;
                case j.hb:
                    var u = p[p.length - 1];
                    u = null == u ? "" : u;
                    var v = p[p.length - 2];
                    v = null == v ? "" : v,
                    p[p.length - 2] = v + "" + u,
                    p.length--;
                    break;
                case j.ib:
                    var u = p.pop() + "",
                    v = p.pop() + "";
                    p[p.length] = u == v ? 1 : 0;
                    break;
                case j.jb:
                    var w = +p.pop(),
                    x = +p.pop() - 1,
                    y = p.pop() + "";
                    isNaN(w) || isNaN(x) ? p[p.length] = "" : (x = 0 > x ? 0 : x, w = 0 > w ? e(y) : w, p[p.length] = f(y, x, w));
                    break;
                case j.P:
                    var w = +p.pop(),
                    x = +p.pop() - 1,
                    y = p.pop() + "";
                    isNaN(w) || isNaN(x) ? p[p.length] = "" : (x = 0 > x ? 0 : x, w = 0 > w ? y.length : w, p[p.length] = y.substr(x, w));
                    break;
                case j.kb:
                    var y = p[p.length - 1] + "";
                    p[p.length - 1] = e(y);
                    break;
                case j.Q:
                    var y = p[p.length - 1] + "";
                    p[p.length - 1] = y.length;
                    break;
                case j.lb:
                    var v = p.pop() + "",
                    u = p.pop() + "";
                    p[p.length] = v > u ? 1 : 0;
                    break;
                case j.nb:
                    p[p.length - 1] = 0 | +p[p.length - 1];
                    break;
                case j.u:
                    n("ActionCharToAscii: unimplemented correctly"),
                    p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                    break;
                case j.r:
                    n("ActionAsciiToChar: unimplemented correctly"),
                    p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                    break;
                case j.O:
                    p[p.length - 1] = (p[p.length - 1] + "").charCodeAt(0);
                    break;
                case j.N:
                    p[p.length - 1] = String.fromCharCode(p[p.length - 1]);
                    break;
                case j.K:
                    var v = +p.pop();
                    v && (s = null == t.ed ? r : q[t.$g + t.ed] - 1);
                    break;
                case j.L:
                    s = null == t.ed ? r : q[t.$g + t.ed] - 1;
                    break;
                case j.Y:
                    Array.prototype.push.apply(p, t.fj);
                    break;
                case j.G:
                    var z = p.pop(),
                    A,
                    B = g(o, z),
                    C = B[0],
                    D = B[1];
                    A = C && (C == c.Le ? c.Ie.Qh : C).hj[D],
                    A = "undefined" == typeof A ? "" : A,
                    p[p.length] = A;
                    break;
                case j.db:
                    var A = p.pop(),
                    D = p.pop(),
                    B = g(o, D);
                    B[0] && ((B[0] == c.Le ? c.Ie.Qh : B[0]).hj[B[1]] = A);
                    break;
                case j.C:
                    var E = p.pop(),
                    F = p.pop(),
                    G = h(o, F),
                    H = i[E];
                    if (G && G != c.Le)
                        if (H)
                            switch (H) {
                            case "tc":
                                p[p.length] = G.nh && G.Cc || "/";
                                break;
                            case "xc":
                                var I = G.qf();
                                p[p.length] = (I[1] - I[0]) / 20;
                                break;
                            case "hc":
                                var I = G.qf();
                                p[p.length] = (I[3] - I[2]) / 20;
                                break;
                            case "yc":
                            case "Ac":
                                if (G.ag)
                                    p[p.length] = (50 * G.yh[H] | 0) / 50;
                                else {
                                    var J = G.nh,
                                    K = J && J.yh.dc,
                                    x = "yc" == H ? 4 : 5;
                                    p[p.length] = J ? (50 * J.Pg.hf[K][G.id].Mg[x] | 0) / 50 : 0
                                }
                                break;
                            default:
                                p[p.length] = G.yh[H]
                            }
                        else
                            p[p.length] = 0;
                    else
                        p[p.length] = E;
                    break;
                case j.ab:
                    var A = p.pop(),
                    E = p.pop(),
                    F = p.pop(),
                    G = h(o, F),
                    H = i[E];
                    if (G && G != c.Le) {
                        var L = A == parseFloat(A);
                        switch (H) {
                        case "nc":
                            L && (G.ag = !0, G.ci(+A));
                            break;
                        case "zc":
                            L && (G.ag = !0, G.ei(+A));
                            break;
                        case "Bc":
                            L && (G.ag = !0, G.fi(+A));
                            break;
                        case "cc":
                        case "yc":
                        case "Ac":
                            L && (G.ag = !0, G.bi(H, +A || 0));
                            break;
                        case "fc":
                        case "ic":
                        case "wc":
                            (0 == A || 1 == A) && G.bi(H, +A);
                            break;
                        case "xc":
                            var I = G.qf(),
                            M = (I[1] - I[0]) / 20,
                            N = G.yh.zc;
                            0 != N && (M /= Math.abs(N)),
                            G.ag = !0,
                            G.ei(+A / (M || 1));
                            break;
                        case "hc":
                            var I = G.qf(),
                            M = (I[3] - I[2]) / 20,
                            N = G.yh.Bc;
                            0 != N && (M /= Math.abs(N)),
                            G.ag = !0,
                            G.fi(+A / (M || 1));
                            break;
                        case "dc":
                        case "tc":
                        case "uc":
                        case "jc":
                            break;
                        default:
                            G.yh[H] = A
                        }
                    }
                    break;
                case j.V:
                    o.dg = !0;
                    break;
                case j.fb:
                    o.dg = !1;
                    break;
                case j.s:
                    var z = p.pop(),
                    B = g(o, z),
                    G = B[0];
                    if (G && !G.Yf) {
                        var O = B[1],
                        P = G.Pg.jf[O + ""] || O;
                        if (!isNaN(parseInt(P))) {
                            var Q = G.Pg.bf[P];
                            if (Q) {
                                for (var R = Q.length, B = [], S = 0; R > S; S++)
                                    B[B.length] = [G, Q[S]];
                                return d.Se = !1,
                                d.qh = t.$g,
                                d.Og = o,
                                d.ud = B,
                                !0
                            }
                        }
                    }
                    break;
                case j.H:
                    o.dg = !1;
                    var P = o.Pg.jf[t.ng];
                    if (P) {
                        var B = c.Ie.gotoFrame(o, P);
                        if (!B)
                            return d.qh = t._g, d.Og = o, !1
                    }
                    break;
                case j.I:
                    if (o != c.Le) {
                        o.dg = !1;
                        var B = c.Ie.gotoFrame(o, t.af);
                        if (!B)
                            return d.qh = t.af, d.Og = o, !1
                    }
                    break;
                case j.J:
                    var z = p.pop() + "",
                    B = g(o, z),
                    G = B[0];
                    if (G && G != c.Le) {
                        var O = B[1],
                        P = G.Pg.jf[O + ""] || O;
                        if (!isNaN(parseInt(P))) {
                            G.dg = t.play;
                            var B = c.Ie.gotoFrame(G, P);
                            if (!B)
                                return d.qh = t._g, d.Og = o, p[p.length] = z, !1
                        }
                    }
                    break;
                case j.S:
                    o.dg = !1;
                    var B = c.Ie.gotoFrame(o, o.yh.dc + 1);
                    if (!B)
                        return d.qh = t._g, d.Og = o, !1;
                    break;
                case j.X:
                    o.dg = !1;
                    var B = c.Ie.gotoFrame(o, o.yh.dc - 1);
                    break;
                case j.bb:
                    o = h(d.eh, t.name) || c.Le;
                    break;
                case j.cb:
                    var T = p.pop();
                    o = h(d.eh, T) || c.Le;
                    break;
                case j.F:
                    t.Gg && n("not implemented:GetURL2 load sprite. ignored");
                    var U = p.pop(),
                    V = p.pop();
                    if (V) {
                        if (1 == t.$h || 2 == t.$h) {
                            var W = o.hj,
                            X = [];
                            for (var Y in W)
                                X.push(Y + "=" + (encodeURI(W[Y]) || ""));
                            X.length > 0 && (V += (V.indexOf("?") >= 0 ? "&" : "?") + X.join("&"))
                        }
                        if (t.Hg) {
                            var Z = new XMLHttpRequest;
                            switch (t.$h) {
                            case 0:
                            case 1:
                                Z.open("GET", V, !0),
                                Z.send("");
                                break;
                            case 2:
                                Z.open("POST", V, !0),
                                Z.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=Shift-jis"),
                                Z.send(X.join("&"))
                            }
                            Z.onreadystatechange = function (a) {
                                return function () {
                                    if (4 == Z.readyState && 200 == Z.status) {
                                        var b = h(a, U);
                                        b || (b = a);
                                        for (var c = decodeURI(Z.responseText).split("&"), d = c.length, e = 0; d > e; e++) {
                                            var f = c[e].split("=");
                                            b.hj[f[0]] = f[1]
                                        }
                                    }
                                }
                            }
                            (o)
                        } else
                            switch (t.$h) {
                            case 0:
                            case 1:
                                location.href = V;
                                break;
                            case 2:
                                var $ = document.createElement("form");
                                document.body.appendChild($),
                                $.action = V,
                                $.method = "post";
                                var W = o.hj;
                                for (var Y in W) {
                                    var _ = document.createElement("input");
                                    _.aj = "hidden",
                                    _.name = Y,
                                    _.value = encodeURI(W[Y] || ""),
                                    $.appendChild(_)
                                }
                                $.submit()
                            }
                    } else
                        n("'url' argument of getURL() is empty"), l(o, U);
                    break;
                case j.v:
                    var ab = p.pop(),
                    bb = "" + p.pop(),
                    cb = "" + p.pop(),
                    db = h(o, cb),
                    eb = db && db.wd,
                    J = db && db.nh || null;
                    if (null != J) {
                        var fb = J.we[ab];
                        if (fb) {
                            var gb = fb.id;
                            if (!(fb.Dj && fb.Dj[gb] && fb.Dj[gb].Xf))
                                return -1;
                            J.Fh(gb)
                        }
                        var hb = db.Gd(bb, ab);
                        hb.yh.wc = 1
                    }
                    break;
                case j._:
                    var U = "" + p.pop();
                    l(o, U);
                    break;
                case j.D:
                    p[p.length] = Date.now();
                    break;
                case j.$:
                    p[p.length - 1] = Math.random() * p[p.length - 1] | 0;
                    break;
                case j.B:
                    var ib = p.pop(),
                    jb = p.length;
                    if ("JavaScript" == p[jb - 1]) {
                        var kb = [],
                        lb = eval(p[jb - 2]);
                        p.length -= 2;
                        for (var mb = ib - 2, S = 0; mb > S; S++)
                            kb[S] = p.pop();
                        lb.apply(null, kb),
                        p[p.length] = 0
                    } else
                        p.length -= ib, p[p.length] = -1;
                    break;
                case j.pb:
                    b ? m("Trace: " + p.pop()) : p.pop();
                    break;
                case 0:
                    break;
                default:
                    n("not implemented action:" + t.Id)
                }
            }
            return d.Se = !0,
            !0
        }
    },
    B = function (a) {
        for (var b = 0, c = 0; c < a.length; c++)
            b += k(a.charAt(c)) ? 1 : 2;
        return b
    },
    C = function (a, b, c) {
        for (var d = 0, e = 0, f = [], g = 0; b > e; ) {
            var h = a.charAt(d),
            i = k(h) ? 1 : 2;
            e += i,
            d++
        }
        for (e != b && (f.push("･"), g = 1); d < a.length && c > g; d++) {
            var h = a.charAt(d),
            i = k(h) ? 1 : 2;
            g + i > c ? (f[f.length] = "･", g += 1) : (f[f.length] = h, g += i)
        }
        return f.join("")
    },
    D = function (a, b) {
        var c = a.Vf && a.nh || a,
        d = b + "",
        e = d.split(":");
        return 2 == e.length && (c = E(a, e[0]), d = e[1]),
        [c, d]
    },
    E = function (a, b) {
        if ("" == b)
            return !a.Ke && a || null;
        if (a = a.Ke && a.Ie.Qh || a, "_level0" == b)
            return a.Ie.Qh;
        var c = b.split("/"),
        d = 0;
        "" == c[0] && (a = a.Ie.Qh, d++);
        for (var e; d < c.length; d++)
            if (e = c[d], "" == e || "." == e);
            else if (".." == e) {
                if (!a.nh)
                    return null;
                for (a = a.nh; a.Vf; )
                    a = a.nh
            } else if ("." == e.charAt(0) && (e = e.substring(1)), a = a.Re(e), !a)
                return null;
        return a
    },
    F = ["yc", "Ac", "zc", "Bc", "dc", "uc", "cc", "wc", "xc", "hc", "nc", "tc", "gc", "jc", "ec", "vc", "ic", "fc"],
    G = function (a) {
        var b = {};
        for (var c in a)
            b[c] = a[c];
        return b
    },
    H = function (a, b) {
        var c = E(a, b),
        e = c ? c.nh : null;
        if (null != e && null != c)
            for (var f in e.we)
                if (f >= 16384) {
                    var g = e.we[f];
                    if (a = g.Dj[g.id], a == c) {
                        if (a.Xf)
                            return void e.Fh(g.id);
                        d("[removeSprite] not cloned", a, b)
                    }
                }
    },
    I = function (a) {
        this.Ie = a
    };
    I.prototype.gotoFrame = function (a, b, c) {
        var d = this.Ie,
        e = E(d.Qh, a);
        if (!e)
            return !1;
        if (b =  + (e.Pg.jf[b + ""] || b), !b)
            return !1;
        var f = z([{
                        Id: j.I,
                        af: b,
                        _g: 0
                    }, {
                        Id: j.V,
                        _g: 4
                    }
                ]);
        return c || "undefined" == typeof c ? (d.kj.executeAction(e, f), !0) : (d.kj.Hc(e, f), !0)
    },
    I.prototype.gotoAndStop = function (a, b, c) {
        var d = this.Ie,
        e = E(d.Qh, a);
        if (!e)
            return !1;
        b =  + (e.Pg.jf[b + ""] || b);
        var f = z([{
                        Id: j.I,
                        af: b,
                        _g: 0
                    }, {
                        Id: j.fb,
                        _g: 0
                    }
                ]);
        return c || "undefined" == typeof c ? (d.kj.executeAction(e, f), !0) : (d.kj.Hc(e, f), !0)
    },
    I.prototype.keyDown = function (a) {
        this.Ie.Ui.keyDown(a)
    },
    I.prototype.play = function (a) {
        var b = this.Ie,
        c = a && E(b.Qh, a) || b.Qh;
        return c ? (c.dg = !0, !0) : !1
    },
    I.prototype.stop = function (a) {
        var b = this.Ie,
        c = a && E(b.Qh, a) || b.Qh;
        if (!c)
            return !1;
        var d = z([{
                        Id: j.fb,
                        _g: 0
                    }
                ]);
        return b.kj.Hc(c, d),
        !0
    },
    I.prototype.stopAll = function (a) {
        var b = this.Ie,
        c = a && E(b.Qh, a) || b.Qh;
        if (!c)
            return !1;
        var d = function (a) {
            var c = z([{
                            Id: j.fb,
                            _g: 0
                        }
                    ]);
            b.kj.Hc(a, c);
            for (var e = a.children, f = e.length, g = 0; f > g; g++)
                d(e[g])
        };
        return d(c),
        !0
    },
    I.prototype.getVariable = function (a, b) {
        var c = this.Ie,
        d = E(c.Qh, a);
        return d ? d.hj[b] : void 0
    },
    I.prototype.getVariables = function (a, b) {
        var c = E(this.Ie.Qh, a);
        if (c) {
            if (!b)
                return c.hj;
            if (!(b instanceof Array))
                return void d("variableNames should be an Array.");
            for (var e, f = {}, g = c.hj, h = b.length, i = 0; h > i; i++)
                e = b[i], g.hasOwnProperty(e) && (f[e] = g[e]);
            return f
        }
    },
    I.prototype.destroy = function () {
        this.Ie.Ui.removeAllListeners();
        var a = n.rf();
        return a.Gj(this.Ie)
    },
    I.prototype.setVariable = function (a, b, c) {
        var d = this.Ie,
        e = E(d.Qh, a);
        return e ? (e.hj[b] = c, !0) : !1
    },
    I.prototype.setVariables = function (a, b) {
        var c = E(this.Ie.Qh, a);
        if (!c)
            return !1;
        var d = c.hj;
        for (var e in b)
            d[e] = b[e];
        return !0
    };
    var J = function (a, b, c) {
        var d = a.Ie,
        e = b && E(d.Qh, b);
        return e ? e.yh[c] : void 0
    };
    I.prototype.getCurrentFrame = function (a) {
        return J(this, a || "/", "dc")
    },
    I.prototype.getTotalFrames = function (a) {
        return J(this, a || "/", "uc")
    },
    I.prototype.getVisible = function (a) {
        return J(this, a || "/", "wc")
    },
    I.prototype.setVisible = function (a, b) {
        var c = this.Ie,
        e = E(c.Qh, a);
        if (!e)
            return !1;
        var f = +b;
        return 0 == f || 1 == f ? (e.bi("wc", f), !0) : (d("Invalid value: " + b), !1)
    },
    I.prototype.setPosition = function (a, b, c) {
        var d = E(this.Ie.Qh, a);
        return d ? (d.ag = !0, d.bi("yc", +b || 0), d.bi("Ac", +c || 0), !0) : !1
    },
    I.prototype.setMovieClipProperty = function (a, b, c) {
        var d = this.Ie,
        e = E(d.Qh, a);
        if (!e)
            return !1;
        switch (b) {
        case "zc":
            e.ag = !0,
            e.ei(+c || 0);
            break;
        case "Bc":
            e.ag = !0,
            e.fi(+c || 0);
            break;
        case "nc":
            e.ag = !0,
            e.ci(+c || 0);
            break;
        case "yc":
        case "Ac":
        case "cc":
            e.ag = !0,
            e.bi(b, +c || 0);
            break;
        case "fc":
        case "ic":
        case "wc":
            (0 == c || 1 == c) && e.bi(b, +c);
            break;
        default:
            return !1
        }
        return !0
    },
    I.prototype.getMovieClipProperty = function (a, b) {
        var c = this.Ie,
        d = E(c.Qh, a);
        return d ? d.yh[b] : void 0
    },
    I.prototype.ready = function (a) {
        this.Ie.Fg ? a() : this.Ie.readyCallbacks.push(a)
    },
    I.prototype.engineStart = function () {
        return this.Ie.Vh = !0,
        !0
    },
    I.prototype.engineStop = function () {
        return this.Ie.Vh = !1,
        !0
    },
    I.prototype.getMovieClipNames = function (a) {
        var b = this.Ie,
        c = a && E(b.Qh, a) || b.Qh;
        return c ? Object.keys(c.Ad) : null
    },
    I.prototype.getFrameLabelMap = function (a) {
        var b = this.Ie,
        c = a && E(b.Qh, a) || b.Qh;
        if (!c)
            return null;
        var d = c.Pg.jf,
        e = {};
        for (var f in d)
            e[f] = d[f];
        return e
    },
    I.prototype._getCacheImageInfo = function () {
        var a = this.Ie.Ih;
        return a && a.pd
    },
    I.prototype.replaceMovieClip = function (a, b, c, d, e, f, g) {
        for (var h = this.Ie, i = h.Ri, j = 0; j < i.length; j++) {
            var k = i[j];
            k.yh.jc == a && k.replaceMovieClip(b, c, d, e, f, g)
        }
        for (var l = h.ch.replace || (h.ch.replace = []), j = 0; j < l.length; j++) {
            var m = l[j];
            if (m.name == a)
                return m.img = b, m.width = c, m.height = d, m.keepAspect = e, m.xratio = f, void(m.yratio = g)
        }
        l.push({
            name: a,
            img: b,
            width: c,
            height: d,
            keepAspect: e,
            xratio: f,
            yratio: g
        })
    },
    I.prototype.getRenderingContext = function () {
        return this.Ie && this.Ie.Ih && this.Ie.Ih.be
    },
    I.prototype._getStatics = function () {
        return {
            _frameCount: this.Ie.df,
            renderCount: this.Ie.renderCount
        }
    },
    I.prototype.getMovieClipNamesAtPoint = function (a, b) {
        var c = [];
        a *= 20,
        b *= 20;
        var d = function (e) {
            var f = e.qf(e.wf());
            if (f[0] <= a && a <= f[1] && f[2] <= b && b <= f[3]) {
                c.push(e.Cc || "/");
                for (var g = e.children, h = g.length, i = 0; h > i; i++)
                    d(g[i])
            }
        };
        return d(this.Ie.Qh),
        c
    },
    I.prototype.addEventListener = function (a, b, c) {
        switch (a.toLowerCase()) {
        case "enterframe":
            var e = E(this.Ie.Qh, c);
            if (!e)
                return !1;
            var f = e.onEnterFrames.indexOf(b);
            if (-1 !== f)
                return !1;
            e.onEnterFrames.push(b);
            break;
        case "movieclipcreate":
            var g = this.Ie,
            f = g.onCreateMC.indexOf(b);
            if (-1 !== f)
                return !1;
            g.onCreateMC.push(b);
            break;
        default:
            d("Invalid event: " + a)
        }
        return !0
    },
    I.prototype.removeEventListener = function (a, b, c) {
        switch (a.toLowerCase()) {
        case "enterframe":
            var e = E(this.Ie.Qh, c);
            if (!e)
                return !1;
            var f = e.onEnterFrames.indexOf(b);
            if (-1 === f)
                return !1;
            e.onEnterFrames.splice(f, 1);
            break;
        case "movieclipcreate":
            var g = this.Ie,
            f = g.onCreateMC.indexOf(b);
            if (-1 === f)
                return !1;
            g.onCreateMC.splice(f, 1);
            break;
        default:
            d("Invalid event: " + a)
        }
        return !0
    },
    I.prototype.redraw = function () {
        this.Ie.Ih.Hh()
    },
    I.prototype.getFPS = function () {
        return this.Ie.getFPS()
    },
    I.prototype.setFPS = function (a) {
        this.Ie.setFPS(a)
    },
    I.prototype.getFrameSkipRatio = function () {
        return this.Ie.getFrameSkipRatio()
    },
    I.prototype.setFrameSkipRatio = function (a) {
        return this.Ie.setFrameSkipRatio(a)
    },
    I.prototype.callActions = function (a, b) {
        var c = this.Ie,
        d = E(c.Qh, a);
        if (!d)
            return !1;
        if (b =  + (d.Pg.jf[b + ""] || b), !b)
            return !1;
        var e = z([{
                        Id: j.Y,
                        fj: [b],
                        _g: 0
                    }, {
                        Id: j.s,
                        $g: 2,
                        _g: 1
                    }, {
                        Id: 0,
                        _g: 2
                    }
                ]);
        return c.kj.executeAction(d, e),
        !0
    },
    I.prototype.loadMovie = function (a, b, c) {
        var d = E(this.Ie.Qh, a);
        return d ? void d.loadMovie(a, b, c) : !1
    },
    I.prototype.showFrame = function (a) {
        var b = this.Ie.lastStopFrame || 0,
        c = 1 + a * this.Ie.mf | 0;
        return b != c && (this.Ie.stopFrame = c, this.Ie.Qi(Date.now())),
        this.Ie.Qh.yh.dc
    };
    var L = function (a) {
        if (this.Ie = a, this.eg = !1, this.Vg = null, this.Wg = null, this.ee = {
                x: 0,
                y: 0
            }, this.kg = {}, this.listenerList = [], this.Ie.ch.enableTouch) {
            var c = this;
            this.addListener(document, "keydown", function (a) {
                c.keyDown(a.keyCode)
            }, !1),
            "ontouchstart" in document.body || (a.ch.debug && b("PC browser mode detected"), this.addListener(a.Qd, "mousedown", function (a) {
                    c.Xi.call(c, a),
                    a.preventDefault()
                }, !1), this.addListener(document, "mouseup", function (a) {
                    c.Wg = {
                        x: c.ee.x,
                        y: c.ee.y
                    },
                    c.eg && (c.Wi.call(c, a), a.preventDefault())
                }, !1)),
            this.addListener(a.Qd, "touchstart", function (a) {
                c.Xi.call(c, a.touches[0]),
                a.preventDefault()
            }, !1),
            this.addListener(document, "touchend", function (a) {
                c.Wg = {
                    x: c.ee.x,
                    y: c.ee.y
                },
                c.eg && (c.Wi.call(c, a), a.preventDefault())
            }, !1)
        }
    };
    L.prototype.vf = function (a) {
        var b = a.pageX,
        c = a.pageY,
        d = this.Ie.Qd.style.zoom;
        if (d) {
            var e = d.substring(0, d.length - 1) / 100;
            b /= e,
            c /= e
        }
        for (var f = this.Ie.canvas; f; )
            b -= f.offsetLeft, c -= f.offsetTop, f = f.offsetParent;
        return {
            x: b,
            y: c
        }
    },
    L.prototype.keyDown = function (a) {
        this.kg[a] = !0
    },
    L.prototype.Xi = function (a) {
        var b = this.vf(a);
        return this.di(b.x, b.y),
        this.yg ? (this.Vi(b.x, b.y), !1) : (this.eg = !0, this.yi = (new Date).getTime(), this.Yi = b, this.Qf = b, this.sg = b, !1)
    },
    L.prototype.Wi = function (a) {
        return this.eg = !1,
        this.Wg = {
            x: this.sg.x,
            y: this.sg.y
        },
        this.Zh(),
        !1
    },
    L.prototype.Dd = function () {
        this.Vg = null,
        this.Wg = null
    },
    L.prototype.Cd = function () {
        this.kg = {}
    },
    L.prototype._f = function (a) {
        return this.kg[a] || !1
    },
    L.prototype.Vi = function (a, b) {
        this.ah && this.ah(a, b) || (this.Vg = {
                x: a,
                y: b
            }, this.yg && this.yg !== !0 && this.keyDown(this.yg), !this.yg && this.Ve && this.Ve.Ui && this.keyDown(this.Ve.Ui))
    },
    L.prototype.Zh = function () {
        if (!this.sg || this.sg.x == this.Qf.x && this.sg.y == this.Qf.y)
            return void this.Vi(this.Yi.x, this.Yi.y);
        if (this.Ve) {
            var a = Math.atan2(this.sg.x - this.Qf.x, -this.sg.y + this.Qf.y) / Math.PI * 180;
            for (var b in this.Ve) {
                var c = b.split(":");
                2 == c.length && (c[0] <= a && a <= c[1] || c[0] <= a + 360 && a + 360 <= c[1]) && this.keyDown(this.Ve[b])
            }
        }
    },
    L.prototype.di = function (a, b) {},
    L.prototype.addListener = function (a, b, c, d) {
        this.listenerList.push([a, b, c]),
        a.addEventListener(b, c, d)
    },
    L.prototype.removeAllListeners = function () {
        for (var a = this.listenerList.length, b = 0; a > b; b++) {
            var c = this.listenerList[b];
            c[0].removeEventListener(c[1], c[2], !1),
            this.listenerList[b] = null
        }
    };
    var M = function (a) {
        var b = a[0] * a[3] - a[1] * a[2];
        return 0 == b && d("revTransform: detT == 0"),
        [a[3] / b, -a[1] / b, -a[2] / b, a[0] / b, (a[2] * a[5] - a[3] * a[4]) / b, (a[1] * a[4] - a[0] * a[5]) / b]
    },
    N = function (a, b) {
        return 0 == a[2] && 0 == a[1] ? 0 == b[2] && 0 == b[1] ? [a[0] * b[0], 0, 0, a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]] : [a[0] * b[0], a[3] * b[1], a[0] * b[2], a[3] * b[3], a[0] * b[4] + a[4], a[3] * b[5] + a[5]] : 0 == b[2] && 0 == b[1] ? [a[0] * b[0], a[1] * b[0], a[2] * b[3], a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]] : [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]]
    },
    O = function (a, b, c) {
        var d = [],
        e = b[0],
        f = b[1],
        g = b[2],
        h = b[3],
        i = f - e,
        j = h - g,
        k = c ? [a[0] * e + a[2] * g + a[4], a[1] * e + a[3] * g + a[5]] : l(a, e, g),
        m = a[0] * i,
        n = a[1] * i,
        o = a[2] * j,
        p = a[3] * j;
        return m >= 0 ? o >= 0 ? (d[1] = k[0] + m + o, d[0] = k[0]) : (d[1] = k[0] + m, d[0] = k[0] + o) : o >= 0 ? (d[1] = k[0] + o, d[0] = k[0] + m) : (d[1] = k[0], d[0] = k[0] + m + o),
        n >= 0 ? p >= 0 ? (d[3] = k[1] + n + p, d[2] = k[1]) : (d[3] = k[1] + n, d[2] = k[1] + p) : p >= 0 ? (d[3] = k[1] + p, d[2] = k[1] + n) : (d[3] = k[1], d[2] = k[1] + n + p),
        d
    },
    P = function (a) {
        var b = [a >> 16 & 255, a >> 8 & 255, 255 & a, (a >> 24 & 255) / 255];
        return "rgba(" + b.join() + ")"
    },
    Q = function (a, b, c) {
        var d = function (a) {
            return Math.round(100 * a)
        };
        if (c) {
            if (d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1]))
                return !0
        } else if (d(a[4]) == d(b[4]) && d(a[5]) == d(b[5]) && d(a[2]) == d(b[2]) && d(a[0]) == d(b[0]) && d(a[3]) == d(b[3]) && d(a[1]) == d(b[1]))
            return !0;
        return !1
    },
    R = function (a, b) {
        if (a.length != b.length)
            return !1;
        for (var c = a.length, d = 0; c > d; d++)
            for (var e = a[d], f = b[d], g = 0; 8 > g; g++)
                if (e[g] != f[g])
                    return !1;
        return !0
    },
    S = function (a, b) {
        var c = a.length;
        if (!c)
            return P(b);
        for (var d = [b >> 16 & 255, b >> 8 & 255, 255 & b, b >> 24 & 255], e = c - 1; e >= 0; e--) {
            var f = a[e];
            d[0] = 0 | Math.max(0, Math.min(255, d[0] * f[0] / 256 + f[4])),
            d[1] = 0 | Math.max(0, Math.min(255, d[1] * f[1] / 256 + f[5])),
            d[2] = 0 | Math.max(0, Math.min(255, d[2] * f[2] / 256 + f[6])),
            d[3] = Math.max(0, Math.min(255, d[3] * f[3] / 256 + f[7]))
        }
        return d[3] /= 255,
        "rgba(" + d.join() + ")"
    },
    T = function (a) {
        return function (b, c) {
            if (!c.width)
                return c;
            var d = b.length;
            if (!d)
                return c;
            for (var e = c.width, f = c.height, g = e * f, h = 0; d > h; h++)
                g += "-" + b[h].join();
            var i = a.getColoredImage(g, c);
            return i ? i : (i = U(b, c), a.cacheColoredImage(g, c, i), U.hh = null, i)
        }
    },
    U = function () {
        var a = null;
        if (navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/) && RegExp.$1 < 27) {
            var b,
            c = function (a, d, e, f) {
                if (e * f > 65536)
                    if (e > f) {
                        var g = .5 * e | 0;
                        c(a, d, g, f),
                        c(a + g, d, e - g, f)
                    } else {
                        var h = .5 * f | 0;
                        c(a, d, e, h),
                        c(a, d + h, e, f - h)
                    }
                else
                    b.push([a, d, e, f])
            };
            a = function (a, d) {
                return b = [],
                c(0, 0, a, d),
                b
            }
        }
        var e = ["#ff0000", "#00ff00", "#0000ff"],
        f = function (a, b, c, d, e, f) {
            for (var g = b.length - 1; g >= 0; g--) {
                var h = b[g];
                if (256 != h[e] && (a.globalCompositeOperation = "source-over", a.fillStyle = "rgb(0,0,0)", a.globalAlpha = 1 - h[e] / 256, a.fillRect(0, 0, c, d)), 0 != h[e + 4]) {
                    var i = h[e + 4] / 255;
                    0 > i ? (a.globalCompositeOperation = "darker", a.fillStyle = "rgb(0,0,0)", i = -i) : (a.globalCompositeOperation = "lighter", a.fillStyle = f),
                    a.globalAlpha = i,
                    a.fillRect(0, 0, c, d)
                }
            }
        };
        return function (b, c) {
            if (!c.width)
                return c;
            var g = b.length;
            if (!g)
                return c;
            var h = c.width,
            i = c.height,
            j = U.hh || (U.hh = $.getFreeCanvas());
            j.width = h,
            j.height = i;
            var k = j.getContext("2d");
            if (1 == b.length) {
                var l = b[0];
                if (256 == l[0] && 256 == l[1] && 256 == l[2] && 0 == l[4] && 0 == l[5] && 0 == l[6])
                    return k.globalAlpha = l[3] / 256, k.drawImage(c, 0, 0), j
            }
            var m = U.Mc || (U.Mc = $.getFreeCanvas());
            m.width = h,
            m.height = i;
            var n = m.getContext("2d");
            n.drawImage(c, 0, 0),
            n.globalCompositeOperation = "source-atop",
            n.fillStyle = "rgba(255,255,255,1)",
            n.fillRect(0, 0, h, i);
            for (var o = g - 1; o >= 0; o--) {
                var l = b[o];
                n.globalCompositeOperation = "destination-in",
                n.globalAlpha = Math.min(Math.max(0, l[3] / 256), 1),
                n.fillRect(0, 0, h, i),
                l[7] && (n.globalCompositeOperation = "lighter", n.fillStyle = "rgba(255,255,255,1)", n.globalAlpha = l[7] / 255, n.fillRect(0, 0, h, i), d("[transformImageColor] addAlpha detected. not support"))
            }
            for (var p = !0, o = g - 1; o >= 0; o--) {
                var l = b[o],
                q = l[0],
                r = l[4];
                if (q != l[1] || q != l[2] || r != l[5] || r != l[6]) {
                    p = !1;
                    break
                }
            }
            var s = a && a(h, i) || [[0, 0, h, i]];
            if (p) {
                var t = "rgb(255,255,255)";
                if (1 === s.length)
                    k.drawImage(c, 0, 0), f(k, b, h, i, 0, t);
                else
                    for (var u = U.regionCanvas || (U.regionCanvas = $.getFreeCanvas()), v = u.getContext("2d"), w = s.length - 1; w >= 0; w--) {
                        var x = s[w],
                        y = x[0],
                        z = x[1],
                        A = u.width = x[2],
                        B = u.height = x[3];
                        v.drawImage(c, y, z, A, B, 0, 0, A, B),
                        f(v, b, A, B, 0, t),
                        k.drawImage(u, y, z)
                    }
            } else
                for (var C = U.Nh || (U.Nh = []), D = U.Mh || (U.Mh = []), E = s.length - 1; E >= 0; E--) {
                    for (var x = s[E], y = x[0], z = x[1], A = x[2], B = x[3], w = 0; 3 > w; w++) {
                        var F = D[w] || (D[w] = $.getFreeCanvas());
                        F.width = A,
                        F.height = B;
                        var G = C[w] || (C[w] = F.getContext("2d"));
                        G.drawImage(c, y, z, A, B, 0, 0, A, B),
                        G.globalCompositeOperation = "darker",
                        G.fillStyle = e[w],
                        G.fillRect(0, 0, A, B)
                    }
                    k.globalCompositeOperation = "lighter";
                    for (var w = 0; 3 > w; w++)
                        f(C[w], b, A, B, w, e[w]), k.drawImage(D[w], y, z)
                }
            return k.globalCompositeOperation = "destination-in",
            k.globalAlpha = 1,
            k.drawImage(m, 0, 0),
            j
        }
    }
    (),
    V = function (a, b) {
        if (a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), 0 == b)
            return a.split("\n");
        for (var c = [], d = "", e = 0, f = 0, g = "", h = a.length, i = 0; h > i; i++) {
            var j = a.charAt(i),
            l = k(j) ? 1 : 2;
            "\n" == j ? (e + f > b ? (c.push(d), c.push(g)) : c.push(d + g), d = "", e = 0, g = "", f = 0) : (f + l > b && ("" == d ? c.push(g) : (c.push(d), c.push(g), d = "", e = 0), g = "", f = 0), g += j, f += l),
            (" " == j || i == h - 1) && (e + f > b ? (c.push(d), d = g, e = f) : (d += g, e += f), g = "", f = 0)
        }
        return c.push(d),
        c
    },
    W = function (a, b) {
        var c = b.Rf,
        e = b.gj;
        if (e) {
            var f;
            f = "/" == e.charAt(0) || "." == e.charAt(0) ? e : a.Cc + ":" + e;
            var g = D(a, f);
            if (g[0]) {
                var h = g[0].hj[g[1]];
                "undefiend" == typeof h ? d("Cannot found:" + e, a, b) : c = h + ""
            } else
                d("Invalid movie clip name specified:" + e, a, b)
        }
        return c
    },
    X = function (a, b, d, e, f, g, j) {
        var k = "",
        m = b.gi[d],
        n = [{
                cmd: "SolidFill",
                Kd: e,
                aj: i.zb
            }
        ],
        o = function () {
            var a,
            b,
            d,
            e,
            f,
            g,
            j,
            m,
            n,
            o,
            p = function (a) {
                for (var b = [], c = a.length, d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    null != e.he ? b.push({
                        oj: e.pj,
                        rj: e.sj,
                        he: e.he,
                        ke: e.ke,
                        pj: e.oj,
                        sj: e.rj
                    }) : b.push({
                        oj: e.pj,
                        rj: e.sj,
                        pj: e.oj,
                        sj: e.rj
                    })
                }
                return b
            },
            q = function (a) {
                if (m.length) {
                    if (0 != f ? (b[f - 1] = b[f - 1] || [], b[f - 1].push(m)) : 0 != g && 0 != j && (o[g - 1].aj == i.zb ? (e[g - 1] = e[g - 1] || [], e[g - 1].push(m)) : o[j - 1].aj == i.zb && (e[j - 1] = e[j - 1] || [], e[j - 1].push(m))), 0 != g) {
                        var c = g - 1;
                        a && (c = 0),
                        d[c] = d[c] || [],
                        d[c].push(m)
                    }
                    if (0 != j) {
                        var c = j - 1;
                        a && (c = 0),
                        d[c] = d[c] || [],
                        d[c].push(p(m))
                    }
                    m = []
                }
            },
            r = function () {
                a.push({
                    Bg: n,
                    Qe: o,
                    zg: b,
                    Ne: d,
                    Lg: e
                }),
                b = [],
                d = [],
                e = []
            },
            s = function (a, b) {
                k += "ib.beginPath();",
                v(a);
                for (var c = b.length, d = 0; c > d; d++) {
                    var e = b[d];
                    k += "ib.moveTo(" + e[0].oj / 20 + "," + e[0].rj / 20 + ");";
                    for (var f = e.length, g = 0; f > g; g++) {
                        var h = e[g];
                        k += null != h.he ? "ib.quadraticCurveTo(" + h.he / 20 + "," + h.ke / 20 + "," + h.pj / 20 + "," + h.sj / 20 + ");" : "ib.lineTo(" + h.pj / 20 + "," + h.sj / 20 + ");"
                    }
                }
                k += "ib.stroke();"
            },
            t = function (a, b) {
                if (!b)
                    return a;
                var c,
                d = {};
                return c = l(b, a.oj, a.rj),
                d.oj = c[0],
                d.rj = c[1],
                c = l(b, a.pj, a.sj),
                d.pj = c[0],
                d.sj = c[1],
                null != a.he && (c = l(b, a.he, a.ke), d.he = c[0], d.ke = c[1]),
                d
            },
            u = function (a) {
                do {
                    for (var b = [], c = !1, d = a.length, e = 0; d > e; e++) {
                        for (var f = b.length, g = 0; f > g; g++) {
                            var h = a[e].length - 1,
                            i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]),
                                c = !0;
                                break
                            }
                            if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]),
                                c = !0;
                                break
                            }
                        }
                        g == b.length && b.push(a[e])
                    }
                    a = b
                } while (c);
                return a
            },
            v = function (a) {
                if (null != a.width) {
                    var b = a.width / 20;
                    k += "ib.lineWidth=" + b + "*jb<1?1/jb:" + b + ";"
                }
                null != a.Kd && (k += "ib.strokeStyle=kb(lb," + a.Kd + ");")
            },
            w = function (a) {
                var b = null;
                switch (a.aj) {
                case i.zb:
                    k += "ib.fillStyle=kb(lb," + a.Kd + ");";
                    break;
                case i.yb:
                case i.sb:
                case i.wb:
                case i.vb:
                    var d = a.Mg;
                    b = [d[0] / 20, d[1] / 20, d[2] / 20, d[3] / 20, d[4], d[5]],
                    k += "var img=mb[" + a._c + "].img;",
                    k += "if(img.width==0&&img.height==0){return false;}",
                    k += "if(lb.length) {img=nb(lb,img);}",
                    k += "ib.fillStyle=ib.createPattern(img,'repeat');";
                    break;
                case i.ub:
                case i.xb:
                    b = a.Mg,
                    k += "var ob;",
                    k += a.aj == i.ub ? "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);" : "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);";
                    for (var e = a.zf.Bh.length, f = 0; e > f; f++) {
                        var g = a.zf.Bh[f];
                        k += "ob.addColorStop(" + g.Ah / 255 + ",kb(lb, " + g.Kd + "));"
                    }
                    k += "ib.fillStyle=ob;";
                    break;
                default:
                    c("renderShape.setFillStyle: unknown draw type called: " + a.aj)
                }
                return b
            },
            x = function (a, b) {
                if (b.aj != i.sb)
                    return !1;
                var c = b.Mg;
                if (!c || c[0] != c[3] || 0 != c[1] || 0 != c[2])
                    return !1;
                if (1 != a.length)
                    return !1;
                var d = a[0];
                if (4 != d.length)
                    return !1;
                for (var e = [], f = 0; 4 > f; f++) {
                    var g = d[f];
                    if (g.he || g.ke)
                        return !1;
                    e[e.length] = {
                        x: g.pj - g.oj,
                        y: g.sj - g.rj
                    }
                }
                if (0 == e[0].x && 0 == e[1].y && 0 == e[2].x && 0 == e[3].y && e[0].y == -e[2].y && e[1].x == -e[3].x || 0 == e[0].y && 0 == e[1].x && 0 == e[2].y && 0 == e[3].x && e[0].x == -e[2].x && e[1].y == -e[3].y) {
                    var h = [c[0] / 20, c[1], c[2], c[3] / 20, c[4], c[5]],
                    j = b._c;
                    return k += "var img=mb[" + j + "].img;",
                    k += "if(img.width==0&&img.height==0){return false;}",
                    k += "if(lb.length) {img=nb(lb,img);}",
                    k += "ib.transform(" + h.join() + ");",
                    k += "ib.drawImage(img, 0, 0);",
                    k += "ib.transform(" + M(h).join() + ");",
                    !0
                }
                return !1
            };
            return function (i, l, p, v) {
                a = [],
                o = i,
                n = l,
                b = [],
                d = [],
                e = [],
                f = 0,
                g = 0,
                j = 0,
                m = [];
                for (var y = 0, z = 0, A = p.length, B = 0; A > B; B++) {
                    var C = p[B];
                    switch (C.aj) {
                    case h.tb:
                        var D = y + C.he,
                        E = z + C.ke,
                        F = D + C.Wc,
                        G = E + C.Xc;
                        m.push({
                            oj: y,
                            rj: z,
                            he: D,
                            ke: E,
                            pj: F,
                            sj: G
                        }),
                        y = F,
                        z = G;
                        break;
                    case h.Ab:
                        var F = y + C.x,
                        G = z + C.y;
                        m.push({
                            oj: y,
                            rj: z,
                            pj: F,
                            sj: G
                        }),
                        y = F,
                        z = G;
                        break;
                    case h.Bb:
                        q(v),
                        (C.Bg || C.Qe) && (r(), n = C.Bg || n, o = C.Qe || o),
                        null != C.Ae && (y = C.Ae),
                        null != C.Be && (z = C.Be),
                        null != C.Ag && (f = C.Ag),
                        null != C.Oe && (g = C.Oe),
                        null != C.Pe && (j = C.Pe);
                        break;
                    default:
                        c("drawObject.renderShape: Unknown type detected:", C.aj)
                    }
                }
                q(v),
                r(),
                k += "ib.lineCap='round';";
                for (var H = a.length, B = 0; H > B; B++) {
                    var I = a[B];
                    if (n = I.Bg, o = I.Qe, b = I.zg, d = I.Ne, e = I.Lg, !v)
                        for (var J = e.length, K = 0; J > K; K++) {
                            var L = e[K];
                            if (L) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, L)
                            }
                        }
                    for (var O = d.length, K = 0; O > K; K++) {
                        var P,
                        Q = d[K];
                        if (Q) {
                            if (Q = u(Q), x(Q, o[K]))
                                continue;
                            if (!v) {
                                var R = w(o[K]);
                                R && (k += "ib.transform(" + R.join() + ");"),
                                P = R && M(R) || null
                            }
                            (!v || 0 == B && 0 == K) && (k += "ib.beginPath();");
                            for (var S = Q.length, T = 0; S > T; T++) {
                                var U = Q[T];
                                if (U) {
                                    var V = t(U[0], P);
                                    k += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    for (var W = (U.length, 0); W < U.length; W++) {
                                        var X = t(U[W], P);
                                        k += null != X.he ? "ib.quadraticCurveTo(" + X.he / 20 + "," + X.ke / 20 + "," + X.pj / 20 + "," + X.sj / 20 + ");" : "ib.lineTo(" + X.pj / 20 + "," + X.sj / 20 + ");"
                                    }
                                }
                            }
                            v ? B == a.length - 1 && K == d.length - 1 && (k += "ib.clip();", k += "if(ib.globalCompositeOperation!='source-over'){", k += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';", k += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);", k += "ib.drawImage(copiedCanvas,0,0);ib.restore();}") : (k += "ib.fill();", P && (k += "ib.transform(" + P.join() + ");"))
                        }
                    }
                    if (!v)
                        for (var Y = b.length, K = 0; Y > K; K++) {
                            var L = b[K];
                            L && s(n[K], L)
                        }
                }
            }
        }
        ();
        return o(n, null, m, f),
        k
    },
    Y = function (a, b, c, d, e, f, g, h, i) {
        for (var j, k, l, m, n = [], o = 0, p = a.length; p > o; ) {
            for (j = 0, k = [], l = [], m = 0; p > o; o++) {
                var q = a.charCodeAt(o),
                r = -1;
                if (1 == i.multiline && 10 == q) {
                    if (j + m > b) {
                        o -= l.length - 1;
                        break
                    }
                    o++,
                    k = k.concat(l),
                    j += m;
                    break
                }
                for (var s in g.Jd)
                    if (g.Jd[s] == q) {
                        r = s;
                        break
                    }
                if (-1 != r) {
                    var t = g.We[r];
                    if (m + t > b) {
                        if (k.length)
                            o -= l.length;
                        else {
                            if (t > b && 0 == l.length) {
                                k.push(r),
                                j = t,
                                o++;
                                break
                            }
                            k = k.concat(l),
                            j += m
                        }
                        break
                    }
                    if (l.push(r), m += t, 32 == q || o == p - 1) {
                        if (1 == i.multiline && 1 == i.mj && j + m > b) {
                            o -= l.length - 1;
                            break
                        }
                        k = k.concat(l),
                        j += m,
                        m = 0,
                        l = []
                    }
                }
            }
            var u = 0;
            switch (i.align) {
            case 1:
                u = (d - c) / h * 20 - j;
                break;
            case 2:
            case 3:
                u = ((d - c) / h * 20 - j) / 2
            }
            n.push({
                indices: k,
                align: u / 20
            })
        }
        return n
    },
    Z = function (a) {
        var b = a.width,
        c = a.height;
        if (!(65536 >= b * c || b >= 4096 || c >= 4096)) {
            var d = document.createElement("div");
            d.style.width = b + "px",
            d.style.height = c + "px",
            d.style.overflow = "hidden";
            var e = a.parentNode;
            e.insertBefore(d, a),
            e.removeChild(a),
            d.appendChild(a),
            b > c ? a.width = 4096 : a.height = 4096
        }
    },
    $ = function (a) {
        this._cacheMaxTotalSize = a || 15728640,
        this._cacheSize = 0,
        this._coloredImageCache = {},
        this._imageInfoCache = {},
        this._usedCanvases = []
    };
    $._freeCanvases = [],
    $.getFreeCanvas = function () {
        return $._freeCanvases.pop() || document.createElement("canvas")
    },
    $.destroyCanvas = function (a) {
        a.width = a.height = 16,
        $._freeCanvases.push(a)
    },
    $.prototype.getImageInfo = function (a) {
        return this._imageInfoCache[a]
    },
    $.prototype.cacheImageInfo = function (a, b) {
        if (b) {
            var c = b.img,
            d = c.width * c.height << 2;
            this._cacheSize + d > this._cacheMaxTotalSize && this.clearCache(),
            this._imageInfoCache[a] = b,
            this._cacheSize += d,
            this._usedCanvases.push(c)
        }
    },
    $.prototype.getColoredImage = function (a, b) {
        var c = this._coloredImageCache[a];
        if (c)
            for (var d = c.length, e = 0; d > e; e++) {
                var f = c[e];
                if (f[0] == b)
                    return f[1]
            }
        return null
    },
    $.prototype.cacheColoredImage = function (a, b, c) {
        var d = c.width * c.height << 2,
        e = this._coloredImageCache[a] || (this._coloredImageCache[a] = []);
        this._cacheSize + d > this._cacheMaxTotalSize && this.clearCache(),
        e.push([b, c]),
        this._cacheSize += d,
        this._usedCanvases.push(c)
    },
    $.prototype.clearCache = function () {
        this._imageInfoCache = {},
        this._coloredImageCache = {},
        this._cacheSize = 0;
        for (var a = this._usedCanvases, b = $._freeCanvases, c = a.length, d = 0; c > d; d++) {
            var e = a[d];
            e.width = e.height = 16,
            b.push(e)
        }
        this._usedCanvases = []
    };
    var _ = function (a) {
        this.Ie = a,
        this.Qd = a.Qd,
        this.qd = {},
        this.od = {},
        this.nd = {},
        this.Rh = 1,
        this.cacheController = new $(a.ch.cacheMaxTotalSize),
        this.Zi = a.ch.cacheColoredImage ? T(this.cacheController) : U
    };
    _.sd = function (a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
        c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    },
    _.prototype._h = function (a) {
        if (this._i = a[1] - a[0], this.$i = a[3] - a[2], !this.be) {
            var c;
            "canvas" == this.Qd.tagName.toLowerCase() ? c = this.Ie.canvas = this.Qd : (c = this.Ie.canvas = document.createElement("canvas"), this.Qd.appendChild(c));
            var e,
            f,
            g,
            h = this._i / 20,
            i = this.$i / 20,
            j = this.Ie.ch,
            k = null;
            if (j.width || j.height) {
                if (j.fixRatio) {
                    e = j.width && j.width / h || j.height && j.height / i || 1;
                    var l = h * e | 0,
                    m = i * e | 0;
                    f = l / h,
                    g = m / i,
                    h = l,
                    i = m
                } else {
                    var f = j.width && j.width / h || 1,
                    g = j.height && j.height / i || 1;
                    h = j.width || h,
                    i = j.height || i
                }
                k = [f, 0, 0, g, 0, 0],
                e = f > g ? f : g
            } else
                e = 1;
            if (this.Ah = e, j.frameRect) {
                var n = j.frameRect;
                h = n[2] * (f || e),
                i = n[3] * (g || e),
                k || (k = [1, 0, 0, 1, 0, 0]),
                k[4] = -n[0] * (f || e),
                k[5] = -n[1] * (g || e)
            }
            c.width != (0 | h) && (j.debug && b("set canvas width to " + (0 | h)), c.width = 0 | h),
            c.height != (0 | i) && (j.debug && b("set canvas height to " + (0 | i)), c.height = 0 | i),
            this.frameWidth = c.width,
            this.frameHeight = c.height,
            j._enableWorkaroundForUnicolor && Z(c),
            this.width = k && h / k[0] || h,
            this.height = k && i / k[3] || i;
            var o = c.getContext("2d");
            this.be = o,
            k && (j.origin && (j.frameRect ? d("option.origin is ignored because option.frameRect is specified.") : (k[4] = j.origin[0], k[5] = j.origin[1])), o.transform.apply(o, k), this.Ie.Sh = k, this.Rh = _.sd(k))
        }
    },
    _.prototype.Hh = function (a, c, d, e) {
        var f = this.Ie,
        g = f.ch,
        h = this.be;
        if (h) {
            if (!a) {
                var i = h.canvas;
                null != f.$c ? (h.fillStyle = P(f.$c), h.fillRect(0, 0, this.width + 1, this.height)) : h.clearRect(0, 0, this.width + 1, this.height),
                h.save(),
                a = this.Ie.Qh,
                c = []
            }
            if (a.yh.wc) {
                var j = h.globalCompositeOperation;
                for (var k in g.operation)
                    k == a.yh.jc && (h.globalCompositeOperation = g.operation[k]);
                e = g.shapeDetail && g.shapeDetail[a.yh.jc] || e;
                var l = a.Pg,
                m = a.yh.dc,
                n = [],
                o = [];
                for (var p in a.we)
                    65536 > p && (o[o.length] = p);
                o.sort(function (a, b) {
                    return a - b
                });
                for (var q = this.cacheController, r = o.length, s = a.ue, t = 0; r > t; t++) {
                    var u = a.we[o[t]],
                    v = u.id,
                    w = (l.Df[v], l.hf[m][v]),
                    x = !1,
                    y = d || this.Rh,
                    z = s[u.wd];
                    w.Ed && (h.save(), n.push(w.Ed), x = !0);
                    var A = null,
                    B = a.zd[v],
                    C = w.ie;
                    if (C && 256 == C[0] && 256 == C[1] && 256 == C[2] && 256 == C[3] && 0 == C[4] && 0 == C[5] && 0 == C[6] && 0 == C[7] && (C = null), C && c.push(C), B) {
                        var D = B.yh;
                        0 != D.zc && 0 != D.Bc && (A = B.ag ? B.sf() : w.Mg, A && (x || h.save(), h.transform.apply(h, A), y *= _.sd(A)), this.Hh(B, c, y, e))
                    } else if (34 == z.aj)
                        A = w.Mg, A && (x || h.save(), h.transform.apply(h, A), y *= _.sd(A));
                    else {
                        A = w.Mg,
                        A && (x || h.save(), h.transform.apply(h, A), y *= _.sd(A));
                        var E = "";
                        37 == z.aj && (E = W(a, z));
                        var F = z.id + s.name;
                        if (x) {
                            var G = h.globalCompositeOperation;
                            if ("source-over" != G) {
                                var i = h.canvas,
                                H = $.getFreeCanvas();
                                H.width = this.frameWidth,
                                H.height = this.frameHeight,
                                H.getContext("2d").drawImage(i, 0, 0),
                                h.globalCompositeOperation = G
                            }
                            (this.nd[F] || (this.nd[F] = bb(f, z, !0, s)))(f, h, z, w.Mg, c, E, S, this.Zi, V, y, Y, X, H, s),
                            H && ($.destroyCanvas(H), H = null),
                            h.save()
                        } else {
                            var I = g.shapeDetail,
                            J = this.qd[F] || I && (I[F] && I[F].method || e && e.method || I.all && I.all.method);
                            this.qd[F] || (this.qd[F] = 37 != z.aj && J || "func");
                            var K = !1;
                            if ("cache" == J) {
                                if (c && c.length) {
                                    for (var L = ",", N = c.length, O = 0; N > O; O++)
                                        L += c[O].join();
                                    F += L
                                }
                                var Q = q.getImageInfo(F);
                                if (!Q) {
                                    var R = I &&  + (I[F] && I[F].cacheScale || e && e.cacheScale || I.all && I.all.cacheScale || this.Rh) || y,
                                    T = I &&  + (I[F] && I[F].adjustLineScale || e && e.adjustLineScale || I.all && I.all.adjustLineScale),
                                    U = y;
                                    T && (U = T * this.Rh);
                                    var Z = bb(f, z, !1, s),
                                    aa = (z.dd, (z.dd[1] - z.dd[0]) / 20),
                                    ba = (z.dd[3] - z.dd[2]) / 20;
                                    if (aa * (R || 1) < this._i / 20 * this.Rh * 2 && ba * (R || 1) < this.$i / 20 * this.Rh * 2) {
                                        var i = $.getFreeCanvas();
                                        i.width = Math.ceil(aa * (R || 1)) || 1,
                                        i.height = Math.ceil(ba * (R || 1)) || 1,
                                        g.debug && !g.suppressLog.drawCache && b("create cache for [" + z.id + "] width: " + i.width + " height:" + i.height);
                                        var ca = i.getContext("2d");
                                        ca.transform(i.width / aa, 0, 0, i.height / ba, 0, 0),
                                        ca.transform(1, 0, 0, 1, -z.dd[0] / 20, -z.dd[2] / 20),
                                        Z(f, ca, z, w.Mg, c, E, S, this.Zi, V, U, Y, X, null, s) && (Q = {
                                                img: i,
                                                x: z.dd[0] / 20,
                                                y: z.dd[2] / 20,
                                                width: aa,
                                                height: ba,
                                                scale: R
                                            }, q.cacheImageInfo(F, Q))
                                    } else
                                        this.qd[F] = "func", g.shapeDetail = g.shapeDetail || {},
                                    g.shapeDetail[F] = "func",
                                    g.debug && b("cache avoided: " + u.wd)
                                }
                                Q && (Q.width && Q.height && (Q.scale && (h.drawImage(Q.img, Q.x, Q.y, Q.width, Q.height) || !0) || h.drawImage(Q.img, Q.x, Q.y)), K = !0)
                            }
                            if (!K) {
                                var F = z.id + (x ? "c" : "") + s.name;
                                (this.od[F] || (this.od[F] = bb(f, z, x, s)))(f, h, z, w.Mg, c, E, S, this.Zi, V, y, Y, X, null, s)
                            }
                        }
                    }
                    if (A && x ? h.transform.apply(h, M(A)) : h.restore(), C && c.pop(), n.length) {
                        var da = n[n.length - 1],
                        ea = o[t + 1];
                        (null == ea || ea > da) && (n.pop(), h.restore(), h.restore())
                    }
                }
                h.globalCompositeOperation = j,
                a == this.Ie.Qh && h.restore()
            }
        }
    };
    var ab = function (a) {
        this.Ie = a,
        a.Sh = [1, 0, 0, 1, 0, 0],
        this.Qd = a.Qd,
        this.qd = {},
        this.od = {},
        this.nd = {},
        this.Rh = 1,
        this.Fd,
        this.tagListCursor = 0,
        this.pg = -1,
        this.qg = {},
        this.ve = [],
        a.ch.debug && b("dirty rect start"),
        this.cacheController = new $(a.ch.cacheMaxTotalSize),
        this.Zi = a.ch.cacheColoredImage ? T(this.cacheController) : U
    };
    ab.prototype._h = function (a) {
        if (this._i = a[1] - a[0], this.$i = a[3] - a[2], !this.be) {
            var c;
            "canvas" == this.Qd.tagName.toLowerCase() ? c = this.Ie.canvas = this.Qd : (c = this.Ie.canvas = document.createElement("canvas"), this.Qd.appendChild(c));
            var e,
            f,
            g,
            h = this._i / 20,
            i = this.$i / 20,
            j = this.Ie.ch,
            k = null;
            if (j.width || j.height) {
                if (j.fixRatio) {
                    e = j.width && j.width / h || j.height && j.height / i || 1;
                    var l = h * e | 0,
                    m = i * e | 0;
                    f = l / h,
                    g = m / i,
                    h = l,
                    i = m
                } else
                    f = j.width && j.width / h || 1, g = j.height && j.height / i || 1, h = j.width || h, i = j.height || i;
                k = [f, 0, 0, g, 0, 0],
                e = f > g ? f : g
            } else
                e = 1;
            if (this.Ah = e, j.frameRect) {
                var n = j.frameRect;
                h = n[2] * (f || e),
                i = n[3] * (g || e),
                k || (k = [1, 0, 0, 1, 0, 0]),
                k[4] = -n[0] * (f || e),
                k[5] = -n[1] * (g || e)
            }
            c.width != (0 | h) && (j.debug && b("set canvas width to " + (0 | h)), c.width = 0 | h),
            c.height != (0 | i) && (j.debug && b("set canvas height to " + (0 | i)), c.height = 0 | i),
            this.frameWidth = c.width,
            this.frameHeight = c.height,
            j._enableWorkaroundForUnicolor && Z(c),
            this.width = k && h / k[0] || h,
            this.height = k && i / k[3] || i;
            var o = c.getContext("2d");
            o.getImageData(0, 0, 1, 1),
            this.be = o,
            k && (j.origin && (j.frameRect ? d("option.origin is ignored because option.frameRect is specified.") : (k[4] = j.origin[0], k[5] = j.origin[1])), this.Ie.Sh = k, this.Rh = _.sd(k)),
            null != this.Ie.$c && (c.style.backgroundColor = P(this.Ie.$c))
        }
    },
    ab.prototype.Aj = function (a, b, c, d, e, f) {
        var g = [];
        if (a || (a = this.Ie.Qh, b = this.Ie.Sh, c = [], this.Fd = 1, d = ""), a.yh.wc) {
            if (!a.bg(this.pg))
                return a.rd;
            var h = [],
            i = a.Pg,
            j = a.yh.dc,
            k = this.Ie,
            l = a.ue,
            m = k.ch;
            for (var n in m.operation)
                n == a.yh.jc && (e = m.operation[n]);
            f = m.shapeDetail && m.shapeDetail[a.yh.jc] || f;
            var o = [];
            for (var p in a.we)
                65536 > p && (o[o.length] = p);
            o.sort(function (a, b) {
                return a - b
            });
            for (var q = o.length, r = 0; q > r; r++) {
                var s,
                t,
                u = a.we[o[r]],
                v = u.id,
                w = i.hf[j][v],
                x = l[u.wd],
                y = w.ie;
                t = !y || 256 == y[0] && 256 == y[1] && 256 == y[2] && 256 == y[3] && 0 == y[4] && 0 == y[5] && 0 == y[6] && 0 == y[7] ? c : c.concat([y]);
                var z = a.zd[v],
                A = d + ("0000" + v.toString(16)).slice(-4);
                if (w.Ed && (h.push([w.Ed, this.Fd]), g.push(this.Fd++)),
                    z)
                    s = z.ag ? z.sf() : w.Mg, Array.prototype.push.apply(g, this.Aj(z, s && N(b, s) || b, t, A, e, f));
                else {
                    if (s = w.Mg, s[0] * s[3] == s[1] * s[2])
                        continue;
                    s = s && N(b, s) || b;
                    var B = O(s, x.dd),
                    C = ab.te(B),
                    D = "";
                    37 == x.aj && (D = W(a, x)),
                    g.push({
                        rh: w,
                        transform: s,
                        je: t,
                        vj: A,
                        operation: e || "source-over",
                        detail: f,
                        rect: C,
                        Pi: D,
                        ue: l
                    })
                }
                if (h.length) {
                    var E = h[h.length - 1],
                    F = E[0],
                    G = o[r + 1];
                    (null == G || G > F) && (g.push(-E[1]), h.pop())
                }
            }
            return a.rd = g,
            g
        }
    },
    ab.sd = function (a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1]),
        c = Math.sqrt(a[2] * a[2] + a[3] * a[3]);
        return Math.sqrt(b * c)
    },
    ab.Th = function (a) {
        for (var b = [], c = 0; 4 > c; c++)
            b[c] = a[c];
        for (var c = 4; 6 > c; c++)
            b[c] = Math.round(a[c]);
        return b
    },
    ab.te = function (a) {
        var b = [];
        return b[0] = Math.floor(a[0] / 20) - 1,
        b[2] = Math.floor(a[2] / 20) - 1,
        b[1] = Math.ceil((a[1] - a[0]) / 20) + b[0] + 2,
        b[3] = Math.ceil((a[3] - a[2]) / 20) + b[2] + 2,
        b
    },
    ab.prototype.Jc = function (a) {
        var b = (this.be.canvas, this.frameWidth - 1),
        c = this.frameHeight - 1;
        if (!(a[0] > b || a[1] < 0 || a[2] > c || a[3] < 0)) {
            for (var d = a[0] > 0 ? a[0] : 0, e = a[1] < b ? a[1] : b, f = a[2] > 0 ? a[2] : 0, g = a[3] < c ? a[3] : c, h = this.ve, i = 0; i < h.length; i++) {
                var j = h[i];
                e < j[0] || j[1] < d || g < j[2] || j[3] < f || (d = j[0] > d ? d : j[0], e = j[1] < e ? e : j[1], f = j[2] > f ? f : j[2], g = j[3] < g ? g : j[3], h.splice(i, 1), i = -1)
            }
            h[h.length] = [d, e, f, g]
        }
    },
    ab.Nd = function (a, b, c, d) {
        return Q(a.transform, b.transform, c) && (d || R(a.je, b.je)) && a.Pi === b.Pi ? !0 : !1
    },
    ab.prototype.zj = function (a, c, d, e, f, g) {
        var h = this.Ie,
        i = a.id + g.name,
        j = this.od[i] || (this.od[i] = bb(h, a, !1, g)),
        k = (a.dd, (a.dd[1] - a.dd[0]) / 20),
        l = (a.dd[3] - a.dd[2]) / 20,
        m = this.Ie.ch,
        n = m.cacheMaxShapeSize || 2;
        if (k * (e || 1) > this._i / 20 * this.Rh * n || l * (e || 1) > this.$i / 20 * this.Rh * n)
            return null;
        var o = $.getFreeCanvas();
        o.width = Math.ceil(k * (e || 1)) || 1,
        o.height = Math.ceil(l * (e || 1)) || 1,
        m.debug && !m.suppressLog.drawCache && b("create cache for [" + a.id + "] width: " + o.width + " height:" + o.height);
        var p = o.getContext("2d");
        return p.transform(o.width / k, 0, 0, o.height / l, 0, 0),
        p.transform(1, 0, 0, 1, -a.dd[0] / 20, -a.dd[2] / 20),
        f && (d = f * this.Rh),
        j(h, p, a, null, c, "", S, this.Zi, V, d, Y, X, null, g) ? ((0 == o.width || 0 == o.height) && (o.width = 1, o.height = 1), {
            img: o,
            x: a.dd[0] / 20,
            y: a.dd[2] / 20,
            width: k,
            height: l,
            scale: e
        }) : null
    },
    ab.prototype.Wd = function (a) {
        this.ve = [];
        for (var b = a.length, c = 0; b > c; c++) {
            var d = a[c];
            if ("number" != typeof d) {
                var e = d.vj,
                f = this.qg[e];
                f ? (ab.Nd(d, f) || (this.Jc(d.rect), this.Jc(f.rect)), delete this.qg[e]) : this.Jc(d.rect)
            }
        }
        for (var g in this.qg)
            this.Jc(this.qg[g].rect), delete this.qg[g]
    },
    ab.prototype.Ej = function () {
        var a = this.Ie,
        c = a.ch,
        d = c.shapeDetail;
        if (d) {
            var e = this.cacheController;
            if (d.all && d.all.preload) {
                c.debug && b("preload: all");
                for (var f = a.le.Ii, h = f.length, i = this.tagListCursor; h > i; i++) {
                    var j = f[i];
                    switch (j.aj) {
                    case g.Nb:
                    case g.Ob:
                    case g.Pb:
                    case g.Rb:
                    case g.Sb:
                    case g.Jb:
                        var k = j.id,
                        l = j,
                        m = this.qd[k] || d[k] && d[k].method || d.all && d.all.method;
                        if (m = 37 != l.aj && m || "func", this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m), "cache" == m) {
                            var n = d[k] && d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                            d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                            e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                        } else
                            this.od[k] || (this.od[k] = bb(a, l, !1, this.Ie.ue))
                    }
                }
                this.tagListCursor = h
            } else
                for (var k in d) {
                    var l = a.ue[k];
                    if (l && d[k].preload) {
                        if (this.qd[k])
                            continue;
                        c.debug && b("preload: " + k);
                        var m = this.qd[k] || d[k].method || d.all && d.all.method;
                        if (m = 37 != l.aj && m || "func", this.qd[k] || (this.qd[k] = m) && c.debug && !c.suppressLog.drawCache && b("CacheMethod[" + k + "]=" + m), "cache" == m) {
                            var n = d[k].cacheScale || d.all && d.all.cacheScale || this.Rh;
                            d[k] && d[k].adjustLineScale || d.all && d.all.adjustLineScale;
                            e.getImageInfo[k] || e.cacheImageInfo(k, this.zj(l, [], n, n, null, this.Ie.ue))
                        } else
                            this.od[k] || (this.od[k] = bb(a, l, !1, this.Ie.ue))
                    }
                }
        }
    },
    ab.prototype.Hh = function () {
        var a = this.be;
        if (a) {
            var c = this.Aj() || [];
            this.Wd(c);
            var d = this.Ie,
            e = d.ch,
            f = this.ve,
            g = f.length,
            h = a.canvas;
            a.fillStyle = P(this.Ie.$c);
            for (var i = 0; g > i; i++) {
                var j = f[i];
                e.transparent ? (0 == j[0] && j[1] + 1 == a.canvas.width && j[1]++, a.clearRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)) : (0 == j[0] && j[1] + 1 == a.canvas.width && j[1]++, a.fillRect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1))
            }
            a.fillStyle = "rgba(0,0,0,1)",
            a.save(),
            a.beginPath();
            for (var i = 0; g > i; i++) {
                var j = f[i];
                a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
            }
            a.clip();
            for (var k = this.cacheController, l = c.length, m = 0, n = 0; l > n; n++) {
                var o = c[n];
                if ("number" != typeof o) {
                    for (var p = o.rh, q = o.transform, r = o.je, s = o.rect, t = o.Pi, u = ab.sd(q), v = o.ue, w = v[p.wd], x = p.Ed, y = !1, i = 0; g > i; i++) {
                        var j = f[i];
                        if (j[1] >= s[0] && s[1] >= j[0] && j[3] >= s[2] && s[3] >= j[2]) {
                            y = !0;
                            break
                        }
                    }
                    if (y || x) {
                        a.globalCompositeOperation = o.operation;
                        var z = o.detail;
                        if (x) {
                            var A = a.globalCompositeOperation;
                            if ("source-over" != A) {
                                a.restore(),
                                a.restore();
                                var B = $.getFreeCanvas();
                                if (B.width = this.frameWidth, B.height = this.frameHeight, B.getContext("2d").drawImage(h, 0, 0), a.save(), m > 0)
                                    a.clip();
                                else {
                                    a.save();
                                    for (var i = 0; g > i; i++) {
                                        var j = f[i];
                                        a.rect(j[0], j[2], j[1] - j[0] + 1, j[3] - j[2] + 1)
                                    }
                                    a.clip()
                                }
                                a.save(),
                                a.globalCompositeOperation = A
                            }
                            a.transform.apply(a, q);
                            var C = w.id + v.name;
                            (this.nd[C] || (this.nd[C] = bb(d, w, !0, v)))(d, a, w, q, r, t, S, this.Zi, V, u, Y, X, B, v),
                            B && ($.destroyCanvas(B), B = null),
                            a.save(),
                            m++,
                            a.transform.apply(a, M(q))
                        } else {
                            var C = w.id + v.name,
                            D = e.shapeDetail,
                            E = this.qd[C] || D && (D[C] && D[C].method || z && z.method || D.all && D.all.method);
                            E = 37 != w.aj && E || "func",
                            this.qd[C] || (this.qd[C] = E) && e.debug && !e.suppressLog.drawCache && b("CacheMethod[" + C + "]=" + E);
                            var F = !1;
                            if ("cache" == E) {
                                var G = C;
                                if (r && r.length) {
                                    for (var H = ",", I = r.length, J = 0; I > J; J++)
                                        H += r[J].join();
                                    G += H
                                }
                                var K = k.getImageInfo(G);
                                if (!K) {
                                    var L = D &&  + (D[C] && D[C].cacheScale || z && z.cacheScale || D.all && D.all.cacheScale || this.Rh) || u,
                                    N = D[C] && D[C].adjustLineScale || z && z.adjustLineScale || D.all && D.all.adjustLineScale;
                                    K = this.zj(w, r, u, L, N, v),
                                    K && k.cacheImageInfo(G, K),
                                    K || (this.qd[C] = "func", e.shapeDetail = e.shapeDetail || {}, e.shapeDetail[C] = "func", e.debug && b("cache avoided: " + p.wd))
                                }
                                if (K && K.width && K.height) {
                                    if (F = !0, a.save(), 0 == q[1] && 0 == q[2]) {
                                        var O = q[0],
                                        Q = q[3],
                                        R = O > 0 ? 1 : -1,
                                        T = Q > 0 ? 1 : -1,
                                        U = Math.round(R * K.width * O),
                                        W = Math.round(R * (K.x * O + q[4])),
                                        Z = Math.round(T * K.height * Q),
                                        _ = Math.round(T * (K.y * Q + q[5]));
                                        a.transform(R, 0, 0, T, 0, 0),
                                        a.drawImage(K.img, W, _, U, Z)
                                    } else
                                        a.transform.apply(a, q), a.drawImage(K.img, K.x, K.y, K.width, K.height);
                                    a.restore()
                                }
                            }
                            if (!F) {
                                var C = w.id + v.name;
                                a.save(),
                                a.transform.apply(a, q),
                                (this.od[C] || (this.od[C] = bb(d, w, !1, v)))(d, a, w, p.Mg, r, t, S, this.Zi, V, u, Y, X, null, v) || (c[n] = NaN),
                                a.restore()
                            }
                        }
                    }
                } else if (o > 0)
                    a.save();
                else {
                    for (; m > 0; m--)
                        a.restore();
                    a.restore()
                }
            }
            a.restore(),
            a.globalCompositeOperation = "source-over",
            this.pg = this.Ie.df,
            this.qg = {};
            for (var n = 0; n < c.length; n++) {
                var o = c[n];
                if ("number" != typeof o) {
                    var aa = o.vj;
                    this.qg[aa] = o
                }
            }
        }
    };
    var bb = function () {
        var a = "",
        b = !1,
        d = function () {
            var b,
            d,
            e,
            f,
            g,
            j,
            k,
            m,
            n,
            o,
            p = function (a) {
                for (var b = [], c = a.length, d = c - 1; d >= 0; d--) {
                    var e = a[d];
                    null != e.he ? b.push({
                        oj: e.pj,
                        rj: e.sj,
                        he: e.he,
                        ke: e.ke,
                        pj: e.oj,
                        sj: e.rj
                    }) : b.push({
                        oj: e.pj,
                        rj: e.sj,
                        pj: e.oj,
                        sj: e.rj
                    })
                }
                return b
            },
            q = function (a) {
                if (m.length) {
                    if (0 != g ? (d[g - 1] = d[g - 1] || [], d[g - 1].push(m)) : 0 != j && 0 != k && (o[j - 1].aj == i.zb ? (f[j - 1] = f[j - 1] || [], f[j - 1].push(m)) : o[k - 1].aj == i.zb && (f[k - 1] = f[k - 1] || [], f[k - 1].push(m))), 0 != j) {
                        var b = j - 1;
                        a && (b = 0),
                        e[b] = e[b] || [],
                        e[b].push(m)
                    }
                    if (0 != k) {
                        var b = k - 1;
                        a && (b = 0),
                        e[b] = e[b] || [],
                        e[b].push(p(m))
                    }
                    m = []
                }
            },
            r = function () {
                b.push({
                    Bg: n,
                    Qe: o,
                    zg: d,
                    Ne: e,
                    Lg: f
                }),
                d = [],
                e = [],
                f = []
            },
            s = function (b, c) {
                a += "ib.beginPath();",
                v(b);
                for (var d = c.length, e = 0; d > e; e++) {
                    var f = c[e];
                    a += "ib.moveTo(" + f[0].oj / 20 + "," + f[0].rj / 20 + ");";
                    for (var g = f.length, h = 0; g > h; h++) {
                        var i = f[h];
                        a += null != i.he ? "ib.quadraticCurveTo(" + i.he / 20 + "," + i.ke / 20 + "," + i.pj / 20 + "," + i.sj / 20 + ");" : "ib.lineTo(" + i.pj / 20 + "," + i.sj / 20 + ");"
                    }
                }
                a += "ib.stroke();"
            },
            t = function (a, b) {
                if (!b)
                    return a;
                var c,
                d = {};
                return c = l(b, a.oj, a.rj),
                d.oj = c[0],
                d.rj = c[1],
                c = l(b, a.pj, a.sj),
                d.pj = c[0],
                d.sj = c[1],
                null != a.he && (c = l(b, a.he, a.ke), d.he = c[0], d.ke = c[1]),
                d
            },
            u = function (a) {
                do {
                    for (var b = [], c = !1, d = a.length, e = 0; d > e; e++) {
                        for (var f = b.length, g = 0; f > g; g++) {
                            var h = a[e].length - 1,
                            i = b[g].length - 1;
                            if (a[e][0].oj == b[g][i].pj && a[e][0].rj == b[g][i].sj) {
                                b[g] = b[g].concat(a[e]),
                                c = !0;
                                break
                            }
                            if (b[g][0].oj == a[e][h].pj && b[g][0].rj == a[e][h].sj) {
                                b[g] = a[e].concat(b[g]),
                                c = !0;
                                break
                            }
                        }
                        g == b.length && b.push(a[e])
                    }
                    a = b
                } while (c);
                return a
            },
            v = function (b) {
                if (null != b.width) {
                    var c = b.width / 20;
                    a += "ib.lineWidth=" + c + "*jb<1?1/jb:" + c + ";"
                }
                null != b.Kd && (a += "ib.strokeStyle=kb(lb," + b.Kd + ");")
            },
            w = function (b) {
                var d = null;
                switch (b.aj) {
                case i.zb:
                    a += "ib.fillStyle=kb(lb," + b.Kd + ");";
                    break;
                case i.yb:
                case i.sb:
                case i.wb:
                case i.vb:
                    var e = b.Mg;
                    d = [e[0] / 20, e[1] / 20, e[2] / 20, e[3] / 20, e[4], e[5]],
                    a += "var img=mb[" + b._c + "].img;",
                    a += "if(img.width==0&&img.height==0){return false;}",
                    a += "if(lb.length) {img=nb(lb,img);}",
                    a += "ib.fillStyle=ib.createPattern(img,'repeat');";
                    break;
                case i.ub:
                case i.xb:
                    d = b.Mg,
                    a += "var ob;",
                    a += b.aj == i.ub ? "ob=ib.createLinearGradient(-16384 / 20, 0, 16384 / 20, 0);" : "ob=ib.createRadialGradient(0, 0, 0, 0, 0, 16384 / 20);";
                    for (var f = b.zf.Bh.length, g = 0; f > g; g++) {
                        var h = b.zf.Bh[g];
                        a += "ob.addColorStop(" + h.Ah / 255 + ",kb(lb, " + h.Kd + "));"
                    }
                    a += "ib.fillStyle=ob;";
                    break;
                default:
                    c("renderShape.setFillStyle: unknown draw type called: " + b.aj)
                }
                return d
            },
            x = function (b, c) {
                if (c.aj != i.sb)
                    return !1;
                var d = c.Mg;
                if (!d || Math.abs(d[0]) != Math.abs(d[3]) || 0 != d[1] || 0 != d[2])
                    return !1;
                if (1 != b.length)
                    return !1;
                var e = b[0];
                if (4 != e.length)
                    return !1;
                for (var f = [], g = 0; 4 > g; g++) {
                    var h = e[g];
                    if (h.he || h.ke)
                        return !1;
                    f[f.length] = {
                        x: h.pj - h.oj,
                        y: h.sj - h.rj
                    }
                }
                if (0 == f[0].x && 0 == f[1].y && 0 == f[2].x && 0 == f[3].y && f[0].y == -f[2].y && f[1].x == -f[3].x || 0 == f[0].y && 0 == f[1].x && 0 == f[2].y && 0 == f[3].x && f[0].x == -f[2].x && f[1].y == -f[3].y) {
                    var j = [d[0] / 20, d[1], d[2], d[3] / 20, d[4], d[5]],
                    k = c._c;
                    return a += "var img=mb[" + k + "].img;",
                    a += "if(img.width==0&&img.height==0){return false;}",
                    a += "if(lb.length) {img=nb(lb,img);}",
                    a += "ib.transform(" + j.join() + ");",
                    a += "ib.drawImage(img, 0, 0);",
                    a += "ib.transform(" + M(j).join() + ");",
                    !0
                }
                return !1
            };
            return function (i, l, p, v) {
                b = [],
                o = i,
                n = l,
                d = [],
                e = [],
                f = [],
                g = 0,
                j = 0,
                k = 0,
                m = [];
                for (var y = 0, z = 0, A = p.length, B = 0; A > B; B++) {
                    var C = p[B];
                    switch (C.aj) {
                    case h.tb:
                        var D = y + C.he,
                        E = z + C.ke,
                        F = D + C.Wc,
                        G = E + C.Xc;
                        m.push({
                            oj: y,
                            rj: z,
                            he: D,
                            ke: E,
                            pj: F,
                            sj: G
                        }),
                        y = F,
                        z = G;
                        break;
                    case h.Ab:
                        var F = y + C.x,
                        G = z + C.y;
                        m.push({
                            oj: y,
                            rj: z,
                            pj: F,
                            sj: G
                        }),
                        y = F,
                        z = G;
                        break;
                    case h.Bb:
                        q(v),
                        (C.Bg || C.Qe) && (r(), n = C.Bg || n, o = C.Qe || o),
                        null != C.Ae && (y = C.Ae),
                        null != C.Be && (z = C.Be),
                        null != C.Ag && (g = C.Ag),
                        null != C.Oe && (j = C.Oe),
                        null != C.Pe && (k = C.Pe);
                        break;
                    default:
                        c("drawObject.renderShape: Unknown type detected:", C.aj)
                    }
                }
                q(v),
                r(),
                a += "ib.lineCap='round';";
                for (var H = b.length, B = 0; H > B; B++) {
                    var I = b[B];
                    if (n = I.Bg, o = I.Qe, d = I.zg, e = I.Ne, f = I.Lg, !v)
                        for (var J = f.length, K = 0; J > K; K++) {
                            var L = f[K];
                            if (L) {
                                var N = {
                                    width: 1,
                                    Kd: o[K].Kd
                                };
                                s(N, L)
                            }
                        }
                    for (var O = e.length, K = 0; O > K; K++) {
                        var P,
                        Q = e[K];
                        if (Q) {
                            if (Q = u(Q), x(Q, o[K]))
                                continue;
                            if (!v) {
                                var R = w(o[K]);
                                R && (a += "ib.transform(" + R.join() + ");"),
                                P = R && M(R) || null
                            }
                            (!v || 0 == B && 0 == K) && (a += "ib.beginPath();");
                            for (var S = Q.length, T = 0; S > T; T++) {
                                var U = Q[T];
                                if (U) {
                                    var V = t(U[0], P);
                                    a += "ib.moveTo(" + V.oj / 20 + "," + V.rj / 20 + ");";
                                    for (var W = (U.length, 0); W < U.length; W++) {
                                        var X = t(U[W], P);
                                        a += null != X.he ? "ib.quadraticCurveTo(" + X.he / 20 + "," + X.ke / 20 + "," + X.pj / 20 + "," + X.sj / 20 + ");" : "ib.lineTo(" + X.pj / 20 + "," + X.sj / 20 + ");"
                                    }
                                }
                            }
                            v ? B == b.length - 1 && K == e.length - 1 && (a += "ib.clip();", a += "if(ib.globalCompositeOperation!='source-over'){", a += "ib.save();ib.setTransform(1,0,0,1,0,0);ib.globalCompositeOperation='source-over';", a += "ib.globalAlpha=1;ib.clearRect(0,0,ib.canvas.width+1,ib.canvas.height);", a += "ib.drawImage(copiedCanvas,0,0);ib.restore();}") : (a += "ib.fill();", P && (a += "ib.transform(" + P.join() + ");"))
                        }
                    }
                    if (!v)
                        for (var Y = d.length, K = 0; Y > K; K++) {
                            var L = d[K];
                            L && s(n[K], L)
                        }
                }
            }
        }
        (),
        e = function (b, c, e, f) {
            c.Mg && (a += "ib.transform(" + c.Mg.join() + ");");
            for (var g, h, j, k = c.Bh, l = 0, m = 0, n = k.length, o = 0; n > o; o++) {
                var p = k[o];
                null != p.Ze && (g = f[p.Ze]),
                null != p.Kd && (j = p.Kd),
                null != p.x && (l = p.x),
                null != p.y && (m = p.y),
                null != p.height && (h = p.height);
                for (var q = p.xf.length, r = 0; q > r; r++) {
                    var s = p.xf[r],
                    t = h / 1024;
                    a += "ib.transform(1,0,0,1," + l / 20 + "," + m / 20 + ");",
                    a += "ib.transform(" + t + ",0,0," + t + ",0,0);",
                    d([{
                                Kd: j,
                                aj: i.zb
                            }
                        ], null, g.gi[s.Mf], e),
                    a += "ib.transform(" + 1 / t + ",0,0," + 1 / t + ",0,0);",
                    a += "ib.transform(1,0,0,1," + -l / 20 + "," + -m / 20 + ");",
                    l += s.Kc
                }
            }
            c.Mg && (a += "ib.transform(" + M(c.Mg).join() + ");")
        },
        f = function (c, d, e, f) {
            if (d.ej) {
                var g = d.dd[0] / 20 + 2,
                h = d.dd[1] / 20 - 2,
                i = d.dd[2] / 20 + 2,
                j = d.dd[3] / 20 - 2,
                k = f[d.Ze],
                l = d.height / 1024,
                m = (h - g) / l * 20;
                a += "var font=mb[pb.Ze];",
                a += "var glyphInfo=makeGlyphInfo(qb," + m + "," + g + "," + h + "," + i + "," + j + ",font," + l + ",pb);",
                a += "var J = glyphInfo.length;",
                a += "for (var line = 0; line < J; line++) {",
                a += "var align = glyphInfo[line].align;",
                a += "var indices = glyphInfo[line].indices;",
                a += "ib.save();",
                a += "ib.transform(1,0,0,1," + g + "," + (i + k.Xe * l / 20) + ");",
                a += "ib.transform(" + l + ",0,0," + l + ",0,0);",
                a += "ib.transform(1,0,0,1,align,0);",
                a += "for(var l = 0; l < indices.length; l++) {",
                a += "var h = indices[l];",
                a += "var clippingState = " + (e ? "{begin: l == 0 && line == 0, end: l == indices.length - 1}" : "null") + ";",
                a += "eval(renderFont(/*ib*/null,font,h,pb.Kd,clippingState,/*rb*/null,sb));",
                a += "ib.transform(1,0,0,1,font.We[h]/20.0,0);",
                a += "}",
                a += "ib.restore();",
                a += "ib.transform(1,0,0,1,0," + (k.Xe + k.Ye) * l / 20 + ");",
                a += "}",
                a += "ib.transform(1,0,0,1,0," +  - (k.Xe + k.Ye) * l / 20 + "*line);"
            } else {
                var g = (d.dd[0] + d.wg) / 20,
                h = (d.dd[1] - d.Oh) / 20,
                i = d.dd[2] / 20,
                j = d.dd[3] / 20;
                a += "ib.beginPath();",
                a += "ib.moveTo(" + g + "," + i + ");",
                a += "ib.lineTo(" + g + "," + j + ");",
                a += "ib.lineTo(" + h + "," + j + ");",
                a += "ib.lineTo(" + h + "," + i + ");",
                a += "ib.closePath();";
                var n = d.height / 20,
                o = (d.height + d.vg) / 20,
                p = d.mj && d.multiline ? Math.ceil((h - g) / n * 2) : 0;
                a += "ib.font = '" + n + "px sans-serif';",
                a += "ib.fillStyle=kb(lb," + d.Kd + ");",
                a += "ib.textBaseline='top';";
                var q = 0,
                r = 0;
                switch (d.align) {
                case 1:
                    a += "ib.textAlign='end';",
                    q = h - 4,
                    r = i + 2;
                    break;
                case 2:
                    a += "ib.textAlign='center';",
                    q = (g + h) / 2 + 2,
                    r = i + 2;
                    break;
                case 3:
                default:
                    a += "ib.textAlign='start';",
                    q = g + 2,
                    r = i + 2
                }
                if (b && (a += "ib.textAlign='start';", a += "var styles_=[{'_g':0}],offsetDiff=0,textProp='te'+'xt',colorProp='co'+'lor';", a += "qb=qb.replace(/(?:([\\r\\n]+)|\\{(\\{.*?\\})\\})/g,function(match_,crlf,tb,c){", a += "if(crlf){offsetDiff-=match_.length;return match_;}", a += "var data_=JSON.parse(tb);var qb=data_[textProp]||'';var textLength=qb.length;var actualOffset=c+offsetDiff;", a += "styles_.push({'_g':actualOffset,'Kd':data_[colorProp]});styles_.push({'_g':actualOffset+textLength});", a += "offsetDiff-=match_.length-textLength;return qb;});", a += "var startPos=0,c=0,defaultColor=kb(lb," + d.Kd + "),style_=styles_[0],nextStyle=styles_[1],j=0,drawString,endPos,offsetWidth_,partialString;"), a += "var ub = vb(qb," + p + ");", a += "var J = ub.length;", a += "for(var i = 0, y = " + r + "; i < J; i++, y+=" + o + ") {", b) {
                    switch (a += "drawString=ub[i];endPos=drawString.length+c;offsetWidth_=0;", d.align) {
                    case 1:
                        a += "offsetWidth_-=ib.measureText(drawString).width;";
                        break;
                    case 2:
                        a += "offsetWidth_-=ib.measureText(drawString).width*0.5;";
                        break;
                    case 3:
                    }
                    a += "while(nextStyle&&nextStyle._g<endPos){partialString=drawString.slice(startPos,nextStyle._g-c);",
                    a += d.Ng ? "ib.fillText(partialString," + q + "+offsetWidth_,y," + d.Ng + ");" : "ib.fillText(partialString," + q + "+offsetWidth_,y);",
                    a += "startPos=nextStyle._g-c;offsetWidth_+=ib.measureText(partialString).width;",
                    a += "++j;style_=styles_[j];nextStyle=styles_[j+1];ib.fillStyle=style_.Kd||defaultColor;}",
                    a += "startPos=style_._g-c;if(startPos<0){startPos=0;}",
                    a += d.Ng ? "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y," + d.Ng + ");" : "ib.fillText(drawString.slice(startPos)," + q + "+offsetWidth_,y);",
                    a += "c+=drawString.length;startPos=0;"
                } else
                    a += d.Ng ? "ib.fillText(ub[i]," + q + ",y," + d.Ng + ");" : "ib.fillText(ub[i]," + q + ",y);";
                a += "};"
            }
        };
        return function (c, h, i, j) {
            switch (a = "", b = c.ch.enableStyleText, h.aj) {
            case g.Nb:
            case g.Ob:
            case g.Pb:
                d(h.Qe, h.Bg, h.hi, i);
                break;
            case g.Rb:
            case g.Sb:
                e(c, h, i, j);
                break;
            case g.Jb:
                f(c, h, i, j)
            }
            return a += "return true",
            new Function("sb,ib,pb,transform,lb,qb,kb,nb,vb,jb,makeGlyphInfo,renderFont,copiedCanvas,mb", a)
        }
    }
    (),
    cb = function (a, b) {
        return 256 * a[b + 1] + a[b]
    },
    db = function (a, b) {
        var c = 256 * a[b + 1] + a[b];
        return 0 != (32768 & c) && (c |= -65536),
        c
    },
    eb = function (a, b) {
        return a[b + 3] << 24 | a[b + 2] << 16 | a[b + 1] << 8 | a[b]
    },
    fb = function (a, b) {
        return 255 << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    },
    gb = function (a, b) {
        return a[b + 3] << 24 | a[b] << 16 | a[b + 1] << 8 | a[b + 2]
    },
    hb = function (a, b) {
        return a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3]
    },
    ib = function (a, b) {
        for (var c = b; a[c]; )
            c++;
        return String.fromCharCode.apply(null, a.slice(b, c))
    },
    jb = function (a, b, c) {
        return String.fromCharCode.apply(null, a.slice(b, b + c))
    },
    kb = function (a, b) {
        for (var c = b; a[c]; )
            c++;
        var d = yb(a.slice(b, c));
        return [null === d ? "" : d, c - b + 1]
    },
    lb = function (a, b) {
        return 0 != (a & 1 << b - 1) ? a - (1 << b) : a
    },
    mb = function (a, b) {
        return lb(a, b) / 65536
    },
    nb = function (a, b, c) {
        return a[b + (c >> 3)] >> 7 - (7 & c) & 1
    },
    ob = function (a, b, c, d) {
        if (!d)
            return 0;
        var e = (b << 3) + c,
        f = e + d,
        g = e >> 3,
        h = 7 & e,
        i = f >> 3,
        j = 7 & f;
        if (g == i)
            return a[g] >> 8 - j & (1 << d) - 1;
        for (var k = a[g] & 255 >> h, l = g + 1; i > l; l++)
            k <<= 8, k |= a[l];
        return 0 == j ? k : k << j | a[i] >> 8 - j
    },
    pb = function (a, b, c) {
        var d = a[b] >> 3;
        return c[0] = lb(ob(a, b, 5, d), d),
        c[1] = lb(ob(a, b, 5 + d, d), d),
        c[2] = lb(ob(a, b, 5 + 2 * d, d), d),
        c[3] = lb(ob(a, b, 5 + 3 * d, d), d),
        Math.ceil((5 + 4 * d) / 8)
    },
    qb = function (a, b, c) {
        var d = nb(a, b, 0),
        e = 1,
        f = 0;
        d ? (f = ob(a, b, e, 5), e += 5, c[0] = mb(ob(a, b, e, f), f), c[3] = mb(ob(a, b, e + f, f), f), e += 2 * f) : (c[0] = 1, c[3] = 1);
        var g = nb(a, b, e);
        return e++,
        g ? (f = ob(a, b, e, 5), e += 5, c[1] = mb(ob(a, b, e, f), f), c[2] = mb(ob(a, b, e + f, f), f), e += 2 * f) : (c[1] = 0, c[2] = 0),
        f = ob(a, b, e, 5),
        e += 5,
        c[4] = lb(ob(a, b, e, f), f) / 20,
        c[5] = lb(ob(a, b, e + f, f), f) / 20,
        e += 2 * f,
        Math.ceil(e / 8)
    },
    rb = function (a, b, c, d) {
        var e = nb(a, b, 0),
        f = nb(a, b, 1),
        g = ob(a, b, 2, 4),
        h = 6;
        if (f) {
            if (d) {
                var i;
                c[0] = 256 == (i = lb(ob(a, b, h, g), g)) ? i : (i / d | 0) * d,
                h += g,
                c[1] = 256 == (i = lb(ob(a, b, h, g), g)) ? i : (i / d | 0) * d,
                h += g,
                c[2] = 256 == (i = lb(ob(a, b, h, g), g)) ? i : (i / d | 0) * d,
                h += g
            } else
                c[0] = lb(ob(a, b, h, g), g), h += g, c[1] = lb(ob(a, b, h, g), g), h += g, c[2] = lb(ob(a, b, h, g), g), h += g;
            c[3] = 256,
            h += g
        } else
            c[0] = 256, c[1] = 256, c[2] = 256, c[3] = 256;
        return e ? (c[4] = lb(ob(a, b, h, g), g), h += g, c[5] = lb(ob(a, b, h, g), g), h += g, c[6] = lb(ob(a, b, h, g), g), h += g, c[7] = 0, h += g) : (c[4] = 0, c[5] = 0, c[6] = 0, c[7] = 0),
        Math.ceil(h / 8)
    },
    sb = function (a, b, c, d) {
        var e = a[b],
        f = 128 & e,
        g = 64 & e,
        h = ob(a, b, 2, 4),
        i = 6;
        if (g)
            if (d) {
                var j;
                c[0] = 256 == (j = lb(ob(a, b, i, h), h)) ? j : (j / d | 0) * d,
                i += h,
                c[1] = 256 == (j = lb(ob(a, b, i, h), h)) ? j : (j / d | 0) * d,
                i += h,
                c[2] = 256 == (j = lb(ob(a, b, i, h), h)) ? j : (j / d | 0) * d,
                i += h,
                c[3] = 256 == (j = lb(ob(a, b, i, h), h)) ? j : (j / d | 0) * d,
                i += h
            } else
                c[0] = lb(ob(a, b, i, h), h), i += h, c[1] = lb(ob(a, b, i, h), h), i += h, c[2] = lb(ob(a, b, i, h), h), i += h, c[3] = lb(ob(a, b, i, h), h), i += h;
        else
            c[0] = 256, c[1] = 256, c[2] = 256, c[3] = 256;
        return f ? (c[4] = lb(ob(a, b, i, h), h), i += h, c[5] = lb(ob(a, b, i, h), h), i += h, c[6] = lb(ob(a, b, i, h), h), i += h, c[7] = lb(ob(a, b, i, h), h), i += h) : (c[4] = 0, c[5] = 0, c[6] = 0, c[7] = 0),
        Math.ceil(i / 8)
    },
    tb = function (a, b) {
        var c = eb(a, b),
        d = c >> 31 & 1,
        e = c >> 23 & 255,
        f = 8388607 & c;
        return 255 == e ? 0 == f ? 0 == d ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : Number.NaN : 0 == e && 0 == f ? 0 : (0 == d ? 1 : -1) * (f / Math.pow(2, 23) + 1) * Math.pow(2, e - 127)
    },
    ub = function (a, b) {
        var c = eb(a, b),
        d = eb(a, b + 4),
        e = c >>> 31 & 1,
        f = c >>> 20 & 2047,
        g = 1048575 & c,
        h = d;
        return (0 == e ? 1 : -1) * (g / Math.pow(2, 20) + h / Math.pow(2, 52) + 1) * Math.pow(2, f - 1023)
    },
    vb = function (a, b, c, d) {
        var e = b;
        d.pi = ob(a, b, 0, 2),
        d.Uf = ob(a, b, 2, 2);
        var f = ob(a, b, 4, 4);
        e++;
        for (var g = [], h = 0; f > h; h++) {
            var i = a[e];
            if (e++, 3 == c) {
                var j = gb(a, e);
                e += 4
            } else {
                var j = fb(a, e);
                e += 3
            }
            g.push({
                Ah: i,
                Kd: j
            })
        }
        return d.Bh = g,
        e - b
    },
    wb = function (a, b, c, d) {
        return d ? void a.__defineGetter__(b, function () {
            return delete this[b],
            this[b] = c()
        }) : void(a[b] = c())
    },
    xb = function (a, b, c, d) {
        if (d)
            for (var e = c.length, f = 0; e > f; f++)
                a.__defineGetter__(c[f], function (a) {
                    return function () {
                        var c = b();
                        for (var d in c)
                            delete this[d], this[d] = c[d];
                        return c[a]
                    }
                }
                    (c[f]));
        else {
            var g = b();
            for (var h in g)
                a[h] = g[h]
        }
    },
    yb = function (a) {
        var b = a.map(function (a, b, c) {
            var d = a.toString(16).toUpperCase();
            return 1 == d.length ? "%0" + d : "%" + d
        });
        return zb(b.join(""))
    },
    zb = function (a) {
        return a.replace(new RegExp("%(8[1-9A-F]|[9E][0-9A-F]|F[0-9A-C])(%[4-689A-F][0-9A-F]|%7[0-9A-E]|[@-~])|%([0-7][0-9A-F]|A[1-9A-F]|[B-D][0-9A-F])", "ig"), function (a) {
            var b = parseInt(a.substring(1, 3), 16),
            c = a.length;
            return 3 == c ? String.fromCharCode(160 > b ? b : b + 65216) : Ab.charAt(188 * (160 > b ? b - 129 : b - 193) + (4 == c ? a.charCodeAt(3) - 64 : (b = parseInt(a.substring(4), 16)) < 127 ? b - 64 : b - 65))
        })
    },
    Ab = function () {
        for (var a, b = '0  0 !0 "H ,H .2H!*H!+H!H/ !0a0z  +$H$   *(H#.H<H#/0/-0/.0]0).0 #p--0V0 &0 \'0/," O" ! H H/#,H%:"FH%," [" F" !e !M !," !-H (H )0!$0OH#+H#-H%+H%-0 (0 )0 *0 +0 ,0 -0 .0 /0! 0!!H +H -  +!  -c /\'H!-"[ H!,H!:"="[ny:"#$[$"[$   + " #~ ##y #H6H|H;H9HVH #H &H *H"   *\'[ &[VF,+F,/F,:%,\'F`F*!F* F+#F+"F+-F+," #+0!"yMyKy\\yh0!#732~ e" +~D~(n"e~o~"*~")7~"n~(H:y-"y-$~  ~ #732~" ~^"#!~" ~" n[!"F~[*"[+"y*~#-"y-~Y~"+~",432y"+" 0"=/"=-"=*" " " y  k4F./7432H! H!!H!"H!#H!$HOHUH!\'H!(H!)432HyH~H"#H"$HFH[H"\'H"(H")H"*H"+H",H"-H".H"H/0H#!H#"H##H#$HYHZH#\'H#(H#)H#*43H$!H$"H$#H$$HWHSH$\'H$(H$)H$*H$+H$,H$-HpH$Hb H%!H%"H%#H%$H%%H%&H%\'H%(H%)H%*40$!0$"0$#0$$0W0S0$\'0$(0$)0$*0$+0$,0$-0p0P0% 0%!0%"0%#0%$0%%0%&0%\'0%(0%)0%*0%+0%,0%-0%.0%/0& 0&!0&"0&#0&$0J0=0&\'0&(0&)0&*0&+0&,0&-0&.0&/0c0w0n0q0\'$0>0@0R0\'(0\')0d0r0l0_0\'.0\'/0f0v0e0o0u0?0D0(\'0L0()0G0x0m0}0(.0(/0K0\\0M0h7320*!0*"0*#0*$0^0i0*\'0*(0*)0**0*+0*,0*-0*.0*/0+ 0+!0+"0+#0+$0Q0k0+\'0+(0+)0+*0++0+,0+-0+.0+/0, 0,!0,"0,#0,$0T0`0,\'0,(0,)0,*0,+0,,0,-0,.0,/0- 0-!0-"0-#0-$0g0j0-\'0-(0-)0-*0-+0-,0--0-.0-/0;090:0<0806050B0.(0.)0.*0.+0.,0.-0..0./0/ 0/!0/"0/#0/$0b0X7 #\\ #M #)0#)$ #C #A #E #N #)K#s #a #z #] #);#)/ #*  #*! #*0#*$ #^ #i #*c#*f#*)7 #+! #+" #+0#+$ #Q #k #+c#+f#+K#+* #++ #+, #+- #+;#+/ #,  #,! #,0#,$ #T #` #,c#,f#,){43|! |!!|!"|!0$!$|O| !|U|!c$!f$!K$!*|!+|!,|!-|!;$!/|" |y|~|"0$"$|F|[|"c$"f$"K$"*|"+|",|"-|";$"/7432|0|#!|#"|#0$#$|Y W!|Z|#c$#f$#K$#*|#+|#,|#-|#;$#/|$ |$!|$"|$0$$$|W|S|$c$$f$$K$$*|$+|$,|$-|$;$P742F  F "F ,F! F!(F!$F!,F",F"$F#$F#,F !F #F /F!#F!+F!\'F"#F##F"+F#+F$+F" F"/F"(F#\'F#/F!-F0FFF#(F$"{{{{{{{{{{{{{I43"S "S!"S~S#"S$"$J"$="SnSeSMS*"S+"S,"S-"S:S/"$c"$w"$n"$q"U "U!"U~U#"U$yJy="UnUeU)2##$h#!$##~##$-##!o#"q0###Z#Y!#Yq0-##[##"###"+##$*###+##z##]##)<#(<#(/##,$##*!7##r0!-0!/yU##,-yy#"*$#"^#"i#"*q"*o"#!#"#"#"#h#\'<#_##l"F~[!~"+~":y!"y*~^~" "y/~+/~Y~"M~*{{{{{I743p)T%!J* #A#b$, &!!k#"?)XK~u>o!,\'^ & *i#9&:%J.-u=eiab&()Yn@%*U"\'O+)Q] DrN/$_&"_+.a(5"Ul)/L+>+(C.Q&0)=)@u(C,\'E(j\'Pp6P *P$-P]%|C&/Fh>]W* O, A -X! X!c=!ZK%c+*>P>c\')1_*-_./f,#u .(D#x "K%%K\'^##+pCp^%_/f+"K,!\'(./$;V(/U.*"K#(d#"o"L"xz"b!$O#\'V$+g$9%&;%)1%/ON/[-.+f8?"-)="AcA* E1%$ Q#/Y+(R ,/\'1-(/,"A.?Z/]%,d+*$9!\'(hv/`:J&!?% S+!-?!*z#Q)6%#*A-=\'$-,C(b&$"p\\K$+A/"oP)KT#9%%+J+0%/w=" =/ZfS,#D,/Z-"EW+@,(dpN#$e/!(?+G& M.j-+">*+@,*))T& ix !}GC+[N6#*g!D%wF(0%)$W++W./= "D#*A#/S,+X/!$c(B!!$\'OE!gq#/\';!e@e-!?EK& )F+]!QDA%+`T*>F%!/CM6A%%/(V/-`"+,J/i*"i+"@++$qx\'/,!(C&]",] .).,W,*U,Ao\'Q! W,$k!kv,=(@\'[!$6)$H^#\'D &A:E*PE/#$;Q#Up.8b%P#-P*!P\'Y"*V#.b& CKb*,O++J+9\']!=(@\')`r=+$`,+#c&+q,"\'N-\'aB*#,r(\'e+!e-+(0$oRo./o-#(\'=G+F&"N,*L/5KpE!.DGP,W,.Dy!\'F)>#+v6e+-D/.m, AT)\\#)]%p,+P!*()<%&-6u^m^.1%/.k "i )S &[!- &y["- J#)a$!==&x &-Rcc>$,@D_>e^(\'/)CxA(.m]%!/O"+6\\J$+Y++Y-!=UDN[-*/\'L-u,+(?\'Gnh*\'s+Dj,)s(D-CdZ\'HD,.M 6"(Y&(>$ W.-Z"9&$+Ao`oD+++qn\'x*d&+()s(]"(j+(/ #K.-C*#A)$)@C+=%,+ZE-N$-N$5#ar" &*"k*\'X(kz jbb"\'F%]& c&".`-#k;@.-!(W+(\\ (/$$$9$z#C#/=\\k*#*E(Se^O,d,#u+"\\-,h(TJ+]"De"(0%u#!l^%" L"T\'$5$B8/(Y!*V+-F" ^"-?".>-1%%)^e^)5%+(T+)?+-QBFBA *Z!!XUZ!+5#-+J&[_U?Z(/i+#5QZT@/"[/)@/W\'$+ >!(@<R +dHr*!ly_.E/Z\'H f]e=o).(a#G,,m*+Ku)W!ChC\\C*")=%E-#)MLyu<?$"Q,+?-,,q*)@$,R#T,*E/.+} +A,!N!!)?$)?(P !P 6#\'O%)T=?\'/^)$>+ C+,W,K%;TB6/,`#.5q*J-@%:&wXmkmS^b.0&+T&,!@,_>\'/\')$?k#d  _ V1-(N/G!L,+$}R(.,,(/!-N:s .a#,p(V _%! V))Y+)`~X"f&p`+#*n* >\\\')$RtN\'1G+,xc&#*,o,*E*V$ C$ Y%*k?S^(Gc\'e@\'>).,g#\'W+*"v!*D% K &$9u8%p,\'P!O#,^$#?+*6/!Z FJ%Uqj,$[,\'[,<c\'(\'$ #d@d*B+ (_!*l/B-=JB\'FQ#+Q,W%-.D"-[";&#!A: D%*G#!}--M/D/ !\')i)Q*p*(p*+p*,PaP*V -O!$R*/J!\'O!/JYW#"O#\'b#.Q%*TLY,9%/#>/$i "XV & &j#!/J%A*$k,,!n,"n.-R./f/L!Ve (?pK/\'h9EH)C\')^*p/V!-g,"-=(UAg,$ =/[)>q(A? l(O T%"8%\'$>-/.h"=%*S+"Z+#-\'$#$\'N!\'a-r$+_,*e+N#,,L\'/(C/x#N/-!\\-O$!/Mf$6g #J#6%##*n-R#AR.N"5(.*/))`)z()]F!\'@!!*D%6%+ d\'^ @%+-#K$\'A?$<[*-+\\.>TO,$D#Nd)X,hE\'$(X!d**wGALl([vRB &?!)ZT"/F$!+?*+G!#\'t$(.,-K9%#=LL\')$!P,F +6yO!$W%%Yn-q.^\'(QCOXF/(S >&!\'=U@!*A#+[$#*J&,=&Xu[9#>=d#-l1_$,_)E8+\'X+(0.o$*D,-G (G&#x=(./-N!*](/e+L/,.a.?"(@yX$(Z/, A)AuO )U+" &,d&b$d\'$_% L$ G"Zc(p/J #C "J J%!\'T"#?[Y%*>cb(V%*,T./i!+[!/D"/Z#\'[\\`*"E"_n*,q"Bv$\'D/_\'Ec,f*NN+x!N,:(.-"K&#h>Ad)?%s!#)B?!$Y#)b#+YBQ/"=9k.Kquq/B-$#e#\'G  GtA%|86  Q#8%$\'T&/^]OkW-/O.*Q/"@"#D%W&dX6&n- l,*L+$f*!f9o/ DpG(\'}.(M#\'A,\')D\')/!#p)$pMP g#$?$$C$#6*"b/(TtU )XG@*(BW*\'L!G).G*$xR\\K$6.a,)p*$PlP*b !C !J!$CUT")b"+C"/6#)^#<%$!O$ 6%(C>OdFEgQWQg+(b-6%-.>-/>B?.(Y.)^.+>/!DV[!$`")@"-D#*@%#+= "=$#=/S@jeU()@zkTX-"ijA:X.]>#"@(RD,d#/l;_V_!(_%B-+!fOf #f*/f+!(O$v(/e"*(Y"L$,(D!x!+m*"m/,K,*\\>Mw\'o/M/,C*$A$-NV))))s-(]#QFQ"*Q#/>$ ?(g&"/@/;(`*(b/).+C!$Q"#Q$$^&/-d$ \\R]& ).-"q$S/ N!c>!OHj -*s*(n-+(1`k$N #p,^&/V@Wx6^i &D!,\'= /= =oAxU-/\'>g_#*([.a$"paP%V#,C% Jjb-5%-.5\'1&,)E$q\'f"G% hAL-b>V.*@#"Q Q% *T!(jcV$,C?6aQ++VXA"$j#*Uoj+\'Z;(c_\\,R"f\'(O\'([\'A-J(B-0o-,L,!(/ )A)Q[WnD> \'X*m*O!+W\'$"A"^oi)Gf+W$+F- 6\'/,\'(C]tP%T"$^$(k$#5&"DwS\'bdu\'Q&_~h"X?,a*-r#C#!C!G%"#>+-X"/=$*5$5&nj++*?*)A-!@Ka-=#$,)0&a*+@+/=%"$;C )?#,F,\'U .D$MJ&Z?/w5q,*>"#rE\'.eDCxom-+\\\'()\\ J*,=*k+xpgp-$P#*P\'b"#^#/?#/F%<%&-Q(.QzQzC)H%QV,$g;F:Q/-@ !j0@%"bQ,J*/J+-J.D\']&k[+\'k, /qW\')$Ez!l/(_!E-"+f*"v "v/#()AG%.G&)G=GmG..m,\'m-,A,,N/`k/pxP#,P(gOVQ>+/i!$D0!=$[+"U.,k,++n#B$+->-$\'m!\'h*f ,f##v.*u)$(/)5T )Bb/ /(Q(]"+dt(./?+}A.+$;Y#/O\'/>hO*,C+*S (ABX/ &>+.m.^+)/?  r;% \'[\'/$e]%`!?$*\'9.e 6!)C, SZL-=Jz\'UBhB-!\'fVx!-(.,*K&.D,\'K*^ !b"/^,#i>#clnY\\$,\\,(h"+e6%+,F/#U /)$<Q#-J+(D"$kqU+Gn.E#;d".(U+}*#)O"))A%!!F#->S^+H&#(D*#E-*,E V&-^#,6S?+)>,#O--8/.5! U"/5-#"\'z \'z+_$"\'8-\'/-"v.-e!/uKLS(E"xK(B$(/"/K#!\\$+)U,A`\\zp, PP%!W%#$O/)Z" 5_S,$U;+\'Z#\':&\\,-M(Y#-W\\C++X--!\'C-\':B,)Q(\'B!)b!t(?#(H P,^,1=FR*,d<e!,))H%!,Jt*J.`AX+(A-/Z.)=X$@/B-!W-9K>\\(\'N J!5%yj"$ =\\=-A9^.k_-"\'/n=/(?*/?/\'G/?"*C#-CEY.(b/K&V%M8)=W +>!!b"-g#"V#$>#.Tp?%$J%#O&!>A?a6*#T+Q%, J, b,!O,!^.(W.G%.;%/c&"\'X"(S"-k#(`#R= \'= ,="-=\'=R5G[*!X*Y&,+`-(D;A6(w#,w[\'U\'>,Rc!\'?-\'K!\'A%\')/ d;r!!l*R-#N Aojux?$N?-L/#G!/G#,G%$Gq(`!m-.\\*$M=h\'.)$!(AzEN$;*$;u986>!)>"\'Vl6oWmT+"F<D T&P5@U>=-$$nk>qd&#u+L+n\\+(h"V&#O\'/$N/5".jKj+Aw.-\'6$fRen()5N-/(>%(1O,#+P#(P9$1%%% >*"V+-g+.C/,Z!$5#"/J+ =$k(.5)a&-\'D-/!>##>+Ew/\'CB)5_##v<e*/?**(s*G#*(.*+(/aK#"\\--E \'p+*p,O" Y(>%(.T, +>!^,#-vpG *(/T)=#)@-rFG,/N ()UF&/Y#*(K!>$#C\'(F:%&#*D,#$cG\'@!lx\'/;LcK$")O$h! h!(A(/\'W.s,W- >jA%c&d"}*(A-kZ5\'$A\\N#TN!\'A, L/5/(S$\'^+/u9&c",>%-="b!,W"#J":%]Y/(U "@y J#/J\'$=!/=\'S(/[v=kZ;%nn>!/@-+l+.(VJ(/ L/-(E/G* GhG,+K!-\\M)>")>A%(E* .v &A+Q:j -`y*J^=!S\'KR/#d$-l$-\'<.v *m*,(j$}9(6/\'GC" @"-A#^&$$["NG"-dor, G*,A.*_@e ,(\'$)p-C!$?#$YZV+*Y, F,!J--j~="$@$+ &vZoS,,A-W&-!@_Zb,w$B!_J,+d\'/r*-_-*\'8*\'tL!de!+e#)?iG&.m,.}bK\'(KRM*-M\\Coa*6"$g%(S/#(w#JU(\')?\'6%v+#l,6&$T?O,*D#**=/5&/jC*n-)>(/>(BKBC&\']/lE_" _$$D \'G#$A#+K&!)/"V .>">%#,T#:%  C%*^(.6)Pn#g+(Q`W#!j <& /ZY`#(Z##X#+k$,-J.)=/C-<&zj)/j/Ow6p()>.)@/(dhl-/_,/_zf&!o$NYLS,u+,?1LT}cK !K&-hEE!,s!F ,b()@!(.v-#?Y} (K" P,Y \'W"$>#\'Z &X#$A>X:,}+#K!/P->T.m,*J,/_)^Y"LA%!\'=#,YQ?kQ, i$ j>!K%,p-J\\^Mi,cG%O%#6(O%)^& / &FZl!eY&C%A$ )z$s"(P%YfJ+/.f!V,+O:b/?& " &!$k"#$=H&,/ &.-.f,.v\'/e-$Lxm+(K  K".AG).-+a-+p<%#/VMR+",\\}N$,]/A.--c">YY%$W+?&FD")5"-Z,*[/./\'$~G!\')$#D/,!G/.o#?!BD/?#.^#.)PSK%$(1VA*v#O-/-d.*(1X}*m#R"/(z$D*#-G+|<CY?& J\'=&"T&#*"J5&+$5-9&6+c*-R.-d./r**_++f#-f`D,+GC)YQ&<%m>/#5%*-=)=*f&+Q>#\'G,> "$R6%\'0%/!k J=d&` >/$d!*\'X.v/$(w(KW)a#r,)>%,d/EQ!u,$K! \').E*Mo#J*9R$|:-p/F+)C/;&"+-=#`\'/U,.L=+LRG#+\\pM/#)] &*!R [q"*eB(W\'m*/$;O!$J!,Q%(Q+b%9J<Y.(O/!W/Y%XQ1S!/[#!!=*[wjXBF">#*R#*f\'$v#N!\'L\'@G+/G-,}?}/#MsCRN "z6%"T&Y\'@/S\'O&,Lq,-m,#h*.A\'Z-F%()`K5z,(H-hs>-+K!^?if[#+S)1P$Z/"`_L1+?[_+$)YShX/\'V@^(/>+",_",n"^$ *\\<]+$p*-P$6VT >%"$#m)6$$?eW+)^9g.C%.*g./>/!X (`"Q&##i#- &GX,$ \'LRNB* +_;e$\'G "G5(8$K!#K+(\\"-\\-()/ 5,6&WD$:J>&./$@ur!+K&)h-U.+^PF1A$*$(/$-(/.-M$W!\'?DQMCT%%.)@-1\'.(/>!,m+,(.:)?+c+)P!j++X1!>0A1%!$6$!V(Y%?>sT`V/MJ)@>`:!@ro-/m.-K!$K/-h$-\'(F\'o^"*^.*JwbES !F !FO^!*T!,g" V%!V?W??C>+C%,/J-(k +`"C&$"jRUuZx`}/@-@--D5X-ac&/w,?b#>-(\'ER+$EQ$\'Q"lj_\'O"0(S#?&)?8G .x|mS(;/K #K /)$!)A@N"-s0C-? ,g"g%$ TfF, 5!*@$)5-!Br#d6f/$u|K%#M?%,;] >##b/)>1Z-zn\'E@#\'a/r8&+-"n.,G*jfZiO!/(d(UhW,$*zXe.Q+T\\$E !6&\'?`X ,@%=&,m(T*K$!N!YW!=,\'M g)$(K*Y!?$8g!.*?)N+ BVD#dh$kA")a$\';$>\'>Y@A (.-/A<&T-p(T,#T/! (/.C0"m-!f()D\'C.HJ6$BY!J%NF,#/E.8.1%)G%/,-G(j/9\'a \'AF+Buwq"+w+OBWH%&#\'k$sw,#lN$8Y./,$8Q_T&*[ *A/,#_ -f/-v##v+/(1"()ED*W-/S"G&$*-(N@R@,:&-#B$Z\'oW*S\'/>e*-)s,$HY.,Z"-j#MJ%@@/@,#n$,f,,f+*(/")\\$g  g\'/C*M&(?&E#\'U$n/-m+>(/"m;)=*K!NR/\')8RBu")P"b"J%Yi",jlX,,*@_r)$lCeZ?u(/.+=-j/" n &\'9+o*+)z!).*J!/-r+!\'(nr+L (R+$D*.?5!fm>%!>&VU+M&[.m@d\\Es.*P! \'/c&"zrPC^z.C&\'^?)D8A+,P#W~W#$^#,g#-Q;=$",J)URX,#5,$B"$(n*/q.->%$\'8!e",?.N,*E+,$\\`\'U)N!"N.X##-=&)>&*@8\'} ?$#D.6#"^YO$"JNY.(>/\'` +["$A"\'A"*+JK&+-S,,,>+"@*B(\\\'](_,+\'/Rf^(G+G+N,++K\'/)>.N-k* +l#? )C,#6t5\'(@+-(\'$YR E/(.)/#kl*d!>##)>xs.g/=v]o/!f)?/#T/T>&"rSK#`D>).Q*a_! @\'.x",$H%%Xi*!A,#@/ "\'$:\'ALD(G%%m\'C.-X#,/>T\']"e-\'h"(M/"uzD.-z"g$,OX,J(`g,cOm*\'m-#N#+JP\'P&$;-p-?\';%MQ*=%+,T!*?;Y.)` !="\'=%\'@%*\'=&5jB"Zr[(O vse)NQ,m* m5}\'$A!,A$$P*5$*k+=e!.(S!?&*K.?, UC#)GL$d?%\'P b[btC8%&c-\'N/v\'NK\'(N=-b%/!@F%&,+(p,/\'[)a)F" J$#Q&\'WxZ!*S[B!!^AB,(E,-B-!+A/ J(\'(V89)P>%!>%uV5YBY/ il$$:&?#-C()A%+lqN O 1%m!@%&\'G>"FR^?!!rD% P%KE"$R+,R-.L1*(/-$K$-$1b",C*"C/ !E*-P--e!\'M.^cZY%&k)>"+L-,(/!$d$F"-b()ZO%&" *=*5+,-l#/o.C "#$H?0%%$$JoO)$C+]%,/V,.b-"C.)="+UZ@%#5%+Ack,g&,9c/Eo"\':+f-.e+#u ,(p,(c"(\\"G"*m$*KiM-"N/-z/#]&,$8/p*O (gFJ\'$^s?<g/-?/-A"#/=+Swk_ &}F!M_yf**v*L+  mmm+/M\'.A#F$" N"T#!> g%YTGD$+[q$\'[R\'=dS\\5%",Z,*U+D%fV8TCSn,\'/1%!9@,=SE(.()Q$).+QlQa)="@\')i+,6pA]C6%v)`\'Ca*i\'/.)T[?-piP<%#,D"+Ank,*+(/,$P*-\'5-).+/$;@U[.f&/"+?!Y$\'Zn*aW%-/#rC%,*T+`(w`8*u-!d!$v ?))E,(j,!!R"V"-CM"wy\'F/R-+E"\']&UKQ*\'b*!?!^%$ g$_= .@-/(H\'MNz/W).*\'Fj.T%!$jmE-+/_.,)@").+i$\'D*y(0FNWQX+-+q!+@/"_+"f!\'u)C!#[n().-)@.5@F"H)K%%,"S"#+l\'.m+V%P& k_ +C(V0!$6b!+J\\,n#*fZ\\,6/FR:%#(W/\'E-|?*,G##(.})>=\'/#?*.)WZ! A! D,+)@%"G.-(/#?%"/P%O!"^",>#,Q+^%Bj * &!([#-=cA_i5@-mqZq#\'>#!\'C LgGNK$*K\\KbA,$(\'(g)OpLP%)$;.G(N/#/N!V *gBT)A%++C.+D#-i#/i$,!=-`)$i]D- k.kw)$>"(d*/\'/Gf  u$N$,NN!xy(;*KJA_)Ki!\'5")U+#[,(Z-\'$\'/,,\'H`-, \'/?(r*L/D@%o+!N#,A/@-!+_&!u#-)U*$BO#>%g &+ S/.+?,-D"-(s>~C$ b,J&\'$5G(\'$ &\'$o>:L,/L9\\,,A:A\'?/xq(R*,+u$5#* >J%"(A-$U.z\'$ )>%ED+lMADd-,)/}$1=U5%TD%,pDp*6 -*$:O!,T+.5%)ALU-+,q!/@$"R*-d!,lB([/G-"Kl\\,/A>N!?"a_-O "Q#)D\')@-,+w- \'$##v.L/"*A*#)T\').)/\'SVuU-)E-"/)?8.8PZP(Q!+>"+O-+i !,q+"\'h,e-#M#$A+\'AXE *).E)X"=*=+\'Wy>"*#c,LmF.,A|k!K&/"#w$E,#B-/$f&/(p.K"#h"T$$"a&X*-#c(N,,"}./E#F"+W*$O.,^/ Sw@E`))Sji/ /\'["n/,r.-f !f\'.(\'$+K,6U-).h\'N$fxh#"G-J "g$mG\'Uk*m,$v @ -Ud ]/"p))pNz! G&+?,!?&DK &BB(E(O%{732%/ ,$9|9%$:*$<!$<&$<,$</$8"$6&$6(pep?(`+pGe!F/ -p(8.)8.)/p* p*"p+ p+#pkp,8.,-p,$p`p,"p-\'p-8..-p-/p/\'P )P%*P0P%+P%-P%\'P$\'P@PLP(/PNPrP&)PcP\\P&/PDPA%!!(P-$P-/P,8/-(P-+P-!P-*P- P8P6% !^ "? !W "^ F% VP!,$HJ "O "C ",$H8/.b !O  J|Y|@cYV%%VV|?V^VJ &T \'? (V )^ ?% +W +F ,C ,^ +Y ,F -J -6 6% .g <% .6 /C b%! C! O! F!!J!O%!!W!!^!"O!#^!#>!#T!#Q!#b!$VOF!$TOWU"d/?UCU^U6!(V!(F&-?!(T!(C!(b!)O!)Y!C%!A%!*W!*J!*F!*C!*^!*Q!+Y!+O!+F!+V!Q%!+g!T%!,C!-Q!;D%%%!.C!.g!/V!b%!/6" W" QyW" 6~>~^~6"#Y"#C"P%"$W"$Q"$TF6FW[^"\'W[C"\'Y"\'b"_%"(g")W")F"\'O"(?"\\(tLt>"*T"*g"+T"Q%",O",g"->"-6"<%"5N.g";%"/Y"b%"/?"/C0J0(>#?0g#!V0b#O%#!^#"Y#"b##O##Y##?#$V#$J#W$9>#$C#$g!-JY6ZCZ6\\?#\'Q#\'>#(F#A%#*V#*J#^%#*6#+V#+J#,#l!"A-C#-/=/,w.6#.6#.?#.g#/^$ O$#g$$V$"T$"g$#T$"6$#J$"C$!g$$6$(b$>%$(6Wb$\'O$\'>$\'V$)F$\'Q$(V$@%$(W$K%$D%$,>$*F$+?$^%$*T$,W$,?$*?$*Q$,F$*W$+6$+T$-?$6%$5%% b%!WPgp6pgP^$:%%#C%$V%&Y%$T%"6%%T%W%%%J%%>%#?%#Y%%g%)C%(V$*b%G%%)b%\'Q%\'6%)?%)6%*6%\'T%(Y%*C%(>%*?%-^%T%%-b%,W%-T%8%%-W&!W%/>&!J%/6%/g&!Q%/C&$6J w-b&#W&#J&#F&#?=Q=W&"b=T=^&D%&(V&G%&*V&)W&(b&^%&*6&+J&+W&,F&+T&,O&,Y&,V&,?&,6&-O&-Y&->&.6&/CcV&H%cWcCc?cQcgwYw?wJ%,>wTnJq>q?\'$6qQ\'$V\'P%@ClV\'(?@ORb\'(C\')YdVrYdWd^rVlYlJ_W_F_Yf^_J\'<%fQvCvg(\'FeODFuQ(c&+,V?Fog(\'C(?%xC()bGQx^}6xQx?G6(T%}Y}O}>}C}?(6%}T(8%}b(.b(/^(/C(1%(/T(/gKFK^\\V\\kGJ)F%MTMghFh?hB*-FC%%CV)$6C^C?AFAVA>ATACE?NO)]P%8tQsYaFzJ).?]TNg]C]^*F%*!b*!O*!T* C*!^*$ViT*$C*Y%*#JiFi^*)^*+T*+6*,Q*,F*+g*<%*->*5%*.C*-J*/^*1%+ T+ Q+!J+#F*-V+"^+#J+#6+$Y+W%+$VQOQ%%Q^QQ+J%kC+\'V+\'Y+>%+\'D%(?+\'^+(V+(Y+*J++?+,Y+,>+,C+-W+-V+8%+5%+:%+-6+6%+.Q+/V+/J+/Y,V%, >, ?, g,!Y,"V,"F,"?,#?,#C,$O,$J,$6TYTV,P%+\'O`T`85F,@%,\'C,(T,)O,)W))Q,*Q,+Q,+J,+T,+>,T%,+6,,>,-C,.C,/g,/^,.g-(T,.^- Q-O%-!>gT-!b-!Q-!O-!W-"F-!^-!C-!?-$TgF-$6-$QjT-\'Y-@%-(>-(W-(F-*F-]%-*T-*6-+g-K%-+>-+T-,C-,g--Y--F--J--Q-.Q-/F-b%;Q9^9C9O9Q<J<>8W8Y8V866>6W6b5F5W8>.>%.@%B*).+TBb.*V.,O.,F.,?.-V.,b.-J.<%.-g.-^.-Q.:%.9%..?..C..T./O./Y./V./W./?./6/ Y/ CbgbT/ Q/!O/!J/"C/"g/#?/$O/$?/$T/$6/"bbObJb>bCXOXg/\'Y/\'>/(Y/(F/\'b/G%/(?/)O/(>/)6/)C/)?tVt?tg1T/-J/1%/8%H?HO/-j +YHX "U & & !A ! & "A  5 #U !k O& "k "=  X #iVi|U &i \'@VX|i|=|j &Z|Z &S|[ &` &kVA (U (j .@ (Z )i (S a& )= )@ M& *@ (k 9& +D ;& -Z +WH & +j ,= Q& -D!$j!O&! = /= /@!  & /S /i! Z!"U 1& /U! j! 5!$@!#5!"D!"@!$i!#X!#`!"`!#S!#j!$[!$S!\'Z!\'@ODOAOiUk!\'SUX!J&!\'UOXOjOZ!>&!)A!)=!(@!*`!)S!)i!G&!)U!*k!*5!,`!,i!,A!/@!,D!,Z!,=!+i!,+\'/\'A!,j!5&!<&!/=!/i!/S!H&!/j!/`!/5"  &" D" A" j" `ySyky5~U~i~5"0&"#["#Z"$U"$5F5[ZFk[ &[D"\'`"(["(A"\'5"M&")Z")="-S"(Z")S"-@"-U"+k",X"H&",=$-S",D"-`",`",i",[",@"a&",A0`".5"/U#"@0[0D".X"b&Y &##5#$j$!`#P&#)=#(5#f&#*k#\'=#*Z#(X#(A#)X#Q&ZkZA#+5#.A#, &#,=#<&#,A#-[#/=#,S$!=$#S$ =$!Z$"=$#=%!j$!@$"D$ XS@SX$\'=$$5%"i$C&$)Z$^&$*A$(D$+`$-i$-[$T&$,@$+k$-D$,[PU$Be A$;&$9&"*`$<&p/J"`P=PSP[P*J  &P-J!D%!,JVJ"$J"#J"+J#$JYJ#@%#=%#(>$+J$D%%=%%%J$-J%D%%5%%-JnJ\'D%eJoxGJaJ)/J*+J+@%,#J,=%,!J,$J,,J-"J-+J-A%;J9J/UR"= *= #J1&R#=Y=#=&#$=!,=P=$$=$)=$!=%5J-=&$=&\'=&(=%/=&"=c=o=L=(5&()=u=N=]=,!=+)=,)=+5&+,=,$=+(=-=&-*=;=#/=5=.)=/ =b=/@cXw=w5n=n\'E#Dn5qXq=\'$UqDq@\'$=>5@ &>A@Z@S\'(AR &dAR`@i\'(`\'(kd=dU\'?&r@\'.XrS\'.`rZ\'.ArD\'8&_5_j\':&\'.5rAl5l=\'.@*)`v5u=eAu &ujo[u5xZek?ADZ(\'@(\'X()XLXGj()S(]&(a&LZ**5xA(\'S(Q&G &xiKXLj(\'5KUmiKD}DM[M=(9&K`mj}S(.@(g&h=\\[KS}@(<&)F&(/A(;&(.XMDMi\\iMZMUm=EAE@C`EDAkCSE5A5hAEShjCA)0&AUC5CjNUAia[s5] &aXzU]Za5z6+.Dzi]jakzZs@*"5))Us &))`)C&aS]5).D* [*!k)H&+ i)/A)/[).@*V&aU*!5).j*!S).k* i*![*,U*"Z*!Z*$S* `*\'[*#=*\'D*$@i[^A*=&*$D*#D*"[*K&*(j** &*(S**[**Z*ED!@*+k*,Z*,[*+D*+Z**`*-5*-U*-X**i*-i*.i*1&+VD!=*/i+![+Ua#U+!X+#D+#\'@-`+#)N.5+$@+$Z+$AQ &QAQSQkQXkU+\'D+\'A+\'X+f&+(S+(Z+(j+)D+C&+)5+*S+*i+*k+*X++[++U++Z++@++`+,=+,k+-Z+-X+.`+.k+/Z+./).+5, D,!Z,!S,!k,"S,"ZT5T%&`[`i,([,(j,)i,(U,a&,\'5`D,\'Z,M&,K&,,S,/U,-Z,+j,-@,T&,-j,*5,+U,+5,+i,-k,.X,-A,.i-!/L$j-#=-"k-#j-#D-!A-Y&-#Z-![- `jZ-)ZjSgi-\'AgA-(5-C&/8&-?&-/A9%&;i-Q&-,@-5&-+D-,=-.`--5-,`-.D--[-T&-/i--A-8&-g&-.i-.5:j55:59AB[6X<5:Z5k:kB=8j9X8Z<i85:S.H&9j<D.([.*i.)D.,A.+@.-Z.+j.*X.,S.+[.-S.g&.(X.^&.,[.)X/$U/!!c$`..`./D./5/#X./[/#U..X/#[.,`/#5/!Z./@/(=/d&/\'D/(U/f&XXbkHZXj/([/\'`bD/(5/)U/,[/=&1ZtZtUtS1A/,=ti/-X/g&/.`/-S/-DHU/.5/-+c E  kH*c!!c !c XHB !+c!i/\'$c!-c!(c!/c0c#B #"\'V!c&#c)E Mc*/c/!c*,c+(c+#c*B -/c,+c--c-E! E /-w!,w!E!J\'O%wLw=\'U"w$,\'O&\'U,w(/w1wuwCw*(w*,w-R!+E!+B!-"w,E!-$w,B!;w.,wBwbw/,w/E!Hn -n! n!+n"(n"-n",n0n#"n#+n#,n#/n$ nSn$+\'F(n\'$n\'B"envn(R"MnAn*"n*R"+E"+"n,#n`n,$n,B"-"n:n;n9n/E"/>  /q!R0*q!,qUq!-q#$q"/q"E#Fq#B#$B#P).-(\'YRZ*\'Z(qcq\'(q>qrqdq,(q+#q,B#++q, q6q.B#-B$*"\'$V\'S/\'$Fq/(\'$#"\'$#*\'W%\'$#/\'W/\'WE$$!\'W,\'SE$c\'S#\'S*\'$@\'$\'B$x\'$)B$*R$,*\'$,/\'$-$q/!\'$;\'$<\'$B\'pEpBP"\'P \'P!\'P(\'P\'>|> #>V> ,> .> ->O>!#>!.>[>",>#,>$$>$->$*>$)>%+>S>%*>&)>&$>&\'>&+>&->\'(>@>D>(\'>\'$>G>()>e>)$>s>]>^>*#>,">+#>,#>Q>+->+(>+,>+!>,->,*>-">-)><>-.>/.>H>/,@ !>/ >t>/">/#@ +@ -@ )@!/@"\'@" @y@~@"$@#$@0@#+@$\'@$(@S@%,@%(\'=!\'="\'=(\'=E=*\'=R=,@c@n@@@\'(@l@f@o@L@x@(.@A@h@))@s@+ @+$@+(@+)@+*@,"@,-@j@-"@-.@9@6@B@.*D"/@1R (R Rc$R"En$R!B\'FR[R!+R#Rq(R$R>*\'@(\'@+\'>+\'@%R\'/R\'BRE\'(B\'xR\\R* R)Br RkR+Er/R+,R+-R++R,Rl-R-R_*R-,R<R.B\'/,\'f,\'v"\'M&\'e \'M*\'(W\'LB(\'$\'(D\'(l\'(s\'L,\'G#\'(Q\'G*\'G/\'}!\'(`\'m+\'}$\'xBx,\'(T\'m*\'(.,\'(B\'}*\'(/-\'(/$\'KR\\"\'\\!\'\\EM,\'M+\')$ \'A \'CRC/\'C*\'C%\'C#\'E*\'E/\')G\')]\'s\')/$+\'s*\'sBa#\'aEa*\'zE]%\')B\').,\')9\')<d (d -d!(d!E*" d!/\'N d#!d#+d#B*#R*$#\'^R*$Ei!d&"d&))/]dcd\'E*_dLdEdCdNdAd*E*,(d+ dkdTd,$d+/Kod,R*,*d,-d,/dgd-#d-E*-*d--d9d:d5d.-d/ r "r /r *r &r##r!(r!E+!B+Yr"(rZ\'Q rdr|r$-r +r$,rWr>rJr\'$\'kR+crw\'k,\'kB+]rNr)/r}rzrsrxrMr(/\'Q-r)E+,+r,!r,,r,/r+$r`r--r.E,!!l!$r5r6\'` l  l R,!#r/#r/R,!R, -rXl"#l"R,"*l!/l#R,"+l#-l$,l$#\'T$lPl$ \'T \'T(\'T/\'`$\'T&lJ\'`,l>lolKl*$l*-l*"l*+l*!l*(l+#l+"l+!l*B,+E,+-l, lTl,"l-(l-"l-,l:a#+l./l/"l/$lXlt_ &_ "_!,_O_ *_W_$+_"B-#"_#/_Y_S_q_%&_$B-n_&(_&B-P_&#_h_(Eg+_(/___a_+*_*B-*#_Q_,R-+-_*+\'<-_*"_*/_-,_+(_)/_+ _-(_--_8_-B-1_/"_9\';%\';*\':#\':!\'9"\'<!\'9/\';E;+\':"\'8&\'5&\'<+\'<%\'<E8#\'<R<"\'<*\'5R6-\'6&\'6B6E6*\'BE5*\'5EB,\'B+\'.o_g\'B-(tBB/\'.L\'.(E.m\'.M\'.K\'.h\'.)$\'.A\'.(B.a\'.z\'/#(\'/#*\'/W\'/$,\'/$-\'/$Bb \'b!\'b%\'b$\'b(\'b/\'X \'X(\'XEXR/\'(\'/e\'/D\'/o\'/L\'/(R/m\'/)$\'/)B/]\'/s\'t#\'t/\'1"\'1EtB1&\'1L+w\'/T\'/`\'/,*\'/g\'/-$\'/9\'/5\'/.EH#\'H)N-,f &f|f +f!"f!L !N !,fyf"L #/f#+f$*fS(V"(VLV*(V/f&"f&L qfnfcf@f\'N _f\'/fufDf?fafhfsf*g!Kf*,f-+f6f-N --f,$f-*fjv N ./f/!v!+v"N!"#v"/v$+AxvSv#.(O#(O!f/,vw(U.vJv=v\'$vovLvGvfvev* vCv*$v*#(O/vhv*N!+ vQv+.v+L!+-v, v,"v+*v,N!,-v-!v-N!-L!,L!-*v-/v;vBvtv1v/.e !e "eVe \'e *e -e! eUe"N~+e#L"##e$ (FNFLF-(F*(F/([$(["([L[*([+e".eweRe\'L"\'.e}eMe*+e)/e++e*,e9e<e-/e-"e/$e/#etoh(0#e1e/N"-.(0&e-,(0N"-N#Yo#$oUo#"o#!o$ o#NY oWo"/o"+o!\'o!L#?oso**o)/o*"oAo"#o(.o(\'oGoloQoqo>o* o(N#*L#/$u!#o.+o,.o/-u #o-L$ +o,!o/\'u \'o;o/"u -u~u" o+-u#(? &o1(S-u"*u#,?%*uuuR(S+u*-(S.ue(SN$Su",(S/u\'N$Yu,*(S"u+N$+/u)/u-N$,-u++u-*u- u,!u`uju*!?yuH(P$?!\'?!(?",?!/?O?!$(P,?$ ?&#?%(?$(?$!D "?$+?%%?f?*$?L?\\?G?*(?&-?)$?a?.*?(\'?z?R?\'.?K?,)?+*?,/?+)?- ?g?--?6?-,?/)D *D!#D +?/.?tD &D~D!*D0D#/D$-$6%D%$D%/(=\'DwDhD*#D*)D**DxDmDkD*/D,$D`D+ D,)L"#D*+D-$D-.D.)D.,D-/D-+D./(w"(c&(cLc (c#D1(w!(cNc-D/Nc*(q$(q/(q\'(q+(\'F(nNw*(@ (>/(RL\'$,(\'p(R$(>\'(@L@.(>N>#(@#(@*LV(d"(\')/(\'e(d/(l+(r-(l (_ Aj(d+(l$(r#(l\'(\'`(r+(\'./(\'/"(\';L /L -(\'/.(\'X(\'/\'L .(_"L!!LULOL~LyL#!LZL#)L"\'L#+L$$L$"(?"(?N?.(D"(D+LvL\'.L).L>L_LQLnLeLELM(G.L)NG"L}(G$L+ L+/L+!L,#L,$L-$L-L})L--L/NK"L/,L/$L.L(/"(K$(K,(K*(\\#()$#(\\.()F(M*(M+()$!()$$(h+()Z(hL)$,(\\-(A (C.()=(A$(A-(A*(A/(E$(E\'(E.(N#()L()G()h())Ls!(sN)i(s,(s/(a"(a*(a-(a/(z (]*(],(]-()B()/$()/(G #GUG! G ,G!+G!-GFGZG$!G%+G%"GSG$(GlG&-G&,G&"G?GeGuG*(G*!G\\G^GiGsG*#G,$G,-G,"G-*G.+G/#GBG8G/!x!$G;G:G/\'G-.G-+x ,x \'x!*G9xUx! x!\'x" x##E*+x[x"+x#.x"L+$!x$,xPxpx$NQ&(Q+(Q*(k+(Q/(k,(k/x\'$x_xfxmx(.xMxhxAx)N+sm#*m$!m#/m$L,$,mp(T (T%(`"(`,m\'L,dmem(N,?mGm}m(.m)$mlm)Dy-m*-m**m+-m+"m+#m*.mkm,L,,!m8m<m-*m/-mtm1}|}V} *} \'} /} -}! )/p}!#m,-}!$}U(j\'(j-}w}q}v})N-,"}+.}+*},/}-*}j},,}-+},+}.*}.+}-/}<}/,(;L;N-H(9-(9.(9 (9/(8"(<%(.0(<$(8*(8\'(8N8,(6 (8L6N5$(5 (:*(5#(6%(.@(B"(B,(.v(.(\'(.?(.u(.x(.G(.h(.\\(.)$(.)N.**(.*!(.*,(.+ (.`(.+!(.+.(.T(.,L.,+(.-+(.<(./,(.1(..+(./.(/ *(/V(/O(/!"(/!N/!#(/!,(/!/(/!+(/ ,(/[(/##(/#+(/#N/W(/$"(/#.(/$,(/$N/S(/p(b\'(b,(X"(X#(X$(/z(/)/(t#(t-(t/(1\'(/-*(/6(/:(/.*(/./K(\'(H$KV(HNH*K!!KOKyK -K!.KUK +K"\'KZKYK#NH(KPK% K%!K%"K .K$)K#.K%&K%(K%.K&(K&/K@A*(KnKeK_KvKfKGK()K(/K*(K*/K+!KQK:K8&"$(K-+\\ "\\!"\\!)\\#"\\0\\$*)O&)O()U#\\J)U)\\q\\n\\x\\()\\e\\*"\\*+\\*/\\**\\Q\\+$\\+*\\, \\,!\\,)\\,+\\- \\j\\-/\\9\\-+\\/,\\b\\XM!.\\HM!$M",MOM!!)F.)F\'MWM$)M&$M$(MCM#/M$+)F MzMAMhMa)F*M,/M+)M+\'M.))0/Mth$$h".h!)h~h!*h"#h#*hYh#+)Y,)Z hl)Z.)Y&h+ h*,h*-h)$h+)hjh-\'h.(h6h-(h,#h--h- h,(h8)$!*)$!$)$!#)$ #)$ \')$! )$Z)$"+)$Y)$y)$#*)$$!)W")$$$)W+)S )S")W.)S*M"))$c)$>)$R)$_)W*)$l)$\'.)$v)$\'/CeC(\'CGC)$CACNC))C* C*(C*\'C*-C+,C++C+)C+.C,iH&C,#C,-C,,CgC-$CjC-,C9C6C:AyA"(A".A"/A$"A$,APA$+ARA%,A%.A%-A%/)=&An)=,A}ANACAEA**A*\'A+!A+"A+ A+$AkA+(A+)A,.A,+A,)A,-()$-A-,E -AgA/)E|E &E (E!#E .E!!E /EUE!)E"$E"*E0E#)E#-E#.E$$ESE$(E$"E$))>,)@ )@$E=)@?"-")@+EwE\')E?ElEvEdEDExE(/EKEzE*(EiE*#E+#E+$E,#E`E,(E,+E-,E.-)/PE/"d-/EXEbN /N ,N#(N"$NyN#\'N#-NSNPN$+)D+)D/NcNwN\'$Nq)G*)G/N+!NkN,$N,#N`N.)N.+)K#)K))\\")\\$)\\()M!)\\-)\\.)M$)M )M,)M.)h-)h.))$"))$)))W)C ))$+)C!)C"))$,)C%))E))N))^)s-)s.)a,)]/)]+)]-)]()]!)).-))..))/!))/"))1))/(s !s /sV)):s!)s"+s#\'sWs$"s$ s$#s#.)^%s$-)^+)^\')^/)i"sJ)i$)i))i+)i*s*-s+ s+,s, s,/s-!s-#s-$s-.s-/s:s<s5s./s.+s..s/$s/!s/\'s1a &a!(a!*a!/a~a"#aFa"\'a"(a")a"*a".a"/a#"a$$a$#aPa$-ap)Q!)Q(a\'$ahaoa\\aAaEa)/a* a*(a+$a, a,*a+)a`a,/a-!a-"a<a:a8a-$a9z#*a/"a/!a/ zOz!$z )z!#z ,z &z (z!"z *z|z".z!+zFz"$zyz0z$\'z#"zSz#.)T*)` )`\'z@z\'(zBz.,z/ ] )] (z.+] #] &]"*][]*/]"#]!/]$$]O]!"]$!]#/]#.]S]$(]%-]%.]&$]%!]% ]%)]n]()](\']*+]&/]d]s]*$]*)]+"],$],!]++]+(]+*]`],/],"]-)]-#]/(]5].-]./]/-)9*)9+)9.).>)B))B-).v).L).x).m).M).C).\\).]).^).*)).+().**).*-)@!).,,).,.).,/).- ).-$).-,).-.).--).;).6)..()../)./$).X)./\')./)).1)./,)./-)/ \')/ (@+\')/O)/y)/",)/#.)/$*)b")b$)X#)b/)X )X!)/=)X\')X,)X*)/R)/n)/@)/C)/z)tVeXz\'K%ESW!-,w)){{{{{{{{{{{{{{I\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!3ycywynyqy\'$y>y@yRy\'e!\')H:H8H \'H "{{{{{I74;  ; !; "; #;|;V; &; \'; (; ); *; +; ,; -; .; /;! ;!!;!";!#;!$;O;U;!\';!(;!);!*;!+;!,;!-;!.;!/;" ;y;~;"#;"$;F;[;"\';"(;");"*;"+;",;"-;".;"/;0;#!;#";##;#$;Y;Z;#\';#(;#);#*;#+;#,;#-;#.;#/;$ ;$!;$";$#;$$;W;S;$\';$(;$);$*;$+;$,;$-;p;P;% ;%!;%";%#;%$;%%;%&;%\';%(;%);%*;%+;%,;%-;%.;%/;& ;&!;&";&#;&$;J;=;&\';&(;&);&*;&+;&,;&-;&.;&/;c;w;n;q;\'$;>;@;R;\'(;\');d;r;l;_;\'.;\'/;f;v;e;o;u;?;D;(\';L;();G;x;m;};(.;(/;K;\\;M;h;)$;C;A;E;N;));s;a;z;];).;)/;* ;*!;*";*#;*$;^;i;*\';*(;*);**;*+;*,;*-;*.;*/;+ ;+!;+";+#;+$;Q;k;+\';+(;+);+*;++;+,;+-;+.;+/;, ;,!;,";,#;,$;T;`;,\';,(;,);,*;,+;,,;,-;,.;,/;- ;-!;-";-#;-$;g;j;-\';-(;-);-*;-+;-,;--;-.;-/;;;9;:;<;8;6;5;B;.(;.);.*;.+;.,;.-;..;./;/ ;/!;/";/#;/$;b;X;/\';/(;/);t;1;/,;/-;/.;H9  9 !9 "9 #9|9V9 &9 \'9 (9 )9 *9 +9 ,9 -9 .9 /9! 9!!9!"9!#9!$9O9U9!\'9!(9!)9!*9!+9!,9!-9!.9!/9" 9y9~9"#9"$9F9[9"\'9"(9")9"*9"+9",9"-9".9"/909#!9#"9##9#$9Y9Z9#\'9#(9#)9#*9#+9#,9#-9#.9#/9$ 9$!9$"9$#9$$9W9S9$\'9$(9$)9$*9$+9$,9$-9p9P9% 9%!9%"9%#9%$9%%9%&9%\'9%(9%)9%*9%+9%,9%-9%.9%/9& 9&!9&"9&#9&$9J9=9&\'9&(9&)9&*9&+9&,9&-9&.9&/9c9w9n9q9\'$9>9@9R9\'(9\')9d9r9l9_9\'.9\'/9f9v9e9o9u9?9D9(\'9L9()9G9x9m9}9(.9(/9K9\\9M9h9)$9C9A9E9N9))9s9a9z9]9).9)/9* 9*!9*"9*#9*$9^9i9*\'9*(9*)9**9*+9*,9*-9*.9*/9+ 9+!9+"9+#9+$9Q9k9+\'9+(9+)9+*9++9+,9+-9+.9+/9, 9,!9,"9,#9,$9T9`9,\'9,(9,)9,*9,+9,,9,-9,.9,/9- 9-!9-"9-#9-$9g9j9-\'9-(9-)9-*9-+9-,9--9-.9-/9;999:9<9896959B9.(9.)9.*9.+9.,9.-9..9./9/ 9/!9/"9/#9/$9b9X9/\'9/(9/)9t919/,9/-9/.9H:  : !: ": #:|:V: &: \': (: ): *: +: ,: -: .: /:! :!!:!":!#:!$:O:U:!\':!(:!):!*:!+:!,:!-:!.:!/:" :y:~:"#:"$:F:[:"\':"(:"):"*:"+:",:"-:".:"/:0:#!:#":##:#$:Y:Z:#\':#(:#):#*:#+:#,:#-:#.:#/:$ :$!:$":$#:$$:W:S:$\':$(:$):$*:$+:$,:$-:p:P:% :%!:%":%#:%$:%%:%&:%\':%(:%):%*:%+:%,:%-:%.:%/:& :&!:&":&#:&$:J:=:&\':&(:&):&*:&+:&,:&-:&.:&/:c:w:n:q:\'$:>:@:R:\'(:\'):d:r:l:_:\'.:\'/:f:v:e:o:u:?:D:(\':L:():G:x:m:}:(.:(/:K:\\:M:h:)$:C:A:E:N:)):s:a:z:]:).:)/:* :*!:*":*#:*$:^:i:*\':*(:*):**:*+:*,:*-:*.:*/:+ :+!:+":+#:+$:Q:k:+\':+(:+):+*:++:+,:+-:+.:+/:, :,!:,":,#:,$:T:`:,\':,(:,):,*:,+:,,:,-:,.:,/:- :-!:-":-#:-$:g:j:-\':-(:-):-*:-+:-,:--:-.:-/:;:9:::<:8:6:5:B:.(:.):.*:.+:.,:.-:..:./:/ :/!:/":/#:/$:b:X:/\':/(:/):t:1:/,:/-:/.:H.0 .0!.0".0#.0p0%.0&.0\'.0(.0).0*.0+.0,.0-.0..0/<! <!!<!"<!#<!$<O<U<!\'<!(<!)<!*<!+<!,<!-<!.<!/<" <y<~<"#<"$<F<[<"\'<"(<")<"*<"+<",<"-<".<"/<0<#!<#"<##<#$<Y<Z<#\'<#(<#)<#*<#+<#,<#-<#.<#/<$ <$!<$"<$#<$$<W<S<$\'<$(<$)<$*<$+<$,<$-<p<P<% <%!<%"<%#<%$<%%<%&<%\'<%(<%)<%*<%+<%,<%-<%.<%/<& <&!<&"<&#<&$<J<=<&\'<&(<&)<&*<&+<&,<&-<&.<&/<c<w<n<q<\'$<><@<R<\'(<\')<d<r<l<_<\'.<\'/<f<v<e<o<u<?<D<(\'<L<()<G<x<m<}<(.<(/<K<\\<M<h<)$<C<A<E<N<))<s<a<z<]<).<)/<* <*!<*"<*#<*$<^<i<*\'<*(<*)<**<*+<*,<*-<*.<*/<+ <+!<+"<+#<+$<Q<k<+\'<+(<+)<+*<++<+,<+-<+.<+/<, <,!<,"<,#<,$<T<`<,\'<,(<,)<,*<,+<,,<,-<,.<,/<- <-!<-"<-#<-$<g<j<-\'<-(<-)<-*<-+<-,<--<-.<-/<;<9<:<<<8<6<5<B<.(<.)<.*<.+<.,<.-<..<./</ </!</"</#</$<b<X</\'</(</)<t<1</,</-</.<H8  8 !8 "8 #8|8V8 &8 \'8 (8 )8 *8 +8 ,8 -8 .8 /8! 8!!8!"8!#8!$8O8U8!\'8!(8!)8!*8!+8!,8!-8!.8!/8" 8y8~8"#8"$8F8[8"\'8"(8")8"*8"+8",8"-8".8"/808#!8#"8##8#$8Y8Z8#\'8#(8#)8#*8#+8#,8#-8#.8#/8$ 8$!8$"8$#8$$8W8S8$\'8$(8$)8$*8$+8$,8$-8p8P8% 8%!8%"8%#8%$8%%8%&8%\'8%(8%)8%*8%+8%,8%-8%.8%/8& 8&!8&"8&#8&$8J8=8&\'8&(8&)8&*8&+8&,8&-8&.8&/8c8w8n8q8\'$8>8@8R8\'(8\')8d8r8l8_8\'.8\'/8f8v8e8o8u8?8D8(\'8L8()8G8x8m8}8(.8(/8K8\\8M8h8)$8C8A8E8N8))8s8a8z8]8).8)/8* 8*!8*"8*#8*$8^8i8*\'8*(8*)8**8*+8*,8*-8*.8*/8+ 8+!8+"8+#8+$8Q8k8+\'8+(8+)8+*8++8+,8+-8+.8+/8, 8,!8,"8,#8,$8T8`8,\'8,(8,)8,*8,+8,,8,-8,.8,/8- 8-!8-"8-#8-$8g8j8-\'8-(8-)8-*8-+8-,8--8-.8-/8;898:8<8886858B8.(8.)8.*8.+8.,8.-8..8./8/ 8/!8/"8/#8/$8b8X8/\'8/(8/)8t818/,8/-8/.8H6  6 !6 "6 #6|6V6 &6 \'6 (6 )6 *6 +6 ,6 -6 .6 /6! 6!!6!"6!#6!$6O6U6!\'6!(6!)6!*6!+6!,6!-6!.6!/6" 6y6~6"#6"$6F6[6"\'6"(6")6"*6"+6",6"-6".6"/606#!6#"6##6#$6Y6Z6#\'6#(6#)6#*6#+6#,6#-6#.6#/6$ 6$!6$"6$#6$$6W6S6$\'6$(6$)6$*6$+6$,6$-6p6P6% 6%!6%"6%#6%$6%%6%&6%\'6%(6%)6%*6%+6%,6%-6%.6%/6& 6&!6&"6&#6&$6J6=6&\'6&(6&)6&*6&+6&,6&-6&.6&/6c6w6n6q6\'$6>6@6R6\'(6\')6d6r6l6_6\'.6\'/6f6v6e6o6u6?6D6(\'6L6()6G6x6m6}6(.6(/6K6\\6M6h6)$6C6A6E6N6))6s6a6z6]6).6)/6* 6*!6*"6*#6*$6^6i6*\'6*(6*)6**6*+6*,6*-6*.6*/6+ 6+!6+"6+#6+$6Q6k6+\'6+(6+)6+*6++6+,6+-6+.6+/6, 6,!6,"6,#6,$6T6`6,\'6,(6,)6,*6,+6,,6,-6,.6,/6- 6-!6-"6-#6-$6g6j6-\'6-(6-)6-*6-+6-,6--6-.6-/6;696:6<6866656B6.(6.)6.*6.+6.,6.-6..6./6/ 6/!6/"6/#6/$6b6X6/\'6/(6/)6t616/,6/-6/.6H5  5 !5 "5 #5|5V5 &5 \'5 (5 )5 *5 +5 ,5 -5 .5 /5! 5!!5!"5!#5!$5O5U5!\'5!(5!)5!*5!+5!,5!-5!.5!/5" 5y5~5"#5"$5F5[5"\'5"(5")5"*5"+5",5"-5".5"/505#!5#"5##5#$5Y5Z5#\'5#(5#)5#*5#+5#,5#-5#.5#/5$ 5$!5$"5$#5$$5W5S5$\'5$(5$)5$*5$+5$,5$-5p5P5% 5%!5%"5%#5%$5%%5%&5%\'5%(5%)5%*5%+5%,5%-5%.5%/5& 5&!5&"5&#5&$5J5=5&\'5&(5&)5&*5&+5&,5&-5&.5&/5c5w5n5q5\'$5>5@5R5\'(5\')5d5r5l5_5\'.5\'/5f5v5e5o5u5?5D5(\'5L5()5G5x5m5}5(.5(/5K5\\5M5h5)$5C5A5E5N5))5s5a5z5]5).5)/5* 5*!5*"5*#5*$5^5i5*\'5*(5*)5**5*+5*,5*-5*.5*/5+ 5+!5+"5+#5+$5Q5k5+\'5+(5+)5+*5++5+,5+-5+.5+/5, 5,!5,"5,#5,$5T5`5,\'5,(5,)5,*5,+5,,5,-5,.5,/5- 5-!5-"5-#5-$5g5j5-\'5-(5-)5-*5-+5-,5--5-.5-/5;595:5<5856555B5.(5.)5.*5.+5.,5.-5..5./5/ 5/!5/"5/#5/$5b5X5/\'5/(5/)5t515/,5/-5/.5HB  B !B "B #B|BVB &B \'B (B )B *B +B ,B -B .B /B! B!!B!"B!#B!$BOBUB!\'B!(B!)B!*B!+B!,B!-B!.B!/B" ByB~B"#B"$BFB[B"\'B"(B")B"*B"+B",B"-B".B"/B0B#!B#"B##B#$BYBZB#\'B#(B#)B#*B#+B#,B#-B#.B#/B$ B$!B$"B$#B$$BWBSB$\'B$(B$)B$*B$+B$,B$-BpBP.> .>!.>".>#.>p>%.>&.>n!cywynyqy\'$y>y@yRy\'e!\'MU "U!"U~U#"U$yJy="UnUeU)H:H8H \'H "#"#!yUyy~Y\'.G(\\,h$(MLu-,P,E ++=#Um(M/)=1%/W$:(p9p/,P  P #P#)P%&PMPGPsP)$P,g|V ~$Hb !6|J \'V|F )W /W -?!$^UW!]%!+6!.T"O%")T"*J",V"-Q0V0>#"W#\'F#)Y#+F#--t 6$)T$G%$*C$H%%D%>C@%%dTl?l\'t H*!V()6xFKQCYCQCgAYsWa^QJ+, >"b+-?+.T,!6,*J,+^,b%-">g#t!O-$Fjg-+?-+C--V/"O/#WX>1>/-5Vj ?& G& -5 g&!" & /[!!U!#@!0&!)DyZ"*=#b&S &$]&$,5%$5&  =O=#+= )="5&!5&"$=J=%\'=%)t!"=q=))=* =+"=+/=/ic./MA\'=&rk?[l &fUuSmH*!ZA(t!S))D):&*0&ik*$=*\'Z*\'5*:&*8&+-=,#XT`,(=`X,-i- S-(@jX-)=-*`-,X-/D-/[-/`<A6`:@<`.+X/(D1%&H%cVc R "(c?c*+w /w|\'O,wSw$\'tOw,!w/B"+!n+B#"P*UqRq+-q,E#jq<q-"\'$ R#b\'$[\'$"*\'$"E$"BS"\'$(E$)/> !>&/@e@z@).@a@it!R\'$J"*/\'e!\'uBD$\'(d\')0t!(t!)t!*\'))P*!+\')ad-!dBt!,d.+r).t!-_$(_%,_+R-* _j\'6"\'/$Rt!t!.(0!(Z"o\'/o,\'oXu$L$+$?%#?%)?&+t!/?+ t" tyL \'LbG!"G#\'G\')G*\'G+.G-H*~GX(Q#x\'/m/ m/$}!"}@t"#(.,H*"P*FK&\'K-.t[\\O\\"\'\\-*\\-\'\\-.\\.-\\..\\8\\6M &M! M *M#*M$ M#,Mp)F))F!M#)M&\'M*\'MRM\'(MBM-\'M-)M- t"\'MgM;M-#hFhyM1t"(h!.MHh!-)0"hc)Y\'h*$h`h-.h/()$#!)$W)$$(CM/],t")A]A*/E##E#+E$#E$-EP)>!)>%)?\')D%t"*t"+)M\'t",))).sps-)s-,a>ana(/a+!a++z  ]c]&+t"-)9)).-!{{{{{I', c = "# /+012233.&.%44.$.!.\". .#&&'%(%'&)&.')%(&)'\"%(*//77&%) (()\")(!%$/+%''$&,%!& %$%/&#%#&\"&)!)-*%'-,&)+/%' '*(\"( -%)#*&-&+&',(,'\"(#$.'#'+)*/*($(!'!(+\"!),II $(-\"\"", d = new RegExp("[0-~]", "g"), e = function (a) {
            var b = 2 * (a.charCodeAt(0) - 48);
            return c.substring(b, b + 2)
        }; (a = b.replace(d, e)) != b; )
            b = a;
        return a.replace(new RegExp("....", "g"), function (a) {
            return String.fromCharCode(a.charCodeAt(0) - 32 << 12 | a.charCodeAt(1) - 32 << 8 | a.charCodeAt(2) - 32 << 4 | a.charCodeAt(3) - 32)
        })
    }
    (),
    Bb = function (a) {
        function b(a) {
            return a && 1 === a.nodeType ? !0 : !1
        }
        for (var c = function (a) {
            if (a && a.constructor === Array) {
                for (var d = [], e = 0; e < a.length; e++)
                    d.push(c(a[e]));
                    return d
                }
                if (a && "object" == typeof a) {
                    if (b(a))
                        return "<ELEMENT>";
                    var f = {};
                    for (var g in a)
                        f[g] = c(a[g]);
                    return f
                }
                return "function" != typeof a ? a : void 0
            }, d = [], e = 0; e < a.Ii.length; e++) {
                var f = a.Ii[e];
                d.push(c(f))
            }
        JSON.stringify(d)
    },
    Cb = function (a) {
        this.ch = a,
        this.Ai = !1,
        this.Pd = !1,
        this.binary = [],
        this.Ig = 0
    };
    Cb.prototype.Eg = function (a, b) {
        if (!this.Ai)
            if (this.Ai = !0, this.ch.swfBinary) {
                this.Ig = this.ch.swfBinary.length;
                for (var d = 0; d < this.Ig; d++)
                    this.binary[d] = 255 & this.ch.swfBinary.charCodeAt(d);
                this.Pd = !0,
                b(),
                this.onprogress = null
            } else {
                var e = new XMLHttpRequest;
                e.open("GET", a),
                e.overrideMimeType("text/plain; charset=x-user-defined"),
                e.onreadystatechange = function (a) {
                    return function () {
                        if (0 != e.status && 200 != e.status)
                            return a.ch.onerror && a.ch.onerror("xhr failed"), void c("xhr failed status=" + e.status, e);
                        if (e.readyState >= 3) {
                            for (var b = e.responseText, d = b.length, f = a.Ig; d > f; f++)
                                a.binary[f] = 255 & b.charCodeAt(f);
                            a.Ig = d,
                            a.Pd = 4 == e.readyState,
                            a.onprogress && a.onprogress(),
                            a.Pd && (a.onprogress = null)
                        }
                    }
                }
                (this),
                this.onprogress = b,
                e.send(null)
            }
    };
    var Db = function (a) {
        this.ch = a,
        this.Pd = !1,
        this.Kg = new Cb(a),
        this.oh = 0,
        this.Bf = !1,
        this.Af = {},
        this.Ii = [],
        this.loadingImageCount = 0,
        this.colorRange = a.colorLevels && a.colorLevels < 256 && 0 | Math.max(1, Math.min(256 / a.colorLevels, 256))
    };
    !function () {
        Db.pe = function (a, b, e) {
            var f = a.Ig;
            if (20 > f)
                return 0;
            var g = 0,
            h = a.binary;
            if (h[g] != "F".charCodeAt(0) || h[g + 1] != "W".charCodeAt(0) || h[g + 2] != "S".charCodeAt(0)) {
                var i = "invalid swf signature: " + String.fromCharCode.apply(null, h.slice(0, 3));
                return e && e(i),
                c(i),
                0
            }
            b.ji = "FWS",
            g += 3,
            b.jj = h[g],
            4 != b.jj && d("unsupported flash version: " + b.jj),
            g++,
            b.Me = eb(h, g),
            g += 4;
            var j = [],
            k = pb(h, g, j);
            return b.nf = j,
            g += k,
            b.mf = h[g + 1],
            g += 2,
            b.df = cb(h, g),
            g += 2,
            g > f ? 0 : g
        },
        Db.prototype.oe = function (a, b, c) {
            for (var d = this.Kg, e = d.Ig, f = d.binary, g = this.Ii; e > a; ) {
                var h = cb(f, a),
                i = 2;
                if (isNaN(h))
                    break;
                var j = h >> 6,
                k = 63 & h;
                if (63 == k && (k = eb(f, a + 2), i += 4), isNaN(k))
                    break;
                if (i + k + a > e)
                    break;
                var l = Dc[j] || Cc,
                m = new l(f, a + i, k, j, b, this, c);
                g.push(m),
                a += k + i
            }
            return a
        },
        Db.prototype.Eg = function (a, b) {
            this.onprogress = b && [b] || [],
            this.Kg.Eg(a, function (a) {
                return function () {
                    a.xh.apply(a, arguments)
                }
            }
                (this))
        },
        Db.prototype.Ic = function (a) {
            this.Pd ? a() : this.onprogress.push(a)
        },
        Db.prototype.xh = function () {
            var a = this.oh;
            if (!this.Bf) {
                var b = Db.pe(this.Kg, this.Af, this.ch.onerror);
                if (!b)
                    return;
                a += b,
                this.Bf = !0
            }
            a = this.oe(a, this.ch.delayEval, this.colorRange),
            this.Pd = this.Kg.Pd,
            this.Pd && a != this.Kg.Ig && (d("parse warning: couldn't finish to tag all binary data"), this.ch.onerror && this.ch.onerror("broken binary")),
            this.oh = a;
            for (var b = this.onprogress.length, c = 0; b > c; c++)
                this.onprogress[c]();
            this.Pd && (this.onprogress = [])
        }
    }
    ();
    var Eb = function (a, b, c, d) {};
    Eb.prototype.aj = g.Ub;
    var Fb = function (a, b, c, d, e, f) {
        wb(this, "Kd", function () {
            return fb(a, b)
        }, e)
    };
    Fb.prototype.aj = g.$b;
    var Gb = function (a, b, c, d, e, f) {
        wb(this, "name", function () {
            return ib(a, b)
        }, e)
    };
    Gb.prototype.aj = g.Vb;
    var Hb = function (a, b, d, e, f, g, h) {
        xb(this, function () {
            var e = {};
            e.wd = cb(a, b),
            e.re = cb(a, b + 2),
            e.Mg = [];
            var f = qb(a, b + 4, e.Mg),
            g = b + f + 4;
            return e.ie = null,
            d > g && (e.ie = [], rb(a, g, e.ie, h)),
            c("PlaceObjectTag is not supported"),
            e
        }, ["wd", "re", "Mg", "ie"], f)
    };
    Hb.prototype.aj = g.Xb;
    var Ib = function (a, b, c, d, e, f, g) {
        xb(this, function () {
            var c = {},
            d = a[b];
            c.Xg = 1 & d;
            var e,
            f = b + 1;
            return c.re = cb(a, f),
            f += 2,
            c.wd = null,
            2 & d && (c.wd = cb(a, f), f += 2),
            c.Mg = null,
            4 & d && (c.Mg = [], e = qb(a, f, c.Mg), f += e),
            c.ie = null,
            8 & d && (c.ie = [], e = sb(a, f, c.ie, g), f += e),
            c.Ah = null,
            16 & d && (c.Ah = cb(a, f), f += 2),
            c.name = null,
            32 & d && (c.name = ib(a, f, c.name), f += c.name.length + 1),
            c.Ed = null,
            64 & d && (c.Ed = cb(a, f)),
            c
        }, ["Xg", "re", "wd", "Mg", "ie", "Ah", "name", "Ed"], e)
    };
    Ib.prototype.aj = g.Yb;
    var Jb = function (a, b, c, d, e, f) {
        wb(this, "re", function () {
            return cb(a, b)
        }, e)
    };
    Jb.prototype.aj = g.Zb;
    var Kb = function (a, b, c, d) {};
    Kb.prototype.aj = g._b;
    var Lb = function (a, b, c) {
        for (var d = b; ; ) {
            var e = d - b,
            f = a[d];
            if (d++, !f) {
                var g = new Zb(a, d);
                g.Id = 0,
                g._g = e,
                c.push(g);
                break
            }
            var h = 0;
            if (128 > f)
                var i = Zb;
            else {
                h = cb(a, d),
                d += 2;
                var i = _b[f] || $b
            }
            var g = new i(a, d, h, f);
            d += h,
            g.Id = f,
            g._g = e,
            g.$g = d - b,
            c.push(g)
        }
        return d - b
    },
    Mb = function (a, b, c, d, e, f) {
        wb(this, "Gc", function () {
            var c = [];
            return Lb(a, b, c),
            c
        }, e)
    };
    Mb.prototype.aj = g.Tb;
    var Nb = function (a, b, c) {
        this.af = cb(a, b) + 1
    },
    Ob = function (a, b, d) {
        this.dj = ib(a, b),
        this.Ni = ib(a, b + this.dj.length + 1),
        c("ActionGetURL is not supported")
    },
    Pb = function (a, b, d) {
        this.af = cb(a, b),
        this.li = a[b + 2],
        c("ActionWaitForFrame is not supported")
    },
    Qb = function (a, b, c) {
        this.name = ib(a, b)
    },
    Rb = function (a, b, c) {
        this.ng = ib(a, b)
    },
    Sb = function (a, b, c) {
        for (var e = b, f = []; b + c > e; ) {
            var g = a[e];
            switch (e++, g) {
            case 0:
                var h = kb(a, e);
                f.push(h[0]),
                e += h[1];
                break;
            case 1:
                f.push(tb(a, e)),
                e += 4;
                break;
            case 2:
                f.push(null);
                break;
            case 3:
                f.push(void 0);
                break;
            case 4:
                f.push(a[e]),
                e++;
                break;
            case 5:
                f.push(0 != a[e]),
                e++,
                d("action push: boolean is danger. change 1/0");
                break;
            case 6:
                f.push(ub(a, e)),
                e += 8,
                d("action push: double value is not tested!");
                break;
            case 7:
                f.push(eb(a, e)),
                e += 4;
                break;
            case 8:
                f.push(a[e]),
                e++,
                d("action push: unsupported push recognized");
                break;
            case 9:
                f.push(cb(a, e)),
                e += 2,
                d("action push: unsupported push recognized")
            }
        }
        this.fj = f
    },
    Tb = function (a, b, c) {
        this.ed = db(a, b)
    },
    Ub = function (a, b, c) {
        this.ed = db(a, b)
    },
    Vb = function (a, b) {},
    Wb = function (a, b, c) {
        var d = a[b];
        this.play = 1 & d,
        this.Xh = 2 & d,
        this.Xh && (this.Wh = cb(a, b + 1))
    },
    Xb = function (a, b, d) {
        this.li = a[b],
        c("ActionWaitForFrame2 is not supported")
    },
    Yb = function (a, b, c) {
        this.Gg = nb(a, b, 0),
        this.Hg = nb(a, b, 1),
        this.$h = ob(a, b, 6, 2)
    },
    Zb = function (a, b) {},
    $b = function (a, b, c, e) {
        d("action parser: not supported action code detected [" + e + "]")
    },
    _b = {
        129: Nb,
        131: Ob,
        138: Pb,
        139: Qb,
        140: Rb,
        150: Sb,
        153: Tb,
        157: Ub,
        158: Vb,
        159: Wb,
        141: Xb,
        154: Yb
    },
    ac = function (a, b, d, e) {
        var f = b,
        g = a[f];
        f++,
        255 == g && (g = cb(a, f), f += 2);
        for (var h = 0, i = [], j = 0; g > j; j++) {
            var k = {},
            l = a[f];
            f++,
            k.aj = l,
            0 == l ? 3 == d ? (k.Kd = gb(a, f), f += 4) : (k.Kd = fb(a, f), f += 3) : 16 == l || 18 == l || 19 == l ? (k.Mg = [], k.zf = {
                    Bh: []
                }, h = qb(a, f, k.Mg), f += h, h = vb(a, f, d, k.zf), f += h, 19 == l && c("paser fillstyle: detected swf8 structure")) : 64 == l || 65 == l || 66 == l || 67 == l ? (k._c = cb(a, f), f += 2, k.Mg = [], h = qb(a, f, k.Mg), f += h) : c("parser fillstyle: unknown type:" + l),
            i.push(k)
        }
        return e.Qe = i,
        f - b
    },
    bc = function (a, b, c, d) {
        var e = b,
        f = a[e];
        e++,
        255 == f && (f = cb(a, e), e += 2);
        for (var g = [], h = 0; f > h; h++) {
            var i = {};
            i.width = cb(a, e),
            e += 2,
            3 == c ? (i.Kd = gb(a, e), e += 4) : (i.Kd = fb(a, e), e += 3),
            g.push(i)
        }
        return d.Bg = g,
        e - b
    },
    cc = function (a, b, c, d) {
        var e = b,
        f = 0;
        return f = ac(a, e, c, d),
        e += f,
        f = bc(a, e, c, d),
        e += f,
        f = dc(a, e, c, d, "hi"),
        e += f,
        e - b
    },
    dc = function (a, b, c, d, e) {
        var f,
        g = b,
        i = ob(a, g, 0, 4),
        j = ob(a, g, 4, 4);
        g++;
        var k;
        k = e ? [] : d;
        for (var l, m = 0; 0 != (l = ob(a, g, m, 6)); ) {
            var n = {};
            if (32 & l)
                if (16 & l) {
                    n.aj = h.Ab,
                    n.x = 0,
                    n.y = 0,
                    m += 2;
                    var o = ob(a, g, m, 4) + 2;
                    m += 4;
                    var p = nb(a, g, m);
                    if (m++, p)
                        n.x = lb(ob(a, g, m, o), o), m += o, n.y = lb(ob(a, g, m, o), o), m += o;
                    else {
                        var q = nb(a, g, m);
                        m++,
                        q ? (n.y = lb(ob(a, g, m, o), o), m += o) : (n.x = lb(ob(a, g, m, o), o), m += o)
                    }
                } else {
                    n.aj = h.tb,
                    m += 2;
                    var o = ob(a, g, m, 4) + 2;
                    m += 4,
                    n.he = lb(ob(a, g, m, o), o),
                    m += o,
                    n.ke = lb(ob(a, g, m, o), o),
                    m += o,
                    n.Wc = lb(ob(a, g, m, o), o),
                    m += o,
                    n.Xc = lb(ob(a, g, m, o), o),
                    m += o
                }
            else {
                n.aj = h.Bb,
                m++;
                var r = nb(a, g, m);
                m++;
                var s = nb(a, g, m);
                m++;
                var t = nb(a, g, m);
                m++;
                var u = nb(a, g, m);
                m++;
                var v = nb(a, g, m);
                if (m++, v) {
                    var w = ob(a, g, m, 5);
                    m += 5;
                    var x = ob(a, g, m, w);
                    m += w;
                    var y = ob(a, g, m, w);
                    m += w,
                    n.Ae = lb(x, w),
                    n.Be = lb(y, w)
                }
                u && (n.Oe = ob(a, g, m, i), m += i),
                t && (n.Pe = ob(a, g, m, i), m += i),
                s && (n.Ag = ob(a, g, m, j), m += j),
                r && (g += Math.ceil(m / 8), m = 0, f = ac(a, g, c, n), g += f, f = bc(a, g, c, n), g += f, i = ob(a, g, 0, 4), m += 4, j = ob(a, g, 4, 4), m += 4)
            }
            k.push(n)
        }
        return m += 6,
        e && (d[e] = k),
        g += Math.ceil(m / 8),
        g - b
    },
    ec = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c = {};
            c.dd = [];
            var d = pb(a, b + 2, c.dd);
            return cc(a, b + 2 + d, 1, c),
            c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    ec.prototype.aj = g.Nb;
    var fc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c = {};
            c.dd = [];
            var d = pb(a, b + 2, c.dd);
            return cc(a, b + 2 + d, 2, c),
            c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    fc.prototype.aj = g.Ob;
    var gc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c = {};
            c.dd = [];
            var d = pb(a, b + 2, c.dd);
            return cc(a, b + 2 + d, 3, c),
            c
        }, ["dd", "Qe", "Bg", "hi"], e)
    };
    gc.prototype.aj = g.Pb;
    var hc = function (a, b, c, d, e, f) {
        wb(this, "gg", function () {
            return a.slice(b, b + c)
        }, e),
        Ec.hg = this
    };
    hc.prototype.aj = g.Wb;
    var ic = function (a, b, c, e, f, g) {
        this.id = cb(a, b),
        wb(this, "img", function () {
            var e = a.slice(b + 2, b + c);
            return Ec.hg || d("DefineBits warning: not found JPEGTables"),
            Ec.$d(Ec.hg, e, g)
        }, !1)
    };
    ic.prototype.aj = g.Cb;
    var jc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        wb(this, "img", function () {
            var d = a.slice(b + 2, b + c);
            return Ec.Xd(d, f)
        }, !1)
    };
    jc.prototype.aj = g.Db;
    var kc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        wb(this, "img", function () {
            var d = b + 2,
            e = eb(a, d);
            d += 4;
            var g = a.slice(d, d + e);
            d += e;
            var h = a.slice(d, b + c);
            return Ec.Yd(g, h, f)
        }, !1)
    };
    kc.prototype.aj = g.Eb;
    var lc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var d = {},
            e = a[b + 2];
            d.width = cb(a, b + 3),
            d.height = cb(a, b + 5);
            var f = b + 7;
            if (3 == e) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
            case 3:
                h = 8;
                break;
            case 4:
                h = 16;
                break;
            case 5:
                h = 24
            }
            return d.img = Ec._d(a.slice(f, b + c), h, g, d.width, d.height, !1),
            d
        }, ["width", "height", "img"], e)
    };
    lc.prototype.aj = g.Fb;
    var mc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var d = {},
            e = a[b + 2];
            d.width = cb(a, b + 3),
            d.height = cb(a, b + 5);
            var f = b + 7;
            if (3 == e) {
                var g = a[f] + 1;
                f++
            }
            var h;
            switch (e) {
            case 3:
                h = 8;
                break;
            case 4:
                h = 16;
                break;
            case 5:
                h = 32
            }
            return d.img = Ec._d(a.slice(f, b + c), h, g, d.width, d.height, !0),
            d
        }, ["width", "height", "img"], e)
    };
    mc.prototype.aj = g.Gb;
    var nc = function (a, b, c) {
        var d = b,
        e = a[d];
        d++;
        for (var f = 0; e > f; f++) {
            var g = {};
            g.xi = a[d],
            d++,
            g.ui = gb(a, d),
            d += 4,
            g.Ge = a[d],
            d++,
            g.De = gb(a, d),
            d += 4,
            c.push(g)
        }
        return d - b
    },
    oc = function (a, b, d) {
        var e = b,
        f = a[e];
        e++,
        255 == f && (f = cb(a, e), e += 2);
        for (var g, h = [], i = 0; f > i; i++) {
            var j = {},
            k = a[e];
            e++,
            j.aj = k,
            0 == k ? (j.start = gb(a, e), e += 4, j.end = gb(a, e), e += 4) : 16 == k || 18 == k ? (j.start = [], j.end = [], j.zf = {
                    Bh: []
                }, g = qb(a, e, j.start), e += g, g = qb(a, e, j.end), e += g, g = nc(a, e, j.zf.Bh), e += g) : 64 == k || 65 == k || 66 == k || 67 == k ? (j._c = cb(a, e), e += 2, j.wi = [], j.Fe = [], g = qb(a, e, j.wi), e += g, g = qb(a, e, j.Fe), e += g) : c("DefineMorph parse: unknown type detected [" + k + "]"),
            h.push(j)
        }
        return d.Qe = h,
        e - b
    },
    pc = function (a, b, c) {
        var d = b,
        e = a[d];
        d++,
        255 == e && (e = cb(a, d), d += 2);
        for (var f = [], g = 0; e > g; g++) {
            var h = {};
            h.zi = cb(a, d),
            d += 2,
            h.He = cb(a, d),
            d += 2,
            h.ui = gb(a, d),
            d += 4,
            h.De = gb(a, d),
            d += 4,
            f.push(h)
        }
        return c.Bg = f,
        d - b
    },
    qc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            d = {},
            e = b + 2;
            return d.ti = [],
            c = pb(a, e, d.ti),
            e += c,
            d.Ce = [],
            c = pb(a, e, d.Ce),
            e += c,
            d._g = eb(a, e),
            e += 4,
            c = oc(a, e, d),
            e += c,
            c = pc(a, e, d),
            e += c,
            c = dc(a, e, 1, d, "vi"),
            e += c,
            c = dc(a, e, 1, d, "Ee"),
            e += c,
            d.vi.length - 1 == d.Ee.length && d.Ee[0] != h.Bb && d.Ee.unshift(d.vi[0]),
            d
        }, ["ti", "Ce", "_g", "Qe", "Bg", "vi", "Ee"], e)
    };
    qc.prototype.aj = g.Mb;
    var rc = function (a, b, c, d, e, f) {
        var g = b,
        h = a[g],
        i = 8 & h,
        j = 4 & h,
        k = 2 & h,
        l = 1 & h;
        g++,
        f.Ze = null,
        i && (f.Ze = cb(a, g), g += 2),
        f.Kd = null,
        j && (2 == c ? (f.Kd = gb(a, g), g += 4) : (f.Kd = fb(a, g), g += 3)),
        f.x = null,
        l && (f.x = db(a, g), g += 2),
        f.y = null,
        k && (f.y = db(a, g), g += 2),
        f.height = null,
        i && (f.height = cb(a, g), g += 2);
        var m = a[g];
        g++;
        for (var n = 0, o = [], p = 0; m > p; p++) {
            var q = {};
            q.Mf = ob(a, g, n, d),
            n += d,
            q.Kc = lb(ob(a, g, n, e), e),
            n += e,
            o.push(q)
        }
        return f.xf = o,
        g += Math.ceil(n / 8),
        g - b
    },
    sc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        wb(this, "hi", function () {
            var c = b + 2,
            d = cb(a, c);
            c += d,
            d /= 2;
            for (var e, f = [], g = 0; d > g; g++) {
                var h = [];
                e = dc(a, c, 1, h),
                c += e,
                f.push(h)
            }
            return f
        }, e)
    };
    sc.prototype.aj = g.Kb;
    var tc = function (a, b, c, e, f, g) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            e = {},
            f = b + 2,
            g = a[f],
            h = 128 & g,
            i = 8 & g,
            j = 4 & g;
            f++,
            f++;
            var k = a[f];
            f++,
            f += k;
            var l = cb(a, f);
            f += 2,
            f += i ? 4 * (l + 1) : 2 * (l + 1);
            for (var m = [], n = 0; l > n; n++) {
                var o = [];
                c = dc(a, f, 1, o),
                f += c,
                m.push(o)
            }
            e.gi = m;
            for (var p = [], n = 0; l > n; n++) {
                var q = a[f];
                f++;
                var r = 0;
                if (j && (r = a[f], f++), 0 == r)
                    p.push(q);
                else {
                    var s = yb([r, q]);
                    p.push(s.charCodeAt(0))
                }
            }
            if (e.Jd = p, e.Xe = null, e.Ye = null, e.$e = null, e.We = null, h) {
                e.Xe = cb(a, f),
                f += 2,
                e.Ye = cb(a, f),
                f += 2,
                e.$e = cb(a, f),
                f += 2;
                for (var t = [], n = 0; l > n; n++)
                    t.push(cb(a, f)), f += 2;
                e.We = t;
                for (var n = 0; l > n; n++) {
                    var u = [];
                    c = pb(a, f, u),
                    f += c
                }
                var v = cb(a, f);
                f += 2,
                0 != v && d("DefineFont2 parse: wrong format detected")
            }
            return e
        }, ["gi", "Jd", "Xe", "Ye", "$e", "We"], f)
    };
    tc.prototype.aj = g.Lb;
    var uc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            d = {},
            e = b + 2;
            d.dd = [],
            c = pb(a, e, d.dd),
            e += c,
            d.Mg = [],
            c = qb(a, e, d.Mg),
            e += c;
            var f = a[e];
            e++;
            var g = a[e];
            e++;
            for (var h = []; a[e]; ) {
                var i = {};
                c = rc(a, e, 1, f, g, i),
                e += c,
                h.push(i)
            }
            return d.Bh = h,
            d
        }, ["dd", "Mg", "Bh"], e)
    };
    uc.prototype.aj = g.Rb;
    var vc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            d = {},
            e = b + 2;
            d.dd = [],
            c = pb(a, e, d.dd),
            e += c,
            d.Mg = [],
            c = qb(a, e, d.Mg),
            e += c;
            var f = a[e];
            e++;
            var g = a[e];
            e++;
            for (var h = []; a[e]; ) {
                var i = {};
                c = rc(a, e, 2, f, g, i),
                e += c,
                h.push(i)
            }
            return d.Bh = h,
            d
        }, ["dd", "Mg", "Bh"], e)
    };
    vc.prototype.aj = g.Sb;
    var wc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            d = {},
            e = b + 2;
            d.dd = [],
            c = pb(a, e, d.dd),
            e += c;
            var f = a[e],
            g = 128 & f;
            d.mj = !!(64 & f),
            d.multiline = !!(32 & f);
            var h = 4 & f,
            i = 2 & f,
            j = 1 & f;
            e++,
            f = a[e];
            var k = 128 & f,
            l = 32 & f;
            if (d.ej = !!(1 & f), e++, d.Ze = null, j && (d.Ze = cb(a, e), e += 2), k) {
                var m = ib(a, e);
                e += m.length
            }
            return d.height = null,
            j && (d.height = cb(a, e), e += 2),
            d.Kd = null,
            h && (d.Kd = gb(a, e), e += 4),
            d.Ng = null,
            i && (d.Ng = cb(a, e), e += 2),
            d.align = null,
            d.wg = null,
            d.Oh = null,
            d.Lf = null,
            d.vg = null,
            l && (d.align = a[e], e++, d.wg = cb(a, e), e += 2, d.Oh = cb(a, e), e += 2, d.Lf = cb(a, e), e += 2, d.vg = cb(a, e), e += 2),
            d.gj = ib(a, e),
            e += d.gj.length + 1,
            d.Rf = g ? kb(a, e)[0] : "",
            d
        }, ["dd", "mj", "multiline", "ej", "Ze", "height", "Kd", "Ng", "align", "wg", "Oh", "Lf", "vg", "gj", "Rf"], e)
    };
    wc.prototype.aj = g.Jb;
    var xc = function (a, b, d, e) {
        var f,
        g = b,
        h = a[b],
        i = 32 & h,
        j = 16 & h;
        return e.Ci = !!(8 & h),
        e.Bi = !!(4 & h),
        e.Di = !!(2 & h),
        e.Ei = !!(1 & h),
        g++,
        e.wd = cb(a, g),
        g += 2,
        e.re = cb(a, g),
        g += 2,
        e.Mg = [],
        f = qb(a, g, e.Mg),
        g += f,
        e.Ld = null,
        2 == d && (e.Ld = [], f = rb(a, g, e.Ld), g += f, j && c("ButtonRecord parse error: hasFilterList is not supported in Flash 4"), i && c("ButtonRecord parse error: hasBlendMode is not supported in Flash 4")),
        g - b
    },
    yc = function (a, b, c) {
        var d = b;
        d += 2;
        var e = a[d];
        c.Hf = !!(128 & e),
        c.fh = !!(64 & e),
        c.gh = !!(32 & e),
        c.jh = !!(16 & e),
        c.kh = !!(8 & e),
        c.mh = !!(4 & e),
        c.lh = !!(2 & e),
        c.If = !!(1 & e),
        d++,
        e = a[d],
        c.ih = !!(1 & e),
        c.lg = ob(a, d, 0, 7),
        d++,
        c.Gc = [];
        var f = Lb(a, d, c.Gc);
        return d += f,
        d - b
    },
    zc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            for (var c, d = {}, e = b + 2, f = []; a[e]; ) {
                var g = {};
                c = xc(a, e, 1, g),
                e += c,
                f.push(g)
            }
            return d.xd = f,
            e++,
            d.Gc = [],
            Lb(a, e, d.Gc),
            d
        }, ["xd", "Gc"], e)
    };
    zc.prototype.aj = g.Hb;
    var Ac = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var c,
            d = {},
            e = b + 2;
            e++;
            var f = cb(a, e);
            e += 2;
            for (var g = []; a[e]; ) {
                var h = {};
                c = xc(a, e, 2, h),
                e += c,
                g.push(h)
            }
            d.xd = g,
            e++;
            var i = [];
            if (f) {
                var j;
                do {
                    var k = {};
                    j = cb(a, e),
                    c = yc(a, e, k),
                    e += c,
                    i.push(k)
                } while (j)
            }
            return d.Gc = i,
            d
        }, ["xd", "Gc"], e)
    };
    Ac.prototype.aj = g.Ib;
    var Bc = function (a, b, c, d, e, f) {
        this.id = cb(a, b),
        xb(this, function () {
            var d = {},
            e = b + 2;
            d.df = cb(a, e),
            e += 2;
            for (var f = []; b + c > e; ) {
                var g = cb(a, e),
                h = 2,
                i = g >> 6,
                j = 63 & g;
                63 == j && (j = eb(a, e + 2), h += 4);
                var k = Dc[i] || Cc,
                l = new k(a, e + h, j, i);
                f.push(l),
                e += j + h
            }
            return d.Ji = f,
            d
        }, ["df", "Ji"], e)
    };
    Bc.prototype.aj = g.Qb;
    var Cc = function (a, b, c, e) {
        d("parser: not supported tag detected [" + e + "]"),
        this.aj = e
    },
    Dc = {
        0: Eb,
        1: Kb,
        2: ec,
        4: Hb,
        6: ic,
        7: zc,
        8: hc,
        9: Fb,
        10: sc,
        11: uc,
        12: Mb,
        20: lc,
        21: jc,
        22: fc,
        26: Ib,
        28: Jb,
        32: gc,
        33: vc,
        34: Ac,
        35: kc,
        36: mc,
        37: wc,
        39: Bc,
        43: Gb,
        46: qc,
        48: tc
    },
    Ec = {
        hg: null,
        _d: function (a, b, c, d, e, f) {
            var g = new Zlib.Inflate(a).decompress(),
            h = document.createElement("canvas");
            h.width = d,
            h.height = e;
            var i = h.getContext("2d"),
            j = i.createImageData(d, e),
            k = j.data,
            l = 0,
            m = 0;
            if (8 == b) {
                var n = new Array(c),
                o = new Array(c),
                p = new Array(c),
                q = new Array(c);
                if (f)
                    if (this.usePremultipliedAlpha)
                        for (var r = 0; c > r; r++)
                            n[r] = g[m++], o[r] = g[m++], p[r] = g[m++], q[r] = g[m++];
                    else
                        for (var r = 0; c > r; r++) {
                            var s = g[m++],
                            t = g[m++],
                            u = g[m++],
                            v = g[m++];
                            if (255 == v || 0 == v)
                                n[r] = s, o[r] = t, p[r] = u;
                            else {
                                var w = 255 / v;
                                n[r] = ~~(s * w),
                                o[r] = ~~(t * w),
                                p[r] = ~~(u * w)
                            }
                            q[r] = v
                        }
                else
                    for (var r = 0; c > r; r++)
                        n[r] = g[m++], o[r] = g[m++], p[r] = g[m++], q[r] = 255;
                for (var x, y = 4 * Math.ceil(d / 4), z = g.slice ? g.slice(m) : g.subarray(m), A = 0; e > A; A++)
                    for (var B = 0, C = A * y; d > B; B++, C++)
                        x = 255 & z[C], k[l++] = n[x], k[l++] = o[x], k[l++] = p[x], k[l++] = q[x]
            } else if (16 == b)
                for (var D = d % 2 != 0, A = 0; e > A; A++) {
                    for (var B = 0; d > B; B++) {
                        var E = (g[m] << 8) + g[m + 1];
                        m += 2;
                        var F = (31744 & E) >>> 10,
                        G = (992 & E) >>> 5,
                        H = (31 & E) >>> 0;
                        k[l++] = (F << 3) + (F >>> 2),
                        k[l++] = (G << 3) + (G >>> 2),
                        k[l++] = (H << 3) + (H >>> 2),
                        k[l++] = 255
                    }
                    D && (m += 2)
                }
            else if (24 == b)
                for (var A = 0; e > A; A++)
                    for (var B = 0; d > B; B++)
                        m++, k[l++] = g[m++], k[l++] = g[m++], k[l++] = g[m++], k[l++] = 255;
            else if (32 == b)
                if (this.usePremultipliedAlpha)
                    for (var A = 0; e > A; A++)
                        for (var B = 0; d > B; B++) {
                            var v = g[m++];
                            k[l++] = g[m++],
                            k[l++] = g[m++],
                            k[l++] = g[m++],
                            k[l++] = v
                        }
                else
                    for (var A = 0; e > A; A++)
                        for (var B = 0; d > B; B++) {
                            var v = g[m++];
                            if (255 == v || 0 == v)
                                k[l++] = g[m++], k[l++] = g[m++], k[l++] = g[m++];
                            else
                                for (var w = 255 / v, r = 0; 3 > r; r++) {
                                    var I = ~~(g[m++] * w);
                                    k[l++] = 255 > I ? I : 255
                                }
                            k[l++] = v
                        }
            return i.putImageData(j, 0, 0),
            h
        },
        Xd: function (a, b) {
            var c = Ec.Td(a);
            return Ec.Zd(c, b)
        },
        Yd: function (a, b, c) {
            var d = Ec.Td(a),
            e = new Zlib.Inflate(b).decompress(),
            f = Ec.Uc(d),
            g = document.createElement("img"),
            h = document.createElement("canvas");
            h.width = 0,
            h.height = 0;
            var i = this.usePremultipliedAlpha;
            return g.onload = function () {
                var a = g.width,
                b = g.height;
                h.width = a,
                h.height = b;
                var d = h.getContext("2d");
                d.drawImage(g, 0, 0);
                var f,
                j = d.getImageData(0, 0, a, b),
                k = j.data,
                l = a * b;
                if (i)
                    for (var m = 0, n = 3; l > m; m++, n += 4)
                        f = k[n] = e[m], 0 == f ? k[n - 1] = k[n - 2] = k[n - 3] = 0 : 255 != f && (f < k[n - 1] && (k[n - 1] = f), f < k[n - 2] && (k[n - 2] = f), f < k[n - 3] && (k[n - 3] = f));
                else
                    for (var o, m = 0, n = 3; l > m; m++, n += 4)
                        f = k[n] = e[m], 255 != f && 0 != f && (o = 255 / f, k[n - 1] = ~~(k[n - 1] * o), k[n - 2] = ~~(k[n - 2] * o), k[n - 3] = ~~(k[n - 3] * o));
                d.putImageData(j, 0, 0),
                --c.loadingImageCount
            },
            g.src = "data:image/jpeg;base64," + f,
            ++c.loadingImageCount,
            setTimeout(function () {}, 0),
            h
        },
        $d: function (a, b, c) {
            var d;
            return null == a || a.length < 4 ? d = b : (a = a.gg, d = a.slice(0, a.length - 2).concat(b.slice(2))),
            Ec.Zd(d, c)
        },
        Zd: function (a, b) {
            var c = document.createElement("img");
            return c.onload = function () {
                --b.loadingImageCount
            },
            c.src = "data:image/jpeg;base64," + Ec.Uc(a),
            ++b.loadingImageCount,
            c
        },
        Td: function (a) {
            var b;
            if (255 == a[0] && 217 == a[1] && 255 == a[2] && 216 == a[3])
                b = a.slice(4);
            else {
                b = [];
                var d = 0;
                if (255 == a[d] && 216 == a[d + 1])
                    for (b = b.concat(a.slice(d, d + 2)), d += 2; d < a.length; )
                        if (255 == a[d]) {
                            if (217 == a[d + 1] && 255 == a[d + 2] && 216 == a[d + 3]) {
                                d += 4,
                                b = b.concat(a.slice(d));
                                break
                            }
                            if (218 == a[d + 1]) {
                                b = b.concat(a.slice(d));
                                break
                            }
                            var e = (a[d + 2] << 8) + (255 & a[d + 3]);
                            b = b.concat(a.slice(d, d + e + 2)),
                            d += e + 2
                        } else
                            c("JPEG marker invalid: i=" + d);
                else
                    c("SOI missing")
            }
            return b
        },
        Uc: function (a) {
            for (var b = [], c = 1e4, d = Math.ceil(a.length / c), e = 0; d > e; e++)
                b.push(String.fromCharCode.apply(null, a.slice(e * c, Math.min((e + 1) * c, a.length))));
            return btoa(b.join(""))
        }
    };
    Ec.__defineGetter__("usePremultipliedAlpha", function () {
        delete this.usePremultipliedAlpha;
        var a = document.createElement("canvas");
        a.width = a.height = 1;
        var b = a.getContext("2d"),
        c = b.createImageData(1, 1),
        d = c.data;
        return d[0] = d[3] = 128,
        b.putImageData(c, 0, 0),
        this.usePremultipliedAlpha = 255 == b.getImageData(0, 0, 1, 1).data[0]
    }),
    function () {
        function a(a, b, c) {
            a = a.split("."),
            c = c || g,
            !(a[0]in c) && c.execScript && c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift()); )
                a.length || void 0 === b ? c = c[d] ? c[d] : c[d] = {}
             : c[d] = b
        }
        function b(a) {
            var b,
            c,
            d,
            e,
            f,
            g,
            h,
            j,
            k,
            l = a.length,
            m = 0,
            n = Number.POSITIVE_INFINITY;
            for (j = 0; l > j; ++j)
                a[j] > m && (m = a[j]), a[j] < n && (n = a[j]);
            for (b = 1 << m, c = new(i ? Uint32Array : Array)(b), d = 1, e = 0, f = 2; m >= d; ) {
                for (j = 0; l > j; ++j)
                    if (a[j] === d) {
                        for (g = 0, h = e, k = 0; d > k; ++k)
                            g = g << 1 | 1 & h, h >>= 1;
                        for (k = g; b > k; k += f)
                            c[k] = d << 16 | j;
                        ++e
                    }
                ++d,
                e <<= 1,
                f <<= 1
            }
            return [c, m, n]
        }
        function c(a, b) {
            this.length = a,
            this.u = b
        }
        function d(a) {
            switch (!0) {
            case 3 === a:
                return [257, a - 3, 0];
            case 4 === a:
                return [258, a - 4, 0];
            case 5 === a:
                return [259, a - 5, 0];
            case 6 === a:
                return [260, a - 6, 0];
            case 7 === a:
                return [261, a - 7, 0];
            case 8 === a:
                return [262, a - 8, 0];
            case 9 === a:
                return [263, a - 9, 0];
            case 10 === a:
                return [264, a - 10, 0];
            case 12 >= a:
                return [265, a - 11, 1];
            case 14 >= a:
                return [266, a - 13, 1];
            case 16 >= a:
                return [267, a - 15, 1];
            case 18 >= a:
                return [268, a - 17, 1];
            case 22 >= a:
                return [269, a - 19, 2];
            case 26 >= a:
                return [270, a - 23, 2];
            case 30 >= a:
                return [271, a - 27, 2];
            case 34 >= a:
                return [272, a - 31, 2];
            case 42 >= a:
                return [273, a - 35, 3];
            case 50 >= a:
                return [274, a - 43, 3];
            case 58 >= a:
                return [275, a - 51, 3];
            case 66 >= a:
                return [276, a - 59, 3];
            case 82 >= a:
                return [277, a - 67, 4];
            case 98 >= a:
                return [278, a - 83, 4];
            case 114 >= a:
                return [279, a - 99, 4];
            case 130 >= a:
                return [280, a - 115, 4];
            case 162 >= a:
                return [281, a - 131, 5];
            case 194 >= a:
                return [282, a - 163, 5];
            case 226 >= a:
                return [283, a - 195, 5];
            case 257 >= a:
                return [284, a - 227, 5];
            case 258 === a:
                return [285, a - 258, 0];
            default:
                throw "invalid length: " + a
            }
        }
        function e(a, b) {
            switch (this.k = [], this.f = 32768, this.e = this.h = this.b = this.n = 0, this.input = i ? new Uint8Array(a) : a, this.p = !1, this.i = x, this.I = !1, b && (b.Mf && (this.b = b.Mf), b.L && (this.f = b.f), b.i) && (this.i = b.i), this.i) {
            case w:
                this.a = 32768,
                this.c = new(i ? Uint8Array : Array)(32768 + this.f + 258);
                break;
            case x:
                this.a = 0,
                this.c = new(i ? Uint8Array : Array)(this.f),
                this.g = this.A,
                this.q = this.v,
                this.l = this.z;
                break;
            default:
                throw Error("invalid inflate mode")
            }
        }
        function f(a, b) {
            var c,
            d,
            f;
            switch (this.input = a, this.b = 0, b && (b.Mf && (this.b = b.Mf), b.f && (c = b.f), b.o) && (this.o = b.o), d = a[this.b++], f = a[this.b++], 15 & d) {
            case aa:
                this.method = aa;
                break;
            default:
                throw Error("unsupported compression method")
            }
            if (0 !== ((d << 8) + f) % 31)
                throw Error("invalid fcheck flag:" + ((d << 8) + f) % 31);
            if (32 & f)
                throw Error("fdict flag is not supported");
            this.H = new e(a, {
                Mf: this.b,
                f: c
            })
        }
        var g = this;
        Math.floor(2147483648 * Math.random()).toString(36);
        var h,
        i = "function" == typeof Uint8Array && "function" == typeof Uint16Array && "function" == typeof Uint32Array,
        j = new(i ? Uint8Array : Array)(256);
        for (h = 0; 256 > h; ++h) {
            for (var k = j, l = h, m = h, n = m, o = 7, m = m >>> 1; m; m >>>= 1)
                n <<= 1, n |= 1 & m, --o;
            k[l] = (n << o & 255) >>> 0
        }
        var p = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
        i && new Uint32Array(p);
        var q,
        r = [];
        for (q = 0; 288 > q; q++)
            switch (!0) {
            case 143 >= q:
                r.push([q + 48, 8]);
                break;
            case 255 >= q:
                r.push([q - 144 + 400, 9]);
                break;
            case 279 >= q:
                r.push([q - 256 + 0, 7]);
                break;
            case 287 >= q:
                r.push([q - 280 + 192, 8]);
                break;
            default:
                throw "invalid literal: " + q
            }
        var s,
        t,
        u = [];
        for (s = 3; 258 >= s; s++)
            t = d(s), u[s] = t[2] << 24 | t[1] << 16 | t[0];
        var v = i ? new Uint32Array(u) : u;
        c.prototype.B = function (a) {
            switch (!0) {
            case 1 === a:
                a = [0, a - 1, 0];
                break;
            case 2 === a:
                a = [1, a - 2, 0];
                break;
            case 3 === a:
                a = [2, a - 3, 0];
                break;
            case 4 === a:
                a = [3, a - 4, 0];
                break;
            case 6 >= a:
                a = [4, a - 5, 1];
                break;
            case 8 >= a:
                a = [5, a - 7, 1];
                break;
            case 12 >= a:
                a = [6, a - 9, 2];
                break;
            case 16 >= a:
                a = [7, a - 13, 2];
                break;
            case 24 >= a:
                a = [8, a - 17, 3];
                break;
            case 32 >= a:
                a = [9, a - 25, 3];
                break;
            case 48 >= a:
                a = [10, a - 33, 4];
                break;
            case 64 >= a:
                a = [11, a - 49, 4];
                break;
            case 96 >= a:
                a = [12, a - 65, 5];
                break;
            case 128 >= a:
                a = [13, a - 97, 5];
                break;
            case 192 >= a:
                a = [14, a - 129, 6];
                break;
            case 256 >= a:
                a = [15, a - 193, 6];
                break;
            case 384 >= a:
                a = [16, a - 257, 7];
                break;
            case 512 >= a:
                a = [17, a - 385, 7];
                break;
            case 768 >= a:
                a = [18, a - 513, 8];
                break;
            case 1024 >= a:
                a = [19, a - 769, 8];
                break;
            case 1536 >= a:
                a = [20, a - 1025, 9];
                break;
            case 2048 >= a:
                a = [21, a - 1537, 9];
                break;
            case 3072 >= a:
                a = [22, a - 2049, 10];
                break;
            case 4096 >= a:
                a = [23, a - 3073, 10];
                break;
            case 6144 >= a:
                a = [24, a - 4097, 11];
                break;
            case 8192 >= a:
                a = [25, a - 6145, 11];
                break;
            case 12288 >= a:
                a = [26, a - 8193, 12];
                break;
            case 16384 >= a:
                a = [27, a - 12289, 12];
                break;
            case 24576 >= a:
                a = [28, a - 16385, 13];
                break;
            case 32768 >= a:
                a = [29, a - 24577, 13];
                break;
            default:
                throw "invalid distance"
            }
            return a
        },
        c.prototype.M = function () {
            var a,
            b = this.u,
            c = [],
            d = 0;
            return a = v[this.length],
            c[d++] = 65535 & a,
            c[d++] = a >> 16 & 255,
            c[d++] = a >> 24,
            a = this.B(b),
            c[d++] = a[0],
            c[d++] = a[1],
            c[d++] = a[2],
            c
        };
        var w = 0,
        x = 1,
        y = {
            K: w,
            J: x
        };
        e.prototype.m = function () {
            for (; !this.p; )
                this.C();
            return this.q()
        };
        var z,
        A,
        B = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        C = i ? new Uint16Array(B) : B,
        D = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        E = i ? new Uint16Array(D) : D,
        F = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        G = i ? new Uint8Array(F) : F,
        H = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        I = i ? new Uint16Array(H) : H,
        J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        K = i ? new Uint8Array(J) : J,
        L = new(i ? Uint8Array : Array)(288);
        for (z = 0, A = L.length; A > z; ++z)
            L[z] = 143 >= z ? 8 : 255 >= z ? 9 : 279 >= z ? 7 : 8;
        var M,
        N,
        O = b(L),
        P = new(i ? Uint8Array : Array)(30);
        for (M = 0, N = P.length; N > M; ++M)
            P[M] = 5;
        var Q = b(P);
        e.prototype.C = function () {
            var a = this.d(3);
            switch (1 & a && (this.p = !0), a >>>= 1) {
            case 0:
                this.G();
                break;
            case 1:
                this.F();
                break;
            case 2:
                this.D();
                break;
            default:
                throw Error("unknown BTYPE: " + a)
            }
        },
        e.prototype.d = function (a) {
            for (var b, c = this.h, d = this.e, e = this.input, f = this.b; a > d; ) {
                if (b = e[f++], void 0 === b)
                    throw Error("input buffer is broken");
                c |= b << d,
                d += 8
            }
            return b = c & (1 << a) - 1,
            this.h = c >>> a,
            this.e = d - a,
            this.b = f,
            b
        },
        e.prototype.j = function (a) {
            for (var b, c = this.h, d = this.e, e = this.input, f = this.b, g = a[0], a = a[1]; a > d; ) {
                if (b = e[f++], void 0 === b)
                    throw Error("input buffer is broken");
                c |= b << d,
                d += 8
            }
            return e = g[c & (1 << a) - 1],
            g = e >>> 16,
            this.h = c >> g,
            this.e = d - g,
            this.b = f,
            65535 & e
        },
        e.prototype.G = function () {
            var a,
            b,
            c,
            d = this.input,
            e = this.b,
            f = this.c,
            g = this.a,
            h = f.length;
            if (this.e = this.h = 0, a = d[e++], void 0 === a)
                throw Error("invalid uncompressed block header: LEN (first byte)");
            if (b = a, a = d[e++], void 0 === a)
                throw Error("invalid uncompressed block header: LEN (second byte)");
            if (b |= a << 8, a = d[e++], void 0 === a)
                throw Error("invalid uncompressed block header: NLEN (first byte)");
            if (c = a, a = d[e++], void 0 === a)
                throw Error("invalid uncompressed block header: NLEN (second byte)");
            if (b === ~(c | a << 8))
                throw Error("invalid uncompressed block header: length verify");
            if (e + b > d.length)
                throw Error("input buffer is broken");
            switch (this.i) {
            case w:
                for (; g + b >= f.length; ) {
                    if (a = h - g, b -= a, i)
                        f.set(d.subarray(e, e + a), g), g += a, e += a;
                    else
                        for (; a--; )
                            f[g++] = d[e++];
                    this.a = g,
                    f = this.g(),
                    g = this.a
                }
                break;
            case x:
                for (; g + b > f.length; )
                    f = this.g({
                        s: 2
                    });
                break;
            default:
                throw Error("invalid inflate mode")
            }
            if (i)
                f.set(d.subarray(e, e + b), g), g += b, e += b;
            else
                for (; b--; )
                    f[g++] = d[e++];
            this.b = e,
            this.a = g,
            this.c = f
        },
        e.prototype.F = function () {
            this.l(O, Q)
        },
        e.prototype.D = function () {
            function a(a, b, c) {
                for (var d, e, f = 0, f = 0; a > f; )
                    switch (d = this.j(b)) {
                    case 16:
                        for (d = 3 + this.d(2); d--; )
                            c[f++] = e;
                        break;
                    case 17:
                        for (d = 3 + this.d(3); d--; )
                            c[f++] = 0;
                        e = 0;
                        break;
                    case 18:
                        for (d = 11 + this.d(7); d--; )
                            c[f++] = 0;
                        e = 0;
                        break;
                    default:
                        e = c[f++] = d
                    }
                return c
            }
            var c,
            d = this.d(5) + 257,
            e = this.d(5) + 1,
            f = this.d(4) + 4,
            g = new(i ? Uint8Array : Array)(C.length);
            for (c = c = 0; f > c; ++c)
                g[C[c]] = this.d(3);
            f = b(g),
            g = new(i ? Uint8Array : Array)(d),
            c = new(i ? Uint8Array : Array)(e),
            this.l(b(a.call(this, d, f, g)), b(a.call(this, e, f, c)))
        },
        e.prototype.l = function (a, b) {
            var c = this.c,
            d = this.a;
            this.r = a,
            this.w = b;
            for (var e, f, g, h = c.length - 258; 256 !== (e = this.j(a)); )
                if (256 > e)
                    d >= h && (this.a = d, c = this.g(), d = this.a), c[d++] = e;
                else
                    for (e -= 257, g = E[e], 0 < G[e] && (g += this.d(G[e])), e = this.j(b), f = I[e], 0 < K[e] && (f += this.d(K[e])), d >= h && (this.a = d, c = this.g(), d = this.a); g--; )
                        c[d] = c[d++ - f];
            for (; 8 <= this.e; )
                this.e -= 8, this.b--;
            this.a = d
        },
        e.prototype.z = function (a, b) {
            var c = this.c,
            d = this.a;
            this.r = a,
            this.w = b;
            for (var e, f, g, h = c.length; 256 !== (e = this.j(a)); )
                if (256 > e)
                    d === h && (c = this.g(), h = c.length), c[d++] = e;
                else
                    for (e -= 257, g = E[e], 0 < G[e] && (g += this.d(G[e])), e = this.j(b), f = I[e], 0 < K[e] && (f += this.d(K[e])), d + g >= h && (c = this.g(), h = c.length); g--; )
                        c[d] = c[d++ - f];
            for (; 8 <= this.e; )
                this.e -= 8, this.b--;
            this.a = d
        },
        e.prototype.g = function () {
            var a,
            b,
            c = new(i ? Uint8Array : Array)(this.a - 32768),
            d = this.a - 32768,
            e = this.c;
            if (i)
                c.set(e.subarray(32768, c.length));
            else
                for (a = 0, b = c.length; b > a; ++a)
                    c[a] = e[a + 32768];
            if (this.k.push(c), this.n += c.length, i)
                e.set(e.subarray(d, d + 32768));
            else
                for (a = 0; 32768 > a; ++a)
                    e[a] = e[d + a];
            return this.a = 32768,
            e
        },
        e.prototype.A = function (a) {
            var b = this.input.length / this.b + 1 | 0,
            c = this.input,
            d = this.c;
            return a && ("number" == typeof a.s && (b = a.s), "number" == typeof a.t && (b += a.t)),
            2 > b ? (a = (c.length - this.b) / this.r[2], a = 258 * (a / 2) | 0, a = a < d.length ? d.length + a : d.length << 1) : a = d.length * b,
            i ? (a = new Uint8Array(a), a.set(d)) : a = d,
            this.c = a
        },
        e.prototype.q = function () {
            var a,
            b,
            c,
            d,
            e,
            f = 0,
            g = this.c,
            h = this.k,
            j = new(i ? Uint8Array : Array)(this.n + (this.a - 32768));
            if (0 === h.length)
                return i ? this.c.subarray(32768, this.a) : this.c.slice(32768, this.a);
            for (b = 0, c = h.length; c > b; ++b)
                for (a = h[b], d = 0, e = a.length; e > d; ++d)
                    j[f++] = a[d];
            for (b = 32768, c = this.a; c > b; ++b)
                j[f++] = g[b];
            return this.k = [],
            this.buffer = j
        },
        e.prototype.v = function () {
            var a,
            b = this.a;
            return this.I ? i ? (a = new Uint8Array(b), a.set(this.c.subarray(0, b))) : a = this.c.slice(0, b) : a = i ? this.c.subarray(0, b) : this.c.slice(0, b),
            this.buffer = a
        },
        f.prototype.m = function () {
            var a,
            b = this.input;
            if (a = this.H.m(), this.o) {
                var b = b[this.b++] << 24 | b[this.b++] << 16 | b[this.b++] << 8 | b[this.b++],
                c = a;
                if ("string" == typeof c) {
                    var d,
                    e,
                    c = c.split("");
                    for (d = 0, e = c.length; e > d; d++)
                        c[d] = (255 & c[d].charCodeAt(0)) >>> 0
                }
                d = 1,
                e = 0;
                for (var f, g = c.length, h = 0; g > 0; ) {
                    f = g > 1024 ? 1024 : g,
                    g -= f;
                    do
                        d += c[h++], e += d;
                    while (--f);
                    d %= 65521,
                    e %= 65521
                }
                if (b !== (e << 16 | d) >>> 0)
                    throw Error("invalid adler-32 checksum")
            }
            return a
        },
        a("Zlib.Inflate", f, void 0),
        a("Zlib.Inflate.BufferType", y, void 0),
        a("Zlib.Inflate.prototype.decompress", f.prototype.m, void 0);
        var R = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        i && new Uint16Array(R);
        var S = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
        i && new Uint16Array(S);
        var T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
        i && new Uint8Array(T);
        var U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
        i && new Uint16Array(U);
        var V = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
        i && new Uint8Array(V);
        var W,
        X,
        Y = new(i ? Uint8Array : Array)(288);
        for (W = 0, X = Y.length; X > W; ++W)
            Y[W] = 143 >= W ? 8 : 255 >= W ? 9 : 279 >= W ? 7 : 8;
        b(Y);
        var Z,
        $,
        _ = new(i ? Uint8Array : Array)(30);
        for (Z = 0, $ = _.length; $ > Z; ++Z)
            _[Z] = 5;
        b(_);
        var aa = 8
    }
    .call(new Function("return this")())
}
();
define("pex", (function (global) {
        return function () {
            var ret,
            fn;
            return ret || global.Pex;
        };
    }
        (this)));

!function (a) {
    a("head").append("		<style>		.typist-container {			overflow: hidden;		}		.typist-container p {			margin: 0 0 3px;		}		.typist-container p.prompt {			margin: 5px 0;		}		</style>");
    var b,
    c = {
        backgroundColor: "#333",
        textColor: "#DDD",
        fontFamily: "monospace",
        height: 300
    },
    d = 80,
    e = function (a) {},
    f = function (a) {
        a && a()
    },
    g = function () {
        a(".cursor").remove();
        var c = a("<div></div>");
        b.append(c);
        var d = 0;
        return b.children().each(function () {
            d += a(this).height()
        }),
        b.scrollTop(d),
        c
    },
    h = {
        init: function (d) {
            d = a.extend(c, d),
            b = this;
            var f = b.attr("style") + ";" || "",
            g = "";
            return g += "; color: " + d.textColor,
            g += "; font-family: " + d.fontFamily,
            b.addClass("typist-container").attr("style", f + g).height(d.height),
            e(),
            b
        },
        prompt: function () {
            return b.queue(function (b) {
                a(".cursor").remove(),
                g().addClass("prompt").html('$ <span class="cursor">|</span>'),
                b()
            })
        },
        type: function (c) {
            b.queue(f);
            for (var g = function (e) {
                b.queue(function (b) {
                    a(".cursor").before(c[e]),
                    b()
                }).delay(d)
            }, h = 0; h < c.length; h++)
                g(h);
            return b.queue(e)
        },
        echo: function (a) {
            for (var c, e = "", f = "", h = !0, i = !1, j = {
                    "&amp;": "&",
                    "&quot;": '"',
                    "&#039;": "'",
                    "&apos;": "'",
                    "&lt;": "<",
                    "&gt;": ">"
                }, k = function (j, k) {
                var l = a.substr(j, k);
                b.queue(function (a) {
                    0 === j && (c = g()),
                    i && "<" === l ? h = !1 : i && ">" === l ? (h = !0, i = !1, e = "", f = "") : ("<" !== l || i) && (i || h || "<" === l || ">" === l) ? h ? c.append(e + l + f) : ">" !== l || i || (e += l, f = "</" + e.substring(1, e.length), h = !0, i = !0) : (e += l, h = !1),
                    a()
                }),
                b.delay(d)
            }, l = 0; l < a.length; ) {
                var m = 1;
                if ("<" === a[l] && (d = 0), ">" === a[l] && (d = 80), "&" === a[l]) {
                    var n = a.slice(l, a.indexOf(";", l + 1)) + ";";
                    j[n] && (m = n.length)
                }
                k(l, m),
                l += m
            }
            return b
        },
        wait: function (a) {
            return b.delay(a)
        },
        call: function (a) {
            return b.queue(function (c) {
                a(b),
                c()
            }),
            b
        },
        speed: function (a) {
            return "fast" === a ? d = 20 : "slow" === a && (d = 120),
            b
        }
    };
    a.fn.typist = function (b) {
        return h[b] ? h[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.tooltip") : h.init.apply(this, arguments)
    }
}
(jQuery);
define("typist", ["jquery"], function () {});

/*
 * jQuery FlexSlider v2.6.4
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function (a) {
    var b = !0;
    a.flexslider = function (c, d) {
        var e = a(c);
        e.vars = a.extend({}, a.flexslider.defaults, d);
        var f,
        g = e.vars.namespace,
        h = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        i = ("ontouchstart" in window || h || window.DocumentTouch && document instanceof DocumentTouch) && e.vars.touch,
        j = "click touchend MSPointerUp keyup",
        k = "",
        l = "vertical" === e.vars.direction,
        m = e.vars.reverse,
        n = e.vars.itemWidth > 0,
        o = "fade" === e.vars.animation,
        p = "" !== e.vars.asNavFor,
        q = {};
        a.data(c, "flexslider", e),
        q = {
            init: function () {
                e.animating = !1,
                e.currentSlide = parseInt(e.vars.startAt ? e.vars.startAt : 0, 10),
                isNaN(e.currentSlide) && (e.currentSlide = 0),
                e.animatingTo = e.currentSlide,
                e.atEnd = 0 === e.currentSlide || e.currentSlide === e.last,
                e.containerSelector = e.vars.selector.substr(0, e.vars.selector.search(" ")),
                e.slides = a(e.vars.selector, e),
                e.container = a(e.containerSelector, e),
                e.count = e.slides.length,
                e.syncExists = a(e.vars.sync).length > 0,
                "slide" === e.vars.animation && (e.vars.animation = "swing"),
                e.prop = l ? "top" : "marginLeft",
                e.args = {},
                e.manualPause = !1,
                e.stopped = !1,
                e.started = !1,
                e.startTimeout = null,
                e.transitions = !e.vars.video && !o && e.vars.useCSS && function () {
                    var a = document.createElement("div"),
                    b = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var c in b)
                        if (void 0 !== a.style[b[c]])
                            return e.pfx = b[c].replace("Perspective", "").toLowerCase(), e.prop = "-" + e.pfx + "-transform", !0;
                    return !1
                }
                (),
                e.ensureAnimationEnd = "",
                "" !== e.vars.controlsContainer && (e.controlsContainer = a(e.vars.controlsContainer).length > 0 && a(e.vars.controlsContainer)),
                "" !== e.vars.manualControls && (e.manualControls = a(e.vars.manualControls).length > 0 && a(e.vars.manualControls)),
                "" !== e.vars.customDirectionNav && (e.customDirectionNav = 2 === a(e.vars.customDirectionNav).length && a(e.vars.customDirectionNav)),
                e.vars.randomize && (e.slides.sort(function () {
                        return Math.round(Math.random()) - .5
                    }), e.container.empty().append(e.slides)),
                e.doMath(),
                e.setup("init"),
                e.vars.controlNav && q.controlNav.setup(),
                e.vars.directionNav && q.directionNav.setup(),
                e.vars.keyboard && (1 === a(e.containerSelector).length || e.vars.multipleKeyboard) && a(document).bind("keyup", function (a) {
                    var b = a.keyCode;
                    if (!e.animating && (39 === b || 37 === b)) {
                        var c = 39 === b ? e.getTarget("next") : 37 === b && e.getTarget("prev");
                        e.flexAnimate(c, e.vars.pauseOnAction)
                    }
                }),
                e.vars.mousewheel && e.bind("mousewheel", function (a, b, c, d) {
                    a.preventDefault();
                    var f = 0 > b ? e.getTarget("next") : e.getTarget("prev");
                    e.flexAnimate(f, e.vars.pauseOnAction)
                }),
                e.vars.pausePlay && q.pausePlay.setup(),
                e.vars.slideshow && e.vars.pauseInvisible && q.pauseInvisible.init(),
                e.vars.slideshow && (e.vars.pauseOnHover && e.hover(function () {
                        e.manualPlay || e.manualPause || e.pause()
                    }, function () {
                        e.manualPause || e.manualPlay || e.stopped || e.play()
                    }), e.vars.pauseInvisible && q.pauseInvisible.isHidden() || (e.vars.initDelay > 0 ? e.startTimeout = setTimeout(e.play, e.vars.initDelay) : e.play())),
                p && q.asNav.setup(),
                i && e.vars.touch && q.touch(),
                (!o || o && e.vars.smoothHeight) && a(window).bind("resize orientationchange focus", q.resize()),
                e.find("img").attr("draggable", "false"),
                setTimeout(function () {
                    e.vars.start(e)
                }, 200)
            },
            asNav: {
                setup: function () {
                    e.asNav = !0,
                    e.animatingTo = Math.floor(e.currentSlide / e.move),
                    e.currentItem = e.currentSlide,
                    e.slides.removeClass(g + "active-slide").eq(e.currentItem).addClass(g + "active-slide"),
                    h ? (c._slider = e, e.slides.each(function () {
                            var b = this;
                            b._gesture = new MSGesture,
                            b._gesture.target = b,
                            b.addEventListener("MSPointerDown", function (a) {
                                a.preventDefault(),
                                a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
                            }, !1),
                            b.addEventListener("MSGestureTap", function (b) {
                                b.preventDefault();
                                var c = a(this),
                                d = c.index();
                                a(e.vars.asNavFor).data("flexslider").animating || c.hasClass("active") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : e.slides.on(j, function (b) {
                        b.preventDefault();
                        var c = a(this),
                        d = c.index();
                        c.offset().left - a(e).scrollLeft() <= 0 && c.hasClass(g + "active-slide") ? e.flexAnimate(e.getTarget("prev"), !0) : a(e.vars.asNavFor).data("flexslider").animating || c.hasClass(g + "active-slide") || (e.direction = e.currentItem < d ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function () {
                    e.manualControls ? q.controlNav.setupManual() : q.controlNav.setupPaging()
                },
                setupPaging: function () {
                    var b,
                    c,
                    d = "thumbnails" === e.vars.controlNav ? "control-thumbs" : "control-paging",
                    f = 1;
                    if (e.controlNavScaffold = a('<ol class="' + g + "control-nav " + g + d + '"></ol>'), e.pagingCount > 1)
                        for (var h = 0; h < e.pagingCount; h++) {
                            c = e.slides.eq(h),
                            void 0 === c.attr("data-thumb-alt") && c.attr("data-thumb-alt", "");
                            var i = "" !== c.attr("data-thumb-alt") ? i = ' alt="' + c.attr("data-thumb-alt") + '"' : "";
                            if (b = "thumbnails" === e.vars.controlNav ? '<img src="' + c.attr("data-thumb") + '"' + i + "/>" : '<a href="#">' + f + "</a>", "thumbnails" === e.vars.controlNav && !0 === e.vars.thumbCaptions) {
                                var l = c.attr("data-thumbcaption");
                                "" !== l && void 0 !== l && (b += '<span class="' + g + 'caption">' + l + "</span>")
                            }
                            e.controlNavScaffold.append("<li>" + b + "</li>"),
                            f++
                        }
                    e.controlsContainer ? a(e.controlsContainer).append(e.controlNavScaffold) : e.append(e.controlNavScaffold),
                    q.controlNav.set(),
                    q.controlNav.active(),
                    e.controlNavScaffold.delegate("a, img", j, function (b) {
                        if (b.preventDefault(), "" === k || k === b.type) {
                            var c = a(this),
                            d = e.controlNav.index(c);
                            c.hasClass(g + "active") || (e.direction = d > e.currentSlide ? "next" : "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === k && (k = b.type),
                        q.setToClearWatchedEvent()
                    })
                },
                setupManual: function () {
                    e.controlNav = e.manualControls,
                    q.controlNav.active(),
                    e.controlNav.bind(j, function (b) {
                        if (b.preventDefault(), "" === k || k === b.type) {
                            var c = a(this),
                            d = e.controlNav.index(c);
                            c.hasClass(g + "active") || (d > e.currentSlide ? e.direction = "next" : e.direction = "prev", e.flexAnimate(d, e.vars.pauseOnAction))
                        }
                        "" === k && (k = b.type),
                        q.setToClearWatchedEvent()
                    })
                },
                set: function () {
                    var b = "thumbnails" === e.vars.controlNav ? "img" : "a";
                    e.controlNav = a("." + g + "control-nav li " + b, e.controlsContainer ? e.controlsContainer : e)
                },
                active: function () {
                    e.controlNav.removeClass(g + "active").eq(e.animatingTo).addClass(g + "active")
                },
                update: function (b, c) {
                    e.pagingCount > 1 && "add" === b ? e.controlNavScaffold.append(a('<li><a href="#">' + e.count + "</a></li>")) : 1 === e.pagingCount ? e.controlNavScaffold.find("li").remove() : e.controlNav.eq(c).closest("li").remove(),
                    q.controlNav.set(),
                    e.pagingCount > 1 && e.pagingCount !== e.controlNav.length ? e.update(c, b) : q.controlNav.active()
                }
            },
            directionNav: {
                setup: function () {
                    var b = a('<ul class="' + g + 'direction-nav"><li class="' + g + 'nav-prev"><a class="' + g + 'prev" href="#">' + e.vars.prevText + '</a></li><li class="' + g + 'nav-next"><a class="' + g + 'next" href="#">' + e.vars.nextText + "</a></li></ul>");
                    e.customDirectionNav ? e.directionNav = e.customDirectionNav : e.controlsContainer ? (a(e.controlsContainer).append(b), e.directionNav = a("." + g + "direction-nav li a", e.controlsContainer)) : (e.append(b), e.directionNav = a("." + g + "direction-nav li a", e)),
                    q.directionNav.update(),
                    e.directionNav.bind(j, function (b) {
                        b.preventDefault();
                        var c;
                        "" !== k && k !== b.type || (c = a(this).hasClass(g + "next") ? e.getTarget("next") : e.getTarget("prev"), e.flexAnimate(c, e.vars.pauseOnAction)),
                        "" === k && (k = b.type),
                        q.setToClearWatchedEvent()
                    })
                },
                update: function () {
                    var a = g + "disabled";
                    1 === e.pagingCount ? e.directionNav.addClass(a).attr("tabindex", "-1") : e.vars.animationLoop ? e.directionNav.removeClass(a).removeAttr("tabindex") : 0 === e.animatingTo ? e.directionNav.removeClass(a).filter("." + g + "prev").addClass(a).attr("tabindex", "-1") : e.animatingTo === e.last ? e.directionNav.removeClass(a).filter("." + g + "next").addClass(a).attr("tabindex", "-1") : e.directionNav.removeClass(a).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function () {
                    var b = a('<div class="' + g + 'pauseplay"><a href="#"></a></div>');
                    e.controlsContainer ? (e.controlsContainer.append(b), e.pausePlay = a("." + g + "pauseplay a", e.controlsContainer)) : (e.append(b), e.pausePlay = a("." + g + "pauseplay a", e)),
                    q.pausePlay.update(e.vars.slideshow ? g + "pause" : g + "play"),
                    e.pausePlay.bind(j, function (b) {
                        b.preventDefault(),
                        "" !== k && k !== b.type || (a(this).hasClass(g + "pause") ? (e.manualPause = !0, e.manualPlay = !1, e.pause()) : (e.manualPause = !1, e.manualPlay = !0, e.play())),
                        "" === k && (k = b.type),
                        q.setToClearWatchedEvent()
                    })
                },
                update: function (a) {
                    "play" === a ? e.pausePlay.removeClass(g + "pause").addClass(g + "play").html(e.vars.playText) : e.pausePlay.removeClass(g + "play").addClass(g + "pause").html(e.vars.pauseText)
                }
            },
            touch: function () {
                function a(a) {
                    a.stopPropagation(),
                    e.animating ? a.preventDefault() : (e.pause(), c._gesture.addPointer(a.pointerId), w = 0, j = l ? e.h : e.w, p = Number(new Date), i = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * j : (e.currentSlide + e.cloneOffset) * j)
                }
                function b(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        var d = -a.translationX,
                        e = -a.translationY;
                        if (w += l ? e : d, k = w, t = l ? Math.abs(w) < Math.abs(-d) : Math.abs(w) < Math.abs(-e), a.detail === a.MSGESTURE_FLAG_INERTIA)
                            return void setImmediate(function () {
                                c._gesture.stop()
                            });
                        (!t || Number(new Date) - p > 500) && (a.preventDefault(), !o && b.transitions && (b.vars.animationLoop || (k = w / (0 === b.currentSlide && 0 > w || b.currentSlide === b.last && w > 0 ? Math.abs(w) / j + 2 : 1)), b.setProps(i + k, "setTouch")))
                    }
                }
                function d(a) {
                    a.stopPropagation();
                    var b = a.target._slider;
                    if (b) {
                        if (b.animatingTo === b.currentSlide && !t && null !== k) {
                            var c = m ? -k : k,
                            d = c > 0 ? b.getTarget("next") : b.getTarget("prev");
                            b.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(c) > 50 || Math.abs(c) > j / 2) ? b.flexAnimate(d, b.vars.pauseOnAction) : o || b.flexAnimate(b.currentSlide, b.vars.pauseOnAction, !0)
                        }
                        f = null,
                        g = null,
                        k = null,
                        i = null,
                        w = 0
                    }
                }
                var f,
                g,
                i,
                j,
                k,
                p,
                q,
                r,
                s,
                t = !1,
                u = 0,
                v = 0,
                w = 0;
                h ? (c.style.msTouchAction = "none", c._gesture = new MSGesture, c._gesture.target = c, c.addEventListener("MSPointerDown", a, !1), c._slider = e, c.addEventListener("MSGestureChange", b, !1), c.addEventListener("MSGestureEnd", d, !1)) : (q = function (a) {
                    e.animating ? a.preventDefault() : (window.navigator.msPointerEnabled || 1 === a.touches.length) && (e.pause(), j = l ? e.h : e.w, p = Number(new Date), u = a.touches[0].pageX, v = a.touches[0].pageY, i = n && m && e.animatingTo === e.last ? 0 : n && m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : n && e.currentSlide === e.last ? e.limit : n ? (e.itemW + e.vars.itemMargin) * e.move * e.currentSlide : m ? (e.last - e.currentSlide + e.cloneOffset) * j : (e.currentSlide + e.cloneOffset) * j, f = l ? v : u, g = l ? u : v, c.addEventListener("touchmove", r, !1), c.addEventListener("touchend", s, !1))
                }, r = function (a) {
                    u = a.touches[0].pageX,
                    v = a.touches[0].pageY,
                    k = l ? f - v : f - u,
                    t = l ? Math.abs(k) < Math.abs(u - g) : Math.abs(k) < Math.abs(v - g);
                    (!t || Number(new Date) - p > 500) && (a.preventDefault(), !o && e.transitions && (e.vars.animationLoop || (k /= 0 === e.currentSlide && 0 > k || e.currentSlide === e.last && k > 0 ? Math.abs(k) / j + 2 : 1), e.setProps(i + k, "setTouch")))
                }, s = function (a) {
                    if (c.removeEventListener("touchmove", r, !1), e.animatingTo === e.currentSlide && !t && null !== k) {
                        var b = m ? -k : k,
                        d = b > 0 ? e.getTarget("next") : e.getTarget("prev");
                        e.canAdvance(d) && (Number(new Date) - p < 550 && Math.abs(b) > 50 || Math.abs(b) > j / 2) ? e.flexAnimate(d, e.vars.pauseOnAction) : o || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                    }
                    c.removeEventListener("touchend", s, !1),
                    f = null,
                    g = null,
                    k = null,
                    i = null
                }, c.addEventListener("touchstart", q, !1))
            },
            resize: function () {
                !e.animating && e.is(":visible") && (n || e.doMath(), o ? q.smoothHeight() : n ? (e.slides.width(e.computedW), e.update(e.pagingCount), e.setProps()) : l ? (e.viewport.height(e.h), e.setProps(e.h, "setTotal")) : (e.vars.smoothHeight && q.smoothHeight(), e.newSlides.width(e.computedW), e.setProps(e.computedW, "setTotal")))
            },
            smoothHeight: function (a) {
                if (!l || o) {
                    var b = o ? e : e.viewport;
                    a ? b.animate({
                        height: e.slides.eq(e.animatingTo).innerHeight()
                    }, a) : b.innerHeight(e.slides.eq(e.animatingTo).innerHeight())
                }
            },
            sync: function (b) {
                var c = a(e.vars.sync).data("flexslider"),
                d = e.animatingTo;
                switch (b) {
                case "animate":
                    c.flexAnimate(d, e.vars.pauseOnAction, !1, !0);
                    break;
                case "play":
                    c.playing || c.asNav || c.play();
                    break;
                case "pause":
                    c.pause()
                }
            },
            uniqueID: function (b) {
                return b.filter("[id]").add(b.find("[id]")).each(function () {
                    var b = a(this);
                    b.attr("id", b.attr("id") + "_clone")
                }),
                b
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var a = q.pauseInvisible.getHiddenProp();
                    if (a) {
                        var b = a.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(b, function () {
                            q.pauseInvisible.isHidden() ? e.startTimeout ? clearTimeout(e.startTimeout) : e.pause() : e.started ? e.play() : e.vars.initDelay > 0 ? setTimeout(e.play, e.vars.initDelay) : e.play()
                        })
                    }
                },
                isHidden: function () {
                    var a = q.pauseInvisible.getHiddenProp();
                    return !!a && document[a]
                },
                getHiddenProp: function () {
                    var a = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document)
                        return "hidden";
                    for (var b = 0; b < a.length; b++)
                        if (a[b] + "Hidden" in document)
                            return a[b] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(f),
                f = setTimeout(function () {
                    k = ""
                }, 3e3)
            }
        },
        e.flexAnimate = function (b, c, d, f, h) {
            if (e.vars.animationLoop || b === e.currentSlide || (e.direction = b > e.currentSlide ? "next" : "prev"), p && 1 === e.pagingCount && (e.direction = e.currentItem < b ? "next" : "prev"), !e.animating && (e.canAdvance(b, h) || d) && e.is(":visible")) {
                if (p && f) {
                    var j = a(e.vars.asNavFor).data("flexslider");
                    if (e.atEnd = 0 === b || b === e.count - 1, j.flexAnimate(b, !0, !1, !0, h), e.direction = e.currentItem < b ? "next" : "prev", j.direction = e.direction, Math.ceil((b + 1) / e.visible) - 1 === e.currentSlide || 0 === b)
                        return e.currentItem = b, e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"), !1;
                    e.currentItem = b,
                    e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"),
                    b = Math.floor(b / e.visible)
                }
                if (e.animating = !0, e.animatingTo = b, c && e.pause(), e.vars.before(e), e.syncExists && !h && q.sync("animate"), e.vars.controlNav && q.controlNav.active(), n || e.slides.removeClass(g + "active-slide").eq(b).addClass(g + "active-slide"), e.atEnd = 0 === b || b === e.last, e.vars.directionNav && q.directionNav.update(), b === e.last && (e.vars.end(e), e.vars.animationLoop || e.pause()), o)
                    i ? (e.slides.eq(e.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        }), e.slides.eq(b).css({
                            opacity: 1,
                            zIndex: 2
                        }), e.wrapup(t)) : (e.slides.eq(e.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        }, e.vars.animationSpeed, e.vars.easing), e.slides.eq(b).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        }, e.vars.animationSpeed, e.vars.easing, e.wrapup));
                else {
                    var k,
                    r,
                    s,
                    t = l ? e.slides.filter(":first").height() : e.computedW;
                    n ? (k = e.vars.itemMargin, s = (e.itemW + k) * e.move * e.animatingTo, r = s > e.limit && 1 !== e.visible ? e.limit : s) : r = 0 === e.currentSlide && b === e.count - 1 && e.vars.animationLoop && "next" !== e.direction ? m ? (e.count + e.cloneOffset) * t : 0 : e.currentSlide === e.last && 0 === b && e.vars.animationLoop && "prev" !== e.direction ? m ? 0 : (e.count + 1) * t : m ? (e.count - 1 - b + e.cloneOffset) * t : (b + e.cloneOffset) * t,
                    e.setProps(r, "", e.vars.animationSpeed),
                    e.transitions ? (e.vars.animationLoop && e.atEnd || (e.animating = !1, e.currentSlide = e.animatingTo), e.container.unbind("webkitTransitionEnd transitionend"), e.container.bind("webkitTransitionEnd transitionend", function () {
                            clearTimeout(e.ensureAnimationEnd),
                            e.wrapup(t)
                        }), clearTimeout(e.ensureAnimationEnd), e.ensureAnimationEnd = setTimeout(function () {
                            e.wrapup(t)
                        }, e.vars.animationSpeed + 100)) : e.container.animate(e.args, e.vars.animationSpeed, e.vars.easing, function () {
                        e.wrapup(t)
                    })
                }
                e.vars.smoothHeight && q.smoothHeight(e.vars.animationSpeed)
            }
        },
        e.wrapup = function (a) {
            o || n || (0 === e.currentSlide && e.animatingTo === e.last && e.vars.animationLoop ? e.setProps(a, "jumpEnd") : e.currentSlide === e.last && 0 === e.animatingTo && e.vars.animationLoop && e.setProps(a, "jumpStart")),
            e.animating = !1,
            e.currentSlide = e.animatingTo,
            e.vars.after(e)
        },
        e.animateSlides = function () {
            !e.animating && b && e.flexAnimate(e.getTarget("next"))
        },
        e.pause = function () {
            clearInterval(e.animatedSlides),
            e.animatedSlides = null,
            e.playing = !1,
            e.vars.pausePlay && q.pausePlay.update("play"),
            e.syncExists && q.sync("pause")
        },
        e.play = function () {
            e.playing && clearInterval(e.animatedSlides),
            e.animatedSlides = e.animatedSlides || setInterval(e.animateSlides, e.vars.slideshowSpeed),
            e.started = e.playing = !0,
            e.vars.pausePlay && q.pausePlay.update("pause"),
            e.syncExists && q.sync("play")
        },
        e.stop = function () {
            e.pause(),
            e.stopped = !0
        },
        e.canAdvance = function (a, b) {
            var c = p ? e.pagingCount - 1 : e.last;
            return !(!b && (!p || e.currentItem !== e.count - 1 || 0 !== a || "prev" !== e.direction) && (p && 0 === e.currentItem && a === e.pagingCount - 1 && "next" !== e.direction || a === e.currentSlide && !p || !e.vars.animationLoop && (e.atEnd && 0 === e.currentSlide && a === c && "next" !== e.direction || e.atEnd && e.currentSlide === c && 0 === a && "next" === e.direction)))
        },
        e.getTarget = function (a) {
            return e.direction = a,
            "next" === a ? e.currentSlide === e.last ? 0 : e.currentSlide + 1 : 0 === e.currentSlide ? e.last : e.currentSlide - 1
        },
        e.setProps = function (a, b, c) {
            var d = function () {
                var c = a || (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo;
                return -1 * function () {
                    if (n)
                        return "setTouch" === b ? a : m && e.animatingTo === e.last ? 0 : m ? e.limit - (e.itemW + e.vars.itemMargin) * e.move * e.animatingTo : e.animatingTo === e.last ? e.limit : c;
                    switch (b) {
                    case "setTotal":
                        return m ? (e.count - 1 - e.currentSlide + e.cloneOffset) * a : (e.currentSlide + e.cloneOffset) * a;
                    case "setTouch":
                        return a;
                    case "jumpEnd":
                        return m ? a : e.count * a;
                    case "jumpStart":
                        return m ? e.count * a : a;
                    default:
                        return a
                    }
                }
                () + "px"
            }
            ();
            e.transitions && (d = l ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", e.container.css("-" + e.pfx + "-transition-duration", c), e.container.css("transition-duration", c)),
            e.args[e.prop] = d,
            (e.transitions || void 0 === c) && e.container.css(e.args),
            e.container.css("transform", d)
        },
        e.setup = function (b) {
            if (o)
                e.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === b && (i ? e.slides.css({
                        opacity: 0,
                        display: "block",
                        webkitTransition: "opacity " + e.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1
                    }).eq(e.currentSlide).css({
                        opacity: 1,
                        zIndex: 2
                    }) : 0 == e.vars.fadeFirstSlide ? e.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(e.currentSlide).css({
                        zIndex: 2
                    }).css({
                        opacity: 1
                    }) : e.slides.css({
                        opacity: 0,
                        display: "block",
                        zIndex: 1
                    }).eq(e.currentSlide).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, e.vars.animationSpeed, e.vars.easing)), e.vars.smoothHeight && q.smoothHeight();
            else {
                var c,
                d;
                "init" === b && (e.viewport = a('<div class="' + g + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(e).append(e.container), e.cloneCount = 0, e.cloneOffset = 0, m && (d = a.makeArray(e.slides).reverse(), e.slides = a(d), e.container.empty().append(e.slides))),
                e.vars.animationLoop && !n && (e.cloneCount = 2, e.cloneOffset = 1, "init" !== b && e.container.find(".clone").remove(), e.container.append(q.uniqueID(e.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(q.uniqueID(e.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))),
                e.newSlides = a(e.vars.selector, e),
                c = m ? e.count - 1 - e.currentSlide + e.cloneOffset : e.currentSlide + e.cloneOffset,
                l && !n ? (e.container.height(200 * (e.count + e.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                        e.newSlides.css({
                            display: "block"
                        }),
                        e.doMath(),
                        e.viewport.height(e.h),
                        e.setProps(c * e.h, "init")
                    }, "init" === b ? 100 : 0)) : (e.container.width(200 * (e.count + e.cloneCount) + "%"), e.setProps(c * e.computedW, "init"), setTimeout(function () {
                        e.doMath(),
                        e.newSlides.css({
                            width: e.computedW,
                            marginRight: e.computedM,
                            "float": "left",
                            display: "block"
                        }),
                        e.vars.smoothHeight && q.smoothHeight()
                    }, "init" === b ? 100 : 0))
            }
            n || e.slides.removeClass(g + "active-slide").eq(e.currentSlide).addClass(g + "active-slide"),
            e.vars.init(e)
        },
        e.doMath = function () {
            var a = e.slides.first(),
            b = e.vars.itemMargin,
            c = e.vars.minItems,
            d = e.vars.maxItems;
            e.w = void 0 === e.viewport ? e.width() : e.viewport.width(),
            e.h = a.height(),
            e.boxPadding = a.outerWidth() - a.width(),
            n ? (e.itemT = e.vars.itemWidth + b, e.itemM = b, e.minW = c ? c * e.itemT : e.w, e.maxW = d ? d * e.itemT - b : e.w, e.itemW = e.minW > e.w ? (e.w - b * (c - 1)) / c : e.maxW < e.w ? (e.w - b * (d - 1)) / d : e.vars.itemWidth > e.w ? e.w : e.vars.itemWidth, e.visible = Math.floor(e.w / e.itemW), e.move = e.vars.move > 0 && e.vars.move < e.visible ? e.vars.move : e.visible, e.pagingCount = Math.ceil((e.count - e.visible) / e.move + 1), e.last = e.pagingCount - 1, e.limit = 1 === e.pagingCount ? 0 : e.vars.itemWidth > e.w ? e.itemW * (e.count - 1) + b * (e.count - 1) : (e.itemW + b) * e.count - e.w - b) : (e.itemW = e.w, e.itemM = b, e.pagingCount = e.count, e.last = e.count - 1),
            e.computedW = e.itemW - e.boxPadding,
            e.computedM = e.itemM
        },
        e.update = function (a, b) {
            e.doMath(),
            n || (a < e.currentSlide ? e.currentSlide += 1 : a <= e.currentSlide && 0 !== a && (e.currentSlide -= 1), e.animatingTo = e.currentSlide),
            e.vars.controlNav && !e.manualControls && ("add" === b && !n || e.pagingCount > e.controlNav.length ? q.controlNav.update("add") : ("remove" === b && !n || e.pagingCount < e.controlNav.length) && (n && e.currentSlide > e.last && (e.currentSlide -= 1, e.animatingTo -= 1), q.controlNav.update("remove", e.last))),
            e.vars.directionNav && q.directionNav.update()
        },
        e.addSlide = function (b, c) {
            var d = a(b);
            e.count += 1,
            e.last = e.count - 1,
            l && m ? void 0 !== c ? e.slides.eq(e.count - c).after(d) : e.container.prepend(d) : void 0 !== c ? e.slides.eq(c).before(d) : e.container.append(d),
            e.update(c, "add"),
            e.slides = a(e.vars.selector + ":not(.clone)", e),
            e.setup(),
            e.vars.added(e)
        },
        e.removeSlide = function (b) {
            var c = isNaN(b) ? e.slides.index(a(b)) : b;
            e.count -= 1,
            e.last = e.count - 1,
            isNaN(b) ? a(b, e.slides).remove() : l && m ? e.slides.eq(e.last).remove() : e.slides.eq(b).remove(),
            e.doMath(),
            e.update(c, "remove"),
            e.slides = a(e.vars.selector + ":not(.clone)", e),
            e.setup(),
            e.vars.removed(e)
        },
        q.init()
    },
    a(window).blur(function (a) {
        b = !1
    }).focus(function (a) {
        b = !0
    }),
    a.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
        init: function () {}
    },
    a.fn.flexslider = function (b) {
        if (void 0 === b && (b = {}), "object" == typeof b)
            return this.each(function () {
                var c = a(this),
                d = b.selector ? b.selector : ".slides > li",
                e = c.find(d);
                1 === e.length && !1 === b.allowOneSlide || 0 === e.length ? (e.fadeIn(400), b.start && b.start(c)) : void 0 === c.data("flexslider") && new a.flexslider(this, b)
            });
        var c = a(this).data("flexslider");
        switch (b) {
        case "play":
            c.play();
            break;
        case "pause":
            c.pause();
            break;
        case "stop":
            c.stop();
            break;
        case "next":
            c.flexAnimate(c.getTarget("next"), !0);
            break;
        case "prev":
        case "previous":
            c.flexAnimate(c.getTarget("prev"), !0);
            break;
        default:
            "number" == typeof b && c.flexAnimate(b, !0)
        }
    }
}
(jQuery);
define("flexslider", ["jquery"], function () {});

/*! jquery.finger - v0.1.0-beta.2 - 2013-12-13
 * https://github.com/ngryman/jquery.finger
 * Copyright (c) 2013 Nicolas Gryman; Licensed MIT */
!function (a, b) {
    function c(a, b) {
        return (p ? b.originalEvent.touches[0] : b)["page" + a.toUpperCase()]
    }
    function d(b, c, d) {
        var e = a.Event(c, w);
        a.event.trigger(e, {
            originalEvent: b
        }, b.target),
        e.isDefaultPrevented() && b.preventDefault(),
        d && (a.event.remove(u, s + "." + t, f), a.event.remove(u, r + "." + t, g))
    }
    function e(b) {
        var e = b.timeStamp || +new Date;
        j != e && (j = e, v.x = w.x = c("x", b), v.y = w.y = c("y", b), v.time = e, v.target = b.target, w.orientation = null, w.end = !1, h = !1, i = !1, k = setTimeout(function () {
                i = !0,
                d(b, "press")
            }, a.Finger.pressDuration), a.event.add(u, s + "." + t, f), a.event.add(u, r + "." + t, g), x.preventDefault && b.preventDefault())
    }
    function f(b) {
        return w.x = c("x", b),
        w.y = c("y", b),
        w.dx = w.x - v.x,
        w.dy = w.y - v.y,
        w.adx = Math.abs(w.dx),
        w.ady = Math.abs(w.dy),
        (h = w.adx > x.motionThreshold || w.ady > x.motionThreshold) ? (clearTimeout(k), w.orientation || (w.adx > w.ady ? (w.orientation = "horizontal", w.direction = w.dx > 0 ? 1 : -1) : (w.orientation = "vertical", w.direction = w.dy > 0 ? 1 : -1)), b.target !== v.target ? (b.target = v.target, void g.call(this, a.Event(r + "." + t, b))) : void d(b, "drag")) : void 0
    }
    function g(a) {
        var b,
        c = a.timeStamp || +new Date,
        e = c - v.time;
        if (clearTimeout(k), a.target === v.target) {
            if (h || i)
                x.flickDuration > e && d(a, "flick"), w.end = !0, b = "drag";
            else {
                var f = l === a.target && x.doubleTapInterval > c - m;
                b = f ? "doubletap" : "tap",
                l = f ? null : v.target,
                m = c
            }
            d(a, b, !0)
        }
    }
    var h,
    i,
    j,
    k,
    l,
    m,
    n = /chrome/i.exec(b),
    o = /android/i.exec(b),
    p = "ontouchstart" in window && !(n && !o),
    q = p ? "touchstart" : "mousedown",
    r = p ? "touchend touchcancel" : "mouseup mouseleave",
    s = p ? "touchmove" : "mousemove",
    t = "finger",
    u = a("html")[0],
    v = {},
    w = {},
    x = a.Finger = {
        pressDuration: 300,
        doubleTapInterval: 300,
        flickDuration: 150,
        motionThreshold: 5
    };
    a.event.add(u, q + "." + t, e)
}
(jQuery, navigator.userAgent);
define("finger", ["jquery"], function () {});

!function (a) {
    "function" == typeof define && define.amd ? define('subroute', ["underscore", "backbone"], a) : a(_, Backbone)
}
(function (a, b) {
    return b.SubRoute = b.Router.extend({
        constructor: function (c, d) {
            this.routes = a.clone(this.routes),
            this.prefix = c = c || "",
            this.separator = "/" === c.slice(-1) ? "" : "/",
            this.createTrailingSlashRoutes = d && d.createTrailingSlashRoutes,
            b.Router.prototype.constructor.call(this, d);
            var e;
            e = b.history.fragment ? b.history.getFragment() : b.history.getHash(),
            a.every(this.routes, function (a, c) {
                return e.match(b.Router.prototype._routeToRegExp(c)) ? (b.history.loadUrl(e), !1) : !0
            }, this),
            this.postInitialize && this.postInitialize(d)
        },
        navigate: function (a, c) {
            "/" != a.substr(0, 1) && 0 !== a.indexOf(this.prefix.substr(0, this.prefix.length - 1)) && (a = this.prefix + (a ? this.separator : "") + a),
            b.Router.prototype.navigate.call(this, a, c)
        },
        route: function (a, c, d) {
            "/" === a.substr(0) && (a = a.substr(1, a.length));
            var e = this.prefix;
            return a && a.length > 0 && (e += this.separator + a),
            this.createTrailingSlashRoutes && (this.routes[e + "/"] = c, b.Router.prototype.route.call(this, e + "/", c, d)),
            delete this.routes[a],
            this.routes[e] = c,
            b.Router.prototype.route.call(this, e, c, d)
        }
    }),
    b.SubRoute
});
/**
 * UAParser.js v0.7.3
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2014 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
!function (a, b) {
    var c = "0.7.3",
    d = "",
    e = "?",
    f = "function",
    g = "undefined",
    h = "object",
    i = "major",
    j = "model",
    k = "name",
    l = "type",
    m = "vendor",
    n = "version",
    o = "architecture",
    p = "console",
    q = "mobile",
    r = "tablet",
    s = "smarttv",
    t = "wearable",
    u = "embedded",
    v = {
        extend: function (a, b) {
            for (var c in b)
                 - 1 !== "browser cpu device engine os".indexOf(c) && b[c].length % 2 === 0 && (a[c] = b[c].concat(a[c]));
            return a
        },
        has: function (a, b) {
            return "string" == typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : void 0
        },
        lowerize: function (a) {
            return a.toLowerCase()
        }
    },
    w = {
        rgx: function () {
            for (var a, c, d, e, i, j, k, l = 0, m = arguments; l < m.length && !j; ) {
                var n = m[l],
                o = m[l + 1];
                if (typeof a === g) {
                    a = {};
                    for (e in o)
                        i = o[e], typeof i === h ? a[i[0]] = b : a[i] = b
                }
                for (c = d = 0; c < n.length && !j; )
                    if (j = n[c++].exec(this.getUA()))
                        for (e = 0; e < o.length; e++)
                            k = j[++d], i = o[e], typeof i === h && i.length > 0 ? 2 == i.length ? typeof i[1] == f ? a[i[0]] = i[1].call(this, k) : a[i[0]] = i[1] : 3 == i.length ? typeof i[1] !== f || i[1].exec && i[1].test ? a[i[0]] = k ? k.replace(i[1], i[2]) : b : a[i[0]] = k ? i[1].call(this, k, i[2]) : b : 4 == i.length && (a[i[0]] = k ? i[3].call(this, k.replace(i[1], i[2])) : b) : a[i] = k ? k : b;
                l += 2
            }
            return a
        },
        str: function (a, c) {
            for (var d in c)
                if (typeof c[d] === h && c[d].length > 0) {
                    for (var f = 0; f < c[d].length; f++)
                        if (v.has(c[d][f], a))
                            return d === e ? b : d
                } else if (v.has(c[d], a))
                    return d === e ? b : d;
            return a
        }
    },
    x = {
        browser: {
            oldsafari: {
                major: {
                    1: ["/8", "/1", "/3"],
                    2: "/4",
                    "?": "/"
                },
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {
                model: {
                    "Fire Phone": ["SD", "KF"]
                }
            },
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: "NT 6.4",
                    RT: "ARM"
                }
            }
        }
    },
    y = {
        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [k, n, i], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[k, "Opera"], n, i], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [k, n, i], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[k, "IE"], n, i], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[k, "Yandex"], n, i], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[k, /_/g, " "], n, i], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i], [k, n, i], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[k, "Dolphin"], n, i], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[k, "Chrome"], n, i], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [n, i, [k, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [n, i, k], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [k, [i, w.str, x.browser.oldsafari.major], [n, w.str, x.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [k, n, i], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[k, "Netscape"], n, i], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [k, n, i]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[o, "amd64"]], [/(ia32(?=;))/i], [[o, v.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[o, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[o, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[o, /ower/, "", v.lowerize]], [/(sun4\w)[;\)]/i], [[o, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[o, v.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [j, m, [l, r]], [/applecoremedia\/[\w\.]+ \((ipad)/], [j, [m, "Apple"], [l, r]], [/(apple\s{0,1}tv)/i], [[j, "Apple TV"], [m, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [m, j, [l, r]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [j, [m, "Amazon"], [l, r]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[j, w.str, x.device.amazon.model], [m, "Amazon"], [l, q]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [j, m, [l, q]], [/\((ip[honed|\s\w*]+);/i], [j, [m, "Apple"], [l, q]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [m, j, [l, q]], [/\(bb10;\s(\w+)/i], [j, [m, "BlackBerry"], [l, q]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [j, [m, "Asus"], [l, r]], [/(sony)\s(tablet\s[ps])/i], [m, j, [l, r]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [m, j, [l, p]], [/android.+;\s(shield)\sbuild/i], [j, [m, "Nvidia"], [l, p]], [/(playstation\s[3portablevi]+)/i], [j, [m, "Sony"], [l, p]], [/(sprint\s(\w+))/i], [[m, w.str, x.device.sprint.vendor], [j, w.str, x.device.sprint.model], [l, q]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [m, j, [l, r]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [m, [j, /_/g, " "], [l, q]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [j, [m, "Microsoft"], [l, p]], [/(kin\.[onetw]{3})/i], [[j, /\./g, " "], [m, "Microsoft"], [l, q]], [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i], [[m, "Motorola"], j, [l, q]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [j, [m, "Motorola"], [l, r]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[m, "Samsung"], j, [l, r]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[m, "Samsung"], j, [l, q]], [/(samsung);smarttv/i], [m, j, [l, s]], [/\(dtv[\);].+(aquos)/i], [j, [m, "Sharp"], [l, s]], [/sie-(\w+)*/i], [j, [m, "Siemens"], [l, q]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[m, "Nokia"], j, [l, q]], [/android\s3\.[\s\w-;]{10}(a\d{3})/i], [j, [m, "Acer"], [l, r]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[m, "LG"], j, [l, r]], [/(lg) netcast\.tv/i], [m, j, [l, s]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [j, [m, "LG"], [l, q]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [j, [m, "Lenovo"], [l, r]], [/linux;.+((jolla));/i], [m, j, [l, q]], [/((pebble))app\/[\d\.]+\s/i], [m, j, [l, t]], [/android.+;\s(glass)\s\d/i], [j, [m, "Google"], [l, t]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[l, v.lowerize], m, j]],
        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [k, n], [/rv\:([\w\.]+).*(gecko)/i], [n, k]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [k, n], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [k, [n, w.str, x.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[k, "Windows"], [n, w.str, x.os.windows.version]], [/\((bb)(10);/i], [[k, "BlackBerry"], n], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [k, n], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[k, "Symbian"], n], [/\((series40);/i], [k], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[k, "Firefox OS"], n], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [k, n], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[k, "Chromium OS"], n], [/(sunos)\s?([\w\.]+\d)*/i], [[k, "Solaris"], n], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [k, n], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[k, "iOS"], [n, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[k, "Mac OS"], [n, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [k, n]]
    },
    z = function (b, c) {
        if (!(this instanceof z))
            return new z(b, c).getResult();
        var e = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : d),
        f = c ? v.extend(y, c) : y;
        this.getBrowser = function () {
            return w.rgx.apply(this, f.browser)
        },
        this.getCPU = function () {
            return w.rgx.apply(this, f.cpu)
        },
        this.getDevice = function () {
            return w.rgx.apply(this, f.device)
        },
        this.getEngine = function () {
            return w.rgx.apply(this, f.engine)
        },
        this.getOS = function () {
            return w.rgx.apply(this, f.os)
        },
        this.getResult = function () {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        },
        this.getUA = function () {
            return e
        },
        this.setUA = function (a) {
            return e = a,
            this
        },
        this.setUA(e)
    };
    if (z.VERSION = c, z.BROWSER = {
            NAME: k,
            MAJOR: i,
            VERSION: n
        }, z.CPU = {
            ARCHITECTURE: o
        }, z.DEVICE = {
            MODEL: j,
            VENDOR: m,
            TYPE: l,
            CONSOLE: p,
            MOBILE: q,
            SMARTTV: s,
            TABLET: r,
            WEARABLE: t,
            EMBEDDED: u
        }, z.ENGINE = {
            NAME: k,
            VERSION: n
        }, z.OS = {
            NAME: k,
            VERSION: n
        }, typeof exports !== g)
        typeof module !== g && module.exports && (exports = module.exports = z), exports.UAParser = z;
    else {
        a.UAParser = z,
        typeof define === f && define.amd && define('uaparser', [], function () {
            return z
        });
        var A = a.jQuery || a.Zepto;
        if (typeof A !== g) {
            var B = new z;
            A.ua = B.getResult(),
            A.ua.get = function () {
                return B.getUA()
            },
            A.ua.set = function (a) {
                B.setUA(a);
                var b = B.getResult();
                for (var c in b)
                    A.ua[c] = b[c]
            }
        }
    }
}
(this);
define(["jquery", "underscore", "backbone", "loadmanager", "pex", "typist", "flexslider", "finger", "subroute", "uaparser"]);
