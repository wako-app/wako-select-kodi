!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("ng.common"),require("tslib"),require("ng.forms"),require("ngx-translate.core"),require("rxjs"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):"function"==typeof define&&define.amd?define(["ng.common","tslib","ng.forms","ngx-translate.core","rxjs","wako-app.mobile-sdk","ng.core","ionic.angular"],t):"object"==typeof exports?exports.plugin=t(require("ng.common"),require("tslib"),require("ng.forms"),require("ngx-translate.core"),require("rxjs"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):e.plugin=t(e["ng.common"],e.tslib,e["ng.forms"],e["ngx-translate.core"],e.rxjs,e["wako-app.mobile-sdk"],e["ng.core"],e["ionic.angular"])}("undefined"!=typeof self?self:this,(function(e,t,r,n,o,i,u,c){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,(function(t){return e[t]}).bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({0:function(e,t,r){e.exports=r("zUnb")},"0S4P":function(t,r){t.exports=e},"17wl":function(e,r){e.exports=t},"3xDq":function(e,t){e.exports=r},TGDj:function(e,t){e.exports=n},Vgaj:function(e,t){e.exports=o},doF0:function(e,t){e.exports=i},vOrQ:function(e,t){e.exports=u},z1lQ:function(e,t){e.exports=c},zUnb:function(e,t,r){"use strict";r.r(t),r.d(t,"PluginModule",(function(){return Z}));var n=r("17wl"),o=r("0S4P"),i=r("z1lQ"),u=r("doF0");function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];Object(u.wakoLog)("plugin.my-plugin",e)}var s=r("Vgaj");function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t,r){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?b(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}function _(e){return"function"==typeof e}var g=!1,S={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){if(e){var t=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+t.stack)}else g&&console.log("RxJS: Back to a better error behavior. Thank you. <3");g=e},get useDeprecatedSynchronousErrorHandling(){return g}};function x(e){setTimeout((function(){throw e}),0)}var E={closed:!0,next:function(e){},error:function(e){if(S.useDeprecatedSynchronousErrorHandling)throw e;x(e)},complete:function(){}},k=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}();function j(e){return null!==e&&"object"==typeof e}var O=function(){function e(e){return Error.call(this),this.message=e?"".concat(e.length," errors occurred during unsubscription:\n").concat(e.map((function(e,t){return"".concat(t+1,") ").concat(e.toString())})).join("\n  ")):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),P=function(){var e=function(){function e(t){v(this,e),this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return w(e,[{key:"unsubscribe",value:function(){var t;if(!this.closed){var r=this._parentOrParents,n=this._unsubscribe,o=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof e)r.remove(this);else if(null!==r)for(var i=0;i<r.length;++i)r[i].remove(this);if(_(n))try{n.call(this)}catch(a){t=a instanceof O?T(a.errors):[a]}if(k(o))for(var u=-1,c=o.length;++u<c;){var s=o[u];if(j(s))try{s.unsubscribe()}catch(a){t=t||[],a instanceof O?t=t.concat(T(a.errors)):t.push(a)}}if(t)throw new O(t)}}},{key:"add",value:function(t){var r=t;if(!t)return e.EMPTY;switch(typeof t){case"function":r=new e(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof e)){var n=r;(r=new e)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=r._parentOrParents;if(null===o)r._parentOrParents=this;else if(o instanceof e){if(o===this)return r;r._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return r;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[r]:i.push(r),r}},{key:"remove",value:function(e){var t=this._subscriptions;if(t){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}}}]),e}();return e.EMPTY=function(e){return e.closed=!0,e}(new e),e}();function T(e){return e.reduce((function(e,t){return e.concat(t instanceof O?t.errors:t)}),[])}var M=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),D=function(e){h(r,e);var t=y(r);function r(e,n,o){var i;switch(v(this,r),(i=t.call(this)).syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=E;break;case 1:if(!e){i.destination=E;break}if("object"==typeof e){e instanceof r?(i.syncErrorThrowable=e.syncErrorThrowable,i.destination=e,e.add(b(i))):(i.syncErrorThrowable=!0,i.destination=new A(b(i),e));break}default:i.syncErrorThrowable=!0,i.destination=new A(b(i),e,n,o)}return i}return w(r,[{key:M,value:function(){return this}},{key:"next",value:function(e){this.isStopped||this._next(e)}},{key:"error",value:function(e){this.isStopped||(this.isStopped=!0,this._error(e))}},{key:"complete",value:function(){this.isStopped||(this.isStopped=!0,this._complete())}},{key:"unsubscribe",value:function(){this.closed||(this.isStopped=!0,f(a(r.prototype),"unsubscribe",this).call(this))}},{key:"_next",value:function(e){this.destination.next(e)}},{key:"_error",value:function(e){this.destination.error(e),this.unsubscribe()}},{key:"_complete",value:function(){this.destination.complete(),this.unsubscribe()}},{key:"_unsubscribeAndRecycle",value:function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this}}],[{key:"create",value:function(e,t,n){var o=new r(e,t,n);return o.syncErrorThrowable=!1,o}}]),r}(P),A=function(e){h(r,e);var t=y(r);function r(e,n,o,i){var u,c;v(this,r),(u=t.call(this))._parentSubscriber=e;var s=b(u);return _(n)?c=n:n&&(c=n.next,o=n.error,i=n.complete,n!==E&&(_((s=Object.create(n)).unsubscribe)&&u.add(s.unsubscribe.bind(s)),s.unsubscribe=u.unsubscribe.bind(b(u)))),u._context=s,u._next=c,u._error=o,u._complete=i,u}return w(r,[{key:"next",value:function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;S.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}}},{key:"error",value:function(e){if(!this.isStopped){var t=this._parentSubscriber,r=S.useDeprecatedSynchronousErrorHandling;if(this._error)r&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)r?(t.syncErrorValue=e,t.syncErrorThrown=!0):x(e),this.unsubscribe();else{if(this.unsubscribe(),r)throw e;x(e)}}}},{key:"complete",value:function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var r=function(){return e._complete.call(e._context)};S.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}}},{key:"__tryOrUnsub",value:function(e,t){try{e.call(this._context,t)}catch(r){if(this.unsubscribe(),S.useDeprecatedSynchronousErrorHandling)throw r;x(r)}}},{key:"__tryOrSetError",value:function(e,t,r){if(!S.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(n){return S.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=n,e.syncErrorThrown=!0,!0):(x(n),!0)}return!1}},{key:"_unsubscribe",value:function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()}}]),r}(D),q=function(e){h(r,e);var t=y(r);function r(){return v(this,r),t.apply(this,arguments)}return w(r,[{key:"notifyNext",value:function(e,t,r,n,o){this.destination.next(t)}},{key:"notifyError",value:function(e,t){this.destination.error(e)}},{key:"notifyComplete",value:function(e){this.destination.complete()}}]),r}(D),H=function(e){h(r,e);var t=y(r);function r(e,n,o){var i;return v(this,r),(i=t.call(this)).parent=e,i.outerValue=n,i.outerIndex=o,i.index=0,i}return w(r,[{key:"_next",value:function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)}},{key:"_error",value:function(e){this.parent.notifyError(e,this),this.unsubscribe()}},{key:"_complete",value:function(){this.parent.notifyComplete(this),this.unsubscribe()}}]),r}(D);function R(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var C=R(),I=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();var V=function(e){if(e&&"function"==typeof e[I])return i=e,function(e){var t=i[I]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if((t=e)&&"number"==typeof t.length&&"function"!=typeof t)return o=e,function(e){for(var t=0,r=o.length;t<r&&!e.closed;t++)e.next(o[t]);e.complete()};var t;if(function(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,x),e};if(e&&"function"==typeof e[C])return r=e,function(e){for(var t=r[C]();;){var n=t.next();if(n.done){e.complete();break}if(e.next(n.value),e.closed)break}return"function"==typeof t.return&&e.add((function(){t.return&&t.return()})),e};var r,n,o,i,u=j(e)?"an invalid object":"'".concat(e,"'"),c="You provided ".concat(u," where a stream was expected.")+" You can provide an Observable, Promise, Array, or Iterable.";throw new TypeError(c)};function U(e){return e}function z(e){return 0===e.length?U:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var F=function(){var e=function(){function e(t){v(this,e),this._isScalar=!1,t&&(this._subscribe=t)}return w(e,[{key:"lift",value:function(t){var r=new e;return r.source=this,r.operator=t,r}},{key:"subscribe",value:function(e,t,r){var n=this.operator,o=function(e,t,r){if(e){if(e instanceof D)return e;if(e[M])return e[M]()}return e||t||r?new D(e,t,r):new D(E)}(e,t,r);if(o.add(n?n.call(o,this.source):this.source||S.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),S.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o}},{key:"_trySubscribe",value:function(e){try{return this._subscribe(e)}catch(t){S.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),function(e){for(;e;){var t=e.destination;if(e.closed||e.isStopped)return!1;e=t&&t instanceof D?t:null}return!0}(e)?e.error(t):console.warn(t)}}},{key:"forEach",value:function(e,t){var r=this;return new(t=K(t))((function(t,n){var o;o=r.subscribe((function(t){try{e(t)}catch(r){n(r),o&&o.unsubscribe()}}),n,t)}))}},{key:"_subscribe",value:function(e){var t=this.source;return t&&t.subscribe(e)}},{key:I,value:function(){return this}},{key:"pipe",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?this:z(t)(this)}},{key:"toPromise",value:function(e){var t=this;return new(e=K(e))((function(e,r){var n;t.subscribe((function(e){return n=e}),(function(e){return r(e)}),(function(){return e(n)}))}))}}]),e}();return e.create=function(t){return new e(t)},e}();function K(e){if(e||(e=S.Promise||Promise),!e)throw new Error("no Promise impl found");return e}var B=function(){function e(t,r){v(this,e),this.project=t,this.thisArg=r}return w(e,[{key:"call",value:function(e,t){return t.subscribe(new N(e,this.project,this.thisArg))}}]),e}(),N=function(e){h(r,e);var t=y(r);function r(e,n,o){var i;return v(this,r),(i=t.call(this,e)).project=n,i.count=0,i.thisArg=o||b(i),i}return w(r,[{key:"_next",value:function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(r){return void this.destination.error(r)}this.destination.next(t)}}]),r}(D);function Q(e,t){return"function"==typeof t?function(r){return r.pipe(Q((function(r,n){return(o=e(r,n),o instanceof F?o:new F(V(o))).pipe(function(e,t){return function(t){return t.lift(new B(e,void 0))}}((function(e,o){return t(r,e,n,o)})));var o})))}:function(t){return t.lift(new Y(e))}}var Y=function(){function e(t){v(this,e),this.project=t}return w(e,[{key:"call",value:function(e,t){return t.subscribe(new G(e,this.project))}}]),e}(),G=function(e){h(r,e);var t=y(r);function r(e,n){var o;return v(this,r),(o=t.call(this,e)).project=n,o.index=0,o}return w(r,[{key:"_next",value:function(e){var t,r=this.index++;try{t=this.project(e,r)}catch(n){return void this.destination.error(n)}this._innerSub(t,e,r)}},{key:"_innerSub",value:function(e,t,r){var n=this.innerSubscription;n&&n.unsubscribe();var o=new H(this,t,r),i=this.destination;i.add(o),this.innerSubscription=function(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:new H(e,r,n);if(!o.closed)return t instanceof F?t.subscribe(o):V(t)(o)}(this,e,void 0,void 0,o),this.innerSubscription!==o&&i.add(this.innerSubscription)}},{key:"_complete",value:function(){var e=this.innerSubscription;e&&!e.closed||f(a(r.prototype),"_complete",this).call(this),this.unsubscribe()}},{key:"_unsubscribe",value:function(){this.innerSubscription=null}},{key:"notifyComplete",value:function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&f(a(r.prototype),"_complete",this).call(this)}},{key:"notifyNext",value:function(e,t,r,n,o){this.destination.next(t)}}]),r}(q),J=r("vOrQ"),L=function(e){function t(t){var r=e.call(this)||this;return r.sheet=t,r}return Object(n.__extends)(t,e),t.prototype.initialize=function(){return Object(n.__awaiter)(this,void 0,void 0,(function(){var e,t=this;return Object(n.__generator)(this,(function(r){return c("plugin initialized"),e=u.KodiAppService.checkAndConnectToCurrentHost,u.KodiAppService.checkAndConnectToCurrentHost=function(){return new s.Observable((function(e){u.KodiAppService.getHosts().then((function(r){if(0===r.length)return e.next(null),void e.complete();if(1===r.length)return e.next(r[0]),void e.complete();var n=[];r.forEach((function(t){n.push({text:t.name,handler:function(){e.next(t),e.complete()}})})),n.push({text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}),t.sheet.create({header:"Select your host",buttons:n}).then((function(e){e.present()}))}))})).pipe(Q((function(e){return e?Object(s.from)(u.KodiAppService.setCurrentHost(e)):Object(s.of)(null)})),Q((function(){return e.apply(u.KodiAppService)})))},[2]}))}))},t.prototype.afterInstall=function(){c("plugin installed")},t.prototype.afterUpdate=function(){c("plugin updated")},t.prototype.setTranslation=function(e,t){},t.prototype.customAction=function(e,t){},t.prototype.beforeMovieMiddleware=function(e){throw new Error("Method not implemented.")},t.prototype.afterMovieMiddleware=function(e){throw new Error("Method not implemented.")},t.prototype.beforeShowMiddleware=function(e){throw new Error("Method not implemented.")},t.prototype.afterShowMiddleware=function(e){throw new Error("Method not implemented.")},t.prototype.beforeEpisodeMiddleware=function(e,t){throw new Error("Method not implemented.")},t.prototype.afterEpisodeMiddleware=function(e,t){throw new Error("Method not implemented.")},t.prototype.fetchExplorerFolderItem=function(){throw new Error("Method not implemented.")},t.prototype.getFileActionButtons=function(e,t,r,o,i,u){return Object(n.__awaiter)(this,void 0,void 0,(function(){return Object(n.__generator)(this,(function(e){throw new Error("Method not implemented.")}))}))},t.\u0275fac=function(e){return new(e||t)(J["\u0275\u0275inject"](i.ActionSheetController))},t.\u0275prov=J["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t}(u.PluginBaseService),W=r("TGDj"),X=r("3xDq"),Z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(n.__extends)(t,e),t.pluginService=L,t.\u0275mod=J["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=J["\u0275\u0275defineInjector"]({factory:function(e){return $(e||t)},providers:[L],imports:[[o.CommonModule,X.FormsModule,i.IonicModule.forRoot(),W.TranslateModule.forRoot()]]}),t}(u.PluginBaseModule),$=J["\u0275\u0275getInheritedFactory"](Z);t.default=Z}})}));