/*!
 * Polyfill.js - v0.1.0
 *
 * Copyright (c) 2015 Philip Walton <http://philipwalton.com>
 * Released under the MIT license
 *
 * Date: 2015-06-21
 */
! function(a, b, c) {
    "use strict";

    function d(a) {
        return a.replace(/^\s+|\s+$/g, "")
    }

    function e(a, b) {
        var c, d = 0;
        if (!a || !b) return !1;
        for (; c = b[d++];)
            if (a === c) return !0;
        return !1
    }

    function f(a) {
        return j.test(a)
    }

    function g(a) {
        var b, c = 0;
        for (this._rules = []; b = a[c++];) this._rules.push(new h(b))
    }

    function h(a) {
        this._rule = a
    }

    function i(a) {
        return this instanceof i ? (this._options = a, a.keywords || (this._options = {
            keywords: a
        }), this._promise = [], this._getStylesheets(), this._downloadStylesheets(), this._parseStylesheets(), this._filterCSSByKeywords(), this._buildMediaQueryMap(), this._reportInitialMatches(), void this._addMediaListeners()) : new i(a)
    }
    var j = RegExp("^" + String({}.valueOf).replace(/[.*+?\^${}()|\[\]\\]/g, "\\$&").replace(/valueOf|for [^\]]+/g, ".+?") + "$"),
        k = function() {
            var a = b.getElementsByTagName("base")[0],
                c = /^([a-zA-Z:]*\/\/)/;
            return function(b) {
                var d = !c.test(b) && !a || b.replace(RegExp.$1, "").split("/")[0] === location.host;
                return d
            }
        }(),
        l = {
            matchMedia: a.matchMedia && a.matchMedia("only all").matches,
            nativeMatchMedia: f(a.matchMedia)
        },
        m = function() {
            function b(a) {
                for (var b, c = 0; b = a[c++];) i[b] || e(b, j) || j.push(b)
            }

            function c() {
                if (0 === m.readyState || 4 === m.readyState) {
                    var a;
                    (a = j[0]) && d(a), a || g()
                }
            }

            function d(a) {
                l++, m.open("GET", a, !0), m.onreadystatechange = function() {
                    4 != m.readyState || 200 != m.status && 304 != m.status || (i[a] = m.responseText, j.shift(), c())
                }, m.send(null)
            }

            function f(a) {
                for (var b, c = 0, d = 0; b = a[c++];) i[b] && d++;
                return d === a.length
            }

            function g() {
                for (var a; a = k.shift();) h(a.urls, a.fn)
            }

            function h(a, b) {
                for (var c, d = [], e = 0; c = a[e++];) d.push(i[c]);
                b.call(null, d)
            }
            var i = {},
                j = [],
                k = [],
                l = 0,
                m = function() {
                    var b;
                    try {
                        b = new a.XMLHttpRequest
                    } catch (c) {
                        b = new a.ActiveXObject("Microsoft.XMLHTTP")
                    }
                    return b
                }();
            return {
                request: function(a, d) {
                    k.push({
                        urls: a,
                        fn: d
                    }), f(a) ? g() : (b(a), c())
                },
                clearCache: function() {
                    i = {}
                },
                _getRequestCount: function() {
                    return l
                }
            }
        }(),
        n = {
            _cache: {},
            clearCache: function() {
                n._cache = {}
            },
            parse: function(a, b) {
                function c() {
                    return g(/^\{\s*/)
                }

                function e() {
                    return g(/^\}\s*/)
                }

                function f() {
                    var b, c = [];
                    for (h(), i(c);
                        "}" != a.charAt(0) && (b = y() || z());) c.push(b), i(c);
                    return c
                }

                function g(b) {
                    var c = b.exec(a);
                    if (c) return a = a.slice(c[0].length), c
                }

                function h() {
                    g(/^\s*/)
                }

                function i(a) {
                    a = a || [];
                    for (var b; b = j();) a.push(b);
                    return a
                }

                function j() {
                    if ("/" == a[0] && "*" == a[1]) {
                        for (var b = 2;
                            "*" != a[b] || "/" != a[b + 1];) ++b;
                        b += 2;
                        var c = a.slice(2, b - 2);
                        return a = a.slice(b), h(), {
                            comment: c
                        }
                    }
                }

                function k() {
                    var a = g(/^([^{]+)/);
                    if (a) return d(a[0]).split(/\s*,\s*/)
                }

                function l() {
                    var a = g(/^(\*?[\-\w]+)\s*/);
                    if (a && (a = a[0], g(/^:\s*/))) {
                        var b = g(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)\s*/);
                        if (b) return b = d(b[0]), g(/^[;\s]*/), {
                            property: a,
                            value: b
                        }
                    }
                }

                function m() {
                    for (var a, b = []; a = g(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/);) b.push(a[1]), g(/^,\s*/);
                    return b.length ? {
                        values: b,
                        declarations: x()
                    } : void 0
                }

                function o() {
                    var a = g(/^@([\-\w]+)?keyframes */);
                    if (a) {
                        var b = a[1],
                            a = g(/^([\-\w]+)\s*/);
                        if (a) {
                            var d = a[1];
                            if (c()) {
                                i();
                                for (var f, h = []; f = m();) h.push(f), i();
                                if (e()) {
                                    var j = {
                                        name: d,
                                        keyframes: h
                                    };
                                    return b && (j.vendor = b), j
                                }
                            }
                        }
                    }
                }

                function p() {
                    var a = g(/^@supports *([^{]+)/);
                    if (a) {
                        var b = d(a[1]);
                        if (c()) {
                            i();
                            var h = f();
                            if (e()) return {
                                supports: b,
                                rules: h
                            }
                        }
                    }
                }

                function q() {
                    var a = g(/^@media *([^{]+)/);
                    if (a) {
                        var b = d(a[1]);
                        if (c()) {
                            i();
                            var h = f();
                            if (e()) return {
                                media: b,
                                rules: h
                            }
                        }
                    }
                }

                function r() {
                    var a = g(/^@page */);
                    if (a) {
                        var b = k() || [],
                            d = [];
                        if (c()) {
                            i();
                            for (var f; f = l() || s();) d.push(f), i();
                            if (e()) return {
                                type: "page",
                                selectors: b,
                                declarations: d
                            }
                        }
                    }
                }

                function s() {
                    var a = g(/^@([a-z\-]+) */);
                    if (a) {
                        var b = a[1];
                        return {
                            type: b,
                            declarations: x()
                        }
                    }
                }

                function t() {
                    return w("import")
                }

                function u() {
                    return w("charset")
                }

                function v() {
                    return w("namespace")
                }

                function w(a) {
                    var b = g(new RegExp("^@" + a + " *([^;\\n]+);\\s*"));
                    if (b) {
                        var c = {};
                        return c[a] = d(b[1]), c
                    }
                }

                function x() {
                    var a = [];
                    if (c()) {
                        i();
                        for (var b; b = l();) a.push(b), i();
                        if (e()) return a
                    }
                }

                function y() {
                    return o() || q() || p() || t() || u() || v() || r()
                }

                function z() {
                    var a = k();
                    if (a) return i(), {
                        selectors: a,
                        declarations: x()
                    }
                }
                return b && n._cache[b] ? n._cache[b] : (a = a.replace(/\/\*[\s\S]*?\*\//g, ""), n._cache[b] = f())
            },
            filter: function(a, b) {
                function c(a, b) {
                    return a || b ? a ? a.concat(b) : [b] : void 0
                }

                function e(a) {
                    null == a.media && delete a.media, null == a.supports && delete a.supports, k.push(a)
                }

                function f(a, b) {
                    if (b)
                        for (var c = b.length; c--;)
                            if (a.indexOf(b[c]) >= 0) return !0
                }

                function g(a, b) {
                    for (var c, e, f, g, h = /\*/, i = 0; c = b[i++];)
                        if (e = c.split(":"), f = new RegExp("^" + d(e[0]).replace(h, ".*") + "$"), g = new RegExp("^" + d(e[1]).replace(h, ".*") + "$"), f.test(a.property) && g.test(a.value)) return !0
                }

                function h(a, c, d) {
                    return b.selectors && f(a.selectors.join(","), b.selectors) ? (e({
                        media: c,
                        supports: d,
                        selectors: a.selectors,
                        declarations: a.declarations
                    }), !0) : void 0
                }

                function i(a, c, d) {
                    if (b.declarations)
                        for (var f, h = 0; f = a.declarations[h++];)
                            if (g(f, b.declarations)) return e({
                                media: c,
                                supports: d,
                                selectors: a.selectors,
                                declarations: a.declarations
                            }), !0
                }

                function j(a, b, d) {
                    for (var e, f = 0; e = a[f++];) e.declarations ? h(e, b, d) || i(e, b, d) : e.rules && e.media ? j(e.rules, c(b, e.media), d) : e.rules && e.supports && j(e.rules, b, c(d, e.supports))
                }
                var k = [];
                return j(a), k
            }
        },
        o = function() {
            function c() {
                if (f) return f;
                var a = b.documentElement,
                    c = b.body,
                    d = a.style.fontSize,
                    e = c.style.fontSize,
                    g = b.createElement("div");
                return a.style.fontSize = "1em", c.style.fontSize = "1em", c.appendChild(g), g.style.width = "1em", g.style.position = "absolute", f = g.offsetWidth, c.removeChild(g), c.style.fontSize = e, a.style.fontSize = d, f
            }

            function d(b) {
                return a.matchMedia(b)
            }

            function e(a) {
                var d, e, f = !1;
                return g = b.documentElement.clientWidth, h.test(a) && (d = "em" === RegExp.$2 ? parseFloat(RegExp.$1) * c() : parseFloat(RegExp.$1)), i.test(a) && (e = "em" === RegExp.$2 ? parseFloat(RegExp.$1) * c() : parseFloat(RegExp.$1)), d && e ? f = g >= d && e >= g : (d && g >= d && (f = !0), e && e >= g && (f = !0)), {
                    matches: f,
                    media: a
                }
            }
            var f, g, h = /\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                i = /\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                j = {};
            return {
                matchMedia: function(a) {
                    return l.matchMedia ? d(a) : e(a)
                },
                clearCache: function() {
                    l.nativeMatchMedia || (g = null, j = {})
                }
            }
        }(),
        p = function() {
            function b(a, b) {
                var c;
                return function() {
                    clearTimeout(c), c = setTimeout(a, b)
                }
            }
            var c = function() {
                    var a = [];
                    return {
                        add: function(b, c, d) {
                            for (var e, f = 0; e = a[f++];)
                                if (e.polyfill == b && e.mql === c && e.fn === d) return !1;
                            c.addListener(d), a.push({
                                polyfill: b,
                                mql: c,
                                fn: d
                            })
                        },
                        remove: function(b) {
                            for (var c, d = 0; c = a[d++];) c.polyfill === b && (c.mql.removeListener(c.fn), a.splice(--d, 1))
                        }
                    }
                }(),
                d = function(b) {
                    function c() {
                        for (var a, c = 0; a = b[c++];) a.fn()
                    }
                    return {
                        add: function(d, e) {
                            b.length || (a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent("onresize", c)), b.push({
                                polyfill: d,
                                fn: e
                            })
                        },
                        remove: function(d) {
                            for (var e, f = 0; e = b[f++];) e.polyfill === d && b.splice(--f, 1);
                            b.length || (a.removeEventListener ? a.removeEventListener("resize", c, !1) : a.detachEvent && a.detachEvent("onresize", c))
                        }
                    }
                }([]);
            return {
                removeListeners: function(a) {
                    l.nativeMatchMedia ? c.remove(a) : d.remove(a)
                },
                addListeners: function(a, e) {
                    function f() {
                        if (l.nativeMatchMedia)
                            for (var f in h) h.hasOwnProperty(f) && ! function(b, d) {
                                c.add(a, b, function() {
                                    e.call(a, d, b.matches)
                                })
                            }(h[f], f);
                        else {
                            var i = b(function(a, b) {
                                return function() {
                                    g(a, b)
                                }
                            }(a, h), a._options.debounceTimeout || 100);
                            d.add(a, i)
                        }
                    }

                    function g(a, b) {
                        var c, d = {};
                        o.clearCache();
                        for (c in b) b.hasOwnProperty(c) && (d[c] = o.matchMedia(c).matches, d[c] != i[c] && e.call(a, c, o.matchMedia(c).matches));
                        i = d
                    }
                    var h = a._mediaQueryMap,
                        i = {};
                    ! function() {
                        for (var a in h) h.hasOwnProperty(a) && (i[a] = o.matchMedia(a).matches)
                    }(), f()
                }
            }
        }();
    g.prototype.each = function(a, b) {
        var c, d = 0;
        for (b || (b = this); c = this._rules[d++];) a.call(b, c)
    }, g.prototype.size = function() {
        return this._rules.length
    }, g.prototype.at = function(a) {
        return this._rules[a]
    }, h.prototype.getDeclaration = function() {
        for (var a, b = {}, c = 0, d = this._rule.declarations; a = d[c++];) b[a.property] = a.value;
        return b
    }, h.prototype.getSelectors = function() {
        return this._rule.selectors.join(", ")
    }, h.prototype.getMedia = function() {
        return this._rule.media.join(" and ")
    }, i.prototype.doMatched = function(a) {
        return this._doMatched = a, this._resolve(), this
    }, i.prototype.undoUnmatched = function(a) {
        return this._undoUnmatched = a, this._resolve(), this
    }, i.prototype.getCurrentMatches = function() {
        for (var a, b, c = 0, d = []; a = this._filteredRules[c++];) b = a.media && a.media.join(" and "), (!b || o.matchMedia(b).matches) && d.push(a);
        return new g(d)
    }, i.prototype.destroy = function() {
        this._undoUnmatched && (this._undoUnmatched(this.getCurrentMatches()), p.removeListeners(this))
    }, i.prototype._defer = function(a, b) {
        a.call(this) ? b.call(this) : this._promise.push({
            condition: a,
            callback: b
        })
    }, i.prototype._resolve = function() {
        for (var a, b = 0; a = this._promise[b];) a.condition.call(this) ? (this._promise.splice(b, 1), a.callback.call(this)) : b++
    }, i.prototype._getStylesheets = function() {
        var a, c, d, f, g, h, i, j = 0,
            l = [];
        if (this._options.include) {
            for (c = this._options.include; a = c[j++];)
                if (d = b.getElementById(a)) {
                    if ("STYLE" === d.nodeName) {
                        i = {
                            text: d.textContent
                        }, l.push(i);
                        continue
                    }
                    if (d.media && "print" == d.media) continue;
                    if (!k(d.href)) continue;
                    i = {
                        href: d.href
                    }, d.media && (i.media = d.media), l.push(i)
                }
        } else {
            for (c = this._options.exclude, f = b.getElementsByTagName("link"); d = f[j++];) d.rel && "stylesheet" == d.rel && "print" != d.media && k(d.href) && !e(d.id, c) && (i = {
                href: d.href
            }, d.media && (i.media = d.media), l.push(i));
            for (h = b.getElementsByTagName("style"), j = 0; g = h[j++];) i = {
                text: g.textContent
            }, l.push(i)
        }
        return this._stylesheets = l
    }, i.prototype._downloadStylesheets = function() {
        for (var a, b = this, c = [], d = 0; a = this._stylesheets[d++];) c.push(a.href);
        m.request(c, function(a) {
            for (var c, d = 0; c = a[d];) b._stylesheets[d++].text = c;
            b._resolve()
        })
    }, i.prototype._parseStylesheets = function() {
        this._defer(function() {
            return this._stylesheets && this._stylesheets.length && this._stylesheets[0].text
        }, function() {
            for (var a, b = 0; a = this._stylesheets[b++];) a.rules = n.parse(a.text, a.url)
        })
    }, i.prototype._filterCSSByKeywords = function() {
        this._defer(function() {
            return this._stylesheets && this._stylesheets.length && this._stylesheets[0].rules
        }, function() {
            for (var a, b, c = [], d = 0; a = this._stylesheets[d++];) b = a.media, b && "all" != b && "screen" != b ? c.push({
                rules: a.rules,
                media: a.media
            }) : c = c.concat(a.rules);
            this._filteredRules = n.filter(c, this._options.keywords)
        })
    }, i.prototype._buildMediaQueryMap = function() {
        this._defer(function() {
            return this._filteredRules
        }, function() {
            var a, b, c = 0;
            for (this._mediaQueryMap = {}; b = this._filteredRules[c++];) b.media && (a = b.media.join(" and "), this._mediaQueryMap[a] = o.matchMedia(a))
        })
    }, i.prototype._reportInitialMatches = function() {
        this._defer(function() {
            return this._filteredRules && this._doMatched
        }, function() {
            this._doMatched(this.getCurrentMatches())
        })
    }, i.prototype._addMediaListeners = function() {
        this._defer(function() {
            return this._filteredRules && this._doMatched && this._undoUnmatched
        }, function() {
            p.addListeners(this, function(a, b) {
                for (var c, d = 0, e = [], f = []; c = this._filteredRules[d++];) c.media && c.media.join(" and ") == a && (b ? e : f).push(c);
                e.length && this._doMatched(new g(e)), f.length && this._undoUnmatched(new g(f))
            })
        })
    }, i.modules = {
        DownloadManager: m,
        StyleManager: n,
        MediaManager: o,
        EventManager: p
    }, i.constructors = {
        Ruleset: g,
        Rule: h
    }, a.Polyfill = i
}(window, document);