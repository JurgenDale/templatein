"use strict";
(self.webpackChunktnet_fe = self.webpackChunktnet_fe || []).push([
    [623], {
        7485: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var l = i(67294),
                a = i(3218);
            const r = (0, l.createContext)({
                authToken: "",
                currentUser: a.A,
                toggleModalAuth: !1,
                setToggleModalAuth: e => {},
                setCurrentUser: e => {},
                setAuthToken: e => {}
            })
        },
        59024: (e, t, i) => {
            i.d(t, {
                Q: () => h
            });
            var l = i(67294),
                a = i(80764),
                r = i(64109),
                o = i(31190),
                s = i(74852),
                n = i(77933),
                d = i(58985),
                c = i(93697);
            const h = e => {
                const [t, i] = l.useState(""), [h, f] = l.useState(!1), m = (0, o.Z)(), {
                    manualOpen: b,
                    toggleModalAuth: u,
                    setToggleModalAuth: p
                } = e, g = (0, l.useMemo)((() => {
                    var e;
                    return null !== (e = m.overrideConfig) && void 0 !== e && e.moengage ? m.overrideConfig.moengage : { ...d.WV,
                        pagetitle: document.title,
                        pageurl: window.location.href
                    }
                }), [m.overrideConfig]);
                return (0, l.useEffect)((() => {
                    "1" === localStorage.getItem("isResetPassword") && p(!0)
                }), [localStorage.getItem("isResetPassword")]), (0, l.useEffect)((() => (document.addEventListener("toggle-modal-Auth", (e => {
                    var t, l, a, r;
                    null !== (t = e.detail) && void 0 !== t && t.fileFormatSelected && i(null === (a = e.detail) || void 0 === a ? void 0 : a.fileFormatSelected), null !== (l = e.detail) && void 0 !== l && l.clickBusinessBanner && f(null === (r = e.detail) || void 0 === r ? void 0 : r.clickBusinessBanner), p(e.detail.status)
                })), () => {
                    document.removeEventListener("toggle-modal-Auth", (e => {
                        p(e.detail.status)
                    }))
                })), []), l.createElement(l.Fragment, null, l.createElement(c.SignInModal, {
                    isOpen: b || u,
                    handleLoginResponse: async e => {
                        const i = e.authToken || e.accessToken;
                        localStorage.setItem("isResetPassword", "2"), await n.h.fetchProfile(i, t, h)
                    },
                    handleClose: () => {
                        p(!1)
                    },
                    handleSubmit: () => {},
                    pageInfo: g,
                    signinCapt: !1,
                    showingDebug: !1,
                    env: s.eW,
                    trackingGA: e => {
                        (0, a.m_)((() => (0, r.UA)({
                            method: e
                        })))
                    }
                }))
            }
        },
        54989: (e, t, i) => {
            i.d(t, {
                Z: () => m
            });
            var l = i(67294),
                a = i(53353),
                r = i(31190),
                o = i(94184),
                s = i.n(o),
                n = i(80764),
                d = i(8563),
                c = i(34013),
                h = i(59551);
            const f = ({
                    openMenu: e,
                    closeBurgerMenu: t,
                    isHomePage: i
                }) => {
                    var o;
                    const f = (0, r.Z)(),
                        m = null == f || null === (o = f.overrideConfig) || void 0 === o ? void 0 : o.moengage,
                        [b, u] = l.useState({
                            title: "",
                            list: []
                        }),
                        [p, g] = l.useState(!1),
                        v = f.app.SITE_URL,
                        w = () => {
                            t(), u({
                                title: "",
                                list: []
                            }), E(), g(!1)
                        },
                        E = () => {
                            const e = document.getElementsByClassName("subMenu");
                            for (let t = 0; t < e.length; t++) e[t].classList.remove("subMenu-active-mobile");
                            u({
                                title: "",
                                list: []
                            }), g(!1)
                        },
                        k = s()({
                            navigation: !0,
                            "navigation-active-mobile": e
                        }),
                        y = (e, t, i) => {
                            e.preventDefault();
                            const l = {
                                pageurl: window.location.href,
                                pagetitle: document.getElementsByTagName("title")[0].innerHTML || "",
                                pagecategory: (null == m ? void 0 : m.pagecategory) || "",
                                pagebusiness: (null == m ? void 0 : m.pagebusiness) || "",
                                pagefileformat: (null == m ? void 0 : m.pagefileformat) || "",
                                clickedname: i || "",
                                clickedurl: t || ""
                            };
                            (0, n.m_)((() => (0, d.kw)(l)));
                            const a = e.currentTarget.getAttribute("href") || "/";
                            window.location.href = a
                        };
                    return l.createElement(l.Fragment, null, l.createElement("nav", {
                        className: k
                    }, l.createElement("div", {
                        className: "head__burger"
                    }, l.createElement("p", null, b.title && l.createElement(l.Fragment, null, l.createElement("span", {
                        onClick: E
                    }, l.createElement(c.Z, {
                        className: "icon__back w-20"
                    })), l.createElement("span", null, b.title))), l.createElement("button", {
                        type: "button",
                        "aria-label": "Button Close Menu",
                        onClick: w
                    }, l.createElement(c.Z, {
                        className: "icon__close w-16 mr-0"
                    }))), !p && l.createElement(h.Z, {
                        isHeaderBusiness: !1
                    }), l.createElement("ul", {
                        className: "mainMenu"
                    }, a.O.map(((e, t) => {
                        const {
                            title: r,
                            list: o,
                            href: s,
                            imageLink: n,
                            fileFormat: d
                        } = e;
                        return l.createElement("li", {
                            key: `${r}-mainMenu`,
                            onClick: () => ((e, t) => {
                                if (window.innerWidth > 1024) return;
                                const i = document.getElementsByClassName("subMenu")[t];
                                u(e), null == i || i.classList.add("subMenu-active-mobile"), g(!0)
                            })(e, t)
                        }, l.createElement("span", null, r, l.createElement(c.Z, {
                            className: "icon__arrow__left w-14 mr-0 icon-left"
                        })), t !== a.O.length && l.createElement("div", {
                            className: "subMenu " + (i ? "noBannerTop" : ""),
                            id: "sub-menu"
                        }, l.createElement("div", {
                            className: "containerSubMenu",
                            style: {
                                height: "AI Tools" === r ? "100%" : "initial"
                            }
                        }, l.createElement("ul", null, o.map((e => {
                            const {
                                title: t,
                                href: i
                            } = e;
                            let a = "";
                            if (a = 0 === (null == i ? void 0 : i.indexOf("https://")) ? i : v + i, i) return l.createElement("li", {
                                key: `${t}-subMenu`,
                                className: "nav-links"
                            }, l.createElement("a", {
                                onClick: e => y(e, a, t),
                                href: a,
                                title: t
                            }, t))
                        }))), 0 === t && l.createElement("div", {
                            className: "fileFormatInSubMenu"
                        }, l.createElement("div", {
                            className: "titleFileFormat"
                        }, l.createElement("span", null, a.D[0].title)), l.createElement("ul", {
                            className: "itemFileFormat"
                        }, null == d ? void 0 : d.map((e => {
                            const {
                                title: t,
                                href: i
                            } = e, a = v + i;
                            return l.createElement("li", {
                                key: `${t}-fileFormatMenu`
                            }, l.createElement("a", {
                                onClick: e => y(e, a, t),
                                href: a,
                                title: t
                            }, t))
                        })))), t > 0 && d && l.createElement("div", {
                            className: "fileFormatInSubMenu"
                        }, l.createElement("div", {
                            className: "titleFileFormat"
                        }, l.createElement("span", null, a.D[0].title)), l.createElement("ul", {
                            className: "itemFileFormat"
                        }, null == d ? void 0 : d.map((e => {
                            const {
                                title: t,
                                href: i
                            } = e, a = v + i;
                            return l.createElement("li", {
                                key: `${t}-fileFormatMenu`
                            }, l.createElement("a", {
                                onClick: e => y(e, a, t),
                                href: a,
                                title: t
                            }, t))
                        })))), l.createElement("div", {
                            className: "popular"
                        }, s && l.createElement("a", {
                            className: "title",
                            onClick: e => y(e, v + s, r),
                            href: v + s
                        }, l.createElement("h3", null, "Browse all ", r), l.createElement(c.Z, {
                            className: "icon__arrow__left w-14 mr-0 w-36 lg-hidden"
                        })), l.createElement("div", {
                            className: "template-popular"
                        }, null == n ? void 0 : n.map(((e, t) => l.createElement("a", {
                            href: v + e.href,
                            key: t
                        }, l.createElement("div", {
                            className: "template-card"
                        }, l.createElement("p", null, e.type), l.createElement("img", {
                            src: e.urlImage,
                            alt: e.title,
                            title: e.title,
                            width: 292,
                            height: 190
                        }))))))))))
                    })))), e && l.createElement("div", {
                        className: "pseudo-layer",
                        onClick: w
                    }))
                },
                m = l.memo(f)
        },
        60473: (e, t, i) => {
            i.d(t, {
                Z: () => u
            });
            var l = i(67294),
                a = i(80764),
                r = i(8563),
                o = i(7485),
                s = i(31190),
                n = i(92110),
                d = i(98450),
                c = i(16871),
                h = i(23080),
                f = i(34013),
                m = i(10158),
                b = i(96138);
            const u = ({
                isPricingPage: e = !1,
                openBurgerMenu: t,
                isSearchPage: i = !1,
                isHomePage: u = !1,
                isCheckoutResultPage: p = !1
            }) => {
                var g;
                const {
                    authToken: v,
                    toggleModalAuth: w,
                    setAuthToken: E,
                    setCurrentUser: k,
                    setToggleModalAuth: y
                } = (0, l.useContext)(o.Z), P = b.pR.get("currentUser"), T = P ? JSON.parse(P) : null, C = v && !p && T, S = (0, s.Z)(), M = null == S || null === (g = S.overrideConfig) || void 0 === g ? void 0 : g.moengage, A = S.app.PUBLIC_URL, F = "undefined" != typeof window && window.innerWidth < 768;
                return l.useEffect((() => (0, m.qs)()), []), l.createElement("div", {
                    className: "top-header"
                }, l.createElement("div", {
                    className: "logo " + (e ? "__hidden" : "")
                }, l.createElement("button", {
                    type: "button",
                    "aria-label": "Button Menu Mobile",
                    onClick: t
                }, l.createElement(f.Z, {
                    className: "icon__hamburger w-24"
                })), l.createElement("a", {
                    title: "Template.net",
                    href: "/"
                }, l.createElement(f.Z, {
                    className: "logo__home__favicon"
                }))), (() => {
                    if (e) return null;
                    if (i) return F ? l.createElement("div", {
                        className: "group_search_with_filter",
                        onClick: m.qs
                    }, l.createElement(c.Z, null), l.createElement("div", {
                        id: "btn-filter-search"
                    }, "Filter by:", l.createElement("img", {
                        src: A + "/icons-new-ui/icon-filter-mobile.svg",
                        title: "Icon Filter",
                        alt: "Icon Filter"
                    }))) : l.createElement(c.Z, null);
                    const t = document.getElementsByClassName("list-filter-available")[0];
                    return t ? l.createElement("div", {
                        className: "group_search_with_filter"
                    }, l.createElement(d.Z, {
                        className: "header " + (u ? "home" : ""),
                        isLPWithFilterAvailable: Boolean(t)
                    }), l.createElement("div", {
                        id: "btn-filter-mobile"
                    }, "Filter by:", l.createElement(f.Z, {
                        className: "icon__filter__mobile w-12 mr-0"
                    }))) : l.createElement(d.Z, {
                        className: `header ${u?"home":""} ${p?"sb__full__width":""}`,
                        isLPWithFilterAvailable: Boolean(t)
                    })
                })(), l.createElement("div", {
                    className: "btn-actions"
                }, !e && !p && l.createElement("a", {
                    id: "btn-pricing",
                    href: "/pricing",
                    title: "Pricing"
                }, l.createElement(f.Z, {
                    className: "icon__pricing mr-2 w-20 xs-w-16"
                }), l.createElement("span", {
                    className: "pricing-plan"
                }, "Pricing")), !v && l.createElement("button", {
                    style: {
                        whiteSpace: "nowrap"
                    },
                    type: "button",
                    "aria-label": "Button Sign In",
                    onClick: () => {
                        y(!0);
                        const e = {
                            pageurl: window.location.href,
                            pagetitle: document.getElementsByTagName("title")[0].innerHTML || "",
                            pagecategory: (null == M ? void 0 : M.pagecategory) || "",
                            pagebusiness: (null == M ? void 0 : M.pagebusiness) || "",
                            pagefileformat: (null == M ? void 0 : M.pagefileformat) || ""
                        };
                        (0, a.m_)((() => (0, r.x$)(e)))
                    },
                    id: "btn-login"
                }, l.createElement("span", null, l.createElement(f.Z, {
                    className: "icon__user w-20 mr-0 xs-w-16"
                })), l.createElement("span", {
                    className: "sign-btn"
                }, "Sign In")), C && l.createElement(h.t, {
                    currentUser: T
                }), !v && l.createElement(n.Z, null)))
            }
        },
        23080: (e, t, i) => {
            i.d(t, {
                t: () => b
            });
            var l = i(67294),
                a = i(65031),
                r = i(52988),
                o = i(31190),
                s = i(77933),
                n = i(58985),
                d = i(96138),
                c = i(96245),
                h = i(90561),
                f = i(68665),
                m = i(90540);
            const b = e => {
                const [t, i] = (0, l.useState)(!1), [b, u] = (0, l.useState)([]), {
                    get: p,
                    remove: g,
                    set: v
                } = (0, d.ZP)(), w = e.currentUser, E = p("auth_token"), k = (0, o.Z)(), y = E ? (0, c.Z)(E) : null;

                function P() {
                    if (window.innerWidth > 1024) return;
                    const e = document.querySelector(".user-menu-container > div:nth-child(3) ");
                    e && (e.style.opacity = "0")
                }(0, l.useEffect)((() => {
                    (async () => {
                        var e;
                        const t = await r.Z.get("/user-activity/team/me");
                        u((null === (e = t.data) || void 0 === e ? void 0 : e.team) || [])
                    })()
                }), []);
                const T = (0, l.useMemo)((() => {
                        let e = {
                            display: "none"
                        };
                        return t && (e = { ...e,
                            display: "block"
                        }), e
                    }), [t]),
                    C = (0, l.useMemo)((() => {
                        const e = b.map((e => {
                                const t = e.teamId === (null == y ? void 0 : y.teamId);
                                return {
                                    id: e.teamId,
                                    name: e.teamName,
                                    checked: t
                                }
                            })),
                            t = Boolean(!(null != y && y.teamId));
                        return e.push({
                            id: void 0,
                            name: "Personal",
                            checked: t
                        }), e
                    }), [b, y]),
                    S = (0, l.useCallback)((async e => {
                        try {
                            (0, m.W5)();
                            const {
                                data: t
                            } = await r.Z.post("/user-activity/user/jwt", {
                                teamId: e.id
                            });
                            v("auth_token", t.accessToken), g("currentUser"), await s.h.fetchProfile(t.accessToken)
                        } catch (e) {
                            console.log("🚀 ~ file: index.tsx:111 ~ error:", e)
                        } finally {
                            (0, m.$q)()
                        }
                    }), [w]);
                return l.createElement("div", {
                    className: "user-menu-container"
                }, l.createElement("span", {
                    onClick: () => i(!t),
                    title: "Go To Dashboard",
                    className: "sign-in-avatar"
                }, (() => {
                    if (w) {
                        const e = w.userName || w.userEmail || w.fullName;
                        return e.length > 1 ? `${e[0][0]}${e[1][0]}`.toUpperCase() : `${e[0][0]}${e[0][1]}`
                    }
                    return ""
                })()), l.createElement("div", {
                    className: "overlay",
                    style: T,
                    onClick: () => i(!t)
                }), w && l.createElement(a.UserMenu, {
                    open: t,
                    menu: n.GI,
                    teams: C,
                    onMenuItemClicked: e => {
                        switch (e.id) {
                            case "logout":
                                return void(0, h.h)();
                            case "dashboard":
                                return P(), void(0, f.Jo)();
                            case "account-setting":
                                return P(), void(0, f.Kb)();
                            default:
                                P(), location.href = k.app.SITE_URL + e.url
                        }
                    },
                    currentUser: w,
                    onMouseLeaveMenu: () => i(!1),
                    onTeamClicked: S
                }))
            }
        },
        3623: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => p
            });
            var l = i(67294),
                a = i(7485),
                r = i(96138),
                o = i(59024),
                s = i(54989),
                n = i(60473),
                d = i(31190),
                c = i(10158),
                h = i(80764),
                f = i(8563),
                m = i(1926),
                b = i(77933),
                u = i(59551);
            const p = () => {
                var e, t;
                const i = (0, d.Z)(),
                    p = null == i || null === (e = i.overrideConfig) || void 0 === e ? void 0 : e.moengage,
                    {
                        get: g
                    } = (0, r.ZP)(),
                    [v, w] = (0, l.useState)(null),
                    [E, k] = (0, l.useState)(g("auth_token") || ""),
                    [y, P] = (0, l.useState)(!1),
                    [T, C] = l.useState(!1),
                    S = window.location.pathname,
                    M = (null === (t = i.overrideConfig) || void 0 === t ? void 0 : t.isStickyTags) || !1,
                    A = S.includes("/checkout/result"),
                    F = ["/pricing", "/pricing/business"].includes(window.location.pathname),
                    N = "/editable/search" === window.location.pathname,
                    I = "/" === window.location.pathname;
                l.useEffect((() => {
                    const e = document.getElementById("pricing-banner");
                    if (e) {
                        const t = {
                            pageurl: window.location.href,
                            pagetitle: document.getElementsByTagName("title")[0].innerHTML || "",
                            pagecategory: (null == p ? void 0 : p.pagecategory) || "",
                            pagebusiness: (null == p ? void 0 : p.pagebusiness) || "",
                            pagefileformat: (null == p ? void 0 : p.pagefileformat) || ""
                        };
                        e.addEventListener("click", (() => {
                            (0, h.m_)((() => (0, f.ik)(t))), setTimeout((() => window.location.href = "/pricing"), 1e3)
                        }))
                    }(0, c.li)(), (0, m.jC)()
                }), []), l.useEffect((() => {
                    !g("currentUser") && E && b.h.fetchProfile(E)
                }), []);
                const _ = () => {
                        document.body.style.overflow = "hidden", C(!0), (0, u.x)(!0)
                    },
                    L = () => {
                        document.body.style.overflow = "auto", C(!1), (0, u.x)(!1)
                    };
                return l.useEffect((() => (document.addEventListener("open-burger-menu", _), document.addEventListener("close-burger-menu", L), () => {
                    document.removeEventListener("open-burger-menu", _), document.removeEventListener("close-burger-menu", L)
                })), []), l.createElement(a.Z.Provider, {
                    value: {
                        authToken: E,
                        currentUser: v,
                        toggleModalAuth: y,
                        setAuthToken: k,
                        setCurrentUser: w,
                        setToggleModalAuth: P
                    }
                }, l.createElement("div", {
                    className: "new-header",
                    id: "sticky_header"
                }, l.createElement("div", {
                    className: "container-new-header"
                }, l.createElement(n.Z, {
                    isPricingPage: F,
                    openBurgerMenu: _,
                    isSearchPage: N,
                    isHomePage: I,
                    isCheckoutResultPage: A
                }), l.createElement("div", null, !F && l.createElement(s.Z, {
                    openMenu: T,
                    closeBurgerMenu: L,
                    isHomePage: I
                }), M && l.createElement("div", {
                    className: "clone__lp_tags"
                }))), l.createElement(o.Q, {
                    toggleModalAuth: y,
                    setToggleModalAuth: P
                })))
            }
        },
        23079: (e, t, i) => {
            i.d(t, {
                M: () => l
            });
            const l = {
                "All Formats": "icon-fileformat.svg",
                "AI Tools": "photo-effect.svg",
                Construction: "icon-fileformat.svg",
                "Adobe CorelDRAW": "slider.svg",
                Illustrator: "ai.svg",
                Indesign: "indesign.svg",
                PDF: "pdf.svg",
                "Google Docs": "google-docs.svg",
                "Apple Pages": "pages.svg",
                Photoshop: "photoshop.svg",
                "Adobe XD": "slider.svg",
                "After Effects": "slider.svg",
                Keynote: "keynote.svg",
                "Apple Numbers": "numbers.svg",
                "Vectors (EPS)": "vector.svg",
                Figma: "slider.svg",
                GIF: "slider.svg",
                "Google Jamboard": "slider.svg",
                "Google Sheets": "sheets.svg",
                "Google Slides": "slides.svg",
                HTML5: "html.svg",
                "Image (JPEG)": "jpg.svg",
                JPG: "jpg.svg",
                "Ms Excel": "excel.svg",
                Outlook: "outlook.svg",
                "Ms Powerpoint": "powerpoint.svg",
                Publisher: "publisher.svg",
                "Ms Word": "word.svg",
                Mp4: "slider.svg",
                PNG: "png.svg",
                SVG: "svg.svg",
                Sketch: "slider.svg",
                Wordpress: "slider.svg"
            }
        },
        75599: (e, t, i) => {
            i.d(t, {
                Z: () => c
            });
            var l = i(67294),
                a = i(31190),
                r = i(24767),
                o = i(23079),
                s = i(80764),
                n = i(47094),
                d = i(34013);
            const c = e => {
                const t = (0, a.Z)().app.PUBLIC_URL + "/icons-new-ui/icons-format",
                    {
                        selectedItem: i,
                        onSelectItem: c
                    } = e,
                    h = "drop-down",
                    [f, m] = l.useState(!1);
                return l.useEffect((() => {
                    const e = r.l.filter((e => e.href === window.location.pathname));
                    e.length > 0 && c(e[0])
                }), []), l.createElement(l.Fragment, null, l.createElement("div", {
                    className: `${h}`,
                    onClick: () => {
                        m(!f), f || (() => {
                            const e = {
                                pageurl: window.location.href,
                                pagetitle: document.getElementsByTagName("title")[0].innerHTML || "",
                                pagecategory: "",
                                pagebusiness: "",
                                pagefileformat: ""
                            };
                            (0, s.m_)((() => (0, n.i2)(e)))
                        })()
                    }
                }, l.createElement("p", null, i.title), l.createElement("span", {
                    className: `${h}__icon-file-format`
                }, l.createElement("img", {
                    src: `${t}/${o.M[i.title]}`,
                    alt: "Icon File Format",
                    title: "Icon File Format",
                    width: 12,
                    height: 12
                })), l.createElement("span", {
                    className: `${h}__icon-dropdown ${f?"--active":""}`
                }, l.createElement(d.Z, {
                    className: "icon__arrow__left w-16 mr-0"
                }))), l.createElement("div", {
                    className: `${h}__list-dropdown ${f?"--active":""}`
                }, f && r.l.map(((e, a) => "ai" === e.type ? null : l.createElement("p", {
                    key: a,
                    className: i.title === e.title ? "--selected" : "",
                    onClick: () => (e => {
                        if ("business" === e.type) return window.open(e.href, "_self");
                        c(e), m(!f), (e => {
                            const t = {
                                pageurl: window.location.href,
                                pagetitle: document.getElementsByTagName("title")[0].innerHTML || "",
                                pagecategory: "",
                                pagebusiness: "",
                                pagefileformat: "",
                                selecteddropdownfileformat: e || ""
                            };
                            (0, s.m_)((() => (0, n.uw)(t)))
                        })(e.title)
                    })(e)
                }, l.createElement("img", {
                    src: f ? `${t}/${o.M[e.title]}` : "",
                    alt: "Icon File Format",
                    title: "Icon File Format",
                    width: 12,
                    height: 12
                }), l.createElement("span", null, e.title))))), f && l.createElement("div", {
                    className: `${h}__pseudo`,
                    onClick: () => m(!1)
                }))
            }
        },
        16871: (e, t, i) => {
            i.d(t, {
                Z: () => b
            });
            var l = i(67294),
                a = i(24767),
                r = i(34319),
                o = i(46603),
                s = i(11582),
                n = i(500),
                d = i(21428),
                c = i(85446),
                h = i(75599),
                f = i(34013),
                m = i(63256);
            const b = ({}) => {
                const {
                    searchTerm: e,
                    dispatch: t
                } = (0, l.useContext)(m.c), i = "search-box", [b, u] = l.useState(a.l[0]), {
                    refine: p,
                    query: g
                } = (0, o.l)(), {
                    refine: v
                } = (0, s.n)({
                    excludedAttributes: [d.YT.SiteURL]
                }), {
                    refine: w
                } = (0, n.H)({
                    attribute: d.YT.SiteURL
                }), E = (0, r.Z)(.75), k = window.location.search, y = k && k.includes("siteUrl") && k.split("siteUrl=")[1].length > 0 && k.split("siteUrl=")[1].replace(/%2f/gi, "/").trim(), P = a.l.findIndex((e => e.href === y));
                l.useEffect((() => {
                    g && t({
                        type: c.n.CHANGE_SEARCH_INPUT,
                        value: g
                    }), -1 !== P && u(a.l[P])
                }), [g]);
                const T = i => {
                    (i.trim().length || e) && (t({
                        type: c.n.CHANGE_SEARCH_INPUT,
                        value: i
                    }), E((() => {
                        p(i)
                    })))
                };
                return l.createElement("div", {
                    className: `${i} header `
                }, l.createElement("div", {
                    className: `${i}__dropdown`
                }, l.createElement(h.Z, {
                    selectedItem: b,
                    onSelectItem: e => {
                        u(e), w(e.href)
                    }
                })), l.createElement("input", {
                    placeholder: "Search for templates",
                    className: `${i}__input`,
                    onChange: t => {
                        const {
                            value: i
                        } = t.target;
                        "" !== i.trim() || e ? T(i) : (t.preventDefault(), v(), T(""))
                    },
                    value: e
                }), l.createElement("button", null, l.createElement(f.Z, {
                    className: "icon__search__white w-14 mr-0"
                })))
            }
        },
        21428: (e, t, i) => {
            i.d(t, {
                YT: () => r
            });
            var l = i(24955),
                a = i.n(l);
            let r = function(e) {
                return e.Type = "is_pro", e.SiteURL = "siteUrls", e.FileFormat = "fileFormats", e.FileFormatTitles = "fileFormatTitles", e.Categories = "categories", e.EditorType = "editorType", e
            }({});
            const o = a()("U81K7OODVR", "fa2c76ff9dbd571f96cbca30e82241e0");
            o.initIndex("product-prod"), o.initIndex("siteurls-prod")
        },
        85446: (e, t, i) => {
            i.d(t, {
                n: () => l
            });
            const l = {
                CHANGE_SEARCH_INPUT: "CHANGE_SEARCH_INPUT"
            }
        },
        63256: (e, t, i) => {
            i.d(t, {
                c: () => l
            });
            const l = (0, i(67294).createContext)({
                searchTerm: "",
                dispatch: () => {}
            })
        },
        3218: (e, t, i) => {
            i.d(t, {
                A: () => l
            });
            const l = {
                accessToken: "",
                id: "",
                fullName: "",
                userEmail: "",
                userName: "",
                userType: "",
                authToken: "",
                userRankType: ""
            }
        },
        53353: (e, t, i) => {
            i.d(t, {
                D: () => a,
                O: () => l
            });
            const l = [{
                    title: "Documents",
                    href: "/editable/documents",
                    imageLink: [{
                        urlImage: "https://images.template.net/39943/Project-Timeline-Roadmap-1.jpg",
                        type: "free",
                        href: "/editable/39943/project-timeline-roadmap",
                        title: "Project Timeline Roadmap Template"
                    }, {
                        urlImage: "https://images.template.net/8465/receipt-format-template-2drsx.png",
                        type: "free",
                        href: "/editable/8465/receipt-format",
                        title: "Receipt Format Template"
                    }],
                    fileFormat: [{
                        title: "Microsoft Word",
                        href: "/editable/word"
                    }, {
                        title: "Microsoft Publisher",
                        href: "/editable/publisher"
                    }, {
                        title: "Microsoft Excel",
                        href: "/editable/excel"
                    }, {
                        title: "Google Docs",
                        href: "/editable/google-docs"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/google-sheets"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/pages"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/numbers"
                    }, {
                        title: "Adobe PDF",
                        href: "/editable/pdf"
                    }],
                    list: [{
                        title: "Agenda",
                        href: "/editable/agenda"
                    }, {
                        title: "Agreement",
                        href: "/editable/agreements"
                    }, {
                        title: "Analysis",
                        href: "/editable/analysis"
                    }, {
                        title: "Biography",
                        href: "/editable/biography"
                    }, {
                        title: "Business Plan",
                        href: "/editable/business-plans"
                    }, {
                        title: "Calendar",
                        href: "/editable/calendars"
                    }, {
                        title: "Chart",
                        href: "/editable/charts"
                    }, {
                        title: "Checklist",
                        href: "/editable/checklists"
                    }, {
                        title: "Contract",
                        href: "/editable/contracts"
                    }, {
                        title: "CV",
                        href: "/editable/cv"
                    }, {
                        title: "Estimate",
                        href: "/editable/estimate-templates"
                    }, {
                        title: "Evaluation",
                        href: "/editable/evaluation"
                    }, {
                        title: "Family Tree",
                        href: "/editable/family-tree"
                    }, {
                        title: "Handbook",
                        href: "/editable/handbook"
                    }, {
                        title: "Inventory",
                        href: "/editable/inventory"
                    }, {
                        title: "Invoice",
                        href: "/editable/invoices"
                    }, {
                        title: "Itinerary",
                        href: "/editable/itinerary"
                    }, {
                        title: "Job Description",
                        href: "/editable/job-descriptions"
                    }, {
                        title: "Legal",
                        href: "/editable/legal-templates"
                    }, {
                        title: "Letter",
                        href: "/editable/letters"
                    }, {
                        title: "List",
                        href: "/editable/list"
                    }, {
                        title: "Log",
                        href: "/editable/logs"
                    }, {
                        title: "Manual",
                        href: "/editable/manual-templates"
                    }, {
                        title: "Meeting Minute",
                        href: "/editable/meeting-minutes"
                    }, {
                        title: "Memo",
                        href: "/editable/memo"
                    }, {
                        title: "Note",
                        href: "/editable/notes"
                    }, {
                        title: "Notebook",
                        href: "/editable/notebook"
                    }, {
                        title: "Notice",
                        href: "/editable/notice"
                    }, {
                        title: "Plan",
                        href: "/editable/plan"
                    }, {
                        title: "Policy",
                        href: "/editable/policy"
                    }, {
                        title: "Program",
                        href: "/editable/programs"
                    }, {
                        title: "Proposal",
                        href: "/editable/proposals"
                    }, {
                        title: "Quotation",
                        href: "/editable/quotation"
                    }, {
                        title: "Receipt",
                        href: "/editable/receipts"
                    }, {
                        title: "Report",
                        href: "/editable/reports"
                    }, {
                        title: "Resume",
                        href: "/editable/resumes"
                    }, {
                        title: "Schedule",
                        href: "/editable/schedule"
                    }, {
                        title: "Statement",
                        href: "/editable/statements"
                    }, {
                        title: "Table of Contents",
                        href: "/editable/table-of-contents"
                    }]
                }, {
                    title: "Designs",
                    href: "/editable/graphic-templates",
                    imageLink: [{
                        urlImage: "https://images.template.net/73/Free-Mechanical-Diploma-Certificate-Template-2.jpg",
                        type: "free",
                        href: "/editable/73/mechanical-diploma-certificate",
                        title: "Mechanical Diploma Certificate Template"
                    }, {
                        urlImage: "https://images.template.net/21975/Modern-Triangle-Business-Card-Template.jpg",
                        type: "free",
                        href: "/editable/21975/modern-triangle-business-card",
                        title: "Modern Triangle Business Card Template"
                    }],
                    fileFormat: [{
                        title: "Adobe PSD",
                        href: "/editable/psd"
                    }, {
                        title: "Adobe Illustrator",
                        href: "/editable/illustrator"
                    }, {
                        title: "Adobe InDesign",
                        href: "/editable/indesign"
                    }, {
                        title: "Microsoft Word",
                        href: "/editable/word"
                    }, {
                        title: "Microsoft Publisher",
                        href: "/editable/publisher"
                    }, {
                        title: "Google Docs",
                        href: "/editable/google-docs"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/pages"
                    }, {
                        title: "HTML",
                        href: "/editable/html"
                    }],
                    list: [{
                        title: "Banner",
                        href: "/editable/banner"
                    }, {
                        title: "Bio",
                        href: "/editable/bio"
                    }, {
                        title: "Book Cover",
                        href: "/editable/book-covers"
                    }, {
                        title: "Branding",
                        href: "/editable/branding"
                    }, {
                        title: "Brochure",
                        href: "/editable/brochures"
                    }, {
                        title: "Business Card",
                        href: "/editable/business-cards"
                    }, {
                        title: "Calendar",
                        href: "/editable/calendar-design"
                    }, {
                        title: "Card",
                        href: "/editable/cards"
                    }, {
                        title: "Catalog",
                        href: "/editable/catalogs"
                    }, {
                        title: "Certificate",
                        href: "/editable/certificates"
                    }, {
                        title: "Chart",
                        href: "/editable/chart-design"
                    }, {
                        title: "Cookbook",
                        href: "/editable/cookbook"
                    }, {
                        title: "Coupon",
                        href: "/editable/coupons"
                    }, {
                        title: "Diagram",
                        href: "/editable/diagram"
                    }, {
                        title: "Flyer",
                        href: "/editable/flyers"
                    }, {
                        title: "ID Card",
                        href: "/editable/cards/id-card"
                    }, {
                        title: "Invitation",
                        href: "/editable/invitations"
                    }, {
                        title: "Journal",
                        href: "/editable/journal"
                    }, {
                        title: "Label",
                        href: "/editable/labels"
                    }, {
                        title: "Leaflet",
                        href: "/editable/leaflets"
                    }, {
                        title: "Letterhead",
                        href: "/editable/letterheads"
                    }, {
                        title: "Magazine",
                        href: "/editable/magazines"
                    }, {
                        title: "Media Kit",
                        href: "/editable/media-kits"
                    }, {
                        title: "Menu",
                        href: "/editable/menu"
                    }, {
                        title: "Newsletter",
                        href: "/editable/newsletters"
                    }, {
                        title: "Pamphlet",
                        href: "/editable/pamphlet"
                    }, {
                        title: "Photo",
                        href: "/editable/photo"
                    }, {
                        title: "Planner",
                        href: "/editable/planners"
                    }, {
                        title: "Poster",
                        href: "/editable/posters"
                    }, {
                        title: "Pricelist",
                        href: "/editable/price-list"
                    }, {
                        title: "Print",
                        href: "/editable/print-templates"
                    }, {
                        title: "Profile",
                        href: "/editable/profile-templates"
                    }, {
                        title: "Sign",
                        href: "/editable/signs"
                    }, {
                        title: "Stationery",
                        href: "/editable/stationery"
                    }, {
                        title: "Sticker",
                        href: "/editable/stickers"
                    }, {
                        title: "Ticket",
                        href: "/editable/tickets"
                    }, {
                        title: "Timeline",
                        href: "/editable/timelines"
                    }, {
                        title: "Tri Fold",
                        href: "/editable/trifold"
                    }, {
                        title: "Tshirt",
                        href: "/editable/tshirt"
                    }, {
                        title: "Voucher",
                        href: "/editable/vouchers"
                    }]
                }, {
                    title: "Forms",
                    href: "/editable/forms",
                    imageLink: [{
                        urlImage: "https://images.template.net/45686/Release-Control-Form-Template-1.jpg",
                        type: "free",
                        href: "/editable/45686/release-control-form",
                        title: "Release Control Form Template"
                    }, {
                        urlImage: "https://images.template.net/37281/Simple--Construction-Form-Template-Format-1.jpg",
                        type: "free",
                        href: "/editable/37281/simple-construction-form",
                        title: "Simple Construction Form Template"
                    }],
                    fileFormat: [{
                        title: "Microsoft Word",
                        href: "/editable/forms/word"
                    }, {
                        title: "Microsoft Excel",
                        href: "/editable/forms/excel"
                    }, {
                        title: "Google Docs",
                        href: "/editable/forms/google-docs"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/forms/google-sheets"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/forms/pages"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/forms/numbers"
                    }, {
                        title: "Adobe PDF",
                        href: "/editable/forms/pdf"
                    }],
                    list: [{
                        title: "Admission",
                        href: "/editable/admission-form"
                    }, {
                        title: "Agreement",
                        href: "/editable/agreement-form"
                    }, {
                        title: "Application",
                        href: "/editable/application-form"
                    }, {
                        title: "Assessment",
                        href: "/editable/assessment-form"
                    }, {
                        title: "Business",
                        href: "/editable/business-form"
                    }, {
                        title: "Certificate",
                        href: "/editable/certificate-form"
                    }, {
                        title: "Consent",
                        href: "/editable/consent-form"
                    }, {
                        title: "Education",
                        href: "/editable/education-form"
                    }, {
                        title: "Employment",
                        href: "/editable/employment-form"
                    }, {
                        title: "Estimate",
                        href: "/editable/estimate-form"
                    }, {
                        title: "Evaluation",
                        href: "/editable/evaluation-form"
                    }, {
                        title: "Event",
                        href: "/editable/event-form"
                    }, {
                        title: "Feedback",
                        href: "/editable/feedback-form"
                    }, {
                        title: "Health",
                        href: "/editable/health-form"
                    }, {
                        title: "HR",
                        href: "/editable/hr-forms"
                    }, {
                        title: "Inventory",
                        href: "/editable/inventory-form"
                    }, {
                        title: "Invoice",
                        href: "/editable/invoice-form"
                    }, {
                        title: "Order",
                        href: "/editable/order-form"
                    }, {
                        title: "Questionnaire",
                        href: "/editable/questionnaire-form"
                    }, {
                        title: "Quiz",
                        href: "/editable/quiz-form"
                    }, {
                        title: "Receipt",
                        href: "/editable/receipt-form"
                    }, {
                        title: "Registration",
                        href: "/editable/registration-form"
                    }, {
                        title: "Request",
                        href: "/editable/request-form"
                    }, {
                        title: "Review",
                        href: "/editable/review-form"
                    }, {
                        title: "School",
                        href: "/editable/school-form"
                    }, {
                        title: "Survey",
                        href: "/editable/survey-form"
                    }, {
                        title: "Work Order",
                        href: "/editable/work-order-form"
                    }]
                }, {
                    title: "Presentation",
                    href: "/editable/presentations",
                    imageLink: [{
                        urlImage: "https://images.template.net/131174/simple-literature-presentation-b921h.jpg",
                        type: "free",
                        href: "/editable/131174/simple-literature-presentation",
                        title: "Simple Literature Presentation"
                    }, {
                        urlImage: "https://images.template.net/125786/cool-social-studies-presentation-7kih0.jpg",
                        type: "free",
                        href: "/editable/125786/cool-social-studies-presentation",
                        title: "Cool Social Studies Presentation"
                    }],
                    fileFormat: [{
                        title: "Microsoft Powerpoint",
                        href: "/editable/ppt"
                    }, {
                        title: "Google Slides",
                        href: "/editable/google-slides"
                    }, {
                        title: "Apple Keynote",
                        href: "/editable/keynote"
                    }],
                    list: [{
                        title: "Agency",
                        href: "/editable/agency-presentation"
                    }, {
                        title: "Background",
                        href: "/editable/presentation-background"
                    }, {
                        title: "Business",
                        href: "/editable/business-presentation"
                    }, {
                        title: "Business Plan",
                        href: "/editable/business-plan-presentation"
                    }, {
                        title: "Campaign",
                        href: "/editable/campaign-presentation"
                    }, {
                        title: "Chart",
                        href: "/editable/chart-presentation"
                    }, {
                        title: "Education",
                        href: "/editable/education-presentation"
                    }, {
                        title: "Flowchart",
                        href: "/editable/flowchart-presentation"
                    }, {
                        title: "Game",
                        href: "/editable/game-presentation"
                    }, {
                        title: "Health",
                        href: "/editable/health-presentation"
                    }, {
                        title: "History",
                        href: "/editable/history-presentation"
                    }, {
                        title: "Lesson",
                        href: "/editable/lesson-presentation"
                    }, {
                        title: "Marketing",
                        href: "/editable/marketing-presentations"
                    }, {
                        title: "Medical",
                        href: "/editable/medical-presentation"
                    }, {
                        title: "Meeting",
                        href: "/editable/meeting-presentation"
                    }, {
                        title: "MindMap",
                        href: "/editable/mind-map-presentation"
                    }, {
                        title: "Organization",
                        href: "/editable/organization-presentation"
                    }, {
                        title: "Pitch Deck",
                        href: "/editable/presentations/pitch-deck"
                    }, {
                        title: "Portfolio",
                        href: "/editable/portfolio-presentation"
                    }, {
                        title: "Process",
                        href: "/editable/process-presentation"
                    }, {
                        title: "Profile",
                        href: "/editable/profile-presentation"
                    }, {
                        title: "Report",
                        href: "/editable/report-presentation"
                    }, {
                        title: "Roadmap",
                        href: "/editable/roadmap-presentation"
                    }, {
                        title: "School",
                        href: "/editable/school-presentation"
                    }, {
                        title: "Science",
                        href: "/editable/science-presentation"
                    }, {
                        title: "Social Media",
                        href: "/editable/social-media-presentation"
                    }, {
                        title: "Teaching",
                        href: "/editable/teaching-presentation"
                    }, {
                        title: "Technology",
                        href: "/editable/technology-presentation"
                    }, {
                        title: "Timeline",
                        href: "/editable/timeline-presentation"
                    }, {
                        title: "Workshop",
                        href: "/editable/workshop-presentation"
                    }]
                }, {
                    title: "Social Media",
                    href: "/editable/social-media",
                    imageLink: [{
                        urlImage: "https://images.template.net/90178/Modern-Ecommerce-Facebook-Post-Template.jpeg",
                        type: "free",
                        href: "/editable/90178/modern-ecommerce-facebook-post",
                        title: "Modern Ecommerce Facebook Post"
                    }, {
                        urlImage: "https://images.template.net/90050/Sale-Countdown-Facebook-Post-Template.jpeg",
                        type: "free",
                        href: "/editable/90050/sale-countdown-facebook-post",
                        title: "Sale Countdown Facebook Post"
                    }],
                    fileFormat: [{
                        title: "Adobe PSD",
                        href: "/editable/social-media/psd"
                    }, {
                        title: "Adobe Illustrator",
                        href: "/editable/social-media/illustrator"
                    }],
                    list: [{
                        title: "Ads",
                        href: "/editable/ad-templates"
                    }, {
                        title: "Blog",
                        href: "/editable/blog-post"
                    }, {
                        title: "Facebook",
                        href: "/editable/facebook"
                    }, {
                        title: "Instagram",
                        href: "/editable/instagram"
                    }, {
                        title: "Linkedin",
                        href: "/editable/linkedin"
                    }, {
                        title: "Marketing",
                        href: "/editable/marketing-social-media"
                    }, {
                        title: "Meme",
                        href: "/editable/meme"
                    }, {
                        title: "Quotes",
                        href: "/editable/quotes"
                    }, {
                        title: "Snapchat ",
                        href: "/editable/snapchat"
                    }, {
                        title: "Tumblr",
                        href: "/editable/tumblr"
                    }, {
                        title: "Twitch",
                        href: "/editable/twitch"
                    }, {
                        title: "Twitter",
                        href: "/editable/twitter"
                    }, {
                        title: "Websites",
                        href: "/editable/website-templates"
                    }, {
                        title: "Whatsapp",
                        href: "/editable/whatsapp"
                    }, {
                        title: "Youtube",
                        href: "/editable/social-media/youtube"
                    }]
                }, {
                    title: "Business",
                    href: "/editable/business",
                    imageLink: [{
                        urlImage: "https://images.template.net/22600/Licenced-RealEstate-Broker-Agent-Agency-Flyer-Template.jpg",
                        type: "free",
                        href: "/editable/22600/licenced-realestate-agent-agency-flyer",
                        title: "Licenced Real Estate Broker Agent Agency Flyer Template"
                    }, {
                        urlImage: "https://images.template.net/37477/Sample-Construction-Flyer-Template-1.jpg",
                        type: "free",
                        href: "/editable/37477/sample-construction-flyer",
                        title: "Sample Construction Flyer Template"
                    }],
                    fileFormat: [{
                        title: "Microsoft Word",
                        href: "/editable/business-word"
                    }, {
                        title: "Microsoft Excel",
                        href: "/editable/business-excel"
                    }, {
                        title: "Microsoft PowerPoint",
                        href: "/editable/business-ppt"
                    }, {
                        title: "Microsoft Publisher",
                        href: "/editable/business-publisher"
                    }, {
                        title: "Microsoft Outlook",
                        href: "/editable/business-outlook"
                    }, {
                        title: "Google Docs",
                        href: "/editable/business-google-docs"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/business-google-sheets"
                    }, {
                        title: "Google Slides",
                        href: "/editable/business-google-slides"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/business-pages"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/business-numbers"
                    }, {
                        title: "Apple Keynote",
                        href: "/editable/business-keynote"
                    }, {
                        title: "Adobe PDF",
                        href: "/editable/business-pdf"
                    }, {
                        title: "Adobe PSD",
                        href: "/editable/business-psd"
                    }, {
                        title: "Adobe InDesign",
                        href: "/editable/business-indesign"
                    }, {
                        title: "Adobe Illustrator",
                        href: "/editable/business-illustrator"
                    }, {
                        title: "HTML5",
                        href: "/editable/business-html"
                    }, {
                        title: "Vector (EPS)",
                        href: "/editable/business-eps"
                    }, {
                        title: "SVG",
                        href: "/editable/business-svg"
                    }, {
                        title: "Image (JPG)",
                        href: "/editable/business-jpg"
                    }, {
                        title: "PNG",
                        href: "/editable/business-png"
                    }],
                    list: [{
                        title: "Accountant",
                        href: "/editable/accountant"
                    }, {
                        title: "Agency",
                        href: "/editable/agency"
                    }, {
                        title: "Church",
                        href: "/editable/church"
                    }, {
                        title: "College",
                        href: "/editable/college"
                    }, {
                        title: "Community",
                        href: "/editable/community"
                    }, {
                        title: "Company",
                        href: "/editable/company"
                    }, {
                        title: "Construction",
                        href: "/editable/construction"
                    }, {
                        title: "Consulting",
                        href: "/editable/consulting"
                    }, {
                        title: "Doctor",
                        href: "/editable/doctor"
                    }, {
                        title: "Event",
                        href: "/editable/event"
                    }, {
                        title: "Education",
                        href: "/editable/education"
                    }, {
                        title: "Finance",
                        href: "/editable/finance-templates"
                    }, {
                        title: "Fitness",
                        href: "/editable/fitness"
                    }, {
                        title: "Health",
                        href: "/editable/health"
                    }, {
                        title: "Home Care",
                        href: "/editable/home-care"
                    }, {
                        title: "HR",
                        href: "/editable/hr-templates"
                    }, {
                        title: "Insurance",
                        href: "/editable/insurance"
                    }, {
                        title: "IT & Software",
                        href: "/editable/it-and-software"
                    }, {
                        title: "Job",
                        href: "/editable/job"
                    }, {
                        title: "Law Firm",
                        href: "/editable/law-firm"
                    }, {
                        title: "Marketing",
                        href: "/editable/marketing-templates"
                    }, {
                        title: "Media",
                        href: "/editable/media"
                    }, {
                        title: "Medical",
                        href: "/editable/medical"
                    }, {
                        title: "Non Profit",
                        href: "/editable/non-profit"
                    }, {
                        title: "Photographer",
                        href: "/editable/photographer"
                    }, {
                        title: "Publishing",
                        href: "/editable/publishing"
                    }, {
                        title: "Real Estate",
                        href: "/editable/real-estate"
                    }, {
                        title: "Restaurant",
                        href: "/editable/restaurant"
                    }, {
                        title: "Retail",
                        href: "/editable/retail"
                    }, {
                        title: "Sales",
                        href: "/editable/sales-templates"
                    }, {
                        title: "School",
                        href: "/editable/school"
                    }, {
                        title: "Service",
                        href: "/editable/services"
                    }, {
                        title: "Small Business",
                        href: "/editable/small-business"
                    }, {
                        title: "Sport",
                        href: "/editable/sports"
                    }, {
                        title: "Startup",
                        href: "/editable/startup"
                    }, {
                        title: "Teacher",
                        href: "/editable/teacher"
                    }, {
                        title: "Technology",
                        href: "/editable/technology"
                    }, {
                        title: "Training",
                        href: "/editable/training"
                    }, {
                        title: "Travel Agent",
                        href: "/editable/travel-agent"
                    }, {
                        title: "University",
                        href: "/editable/university"
                    }, {
                        title: "Work From Home",
                        href: "/editable/work-from-home"
                    }]
                }, {
                    title: "Education",
                    href: "/editable/education",
                    imageLink: [{
                        urlImage: "https://images.template.net/49996/Bi-fold-University-Education-Brochure-Template.jpg",
                        type: "free",
                        href: "/editable/49996/bi-fold-university-education-brochure",
                        title: "Bi-Fold University Education Brochure Template"
                    }, {
                        urlImage: "https://images.template.net/24440/Download-Creative-Back-to-School-Flyer-Template.jpg",
                        type: "free",
                        href: "/editable/24440/creative-back-to-school-flyer",
                        title: "Creative Back to School Flyer Template"
                    }],
                    fileFormat: [{
                        title: "Microsoft Word",
                        href: "/editable/educational-word"
                    }, {
                        title: "Microsoft Excel",
                        href: "/editable/education-excel"
                    }, {
                        title: "Microsoft Presentations",
                        href: "/editable/education-ppt"
                    }, {
                        title: "Microsoft Publisher",
                        href: "/editable/education-publisher"
                    }, {
                        title: "Microsoft Outlook",
                        href: "/editable/education-outlook"
                    }, {
                        title: "Google Docs",
                        href: "/editable/education-google-docs"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/education-google-sheets"
                    }, {
                        title: "Google Slides",
                        href: "/editable/education-google-slides"
                    }, {
                        title: "Adobe PSD",
                        href: "/editable/education-psd"
                    }, {
                        title: "Adobe Illustrator",
                        href: "/editable/education-illustrator"
                    }, {
                        title: "Adobe InDesign",
                        href: "/editable/education-indesign"
                    }, {
                        title: "Adobe PDF",
                        href: "/editable/education-pdf"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/education-pages"
                    }, {
                        title: "Apple Keynote",
                        href: "/editable/education-keynote"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/education-numbers"
                    }],
                    list: [{
                        title: "Activity",
                        href: "/editable/activity"
                    }, {
                        title: "Affirmation Card",
                        href: "/editable/affirmation-card"
                    }, {
                        title: "Assessment",
                        href: "/editable/assessment"
                    }, {
                        title: "Assignment",
                        href: "/editable/assignment"
                    }, {
                        title: "Background",
                        href: "/editable/education-background"
                    }, {
                        title: "Badge/ Cutout",
                        href: "/editable/badge"
                    }, {
                        title: "Banner",
                        href: "/editable/education-banner"
                    }, {
                        title: "Border",
                        href: "/editable/border"
                    }, {
                        title: "Calendar",
                        href: "/editable/education-calendar"
                    }, {
                        title: "Certificate",
                        href: "/editable/education-certificate"
                    }, {
                        title: "Chart",
                        href: "/editable/education-chart"
                    }, {
                        title: "Checklist",
                        href: "/editable/education-checklist"
                    }, {
                        title: "Coloring Page",
                        href: "/editable/coloring-pages"
                    }, {
                        title: "Drawing",
                        href: "/editable/drawing"
                    }, {
                        title: "Essay",
                        href: "/editable/essay"
                    }, {
                        title: "Fact Sheet",
                        href: "/editable/education-fact-sheet"
                    }, {
                        title: "Flash Card",
                        href: "/editable/flashcards"
                    }, {
                        title: "Game",
                        href: "/editable/game"
                    }, {
                        title: "Goals",
                        href: "/editable/goal"
                    }, {
                        title: "Guide",
                        href: "/editable/guide"
                    }, {
                        title: "Handbook",
                        href: "https://template.net/editable/education-handbook"
                    }, {
                        title: "Handout",
                        href: "/editable/handout"
                    }, {
                        title: "Journal",
                        href: "/editable/education-journal"
                    }, {
                        title: "Lesson",
                        href: "/editable/lesson"
                    }, {
                        title: "Letter",
                        href: "/editable/educator-letter"
                    }, {
                        title: "List",
                        href: "/editable/education-list"
                    }, {
                        title: "Note",
                        href: "/editable/education-note"
                    }, {
                        title: "Planner",
                        href: "/editable/education-planner"
                    }, {
                        title: "Poster",
                        href: "/editable/education-poster"
                    }, {
                        title: "Presentation",
                        href: "/editable/education-presentation"
                    }, {
                        title: "Questions",
                        href: "/editable/question"
                    }, {
                        title: "Schedule",
                        href: "/editable/education-schedule"
                    }, {
                        title: "Shape",
                        href: "/editable/shape"
                    }, {
                        title: "Tips",
                        href: "/editable/tips"
                    }, {
                        title: "Tracker",
                        href: "/editable/education-tracker"
                    }, {
                        title: "WorkBook",
                        href: "/editable/workbook"
                    }, {
                        title: "Worksheet",
                        href: "/editable/worksheets"
                    }]
                }, {
                    title: "File Formats",
                    list: [{
                        title: "Microsoft Word",
                        href: "/editable/word"
                    }, {
                        title: "Google Docs",
                        href: "/editable/google-docs"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/pages"
                    }, {
                        title: "PDF",
                        href: "/editable/pdf"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/google-sheets"
                    }, {
                        title: "Microsoft Excel",
                        href: "/editable/excel"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/numbers"
                    }, {
                        title: "Microsoft Powerpoint (PPT)",
                        href: "/editable/ppt"
                    }, {
                        title: "Google Slides",
                        href: "/editable/google-slides"
                    }, {
                        title: "Apple Keynote",
                        href: "/editable/keynote"
                    }, {
                        title: "Adobe PSD",
                        href: "/editable/psd"
                    }, {
                        title: "Adobe InDesign",
                        href: "/editable/indesign"
                    }, {
                        title: "Microsoft Publisher",
                        href: "/editable/publisher"
                    }, {
                        title: "Adobe Illustrator",
                        href: "/editable/illustrator"
                    }, {
                        title: "Vector (eps)",
                        href: "/editable/eps"
                    }, {
                        title: "Image (Jpeg)",
                        href: "/editable/jpg"
                    }, {
                        title: "PNG",
                        href: "/editable/png"
                    }, {
                        title: "SVG",
                        href: "/editable/svg"
                    }, {
                        title: "Microsoft Outlook",
                        href: "/editable/outlook"
                    }]
                }, {
                    title: "SpreadSheet",
                    href: "/editable/spreadsheets",
                    imageLink: [{
                        urlImage: "https://images.template.net/128890/monthly-budget-worksheet-b4gj3.png",
                        type: "free",
                        href: "/editable/128890/monthly-budget-worksheet",
                        title: "Monthly Budget Worksheet"
                    }, {
                        urlImage: "https://images.template.net/128040/weekly-schedule-to-do-list-hfi2n.png",
                        type: "free",
                        href: "/editable/128040/weekly-schedule-to-do-list",
                        title: "Weekly Schedule To do List"
                    }],
                    fileFormat: [{
                        title: "Microsoft Excel",
                        href: "/editable/excel"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/google-sheets"
                    }, {
                        title: "Apple Numbers",
                        href: "/editable/numbers"
                    }],
                    list: [{
                        title: "Accounting",
                        href: "/editable/accounting-templates"
                    }, {
                        title: "BookKeeping",
                        href: "/editable/bookkeeping"
                    }, {
                        title: "Budget",
                        href: "/editable/budget-templates"
                    }, {
                        title: "Business",
                        href: "/editable/business-spreadsheet"
                    }, {
                        title: "Calculator",
                        href: "/editable/calculator-templates"
                    }, {
                        title: "Calendar",
                        href: "/editable/calendar-spreadsheet"
                    }, {
                        title: "Chart",
                        href: "/editable/chart-spreadsheet"
                    }, {
                        title: "Checklist",
                        href: "/editable/checklist-spreadsheet"
                    }, {
                        title: "Cost",
                        href: "/editable/cost-sheet"
                    }, {
                        title: "Dashboard",
                        href: "/editable/dashboard"
                    }, {
                        title: "Debt",
                        href: "/editable/debt"
                    }, {
                        title: "Education",
                        href: "/editable/education-spreadsheet"
                    }, {
                        title: "Expense",
                        href: "/editable/expense"
                    }, {
                        title: "Estimate",
                        href: "/editable/estimate-templates"
                    }, {
                        title: "Fact",
                        href: "/editable/fact-sheet"
                    }, {
                        title: "Finance",
                        href: "/editable/finance-spreadsheet"
                    }, {
                        title: "Gantt",
                        href: "/editable/charts/gantt"
                    }, {
                        title: "Health",
                        href: "/editable/health-spreadsheet"
                    }, {
                        title: "Hr",
                        href: "https://template.net/editable/hr-spreadsheet"
                    }, {
                        title: "Information",
                        href: "/editable/information-sheet"
                    }, {
                        title: "Inventory",
                        href: "/editable/inventory-sheet"
                    }, {
                        title: "Invoice",
                        href: "/editable/invoice-spreadsheet"
                    }, {
                        title: "Itinerary",
                        href: "/editable/itinerary-spreadsheet"
                    }, {
                        title: "List",
                        href: "/editable/list-spreadsheet"
                    }, {
                        title: "Log",
                        href: "/editable/sheet/log"
                    }, {
                        title: "Mortgage",
                        href: "/editable/mortgage"
                    }, {
                        title: "Planner",
                        href: "/editable/planner-spreadsheet"
                    }, {
                        title: "Project Management",
                        href: "/editable/project-management"
                    }, {
                        title: "Purchase Order",
                        href: "/editable/purchase-orders"
                    }, {
                        title: "Receipt",
                        href: "/editable/receipt-spreadsheet"
                    }, {
                        title: "Report",
                        href: "/editable/report-sheet"
                    }, {
                        title: "Schedule",
                        href: "/editable/schedule-spreadsheet"
                    }, {
                        title: "Signup",
                        href: "/editable/signup"
                    }, {
                        title: "Statement ",
                        href: "/editable/sheet/statements"
                    }, {
                        title: "Task",
                        href: "/editable/task"
                    }, {
                        title: "Timeline",
                        href: "/editable/timeline-sheet"
                    }, {
                        title: "Timesheet",
                        href: "/editable/time-sheet"
                    }, {
                        title: "Tracker",
                        href: "/editable/trackers"
                    }]
                }, {
                    title: "AI Tools",
                    list: [{
                        title: "Lesson Summary",
                        href: "https://www.template.net/ai/lesson-summary"
                    }, {
                        title: "Lesson Plan",
                        href: "https://www.template.net/ai/lesson-plan"
                    }, {
                        title: "Lesson Script",
                        href: "https://www.template.net/ai/lesson-script"
                    }, {
                        title: "Lesson Outline",
                        href: "https://www.template.net/ai/lesson-outline"
                    }, {
                        title: "Lesson Introduction",
                        href: "https://www.template.net/ai/lesson-introduction"
                    }, {
                        title: "Job Description",
                        href: "https://www.template.net/ai/job-description"
                    }, {
                        title: "Job Resume",
                        href: "https://www.template.net/ai/job-resume"
                    }, {
                        title: "Job Cover Letter",
                        href: "https://www.template.net/ai/job-cover-letter"
                    }, {
                        title: "Travel Proposal",
                        href: "https://www.template.net/ai/travel-proposal"
                    }, {
                        title: "Lesson Notes",
                        href: "https://www.template.net/ai/lesson-notes"
                    }, {
                        title: "Instagram post",
                        href: "https://www.template.net/ai/instagram-post"
                    }, {
                        title: "Facebook post",
                        href: "https://www.template.net/ai/facebook-post"
                    }, {
                        title: "Linkedin post",
                        href: "https://www.template.net/ai/linkedin-post"
                    }, {
                        title: "Twitter post",
                        href: "https://www.template.net/ai/twitter-post"
                    }, {
                        title: "WhatsApp post",
                        href: "https://www.template.net/ai/whatsapp-post"
                    }]
                }],
                a = [{
                    title: "File Formats",
                    list: [{
                        title: "Apple Numbers",
                        href: "/editable/numbers"
                    }, {
                        title: "Apple Pages",
                        href: "/editable/pages"
                    }, {
                        title: "Google Docs",
                        href: "/editable/google-docs"
                    }, {
                        title: "Google Sheets",
                        href: "/editable/google-sheets"
                    }, {
                        title: "Google Slides",
                        href: "/editable/google-slides"
                    }, {
                        title: "Illustrator",
                        href: "/editable/illustrator"
                    }, {
                        title: "Image (JPEG)",
                        href: "/editable/jpg"
                    }, {
                        title: "Indesign",
                        href: "/editable/indesign"
                    }, {
                        title: "Keynote",
                        href: "/editable/keynote"
                    }, {
                        title: "Ms Excel",
                        href: "/editable/excel"
                    }, {
                        title: "Ms Powerpoint",
                        href: "/editable/ppt"
                    }, {
                        title: "Ms Word",
                        href: "/editable/word"
                    }, {
                        title: "Outlook",
                        href: "/editable/outlook"
                    }, {
                        title: "PDF",
                        href: "/editable/pdf"
                    }, {
                        title: "PNG",
                        href: "/editable/png"
                    }, {
                        title: "Photoshop",
                        href: "/editable/psd"
                    }, {
                        title: "Publisher",
                        href: "/editable/publisher"
                    }, {
                        title: "SVG",
                        href: "/editable/svg"
                    }, {
                        title: "Vector (EPS)",
                        href: "/editable/vector"
                    }]
                }]
        },
        34319: (e, t, i) => {
            i.d(t, {
                Z: () => a
            });
            var l = i(67294);
            const a = e => {
                const [t, i] = (0, l.useState)({
                    inputTimeout: 0
                });
                return l => {
                    t.inputTimeout && clearTimeout(t.inputTimeout), i({
                        inputTimeout: setTimeout((() => {
                            l(), clearTimeout(t.inputTimeout)
                        }), 1e3 * e)
                    })
                }
            }
        }
    }
]);