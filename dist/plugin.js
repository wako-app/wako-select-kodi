!(function (t, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ngx-translate.core', 'rxjs', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], r)
    : 'object' == typeof exports
    ? (exports.plugin = r(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ngx-translate.core'),
        require('rxjs'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (t.plugin = r(
        t['ng.common'],
        t.tslib,
        t['ng.forms'],
        t['ngx-translate.core'],
        t.rxjs,
        t['wako-app.mobile-sdk'],
        t['ng.core'],
        t['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (t, r, n, e, o, i, s, u) {
  return (function (t) {
    var r = {};
    function n(e) {
      if (r[e]) return r[e].exports;
      var o = (r[e] = { i: e, l: !1, exports: {} });
      return t[e].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = r),
      (n.d = function (t, r, e) {
        n.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: e });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (n.t = function (t, r) {
        if ((1 & r && (t = n(t)), 8 & r)) return t;
        if (4 & r && 'object' == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if ((n.r(e), Object.defineProperty(e, 'default', { enumerable: !0, value: t }), 2 & r && 'string' != typeof t))
          for (var o in t)
            n.d(
              e,
              o,
              function (r) {
                return t[r];
              }.bind(null, o)
            );
        return e;
      }),
      (n.n = function (t) {
        var r =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(r, 'a', r), r;
      }),
      (n.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })({
    0: function (t, r, n) {
      t.exports = n('zUnb');
    },
    '0S4P': function (r, n) {
      r.exports = t;
    },
    '17wl': function (t, n) {
      t.exports = r;
    },
    '3xDq': function (t, r) {
      t.exports = n;
    },
    TGDj: function (t, r) {
      t.exports = e;
    },
    Vgaj: function (t, r) {
      t.exports = o;
    },
    doF0: function (t, r) {
      t.exports = i;
    },
    vOrQ: function (t, r) {
      t.exports = s;
    },
    z1lQ: function (t, r) {
      t.exports = u;
    },
    zUnb: function (t, r, n) {
      'use strict';
      n.r(r),
        n.d(r, 'PluginModule', function () {
          return F;
        });
      var e = n('17wl'),
        o = n('0S4P'),
        i = n('z1lQ'),
        s = n('doF0');
      function u() {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        Object(s.wakoLog)('plugin.my-plugin', t);
      }
      var c = n('Vgaj');
      function a(t) {
        return 'function' == typeof t;
      }
      var p = !1,
        f = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            p = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return p;
          }
        };
      function l(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var h = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (f.useDeprecatedSynchronousErrorHandling) throw t;
            l(t);
          },
          complete: function () {}
        },
        b = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && 'number' == typeof t.length;
            }
          );
        })();
      function d(t) {
        return null !== t && 'object' == typeof t;
      }
      var y = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, r) {
                      return r + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        _ = (function () {
          function t(t) {
            (this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), t && (this._unsubscribe = t);
          }
          return (
            (t.prototype.unsubscribe = function () {
              var r;
              if (!this.closed) {
                var n = this._parentOrParents,
                  e = this._unsubscribe,
                  o = this._subscriptions;
                if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
                else if (null !== n) for (var i = 0; i < n.length; ++i) n[i].remove(this);
                if (a(e))
                  try {
                    e.call(this);
                  } catch (c) {
                    r = c instanceof y ? v(c.errors) : [c];
                  }
                if (b(o)) {
                  i = -1;
                  for (var s = o.length; ++i < s; ) {
                    var u = o[i];
                    if (d(u))
                      try {
                        u.unsubscribe();
                      } catch (c) {
                        (r = r || []), c instanceof y ? (r = r.concat(v(c.errors))) : r.push(c);
                      }
                  }
                }
                if (r) throw new y(r);
              }
            }),
            (t.prototype.add = function (r) {
              var n = r;
              if (!r) return t.EMPTY;
              switch (typeof r) {
                case 'function':
                  n = new t(r);
                case 'object':
                  if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var e = n;
                    (n = new t())._subscriptions = [e];
                  }
                  break;
                default:
                  throw new Error('unrecognized teardown ' + r + ' added to Subscription.');
              }
              var o = n._parentOrParents;
              if (null === o) n._parentOrParents = this;
              else if (o instanceof t) {
                if (o === this) return n;
                n._parentOrParents = [o, this];
              } else {
                if (-1 !== o.indexOf(this)) return n;
                o.push(this);
              }
              var i = this._subscriptions;
              return null === i ? (this._subscriptions = [n]) : i.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var r = this._subscriptions;
              if (r) {
                var n = r.indexOf(t);
                -1 !== n && r.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function v(t) {
        return t.reduce(function (t, r) {
          return t.concat(r instanceof y ? r.errors : r);
        }, []);
      }
      var m = (function () {
          return 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
        })(),
        x = (function (t) {
          function r(n, e, o) {
            var i = t.call(this) || this;
            switch (
              ((i.syncErrorValue = null), (i.syncErrorThrown = !1), (i.syncErrorThrowable = !1), (i.isStopped = !1), arguments.length)
            ) {
              case 0:
                i.destination = h;
                break;
              case 1:
                if (!n) {
                  i.destination = h;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof r
                    ? ((i.syncErrorThrowable = n.syncErrorThrowable), (i.destination = n), n.add(i))
                    : ((i.syncErrorThrowable = !0), (i.destination = new g(i, n)));
                  break;
                }
              default:
                (i.syncErrorThrowable = !0), (i.destination = new g(i, n, e, o));
            }
            return i;
          }
          return (
            e.__extends(r, t),
            (r.prototype[m] = function () {
              return this;
            }),
            (r.create = function (t, n, e) {
              var o = new r(t, n, e);
              return (o.syncErrorThrowable = !1), o;
            }),
            (r.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (r.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (r.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (r.prototype.unsubscribe = function () {
              this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (r.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (r.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (r.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (r.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            r
          );
        })(_),
        g = (function (t) {
          function r(r, n, e, o) {
            var i,
              s = t.call(this) || this;
            s._parentSubscriber = r;
            var u = s;
            return (
              a(n)
                ? (i = n)
                : n &&
                  ((i = n.next),
                  (e = n.error),
                  (o = n.complete),
                  n !== h &&
                    (a((u = Object.create(n)).unsubscribe) && s.add(u.unsubscribe.bind(u)), (u.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = u),
              (s._next = i),
              (s._error = e),
              (s._complete = o),
              s
            );
          }
          return (
            e.__extends(r, t),
            (r.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var r = this._parentSubscriber;
                f.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable
                  ? this.__tryOrSetError(r, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (r.prototype.error = function (t) {
              if (!this.isStopped) {
                var r = this._parentSubscriber,
                  n = f.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, this._error, t), this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (r.syncErrorThrowable) n ? ((r.syncErrorValue = t), (r.syncErrorThrown = !0)) : l(t), this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  l(t);
                }
              }
            }),
            (r.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var r = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  f.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (r.prototype.__tryOrUnsub = function (t, r) {
              try {
                t.call(this._context, r);
              } catch (n) {
                if ((this.unsubscribe(), f.useDeprecatedSynchronousErrorHandling)) throw n;
                l(n);
              }
            }),
            (r.prototype.__tryOrSetError = function (t, r, n) {
              if (!f.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
              try {
                r.call(this._context, n);
              } catch (e) {
                return f.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0) : (l(e), !0);
              }
              return !1;
            }),
            (r.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
            }),
            r
          );
        })(x),
        S = (function (t) {
          function r() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            e.__extends(r, t),
            (r.prototype.notifyNext = function (t, r, n, e, o) {
              this.destination.next(r);
            }),
            (r.prototype.notifyError = function (t, r) {
              this.destination.error(t);
            }),
            (r.prototype.notifyComplete = function (t) {
              this.destination.complete();
            }),
            r
          );
        })(x),
        w = (function (t) {
          function r(r, n, e) {
            var o = t.call(this) || this;
            return (o.parent = r), (o.outerValue = n), (o.outerIndex = e), (o.index = 0), o;
          }
          return (
            e.__extends(r, t),
            (r.prototype._next = function (t) {
              this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
            }),
            (r.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (r.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            r
          );
        })(x);
      function E() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      var j = E(),
        O = (function () {
          return ('function' == typeof Symbol && Symbol.observable) || '@@observable';
        })();
      var T = function (t) {
        if (t && 'function' == typeof t[O])
          return (
            (i = t),
            function (t) {
              var r = i[O]();
              if ('function' != typeof r.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
              return r.subscribe(t);
            }
          );
        if ((r = t) && 'number' == typeof r.length && 'function' != typeof r)
          return (
            (o = t),
            function (t) {
              for (var r = 0, n = o.length; r < n && !t.closed; r++) t.next(o[r]);
              t.complete();
            }
          );
        var r;
        if (
          (function (t) {
            return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
          })(t)
        )
          return (
            (e = t),
            function (t) {
              return (
                e
                  .then(
                    function (r) {
                      t.closed || (t.next(r), t.complete());
                    },
                    function (r) {
                      return t.error(r);
                    }
                  )
                  .then(null, l),
                t
              );
            }
          );
        if (t && 'function' == typeof t[j])
          return (
            (n = t),
            function (t) {
              for (var r = n[j](); ; ) {
                var e = r.next();
                if (e.done) {
                  t.complete();
                  break;
                }
                if ((t.next(e.value), t.closed)) break;
              }
              return (
                'function' == typeof r.return &&
                  t.add(function () {
                    r.return && r.return();
                  }),
                t
              );
            }
          );
        var n,
          e,
          o,
          i,
          s = d(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' + s + ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function P(t) {
        return t;
      }
      function k(t) {
        return 0 === t.length
          ? P
          : 1 === t.length
          ? t[0]
          : function (r) {
              return t.reduce(function (t, r) {
                return r(t);
              }, r);
            };
      }
      var q = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (r) {
            var n = new t();
            return (n.source = this), (n.operator = r), n;
          }),
          (t.prototype.subscribe = function (t, r, n) {
            var e = this.operator,
              o = (function (t, r, n) {
                if (t) {
                  if (t instanceof x) return t;
                  if (t[m]) return t[m]();
                }
                return t || r || n ? new x(t, r, n) : new x(h);
              })(t, r, n);
            if (
              (o.add(
                e
                  ? e.call(o, this.source)
                  : this.source || (f.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable)
                  ? this._subscribe(o)
                  : this._trySubscribe(o)
              ),
              f.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && ((o.syncErrorThrowable = !1), o.syncErrorThrown))
            )
              throw o.syncErrorValue;
            return o;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (r) {
              f.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = r)),
                (function (t) {
                  for (; t; ) {
                    var r = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = r && r instanceof x ? r : null;
                  }
                  return !0;
                })(t)
                  ? t.error(r)
                  : console.warn(r);
            }
          }),
          (t.prototype.forEach = function (t, r) {
            var n = this;
            return new (r = A(r))(function (r, e) {
              var o;
              o = n.subscribe(
                function (r) {
                  try {
                    t(r);
                  } catch (n) {
                    e(n), o && o.unsubscribe();
                  }
                },
                e,
                r
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var r = this.source;
            return r && r.subscribe(t);
          }),
          (t.prototype[O] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return 0 === t.length ? this : k(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var r = this;
            return new (t = A(t))(function (t, n) {
              var e;
              r.subscribe(
                function (t) {
                  return (e = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(e);
                }
              );
            });
          }),
          (t.create = function (r) {
            return new t(r);
          }),
          t
        );
      })();
      function A(t) {
        if ((t || (t = f.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
      var D = (function () {
          function t(t, r) {
            (this.project = t), (this.thisArg = r);
          }
          return (
            (t.prototype.call = function (t, r) {
              return r.subscribe(new H(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        H = (function (t) {
          function r(r, n, e) {
            var o = t.call(this, r) || this;
            return (o.project = n), (o.count = 0), (o.thisArg = e || o), o;
          }
          return (
            e.__extends(r, t),
            (r.prototype._next = function (t) {
              var r;
              try {
                r = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(r);
            }),
            r
          );
        })(x);
      function M(t, r) {
        return 'function' == typeof r
          ? function (n) {
              return n.pipe(
                M(function (n, e) {
                  return ((o = t(n, e)), o instanceof q ? o : new q(T(o))).pipe(
                    (function (t, r) {
                      return function (r) {
                        return r.lift(new D(t, void 0));
                      };
                    })(function (t, o) {
                      return r(n, t, e, o);
                    })
                  );
                  var o;
                })
              );
            }
          : function (r) {
              return r.lift(new C(t));
            };
      }
      var C = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, r) {
              return r.subscribe(new V(t, this.project));
            }),
            t
          );
        })(),
        V = (function (t) {
          function r(r, n) {
            var e = t.call(this, r) || this;
            return (e.project = n), (e.index = 0), e;
          }
          return (
            e.__extends(r, t),
            (r.prototype._next = function (t) {
              var r,
                n = this.index++;
              try {
                r = this.project(t, n);
              } catch (e) {
                return void this.destination.error(e);
              }
              this._innerSub(r, t, n);
            }),
            (r.prototype._innerSub = function (t, r, n) {
              var e = this.innerSubscription;
              e && e.unsubscribe();
              var o = new w(this, r, n),
                i = this.destination;
              i.add(o),
                (this.innerSubscription = (function (t, r, n, e, o) {
                  if ((void 0 === o && (o = new w(t, void 0, void 0)), !o.closed)) return r instanceof q ? r.subscribe(o) : T(r)(o);
                })(this, t, 0, 0, o)),
                this.innerSubscription !== o && i.add(this.innerSubscription);
            }),
            (r.prototype._complete = function () {
              var r = this.innerSubscription;
              (r && !r.closed) || t.prototype._complete.call(this), this.unsubscribe();
            }),
            (r.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (r.prototype.notifyComplete = function (r) {
              this.destination.remove(r), (this.innerSubscription = null), this.isStopped && t.prototype._complete.call(this);
            }),
            (r.prototype.notifyNext = function (t, r, n, e, o) {
              this.destination.next(r);
            }),
            r
          );
        })(S),
        I = n('vOrQ'),
        U = (function (t) {
          function r(r) {
            var n = t.call(this) || this;
            return (n.sheet = r), n;
          }
          return (
            Object(e.__extends)(r, t),
            (r.prototype.initialize = function () {
              return Object(e.__awaiter)(this, void 0, void 0, function () {
                var t,
                  r = this;
                return Object(e.__generator)(this, function (n) {
                  return (
                    u('plugin initialized'),
                    (t = s.KodiAppService.checkAndConnectToCurrentHost),
                    (s.KodiAppService.checkAndConnectToCurrentHost = function () {
                      return new c.Observable(function (t) {
                        s.KodiAppService.getHosts().then(function (n) {
                          if (0 === n.length) return t.next(null), void t.complete();
                          if (1 === n.length) return t.next(n[0]), void t.complete();
                          var e = [];
                          n.forEach(function (r) {
                            e.push({
                              text: r.name,
                              handler: function () {
                                t.next(r), t.complete();
                              }
                            });
                          }),
                            e.push({
                              text: 'Cancel',
                              icon: 'close',
                              role: 'cancel',
                              handler: function () {
                                console.log('Cancel clicked');
                              }
                            }),
                            r.sheet.create({ header: 'Select your host', buttons: e }).then(function (t) {
                              t.present();
                            });
                        });
                      }).pipe(
                        M(function (t) {
                          return t
                            ? (s.KodiAppService.disconnect(), Object(c.from)(s.KodiAppService.setCurrentHost(t)))
                            : Object(c.of)(null);
                        }),
                        M(function () {
                          return t.apply(s.KodiAppService);
                        })
                      );
                    }),
                    [2]
                  );
                });
              });
            }),
            (r.prototype.afterInstall = function () {
              u('plugin installed');
            }),
            (r.prototype.afterUpdate = function () {
              u('plugin updated');
            }),
            (r.prototype.setTranslation = function (t, r) {}),
            (r.prototype.customAction = function (t, r) {
              throw new Error('Method not implemented.');
            }),
            (r.ɵfac = function (t) {
              return new (t || r)(I['\u0275\u0275inject'](i.ActionSheetController));
            }),
            (r.ɵprov = I['\u0275\u0275defineInjectable']({ token: r, factory: r.ɵfac })),
            r
          );
        })(s.PluginBaseService),
        z = n('TGDj'),
        K = n('3xDq'),
        F = (function (t) {
          function r() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(e.__extends)(r, t),
            (r.pluginService = U),
            (r.ɵmod = I['\u0275\u0275defineNgModule']({ type: r })),
            (r.ɵinj = I['\u0275\u0275defineInjector']({
              factory: function (t) {
                return N(t || r);
              },
              providers: [U],
              imports: [[o.CommonModule, K.FormsModule, i.IonicModule.forRoot(), z.TranslateModule.forRoot()]]
            })),
            r
          );
        })(s.PluginBaseModule),
        N = I['\u0275\u0275getInheritedFactory'](F);
      r.default = F;
    }
  });
});
