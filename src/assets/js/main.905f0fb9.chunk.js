(this.webpackJsonpundefined = this.webpackJsonpundefined || []).push([[0], {
    101: function(e, t) {},
    112: function(e, t, n) {},
    113: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(4)
          , i = n(73)
          , s = n.n(i)
          , r = n(10)
          , p = n(14)
          , u = n(134)
          , o = n(143)
          , y = n(139)
          , l = n(141)
          , d = n.p + "static/media/logo.adba3ca3.svg"
          , m = n(3)
          , c = Object(p.a)(l.a)((function(e) {
            var t = e.theme;
            return Object(r.a)({
                underline: "none",
                width: "100%",
                paddingTop: "10px",
                position: "relative",
                left: 0,
                fontFamily: "Simple",
                fontSize: "20px",
                fontWeight: "normal",
                color: "#fff",
                transition: "color 300ms, left 300ms",
                "&:hover": {
                    color: "#447afa",
                    left: "5px",
                    transition: "color 300ms ease-in-out, left 300ms ease-in-out"
                }
            }, t.breakpoints.down("sm"), {
                textAlign: "center",
                "&:hover": {
                    color: "#447afa",
                    left: "0",
                    transition: "color 300ms ease-in-out"
                }
            })
        }
        ))
          , b = function() {
            var e = Object(u.a)();
            return Object(m.jsx)(o.a, {
                fixed: !0,
                sx: {
                    paddingTop: 10
                },
                children: Object(m.jsxs)(y.a, {
                    container: !0,
                    direction: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    sx: Object(r.a)({}, e.breakpoints.down("sm"), {
                        flexDirection: "column"
                    }),
                    children: [Object(m.jsx)(y.a, {
                        item: !0,
                        sx: {
                            paddingBottom: "40px"
                        },
                        children: Object(m.jsx)("img", {
                            src: d,
                            alt: "CyberDAO",
                            width: "100%"
                        })
                    }), Object(m.jsx)(y.a, {
                        item: !0,
                        sx: Object(r.a)({}, e.breakpoints.down("sm"), {
                            width: "80%"
                        }),
                        children: Object(m.jsx)("nav", {
                            children: Object(m.jsxs)(y.a, {
                                container: !0,
                                direction: "column",
                                justifyContent: "space-between",
                                sx: Object(r.a)({}, e.breakpoints.down("sm"), {
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center"
                                }),
                                children: [Object(m.jsx)(y.a, {
                                    item: !0,
                                    children: Object(m.jsx)(c, {
                                        href: "https://discord.gg/cyberdao",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        underline: "none",
                                        children: ".DISCORD"
                                    })
                                }), Object(m.jsx)(y.a, {
                                    item: !0,
                                    children: Object(m.jsx)(c, {
                                        href: "https://cyberda0.medium.com/",
                                        underline: "none",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: ".MEDIUM"
                                    })
                                }), Object(m.jsx)(y.a, {
                                    item: !0,
                                    children: Object(m.jsx)(c, {
                                        href: "https://twitter.com/CyberDA0",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        underline: "none",
                                        children: ".TWITTER"
                                    })
                                })]
                            })
                        })
                    })]
                })
            })
        }
          , f = n(137)
          , x = n.p + "static/media/warning.95453aa2.svg"
          , T = n.p + "static/media/access-point.75af9452.svg"
          , j = Object(p.a)(f.a)((function() {
            return {
                fontFamily: "Simple",
                fontSize: "22px",
                background: "#232323",
                transition: "color 300ms ease-in-out, left 300ms ease-in-out",
                paddingTop: "10px",
                color: "white",
                "&:hover": {
                    background: "#232323",
                    color: "#447afa",
                    cursor: "pointer"
                },
                marginBottom: "20px"
            }
        }
        ))
          , g = function() {
            return Object(m.jsx)(o.a, {
                fixed: !0,
                children: Object(m.jsxs)(y.a, {
                    container: !0,
                    direction: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    columnSpacing: {
                        xs: 2
                    },
                    paddingTop: "5%",
                    children: [Object(m.jsxs)(y.a, {
                        item: !0,
                        sx: {
                            maxWidth: "355px",
                            marginTop: "20px",
                            textAlign: "center"
                        },
                        children: [Object(m.jsx)(j, {
                            href: "https://app.cyberdao.finance",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            fullWidth: !0,
                            children: "ENTER APP"
                        }), Object(m.jsx)("img", {
                            src: T,
                            alt: "Access Point"
                        })]
                    }), Object(m.jsxs)(y.a, {
                        item: !0,
                        sx: {
                            maxWidth: "355px",
                            marginTop: "20px",
                            textAlign: "center"
                        },
                        children: [Object(m.jsx)(j, {
                            href: "#",
                            fullWidth: !0,
                            children: "-"
                        }), Object(m.jsx)("img", {
                            src: x,
                            alt: "Read Manual"
                        })]
                    })]
                })
            })
        }
          , v = n(2)
          , h = n.n(v)
          , O = n(78)
          , w = n(18)
          , M = n(32)
          , C = n(142)
          , S = n(144)
          , k = n(66)
          , D = n(67)
          , A = n(68)
          , I = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return new Intl.NumberFormat("en-US",{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: t,
                minimumFractionDigits: t
            }).format(e)
        }
          , _ = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return "".concat(new Intl.NumberFormat("en-US",{
                maximumFractionDigits: t,
                minimumFractionDigits: t
            }).format(e), "%")
        }
          , F = function() {
            var e = Object(a.useState)("-")
              , t = Object(w.a)(e, 2)
              , n = t[0]
              , i = t[1]
              , s = Object(a.useState)("-")
              , r = Object(w.a)(s, 2)
              , p = r[0]
              , u = r[1]
              , l = Object(a.useState)("-")
              , d = Object(w.a)(l, 2)
              , c = d[0]
              , b = d[1]
              , f = Object(a.useState)("-")
              , x = Object(w.a)(f, 2)
              , T = x[0]
              , j = x[1];
            Object(a.useEffect)((function() {
                Object(O.a)(h.a.mark((function e() {
                    var t, n, a, s, r, p, o, y, l, d, m, c;
                    return h.a.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return "0x03DC939C447F670923f953Da9b421E20114F6D10",
                                "0x1C24b055d771a7C966C0A035933d1C05998CF491",
                                "0x7b780eEDA32e67C23C7f1c88238316b9a180E19A",
                                t = new M.a.providers.JsonRpcProvider("https://ftmrpc.ultimatenodes.io/",250),
                                n = new M.a.Contract("0x1C24b055d771a7C966C0A035933d1C05998CF491",A,t),
                                a = new M.a.Contract("0x03DC939C447F670923f953Da9b421E20114F6D10",D,t),
                                s = new M.a.Contract("0x7b780eEDA32e67C23C7f1c88238316b9a180E19A",k,t),
                                e.next = 9,
                                Promise.all([a.getReserves(), s.epoch(), n.radiatingSupply(), n.radioactivity()]);
                            case 9:
                                r = e.sent,
                                p = Object(w.a)(r, 4),
                                o = Object(w.a)(p[0], 2),
                                y = o[0],
                                l = o[1],
                                d = p[1],
                                m = p[2],
                                c = p[3],
                                i(I(Number(M.a.utils.formatUnits(l.div(y), 9)), 2)),
                                u(I(Number(M.a.utils.formatUnits(l.div(y).mul(c))), 2)),
                                j(_(Math.pow(1 + Number(M.a.utils.formatUnits(d.distribute, 9)) / Number(M.a.utils.formatUnits(m, 9)), 1095) - 1)),
                                b(I(Number(M.a.utils.formatUnits(m.mul(l.div(y))))));
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), []);
            var g = [{
                title: "Current $CYBER Price",
                value: n
            }, {
                title: "Current $NOX Price",
                value: p
            }, {
                title: "Total Value Locked",
                value: c
            }, {
                title: "Current APY",
                value: T
            }];
            return Object(m.jsxs)(m.Fragment, {
                children: [Object(m.jsx)(o.a, {
                    fixed: !0,
                    children: Object(m.jsx)(y.a, {
                        container: !0,
                        direction: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginTop: "50px",
                        children: g.map((function(e, t) {
                            var n = e.title
                              , a = e.value;
                            return Object(m.jsxs)(y.a, {
                                item: !0,
                                xs: 12,
                                sm: 6,
                                md: 3,
                                lg: 3,
                                sx: {
                                    textAlign: "center"
                                },
                                children: [Object(m.jsx)(C.a, {
                                    variant: "h5",
                                    component: "div",
                                    sx: {
                                        fontFamily: "Simple",
                                        fontSize: "22px",
                                        marginTop: "10px"
                                    },
                                    children: Object(m.jsx)("span", {
                                        children: n
                                    })
                                }), Object(m.jsx)(C.a, {
                                    variant: "h5",
                                    component: "div",
                                    sx: {
                                        fontFamily: "Simple",
                                        fontSize: "22px",
                                        color: "#447afa",
                                        marginTop: "10px"
                                    },
                                    children: a
                                })]
                            }, t)
                        }
                        ))
                    })
                }), Object(m.jsx)(o.a, {
                    fixed: !0,
                    sx: {
                        textAlign: "center",
                        marginTop: "20px"
                    },
                    children: Object(m.jsx)(S.a, {
                        variant: "middle",
                        sx: {
                            width: "55%",
                            margin: "0 auto",
                            borderColor: "#c4c4c4",
                            paddingTop: "40px"
                        }
                    })
                })]
            })
        }
          , R = n(82);
        function N(e) {
            var t = Object.assign({}, e);
            return Object(m.jsx)(C.a, Object(R.a)({
                variant: "body1",
                gutterBottom: !0,
                sx: {
                    fontFamily: "Simple",
                    fontStyle: "normal",
                    textAlign: "center",
                    fontSize: "14px",
                    paddingTop: "11px",
                    span: {
                        fontSize: "14px"
                    }
                }
            }, t))
        }
        var L = function() {
            return Object(m.jsx)(m.Fragment, {
                children: Object(m.jsxs)(o.a, {
                    fixed: !0,
                    sx: {
                        position: "relative",
                        textAlign: "center",
                        marginTop: "40px"
                    },
                    children: [Object(m.jsxs)(N, {
                        children: ["The year is ", Object(m.jsx)("span", {
                            children: "2077"
                        }), ".", Object(m.jsx)("br", {}), "Earth has almost been destroyed in the Great War.", Object(m.jsx)("br", {}), "Mars has been terraformed, and the 0.1% elite is now living on it.", Object(m.jsx)("br", {}), "Most of humanity now resides in ", Object(m.jsx)("span", {
                            children: "Nox City"
                        }), ", a megalopolis sitting at the center of a barren wasteland.", Object(m.jsx)("br", {}), "Cyber enhancements, cyber drugs and cyber money, almost everything and everyone has been cybernized in order to survive the ho", Object(m.jsx)(m.Fragment, {
                            children: "st"
                        }), "ile environment and trying to escape the Earth.", Object(m.jsx)("br", {}), "But moving to Mars isn\u2019t an ea", Object(m.jsx)(m.Fragment, {
                            children: "sy"
                        }), " task.", Object(m.jsx)("br", {}), "Only the most powerful and wealthy have a chance to secure their place on the pro", Object(m.jsx)(m.Fragment, {
                            children: "mi"
                        }), "sed land. And that kind of wealth and power cannot be reached alone.", Object(m.jsx)("br", {}), "It requires forming alliances.", Object(m.jsx)("br", {}), "Most of Nox City\u2019s tra", Object(m.jsx)(m.Fragment, {
                            children: "de"
                        }), "rs don\u2019t share the same values, nor appetite for risk.", Object(m.jsx)("br", {}), "But despite their differences, they are willing to pool their resources and efforts to", Object(m.jsx)(m.Fragment, {
                            children: "ge"
                        }), "ther in order to reach Mars.", Object(m.jsx)("br", {}), "United under CYBER.", Object(m.jsx)("br", {}), Object(m.jsx)("span", {
                            children: "They are CyberDAO"
                        }), "."]
                    }), Object(m.jsx)(S.a, {
                        variant: "middle",
                        sx: {
                            width: "55%",
                            margin: "0 auto",
                            borderColor: "#c4c4c4",
                            paddingTop: "40px"
                        }
                    }), Object(m.jsx)(S.a, {
                        sx: {
                            "&:before": {
                                content: '""',
                                position: "absolute",
                                left: "0",
                                width: "15%",
                                height: "1px",
                                backgroundColor: "white"
                            },
                            "&:after": {
                                content: '""',
                                position: "absolute",
                                right: "0",
                                width: "15%",
                                height: "1px",
                                backgroundColor: "white"
                            }
                        }
                    })]
                })
            })
        }
          , E = n(145)
          , B = n.p + "static/media/factions-bg.2fc105dd.png"
          , P = n.p + "static/media/defi.cc3ea019.png"
          , U = n.p + "static/media/degen.9a09b7b4.png"
          , z = n.p + "static/media/stable.1b142ec5.png"
          , W = n.p + "static/media/synth.81a31e0c.png"
          , Y = n.p + "static/media/middle.3239daab.png"
          , V = n.p + "static/media/instruction-decal.3f759535.svg"
          , H = n.p + "static/media/B4-decals.c0c7f909.svg"
          , J = function() {
            var e = Object(u.a)();
            return Object(m.jsx)(E.a, {
                sx: {
                    background: "#000",
                    backgroundImage: "url(".concat(B, ")"),
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                },
                className: "factions",
                children: Object(m.jsxs)(o.a, {
                    sx: {
                        maxWidth: {
                            md: "84%",
                            lg: "1200px",
                            xl: "1200px"
                        }
                    },
                    children: [Object(m.jsxs)(y.a, {
                        container: !0,
                        direction: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        sx: Object(r.a)({
                            display: "flex",
                            marginTop: "84px"
                        }, e.breakpoints.down("md"), {
                            textAlign: "center",
                            alignItems: "center",
                            flexDirection: "column-reverse"
                        }),
                        children: [Object(m.jsxs)(y.a, {
                            item: !0,
                            children: [Object(m.jsxs)(C.a, {
                                variant: "h1",
                                sx: {
                                    fontSize: "40px",
                                    marginTop: "20px",
                                    textTransform: "uppercase",
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "left"
                                    }
                                },
                                children: [Object(m.jsx)("span", {
                                    children: "5"
                                }), " Factions"]
                            }), Object(m.jsxs)(C.a, {
                                variant: "body1",
                                sx: {
                                    textTransform: "uppercase",
                                    textAlign: {
                                        xs: "center",
                                        sm: "center",
                                        md: "left"
                                    },
                                    fontSize: "14px",
                                    marginTop: "40px"
                                },
                                children: ["Pick a ", Object(m.jsx)("span", {
                                    children: "faction"
                                }), ".", Object(m.jsx)("br", {}), "Compete in the Stake to Thrill tournament.", Object(m.jsx)("br", {}), "Winner takes it all."]
                            })]
                        }), Object(m.jsx)(y.a, {
                            item: !0,
                            sx: {
                                display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "block"
                                }
                            },
                            children: Object(m.jsx)("img", {
                                src: H,
                                alt: ""
                            })
                        })]
                    }), Object(m.jsxs)(y.a, {
                        container: !0,
                        direction: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        sx: {
                            marginTop: "80px"
                        },
                        children: [[{
                            acid: "Synth",
                            name: "Aka",
                            text: "Intellect. Discipline. Knowledge.",
                            drug: ".Boost"
                        }, {
                            acid: "Stable",
                            name: "Tech",
                            text: "Unparalleled influence.",
                            drug: ".Dorph"
                        }, {
                            acid: "DeFi",
                            name: "Boys",
                            text: "Hacking. Digital mastery.",
                            drug: ".Blue_Glass"
                        }, {
                            acid: "Middle",
                            name: "Strom",
                            text: "Shoot first. Ask questions later.",
                            drug: ".Black_Lace"
                        }, {
                            acid: "Degen'",
                            name: "Street",
                            text: "GM. LFG.",
                            drug: ".Smash"
                        }].map((function(t, n) {
                            var a, i = t.acid, s = t.name, p = t.text, u = t.drug;
                            return Object(m.jsx)(y.a, {
                                item: !0,
                                container: !0,
                                direction: "column",
                                sx: {
                                    textAlign: "center",
                                    marginBottom: "80px"
                                },
                                children: Object(m.jsxs)(y.a, {
                                    container: !0,
                                    alignItems: "center",
                                    sx: Object(r.a)({
                                        flexDirection: n % 2 === 0 ? "row" : "row-reverse",
                                        alignItems: "center",
                                        justifyContent: {
                                            xs: "center",
                                            sm: n % 2 === 0 ? "flex-start" : "end"
                                        }
                                    }, e.breakpoints.down("sm"), {
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }),
                                    children: [Object(m.jsx)(y.a, {
                                        children: Object(m.jsx)(E.a, {
                                            display: "flex",
                                            alignItems: "center",
                                            borderRadius: "50%",
                                            justifyContent: "center",
                                            sx: Object(r.a)({}, e.breakpoints.down("sm"), {
                                                textAlign: "center"
                                            }),
                                            children: Object(m.jsx)("img", {
                                                alt: "complex",
                                                src: [W, z, P, Y, U][n],
                                                width: "250px"
                                            })
                                        })
                                    }), Object(m.jsxs)(y.a, {
                                        item: !0,
                                        sx: (a = {},
                                        Object(r.a)(a, e.breakpoints.up("sm"), {
                                            textAlign: n % 2 === 0 ? "left" : "right"
                                        }),
                                        Object(r.a)(a, e.breakpoints.down("sm"), {
                                            textAlign: "center"
                                        }),
                                        a),
                                        children: [Object(m.jsxs)(C.a, {
                                            sx: {
                                                fontSize: "32px"
                                            },
                                            children: [Object(m.jsx)("span", {
                                                children: i
                                            }), s]
                                        }), Object(m.jsx)(C.a, {
                                            variant: "body2",
                                            sx: {
                                                fontSize: "14px"
                                            },
                                            children: p
                                        }), Object(m.jsx)(C.a, {
                                            variant: "body2",
                                            sx: {
                                                fontSize: "18px"
                                            },
                                            children: Object(m.jsx)("span", {
                                                children: u
                                            })
                                        })]
                                    })]
                                }, n)
                            }, n)
                        }
                        )), Object(m.jsx)(y.a, {
                            item: !0,
                            sx: {
                                marginBottom: "112px"
                            },
                            children: Object(m.jsx)("img", {
                                src: V,
                                alt: ""
                            })
                        })]
                    })]
                })
            })
        }
          , q = n.p + "static/media/caution.e23eddf5.svg"
          , G = function() {
            return Object(m.jsx)(E.a, {
                sx: {
                    background: "#000",
                    padding: "64px"
                },
                children: Object(m.jsx)(y.a, {
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: Object(m.jsx)("img", {
                        src: q,
                        width: "200px",
                        alt: "Caution"
                    })
                })
            })
        }
          , Q = n(136)
          , $ = n(83)
          , K = n(140)
          , X = n.p + "static/media/header-bg.7c154ef3.png"
          , Z = Object($.a)({
            typography: {
                fontFamily: ["Simple", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"].join(",")
            }
        })
          , ee = function() {
            return Object(m.jsxs)(K.a, {
                theme: Z,
                children: [Object(m.jsx)(Q.a, {
                    styles: {
                        body: {
                            background: "#000",
                            backgroundImage: "url(".concat(X, ")"),
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }
                    }
                }), Object(m.jsx)(b, {}), Object(m.jsx)(g, {}), Object(m.jsx)(F, {}), Object(m.jsx)(L, {}), Object(m.jsx)(J, {}), Object(m.jsx)(G, {})]
            })
        };
        n(112);
        function te() {
            return Object(m.jsx)(ee, {})
        }
        s.a.render(Object(m.jsx)(te, {}), document.getElementById("root"))
    },
    66: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_Cyber","type":"address"},{"internalType":"address","name":"_Nox","type":"address"},{"internalType":"uint256","name":"_fissionCoolDownPeriod","type":"uint256"},{"internalType":"uint32","name":"_epochLength","type":"uint32"},{"internalType":"uint32","name":"_firstEpochTime","type":"uint32"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogClaimFission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogFission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogFusion","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"distribute","type":"uint256"}],"name":"LogRadiate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"enum Reactor.CONTRACTS","name":"contractType","type":"uint8"},{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"LogSetContract","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"period","type":"uint256"}],"name":"LogSetFissionCoolDown","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"radioactiveDecay","type":"uint256"}],"name":"LogSetRadioactiveDecay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"Cyber","outputs":[{"internalType":"contract ICyber","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Nox","outputs":[{"internalType":"contract INox","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"augmentations","outputs":[{"internalType":"contract IAugmentations","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"bool","name":"_triggerRadiation","type":"bool"}],"name":"claimCyber","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cyberCoolingDown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"contract IDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"distribute","type":"uint256"},{"internalType":"uint32","name":"length","type":"uint32"},{"internalType":"uint32","name":"endTime","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"bool","name":"_triggerRadiation","type":"bool"}],"name":"fission","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"fissionCoolDown","outputs":[{"internalType":"uint256","name":"cyber","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"lock","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fissionCoolDownPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"fuse","outputs":[{"internalType":"uint256","name":"noxAmount_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"giveLockBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"locker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"quests","outputs":[{"internalType":"contract IQuests","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"radiate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"radioactiveDecay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"returnLockBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum Reactor.CONTRACTS","name":"_contract","type":"uint8"},{"internalType":"address","name":"_address","type":"address"}],"name":"setContract","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_coolDownPeriod","type":"uint256"}],"name":"setFissionCoolDown","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_radioactiveDecay","type":"uint256"}],"name":"setRadioactiveDecay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBonus","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    },
    67: function(e) {
        e.exports = JSON.parse('[{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"event","name":"Approval","inputs":[{"type":"address","name":"owner","internalType":"address","indexed":true},{"type":"address","name":"spender","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Burn","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Mint","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"Swap","inputs":[{"type":"address","name":"sender","internalType":"address","indexed":true},{"type":"uint256","name":"amount0In","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1In","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount0Out","internalType":"uint256","indexed":false},{"type":"uint256","name":"amount1Out","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Sync","inputs":[{"type":"uint112","name":"reserve0","internalType":"uint112","indexed":false},{"type":"uint112","name":"reserve1","internalType":"uint112","indexed":false}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"type":"address","name":"from","internalType":"address","indexed":true},{"type":"address","name":"to","internalType":"address","indexed":true},{"type":"uint256","name":"value","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"DOMAIN_SEPARATOR","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"MINIMUM_LIQUIDITY","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bytes32","name":"","internalType":"bytes32"}],"name":"PERMIT_TYPEHASH","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"allowance","inputs":[{"type":"address","name":"","internalType":"address"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"approve","inputs":[{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"balanceOf","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"amount0","internalType":"uint256"},{"type":"uint256","name":"amount1","internalType":"uint256"}],"name":"burn","inputs":[{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint8","name":"","internalType":"uint8"}],"name":"decimals","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"factory","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint112","name":"_reserve0","internalType":"uint112"},{"type":"uint112","name":"_reserve1","internalType":"uint112"},{"type":"uint32","name":"_blockTimestampLast","internalType":"uint32"}],"name":"getReserves","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"initialize","inputs":[{"type":"address","name":"_token0","internalType":"address"},{"type":"address","name":"_token1","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"kLast","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"uint256","name":"liquidity","internalType":"uint256"}],"name":"mint","inputs":[{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"name","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"nonces","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"permit","inputs":[{"type":"address","name":"owner","internalType":"address"},{"type":"address","name":"spender","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price","inputs":[{"type":"address","name":"token","internalType":"address"},{"type":"uint256","name":"baseDecimal","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price0CumulativeLast","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"price1CumulativeLast","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"skim","inputs":[{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"swap","inputs":[{"type":"uint256","name":"amount0Out","internalType":"uint256"},{"type":"uint256","name":"amount1Out","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"},{"type":"bytes","name":"data","internalType":"bytes"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"string","name":"","internalType":"string"}],"name":"symbol","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"sync","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"token0","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"token1","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalSupply","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transfer","inputs":[{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"transferFrom","inputs":[{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"value","internalType":"uint256"}]}]')
    },
    68: function(e) {
        e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogFission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogFusion","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"radiation","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"radioactivity","type":"uint256"}],"name":"LogRadiation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reactor","type":"address"}],"name":"LogReactorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"radioactivity","type":"uint256"}],"name":"LogSetRadioactivity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"LogSupply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LogTransferNuclei","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_NUCLEI_DENSITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"RADIOACTIVITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_NUCLEI","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkpoints","outputs":[{"internalType":"uint256","name":"fromBlock","type":"uint256"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"fuse","outputs":[{"internalType":"uint256","name":"noxAmount_","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"reactor_","type":"address"}],"name":"initialize","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initializer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nuclei","type":"uint256"}],"name":"noxDensity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numberOfCheckpoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"emission_","type":"uint256"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"name":"radiate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"radiatingSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"radiations","outputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"radiation","type":"uint256"},{"internalType":"uint256","name":"previousRadiatingSupply","type":"uint256"},{"internalType":"uint256","name":"newRadiatingSupply","type":"uint256"},{"internalType":"uint256","name":"emission","type":"uint256"},{"internalType":"uint256","name":"radioactivity","type":"uint256"},{"internalType":"uint32","name":"timeOccurred","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"radiationsEmitted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"radioactivity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reactor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_RADIOACTIVITY","type":"uint256"}],"name":"setRadioactivity","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"},{"internalType":"bool","name":"direct","type":"bool"},{"internalType":"bool","name":"renounce","type":"bool"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"unstableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstableDensity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')
    }
}, [[113, 1, 2]]]);
export{
    main
}
//# sourceMappingURL=main.905f0fb9.chunk.js.map