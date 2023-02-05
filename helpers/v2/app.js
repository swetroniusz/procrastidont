﻿! function() {
    "use strict";
    var t = {
            572: function(t, e, n) {
                n.r(e), e.default = '<div class="">\r\n\r\n    <div class="dpw-header">\r\n        <div class="dpw-header-inner">\r\n            <div class="dpw-header-item dpw-header-main"><a href="https://javascript.daypilot.org/open-source/">DayPilot Lite for JavaScript</a></div>\r\n            <div class="dpw-header-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="dpw-subheader">\r\n        <div class="dpw-subheader-inner toolbar">\r\n        </div>\r\n    </div>\r\n\r\n    <div class="dpw-title">\r\n        <div class="dpw-title-inner">\r\n            <div class="download" style="display: flex;">\r\n                <div style="margin-right: 10px;"><a href="https://javascript.daypilot.org/download/" class="inline-btn"><span>Download</span></a></div>\r\n                <div style="flex-grow: 1;">\r\n                    <div><a href="https://javascript.daypilot.org/download/" >Download</a> DayPilot Lite for JavaScript (open-source)</div>\r\n                    <div>See also the advanced features of <a href="https://javascript.daypilot.org/demo/" >DayPilot Pro</a> (commercial).</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="dpw-main">\r\n        <div class="dpw-sidebar menu">\r\n            <div class="search">\r\n                <div class="search-box"><input type="text" id="search-box-input" value=","><button id="search-box-clear">&times;</button></div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class="dpw-body">\r\n            <div class="dpw-body-inner">\r\n                <div class="placeholder"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="dpw-footer">\r\n        <div class="dpw-footer-inner">\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n'
            },
            752: function(t, e, n) {
                (new(n(447).i)).t()
            },
            722: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.u = void 0;
                var n = function() {
                    function t() {}
                    return t.l = navigator && navigator.userAgent && (-1 !== navigator.userAgent.indexOf("MSIE") || -1 !== navigator.userAgent.indexOf("Trident")), t
                }();
                e.u = n
            },
            143: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.h = void 0;
                var n = function() {
                    function t() {}
                    return t.get = function(t) {
                        return document.getElementById(t)
                    }, t.query = function(t) {
                        return Array.apply(null, document.querySelectorAll(t))
                    }, t.v = function(t, e) {
                        return t.getElementsByClassName(e)[0]
                    }, t.create = function(t) {
                        return document.createElement(t)
                    }, t.m = function() {
                        return document.createDocumentFragment()
                    }, t
                }();
                e.h = n
            },
            730: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.p = void 0;
                var n = function() {
                    function t() {}
                    return t.prototype.g = function() {
                        var t = this;
                        document.addEventListener("DOMContentLoaded", (function() {
                            Array.apply(null, document.querySelectorAll(".track-download")).forEach((function(e) {
                                e.addEventListener("click", (function(n) {
                                    t.track(e, "/action/trialdownload") || n.preventDefault()
                                }))
                            }))
                        }))
                    }, t.prototype.download = function(t) {
                        var e = document.createElement("a");
                        e.href = t, e.download = t.split("/").pop(), document.body.appendChild(e), e.click(), document.body.removeChild(e)
                    }, t.prototype.track = function(t, e) {
                        var n = this,
                            i = window.ga;
                        return void 0 !== i && i("send", "pageview", e), "_blank" === t.target || (setTimeout((function() {
                            n.download(t.href)
                        }), 150), !1)
                    }, t
                }();
                e.p = n
            },
            447: function(t, e, n) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.i = void 0;
                var i = n(572),
                    r = n(4),
                    a = n(143),
                    o = n(11),
                    u = n(463),
                    s = n(730),
                    l = n(151),
                    c = n(722),
                    d = function() {
                        function t() {
                            this.content = a.h.get("content"), this.location = new o._(window.location.protocol, window.location.host, this.content.dataset.path || window.location.pathname), this.search = new u.M, this.O = new r.j, this.T = new s.p, this.version = ""
                        }
                        return t.prototype.t = function() {
                            this.k()
                        }, t.prototype.k = function() {
                            this.version = this.content.dataset.version;
                            var t = "true" === this.content.dataset.hideMenu,
                                e = a.h.create("div");
                            if (e.innerHTML = i.default, !this.location.S && !t) {
                                var n = a.h.v(e, "menu"),
                                    r = this.D();
                                n.appendChild(r), document.body.className = "dpw-sidebar-left"
                            } else document.body.className = "dpw-no-sidebar";
                            var o = a.h.v(e, "toolbar"),
                                u = this.A();
                            o.appendChild(u);
                            var s = a.h.v(e, "placeholder");
                            this.placeholder = s, c.u.l ? s.appendChild(this.content) : s.appendChild(this.content.content), new l.P(this.placeholder).C(), document.body.insertBefore(e, document.body.firstChild), this.search.g(), this.location.L && !this.location.sandbox && this.T.g()
                        }, t.prototype.D = function() {
                            var t = this,
                                e = a.h.create("div");
                            e.className = "dp-menu";
                            var n = a.h.create("ul"),
                                i = this.location.N;
                            return this.O.getItems(i).forEach((function(e) {
                                var i = e.filename;
                                "index.html" !== i || t.location.filesystem || (i = "./");
                                var r = t.R(e.text, i, e.filename === t.location.filename, e.V);
                                n.appendChild(r.div)
                            })), e.appendChild(n), e
                        }, t.prototype.R = function(t, e, n, i) {
                            var r = a.h.create("li");
                            if ("string" == typeof e) {
                                var o = document.createElement("a");
                                if (o.href = e, o.title = t, n && (o.className = "active"), i) {
                                    var u = a.h.create("span");
                                    u.innerText = "NEW", u.className = "new", o.appendChild(u)
                                }
                                var s = a.h.create("span");
                                s.innerText = t, o.appendChild(s), r.appendChild(o)
                            } else {
                                var l = a.h.create("strong");
                                l.innerText = t, r.appendChild(l)
                            }
                            return {
                                div: r
                            }
                        }, t.prototype.A = function() {
                            var t = this,
                                e = a.h.m(),
                                n = this.location.S ? "" : "../",
                                i = this.location.filesystem ? "index.html" : "",
                                r = this.location.sandbox ? "Sandbox" : "Demo",
                                o = this.J(r, n + i, this.location.S);
                            return e.appendChild(o.div), this.O.W().forEach((function(r) {
                                var a = "" + n + r.N + "/" + i,
                                    o = r.N === t.location.N,
                                    u = t.J(r.text, a, o);
                                e.appendChild(u.div)
                            })), e
                        }, t.prototype.J = function(t, e, n) {
                            var i = a.h.create("div");
                            i.className = "dpw-header-item";
                            var r = document.createElement("a");
                            return r.href = e, r.innerText = t, n && (r.className = "dpw-header-item-selected"), i.appendChild(r), {
                                div: i,
                                a: r
                            }
                        }, t
                    }();
                e.i = d
            },
            11: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e._ = void 0;
                var n = function() {
                    function t(t, e, n) {
                        this.F = ["demo", "demo2", "sandbox", "lite"], this.pathname = n, this.host = e, this.protocol = t, this.G()
                    }
                    return Object.defineProperty(t.prototype, "S", {
                        get: function() {
                            return "ROOT" === this.N
                        },
                        I: !1,
                        q: !0
                    }), t.test = function() {}, t.prototype.G = function() {
                        this.filename = this.B(this.pathname), this.N = this.H(this.pathname), this.sandbox = this.K(this.pathname), this.L = this.U(this.host), this.filesystem = this.X(this.protocol)
                    }, t.prototype.B = function(t) {
                        var e = t.substring(t.lastIndexOf("/") + 1);
                        return "" === e && (e = "index.html"), e
                    }, t.prototype.X = function(t) {
                        return "file:" === t
                    }, t.prototype.H = function(t) {
                        var e = t.lastIndexOf("/"),
                            n = t.lastIndexOf("/", e - 1),
                            i = t.substring(n + 1, e);
                        return "/" === i && (i = "ROOT"), -1 !== this.F.indexOf(i) && (i = "ROOT"), i
                    }, t.prototype.U = function(t) {
                        return "javascript.daypilot.org" === t
                    }, t.prototype.K = function(t) {
                        return 0 === t.indexOf("/sandbox")
                    }, t.prototype.print = function() {
                        window.console.log(this.pathname, this.N, this.filename)
                    }, t
                }();
                e._ = n
            },
            463: function(t, e, n) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.M = void 0;
                var i = n(143),
                    r = function() {
                        function t() {
                            this.Y = null
                        }
                        return t.prototype.g = function() {
                            var t = this,
                                e = this.Z = i.h.get("search-box-input");
                            e.addEventListener("keyup", (function(n) {
                                "Escape" !== n.key && "Esc" !== n.key || (e.value = ""), t.$(e.value)
                            })), i.h.get("search-box-clear").addEventListener("click", (function(n) {
                                t.tt(), e.focus()
                            }))
                        }, t.prototype.tt = function() {
                            this.Z.value = "", this.$("")
                        }, t.prototype.$ = function(t) {
                            var e = !t || "" === t.trim();
                            e ? this.et() : this.nt(), i.h.query(".menu li").forEach((function(n) {
                                var i = n.getElementsByTagName("a")[0],
                                    r = i && -1 !== i.innerText.toLowerCase().indexOf(t.toLowerCase()),
                                    a = e || r;
                                n.style.display = a ? "" : "none"
                            }))
                        }, t.prototype.nt = function() {
                            if (null == this.Y) {
                                var t = this.it();
                                t && (this.Y = t.offsetHeight, t.style.height = this.Y + "px")
                            }
                        }, t.prototype.et = function() {
                            var t = this.it();
                            this.Y = null, t && (t.style.height = "")
                        }, t.prototype.it = function() {
                            return i.h.query(".dp-menu")[0]
                        }, t
                    }();
                e.M = r
            },
            151: function(t, e, n) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.P = void 0;
                var i = n(143),
                    r = n(827),
                    a = n(722),
                    o = function() {
                        function t(t) {
                            this.placeholder = t
                        }
                        return t.prototype.C = function() {
                            if (null !== this.rt()) {
                                var t = this.ot();
                                this.placeholder.appendChild(t)
                            }
                        }, t.prototype.ot = function() {
                            var t = this,
                                e = i.h.create("div");
                            e.className = "space";
                            var n = i.h.create("button");
                            return n.className = "button-source", n.innerText = "Show source", n.onclick = function() {
                                t.ut(), n.style.display = "none"
                            }, e.appendChild(n), e
                        }, t.prototype.ut = function() {
                            var t, e = this.rt();
                            a.u.l ? ((t = i.h.create("div")).innerHTML = "<pre>" + r.lt.st(e.innerHTML) + "</pre>", this.placeholder.appendChild(t)) : ((t = i.h.create("pre")).innerText = r.lt.st(e.innerText), this.placeholder.appendChild(t))
                        }, t.prototype.rt = function() {
                            return this.placeholder.querySelector("script:not([src])")
                        }, t
                    }();
                e.P = o
            },
            4: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.j = void 0;
                var n = [{
                        text: "Calendar",
                        N: "calendar",
                        children: [{
                            text: "Main"
                        }, {
                            text: "JavaScript Event Calendar",
                            filename: "index.html"
                        }, {
                            text: "Navigation"
                        }, {
                            text: "Navigator",
                            filename: "navigator.html"
                        }, {
                            text: "Date Picker",
                            filename: "datepicker.html"
                        }, {
                            text: "Next/Previous",
                            filename: "nextprevious.html"
                        }, {
                            text: "Themes"
                        }, {
                            text: "Green Theme",
                            filename: "themegreen.html"
                        }, {
                            text: "Transparent Theme",
                            filename: "themetransparent.html"
                        }, {
                            text: "White Theme",
                            filename: "themewhite.html"
                        }, {
                            text: "Events"
                        }, {
                            text: "Event Active Areas",
                            filename: "eventareas.html",
                            V: !0
                        }, {
                            text: "Event Context Menu",
                            filename: "eventmenu.html",
                            V: !0
                        }, {
                            text: "Event Customization",
                            filename: "eventcustomization.html"
                        }, {
                            text: "Event Deleting",
                            filename: "eventdeleting.html"
                        }, {
                            text: "Localization"
                        }, {
                            text: "Localization",
                            filename: "localization.html"
                        }, {
                            text: "Frameworks"
                        }, {
                            text: "Angular",
                            filename: "angular.html",
                            V: !0
                        }, {
                            text: "React",
                            filename: "react.html",
                            V: !0
                        }, {
                            text: "Vue",
                            filename: "vue.html",
                            V: !0
                        }, {
                            text: "View Types"
                        }, {
                            text: "Day View",
                            filename: "day.html"
                        }, {
                            text: "Days View",
                            filename: "days.html"
                        }, {
                            text: "Week View",
                            filename: "week.html"
                        }, {
                            text: "Resources View",
                            filename: "resources.html",
                            V: !0
                        }]
                    }, {
                        text: "Month",
                        N: "month",
                        children: [{
                            text: "Main"
                        }, {
                            text: "JavaScript Monthly Event Calendar",
                            filename: "index.html"
                        }, {
                            text: "Navigation"
                        }, {
                            text: "Navigator",
                            filename: "navigator.html"
                        }, {
                            text: "Date Picker",
                            filename: "datepicker.html"
                        }, {
                            text: "Next/Previous",
                            filename: "nextprevious.html"
                        }, {
                            text: "Themes"
                        }, {
                            text: "Green Theme",
                            filename: "themegreen.html"
                        }, {
                            text: "Transparent Theme",
                            filename: "themetransparent.html"
                        }, {
                            text: "White Theme",
                            filename: "themewhite.html"
                        }, {
                            text: "Events"
                        }, {
                            text: "Event Active Areas",
                            filename: "eventareas.html",
                            V: !0
                        }, {
                            text: "Event Context Menu",
                            filename: "eventmenu.html",
                            V: !0
                        }, {
                            text: "Event Customization",
                            filename: "eventcustomization.html"
                        }, {
                            text: "Event Deleting",
                            filename: "eventdeleting.html"
                        }, {
                            text: "Frameworks"
                        }, {
                            text: "Angular",
                            filename: "angular.html",
                            V: !0
                        }, {
                            text: "React",
                            filename: "react.html",
                            V: !0
                        }, {
                            text: "Vue",
                            filename: "vue.html",
                            V: !0
                        }, {
                            text: "Localization"
                        }, {
                            text: "Localization",
                            filename: "localization.html"
                        }]
                    }, {
                        text: "Scheduler",
                        N: "scheduler",
                        children: [{
                            text: "JavaScript Scheduler",
                            filename: "index.html"
                        }]
                    }],
                    i = function() {
                        function t() {
                            this.ct = {}, this.load()
                        }
                        return t.prototype.getItems = function(t) {
                            var e, n;
                            return null !== (n = null === (e = this.ct[t]) || void 0 === e ? void 0 : e.children) && void 0 !== n ? n : []
                        }, t.prototype.W = function() {
                            return n
                        }, t.prototype.load = function() {
                            var t = this;
                            n.forEach((function(e) {
                                t.ct[e.N] = e
                            }))
                        }, t
                    }();
                e.j = i
            },
            827: function(t, e) {
                Object.defineProperty(e, "o", {
                    value: !0
                }), e.lt = void 0;
                var n = function() {
                    function t() {}
                    return t.st = function(t) {
                        var e = this,
                            n = t.split(/\r?\n/),
                            i = 100;
                        n.forEach((function(t) {
                            if (!(0 === t.trim().length)) {
                                var n = e.dt(t);
                                n < i && (i = n)
                            }
                        }));
                        var r = n.map((function(t) {
                                return 0 === t.trim().length ? "" : t.substring(i)
                            })),
                            a = !1;
                        return r.filter((function(t) {
                            var e = 0 === t.trim().length;
                            return !(!a && e) && (a = !0, !0)
                        })).join("\n")
                    }, t.dt = function(e) {
                        var n = 0;
                        return t.ht(e).some((function(t) {
                            if (" " !== t) return !0;
                            n += 1
                        })), n
                    }, t.ht = function(t) {
                        return t.split("")
                    }, t
                }();
                e.lt = n
            }
        },
        e = {};

    function n(i) {
        if (e[i]) return e[i].vt;
        var r = e[i] = {
            vt: {}
        };
        return t[i](r, r.vt, n), r.vt
    }
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "o", {
            value: !0
        })
    }, n(752)
}();