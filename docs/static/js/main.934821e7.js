/*! For license information please see main.934821e7.js.LICENSE.txt */
(() => {
  var e = {
      371: function (e) {
        e.exports = (function () {
          "use strict";
          const e = new Map(),
            t = {
              set(t, n, r) {
                e.has(t) || e.set(t, new Map());
                const i = e.get(t);
                i.has(n) || 0 === i.size
                  ? i.set(n, r)
                  : console.error(
                      "Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(
                        Array.from(i.keys())[0],
                        "."
                      )
                    );
              },
              get: (t, n) => (e.has(t) && e.get(t).get(n)) || null,
              remove(t, n) {
                if (!e.has(t)) return;
                const r = e.get(t);
                r.delete(n), 0 === r.size && e.delete(t);
              },
            },
            n = "transitionend",
            r = (e) => (
              e &&
                window.CSS &&
                window.CSS.escape &&
                (e = e.replace(/#([^\s"#']+)/g, (e, t) =>
                  "#".concat(CSS.escape(t))
                )),
              e
            ),
            i = (e) => {
              e.dispatchEvent(new Event(n));
            },
            o = (e) =>
              !(!e || "object" != typeof e) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            a = (e) =>
              o(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(r(e))
                : null,
            l = (e) => {
              if (!o(e) || 0 === e.getClientRects().length) return !1;
              const t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1;
              }
              return t;
            },
            s = (e) =>
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled")),
            u = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot
                ? e
                : e.parentNode
                ? u(e.parentNode)
                : null;
            },
            c = () => {},
            d = (e) => {
              e.offsetHeight;
            },
            f = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            p = [],
            h = () => "rtl" === document.documentElement.dir,
            m = (e) => {
              var t;
              (t = () => {
                const t = f();
                if (t) {
                  const n = e.NAME,
                    r = t.fn[n];
                  (t.fn[n] = e.jQueryInterface),
                    (t.fn[n].Constructor = e),
                    (t.fn[n].noConflict = () => (
                      (t.fn[n] = r), e.jQueryInterface
                    ));
                }
              }),
                "loading" === document.readyState
                  ? (p.length ||
                      document.addEventListener("DOMContentLoaded", () => {
                        for (const e of p) e();
                      }),
                    p.push(t))
                  : t();
            },
            A = function (e) {
              let t =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : e;
              return "function" == typeof e
                ? e(
                    ...(arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [])
                  )
                : t;
            },
            g = function (e, t) {
              if (
                arguments.length > 2 &&
                void 0 !== arguments[2] &&
                !arguments[2]
              )
                return void A(e);
              const r =
                ((e) => {
                  if (!e) return 0;
                  let { transitionDuration: t, transitionDelay: n } =
                    window.getComputedStyle(e);
                  const r = Number.parseFloat(t),
                    i = Number.parseFloat(n);
                  return r || i
                    ? ((t = t.split(",")[0]),
                      (n = n.split(",")[0]),
                      1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                    : 0;
                })(t) + 5;
              let o = !1;
              const a = (r) => {
                let { target: i } = r;
                i === t && ((o = !0), t.removeEventListener(n, a), A(e));
              };
              t.addEventListener(n, a),
                setTimeout(() => {
                  o || i(t);
                }, r);
            },
            v = (e, t, n, r) => {
              const i = e.length;
              let o = e.indexOf(t);
              return -1 === o
                ? !n && r
                  ? e[i - 1]
                  : e[0]
                : ((o += n ? 1 : -1),
                  r && (o = (o + i) % i),
                  e[Math.max(0, Math.min(o, i - 1))]);
            },
            b = /[^.]*(?=\..*)\.|.*/,
            y = /\..*/,
            _ = /::\d+$/,
            w = {};
          let k = 1;
          const x = { mouseenter: "mouseover", mouseleave: "mouseout" },
            S = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function E(e, t) {
            return (t && "".concat(t, "::").concat(k++)) || e.uidEvent || k++;
          }
          function C(e) {
            const t = E(e);
            return (e.uidEvent = t), (w[t] = w[t] || {}), w[t];
          }
          function T(e, t) {
            let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            return Object.values(e).find(
              (e) => e.callable === t && e.delegationSelector === n
            );
          }
          function P(e, t, n) {
            const r = "string" == typeof t,
              i = r ? n : t || n;
            let o = D(e);
            return S.has(o) || (o = e), [r, i, o];
          }
          function O(e, t, n, r, i) {
            if ("string" != typeof t || !e) return;
            let [o, a, l] = P(t, n, r);
            if (t in x) {
              const e = (e) =>
                function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              a = e(a);
            }
            const s = C(e),
              u = s[l] || (s[l] = {}),
              c = T(u, a, o ? n : null);
            if (c) return void (c.oneOff = c.oneOff && i);
            const d = E(a, t.replace(b, "")),
              f = o
                ? (function (e, t, n) {
                    return function r(i) {
                      const o = e.querySelectorAll(t);
                      for (
                        let { target: a } = i;
                        a && a !== this;
                        a = a.parentNode
                      )
                        for (const l of o)
                          if (l === a)
                            return (
                              j(i, { delegateTarget: a }),
                              r.oneOff && z.off(e, i.type, t, n),
                              n.apply(a, [i])
                            );
                    };
                  })(e, n, a)
                : (function (e, t) {
                    return function n(r) {
                      return (
                        j(r, { delegateTarget: e }),
                        n.oneOff && z.off(e, r.type, t),
                        t.apply(e, [r])
                      );
                    };
                  })(e, a);
            (f.delegationSelector = o ? n : null),
              (f.callable = a),
              (f.oneOff = i),
              (f.uidEvent = d),
              (u[d] = f),
              e.addEventListener(l, f, o);
          }
          function N(e, t, n, r, i) {
            const o = T(t[n], r, i);
            o &&
              (e.removeEventListener(n, o, Boolean(i)),
              delete t[n][o.uidEvent]);
          }
          function L(e, t, n, r) {
            const i = t[n] || {};
            for (const [o, a] of Object.entries(i))
              o.includes(r) && N(e, t, n, a.callable, a.delegationSelector);
          }
          function D(e) {
            return (e = e.replace(y, "")), x[e] || e;
          }
          const z = {
            on(e, t, n, r) {
              O(e, t, n, r, !1);
            },
            one(e, t, n, r) {
              O(e, t, n, r, !0);
            },
            off(e, t, n, r) {
              if ("string" != typeof t || !e) return;
              const [i, o, a] = P(t, n, r),
                l = a !== t,
                s = C(e),
                u = s[a] || {},
                c = t.startsWith(".");
              if (void 0 === o) {
                if (c) for (const n of Object.keys(s)) L(e, s, n, t.slice(1));
                for (const [n, r] of Object.entries(u)) {
                  const i = n.replace(_, "");
                  (l && !t.includes(i)) ||
                    N(e, s, a, r.callable, r.delegationSelector);
                }
              } else {
                if (!Object.keys(u).length) return;
                N(e, s, a, o, i ? n : null);
              }
            },
            trigger(e, t, n) {
              if ("string" != typeof t || !e) return null;
              const r = f();
              let i = null,
                o = !0,
                a = !0,
                l = !1;
              t !== D(t) &&
                r &&
                ((i = r.Event(t, n)),
                r(e).trigger(i),
                (o = !i.isPropagationStopped()),
                (a = !i.isImmediatePropagationStopped()),
                (l = i.isDefaultPrevented()));
              const s = j(new Event(t, { bubbles: o, cancelable: !0 }), n);
              return (
                l && s.preventDefault(),
                a && e.dispatchEvent(s),
                s.defaultPrevented && i && i.preventDefault(),
                s
              );
            },
          };
          function j(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (const [n, r] of Object.entries(t))
              try {
                e[n] = r;
              } catch (t) {
                Object.defineProperty(e, n, { configurable: !0, get: () => r });
              }
            return e;
          }
          function M(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function I(e) {
            return e.replace(/[A-Z]/g, (e) => "-".concat(e.toLowerCase()));
          }
          const F = {
            setDataAttribute(e, t, n) {
              e.setAttribute("data-bs-".concat(I(t)), n);
            },
            removeDataAttribute(e, t) {
              e.removeAttribute("data-bs-".concat(I(t)));
            },
            getDataAttributes(e) {
              if (!e) return {};
              const t = {},
                n = Object.keys(e.dataset).filter(
                  (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
                );
              for (const r of n) {
                let n = r.replace(/^bs/, "");
                (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                  (t[n] = M(e.dataset[r]));
              }
              return t;
            },
            getDataAttribute: (e, t) =>
              M(e.getAttribute("data-bs-".concat(I(t)))),
          };
          class R {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(e, t) {
              const n = o(t) ? F.getDataAttribute(t, "config") : {};
              return {
                ...this.constructor.Default,
                ...("object" == typeof n ? n : {}),
                ...(o(t) ? F.getDataAttributes(t) : {}),
                ...("object" == typeof e ? e : {}),
              };
            }
            _typeCheckConfig(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.constructor.DefaultType;
              for (const [r, i] of Object.entries(t)) {
                const t = e[r],
                  a = o(t)
                    ? "element"
                    : null == (n = t)
                    ? "".concat(n)
                    : Object.prototype.toString
                        .call(n)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase();
                if (!new RegExp(i).test(a))
                  throw new TypeError(
                    ""
                      .concat(this.constructor.NAME.toUpperCase(), ': Option "')
                      .concat(r, '" provided type "')
                      .concat(a, '" but expected type "')
                      .concat(i, '".')
                  );
              }
              var n;
            }
          }
          class H extends R {
            constructor(e, n) {
              super(),
                (e = a(e)) &&
                  ((this._element = e),
                  (this._config = this._getConfig(n)),
                  t.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              t.remove(this._element, this.constructor.DATA_KEY),
                z.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, t) {
              g(
                e,
                t,
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(e) {
              return t.get(a(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
              );
            }
            static get VERSION() {
              return "5.3.2";
            }
            static get DATA_KEY() {
              return "bs.".concat(this.NAME);
            }
            static get EVENT_KEY() {
              return ".".concat(this.DATA_KEY);
            }
            static eventName(e) {
              return "".concat(e).concat(this.EVENT_KEY);
            }
          }
          const B = (e) => {
              let t = e.getAttribute("data-bs-target");
              if (!t || "#" === t) {
                let n = e.getAttribute("href");
                if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                n.includes("#") &&
                  !n.startsWith("#") &&
                  (n = "#".concat(n.split("#")[1])),
                  (t = n && "#" !== n ? r(n.trim()) : null);
              }
              return t;
            },
            q = {
              find: function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : document.documentElement;
                return [].concat(
                  ...Element.prototype.querySelectorAll.call(t, e)
                );
              },
              findOne: function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : document.documentElement;
                return Element.prototype.querySelector.call(t, e);
              },
              children: (e, t) =>
                [].concat(...e.children).filter((e) => e.matches(t)),
              parents(e, t) {
                const n = [];
                let r = e.parentNode.closest(t);
                for (; r; ) n.push(r), (r = r.parentNode.closest(t));
                return n;
              },
              prev(e, t) {
                let n = e.previousElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.previousElementSibling;
                }
                return [];
              },
              next(e, t) {
                let n = e.nextElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.nextElementSibling;
                }
                return [];
              },
              focusableChildren(e) {
                const t = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((e) => "".concat(e, ':not([tabindex^="-"])'))
                  .join(",");
                return this.find(t, e).filter((e) => !s(e) && l(e));
              },
              getSelectorFromElement(e) {
                const t = B(e);
                return t && q.findOne(t) ? t : null;
              },
              getElementFromSelector(e) {
                const t = B(e);
                return t ? q.findOne(t) : null;
              },
              getMultipleElementsFromSelector(e) {
                const t = B(e);
                return t ? q.find(t) : [];
              },
            },
            U = function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "hide";
              const n = "click.dismiss".concat(e.EVENT_KEY),
                r = e.NAME;
              z.on(
                document,
                n,
                '[data-bs-dismiss="'.concat(r, '"]'),
                function (n) {
                  if (
                    (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                    s(this))
                  )
                    return;
                  const i =
                    q.getElementFromSelector(this) ||
                    this.closest(".".concat(r));
                  e.getOrCreateInstance(i)[t]();
                }
              );
            },
            W = ".bs.alert",
            V = "close".concat(W),
            Q = "closed".concat(W);
          class Y extends H {
            static get NAME() {
              return "alert";
            }
            close() {
              if (z.trigger(this._element, V).defaultPrevented) return;
              this._element.classList.remove("show");
              const e = this._element.classList.contains("fade");
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                e
              );
            }
            _destroyElement() {
              this._element.remove(),
                z.trigger(this._element, Q),
                this.dispose();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Y.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }
          U(Y, "close"), m(Y);
          const X = '[data-bs-toggle="button"]';
          class G extends H {
            static get NAME() {
              return "button";
            }
            toggle() {
              this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
              );
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = G.getOrCreateInstance(this);
                "toggle" === e && t[e]();
              });
            }
          }
          z.on(document, "click.bs.button.data-api", X, (e) => {
            e.preventDefault();
            const t = e.target.closest(X);
            G.getOrCreateInstance(t).toggle();
          }),
            m(G);
          const K = ".bs.swipe",
            Z = "touchstart".concat(K),
            J = "touchmove".concat(K),
            $ = "touchend".concat(K),
            ee = "pointerdown".concat(K),
            te = "pointerup".concat(K),
            ne = { endCallback: null, leftCallback: null, rightCallback: null },
            re = {
              endCallback: "(function|null)",
              leftCallback: "(function|null)",
              rightCallback: "(function|null)",
            };
          class ie extends R {
            constructor(e, t) {
              super(),
                (this._element = e),
                e &&
                  ie.isSupported() &&
                  ((this._config = this._getConfig(t)),
                  (this._deltaX = 0),
                  (this._supportPointerEvents = Boolean(window.PointerEvent)),
                  this._initEvents());
            }
            static get Default() {
              return ne;
            }
            static get DefaultType() {
              return re;
            }
            static get NAME() {
              return "swipe";
            }
            dispose() {
              z.off(this._element, K);
            }
            _start(e) {
              this._supportPointerEvents
                ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
                : (this._deltaX = e.touches[0].clientX);
            }
            _end(e) {
              this._eventIsPointerPenTouch(e) &&
                (this._deltaX = e.clientX - this._deltaX),
                this._handleSwipe(),
                A(this._config.endCallback);
            }
            _move(e) {
              this._deltaX =
                e.touches && e.touches.length > 1
                  ? 0
                  : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
              const e = Math.abs(this._deltaX);
              if (e <= 40) return;
              const t = e / this._deltaX;
              (this._deltaX = 0),
                t &&
                  A(
                    t > 0
                      ? this._config.rightCallback
                      : this._config.leftCallback
                  );
            }
            _initEvents() {
              this._supportPointerEvents
                ? (z.on(this._element, ee, (e) => this._start(e)),
                  z.on(this._element, te, (e) => this._end(e)),
                  this._element.classList.add("pointer-event"))
                : (z.on(this._element, Z, (e) => this._start(e)),
                  z.on(this._element, J, (e) => this._move(e)),
                  z.on(this._element, $, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
              return (
                this._supportPointerEvents &&
                ("pen" === e.pointerType || "touch" === e.pointerType)
              );
            }
            static isSupported() {
              return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
              );
            }
          }
          const oe = ".bs.carousel",
            ae = ".data-api",
            le = "next",
            se = "prev",
            ue = "left",
            ce = "right",
            de = "slide".concat(oe),
            fe = "slid".concat(oe),
            pe = "keydown".concat(oe),
            he = "mouseenter".concat(oe),
            me = "mouseleave".concat(oe),
            Ae = "dragstart".concat(oe),
            ge = "load".concat(oe).concat(ae),
            ve = "click".concat(oe).concat(ae),
            be = "carousel",
            ye = "active",
            _e = ".active",
            we = ".carousel-item",
            ke = _e + we,
            xe = { ArrowLeft: ce, ArrowRight: ue },
            Se = {
              interval: 5e3,
              keyboard: !0,
              pause: "hover",
              ride: !1,
              touch: !0,
              wrap: !0,
            },
            Ee = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              pause: "(string|boolean)",
              ride: "(boolean|string)",
              touch: "boolean",
              wrap: "boolean",
            };
          class Ce extends H {
            constructor(e, t) {
              super(e, t),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = q.findOne(
                  ".carousel-indicators",
                  this._element
                )),
                this._addEventListeners(),
                this._config.ride === be && this.cycle();
            }
            static get Default() {
              return Se;
            }
            static get DefaultType() {
              return Ee;
            }
            static get NAME() {
              return "carousel";
            }
            next() {
              this._slide(le);
            }
            nextWhenVisible() {
              !document.hidden && l(this._element) && this.next();
            }
            prev() {
              this._slide(se);
            }
            pause() {
              this._isSliding && i(this._element), this._clearInterval();
            }
            cycle() {
              this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                  () => this.nextWhenVisible(),
                  this._config.interval
                ));
            }
            _maybeEnableCycle() {
              this._config.ride &&
                (this._isSliding
                  ? z.one(this._element, fe, () => this.cycle())
                  : this.cycle());
            }
            to(e) {
              const t = this._getItems();
              if (e > t.length - 1 || e < 0) return;
              if (this._isSliding)
                return void z.one(this._element, fe, () => this.to(e));
              const n = this._getItemIndex(this._getActive());
              if (n === e) return;
              const r = e > n ? le : se;
              this._slide(r, t[e]);
            }
            dispose() {
              this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
            }
            _configAfterMerge(e) {
              return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
              this._config.keyboard &&
                z.on(this._element, pe, (e) => this._keydown(e)),
                "hover" === this._config.pause &&
                  (z.on(this._element, he, () => this.pause()),
                  z.on(this._element, me, () => this._maybeEnableCycle())),
                this._config.touch &&
                  ie.isSupported() &&
                  this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
              for (const t of q.find(".carousel-item img", this._element))
                z.on(t, Ae, (e) => e.preventDefault());
              const e = {
                leftCallback: () => this._slide(this._directionToOrder(ue)),
                rightCallback: () => this._slide(this._directionToOrder(ce)),
                endCallback: () => {
                  "hover" === this._config.pause &&
                    (this.pause(),
                    this.touchTimeout && clearTimeout(this.touchTimeout),
                    (this.touchTimeout = setTimeout(
                      () => this._maybeEnableCycle(),
                      500 + this._config.interval
                    )));
                },
              };
              this._swipeHelper = new ie(this._element, e);
            }
            _keydown(e) {
              if (/input|textarea/i.test(e.target.tagName)) return;
              const t = xe[e.key];
              t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
              return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
              if (!this._indicatorsElement) return;
              const t = q.findOne(_e, this._indicatorsElement);
              t.classList.remove(ye), t.removeAttribute("aria-current");
              const n = q.findOne(
                '[data-bs-slide-to="'.concat(e, '"]'),
                this._indicatorsElement
              );
              n &&
                (n.classList.add(ye), n.setAttribute("aria-current", "true"));
            }
            _updateInterval() {
              const e = this._activeElement || this._getActive();
              if (!e) return;
              const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
              this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
              if (this._isSliding) return;
              const n = this._getActive(),
                r = e === le,
                i = t || v(this._getItems(), n, r, this._config.wrap);
              if (i === n) return;
              const o = this._getItemIndex(i),
                a = (t) =>
                  z.trigger(this._element, t, {
                    relatedTarget: i,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(n),
                    to: o,
                  });
              if (a(de).defaultPrevented) return;
              if (!n || !i) return;
              const l = Boolean(this._interval);
              this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(o),
                (this._activeElement = i);
              const s = r ? "carousel-item-start" : "carousel-item-end",
                u = r ? "carousel-item-next" : "carousel-item-prev";
              i.classList.add(u),
                d(i),
                n.classList.add(s),
                i.classList.add(s),
                this._queueCallback(
                  () => {
                    i.classList.remove(s, u),
                      i.classList.add(ye),
                      n.classList.remove(ye, u, s),
                      (this._isSliding = !1),
                      a(fe);
                  },
                  n,
                  this._isAnimated()
                ),
                l && this.cycle();
            }
            _isAnimated() {
              return this._element.classList.contains("slide");
            }
            _getActive() {
              return q.findOne(ke, this._element);
            }
            _getItems() {
              return q.find(we, this._element);
            }
            _clearInterval() {
              this._interval &&
                (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
              return h() ? (e === ue ? se : le) : e === ue ? le : se;
            }
            _orderToDirection(e) {
              return h() ? (e === se ? ue : ce) : e === se ? ce : ue;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Ce.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                  if ("string" == typeof e) {
                    if (
                      void 0 === t[e] ||
                      e.startsWith("_") ||
                      "constructor" === e
                    )
                      throw new TypeError('No method named "'.concat(e, '"'));
                    t[e]();
                  }
                } else t.to(e);
              });
            }
          }
          z.on(
            document,
            ve,
            "[data-bs-slide], [data-bs-slide-to]",
            function (e) {
              const t = q.getElementFromSelector(this);
              if (!t || !t.classList.contains(be)) return;
              e.preventDefault();
              const n = Ce.getOrCreateInstance(t),
                r = this.getAttribute("data-bs-slide-to");
              return r
                ? (n.to(r), void n._maybeEnableCycle())
                : "next" === F.getDataAttribute(this, "slide")
                ? (n.next(), void n._maybeEnableCycle())
                : (n.prev(), void n._maybeEnableCycle());
            }
          ),
            z.on(window, ge, () => {
              const e = q.find('[data-bs-ride="carousel"]');
              for (const t of e) Ce.getOrCreateInstance(t);
            }),
            m(Ce);
          const Te = ".bs.collapse",
            Pe = "show".concat(Te),
            Oe = "shown".concat(Te),
            Ne = "hide".concat(Te),
            Le = "hidden".concat(Te),
            De = "click".concat(Te, ".data-api"),
            ze = "show",
            je = "collapse",
            Me = "collapsing",
            Ie = ":scope .".concat(je, " .").concat(je),
            Fe = '[data-bs-toggle="collapse"]',
            Re = { parent: null, toggle: !0 },
            He = { parent: "(null|element)", toggle: "boolean" };
          class Be extends H {
            constructor(e, t) {
              super(e, t),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const n = q.find(Fe);
              for (const r of n) {
                const e = q.getSelectorFromElement(r),
                  t = q.find(e).filter((e) => e === this._element);
                null !== e && t.length && this._triggerArray.push(r);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return Re;
            }
            static get DefaultType() {
              return He;
            }
            static get NAME() {
              return "collapse";
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let e = [];
              if (
                (this._config.parent &&
                  (e = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                  )
                    .filter((e) => e !== this._element)
                    .map((e) => Be.getOrCreateInstance(e, { toggle: !1 }))),
                e.length && e[0]._isTransitioning)
              )
                return;
              if (z.trigger(this._element, Pe).defaultPrevented) return;
              for (const r of e) r.hide();
              const t = this._getDimension();
              this._element.classList.remove(je),
                this._element.classList.add(Me),
                (this._element.style[t] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const n = "scroll".concat(t[0].toUpperCase() + t.slice(1));
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(Me),
                    this._element.classList.add(je, ze),
                    (this._element.style[t] = ""),
                    z.trigger(this._element, Oe);
                },
                this._element,
                !0
              ),
                (this._element.style[t] = "".concat(this._element[n], "px"));
            }
            hide() {
              if (this._isTransitioning || !this._isShown()) return;
              if (z.trigger(this._element, Ne).defaultPrevented) return;
              const e = this._getDimension();
              (this._element.style[e] = "".concat(
                this._element.getBoundingClientRect()[e],
                "px"
              )),
                d(this._element),
                this._element.classList.add(Me),
                this._element.classList.remove(je, ze);
              for (const t of this._triggerArray) {
                const e = q.getElementFromSelector(t);
                e &&
                  !this._isShown(e) &&
                  this._addAriaAndCollapsedClass([t], !1);
              }
              (this._isTransitioning = !0),
                (this._element.style[e] = ""),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(Me),
                      this._element.classList.add(je),
                      z.trigger(this._element, Le);
                  },
                  this._element,
                  !0
                );
            }
            _isShown() {
              return (
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this._element
              ).classList.contains(ze);
            }
            _configAfterMerge(e) {
              return (
                (e.toggle = Boolean(e.toggle)), (e.parent = a(e.parent)), e
              );
            }
            _getDimension() {
              return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const e = this._getFirstLevelChildren(Fe);
              for (const t of e) {
                const e = q.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e));
              }
            }
            _getFirstLevelChildren(e) {
              const t = q.find(Ie, this._config.parent);
              return q
                .find(e, this._config.parent)
                .filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
              if (e.length)
                for (const n of e)
                  n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
              const t = {};
              return (
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                this.each(function () {
                  const n = Be.getOrCreateInstance(this, t);
                  if ("string" == typeof e) {
                    if (void 0 === n[e])
                      throw new TypeError('No method named "'.concat(e, '"'));
                    n[e]();
                  }
                })
              );
            }
          }
          z.on(document, De, Fe, function (e) {
            ("A" === e.target.tagName ||
              (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
              e.preventDefault();
            for (const t of q.getMultipleElementsFromSelector(this))
              Be.getOrCreateInstance(t, { toggle: !1 }).toggle();
          }),
            m(Be);
          var qe = "top",
            Ue = "bottom",
            We = "right",
            Ve = "left",
            Qe = "auto",
            Ye = [qe, Ue, We, Ve],
            Xe = "start",
            Ge = "end",
            Ke = "clippingParents",
            Ze = "viewport",
            Je = "popper",
            $e = "reference",
            et = Ye.reduce(function (e, t) {
              return e.concat([t + "-" + Xe, t + "-" + Ge]);
            }, []),
            tt = [].concat(Ye, [Qe]).reduce(function (e, t) {
              return e.concat([t, t + "-" + Xe, t + "-" + Ge]);
            }, []),
            nt = "beforeRead",
            rt = "read",
            it = "afterRead",
            ot = "beforeMain",
            at = "main",
            lt = "afterMain",
            st = "beforeWrite",
            ut = "write",
            ct = "afterWrite",
            dt = [nt, rt, it, ot, at, lt, st, ut, ct];
          function ft(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
          }
          function pt(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
              var t = e.ownerDocument;
              return (t && t.defaultView) || window;
            }
            return e;
          }
          function ht(e) {
            return e instanceof pt(e).Element || e instanceof Element;
          }
          function mt(e) {
            return e instanceof pt(e).HTMLElement || e instanceof HTMLElement;
          }
          function At(e) {
            return (
              "undefined" != typeof ShadowRoot &&
              (e instanceof pt(e).ShadowRoot || e instanceof ShadowRoot)
            );
          }
          const gt = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
              var t = e.state;
              Object.keys(t.elements).forEach(function (e) {
                var n = t.styles[e] || {},
                  r = t.attributes[e] || {},
                  i = t.elements[e];
                mt(i) &&
                  ft(i) &&
                  (Object.assign(i.style, n),
                  Object.keys(r).forEach(function (e) {
                    var t = r[e];
                    !1 === t
                      ? i.removeAttribute(e)
                      : i.setAttribute(e, !0 === t ? "" : t);
                  }));
              });
            },
            effect: function (e) {
              var t = e.state,
                n = {
                  popper: {
                    position: t.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0",
                  },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(t.elements.popper.style, n.popper),
                (t.styles = n),
                t.elements.arrow &&
                  Object.assign(t.elements.arrow.style, n.arrow),
                function () {
                  Object.keys(t.elements).forEach(function (e) {
                    var r = t.elements[e],
                      i = t.attributes[e] || {},
                      o = Object.keys(
                        t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                      ).reduce(function (e, t) {
                        return (e[t] = ""), e;
                      }, {});
                    mt(r) &&
                      ft(r) &&
                      (Object.assign(r.style, o),
                      Object.keys(i).forEach(function (e) {
                        r.removeAttribute(e);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          };
          function vt(e) {
            return e.split("-")[0];
          }
          var bt = Math.max,
            yt = Math.min,
            _t = Math.round;
          function wt() {
            var e = navigator.userAgentData;
            return null != e && e.brands && Array.isArray(e.brands)
              ? e.brands
                  .map(function (e) {
                    return e.brand + "/" + e.version;
                  })
                  .join(" ")
              : navigator.userAgent;
          }
          function kt() {
            return !/^((?!chrome|android).)*safari/i.test(wt());
          }
          function xt(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var r = e.getBoundingClientRect(),
              i = 1,
              o = 1;
            t &&
              mt(e) &&
              ((i = (e.offsetWidth > 0 && _t(r.width) / e.offsetWidth) || 1),
              (o = (e.offsetHeight > 0 && _t(r.height) / e.offsetHeight) || 1));
            var a = (ht(e) ? pt(e) : window).visualViewport,
              l = !kt() && n,
              s = (r.left + (l && a ? a.offsetLeft : 0)) / i,
              u = (r.top + (l && a ? a.offsetTop : 0)) / o,
              c = r.width / i,
              d = r.height / o;
            return {
              width: c,
              height: d,
              top: u,
              right: s + c,
              bottom: u + d,
              left: s,
              x: s,
              y: u,
            };
          }
          function St(e) {
            var t = xt(e),
              n = e.offsetWidth,
              r = e.offsetHeight;
            return (
              Math.abs(t.width - n) <= 1 && (n = t.width),
              Math.abs(t.height - r) <= 1 && (r = t.height),
              { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
            );
          }
          function Et(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && At(n)) {
              var r = t;
              do {
                if (r && e.isSameNode(r)) return !0;
                r = r.parentNode || r.host;
              } while (r);
            }
            return !1;
          }
          function Ct(e) {
            return pt(e).getComputedStyle(e);
          }
          function Tt(e) {
            return ["table", "td", "th"].indexOf(ft(e)) >= 0;
          }
          function Pt(e) {
            return ((ht(e) ? e.ownerDocument : e.document) || window.document)
              .documentElement;
          }
          function Ot(e) {
            return "html" === ft(e)
              ? e
              : e.assignedSlot ||
                  e.parentNode ||
                  (At(e) ? e.host : null) ||
                  Pt(e);
          }
          function Nt(e) {
            return mt(e) && "fixed" !== Ct(e).position ? e.offsetParent : null;
          }
          function Lt(e) {
            for (
              var t = pt(e), n = Nt(e);
              n && Tt(n) && "static" === Ct(n).position;

            )
              n = Nt(n);
            return n &&
              ("html" === ft(n) ||
                ("body" === ft(n) && "static" === Ct(n).position))
              ? t
              : n ||
                  (function (e) {
                    var t = /firefox/i.test(wt());
                    if (
                      /Trident/i.test(wt()) &&
                      mt(e) &&
                      "fixed" === Ct(e).position
                    )
                      return null;
                    var n = Ot(e);
                    for (
                      At(n) && (n = n.host);
                      mt(n) && ["html", "body"].indexOf(ft(n)) < 0;

                    ) {
                      var r = Ct(n);
                      if (
                        "none" !== r.transform ||
                        "none" !== r.perspective ||
                        "paint" === r.contain ||
                        -1 !==
                          ["transform", "perspective"].indexOf(r.willChange) ||
                        (t && "filter" === r.willChange) ||
                        (t && r.filter && "none" !== r.filter)
                      )
                        return n;
                      n = n.parentNode;
                    }
                    return null;
                  })(e) ||
                  t;
          }
          function Dt(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
          }
          function zt(e, t, n) {
            return bt(e, yt(t, n));
          }
          function jt(e) {
            return Object.assign(
              {},
              { top: 0, right: 0, bottom: 0, left: 0 },
              e
            );
          }
          function Mt(e, t) {
            return t.reduce(function (t, n) {
              return (t[n] = e), t;
            }, {});
          }
          const It = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t,
                n = e.state,
                r = e.name,
                i = e.options,
                o = n.elements.arrow,
                a = n.modifiersData.popperOffsets,
                l = vt(n.placement),
                s = Dt(l),
                u = [Ve, We].indexOf(l) >= 0 ? "height" : "width";
              if (o && a) {
                var c = (function (e, t) {
                    return jt(
                      "number" !=
                        typeof (e =
                          "function" == typeof e
                            ? e(
                                Object.assign({}, t.rects, {
                                  placement: t.placement,
                                })
                              )
                            : e)
                        ? e
                        : Mt(e, Ye)
                    );
                  })(i.padding, n),
                  d = St(o),
                  f = "y" === s ? qe : Ve,
                  p = "y" === s ? Ue : We,
                  h =
                    n.rects.reference[u] +
                    n.rects.reference[s] -
                    a[s] -
                    n.rects.popper[u],
                  m = a[s] - n.rects.reference[s],
                  A = Lt(o),
                  g = A
                    ? "y" === s
                      ? A.clientHeight || 0
                      : A.clientWidth || 0
                    : 0,
                  v = h / 2 - m / 2,
                  b = c[f],
                  y = g - d[u] - c[p],
                  _ = g / 2 - d[u] / 2 + v,
                  w = zt(b, _, y),
                  k = s;
                n.modifiersData[r] =
                  (((t = {})[k] = w), (t.centerOffset = w - _), t);
              }
            },
            effect: function (e) {
              var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
              null != r &&
                ("string" != typeof r ||
                  (r = t.elements.popper.querySelector(r))) &&
                Et(t.elements.popper, r) &&
                (t.elements.arrow = r);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          };
          function Ft(e) {
            return e.split("-")[1];
          }
          var Rt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
          function Ht(e) {
            var t,
              n = e.popper,
              r = e.popperRect,
              i = e.placement,
              o = e.variation,
              a = e.offsets,
              l = e.position,
              s = e.gpuAcceleration,
              u = e.adaptive,
              c = e.roundOffsets,
              d = e.isFixed,
              f = a.x,
              p = void 0 === f ? 0 : f,
              h = a.y,
              m = void 0 === h ? 0 : h,
              A = "function" == typeof c ? c({ x: p, y: m }) : { x: p, y: m };
            (p = A.x), (m = A.y);
            var g = a.hasOwnProperty("x"),
              v = a.hasOwnProperty("y"),
              b = Ve,
              y = qe,
              _ = window;
            if (u) {
              var w = Lt(n),
                k = "clientHeight",
                x = "clientWidth";
              w === pt(n) &&
                "static" !== Ct((w = Pt(n))).position &&
                "absolute" === l &&
                ((k = "scrollHeight"), (x = "scrollWidth")),
                (i === qe || ((i === Ve || i === We) && o === Ge)) &&
                  ((y = Ue),
                  (m -=
                    (d && w === _ && _.visualViewport
                      ? _.visualViewport.height
                      : w[k]) - r.height),
                  (m *= s ? 1 : -1)),
                (i !== Ve && ((i !== qe && i !== Ue) || o !== Ge)) ||
                  ((b = We),
                  (p -=
                    (d && w === _ && _.visualViewport
                      ? _.visualViewport.width
                      : w[x]) - r.width),
                  (p *= s ? 1 : -1));
            }
            var S,
              E = Object.assign({ position: l }, u && Rt),
              C =
                !0 === c
                  ? (function (e, t) {
                      var n = e.x,
                        r = e.y,
                        i = t.devicePixelRatio || 1;
                      return { x: _t(n * i) / i || 0, y: _t(r * i) / i || 0 };
                    })({ x: p, y: m }, pt(n))
                  : { x: p, y: m };
            return (
              (p = C.x),
              (m = C.y),
              s
                ? Object.assign(
                    {},
                    E,
                    (((S = {})[y] = v ? "0" : ""),
                    (S[b] = g ? "0" : ""),
                    (S.transform =
                      (_.devicePixelRatio || 1) <= 1
                        ? "translate(" + p + "px, " + m + "px)"
                        : "translate3d(" + p + "px, " + m + "px, 0)"),
                    S)
                  )
                : Object.assign(
                    {},
                    E,
                    (((t = {})[y] = v ? m + "px" : ""),
                    (t[b] = g ? p + "px" : ""),
                    (t.transform = ""),
                    t)
                  )
            );
          }
          const Bt = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                i = void 0 === r || r,
                o = n.adaptive,
                a = void 0 === o || o,
                l = n.roundOffsets,
                s = void 0 === l || l,
                u = {
                  placement: vt(t.placement),
                  variation: Ft(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: i,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  Ht(
                    Object.assign({}, u, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: a,
                      roundOffsets: s,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    Ht(
                      Object.assign({}, u, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: s,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          };
          var qt = { passive: !0 };
          const Ut = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
              var t = e.state,
                n = e.instance,
                r = e.options,
                i = r.scroll,
                o = void 0 === i || i,
                a = r.resize,
                l = void 0 === a || a,
                s = pt(t.elements.popper),
                u = [].concat(
                  t.scrollParents.reference,
                  t.scrollParents.popper
                );
              return (
                o &&
                  u.forEach(function (e) {
                    e.addEventListener("scroll", n.update, qt);
                  }),
                l && s.addEventListener("resize", n.update, qt),
                function () {
                  o &&
                    u.forEach(function (e) {
                      e.removeEventListener("scroll", n.update, qt);
                    }),
                    l && s.removeEventListener("resize", n.update, qt);
                }
              );
            },
            data: {},
          };
          var Wt = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          function Vt(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
              return Wt[e];
            });
          }
          var Qt = { start: "end", end: "start" };
          function Yt(e) {
            return e.replace(/start|end/g, function (e) {
              return Qt[e];
            });
          }
          function Xt(e) {
            var t = pt(e);
            return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
          }
          function Gt(e) {
            return xt(Pt(e)).left + Xt(e).scrollLeft;
          }
          function Kt(e) {
            var t = Ct(e),
              n = t.overflow,
              r = t.overflowX,
              i = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + i + r);
          }
          function Zt(e) {
            return ["html", "body", "#document"].indexOf(ft(e)) >= 0
              ? e.ownerDocument.body
              : mt(e) && Kt(e)
              ? e
              : Zt(Ot(e));
          }
          function Jt(e, t) {
            var n;
            void 0 === t && (t = []);
            var r = Zt(e),
              i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
              o = pt(r),
              a = i ? [o].concat(o.visualViewport || [], Kt(r) ? r : []) : r,
              l = t.concat(a);
            return i ? l : l.concat(Jt(Ot(a)));
          }
          function $t(e) {
            return Object.assign({}, e, {
              left: e.x,
              top: e.y,
              right: e.x + e.width,
              bottom: e.y + e.height,
            });
          }
          function en(e, t, n) {
            return t === Ze
              ? $t(
                  (function (e, t) {
                    var n = pt(e),
                      r = Pt(e),
                      i = n.visualViewport,
                      o = r.clientWidth,
                      a = r.clientHeight,
                      l = 0,
                      s = 0;
                    if (i) {
                      (o = i.width), (a = i.height);
                      var u = kt();
                      (u || (!u && "fixed" === t)) &&
                        ((l = i.offsetLeft), (s = i.offsetTop));
                    }
                    return { width: o, height: a, x: l + Gt(e), y: s };
                  })(e, n)
                )
              : ht(t)
              ? (function (e, t) {
                  var n = xt(e, !1, "fixed" === t);
                  return (
                    (n.top = n.top + e.clientTop),
                    (n.left = n.left + e.clientLeft),
                    (n.bottom = n.top + e.clientHeight),
                    (n.right = n.left + e.clientWidth),
                    (n.width = e.clientWidth),
                    (n.height = e.clientHeight),
                    (n.x = n.left),
                    (n.y = n.top),
                    n
                  );
                })(t, n)
              : $t(
                  (function (e) {
                    var t,
                      n = Pt(e),
                      r = Xt(e),
                      i = null == (t = e.ownerDocument) ? void 0 : t.body,
                      o = bt(
                        n.scrollWidth,
                        n.clientWidth,
                        i ? i.scrollWidth : 0,
                        i ? i.clientWidth : 0
                      ),
                      a = bt(
                        n.scrollHeight,
                        n.clientHeight,
                        i ? i.scrollHeight : 0,
                        i ? i.clientHeight : 0
                      ),
                      l = -r.scrollLeft + Gt(e),
                      s = -r.scrollTop;
                    return (
                      "rtl" === Ct(i || n).direction &&
                        (l += bt(n.clientWidth, i ? i.clientWidth : 0) - o),
                      { width: o, height: a, x: l, y: s }
                    );
                  })(Pt(e))
                );
          }
          function tn(e) {
            var t,
              n = e.reference,
              r = e.element,
              i = e.placement,
              o = i ? vt(i) : null,
              a = i ? Ft(i) : null,
              l = n.x + n.width / 2 - r.width / 2,
              s = n.y + n.height / 2 - r.height / 2;
            switch (o) {
              case qe:
                t = { x: l, y: n.y - r.height };
                break;
              case Ue:
                t = { x: l, y: n.y + n.height };
                break;
              case We:
                t = { x: n.x + n.width, y: s };
                break;
              case Ve:
                t = { x: n.x - r.width, y: s };
                break;
              default:
                t = { x: n.x, y: n.y };
            }
            var u = o ? Dt(o) : null;
            if (null != u) {
              var c = "y" === u ? "height" : "width";
              switch (a) {
                case Xe:
                  t[u] = t[u] - (n[c] / 2 - r[c] / 2);
                  break;
                case Ge:
                  t[u] = t[u] + (n[c] / 2 - r[c] / 2);
              }
            }
            return t;
          }
          function nn(e, t) {
            void 0 === t && (t = {});
            var n = t,
              r = n.placement,
              i = void 0 === r ? e.placement : r,
              o = n.strategy,
              a = void 0 === o ? e.strategy : o,
              l = n.boundary,
              s = void 0 === l ? Ke : l,
              u = n.rootBoundary,
              c = void 0 === u ? Ze : u,
              d = n.elementContext,
              f = void 0 === d ? Je : d,
              p = n.altBoundary,
              h = void 0 !== p && p,
              m = n.padding,
              A = void 0 === m ? 0 : m,
              g = jt("number" != typeof A ? A : Mt(A, Ye)),
              v = f === Je ? $e : Je,
              b = e.rects.popper,
              y = e.elements[h ? v : f],
              _ = (function (e, t, n, r) {
                var i =
                    "clippingParents" === t
                      ? (function (e) {
                          var t = Jt(Ot(e)),
                            n =
                              ["absolute", "fixed"].indexOf(Ct(e).position) >=
                                0 && mt(e)
                                ? Lt(e)
                                : e;
                          return ht(n)
                            ? t.filter(function (e) {
                                return ht(e) && Et(e, n) && "body" !== ft(e);
                              })
                            : [];
                        })(e)
                      : [].concat(t),
                  o = [].concat(i, [n]),
                  a = o[0],
                  l = o.reduce(function (t, n) {
                    var i = en(e, n, r);
                    return (
                      (t.top = bt(i.top, t.top)),
                      (t.right = yt(i.right, t.right)),
                      (t.bottom = yt(i.bottom, t.bottom)),
                      (t.left = bt(i.left, t.left)),
                      t
                    );
                  }, en(e, a, r));
                return (
                  (l.width = l.right - l.left),
                  (l.height = l.bottom - l.top),
                  (l.x = l.left),
                  (l.y = l.top),
                  l
                );
              })(
                ht(y) ? y : y.contextElement || Pt(e.elements.popper),
                s,
                c,
                a
              ),
              w = xt(e.elements.reference),
              k = tn({
                reference: w,
                element: b,
                strategy: "absolute",
                placement: i,
              }),
              x = $t(Object.assign({}, b, k)),
              S = f === Je ? x : w,
              E = {
                top: _.top - S.top + g.top,
                bottom: S.bottom - _.bottom + g.bottom,
                left: _.left - S.left + g.left,
                right: S.right - _.right + g.right,
              },
              C = e.modifiersData.offset;
            if (f === Je && C) {
              var T = C[i];
              Object.keys(E).forEach(function (e) {
                var t = [We, Ue].indexOf(e) >= 0 ? 1 : -1,
                  n = [qe, Ue].indexOf(e) >= 0 ? "y" : "x";
                E[e] += T[n] * t;
              });
            }
            return E;
          }
          function rn(e, t) {
            void 0 === t && (t = {});
            var n = t,
              r = n.placement,
              i = n.boundary,
              o = n.rootBoundary,
              a = n.padding,
              l = n.flipVariations,
              s = n.allowedAutoPlacements,
              u = void 0 === s ? tt : s,
              c = Ft(r),
              d = c
                ? l
                  ? et
                  : et.filter(function (e) {
                      return Ft(e) === c;
                    })
                : Ye,
              f = d.filter(function (e) {
                return u.indexOf(e) >= 0;
              });
            0 === f.length && (f = d);
            var p = f.reduce(function (t, n) {
              return (
                (t[n] = nn(e, {
                  placement: n,
                  boundary: i,
                  rootBoundary: o,
                  padding: a,
                })[vt(n)]),
                t
              );
            }, {});
            return Object.keys(p).sort(function (e, t) {
              return p[e] - p[t];
            });
          }
          const on = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                r = e.name;
              if (!t.modifiersData[r]._skip) {
                for (
                  var i = n.mainAxis,
                    o = void 0 === i || i,
                    a = n.altAxis,
                    l = void 0 === a || a,
                    s = n.fallbackPlacements,
                    u = n.padding,
                    c = n.boundary,
                    d = n.rootBoundary,
                    f = n.altBoundary,
                    p = n.flipVariations,
                    h = void 0 === p || p,
                    m = n.allowedAutoPlacements,
                    A = t.options.placement,
                    g = vt(A),
                    v =
                      s ||
                      (g !== A && h
                        ? (function (e) {
                            if (vt(e) === Qe) return [];
                            var t = Vt(e);
                            return [Yt(e), t, Yt(t)];
                          })(A)
                        : [Vt(A)]),
                    b = [A].concat(v).reduce(function (e, n) {
                      return e.concat(
                        vt(n) === Qe
                          ? rn(t, {
                              placement: n,
                              boundary: c,
                              rootBoundary: d,
                              padding: u,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : n
                      );
                    }, []),
                    y = t.rects.reference,
                    _ = t.rects.popper,
                    w = new Map(),
                    k = !0,
                    x = b[0],
                    S = 0;
                  S < b.length;
                  S++
                ) {
                  var E = b[S],
                    C = vt(E),
                    T = Ft(E) === Xe,
                    P = [qe, Ue].indexOf(C) >= 0,
                    O = P ? "width" : "height",
                    N = nn(t, {
                      placement: E,
                      boundary: c,
                      rootBoundary: d,
                      altBoundary: f,
                      padding: u,
                    }),
                    L = P ? (T ? We : Ve) : T ? Ue : qe;
                  y[O] > _[O] && (L = Vt(L));
                  var D = Vt(L),
                    z = [];
                  if (
                    (o && z.push(N[C] <= 0),
                    l && z.push(N[L] <= 0, N[D] <= 0),
                    z.every(function (e) {
                      return e;
                    }))
                  ) {
                    (x = E), (k = !1);
                    break;
                  }
                  w.set(E, z);
                }
                if (k)
                  for (
                    var j = function (e) {
                        var t = b.find(function (t) {
                          var n = w.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (x = t), "break";
                      },
                      M = h ? 3 : 1;
                    M > 0 && "break" !== j(M);
                    M--
                  );
                t.placement !== x &&
                  ((t.modifiersData[r]._skip = !0),
                  (t.placement = x),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
          function an(e, t, n) {
            return (
              void 0 === n && (n = { x: 0, y: 0 }),
              {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
              }
            );
          }
          function ln(e) {
            return [qe, We, Ue, Ve].some(function (t) {
              return e[t] >= 0;
            });
          }
          const sn = {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  n = e.name,
                  r = t.rects.reference,
                  i = t.rects.popper,
                  o = t.modifiersData.preventOverflow,
                  a = nn(t, { elementContext: "reference" }),
                  l = nn(t, { altBoundary: !0 }),
                  s = an(a, r),
                  u = an(l, i, o),
                  c = ln(s),
                  d = ln(u);
                (t.modifiersData[n] = {
                  referenceClippingOffsets: s,
                  popperEscapeOffsets: u,
                  isReferenceHidden: c,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": c,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
            un = {
              name: "offset",
              enabled: !0,
              phase: "main",
              requires: ["popperOffsets"],
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  i = n.offset,
                  o = void 0 === i ? [0, 0] : i,
                  a = tt.reduce(function (e, n) {
                    return (
                      (e[n] = (function (e, t, n) {
                        var r = vt(e),
                          i = [Ve, qe].indexOf(r) >= 0 ? -1 : 1,
                          o =
                            "function" == typeof n
                              ? n(Object.assign({}, t, { placement: e }))
                              : n,
                          a = o[0],
                          l = o[1];
                        return (
                          (a = a || 0),
                          (l = (l || 0) * i),
                          [Ve, We].indexOf(r) >= 0
                            ? { x: l, y: a }
                            : { x: a, y: l }
                        );
                      })(n, t.rects, o)),
                      e
                    );
                  }, {}),
                  l = a[t.placement],
                  s = l.x,
                  u = l.y;
                null != t.modifiersData.popperOffsets &&
                  ((t.modifiersData.popperOffsets.x += s),
                  (t.modifiersData.popperOffsets.y += u)),
                  (t.modifiersData[r] = a);
              },
            },
            cn = {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  n = e.name;
                t.modifiersData[n] = tn({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            dn = {
              name: "preventOverflow",
              enabled: !0,
              phase: "main",
              fn: function (e) {
                var t = e.state,
                  n = e.options,
                  r = e.name,
                  i = n.mainAxis,
                  o = void 0 === i || i,
                  a = n.altAxis,
                  l = void 0 !== a && a,
                  s = n.boundary,
                  u = n.rootBoundary,
                  c = n.altBoundary,
                  d = n.padding,
                  f = n.tether,
                  p = void 0 === f || f,
                  h = n.tetherOffset,
                  m = void 0 === h ? 0 : h,
                  A = nn(t, {
                    boundary: s,
                    rootBoundary: u,
                    padding: d,
                    altBoundary: c,
                  }),
                  g = vt(t.placement),
                  v = Ft(t.placement),
                  b = !v,
                  y = Dt(g),
                  _ = "x" === y ? "y" : "x",
                  w = t.modifiersData.popperOffsets,
                  k = t.rects.reference,
                  x = t.rects.popper,
                  S =
                    "function" == typeof m
                      ? m(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : m,
                  E =
                    "number" == typeof S
                      ? { mainAxis: S, altAxis: S }
                      : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
                  C = t.modifiersData.offset
                    ? t.modifiersData.offset[t.placement]
                    : null,
                  T = { x: 0, y: 0 };
                if (w) {
                  if (o) {
                    var P,
                      O = "y" === y ? qe : Ve,
                      N = "y" === y ? Ue : We,
                      L = "y" === y ? "height" : "width",
                      D = w[y],
                      z = D + A[O],
                      j = D - A[N],
                      M = p ? -x[L] / 2 : 0,
                      I = v === Xe ? k[L] : x[L],
                      F = v === Xe ? -x[L] : -k[L],
                      R = t.elements.arrow,
                      H = p && R ? St(R) : { width: 0, height: 0 },
                      B = t.modifiersData["arrow#persistent"]
                        ? t.modifiersData["arrow#persistent"].padding
                        : { top: 0, right: 0, bottom: 0, left: 0 },
                      q = B[O],
                      U = B[N],
                      W = zt(0, k[L], H[L]),
                      V = b
                        ? k[L] / 2 - M - W - q - E.mainAxis
                        : I - W - q - E.mainAxis,
                      Q = b
                        ? -k[L] / 2 + M + W + U + E.mainAxis
                        : F + W + U + E.mainAxis,
                      Y = t.elements.arrow && Lt(t.elements.arrow),
                      X = Y
                        ? "y" === y
                          ? Y.clientTop || 0
                          : Y.clientLeft || 0
                        : 0,
                      G = null != (P = null == C ? void 0 : C[y]) ? P : 0,
                      K = D + Q - G,
                      Z = zt(p ? yt(z, D + V - G - X) : z, D, p ? bt(j, K) : j);
                    (w[y] = Z), (T[y] = Z - D);
                  }
                  if (l) {
                    var J,
                      $ = "x" === y ? qe : Ve,
                      ee = "x" === y ? Ue : We,
                      te = w[_],
                      ne = "y" === _ ? "height" : "width",
                      re = te + A[$],
                      ie = te - A[ee],
                      oe = -1 !== [qe, Ve].indexOf(g),
                      ae = null != (J = null == C ? void 0 : C[_]) ? J : 0,
                      le = oe ? re : te - k[ne] - x[ne] - ae + E.altAxis,
                      se = oe ? te + k[ne] + x[ne] - ae - E.altAxis : ie,
                      ue =
                        p && oe
                          ? (function (e, t, n) {
                              var r = zt(e, t, n);
                              return r > n ? n : r;
                            })(le, te, se)
                          : zt(p ? le : re, te, p ? se : ie);
                    (w[_] = ue), (T[_] = ue - te);
                  }
                  t.modifiersData[r] = T;
                }
              },
              requiresIfExists: ["offset"],
            };
          function fn(e, t, n) {
            void 0 === n && (n = !1);
            var r,
              i,
              o = mt(t),
              a =
                mt(t) &&
                (function (e) {
                  var t = e.getBoundingClientRect(),
                    n = _t(t.width) / e.offsetWidth || 1,
                    r = _t(t.height) / e.offsetHeight || 1;
                  return 1 !== n || 1 !== r;
                })(t),
              l = Pt(t),
              s = xt(e, a, n),
              u = { scrollLeft: 0, scrollTop: 0 },
              c = { x: 0, y: 0 };
            return (
              (o || (!o && !n)) &&
                (("body" !== ft(t) || Kt(l)) &&
                  (u =
                    (r = t) !== pt(r) && mt(r)
                      ? {
                          scrollLeft: (i = r).scrollLeft,
                          scrollTop: i.scrollTop,
                        }
                      : Xt(r)),
                mt(t)
                  ? (((c = xt(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
                  : l && (c.x = Gt(l))),
              {
                x: s.left + u.scrollLeft - c.x,
                y: s.top + u.scrollTop - c.y,
                width: s.width,
                height: s.height,
              }
            );
          }
          function pn(e) {
            var t = new Map(),
              n = new Set(),
              r = [];
            function i(e) {
              n.add(e.name),
                []
                  .concat(e.requires || [], e.requiresIfExists || [])
                  .forEach(function (e) {
                    if (!n.has(e)) {
                      var r = t.get(e);
                      r && i(r);
                    }
                  }),
                r.push(e);
            }
            return (
              e.forEach(function (e) {
                t.set(e.name, e);
              }),
              e.forEach(function (e) {
                n.has(e.name) || i(e);
              }),
              r
            );
          }
          var hn = { placement: "bottom", modifiers: [], strategy: "absolute" };
          function mn() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return !t.some(function (e) {
              return !(e && "function" == typeof e.getBoundingClientRect);
            });
          }
          function An(e) {
            void 0 === e && (e = {});
            var t = e,
              n = t.defaultModifiers,
              r = void 0 === n ? [] : n,
              i = t.defaultOptions,
              o = void 0 === i ? hn : i;
            return function (e, t, n) {
              void 0 === n && (n = o);
              var i,
                a,
                l = {
                  placement: "bottom",
                  orderedModifiers: [],
                  options: Object.assign({}, hn, o),
                  modifiersData: {},
                  elements: { reference: e, popper: t },
                  attributes: {},
                  styles: {},
                },
                s = [],
                u = !1,
                c = {
                  state: l,
                  setOptions: function (n) {
                    var i = "function" == typeof n ? n(l.options) : n;
                    d(),
                      (l.options = Object.assign({}, o, l.options, i)),
                      (l.scrollParents = {
                        reference: ht(e)
                          ? Jt(e)
                          : e.contextElement
                          ? Jt(e.contextElement)
                          : [],
                        popper: Jt(t),
                      });
                    var a,
                      u,
                      f = (function (e) {
                        var t = pn(e);
                        return dt.reduce(function (e, n) {
                          return e.concat(
                            t.filter(function (e) {
                              return e.phase === n;
                            })
                          );
                        }, []);
                      })(
                        ((a = [].concat(r, l.options.modifiers)),
                        (u = a.reduce(function (e, t) {
                          var n = e[t.name];
                          return (
                            (e[t.name] = n
                              ? Object.assign({}, n, t, {
                                  options: Object.assign(
                                    {},
                                    n.options,
                                    t.options
                                  ),
                                  data: Object.assign({}, n.data, t.data),
                                })
                              : t),
                            e
                          );
                        }, {})),
                        Object.keys(u).map(function (e) {
                          return u[e];
                        }))
                      );
                    return (
                      (l.orderedModifiers = f.filter(function (e) {
                        return e.enabled;
                      })),
                      l.orderedModifiers.forEach(function (e) {
                        var t = e.name,
                          n = e.options,
                          r = void 0 === n ? {} : n,
                          i = e.effect;
                        if ("function" == typeof i) {
                          var o = i({
                            state: l,
                            name: t,
                            instance: c,
                            options: r,
                          });
                          s.push(o || function () {});
                        }
                      }),
                      c.update()
                    );
                  },
                  forceUpdate: function () {
                    if (!u) {
                      var e = l.elements,
                        t = e.reference,
                        n = e.popper;
                      if (mn(t, n)) {
                        (l.rects = {
                          reference: fn(
                            t,
                            Lt(n),
                            "fixed" === l.options.strategy
                          ),
                          popper: St(n),
                        }),
                          (l.reset = !1),
                          (l.placement = l.options.placement),
                          l.orderedModifiers.forEach(function (e) {
                            return (l.modifiersData[e.name] = Object.assign(
                              {},
                              e.data
                            ));
                          });
                        for (var r = 0; r < l.orderedModifiers.length; r++)
                          if (!0 !== l.reset) {
                            var i = l.orderedModifiers[r],
                              o = i.fn,
                              a = i.options,
                              s = void 0 === a ? {} : a,
                              d = i.name;
                            "function" == typeof o &&
                              (l =
                                o({
                                  state: l,
                                  options: s,
                                  name: d,
                                  instance: c,
                                }) || l);
                          } else (l.reset = !1), (r = -1);
                      }
                    }
                  },
                  update:
                    ((i = function () {
                      return new Promise(function (e) {
                        c.forceUpdate(), e(l);
                      });
                    }),
                    function () {
                      return (
                        a ||
                          (a = new Promise(function (e) {
                            Promise.resolve().then(function () {
                              (a = void 0), e(i());
                            });
                          })),
                        a
                      );
                    }),
                  destroy: function () {
                    d(), (u = !0);
                  },
                };
              if (!mn(e, t)) return c;
              function d() {
                s.forEach(function (e) {
                  return e();
                }),
                  (s = []);
              }
              return (
                c.setOptions(n).then(function (e) {
                  !u && n.onFirstUpdate && n.onFirstUpdate(e);
                }),
                c
              );
            };
          }
          var gn = An(),
            vn = An({ defaultModifiers: [Ut, cn, Bt, gt] }),
            bn = An({ defaultModifiers: [Ut, cn, Bt, gt, un, on, dn, It, sn] });
          const yn = Object.freeze(
              Object.defineProperty(
                {
                  __proto__: null,
                  afterMain: lt,
                  afterRead: it,
                  afterWrite: ct,
                  applyStyles: gt,
                  arrow: It,
                  auto: Qe,
                  basePlacements: Ye,
                  beforeMain: ot,
                  beforeRead: nt,
                  beforeWrite: st,
                  bottom: Ue,
                  clippingParents: Ke,
                  computeStyles: Bt,
                  createPopper: bn,
                  createPopperBase: gn,
                  createPopperLite: vn,
                  detectOverflow: nn,
                  end: Ge,
                  eventListeners: Ut,
                  flip: on,
                  hide: sn,
                  left: Ve,
                  main: at,
                  modifierPhases: dt,
                  offset: un,
                  placements: tt,
                  popper: Je,
                  popperGenerator: An,
                  popperOffsets: cn,
                  preventOverflow: dn,
                  read: rt,
                  reference: $e,
                  right: We,
                  start: Xe,
                  top: qe,
                  variationPlacements: et,
                  viewport: Ze,
                  write: ut,
                },
                Symbol.toStringTag,
                { value: "Module" }
              )
            ),
            _n = "dropdown",
            wn = ".bs.dropdown",
            kn = ".data-api",
            xn = "ArrowUp",
            Sn = "ArrowDown",
            En = "hide".concat(wn),
            Cn = "hidden".concat(wn),
            Tn = "show".concat(wn),
            Pn = "shown".concat(wn),
            On = "click".concat(wn).concat(kn),
            Nn = "keydown".concat(wn).concat(kn),
            Ln = "keyup".concat(wn).concat(kn),
            Dn = "show",
            zn = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            jn = "".concat(zn, ".").concat(Dn),
            Mn = ".dropdown-menu",
            In = h() ? "top-end" : "top-start",
            Fn = h() ? "top-start" : "top-end",
            Rn = h() ? "bottom-end" : "bottom-start",
            Hn = h() ? "bottom-start" : "bottom-end",
            Bn = h() ? "left-start" : "right-start",
            qn = h() ? "right-start" : "left-start",
            Un = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            Wn = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class Vn extends H {
            constructor(e, t) {
              super(e, t),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  q.next(this._element, Mn)[0] ||
                  q.prev(this._element, Mn)[0] ||
                  q.findOne(Mn, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return Un;
            }
            static get DefaultType() {
              return Wn;
            }
            static get NAME() {
              return _n;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (s(this._element) || this._isShown()) return;
              const e = { relatedTarget: this._element };
              if (!z.trigger(this._element, Tn, e).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const e of [].concat(...document.body.children))
                    z.on(e, "mouseover", c);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(Dn),
                  this._element.classList.add(Dn),
                  z.trigger(this._element, Pn, e);
              }
            }
            hide() {
              if (s(this._element) || !this._isShown()) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(e) {
              if (!z.trigger(this._element, En, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const e of [].concat(...document.body.children))
                    z.off(e, "mouseover", c);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(Dn),
                  this._element.classList.remove(Dn),
                  this._element.setAttribute("aria-expanded", "false"),
                  F.removeDataAttribute(this._menu, "popper"),
                  z.trigger(this._element, Cn, e);
              }
            }
            _getConfig(e) {
              if (
                "object" == typeof (e = super._getConfig(e)).reference &&
                !o(e.reference) &&
                "function" != typeof e.reference.getBoundingClientRect
              )
                throw new TypeError(
                  "".concat(
                    _n.toUpperCase(),
                    ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
                  )
                );
              return e;
            }
            _createPopper() {
              if (void 0 === yn)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
              let e = this._element;
              "parent" === this._config.reference
                ? (e = this._parent)
                : o(this._config.reference)
                ? (e = a(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (e = this._config.reference);
              const t = this._getPopperConfig();
              this._popper = bn(e, this._menu, t);
            }
            _isShown() {
              return this._menu.classList.contains(Dn);
            }
            _getPlacement() {
              const e = this._parent;
              if (e.classList.contains("dropend")) return Bn;
              if (e.classList.contains("dropstart")) return qn;
              if (e.classList.contains("dropup-center")) return "top";
              if (e.classList.contains("dropdown-center")) return "bottom";
              const t =
                "end" ===
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim();
              return e.classList.contains("dropup")
                ? t
                  ? Fn
                  : In
                : t
                ? Hn
                : Rn;
            }
            _detectNavbar() {
              return null !== this._element.closest(".navbar");
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
            }
            _getPopperConfig() {
              const e = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || "static" === this._config.display) &&
                  (F.setDataAttribute(this._menu, "popper", "static"),
                  (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...e, ...A(this._config.popperConfig, [e]) }
              );
            }
            _selectMenuItem(e) {
              let { key: t, target: n } = e;
              const r = q
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu
                )
                .filter((e) => l(e));
              r.length && v(r, n, t === Sn, !r.includes(n)).focus();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Vn.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
            static clearMenus(e) {
              if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
                return;
              const t = q.find(jn);
              for (const n of t) {
                const t = Vn.getInstance(n);
                if (!t || !1 === t._config.autoClose) continue;
                const r = e.composedPath(),
                  i = r.includes(t._menu);
                if (
                  r.includes(t._element) ||
                  ("inside" === t._config.autoClose && !i) ||
                  ("outside" === t._config.autoClose && i)
                )
                  continue;
                if (
                  t._menu.contains(e.target) &&
                  (("keyup" === e.type && "Tab" === e.key) ||
                    /input|select|option|textarea|form/i.test(e.target.tagName))
                )
                  continue;
                const o = { relatedTarget: t._element };
                "click" === e.type && (o.clickEvent = e), t._completeHide(o);
              }
            }
            static dataApiKeydownHandler(e) {
              const t = /input|textarea/i.test(e.target.tagName),
                n = "Escape" === e.key,
                r = [xn, Sn].includes(e.key);
              if (!r && !n) return;
              if (t && !n) return;
              e.preventDefault();
              const i = this.matches(zn)
                  ? this
                  : q.prev(this, zn)[0] ||
                    q.next(this, zn)[0] ||
                    q.findOne(zn, e.delegateTarget.parentNode),
                o = Vn.getOrCreateInstance(i);
              if (r)
                return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
              o._isShown() && (e.stopPropagation(), o.hide(), i.focus());
            }
          }
          z.on(document, Nn, zn, Vn.dataApiKeydownHandler),
            z.on(document, Nn, Mn, Vn.dataApiKeydownHandler),
            z.on(document, On, Vn.clearMenus),
            z.on(document, Ln, Vn.clearMenus),
            z.on(document, On, zn, function (e) {
              e.preventDefault(), Vn.getOrCreateInstance(this).toggle();
            }),
            m(Vn);
          const Qn = "backdrop",
            Yn = "show",
            Xn = "mousedown.bs.".concat(Qn),
            Gn = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            Kn = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          class Zn extends R {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return Gn;
            }
            static get DefaultType() {
              return Kn;
            }
            static get NAME() {
              return Qn;
            }
            show(e) {
              if (!this._config.isVisible) return void A(e);
              this._append();
              const t = this._getElement();
              this._config.isAnimated && d(t),
                t.classList.add(Yn),
                this._emulateAnimation(() => {
                  A(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(Yn),
                  this._emulateAnimation(() => {
                    this.dispose(), A(e);
                  }))
                : A(e);
            }
            dispose() {
              this._isAppended &&
                (z.off(this._element, Xn),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add("fade"),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = a(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const e = this._getElement();
              this._config.rootElement.append(e),
                z.on(e, Xn, () => {
                  A(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              g(e, this._getElement(), this._config.isAnimated);
            }
          }
          const Jn = ".bs.focustrap",
            $n = "focusin".concat(Jn),
            er = "keydown.tab".concat(Jn),
            tr = "backward",
            nr = { autofocus: !0, trapElement: null },
            rr = { autofocus: "boolean", trapElement: "element" };
          class ir extends R {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return nr;
            }
            static get DefaultType() {
              return rr;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                z.off(document, Jn),
                z.on(document, $n, (e) => this._handleFocusin(e)),
                z.on(document, er, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), z.off(document, Jn));
            }
            _handleFocusin(e) {
              const { trapElement: t } = this._config;
              if (
                e.target === document ||
                e.target === t ||
                t.contains(e.target)
              )
                return;
              const n = q.focusableChildren(t);
              0 === n.length
                ? t.focus()
                : this._lastTabNavDirection === tr
                ? n[n.length - 1].focus()
                : n[0].focus();
            }
            _handleKeydown(e) {
              "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? tr : "forward");
            }
          }
          const or = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            ar = ".sticky-top",
            lr = "padding-right",
            sr = "margin-right";
          class ur {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, lr, (t) => t + e),
                this._setElementAttributes(or, lr, (t) => t + e),
                this._setElementAttributes(ar, sr, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, lr),
                this._resetElementAttributes(or, lr),
                this._resetElementAttributes(ar, sr);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
              const r = this.getWidth();
              this._applyManipulationCallback(e, (e) => {
                if (
                  e !== this._element &&
                  window.innerWidth > e.clientWidth + r
                )
                  return;
                this._saveInitialAttribute(e, t);
                const i = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(
                  t,
                  "".concat(n(Number.parseFloat(i)), "px")
                );
              });
            }
            _saveInitialAttribute(e, t) {
              const n = e.style.getPropertyValue(t);
              n && F.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, t) {
              this._applyManipulationCallback(e, (e) => {
                const n = F.getDataAttribute(e, t);
                null !== n
                  ? (F.removeDataAttribute(e, t), e.style.setProperty(t, n))
                  : e.style.removeProperty(t);
              });
            }
            _applyManipulationCallback(e, t) {
              if (o(e)) t(e);
              else for (const n of q.find(e, this._element)) t(n);
            }
          }
          const cr = ".bs.modal",
            dr = "hide".concat(cr),
            fr = "hidePrevented".concat(cr),
            pr = "hidden".concat(cr),
            hr = "show".concat(cr),
            mr = "shown".concat(cr),
            Ar = "resize".concat(cr),
            gr = "click.dismiss".concat(cr),
            vr = "mousedown.dismiss".concat(cr),
            br = "keydown.dismiss".concat(cr),
            yr = "click".concat(cr, ".data-api"),
            _r = "modal-open",
            wr = "show",
            kr = "modal-static",
            xr = { backdrop: !0, focus: !0, keyboard: !0 },
            Sr = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class Er extends H {
            constructor(e, t) {
              super(e, t),
                (this._dialog = q.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new ur()),
                this._addEventListeners();
            }
            static get Default() {
              return xr;
            }
            static get DefaultType() {
              return Sr;
            }
            static get NAME() {
              return "modal";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                z.trigger(this._element, hr, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(_r),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (z.trigger(this._element, dr).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(wr),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )));
            }
            dispose() {
              z.off(window, cr),
                z.off(this._dialog, cr),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new Zn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new ir({ trapElement: this._element });
            }
            _showElement(e) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const t = q.findOne(".modal-body", this._dialog);
              t && (t.scrollTop = 0),
                d(this._element),
                this._element.classList.add(wr),
                this._queueCallback(
                  () => {
                    this._config.focus && this._focustrap.activate(),
                      (this._isTransitioning = !1),
                      z.trigger(this._element, mr, { relatedTarget: e });
                  },
                  this._dialog,
                  this._isAnimated()
                );
            }
            _addEventListeners() {
              z.on(this._element, br, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition());
              }),
                z.on(window, Ar, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                z.on(this._element, vr, (e) => {
                  z.one(this._element, gr, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
                      ("static" !== this._config.backdrop
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(_r),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    z.trigger(this._element, pr);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (z.trigger(this._element, fr).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._element.style.overflowY;
              "hidden" === t ||
                this._element.classList.contains(kr) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(kr),
                this._queueCallback(() => {
                  this._element.classList.remove(kr),
                    this._queueCallback(() => {
                      this._element.style.overflowY = t;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
              if (n && !e) {
                const e = h() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = "".concat(t, "px");
              }
              if (!n && e) {
                const e = h() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = "".concat(t, "px");
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const n = Er.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === n[e])
                    throw new TypeError('No method named "'.concat(e, '"'));
                  n[e](t);
                }
              });
            }
          }
          z.on(document, yr, '[data-bs-toggle="modal"]', function (e) {
            const t = q.getElementFromSelector(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              z.one(t, hr, (e) => {
                e.defaultPrevented ||
                  z.one(t, pr, () => {
                    l(this) && this.focus();
                  });
              });
            const n = q.findOne(".modal.show");
            n && Er.getInstance(n).hide(),
              Er.getOrCreateInstance(t).toggle(this);
          }),
            U(Er),
            m(Er);
          const Cr = ".bs.offcanvas",
            Tr = ".data-api",
            Pr = "load".concat(Cr).concat(Tr),
            Or = "show",
            Nr = "showing",
            Lr = "hiding",
            Dr = ".offcanvas.show",
            zr = "show".concat(Cr),
            jr = "shown".concat(Cr),
            Mr = "hide".concat(Cr),
            Ir = "hidePrevented".concat(Cr),
            Fr = "hidden".concat(Cr),
            Rr = "resize".concat(Cr),
            Hr = "click".concat(Cr).concat(Tr),
            Br = "keydown.dismiss".concat(Cr),
            qr = { backdrop: !0, keyboard: !0, scroll: !1 },
            Ur = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              scroll: "boolean",
            };
          class Wr extends H {
            constructor(e, t) {
              super(e, t),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
            }
            static get Default() {
              return qr;
            }
            static get DefaultType() {
              return Ur;
            }
            static get NAME() {
              return "offcanvas";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                z.trigger(this._element, zr, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new ur().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Nr),
                this._queueCallback(
                  () => {
                    (this._config.scroll && !this._config.backdrop) ||
                      this._focustrap.activate(),
                      this._element.classList.add(Or),
                      this._element.classList.remove(Nr),
                      z.trigger(this._element, jr, { relatedTarget: e });
                  },
                  this._element,
                  !0
                ));
            }
            hide() {
              this._isShown &&
                (z.trigger(this._element, Mr).defaultPrevented ||
                  (this._focustrap.deactivate(),
                  this._element.blur(),
                  (this._isShown = !1),
                  this._element.classList.add(Lr),
                  this._backdrop.hide(),
                  this._queueCallback(
                    () => {
                      this._element.classList.remove(Or, Lr),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new ur().reset(),
                        z.trigger(this._element, Fr);
                    },
                    this._element,
                    !0
                  )));
            }
            dispose() {
              this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            _initializeBackDrop() {
              const e = Boolean(this._config.backdrop);
              return new Zn({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e
                  ? () => {
                      "static" !== this._config.backdrop
                        ? this.hide()
                        : z.trigger(this._element, Ir);
                    }
                  : null,
              });
            }
            _initializeFocusTrap() {
              return new ir({ trapElement: this._element });
            }
            _addEventListeners() {
              z.on(this._element, Br, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : z.trigger(this._element, Ir));
              });
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Wr.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }
          z.on(document, Hr, '[data-bs-toggle="offcanvas"]', function (e) {
            const t = q.getElementFromSelector(this);
            if (
              (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              s(this))
            )
              return;
            z.one(t, Fr, () => {
              l(this) && this.focus();
            });
            const n = q.findOne(Dr);
            n && n !== t && Wr.getInstance(n).hide(),
              Wr.getOrCreateInstance(t).toggle(this);
          }),
            z.on(window, Pr, () => {
              for (const e of q.find(Dr)) Wr.getOrCreateInstance(e).show();
            }),
            z.on(window, Rr, () => {
              for (const e of q.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
              ))
                "fixed" !== getComputedStyle(e).position &&
                  Wr.getOrCreateInstance(e).hide();
            }),
            U(Wr),
            m(Wr);
          const Vr = {
              "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
              a: ["target", "href", "title", "rel"],
              area: [],
              b: [],
              br: [],
              col: [],
              code: [],
              div: [],
              em: [],
              hr: [],
              h1: [],
              h2: [],
              h3: [],
              h4: [],
              h5: [],
              h6: [],
              i: [],
              img: ["src", "srcset", "alt", "title", "width", "height"],
              li: [],
              ol: [],
              p: [],
              pre: [],
              s: [],
              small: [],
              span: [],
              sub: [],
              sup: [],
              strong: [],
              u: [],
              ul: [],
            },
            Qr = new Set([
              "background",
              "cite",
              "href",
              "itemtype",
              "longdesc",
              "poster",
              "src",
              "xlink:href",
            ]),
            Yr = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Xr = (e, t) => {
              const n = e.nodeName.toLowerCase();
              return t.includes(n)
                ? !Qr.has(n) || Boolean(Yr.test(e.nodeValue))
                : t.filter((e) => e instanceof RegExp).some((e) => e.test(n));
            },
            Gr = {
              allowList: Vr,
              content: {},
              extraClass: "",
              html: !1,
              sanitize: !0,
              sanitizeFn: null,
              template: "<div></div>",
            },
            Kr = {
              allowList: "object",
              content: "object",
              extraClass: "(string|function)",
              html: "boolean",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              template: "string",
            },
            Zr = {
              entry: "(string|element|function|null)",
              selector: "(string|element)",
            };
          class Jr extends R {
            constructor(e) {
              super(), (this._config = this._getConfig(e));
            }
            static get Default() {
              return Gr;
            }
            static get DefaultType() {
              return Kr;
            }
            static get NAME() {
              return "TemplateFactory";
            }
            getContent() {
              return Object.values(this._config.content)
                .map((e) => this._resolvePossibleFunction(e))
                .filter(Boolean);
            }
            hasContent() {
              return this.getContent().length > 0;
            }
            changeContent(e) {
              return (
                this._checkContent(e),
                (this._config.content = { ...this._config.content, ...e }),
                this
              );
            }
            toHtml() {
              const e = document.createElement("div");
              e.innerHTML = this._maybeSanitize(this._config.template);
              for (const [r, i] of Object.entries(this._config.content))
                this._setContent(e, i, r);
              const t = e.children[0],
                n = this._resolvePossibleFunction(this._config.extraClass);
              return n && t.classList.add(...n.split(" ")), t;
            }
            _typeCheckConfig(e) {
              super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
              for (const [t, n] of Object.entries(e))
                super._typeCheckConfig({ selector: t, entry: n }, Zr);
            }
            _setContent(e, t, n) {
              const r = q.findOne(n, e);
              r &&
                ((t = this._resolvePossibleFunction(t))
                  ? o(t)
                    ? this._putElementInTemplate(a(t), r)
                    : this._config.html
                    ? (r.innerHTML = this._maybeSanitize(t))
                    : (r.textContent = t)
                  : r.remove());
            }
            _maybeSanitize(e) {
              return this._config.sanitize
                ? (function (e, t, n) {
                    if (!e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    const r = new window.DOMParser().parseFromString(
                        e,
                        "text/html"
                      ),
                      i = [].concat(...r.body.querySelectorAll("*"));
                    for (const o of i) {
                      const e = o.nodeName.toLowerCase();
                      if (!Object.keys(t).includes(e)) {
                        o.remove();
                        continue;
                      }
                      const n = [].concat(...o.attributes),
                        r = [].concat(t["*"] || [], t[e] || []);
                      for (const t of n)
                        Xr(t, r) || o.removeAttribute(t.nodeName);
                    }
                    return r.body.innerHTML;
                  })(e, this._config.allowList, this._config.sanitizeFn)
                : e;
            }
            _resolvePossibleFunction(e) {
              return A(e, [this]);
            }
            _putElementInTemplate(e, t) {
              if (this._config.html)
                return (t.innerHTML = ""), void t.append(e);
              t.textContent = e.textContent;
            }
          }
          const $r = new Set(["sanitize", "allowList", "sanitizeFn"]),
            ei = "fade",
            ti = "show",
            ni = ".modal",
            ri = "hide.bs.modal",
            ii = "hover",
            oi = "focus",
            ai = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: h() ? "left" : "right",
              BOTTOM: "bottom",
              LEFT: h() ? "right" : "left",
            },
            li = {
              allowList: Vr,
              animation: !0,
              boundary: "clippingParents",
              container: !1,
              customClass: "",
              delay: 0,
              fallbackPlacements: ["top", "right", "bottom", "left"],
              html: !1,
              offset: [0, 6],
              placement: "top",
              popperConfig: null,
              sanitize: !0,
              sanitizeFn: null,
              selector: !1,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
              title: "",
              trigger: "hover focus",
            },
            si = {
              allowList: "object",
              animation: "boolean",
              boundary: "(string|element)",
              container: "(string|element|boolean)",
              customClass: "(string|function)",
              delay: "(number|object)",
              fallbackPlacements: "array",
              html: "boolean",
              offset: "(array|string|function)",
              placement: "(string|function)",
              popperConfig: "(null|object|function)",
              sanitize: "boolean",
              sanitizeFn: "(null|function)",
              selector: "(string|boolean)",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
            };
          class ui extends H {
            constructor(e, t) {
              if (void 0 === yn)
                throw new TypeError(
                  "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
              super(e, t),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
            }
            static get Default() {
              return li;
            }
            static get DefaultType() {
              return si;
            }
            static get NAME() {
              return "tooltip";
            }
            enable() {
              this._isEnabled = !0;
            }
            disable() {
              this._isEnabled = !1;
            }
            toggleEnabled() {
              this._isEnabled = !this._isEnabled;
            }
            toggle() {
              this._isEnabled &&
                ((this._activeTrigger.click = !this._activeTrigger.click),
                this._isShown() ? this._leave() : this._enter());
            }
            dispose() {
              clearTimeout(this._timeout),
                z.off(this._element.closest(ni), ri, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                  this._element.setAttribute(
                    "title",
                    this._element.getAttribute("data-bs-original-title")
                  ),
                this._disposePopper(),
                super.dispose();
            }
            show() {
              if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
              if (!this._isWithContent() || !this._isEnabled) return;
              const e = z.trigger(
                  this._element,
                  this.constructor.eventName("show")
                ),
                t = (
                  u(this._element) ||
                  this._element.ownerDocument.documentElement
                ).contains(this._element);
              if (e.defaultPrevented || !t) return;
              this._disposePopper();
              const n = this._getTipElement();
              this._element.setAttribute(
                "aria-describedby",
                n.getAttribute("id")
              );
              const { container: r } = this._config;
              if (
                (this._element.ownerDocument.documentElement.contains(
                  this.tip
                ) ||
                  (r.append(n),
                  z.trigger(
                    this._element,
                    this.constructor.eventName("inserted")
                  )),
                (this._popper = this._createPopper(n)),
                n.classList.add(ti),
                "ontouchstart" in document.documentElement)
              )
                for (const i of [].concat(...document.body.children))
                  z.on(i, "mouseover", c);
              this._queueCallback(
                () => {
                  z.trigger(this._element, this.constructor.eventName("shown")),
                    !1 === this._isHovered && this._leave(),
                    (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
              );
            }
            hide() {
              if (
                this._isShown() &&
                !z.trigger(this._element, this.constructor.eventName("hide"))
                  .defaultPrevented
              ) {
                if (
                  (this._getTipElement().classList.remove(ti),
                  "ontouchstart" in document.documentElement)
                )
                  for (const e of [].concat(...document.body.children))
                    z.off(e, "mouseover", c);
                (this._activeTrigger.click = !1),
                  (this._activeTrigger[oi] = !1),
                  (this._activeTrigger[ii] = !1),
                  (this._isHovered = null),
                  this._queueCallback(
                    () => {
                      this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        z.trigger(
                          this._element,
                          this.constructor.eventName("hidden")
                        ));
                    },
                    this.tip,
                    this._isAnimated()
                  );
              }
            }
            update() {
              this._popper && this._popper.update();
            }
            _isWithContent() {
              return Boolean(this._getTitle());
            }
            _getTipElement() {
              return (
                this.tip ||
                  (this.tip = this._createTipElement(
                    this._newContent || this._getContentForTemplate()
                  )),
                this.tip
              );
            }
            _createTipElement(e) {
              const t = this._getTemplateFactory(e).toHtml();
              if (!t) return null;
              t.classList.remove(ei, ti),
                t.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
              const n = ((e) => {
                do {
                  e += Math.floor(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
              })(this.constructor.NAME).toString();
              return (
                t.setAttribute("id", n),
                this._isAnimated() && t.classList.add(ei),
                t
              );
            }
            setContent(e) {
              (this._newContent = e),
                this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
              return (
                this._templateFactory
                  ? this._templateFactory.changeContent(e)
                  : (this._templateFactory = new Jr({
                      ...this._config,
                      content: e,
                      extraClass: this._resolvePossibleFunction(
                        this._config.customClass
                      ),
                    })),
                this._templateFactory
              );
            }
            _getContentForTemplate() {
              return { ".tooltip-inner": this._getTitle() };
            }
            _getTitle() {
              return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
              );
            }
            _initializeOnDelegatedTarget(e) {
              return this.constructor.getOrCreateInstance(
                e.delegateTarget,
                this._getDelegateConfig()
              );
            }
            _isAnimated() {
              return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(ei))
              );
            }
            _isShown() {
              return this.tip && this.tip.classList.contains(ti);
            }
            _createPopper(e) {
              const t = A(this._config.placement, [this, e, this._element]),
                n = ai[t.toUpperCase()];
              return bn(this._element, e, this._getPopperConfig(n));
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
            }
            _resolvePossibleFunction(e) {
              return A(e, [this._element]);
            }
            _getPopperConfig(e) {
              const t = {
                placement: e,
                modifiers: [
                  {
                    name: "flip",
                    options: {
                      fallbackPlacements: this._config.fallbackPlacements,
                    },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  {
                    name: "arrow",
                    options: {
                      element: ".".concat(this.constructor.NAME, "-arrow"),
                    },
                  },
                  {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: (e) => {
                      this._getTipElement().setAttribute(
                        "data-popper-placement",
                        e.state.placement
                      );
                    },
                  },
                ],
              };
              return { ...t, ...A(this._config.popperConfig, [t]) };
            }
            _setListeners() {
              const e = this._config.trigger.split(" ");
              for (const t of e)
                if ("click" === t)
                  z.on(
                    this._element,
                    this.constructor.eventName("click"),
                    this._config.selector,
                    (e) => {
                      this._initializeOnDelegatedTarget(e).toggle();
                    }
                  );
                else if ("manual" !== t) {
                  const e =
                      t === ii
                        ? this.constructor.eventName("mouseenter")
                        : this.constructor.eventName("focusin"),
                    n =
                      t === ii
                        ? this.constructor.eventName("mouseleave")
                        : this.constructor.eventName("focusout");
                  z.on(this._element, e, this._config.selector, (e) => {
                    const t = this._initializeOnDelegatedTarget(e);
                    (t._activeTrigger["focusin" === e.type ? oi : ii] = !0),
                      t._enter();
                  }),
                    z.on(this._element, n, this._config.selector, (e) => {
                      const t = this._initializeOnDelegatedTarget(e);
                      (t._activeTrigger["focusout" === e.type ? oi : ii] =
                        t._element.contains(e.relatedTarget)),
                        t._leave();
                    });
                }
              (this._hideModalHandler = () => {
                this._element && this.hide();
              }),
                z.on(this._element.closest(ni), ri, this._hideModalHandler);
            }
            _fixTitle() {
              const e = this._element.getAttribute("title");
              e &&
                (this._element.getAttribute("aria-label") ||
                  this._element.textContent.trim() ||
                  this._element.setAttribute("aria-label", e),
                this._element.setAttribute("data-bs-original-title", e),
                this._element.removeAttribute("title"));
            }
            _enter() {
              this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                    this._isHovered && this.show();
                  }, this._config.delay.show));
            }
            _leave() {
              this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                  this._isHovered || this.hide();
                }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
              clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
              return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
              const t = F.getDataAttributes(this._element);
              for (const n of Object.keys(t)) $r.has(n) && delete t[n];
              return (
                (e = { ...t, ...("object" == typeof e && e ? e : {}) }),
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return (
                (e.container =
                  !1 === e.container ? document.body : a(e.container)),
                "number" == typeof e.delay &&
                  (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                  (e.content = e.content.toString()),
                e
              );
            }
            _getDelegateConfig() {
              const e = {};
              for (const [t, n] of Object.entries(this._config))
                this.constructor.Default[t] !== n && (e[t] = n);
              return (e.selector = !1), (e.trigger = "manual"), e;
            }
            _disposePopper() {
              this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = ui.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }
          m(ui);
          const ci = {
              ...ui.Default,
              content: "",
              offset: [0, 8],
              placement: "right",
              template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
              trigger: "click",
            },
            di = {
              ...ui.DefaultType,
              content: "(null|string|element|function)",
            };
          class fi extends ui {
            static get Default() {
              return ci;
            }
            static get DefaultType() {
              return di;
            }
            static get NAME() {
              return "popover";
            }
            _isWithContent() {
              return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
              return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
              };
            }
            _getContent() {
              return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = fi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }
          m(fi);
          const pi = ".bs.scrollspy",
            hi = "activate".concat(pi),
            mi = "click".concat(pi),
            Ai = "load".concat(pi, ".data-api"),
            gi = "active",
            vi = "[href]",
            bi = ".nav-link",
            yi = ""
              .concat(bi, ", .nav-item > ")
              .concat(bi, ", .list-group-item"),
            _i = {
              offset: null,
              rootMargin: "0px 0px -25%",
              smoothScroll: !1,
              target: null,
              threshold: [0.1, 0.5, 1],
            },
            wi = {
              offset: "(number|null)",
              rootMargin: "string",
              smoothScroll: "boolean",
              target: "element",
              threshold: "array",
            };
          class ki extends H {
            constructor(e, t) {
              super(e, t),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                  "visible" === getComputedStyle(this._element).overflowY
                    ? null
                    : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                  visibleEntryTop: 0,
                  parentScrollTop: 0,
                }),
                this.refresh();
            }
            static get Default() {
              return _i;
            }
            static get DefaultType() {
              return wi;
            }
            static get NAME() {
              return "scrollspy";
            }
            refresh() {
              this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                  ? this._observer.disconnect()
                  : (this._observer = this._getNewObserver());
              for (const e of this._observableSections.values())
                this._observer.observe(e);
            }
            dispose() {
              this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
              return (
                (e.target = a(e.target) || document.body),
                (e.rootMargin = e.offset
                  ? "".concat(e.offset, "px 0px -30%")
                  : e.rootMargin),
                "string" == typeof e.threshold &&
                  (e.threshold = e.threshold
                    .split(",")
                    .map((e) => Number.parseFloat(e))),
                e
              );
            }
            _maybeEnableSmoothScroll() {
              this._config.smoothScroll &&
                (z.off(this._config.target, mi),
                z.on(this._config.target, mi, vi, (e) => {
                  const t = this._observableSections.get(e.target.hash);
                  if (t) {
                    e.preventDefault();
                    const n = this._rootElement || window,
                      r = t.offsetTop - this._element.offsetTop;
                    if (n.scrollTo)
                      return void n.scrollTo({ top: r, behavior: "smooth" });
                    n.scrollTop = r;
                  }
                }));
            }
            _getNewObserver() {
              const e = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
              };
              return new IntersectionObserver(
                (e) => this._observerCallback(e),
                e
              );
            }
            _observerCallback(e) {
              const t = (e) => this._targetLinks.get("#".concat(e.target.id)),
                n = (e) => {
                  (this._previousScrollData.visibleEntryTop =
                    e.target.offsetTop),
                    this._process(t(e));
                },
                r = (this._rootElement || document.documentElement).scrollTop,
                i = r >= this._previousScrollData.parentScrollTop;
              this._previousScrollData.parentScrollTop = r;
              for (const o of e) {
                if (!o.isIntersecting) {
                  (this._activeTarget = null), this._clearActiveClass(t(o));
                  continue;
                }
                const e =
                  o.target.offsetTop >=
                  this._previousScrollData.visibleEntryTop;
                if (i && e) {
                  if ((n(o), !r)) return;
                } else i || e || n(o);
              }
            }
            _initializeTargetsAndObservables() {
              (this._targetLinks = new Map()),
                (this._observableSections = new Map());
              const e = q.find(vi, this._config.target);
              for (const t of e) {
                if (!t.hash || s(t)) continue;
                const e = q.findOne(decodeURI(t.hash), this._element);
                l(e) &&
                  (this._targetLinks.set(decodeURI(t.hash), t),
                  this._observableSections.set(t.hash, e));
              }
            }
            _process(e) {
              this._activeTarget !== e &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = e),
                e.classList.add(gi),
                this._activateParents(e),
                z.trigger(this._element, hi, { relatedTarget: e }));
            }
            _activateParents(e) {
              if (e.classList.contains("dropdown-item"))
                q.findOne(
                  ".dropdown-toggle",
                  e.closest(".dropdown")
                ).classList.add(gi);
              else
                for (const t of q.parents(e, ".nav, .list-group"))
                  for (const e of q.prev(t, yi)) e.classList.add(gi);
            }
            _clearActiveClass(e) {
              e.classList.remove(gi);
              const t = q.find("".concat(vi, ".").concat(gi), e);
              for (const n of t) n.classList.remove(gi);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = ki.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }
          z.on(window, Ai, () => {
            for (const e of q.find('[data-bs-spy="scroll"]'))
              ki.getOrCreateInstance(e);
          }),
            m(ki);
          const xi = ".bs.tab",
            Si = "hide".concat(xi),
            Ei = "hidden".concat(xi),
            Ci = "show".concat(xi),
            Ti = "shown".concat(xi),
            Pi = "click".concat(xi),
            Oi = "keydown".concat(xi),
            Ni = "load".concat(xi),
            Li = "ArrowLeft",
            Di = "ArrowRight",
            zi = "ArrowUp",
            ji = "ArrowDown",
            Mi = "Home",
            Ii = "End",
            Fi = "active",
            Ri = "fade",
            Hi = "show",
            Bi = ".dropdown-toggle",
            qi = ":not(".concat(Bi, ")"),
            Ui =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            Wi = ".nav-link"
              .concat(qi, ", .list-group-item")
              .concat(qi, ', [role="tab"]')
              .concat(qi, ", ")
              .concat(Ui),
            Vi = "."
              .concat(Fi, '[data-bs-toggle="tab"], .')
              .concat(Fi, '[data-bs-toggle="pill"], .')
              .concat(Fi, '[data-bs-toggle="list"]');
          class Qi extends H {
            constructor(e) {
              super(e),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  z.on(this._element, Oi, (e) => this._keydown(e)));
            }
            static get NAME() {
              return "tab";
            }
            show() {
              const e = this._element;
              if (this._elemIsActive(e)) return;
              const t = this._getActiveElem(),
                n = t ? z.trigger(t, Si, { relatedTarget: e }) : null;
              z.trigger(e, Ci, { relatedTarget: t }).defaultPrevented ||
                (n && n.defaultPrevented) ||
                (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
              e &&
                (e.classList.add(Fi),
                this._activate(q.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    "tab" === e.getAttribute("role")
                      ? (e.removeAttribute("tabindex"),
                        e.setAttribute("aria-selected", !0),
                        this._toggleDropDown(e, !0),
                        z.trigger(e, Ti, { relatedTarget: t }))
                      : e.classList.add(Hi);
                  },
                  e,
                  e.classList.contains(Ri)
                ));
            }
            _deactivate(e, t) {
              e &&
                (e.classList.remove(Fi),
                e.blur(),
                this._deactivate(q.getElementFromSelector(e)),
                this._queueCallback(
                  () => {
                    "tab" === e.getAttribute("role")
                      ? (e.setAttribute("aria-selected", !1),
                        e.setAttribute("tabindex", "-1"),
                        this._toggleDropDown(e, !1),
                        z.trigger(e, Ei, { relatedTarget: t }))
                      : e.classList.remove(Hi);
                  },
                  e,
                  e.classList.contains(Ri)
                ));
            }
            _keydown(e) {
              if (![Li, Di, zi, ji, Mi, Ii].includes(e.key)) return;
              e.stopPropagation(), e.preventDefault();
              const t = this._getChildren().filter((e) => !s(e));
              let n;
              if ([Mi, Ii].includes(e.key))
                n = t[e.key === Mi ? 0 : t.length - 1];
              else {
                const r = [Di, ji].includes(e.key);
                n = v(t, e.target, r, !0);
              }
              n &&
                (n.focus({ preventScroll: !0 }),
                Qi.getOrCreateInstance(n).show());
            }
            _getChildren() {
              return q.find(Wi, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((e) => this._elemIsActive(e)) || null
              );
            }
            _setInitialAttributes(e, t) {
              this._setAttributeIfNotExists(e, "role", "tablist");
              for (const n of t) this._setInitialAttributesOnChild(n);
            }
            _setInitialAttributesOnChild(e) {
              e = this._getInnerElement(e);
              const t = this._elemIsActive(e),
                n = this._getOuterElement(e);
              e.setAttribute("aria-selected", t),
                n !== e &&
                  this._setAttributeIfNotExists(n, "role", "presentation"),
                t || e.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(e, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
              const t = q.getElementFromSelector(e);
              t &&
                (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                e.id &&
                  this._setAttributeIfNotExists(
                    t,
                    "aria-labelledby",
                    "".concat(e.id)
                  ));
            }
            _toggleDropDown(e, t) {
              const n = this._getOuterElement(e);
              if (!n.classList.contains("dropdown")) return;
              const r = (e, r) => {
                const i = q.findOne(e, n);
                i && i.classList.toggle(r, t);
              };
              r(Bi, Fi),
                r(".dropdown-menu", Hi),
                n.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, n) {
              e.hasAttribute(t) || e.setAttribute(t, n);
            }
            _elemIsActive(e) {
              return e.classList.contains(Fi);
            }
            _getInnerElement(e) {
              return e.matches(Wi) ? e : q.findOne(Wi, e);
            }
            _getOuterElement(e) {
              return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = Qi.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e]();
                }
              });
            }
          }
          z.on(document, Pi, Ui, function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
              s(this) || Qi.getOrCreateInstance(this).show();
          }),
            z.on(window, Ni, () => {
              for (const e of q.find(Vi)) Qi.getOrCreateInstance(e);
            }),
            m(Qi);
          const Yi = ".bs.toast",
            Xi = "mouseover".concat(Yi),
            Gi = "mouseout".concat(Yi),
            Ki = "focusin".concat(Yi),
            Zi = "focusout".concat(Yi),
            Ji = "hide".concat(Yi),
            $i = "hidden".concat(Yi),
            eo = "show".concat(Yi),
            to = "shown".concat(Yi),
            no = "hide",
            ro = "show",
            io = "showing",
            oo = { animation: "boolean", autohide: "boolean", delay: "number" },
            ao = { animation: !0, autohide: !0, delay: 5e3 };
          class lo extends H {
            constructor(e, t) {
              super(e, t),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
            }
            static get Default() {
              return ao;
            }
            static get DefaultType() {
              return oo;
            }
            static get NAME() {
              return "toast";
            }
            show() {
              z.trigger(this._element, eo).defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(no),
                d(this._element),
                this._element.classList.add(ro, io),
                this._queueCallback(
                  () => {
                    this._element.classList.remove(io),
                      z.trigger(this._element, to),
                      this._maybeScheduleHide();
                  },
                  this._element,
                  this._config.animation
                ));
            }
            hide() {
              this.isShown() &&
                (z.trigger(this._element, Ji).defaultPrevented ||
                  (this._element.classList.add(io),
                  this._queueCallback(
                    () => {
                      this._element.classList.add(no),
                        this._element.classList.remove(io, ro),
                        z.trigger(this._element, $i);
                    },
                    this._element,
                    this._config.animation
                  )));
            }
            dispose() {
              this._clearTimeout(),
                this.isShown() && this._element.classList.remove(ro),
                super.dispose();
            }
            isShown() {
              return this._element.classList.contains(ro);
            }
            _maybeScheduleHide() {
              this._config.autohide &&
                (this._hasMouseInteraction ||
                  this._hasKeyboardInteraction ||
                  (this._timeout = setTimeout(() => {
                    this.hide();
                  }, this._config.delay)));
            }
            _onInteraction(e, t) {
              switch (e.type) {
                case "mouseover":
                case "mouseout":
                  this._hasMouseInteraction = t;
                  break;
                case "focusin":
                case "focusout":
                  this._hasKeyboardInteraction = t;
              }
              if (t) return void this._clearTimeout();
              const n = e.relatedTarget;
              this._element === n ||
                this._element.contains(n) ||
                this._maybeScheduleHide();
            }
            _setListeners() {
              z.on(this._element, Xi, (e) => this._onInteraction(e, !0)),
                z.on(this._element, Gi, (e) => this._onInteraction(e, !1)),
                z.on(this._element, Ki, (e) => this._onInteraction(e, !0)),
                z.on(this._element, Zi, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
              clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = lo.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError('No method named "'.concat(e, '"'));
                  t[e](this);
                }
              });
            }
          }
          return (
            U(lo),
            m(lo),
            {
              Alert: Y,
              Button: G,
              Carousel: Ce,
              Collapse: Be,
              Dropdown: Vn,
              Modal: Er,
              Offcanvas: Wr,
              Popover: fi,
              ScrollSpy: ki,
              Tab: Qi,
              Toast: lo,
              Tooltip: ui,
            }
          );
        })();
      },
      463: (e, t, n) => {
        "use strict";
        var r = n(791),
          i = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var a = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var A = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            A[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            A[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              A[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            A[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              A[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            A[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            A[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            A[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            A[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var i = A.hasOwnProperty(t) ? A[t] : null;
          (null !== i
            ? 0 !== i.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, v);
            A[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, v);
              A[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, v);
            A[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            A[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (A.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            A[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          _ = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          O = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var D = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function j(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          I = Object.assign;
        function F(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var R = !1;
        function H(e, t) {
          if (!e || R) return "";
          R = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var i = u.stack.split("\n"),
                  o = r.stack.split("\n"),
                  a = i.length - 1,
                  l = o.length - 1;
                1 <= a && 0 <= l && i[a] !== o[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (i[a] !== o[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || i[a] !== o[l])) {
                        var s = "\n" + i[a].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (R = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = H(e.type, !1));
            case 11:
              return (e = H(e.type.render, !1));
            case 1:
              return (e = H(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case w:
              return "Portal";
            case S:
              return "Profiler";
            case x:
              return "StrictMode";
            case P:
              return "Suspense";
            case O:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function U(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function X(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          Z(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && X(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ie(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ae(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function Ae(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var ye = null;
        function _e(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          ke = null,
          xe = null;
        function Se(e) {
          if ((e = bi(e))) {
            if ("function" !== typeof we) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = _i(t)), we(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          ke ? (xe ? xe.push(e) : (xe = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = xe;
            if (((xe = ke = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Pe() {}
        var Oe = !1;
        function Ne(e, t, n) {
          if (Oe) return e(t, n);
          Oe = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Oe = !1), (null !== ke || null !== xe) && (Pe(), Ce());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = _i(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var De = !1;
        if (c)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                De = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ce) {
            De = !1;
          }
        function je(e, t, n, r, i, o, a, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Ie = null,
          Fe = !1,
          Re = null,
          He = {
            onError: function (e) {
              (Me = !0), (Ie = e);
            },
          };
        function Be(e, t, n, r, i, o, a, l, s) {
          (Me = !1), (Ie = null), je.apply(He, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ue(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (qe(e) !== e) throw Error(o(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return We(i), e;
                    if (a === r) return We(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var l = !1, s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = a.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = a), (r = i);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = a), (n = i);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = i.unstable_scheduleCallback,
          Xe = i.unstable_cancelCallback,
          Ge = i.unstable_shouldYield,
          Ke = i.unstable_requestPaint,
          Ze = i.unstable_now,
          Je = i.unstable_getCurrentPriorityLevel,
          $e = i.unstable_ImmediatePriority,
          et = i.unstable_UserBlockingPriority,
          tt = i.unstable_NormalPriority,
          nt = i.unstable_LowPriority,
          rt = i.unstable_IdlePriority,
          it = null,
          ot = null;
        var at = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            i = e.suspendedLanes,
            o = e.pingedLanes,
            a = 268435455 & n;
          if (0 !== a) {
            var l = a & ~i;
            0 !== l ? (r = dt(l)) : 0 !== (o &= a) && (r = dt(o));
          } else 0 !== (a = n & ~i) ? (r = dt(a)) : 0 !== o && (r = dt(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & i) &&
            ((i = r & -r) >= (o = t & -t) || (16 === i && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function At(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - at(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - at(n),
              i = 1 << r;
            (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
          }
        }
        var bt = 0;
        function yt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var _t,
          wt,
          kt,
          xt,
          St,
          Et = !1,
          Ct = [],
          Tt = null,
          Pt = null,
          Ot = null,
          Nt = new Map(),
          Lt = new Map(),
          Dt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function jt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ot = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [i],
              }),
              null !== t && null !== (t = bi(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function It(e) {
          var t = vi(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ue(n)))
                  return (
                    (e.blockedOn = t),
                    void St(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = bi(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (ye = r), n.target.dispatchEvent(r), (ye = null), t.shift();
          }
          return !0;
        }
        function Rt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Ht() {
          (Et = !1),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== Pt && Ft(Pt) && (Pt = null),
            null !== Ot && Ft(Ot) && (Ot = null),
            Nt.forEach(Rt),
            Lt.forEach(Rt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              i.unstable_scheduleCallback(i.unstable_NormalPriority, Ht)));
        }
        function qt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ct.length) {
            Bt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Bt(Tt, e),
              null !== Pt && Bt(Pt, e),
              null !== Ot && Bt(Ot, e),
              Nt.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < Dt.length;
            n++
          )
            (r = Dt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
            It(n), null === n.blockedOn && Dt.shift();
        }
        var Ut = y.ReactCurrentBatchConfig,
          Wt = !0;
        function Vt(e, t, n, r) {
          var i = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          var i = bt,
            o = Ut.transition;
          Ut.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = i), (Ut.transition = o);
          }
        }
        function Yt(e, t, n, r) {
          if (Wt) {
            var i = Gt(e, t, n, r);
            if (null === i) Wr(e, t, r, Xt, n), jt(e, r);
            else if (
              (function (e, t, n, r, i) {
                switch (t) {
                  case "focusin":
                    return (Tt = Mt(Tt, e, t, n, r, i)), !0;
                  case "dragenter":
                    return (Pt = Mt(Pt, e, t, n, r, i)), !0;
                  case "mouseover":
                    return (Ot = Mt(Ot, e, t, n, r, i)), !0;
                  case "pointerover":
                    var o = i.pointerId;
                    return Nt.set(o, Mt(Nt.get(o) || null, e, t, n, r, i)), !0;
                  case "gotpointercapture":
                    return (
                      (o = i.pointerId),
                      Lt.set(o, Mt(Lt.get(o) || null, e, t, n, r, i)),
                      !0
                    );
                }
                return !1;
              })(i, e, t, n, r)
            )
              r.stopPropagation();
            else if ((jt(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== i; ) {
                var o = bi(i);
                if (
                  (null !== o && _t(o),
                  null === (o = Gt(e, t, n, r)) && Wr(e, t, r, Xt, n),
                  o === i)
                )
                  break;
                i = o;
              }
              null !== i && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Xt = null;
        function Gt(e, t, n, r) {
          if (((Xt = null), null !== (e = vi((e = _e(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ue(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Xt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Jt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Jt,
            r = n.length,
            i = "value" in Zt ? Zt.value : Zt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return ($t = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function on(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var an,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = on(un),
          dn = I({}, un, { view: 0, detail: 0 }),
          fn = on(dn),
          pn = I({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((an = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = an = 0),
                    (sn = e)),
                  an);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = on(pn),
          mn = on(I({}, pn, { dataTransfer: 0 })),
          An = on(I({}, dn, { relatedTarget: 0 })),
          gn = on(
            I({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = I({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = on(vn),
          yn = on(I({}, un, { data: 0 })),
          _n = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          wn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function Sn() {
          return xn;
        }
        var En = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = _n[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = on(En),
          Tn = on(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = on(
            I({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sn,
            })
          ),
          On = on(
            I({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = on(Nn),
          Dn = [9, 13, 27, 32],
          zn = c && "CompositionEvent" in window,
          jn = null;
        c && "documentMode" in document && (jn = document.documentMode);
        var Mn = c && "TextEvent" in window && !jn,
          In = c && (!zn || (jn && 8 < jn && 11 >= jn)),
          Fn = String.fromCharCode(32),
          Rn = !1;
        function Hn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Dn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Un = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ee(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Yn = null;
        function Xn(e) {
          Fr(e, 0);
        }
        function Gn(e) {
          if (Y(yi(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (c) {
          var Jn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Jn = $n;
          } else Jn = !1;
          Zn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Yn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Yn)) {
            var t = [];
            Vn(t, Yn, e, _e(e)), Ne(Xn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ir(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Yn);
        }
        function or(e, t) {
          if ("click" === e) return Gn(t);
        }
        function ar(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var i = n[r];
            if (!d.call(t, i) || !lr(e[i], t[i])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = X((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var i = n.textContent.length,
                  o = Math.min(r.start, i);
                (r = void 0 === r.end ? o : Math.min(r.end, i)),
                  !e.extend && o > r && ((i = r), (r = o), (o = i)),
                  (i = cr(n, o));
                var a = cr(n, r);
                i &&
                  a &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== i.node ||
                    e.anchorOffset !== i.offset ||
                    e.focusNode !== a.node ||
                    e.focusOffset !== a.offset) &&
                  ((t = t.createRange()).setStart(i.node, i.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(a.node, a.offset))
                    : (t.setEnd(a.node, a.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          Ar = null,
          gr = null,
          vr = null,
          br = !1;
        function yr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == Ar ||
            Ar !== X(r) ||
            ("selectionStart" in (r = Ar) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && sr(vr, r)) ||
              ((vr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Ar))));
        }
        function _r(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: _r("Animation", "AnimationEnd"),
            animationiteration: _r("Animation", "AnimationIteration"),
            animationstart: _r("Animation", "AnimationStart"),
            transitionend: _r("Transition", "TransitionEnd"),
          },
          kr = {},
          xr = {};
        function Sr(e) {
          if (kr[e]) return kr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (kr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Er = Sr("animationend"),
          Cr = Sr("animationiteration"),
          Tr = Sr("animationstart"),
          Pr = Sr("transitionend"),
          Or = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Or.set(e, t), s(t, [e]);
        }
        for (var Dr = 0; Dr < Nr.length; Dr++) {
          var zr = Nr[Dr];
          Lr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Lr(Er, "onAnimationEnd"),
          Lr(Cr, "onAnimationIteration"),
          Lr(Tr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(Pr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var jr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(jr)
          );
        function Ir(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, l, s, u) {
              if ((Be.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var c = Ie;
                (Me = !1), (Ie = null), Fe || ((Fe = !0), (Re = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== o && i.isPropagationStopped()))
                    break e;
                  Ir(i, l, u), (o = s);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((s = (l = r[a]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== o && i.isPropagationStopped())
                  )
                    break e;
                  Ir(i, l, u), (o = s);
                }
            }
          }
          if (Fe) throw ((e = Re), (Fe = !1), (Re = null), e);
        }
        function Rr(e, t) {
          var n = t[mi];
          void 0 === n && (n = t[mi] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Ur(t, e, 2, !1), n.add(r));
        }
        function Hr(e, t, n) {
          var r = 0;
          t && (r |= 4), Ur(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              a.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Hr(t, !1, e), Hr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Hr("selectionchange", !1, t));
          }
        }
        function Ur(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var i = Vt;
              break;
            case 4:
              i = Qt;
              break;
            default:
              i = Yt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !De ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, i) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === i || (8 === l.nodeType && l.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var s = a.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = a.stateNode.containerInfo) === i ||
                        (8 === s.nodeType && s.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = vi(l))) return;
                  if (5 === (s = a.tag) || 6 === s) {
                    r = o = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = o,
              i = _e(n),
              a = [];
            e: {
              var l = Or.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = An);
                    break;
                  case "focusout":
                    (u = "blur"), (s = An);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = An;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Pn;
                    break;
                  case Er:
                  case Cr:
                  case Tr:
                    s = gn;
                    break;
                  case Pr:
                    s = On;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Le(h, f)) &&
                        c.push(Vr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, i)),
                  a.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === ye ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!vi(u) && !u[hi])) &&
                  (s || l) &&
                  ((l =
                    i.window === i
                      ? i
                      : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? vi(u)
                          : null) &&
                        (u !== (d = qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : yi(s)),
                  (p = null == u ? l : yi(u)),
                  ((l = new c(m, h + "leave", s, n, i)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  vi(i) === r &&
                    (((c = new c(f, h + "enter", u, n, i)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, m = f; m; m = Yr(m)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (f = Yr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Yr(c)), (f = Yr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Xr(a, l, s, c, !1),
                  null !== u && null !== d && Xr(a, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? yi(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var A = Kn;
              else if (Wn(l))
                if (Zn) A = ar;
                else {
                  A = ir;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (A = or);
              switch (
                (A && (A = A(e, r))
                  ? Vn(a, A, n, i)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? yi(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((Ar = g), (gr = r), (vr = null));
                  break;
                case "focusout":
                  vr = gr = Ar = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), yr(a, n, i);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  yr(a, n, i);
              }
              var v;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? Hn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = en())
                    : ((Jt = "value" in (Zt = i) ? Zt.value : Zt.textContent),
                      (qn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new yn(b, e, null, n, i)),
                  a.push({ event: b, listeners: g }),
                  v ? (b.data = v) : null !== (v = Bn(n)) && (b.data = v))),
                (v = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Rn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Rn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!zn && Hn(e, t))
                          ? ((e = en()), ($t = Jt = Zt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((i = new yn("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = v));
            }
            Fr(a, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = Le(e, n)) && r.unshift(Vr(e, o, i)),
              null != (o = Le(e, t)) && r.push(Vr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Xr(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              i
                ? null != (s = Le(n, o)) && a.unshift(Vr(n, s, l))
                : i || (null != (s = Le(n, o)) && a.push(Vr(n, s, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        var Gr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(o(425));
        }
        function $r() {}
        var ei = null,
          ti = null;
        function ni(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ri = "function" === typeof setTimeout ? setTimeout : void 0,
          ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oi = "function" === typeof Promise ? Promise : void 0,
          ai =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oi
              ? function (e) {
                  return oi.resolve(null).then(e).catch(li);
                }
              : ri;
        function li(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function si(e, t) {
          var n = t,
            r = 0;
          do {
            var i = n.nextSibling;
            if ((e.removeChild(n), i && 8 === i.nodeType))
              if ("/$" === (n = i.data)) {
                if (0 === r) return e.removeChild(i), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = i;
          } while (n);
          qt(t);
        }
        function ui(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ci(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var di = Math.random().toString(36).slice(2),
          fi = "__reactFiber$" + di,
          pi = "__reactProps$" + di,
          hi = "__reactContainer$" + di,
          mi = "__reactEvents$" + di,
          Ai = "__reactListeners$" + di,
          gi = "__reactHandles$" + di;
        function vi(e) {
          var t = e[fi];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[hi] || n[fi])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ci(e); null !== e; ) {
                  if ((n = e[fi])) return n;
                  e = ci(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function bi(e) {
          return !(e = e[fi] || e[hi]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function yi(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function _i(e) {
          return e[pi] || null;
        }
        var wi = [],
          ki = -1;
        function xi(e) {
          return { current: e };
        }
        function Si(e) {
          0 > ki || ((e.current = wi[ki]), (wi[ki] = null), ki--);
        }
        function Ei(e, t) {
          ki++, (wi[ki] = e.current), (e.current = t);
        }
        var Ci = {},
          Ti = xi(Ci),
          Pi = xi(!1),
          Oi = Ci;
        function Ni(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ci;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Li(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Di() {
          Si(Pi), Si(Ti);
        }
        function zi(e, t, n) {
          if (Ti.current !== Ci) throw Error(o(168));
          Ei(Ti, t), Ei(Pi, n);
        }
        function ji(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var i in (r = r.getChildContext()))
            if (!(i in t)) throw Error(o(108, U(e) || "Unknown", i));
          return I({}, n, r);
        }
        function Mi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ci),
            (Oi = Ti.current),
            Ei(Ti, e),
            Ei(Pi, Pi.current),
            !0
          );
        }
        function Ii(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = ji(e, t, Oi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Si(Pi),
              Si(Ti),
              Ei(Ti, e))
            : Si(Pi),
            Ei(Pi, n);
        }
        var Fi = null,
          Ri = !1,
          Hi = !1;
        function Bi(e) {
          null === Fi ? (Fi = [e]) : Fi.push(e);
        }
        function qi() {
          if (!Hi && null !== Fi) {
            Hi = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fi;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fi = null), (Ri = !1);
            } catch (i) {
              throw (null !== Fi && (Fi = Fi.slice(e + 1)), Ye($e, qi), i);
            } finally {
              (bt = t), (Hi = !1);
            }
          }
          return null;
        }
        var Ui = [],
          Wi = 0,
          Vi = null,
          Qi = 0,
          Yi = [],
          Xi = 0,
          Gi = null,
          Ki = 1,
          Zi = "";
        function Ji(e, t) {
          (Ui[Wi++] = Qi), (Ui[Wi++] = Vi), (Vi = e), (Qi = t);
        }
        function $i(e, t, n) {
          (Yi[Xi++] = Ki), (Yi[Xi++] = Zi), (Yi[Xi++] = Gi), (Gi = e);
          var r = Ki;
          e = Zi;
          var i = 32 - at(r) - 1;
          (r &= ~(1 << i)), (n += 1);
          var o = 32 - at(t) + i;
          if (30 < o) {
            var a = i - (i % 5);
            (o = (r & ((1 << a) - 1)).toString(32)),
              (r >>= a),
              (i -= a),
              (Ki = (1 << (32 - at(t) + i)) | (n << i) | r),
              (Zi = o + e);
          } else (Ki = (1 << o) | (n << i) | r), (Zi = e);
        }
        function eo(e) {
          null !== e.return && (Ji(e, 1), $i(e, 1, 0));
        }
        function to(e) {
          for (; e === Vi; )
            (Vi = Ui[--Wi]), (Ui[Wi] = null), (Qi = Ui[--Wi]), (Ui[Wi] = null);
          for (; e === Gi; )
            (Gi = Yi[--Xi]),
              (Yi[Xi] = null),
              (Zi = Yi[--Xi]),
              (Yi[Xi] = null),
              (Ki = Yi[--Xi]),
              (Yi[Xi] = null);
        }
        var no = null,
          ro = null,
          io = !1,
          oo = null;
        function ao(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function lo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ui(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Gi ? { id: Ki, overflow: Zi } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function so(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function uo(e) {
          if (io) {
            var t = ro;
            if (t) {
              var n = t;
              if (!lo(e, t)) {
                if (so(e)) throw Error(o(418));
                t = ui(n.nextSibling);
                var r = no;
                t && lo(e, t)
                  ? ao(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e));
              }
            } else {
              if (so(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e);
            }
          }
        }
        function co(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!io) return co(e), (io = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ni(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (so(e)) throw (po(), Error(o(418)));
            for (; t; ) ao(e, t), (t = ui(t.nextSibling));
          }
          if ((co(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ui(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ui(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ui(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (io = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var Ao = y.ReactCurrentBatchConfig;
        function go(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vo = xi(null),
          bo = null,
          yo = null,
          _o = null;
        function wo() {
          _o = yo = bo = null;
        }
        function ko(e) {
          var t = vo.current;
          Si(vo), (e._currentValue = t);
        }
        function xo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function So(e, t) {
          (bo = e),
            (_o = yo = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (yl = !0), (e.firstContext = null));
        }
        function Eo(e) {
          var t = e._currentValue;
          if (_o !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === yo)
            ) {
              if (null === bo) throw Error(o(308));
              (yo = e), (bo.dependencies = { lanes: 0, firstContext: e });
            } else yo = yo.next = e;
          return t;
        }
        var Co = null;
        function To(e) {
          null === Co ? (Co = [e]) : Co.push(e);
        }
        function Po(e, t, n, r) {
          var i = t.interleaved;
          return (
            null === i
              ? ((n.next = n), To(t))
              : ((n.next = i.next), (i.next = n)),
            (t.interleaved = n),
            Oo(e, r)
          );
        }
        function Oo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var No = !1;
        function Lo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Do(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function zo(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function jo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var i = r.pending;
            return (
              null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
              (r.pending = t),
              Oo(e, n)
            );
          }
          return (
            null === (i = r.interleaved)
              ? ((t.next = t), To(r))
              : ((t.next = i.next), (i.next = t)),
            (r.interleaved = t),
            Oo(e, n)
          );
        }
        function Mo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function Io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fo(e, t, n, r) {
          var i = e.updateQueue;
          No = !1;
          var o = i.firstBaseUpdate,
            a = i.lastBaseUpdate,
            l = i.shared.pending;
          if (null !== l) {
            i.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === a ? (o = u) : (a.next = u), (a = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== o) {
            var d = i.baseState;
            for (a = 0, c = u = s = null, l = o; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = I({}, d, f);
                      break e;
                    case 2:
                      No = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = i.effects) ? (i.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (a |= f);
              if (null === (l = l.next)) {
                if (null === (l = i.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (i.lastBaseUpdate = f),
                  (i.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (i.baseState = s),
              (i.firstBaseUpdate = u),
              (i.lastBaseUpdate = c),
              null !== (t = i.shared.interleaved))
            ) {
              i = t;
              do {
                (a |= i.lane), (i = i.next);
              } while (i !== t);
            } else null === o && (i.shared.lanes = 0);
            (Is |= a), (e.lanes = a), (e.memoizedState = d);
          }
        }
        function Ro(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var Ho = new r.Component().refs;
        function Bo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var qo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              o = zo(r, i);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = jo(e, o, i)) && (ru(t, e, i, r), Mo(t, e, i));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              i = nu(e),
              o = zo(r, i);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = jo(e, o, i)) && (ru(t, e, i, r), Mo(t, e, i));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              i = zo(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              null !== (t = jo(e, i, r)) && (ru(t, e, r, n), Mo(t, e, r));
          },
        };
        function Uo(e, t, n, r, i, o, a) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(i, o);
        }
        function Wo(e, t, n) {
          var r = !1,
            i = Ci,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Eo(o))
              : ((i = Li(t) ? Oi : Ti.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ni(e, i)
                  : Ci)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = qo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function Vo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && qo.enqueueReplaceState(t, t.state, null);
        }
        function Qo(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = Ho), Lo(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (i.context = Eo(o))
            : ((o = Li(t) ? Oi : Ti.current), (i.context = Ni(e, o))),
            (i.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (Bo(e, t, o, n), (i.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof i.getSnapshotBeforeUpdate ||
              ("function" !== typeof i.UNSAFE_componentWillMount &&
                "function" !== typeof i.componentWillMount) ||
              ((t = i.state),
              "function" === typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && qo.enqueueReplaceState(i, i.state, null),
              Fo(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" === typeof i.componentDidMount && (e.flags |= 4194308);
        }
        function Yo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = r,
                a = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === a
                ? t.ref
                : ((t = function (e) {
                    var t = i.refs;
                    t === Ho && (t = i.refs = {}),
                      null === e ? delete t[a] : (t[a] = e);
                  }),
                  (t._stringRef = a),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Xo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Go(e) {
          return (0, e._init)(e._payload);
        }
        function Ko(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = zu(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var o = n.type;
            return o === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === L &&
                    Go(o) === t.type))
              ? (((r = i(t, n.props)).ref = Yo(e, t, n)), (r.return = e), r)
              : (((r = ju(n.type, n.key, n.props, null, e.mode, r)).ref = Yo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ru(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Mu(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case _:
                  return (
                    ((n = ju(t.type, t.key, t.props, null, e.mode, n)).ref = Yo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Ru(t, e.mode, n)).return = e), t;
                case L:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || j(t))
                return ((t = Mu(t, e.mode, n, null)).return = e), t;
              Xo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== i ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case _:
                  return n.key === i ? u(e, t, n, r) : null;
                case w:
                  return n.key === i ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (i = n._init)(n._payload), r);
              }
              if (te(n) || j(n)) return null !== i ? null : d(e, t, n, r, null);
              Xo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, i);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case _:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), i);
              }
              if (te(r) || j(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              Xo(t, r);
            }
            return null;
          }
          function m(i, o, l, s) {
            for (
              var u = null, c = null, d = o, m = (o = 0), A = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((A = d), (d = null)) : (A = d.sibling);
              var g = p(i, d, l[m], s);
              if (null === g) {
                null === d && (d = A);
                break;
              }
              e && d && null === g.alternate && t(i, d),
                (o = a(g, o, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = A);
            }
            if (m === l.length) return n(i, d), io && Ji(i, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(i, l[m], s)) &&
                  ((o = a(d, o, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return io && Ji(i, m), u;
            }
            for (d = r(i, d); m < l.length; m++)
              null !== (A = h(d, i, m, l[m], s)) &&
                (e &&
                  null !== A.alternate &&
                  d.delete(null === A.key ? m : A.key),
                (o = a(A, o, m)),
                null === c ? (u = A) : (c.sibling = A),
                (c = A));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              io && Ji(i, m),
              u
            );
          }
          function A(i, l, s, u) {
            var c = j(s);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (s = c.call(s))) throw Error(o(151));
            for (
              var d = (c = null), m = l, A = (l = 0), g = null, v = s.next();
              null !== m && !v.done;
              A++, v = s.next()
            ) {
              m.index > A ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(i, m, v.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(i, m),
                (l = a(b, l, A)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (v.done) return n(i, m), io && Ji(i, A), c;
            if (null === m) {
              for (; !v.done; A++, v = s.next())
                null !== (v = f(i, v.value, u)) &&
                  ((l = a(v, l, A)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return io && Ji(i, A), c;
            }
            for (m = r(i, m); !v.done; A++, v = s.next())
              null !== (v = h(m, i, A, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? A : v.key),
                (l = a(v, l, A)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(i, e);
                }),
              io && Ji(i, A),
              c
            );
          }
          return function e(r, o, a, s) {
            if (
              ("object" === typeof a &&
                null !== a &&
                a.type === k &&
                null === a.key &&
                (a = a.props.children),
              "object" === typeof a && null !== a)
            ) {
              switch (a.$$typeof) {
                case _:
                  e: {
                    for (var u = a.key, c = o; null !== c; ) {
                      if (c.key === u) {
                        if ((u = a.type) === k) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = i(c, a.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Go(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = i(c, a.props)).ref = Yo(r, c, a)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    a.type === k
                      ? (((o = Mu(a.props.children, r.mode, s, a.key)).return =
                          r),
                        (r = o))
                      : (((s = ju(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          r.mode,
                          s
                        )).ref = Yo(r, o, a)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case w:
                  e: {
                    for (c = a.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === a.containerInfo &&
                          o.stateNode.implementation === a.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = i(o, a.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Ru(a, r.mode, s)).return = r), (r = o);
                  }
                  return l(r);
                case L:
                  return e(r, o, (c = a._init)(a._payload), s);
              }
              if (te(a)) return m(r, o, a, s);
              if (j(a)) return A(r, o, a, s);
              Xo(r, a);
            }
            return ("string" === typeof a && "" !== a) || "number" === typeof a
              ? ((a = "" + a),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = i(o, a)).return = r), (r = o))
                  : (n(r, o), ((o = Fu(a, r.mode, s)).return = r), (r = o)),
                l(r))
              : n(r, o);
          };
        }
        var Zo = Ko(!0),
          Jo = Ko(!1),
          $o = {},
          ea = xi($o),
          ta = xi($o),
          na = xi($o);
        function ra(e) {
          if (e === $o) throw Error(o(174));
          return e;
        }
        function ia(e, t) {
          switch ((Ei(na, t), Ei(ta, e), Ei(ea, $o), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Si(ea), Ei(ea, t);
        }
        function oa() {
          Si(ea), Si(ta), Si(na);
        }
        function aa(e) {
          ra(na.current);
          var t = ra(ea.current),
            n = se(t, e.type);
          t !== n && (Ei(ta, e), Ei(ea, n));
        }
        function la(e) {
          ta.current === e && (Si(ea), Si(ta));
        }
        var sa = xi(0);
        function ua(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ca = [];
        function da() {
          for (var e = 0; e < ca.length; e++)
            ca[e]._workInProgressVersionPrimary = null;
          ca.length = 0;
        }
        var fa = y.ReactCurrentDispatcher,
          pa = y.ReactCurrentBatchConfig,
          ha = 0,
          ma = null,
          Aa = null,
          ga = null,
          va = !1,
          ba = !1,
          ya = 0,
          _a = 0;
        function wa() {
          throw Error(o(321));
        }
        function ka(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function xa(e, t, n, r, i, a) {
          if (
            ((ha = a),
            (ma = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fa.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, i)),
            ba)
          ) {
            a = 0;
            do {
              if (((ba = !1), (ya = 0), 25 <= a)) throw Error(o(301));
              (a += 1),
                (ga = Aa = null),
                (t.updateQueue = null),
                (fa.current = ul),
                (e = n(r, i));
            } while (ba);
          }
          if (
            ((fa.current = al),
            (t = null !== Aa && null !== Aa.next),
            (ha = 0),
            (ga = Aa = ma = null),
            (va = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Sa() {
          var e = 0 !== ya;
          return (ya = 0), e;
        }
        function Ea() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ga ? (ma.memoizedState = ga = e) : (ga = ga.next = e), ga
          );
        }
        function Ca() {
          if (null === Aa) {
            var e = ma.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Aa.next;
          var t = null === ga ? ma.memoizedState : ga.next;
          if (null !== t) (ga = t), (Aa = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (Aa = e).memoizedState,
              baseState: Aa.baseState,
              baseQueue: Aa.baseQueue,
              queue: Aa.queue,
              next: null,
            }),
              null === ga ? (ma.memoizedState = ga = e) : (ga = ga.next = e);
          }
          return ga;
        }
        function Ta(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Pa(e) {
          var t = Ca(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = Aa,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var l = i.next;
              (i.next = a.next), (a.next = l);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (a = i.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = a;
            do {
              var d = c.lane;
              if ((ha & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (ma.lanes |= d),
                  (Is |= d);
              }
              c = c.next;
            } while (null !== c && c !== a);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (yl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            i = e;
            do {
              (a = i.lane), (ma.lanes |= a), (Is |= a), (i = i.next);
            } while (i !== e);
          } else null === i && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Oa(e) {
          var t = Ca(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var l = (i = i.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== i);
            lr(a, t.memoizedState) || (yl = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function Na() {}
        function La(e, t) {
          var n = ma,
            r = Ca(),
            i = t(),
            a = !lr(r.memoizedState, i);
          if (
            (a && ((r.memoizedState = i), (yl = !0)),
            (r = r.queue),
            Wa(ja.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              a ||
              (null !== ga && 1 & ga.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ra(9, za.bind(null, n, r, i, t), void 0, null),
              null === Os)
            )
              throw Error(o(349));
            0 !== (30 & ha) || Da(n, t, i);
          }
          return i;
        }
        function Da(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ma.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ma.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function za(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ma(t) && Ia(e);
        }
        function ja(e, t, n) {
          return n(function () {
            Ma(t) && Ia(e);
          });
        }
        function Ma(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Ia(e) {
          var t = Oo(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Fa(e) {
          var t = Ea();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ta,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, ma, e)),
            [t.memoizedState, e]
          );
        }
        function Ra(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ma.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ma.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ha() {
          return Ca().memoizedState;
        }
        function Ba(e, t, n, r) {
          var i = Ea();
          (ma.flags |= e),
            (i.memoizedState = Ra(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function qa(e, t, n, r) {
          var i = Ca();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== Aa) {
            var a = Aa.memoizedState;
            if (((o = a.destroy), null !== r && ka(r, a.deps)))
              return void (i.memoizedState = Ra(t, n, o, r));
          }
          (ma.flags |= e), (i.memoizedState = Ra(1 | t, n, o, r));
        }
        function Ua(e, t) {
          return Ba(8390656, 8, e, t);
        }
        function Wa(e, t) {
          return qa(2048, 8, e, t);
        }
        function Va(e, t) {
          return qa(4, 2, e, t);
        }
        function Qa(e, t) {
          return qa(4, 4, e, t);
        }
        function Ya(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Xa(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            qa(4, 4, Ya.bind(null, t, e), n)
          );
        }
        function Ga() {}
        function Ka(e, t) {
          var n = Ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ka(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Za(e, t) {
          var n = Ca();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ka(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ja(e, t, n) {
          return 0 === (21 & ha)
            ? (e.baseState && ((e.baseState = !1), (yl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = mt()), (ma.lanes |= n), (Is |= n), (e.baseState = !0)),
              t);
        }
        function $a(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = pa.transition;
          pa.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (pa.transition = r);
          }
        }
        function el() {
          return Ca().memoizedState;
        }
        function tl(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            il(t, n);
          else if (null !== (n = Po(e, t, n, r))) {
            ru(n, e, r, tu()), ol(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = nu(e),
            i = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) il(t, i);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var a = t.lastRenderedState,
                  l = o(a, n);
                if (((i.hasEagerState = !0), (i.eagerState = l), lr(l, a))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((i.next = i), To(t))
                      : ((i.next = s.next), (s.next = i)),
                    void (t.interleaved = i)
                  );
                }
              } catch (u) {}
            null !== (n = Po(e, t, i, r)) &&
              (ru(n, e, r, (i = tu())), ol(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === ma || (null !== t && t === ma);
        }
        function il(e, t) {
          ba = va = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ol(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var al = {
            readContext: Eo,
            useCallback: wa,
            useContext: wa,
            useEffect: wa,
            useImperativeHandle: wa,
            useInsertionEffect: wa,
            useLayoutEffect: wa,
            useMemo: wa,
            useReducer: wa,
            useRef: wa,
            useState: wa,
            useDebugValue: wa,
            useDeferredValue: wa,
            useTransition: wa,
            useMutableSource: wa,
            useSyncExternalStore: wa,
            useId: wa,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Eo,
            useCallback: function (e, t) {
              return (Ea().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Eo,
            useEffect: Ua,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ba(4194308, 4, Ya.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ba(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ba(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ea();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ea();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, ma, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ea().memoizedState = e);
            },
            useState: Fa,
            useDebugValue: Ga,
            useDeferredValue: function (e) {
              return (Ea().memoizedState = e);
            },
            useTransition: function () {
              var e = Fa(!1),
                t = e[0];
              return (
                (e = $a.bind(null, e[1])), (Ea().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ma,
                i = Ea();
              if (io) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Os)) throw Error(o(349));
                0 !== (30 & ha) || Da(r, t, n);
              }
              i.memoizedState = n;
              var a = { value: n, getSnapshot: t };
              return (
                (i.queue = a),
                Ua(ja.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Ra(9, za.bind(null, r, a, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ea(),
                t = Os.identifierPrefix;
              if (io) {
                var n = Zi;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ki & ~(1 << (32 - at(Ki) - 1))).toString(32) + n)),
                  0 < (n = ya++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = _a++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Eo,
            useCallback: Ka,
            useContext: Eo,
            useEffect: Wa,
            useImperativeHandle: Xa,
            useInsertionEffect: Va,
            useLayoutEffect: Qa,
            useMemo: Za,
            useReducer: Pa,
            useRef: Ha,
            useState: function () {
              return Pa(Ta);
            },
            useDebugValue: Ga,
            useDeferredValue: function (e) {
              return Ja(Ca(), Aa.memoizedState, e);
            },
            useTransition: function () {
              return [Pa(Ta)[0], Ca().memoizedState];
            },
            useMutableSource: Na,
            useSyncExternalStore: La,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Eo,
            useCallback: Ka,
            useContext: Eo,
            useEffect: Wa,
            useImperativeHandle: Xa,
            useInsertionEffect: Va,
            useLayoutEffect: Qa,
            useMemo: Za,
            useReducer: Oa,
            useRef: Ha,
            useState: function () {
              return Oa(Ta);
            },
            useDebugValue: Ga,
            useDeferredValue: function (e) {
              var t = Ca();
              return null === Aa
                ? (t.memoizedState = e)
                : Ja(t, Aa.memoizedState, e);
            },
            useTransition: function () {
              return [Oa(Ta)[0], Ca().memoizedState];
            },
            useMutableSource: Na,
            useSyncExternalStore: La,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (o) {
            i = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: i, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = zo(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Vs || ((Vs = !0), (Qs = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = zo(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var i = t.value;
            (n.payload = function () {
              return r(i);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Ys ? (Ys = new Set([this])) : Ys.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function Al(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var i = new Set();
            r.set(t, i);
          } else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
          i.has(n) || (i.add(n), (e = Eu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, i) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zo(-1, 1)).tag = 2), jo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = i), e);
        }
        var bl = y.ReactCurrentOwner,
          yl = !1;
        function _l(e, t, n, r) {
          t.child = null === e ? Jo(t, null, n, r) : Zo(t, e.child, n, r);
        }
        function wl(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            So(t, i),
            (r = xa(e, t, n, r, o, i)),
            (n = Sa()),
            null === e || yl
              ? (io && n && eo(t), (t.flags |= 1), _l(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Vl(e, t, i))
          );
        }
        function kl(e, t, n, r, i) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Du(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = ju(n.type, null, r, t, t.mode, i)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), xl(e, t, o, r, i));
          }
          if (((o = e.child), 0 === (e.lanes & i))) {
            var a = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(a, r) &&
              e.ref === t.ref
            )
              return Vl(e, t, i);
          }
          return (
            (t.flags |= 1),
            ((e = zu(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function xl(e, t, n, r, i) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (sr(o, r) && e.ref === t.ref) {
              if (((yl = !1), (t.pendingProps = r = o), 0 === (e.lanes & i)))
                return (t.lanes = e.lanes), Vl(e, t, i);
              0 !== (131072 & e.flags) && (yl = !0);
            }
          }
          return Cl(e, t, n, r, i);
        }
        function Sl(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ei(zs, Ds),
                (Ds |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ei(zs, Ds),
                  (Ds |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ei(zs, Ds),
                (Ds |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ei(zs, Ds),
              (Ds |= r);
          return _l(e, t, i, n), t.child;
        }
        function El(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Cl(e, t, n, r, i) {
          var o = Li(n) ? Oi : Ti.current;
          return (
            (o = Ni(t, o)),
            So(t, i),
            (n = xa(e, t, n, r, o, i)),
            (r = Sa()),
            null === e || yl
              ? (io && r && eo(t), (t.flags |= 1), _l(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~i),
                Vl(e, t, i))
          );
        }
        function Tl(e, t, n, r, i) {
          if (Li(n)) {
            var o = !0;
            Mi(t);
          } else o = !1;
          if ((So(t, i), null === t.stateNode))
            Wl(e, t), Wo(t, n, r), Qo(t, n, r, i), (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var s = a.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Eo(u))
              : (u = Ni(t, (u = Li(n) ? Oi : Ti.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof a.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Vo(t, a, r, u)),
              (No = !1);
            var f = t.memoizedState;
            (a.state = f),
              Fo(t, r, a, i),
              (s = t.memoizedState),
              l !== r || f !== s || Pi.current || No
                ? ("function" === typeof c &&
                    (Bo(t, n, c, r), (s = t.memoizedState)),
                  (l = No || Uo(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof a.UNSAFE_componentWillMount &&
                          "function" !== typeof a.componentWillMount) ||
                        ("function" === typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" === typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (a.props = r),
                  (a.state = s),
                  (a.context = u),
                  (r = l))
                : ("function" === typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (a = t.stateNode),
              Do(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : go(t.type, l)),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Eo(s))
                : (s = Ni(t, (s = Li(n) ? Oi : Ti.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== d || f !== s) && Vo(t, a, r, s)),
              (No = !1),
              (f = t.memoizedState),
              (a.state = f),
              Fo(t, r, a, i);
            var h = t.memoizedState;
            l !== d || f !== h || Pi.current || No
              ? ("function" === typeof p &&
                  (Bo(t, n, p, r), (h = t.memoizedState)),
                (u = No || Uo(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = s),
                (r = u))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Pl(e, t, n, r, o, i);
        }
        function Pl(e, t, n, r, i, o) {
          El(e, t);
          var a = 0 !== (128 & t.flags);
          if (!r && !a) return i && Ii(t, n, !1), Vl(e, t, o);
          (r = t.stateNode), (bl.current = t);
          var l =
            a && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Zo(t, e.child, null, o)),
                (t.child = Zo(t, null, l, o)))
              : _l(e, t, l, o),
            (t.memoizedState = r.state),
            i && Ii(t, n, !0),
            t.child
          );
        }
        function Ol(e) {
          var t = e.stateNode;
          t.pendingContext
            ? zi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && zi(0, t.context, !1),
            ia(e, t.containerInfo);
        }
        function Nl(e, t, n, r, i) {
          return ho(), mo(i), (t.flags |= 256), _l(e, t, n, r), t.child;
        }
        var Ll,
          Dl,
          zl,
          jl,
          Ml = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Il(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fl(e, t, n) {
          var r,
            i = t.pendingProps,
            a = sa.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (a |= 1),
            Ei(sa, 1 & a),
            null === e)
          )
            return (
              uo(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = i.children),
                  (e = i.fallback),
                  l
                    ? ((i = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & i) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Iu(s, i, 0, null)),
                      (e = Mu(e, i, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Il(n)),
                      (t.memoizedState = Ml),
                      e)
                    : Rl(t, s))
            );
          if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
            return (function (e, t, n, r, i, a, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Hl(e, t, l, (r = dl(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((a = r.fallback),
                    (i = t.mode),
                    (r = Iu(
                      { mode: "visible", children: r.children },
                      i,
                      0,
                      null
                    )),
                    ((a = Mu(a, i, l, null)).flags |= 2),
                    (r.return = t),
                    (a.return = t),
                    (r.sibling = a),
                    (t.child = r),
                    0 !== (1 & t.mode) && Zo(t, e.child, null, l),
                    (t.child.memoizedState = Il(l)),
                    (t.memoizedState = Ml),
                    a);
              if (0 === (1 & t.mode)) return Hl(e, t, l, null);
              if ("$!" === i.data) {
                if ((r = i.nextSibling && i.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Hl(e, t, l, (r = dl((a = Error(o(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), yl || s)) {
                if (null !== (r = Os)) {
                  switch (l & -l) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (i = 0 !== (i & (r.suspendedLanes | l)) ? 0 : i) &&
                    i !== a.retryLane &&
                    ((a.retryLane = i), Oo(e, i), ru(r, e, i, -1));
                }
                return Au(), Hl(e, t, l, (r = dl(Error(o(421)))));
              }
              return "$?" === i.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (i._reactRetry = t),
                  null)
                : ((e = a.treeContext),
                  (ro = ui(i.nextSibling)),
                  (no = t),
                  (io = !0),
                  (oo = null),
                  null !== e &&
                    ((Yi[Xi++] = Ki),
                    (Yi[Xi++] = Zi),
                    (Yi[Xi++] = Gi),
                    (Ki = e.id),
                    (Zi = e.overflow),
                    (Gi = t)),
                  (t = Rl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, i, r, a, n);
          if (l) {
            (l = i.fallback), (s = t.mode), (r = (a = e.child).sibling);
            var u = { mode: "hidden", children: i.children };
            return (
              0 === (1 & s) && t.child !== a
                ? (((i = t.child).childLanes = 0),
                  (i.pendingProps = u),
                  (t.deletions = null))
                : ((i = zu(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
              null !== r
                ? (l = zu(r, l))
                : ((l = Mu(l, s, n, null)).flags |= 2),
              (l.return = t),
              (i.return = t),
              (i.sibling = l),
              (t.child = i),
              (i = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Il(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ml),
              i
            );
          }
          return (
            (e = (l = e.child).sibling),
            (i = zu(l, { mode: "visible", children: i.children })),
            0 === (1 & t.mode) && (i.lanes = n),
            (i.return = t),
            (i.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = i),
            (t.memoizedState = null),
            i
          );
        }
        function Rl(e, t) {
          return (
            ((t = Iu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Hl(e, t, n, r) {
          return (
            null !== r && mo(r),
            Zo(t, e.child, null, n),
            ((e = Rl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), xo(e.return, t, n);
        }
        function ql(e, t, n, r, i) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((_l(e, t, r.children, n), 0 !== (2 & (r = sa.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bl(e, n, t);
                else if (19 === e.tag) Bl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ei(sa, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === ua(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  ql(t, !1, i, n, o);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === ua(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                ql(t, !0, n, null, o);
                break;
              case "together":
                ql(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Vl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Is |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = zu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Ql(e, t) {
          if (!io)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Yl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= 14680064 & i.subtreeFlags),
                (r |= 14680064 & i.flags),
                (i.return = e),
                (i = i.sibling);
          else
            for (i = e.child; null !== i; )
              (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xl(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Yl(t), null;
            case 1:
            case 17:
              return Li(t.type) && Di(), Yl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                oa(),
                Si(Pi),
                Si(Ti),
                da(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (lu(oo), (oo = null)))),
                Dl(e, t),
                Yl(t),
                null
              );
            case 5:
              la(t);
              var i = ra(na.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                zl(e, t, n, r, i),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return Yl(t), null;
                }
                if (((e = ra(ea.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var a = t.memoizedProps;
                  switch (
                    ((r[fi] = t), (r[pi] = a), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Rr("cancel", r), Rr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Rr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < jr.length; i++) Rr(jr[i], r);
                      break;
                    case "source":
                      Rr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Rr("error", r), Rr("load", r);
                      break;
                    case "details":
                      Rr("toggle", r);
                      break;
                    case "input":
                      K(r, a), Rr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!a.multiple }),
                        Rr("invalid", r);
                      break;
                    case "textarea":
                      ie(r, a), Rr("invalid", r);
                  }
                  for (var s in (ve(n, a), (i = null), a))
                    if (a.hasOwnProperty(s)) {
                      var u = a[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== a.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (i = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          Rr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), $(r, a, !0);
                      break;
                    case "textarea":
                      Q(r), ae(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof a.onClick && (r.onclick = $r);
                  }
                  (r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === i.nodeType ? i : i.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fi] = t),
                    (e[pi] = r),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        Rr("cancel", e), Rr("close", e), (i = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Rr("load", e), (i = r);
                        break;
                      case "video":
                      case "audio":
                        for (i = 0; i < jr.length; i++) Rr(jr[i], e);
                        i = r;
                        break;
                      case "source":
                        Rr("error", e), (i = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Rr("error", e), Rr("load", e), (i = r);
                        break;
                      case "details":
                        Rr("toggle", e), (i = r);
                        break;
                      case "input":
                        K(e, r), (i = G(e, r)), Rr("invalid", e);
                        break;
                      case "option":
                      default:
                        i = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (i = I({}, r, { value: void 0 })),
                          Rr("invalid", e);
                        break;
                      case "textarea":
                        ie(e, r), (i = re(e, r)), Rr("invalid", e);
                    }
                    for (a in (ve(n, i), (u = i)))
                      if (u.hasOwnProperty(a)) {
                        var c = u[a];
                        "style" === a
                          ? Ae(e, c)
                          : "dangerouslySetInnerHTML" === a
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === a
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== a &&
                            "suppressHydrationWarning" !== a &&
                            "autoFocus" !== a &&
                            (l.hasOwnProperty(a)
                              ? null != c && "onScroll" === a && Rr("scroll", e)
                              : null != c && b(e, a, c, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), $(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ae(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (a = r.value)
                            ? ne(e, !!r.multiple, a, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof i.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Yl(t), null;
            case 6:
              if (e && null != t.stateNode) jl(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = ra(na.current)), ra(ea.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fi] = t),
                    (a = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  a && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fi] = t),
                    (t.stateNode = r);
              }
              return Yl(t), null;
            case 13:
              if (
                (Si(sa),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  io &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (a = !1);
                else if (((a = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(o(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(o(317));
                    a[fi] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Yl(t), (a = !1);
                } else null !== oo && (lu(oo), (oo = null)), (a = !0);
                if (!a) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & sa.current)
                        ? 0 === js && (js = 3)
                        : Au())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Yl(t),
                  null);
            case 4:
              return (
                oa(),
                Dl(e, t),
                null === e && qr(t.stateNode.containerInfo),
                Yl(t),
                null
              );
            case 10:
              return ko(t.type._context), Yl(t), null;
            case 19:
              if ((Si(sa), null === (a = t.memoizedState))) return Yl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = a.rendering)))
                if (r) Ql(a, !1);
                else {
                  if (0 !== js || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ua(e))) {
                        for (
                          t.flags |= 128,
                            Ql(a, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((a = n).flags &= 14680066),
                            null === (s = a.alternate)
                              ? ((a.childLanes = 0),
                                (a.lanes = e),
                                (a.child = null),
                                (a.subtreeFlags = 0),
                                (a.memoizedProps = null),
                                (a.memoizedState = null),
                                (a.updateQueue = null),
                                (a.dependencies = null),
                                (a.stateNode = null))
                              : ((a.childLanes = s.childLanes),
                                (a.lanes = s.lanes),
                                (a.child = s.child),
                                (a.subtreeFlags = 0),
                                (a.deletions = null),
                                (a.memoizedProps = s.memoizedProps),
                                (a.memoizedState = s.memoizedState),
                                (a.updateQueue = s.updateQueue),
                                (a.type = s.type),
                                (e = s.dependencies),
                                (a.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ei(sa, (1 & sa.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== a.tail &&
                    Ze() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    Ql(a, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ua(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ql(a, !0),
                      null === a.tail &&
                        "hidden" === a.tailMode &&
                        !s.alternate &&
                        !io)
                    )
                      return Yl(t), null;
                  } else
                    2 * Ze() - a.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Ql(a, !1),
                      (t.lanes = 4194304));
                a.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = a.last) ? (n.sibling = s) : (t.child = s),
                    (a.last = s));
              }
              return null !== a.tail
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = sa.current),
                  Ei(sa, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Yl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ds) &&
                    (Yl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Yl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Gl(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Li(t.type) && Di(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                oa(),
                Si(Pi),
                Si(Ti),
                da(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return la(t), null;
            case 13:
              if (
                (Si(sa),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Si(sa), null;
            case 4:
              return oa(), null;
            case 10:
              return ko(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ll = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Dl = function () {}),
          (zl = function (e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), ra(ea.current);
              var o,
                a = null;
              switch (n) {
                case "input":
                  (i = G(e, i)), (r = G(e, r)), (a = []);
                  break;
                case "select":
                  (i = I({}, i, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (a = []);
                  break;
                case "textarea":
                  (i = re(e, i)), (r = re(e, r)), (a = []);
                  break;
                default:
                  "function" !== typeof i.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ve(n, r), (n = null), i))
                if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
                  if ("style" === c) {
                    var s = i[c];
                    for (o in s)
                      s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? a || (a = [])
                        : (a = a || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != i ? i[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (o in s)
                        !s.hasOwnProperty(o) ||
                          (u && u.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in u)
                        u.hasOwnProperty(o) &&
                          s[o] !== u[o] &&
                          (n || (n = {}), (n[o] = u[o]));
                    } else n || (a || (a = []), a.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (a = a || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (a = a || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Rr("scroll", e),
                            a || s === u || (a = []))
                          : (a = a || []).push(c, u));
              }
              n && (a = a || []).push("style", n);
              var c = a;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (jl = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Kl = !1,
          Zl = !1,
          Jl = "function" === typeof WeakSet ? WeakSet : Set,
          $l = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Su(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var i = (r = r.next);
            do {
              if ((i.tag & e) === e) {
                var o = i.destroy;
                (i.destroy = void 0), void 0 !== o && ts(t, n, o);
              }
              i = i.next;
            } while (i !== r);
          }
        }
        function is(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function os(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function as(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), as(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fi],
              delete t[pi],
              delete t[mi],
              delete t[Ai],
              delete t[gi]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(it, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Zl || es(n, t);
            case 6:
              var r = ds,
                i = fs;
              (ds = null),
                ps(e, t, n),
                (fs = i),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? si(e.parentNode, n)
                      : 1 === e.nodeType && si(e, n),
                    qt(e))
                  : si(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (i = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = i);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Zl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                i = r = r.next;
                do {
                  var o = i,
                    a = o.destroy;
                  (o = o.tag),
                    void 0 !== a &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      ts(n, t, a),
                    (i = i.next);
                } while (i !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Zl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Su(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Zl = (r = Zl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Zl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var r = Pu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function As(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var i = n[r];
              try {
                var a = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(o(160));
                hs(a, l, i), (ds = null), (fs = !1);
                var u = i.alternate;
                null !== u && (u.return = null), (i.return = null);
              } catch (c) {
                Su(i, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gs(t, e), (t = t.sibling);
        }
        function gs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((As(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), is(3, e);
                } catch (A) {
                  Su(e, e.return, A);
                }
                try {
                  rs(5, e, e.return);
                } catch (A) {
                  Su(e, e.return, A);
                }
              }
              break;
            case 1:
              As(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (As(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var i = e.stateNode;
                try {
                  fe(i, "");
                } catch (A) {
                  Su(e, e.return, A);
                }
              }
              if (4 & r && null != (i = e.stateNode)) {
                var a = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : a,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === a.type &&
                      null != a.name &&
                      Z(i, a),
                      be(s, l);
                    var c = be(s, a);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? Ae(i, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(i, f)
                        : "children" === d
                        ? fe(i, f)
                        : b(i, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(i, a);
                        break;
                      case "textarea":
                        oe(i, a);
                        break;
                      case "select":
                        var p = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!a.multiple;
                        var h = a.value;
                        null != h
                          ? ne(i, !!a.multiple, h, !1)
                          : p !== !!a.multiple &&
                            (null != a.defaultValue
                              ? ne(i, !!a.multiple, a.defaultValue, !0)
                              : ne(i, !!a.multiple, a.multiple ? [] : "", !1));
                    }
                    i[pi] = a;
                  } catch (A) {
                    Su(e, e.return, A);
                  }
              }
              break;
            case 6:
              if ((As(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (i = e.stateNode), (a = e.memoizedProps);
                try {
                  i.nodeValue = a;
                } catch (A) {
                  Su(e, e.return, A);
                }
              }
              break;
            case 3:
              if (
                (As(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (A) {
                  Su(e, e.return, A);
                }
              break;
            case 4:
            default:
              As(t, e), vs(e);
              break;
            case 13:
              As(t, e),
                vs(e),
                8192 & (i = e.child).flags &&
                  ((a = null !== i.memoizedState),
                  (i.stateNode.isHidden = a),
                  !a ||
                    (null !== i.alternate &&
                      null !== i.alternate.memoizedState) ||
                    (qs = Ze())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Zl = (c = Zl) || d), As(t, e), (Zl = c))
                  : As(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for ($l = e, d = e.child; null !== d; ) {
                    for (f = $l = d; null !== $l; ) {
                      switch (((h = (p = $l).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (A) {
                              Su(r, n, A);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), ($l = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (i = f.stateNode),
                          c
                            ? "function" === typeof (a = i.style).setProperty
                              ? a.setProperty("display", "none", "important")
                              : (a.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = me("display", l)));
                      } catch (A) {
                        Su(e, e.return, A);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (A) {
                        Su(e, e.return, A);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              As(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var i = r.stateNode;
                  32 & r.flags && (fe(i, ""), (r.flags &= -33)),
                    cs(e, ss(e), i);
                  break;
                case 3:
                case 4:
                  var a = r.stateNode.containerInfo;
                  us(e, ss(e), a);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (l) {
              Su(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          ($l = e), ys(e, t, n);
        }
        function ys(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== $l; ) {
            var i = $l,
              o = i.child;
            if (22 === i.tag && r) {
              var a = null !== i.memoizedState || Kl;
              if (!a) {
                var l = i.alternate,
                  s = (null !== l && null !== l.memoizedState) || Zl;
                l = Kl;
                var u = Zl;
                if (((Kl = a), (Zl = s) && !u))
                  for ($l = i; null !== $l; )
                    (s = (a = $l).child),
                      22 === a.tag && null !== a.memoizedState
                        ? ks(i)
                        : null !== s
                        ? ((s.return = a), ($l = s))
                        : ks(i);
                for (; null !== o; ) ($l = o), ys(o, t, n), (o = o.sibling);
                ($l = i), (Kl = l), (Zl = u);
              }
              _s(e);
            } else
              0 !== (8772 & i.subtreeFlags) && null !== o
                ? ((o.return = i), ($l = o))
                : _s(e);
          }
        }
        function _s(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Zl || is(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Zl)
                        if (null === n) r.componentDidMount();
                        else {
                          var i =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : go(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            i,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var a = t.updateQueue;
                      null !== a && Ro(t, a, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ro(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && qt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Zl || (512 & t.flags && os(t));
              } catch (p) {
                Su(t, t.return, p);
              }
            }
            if (t === e) {
              $l = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function ws(e) {
          for (; null !== $l; ) {
            var t = $l;
            if (t === e) {
              $l = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), ($l = n);
              break;
            }
            $l = t.return;
          }
        }
        function ks(e) {
          for (; null !== $l; ) {
            var t = $l;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    is(4, t);
                  } catch (s) {
                    Su(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var i = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Su(t, i, s);
                    }
                  }
                  var o = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Su(t, o, s);
                  }
                  break;
                case 5:
                  var a = t.return;
                  try {
                    os(t);
                  } catch (s) {
                    Su(t, a, s);
                  }
              }
            } catch (s) {
              Su(t, t.return, s);
            }
            if (t === e) {
              $l = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), ($l = l);
              break;
            }
            $l = t.return;
          }
        }
        var xs,
          Ss = Math.ceil,
          Es = y.ReactCurrentDispatcher,
          Cs = y.ReactCurrentOwner,
          Ts = y.ReactCurrentBatchConfig,
          Ps = 0,
          Os = null,
          Ns = null,
          Ls = 0,
          Ds = 0,
          zs = xi(0),
          js = 0,
          Ms = null,
          Is = 0,
          Fs = 0,
          Rs = 0,
          Hs = null,
          Bs = null,
          qs = 0,
          Us = 1 / 0,
          Ws = null,
          Vs = !1,
          Qs = null,
          Ys = null,
          Xs = !1,
          Gs = null,
          Ks = 0,
          Zs = 0,
          Js = null,
          $s = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ps) ? Ze() : -1 !== $s ? $s : ($s = Ze());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== Ls
            ? Ls & -Ls
            : null !== Ao.transition
            ? (0 === eu && (eu = mt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Zs) throw ((Zs = 0), (Js = null), Error(o(185)));
          gt(e, n, r),
            (0 !== (2 & Ps) && e === Os) ||
              (e === Os && (0 === (2 & Ps) && (Fs |= n), 4 === js && su(e, Ls)),
              iu(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Us = Ze() + 500), Ri && qi()));
        }
        function iu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                i = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var a = 31 - at(o),
                l = 1 << a,
                s = i[a];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (i[a] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (o &= ~l);
            }
          })(e, t);
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r)
            null !== n && Xe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Xe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ri = !0), Bi(e);
                  })(uu.bind(null, e))
                : Bi(uu.bind(null, e)),
                ai(function () {
                  0 === (6 & Ps) && qi();
                }),
                (n = null);
            else {
              switch (yt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ou(n, ou.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ou(e, t) {
          if ((($s = -1), (eu = 0), 0 !== (6 & Ps))) throw Error(o(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = ft(e, e === Os ? Ls : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
          else {
            t = r;
            var i = Ps;
            Ps |= 2;
            var a = mu();
            for (
              (Os === e && Ls === t) ||
              ((Ws = null), (Us = Ze() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            wo(),
              (Es.current = a),
              (Ps = i),
              null !== Ns ? (t = 0) : ((Os = null), (Ls = 0), (t = js));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (i = ht(e)) && ((r = i), (t = au(e, i))),
              1 === t)
            )
              throw ((n = Ms), pu(e, 0), su(e, r), iu(e, Ze()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((i = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var i = n[r],
                              o = i.getSnapshot;
                            i = i.value;
                            try {
                              if (!lr(o(), i)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(i) &&
                  (2 === (t = gu(e, r)) &&
                    0 !== (a = ht(e)) &&
                    ((r = a), (t = au(e, a))),
                  1 === t))
              )
                throw ((n = Ms), pu(e, 0), su(e, r), iu(e, Ze()), n);
              switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  wu(e, Bs, Ws);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = qs + 500 - Ze()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((i = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & i);
                      break;
                    }
                    e.timeoutHandle = ri(wu.bind(null, e, Bs, Ws), t);
                    break;
                  }
                  wu(e, Bs, Ws);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, i = -1; 0 < r; ) {
                    var l = 31 - at(r);
                    (a = 1 << l), (l = t[l]) > i && (i = l), (r &= ~a);
                  }
                  if (
                    ((r = i),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ri(wu.bind(null, e, Bs, Ws), r);
                    break;
                  }
                  wu(e, Bs, Ws);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return iu(e, Ze()), e.callbackNode === n ? ou.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Hs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = gu(e, t)) && ((t = Bs), (Bs = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function su(e, t) {
          for (
            t &= ~Rs,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - at(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ps)) throw Error(o(327));
          ku();
          var t = ft(e, 0);
          if (0 === (1 & t)) return iu(e, Ze()), null;
          var n = gu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Ms), pu(e, 0), su(e, t), iu(e, Ze()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Bs, Ws),
            iu(e, Ze()),
            null
          );
        }
        function cu(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Us = Ze() + 500), Ri && qi());
          }
        }
        function du(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ps) && ku();
          var t = Ps;
          Ps |= 1;
          var n = Ts.transition,
            r = bt;
          try {
            if (((Ts.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ts.transition = n), 0 === (6 & (Ps = t)) && qi();
          }
        }
        function fu() {
          (Ds = zs.current), Si(zs);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Di();
                  break;
                case 3:
                  oa(), Si(Pi), Si(Ti), da();
                  break;
                case 5:
                  la(r);
                  break;
                case 4:
                  oa();
                  break;
                case 13:
                case 19:
                  Si(sa);
                  break;
                case 10:
                  ko(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Os = e),
            (Ns = e = zu(e.current, null)),
            (Ls = Ds = t),
            (js = 0),
            (Ms = null),
            (Rs = Fs = Is = 0),
            (Bs = Hs = null),
            null !== Co)
          ) {
            for (t = 0; t < Co.length; t++)
              if (null !== (r = (n = Co[t]).interleaved)) {
                n.interleaved = null;
                var i = r.next,
                  o = n.pending;
                if (null !== o) {
                  var a = o.next;
                  (o.next = i), (r.next = a);
                }
                n.pending = r;
              }
            Co = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((wo(), (fa.current = al), va)) {
                for (var r = ma.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                va = !1;
              }
              if (
                ((ha = 0),
                (ga = Aa = ma = null),
                (ba = !1),
                (ya = 0),
                (Cs.current = null),
                null === n || null === n.return)
              ) {
                (js = 1), (Ms = t), (Ns = null);
                break;
              }
              e: {
                var a = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && Al(a, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var A = new Set();
                      A.add(u), (t.updateQueue = A);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    Al(a, c, t), Au();
                    break e;
                  }
                  u = Error(o(426));
                } else if (io && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      vl(g, l, s, 0, t),
                      mo(cl(u, s));
                    break e;
                  }
                }
                (a = u = cl(u, s)),
                  4 !== js && (js = 2),
                  null === Hs ? (Hs = [a]) : Hs.push(a),
                  (a = l);
                do {
                  switch (a.tag) {
                    case 3:
                      (a.flags |= 65536),
                        (t &= -t),
                        (a.lanes |= t),
                        Io(a, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = a.type,
                        b = a.stateNode;
                      if (
                        0 === (128 & a.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Ys || !Ys.has(b))))
                      ) {
                        (a.flags |= 65536),
                          (t &= -t),
                          (a.lanes |= t),
                          Io(a, ml(a, s, t));
                        break e;
                      }
                  }
                  a = a.return;
                } while (null !== a);
              }
              _u(n);
            } catch (y) {
              (t = y), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = Es.current;
          return (Es.current = al), null === e ? al : e;
        }
        function Au() {
          (0 !== js && 3 !== js && 2 !== js) || (js = 4),
            null === Os ||
              (0 === (268435455 & Is) && 0 === (268435455 & Fs)) ||
              su(Os, Ls);
        }
        function gu(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = mu();
          for ((Os === e && Ls === t) || ((Ws = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (i) {
              hu(e, i);
            }
          if ((wo(), (Ps = n), (Es.current = r), null !== Ns))
            throw Error(o(261));
          return (Os = null), (Ls = 0), js;
        }
        function vu() {
          for (; null !== Ns; ) yu(Ns);
        }
        function bu() {
          for (; null !== Ns && !Ge(); ) yu(Ns);
        }
        function yu(e) {
          var t = xs(e.alternate, e, Ds);
          (e.memoizedProps = e.pendingProps),
            null === t ? _u(e) : (Ns = t),
            (Cs.current = null);
        }
        function _u(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xl(n, t, Ds))) return void (Ns = n);
            } else {
              if (null !== (n = Gl(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (js = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === js && (js = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            i = Ts.transition;
          try {
            (Ts.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== Gs);
                if (0 !== (6 & Ps)) throw Error(o(327));
                n = e.finishedWork;
                var i = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var a = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var i = 31 - at(n),
                        o = 1 << i;
                      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
                    }
                  })(e, a),
                  e === Os && ((Ns = Os = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xs ||
                    ((Xs = !0),
                    Ou(tt, function () {
                      return ku(), null;
                    })),
                  (a = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || a)
                ) {
                  (a = Ts.transition), (Ts.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Cs.current = null),
                    (function (e, t) {
                      if (((ei = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var i = r.anchorOffset,
                                a = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, a.nodeType;
                              } catch (_) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== i && 3 !== f.nodeType) ||
                                    (s = l + i),
                                    f !== a ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === i && (s = l),
                                    p === a && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ti = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          $l = t;
                        null !== $l;

                      )
                        if (
                          ((e = (t = $l).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), ($l = e);
                        else
                          for (; null !== $l; ) {
                            t = $l;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var A = m.memoizedProps,
                                        g = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? A
                                            : go(t.type, A),
                                          g
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var y = t.stateNode.containerInfo;
                                    1 === y.nodeType
                                      ? (y.textContent = "")
                                      : 9 === y.nodeType &&
                                        y.documentElement &&
                                        y.removeChild(y.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (_) {
                              Su(t, t.return, _);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), ($l = e);
                              break;
                            }
                            $l = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    gs(n, e),
                    hr(ti),
                    (Wt = !!ei),
                    (ti = ei = null),
                    (e.current = n),
                    bs(n, e, i),
                    Ke(),
                    (Ps = s),
                    (bt = l),
                    (Ts.transition = a);
                } else e.current = n;
                if (
                  (Xs && ((Xs = !1), (Gs = e), (Ks = i)),
                  (a = e.pendingLanes),
                  0 === a && (Ys = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          it,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  iu(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (i = t[n]),
                      r(i.value, { componentStack: i.stack, digest: i.digest });
                if (Vs) throw ((Vs = !1), (e = Qs), (Qs = null), e);
                0 !== (1 & Ks) && 0 !== e.tag && ku(),
                  (a = e.pendingLanes),
                  0 !== (1 & a)
                    ? e === Js
                      ? Zs++
                      : ((Zs = 0), (Js = e))
                    : (Zs = 0),
                  qi();
              })(e, t, n, r);
          } finally {
            (Ts.transition = i), (bt = r);
          }
          return null;
        }
        function ku() {
          if (null !== Gs) {
            var e = yt(Ks),
              t = Ts.transition,
              n = bt;
            try {
              if (((Ts.transition = null), (bt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Ks = 0), 0 !== (6 & Ps)))
                  throw Error(o(331));
                var i = Ps;
                for (Ps |= 4, $l = e.current; null !== $l; ) {
                  var a = $l,
                    l = a.child;
                  if (0 !== (16 & $l.flags)) {
                    var s = a.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for ($l = c; null !== $l; ) {
                          var d = $l;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, a);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), ($l = f);
                          else
                            for (; null !== $l; ) {
                              var p = (d = $l).sibling,
                                h = d.return;
                              if ((as(d), d === c)) {
                                $l = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), ($l = p);
                                break;
                              }
                              $l = h;
                            }
                        }
                      }
                      var m = a.alternate;
                      if (null !== m) {
                        var A = m.child;
                        if (null !== A) {
                          m.child = null;
                          do {
                            var g = A.sibling;
                            (A.sibling = null), (A = g);
                          } while (null !== A);
                        }
                      }
                      $l = a;
                    }
                  }
                  if (0 !== (2064 & a.subtreeFlags) && null !== l)
                    (l.return = a), ($l = l);
                  else
                    e: for (; null !== $l; ) {
                      if (0 !== (2048 & (a = $l).flags))
                        switch (a.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, a, a.return);
                        }
                      var v = a.sibling;
                      if (null !== v) {
                        (v.return = a.return), ($l = v);
                        break e;
                      }
                      $l = a.return;
                    }
                }
                var b = e.current;
                for ($l = b; null !== $l; ) {
                  var y = (l = $l).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== y)
                    (y.return = l), ($l = y);
                  else
                    e: for (l = b; null !== $l; ) {
                      if (0 !== (2048 & (s = $l).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              is(9, s);
                          }
                        } catch (w) {
                          Su(s, s.return, w);
                        }
                      if (s === l) {
                        $l = null;
                        break e;
                      }
                      var _ = s.sibling;
                      if (null !== _) {
                        (_.return = s.return), ($l = _);
                        break e;
                      }
                      $l = s.return;
                    }
                }
                if (
                  ((Ps = i),
                  qi(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(it, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function xu(e, t, n) {
          (e = jo(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (gt(e, 1, t), iu(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) xu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                xu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Ys || !Ys.has(r)))
                ) {
                  (t = jo(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (gt(t, 1, e), iu(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Os === e &&
              (Ls & n) === n &&
              (4 === js ||
              (3 === js && (130023424 & Ls) === Ls && 500 > Ze() - qs)
                ? pu(e, 0)
                : (Rs |= n)),
            iu(e, t);
        }
        function Cu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = Oo(e, t)) && (gt(e, t, n), iu(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cu(e, n);
        }
        function Pu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                i = e.memoizedState;
              null !== i && (n = i.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cu(e, n);
        }
        function Ou(e, t) {
          return Ye(e, t);
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function Du(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function zu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function ju(e, t, n, r, i, a) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Du(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case k:
                return Mu(n.children, i, a, t);
              case x:
                (l = 8), (i |= 8);
                break;
              case S:
                return (
                  ((e = Lu(12, n, t, 2 | i)).elementType = S), (e.lanes = a), e
                );
              case P:
                return (
                  ((e = Lu(13, n, t, i)).elementType = P), (e.lanes = a), e
                );
              case O:
                return (
                  ((e = Lu(19, n, t, i)).elementType = O), (e.lanes = a), e
                );
              case D:
                return Iu(n, i, a, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      l = 10;
                      break e;
                    case C:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case N:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(l, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Mu(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Iu(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = D),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Ru(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Hu(e, t, n, r, i) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = At(0)),
            (this.expirationTimes = At(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = At(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = i),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bu(e, t, n, r, i, o, a, l, s) {
          return (
            (e = new Hu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Lu(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Lo(o),
            e
          );
        }
        function qu(e) {
          if (!e) return Ci;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Li(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Li(n)) return ji(e, n, t);
          }
          return t;
        }
        function Uu(e, t, n, r, i, o, a, l, s) {
          return (
            ((e = Bu(n, r, !0, e, 0, o, 0, l, s)).context = qu(null)),
            (n = e.current),
            ((o = zo((r = tu()), (i = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            jo(n, o, i),
            (e.current.lanes = i),
            gt(e, i, r),
            iu(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var i = t.current,
            o = tu(),
            a = nu(i);
          return (
            (n = qu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zo(o, a)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = jo(i, t, a)) && (ru(e, i, a, o), Mo(e, i, a)),
            a
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        xs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pi.current) yl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (yl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ol(t), ho();
                        break;
                      case 5:
                        aa(t);
                        break;
                      case 1:
                        Li(t.type) && Mi(t);
                        break;
                      case 4:
                        ia(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          i = t.memoizedProps.value;
                        Ei(vo, r._currentValue), (r._currentValue = i);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ei(sa, 1 & sa.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fl(e, t, n)
                            : (Ei(sa, 1 & sa.current),
                              null !== (e = Vl(e, t, n)) ? e.sibling : null);
                        Ei(sa, 1 & sa.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (i = t.memoizedState) &&
                            ((i.rendering = null),
                            (i.tail = null),
                            (i.lastEffect = null)),
                          Ei(sa, sa.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Sl(e, t, n);
                    }
                    return Vl(e, t, n);
                  })(e, t, n)
                );
              yl = 0 !== (131072 & e.flags);
            }
          else (yl = !1), io && 0 !== (1048576 & t.flags) && $i(t, Qi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var i = Ni(t, Ti.current);
              So(t, n), (i = xa(null, t, r, e, i, n));
              var a = Sa();
              return (
                (t.flags |= 1),
                "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Li(r) ? ((a = !0), Mi(t)) : (a = !1),
                    (t.memoizedState =
                      null !== i.state && void 0 !== i.state ? i.state : null),
                    Lo(t),
                    (i.updater = qo),
                    (t.stateNode = i),
                    (i._reactInternals = t),
                    Qo(t, r, e, n),
                    (t = Pl(null, t, r, !0, a, n)))
                  : ((t.tag = 0),
                    io && a && eo(t),
                    _l(null, t, i, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (i = r._init)(r._payload)),
                  (t.type = r),
                  (i = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Du(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = go(r, e)),
                  i)
                ) {
                  case 0:
                    t = Cl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, go(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Cl(e, t, r, (i = t.elementType === r ? i : go(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Tl(e, t, r, (i = t.elementType === r ? i : go(r, i)), n)
              );
            case 3:
              e: {
                if ((Ol(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (i = (a = t.memoizedState).element),
                  Do(e, t),
                  Fo(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), a.isDehydrated)) {
                  if (
                    ((a = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = a),
                    (t.memoizedState = a),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (i = cl(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== i) {
                    t = Nl(e, t, r, n, (i = cl(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ui(t.stateNode.containerInfo.firstChild),
                      no = t,
                      io = !0,
                      oo = null,
                      n = Jo(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === i)) {
                    t = Vl(e, t, n);
                    break e;
                  }
                  _l(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                aa(t),
                null === e && uo(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = i.children),
                ni(r, i)
                  ? (l = null)
                  : null !== a && ni(r, a) && (t.flags |= 32),
                El(e, t),
                _l(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && uo(t), null;
            case 13:
              return Fl(e, t, n);
            case 4:
              return (
                ia(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Zo(t, null, r, n)) : _l(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                wl(e, t, r, (i = t.elementType === r ? i : go(r, i)), n)
              );
            case 7:
              return _l(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return _l(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (i = t.pendingProps),
                  (a = t.memoizedProps),
                  (l = i.value),
                  Ei(vo, r._currentValue),
                  (r._currentValue = l),
                  null !== a)
                )
                  if (lr(a.value, l)) {
                    if (a.children === i.children && !Pi.current) {
                      t = Vl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (a = t.child) && (a.return = t);
                      null !== a;

                    ) {
                      var s = a.dependencies;
                      if (null !== s) {
                        l = a.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === a.tag) {
                              (u = zo(-1, n & -n)).tag = 2;
                              var c = a.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (a.lanes |= n),
                              null !== (u = a.alternate) && (u.lanes |= n),
                              xo(a.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === a.tag)
                        l = a.type === t.type ? null : a.child;
                      else if (18 === a.tag) {
                        if (null === (l = a.return)) throw Error(o(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          xo(l, n, t),
                          (l = a.sibling);
                      } else l = a.child;
                      if (null !== l) l.return = a;
                      else
                        for (l = a; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (a = l.sibling)) {
                            (a.return = l.return), (l = a);
                            break;
                          }
                          l = l.return;
                        }
                      a = l;
                    }
                _l(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = t.pendingProps.children),
                So(t, n),
                (r = r((i = Eo(i)))),
                (t.flags |= 1),
                _l(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (i = go((r = t.type), t.pendingProps)),
                kl(e, t, r, (i = go(r.type, i)), n)
              );
            case 15:
              return xl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : go(r, i)),
                Wl(e, t),
                (t.tag = 1),
                Li(r) ? ((e = !0), Mi(t)) : (e = !1),
                So(t, n),
                Wo(t, r, i),
                Qo(t, r, i, n),
                Pl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Sl(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Xu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $u() {}
        function ec(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o;
            if ("function" === typeof i) {
              var l = i;
              i = function () {
                var e = Vu(a);
                l.call(e);
              };
            }
            Wu(t, a, e, i);
          } else
            a = (function (e, t, n, r, i) {
              if (i) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Vu(a);
                    o.call(e);
                  };
                }
                var a = Uu(t, r, e, 0, null, !1, 0, "", $u);
                return (
                  (e._reactRootContainer = a),
                  (e[hi] = a.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  a
                );
              }
              for (; (i = e.lastChild); ) e.removeChild(i);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Vu(s);
                  l.call(e);
                };
              }
              var s = Bu(e, 0, !1, null, 0, !1, 0, "", $u);
              return (
                (e._reactRootContainer = s),
                (e[hi] = s.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Wu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, i, r);
          return Vu(a);
        }
        (Ku.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Wu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Wu(null, e, null, null);
                }),
                  (t[hi] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Dt.length && 0 !== t && t < Dt[n].priority;
                n++
              );
              Dt.splice(n, 0, e), 0 === n && It(e);
            }
          }),
          (_t = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    iu(t, Ze()),
                    0 === (6 & Ps) && ((Us = Ze() + 500), qi()));
                }
                break;
              case 13:
                du(function () {
                  var t = Oo(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Yu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Oo(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Yu(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Oo(e, t);
              if (null !== n) ru(n, e, t, tu());
              Yu(e, t);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (St = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = _i(r);
                      if (!i) throw Error(o(90));
                      Y(r), J(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = cu),
          (Pe = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [bi, yi, _i, Ee, Ce, cu],
          },
          nc = {
            findFiberByHostInstance: vi,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: y.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ic = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ic.isDisabled && ic.supportsFiber)
            try {
              (it = ic.inject(rc)), (ot = ic);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Zu(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: w,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Zu(e)) throw Error(o(299));
            var n = !1,
              r = "",
              i = Xu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
              (t = Bu(e, 1, !1, null, 0, n, 0, r, i)),
              (e[hi] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Zu(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              i = !1,
              a = "",
              l = Xu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (i = !0),
                void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Uu(t, null, e, 1, null != n ? n : null, i, 0, a, l)),
              (e[hi] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (i = (i = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(o(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[hi] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: (e, t, n) => {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: (e, t, n) => {
        "use strict";
        var r = n(791),
          i = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          a = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            o = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            a.call(t, r) && !s.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: o,
            _owner: l.current,
          };
        }
        (t.Fragment = o), (t.jsx = u), (t.jsxs = u);
      },
      117: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          A = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = A),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = A),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = g.prototype);
        var y = (b.prototype = new v());
        (y.constructor = b), m(y, g.prototype), (y.isPureReactComponent = !0);
        var _ = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          k = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, r) {
          var i,
            o = {},
            a = null,
            l = null;
          if (null != t)
            for (i in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              w.call(t, i) && !x.hasOwnProperty(i) && (o[i] = t[i]);
          var s = arguments.length - 2;
          if (1 === s) o.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            o.children = u;
          }
          if (e && e.defaultProps)
            for (i in (s = e.defaultProps)) void 0 === o[i] && (o[i] = s[i]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: l,
            props: o,
            _owner: k.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, i, o, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (a = a((s = e))),
              (e = "" === o ? "." + T(s, 0) : o),
              _(a)
                ? ((i = ""),
                  null != e && (i = e.replace(C, "$&/") + "/"),
                  P(a, t, i, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (E(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      i +
                        (!a.key || (s && s.key === a.key)
                          ? ""
                          : ("" + a.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((s = 0), (o = "" === o ? "." : o + ":"), _(e)))
            for (var u = 0; u < e.length; u++) {
              var c = o + T((l = e[u]), u);
              s += P(l, t, i, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += P((l = l.value), t, i, (c = o + T(l, u++)), a);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          D = { transition: null },
          z = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: D,
            ReactCurrentOwner: k,
          };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = i),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var i = m({}, e.props),
              o = e.key,
              a = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (l = k.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !x.hasOwnProperty(u) &&
                  (i[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) i.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              i.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: a,
              props: i,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = D.transition;
            D.transition = {};
            try {
              e();
            } finally {
              D.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: (e, t, n) => {
        "use strict";
        e.exports = n(117);
      },
      184: (e, t, n) => {
        "use strict";
        e.exports = n(374);
      },
      813: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(0 < o(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function i(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > o(s, n))
                u < i && 0 > o(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < i && 0 > o(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          A = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function y(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) i(c);
            else {
              if (!(t.startTime <= e)) break;
              i(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function _(e) {
          if (((A = !1), y(e), !m))
            if (null !== r(u)) (m = !0), D(w);
            else {
              var t = r(c);
              null !== t && z(_, t.startTime - e);
            }
        }
        function w(e, n) {
          (m = !1), A && ((A = !1), v(E), (E = -1)), (h = !0);
          var o = p;
          try {
            for (
              y(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !P()));

            ) {
              var a = f.callback;
              if ("function" === typeof a) {
                (f.callback = null), (p = f.priorityLevel);
                var l = a(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && i(u),
                  y(n);
              } else i(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && z(_, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          x = !1,
          S = null,
          E = -1,
          C = 5,
          T = -1;
        function P() {
          return !(t.unstable_now() - T < C);
        }
        function O() {
          if (null !== S) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = S(!0, e);
            } finally {
              n ? k() : ((x = !1), (S = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(O);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            L = N.port2;
          (N.port1.onmessage = O),
            (k = function () {
              L.postMessage(null);
            });
        } else
          k = function () {
            g(O, 0);
          };
        function D(e) {
          (S = e), x || ((x = !0), k());
        }
        function z(e, n) {
          E = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), D(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, i, o) {
            var a = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a)
                : (o = a),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: i,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > a
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (A ? (v(E), (E = -1)) : (A = !0), z(_, o - a)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), D(w))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: (e, t, n) => {
        "use strict";
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".df789a05.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "hfcl-react-bot:";
      n.l = (r, i, o, a) => {
        if (e[r]) e[r].push(i);
        else {
          var l, s;
          if (void 0 !== o)
            for (
              var u = document.getElementsByTagName("script"), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + o
              ) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement("script")).charset = "utf-8"),
            (l.timeout = 120),
            n.nc && l.setAttribute("nonce", n.nc),
            l.setAttribute("data-webpack", t + o),
            (l.src = r)),
            (e[r] = [i]);
          var f = (t, n) => {
              (l.onerror = l.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                l.parentNode && l.parentNode.removeChild(l),
                i && i.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: l }),
              12e4
            );
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 179: 0 };
      n.f.j = (t, r) => {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var o = new Promise((n, r) => (i = e[t] = [n, r]));
            r.push((i[2] = o));
            var a = n.p + n.u(t),
              l = new Error();
            n.l(
              a,
              (r) => {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (l.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (l.name = "ChunkLoadError"),
                    (l.type = o),
                    (l.request = a),
                    i[1](l);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var i,
            o,
            a = r[0],
            l = r[1],
            s = r[2],
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in l) n.o(l, i) && (n.m[i] = l[i]);
            if (s) s(n);
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkhfcl_react_bot =
          self.webpackChunkhfcl_react_bot || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = n(791),
        t = n(250);
      const r = n.p + "static/media/bot.524c8ccc1ecc2215653c.jpg",
        i = n.p + "static/media/guy.ef61ea00a761ff759928.jpg";
      var o = n(184);
      const a = (t) => {
          let { sendtoAPI: n, questionAsked: r } = t;
          const [i, a] = (0, e.useState)({ mobile_number: "", password: "" }),
            [l, s] = (0, e.useState)(!1),
            u = "https://hfcl-func-app-uat-test3.azurewebsites.net/api/",
            [c, d] = (0, e.useState)(""),
            [f, p] = (0, e.useState)(""),
            [h, m] = (0, e.useState)("none"),
            A = () => {
              const e = JSON.stringify({ user_input: i.mobile_number });
              console.log(e);
              const t = "generate_otp";
              console.log(u + t),
                fetch(u + t, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: e,
                })
                  .then((e) => {
                    if (!e.ok) throw new Error("Network response was not ok");
                    return e.json();
                  })
                  .then((e) => {
                    console.log(e), m("block");
                  })
                  .catch((e) => {
                    console.error(
                      "Error sending message to Azure Function:",
                      e
                    );
                  });
            },
            g = () => {
              const e = JSON.stringify({ otp: i.password });
              console.log(e);
              const t = "validate_otp";
              console.log(u + t),
                console.log("lekin muje ye mila", r),
                fetch(u + t, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: e,
                })
                  .then((e) => {
                    if (!e.ok) throw new Error("Network response was not ok");
                    return e.json();
                  })
                  .then((e) => {
                    if (
                      (console.log(e),
                      console.log(e.access_token),
                      e.access_token)
                    ) {
                      localStorage.setItem("session-token", e.access_token),
                        console.log(
                          "token hu m",
                          localStorage.getItem("session-token")
                        );
                      n("ask", { question: r });
                    }
                  })
                  .catch((e) => {
                    console.error(
                      "Error sending message to Azure Function:",
                      e
                    );
                  });
            };
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)("div", {
              className: "logincontainer",
              children: [
                (0, o.jsx)("h6", { children: "You need to Login First:" }),
                (0, o.jsxs)("div", {
                  className: "logininputholders",
                  style: { position: "relative" },
                  children: [
                    l &&
                      (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30",
                        fill: "black",
                        className: "bi bi-arrow-right-circle",
                        viewBox: "0 0 16 16",
                        onClick: A,
                        children: (0, o.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z",
                        }),
                      }),
                    (0, o.jsx)("input", {
                      type: "text",
                      placeholder: "Enter Phone Number/ Customer Id",
                      className: "form-control mt-2",
                      name: "mobile_number",
                      id: "mobile_number",
                      value: c,
                      onChange: (e) => {
                        d(e.target.value),
                          a({ ...i, [e.target.name]: e.target.value }),
                          s(!!e.target.value);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key && A();
                      },
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  style: { display: "".concat(h) },
                  children: [
                    (0, o.jsx)("input", {
                      type: "password",
                      placeholder: "Enter the received OTP",
                      className: "form-control mt-4",
                      name: "password",
                      id: "otp",
                      onChange: (e) => {
                        a({ ...i, [e.target.name]: e.target.value }),
                          p(e.target.value);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key && g();
                      },
                    }),
                    (0, o.jsx)("button", {
                      type: "button",
                      id: "validate_otp",
                      className: "btn btn-outline-primary mt-3",
                      onClick: g,
                      children: "Log In",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        l = (t) => {
          let {
            recommendation: n,
            message: { isBot: l, query: s, timestamp: u },
            sendtoAPI: c,
            setMessages: d,
            questionAsked: f,
          } = t;
          const p = l && s.length >= 100,
            [h, m] = (0, e.useState)(!1),
            [A, g] = (0, e.useState)(!0);
          (0, e.useEffect)(() => {
            g(l && !s.includes("logged Out")),
              console.log("mujhe ye mila yr", f),
              (s.includes("not authenticated") ||
                s.includes("not logged in") ||
                s.includes("authenticated") ||
                s.includes("authenticate") ||
                s.includes("log in")) &&
                (g(!1), m(!0));
          }, [l, s]);
          return (0, o.jsxs)("div", {
            className: "message ".concat(l ? "left" : "right"),
            children: [
              (0, o.jsx)("img", {
                src: l ? r : i,
                alt: "Avatar",
                className: "avatar",
              }),
              s.includes("not authenticated") ||
              s.includes("not logged in") ||
              s.includes("authenticated") ||
              s.includes("authenticate") ||
              s.includes("log in")
                ? (0, o.jsxs)("div", {
                    className: "text_wrapper p-2",
                    style: { marginRight: "100px", width: "350px" },
                    children: [
                      (0, o.jsx)(a, { sendtoAPI: c, questionAsked: f }),
                      (0, o.jsx)("div", {
                        className: "timestamp",
                        children: u,
                      }),
                    ],
                  })
                : (0, o.jsxs)("div", {
                    className: "text_wrapper",
                    style: {
                      maxHeight: h ? "none" : "150px",
                      overflow: "hidden",
                    },
                    children: [
                      (0, o.jsx)("div", { className: "text", children: s }),
                      (0, o.jsx)("div", {
                        className: "timestamp",
                        children: u,
                      }),
                    ],
                  }),
              p &&
                !h &&
                (0, o.jsx)("div", {
                  style: { marginLeft: "40px" },
                  children: (0, o.jsx)("button", {
                    className: "btn btn-outline-primary",
                    onClick: () => {
                      m(!h);
                    },
                    style: { marginTop: "5px" },
                    children: "See More",
                  }),
                }),
              A &&
                (0, o.jsxs)("div", {
                  className: "recommendationHolder mt-2 w-75",
                  style: { display: l ? "block" : "none" },
                  children: [
                    (0, o.jsx)("div", {
                      className: "suggestionText",
                      children: "Suggested Questions:",
                    }),
                    Object.keys(n).map((e, t) =>
                      (0, o.jsx)(
                        "li",
                        {
                          className: "recommendationItemMessages",
                          onClick: () =>
                            ((e) => {
                              const t = { question: e };
                              console.log(e),
                                d((t) => [
                                  ...t,
                                  {
                                    query: e,
                                    isBot: !1,
                                    timestamp: new Date().toDateString(),
                                  },
                                ]),
                                c("ask", t);
                            })(n[e]),
                          children: n[e],
                        },
                        e
                      )
                    ),
                  ],
                }),
            ],
          });
        };
      n(371);
      const s = (e) => {
        let {
          recommendation: t,
          message: { isBot: n, query: r, timestamp: i },
          sendtoAPI: a,
          setMessages: l,
        } = e;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsx)("div", {
            className: "recommendationHolder d-flex",
            children: Object.keys(t).map((e, n) =>
              (0, o.jsx)(
                "button",
                {
                  className:
                    "recommendationItem btn btn-outline-primary m-0 p-0 mx-2",
                  onClick: () =>
                    ((e) => {
                      const t = { question: e };
                      l((t) => [
                        ...t,
                        {
                          query: e,
                          isBot: !1,
                          timestamp: new Date().toDateString(),
                        },
                      ]),
                        a("ask", t);
                    })(t[e]),
                  children: t[e],
                },
                "chat" + n
              )
            ),
          }),
        });
      };
      const u = function (t) {
        const n = (0, e.useRef)(null),
          [r, i] = (0, e.useState)(""),
          [a, u] = (0, e.useState)(!1),
          [c, d] = (0, e.useState)(0),
          [f, p] = (0, e.useState)([
            {
              query: "Hi, Ask your queries.",
              isBot: !0,
              timestamp: new Date().toDateString(),
            },
          ]),
          [h, m] = (0, e.useState)({ bot: "block", chat: "none" }),
          [A, g] = (0, e.useState)(!1),
          v = "https://hfcl-func-app-uat-test3.azurewebsites.net/api/",
          [b, y] = (0, e.useState)(""),
          [_, w] = (0, e.useState)({
            Recommendation1: "How to get a Loan ?",
            Recommendation2: "how to change my contact number ?",
            Recommendation3: "I lost my bike what should I do now ?",
          }),
          k = async () => {
            if (null != localStorage.getItem("session-token")) {
              const e = v + "logout";
              console.log("bahar ja raha hu", e);
              const t = await fetch(e, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
              });
              if (!t.ok) throw new Error("Network response was not ok");
              const n = await t.json();
              console.log(n),
                localStorage.removeItem("session-token"),
                p((e) => [
                  ...e,
                  {
                    query: "You have been sucessfully logged Out",
                    isBot: !0,
                    timestamp: new Date().toDateString(),
                  },
                ]);
            } else
              p((e) => [
                ...e,
                {
                  query: "You are already logged out",
                  isBot: !0,
                  timestamp: new Date().toDateString(),
                },
              ]);
          },
          x = async (e, t) => {
            d(10);
            JSON.stringify(t);
            const n = v + e;
            console.log("yha se aayega maamala bhai", n),
              d(50),
              console.log(
                "Token value is ",
                localStorage.getItem("session-token")
              );
            try {
              const e = await fetch(n, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "session-token": localStorage.getItem("session-token"),
                },
                body: JSON.stringify(t),
              });
              if (!e.ok) throw new Error("Network response was not ok");
              d(70);
              const o = await e.json();
              console.log(o),
                console.log("ye chahiye kya", o.response.input),
                console.log(r),
                i(o.response.input),
                console.log("Last question ye hai", r),
                console.log(
                  "Answer ye hai yrr",
                  o.response.output.split("{")[0].trim()
                ),
                o.response
                  ? (console.log(
                      "possible ye hai",
                      o.response.follow_up_questions
                    ),
                    p((e) => [
                      ...e,
                      {
                        query: o.response.output,
                        isBot: !0,
                        timestamp: new Date().toDateString(),
                      },
                    ]),
                    o.response.follow_up_questions &&
                      w((e) => ({
                        ...e,
                        Recommendation1: o.response.follow_up_questions[0],
                        Recommendation2: o.response.follow_up_questions[1],
                        Recommendation3: o.response.follow_up_questions[2],
                      })))
                  : (console.error("Invalid response format from API"),
                    p((e) => [
                      ...e,
                      {
                        query: "Invalid response format from API",
                        isBot: !0,
                        timestamp: new Date().toDateString(),
                      },
                    ]));
            } catch (o) {
              console.error("Error sending request to API:", o.message),
                p((e) => [
                  ...e,
                  {
                    query: 'Error sending request to API:", '.concat(o.message),
                    isBot: !0,
                    timestamp: new Date().toDateString(),
                  },
                ]);
            }
          },
          S = async () => {
            const e = v + "clear_chat";
            console.log(e);
            const t = await fetch(e, {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            });
            console.log("clear chat::", t),
              y(""),
              g("none"),
              p([
                {
                  query: "Hi, Ask your queries.",
                  isBot: !0,
                  timestamp: new Date().toDateString(),
                },
              ]);
          };
        (0, e.useEffect)(() => {
          var e;
          [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(
            (e) => new bootstrap.Tooltip(e)
          );
          null === (e = n.current) ||
            void 0 === e ||
            e.scrollIntoView({ behavior: "smooth" });
        }, [f]);
        const E = () => {
          console.log("m to click ho gya bhai");
          const e = { question: b };
          "logout" === b
            ? k()
            : "cls" === b
            ? S()
            : (p((e) => [
                ...e,
                { query: b, isBot: !1, timestamp: new Date().toDateString() },
              ]),
              x("ask", e)),
            y(""),
            g("none"),
            console.log("Send button clicked", new Date());
        };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: "chat_window",
              style: { display: h.chat },
              children: [
                (0, o.jsxs)("div", {
                  className: "top_menu",
                  children: [
                    (0, o.jsxs)("div", {
                      children: [
                        (0, o.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "25",
                          height: "25",
                          fill: "#fff",
                          viewBox: "0 0 25 25",
                          onClick: S,
                          children: [
                            " ",
                            (0, o.jsxs)("g", {
                              children: [
                                " ",
                                (0, o.jsx)("path", {
                                  fill: "none",
                                  d: "M0 0h24v24H0z",
                                }),
                                " ",
                                (0, o.jsx)("path", {
                                  d: "M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM13.414 11l2.475 2.475-1.414 1.414L12 12.414 9.525 14.89l-1.414-1.414L10.586 11 8.11 8.525l1.414-1.414L12 9.586l2.475-2.475 1.414 1.414L13.414 11z",
                                }),
                                " ",
                              ],
                            }),
                            " ",
                          ],
                        }),
                        (0, o.jsxs)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "25",
                          height: "25",
                          fill: "#fff",
                          className: "bi bi-power clearChatButton",
                          viewBox: "0 0 16 16",
                          onClick: k,
                          children: [
                            (0, o.jsx)("path", { d: "M7.5 1v7h1V1z" }),
                            (0, o.jsx)("path", {
                              d: "M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)("div", {
                      className: "title",
                      children: (0, o.jsx)("img", {
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8cAAAIZCAYAAACLTE2xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAJVJJREFUeNrs3d1x20iiNmD4q7me4V5N1dwsHYHpCExFYCkCSxFYikBSBJIjEB2B5AhER2BNBObcuMpXyzMJ+ENLTR+tj8dmg2SjATxPFYqeXUpAN5oUXvQPqgoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC27IkqAAC65vOXT+P6JWzT+D+9iK+jepv84EcXcQvu6u1/4uvi9yd/3KnZrZ6bSTwfz+Jr9eh8/ZN5fF3W25/xNZyXu/r8LDtUB6t2+L06mDz69/fcxXI/bqOhXpbaKAjHAIDANY3B6sUa4WIT8xhI3od/dymQtRgCH5+X6Q53t4jn5219XuaF1cPkm3oY73B32igIx7CGv6vD6tdqpiLoeDt+uNj8tboZYPDZtdA7OCu8Lg53fGH99QK7tIDxndC1X28vY9sYtXQo4XP4LrwKIV/PzTiem1fVj3vpd+W8PhdnBdTDqn3ut9g+V2F51UYXWigIx7AKFV+qhzvL50IyHQ3Fx/X2ugq9Ar9WewO62A4XuqeZAuFe4XVxm+lGQREB4zvln8bQdVjg6QlBOfRaDubG1aPzMornpK1AXETbjT3ErwsIxD9qo+9KvwkIpfp/qoAeGtfbVR00Pt73JEMXQvHfVbjQ+xgD4kilMMDwdVhv4TNwW2gwrmIgug7HGXv4h3BexvV2Fb+fLgoIxm22z9A2P8T2OSq4jV7Vx/qfcNMx3tQAhGMQkhGKoUOh+KrKM5x8a39f+hySQ6h6FIpLDoM52+e0Q4c+in9XPgrJIByDkIxQDGWHjmm9fehYKP6nkPwhDgfvy7k5exSKh9w+bzvePr8Nyce+eUA4BiEZoRjKCR2rHskQPPoyRDeU47Yu10WXe+jCfNp4w2Kw30+xfV7E9jntUdHC+byIN3IGOTQehGMQkhGKoaTgMa363SN5HEPypIPnJhz7h2qgc4oftc8P8Tz2VTi/H+LoAEA4BiGZrMH4WCiGr0N1bwfwOVj1Ih925LysevIvtM/79jkeSJFPw7Bxc5FBOAYhmRyh+PC+TT1ccLr4YMihYxTnbp4OqNjhM38Vh+cWfW6qslcH1z53a1o99CIbZg3CMQjJ7DQUd30RF9hm+JoOtAqOY69syedmon0Otn2urn1u+7SgHAjHsLuQvK86EIqhUfAIoevjkMNXdFhaQBaMtc9vjKoOTQUA4RjaC8nXdeC5rbep6kAohqTgMYT5xZ0LyIKx9vkDVwIywjHwM9P7P6JCMkIxrBu+rgSPYgPyRWUo9bX2+cOA7FoH4RgQkhGKYQvBY9C9kmsE5MMWz09YPf9Q+/Td/RPXFulCOAaEZIRi2MyVYPzzOmojeMR9Xmif2ucaRjEg611HOAaEZIRiaBC+Qq+kRQzX08bzZa+0T+0zQfh7d60aEI4BIRmhGNKCh17JNKOcYbU+P2eVBbi0zwbXN/GmAgzGL6oAthqSp3Wgmtev59Wv9690MRRX1alADGsHj9UCR6VYxC14H19/exQOp4Uc535dd/u/P/njZsfnJ3yXvdY+aeiirsN53U7vVAXCMSAkC8XAjx23/LlZ1lsImO/qLVzEL9cMjOG7+mXV7lDbqxg8ljvcR/heG2mfRViENlpvf8XX7wnH+qx6uJkzLSUg19uerzqEY0BIFoqBfw6Zk/j5aStonNfBcpb6g/XPhJ8NPzeLQTl8D7xuIUSOYng729H5WZVtqO1z3GL7XFnGtvY2tfc19nqHmzevWg7KYXj1YZPPGnSNOceQJySbk1xiKDanGDbVxjzOEDZO6gv1p9u4WA9Bud5COH0aQ0xupzHE7eR3d6gtLaqH3tTvbU2H9La5CFlop+ehXdXt66TJsOQwoiC08XoLvbZ7VdXqTfYLq1czBHqOIW9I1pNcQijWUwwbqy+Up1X+3qwQMA5iz+9WxaHNR3W53sVQlTMIhO+koy2fn/Add1ho87mLQS/MCb9b93zGMk1i8Cyxfa6EYf5H2xwuX/+u+xsFcYGsNobK73SUA5RCzzG0E5L1JLcRivUUw7YDXU4hHOztIhh/E0JCsAm9dIuMZTvcQe9xacE41OeqJ/V57E29STmfsZf/JgbF0trnSijXwa7mkde/9zK2z2ULZXut9xjhGBCShWLgkRZ65VY9xlkCQRwCmzuAbDvMvSooFB/FYfBnu7650VL7XDmK4TVH+3xaNR9u3tSq9xiEY0BIFoqBHQW5n4WrvVzB+FEAWWQOyPvb6pWLC6WV8L13vq254YnaeHTVUc5yxs/DQZW/B3mwjwVDOAaEZKEY+DZ4jau8vXIHuYPxowASeubOM+1utTLxNrTdaxxuLDyPC5210T5zP55r1sZKzo9u4OQ0CitX+yZEOAaEZKEYyNtzdN5kld8tB5AwTHbesbpt89nNdzEY3w2gfd6Xty7rUYvtM+cNnLbqGIRjQEgWiqFIh5n2E3qLLwsp80mm/UzikOjGYs9pW9+Fs7jY1rLFc7Xf07bxo4B8VuWdfzzZ4ePHQDgGhGShGMpXXxCH4JFrtdo3LYesx+EjBI+bTLvbdEh0W73Gd20HxRbmWs/WXDm7jyF9vwLhGBCShWIYsJeZ9lNSr/HK246Ejmct1E04X3sF3MzIPdf6vJTGuXoOco/rGoRj4CcheViheCwUQ+ty9RbdlNJr/Ch83FR5VgYebzhkddpC9ZwUcr5y9mbOcjyWquCwbmg1wjFQXEgekrFQDO2JQ1azDakutBpyDa3eb3iORi18T87bWKn5O2XP/TeiuDYae49zBvahXYcgHAMANA9sDSzaXqH6B95n2s+Lhj83aaFOzgfWPktvozlD+8sKhGMAYIBeZNrPvOA6yBWIph0Jx4uCFqR6kXFfbwtuozcZ9zWtQDgGAAYoV/B6X2oFZOwtHDWczznKXCVvBtg+cwfQ1Da6qPINrR6Zd0zf/KIKABiQsNjRWenHWNoBxQvgXMFrXvj5WWaqi0mDkPMic13cFNI+c861XhY8pPrxeTnOtK8m7RSEYwAoJHieqoZGF8DZzlHhvVGLTPUxqQruoawehlQvBtg+5x34vL7PHI5vKhCOAQDheOtuVfe9F4Wfp5JC4jTjvv7sQNu5K7ydQrHMOQYAfubfqiC7cYOfyTnnuKSQ+NtAbwp8V+zRz/Xc6ZGPKsIxACCoMeQ6L2ne7WSg5S7hOCc+qgjHAICgxk59/vKp2OBR0COcglHGci870nwWGdup3mOEYwBAOKaM0FdykM4gV9nnHaqTv3pY/yAcAwAIx1t975BCIoBwDABsrvDHKvWdHrmyLDt0rHOnC4RjAGC7hGO+tSjlQD5/+TTNuLs/nfrvmqoChGMAAIboL1UACMcAAOTymyoAEI4BAIbOnGMA4RgAAACEYwAAynSnCgDhGACAoVuqAkA4BgCGZqEK1D2AcAwADNrvT/4Q0NrjkUk/b5/zjLt71qGqGWXc11xLRDgGAIDhGHXoWK10DsIxALAD5phCt8IxIBwDADtgdWK0z271xj7rYf3Dzv2iCgCAn8jWc/z7kz+eqG5KbZ+fv3wad2Qe/ijjZ9bIEoRjAOjoRXTpvRyTqrzhm3/W277wQaHCZ3qaaV/jqhuriE8z1j0IxwDQxYvoOnjtlXyAdTi8zXhhu66cYaAr4YNy5FzVO3w254V/h+Qc/u2zSq+YcwwAlBaOIUXO3ssuPM4pZzj+U/NDOAYABsOzZBGOv5p2oD5e9LTuQTgGAAYVQDyflSRxQahFpt2NPn/5VHpAznl8wjHCMQAwOPNcF/Z1+PA8WUptn8HLUishzjceZ9rdwuJ5CMcAwBC9z7ivqeqm4Pa5X3A9vMq4r7lmh3AMAAxRzgvhV6qbgtvn+POXT6UG5JzH9V6zQzgGAAYnzuvMNb9w39BqEtvnosq7qvrr0uqg/swcVnlXe59refSN5xwDAOt6W+VbMOu43s4KCx/X9UvO0P6mDn03mt3abmK7ySHMjZ/U56ekBalyBvY7840RjgGAoYePi1wX+nX4uIw91iUE42mVf67piSaX5G3GcFzFz8JeIe0ztM1J5rqG3jGsGgBYS+wpytVTFnporwoq/mnm/S0K65XsQvsM9bXIuMtpCXOP4xSEi8y7NaIB4RgAGLw3Gfe1X0j4mFb5V9B+o6k1krtH86KA+fHhxs044/7mhlQjHAMAPPQY5RzqfBWf3dqmi5bqmXSzzPsLobS1EQ7xxs1x5t0aUo1wDAAQ5wDnDCChV+66rd65er8h+OQO5zd65hq3z0ULATmMcLhooW2GdnmdebdhuP9MS0M4BgB4kHvI77jePubuQY6PxjkcQP1qn5s7rtvLcca2GT4Lt1Xe1dO1TYRjAIDHWuqdCyHgNgbWHOHjrGpnuGzomZtrZRu1z7AwVxt1eBFHGvQ1GC9b+NyDcAwAFO+8hX3er2Adnjdcb+MdBY9xvYXgcTqgetU+t+ewbj8fdtg+Q+/0hxaCcfCmlEergXAMABQj9h63FUDCCtZhmPXWFusKc5pjb3EIHtOWymU+5/ba57xqr5dzEtvn2bbmyoeFt0LortpZHG7VNs+0LIRjAIDvu6zyrlz9rcMQZuvQEILIRVy5NyVwhF7i0NMXFjX6T/XQW9zmY3mONKmtOm+5fZ5WG9zEiTdsDmMovq3yLwz32InmxBD8ogoAgCbCEMv6wj0EuuuWD2VcPTzOJiyKFP578Wj765v3PosBeNJyEP7W3FzjrbfPRd0eQkC+aPEwQhs7rB6GW4egHs7xn9U/z4kexzYa2ue0kKoMq6d7tBjCMQDATwLITX3RHy6c9ws6rHHcuiKEJr3Gu2mfl3X7fFW12+v6OCjvx+20Q21TrzGDYVg1ALCpo6rd4atdd+65xjt1oH02/2xrmwjHAABriivYHqiJRsJw6kvVsNP2GcKd3s90M8OpEY4BANIDyLzyGKJUbirka5+z6mEBOdYTnhXthgLCMQBAwwByVrX3+JwuBuM9z43N2j5D2JurCW0ThGMAIEcAORJA1nJS19Wdasgu9NSrd8EYhGMAQAApwFEc5ktmMfTtaZ8/DMbqBuEYAEAAEYy1T8EYhGMAgC0GkHp7XpmDLBiXHZDnaqNaCMYgHAMAuw8hYQ7y0FexXvXKCcaFBeR6CwF5yOclBOLngjEIxwBAnhByVj3MQx7iIj93MRjPtYRi22e4gXM0wPZ5GUZ3WHwLhGMAIG8AualfwjDrIYXEy8pw1a60z1lsn0M4V/fP146PtgKEYwCghQCyiMNYT6p+99ItYig+0SvXufYZAvJ5j9tnuEn1NN6sAoRjAKDlEBJ6VJ9W/ZvrGQLVeV2+p4ZRd7p9nlUPvch9ap+r4f0HbtiAcAwAlBVAlnGuZx9C8n0orh565M6c3V60z0Vsn11f0XpRPayS/twNGxCOAYBuhJBVSO5Sr9bicSjWI9fL9jmPUwG61pM8j6H4qVXSQTgGALobksNryQsjhfmaBzF4CMXDaJ93sX3+q3qYM19i+wztMExZCL3EHh0GDfyiCgAowKLKM3SxCyvR3mWs8xJDSLjADxf1s89fPo3r1/16e1lv05ZDRwjE78NroWF4WeUb/jvYmwHx3IcAevmofb6qt0mL3533bdMiW7C5J6qAXvm7+jKo8v46oM/w3/cXxrcDOrvz+vzu+VDD/6rDyDSG5BcxjIx29vl7CB0hDN95FBNrtM1RbJuTHbfPu7iFthmGfC/UPgjHIBwLx8IxCCSjGELGcatiMEkJGv9TPfSEhn8vhA122D5/q9bvYQ7t8K+vfw/qNuomDeyeYdUAQCfFIa5zNYH2CWyDBbkAAAAQjlUBAAAAwjEAAAAIxwAAACAcAwAAgHAMAAAAwjEAAAAIxwAAACAcAwAAgHAMAAAAwjEAAAAIxwAAACAcAwAAgHAMAAAAwjEAAAAIxwAAACAcAwAAgHAMAAAAwjEAAAAIxwAAACAcAwAAgHAMAAAAwjEAAAAMyC+qAIC2ff7yaVy/jEs7rt+f/DFPKMOofpms+fZF/bsXO6qrZf277zKfv+muy73FY12dp3DMz+ptFP/9M6FOl/X2Pv57XpdlWejnaVWmUM4Xsb38qM0s4lZM2RLa1Dbc5S5vxvK1/pkD4RgA0hzW22mBx/Uk4b0hiNyu+d7zejvbVV3VF94H9QXxTcZ6ylHuTYJICIb79faqWv8GxvfOb/U4SNe/d16/vKu3WQFhchTbRpMyrsLz47KFkPy23m5aCle3mesvvMzjDYKbDDeYbjOX7S5u7zJ/N0CnGFYNAP1zFQPhoNV1cFhvIYR8rLeLDYLxP5nG3/ufej+t1HnogQz7Dsew5TJO4u/7WP/+68w9uW0JZQw3nj7U5Q3bYY/KFs5nKE84l6G9nsUbKoBwDAC9Fi56rwYeij/GOsgV6g5jkMwSkut9TGLwv4373qXQ634b9jeQkLwKk1cxJE96+P1wGtvrsa9LEI4BoO9Cj+LZwEJxKPOHGIrHLR3GKiSf7aiMo3oLPbofMgb/r20qhuSLAfU6hmDct17kxyH5It700IsMwjEA9NrpUHr6YmC8rbY/dHqTut9qr2P8XSEUt93bdxxvAEwH9Fm6isPX+yicRwEZhGMA6L3rPl/0hiHMsbe4xOGhq17H/S2U8zgG43EhZRvFQHU2oM/SYY/LOxGQQTgGgL4LF7vXPQ3Gq57U0ueELjcsZ+ixvCi0bKc97lH9p/Lu97Rs9/OsfWUiHAMAfTbt28I7MRjfxvBfspuU52X/QzA+LLyMhwMLyFc97mHdt0gXQ+Y5xwB0zaze/lINycLCO/MMz2/tYjAOdRJ6d99/5//7d/XNM4ATnRQSjBdx+9a42s5Q7RCQq7p9HWVuDst4/ppoek7vF7KqtxxlDefsbYOfexbL1+QzEnrHW392NwjHAPBzbzfpiRu4MP/4eZcveuNjkjYNxqH8sxiG5+vWRwzlIXC8qtYbyh0CxqJhOS82DMahTDf19u5nZYy9oKFcL6uHxzY1rds2AvJdvb+9DdpTKO/rBkE5lPW86flNCcf1Ps42LF9oS+PE8B96j88qGBjDqgFgOMIFcmeHv8YQd71BeAtB5qgOG/+qt5N6u0m5URB63evtst6e1//5tN7Oqx/PJz5vWM7DqvkCY8u436chpK5TxvD/x/cdxXIdVd/vZV43NHZmWG4sdwjXTXr4X3ehfPVLaK+zvpUNhGMAYFNdnlN4WjVbfGsZQ3EIjLNtHEjoMYw9ev8Uki+b9CrG3ummi2+tQvFZ09EBMSjPYqA6b3gcF9t8hFWmEHlZpQ+T3u9I2Zbxxsc84cdGPV54DIRjAKC74SU+U7dJqJ/HwDjbxXHF4LEKyZePwnjTYBl69lN7xsP+9jYJxT8oVwjJi4bl6JTYRi4TfmTcsc/RUZW2cvpLX5UIxwDAEHRtxd0mvalhzu9ejjnWMUyGoblhiO55k33GHv3UsHUXw/98R+W6iwE5ddGrSUefCfyzofLf6kzvahzJMEv4kamvSYRjAGAINhm+m1Wcg5saGmctrJwcAsg8DtFNLWO4UXHaIBjvPPzH37/XICC/jguodUYsa0qAfNaxz33KytfjHj+yCoRjAOC/HMbgWbrU0HjTRjDeUOg1TgkiixzBeMOA3CTwl+BdYhm7FP5Xjy1b16QC4RgAGIii5x/H8D5ODI2dCsaxdy51deCD3I/kivtLnbd62MHe43nC26cd/Mx3/lnnIBwDALsQglnJiye9Snz/UQef43xYpfVAnscewDaCY9jveYPyUY5l4vcDCMcAwGCExZOKm38cexynCT8y39XCVAXdAFg9Qqo1cU71YkflY/dSzp1h1QjHAEAvzBLee1zgc01Tj+e8aycoDmmfdLCMKcfRtUce9V3KuZirLoRjAKAP3iYG5KvC5oe+SLmI72iv8TThvctdPa85VTyORcKPdKb3OPEzsOxgmzNUGoRjABik8Ozddeenhovm64KOPaXn+G1Hz8/LhPfOCjv2Nzu6CdC2lGPt1OJWcfG3lJ7jZQXCMQDQB49WGF5XmH98VsBFfOow3JuOnqKUIFbaDYCUOu/SsOqkOeAda29JUxXaWvgNhGMAYFcBOVzgniT8yGkdTqctH3ZKmLrr4ArVqTcAlqUFlfp4FinhsIA2te4xphzn+441u5TnTs99ezI0v6gCADom9Gzu6ncv4gV/HwPyZV1vYQ7vuj1H1/X7n7YYOscp4bijp2XUgzLeJZyrccknIw45Tl21vTMBsi7fceI5eOfPDcIxAJRtl48cCivwnvW47sLw6smaF8ir+cd7LR3rvxPe+1dHz8c04b2l9lD+Wa1/w6XYcByD8VWVuJJzV26m1eU7bPDd2dWpCtCYYdUAMBAN5h9PW5x/nBKkzItsT+frPg6lvq3SHx32pgNlG8XP8FXij877OooGfkTPMXTXfGDlXcRt7NTDRgF5Xl8shx7ydecehvnHpT8maQgr6s57UPcvdrD/UcO5zKtVm19WzRYLC/Pci+xZjXPZR7Fsh1WzRzedVyAcAx25QDqvfh1YOP71Phg/rf6+/0N/KiTDRgH5LM4/XjdUhOcfP+/iolf0XgiCty3s9yTTfsLojS+Zy3bT0WeGw8YMq4ZuheK9OiTuDS4Y/3dIntXb0+phaOhCs4DGDqr1e/3GVfqwTOiryx6Hx9SpFyAcA0KxkAzdFnuBDxJ+ZD+udks7Sn1OcMqQ3fc9OA9hisFJj9vZgREiCMeAUCwkwxADcvhuuUz4kYvEZ/NuIuXzPB3A6RoVelyTAX1kwuJjBz0u35Hh1AjHgFAsJMOQA/JJlbbi8HV87M2upTye6bcOh611PSu0DCmP3Opyj+Qs/G3uaa/qMpZt5huRobMgF5QVis8F4i2E5HARY+GuPptVu3uu7VA/f6E37EO1Xu9k+EyF56Xuel7iIuG9Xe29XPagjCnHddfRc3RU6srUW/rOO/LYJhCOQSgWkummt4b+bVe4MP785VMIu9dr/shh/f73O+5pSrlYDyv6jrrWqxcfq7Xu28f1e8clhZhwPD0Ox6EthecYX/a0tzici/Meh35oxLBqaDcUGz6dIyQbbg3rBLVwkZwSdnc6/7jBDZD9DoeUrpZxmvDeRUdC5qqn+F/hkWc9C8ahrYU1BsJj2Z4LxvB/6TmGdkKxnuI2QrKeZPiZMP94Uq3XGxiGYIfnH+/t+Pty3QD2MjHcl/Q3Yd2bDK+rtAXUdu11Yjl3FfhO1mgb6660PqrKWvxsUW9vN2xfldE2IByDUIyQDAlCL1kcXn27ZkCYxM/RrrxPCMf7pQ07XtPbhOAWhlZPSwg64TiqtCHV73Z0KMs16mOeeLyn9ftvCmlLocf9zLcT5GFYNeQJxYZPlxiSDbeG7wXkdXriHtvls49Th32edrS+Fx0sY8pxLAsYwpvSpu9HRfg2AOEYEIqFZBCQZw2C6a6CY8qc3MOMz2HeppRhs2HxscM2D7bef5j7PE34kRLaUvg7fJlYz8e+DUA4BoRiIRko5bPwJvH9XezxmyW+/yKuFN1GMG7Sq3peSD2H40hZYOu0rXoGhGMQihGSoRBxld6DAg7lJjHQTOpAc9Gxul4kBuQQUK9jUM3tukpbsKqUuburNn2UWM+GV4NwDAjFQrKQjICcPP94V4Emtff4uO2hxw2k9q6G4eNZbwLUdRqC4jTxx04Ka9M3VdrK2YZXg3AMCMUIyXAfJi6rqvXvuHAMqc+bvWojIIdhuHFl5NR6XjQIyIcxsOYKxqn1OSt09fCjyvBqQDgGoRghGRo4aBBOtxnQU4fDPg7I2YbFxh7GD3G/TYY8Xzb4fgkB+cOuhliH31tvtw2CcThnJyU25hjYU0YjGF4NwjEgFCMkQxnzj+Nw2CarHq/C43SHoXgaA+RFDFLjqsEjrja4CRCGWH+Mq0hvs1zh932s0odSB0exPKW26bPE73DDq0E4BoRihGT4+iictlcdTh0O+zg83oZe5G0Ojw3hMYbi2+8EyNdNenM3qOfVIl23m94IeBT2UxffWrks4LnG67anFIZXg3AMQrFQjJAMX3vb7lrc//L+e7m5w+qhhzUEyMMmQScGx/AopY8xPE5/EFaPN6jnpuFyGm8EhHIer1vGOFc6vP/DP4T9dd3Vx3/SkfYc/rbPEm9AGF4NPfaLKoDvhuJzgZjkkBwusv6+v/g+rR6GVUIfheHVH6pmPYrbCDR3dYA72jCkTFfhr/5dixj4/6weeqXvvglDodf5t/iaGhhD7/Flw+HFR/F7ZNKwjOFnwzDvi1jGsL3/zvtexPdu4zvrbsObF20IQX4/oT3fD6+OC9UBwjEIxSAkM1RhMaMYTq9bPIZZfQxVtZ1evFUw3N/Boa56j88alHFZlzEEzdsNAvK3ZZzu8LTcB+OS5xn/oJ5PEttSGF59U+hK3MAGDKsGw6fZVUg23Jr+BuQw5Pey5WOYVc0Wr8qt8TzVR8PI7wovYyeD8TdtKeXvv+HVIByDUAxCMnwNFCdth7YYap5XLT5mak37G5RxWW+hjLNCyzbrcjB+JPVGi9WrQTgGoRiEZPivQNFqKApzkOuXp1VV7Pf5yTbmp9a/46iE+v5O2Y56EIxXzz5OXSXc6tUgHINQDEIyfA2mJwUcR+hd3YvHUkpQC39nnm9z4aZHPeXzvpWtkPZ8lvi9bHg1CMcgFIOQDP8V2GaFHEsIa+Fz1WZoC5/n0Ju6F28ebLuMi3gjoI3vjp2WrRCGV4NwDEIxCMnQ2Ekp7Tf2Ip/EkByGyebqSV4Fx6fxhsGuyzkL+8r03bGI+3meo2wtt59wvZBaRsOrQTgGoRiEZPi6qvJBYccUeljP6u1f8dhmOwjKy/h7D3KF4h+E5L0tl/H/lK0Pc4vXlDo83/Bq6AnPOaZvBGK6H5IfnpM8HVjJUz63pd48CMd1voPydqKuwjDbz18+hRA62VG5Nzm28OipsB3Vxxg+W2F7Vj08+3eSWJ9hex/KEnsZS7kZMI/1+7iML2L5RmuG4buCynbeVhuPzz4+qBKfCx16jxOefXxe2mcYqKonqgAAGLI61Ix+EpKXXZ9jGwPzj4I1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNb9fwEGAB49bqdw6WFcAAAAAElFTkSuQmCC",
                        alt: "",
                        style: { height: "60px" },
                      }),
                    }),
                    (0, o.jsx)("div", {
                      "data-bs-theme": "dark",
                      children: (0, o.jsx)("button", {
                        type: "button",
                        className: "btn-close mx-2",
                        "aria-label": "Close",
                        onClick: () => m({ chat: "none", bot: "block" }),
                      }),
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "messages",
                  children: [
                    f.map((e, t) =>
                      (0, o.jsx)(
                        l,
                        {
                          recommendation: _,
                          message: e,
                          setMessages: p,
                          sendtoAPI: x,
                          showRecommendation: !0,
                          questionAsked: r,
                        },
                        "component" + t
                      )
                    ),
                    (0, o.jsx)("div", { ref: n }),
                  ],
                }),
                (0, o.jsx)(s, {
                  recommendation: _,
                  isBot: f.isBot,
                  message: f,
                  setMessages: p,
                  sendtoAPI: x,
                }),
                (0, o.jsxs)("div", {
                  className: "bottom_wrapper",
                  style: { position: "relative" },
                  children: [
                    a &&
                      (0, o.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "35",
                        height: "35",
                        fill: "black",
                        className: "bi bi-send-fill",
                        viewBox: "0 0 16 16",
                        onClick: E,
                        children: (0, o.jsx)("path", {
                          d: "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z",
                        }),
                      }),
                    (0, o.jsx)("input", {
                      id: "msg_input",
                      value: b,
                      placeholder: "Say Hi to begin chat...",
                      onChange: (e) => {
                        y(e.target.value), u(!!e.target.value);
                      },
                      onKeyDown: (e) => {
                        "Enter" === e.key && E();
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("button", {
              type: "button",
              style: { display: h.bot },
              className: "btn btn chatbotIcon",
              "data-bs-toggle": "tooltip",
              "data-bs-placement": "top",
              "data-bs-title": "Click me to get help",
              onClick: () => m({ bot: "none", chat: "block" }),
            }),
          ],
        });
      };
      const c = function () {
          const [t, n] = (0, e.useState)(0),
            [r, i] = (0, e.useState)(!1);
          return (0, o.jsx)(o.Fragment, { children: (0, o.jsx)(u, {}) });
        },
        d = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: i,
                  getLCP: o,
                  getTTFB: a,
                } = t;
                n(e), r(e), i(e), o(e), a(e);
              });
        };
      t.createRoot(document.getElementById("root")).render((0, o.jsx)(c, {})),
        d();
    })();
})();
//# sourceMappingURL=main.934821e7.js.map
