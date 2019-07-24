!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("ionic.storage"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):"function"==typeof define&&define.amd?define(["ng.common","tslib","ng.forms","ng.router","ngx-translate.core","ionic.storage","wako-app.mobile-sdk","ng.core","ionic.angular"],e):"object"==typeof exports?exports.plugin=e(require("ng.common"),require("tslib"),require("ng.forms"),require("ng.router"),require("ngx-translate.core"),require("ionic.storage"),require("wako-app.mobile-sdk"),require("ng.core"),require("ionic.angular")):n.plugin=e(n["ng.common"],n.tslib,n["ng.forms"],n["ng.router"],n["ngx-translate.core"],n["ionic.storage"],n["wako-app.mobile-sdk"],n["ng.core"],n["ionic.angular"])}("undefined"!=typeof self?self:this,function(n,e,t,l,o,r,u,i,a){return function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,(function(e){return n[e]}).bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}({0:function(n,e,t){n.exports=t("zUnb")},"0S4P":function(e,t){e.exports=n},"17wl":function(n,t){n.exports=e},"3xDq":function(n,e){n.exports=t},FsH7:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("17wl"),o=t("vOrQ"),r=t("z1lQ"),u=t("TGDj");e.ToastService=function(){function n(n,e){this.toastCtrl=n,this.translateService=e}return n.prototype.simpleMessage=function(n,e,t,l){var o=this;void 0===t&&(t=2e3),void 0===l&&(l="top"),this.translateService.get(n,e).subscribe(function(n){o.toastCtrl.create({message:n,mode:"ios",position:l,duration:t}).then(function(n){n.present()})})},l.__decorate([o.Injectable(),l.__metadata("design:paramtypes",[r.ToastController,u.TranslateService])],n)}()},GoKE:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=t("17wl"),o=t("vOrQ"),r=t("z1lQ");e.BrowserService=function(){function n(n){this.platform=n}return n.prototype.open=function(n,e){void 0===e&&(e=!0),!1!==this.platform.is("cordova")&&e?SafariViewController.isAvailable(function(e){e?SafariViewController.show({url:n,hidden:!1,animated:!0,transition:"curl",enterReaderModeIfAvailable:!1,barColor:"#1f2d3f",tintColor:"#1f2d3f",controlTintColor:"#ffffff"}):window.open(n,"_system","location=yes")}):window.open(n,"_system","location=yes")},l.__decorate([o.Injectable(),l.__metadata("design:paramtypes",[r.Platform])],n)}()},JAnZ:function(n,e){n.exports=l},TGDj:function(n,e){n.exports=o},Zr0N:function(n,e){n.exports=r},doF0:function(n,e){n.exports=u},vOrQ:function(n,e){n.exports=i},z1lQ:function(n,e){n.exports=a},zUnb:function(n,e,t){"use strict";t.r(e);var l=t("17wl"),o=t("doF0"),r=t("TGDj");function u(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];Object(o.wakoLog)("plugin.my-plugin",n)}var i=function(n){function e(e){var t=n.call(this)||this;return t.translate=e,t}return l.__extends(e,n),e.prototype.initialize=function(){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(n){return u("plugin initialized"),[2]})})},e.prototype.afterInstall=function(){u("plugin installed")},e.prototype.afterUpdate=function(){u("plugin updated")},e.prototype.setTranslation=function(n,e){this.translate.setDefaultLang(n),this.translate.use(n),this.translate.setTranslation(n,e)},e}(o.PluginBaseService),a=t("Zr0N"),s=t("z1lQ"),c=function(){function n(n,e){this.storage=n,this.platform=e,this.test()}return n.prototype.test=function(){return l.__awaiter(this,void 0,void 0,function(){var n,e;return l.__generator(this,function(t){switch(t.label){case 0:return[4,this.getHosts()];case 1:return n=t.sent(),u("Hosts"),u(n),[4,this.getCurrentHost()];case 2:return e=t.sent(),u("current host"),u(e),[2]}})})},n.prototype.getHosts=function(){var n=this;return this.platform.ready().then(function(){return n.storage.get("kodi_hosts").then(function(n){return n||[]})})},n.prototype.getCurrentHost=function(){var n=this;return this.platform.ready().then(function(){return n.storage.get("kodi_current_host").then(function(n){return!n||n.name&&""!==n.name||(n.name="Kodi Host "+n.host),n})})},n.prototype.setCurrentHost=function(n){return this.storage.set("kodi_current_host",n)},n}(),d=function(n){function e(e,t){var l=n.call(this)||this;return l.alertController=e,l.kodi=t,l}return l.__extends(e,n),e.prototype.ngOnInit=function(){return l.__awaiter(this,void 0,void 0,function(){var n,e;return l.__generator(this,function(t){switch(t.label){case 0:return n=this,[4,this.kodi.getHosts()];case 1:return n.hosts=t.sent(),[4,this.kodi.getCurrentHost()];case 2:return e=t.sent(),this.host=this.hosts.find(function(n){return n.host===e.host}),[2]}})})},e.prototype.onChange=function(){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(n){switch(n.label){case 0:return[4,this.kodi.setCurrentHost(this.host)];case 1:return n.sent(),[2]}})})},e.prototype.setMovie=function(){},e}(o.MovieDetailBaseComponent),f=t("vOrQ"),g=function(){function n(n){this.translate=n}return n.prototype.ngOnInit=function(){u("Current lang",this.translate.currentLang),u("Test instant translate",this.translate.instant("settings.title"))},n}(),p=function(n){function e(e){var t=n.call(this)||this;return t.kodi=e,t}return l.__extends(e,n),e.prototype.ngOnInit=function(){return l.__awaiter(this,void 0,void 0,function(){var n,e;return l.__generator(this,function(t){switch(t.label){case 0:return n=this,[4,this.kodi.getHosts()];case 1:return n.hosts=t.sent(),[4,this.kodi.getCurrentHost()];case 2:return e=t.sent(),this.host=this.hosts.find(function(n){return n.host===e.host}),[2]}})})},e.prototype.onChange=function(){return l.__awaiter(this,void 0,void 0,function(){return l.__generator(this,function(n){switch(n.label){case 0:return[4,this.kodi.setCurrentHost(this.host)];case 1:return n.sent(),[2]}})})},e.prototype.setShowEpisode=function(n,e){},e}(o.EpisodeDetailBaseComponent),m=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=function(n){function e(){return null!==n&&n.apply(this,arguments)||this}return l.__extends(e,n),e.pluginService=i,e.movieComponent=d,e.episodeComponent=p,e}(o.PluginBaseModule),v=t("0S4P");t("JAnZ");var C=f["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(n){return f["\u0275vid"](2,[f["\u0275ncd"](null,0)],null,null)}var y=f["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return f["\u0275vid"](2,[f["\u0275ncd"](null,0)],null,null)}var T=f["\u0275crt"]({encapsulation:2,styles:[],data:{}});function b(n){return f["\u0275vid"](2,[f["\u0275ncd"](null,0)],null,null)}var M=f["\u0275crt"]({encapsulation:2,styles:[],data:{}});function R(n){return f["\u0275vid"](2,[f["\u0275ncd"](null,0)],null,null)}var E=t("3xDq"),N=f["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,R,M)),f["\u0275did"](1,49152,null,0,s.IonSelectOption,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],{value:[0,"value"]},null),(n()(),f["\u0275ted"](2,0,[" "," "]))],function(n,e){n(e,1,0,e.context.$implicit)},function(n,e){n(e,2,0,e.context.$implicit.name)})}function O(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,13,"ion-item",[],null,null,null,_,C)),f["\u0275did"](1,49152,null,0,s.IonItem,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],null,null),(n()(),f["\u0275eld"](2,0,null,0,2,"ion-label",[],null,null,null,S,y)),f["\u0275did"](3,49152,null,0,s.IonLabel,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],null,null),(n()(),f["\u0275ted"](-1,0,["Kodi Host"])),(n()(),f["\u0275eld"](5,0,null,0,8,"ion-select",[["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var l=!0,o=n.component;return"ionBlur"===e&&(l=!1!==f["\u0275nov"](n,6)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==f["\u0275nov"](n,6)._handleChangeEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(o.host=t)&&l),"ionChange"===e&&(l=!1!==o.onChange()&&l),l},b,T)),f["\u0275did"](6,16384,null,0,s.SelectValueAccessor,[f.ElementRef],null,null),f["\u0275prd"](1024,null,E.NG_VALUE_ACCESSOR,function(n){return[n]},[s.SelectValueAccessor]),f["\u0275did"](8,671744,null,0,E.NgModel,[[8,null],[8,null],[8,null],[6,E.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),f["\u0275prd"](2048,null,E.NgControl,null,[E.NgModel]),f["\u0275did"](10,16384,null,0,E.NgControlStatus,[[4,E.NgControl]],null,null),f["\u0275did"](11,49152,null,0,s.IonSelect,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],{interface:[0,"interface"]},null),(n()(),f["\u0275and"](16777216,null,0,1,null,w)),f["\u0275did"](13,278528,null,0,v.NgForOf,[f.ViewContainerRef,f.TemplateRef,f.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,8,0,t.host),n(e,11,0,"action-sheet"),n(e,13,0,t.hosts)},function(n,e){n(e,5,0,f["\u0275nov"](e,10).ngClassUntouched,f["\u0275nov"](e,10).ngClassTouched,f["\u0275nov"](e,10).ngClassPristine,f["\u0275nov"](e,10).ngClassDirty,f["\u0275nov"](e,10).ngClassValid,f["\u0275nov"](e,10).ngClassInvalid,f["\u0275nov"](e,10).ngClassPending)})}function x(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,O,N)),f["\u0275did"](1,114688,null,0,d,[s.AlertController,c],null,null)],function(n,e){n(e,1,0)},null)}var I=f["\u0275ccf"]("ng-component",d,x,{},{},[]),D=f["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function A(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,2,"ion-select-option",[],null,null,null,R,M)),f["\u0275did"](1,49152,null,0,s.IonSelectOption,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],{value:[0,"value"]},null),(n()(),f["\u0275ted"](2,0,[" "," "]))],function(n,e){n(e,1,0,e.context.$implicit)},function(n,e){n(e,2,0,e.context.$implicit.name)})}function k(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,13,"ion-item",[],null,null,null,_,C)),f["\u0275did"](1,49152,null,0,s.IonItem,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],null,null),(n()(),f["\u0275eld"](2,0,null,0,2,"ion-label",[],null,null,null,S,y)),f["\u0275did"](3,49152,null,0,s.IonLabel,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],null,null),(n()(),f["\u0275ted"](-1,0,["Kodi Host"])),(n()(),f["\u0275eld"](5,0,null,0,8,"ion-select",[["interface","action-sheet"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,e,t){var l=!0,o=n.component;return"ionBlur"===e&&(l=!1!==f["\u0275nov"](n,6)._handleBlurEvent()&&l),"ionChange"===e&&(l=!1!==f["\u0275nov"](n,6)._handleChangeEvent(t.target.value)&&l),"ngModelChange"===e&&(l=!1!==(o.host=t)&&l),"ionChange"===e&&(l=!1!==o.onChange()&&l),l},b,T)),f["\u0275did"](6,16384,null,0,s.SelectValueAccessor,[f.ElementRef],null,null),f["\u0275prd"](1024,null,E.NG_VALUE_ACCESSOR,function(n){return[n]},[s.SelectValueAccessor]),f["\u0275did"](8,671744,null,0,E.NgModel,[[8,null],[8,null],[8,null],[6,E.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),f["\u0275prd"](2048,null,E.NgControl,null,[E.NgModel]),f["\u0275did"](10,16384,null,0,E.NgControlStatus,[[4,E.NgControl]],null,null),f["\u0275did"](11,49152,null,0,s.IonSelect,[f.ChangeDetectorRef,f.ElementRef,f.NgZone],{interface:[0,"interface"]},null),(n()(),f["\u0275and"](16777216,null,0,1,null,A)),f["\u0275did"](13,278528,null,0,v.NgForOf,[f.ViewContainerRef,f.TemplateRef,f.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,e){var t=e.component;n(e,8,0,t.host),n(e,11,0,"action-sheet"),n(e,13,0,t.hosts)},function(n,e){n(e,5,0,f["\u0275nov"](e,10).ngClassUntouched,f["\u0275nov"](e,10).ngClassTouched,f["\u0275nov"](e,10).ngClassPristine,f["\u0275nov"](e,10).ngClassDirty,f["\u0275nov"](e,10).ngClassValid,f["\u0275nov"](e,10).ngClassInvalid,f["\u0275nov"](e,10).ngClassPending)})}function P(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,k,D)),f["\u0275did"](1,114688,null,0,p,[c],null,null)],function(n,e){n(e,1,0)},null)}var F=f["\u0275ccf"]("ng-component",p,P,{},{},[]),j=f["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function L(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,2,"p",[],null,null,null,null,null)),(n()(),f["\u0275ted"](1,null,[" ","\n"])),f["\u0275pid"](131072,r.TranslatePipe,[r.TranslateService,f.ChangeDetectorRef]),(n()(),f["\u0275eld"](3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),f["\u0275ted"](-1,null,["My plugin"]))],null,function(n,e){n(e,1,0,f["\u0275unv"](e,1,0,f["\u0275nov"](e,2).transform("settings.title")))})}function q(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,L,j)),f["\u0275did"](1,114688,null,0,g,[r.TranslateService],null,null)],function(n,e){n(e,1,0)},null)}var H=f["\u0275ccf"]("ng-component",g,q,{},{},[]),U=f["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function Z(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),f["\u0275ted"](-1,null,[" This is the plugin detail\n"]))],null,null)}function V(n){return f["\u0275vid"](0,[(n()(),f["\u0275eld"](0,0,null,null,1,"app-plugin-detail",[],null,null,null,Z,U)),f["\u0275did"](1,114688,null,0,m,[],null,null)],function(n,e){n(e,1,0)},null)}var B=f["\u0275ccf"]("app-plugin-detail",m,V,{},{},[]),G=t("GoKE"),z=t("FsH7"),Q=f["\u0275cmf"](h,[],function(n){return f["\u0275mod"]([f["\u0275mpd"](512,f.ComponentFactoryResolver,f["\u0275CodegenComponentFactoryResolver"],[[8,[I,F,H,B]],[3,f.ComponentFactoryResolver],f.NgModuleRef]),f["\u0275mpd"](4608,v.NgLocalization,v.NgLocaleLocalization,[f.LOCALE_ID,[2,v["\u0275angular_packages_common_common_a"]]]),f["\u0275mpd"](4608,E["\u0275angular_packages_forms_forms_j"],E["\u0275angular_packages_forms_forms_j"],[]),f["\u0275mpd"](4608,s.AngularDelegate,s.AngularDelegate,[f.NgZone,f.ApplicationRef]),f["\u0275mpd"](4608,s.ModalController,s.ModalController,[s.AngularDelegate,f.ComponentFactoryResolver,f.Injector]),f["\u0275mpd"](4608,s.PopoverController,s.PopoverController,[s.AngularDelegate,f.ComponentFactoryResolver,f.Injector]),f["\u0275mpd"](5120,f.APP_INITIALIZER,function(n,e,t){return[s["\u0275e"](n,e,t)]},[s["\u0275a"],v.DOCUMENT,f.NgZone]),f["\u0275mpd"](4608,r.TranslateLoader,r.TranslateFakeLoader,[]),f["\u0275mpd"](4608,r.TranslateCompiler,r.TranslateFakeCompiler,[]),f["\u0275mpd"](4608,r.TranslateParser,r.TranslateDefaultParser,[]),f["\u0275mpd"](4608,r.MissingTranslationHandler,r.FakeMissingTranslationHandler,[]),f["\u0275mpd"](4608,r.TranslateStore,r.TranslateStore,[]),f["\u0275mpd"](4608,r.TranslateService,r.TranslateService,[r.TranslateStore,r.TranslateLoader,r.TranslateCompiler,r.TranslateParser,r.MissingTranslationHandler,r.USE_DEFAULT_LANG,r.USE_STORE]),f["\u0275mpd"](4608,i,i,[r.TranslateService]),f["\u0275mpd"](4608,c,c,[a.Storage,s.Platform]),f["\u0275mpd"](4608,G.BrowserService,G.BrowserService,[s.Platform]),f["\u0275mpd"](4608,z.ToastService,z.ToastService,[s.ToastController,r.TranslateService]),f["\u0275mpd"](1073742336,v.CommonModule,v.CommonModule,[]),f["\u0275mpd"](1073742336,E["\u0275angular_packages_forms_forms_bc"],E["\u0275angular_packages_forms_forms_bc"],[]),f["\u0275mpd"](1073742336,E.FormsModule,E.FormsModule,[]),f["\u0275mpd"](1073742336,s.IonicModule,s.IonicModule,[]),f["\u0275mpd"](1073742336,r.TranslateModule,r.TranslateModule,[]),f["\u0275mpd"](1073742336,h,h,[]),f["\u0275mpd"](256,s["\u0275a"],void 0,[]),f["\u0275mpd"](256,r.USE_STORE,void 0,[]),f["\u0275mpd"](256,r.USE_DEFAULT_LANG,void 0,[])])});t.d(e,"PluginModule",function(){return h}),t.d(e,"PluginModuleNgFactory",function(){return Q}),e.default=Q}})});