!function(E){function e(e){for(var r,o,u=e[0],S=e[1],T=e[2],s=0,c=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(r in S)Object.prototype.hasOwnProperty.call(S,r)&&(E[r]=S[r]);for(a&&a(e);c.length;)c.shift()();return _.push.apply(_,T||[]),t()}function t(){for(var E,e=0;e<_.length;e++){for(var t=_[e],r=!0,u=1;u<t.length;u++){var S=t[u];0!==n[S]&&(r=!1)}r&&(_.splice(e--,1),E=o(o.s=t[0]))}return E}var r={},n={42:0},_=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return E[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(E){var e=[],t=n[E];if(0!==t)if(t)e.push(t[2]);else{var r=new Promise((function(e,r){t=n[E]=[e,r]}));e.push(t[2]=r);var _,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(E){return o.p+"js/"+({28:"babel-worker"}[E]||E)+"-"+{28:"02117a3452eb7cc29a7c"}[E]+".chunk.js"}(E);var S=new Error;_=function(e){u.onerror=u.onload=null,clearTimeout(T);var t=n[E];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),_=e&&e.target&&e.target.src;S.message="Loading chunk "+E+" failed.\n("+r+": "+_+")",S.name="ChunkLoadError",S.type=r,S.request=_,t[1](S)}n[E]=void 0}};var T=setTimeout((function(){_({type:"timeout",target:u})}),12e4);u.onerror=u.onload=_,document.head.appendChild(u)}return Promise.all(e)},o.m=E,o.c=r,o.d=function(E,e,t){o.o(E,e)||Object.defineProperty(E,e,{enumerable:!0,get:t})},o.r=function(E){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},o.t=function(E,e){if(1&e&&(E=o(E)),8&e)return E;if(4&e&&"object"==typeof E&&E&&E.__esModule)return E;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:E}),2&e&&"string"!=typeof E)for(var r in E)o.d(t,r,function(e){return E[e]}.bind(null,r));return t},o.n=function(E){var e=E&&E.__esModule?function(){return E.default}:function(){return E};return o.d(e,"a",e),e},o.o=function(E,e){return Object.prototype.hasOwnProperty.call(E,e)},o.p="https://cpwebassets.codepen.io/assets/packs/",o.oe=function(E){throw console.error(E),E};var u=(self||this).webpackJsonp=(self||this).webpackJsonp||[],S=u.push.bind(u);u.push=e,u=u.slice();for(var T=0;T<u.length;T++)e(u[T]);var a=S;_.push([578,1]),t()}({51:function(E,e,t){"use strict";t.d(e,"c",(function(){return O})),t.d(e,"f",(function(){return I})),t.d(e,"a",(function(){return D})),t.d(e,"g",(function(){return C})),t.d(e,"e",(function(){return P})),t.d(e,"b",(function(){return l})),t.d(e,"d",(function(){return d}));var r=t(24),n=t.n(r),_=t(30),o=t.n(_),u=t(82),S=t.n(u),T=t(263),a=t.n(T),s=t(9),c=function(){},i=function(){return document.querySelector('meta[name="csrf-token"]').getAttribute("content")},A=function(E,e){return E.set("X-CSRF-Token",i()).set("X-Requested-With","XMLHttpRequest").accept("*/*").send(e)},O=function(E,e){var t=e.dispatch,r=e.getState,n=e.method,_=e.url,o=R(e,E),u=r().requests,T="".concat(n,"_").concat(_);return!u[T]&&(t(function(E){return{type:s.a.SEND_REQUEST,payload:{requestKey:E}}}(T)),function(E){var e=E.method,t=E.url,r=E.params,n=S.a[e](t);return"get"===e?n.query(r):A(n,r)}(e).timeout(12e5).end((function(E,r){t(function(E){return{type:s.a.RECEIVE_REQUEST,payload:{requestKey:E}}}(T)),L(o,e,E,r)})))},L=function(E,e,t,r){var n=E.onError,_=E.onServerError,o=E.onFail,u=E.onTimeout,S=E.onSuccess,T=e.custom404Handler;return t?t.timeout?u():t.status?404===t.status&&T?T():_(t.response):n(t):200===r.status?S(r.body):o(r)},R=function(E,e){return{onError:E.customFailHandler||e.error(E.dispatch,E),onServerError:E.customFailHandler||e.serverError(E.dispatch,E),onFail:E.customFailHandler||e.fail(E.dispatch,E),onTimeout:E.customFailHandler||e.timeout(E.dispatch,E),onSuccess:E.onSuccess||c}},I=function(E,e,t){return A(S.a.post(E),e).end((function(E,e){t(E,e)}))},D=function(E,e){return new Promise((function(t){var r=new XMLHttpRequest;r.open("POST",E,!0),r.timeout=3e4,r.setRequestHeader("Content-Type","text/plain; charset=utf-8"),r.onload=function(){var E={};try{E=JSON.parse(r.responseText)}catch(E){}r.status>=200&&r.status<400?t({error:null,data:E}):t({error:{message:"Server Error",request:r},data:E})};var n=JSON.stringify(e);r.send(n)}))},C=function(E){var e=E.params,t=E.url;return S.a.post(t).set("X-CSRF-Token",i()).set("X-Requested-With","XMLHttpRequest").accept("*/*").send(e)},p="verification",P=function(){var E=o()(n.a.mark((function E(){var e,t,r;return n.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return e={"X-CSRF-Token":i(),"X-Requested-With":"XMLHttpRequest"},E.next=3,fetch("/renew_jwt",{credentials:"same-origin",headers:e,method:"POST",mode:"same-origin",redirect:"follow",referrerPolicy:"same-origin"});case 3:return t=E.sent,E.next=6,t.json();case 6:if(!(r=E.sent).success){E.next=10;break}return window.__jwt=r.payload.jwt,E.abrupt("return",window.__jwt);case 10:alert("You're session expired. Login to continue with your session");case 11:case"end":return E.stop()}}),E)})));return function(){return E.apply(this,arguments)}}(),f=function(){var E=o()(n.a.mark((function E(e,t){var r,_,o,u,S,T,a=arguments;return n.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return r=!(a.length>2&&void 0!==a[2])||a[2],E.next=3,N(e,t);case 3:if(_=E.sent,o=_.response,u=_.result,S=(null==u?void 0:u.errors[0])||"",T=o.status,!r||401!==T||S!==p){E.next=12;break}return E.next=11,P();case 11:return E.abrupt("return",f(e,t,!1));case 12:return E.abrupt("return",u);case 13:case"end":return E.stop()}}),E)})));return function(e,t){return E.apply(this,arguments)}}();function N(E,e){return U.apply(this,arguments)}function U(){return(U=o()(n.a.mark((function E(e,t){var r,_;return n.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,fetch(e,{method:"POST",credentials:"omit",headers:{Authorization:"Bearer ".concat(window.__jwt),"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return r=E.sent,E.next=5,r.json();case 5:return _=E.sent,E.abrupt("return",{response:r,result:_});case 7:case"end":return E.stop()}}),E)})))).apply(this,arguments)}window.postWithJWTAuth=f;var l=function(E){S.a.get(E.url).use(a()({timeout:1e4})).end((function(e,t){E.onSuccess(t)}))},d=function(E,e,t){var r=new FormData;Object.keys(e).forEach((function(E){r.append(E,e[E])})),S.a.post(E).send(r).end((function(E,e){t(E,e)}))}},578:function(E,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"postMessage",(function(){return R})),t.d(r,"run",(function(){return I}));var n={};t.r(n),t.d(n,"run",(function(){return C}));var _={};t.r(_),t.d(_,"run",(function(){return F}));var o,u=t(107),S=t.n(u),T=t(265),a=t.n(T),s=t(24),c=t.n(s),i=t(30),A=t.n(i),O=t(3),L=t.n(O),R=function(E){return new Promise((function(e){o.onmessage=function(E){e(E.data)},o.postMessage(E)}))},I=function(E){return new Promise((function(E){return o?E():t.e(28).then(t.t.bind(null,1307,7)).then((function(e){var t=e.default;o=t(),E()}))})).then((function(){return R(E.js)}))},D=t(51);function C(E){return p.apply(this,arguments)}function p(){return(p=A()(c.a.mark((function E(e){var t,r,n,_,o;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=e.js,E.next=3,N(t.textInput);case 3:return r=E.sent,n=r.error,_=r.result,o=r.modulesBaseUrl,E.abrupt("return",{success:!0,payload:{js:{contentType:"js",errors:l(n),id:"js",show:!1,logs:[],metadata:{modulesBaseUrl:o},textOutput:_}},errors:[]});case 6:case"end":return E.stop()}}),E)})))).apply(this,arguments)}var P=["https://dart-services.appspot.com/api/dartservices/v1/compileDDC?alt=json","https://dart-services-0.appspot.com/api/dartservices/v1/compileDDC?alt=json"];function f(){var E=Math.floor(Math.random()*Math.floor(P.length));return P[E]}function N(E){return U.apply(this,arguments)}function U(){return(U=A()(c.a.mark((function E(e){var t,r;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Object(D.a)(f(),{source:e});case 2:return t=E.sent,r=t.data,E.abrupt("return",r);case 5:case"end":return E.stop()}}),E)})))).apply(this,arguments)}function l(E){return E?[{code:"PROCESSING",info:{},level:"ERROR",line:1,message:E.message,syntax:"none",type:"js"}]:[]}var d=function(E){var e=a()(JSON.stringify(E)),t=window.__preprocessors_url;return"".concat(t,"/process/").concat(e)},F=function(){var E=A()(c.a.mark((function E(e){var t,r,n;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=d(e),E.next=3,Object(D.a)(t,e);case 3:return r=E.sent,n=r.data,E.abrupt("return",n);case 6:case"end":return E.stop()}}),E)})));return function(e){return E.apply(this,arguments)}}(),h="babel",v="flutter",G="none",y="js",m="babel",b="flutter",M="preprocessors-service";function w(E,e){var t=Object.keys(E);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(E);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(E,e).enumerable}))),t.push.apply(t,r)}return t}function V(E){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){L()(E,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(E,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(E,e,Object.getOwnPropertyDescriptor(t,e))}))}return E}var g=function(E){return Object.keys(E).reduce((function(e,t){var r=function(E){if(E.contentType!==y)return M;switch(E.syntax){case h:case G:return m;case v:return b;default:return M}}(E[t]);return e[r]||(e[r]={}),e[r][t]=E[t],e}),{})},j=function(E){var e=g(E);return Object.keys(e).map((function(E){return function(E){return E===m?r:E===b?n:_}(E).run(e[E])}))},J=function(E){return E.reduce((function(E,e){return E.payload=V(V({},E.payload),e.payload),e.success||(E.success=!1,E.errors=e.errors),E}),{errors:null,payload:{},success:!0})},x=function(){var E=A()(c.a.mark((function E(e){var t,r;return c.a.wrap((function(E){for(;;)switch(E.prev=E.next){case 0:return t=j(e),E.next=3,Promise.all(t);case 3:return r=E.sent,E.abrupt("return",J(r));case 5:case"end":return E.stop()}}),E)})));return function(e){return E.apply(this,arguments)}}();window.ProcessorRouter={hashObject:function(E){var e="object"===S()(E)?E:{},t=JSON.stringify(e);return{key:a()(t),value:t}},route:x}},9:function(E,e,t){"use strict";e.a={ADD_NEW_FILE:"ADD_NEW_FILE",ADD_NEW_FILES_AND_FOLDERS:"ADD_NEW_FILES_AND_FOLDERS",DUPLICATE_FILE:"DUPLICATE_FILE",UPDATE_NEWEST_FILE:"UPDATE_NEWEST_FILE",UPDATE_FILE_NAME:"UPDATE_FILE_NAME",UPDATE_FILE_CONTENT:"UPDATE_FILE_CONTENT",RESET_FILE_CONTENT:"RESET_FILE_CONTENT",UPDATE_FILE_ERRORS:"UPDATE_FILE_ERRORS",FLUSH_FILES_CONTENT:"FLUSH_FILES_CONTENT",ADD_FILE_ERROR:"ADD_FILE_ERROR",BABEL_ENTRY_FILE_ERROR:"BABEL_ENTRY_FILE_ERROR",CLEAR_FILE_ERRORS:"CLEAR_FILE_ERRORS",SET_FILE_CONTENT_TO_LOADING:"SET_FILE_CONTENT_TO_LOADING",SET_FILE_CONTENT_LOAD_ERROR:"SET_FILE_CONTENT_LOAD_ERROR",UPDATE_DRAGGED_FILE_LOCATION:"UPDATE_DRAGGED_FILE_LOCATION",RECEIVE_FILES_SAVE_SUCCESS:"RECEIVE_FILES_SAVE_SUCCESS",RELOAD_OPEN_PROCESSED_FILES:"RELOAD_OPEN_PROCESSED_FILES",DELETE_FILE:"DELETE_FILE",DELETE_FILES:"DELETE_FILES",CREATE_NEW_FILE:"CREATE_NEW_FILE",UPDATE_NEW_FILE_NAME:"UPDATE_NEW_FILE_NAME",CANCEL_NEW_FILE_NAME:"CANCEL_NEW_FILE_NAME",FINISHED_CREATING_NEW_FILE:"FINISHED_CREATING_NEW_FILE",ADD_OPEN_FILE:"ADD_OPEN_FILE",SET_OPEN_FILES:"SET_OPEN_FILES",UPDATE_FILE_DRAGGING_STATE:"UPDATE_FILE_DRAGGING_STATE",UPDATE_FILE_DRAGGING_OVER_STATE:"UPDATE_FILE_DRAGGING_OVER_STATE",MANUAL_FILE_UPLOAD:"MANUAL_FILE_UPLOAD",TOGGLE_FOLDER_OPEN_STATE:"TOGGLE_FOLDER_OPEN_STATE",SET_EDITING:"SET_EDITING",SET_EDITING_WITH_FILE_NAME:"SET_EDITING_WITH_FILE_NAME",SET_RENAMING_FILE:"SET_RENAMING_FILE",SET_SIDEBAR_SELECTED:"SET_SIDEBAR_SELECTED",REFRESH_PROCESSED_FILES_CONTENT:"REFRESH_PROCESSED_FILES_CONTENT",SET_PROJECT_TITLE_EDITING_STATE:"SET_PROJECT_TITLE_EDITING_STATE",SET_LAYOUT_STATE:"SET_LAYOUT_STATE",SET_RENDERING_FILE:"SET_RENDERING_FILE",TRIGGER_RENDER:"TRIGGER_RENDER",SET_CANCELLED_RENDER:"SET_CANCELLED_RENDER",ADD_PROCESSING_LOG:"ADD_PROCESSING_LOG",SET_LOG_CONSOLE_OPEN_STATE:"SET_LOG_CONSOLE_OPEN_STATE",CLEAR_LOG_CONSOLE:"CLEAR_LOG_CONSOLE",UPDATE_PROCESSING_QUEUE:"UPDATE_PROCESSING_QUEUE",UPDATE_PROCESSING_SAVE_STATUS:"UPDATE_PROCESSING_SAVE_STATUS",CLEAR_ALL_PROCESSING_INDICATORS:"CLEAR_ALL_PROCESSING_INDICATORS",TOGGLE_DIALOG:"TOGGLE_DIALOG",CLOSE_THIS_DIALOG:"CLOSE_THIS_DIALOG",CLOSE_ALL_POPUPS:"CLOSE_ALL_POPUPS",SET_PROJECT_DELETE_DIALOG_INPUT:"SET_PROJECT_DELETE_DIALOG_INPUT",OPEN_MODAL:"OPEN_MODAL",CLOSE_ALL_MODALS:"CLOSE_ALL_MODALS",ADD_MESSAGE:"ADD_MESSAGE",CLEAR_MESSAGES:"CLEAR_MESSAGES",RECIEVE_PROJECT_UI_STATE_SAVE_SUCCESS:"RECIEVE_PROJECT_UI_STATE_SAVE_SUCCESS",DEPLOYMENT_IN_PROGRESS:"DEPLOYMENT_IN_PROGRESS",FAILED_TO_DEPLOY:"FAILED_TO_DEPLOY",UPDATE_CNAME_STATUS:"UPDATE_CNAME_STATUS",OPEN_CONTEXT_MENU:"OPEN_CONTEXT_MENU",CLOSE_CONTEXT_MENU:"CLOSE_CONTEXT_MENU",UPDATE_EXPORT_STATUS:"UPDATE_EXPORT_STATUS",RECEIVE_PROJECT_SAVE_SUCCESS:"RECEIVE_PROJECT_SAVE_SUCCESS",RECEIVE_PROJECT_SAVE_FAILURE:"RECEIVE_PROJECT_SAVE_FAILURE",RECEIVE_UPLOADS_SAVE_SUCCESS:"RECEIVE_UPLOADS_SAVE_SUCCESS",ROLLBACK_STATE:"ROLLBACK_STATE",ROLLBACK_UPLOAD_STATE:"ROLLBACK_UPLOAD_STATE",RECEIVE_PROJECT_DELETE_FAILURE:"RECEIVE_PROJECT_DELETE_FAILURE",RECIEVE_SMS_SUCCESS:"RECIEVE_SMS_SUCCESS",RECIEVE_SMS_FAILURE:"RECIEVE_SMS_FAILURE",UPDATE_PROJECT:"UPDATE_PROJECT",UPDATE_PROJECT_EDITOR_SETTINGS:"UPDATE_PROJECT_EDITOR_SETTINGS",UPDATE_PROJECT_USER:"UPDATE_PROJECT_USER",UPDATE_PROCESSED_PROJECT:"UPDATE_PROCESSED_PROJECT",UPDATE_USER_TEAM:"UPDATE_USER_TEAM",UPDATE_READONLY:"UPDATE_READONLY",UPDATE_OTHER_EDITORS_OPEN:"UPDATE_OTHER_EDITORS_OPEN",RECIEVE_UPDATE_USER_TEAM_FAILURE:"RECIEVE_UPDATE_USER_TEAM_FAILURE",RECEIVE_BOILERPLATES_SUCCESS:"RECEIVE_BOILERPLATES_SUCCESS",RECEIVE_BOILERPLATES_FAILURE:"RECEIVE_BOILERPLATES_FAILURE",RECEIVE_CLONE_SUCCESS:"RECEIVE_CLONE_SUCCESS",RECEIVE_CLONE_FAILURE:"RECEIVE_CLONE_FAILURE",ADD_TO_SAVES:"ADD_TO_SAVES",REMOVE_FROM_SAVES:"REMOVE_FROM_SAVES",UPDATE_PROJECT_UPLOADS_QUEUE:"UPDATE_PROJECT_UPLOADS_QUEUE",UPDATE_PROJECT_DEPLOY_STATUS:"UPDATE_PROJECT_DEPLOY_STATUS",UPDATE_SCREENSHOT_STATUS:"UPDATE_SCREENSHOT_STATUS",UPDATE_PROJECT_UPLOADS_STATE:"UPDATE_PROJECT_UPLOADS_STATE",UPLOADS_PROCESS_COMPLETE:"UPLOADS_PROCESS_COMPLETE",RECEIVE_GLOBAL_ASSET_DELETE_FAILURE:"RECEIVE_GLOBAL_ASSET_DELETE_FAILURE",REMOVE_GLOBAL_ASSET_DATA_FROM_LIST:"REMOVE_GLOBAL_ASSET_DATA_FROM_LIST",UPDATE_FILE_SEARCH:"UPDATE_FILE_SEARCH",SET_FILE_SEARCH:"SET_FILE_SEARCH",UPDATE_FILES_ACTIVE_FILE:"UPDATE_FILES_ACTIVE_FILE",SET_SPINNING_STATE:"SET_SPINNING_STATE",SEND_REQUEST:"SEND_REQUEST",RECEIVE_REQUEST:"RECEIVE_REQUEST",USER_HAS_LOGGED_OUT:"USER_HAS_LOGGED_OUT"}}});