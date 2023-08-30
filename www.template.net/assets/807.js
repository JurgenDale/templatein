/*!For license information please see 807.js.LICENSE.txt*/
(self.webpackChunktnet_fe = self.webpackChunktnet_fe || []).push([
    [807], {
        17331: e => {
            function t() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(e) {
                return "function" == typeof e
            }

            function n(e) {
                return "object" == typeof e && null !== e
            }

            function i(e) {
                return void 0 === e
            }
            e.exports = t, t.prototype._events = void 0, t.prototype._maxListeners = void 0, t.defaultMaxListeners = 10, t.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                return this._maxListeners = e, this
            }, t.prototype.emit = function(e) {
                var t, a, s, c, u, o;
                if (this._events || (this._events = {}), "error" === e && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1]) instanceof Error) throw t;
                    var f = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw f.context = t, f
                }
                if (i(a = this._events[e])) return !1;
                if (r(a)) switch (arguments.length) {
                    case 1:
                        a.call(this);
                        break;
                    case 2:
                        a.call(this, arguments[1]);
                        break;
                    case 3:
                        a.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        c = Array.prototype.slice.call(arguments, 1), a.apply(this, c)
                } else if (n(a))
                    for (c = Array.prototype.slice.call(arguments, 1), s = (o = a.slice()).length, u = 0; u < s; u++) o[u].apply(this, c);
                return !0
            }, t.prototype.addListener = function(e, a) {
                var s;
                if (!r(a)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, r(a.listener) ? a.listener : a), this._events[e] ? n(this._events[e]) ? this._events[e].push(a) : this._events[e] = [this._events[e], a] : this._events[e] = a, n(this._events[e]) && !this._events[e].warned && (s = i(this._maxListeners) ? t.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
            }, t.prototype.on = t.prototype.addListener, t.prototype.once = function(e, t) {
                if (!r(t)) throw TypeError("listener must be a function");
                var n = !1;

                function i() {
                    this.removeListener(e, i), n || (n = !0, t.apply(this, arguments))
                }
                return i.listener = t, this.on(e, i), this
            }, t.prototype.removeListener = function(e, t) {
                var i, a, s, c;
                if (!r(t)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[e]) return this;
                if (s = (i = this._events[e]).length, a = -1, i === t || r(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                else if (n(i)) {
                    for (c = s; c-- > 0;)
                        if (i[c] === t || i[c].listener && i[c].listener === t) {
                            a = c;
                            break
                        }
                    if (a < 0) return this;
                    1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(a, 1), this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }, t.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                if (0 === arguments.length) {
                    for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r(n = this._events[e])) this.removeListener(e, n);
                else if (n)
                    for (; n.length;) this.removeListener(e, n[n.length - 1]);
                return delete this._events[e], this
            }, t.prototype.listeners = function(e) {
                return this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }, t.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t)) return 1;
                    if (t) return t.length
                }
                return 0
            }, t.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        8131: (e, t, r) => {
            "use strict";
            var n = r(49374),
                i = r(17775),
                a = r(23076);

            function s(e, t, r) {
                return new n(e, t, r)
            }
            s.version = r(24336), s.AlgoliaSearchHelper = n, s.SearchParameters = i, s.SearchResults = a, e.exports = s
        },
        68078: (e, t, r) => {
            "use strict";
            var n = r(17331);

            function i(e, t) {
                this.main = e, this.fn = t, this.lastResults = null
            }
            r(14853)(i, n), i.prototype.detach = function() {
                this.removeAllListeners(), this.main.detachDerivedHelper(this)
            }, i.prototype.getModifiedState = function(e) {
                return this.fn(e)
            }, e.exports = i
        },
        82437: (e, t, r) => {
            "use strict";
            var n = r(52344),
                i = r(49803),
                a = r(90116),
                s = {
                    addRefinement: function(e, t, r) {
                        if (s.isRefined(e, t, r)) return e;
                        var i = "" + r,
                            a = e[t] ? e[t].concat(i) : [i],
                            c = {};
                        return c[t] = a, n({}, c, e)
                    },
                    removeRefinement: function(e, t, r) {
                        if (void 0 === r) return s.clearRefinement(e, (function(e, r) {
                            return t === r
                        }));
                        var n = "" + r;
                        return s.clearRefinement(e, (function(e, r) {
                            return t === r && n === e
                        }))
                    },
                    toggleRefinement: function(e, t, r) {
                        if (void 0 === r) throw new Error("toggleRefinement should be used with a value");
                        return s.isRefined(e, t, r) ? s.removeRefinement(e, t, r) : s.addRefinement(e, t, r)
                    },
                    clearRefinement: function(e, t, r) {
                        if (void 0 === t) return a(e) ? {} : e;
                        if ("string" == typeof t) return i(e, [t]);
                        if ("function" == typeof t) {
                            var n = !1,
                                s = Object.keys(e).reduce((function(i, a) {
                                    var s = e[a] || [],
                                        c = s.filter((function(e) {
                                            return !t(e, a, r)
                                        }));
                                    return c.length !== s.length && (n = !0), i[a] = c, i
                                }), {});
                            return n ? s : e
                        }
                    },
                    isRefined: function(e, t, r) {
                        var n = !!e[t] && e[t].length > 0;
                        if (void 0 === r || !n) return n;
                        var i = "" + r;
                        return -1 !== e[t].indexOf(i)
                    }
                };
            e.exports = s
        },
        17775: (e, t, r) => {
            "use strict";
            var n = r(60185),
                i = r(52344),
                a = r(22686),
                s = r(7888),
                c = r(28023),
                u = r(49803),
                o = r(90116),
                f = r(46801),
                h = r(82437);

            function l(e, t) {
                return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((function(e, r) {
                    return l(t[r], e)
                })) : e === t
            }

            function m(e) {
                var t = e ? m._parseNumbers(e) : {};
                void 0 === t.userToken || f(t.userToken) || console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}"), this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
                var r = this;
                Object.keys(t).forEach((function(e) {
                    var n = -1 !== m.PARAMETERS.indexOf(e),
                        i = void 0 !== t[e];
                    !n && i && (r[e] = t[e])
                }))
            }
            m.PARAMETERS = Object.keys(new m), m._parseNumbers = function(e) {
                if (e instanceof m) return e;
                var t = {};
                if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach((function(r) {
                        var n = e[r];
                        if ("string" == typeof n) {
                            var i = parseFloat(n);
                            t[r] = isNaN(i) ? n : i
                        }
                    })), Array.isArray(e.insideBoundingBox) && (t.insideBoundingBox = e.insideBoundingBox.map((function(e) {
                        return Array.isArray(e) ? e.map((function(e) {
                            return parseFloat(e)
                        })) : e
                    }))), e.numericRefinements) {
                    var r = {};
                    Object.keys(e.numericRefinements).forEach((function(t) {
                        var n = e.numericRefinements[t] || {};
                        r[t] = {}, Object.keys(n).forEach((function(e) {
                            var i = n[e].map((function(e) {
                                return Array.isArray(e) ? e.map((function(e) {
                                    return "string" == typeof e ? parseFloat(e) : e
                                })) : "string" == typeof e ? parseFloat(e) : e
                            }));
                            r[t][e] = i
                        }))
                    })), t.numericRefinements = r
                }
                return n({}, e, t)
            }, m.make = function(e) {
                var t = new m(e);
                return (e.hierarchicalFacets || []).forEach((function(e) {
                    if (e.rootPath) {
                        var r = t.getHierarchicalRefinement(e.name);
                        r.length > 0 && 0 !== r[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (r = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath))
                    }
                })), t
            }, m.validate = function(e, t) {
                var r = t || {};
                return e.tagFilters && r.tagRefinements && r.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && r.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && r.numericRefinements && o(r.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : o(e.numericRefinements) && r.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null
            }, m.prototype = {
                constructor: m,
                clearRefinements: function(e) {
                    var t = {
                        numericRefinements: this._clearNumericRefinements(e),
                        facetsRefinements: h.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
                        facetsExcludes: h.clearRefinement(this.facetsExcludes, e, "exclude"),
                        disjunctiveFacetsRefinements: h.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
                        hierarchicalFacetsRefinements: h.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
                    };
                    return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t)
                },
                clearTags: function() {
                    return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
                        tagFilters: void 0,
                        tagRefinements: []
                    })
                },
                setIndex: function(e) {
                    return e === this.index ? this : this.setQueryParameters({
                        index: e
                    })
                },
                setQuery: function(e) {
                    return e === this.query ? this : this.setQueryParameters({
                        query: e
                    })
                },
                setPage: function(e) {
                    return e === this.page ? this : this.setQueryParameters({
                        page: e
                    })
                },
                setFacets: function(e) {
                    return this.setQueryParameters({
                        facets: e
                    })
                },
                setDisjunctiveFacets: function(e) {
                    return this.setQueryParameters({
                        disjunctiveFacets: e
                    })
                },
                setHitsPerPage: function(e) {
                    return this.hitsPerPage === e ? this : this.setQueryParameters({
                        hitsPerPage: e
                    })
                },
                setTypoTolerance: function(e) {
                    return this.typoTolerance === e ? this : this.setQueryParameters({
                        typoTolerance: e
                    })
                },
                addNumericRefinement: function(e, t, r) {
                    var i = c(r);
                    if (this.isNumericRefined(e, t, i)) return this;
                    var a = n({}, this.numericRefinements);
                    return a[e] = n({}, a[e]), a[e][t] ? (a[e][t] = a[e][t].slice(), a[e][t].push(i)) : a[e][t] = [i], this.setQueryParameters({
                        numericRefinements: a
                    })
                },
                getConjunctiveRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || []
                },
                getDisjunctiveRefinements: function(e) {
                    return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || []
                },
                getHierarchicalRefinement: function(e) {
                    return this.hierarchicalFacetsRefinements[e] || []
                },
                getExcludeRefinements: function(e) {
                    return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || []
                },
                removeNumericRefinement: function(e, t, r) {
                    return void 0 !== r ? this.isNumericRefined(e, t, r) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(n, i) {
                            return i === e && n.op === t && l(n.val, c(r))
                        }))
                    }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(r, n) {
                            return n === e && r.op === t
                        }))
                    }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
                        numericRefinements: this._clearNumericRefinements((function(t, r) {
                            return r === e
                        }))
                    }) : this
                },
                getNumericRefinements: function(e) {
                    return this.numericRefinements[e] || {}
                },
                getNumericRefinement: function(e, t) {
                    return this.numericRefinements[e] && this.numericRefinements[e][t]
                },
                _clearNumericRefinements: function(e) {
                    if (void 0 === e) return o(this.numericRefinements) ? {} : this.numericRefinements;
                    if ("string" == typeof e) return u(this.numericRefinements, [e]);
                    if ("function" == typeof e) {
                        var t = !1,
                            r = this.numericRefinements,
                            n = Object.keys(r).reduce((function(n, i) {
                                var a = r[i],
                                    s = {};
                                return a = a || {}, Object.keys(a).forEach((function(r) {
                                    var n = a[r] || [],
                                        c = [];
                                    n.forEach((function(t) {
                                        e({
                                            val: t,
                                            op: r
                                        }, i, "numeric") || c.push(t)
                                    })), c.length !== n.length && (t = !0), s[r] = c
                                })), n[i] = s, n
                            }), {});
                        return t ? n : this.numericRefinements
                    }
                },
                addFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
                        facets: this.facets.concat([e])
                    })
                },
                addDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.concat([e])
                    })
                },
                addHierarchicalFacet: function(e) {
                    if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
                    return this.setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.concat([e])
                    })
                },
                addFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
                        facetsRefinements: h.addRefinement(this.facetsRefinements, e, t)
                    })
                },
                addExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
                        facetsExcludes: h.addRefinement(this.facetsExcludes, e, t)
                    })
                },
                addDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.addRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                addTagRefinement: function(e) {
                    if (this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.concat(e)
                    };
                    return this.setQueryParameters(t)
                },
                removeFacet: function(e) {
                    return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        facets: this.facets.filter((function(t) {
                            return t !== e
                        }))
                    }) : this
                },
                removeDisjunctiveFacet: function(e) {
                    return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        disjunctiveFacets: this.disjunctiveFacets.filter((function(t) {
                            return t !== e
                        }))
                    }) : this
                },
                removeHierarchicalFacet: function(e) {
                    return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
                        hierarchicalFacets: this.hierarchicalFacets.filter((function(t) {
                            return t.name !== e
                        }))
                    }) : this
                },
                removeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
                        facetsRefinements: h.removeRefinement(this.facetsRefinements, e, t)
                    }) : this
                },
                removeExcludeRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return h.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
                        facetsExcludes: h.removeRefinement(this.facetsExcludes, e, t)
                    }) : this
                },
                removeDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return h.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
                    }) : this
                },
                removeTagRefinement: function(e) {
                    if (!this.isTagRefined(e)) return this;
                    var t = {
                        tagRefinements: this.tagRefinements.filter((function(t) {
                            return t !== e
                        }))
                    };
                    return this.setQueryParameters(t)
                },
                toggleRefinement: function(e, t) {
                    return this.toggleFacetRefinement(e, t)
                },
                toggleFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
                    if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
                    if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
                    throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets")
                },
                toggleConjunctiveFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsRefinements: h.toggleRefinement(this.facetsRefinements, e, t)
                    })
                },
                toggleExcludeFacetRefinement: function(e, t) {
                    if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
                    return this.setQueryParameters({
                        facetsExcludes: h.toggleRefinement(this.facetsExcludes, e, t)
                    })
                },
                toggleDisjunctiveFacetRefinement: function(e, t) {
                    if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
                    return this.setQueryParameters({
                        disjunctiveFacetsRefinements: h.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
                    })
                },
                toggleHierarchicalFacetRefinement: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");
                    var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
                        n = {};
                    return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === t || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(t + r)) ? -1 === t.indexOf(r) ? n[e] = [] : n[e] = [t.slice(0, t.lastIndexOf(r))] : n[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, n, this.hierarchicalFacetsRefinements)
                    })
                },
                addHierarchicalFacetRefinement: function(e, t) {
                    if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
                    if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
                    var r = {};
                    return r[e] = [t], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, r, this.hierarchicalFacetsRefinements)
                    })
                },
                removeHierarchicalFacetRefinement: function(e) {
                    if (!this.isHierarchicalFacetRefined(e)) return this;
                    var t = {};
                    return t[e] = [], this.setQueryParameters({
                        hierarchicalFacetsRefinements: i({}, t, this.hierarchicalFacetsRefinements)
                    })
                },
                toggleTagRefinement: function(e) {
                    return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e)
                },
                isDisjunctiveFacet: function(e) {
                    return this.disjunctiveFacets.indexOf(e) > -1
                },
                isHierarchicalFacet: function(e) {
                    return void 0 !== this.getHierarchicalFacetByName(e)
                },
                isConjunctiveFacet: function(e) {
                    return this.facets.indexOf(e) > -1
                },
                isFacetRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsRefinements, e, t)
                },
                isExcludeRefined: function(e, t) {
                    return !!this.isConjunctiveFacet(e) && h.isRefined(this.facetsExcludes, e, t)
                },
                isDisjunctiveFacetRefined: function(e, t) {
                    return !!this.isDisjunctiveFacet(e) && h.isRefined(this.disjunctiveFacetsRefinements, e, t)
                },
                isHierarchicalFacetRefined: function(e, t) {
                    if (!this.isHierarchicalFacet(e)) return !1;
                    var r = this.getHierarchicalRefinement(e);
                    return t ? -1 !== r.indexOf(t) : r.length > 0
                },
                isNumericRefined: function(e, t, r) {
                    if (void 0 === r && void 0 === t) return !!this.numericRefinements[e];
                    var n = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
                    if (void 0 === r || !n) return n;
                    var i, a, u = c(r),
                        o = void 0 !== (i = this.numericRefinements[e][t], a = u, s(i, (function(e) {
                            return l(e, a)
                        })));
                    return n && o
                },
                isTagRefined: function(e) {
                    return -1 !== this.tagRefinements.indexOf(e)
                },
                getRefinedDisjunctiveFacets: function() {
                    var e = this,
                        t = a(Object.keys(this.numericRefinements).filter((function(t) {
                            return Object.keys(e.numericRefinements[t]).length > 0
                        })), this.disjunctiveFacets);
                    return Object.keys(this.disjunctiveFacetsRefinements).filter((function(t) {
                        return e.disjunctiveFacetsRefinements[t].length > 0
                    })).concat(t).concat(this.getRefinedHierarchicalFacets())
                },
                getRefinedHierarchicalFacets: function() {
                    var e = this;
                    return a(this.hierarchicalFacets.map((function(e) {
                        return e.name
                    })), Object.keys(this.hierarchicalFacetsRefinements).filter((function(t) {
                        return e.hierarchicalFacetsRefinements[t].length > 0
                    })))
                },
                getUnrefinedDisjunctiveFacets: function() {
                    var e = this.getRefinedDisjunctiveFacets();
                    return this.disjunctiveFacets.filter((function(t) {
                        return -1 === e.indexOf(t)
                    }))
                },
                managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "hierarchicalFacets", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacetsRefinements"],
                getQueryParams: function() {
                    var e = this.managedParameters,
                        t = {},
                        r = this;
                    return Object.keys(this).forEach((function(n) {
                        var i = r[n]; - 1 === e.indexOf(n) && void 0 !== i && (t[n] = i)
                    })), t
                },
                setQueryParameter: function(e, t) {
                    if (this[e] === t) return this;
                    var r = {};
                    return r[e] = t, this.setQueryParameters(r)
                },
                setQueryParameters: function(e) {
                    if (!e) return this;
                    var t = m.validate(this, e);
                    if (t) throw t;
                    var r = this,
                        n = m._parseNumbers(e),
                        i = Object.keys(this).reduce((function(e, t) {
                            return e[t] = r[t], e
                        }), {}),
                        a = Object.keys(n).reduce((function(e, t) {
                            var r = void 0 !== e[t],
                                i = void 0 !== n[t];
                            return r && !i ? u(e, [t]) : (i && (e[t] = n[t]), e)
                        }), i);
                    return new this.constructor(a)
                },
                resetPage: function() {
                    return void 0 === this.page ? this : this.setPage(0)
                },
                _getHierarchicalFacetSortBy: function(e) {
                    return e.sortBy || ["isRefined:desc", "name:asc"]
                },
                _getHierarchicalFacetSeparator: function(e) {
                    return e.separator || " > "
                },
                _getHierarchicalRootPath: function(e) {
                    return e.rootPath || null
                },
                _getHierarchicalShowParentLevel: function(e) {
                    return "boolean" != typeof e.showParentLevel || e.showParentLevel
                },
                getHierarchicalFacetByName: function(e) {
                    return s(this.hierarchicalFacets, (function(t) {
                        return t.name === e
                    }))
                },
                getHierarchicalFacetBreadcrumb: function(e) {
                    if (!this.isHierarchicalFacet(e)) return [];
                    var t = this.getHierarchicalRefinement(e)[0];
                    if (!t) return [];
                    var r = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));
                    return t.split(r).map((function(e) {
                        return e.trim()
                    }))
                },
                toString: function() {
                    return JSON.stringify(this, null, 2)
                }
            }, e.exports = m
        },
        10210: (e, t, r) => {
            "use strict";
            e.exports = function(e) {
                return function(t, r) {
                    var s = e.hierarchicalFacets[r],
                        o = e.hierarchicalFacetsRefinements[s.name] && e.hierarchicalFacetsRefinements[s.name][0] || "",
                        f = e._getHierarchicalFacetSeparator(s),
                        h = e._getHierarchicalRootPath(s),
                        l = e._getHierarchicalShowParentLevel(s),
                        m = a(e._getHierarchicalFacetSortBy(s)),
                        d = t.every((function(e) {
                            return e.exhaustive
                        })),
                        p = function(e, t, r, a, s) {
                            return function(o, f, h) {
                                var l = o;
                                if (h > 0) {
                                    var m = 0;
                                    for (l = o; m < h;) {
                                        var d = l && Array.isArray(l.data) ? l.data : [];
                                        l = i(d, (function(e) {
                                            return e.isRefined
                                        })), m++
                                    }
                                }
                                if (l) {
                                    var p = Object.keys(f.data).map((function(e) {
                                        return [e, f.data[e]]
                                    })).filter((function(e) {
                                        return function(e, t, r, n, i, a) {
                                            return (!i || 0 === e.indexOf(i) && i !== e) && (!i && -1 === e.indexOf(n) || i && e.split(n).length - i.split(n).length == 1 || -1 === e.indexOf(n) && -1 === r.indexOf(n) || 0 === r.indexOf(e) || 0 === e.indexOf(t + n) && (a || 0 === e.indexOf(r)))
                                        }(e[0], l.path || r, s, t, r, a)
                                    }));
                                    l.data = n(p.map((function(e) {
                                        var r = e[0];
                                        return function(e, t, r, n, i) {
                                            var a = t.split(r);
                                            return {
                                                name: a[a.length - 1].trim(),
                                                path: t,
                                                escapedValue: c(t),
                                                count: e,
                                                isRefined: n === t || 0 === n.indexOf(t + r),
                                                exhaustive: i,
                                                data: null
                                            }
                                        }(e[1], r, t, u(s), f.exhaustive)
                                    })), e[0], e[1])
                                }
                                return o
                            }
                        }(m, f, h, l, o),
                        v = t;
                    return h && (v = t.slice(h.split(f).length)), v.reduce(p, {
                        name: e.hierarchicalFacets[r].name,
                        count: null,
                        isRefined: !0,
                        path: null,
                        escapedValue: null,
                        exhaustive: d,
                        data: null
                    })
                }
            };
            var n = r(42148),
                i = r(7888),
                a = r(82293),
                s = r(94039),
                c = s.escapeFacetValue,
                u = s.unescapeFacetValue
        },
        23076: (e, t, r) => {
            "use strict";
            var n = r(60185),
                i = r(52344),
                a = r(42148),
                s = r(74587),
                c = r(7888),
                u = r(69725),
                o = r(82293),
                f = r(94039),
                h = f.escapeFacetValue,
                l = f.unescapeFacetValue,
                m = r(10210);

            function d(e) {
                var t = {};
                return e.forEach((function(e, r) {
                    t[e] = r
                })), t
            }

            function p(e, t, r) {
                t && t[r] && (e.stats = t[r])
            }

            function v(e, t, r) {
                var a = t[0];
                this._rawResults = t;
                var o = this;
                Object.keys(a).forEach((function(e) {
                    o[e] = a[e]
                })), Object.keys(r || {}).forEach((function(e) {
                    o[e] = r[e]
                })), this.processingTimeMS = t.reduce((function(e, t) {
                    return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS
                }), 0), this.disjunctiveFacets = [], this.hierarchicalFacets = e.hierarchicalFacets.map((function() {
                    return []
                })), this.facets = [];
                var f = e.getRefinedDisjunctiveFacets(),
                    h = d(e.facets),
                    v = d(e.disjunctiveFacets),
                    y = 1,
                    g = a.facets || {};
                Object.keys(g).forEach((function(t) {
                    var r, n, i = g[t],
                        s = (r = e.hierarchicalFacets, n = t, c(r, (function(e) {
                            return (e.attributes || []).indexOf(n) > -1
                        })));
                    if (s) {
                        var f = s.attributes.indexOf(t),
                            l = u(e.hierarchicalFacets, (function(e) {
                                return e.name === s.name
                            }));
                        o.hierarchicalFacets[l][f] = {
                            attribute: t,
                            data: i,
                            exhaustive: a.exhaustiveFacetsCount
                        }
                    } else {
                        var m, d = -1 !== e.disjunctiveFacets.indexOf(t),
                            y = -1 !== e.facets.indexOf(t);
                        d && (m = v[t], o.disjunctiveFacets[m] = {
                            name: t,
                            data: i,
                            exhaustive: a.exhaustiveFacetsCount
                        }, p(o.disjunctiveFacets[m], a.facets_stats, t)), y && (m = h[t], o.facets[m] = {
                            name: t,
                            data: i,
                            exhaustive: a.exhaustiveFacetsCount
                        }, p(o.facets[m], a.facets_stats, t))
                    }
                })), this.hierarchicalFacets = s(this.hierarchicalFacets), f.forEach((function(r) {
                    var s = t[y],
                        c = s && s.facets ? s.facets : {},
                        f = e.getHierarchicalFacetByName(r);
                    Object.keys(c).forEach((function(t) {
                        var r, h = c[t];
                        if (f) {
                            r = u(e.hierarchicalFacets, (function(e) {
                                return e.name === f.name
                            }));
                            var m = u(o.hierarchicalFacets[r], (function(e) {
                                return e.attribute === t
                            }));
                            if (-1 === m) return;
                            o.hierarchicalFacets[r][m].data = n({}, o.hierarchicalFacets[r][m].data, h)
                        } else {
                            r = v[t];
                            var d = a.facets && a.facets[t] || {};
                            o.disjunctiveFacets[r] = {
                                name: t,
                                data: i({}, h, d),
                                exhaustive: s.exhaustiveFacetsCount
                            }, p(o.disjunctiveFacets[r], s.facets_stats, t), e.disjunctiveFacetsRefinements[t] && e.disjunctiveFacetsRefinements[t].forEach((function(n) {
                                !o.disjunctiveFacets[r].data[n] && e.disjunctiveFacetsRefinements[t].indexOf(l(n)) > -1 && (o.disjunctiveFacets[r].data[n] = 0)
                            }))
                        }
                    })), y++
                })), e.getRefinedHierarchicalFacets().forEach((function(r) {
                    var n = e.getHierarchicalFacetByName(r),
                        a = e._getHierarchicalFacetSeparator(n),
                        s = e.getHierarchicalRefinement(r);
                    0 === s.length || s[0].split(a).length < 2 || t.slice(y).forEach((function(t) {
                        var r = t && t.facets ? t.facets : {};
                        Object.keys(r).forEach((function(t) {
                            var c = r[t],
                                f = u(e.hierarchicalFacets, (function(e) {
                                    return e.name === n.name
                                })),
                                h = u(o.hierarchicalFacets[f], (function(e) {
                                    return e.attribute === t
                                }));
                            if (-1 !== h) {
                                var l = {};
                                if (s.length > 0) {
                                    var m = s[0].split(a)[0];
                                    l[m] = o.hierarchicalFacets[f][h].data[m]
                                }
                                o.hierarchicalFacets[f][h].data = i(l, c, o.hierarchicalFacets[f][h].data)
                            }
                        })), y++
                    }))
                })), Object.keys(e.facetsExcludes).forEach((function(t) {
                    var r = e.facetsExcludes[t],
                        n = h[t];
                    o.facets[n] = {
                        name: t,
                        data: a.facets[t],
                        exhaustive: a.exhaustiveFacetsCount
                    }, r.forEach((function(e) {
                        o.facets[n] = o.facets[n] || {
                            name: t
                        }, o.facets[n].data = o.facets[n].data || {}, o.facets[n].data[e] = 0
                    }))
                })), this.hierarchicalFacets = this.hierarchicalFacets.map(m(e)), this.facets = s(this.facets), this.disjunctiveFacets = s(this.disjunctiveFacets), this._state = e
            }

            function y(e, t) {
                function r(e) {
                    return e.name === t
                }
                if (e._state.isConjunctiveFacet(t)) {
                    var n = c(e.facets, r);
                    return n ? Object.keys(n.data).map((function(r) {
                        var i = h(r);
                        return {
                            name: r,
                            escapedValue: i,
                            count: n.data[r],
                            isRefined: e._state.isFacetRefined(t, i),
                            isExcluded: e._state.isExcludeRefined(t, r)
                        }
                    })) : []
                }
                if (e._state.isDisjunctiveFacet(t)) {
                    var i = c(e.disjunctiveFacets, r);
                    return i ? Object.keys(i.data).map((function(r) {
                        var n = h(r);
                        return {
                            name: r,
                            escapedValue: n,
                            count: i.data[r],
                            isRefined: e._state.isDisjunctiveFacetRefined(t, n)
                        }
                    })) : []
                }
                if (e._state.isHierarchicalFacet(t)) {
                    var a = c(e.hierarchicalFacets, r);
                    if (!a) return a;
                    var s = e._state.getHierarchicalFacetByName(t),
                        u = l(e._state.getHierarchicalRefinement(t)[0] || "").split(e._state._getHierarchicalFacetSeparator(s));
                    return u.unshift(t), g(a, u, 0), a
                }
            }

            function g(e, t, r) {
                e.isRefined = e.name === t[r], e.data && e.data.forEach((function(e) {
                    g(e, t, r + 1)
                }))
            }

            function b(e, t, r, n) {
                if (n = n || 0, Array.isArray(t)) return e(t, r[n]);
                if (!t.data || 0 === t.data.length) return t;
                var a = t.data.map((function(t) {
                        return b(e, t, r, n + 1)
                    })),
                    s = e(a, r[n]);
                return i({
                    data: s
                }, t)
            }

            function R(e, t) {
                var r = c(e, (function(e) {
                    return e.name === t
                }));
                return r && r.stats
            }

            function F(e, t, r, n, i) {
                var a = c(i, (function(e) {
                        return e.name === r
                    })),
                    s = a && a.data && a.data[n] ? a.data[n] : 0,
                    u = a && a.exhaustive || !1;
                return {
                    type: t,
                    attributeName: r,
                    name: n,
                    count: s,
                    exhaustive: u
                }
            }
            v.prototype.getFacetByName = function(e) {
                function t(t) {
                    return t.name === e
                }
                return c(this.facets, t) || c(this.disjunctiveFacets, t) || c(this.hierarchicalFacets, t)
            }, v.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], v.prototype.getFacetValues = function(e, t) {
                var r = y(this, e);
                if (r) {
                    var n = i({}, t, {
                            sortBy: v.DEFAULT_SORT,
                            facetOrdering: !(t && t.sortBy)
                        }),
                        s = this;
                    return b((function(e, t) {
                        if (n.facetOrdering) {
                            var r = function(e, t) {
                                return e.renderingContent && e.renderingContent.facetOrdering && e.renderingContent.facetOrdering.values && e.renderingContent.facetOrdering.values[t]
                            }(s, t);
                            if (Boolean(r)) return function(e, t) {
                                var r = [],
                                    n = [],
                                    i = (t.order || []).reduce((function(e, t, r) {
                                        return e[t] = r, e
                                    }), {});
                                e.forEach((function(e) {
                                    var t = e.path || e.name;
                                    void 0 !== i[t] ? r[i[t]] = e : n.push(e)
                                })), r = r.filter((function(e) {
                                    return e
                                }));
                                var s, c = t.sortRemainingBy;
                                return "hidden" === c ? r : (s = "alpha" === c ? [
                                    ["path", "name"],
                                    ["asc", "asc"]
                                ] : [
                                    ["count"],
                                    ["desc"]
                                ], r.concat(a(n, s[0], s[1])))
                            }(e, r)
                        }
                        if (Array.isArray(n.sortBy)) {
                            var i = o(n.sortBy, v.DEFAULT_SORT);
                            return a(e, i[0], i[1])
                        }
                        if ("function" == typeof n.sortBy) return function(e, t) {
                            return t.sort(e)
                        }(n.sortBy, e);
                        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function")
                    }), r, Array.isArray(r) ? [e] : s._state.getHierarchicalFacetByName(r.name).attributes)
                }
            }, v.prototype.getFacetStats = function(e) {
                return this._state.isConjunctiveFacet(e) ? R(this.facets, e) : this._state.isDisjunctiveFacet(e) ? R(this.disjunctiveFacets, e) : void 0
            }, v.prototype.getRefinements = function() {
                var e = this._state,
                    t = this,
                    r = [];
                return Object.keys(e.facetsRefinements).forEach((function(n) {
                    e.facetsRefinements[n].forEach((function(e) {
                        r.push(F(0, "facet", n, e, t.facets))
                    }))
                })), Object.keys(e.facetsExcludes).forEach((function(n) {
                    e.facetsExcludes[n].forEach((function(e) {
                        r.push(F(0, "exclude", n, e, t.facets))
                    }))
                })), Object.keys(e.disjunctiveFacetsRefinements).forEach((function(n) {
                    e.disjunctiveFacetsRefinements[n].forEach((function(e) {
                        r.push(F(0, "disjunctive", n, e, t.disjunctiveFacets))
                    }))
                })), Object.keys(e.hierarchicalFacetsRefinements).forEach((function(n) {
                    e.hierarchicalFacetsRefinements[n].forEach((function(i) {
                        r.push(function(e, t, r, n) {
                            var i = e.getHierarchicalFacetByName(t),
                                a = e._getHierarchicalFacetSeparator(i),
                                s = r.split(a),
                                u = c(n, (function(e) {
                                    return e.name === t
                                })),
                                o = s.reduce((function(e, t) {
                                    var r = e && c(e.data, (function(e) {
                                        return e.name === t
                                    }));
                                    return void 0 !== r ? r : e
                                }), u),
                                f = o && o.count || 0,
                                h = o && o.exhaustive || !1,
                                l = o && o.path || "";
                            return {
                                type: "hierarchical",
                                attributeName: t,
                                name: l,
                                count: f,
                                exhaustive: h
                            }
                        }(e, n, i, t.hierarchicalFacets))
                    }))
                })), Object.keys(e.numericRefinements).forEach((function(t) {
                    var n = e.numericRefinements[t];
                    Object.keys(n).forEach((function(e) {
                        n[e].forEach((function(n) {
                            r.push({
                                type: "numeric",
                                attributeName: t,
                                name: n,
                                numericValue: n,
                                operator: e
                            })
                        }))
                    }))
                })), e.tagRefinements.forEach((function(e) {
                    r.push({
                        type: "tag",
                        attributeName: "_tags",
                        name: e
                    })
                })), r
            }, e.exports = v
        },
        49374: (e, t, r) => {
            "use strict";
            var n = r(17775),
                i = r(23076),
                a = r(68078),
                s = r(34987),
                c = r(17331),
                u = r(14853),
                o = r(90116),
                f = r(49803),
                h = r(60185),
                l = r(24336),
                m = r(94039).escapeFacetValue;

            function d(e, t, r) {
                "function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + l + ")"), this.setClient(e);
                var i = r || {};
                i.index = t, this.state = n.make(i), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0
            }

            function p(e) {
                if (e < 0) throw new Error("Page requested below 0.");
                return this._change({
                    state: this.state.setPage(e),
                    isPageReset: !1
                }), this
            }

            function v() {
                return this.state.page
            }
            u(d, c), d.prototype.search = function() {
                return this._search({
                    onlyWithDerivedHelpers: !1
                }), this
            }, d.prototype.searchOnlyWithDerivedHelpers = function() {
                return this._search({
                    onlyWithDerivedHelpers: !0
                }), this
            }, d.prototype.getQuery = function() {
                var e = this.state;
                return s._getHitsSearchParams(e)
            }, d.prototype.searchOnce = function(e, t) {
                var r = e ? this.state.setQueryParameters(e) : this.state,
                    n = s._getQueries(r.index, r),
                    a = this;
                if (this._currentNbQueries++, this.emit("searchOnce", {
                        state: r
                    }), !t) return this.client.search(n).then((function(e) {
                    return a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), {
                        content: new i(r, e.results),
                        state: r,
                        _originalResponse: e
                    }
                }), (function(e) {
                    throw a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), e
                }));
                this.client.search(n).then((function(e) {
                    a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(null, new i(r, e.results), r)
                })).catch((function(e) {
                    a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), t(e, null, r)
                }))
            }, d.prototype.findAnswers = function(e) {
                console.warn("[algoliasearch-helper] answers is no longer supported");
                var t = this.state,
                    r = this.derivedHelpers[0];
                if (!r) return Promise.resolve([]);
                var n = r.getModifiedState(t),
                    i = h({
                        attributesForPrediction: e.attributesForPrediction,
                        nbHits: e.nbHits
                    }, {
                        params: f(s._getHitsSearchParams(n), ["attributesToSnippet", "hitsPerPage", "restrictSearchableAttributes", "snippetEllipsisText"])
                    }),
                    a = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
                if ("function" != typeof this.client.initIndex) throw new Error(a);
                var c = this.client.initIndex(n.index);
                if ("function" != typeof c.findAnswers) throw new Error(a);
                return c.findAnswers(n.query, e.queryLanguages, i)
            }, d.prototype.searchForFacetValues = function(e, t, r, n) {
                var i = "function" == typeof this.client.searchForFacetValues,
                    a = "function" == typeof this.client.initIndex;
                if (!i && !a && "function" != typeof this.client.search) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
                var c = this.state.setQueryParameters(n || {}),
                    u = c.isDisjunctiveFacet(e),
                    o = s.getSearchForFacetQuery(e, t, r, c);
                this._currentNbQueries++;
                var f, h = this;
                return i ? f = this.client.searchForFacetValues([{
                    indexName: c.index,
                    params: o
                }]) : a ? f = this.client.initIndex(c.index).searchForFacetValues(o) : (delete o.facetName, f = this.client.search([{
                    type: "facet",
                    facet: e,
                    indexName: c.index,
                    params: o
                }]).then((function(e) {
                    return e.results[0]
                }))), this.emit("searchForFacetValues", {
                    state: c,
                    facet: e,
                    query: t
                }), f.then((function(t) {
                    return h._currentNbQueries--, 0 === h._currentNbQueries && h.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach((function(t) {
                        t.escapedValue = m(t.value), t.isRefined = u ? c.isDisjunctiveFacetRefined(e, t.escapedValue) : c.isFacetRefined(e, t.escapedValue)
                    })), t
                }), (function(e) {
                    throw h._currentNbQueries--, 0 === h._currentNbQueries && h.emit("searchQueueEmpty"), e
                }))
            }, d.prototype.setQuery = function(e) {
                return this._change({
                    state: this.state.resetPage().setQuery(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearRefinements = function(e) {
                return this._change({
                    state: this.state.resetPage().clearRefinements(e),
                    isPageReset: !0
                }), this
            }, d.prototype.clearTags = function() {
                return this._change({
                    state: this.state.resetPage().clearTags(),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addDisjunctiveRefine = function() {
                return this.addDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.addHierarchicalFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addNumericRefinement = function(e, t, r) {
                return this._change({
                    state: this.state.resetPage().addNumericRefinement(e, t, r),
                    isPageReset: !0
                }), this
            }, d.prototype.addFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addRefine = function() {
                return this.addFacetRefinement.apply(this, arguments)
            }, d.prototype.addFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().addExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.addExclude = function() {
                return this.addFacetExclusion.apply(this, arguments)
            }, d.prototype.addTag = function(e) {
                return this._change({
                    state: this.state.resetPage().addTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeNumericRefinement = function(e, t, r) {
                return this._change({
                    state: this.state.resetPage().removeNumericRefinement(e, t, r),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeDisjunctiveRefine = function() {
                return this.removeDisjunctiveFacetRefinement.apply(this, arguments)
            }, d.prototype.removeHierarchicalFacetRefinement = function(e) {
                return this._change({
                    state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.removeFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeRefine = function() {
                return this.removeFacetRefinement.apply(this, arguments)
            }, d.prototype.removeFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().removeExcludeRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.removeExclude = function() {
                return this.removeFacetExclusion.apply(this, arguments)
            }, d.prototype.removeTag = function(e) {
                return this._change({
                    state: this.state.resetPage().removeTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleFacetExclusion = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleExclude = function() {
                return this.toggleFacetExclusion.apply(this, arguments)
            }, d.prototype.toggleRefinement = function(e, t) {
                return this.toggleFacetRefinement(e, t)
            }, d.prototype.toggleFacetRefinement = function(e, t) {
                return this._change({
                    state: this.state.resetPage().toggleFacetRefinement(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.toggleRefine = function() {
                return this.toggleFacetRefinement.apply(this, arguments)
            }, d.prototype.toggleTag = function(e) {
                return this._change({
                    state: this.state.resetPage().toggleTagRefinement(e),
                    isPageReset: !0
                }), this
            }, d.prototype.nextPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e + 1)
            }, d.prototype.previousPage = function() {
                var e = this.state.page || 0;
                return this.setPage(e - 1)
            }, d.prototype.setCurrentPage = p, d.prototype.setPage = p, d.prototype.setIndex = function(e) {
                return this._change({
                    state: this.state.resetPage().setIndex(e),
                    isPageReset: !0
                }), this
            }, d.prototype.setQueryParameter = function(e, t) {
                return this._change({
                    state: this.state.resetPage().setQueryParameter(e, t),
                    isPageReset: !0
                }), this
            }, d.prototype.setState = function(e) {
                return this._change({
                    state: n.make(e),
                    isPageReset: !1
                }), this
            }, d.prototype.overrideStateWithoutTriggeringChangeEvent = function(e) {
                return this.state = new n(e), this
            }, d.prototype.hasRefinements = function(e) {
                return !!o(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e))
            }, d.prototype.isExcluded = function(e, t) {
                return this.state.isExcludeRefined(e, t)
            }, d.prototype.isDisjunctiveRefined = function(e, t) {
                return this.state.isDisjunctiveFacetRefined(e, t)
            }, d.prototype.hasTag = function(e) {
                return this.state.isTagRefined(e)
            }, d.prototype.isTagRefined = function() {
                return this.hasTagRefinements.apply(this, arguments)
            }, d.prototype.getIndex = function() {
                return this.state.index
            }, d.prototype.getCurrentPage = v, d.prototype.getPage = v, d.prototype.getTags = function() {
                return this.state.tagRefinements
            }, d.prototype.getRefinements = function(e) {
                var t = [];
                this.state.isConjunctiveFacet(e) ? (this.state.getConjunctiveRefinements(e).forEach((function(e) {
                    t.push({
                        value: e,
                        type: "conjunctive"
                    })
                })), this.state.getExcludeRefinements(e).forEach((function(e) {
                    t.push({
                        value: e,
                        type: "exclude"
                    })
                }))) : this.state.isDisjunctiveFacet(e) && this.state.getDisjunctiveRefinements(e).forEach((function(e) {
                    t.push({
                        value: e,
                        type: "disjunctive"
                    })
                }));
                var r = this.state.getNumericRefinements(e);
                return Object.keys(r).forEach((function(e) {
                    var n = r[e];
                    t.push({
                        value: n,
                        operator: e,
                        type: "numeric"
                    })
                })), t
            }, d.prototype.getNumericRefinement = function(e, t) {
                return this.state.getNumericRefinement(e, t)
            }, d.prototype.getHierarchicalFacetBreadcrumb = function(e) {
                return this.state.getHierarchicalFacetBreadcrumb(e)
            }, d.prototype._search = function(e) {
                var t = this.state,
                    r = [],
                    n = [];
                e.onlyWithDerivedHelpers || (n = s._getQueries(t.index, t), r.push({
                    state: t,
                    queriesCount: n.length,
                    helper: this
                }), this.emit("search", {
                    state: t,
                    results: this.lastResults
                }));
                var i = this.derivedHelpers.map((function(e) {
                        var n = e.getModifiedState(t),
                            i = n.index ? s._getQueries(n.index, n) : [];
                        return r.push({
                            state: n,
                            queriesCount: i.length,
                            helper: e
                        }), e.emit("search", {
                            state: n,
                            results: e.lastResults
                        }), i
                    })),
                    a = Array.prototype.concat.apply(n, i),
                    c = this._queryId++;
                if (this._currentNbQueries++, !a.length) return Promise.resolve({
                    results: []
                }).then(this._dispatchAlgoliaResponse.bind(this, r, c));
                try {
                    this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, r, c)).catch(this._dispatchAlgoliaError.bind(this, c))
                } catch (e) {
                    this.emit("error", {
                        error: e
                    })
                }
            }, d.prototype._dispatchAlgoliaResponse = function(e, t, r) {
                if (!(t < this._lastQueryIdReceived)) {
                    this._currentNbQueries -= t - this._lastQueryIdReceived, this._lastQueryIdReceived = t, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
                    var n = r.results.slice();
                    e.forEach((function(e) {
                        var t = e.state,
                            r = e.queriesCount,
                            a = e.helper,
                            s = n.splice(0, r);
                        if (t.index) {
                            var c = a.lastResults = new i(t, s);
                            a.emit("result", {
                                results: c,
                                state: t
                            })
                        } else a.emit("result", {
                            results: null,
                            state: t
                        })
                    }))
                }
            }, d.prototype._dispatchAlgoliaError = function(e, t) {
                e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
                    error: t
                }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"))
            }, d.prototype.containsRefinement = function(e, t, r, n) {
                return e || 0 !== t.length || 0 !== r.length || 0 !== n.length
            }, d.prototype._hasDisjunctiveRefinements = function(e) {
                return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0
            }, d.prototype._change = function(e) {
                var t = e.state,
                    r = e.isPageReset;
                t !== this.state && (this.state = t, this.emit("change", {
                    state: this.state,
                    results: this.lastResults,
                    isPageReset: r
                }))
            }, d.prototype.clearCache = function() {
                return this.client.clearCache && this.client.clearCache(), this
            }, d.prototype.setClient = function(e) {
                return this.client === e || ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + l + ")"), this.client = e), this
            }, d.prototype.getClient = function() {
                return this.client
            }, d.prototype.derive = function(e) {
                var t = new a(this, e);
                return this.derivedHelpers.push(t), t
            }, d.prototype.detachDerivedHelper = function(e) {
                var t = this.derivedHelpers.indexOf(e);
                if (-1 === t) throw new Error("Derived helper already detached");
                this.derivedHelpers.splice(t, 1)
            }, d.prototype.hasPendingRequests = function() {
                return this._currentNbQueries > 0
            }, e.exports = d
        },
        74587: e => {
            "use strict";
            e.exports = function(e) {
                return Array.isArray(e) ? e.filter(Boolean) : []
            }
        },
        52344: e => {
            "use strict";
            e.exports = function() {
                return Array.prototype.slice.call(arguments).reduceRight((function(e, t) {
                    return Object.keys(Object(t)).forEach((function(r) {
                        void 0 !== t[r] && (void 0 !== e[r] && delete e[r], e[r] = t[r])
                    })), e
                }), {})
            }
        },
        94039: e => {
            "use strict";
            e.exports = {
                escapeFacetValue: function(e) {
                    return "string" != typeof e ? e : String(e).replace(/^-/, "\\-")
                },
                unescapeFacetValue: function(e) {
                    return "string" != typeof e ? e : e.replace(/^\\-/, "-")
                }
            }
        },
        7888: e => {
            "use strict";
            e.exports = function(e, t) {
                if (Array.isArray(e))
                    for (var r = 0; r < e.length; r++)
                        if (t(e[r])) return e[r]
            }
        },
        69725: e => {
            "use strict";
            e.exports = function(e, t) {
                if (!Array.isArray(e)) return -1;
                for (var r = 0; r < e.length; r++)
                    if (t(e[r])) return r;
                return -1
            }
        },
        82293: (e, t, r) => {
            "use strict";
            var n = r(7888);
            e.exports = function(e, t) {
                var r = (t || []).map((function(e) {
                    return e.split(":")
                }));
                return e.reduce((function(e, t) {
                    var i = t.split(":"),
                        a = n(r, (function(e) {
                            return e[0] === i[0]
                        }));
                    return i.length > 1 || !a ? (e[0].push(i[0]), e[1].push(i[1]), e) : (e[0].push(a[0]), e[1].push(a[1]), e)
                }), [
                    [],
                    []
                ])
            }
        },
        14853: e => {
            "use strict";
            e.exports = function(e, t) {
                e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            }
        },
        22686: e => {
            "use strict";
            e.exports = function(e, t) {
                return e.filter((function(r, n) {
                    return t.indexOf(r) > -1 && e.indexOf(r) === n
                }))
            }
        },
        60185: e => {
            "use strict";

            function t(e) {
                return "function" == typeof e || Array.isArray(e) || "[object Object]" === Object.prototype.toString.call(e)
            }

            function r(e, n) {
                if (e === n) return e;
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i) && "__proto__" !== i && "constructor" !== i) {
                        var a = n[i],
                            s = e[i];
                        void 0 !== s && void 0 === a || (t(s) && t(a) ? e[i] = r(s, a) : e[i] = "object" == typeof(c = a) && null !== c ? r(Array.isArray(c) ? [] : {}, c) : c)
                    }
                var c;
                return e
            }
            e.exports = function(e) {
                t(e) || (e = {});
                for (var n = 1, i = arguments.length; n < i; n++) {
                    var a = arguments[n];
                    t(a) && r(e, a)
                }
                return e
            }
        },
        90116: e => {
            "use strict";
            e.exports = function(e) {
                return e && Object.keys(e).length > 0
            }
        },
        49803: e => {
            "use strict";
            e.exports = function(e, t) {
                if (null === e) return {};
                var r, n, i = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
        },
        42148: e => {
            "use strict";

            function t(e, t) {
                if (e !== t) {
                    var r = void 0 !== e,
                        n = null === e,
                        i = void 0 !== t,
                        a = null === t;
                    if (!a && e > t || n && i || !r) return 1;
                    if (!n && e < t || a && r || !i) return -1
                }
                return 0
            }
            e.exports = function(e, r, n) {
                if (!Array.isArray(e)) return [];
                Array.isArray(n) || (n = []);
                var i = e.map((function(e, t) {
                    return {
                        criteria: r.map((function(t) {
                            return e[t]
                        })),
                        index: t,
                        value: e
                    }
                }));
                return i.sort((function(e, r) {
                    for (var i = -1; ++i < e.criteria.length;) {
                        var a = t(e.criteria[i], r.criteria[i]);
                        if (a) return i >= n.length ? a : "desc" === n[i] ? -a : a
                    }
                    return e.index - r.index
                })), i.map((function(e) {
                    return e.value
                }))
            }
        },
        28023: e => {
            "use strict";
            e.exports = function e(t) {
                if ("number" == typeof t) return t;
                if ("string" == typeof t) return parseFloat(t);
                if (Array.isArray(t)) return t.map(e);
                throw new Error("The value should be a number, a parsable string or an array of those.")
            }
        },
        34987: (e, t, r) => {
            "use strict";
            var n = r(60185);

            function i(e) {
                return Object.keys(e).sort((function(e, t) {
                    return e.localeCompare(t)
                })).reduce((function(t, r) {
                    return t[r] = e[r], t
                }), {})
            }
            var a = {
                _getQueries: function(e, t) {
                    var r = [];
                    return r.push({
                        indexName: e,
                        params: a._getHitsSearchParams(t)
                    }), t.getRefinedDisjunctiveFacets().forEach((function(n) {
                        r.push({
                            indexName: e,
                            params: a._getDisjunctiveFacetSearchParams(t, n)
                        })
                    })), t.getRefinedHierarchicalFacets().forEach((function(n) {
                        var i = t.getHierarchicalFacetByName(n),
                            s = t.getHierarchicalRefinement(n),
                            c = t._getHierarchicalFacetSeparator(i);
                        if (s.length > 0 && s[0].split(c).length > 1) {
                            var u = s[0].split(c).slice(0, -1).reduce((function(e, t, r) {
                                return e.concat({
                                    attribute: i.attributes[r],
                                    value: 0 === r ? t : [e[e.length - 1].value, t].join(c)
                                })
                            }), []);
                            u.forEach((function(n, s) {
                                var c = a._getDisjunctiveFacetSearchParams(t, n.attribute, 0 === s);

                                function o(e) {
                                    return i.attributes.some((function(t) {
                                        return t === e.split(":")[0]
                                    }))
                                }
                                var f = (c.facetFilters || []).reduce((function(e, t) {
                                        if (Array.isArray(t)) {
                                            var r = t.filter((function(e) {
                                                return !o(e)
                                            }));
                                            r.length > 0 && e.push(r)
                                        }
                                        return "string" != typeof t || o(t) || e.push(t), e
                                    }), []),
                                    h = u[s - 1];
                                c.facetFilters = s > 0 ? f.concat(h.attribute + ":" + h.value) : f.length > 0 ? f : void 0, r.push({
                                    indexName: e,
                                    params: c
                                })
                            }))
                        }
                    })), r
                },
                _getHitsSearchParams: function(e) {
                    var t = e.facets.concat(e.disjunctiveFacets).concat(a._getHitsHierarchicalFacetsAttributes(e)),
                        r = a._getFacetFilters(e),
                        s = a._getNumericFilters(e),
                        c = a._getTagFilters(e),
                        u = {
                            facets: t.indexOf("*") > -1 ? ["*"] : t,
                            tagFilters: c
                        };
                    return r.length > 0 && (u.facetFilters = r), s.length > 0 && (u.numericFilters = s), i(n({}, e.getQueryParams(), u))
                },
                _getDisjunctiveFacetSearchParams: function(e, t, r) {
                    var s = a._getFacetFilters(e, t, r),
                        c = a._getNumericFilters(e, t),
                        u = a._getTagFilters(e),
                        o = {
                            hitsPerPage: 0,
                            page: 0,
                            analytics: !1,
                            clickAnalytics: !1
                        };
                    u.length > 0 && (o.tagFilters = u);
                    var f = e.getHierarchicalFacetByName(t);
                    return o.facets = f ? a._getDisjunctiveHierarchicalFacetAttribute(e, f, r) : t, c.length > 0 && (o.numericFilters = c), s.length > 0 && (o.facetFilters = s), i(n({}, e.getQueryParams(), o))
                },
                _getNumericFilters: function(e, t) {
                    if (e.numericFilters) return e.numericFilters;
                    var r = [];
                    return Object.keys(e.numericRefinements).forEach((function(n) {
                        var i = e.numericRefinements[n] || {};
                        Object.keys(i).forEach((function(e) {
                            var a = i[e] || [];
                            t !== n && a.forEach((function(t) {
                                if (Array.isArray(t)) {
                                    var i = t.map((function(t) {
                                        return n + e + t
                                    }));
                                    r.push(i)
                                } else r.push(n + e + t)
                            }))
                        }))
                    })), r
                },
                _getTagFilters: function(e) {
                    return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",")
                },
                _getFacetFilters: function(e, t, r) {
                    var n = [],
                        i = e.facetsRefinements || {};
                    Object.keys(i).forEach((function(e) {
                        (i[e] || []).forEach((function(t) {
                            n.push(e + ":" + t)
                        }))
                    }));
                    var a = e.facetsExcludes || {};
                    Object.keys(a).forEach((function(e) {
                        (a[e] || []).forEach((function(t) {
                            n.push(e + ":-" + t)
                        }))
                    }));
                    var s = e.disjunctiveFacetsRefinements || {};
                    Object.keys(s).forEach((function(e) {
                        var r = s[e] || [];
                        if (e !== t && r && 0 !== r.length) {
                            var i = [];
                            r.forEach((function(t) {
                                i.push(e + ":" + t)
                            })), n.push(i)
                        }
                    }));
                    var c = e.hierarchicalFacetsRefinements || {};
                    return Object.keys(c).forEach((function(i) {
                        var a = (c[i] || [])[0];
                        if (void 0 !== a) {
                            var s, u, o = e.getHierarchicalFacetByName(i),
                                f = e._getHierarchicalFacetSeparator(o),
                                h = e._getHierarchicalRootPath(o);
                            if (t === i) {
                                if (-1 === a.indexOf(f) || !h && !0 === r || h && h.split(f).length === a.split(f).length) return;
                                h ? (u = h.split(f).length - 1, a = h) : (u = a.split(f).length - 2, a = a.slice(0, a.lastIndexOf(f))), s = o.attributes[u]
                            } else u = a.split(f).length - 1, s = o.attributes[u];
                            s && n.push([s + ":" + a])
                        }
                    })), n
                },
                _getHitsHierarchicalFacetsAttributes: function(e) {
                    return e.hierarchicalFacets.reduce((function(t, r) {
                        var n = e.getHierarchicalRefinement(r.name)[0];
                        if (!n) return t.push(r.attributes[0]), t;
                        var i = e._getHierarchicalFacetSeparator(r),
                            a = n.split(i).length,
                            s = r.attributes.slice(0, a + 1);
                        return t.concat(s)
                    }), [])
                },
                _getDisjunctiveHierarchicalFacetAttribute: function(e, t, r) {
                    var n = e._getHierarchicalFacetSeparator(t);
                    if (!0 === r) {
                        var i = e._getHierarchicalRootPath(t),
                            a = 0;
                        return i && (a = i.split(n).length), [t.attributes[a]]
                    }
                    var s = (e.getHierarchicalRefinement(t.name)[0] || "").split(n).length - 1;
                    return t.attributes.slice(0, s + 1)
                },
                getSearchForFacetQuery: function(e, t, r, s) {
                    var c = s.isDisjunctiveFacet(e) ? s.clearRefinements(e) : s,
                        u = {
                            facetQuery: t,
                            facetName: e
                        };
                    return "number" == typeof r && (u.maxFacetHits = r), i(n({}, a._getHitsSearchParams(c), u))
                }
            };
            e.exports = a
        },
        46801: e => {
            "use strict";
            e.exports = function(e) {
                return null !== e && /^[a-zA-Z0-9_-]{1,64}$/.test(e)
            }
        },
        24336: e => {
            "use strict";
            e.exports = "3.13.0"
        },
        94184: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var a = typeof r;
                            if ("string" === a || "number" === a) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var s = i.apply(null, r);
                                    s && e.push(s)
                                }
                            } else if ("object" === a) {
                                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                    e.push(r.toString());
                                    continue
                                }
                                for (var c in r) n.call(r, c) && r[c] && e.push(c)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        74190: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(87456),
                i = r(11490),
                a = r(99024),
                s = r(98986),
                c = r(37419),
                u = r(47250),
                o = r(24504);

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(r), !0).forEach((function(t) {
                        d(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== f(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== f(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === f(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var p = (0, n.K)({
                name: "clear-refinements",
                connector: !0
            });
            const v = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                return (0, a._)(e, p()),
                    function(r) {
                        var n = r || {},
                            a = n.includedAttributes,
                            f = void 0 === a ? [] : a,
                            l = n.excludedAttributes,
                            d = void 0 === l ? ["query"] : l,
                            v = n.transformItems,
                            y = void 0 === v ? function(e) {
                                return e
                            } : v;
                        if (r && r.includedAttributes && r.excludedAttributes) throw new Error(p("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
                        var g = {
                                refine: i.Z,
                                createURL: function() {
                                    return ""
                                },
                                attributesToClear: []
                            },
                            b = function() {
                                return g.refine()
                            },
                            R = function() {
                                return g.createURL()
                            };
                        return {
                            $$type: "ais.clearRefinements",
                            init: function(t) {
                                var r = t.instantSearchInstance;
                                e(m(m({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !0)
                            },
                            render: function(t) {
                                var r = t.instantSearchInstance;
                                e(m(m({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !1)
                            },
                            dispose: function() {
                                t()
                            },
                            getRenderState: function(e, t) {
                                return m(m({}, e), {}, {
                                    clearRefinements: this.getWidgetRenderState(t)
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var t = e.createURL,
                                    n = e.scopedResults,
                                    i = e.results;
                                g.attributesToClear = n.reduce((function(e, t) {
                                    return e.concat(function(e) {
                                        var t = e.scopedResult,
                                            r = e.includedAttributes,
                                            n = e.excludedAttributes,
                                            i = e.transformItems,
                                            a = e.results,
                                            s = -1 !== r.indexOf("query") || -1 === n.indexOf("query");
                                        return {
                                            helper: t.helper,
                                            items: i((0, u.j)((0, o.F)(t.results, t.helper.state, s).map((function(e) {
                                                return e.attribute
                                            })).filter((function(e) {
                                                return 0 === r.length || -1 !== r.indexOf(e)
                                            })).filter((function(e) {
                                                return "query" === e && s || -1 === n.indexOf(e)
                                            }))), {
                                                results: a
                                            })
                                        }
                                    }({
                                        scopedResult: t,
                                        includedAttributes: f,
                                        excludedAttributes: d,
                                        transformItems: y,
                                        results: i
                                    }))
                                }), []), g.refine = function() {
                                    g.attributesToClear.forEach((function(e) {
                                        var t = e.helper,
                                            r = e.items;
                                        t.setState((0, s.g)({
                                            helper: t,
                                            attributesToClear: r
                                        })).search()
                                    }))
                                }, g.createURL = function() {
                                    return t(c.Z.apply(void 0, function(e) {
                                        if (Array.isArray(e)) return h(e)
                                    }(e = g.attributesToClear.map((function(e) {
                                        var t = e.helper,
                                            r = e.items;
                                        return (0, s.g)({
                                            helper: t,
                                            attributesToClear: r
                                        })
                                    }))) || function(e) {
                                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                    }(e) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return h(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(e, t) : void 0
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()));
                                    var e
                                };
                                var a = g.attributesToClear.some((function(e) {
                                    return e.items.length > 0
                                }));
                                return {
                                    canRefine: a,
                                    hasRefinements: a,
                                    refine: b,
                                    createURL: R,
                                    widgetParams: r
                                }
                            }
                        }
                    }
            }
        },
        12844: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => v
            });
            var n = r(87456),
                i = r(11490),
                a = r(99024),
                s = r(73445),
                c = ["name", "escapedValue", "path"];

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }

            function o(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, a, s, c = [],
                            u = !0,
                            o = !1;
                        try {
                            if (a = (r = r.call(e)).next, 0 === t) {
                                if (Object(r) !== r) return;
                                u = !1
                            } else
                                for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return
                            } finally {
                                if (o) throw i
                            }
                        }
                        return c
                    }
                }(e, t) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0
                    }
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(Object(r), !0).forEach((function(t) {
                        m(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function m(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== u(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === u(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var d = (0, n.K)({
                    name: "menu",
                    connector: !0
                }),
                p = ["isRefined", "name:asc"];
            const v = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                return (0, a._)(e, d()),
                    function(r) {
                        var n, i, a, u = r || {},
                            f = u.attribute,
                            h = u.limit,
                            v = void 0 === h ? 10 : h,
                            y = u.showMore,
                            g = void 0 !== y && y,
                            b = u.showMoreLimit,
                            R = void 0 === b ? 20 : b,
                            F = u.sortBy,
                            j = void 0 === F ? p : F,
                            P = u.transformItems,
                            O = void 0 === P ? function(e) {
                                return e
                            } : P;
                        if (!f) throw new Error(d("The `attribute` option is required."));
                        if (!0 === g && R <= v) throw new Error(d("The `showMoreLimit` option must be greater than `limit`."));
                        var x = !1,
                            w = function() {};

                        function S() {
                            w()
                        }

                        function E() {
                            return x ? R : v
                        }
                        return {
                            $$type: "ais.menu",
                            init: function(t) {
                                var r = t.instantSearchInstance;
                                e(l(l({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !0)
                            },
                            render: function(t) {
                                var r = t.instantSearchInstance;
                                e(l(l({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !1)
                            },
                            dispose: function(e) {
                                var r = e.state;
                                return t(), r.removeHierarchicalFacet(f).setQueryParameter("maxValuesPerFacet", void 0)
                            },
                            getRenderState: function(e, t) {
                                return l(l({}, e), {}, {
                                    menu: l(l({}, e.menu), {}, m({}, f, this.getWidgetRenderState(t)))
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var t = e.results,
                                    u = e.createURL,
                                    h = e.instantSearchInstance,
                                    m = e.helper,
                                    d = [],
                                    v = !1;
                                if (n || (n = (0, s.l)({
                                        instantSearchInstance: h,
                                        helper: m,
                                        attribute: f,
                                        widgetType: this.$$type
                                    })), i || (i = function(e) {
                                        return u(m.state.resetPage().toggleFacetRefinement(f, e))
                                    }), a || (a = function(e) {
                                        var t = o(m.getHierarchicalFacetBreadcrumb(f), 1)[0];
                                        n("click:internal", e || t), m.toggleFacetRefinement(f, e || t).search()
                                    }), e.results && (w = function(e, t) {
                                        return function() {
                                            x = !x, t.render(e)
                                        }
                                    }(e, this)), t) {
                                    var y = t.getFacetValues(f, {
                                            sortBy: j,
                                            facetOrdering: j === p
                                        }),
                                        b = y && !Array.isArray(y) && y.data ? y.data : [];
                                    v = g && (x || b.length > E()), d = O(b.slice(0, E()).map((function(e) {
                                        var t = e.name,
                                            r = e.escapedValue;
                                        return e.path, l(l({}, function(e, t) {
                                            if (null == e) return {};
                                            var r, n, i = function(e, t) {
                                                if (null == e) return {};
                                                var r, n, i = {},
                                                    a = Object.keys(e);
                                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                                                return i
                                            }(e, t);
                                            if (Object.getOwnPropertySymbols) {
                                                var a = Object.getOwnPropertySymbols(e);
                                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                            }
                                            return i
                                        }(e, c)), {}, {
                                            label: t,
                                            value: r
                                        })
                                    })), {
                                        results: t
                                    })
                                }
                                return {
                                    items: d,
                                    createURL: i,
                                    refine: a,
                                    sendEvent: n,
                                    canRefine: d.length > 0,
                                    widgetParams: r,
                                    isShowingMore: x,
                                    toggleShowMore: S,
                                    canToggleShowMore: v
                                }
                            },
                            getWidgetUiState: function(e, t) {
                                var r = o(t.searchParameters.getHierarchicalFacetBreadcrumb(f), 1)[0];
                                return r ? l(l({}, e), {}, {
                                    menu: l(l({}, e.menu), {}, m({}, f, r))
                                }) : e
                            },
                            getWidgetSearchParameters: function(e, t) {
                                var r = t.uiState,
                                    n = r.menu && r.menu[f];
                                if (e.isConjunctiveFacet(f) || e.isDisjunctiveFacet(f)) return e;
                                var i = e.removeHierarchicalFacet(f).addHierarchicalFacet({
                                        name: f,
                                        attributes: [f]
                                    }),
                                    a = i.maxValuesPerFacet || 0,
                                    s = Math.max(a, g ? R : v),
                                    c = i.setQueryParameter("maxValuesPerFacet", s);
                                return n ? c.addHierarchicalFacetRefinement(f, n) : c.setQueryParameters({
                                    hierarchicalFacetsRefinements: l(l({}, c.hierarchicalFacetsRefinements), {}, m({}, f, []))
                                })
                            }
                        }
                    }
            }
        },
        34680: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => l
            });
            var n = r(87456),
                i = r(11490),
                a = r(99024);

            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, s(e)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function o(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== s(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === s(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var f = (0, n.K)({
                    name: "search-box",
                    connector: !0
                }),
                h = function(e, t) {
                    return t(e)
                };
            const l = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z;
                return (0, a._)(e, f()),
                    function(r) {
                        var n, i, a = (r || {}).queryHook,
                            s = void 0 === a ? h : a;
                        return {
                            $$type: "ais.searchBox",
                            init: function(t) {
                                var r = t.instantSearchInstance;
                                e(u(u({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !0)
                            },
                            render: function(t) {
                                var r = t.instantSearchInstance;
                                e(u(u({}, this.getWidgetRenderState(t)), {}, {
                                    instantSearchInstance: r
                                }), !1)
                            },
                            dispose: function(e) {
                                var r = e.state;
                                return t(), r.setQueryParameter("query", void 0)
                            },
                            getRenderState: function(e, t) {
                                return u(u({}, e), {}, {
                                    searchBox: this.getWidgetRenderState(t)
                                })
                            },
                            getWidgetRenderState: function(e) {
                                var t = e.helper,
                                    a = e.searchMetadata,
                                    c = e.state;
                                return n || (n = function(e) {
                                    s(e, (function(e) {
                                        return t.setQuery(e).search()
                                    }))
                                }, i = function() {
                                    t.setQuery("").search()
                                }), {
                                    query: c.query || "",
                                    refine: n,
                                    clear: i,
                                    widgetParams: r,
                                    isSearchStalled: a.isSearchStalled
                                }
                            },
                            getWidgetUiState: function(e, t) {
                                var r = t.searchParameters.query || "";
                                return "" === r || e && e.query === r ? e : u(u({}, e), {}, {
                                    query: r
                                })
                            },
                            getWidgetSearchParameters: function(e, t) {
                                var r = t.uiState;
                                return e.setQueryParameter("query", r.query || "")
                            }
                        }
                    }
            }
        },
        99024: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => i
            });
            var n = r(26782);

            function i(e, t) {
                if (void 0 === e || "function" != typeof e) throw new Error("The render function is not valid (received type ".concat((0, n.t)(e), ").\n\n").concat(t))
            }
        },
        98986: (e, t, r) => {
            "use strict";

            function n(e) {
                var t = e.helper,
                    r = e.attributesToClear,
                    n = void 0 === r ? [] : r,
                    i = t.state.setPage(0);
                return i = n.reduce((function(e, t) {
                    return i.isNumericRefined(t) ? e.removeNumericRefinement(t) : i.isHierarchicalFacet(t) ? e.removeHierarchicalFacetRefinement(t) : i.isDisjunctiveFacet(t) ? e.removeDisjunctiveFacetRefinement(t) : i.isConjunctiveFacet(t) ? e.removeFacetRefinement(t) : e
                }), i), -1 !== n.indexOf("query") && (i = i.setQuery("")), i
            }
            r.d(t, {
                g: () => n
            })
        },
        73445: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => s
            });
            var n = r(76954);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e) {
                var t = e.instantSearchInstance,
                    r = e.helper,
                    s = e.attribute,
                    c = e.widgetType;
                return function() {
                    for (var e = arguments.length, u = new Array(e), o = 0; o < e; o++) u[o] = arguments[o];
                    var f, h, l = u[1],
                        m = u[2],
                        d = void 0 === m ? "Filter Applied" : m,
                        p = (f = u[0].split(":"), h = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(f) || function(e, t) {
                            var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != r) {
                                var n, i, a, s, c = [],
                                    u = !0,
                                    o = !1;
                                try {
                                    if (a = (r = r.call(e)).next, 0 === t) {
                                        if (Object(r) !== r) return;
                                        u = !1
                                    } else
                                        for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
                                } catch (e) {
                                    o = !0, i = e
                                } finally {
                                    try {
                                        if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return
                                    } finally {
                                        if (o) throw i
                                    }
                                }
                                return c
                            }
                        }(f, h) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return a(e, t);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                            }
                        }(f, h) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        v = p[0],
                        y = p[1],
                        g = "string" == typeof s ? s : s(l);
                    1 === u.length && "object" === i(u[0]) ? t.sendEventToInsights(u[0]) : "click" !== v || 2 !== u.length && 3 !== u.length || (0, n.h)(r, g, l) || t.sendEventToInsights({
                        insightsMethod: "clickedFilters",
                        widgetType: c,
                        eventType: v,
                        eventModifier: y,
                        payload: {
                            eventName: d,
                            index: r.getIndex(),
                            filters: ["".concat(g, ":").concat(l)]
                        },
                        attribute: g
                    })
                }
            }
        },
        87456: (e, t, r) => {
            "use strict";

            function n() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n = t.map((function(e) {
                    return ["https://www.algolia.com/doc/api-reference/widgets/", (t = e).name, "/js/", void 0 !== (r = t.connector) && r ? "#connector" : ""].join("");
                    var t, r
                })).join(", ");
                return function(e) {
                    return [e, "See documentation: ".concat(n)].filter(Boolean).join("\n\n")
                }
            }
            r.d(t, {
                K: () => n
            })
        },
        64930: (e, t, r) => {
            "use strict";

            function n(e) {
                return "string" == typeof e ? e.replace(/^\\-/, "-") : e
            }

            function i(e) {
                return "number" == typeof e && e < 0 || "string" == typeof e ? String(e).replace(/^-/, "\\-") : e
            }
            r.d(t, {
                Z: () => n,
                j: () => i
            })
        },
        7122: (e, t, r) => {
            "use strict";

            function n(e, t) {
                for (var r, n = 0; n < e.length; n++)
                    if (t(r = e[n], n, e)) return r
            }
            r.d(t, {
                s: () => n
            })
        },
        63222: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (!Array.isArray(e)) return -1;
                for (var r = 0; r < e.length; r++)
                    if (t(e[r])) return r;
                return -1
            }
            r.d(t, {
                c: () => n
            })
        },
        26782: (e, t, r) => {
            "use strict";

            function n(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            }
            r.d(t, {
                t: () => n
            })
        },
        24504: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => s
            });
            var n = r(64930),
                i = r(7122);

            function a(e, t, r, a) {
                var s, c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                    u = {
                        type: t,
                        attribute: r,
                        name: a,
                        escapedValue: (0, n.j)(a)
                    },
                    o = (0, i.s)(c, (function(e) {
                        return e.name === r
                    }));
                if ("hierarchical" === t) {
                    for (var f = e.getHierarchicalFacetByName(r), h = a.split(f.separator), l = function(e) {
                            var t;
                            o = o && o.data && (0, i.s)(Object.keys(o.data).map((t = o.data, function(e) {
                                return t[e]
                            })), (function(t) {
                                return t.name === h[e]
                            }))
                        }, m = 0; void 0 !== o && m < h.length; ++m) l(m);
                    s = o && o.count
                } else s = o && o.data && o.data[u.name];
                return void 0 !== s && (u.count = s), o && void 0 !== o.exhaustive && (u.exhaustive = o.exhaustive), u
            }

            function s(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = [],
                    s = t.facetsRefinements,
                    c = void 0 === s ? {} : s,
                    u = t.facetsExcludes,
                    o = void 0 === u ? {} : u,
                    f = t.disjunctiveFacetsRefinements,
                    h = void 0 === f ? {} : f,
                    l = t.hierarchicalFacetsRefinements,
                    m = void 0 === l ? {} : l,
                    d = t.numericRefinements,
                    p = void 0 === d ? {} : d,
                    v = t.tagRefinements,
                    y = void 0 === v ? [] : v;
                return Object.keys(c).forEach((function(r) {
                    c[r].forEach((function(n) {
                        i.push(a(t, "facet", r, n, e.facets))
                    }))
                })), Object.keys(o).forEach((function(e) {
                    o[e].forEach((function(t) {
                        i.push({
                            type: "exclude",
                            attribute: e,
                            name: t,
                            exclude: !0
                        })
                    }))
                })), Object.keys(h).forEach((function(r) {
                    h[r].forEach((function(s) {
                        i.push(a(t, "disjunctive", r, (0, n.Z)(s), e.disjunctiveFacets))
                    }))
                })), Object.keys(m).forEach((function(r) {
                    m[r].forEach((function(n) {
                        i.push(a(t, "hierarchical", r, n, e.hierarchicalFacets))
                    }))
                })), Object.keys(p).forEach((function(e) {
                    var t = p[e];
                    Object.keys(t).forEach((function(r) {
                        var n = r,
                            a = t[n];
                        (Array.isArray(a) ? a : [a]).forEach((function(t) {
                            i.push({
                                type: "numeric",
                                attribute: e,
                                name: "".concat(t),
                                numericValue: t,
                                operator: n
                            })
                        }))
                    }))
                })), y.forEach((function(e) {
                    i.push({
                        type: "tag",
                        attribute: "_tags",
                        name: e
                    })
                })), r && t.query && t.query.trim() && i.push({
                    attribute: "query",
                    type: "query",
                    name: t.query,
                    query: t.query
                }), i
            }
        },
        76954: (e, t, r) => {
            "use strict";

            function n(e, t, r) {
                return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, r) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, r) : e.state.isDisjunctiveFacetRefined(t, r)
            }
            r.d(t, {
                h: () => n
            })
        },
        37419: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => f
            });
            var n = r(63222),
                i = r(47250);

            function a(e) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, a(e)
            }
            var s = ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"];

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function o(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== a(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === a(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var f = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return t.reduce((function(e, t) {
                    var r = function(e, t) {
                            return e.setQueryParameters({
                                hierarchicalFacetsRefinements: u(u({}, e.hierarchicalFacetsRefinements), t.hierarchicalFacetsRefinements)
                            })
                        }(e, t),
                        a = function(e, t) {
                            return e.setQueryParameters({
                                hierarchicalFacets: t.hierarchicalFacets.reduce((function(e, t) {
                                    var r = (0, n.c)(e, (function(e) {
                                        return e.name === t.name
                                    }));
                                    if (-1 === r) return e.concat(t);
                                    var i = e.slice();
                                    return i.splice(r, 1, t), i
                                }), e.hierarchicalFacets)
                            })
                        }(r, t),
                        c = function(e, t) {
                            return t.tagRefinements.reduce((function(e, t) {
                                return e.addTagRefinement(t)
                            }), e)
                        }(a, t),
                        o = function(e, t) {
                            return e.setQueryParameters({
                                numericRefinements: u(u({}, e.numericRefinements), t.numericRefinements)
                            })
                        }(c, t),
                        f = function(e, t) {
                            return e.setQueryParameters({
                                disjunctiveFacetsRefinements: u(u({}, e.disjunctiveFacetsRefinements), t.disjunctiveFacetsRefinements)
                            })
                        }(o, t),
                        h = function(e, t) {
                            return e.setQueryParameters({
                                facetsExcludes: u(u({}, e.facetsExcludes), t.facetsExcludes)
                            })
                        }(f, t),
                        l = function(e, t) {
                            return e.setQueryParameters({
                                facetsRefinements: u(u({}, e.facetsRefinements), t.facetsRefinements)
                            })
                        }(h, t),
                        m = function(e, t) {
                            return t.disjunctiveFacets.reduce((function(e, t) {
                                return e.addDisjunctiveFacet(t)
                            }), e)
                        }(l, t),
                        d = function(e, t) {
                            var r = (0, i.j)([].concat(e.ruleContexts).concat(t.ruleContexts).filter(Boolean));
                            return r.length > 0 ? e.setQueryParameters({
                                ruleContexts: r
                            }) : e
                        }(m, t),
                        p = function(e, t) {
                            return t.facets.reduce((function(e, t) {
                                return e.addFacet(t)
                            }), e)
                        }(d, t);
                    return function(e, t) {
                        t.facets, t.disjunctiveFacets, t.facetsRefinements, t.facetsExcludes, t.disjunctiveFacetsRefinements, t.numericRefinements, t.tagRefinements, t.hierarchicalFacets, t.hierarchicalFacetsRefinements, t.ruleContexts;
                        var r = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = function(e, t) {
                                if (null == e) return {};
                                var r, n, i = {},
                                    a = Object.keys(e);
                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                                return i
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var a = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                            }
                            return i
                        }(t, s);
                        return e.setQueryParameters(r)
                    }(p, t)
                }))
            }
        },
        11490: (e, t, r) => {
            "use strict";

            function n() {}
            r.d(t, {
                Z: () => n
            })
        },
        47250: (e, t, r) => {
            "use strict";

            function n(e) {
                return e.filter((function(e, t, r) {
                    return r.indexOf(e) === t
                }))
            }
            r.d(t, {
                j: () => n
            })
        },
        71443: (e, t, r) => {
            "use strict";
            r.d(t, {
                m: () => n
            });
            var n = (0, r(67294).createContext)(null)
        },
        11582: (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => a
            });
            var n = r(74190),
                i = r(13061);

            function a(e, t) {
                return (0, i.B)(n.Z, e, t)
            }
        },
        500: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => a
            });
            var n = r(12844),
                i = r(13061);

            function a(e, t) {
                return (0, i.B)(n.Z, e, t)
            }
        },
        46603: (e, t, r) => {
            "use strict";
            r.d(t, {
                l: () => a
            });
            var n = r(34680),
                i = r(13061);

            function a(e, t) {
                return (0, i.B)(n.Z, e, t)
            }
        },
        13061: (e, t, r) => {
            "use strict";
            r.d(t, {
                B: () => b
            });
            var n = r(67294),
                i = r(39284),
                a = r(8545),
                s = r(11914),
                c = r(14524),
                u = r(22082),
                o = r(99270),
                f = r(3251);

            function h(e) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, h(e)
            }
            var l = ["instantSearchInstance", "widgetParams"],
                m = ["widgetParams"];

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                        y(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function y(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== h(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== h(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === h(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                }
                return i
            }

            function b(e) {
                var t, r, h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    p = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    y = (0, u.a)(),
                    b = (0, c.z)(),
                    R = (0, s.a)(),
                    F = (0, o.q)(h),
                    j = (0, o.q)(p),
                    P = (0, n.useRef)(!0),
                    O = (0, n.useRef)(null),
                    x = (0, n.useMemo)((function() {
                        return v(v({}, e((function(e, t) {
                            if (t) P.current = !0;
                            else if (P.current) {
                                e.instantSearchInstance, e.widgetParams;
                                var r = g(e, l);
                                (0, i.J)(r, O.current, (function(e, t) {
                                    return (null == e ? void 0 : e.constructor) === Function && (null == t ? void 0 : t.constructor) === Function
                                })) || (E(r), O.current = r)
                            }
                        }), (function() {
                            P.current = !1
                        }))(F)), j)
                    }), [e, F, j]),
                    w = (t = (0, n.useState)((function() {
                        if (x.getWidgetRenderState) {
                            var e, t = R.getHelper(),
                                r = R.getWidgetUiState({})[R.getIndexId()];
                            t.state = (null === (e = x.getWidgetSearchParameters) || void 0 === e ? void 0 : e.call(x, t.state, {
                                uiState: r
                            })) || t.state;
                            var n = (0, a.E)(R),
                                i = n.results,
                                s = n.scopedResults,
                                c = x.getWidgetRenderState({
                                    helper: t,
                                    parent: R,
                                    instantSearchInstance: b,
                                    results: i,
                                    scopedResults: s,
                                    state: t.state,
                                    renderState: b.renderState,
                                    templatesConfig: b.templatesConfig,
                                    createURL: R.createURL,
                                    searchMetadata: {
                                        isSearchStalled: "stalled" === b.status
                                    },
                                    status: b.status,
                                    error: b.error
                                });
                            return c.widgetParams, g(c, m)
                        }
                        return {}
                    })), r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, a, s, c = [],
                                u = !0,
                                o = !1;
                            try {
                                if (a = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    u = !1
                                } else
                                    for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return c
                        }
                    }(t, r) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return d(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(e, t) : void 0
                        }
                    }(t, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    S = w[0],
                    E = w[1];
                return (0, f.F)({
                    widget: x,
                    parentIndex: R,
                    props: F,
                    shouldSsr: Boolean(y)
                }), S
            }
        },
        27993: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            var n = (0, r(67294).createContext)(null)
        },
        30089: (e, t, r) => {
            "use strict";
            r.d(t, {
                Z: () => n
            });
            var n = (0, r(67294).createContext)(null)
        },
        78725: (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => i
            });
            var n = r(8131);

            function i(e) {
                var t, r, i;
                return new n.SearchResults(e, [{
                    query: null !== (t = e.query) && void 0 !== t ? t : "",
                    page: null !== (r = e.page) && void 0 !== r ? r : 0,
                    hitsPerPage: null !== (i = e.hitsPerPage) && void 0 !== i ? i : 20,
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    params: "",
                    exhaustiveNbHits: !0,
                    exhaustiveFacetsCount: !0,
                    processingTimeMS: 0,
                    index: e.index
                }], {
                    __isArtificial: !0
                })
            }
        },
        39284: (e, t, r) => {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }
            r.d(t, {
                J: () => a
            });
            var i = Object.prototype.hasOwnProperty;

            function a(e, t, r) {
                if (null != r && r(e, t)) return !0;
                var s, c;
                if (e === t) return !0;
                if (e && t && (s = e.constructor) === t.constructor) {
                    if (s === Date) return e.getTime() === t.getTime();
                    if (s === RegExp) return e.toString() === t.toString();
                    if (s === Array) {
                        if ((c = e.length) === t.length)
                            for (; c-- && a(e[c], t[c], r););
                        return -1 === c
                    }
                    if (!s || "object" === n(e)) {
                        for (s in c = 0, e) {
                            if (i.call(e, s) && ++c && !i.call(t, s)) return !1;
                            if (!(s in t) || !a(e[s], t[s], r)) return !1
                        }
                        return Object.keys(t).length === c
                    }
                }
                return e != e && t != t
            }
        },
        8545: (e, t, r) => {
            "use strict";
            r.d(t, {
                E: () => u
            });
            var n = r(78725);

            function i(e) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i(e)
            }

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        c(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function c(e, t, r) {
                return (t = function(e) {
                    var t = function(e, t) {
                        if ("object" !== i(e) || null === e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, "string");
                            if ("object" !== i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return String(e)
                    }(e);
                    return "symbol" === i(t) ? t : String(t)
                }(t)) in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function u(e) {
                var t = e.getHelper(),
                    r = e.getResults() || (0, n.Q)(t.state),
                    i = e.getScopedResults().map((function(t) {
                        var i = t.indexId === e.getIndexId() ? r : (0, n.Q)(t.helper.state);
                        return s(s({}, t), {}, {
                            results: t.results || i
                        })
                    }));
                return {
                    results: r,
                    scopedResults: i
                }
            }
        },
        80117: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (!e) throw new Error("Invariant failed")
            }
            r.d(t, {
                k: () => n
            })
        },
        11914: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => s
            });
            var n = r(67294),
                i = r(80117),
                a = r(27993);

            function s() {
                var e = (0, n.useContext)(a.Z);
                return (0, i.k)(null !== e, "The <Index> component must be used within <InstantSearch>."), e
            }
        },
        14524: (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => s
            });
            var n = r(67294),
                i = r(80117),
                a = r(30089);

            function s() {
                var e = (0, n.useContext)(a.Z);
                return (0, i.k)(null !== e, "Hooks must be used inside the <InstantSearch> component.\n\nThey are not compatible with the `react-instantsearch-core` and `react-instantsearch-dom` packages, so make sure to use the <InstantSearch> component from `react-instantsearch-hooks`."), e
            }
        },
        22082: (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => a
            });
            var n = r(67294),
                i = r(71443);

            function a() {
                return (0, n.useContext)(i.m)
            }
        },
        98767: (e, t, r) => {
            "use strict";
            r.d(t, {
                L: () => i
            });
            var n = r(67294),
                i = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect
        },
        99270: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => s
            });
            var n = r(67294),
                i = r(39284);

            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function s(e) {
                var t, r, s = (t = (0, n.useState)((function() {
                        return e
                    })), r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t) || function(e, t) {
                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != r) {
                            var n, i, a, s, c = [],
                                u = !0,
                                o = !1;
                            try {
                                if (a = (r = r.call(e)).next, 0 === t) {
                                    if (Object(r) !== r) return;
                                    u = !1
                                } else
                                    for (; !(u = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); u = !0);
                            } catch (e) {
                                o = !0, i = e
                            } finally {
                                try {
                                    if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return c
                        }
                    }(t, r) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? a(e, t) : void 0
                        }
                    }(t, r) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    c = s[0],
                    u = s[1];
                return (0, i.J)(c, e) || u(e), c
            }
        },
        3251: (e, t, r) => {
            "use strict";
            r.d(t, {
                F: () => c
            });
            var n = r(67294),
                i = r(39284),
                a = r(14524),
                s = r(98767);

            function c(e) {
                var t = e.widget,
                    r = e.parentIndex,
                    c = e.props,
                    u = e.shouldSsr,
                    o = (0, n.useRef)(c);
                (0, n.useEffect)((function() {
                    o.current = c
                }), [c]);
                var f = (0, n.useRef)(t);
                (0, n.useEffect)((function() {
                    f.current = t
                }), [t]);
                var h = (0, n.useRef)(null),
                    l = u && !r.getWidgets().includes(t),
                    m = (0, a.z)();
                (0, s.L)((function() {
                    var e = f.current;
                    return h.current ? (clearTimeout(h.current), (0, i.J)(c, o.current) || (r.removeWidgets([e]), r.addWidgets([t]))) : l || r.addWidgets([t]),
                        function() {
                            h.current = setTimeout((function() {
                                m._schedule((function() {
                                    m._preventWidgetCleanup || r.removeWidgets([e])
                                }))
                            }))
                        }
                }), [r, t, l, m, c]), l && r.addWidgets([t])
            }
        }
    }
]);