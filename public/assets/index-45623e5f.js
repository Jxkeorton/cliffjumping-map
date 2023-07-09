(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ok={exports:{}},sh={},Pk={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),ZC=Symbol.for("react.portal"),ex=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),nx=Symbol.for("react.profiler"),rx=Symbol.for("react.provider"),ix=Symbol.for("react.context"),sx=Symbol.for("react.forward_ref"),ox=Symbol.for("react.suspense"),ax=Symbol.for("react.memo"),lx=Symbol.for("react.lazy"),Fy=Symbol.iterator;function ux(t){return t===null||typeof t!="object"?null:(t=Fy&&t[Fy]||t["@@iterator"],typeof t=="function"?t:null)}var Dk={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lk=Object.assign,Mk={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Mk,this.updater=n||Dk}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $k(){}$k.prototype=ao.prototype;function qm(t,e,n){this.props=t,this.context=e,this.refs=Mk,this.updater=n||Dk}var Gm=qm.prototype=new $k;Gm.constructor=qm;Lk(Gm,ao.prototype);Gm.isPureReactComponent=!0;var Uy=Array.isArray,jk=Object.prototype.hasOwnProperty,Qm={current:null},Fk={key:!0,ref:!0,__self:!0,__source:!0};function Uk(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jk.call(e,r)&&!Fk.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ul,type:t,key:s,ref:o,props:i,_owner:Qm.current}}function cx(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function hx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zy=/\/+/g;function wf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hx(""+t.key):e.toString(36)}function Nu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case ZC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wf(o,0):r,Uy(i)?(n="",t!=null&&(n=t.replace(zy,"$&/")+"/"),Nu(i,e,n,"",function(u){return u})):i!=null&&(Ym(i)&&(i=cx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(zy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wf(s,a);o+=Nu(s,e,n,l,i)}else if(l=ux(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wf(s,a++),o+=Nu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ul(t,e,n){if(t==null)return t;var r=[],i=0;return Nu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function fx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},Ru={transition:null},dx={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:Ru,ReactCurrentOwner:Qm};X.Children={map:Ul,forEach:function(t,e,n){Ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ul(t,function(){e++}),e},toArray:function(t){return Ul(t,function(e){return e})||[]},only:function(t){if(!Ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=ao;X.Fragment=ex;X.Profiler=nx;X.PureComponent=qm;X.StrictMode=tx;X.Suspense=ox;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lk({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jk.call(e,l)&&!Fk.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ul,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:ix,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rx,_context:t},t.Consumer=t};X.createElement=Uk;X.createFactory=function(t){var e=Uk.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:sx,render:t}};X.isValidElement=Ym;X.lazy=function(t){return{$$typeof:lx,_payload:{_status:-1,_result:t},_init:fx}};X.memo=function(t,e){return{$$typeof:ax,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Ru.transition;Ru.transition={};try{t()}finally{Ru.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return vt.current.useCallback(t,e)};X.useContext=function(t){return vt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};X.useEffect=function(t,e){return vt.current.useEffect(t,e)};X.useId=function(){return vt.current.useId()};X.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return vt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};X.useRef=function(t){return vt.current.useRef(t)};X.useState=function(t){return vt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return vt.current.useTransition()};X.version="18.2.0";Pk.exports=X;var S=Pk.exports;const G=oo(S);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px=S,mx=Symbol.for("react.element"),gx=Symbol.for("react.fragment"),vx=Object.prototype.hasOwnProperty,yx=px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wx={key:!0,ref:!0,__self:!0,__source:!0};function zk(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vx.call(e,r)&&!wx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mx,type:t,key:s,ref:o,props:i,_owner:yx.current}}sh.Fragment=gx;sh.jsx=zk;sh.jsxs=zk;Ok.exports=sh;var k=Ok.exports;const oh="https://raw.githubusercontent.com/Jxkeorton/APIs/main/cliffjump.json",Bk="AIzaSyA5YDarjMw4UAUSVCIrBX1PJwP14l9nqSg";var Bd={},Vk={exports:{}},Mt={},Hk={exports:{}},Wk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var Q=O.length;O.push(V);e:for(;0<Q;){var Ie=Q-1>>>1,Me=O[Ie];if(0<i(Me,V))O[Ie]=V,O[Q]=Me,Q=Ie;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var V=O[0],Q=O.pop();if(Q!==V){O[0]=Q;e:for(var Ie=0,Me=O.length,jl=Me>>>1;Ie<jl;){var ti=2*(Ie+1)-1,yf=O[ti],ni=ti+1,Fl=O[ni];if(0>i(yf,Q))ni<Me&&0>i(Fl,yf)?(O[Ie]=Fl,O[ni]=Q,Ie=ni):(O[Ie]=yf,O[ti]=Q,Ie=ti);else if(ni<Me&&0>i(Fl,Q))O[Ie]=Fl,O[ni]=Q,Ie=ni;else break e}}return V}function i(O,V){var Q=O.sortIndex-V.sortIndex;return Q!==0?Q:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,d=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=O)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function _(O){if(y=!1,g(O),!v)if(n(l)!==null)v=!0,Ve(E);else{var V=n(u);V!==null&&Ct(_,V.startTime-O)}}function E(O,V){v=!1,y&&(y=!1,m(I),I=-1),d=!0;var Q=f;try{for(g(V),h=n(l);h!==null&&(!(h.expirationTime>V)||O&&!ie());){var Ie=h.callback;if(typeof Ie=="function"){h.callback=null,f=h.priorityLevel;var Me=Ie(h.expirationTime<=V);V=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&r(l),g(V)}else r(l);h=n(l)}if(h!==null)var jl=!0;else{var ti=n(u);ti!==null&&Ct(_,ti.startTime-V),jl=!1}return jl}finally{h=null,f=Q,d=!1}}var b=!1,C=null,I=-1,M=5,$=-1;function ie(){return!(t.unstable_now()-$<M)}function de(){if(C!==null){var O=t.unstable_now();$=O;var V=!0;try{V=C(!0,O)}finally{V?ft():(b=!1,C=null)}}else b=!1}var ft;if(typeof p=="function")ft=function(){p(de)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,An=Ye.port2;Ye.port1.onmessage=de,ft=function(){An.postMessage(null)}}else ft=function(){w(de,0)};function Ve(O){C=O,b||(b=!0,ft())}function Ct(O,V){I=w(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||d||(v=!0,Ve(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var Q=f;f=V;try{return O()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=f;f=O;try{return V()}finally{f=Q}},t.unstable_scheduleCallback=function(O,V,Q){var Ie=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?Ie+Q:Ie):Q=Ie,O){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Q+Me,O={id:c++,callback:V,priorityLevel:O,startTime:Q,expirationTime:Me,sortIndex:-1},Q>Ie?(O.sortIndex=Q,e(u,O),n(l)===null&&O===n(u)&&(y?(m(I),I=-1):y=!0,Ct(_,Q-Ie))):(O.sortIndex=Me,e(l,O),v||d||(v=!0,Ve(E))),O},t.unstable_shouldYield=ie,t.unstable_wrapCallback=function(O){var V=f;return function(){var Q=f;f=V;try{return O.apply(this,arguments)}finally{f=Q}}}})(Wk);Hk.exports=Wk;var kx=Hk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kk=S,Dt=kx;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qk=new Set,Ea={};function Wi(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Ea[t]=e,t=0;t<e.length;t++)qk.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=Object.prototype.hasOwnProperty,_x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,By={},Vy={};function Ex(t){return Vd.call(Vy,t)?!0:Vd.call(By,t)?!1:_x.test(t)?Vy[t]=!0:(By[t]=!0,!1)}function bx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sx(t,e,n,r){if(e===null||typeof e>"u"||bx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function Jm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xm,Jm);Qe[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xm,Jm);Qe[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xm,Jm);Qe[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zm(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sx(e,n,i,r)&&(n=null),r||i===null?Ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=Kk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zl=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),eg=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Gk=Symbol.for("react.provider"),Qk=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),ng=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),Yk=Symbol.for("react.offscreen"),Hy=Symbol.iterator;function So(t){return t===null||typeof t!="object"?null:(t=Hy&&t[Hy]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,kf;function Fo(t){if(kf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kf=e&&e[1]||""}return`
`+kf+t}var _f=!1;function Ef(t,e){if(!t||_f)return"";_f=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_f=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fo(t):""}function Ix(t){switch(t.tag){case 5:return Fo(t.type);case 16:return Fo("Lazy");case 13:return Fo("Suspense");case 19:return Fo("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case Hd:return"Profiler";case eg:return"StrictMode";case Wd:return"Suspense";case Kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qk:return(t.displayName||"Context")+".Consumer";case Gk:return(t._context.displayName||"Context")+".Provider";case tg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ng:return e=t.displayName||null,e!==null?e:qd(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return qd(t(e))}catch{}}return null}function Tx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qd(e);case 8:return e===eg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xk(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cx(t){var e=Xk(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bl(t){t._valueTracker||(t._valueTracker=Cx(t))}function Jk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xk(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gd(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Wy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zk(t,e){e=e.checked,e!=null&&Zm(t,"checked",e,!1)}function Qd(t,e){Zk(t,e);var n=Mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yd(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ky(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yd(t,e,n){(e!=="number"||tc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Uo=Array.isArray;function Ss(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Uo(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function e_(t,e){var n=Mr(e.value),r=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function t_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?t_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Vl,n_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Vl=Vl||document.createElement("div"),Vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ba(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xx=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){xx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function r_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function i_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=r_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ax=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zd(t,e){if(e){if(Ax[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tp=null;function rg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var np=null,Is=null,Ts=null;function Qy(t){if(t=fl(t)){if(typeof np!="function")throw Error(x(280));var e=t.stateNode;e&&(e=hh(e),np(t.stateNode,t.type,e))}}function s_(t){Is?Ts?Ts.push(t):Ts=[t]:Is=t}function o_(){if(Is){var t=Is,e=Ts;if(Ts=Is=null,Qy(t),e)for(t=0;t<e.length;t++)Qy(e[t])}}function a_(t,e){return t(e)}function l_(){}var bf=!1;function u_(t,e,n){if(bf)return t(e,n);bf=!0;try{return a_(t,e,n)}finally{bf=!1,(Is!==null||Ts!==null)&&(l_(),o_())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var r=hh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var rp=!1;if(Hn)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){rp=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{rp=!1}function Nx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ea=!1,nc=null,rc=!1,ip=null,Rx={onError:function(t){ea=!0,nc=t}};function Ox(t,e,n,r,i,s,o,a,l){ea=!1,nc=null,Nx.apply(Rx,arguments)}function Px(t,e,n,r,i,s,o,a,l){if(Ox.apply(this,arguments),ea){if(ea){var u=nc;ea=!1,nc=null}else throw Error(x(198));rc||(rc=!0,ip=u)}}function Ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function c_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yy(t){if(Ki(t)!==t)throw Error(x(188))}function Dx(t){var e=t.alternate;if(!e){if(e=Ki(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Yy(i),t;if(s===r)return Yy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function h_(t){return t=Dx(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var d_=Dt.unstable_scheduleCallback,Xy=Dt.unstable_cancelCallback,Lx=Dt.unstable_shouldYield,Mx=Dt.unstable_requestPaint,Te=Dt.unstable_now,$x=Dt.unstable_getCurrentPriorityLevel,ig=Dt.unstable_ImmediatePriority,p_=Dt.unstable_UserBlockingPriority,ic=Dt.unstable_NormalPriority,jx=Dt.unstable_LowPriority,m_=Dt.unstable_IdlePriority,ah=null,wn=null;function Fx(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(ah,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:Bx,Ux=Math.log,zx=Math.LN2;function Bx(t){return t>>>=0,t===0?32:31-(Ux(t)/zx|0)|0}var Hl=64,Wl=4194304;function zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zo(a):(s&=o,s!==0&&(r=zo(s)))}else o=n&~i,o!==0?r=zo(o):s!==0&&(r=zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function Vx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Vx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function g_(){var t=Hl;return Hl<<=1,!(Hl&4194240)&&(Hl=64),t}function Sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function Wx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function sg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function v_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y_,og,w_,k_,__,op=!1,Kl=[],br=null,Sr=null,Ir=null,Ia=new Map,Ta=new Map,ur=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(e.pointerId)}}function To(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fl(e),e!==null&&og(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qx(t,e,n,r,i){switch(e){case"focusin":return br=To(br,t,e,n,r,i),!0;case"dragenter":return Sr=To(Sr,t,e,n,r,i),!0;case"mouseover":return Ir=To(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ia.set(s,To(Ia.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ta.set(s,To(Ta.get(s)||null,t,e,n,r,i)),!0}return!1}function E_(t){var e=ci(t.target);if(e!==null){var n=Ki(e);if(n!==null){if(e=n.tag,e===13){if(e=c_(n),e!==null){t.blockedOn=e,__(t.priority,function(){w_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ap(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tp=r,n.target.dispatchEvent(r),tp=null}else return e=fl(n),e!==null&&og(e),t.blockedOn=n,!1;e.shift()}return!0}function Zy(t,e,n){Ou(t)&&n.delete(e)}function Gx(){op=!1,br!==null&&Ou(br)&&(br=null),Sr!==null&&Ou(Sr)&&(Sr=null),Ir!==null&&Ou(Ir)&&(Ir=null),Ia.forEach(Zy),Ta.forEach(Zy)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,op||(op=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,Gx)))}function Ca(t){function e(i){return Co(i,t)}if(0<Kl.length){Co(Kl[0],t);for(var n=1;n<Kl.length;n++){var r=Kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&Co(br,t),Sr!==null&&Co(Sr,t),Ir!==null&&Co(Ir,t),Ia.forEach(e),Ta.forEach(e),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)E_(n),n.blockedOn===null&&ur.shift()}var Cs=nr.ReactCurrentBatchConfig,oc=!0;function Qx(t,e,n,r){var i=ne,s=Cs.transition;Cs.transition=null;try{ne=1,ag(t,e,n,r)}finally{ne=i,Cs.transition=s}}function Yx(t,e,n,r){var i=ne,s=Cs.transition;Cs.transition=null;try{ne=4,ag(t,e,n,r)}finally{ne=i,Cs.transition=s}}function ag(t,e,n,r){if(oc){var i=ap(t,e,n,r);if(i===null)Df(t,e,r,ac,n),Jy(t,r);else if(qx(i,t,e,n,r))r.stopPropagation();else if(Jy(t,r),e&4&&-1<Kx.indexOf(t)){for(;i!==null;){var s=fl(i);if(s!==null&&y_(s),s=ap(t,e,n,r),s===null&&Df(t,e,r,ac,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Df(t,e,r,null,n)}}var ac=null;function ap(t,e,n,r){if(ac=null,t=rg(r),t=ci(t),t!==null)if(e=Ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=c_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ac=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($x()){case ig:return 1;case p_:return 4;case ic:case jx:return 16;case m_:return 536870912;default:return 16}default:return 16}}var gr=null,lg=null,Pu=null;function S_(){if(Pu)return Pu;var t,e=lg,n=e.length,r,i="value"in gr?gr.value:gr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Pu=i.slice(t,1<r?1-r:void 0)}function Du(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function e0(){return!1}function $t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ql:e0,this.isPropagationStopped=e0,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ug=$t(lo),hl=ve({},lo,{view:0,detail:0}),Xx=$t(hl),If,Tf,xo,lh=ve({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(If=t.screenX-xo.screenX,Tf=t.screenY-xo.screenY):Tf=If=0,xo=t),If)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),t0=$t(lh),Jx=ve({},lh,{dataTransfer:0}),Zx=$t(Jx),e2=ve({},hl,{relatedTarget:0}),Cf=$t(e2),t2=ve({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),n2=$t(t2),r2=ve({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),i2=$t(r2),s2=ve({},lo,{data:0}),n0=$t(s2),o2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l2[t])?!!e[t]:!1}function cg(){return u2}var c2=ve({},hl,{key:function(t){if(t.key){var e=o2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Du(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cg,charCode:function(t){return t.type==="keypress"?Du(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Du(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),h2=$t(c2),f2=ve({},lh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r0=$t(f2),d2=ve({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cg}),p2=$t(d2),m2=ve({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),g2=$t(m2),v2=ve({},lh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y2=$t(v2),w2=[9,13,27,32],hg=Hn&&"CompositionEvent"in window,ta=null;Hn&&"documentMode"in document&&(ta=document.documentMode);var k2=Hn&&"TextEvent"in window&&!ta,I_=Hn&&(!hg||ta&&8<ta&&11>=ta),i0=String.fromCharCode(32),s0=!1;function T_(t,e){switch(t){case"keyup":return w2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function _2(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(s0=!0,i0);case"textInput":return t=e.data,t===i0&&s0?null:t;default:return null}}function E2(t,e){if(us)return t==="compositionend"||!hg&&T_(t,e)?(t=S_(),Pu=lg=gr=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I_&&e.locale!=="ko"?null:e.data;default:return null}}var b2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function o0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b2[t.type]:e==="textarea"}function x_(t,e,n,r){s_(r),e=lc(e,"onChange"),0<e.length&&(n=new ug("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var na=null,xa=null;function S2(t){F_(t,0)}function uh(t){var e=fs(t);if(Jk(e))return t}function I2(t,e){if(t==="change")return e}var A_=!1;if(Hn){var xf;if(Hn){var Af="oninput"in document;if(!Af){var a0=document.createElement("div");a0.setAttribute("oninput","return;"),Af=typeof a0.oninput=="function"}xf=Af}else xf=!1;A_=xf&&(!document.documentMode||9<document.documentMode)}function l0(){na&&(na.detachEvent("onpropertychange",N_),xa=na=null)}function N_(t){if(t.propertyName==="value"&&uh(xa)){var e=[];x_(e,xa,t,rg(t)),u_(S2,e)}}function T2(t,e,n){t==="focusin"?(l0(),na=e,xa=n,na.attachEvent("onpropertychange",N_)):t==="focusout"&&l0()}function C2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uh(xa)}function x2(t,e){if(t==="click")return uh(e)}function A2(t,e){if(t==="input"||t==="change")return uh(e)}function N2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:N2;function Aa(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vd.call(e,i)||!on(t[i],e[i]))return!1}return!0}function u0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c0(t,e){var n=u0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=u0(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O_(){for(var t=window,e=tc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tc(t.document)}return e}function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R2(t){var e=O_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(r!==null&&fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=c0(n,s);var o=c0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var O2=Hn&&"documentMode"in document&&11>=document.documentMode,cs=null,lp=null,ra=null,up=!1;function h0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||cs==null||cs!==tc(r)||(r=cs,"selectionStart"in r&&fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&Aa(ra,r)||(ra=r,r=lc(lp,"onSelect"),0<r.length&&(e=new ug("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}function Gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hs={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},Nf={},P_={};Hn&&(P_=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function ch(t){if(Nf[t])return Nf[t];if(!hs[t])return t;var e=hs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in P_)return Nf[t]=e[n];return t}var D_=ch("animationend"),L_=ch("animationiteration"),M_=ch("animationstart"),$_=ch("transitionend"),j_=new Map,f0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){j_.set(t,e),Wi(e,[t])}for(var Rf=0;Rf<f0.length;Rf++){var Of=f0[Rf],P2=Of.toLowerCase(),D2=Of[0].toUpperCase()+Of.slice(1);Kr(P2,"on"+D2)}Kr(D_,"onAnimationEnd");Kr(L_,"onAnimationIteration");Kr(M_,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr($_,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function d0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Px(r,e,void 0,t),t.currentTarget=null}function F_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,u),s=l}}}if(rc)throw t=ip,rc=!1,ip=null,t}function oe(t,e){var n=e[pp];n===void 0&&(n=e[pp]=new Set);var r=t+"__bubble";n.has(r)||(U_(e,t,2,!1),n.add(r))}function Pf(t,e,n){var r=0;e&&(r|=4),U_(n,t,r,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[Ql]){t[Ql]=!0,qk.forEach(function(n){n!=="selectionchange"&&(L2.has(n)||Pf(n,!1,t),Pf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,Pf("selectionchange",!1,e))}}function U_(t,e,n,r){switch(b_(e)){case 1:var i=Qx;break;case 4:i=Yx;break;default:i=ag}n=i.bind(null,e,n,t),i=void 0,!rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Df(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ci(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}u_(function(){var u=s,c=rg(n),h=[];e:{var f=j_.get(t);if(f!==void 0){var d=ug,v=t;switch(t){case"keypress":if(Du(n)===0)break e;case"keydown":case"keyup":d=h2;break;case"focusin":v="focus",d=Cf;break;case"focusout":v="blur",d=Cf;break;case"beforeblur":case"afterblur":d=Cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=t0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=p2;break;case D_:case L_:case M_:d=n2;break;case $_:d=g2;break;case"scroll":d=Xx;break;case"wheel":d=y2;break;case"copy":case"cut":case"paste":d=i2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=r0}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=Sa(p,m),_!=null&&y.push(Ra(p,_,g)))),w)break;p=p.return}0<y.length&&(f=new d(f,v,null,n,c),h.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",d=t==="mouseout"||t==="pointerout",f&&n!==tp&&(v=n.relatedTarget||n.fromElement)&&(ci(v)||v[Wn]))break e;if((d||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,d?(v=n.relatedTarget||n.toElement,d=u,v=v?ci(v):null,v!==null&&(w=Ki(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(d=null,v=u),d!==v)){if(y=t0,_="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=r0,_="onPointerLeave",m="onPointerEnter",p="pointer"),w=d==null?f:fs(d),g=v==null?f:fs(v),f=new y(_,p+"leave",d,n,c),f.target=w,f.relatedTarget=g,_=null,ci(c)===u&&(y=new y(m,p+"enter",v,n,c),y.target=g,y.relatedTarget=w,_=y),w=_,d&&v)t:{for(y=d,m=v,p=0,g=y;g;g=ns(g))p++;for(g=0,_=m;_;_=ns(_))g++;for(;0<p-g;)y=ns(y),p--;for(;0<g-p;)m=ns(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=ns(y),m=ns(m)}y=null}else y=null;d!==null&&p0(h,f,d,y,!1),v!==null&&w!==null&&p0(h,w,v,y,!0)}}e:{if(f=u?fs(u):window,d=f.nodeName&&f.nodeName.toLowerCase(),d==="select"||d==="input"&&f.type==="file")var E=I2;else if(o0(f))if(A_)E=A2;else{E=C2;var b=T2}else(d=f.nodeName)&&d.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=x2);if(E&&(E=E(t,u))){x_(h,E,n,c);break e}b&&b(t,f,u),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&Yd(f,"number",f.value)}switch(b=u?fs(u):window,t){case"focusin":(o0(b)||b.contentEditable==="true")&&(cs=b,lp=u,ra=null);break;case"focusout":ra=lp=cs=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,h0(h,n,c);break;case"selectionchange":if(O2)break;case"keydown":case"keyup":h0(h,n,c)}var C;if(hg)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else us?T_(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(I_&&n.locale!=="ko"&&(us||I!=="onCompositionStart"?I==="onCompositionEnd"&&us&&(C=S_()):(gr=c,lg="value"in gr?gr.value:gr.textContent,us=!0)),b=lc(u,I),0<b.length&&(I=new n0(I,t,null,n,c),h.push({event:I,listeners:b}),C?I.data=C:(C=C_(n),C!==null&&(I.data=C)))),(C=k2?_2(t,n):E2(t,n))&&(u=lc(u,"onBeforeInput"),0<u.length&&(c=new n0("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}F_(h,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function lc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sa(t,n),s!=null&&r.unshift(Ra(t,s,i)),s=Sa(t,e),s!=null&&r.push(Ra(t,s,i))),t=t.return}return r}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function p0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Sa(n,s),l!=null&&o.unshift(Ra(n,l,a))):i||(l=Sa(n,s),l!=null&&o.push(Ra(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var M2=/\r\n?/g,$2=/\u0000|\uFFFD/g;function m0(t){return(typeof t=="string"?t:""+t).replace(M2,`
`).replace($2,"")}function Yl(t,e,n){if(e=m0(e),m0(t)!==e&&n)throw Error(x(425))}function uc(){}var cp=null,hp=null;function fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dp=typeof setTimeout=="function"?setTimeout:void 0,j2=typeof clearTimeout=="function"?clearTimeout:void 0,g0=typeof Promise=="function"?Promise:void 0,F2=typeof queueMicrotask=="function"?queueMicrotask:typeof g0<"u"?function(t){return g0.resolve(null).then(t).catch(U2)}:dp;function U2(t){setTimeout(function(){throw t})}function Lf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ca(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function v0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var uo=Math.random().toString(36).slice(2),dn="__reactFiber$"+uo,Oa="__reactProps$"+uo,Wn="__reactContainer$"+uo,pp="__reactEvents$"+uo,z2="__reactListeners$"+uo,B2="__reactHandles$"+uo;function ci(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=v0(t);t!==null;){if(n=t[dn])return n;t=v0(t)}return e}t=n,n=t.parentNode}return null}function fl(t){return t=t[dn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function hh(t){return t[Oa]||null}var mp=[],ds=-1;function qr(t){return{current:t}}function ce(t){0>ds||(t.current=mp[ds],mp[ds]=null,ds--)}function se(t,e){ds++,mp[ds]=t.current,t.current=e}var $r={},ut=qr($r),bt=qr(!1),Ci=$r;function Fs(t,e){var n=t.type.contextTypes;if(!n)return $r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function cc(){ce(bt),ce(ut)}function y0(t,e,n){if(ut.current!==$r)throw Error(x(168));se(ut,e),se(bt,n)}function z_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Tx(t)||"Unknown",i));return ve({},n,r)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,Ci=ut.current,se(ut,t),se(bt,bt.current),!0}function w0(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=z_(t,e,Ci),r.__reactInternalMemoizedMergedChildContext=t,ce(bt),ce(ut),se(ut,t)):ce(bt),se(bt,n)}var Pn=null,fh=!1,Mf=!1;function B_(t){Pn===null?Pn=[t]:Pn.push(t)}function V2(t){fh=!0,B_(t)}function Gr(){if(!Mf&&Pn!==null){Mf=!0;var t=0,e=ne;try{var n=Pn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,fh=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(t+1)),d_(ig,Gr),i}finally{ne=e,Mf=!1}}return null}var ps=[],ms=0,fc=null,dc=0,zt=[],Bt=0,xi=null,Ln=1,Mn="";function si(t,e){ps[ms++]=dc,ps[ms++]=fc,fc=t,dc=e}function V_(t,e,n){zt[Bt++]=Ln,zt[Bt++]=Mn,zt[Bt++]=xi,xi=t;var r=Ln;t=Mn;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-tn(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function dg(t){t.return!==null&&(si(t,1),V_(t,1,0))}function pg(t){for(;t===fc;)fc=ps[--ms],ps[ms]=null,dc=ps[--ms],ps[ms]=null;for(;t===xi;)xi=zt[--Bt],zt[Bt]=null,Mn=zt[--Bt],zt[Bt]=null,Ln=zt[--Bt],zt[Bt]=null}var Rt=null,At=null,pe=!1,Zt=null;function H_(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function k0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,At=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,At=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=xi!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,At=null,!0):!1;default:return!1}}function gp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vp(t){if(pe){var e=At;if(e){var n=e;if(!k0(t,e)){if(gp(t))throw Error(x(418));e=Tr(n.nextSibling);var r=Rt;e&&k0(t,e)?H_(r,n):(t.flags=t.flags&-4097|2,pe=!1,Rt=t)}}else{if(gp(t))throw Error(x(418));t.flags=t.flags&-4097|2,pe=!1,Rt=t}}}function _0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Xl(t){if(t!==Rt)return!1;if(!pe)return _0(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fp(t.type,t.memoizedProps)),e&&(e=At)){if(gp(t))throw W_(),Error(x(418));for(;e;)H_(t,e),e=Tr(e.nextSibling)}if(_0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){At=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}At=null}}else At=Rt?Tr(t.stateNode.nextSibling):null;return!0}function W_(){for(var t=At;t;)t=Tr(t.nextSibling)}function Us(){At=Rt=null,pe=!1}function mg(t){Zt===null?Zt=[t]:Zt.push(t)}var H2=nr.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var pc=qr(null),mc=null,gs=null,gg=null;function vg(){gg=gs=mc=null}function yg(t){var e=pc.current;ce(pc),t._currentValue=e}function yp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){mc=t,gg=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(gg!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(mc===null)throw Error(x(308));gs=t,mc.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var hi=null;function wg(t){hi===null?hi=[t]:hi.push(t)}function K_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kn(t,r)}function Kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function kg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kn(t,n)}return i=r.interleaved,i===null?(e.next=e,wg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kn(t,n)}function Lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sg(t,n)}}function E0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gc(t,e,n,r){var i=t.updateQueue;lr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,d=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:d,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,d=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){h=v.call(d,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(d,h,f):v,f==null)break e;h=ve({},h,f);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else d={eventTime:d,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=d,l=h):c=c.next=d,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ni|=o,t.lanes=o,t.memoizedState=h}}function b0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var G_=new Kk.Component().refs;function wp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dh={isMounted:function(t){return(t=t._reactInternals)?Ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Ar(t),s=zn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(nn(e,t,i,r),Lu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=Ar(t),s=zn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,i),e!==null&&(nn(e,t,i,r),Lu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=Ar(t),i=zn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cr(t,i,r),e!==null&&(nn(e,t,r,n),Lu(e,t,r))}};function S0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,r)||!Aa(i,s):!0}function Q_(t,e,n){var r=!1,i=$r,s=e.contextType;return typeof s=="object"&&s!==null?s=Kt(s):(i=St(e)?Ci:ut.current,r=e.contextTypes,s=(r=r!=null)?Fs(t,i):$r),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function I0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dh.enqueueReplaceState(e,e.state,null)}function kp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=G_,kg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Kt(s):(s=St(e)?Ci:ut.current,i.context=Fs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&dh.enqueueReplaceState(i,i.state,null),gc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===G_&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Jl(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function T0(t){var e=t._init;return e(t._payload)}function Y_(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Nr(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,_){return p===null||p.tag!==6?(p=Vf(g,m.mode,_),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,_){var E=g.type;return E===ls?c(m,p,g.props.children,_,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&T0(E)===p.type)?(_=i(p,g.props),_.ref=Ao(m,p,g),_.return=m,_):(_=zu(g.type,g.key,g.props,null,m.mode,_),_.ref=Ao(m,p,g),_.return=m,_)}function u(m,p,g,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Hf(g,m.mode,_),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function c(m,p,g,_,E){return p===null||p.tag!==7?(p=Ei(g,m.mode,_,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function h(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Vf(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zl:return g=zu(p.type,p.key,p.props,null,m.mode,g),g.ref=Ao(m,null,p),g.return=m,g;case as:return p=Hf(p,m.mode,g),p.return=m,p;case ar:var _=p._init;return h(m,_(p._payload),g)}if(Uo(p)||So(p))return p=Ei(p,m.mode,g,null),p.return=m,p;Jl(m,p)}return null}function f(m,p,g,_){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(m,p,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zl:return g.key===E?l(m,p,g,_):null;case as:return g.key===E?u(m,p,g,_):null;case ar:return E=g._init,f(m,p,E(g._payload),_)}if(Uo(g)||So(g))return E!==null?null:c(m,p,g,_,null);Jl(m,g)}return null}function d(m,p,g,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(p,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zl:return m=m.get(_.key===null?g:_.key)||null,l(p,m,_,E);case as:return m=m.get(_.key===null?g:_.key)||null,u(p,m,_,E);case ar:var b=_._init;return d(m,p,g,b(_._payload),E)}if(Uo(_)||So(_))return m=m.get(g)||null,c(p,m,_,E,null);Jl(p,_)}return null}function v(m,p,g,_){for(var E=null,b=null,C=p,I=p=0,M=null;C!==null&&I<g.length;I++){C.index>I?(M=C,C=null):M=C.sibling;var $=f(m,C,g[I],_);if($===null){C===null&&(C=M);break}t&&C&&$.alternate===null&&e(m,C),p=s($,p,I),b===null?E=$:b.sibling=$,b=$,C=M}if(I===g.length)return n(m,C),pe&&si(m,I),E;if(C===null){for(;I<g.length;I++)C=h(m,g[I],_),C!==null&&(p=s(C,p,I),b===null?E=C:b.sibling=C,b=C);return pe&&si(m,I),E}for(C=r(m,C);I<g.length;I++)M=d(C,m,I,g[I],_),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?I:M.key),p=s(M,p,I),b===null?E=M:b.sibling=M,b=M);return t&&C.forEach(function(ie){return e(m,ie)}),pe&&si(m,I),E}function y(m,p,g,_){var E=So(g);if(typeof E!="function")throw Error(x(150));if(g=E.call(g),g==null)throw Error(x(151));for(var b=E=null,C=p,I=p=0,M=null,$=g.next();C!==null&&!$.done;I++,$=g.next()){C.index>I?(M=C,C=null):M=C.sibling;var ie=f(m,C,$.value,_);if(ie===null){C===null&&(C=M);break}t&&C&&ie.alternate===null&&e(m,C),p=s(ie,p,I),b===null?E=ie:b.sibling=ie,b=ie,C=M}if($.done)return n(m,C),pe&&si(m,I),E;if(C===null){for(;!$.done;I++,$=g.next())$=h(m,$.value,_),$!==null&&(p=s($,p,I),b===null?E=$:b.sibling=$,b=$);return pe&&si(m,I),E}for(C=r(m,C);!$.done;I++,$=g.next())$=d(C,m,I,$.value,_),$!==null&&(t&&$.alternate!==null&&C.delete($.key===null?I:$.key),p=s($,p,I),b===null?E=$:b.sibling=$,b=$);return t&&C.forEach(function(de){return e(m,de)}),pe&&si(m,I),E}function w(m,p,g,_){if(typeof g=="object"&&g!==null&&g.type===ls&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zl:e:{for(var E=g.key,b=p;b!==null;){if(b.key===E){if(E=g.type,E===ls){if(b.tag===7){n(m,b.sibling),p=i(b,g.props.children),p.return=m,m=p;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ar&&T0(E)===b.type){n(m,b.sibling),p=i(b,g.props),p.ref=Ao(m,b,g),p.return=m,m=p;break e}n(m,b);break}else e(m,b);b=b.sibling}g.type===ls?(p=Ei(g.props.children,m.mode,_,g.key),p.return=m,m=p):(_=zu(g.type,g.key,g.props,null,m.mode,_),_.ref=Ao(m,p,g),_.return=m,m=_)}return o(m);case as:e:{for(b=g.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Hf(g,m.mode,_),p.return=m,m=p}return o(m);case ar:return b=g._init,w(m,p,b(g._payload),_)}if(Uo(g))return v(m,p,g,_);if(So(g))return y(m,p,g,_);Jl(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Vf(g,m.mode,_),p.return=m,m=p),o(m)):n(m,p)}return w}var zs=Y_(!0),X_=Y_(!1),dl={},kn=qr(dl),Pa=qr(dl),Da=qr(dl);function fi(t){if(t===dl)throw Error(x(174));return t}function _g(t,e){switch(se(Da,e),se(Pa,t),se(kn,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jd(e,t)}ce(kn),se(kn,e)}function Bs(){ce(kn),ce(Pa),ce(Da)}function J_(t){fi(Da.current);var e=fi(kn.current),n=Jd(e,t.type);e!==n&&(se(Pa,t),se(kn,n))}function Eg(t){Pa.current===t&&(ce(kn),ce(Pa))}var me=qr(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $f=[];function bg(){for(var t=0;t<$f.length;t++)$f[t]._workInProgressVersionPrimary=null;$f.length=0}var Mu=nr.ReactCurrentDispatcher,jf=nr.ReactCurrentBatchConfig,Ai=0,ge=null,Oe=null,Fe=null,yc=!1,ia=!1,La=0,W2=0;function Xe(){throw Error(x(321))}function Sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Ig(t,e,n,r,i,s){if(Ai=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mu.current=t===null||t.memoizedState===null?Q2:Y2,t=n(r,i),ia){s=0;do{if(ia=!1,La=0,25<=s)throw Error(x(301));s+=1,Fe=Oe=null,e.updateQueue=null,Mu.current=X2,t=n(r,i)}while(ia)}if(Mu.current=wc,e=Oe!==null&&Oe.next!==null,Ai=0,Fe=Oe=ge=null,yc=!1,e)throw Error(x(300));return t}function Tg(){var t=La!==0;return La=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function qt(){if(Oe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?ge.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(x(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?ge.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Ma(t,e){return typeof e=="function"?e(t):e}function Ff(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ge.lanes|=c,Ni|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uf(t){var e=qt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Z_(){}function eE(t,e){var n=ge,r=qt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Cg(rE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,$a(9,nE.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(x(349));Ai&30||tE(n,e,i)}return i}function tE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function nE(t,e,n,r){e.value=n,e.getSnapshot=r,iE(e)&&sE(t)}function rE(t,e,n){return n(function(){iE(e)&&sE(t)})}function iE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function sE(t){var e=Kn(t,1);e!==null&&nn(e,t,1,-1)}function C0(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:t},e.queue=t,t=t.dispatch=G2.bind(null,ge,t),[e.memoizedState,t]}function $a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function oE(){return qt().memoizedState}function $u(t,e,n,r){var i=fn();ge.flags|=t,i.memoizedState=$a(1|e,n,void 0,r===void 0?null:r)}function ph(t,e,n,r){var i=qt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Sg(r,o.deps)){i.memoizedState=$a(e,n,s,r);return}}ge.flags|=t,i.memoizedState=$a(1|e,n,s,r)}function x0(t,e){return $u(8390656,8,t,e)}function Cg(t,e){return ph(2048,8,t,e)}function aE(t,e){return ph(4,2,t,e)}function lE(t,e){return ph(4,4,t,e)}function uE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cE(t,e,n){return n=n!=null?n.concat([t]):null,ph(4,4,uE.bind(null,e,t),n)}function xg(){}function hE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fE(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dE(t,e,n){return Ai&21?(on(n,e)||(n=g_(),ge.lanes|=n,Ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function K2(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=jf.transition;jf.transition={};try{t(!1),e()}finally{ne=n,jf.transition=r}}function pE(){return qt().memoizedState}function q2(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mE(t))gE(e,n);else if(n=K_(t,e,n,r),n!==null){var i=gt();nn(n,t,r,i),vE(n,e,r)}}function G2(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mE(t))gE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,wg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=K_(t,e,i,r),n!==null&&(i=gt(),nn(n,t,r,i),vE(n,e,r))}}function mE(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function gE(t,e){ia=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,sg(t,n)}}var wc={readContext:Kt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Q2={readContext:Kt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:x0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$u(4194308,4,uE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $u(4194308,4,t,e)},useInsertionEffect:function(t,e){return $u(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=q2.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:C0,useDebugValue:xg,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=C0(!1),e=t[0];return t=K2.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=fn();if(pe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ue===null)throw Error(x(349));Ai&30||tE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,x0(rE.bind(null,r,s,t),[t]),r.flags|=2048,$a(9,nE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fn(),e=Ue.identifierPrefix;if(pe){var n=Mn,r=Ln;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=W2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y2={readContext:Kt,useCallback:hE,useContext:Kt,useEffect:Cg,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:lE,useMemo:fE,useReducer:Ff,useRef:oE,useState:function(){return Ff(Ma)},useDebugValue:xg,useDeferredValue:function(t){var e=qt();return dE(e,Oe.memoizedState,t)},useTransition:function(){var t=Ff(Ma)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:eE,useId:pE,unstable_isNewReconciler:!1},X2={readContext:Kt,useCallback:hE,useContext:Kt,useEffect:Cg,useImperativeHandle:cE,useInsertionEffect:aE,useLayoutEffect:lE,useMemo:fE,useReducer:Uf,useRef:oE,useState:function(){return Uf(Ma)},useDebugValue:xg,useDeferredValue:function(t){var e=qt();return Oe===null?e.memoizedState=t:dE(e,Oe.memoizedState,t)},useTransition:function(){var t=Uf(Ma)[0],e=qt().memoizedState;return[t,e]},useMutableSource:Z_,useSyncExternalStore:eE,useId:pE,unstable_isNewReconciler:!1};function Vs(t,e){try{var n="",r=e;do n+=Ix(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J2=typeof WeakMap=="function"?WeakMap:Map;function yE(t,e,n){n=zn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){_c||(_c=!0,Rp=r),_p(t,e)},n}function wE(t,e,n){n=zn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_p(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_p(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function A0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fA.bind(null,t,e,n),e.then(t,t))}function N0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function R0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var Z2=nr.ReactCurrentOwner,_t=!1;function pt(t,e,n,r){e.child=t===null?X_(e,null,n,r):zs(e,t.child,n,r)}function O0(t,e,n,r,i){n=n.render;var s=e.ref;return xs(e,i),r=Ig(t,e,n,r,s,i),n=Tg(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(pe&&n&&dg(e),e.flags|=1,pt(t,e,r,i),e.child)}function P0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kE(t,e,s,r,i)):(t=zu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,r)&&t.ref===e.ref)return qn(t,e,i)}return e.flags|=1,t=Nr(s,r),t.ref=e.ref,t.return=e,e.child=t}function kE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Aa(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,qn(t,e,i)}return Ep(t,e,n,r,i)}function _E(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ys,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(ys,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(ys,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(ys,xt),xt|=r;return pt(t,e,i,n),e.child}function EE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ep(t,e,n,r,i){var s=St(n)?Ci:ut.current;return s=Fs(e,s),xs(e,i),n=Ig(t,e,n,r,s,i),r=Tg(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,qn(t,e,i)):(pe&&r&&dg(e),e.flags|=1,pt(t,e,n,i),e.child)}function D0(t,e,n,r,i){if(St(n)){var s=!0;hc(e)}else s=!1;if(xs(e,i),e.stateNode===null)ju(t,e),Q_(e,n,r),kp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=St(n)?Ci:ut.current,u=Fs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&I0(e,o,r,u),lr=!1;var f=e.memoizedState;o.state=f,gc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||bt.current||lr?(typeof c=="function"&&(wp(e,n,c,r),l=e.memoizedState),(a=lr||S0(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,q_(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Xt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kt(l):(l=St(n)?Ci:ut.current,l=Fs(e,l));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&I0(e,o,r,l),lr=!1,f=e.memoizedState,o.state=f,gc(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||bt.current||lr?(typeof d=="function"&&(wp(e,n,d,r),v=e.memoizedState),(u=lr||S0(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return bp(t,e,n,r,s,i)}function bp(t,e,n,r,i,s){EE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&w0(e,n,!1),qn(t,e,s);r=e.stateNode,Z2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,a,s)):pt(t,e,a,s),e.memoizedState=r.state,i&&w0(e,n,!0),e.child}function bE(t){var e=t.stateNode;e.pendingContext?y0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&y0(t,e.context,!1),_g(t,e.containerInfo)}function L0(t,e,n,r,i){return Us(),mg(i),e.flags|=256,pt(t,e,n,r),e.child}var Sp={dehydrated:null,treeContext:null,retryLane:0};function Ip(t){return{baseLanes:t,cachePool:null,transitions:null}}function SE(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return vp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=vh(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ip(n),e.memoizedState=Sp,t):Ag(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return eA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ip(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sp,r}return s=t.child,t=s.sibling,r=Nr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ag(t,e){return e=vh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zl(t,e,n,r){return r!==null&&mg(r),zs(e,t.child,null,n),t=Ag(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zf(Error(x(422))),Zl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=vh({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&zs(e,t.child,null,o),e.child.memoizedState=Ip(o),e.memoizedState=Sp,s);if(!(e.mode&1))return Zl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=zf(s,r,void 0),Zl(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kn(t,i),nn(r,t,i,-1))}return Lg(),r=zf(Error(x(421))),Zl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,At=Tr(i.nextSibling),Rt=e,pe=!0,Zt=null,t!==null&&(zt[Bt++]=Ln,zt[Bt++]=Mn,zt[Bt++]=xi,Ln=t.id,Mn=t.overflow,xi=e),e=Ag(e,r.children),e.flags|=4096,e)}function M0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yp(t.return,e,n)}function Bf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function IE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(pt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bf(e,!0,n,null,s);break;case"together":Bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ju(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tA(t,e,n){switch(e.tag){case 3:bE(e),Us();break;case 5:J_(e);break;case 1:St(e.type)&&hc(e);break;case 4:_g(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(pc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?SE(t,e,n):(se(me,me.current&1),t=qn(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return IE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,_E(t,e,n)}return qn(t,e,n)}var TE,Tp,CE,xE;TE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tp=function(){};CE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(kn.current);var s=null;switch(n){case"input":i=Gd(t,i),r=Gd(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Xd(t,i),r=Xd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uc)}Zd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ea.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&oe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xE=function(t,e,n,r){n!==r&&(e.flags|=4)};function No(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nA(t,e,n){var r=e.pendingProps;switch(pg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return St(e.type)&&cc(),Je(e),null;case 3:return r=e.stateNode,Bs(),ce(bt),ce(ut),bg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Dp(Zt),Zt=null))),Tp(t,e),Je(e),null;case 5:Eg(e);var i=fi(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)CE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Je(e),null}if(t=fi(kn.current),Xl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Oa]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Bo.length;i++)oe(Bo[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Wy(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":qy(r,s),oe("invalid",r)}Zd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yl(r.textContent,a,t),i=["children",""+a]):Ea.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Bl(r),Ky(r,s,!0);break;case"textarea":Bl(r),Gy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=uc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=t_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Oa]=r,TE(t,e,!1,!1),e.stateNode=t;e:{switch(o=ep(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bo.length;i++)oe(Bo[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":Wy(t,r),i=Gd(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),oe("invalid",t);break;case"textarea":qy(t,r),i=Xd(t,r),oe("invalid",t);break;default:i=r}Zd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?i_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ba(t,l):typeof l=="number"&&ba(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&oe("scroll",t):l!=null&&Zm(t,s,l,o))}switch(n){case"input":Bl(t),Ky(t,r,!1);break;case"textarea":Bl(t),Gy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ss(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ss(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)xE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=fi(Da.current),fi(kn.current),Xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return Je(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&At!==null&&e.mode&1&&!(e.flags&128))W_(),Us(),e.flags|=98560,s=!1;else if(s=Xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[dn]=e}else Us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Zt!==null&&(Dp(Zt),Zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Pe===0&&(Pe=3):Lg())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Bs(),Tp(t,e),t===null&&Na(e.stateNode.containerInfo),Je(e),null;case 10:return yg(e.type._context),Je(e),null;case 17:return St(e.type)&&cc(),Je(e),null;case 19:if(ce(me),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)No(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,No(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>Hs&&(e.flags|=128,r=!0,No(s,!1),e.lanes=4194304)}else{if(!r)if(t=vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Je(e),null}else 2*Te()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Dg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function rA(t,e){switch(pg(e),e.tag){case 1:return St(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ce(bt),ce(ut),bg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eg(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return Bs(),null;case 10:return yg(e.type._context),null;case 22:case 23:return Dg(),null;case 24:return null;default:return null}}var eu=!1,nt=!1,iA=typeof WeakSet=="function"?WeakSet:Set,L=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Cp(t,e,n){try{n()}catch(r){ke(t,e,r)}}var $0=!1;function sA(t,e){if(cp=oc,t=O_(),fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var d;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(d=h.firstChild)!==null;)f=h,h=d;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(d=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=d}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hp={focusedElem:t,selectionRange:n},oc=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xt(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(_){ke(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=$0,$0=!1,v}function sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cp(e,n,s)}i=i.next}while(i!==r)}}function mh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function AE(t){var e=t.alternate;e!==null&&(t.alternate=null,AE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Oa],delete e[pp],delete e[z2],delete e[B2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function NE(t){return t.tag===5||t.tag===3||t.tag===4}function j0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||NE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ap(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uc));else if(r!==4&&(t=t.child,t!==null))for(Ap(t,e,n),t=t.sibling;t!==null;)Ap(t,e,n),t=t.sibling}function Np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Np(t,e,n),t=t.sibling;t!==null;)Np(t,e,n),t=t.sibling}var He=null,Jt=!1;function ir(t,e,n){for(n=n.child;n!==null;)RE(t,e,n),n=n.sibling}function RE(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(ah,n)}catch{}switch(n.tag){case 5:nt||vs(n,e);case 6:var r=He,i=Jt;He=null,ir(t,e,n),He=r,Jt=i,He!==null&&(Jt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Jt?(t=He,n=n.stateNode,t.nodeType===8?Lf(t.parentNode,n):t.nodeType===1&&Lf(t,n),Ca(t)):Lf(He,n.stateNode));break;case 4:r=He,i=Jt,He=n.stateNode.containerInfo,Jt=!0,ir(t,e,n),He=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!nt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cp(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!nt&&(vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(nt=(r=nt)||n.memoizedState!==null,ir(t,e,n),nt=r):ir(t,e,n);break;default:ir(t,e,n)}}function F0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new iA),e.forEach(function(r){var i=pA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:He=a.stateNode,Jt=!1;break e;case 3:He=a.stateNode.containerInfo,Jt=!0;break e;case 4:He=a.stateNode.containerInfo,Jt=!0;break e}a=a.return}if(He===null)throw Error(x(160));RE(s,o,i),He=null,Jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OE(e,t),e=e.sibling}function OE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),hn(t),r&4){try{sa(3,t,t.return),mh(3,t)}catch(y){ke(t,t.return,y)}try{sa(5,t,t.return)}catch(y){ke(t,t.return,y)}}break;case 1:Yt(e,t),hn(t),r&512&&n!==null&&vs(n,n.return);break;case 5:if(Yt(e,t),hn(t),r&512&&n!==null&&vs(n,n.return),t.flags&32){var i=t.stateNode;try{ba(i,"")}catch(y){ke(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zk(i,s),ep(a,o);var u=ep(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?i_(i,h):c==="dangerouslySetInnerHTML"?n_(i,h):c==="children"?ba(i,h):Zm(i,c,h,u)}switch(a){case"input":Qd(i,s);break;case"textarea":e_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var d=s.value;d!=null?Ss(i,!!s.multiple,d,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ss(i,!!s.multiple,s.defaultValue,!0):Ss(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oa]=s}catch(y){ke(t,t.return,y)}}break;case 6:if(Yt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ke(t,t.return,y)}}break;case 3:if(Yt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(y){ke(t,t.return,y)}break;case 4:Yt(e,t),hn(t);break;case 13:Yt(e,t),hn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Og=Te())),r&4&&F0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(nt=(u=nt)||c,Yt(e,t),nt=u):Yt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(f=L,d=f.child,f.tag){case 0:case 11:case 14:case 15:sa(4,f,f.return);break;case 1:vs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){ke(r,n,y)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){z0(h);continue}}d!==null?(d.return=f,L=d):z0(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=r_("display",o))}catch(y){ke(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){ke(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Yt(e,t),hn(t),r&4&&F0(t);break;case 21:break;default:Yt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(NE(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ba(i,""),r.flags&=-33);var s=j0(t);Np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=j0(t);Ap(t,a,o);break;default:throw Error(x(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oA(t,e,n){L=t,PE(t)}function PE(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||eu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||nt;a=eu;var u=nt;if(eu=o,(nt=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?B0(i):l!==null?(l.return=o,L=l):B0(i);for(;s!==null;)L=s,PE(s),s=s.sibling;L=i,eu=a,nt=u}U0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):U0(t)}}function U0(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nt||mh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!nt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&b0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}b0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ca(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}nt||e.flags&512&&xp(e)}catch(f){ke(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function z0(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function B0(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mh(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{xp(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{xp(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var aA=Math.ceil,kc=nr.ReactCurrentDispatcher,Ng=nr.ReactCurrentOwner,Wt=nr.ReactCurrentBatchConfig,Z=0,Ue=null,Ne=null,qe=0,xt=0,ys=qr(0),Pe=0,ja=null,Ni=0,gh=0,Rg=0,oa=null,wt=null,Og=0,Hs=1/0,Rn=null,_c=!1,Rp=null,xr=null,tu=!1,vr=null,Ec=0,aa=0,Op=null,Fu=-1,Uu=0;function gt(){return Z&6?Te():Fu!==-1?Fu:Fu=Te()}function Ar(t){return t.mode&1?Z&2&&qe!==0?qe&-qe:H2.transition!==null?(Uu===0&&(Uu=g_()),Uu):(t=ne,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function nn(t,e,n,r){if(50<aa)throw aa=0,Op=null,Error(x(185));cl(t,n,r),(!(Z&2)||t!==Ue)&&(t===Ue&&(!(Z&2)&&(gh|=n),Pe===4&&cr(t,qe)),It(t,r),n===1&&Z===0&&!(e.mode&1)&&(Hs=Te()+500,fh&&Gr()))}function It(t,e){var n=t.callbackNode;Hx(t,e);var r=sc(t,t===Ue?qe:0);if(r===0)n!==null&&Xy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Xy(n),e===1)t.tag===0?V2(V0.bind(null,t)):B_(V0.bind(null,t)),F2(function(){!(Z&6)&&Gr()}),n=null;else{switch(v_(r)){case 1:n=ig;break;case 4:n=p_;break;case 16:n=ic;break;case 536870912:n=m_;break;default:n=ic}n=zE(n,DE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function DE(t,e){if(Fu=-1,Uu=0,Z&6)throw Error(x(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var r=sc(t,t===Ue?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bc(t,r);else{e=r;var i=Z;Z|=2;var s=ME();(Ue!==t||qe!==e)&&(Rn=null,Hs=Te()+500,_i(t,e));do try{cA();break}catch(a){LE(t,a)}while(1);vg(),kc.current=s,Z=i,Ne!==null?e=0:(Ue=null,qe=0,e=Pe)}if(e!==0){if(e===2&&(i=sp(t),i!==0&&(r=i,e=Pp(t,i))),e===1)throw n=ja,_i(t,0),cr(t,r),It(t,Te()),n;if(e===6)cr(t,r);else{if(i=t.current.alternate,!(r&30)&&!lA(i)&&(e=bc(t,r),e===2&&(s=sp(t),s!==0&&(r=s,e=Pp(t,s))),e===1))throw n=ja,_i(t,0),cr(t,r),It(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:oi(t,wt,Rn);break;case 3:if(cr(t,r),(r&130023424)===r&&(e=Og+500-Te(),10<e)){if(sc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dp(oi.bind(null,t,wt,Rn),e);break}oi(t,wt,Rn);break;case 4:if(cr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aA(r/1960))-r,10<r){t.timeoutHandle=dp(oi.bind(null,t,wt,Rn),r);break}oi(t,wt,Rn);break;case 5:oi(t,wt,Rn);break;default:throw Error(x(329))}}}return It(t,Te()),t.callbackNode===n?DE.bind(null,t):null}function Pp(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(_i(t,e).flags|=256),t=bc(t,e),t!==2&&(e=wt,wt=n,e!==null&&Dp(e)),t}function Dp(t){wt===null?wt=t:wt.push.apply(wt,t)}function lA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~Rg,e&=~gh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function V0(t){if(Z&6)throw Error(x(327));As();var e=sc(t,0);if(!(e&1))return It(t,Te()),null;var n=bc(t,e);if(t.tag!==0&&n===2){var r=sp(t);r!==0&&(e=r,n=Pp(t,r))}if(n===1)throw n=ja,_i(t,0),cr(t,e),It(t,Te()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,wt,Rn),It(t,Te()),null}function Pg(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(Hs=Te()+500,fh&&Gr())}}function Ri(t){vr!==null&&vr.tag===0&&!(Z&6)&&As();var e=Z;Z|=1;var n=Wt.transition,r=ne;try{if(Wt.transition=null,ne=1,t)return t()}finally{ne=r,Wt.transition=n,Z=e,!(Z&6)&&Gr()}}function Dg(){xt=ys.current,ce(ys)}function _i(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,j2(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(pg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cc();break;case 3:Bs(),ce(bt),ce(ut),bg();break;case 5:Eg(r);break;case 4:Bs();break;case 13:ce(me);break;case 19:ce(me);break;case 10:yg(r.type._context);break;case 22:case 23:Dg()}n=n.return}if(Ue=t,Ne=t=Nr(t.current,null),qe=xt=e,Pe=0,ja=null,Rg=gh=Ni=0,wt=oa=null,hi!==null){for(e=0;e<hi.length;e++)if(n=hi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hi=null}return t}function LE(t,e){do{var n=Ne;try{if(vg(),Mu.current=wc,yc){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yc=!1}if(Ai=0,Fe=Oe=ge=null,ia=!1,La=0,Ng.current=null,n===null||n.return===null){Pe=1,ja=e,Ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=N0(o);if(d!==null){d.flags&=-257,R0(d,o,a,s,e),d.mode&1&&A0(s,u,e),e=d,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){A0(s,u,e),Lg();break e}l=Error(x(426))}}else if(pe&&a.mode&1){var w=N0(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),R0(w,o,a,s,e),mg(Vs(l,a));break e}}s=l=Vs(l,a),Pe!==4&&(Pe=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=yE(s,l,e);E0(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xr===null||!xr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=wE(s,a,e);E0(s,_);break e}}s=s.return}while(s!==null)}jE(n)}catch(E){e=E,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function ME(){var t=kc.current;return kc.current=wc,t===null?wc:t}function Lg(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Ue===null||!(Ni&268435455)&&!(gh&268435455)||cr(Ue,qe)}function bc(t,e){var n=Z;Z|=2;var r=ME();(Ue!==t||qe!==e)&&(Rn=null,_i(t,e));do try{uA();break}catch(i){LE(t,i)}while(1);if(vg(),Z=n,kc.current=r,Ne!==null)throw Error(x(261));return Ue=null,qe=0,Pe}function uA(){for(;Ne!==null;)$E(Ne)}function cA(){for(;Ne!==null&&!Lx();)$E(Ne)}function $E(t){var e=UE(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?jE(t):Ne=e,Ng.current=null}function jE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rA(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Ne=null;return}}else if(n=nA(n,e,xt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Pe===0&&(Pe=5)}function oi(t,e,n){var r=ne,i=Wt.transition;try{Wt.transition=null,ne=1,hA(t,e,n,r)}finally{Wt.transition=i,ne=r}return null}function hA(t,e,n,r){do As();while(vr!==null);if(Z&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Wx(t,s),t===Ue&&(Ne=Ue=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tu||(tu=!0,zE(ic,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wt.transition,Wt.transition=null;var o=ne;ne=1;var a=Z;Z|=4,Ng.current=null,sA(t,n),OE(n,t),R2(hp),oc=!!cp,hp=cp=null,t.current=n,oA(n),Mx(),Z=a,ne=o,Wt.transition=s}else t.current=n;if(tu&&(tu=!1,vr=t,Ec=i),s=t.pendingLanes,s===0&&(xr=null),Fx(n.stateNode),It(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_c)throw _c=!1,t=Rp,Rp=null,t;return Ec&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===Op?aa++:(aa=0,Op=t):aa=0,Gr(),null}function As(){if(vr!==null){var t=v_(Ec),e=Wt.transition,n=ne;try{if(Wt.transition=null,ne=16>t?16:t,vr===null)var r=!1;else{if(t=vr,vr=null,Ec=0,Z&6)throw Error(x(331));var i=Z;for(Z|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:sa(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var f=c.sibling,d=c.return;if(AE(c),c===u){L=null;break}if(f!==null){f.return=d,L=f;break}L=d}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,L=m;break e}L=s.return}}var p=t.current;for(L=p;L!==null;){o=L;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,L=g;else e:for(o=p;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mh(9,a)}}catch(E){ke(a,a.return,E)}if(a===o){L=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,L=_;break e}L=a.return}}if(Z=i,Gr(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(ah,t)}catch{}r=!0}return r}finally{ne=n,Wt.transition=e}}return!1}function H0(t,e,n){e=Vs(n,e),e=yE(t,e,1),t=Cr(t,e,1),e=gt(),t!==null&&(cl(t,1,e),It(t,e))}function ke(t,e,n){if(t.tag===3)H0(t,t,n);else for(;e!==null;){if(e.tag===3){H0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=Vs(n,t),t=wE(e,t,1),e=Cr(e,t,1),t=gt(),e!==null&&(cl(e,1,t),It(e,t));break}}e=e.return}}function fA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(qe&n)===n&&(Pe===4||Pe===3&&(qe&130023424)===qe&&500>Te()-Og?_i(t,0):Rg|=n),It(t,e)}function FE(t,e){e===0&&(t.mode&1?(e=Wl,Wl<<=1,!(Wl&130023424)&&(Wl=4194304)):e=1);var n=gt();t=Kn(t,e),t!==null&&(cl(t,e,n),It(t,n))}function dA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),FE(t,n)}function pA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),FE(t,n)}var UE;UE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,tA(t,e,n);_t=!!(t.flags&131072)}else _t=!1,pe&&e.flags&1048576&&V_(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ju(t,e),t=e.pendingProps;var i=Fs(e,ut.current);xs(e,n),i=Ig(null,e,r,t,i,n);var s=Tg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,hc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kg(e),i.updater=dh,e.stateNode=i,i._reactInternals=e,kp(e,r,t,n),e=bp(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&dg(e),pt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ju(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=gA(r),t=Xt(r,t),i){case 0:e=Ep(null,e,r,t,n);break e;case 1:e=D0(null,e,r,t,n);break e;case 11:e=O0(null,e,r,t,n);break e;case 14:e=P0(null,e,r,Xt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Ep(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),D0(t,e,r,i,n);case 3:e:{if(bE(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,q_(t,e),gc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vs(Error(x(423)),e),e=L0(t,e,r,n,i);break e}else if(r!==i){i=Vs(Error(x(424)),e),e=L0(t,e,r,n,i);break e}else for(At=Tr(e.stateNode.containerInfo.firstChild),Rt=e,pe=!0,Zt=null,n=X_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Us(),r===i){e=qn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return J_(e),t===null&&vp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fp(r,i)?o=null:s!==null&&fp(r,s)&&(e.flags|=32),EE(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&vp(e),null;case 13:return SE(t,e,n);case 4:return _g(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),O0(t,e,r,i,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(pc,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!bt.current){e=qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=zn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}pt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,xs(e,n),i=Kt(i),r=r(i),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),P0(t,e,r,i,n);case 15:return kE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),ju(t,e),e.tag=1,St(r)?(t=!0,hc(e)):t=!1,xs(e,n),Q_(e,r,i),kp(e,r,i,n),bp(null,e,r,!0,t,n);case 19:return IE(t,e,n);case 22:return _E(t,e,n)}throw Error(x(156,e.tag))};function zE(t,e){return d_(t,e)}function mA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new mA(t,e,n,r)}function Mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gA(t){if(typeof t=="function")return Mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tg)return 11;if(t===ng)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return Ei(n.children,i,s,e);case eg:o=8,i|=8;break;case Hd:return t=Ht(12,n,e,i|2),t.elementType=Hd,t.lanes=s,t;case Wd:return t=Ht(13,n,e,i),t.elementType=Wd,t.lanes=s,t;case Kd:return t=Ht(19,n,e,i),t.elementType=Kd,t.lanes=s,t;case Yk:return vh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gk:o=10;break e;case Qk:o=9;break e;case tg:o=11;break e;case ng:o=14;break e;case ar:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function vh(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=Yk,t.lanes=n,t.stateNode={isHidden:!1},t}function Vf(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function Hf(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sf(0),this.expirationTimes=Sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $g(t,e,n,r,i,s,o,a,l){return t=new vA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kg(s),t}function yA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function BE(t){if(!t)return $r;t=t._reactInternals;e:{if(Ki(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(St(n))return z_(t,n,e)}return e}function VE(t,e,n,r,i,s,o,a,l){return t=$g(n,r,!0,t,i,s,o,a,l),t.context=BE(null),n=t.current,r=gt(),i=Ar(n),s=zn(r,i),s.callback=e??null,Cr(n,s,i),t.current.lanes=i,cl(t,i,r),It(t,r),t}function yh(t,e,n,r){var i=e.current,s=gt(),o=Ar(i);return n=BE(n),e.context===null?e.context=n:e.pendingContext=n,e=zn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(i,e,o),t!==null&&(nn(t,i,o,s),Lu(t,i,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function W0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function jg(t,e){W0(t,e),(t=t.alternate)&&W0(t,e)}function wA(){return null}var HE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fg(t){this._internalRoot=t}wh.prototype.render=Fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));yh(t,e,null,null)};wh.prototype.unmount=Fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){yh(null,t,null,null)}),e[Wn]=null}};function wh(t){this._internalRoot=t}wh.prototype.unstable_scheduleHydration=function(t){if(t){var e=k_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&E_(t)}};function Ug(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function K0(){}function kA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Sc(o);s.call(u)}}var o=VE(e,r,t,0,null,!1,!1,"",K0);return t._reactRootContainer=o,t[Wn]=o.current,Na(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Sc(l);a.call(u)}}var l=$g(t,0,!1,null,null,!1,!1,"",K0);return t._reactRootContainer=l,t[Wn]=l.current,Na(t.nodeType===8?t.parentNode:t),Ri(function(){yh(e,l,n,r)}),l}function _h(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Sc(o);a.call(l)}}yh(e,o,t,i)}else o=kA(n,e,t,i,r);return Sc(o)}y_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zo(e.pendingLanes);n!==0&&(sg(e,n|1),It(e,Te()),!(Z&6)&&(Hs=Te()+500,Gr()))}break;case 13:Ri(function(){var r=Kn(t,1);if(r!==null){var i=gt();nn(r,t,1,i)}}),jg(t,1)}};og=function(t){if(t.tag===13){var e=Kn(t,134217728);if(e!==null){var n=gt();nn(e,t,134217728,n)}jg(t,134217728)}};w_=function(t){if(t.tag===13){var e=Ar(t),n=Kn(t,e);if(n!==null){var r=gt();nn(n,t,e,r)}jg(t,e)}};k_=function(){return ne};__=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};np=function(t,e,n){switch(e){case"input":if(Qd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hh(r);if(!i)throw Error(x(90));Jk(r),Qd(r,i)}}}break;case"textarea":e_(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};a_=Pg;l_=Ri;var _A={usingClientEntryPoint:!1,Events:[fl,fs,hh,s_,o_,Pg]},Ro={findFiberByHostInstance:ci,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},EA={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||wA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{ah=nu.inject(EA),wn=nu}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_A;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(x(200));return yA(t,e,null,n)};Mt.createRoot=function(t,e){if(!Ug(t))throw Error(x(299));var n=!1,r="",i=HE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=$g(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Na(t.nodeType===8?t.parentNode:t),new Fg(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=h_(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Ri(t)};Mt.hydrate=function(t,e,n){if(!kh(e))throw Error(x(200));return _h(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Ug(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=HE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VE(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wh(e)};Mt.render=function(t,e,n){if(!kh(e))throw Error(x(200));return _h(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!kh(t))throw Error(x(40));return t._reactRootContainer?(Ri(function(){_h(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Pg;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kh(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return _h(t,e,n,!1,r)};Mt.version="18.2.0-next-9e3b772b8-20220608";function WE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(WE)}catch(t){console.error(t)}}WE(),Vk.exports=Mt;var KE=Vk.exports;const hr=oo(KE);var q0=KE;Bd.createRoot=q0.createRoot,Bd.hydrateRoot=q0.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fa.apply(this,arguments)}var yr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(yr||(yr={}));const G0="popstate";function bA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Lp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ic(i)}return IA(e,n,null,t)}function Ce(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SA(){return Math.random().toString(36).substr(2,8)}function Q0(t,e){return{usr:t.state,key:t.key,idx:e}}function Lp(t,e,n,r){return n===void 0&&(n=null),Fa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?co(e):e,{state:n,key:e&&e.key||r||SA()})}function Ic(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function co(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function IA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=yr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=yr.Pop;let w=c(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function f(w,m){a=yr.Push;let p=Lp(y.location,w,m);n&&n(p,w),u=c()+1;let g=Q0(p,u),_=y.createHref(p);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:y.location,delta:1})}function d(w,m){a=yr.Replace;let p=Lp(y.location,w,m);n&&n(p,w),u=c();let g=Q0(p,u),_=y.createHref(p);o.replaceState(g,"",_),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Ic(w);return Ce(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(G0,h),l=w,()=>{i.removeEventListener(G0,h),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:d,go(w){return o.go(w)}};return y}var Y0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Y0||(Y0={}));function TA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?co(e):e,i=Bg(r.pathname||"/",n);if(i==null)return null;let s=qE(t);CA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=MA(s[a],FA(i));return o}function qE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ce(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ce(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:DA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of GE(s.path))i(s,o,l)}),e}function GE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=GE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function CA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const xA=/^:\w+$/,AA=3,NA=2,RA=1,OA=10,PA=-2,X0=t=>t==="*";function DA(t,e){let n=t.split("/"),r=n.length;return n.some(X0)&&(r+=PA),e&&(r+=NA),n.filter(i=>!X0(i)).reduce((i,s)=>i+(xA.test(s)?AA:s===""?RA:OA),r)}function LA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=$A({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Rr([i,c.pathname]),pathnameBase:VA(Rr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Rr([i,c.pathnameBase]))}return s}function $A(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=jA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=UA(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function jA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function FA(t){try{return decodeURI(t)}catch(e){return zg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function UA(t,e){try{return decodeURIComponent(t)}catch(n){return zg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Bg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function zA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?co(t):t;return{pathname:n?n.startsWith("/")?n:BA(n,e):e,search:HA(r),hash:WA(i)}}function BA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Vg(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=co(t):(i=Fa({},t),Ce(!i.pathname||!i.pathname.includes("?"),Wf("?","pathname","search",i)),Ce(!i.pathname||!i.pathname.includes("#"),Wf("#","pathname","hash",i)),Ce(!i.search||!i.search.includes("#"),Wf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=zA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Rr=t=>t.join("/").replace(/\/\/+/g,"/"),VA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function KA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const QE=["post","put","patch","delete"];new Set(QE);const qA=["get",...QE];new Set(qA);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tc.apply(this,arguments)}const Wg=S.createContext(null),GA=S.createContext(null),ho=S.createContext(null),Eh=S.createContext(null),xn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),YE=S.createContext(null);function QA(t,e){let{relative:n}=e===void 0?{}:e;fo()||Ce(!1);let{basename:r,navigator:i}=S.useContext(ho),{hash:s,pathname:o,search:a}=JE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fo(){return S.useContext(Eh)!=null}function po(){return fo()||Ce(!1),S.useContext(Eh).location}function XE(t){S.useContext(ho).static||S.useLayoutEffect(t)}function Qr(){let{isDataRoute:t}=S.useContext(xn);return t?hN():YA()}function YA(){fo()||Ce(!1);let t=S.useContext(Wg),{basename:e,navigator:n}=S.useContext(ho),{matches:r}=S.useContext(xn),{pathname:i}=po(),s=JSON.stringify(Vg(r).map(l=>l.pathnameBase)),o=S.useRef(!1);return XE(()=>{o.current=!0}),S.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Hg(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Rr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const XA=S.createContext(null);function JA(t){let e=S.useContext(xn).outlet;return e&&S.createElement(XA.Provider,{value:t},e)}function ZA(){let{matches:t}=S.useContext(xn),e=t[t.length-1];return e?e.params:{}}function JE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(xn),{pathname:i}=po(),s=JSON.stringify(Vg(r).map(o=>o.pathnameBase));return S.useMemo(()=>Hg(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function eN(t,e){return tN(t,e)}function tN(t,e,n){fo()||Ce(!1);let{navigator:r}=S.useContext(ho),{matches:i}=S.useContext(xn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=po(),u;if(e){var c;let y=typeof e=="string"?co(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Ce(!1),u=y}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",d=TA(t,{pathname:f}),v=oN(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Rr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Rr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&v?S.createElement(Eh.Provider,{value:{location:Tc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yr.Pop}},v):v}function nN(){let t=cN(),e=KA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}const rN=S.createElement(nN,null);class iN extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(xn.Provider,{value:this.props.routeContext},S.createElement(YE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sN(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Wg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(xn.Provider,{value:e},r)}function oN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Ce(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||rN);let f=e.concat(s.slice(0,u+1)),d=()=>{let v;return c?v=h:l.route.Component?v=S.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,S.createElement(sN,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?S.createElement(iN,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var Mp;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(Mp||(Mp={}));var Ua;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ua||(Ua={}));function aN(t){let e=S.useContext(Wg);return e||Ce(!1),e}function lN(t){let e=S.useContext(GA);return e||Ce(!1),e}function uN(t){let e=S.useContext(xn);return e||Ce(!1),e}function ZE(t){let e=uN(),n=e.matches[e.matches.length-1];return n.route.id||Ce(!1),n.route.id}function cN(){var t;let e=S.useContext(YE),n=lN(Ua.UseRouteError),r=ZE(Ua.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function hN(){let{router:t}=aN(Mp.UseNavigateStable),e=ZE(Ua.UseNavigateStable),n=S.useRef(!1);return XE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Tc({fromRouteId:e},s)))},[t,e])}function fN(t){let{to:e,replace:n,state:r,relative:i}=t;fo()||Ce(!1);let{matches:s}=S.useContext(xn),{pathname:o}=po(),a=Qr(),l=Hg(e,Vg(s).map(c=>c.pathnameBase),o,i==="path"),u=JSON.stringify(l);return S.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function dN(t){return JA(t.context)}function et(t){Ce(!1)}function pN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=yr.Pop,navigator:s,static:o=!1}=t;fo()&&Ce(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=co(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:d="default"}=r,v=S.useMemo(()=>{let y=Bg(u,a);return y==null?null:{location:{pathname:y,search:c,hash:h,state:f,key:d},navigationType:i}},[a,u,c,h,f,d,i]);return v==null?null:S.createElement(ho.Provider,{value:l},S.createElement(Eh.Provider,{children:n,value:v}))}function mN(t){let{children:e,location:n}=t;return eN($p(e),n)}var J0;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(J0||(J0={}));new Promise(()=>{});function $p(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,$p(r.props.children,s));return}r.type!==et&&Ce(!1),!r.props.index||!r.props.children||Ce(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$p(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jp(){return jp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jp.apply(this,arguments)}function gN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yN(t,e){return t.button===0&&(!e||e==="_self")&&!vN(t)}const wN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function kN(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=bA({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(pN,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const _N=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jr=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=gN(e,wN),{basename:f}=S.useContext(ho),d,v=!1;if(typeof u=="string"&&EN.test(u)&&(d=u,_N))try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),_=Bg(g.pathname,f);g.origin===p.origin&&_!=null?u=_+g.search+g.hash:v=!0}catch{}let y=QA(u,{relative:i}),w=bN(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||w(p)}return S.createElement("a",jp({},h,{href:d||y,onClick:v||s?r:m,ref:n,target:l}))});var Z0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Z0||(Z0={}));var e1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(e1||(e1={}));function bN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Qr(),l=po(),u=JE(t,{relative:o});return S.useCallback(c=>{if(yN(c,n)){c.preventDefault();let h=r!==void 0?r:Ic(l)===Ic(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function eb(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=eb(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function wr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=eb(t))&&(r&&(r+=" "),r+=e);return r}const la=t=>typeof t=="number"&&!isNaN(t),Oi=t=>typeof t=="string",Et=t=>typeof t=="function",Bu=t=>Oi(t)||Et(t)?t:null,Kf=t=>S.isValidElement(t)||Oi(t)||Et(t)||la(t);function SN(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function bh(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:f}=o;const d=r?`${e}--${l}`:e,v=r?`${n}--${l}`:n,y=S.useRef(0);return S.useLayoutEffect(()=>{const w=h.current,m=d.split(" "),p=g=>{g.target===h.current&&(w.dispatchEvent(new Event("d")),w.removeEventListener("animationend",p),w.removeEventListener("animationcancel",p),y.current===0&&g.type!=="animationcancel"&&w.classList.remove(...m))};w.classList.add(...m),w.addEventListener("animationend",p),w.addEventListener("animationcancel",p)},[]),S.useEffect(()=>{const w=h.current,m=()=>{w.removeEventListener("animationend",m),i?SN(w,c,s):c()};f||(u?m():(y.current=1,w.className+=` ${v}`,w.addEventListener("animationend",m)))},[f]),G.createElement(G.Fragment,null,a)}}function t1(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Ut={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},ru=t=>{let{theme:e,type:n,...r}=t;return G.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},qf={info:function(t){return G.createElement(ru,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return G.createElement(ru,{...t},G.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return G.createElement(ru,{...t},G.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return G.createElement(ru,{...t},G.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return G.createElement("div",{className:"Toastify__spinner"})}};function IN(t){const[,e]=S.useReducer(d=>d+1,0),[n,r]=S.useState([]),i=S.useRef(null),s=S.useRef(new Map).current,o=d=>n.indexOf(d)!==-1,a=S.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:d=>s.get(d)}).current;function l(d){let{containerId:v}=d;const{limit:y}=a.props;!y||v&&a.containerId!==v||(a.count-=a.queue.length,a.queue=[])}function u(d){r(v=>d==null?[]:v.filter(y=>y!==d))}function c(){const{toastContent:d,toastProps:v,staleId:y}=a.queue.shift();f(d,v,y)}function h(d,v){let{delay:y,staleId:w,...m}=v;if(!Kf(d)||function(de){return!i.current||a.props.enableMultiContainer&&de.containerId!==a.props.containerId||s.has(de.toastId)&&de.updateId==null}(m))return;const{toastId:p,updateId:g,data:_}=m,{props:E}=a,b=()=>u(p),C=g==null;C&&a.count++;const I={...E,style:E.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(de=>{let[ft,Ye]=de;return Ye!=null})),toastId:p,updateId:g,data:_,closeToast:b,isIn:!1,className:Bu(m.className||E.toastClassName),bodyClassName:Bu(m.bodyClassName||E.bodyClassName),progressClassName:Bu(m.progressClassName||E.progressClassName),autoClose:!m.isLoading&&(M=m.autoClose,$=E.autoClose,M===!1||la(M)&&M>0?M:$),deleteToast(){const de=t1(s.get(p),"removed");s.delete(p),Ut.emit(4,de);const ft=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),ft>0){const Ye=p==null?a.props.limit:1;if(ft===1||Ye===1)a.displayedToast++,c();else{const An=Ye>ft?ft:Ye;a.displayedToast=An;for(let Ve=0;Ve<An;Ve++)c()}}else e()}};var M,$;I.iconOut=function(de){let{theme:ft,type:Ye,isLoading:An,icon:Ve}=de,Ct=null;const O={theme:ft,type:Ye};return Ve===!1||(Et(Ve)?Ct=Ve(O):S.isValidElement(Ve)?Ct=S.cloneElement(Ve,O):Oi(Ve)||la(Ve)?Ct=Ve:An?Ct=qf.spinner():(V=>V in qf)(Ye)&&(Ct=qf[Ye](O))),Ct}(I),Et(m.onOpen)&&(I.onOpen=m.onOpen),Et(m.onClose)&&(I.onClose=m.onClose),I.closeButton=E.closeButton,m.closeButton===!1||Kf(m.closeButton)?I.closeButton=m.closeButton:m.closeButton===!0&&(I.closeButton=!Kf(E.closeButton)||E.closeButton);let ie=d;S.isValidElement(d)&&!Oi(d.type)?ie=S.cloneElement(d,{closeToast:b,toastProps:I,data:_}):Et(d)&&(ie=d({closeToast:b,toastProps:I,data:_})),E.limit&&E.limit>0&&a.count>E.limit&&C?a.queue.push({toastContent:ie,toastProps:I,staleId:w}):la(y)?setTimeout(()=>{f(ie,I,w)},y):f(ie,I,w)}function f(d,v,y){const{toastId:w}=v;y&&s.delete(y);const m={content:d,props:v};s.set(w,m),r(p=>[...p,w].filter(g=>g!==y)),Ut.emit(4,t1(m,m.props.updateId==null?"added":"updated"))}return S.useEffect(()=>(a.containerId=t.containerId,Ut.cancelEmit(3).on(0,h).on(1,d=>i.current&&u(d)).on(5,l).emit(2,a),()=>{s.clear(),Ut.emit(3,a)}),[]),S.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(d){const v=new Map,y=Array.from(s.values());return t.newestOnTop&&y.reverse(),y.forEach(w=>{const{position:m}=w.props;v.has(m)||v.set(m,[]),v.get(m).push(w)}),Array.from(v,w=>d(w[0],w[1]))},containerRef:i,isToastActive:o}}function n1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function r1(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function TN(t){const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=S.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:f}=t;function d(_){if(t.draggable){_.nativeEvent.type==="touchstart"&&_.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=E.getBoundingClientRect(),E.style.transition="",o.x=n1(_.nativeEvent),o.y=r1(_.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=E.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=E.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function v(_){if(o.boundingRect){const{top:E,bottom:b,left:C,right:I}=o.boundingRect;_.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=C&&o.x<=I&&o.y>=E&&o.y<=b?w():y()}}function y(){n(!0)}function w(){n(!1)}function m(_){const E=s.current;o.canDrag&&E&&(o.didMove=!0,e&&w(),o.x=n1(_),o.y=r1(_),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),E.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,E.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const _=s.current;if(o.canDrag&&o.didMove&&_){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();_.style.transition="transform 0.2s, opacity 0.2s",_.style.transform=`translate${t.draggableDirection}(0)`,_.style.opacity="1"}}S.useEffect(()=>{a.current=t}),S.useEffect(()=>(s.current&&s.current.addEventListener("d",y,{once:!0}),Et(t.onOpen)&&t.onOpen(S.isValidElement(t.children)&&t.children.props),()=>{const _=a.current;Et(_.onClose)&&_.onClose(S.isValidElement(_.children)&&_.children.props)}),[]),S.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||w(),window.addEventListener("focus",y),window.addEventListener("blur",w)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",w))}),[t.pauseOnFocusLoss]);const g={onMouseDown:d,onTouchStart:d,onMouseUp:v,onTouchEnd:v};return l&&u&&(g.onMouseEnter=w,g.onMouseLeave=y),f&&(g.onClick=_=>{h&&h(_),o.canCloseOnClick&&c()}),{playToast:y,pauseToast:w,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:g}}function tb(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return G.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},G.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},G.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function CN(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:f}=t;const d=s||l&&u===0,v={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:d?0:1};l&&(v.transform=`scaleX(${u})`);const y=wr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=Et(o)?o({rtl:c,type:i,defaultClassName:y}):wr(y,o);return G.createElement("div",{role:"progressbar","aria-hidden":d?"true":"false","aria-label":"notification timer",className:w,style:v,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const xN=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=TN(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:f,position:d,className:v,style:y,bodyClassName:w,bodyStyle:m,progressClassName:p,progressStyle:g,updateId:_,role:E,progress:b,rtl:C,toastId:I,deleteToast:M,isIn:$,isLoading:ie,iconOut:de,closeOnClick:ft,theme:Ye}=t,An=wr("Toastify__toast",`Toastify__toast-theme--${Ye}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":ft}),Ve=Et(v)?v({rtl:C,position:d,type:u,defaultClassName:An}):wr(An,v),Ct=!!b||!a,O={closeToast:h,type:u,theme:Ye};let V=null;return s===!1||(V=Et(s)?s(O):S.isValidElement(s)?S.cloneElement(s,O):tb(O)),G.createElement(f,{isIn:$,done:M,position:d,preventExitTransition:n,nodeRef:r},G.createElement("div",{id:I,onClick:l,className:Ve,...i,style:y,ref:r},G.createElement("div",{...$&&{role:E},className:Et(w)?w({type:u}):wr("Toastify__toast-body",w),style:m},de!=null&&G.createElement("div",{className:wr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ie})},de),G.createElement("div",null,o)),V,G.createElement(CN,{..._&&!Ct?{key:`pb-${_}`}:{},rtl:C,theme:Ye,delay:a,isRunning:e,isIn:$,closeToast:h,hide:c,type:u,style:g,className:p,controlledProgress:Ct,progress:b||0})))},Sh=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},AN=bh(Sh("bounce",!0));bh(Sh("slide",!0));bh(Sh("zoom"));bh(Sh("flip"));const Fp=S.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=IN(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=wr("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return Et(s)?s({position:c,rtl:a,defaultClassName:h}):wr(h,Bu(s))}return S.useEffect(()=>{e&&(e.current=r.current)},[]),G.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const f=h.length?{...o}:{...o,pointerEvents:"none"};return G.createElement("div",{className:u(c),style:f,key:`container-${c}`},h.map((d,v)=>{let{content:y,props:w}=d;return G.createElement(xN,{...w,isIn:i(w.toastId),style:{...w.style,"--nth":v+1,"--len":h.length},key:`toast-${w.key}`},y)}))}))});Fp.displayName="ToastContainer",Fp.defaultProps={position:"top-right",transition:AN,autoClose:5e3,closeButton:tb,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Gf,ai=new Map,Vo=[],NN=1;function nb(){return""+NN++}function RN(t){return t&&(Oi(t.toastId)||la(t.toastId))?t.toastId:nb()}function ua(t,e){return ai.size>0?Ut.emit(0,t,e):Vo.push({content:t,options:e}),e.toastId}function Cc(t,e){return{...e,type:e&&e.type||t,toastId:RN(e)}}function iu(t){return(e,n)=>ua(e,Cc(t,n))}function B(t,e){return ua(t,Cc("default",e))}B.loading=(t,e)=>ua(t,Cc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),B.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Oi(i)?B.loading(i,n):B.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,h,f)=>{if(h==null)return void B.dismiss(r);const d={type:c,...a,...n,data:f},v=Oi(h)?{render:h}:h;return r?B.update(r,{...d,...v}):B(v.render,{...d,...v}),f},u=Et(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},B.success=iu("success"),B.info=iu("info"),B.error=iu("error"),B.warning=iu("warning"),B.warn=B.warning,B.dark=(t,e)=>ua(t,Cc("default",{theme:"dark",...e})),B.dismiss=t=>{ai.size>0?Ut.emit(1,t):Vo=Vo.filter(e=>t!=null&&e.options.toastId!==t)},B.clearWaitingQueue=function(t){return t===void 0&&(t={}),Ut.emit(5,t)},B.isActive=t=>{let e=!1;return ai.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},B.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=ai.get(s||Gf);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:nb()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,ua(o,s)}},0)},B.done=t=>{B.update(t,{progress:1})},B.onChange=t=>(Ut.on(4,t),()=>{Ut.off(4,t)}),B.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},B.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ut.on(2,t=>{Gf=t.containerId||t,ai.set(Gf,t),Vo.forEach(e=>{Ut.emit(0,e.content,e.options)}),Vo=[]}).on(3,t=>{ai.delete(t.containerId||t),ai.size===0&&Ut.off(0).off(1).off(5)});var rb={exports:{}},ON="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",PN=ON,DN=PN;function ib(){}function sb(){}sb.resetWarningCache=ib;var LN=function(){function t(r,i,s,o,a,l){if(l!==DN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:sb,resetWarningCache:ib};return n.PropTypes=n,n};rb.exports=LN();var MN=rb.exports;const A=oo(MN);var ob={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function s(l,u,c,h,f){if(typeof c!="function")throw new TypeError("The listener must be a function");var d=new i(c,h||l,f),v=n?n+u:u;return l._events[v]?l._events[v].fn?l._events[v]=[l._events[v],d]:l._events[v].push(d):(l._events[v]=d,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)e.call(c,h)&&u.push(n?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=n?n+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var f=0,d=h.length,v=new Array(d);f<d;f++)v[f]=h[f].fn;return v},a.prototype.listenerCount=function(u){var c=n?n+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,f,d,v){var y=n?n+u:u;if(!this._events[y])return!1;var w=this._events[y],m=arguments.length,p,g;if(w.fn){switch(w.once&&this.removeListener(u,w.fn,void 0,!0),m){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,c),!0;case 3:return w.fn.call(w.context,c,h),!0;case 4:return w.fn.call(w.context,c,h,f),!0;case 5:return w.fn.call(w.context,c,h,f,d),!0;case 6:return w.fn.call(w.context,c,h,f,d,v),!0}for(g=1,p=new Array(m-1);g<m;g++)p[g-1]=arguments[g];w.fn.apply(w.context,p)}else{var _=w.length,E;for(g=0;g<_;g++)switch(w[g].once&&this.removeListener(u,w[g].fn,void 0,!0),m){case 1:w[g].fn.call(w[g].context);break;case 2:w[g].fn.call(w[g].context,c);break;case 3:w[g].fn.call(w[g].context,c,h);break;case 4:w[g].fn.call(w[g].context,c,h,f);break;default:if(!p)for(E=1,p=new Array(m-1);E<m;E++)p[E-1]=arguments[E];w[g].fn.apply(w[g].context,p)}}return!0},a.prototype.on=function(u,c,h){return s(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return s(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,f){var d=n?n+u:u;if(!this._events[d])return this;if(!c)return o(this,d),this;var v=this._events[d];if(v.fn)v.fn===c&&(!f||v.once)&&(!h||v.context===h)&&o(this,d);else{for(var y=0,w=[],m=v.length;y<m;y++)(v[y].fn!==c||f&&!v[y].once||h&&v[y].context!==h)&&w.push(v[y]);w.length?this._events[d]=w.length===1?w[0]:w:o(this,d)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=n?n+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(ob);var $N=ob.exports;const jN=oo($N);var FN=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};const i1="__googleMapsScriptId";var ws;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(ws||(ws={}));class ui{constructor({apiKey:e,authReferrerPolicy:n,channel:r,client:i,id:s=i1,language:o,libraries:a=[],mapIds:l,nonce:u,region:c,retries:h=3,url:f="https://maps.googleapis.com/maps/api/js",version:d}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=r,this.client=i,this.id=s||i1,this.language=o,this.libraries=a,this.mapIds=l,this.nonce=u,this.region=c,this.retries=h,this.url=f,this.version=d,ui.instance){if(!FN(this.options,ui.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(ui.instance.options)}`);return ui.instance}ui.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?ws.FAILURE:this.done?ws.SUCCESS:this.loading?ws.LOADING:ws.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(r=>{r?n(r.error):e(window.google)})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const e=this.createUrl(),n=document.createElement("script");n.id=this.id,n.type="text/javascript",n.src=e,n.onerror=this.loadErrorCallback.bind(this),n.defer=!0,n.async=!0,this.nonce&&(n.nonce=this.nonce),document.head.appendChild(n)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var UN=Ns;function Ns(t,e){this.x=t,this.y=e}Ns.prototype={clone:function(){return new Ns(this.x,this.y)},add:function(t){return this.clone()._add(t)},sub:function(t){return this.clone()._sub(t)},multByPoint:function(t){return this.clone()._multByPoint(t)},divByPoint:function(t){return this.clone()._divByPoint(t)},mult:function(t){return this.clone()._mult(t)},div:function(t){return this.clone()._div(t)},rotate:function(t){return this.clone()._rotate(t)},rotateAround:function(t,e){return this.clone()._rotateAround(t,e)},matMult:function(t){return this.clone()._matMult(t)},unit:function(){return this.clone()._unit()},perp:function(){return this.clone()._perp()},round:function(){return this.clone()._round()},mag:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},equals:function(t){return this.x===t.x&&this.y===t.y},dist:function(t){return Math.sqrt(this.distSqr(t))},distSqr:function(t){var e=t.x-this.x,n=t.y-this.y;return e*e+n*n},angle:function(){return Math.atan2(this.y,this.x)},angleTo:function(t){return Math.atan2(this.y-t.y,this.x-t.x)},angleWith:function(t){return this.angleWithSep(t.x,t.y)},angleWithSep:function(t,e){return Math.atan2(this.x*e-this.y*t,this.x*t+this.y*e)},_matMult:function(t){var e=t[0]*this.x+t[1]*this.y,n=t[2]*this.x+t[3]*this.y;return this.x=e,this.y=n,this},_add:function(t){return this.x+=t.x,this.y+=t.y,this},_sub:function(t){return this.x-=t.x,this.y-=t.y,this},_mult:function(t){return this.x*=t,this.y*=t,this},_div:function(t){return this.x/=t,this.y/=t,this},_multByPoint:function(t){return this.x*=t.x,this.y*=t.y,this},_divByPoint:function(t){return this.x/=t.x,this.y/=t.y,this},_unit:function(){return this._div(this.mag()),this},_perp:function(){var t=this.y;return this.y=this.x,this.x=-t,this},_rotate:function(t){var e=Math.cos(t),n=Math.sin(t),r=e*this.x-n*this.y,i=n*this.x+e*this.y;return this.x=r,this.y=i,this},_rotateAround:function(t,e){var n=Math.cos(t),r=Math.sin(t),i=e.x+n*(this.x-e.x)-r*(this.y-e.y),s=e.y+r*(this.x-e.x)+n*(this.y-e.y);return this.x=i,this.y=s,this},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}};Ns.convert=function(t){return t instanceof Ns?t:Array.isArray(t)?new Ns(t[0],t[1]):t};const di=oo(UN);function $e(){return($e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function Ih(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Qf(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var zN={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},BN=function(t){function e(){return t.apply(this,arguments)||this}Ih(e,t);var n=e.prototype;return n.shouldComponentUpdate=function(){return!1},n.render=function(){return G.createElement("div",{ref:this.props.registerChild,style:zN})},e}(S.Component),VN=function(t){function e(r){var i;return(i=t.call(this)||this).gmapInstance=r,i}Ih(e,t);var n=e.prototype;return n.getChildren=function(){return this.gmapInstance.props.children},n.getMousePosition=function(){return this.gmapInstance.mouse_},n.getUpdateCounter=function(){return this.gmapInstance.updateCounter_},n.dispose=function(){this.gmapInstance=null,this.removeAllListeners()},e}(jN),ca=function(t,e){for(var n=$e({},t),r=0;r<e.length;r++){var i=e[r];i in n&&delete n[i]}return n},HN=Object.prototype.hasOwnProperty;function s1(t,e){return t===e?t!==0||e!==0||1/t==1/e:t!=t&&e!=e}function Ft(t,e){if(s1(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!HN.call(e,n[i])||!s1(t[n[i]],e[n[i]]))return!1;return!0}var WN={width:"100%",height:"100%",left:0,top:0,margin:0,padding:0,position:"absolute"},KN={width:0,height:0,left:0,top:0,backgroundColor:"transparent",position:"absolute"},xc=function(t){function e(r){var i;return(i=t.call(this,r)||this)._getState=function(){return{children:i.props.dispatcher.getChildren(),updateCounter:i.props.dispatcher.getUpdateCounter()}},i._onChangeHandler=function(){if(i.dimensionsCache_){var s=(i.state.children||[]).length,o=i._getState();i.setState(o,function(){return(o.children||[]).length!==s&&i._onMouseChangeHandler()})}},i._onChildClick=function(){i.props.onChildClick&&i.hoverChildProps_&&i.props.onChildClick(i.hoverKey_,i.hoverChildProps_)},i._onChildMouseDown=function(){i.props.onChildMouseDown&&i.hoverChildProps_&&i.props.onChildMouseDown(i.hoverKey_,i.hoverChildProps_)},i._onChildMouseEnter=function(s,o){i.dimensionsCache_&&(i.props.onChildMouseEnter&&i.props.onChildMouseEnter(s,o),i.hoverChildProps_=o,i.hoverKey_=s,i.setState({hoverKey:s}))},i._onChildMouseLeave=function(){if(i.dimensionsCache_){var s=i.hoverKey_;s!=null&&(i.props.onChildMouseLeave&&i.props.onChildMouseLeave(s,i.hoverChildProps_),i.hoverKey_=null,i.hoverChildProps_=null,i.setState({hoverKey:null}))}},i._onMouseAllow=function(s){s||i._onChildMouseLeave(),i.allowMouse_=s},i._onMouseChangeHandler=function(){i.allowMouse_&&i._onMouseChangeHandlerRaf()},i._onMouseChangeHandlerRaf=function(){if(i.dimensionsCache_){var s=i.props.dispatcher.getMousePosition();if(s){var o=[],a=i.props.getHoverDistance();if(G.Children.forEach(i.state.children,function(c,h){if(c&&(c.props.latLng!==void 0||c.props.lat!==void 0||c.props.lng!==void 0)){var f=c.key!=null?c.key:h,d=i.props.distanceToMouse(i.dimensionsCache_[f],s,c.props);d<a&&o.push({key:f,dist:d,props:c.props})}}),o.length){o.sort(function(c,h){return c.dist-h.dist});var l=o[0].key,u=o[0].props;i.hoverKey_!==l&&(i._onChildMouseLeave(),i._onChildMouseEnter(l,u))}else i._onChildMouseLeave()}else i._onChildMouseLeave()}},i._getDimensions=function(s){return i.dimensionsCache_[s]},i.dimensionsCache_={},i.hoverKey_=null,i.hoverChildProps_=null,i.allowMouse_=!0,i.state=$e({},i._getState(),{hoverKey:null}),i}Ih(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.dispatcher.on("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.on("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.on("kON_CLICK",this._onChildClick),this.props.dispatcher.on("kON_MDOWN",this._onChildMouseDown)},n.shouldComponentUpdate=function(r,i){return this.props.experimental===!0?!Ft(this.props,r)||!Ft(ca(this.state,["hoverKey"]),ca(i,["hoverKey"])):!Ft(this.props,r)||!Ft(this.state,i)},n.componentWillUnmount=function(){this.props.dispatcher.removeListener("kON_CHANGE",this._onChangeHandler),this.props.dispatcher.removeListener("kON_MOUSE_POSITION_CHANGE",this._onMouseChangeHandler),this.props.dispatcher.removeListener("kON_CLICK",this._onChildClick),this.props.dispatcher.removeListener("kON_MDOWN",this._onChildMouseDown),this.dimensionsCache_=null},n.render=function(){var r=this,i=this.props.style||WN;this.dimensionsCache_={};var s=G.Children.map(this.state.children,function(o,a){if(o){if(o.props.latLng===void 0&&o.props.lat===void 0&&o.props.lng===void 0)return G.cloneElement(o,{$geoService:r.props.geoService,$onMouseAllow:r._onMouseAllow,$prerender:r.props.prerender});var l=o.props.latLng!==void 0?o.props.latLng:{lat:o.props.lat,lng:o.props.lng},u=r.props.insideMapPanes?r.props.geoService.fromLatLngToDivPixel(l):r.props.geoService.fromLatLngToCenterPixel(l),c={left:u.x,top:u.y};if(o.props.seLatLng!==void 0||o.props.seLat!==void 0&&o.props.seLng!==void 0){var h=o.props.seLatLng!==void 0?o.props.seLatLng:{lat:o.props.seLat,lng:o.props.seLng},f=r.props.insideMapPanes?r.props.geoService.fromLatLngToDivPixel(h):r.props.geoService.fromLatLngToCenterPixel(h);c.width=f.x-u.x,c.height=f.y-u.y}var d=r.props.geoService.fromLatLngToContainerPixel(l),v=o.key!=null?o.key:a;return r.dimensionsCache_[v]=$e({x:d.x,y:d.y},l),G.createElement("div",{key:v,style:$e({},KN,c),className:o.props.$markerHolderClassName},G.cloneElement(o,{$hover:v===r.state.hoverKey,$getDimensions:r._getDimensions,$dimensionKey:v,$geoService:r.props.geoService,$onMouseAllow:r._onMouseAllow,$prerender:r.props.prerender}))}});return G.createElement("div",{style:i},s)},e}(S.Component);xc.propTypes={geoService:A.any,style:A.any,distanceToMouse:A.func,dispatcher:A.any,onChildClick:A.func,onChildMouseDown:A.func,onChildMouseLeave:A.func,onChildMouseEnter:A.func,getHoverDistance:A.func,insideMapPanes:A.bool,prerender:A.bool},xc.defaultProps={insideMapPanes:!1,prerender:!1};var qN={width:"50%",height:"50%",left:"50%",top:"50%",margin:0,padding:0,position:"absolute"};function GN(t){return G.createElement("div",{style:qN},G.createElement(xc,$e({},t,{prerender:!0})))}var Yf,Oo,Up,QN=new Promise(function(t){Up=t}),o1=function(t,e){if(!t)return QN;if(Oo)return Oo;t.libraries||(t.libraries=[]);var n=[].concat(t.libraries);if(e&&(n.length!==0&&n.includes("visualization")||n.push("visualization"),console.warn("heatmapLibrary will be deprecated in the future. Please use { libraries: ['visualization'] } in bootstrapURLKeys property instead")),typeof window>"u")throw new Error("google map cannot be loaded outside browser env");var r=t.key,i=function(s,o){if(s==null)return{};var a,l,u={},c=Object.keys(s);for(l=0;l<c.length;l++)o.indexOf(a=c[l])>=0||(u[a]=s[a]);return u}(t,["key"]);return Yf||(Yf=new ui($e({apiKey:r||""},i,{libraries:n}))),Oo=Yf.load().then(function(){return Up(window.google.maps),window.google.maps}),Up(Oo),Oo};function ab(t,e,n){var r=n-e;return t===n?t:((t-e)%r+r)%r+e}var kr=function(){function t(e,n){if(isNaN(e)||isNaN(n))throw new Error("Invalid LatLng object: ("+e+", "+n+")");this.lat=+e,this.lng=+n}return t.prototype.wrap=function(){return new t(this.lat,ab(this.lng,-180,180))},t}();kr.convert=function(t){return t instanceof kr?t:Array.isArray(t)?new kr(t[0],t[1]):"lng"in t&&"lat"in t?new kr(t.lat,t.lng):t};var YN=function(){function t(r,i,s){this.tileSize=r||512,this._minZoom=i||0,this._maxZoom=s||52,this.latRange=[-85.05113,85.05113],this.width=0,this.height=0,this.zoom=0,this.center=new kr(0,0),this.angle=0}var e,n=t.prototype;return n.zoomScale=function(r){return Math.pow(2,r)},n.scaleZoom=function(r){return Math.log(r)/Math.LN2},n.project=function(r,i){return new di(this.lngX(r.lng,i),this.latY(r.lat,i))},n.unproject=function(r,i){return new kr(this.yLat(r.y,i),this.xLng(r.x,i))},n.lngX=function(r,i){return(180+r)*(i||this.worldSize)/360},n.latY=function(r,i){return(180-180/Math.PI*Math.log(Math.tan(Math.PI/4+r*Math.PI/360)))*(i||this.worldSize)/360},n.xLng=function(r,i){return 360*r/(i||this.worldSize)-180},n.yLat=function(r,i){return 360/Math.PI*Math.atan(Math.exp((180-360*r/(i||this.worldSize))*Math.PI/180))-90},n.locationPoint=function(r){var i=this.project(r);return this.centerPoint._sub(this.point._sub(i)._rotate(this.angle))},n.pointLocation=function(r){var i=this.centerPoint._sub(r)._rotate(-this.angle);return this.unproject(this.point.sub(i))},(e=[{key:"minZoom",get:function(){return this._minZoom},set:function(r){this._minZoom=r,this.zoom=Math.max(this.zoom,r)}},{key:"maxZoom",get:function(){return this._maxZoom},set:function(r){this._maxZoom=r,this.zoom=Math.min(this.zoom,r)}},{key:"worldSize",get:function(){return this.tileSize*this.scale}},{key:"centerPoint",get:function(){return new di(0,0)}},{key:"size",get:function(){return new di(this.width,this.height)}},{key:"bearing",get:function(){return-this.angle/Math.PI*180},set:function(r){this.angle=-ab(r,-180,180)*Math.PI/180}},{key:"zoom",get:function(){return this._zoom},set:function(r){var i=Math.min(Math.max(r,this.minZoom),this.maxZoom);this._zoom=i,this.scale=this.zoomScale(i),this.tileZoom=Math.floor(i),this.zoomFraction=i-this.tileZoom}},{key:"x",get:function(){return this.lngX(this.center.lng)}},{key:"y",get:function(){return this.latY(this.center.lat)}},{key:"point",get:function(){return new di(this.x,this.y)}}])&&function(r,i){for(var s=0;s<i.length;s++){var o=i[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}(t.prototype,e),t}(),XN=function(){function t(n){this.hasSize_=!1,this.hasView_=!1,this.transform_=new YN(n||512)}var e=t.prototype;return e.setView=function(n,r,i){this.transform_.center=kr.convert(n),this.transform_.zoom=+r,this.transform_.bearing=+i,this.hasView_=!0},e.setViewSize=function(n,r){this.transform_.width=n,this.transform_.height=r,this.hasSize_=!0},e.setMapCanvasProjection=function(n,r){this.maps_=n,this.mapCanvasProjection_=r},e.canProject=function(){return this.hasSize_&&this.hasView_},e.hasSize=function(){return this.hasSize_},e.fromLatLngToCenterPixel=function(n){return this.transform_.locationPoint(kr.convert(n))},e.fromLatLngToDivPixel=function(n){if(this.mapCanvasProjection_){var r=new this.maps_.LatLng(n.lat,n.lng);return this.mapCanvasProjection_.fromLatLngToDivPixel(r)}return this.fromLatLngToCenterPixel(n)},e.fromLatLngToContainerPixel=function(n){if(this.mapCanvasProjection_){var r=new this.maps_.LatLng(n.lat,n.lng);return this.mapCanvasProjection_.fromLatLngToContainerPixel(r)}var i=this.fromLatLngToCenterPixel(n);return i.x-=this.transform_.worldSize*Math.round(i.x/this.transform_.worldSize),i.x+=this.transform_.width/2,i.y+=this.transform_.height/2,i},e.fromContainerPixelToLatLng=function(n){if(this.mapCanvasProjection_){var r=this.mapCanvasProjection_.fromContainerPixelToLatLng(n);return{lat:r.lat(),lng:r.lng()}}var i=$e({},n);i.x-=this.transform_.width/2,i.y-=this.transform_.height/2;var s=this.transform_.pointLocation(di.convert(i));return s.lng-=360*Math.round(s.lng/360),s},e.getWidth=function(){return this.transform_.width},e.getHeight=function(){return this.transform_.height},e.getZoom=function(){return this.transform_.zoom},e.getCenter=function(){return this.transform_.pointLocation({x:0,y:0})},e.getBounds=function(n,r){var i=n&&n[0]||0,s=n&&n[1]||0,o=n&&n[2]||0,a=n&&n[3]||0;if(this.getWidth()-s-a>0&&this.getHeight()-i-o>0){var l=this.transform_.pointLocation(di.convert({x:a-this.getWidth()/2,y:i-this.getHeight()/2})),u=this.transform_.pointLocation(di.convert({x:this.getWidth()/2-s,y:this.getHeight()/2-o})),c=[l.lat,l.lng,u.lat,u.lng,u.lat,l.lng,l.lat,u.lng];return r&&(c=c.map(function(h){return Math.round(h*r)/r})),c}return[0,0,0,0]},t}();function a1(t){if(window.requestAnimationFrame)return window.requestAnimationFrame(t);var e=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;return e?e(t):window.setTimeout(t,1e3/60)}var JN=Math.log2?Math.log2:function(t){return Math.log(t)/Math.LN2};function l1(t,e){return Object.keys(t).reduce(function(n,r){return e(t[r])&&(n[r]=t[r]),n},{})}var ri=function(t){if(t!==null&&typeof t=="object"){if(Object.keys(t).length===0)return!0}else if(t==null||t==="")return!0;return!1},ZN=Object.prototype.toString;function su(t){return typeof t=="number"||function(e){return!!e&&typeof e=="object"}(t)&&ZN.call(t)==="[object Number]"}var ou=null;function u1(){if(ou)return ou;if(typeof navigator<"u"){var t=navigator.userAgent.indexOf("MSIE")>-1,e=navigator.userAgent.indexOf("Firefox")>-1,n=navigator.userAgent.toLowerCase().indexOf("op")>-1,r=navigator.userAgent.indexOf("Chrome")>-1,i=navigator.userAgent.indexOf("Safari")>-1;return r&&i&&(i=!1),r&&n&&(r=!1),ou={isExplorer:t,isFirefox:e,isOpera:n,isChrome:r,isSafari:i}}return ou={isChrome:!0,isExplorer:!1,isFirefox:!1,isOpera:!1,isSafari:!1}}var c1=function(t){return Function.prototype.toString.call(t)};function Ho(t){if(!t||typeof t!="object")return!1;var e=typeof t.constructor=="function"?Object.getPrototypeOf(t):Object.prototype;if(e===null)return!0;var n=e.constructor;return typeof n=="function"&&n instanceof n&&c1(n)===c1(Object)}function Po(t,e,n,r){t.addEventListener(e,n,function(){var i=!1;try{var s=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{i=!1}return i}()?{capture:r,passive:!0}:r)}var Nn,zp=!(typeof window>"u"||!window.document||!window.document.createElement);Nn=zp?window:typeof self<"u"?self:void 0;var h1,Bp=typeof document<"u"&&document.attachEvent,f1=!1;if(zp&&!Bp){var eR=function(){var t=Nn.requestAnimationFrame||Nn.mozRequestAnimationFrame||Nn.webkitRequestAnimationFrame||function(e){return Nn.setTimeout(e,20)};return function(e){return t(e)}}(),tR=(h1=Nn.cancelAnimationFrame||Nn.mozCancelAnimationFrame||Nn.webkitCancelAnimationFrame||Nn.clearTimeout,function(t){return h1(t)}),Vp=function(t){var e=t.__resizeTriggers__,n=e.firstElementChild,r=e.lastElementChild,i=n.firstElementChild;r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,i.style.width=n.offsetWidth+1+"px",i.style.height=n.offsetHeight+1+"px",n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight},d1=function(t){var e=this;Vp(this),this.__resizeRAF__&&tR(this.__resizeRAF__),this.__resizeRAF__=eR(function(){(function(n){return n.offsetWidth!=n.__resizeLast__.width||n.offsetHeight!=n.__resizeLast__.height})(e)&&(e.__resizeLast__.width=e.offsetWidth,e.__resizeLast__.height=e.offsetHeight,e.__resizeListeners__.forEach(function(n){n.call(e,t)}))})},Xf=!1,Jf="",Hp="animationstart",Zf="Webkit Moz O ms".split(" "),nR="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");if(zp){var p1=document.createElement("fakeelement");if(p1.style.animationName!==void 0&&(Xf=!0),Xf===!1){for(var Do=0;Do<Zf.length;Do++)if(p1.style[Zf[Do]+"AnimationName"]!==void 0){Jf="-"+Zf[Do].toLowerCase()+"-",Hp=nR[Do],Xf=!0;break}}}var Wp="resizeanim",rR="@"+Jf+"keyframes "+Wp+" { from { opacity: 0; } to { opacity: 0; } } ",iR=Jf+"animation: 1ms "+Wp+"; "}var Vu=hr.createPortal!==void 0,m1=Vu?hr.createPortal:hr.unstable_renderSubtreeIntoContainer,au=function(t){return Ho(t)?t:{lat:t[0],lng:t[1]}},g1=function(t,e){return e<t?t:e},ha=function(t){function e(r){var i;if((i=t.call(this,r)||this)._getMinZoom=function(){if(i.geoService_.getWidth()>0||i.geoService_.getHeight()>0){var o=Math.ceil(i.geoService_.getWidth()/256)+2,a=Math.ceil(i.geoService_.getHeight()/256)+2,l=Math.max(o,a);return Math.ceil(JN(l))}return 3},i._computeMinZoom=function(o){return ri(o)?i._getMinZoom():o},i._mapDomResizeCallback=function(){if(i.resetSizeOnIdle_=!0,i.maps_){var o=i.props.center||i.props.defaultCenter,a=i.map_.getCenter();i.maps_.event.trigger(i.map_,"resize"),i.map_.setCenter(i.props.resetBoundsOnResize?o:a)}},i._setLayers=function(o){o.forEach(function(a){i.layers_[a]=new i.maps_[a],i.layers_[a].setMap(i.map_)})},i._renderPortal=function(){return G.createElement(xc,{experimental:i.props.experimental,onChildClick:i._onChildClick,onChildMouseDown:i._onChildMouseDown,onChildMouseEnter:i._onChildMouseEnter,onChildMouseLeave:i._onChildMouseLeave,geoService:i.geoService_,insideMapPanes:!0,distanceToMouse:i.props.distanceToMouse,getHoverDistance:i._getHoverDistance,dispatcher:i.markersDispatcher_})},i._initMap=function(){if(!i.initialized_){i.initialized_=!0;var o=au(i.props.center||i.props.defaultCenter);i.geoService_.setView(o,i.props.zoom||i.props.defaultZoom,0),i._onBoundsChanged();var a=$e({},i.props.apiKey&&{key:i.props.apiKey},i.props.bootstrapURLKeys);i.props.googleMapLoader(a,i.props.heatmapLibrary).then(function(l){if(i.mounted_){var u,c,h=i.geoService_.getCenter(),f={zoom:i.props.zoom||i.props.defaultZoom,center:new l.LatLng(h.lat,h.lng)};i.props.heatmap.positions&&(Object.assign(Qf(i),{heatmap:(u=l,c=i.props.heatmap,new u.visualization.HeatmapLayer({data:c.positions.reduce(function(I,M){var $=M.weight,ie=$===void 0?1:$;return I.push({location:new u.LatLng(M.lat,M.lng),weight:ie}),I},[])}))}),function(I,M){var $=M.options,ie=$===void 0?{}:$;Object.keys(ie).map(function(de){return I.set(de,ie[de])})}(i.heatmap,i.props.heatmap));var d=l1(l,Ho),v=typeof i.props.options=="function"?i.props.options(d):i.props.options,y=!ri(i.props.draggable)&&{draggable:i.props.draggable},w=i._computeMinZoom(v.minZoom);i.minZoom_=w;var m=$e({},{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3},{minZoom:w},v,f);i.defaultDraggableOption_=ri(m.draggable)?i.defaultDraggableOption_:m.draggable;var p=$e({},m,y);p.minZoom=g1(p.minZoom,w);var g=new l.Map(hr.findDOMNode(i.googleMapDom_),p);i.map_=g,i.maps_=l,i._setLayers(i.props.layerTypes);var _=l.version.match(/^3\.(\d+)\./),E=_&&Number(_[1]),b=Qf(i),C=Object.assign(new l.OverlayView,{onAdd:function(){var I=typeof screen<"u"?screen.width+"px":"2000px",M=typeof screen<"u"?screen.height+"px":"2000px",$=document.createElement("div");if($.style.backgroundColor="transparent",$.style.position="absolute",$.style.left="0px",$.style.top="0px",$.style.width=I,$.style.height=M,b.props.overlayViewDivStyle){var ie=b.props.overlayViewDivStyle;typeof ie=="object"&&Object.keys(ie).forEach(function(de){$.style[de]=ie[de]})}this.getPanes().overlayMouseTarget.appendChild($),b.geoService_.setMapCanvasProjection(l,C.getProjection()),Vu?b.setState({overlay:$}):m1(b,b._renderPortal(),$,function(){return b.setState({overlay:$})})},onRemove:function(){var I=b.state.overlay;I&&!Vu&&hr.unmountComponentAtNode(I),b.setState({overlay:null})},draw:function(){if(b.updateCounter_++,b._onBoundsChanged(g,l,!b.props.debounced),b.googleApiLoadedCalled_||(b._onGoogleApiLoaded({map:g,maps:l,ref:b.googleMapDom_}),b.googleApiLoadedCalled_=!0),b.mouse_){var I=b.geoService_.fromContainerPixelToLatLng(b.mouse_);b.mouse_.lat=I.lat,b.mouse_.lng=I.lng}b._onChildMouseMove(),b.markersDispatcher_&&(b.markersDispatcher_.emit("kON_CHANGE"),b.fireMouseEventOnIdle_&&b.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"))}});i.overlay_=C,C.setMap(g),i.props.heatmap.positions&&i.heatmap.setMap(g),i.props.onTilesLoaded&&l.event.addListener(g,"tilesloaded",function(){b._onTilesLoaded()}),l.event.addListener(g,"zoom_changed",function(){b.geoService_.getZoom()!==g.getZoom()&&(b.zoomAnimationInProgress_||(b.zoomAnimationInProgress_=!0,b._onZoomAnimationStart(g.zoom)),E<32)&&(new Date().getTime()-i.zoomControlClickTime_<300?a1(function(){return a1(function(){b.updateCounter_++,b._onBoundsChanged(g,l)})}):(b.updateCounter_++,b._onBoundsChanged(g,l)))}),l.event.addListener(g,"idle",function(){if(i.resetSizeOnIdle_){i._setViewSize();var I=i._computeMinZoom(v.minZoom);I!==i.minZoom_&&(i.minZoom_=I,g.setOptions({minZoom:I})),i.resetSizeOnIdle_=!1}b.zoomAnimationInProgress_&&(b.zoomAnimationInProgress_=!1,b._onZoomAnimationEnd(g.zoom)),b.updateCounter_++,b._onBoundsChanged(g,l),b.dragTime_=0,b.markersDispatcher_&&b.markersDispatcher_.emit("kON_CHANGE")}),l.event.addListener(g,"mouseover",function(){b.mouseInMap_=!0}),l.event.addListener(g,"click",function(){b.mouseInMap_=!0}),l.event.addListener(g,"mouseout",function(){b.mouseInMap_=!1,b.mouse_=null,b.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")}),l.event.addListener(g,"drag",function(){b.dragTime_=new Date().getTime(),b._onDrag(g)}),l.event.addListener(g,"dragend",function(){var I=l.event.addListener(g,"idle",function(){l.event.removeListener(I),b._onDragEnd(g)})}),l.event.addListener(g,"maptypeid_changed",function(){b._onMapTypeIdChange(g.getMapTypeId())})}}).catch(function(l){throw i._onGoogleApiLoaded({map:null,maps:null,ref:i.googleMapDom_}),console.error(l),l})}},i._onGoogleApiLoaded=function(){var o;i.props.onGoogleApiLoaded&&(o=i.props).onGoogleApiLoaded.apply(o,arguments)},i._getHoverDistance=function(){return i.props.hoverDistance},i._onDrag=function(){var o;return i.props.onDrag&&(o=i.props).onDrag.apply(o,arguments)},i._onDragEnd=function(){var o;return i.props.onDragEnd&&(o=i.props).onDragEnd.apply(o,arguments)},i._onMapTypeIdChange=function(){var o;return i.props.onMapTypeIdChange&&(o=i.props).onMapTypeIdChange.apply(o,arguments)},i._onZoomAnimationStart=function(){var o;return i.props.onZoomAnimationStart&&(o=i.props).onZoomAnimationStart.apply(o,arguments)},i._onZoomAnimationEnd=function(){var o;return i.props.onZoomAnimationEnd&&(o=i.props).onZoomAnimationEnd.apply(o,arguments)},i._onTilesLoaded=function(){return i.props.onTilesLoaded&&i.props.onTilesLoaded()},i._onChildClick=function(){var o;if(i.props.onChildClick)return(o=i.props).onChildClick.apply(o,arguments)},i._onChildMouseDown=function(o,a){i.childMouseDownArgs_=[o,a],i.props.onChildMouseDown&&i.props.onChildMouseDown(o,a,$e({},i.mouse_))},i._onChildMouseUp=function(){var o;i.childMouseDownArgs_&&(i.props.onChildMouseUp&&(o=i.props).onChildMouseUp.apply(o,i.childMouseDownArgs_.concat([$e({},i.mouse_)])),i.childMouseDownArgs_=null,i.childMouseUpTime_=new Date().getTime())},i._onChildMouseMove=function(){var o;i.childMouseDownArgs_&&i.props.onChildMouseMove&&(o=i.props).onChildMouseMove.apply(o,i.childMouseDownArgs_.concat([$e({},i.mouse_)]))},i._onChildMouseEnter=function(){var o;if(i.props.onChildMouseEnter)return(o=i.props).onChildMouseEnter.apply(o,arguments)},i._onChildMouseLeave=function(){var o;if(i.props.onChildMouseLeave)return(o=i.props).onChildMouseLeave.apply(o,arguments)},i._setViewSize=function(){if(i.mounted_){if(document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement)i.geoService_.setViewSize(window.innerWidth,window.innerHeight);else{var o=hr.findDOMNode(i.googleMapDom_);i.geoService_.setViewSize(o.clientWidth,o.clientHeight)}i._onBoundsChanged()}},i._onWindowResize=function(){i.resetSizeOnIdle_=!0},i._onMapMouseMove=function(o){if(i.mouseInMap_){var a=new Date().getTime();a-i.mouseMoveTime_>50&&(i.boundingRect_=o.currentTarget.getBoundingClientRect()),i.mouseMoveTime_=a;var l=o.clientX-i.boundingRect_.left,u=o.clientY-i.boundingRect_.top;i.mouse_||(i.mouse_={x:0,y:0,lat:0,lng:0}),i.mouse_.x=l,i.mouse_.y=u;var c=i.geoService_.fromContainerPixelToLatLng(i.mouse_);i.mouse_.lat=c.lat,i.mouse_.lng=c.lng,i._onChildMouseMove(),a-i.dragTime_<100?i.fireMouseEventOnIdle_=!0:(i.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE"),i.fireMouseEventOnIdle_=!1)}},i._onClick=function(){var o;return i.props.onClick&&!i.childMouseDownArgs_&&new Date().getTime()-i.childMouseUpTime_>300&&i.dragTime_===0&&(o=i.props).onClick.apply(o,arguments)},i._onMapClick=function(o){i.markersDispatcher_&&(i._onMapMouseMove(o),new Date().getTime()-i.dragTime_>100&&(i.mouse_&&i._onClick($e({},i.mouse_,{event:o})),i.markersDispatcher_.emit("kON_CLICK",o)))},i._onMapMouseDownNative=function(o){i.mouseInMap_&&i._onMapMouseDown(o)},i._onMapMouseDown=function(o){i.markersDispatcher_&&new Date().getTime()-i.dragTime_>100&&(i._onMapMouseMove(o),i.markersDispatcher_.emit("kON_MDOWN",o))},i._onMapMouseDownCapture=function(){u1().isChrome&&(i.zoomControlClickTime_=new Date().getTime())},i._onKeyDownCapture=function(){u1().isChrome&&(i.zoomControlClickTime_=new Date().getTime())},i._isCenterDefined=function(o){return o&&(Ho(o)&&su(o.lat)&&su(o.lng)||o.length===2&&su(o[0])&&su(o[1]))},i._onBoundsChanged=function(o,a,l){if(o){var u=o.getCenter();i.geoService_.setView([u.lat(),u.lng()],o.getZoom(),0)}if((i.props.onChange||i.props.onBoundsChange)&&i.geoService_.canProject()){var c=i.geoService_.getZoom(),h=i.geoService_.getBounds(),f=i.geoService_.getCenter();if(!function(v,y,w){if(v&&y){for(var m=0;m!==v.length;++m)if(Math.abs(v[m]-y[m])>1e-5)return!1;return!0}return!1}(h,i.prevBounds_)&&l!==!1){var d=i.geoService_.getBounds(i.props.margin);i.props.onBoundsChange&&i.props.onBoundsChange(i.centerIsObject_?$e({},f):[f.lat,f.lng],c,h,d),i.props.onChange&&i.props.onChange({center:$e({},f),zoom:c,bounds:{nw:{lat:h[0],lng:h[1]},se:{lat:h[2],lng:h[3]},sw:{lat:h[4],lng:h[5]},ne:{lat:h[6],lng:h[7]}},marginBounds:{nw:{lat:d[0],lng:d[1]},se:{lat:d[2],lng:d[3]},sw:{lat:d[4],lng:d[5]},ne:{lat:d[6],lng:d[7]}},size:i.geoService_.hasSize()?{width:i.geoService_.getWidth(),height:i.geoService_.getHeight()}:{width:0,height:0}}),i.prevBounds_=h}}},i._registerChild=function(o){i.googleMapDom_=o},i.mounted_=!1,i.initialized_=!1,i.googleApiLoadedCalled_=!1,i.map_=null,i.maps_=null,i.prevBounds_=null,i.heatmap=null,i.layers_={},i.mouse_=null,i.mouseMoveTime_=0,i.boundingRect_=null,i.mouseInMap_=!0,i.dragTime_=0,i.fireMouseEventOnIdle_=!1,i.updateCounter_=0,i.markersDispatcher_=new VN(Qf(i)),i.geoService_=new XN(256),i.centerIsObject_=Ho(i.props.center),i.minZoom_=3,i.defaultDraggableOption_=!0,i.zoomControlClickTime_=0,i.childMouseDownArgs_=null,i.childMouseUpTime_=0,i.googleMapDom_=null,i._isCenterDefined(i.props.center||i.props.defaultCenter)){var s=au(i.props.center||i.props.defaultCenter);i.geoService_.setView(s,i.props.zoom||i.props.defaultZoom,0)}return i.zoomAnimationInProgress_=!1,i.state={overlay:null},i}Ih(e,t);var n=e.prototype;return n.componentDidMount=function(){var r=this;this.mounted_=!0,Po(window,"resize",this._onWindowResize,!1),Po(window,"keydown",this._onKeyDownCapture,!0);var i=hr.findDOMNode(this.googleMapDom_);i&&Po(i,"mousedown",this._onMapMouseDownNative,!0),Po(window,"mouseup",this._onChildMouseUp,!1);var s=$e({},this.props.apiKey&&{key:this.props.apiKey},this.props.bootstrapURLKeys);this.props.googleMapLoader(s,this.props.heatmapLibrary),setTimeout(function(){r._setViewSize(),r._isCenterDefined(r.props.center||r.props.defaultCenter)&&r._initMap()},0,this),this.props.resetBoundsOnResize&&function(o,a){if(o.parentNode===void 0){var l=document.createElement("div");o.parentNode=l}o=o.parentNode,Bp?o.attachEvent("onresize",a):(o.__resizeTriggers__||(getComputedStyle(o).position=="static"&&(o.style.position="relative"),function(){if(!f1){var u=(rR||"")+".resize-triggers { "+(iR||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',c=document.head||document.getElementsByTagName("head")[0],h=document.createElement("style");h.type="text/css",h.styleSheet?h.styleSheet.cssText=u:h.appendChild(document.createTextNode(u)),c.appendChild(h),f1=!0}}(),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=document.createElement("div")).className="resize-triggers",o.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',o.appendChild(o.__resizeTriggers__),Vp(o),Po(o,"scroll",d1,!0),Hp&&o.__resizeTriggers__.addEventListener(Hp,function(u){u.animationName==Wp&&Vp(o)})),o.__resizeListeners__.push(a))}(i,this._mapDomResizeCallback)},n.shouldComponentUpdate=function(r,i){return!Ft(ca(this.props,["draggable"]),ca(r,["draggable"]))||!Ft(this.state,i)},n.componentDidUpdate=function(r){var i=this;if(!this._isCenterDefined(r.center)&&this._isCenterDefined(this.props.center)&&setTimeout(function(){return i._initMap()},0),this.map_){var s=this.geoService_.getCenter();if(this._isCenterDefined(this.props.center)){var o=au(this.props.center),a=this._isCenterDefined(r.center)?au(r.center):null;(!a||Math.abs(o.lat-a.lat)+Math.abs(o.lng-a.lng)>1e-5)&&Math.abs(o.lat-s.lat)+Math.abs(o.lng-s.lng)>1e-5&&this.map_.panTo({lat:o.lat,lng:o.lng})}if(ri(this.props.zoom)||Math.abs(this.props.zoom-r.zoom)>0&&this.map_.setZoom(this.props.zoom),!ri(r.draggable)&&ri(this.props.draggable)?this.map_.setOptions({draggable:this.defaultDraggableOption_}):Ft(r.draggable,this.props.draggable)||this.map_.setOptions({draggable:this.props.draggable}),!ri(this.props.options)&&!Ft(r.options,this.props.options)){var l=l1(this.maps_,Ho),u=typeof this.props.options=="function"?this.props.options(l):this.props.options;if("minZoom"in(u=ca(u,["zoom","center","draggable"]))){var c=this._computeMinZoom(u.minZoom);u.minZoom=g1(u.minZoom,c)}this.map_.setOptions(u)}Ft(this.props.layerTypes,r.layerTypes)||(Object.keys(this.layers_).forEach(function(h){i.layers_[h].setMap(null),delete i.layers_[h]}),this._setLayers(this.props.layerTypes)),this.heatmap&&!Ft(this.props.heatmap.positions,r.heatmap.positions)&&this.heatmap.setData(this.props.heatmap.positions.map(function(h){return{location:new i.maps_.LatLng(h.lat,h.lng),weight:h.weight}})),this.heatmap&&!Ft(this.props.heatmap.options,r.heatmap.options)&&Object.keys(this.props.heatmap.options).forEach(function(h){i.heatmap.set(h,i.props.heatmap.options[h])})}this.markersDispatcher_.emit("kON_CHANGE"),Ft(this.props.hoverDistance,r.hoverDistance)||this.markersDispatcher_.emit("kON_MOUSE_POSITION_CHANGE")},n.componentWillUnmount=function(){this.mounted_=!1;var r,i,s=hr.findDOMNode(this.googleMapDom_);s&&s.removeEventListener("mousedown",this._onMapMouseDownNative,!0),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("keydown",this._onKeyDownCapture),window.removeEventListener("mouseup",this._onChildMouseUp,!1),this.props.resetBoundsOnResize&&(i=this._mapDomResizeCallback,r=(r=s).parentNode,Bp?r.detachEvent("onresize",i):(r.__resizeListeners__.splice(r.__resizeListeners__.indexOf(i),1),r.__resizeListeners__.length||(r.removeEventListener("scroll",d1),r.__resizeTriggers__=!r.removeChild(r.__resizeTriggers__)))),this.overlay_&&this.overlay_.setMap(null),this.maps_&&this.map_&&this.props.shouldUnregisterMapOnUnmount&&(this.map_.setOptions({scrollwheel:!1}),this.maps_.event.clearInstanceListeners(this.map_)),this.props.shouldUnregisterMapOnUnmount&&(this.map_=null,this.maps_=null),this.markersDispatcher_.dispose(),this.resetSizeOnIdle_=!1,this.props.shouldUnregisterMapOnUnmount&&(delete this.map_,delete this.markersDispatcher_)},n.render=function(){var r=this.state.overlay,i=r?null:G.createElement(GN,{experimental:this.props.experimental,onChildClick:this._onChildClick,onChildMouseDown:this._onChildMouseDown,onChildMouseEnter:this._onChildMouseEnter,onChildMouseLeave:this._onChildMouseLeave,geoService:this.geoService_,insideMapPanes:!1,distanceToMouse:this.props.distanceToMouse,getHoverDistance:this._getHoverDistance,dispatcher:this.markersDispatcher_});return G.createElement("div",{style:this.props.style,onMouseMove:this._onMapMouseMove,onMouseDownCapture:this._onMapMouseDownCapture,onClick:this._onMapClick},G.createElement(BN,{registerChild:this._registerChild}),Vu&&r&&m1(this._renderPortal(),r),i)},e}(S.Component);ha.propTypes={apiKey:A.string,bootstrapURLKeys:A.any,defaultCenter:A.oneOfType([A.array,A.shape({lat:A.number,lng:A.number})]),center:A.oneOfType([A.array,A.shape({lat:A.number,lng:A.number})]),defaultZoom:A.number,zoom:A.number,onBoundsChange:A.func,onChange:A.func,onClick:A.func,onChildClick:A.func,onChildMouseDown:A.func,onChildMouseUp:A.func,onChildMouseMove:A.func,onChildMouseEnter:A.func,onChildMouseLeave:A.func,onZoomAnimationStart:A.func,onZoomAnimationEnd:A.func,onDrag:A.func,onDragEnd:A.func,onMapTypeIdChange:A.func,onTilesLoaded:A.func,options:A.any,distanceToMouse:A.func,hoverDistance:A.number,debounced:A.bool,margin:A.array,googleMapLoader:A.any,onGoogleApiLoaded:A.func,yesIWantToUseGoogleMapApiInternals:A.bool,draggable:A.bool,style:A.any,resetBoundsOnResize:A.bool,layerTypes:A.arrayOf(A.string),shouldUnregisterMapOnUnmount:A.bool},ha.defaultProps={distanceToMouse:function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},hoverDistance:30,debounced:!0,options:function(){return{overviewMapControl:!1,streetViewControl:!1,rotateControl:!0,mapTypeControl:!1,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}],minZoom:3}},googleMapLoader:o1,yesIWantToUseGoogleMapApiInternals:!1,style:{width:"100%",height:"100%",margin:0,padding:0,position:"relative"},layerTypes:[],heatmap:{},heatmapLibrary:!1,shouldUnregisterMapOnUnmount:!0},ha.googleMapLoader=o1;const sR=G.memo(()=>k.jsx("div",{className:"lightning-icon",children:k.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"15",height:"15",children:k.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})})})),lb=({onClick:t,highlighted:e})=>k.jsx("div",{onClick:()=>t({name:"",coordinates:[0,0]}),className:`custom-marker ${e?"highlighted":""}`,children:k.jsx(sR,{})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},oR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,d=u&63;l||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ub(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new aR;const f=s<<2|a>>4;if(r.push(f),u!==64){const d=a<<4&240|u>>2;if(r.push(d),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lR=function(t){const e=ub(t);return cb.encodeByteArray(e,!0)},Ac=function(t){return lR(t).replace(/\./g,"")},hb=function(t){try{return cb.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=()=>uR().__FIREBASE_DEFAULTS__,hR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hb(t[1]);return e&&JSON.parse(e)},Th=()=>{try{return cR()||hR()||fR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fb=t=>{var e,n;return(n=(e=Th())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},db=t=>{const e=fb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pb=()=>{var t;return(t=Th())===null||t===void 0?void 0:t.config},mb=t=>{var e;return(e=Th())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ac(JSON.stringify(n)),Ac(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function mR(){var t;const e=(t=Th())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yR(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wR(){try{return typeof indexedDB=="object"}catch{return!1}}function kR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_R,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ER(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function ER(t,e){return t.replace(bR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bR=/\{\$([^}]+)}/g;function SR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v1(s)&&v1(o)){if(!Nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ko(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IR(t,e){const n=new TR(t,e);return n.subscribe.bind(n)}class TR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");CR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ed),i.error===void 0&&(i.error=ed),i.complete===void 0&&(i.complete=ed);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function CR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ed(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NR(e))try{this.getOrInitializeService({instanceIdentifier:li})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=li){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=li){return this.instances.has(e)}getOptions(e=li){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=li){return this.component?this.component.multipleInstances?e:li:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AR(t){return t===li?void 0:t}function NR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const OR={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},PR=ee.INFO,DR={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},LR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kg{constructor(e){this.name=e,this._logLevel=PR,this._logHandler=LR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const MR=(t,e)=>e.some(n=>t instanceof n);let y1,w1;function $R(){return y1||(y1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jR(){return w1||(w1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vb=new WeakMap,Kp=new WeakMap,yb=new WeakMap,td=new WeakMap,qg=new WeakMap;function FR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vb.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function UR(t){if(Kp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kp.set(t,e)}let qp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yb.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zR(t){qp=t(qp)}function BR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nd(this),e,...n);return yb.set(r,e.sort?e.sort():[e]),Or(r)}:jR().includes(t)?function(...e){return t.apply(nd(this),e),Or(vb.get(this))}:function(...e){return Or(t.apply(nd(this),e))}}function VR(t){return typeof t=="function"?BR(t):(t instanceof IDBTransaction&&UR(t),MR(t,$R())?new Proxy(t,qp):t)}function Or(t){if(t instanceof IDBRequest)return FR(t);if(td.has(t))return td.get(t);const e=VR(t);return e!==t&&(td.set(t,e),qg.set(e,t)),e}const nd=t=>qg.get(t);function HR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Or(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Or(o.result),l.oldVersion,l.newVersion,Or(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const WR=["get","getKey","getAll","getAllKeys","count"],KR=["put","add","delete","clear"],rd=new Map;function k1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rd.get(e))return rd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=KR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return rd.set(e,s),s}zR(t=>({...t,get:(e,n,r)=>k1(e,n)||t.get(e,n,r),has:(e,n)=>!!k1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gp="@firebase/app",_1="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Kg("@firebase/app"),QR="@firebase/app-compat",YR="@firebase/analytics-compat",XR="@firebase/analytics",JR="@firebase/app-check-compat",ZR="@firebase/app-check",eO="@firebase/auth",tO="@firebase/auth-compat",nO="@firebase/database",rO="@firebase/database-compat",iO="@firebase/functions",sO="@firebase/functions-compat",oO="@firebase/installations",aO="@firebase/installations-compat",lO="@firebase/messaging",uO="@firebase/messaging-compat",cO="@firebase/performance",hO="@firebase/performance-compat",fO="@firebase/remote-config",dO="@firebase/remote-config-compat",pO="@firebase/storage",mO="@firebase/storage-compat",gO="@firebase/firestore",vO="@firebase/firestore-compat",yO="firebase",wO="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="[DEFAULT]",kO={[Gp]:"fire-core",[QR]:"fire-core-compat",[XR]:"fire-analytics",[YR]:"fire-analytics-compat",[ZR]:"fire-app-check",[JR]:"fire-app-check-compat",[eO]:"fire-auth",[tO]:"fire-auth-compat",[nO]:"fire-rtdb",[rO]:"fire-rtdb-compat",[iO]:"fire-fn",[sO]:"fire-fn-compat",[oO]:"fire-iid",[aO]:"fire-iid-compat",[lO]:"fire-fcm",[uO]:"fire-fcm-compat",[cO]:"fire-perf",[hO]:"fire-perf-compat",[fO]:"fire-rc",[dO]:"fire-rc-compat",[pO]:"fire-gcs",[mO]:"fire-gcs-compat",[gO]:"fire-fst",[vO]:"fire-fst-compat","fire-js":"fire-js",[yO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=new Map,Yp=new Map;function _O(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if(Yp.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;Yp.set(e,t);for(const n of Rc.values())_O(n,t);return!0}function mo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pr=new qi("app","Firebase",EO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=wO;function wb(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qp,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Pr.create("bad-app-name",{appName:String(i)});if(n||(n=pb()),!n)throw Pr.create("no-options");const s=Rc.get(i);if(s){if(Nc(n,s.options)&&Nc(r,s.config))return s;throw Pr.create("duplicate-app",{appName:i})}const o=new RR(i);for(const l of Yp.values())o.addComponent(l);const a=new bO(n,r,o);return Rc.set(i,a),a}function Gg(t=Qp){const e=Rc.get(t);if(!e&&t===Qp&&pb())return wb();if(!e)throw Pr.create("no-app",{appName:t});return e}function Tt(t,e,n){var r;let i=(r=kO[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(a.join(" "));return}an(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="firebase-heartbeat-database",IO=1,za="firebase-heartbeat-store";let id=null;function kb(){return id||(id=HR(SO,IO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(za)}}}).catch(t=>{throw Pr.create("idb-open",{originalErrorMessage:t.message})})),id}async function TO(t){try{return await(await kb()).transaction(za).objectStore(za).get(_b(t))}catch(e){if(e instanceof cn)Pi.warn(e.message);else{const n=Pr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function E1(t,e){try{const r=(await kb()).transaction(za,"readwrite");await r.objectStore(za).put(e,_b(t)),await r.done}catch(n){if(n instanceof cn)Pi.warn(n.message);else{const r=Pr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function _b(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=1024,xO=30*24*60*60*1e3;class AO{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=b1();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=xO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=b1(),{heartbeatsToSend:n,unsentEntries:r}=NO(this._heartbeatsCache.heartbeats),i=Ac(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function b1(){return new Date().toISOString().substring(0,10)}function NO(t,e=CO){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),S1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),S1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wR()?kR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return E1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return E1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function S1(t){return Ac(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(t){an(new Gt("platform-logger",e=>new qR(e),"PRIVATE")),an(new Gt("heartbeat",e=>new AO(e),"PRIVATE")),Tt(Gp,_1,t),Tt(Gp,_1,"esm2017"),Tt("fire-js","")}OO("");var PO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Qg=Qg||{},W=PO||self;function Ch(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ml(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DO(t){return Object.prototype.hasOwnProperty.call(t,sd)&&t[sd]||(t[sd]=++LO)}var sd="closure_uid_"+(1e9*Math.random()>>>0),LO=0;function MO(t,e,n){return t.call.apply(t.bind,arguments)}function $O(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=MO:st=$O,st.apply(null,arguments)}function lu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yr(){this.s=this.s,this.o=this.o}var jO=0;Yr.prototype.s=!1;Yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),jO!=0)&&DO(this)};Yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Eb=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function I1(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ch(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var FO=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",()=>{},e),W.removeEventListener("test",()=>{},e)}catch{}return t}();function Ba(t){return/^[\s\xa0]*$/.test(t)}function xh(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function pn(t){return xh().indexOf(t)!=-1}function Xg(t){return Xg[" "](t),t}Xg[" "]=function(){};function UO(t,e){var n=OP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var zO=pn("Opera"),Ws=pn("Trident")||pn("MSIE"),bb=pn("Edge"),Xp=bb||Ws,Sb=pn("Gecko")&&!(xh().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge"))&&!(pn("Trident")||pn("MSIE"))&&!pn("Edge"),BO=xh().toLowerCase().indexOf("webkit")!=-1&&!pn("Edge");function Ib(){var t=W.document;return t?t.documentMode:void 0}var Jp;e:{var od="",ad=function(){var t=xh();if(Sb)return/rv:([^\);]+)(\)|;)/.exec(t);if(bb)return/Edge\/([\d\.]+)/.exec(t);if(Ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BO)return/WebKit\/(\S+)/.exec(t);if(zO)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ad&&(od=ad?ad[1]:""),Ws){var ld=Ib();if(ld!=null&&ld>parseFloat(od)){Jp=String(ld);break e}}Jp=od}var Zp;if(W.document&&Ws){var T1=Ib();Zp=T1||parseInt(Jp,10)||void 0}else Zp=void 0;var VO=Zp;function Va(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Sb){e:{try{Xg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Va.$.h.call(this)}}Be(Va,ot);var HO={2:"touch",3:"pen",4:"mouse"};Va.prototype.h=function(){Va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var gl="closure_listenable_"+(1e6*Math.random()|0),WO=0;function KO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++WO,this.fa=this.ia=!1}function Ah(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function qO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Tb(t){const e={};for(const n in t)e[n]=t[n];return e}const C1="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cb(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<C1.length;s++)n=C1[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Nh(t){this.src=t,this.g={},this.h=0}Nh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=tm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new KO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function em(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Eb(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ah(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Zg="closure_lm_"+(1e6*Math.random()|0),ud={};function xb(t,e,n,r,i){if(r&&r.once)return Nb(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)xb(t,e[s],n,r,i);return null}return n=nv(n),t&&t[gl]?t.O(e,n,ml(r)?!!r.capture:!!r,i):Ab(t,e,n,!1,r,i)}function Ab(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ml(i)?!!i.capture:!!i,a=tv(t);if(a||(t[Zg]=a=new Nh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ob(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GO(){function t(n){return e.call(t.src,t.listener,n)}const e=QO;return t}function Nb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Nb(t,e[s],n,r,i);return null}return n=nv(n),t&&t[gl]?t.P(e,n,ml(r)?!!r.capture:!!r,i):Ab(t,e,n,!0,r,i)}function Rb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Rb(t,e[s],n,r,i);else r=ml(r)?!!r.capture:!!r,n=nv(n),t&&t[gl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=tm(s,n,r,i),-1<n&&(Ah(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=tv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tm(e,n,r,i)),(n=-1<t?e[t]:null)&&ev(n))}function ev(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[gl])em(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ob(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tv(e))?(em(n,t),n.h==0&&(n.src=null,e[Zg]=null)):Ah(t)}}}function Ob(t){return t in ud?ud[t]:ud[t]="on"+t}function QO(t,e){if(t.fa)t=!0;else{e=new Va(e,this);var n=t.listener,r=t.la||t.src;t.ia&&ev(t),t=n.call(r,e)}return t}function tv(t){return t=t[Zg],t instanceof Nh?t:null}var cd="__closure_events_fn_"+(1e9*Math.random()>>>0);function nv(t){return typeof t=="function"?t:(t[cd]||(t[cd]=function(e){return t.handleEvent(e)}),t[cd])}function ze(){Yr.call(this),this.i=new Nh(this),this.S=this,this.J=null}Be(ze,Yr);ze.prototype[gl]=!0;ze.prototype.removeEventListener=function(t,e,n,r){Rb(this,t,e,n,r)};function Ge(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),Cb(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=uu(o,r,!0,e)&&i}if(o=e.g=t,i=uu(o,r,!0,e)&&i,i=uu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=uu(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ah(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function uu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&em(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var rv=W.JSON.stringify;class YO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function XO(){var t=iv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class JO{constructor(){this.h=this.g=null}add(e,n){const r=Pb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Pb=new YO(()=>new ZO,t=>t.reset());class ZO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tP(t){W.setTimeout(()=>{throw t},0)}let Ha,Wa=!1,iv=new JO,Db=()=>{const t=W.Promise.resolve(void 0);Ha=()=>{t.then(nP)}};var nP=()=>{for(var t;t=XO();){try{t.h.call(t.g)}catch(n){tP(n)}var e=Pb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wa=!1};function Rh(t,e){ze.call(this),this.h=t||1,this.g=e||W,this.j=st(this.qb,this),this.l=Date.now()}Be(Rh,ze);R=Rh.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ge(this,"tick"),this.ga&&(sv(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){Rh.$.N.call(this),sv(this),delete this.g};function ov(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Lb(t){t.g=ov(()=>{t.g=null,t.i&&(t.i=!1,Lb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rP extends Yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lb(this)}N(){super.N(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ka(t){Yr.call(this),this.h=t,this.g={}}Be(Ka,Yr);var x1=[];function Mb(t,e,n,r){Array.isArray(n)||(n&&(x1[0]=n.toString()),n=x1);for(var i=0;i<n.length;i++){var s=xb(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function $b(t){Jg(t.g,function(e,n){this.g.hasOwnProperty(n)&&ev(e)},t),t.g={}}Ka.prototype.N=function(){Ka.$.N.call(this),$b(this)};Ka.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oh(){this.g=!0}Oh.prototype.Ea=function(){this.g=!1};function iP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ks(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aP(t,n)+(r?" "+r:"")})}function oP(t,e){t.info(function(){return"TIMEOUT: "+e})}Oh.prototype.info=function(){};function aP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rv(n)}catch{return e}}var Qi={},A1=null;function Ph(){return A1=A1||new ze}Qi.Ta="serverreachability";function jb(t){ot.call(this,Qi.Ta,t)}Be(jb,ot);function qa(t){const e=Ph();Ge(e,new jb(e))}Qi.STAT_EVENT="statevent";function Fb(t,e){ot.call(this,Qi.STAT_EVENT,t),this.stat=e}Be(Fb,ot);function mt(t){const e=Ph();Ge(e,new Fb(e,t))}Qi.Ua="timingevent";function Ub(t,e){ot.call(this,Qi.Ua,t),this.size=e}Be(Ub,ot);function vl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Dh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function av(){}av.prototype.h=null;function N1(t){return t.h||(t.h=t.i())}function Bb(){}var yl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lv(){ot.call(this,"d")}Be(lv,ot);function uv(){ot.call(this,"c")}Be(uv,ot);var nm;function Lh(){}Be(Lh,av);Lh.prototype.g=function(){return new XMLHttpRequest};Lh.prototype.i=function(){return{}};nm=new Lh;function wl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ka(this),this.P=lP,t=Xp?125:void 0,this.V=new Rh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Vb}function Vb(){this.i=null,this.g="",this.h=!1}var lP=45e3,rm={},Oc={};R=wl.prototype;R.setTimeout=function(t){this.P=t};function im(t,e,n){t.L=1,t.v=$h(Gn(e)),t.s=n,t.S=!0,Hb(t,null)}function Hb(t,e){t.G=Date.now(),kl(t),t.A=Gn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Jb(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Vb,t.g=wS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rP(st(t.Pa,t,t.g),t.O)),Mb(t.U,t.g,"readystatechange",t.nb),e=t.I?Tb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),qa(),iP(t.j,t.u,t.A,t.m,t.W,t.s)}R.nb=function(t){t=t.target;const e=this.M;e&&mn(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const c=mn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Xp||this.g&&(this.h.h||this.g.ja()||D1(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?qa(3):qa(2)),Mh(this);var n=this.g.da();this.ca=n;t:if(Wb(this)){var r=D1(this.g);t="";var i=r.length,s=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pi(this),fa(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ba(a)){var u=a;break t}}u=null}if(n=u)ks(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sm(this,n);else{this.i=!1,this.o=3,mt(12),pi(this),fa(this);break e}}this.S?(Kb(this,c,o),Xp&&this.i&&c==3&&(Mb(this.U,this.V,"tick",this.mb),this.V.start())):(ks(this.j,this.m,o,null),sm(this,o)),c==4&&pi(this),this.i&&!this.J&&(c==4?mS(this.l,this):(this.i=!1,kl(this)))}else AP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,mt(12)):(this.o=0,mt(13)),pi(this),fa(this)}}}catch{}finally{}};function Wb(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Kb(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=uP(t,n),i==Oc){e==4&&(t.o=4,mt(14),r=!1),ks(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rm){t.o=4,mt(15),ks(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ks(t.j,t.m,i,null),sm(t,i);Wb(t)&&i!=Oc&&i!=rm&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mv(e),e.M=!0,mt(11))):(ks(t.j,t.m,n,"[Invalid Chunked Response]"),pi(t),fa(t))}R.mb=function(){if(this.g){var t=mn(this.g),e=this.g.ja();this.C<e.length&&(Mh(this),Kb(this,t,e),this.i&&t!=4&&kl(this))}};function uP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Oc:(n=Number(e.substring(n,r)),isNaN(n)?rm:(r+=1,r+n>e.length?Oc:(e=e.slice(r,r+n),t.C=r+n,e)))}R.cancel=function(){this.J=!0,pi(this)};function kl(t){t.Y=Date.now()+t.P,qb(t,t.P)}function qb(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=vl(st(t.lb,t),e)}function Mh(t){t.B&&(W.clearTimeout(t.B),t.B=null)}R.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oP(this.j,this.A),this.L!=2&&(qa(),mt(17)),pi(this),this.o=2,fa(this)):qb(this,this.Y-t)};function fa(t){t.l.H==0||t.J||mS(t.l,t)}function pi(t){Mh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sv(t.V),$b(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||om(n.i,t))){if(!t.K&&om(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Lc(n),Uh(n);else break e;pv(n),mt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=vl(st(n.ib,n),6e3));if(1>=tS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else mi(n,11)}else if((t.K||n.g==t)&&Lc(n),!Ba(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const v=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cv(s,s.h),s.h=null))}if(r.F){const y=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,le(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=yS(r,r.J?r.pa:null,r.Y),o.K){nS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Mh(a),kl(a)),r.g=o}else dS(r);0<n.j.length&&zh(n)}else u[0]!="stop"&&u[0]!="close"||mi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?mi(n,7):dv(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}qa(4)}catch{}}function cP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ch(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ch(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Gb(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ch(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hP(t),r=cP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Qb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function bi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof bi){this.h=t.h,Pc(this,t.j),this.s=t.s,this.g=t.g,Dc(this,t.m),this.l=t.l;var e=t.i,n=new Ga;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),R1(this,n),this.o=t.o}else t&&(e=String(t).match(Qb))?(this.h=!1,Pc(this,e[1]||"",!0),this.s=qo(e[2]||""),this.g=qo(e[3]||"",!0),Dc(this,e[4]),this.l=qo(e[5]||"",!0),R1(this,e[6]||"",!0),this.o=qo(e[7]||"")):(this.h=!1,this.i=new Ga(null,this.h))}bi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Go(e,O1,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Go(e,O1,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Go(n,n.charAt(0)=="/"?mP:pP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Go(n,vP)),t.join("")};function Gn(t){return new bi(t)}function Pc(t,e,n){t.j=n?qo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Dc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function R1(t,e,n){e instanceof Ga?(t.i=e,yP(t.i,t.h)):(n||(e=Go(e,gP)),t.i=new Ga(e,t.h))}function le(t,e,n){t.i.set(e,n)}function $h(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Go(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var O1=/[#\/\?@]/g,pP=/[#\?:]/g,mP=/[#\?]/g,gP=/[#\?@]/g,vP=/#/g;function Ga(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xr(t){t.g||(t.g=new Map,t.h=0,t.i&&fP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Ga.prototype;R.add=function(t,e){Xr(this),this.i=null,t=go(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Yb(t,e){Xr(t),e=go(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xb(t,e){return Xr(t),e=go(t,e),t.g.has(e)}R.forEach=function(t,e){Xr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){Xr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){Xr(this);let e=[];if(typeof t=="string")Xb(this,t)&&(e=e.concat(this.g.get(go(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return Xr(this),this.i=null,t=go(this,t),Xb(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Jb(t,e,n){Yb(t,e),0<n.length&&(t.i=null,t.g.set(go(t,e),Yg(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function go(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yP(t,e){e&&!t.j&&(Xr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Yb(this,r),Jb(this,i,n))},t)),t.j=e}var wP=class{constructor(t,e){this.g=t,this.map=e}};function Zb(t){this.l=t||kP,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ka&&W.g.Ka()&&W.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kP=10;function eS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function tS(t){return t.h?1:t.g?t.g.size:0}function om(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cv(t,e){t.g?t.g.add(e):t.h=e}function nS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Zb.prototype.cancel=function(){if(this.i=rS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function rS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yg(t.i)}var _P=class{stringify(t){return W.JSON.stringify(t,void 0)}parse(t){return W.JSON.parse(t,void 0)}};function EP(){this.g=new _P}function bP(t,e,n){const r=n||"";try{Gb(t,function(i,s){let o=i;ml(i)&&(o=rv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SP(t,e){const n=new Oh;if(W.Image){const r=new Image;r.onload=lu(cu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lu(cu,n,r,"TestLoadImage: error",!1,e),r.onabort=lu(cu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lu(cu,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function cu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function _l(t){this.l=t.fc||null,this.j=t.ob||!1}Be(_l,av);_l.prototype.g=function(){return new jh(this.l,this.j)};_l.prototype.i=function(t){return function(){return t}}({});function jh(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(jh,ze);var hv=0;R=jh.prototype;R.open=function(t,e){if(this.readyState!=hv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qa(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||W).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,El(this)),this.readyState=hv};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;iS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function iS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?El(this):Qa(this),this.readyState==3&&iS(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,El(this))};R.Ya=function(t){this.g&&(this.response=t,El(this))};R.ka=function(){this.g&&El(this)};function El(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qa(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(jh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var IP=W.JSON.parse;function Ee(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=sS,this.L=this.M=!1}Be(Ee,ze);var sS="",TP=/^https?$/i,CP=["POST","PUT"];R=Ee.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nm.g(),this.C=this.u?N1(this.u):N1(nm),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){P1(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=Eb(CP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{lS(this),0<this.B&&((this.L=xP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=ov(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){P1(this,s)}};function xP(t){return Ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Qg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ge(this,"timeout"),this.abort(8))};function P1(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,oS(t),Fh(t)}function oS(t){t.F||(t.F=!0,Ge(t,"complete"),Ge(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ge(this,"complete"),Ge(this,"abort"),Fh(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fh(this,!0)),Ee.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?aS(this):this.kb())};R.kb=function(){aS(this)};function aS(t){if(t.h&&typeof Qg<"u"&&(!t.C[1]||mn(t)!=4||t.da()!=2)){if(t.v&&mn(t)==4)ov(t.La,0,t);else if(Ge(t,"readystatechange"),mn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Qb)[1]||null;!i&&W.self&&W.self.location&&(i=W.self.location.protocol.slice(0,-1)),r=!TP.test(i?i.toLowerCase():"")}n=r}if(n)Ge(t,"complete"),Ge(t,"success");else{t.m=6;try{var s=2<mn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",oS(t)}}finally{Fh(t)}}}}function Fh(t,e){if(t.g){lS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ge(t,"ready");try{n.onreadystatechange=r}catch{}}}function lS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function mn(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),IP(e)}};function D1(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case sS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function AP(t){const e={};t=(t.g&&2<=mn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ba(t[r]))continue;var n=eP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}qO(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function uS(t){let e="";return Jg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function fv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=uS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function Lo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function cS(t){this.Ga=0,this.j=[],this.l=new Oh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Lo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Lo("baseRetryDelayMs",5e3,t),this.hb=Lo("retryDelaySeedMs",1e4,t),this.eb=Lo("forwardChannelMaxRetries",2,t),this.xa=Lo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Zb(t&&t.concurrentRequestLimit),this.Ja=new EP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=cS.prototype;R.ra=8;R.H=1;function dv(t){if(hS(t),t.H==3){var e=t.W++,n=Gn(t.I);if(le(n,"SID",t.K),le(n,"RID",e),le(n,"TYPE","terminate"),bl(t,n),e=new wl(t,t.l,e),e.L=2,e.v=$h(Gn(n)),n=!1,W.navigator&&W.navigator.sendBeacon)try{n=W.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=wS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),kl(e)}vS(t)}function Uh(t){t.g&&(mv(t),t.g.cancel(),t.g=null)}function hS(t){Uh(t),t.u&&(W.clearTimeout(t.u),t.u=null),Lc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function zh(t){if(!eS(t.i)&&!t.m){t.m=!0;var e=t.Na;Ha||Db(),Wa||(Ha(),Wa=!0),iv.add(e,t),t.C=0}}function NP(t,e){return tS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=vl(st(t.Na,t,e),gS(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Tb(s),Cb(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=fS(this,i,e),n=Gn(this.I),le(n,"RID",t),le(n,"CVER",22),this.F&&le(n,"X-HTTP-Session-Id",this.F),bl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(uS(s)))+"&"+e:this.o&&fv(n,this.o,s)),cv(this.i,i),this.bb&&le(n,"TYPE","init"),this.P?(le(n,"$req",e),le(n,"SID","null"),i.aa=!0,im(i,n,null)):im(i,n,e),this.H=2}}else this.H==3&&(t?L1(this,t):this.j.length==0||eS(this.i)||L1(this))};function L1(t,e){var n;e?n=e.m:n=t.W++;const r=Gn(t.I);le(r,"SID",t.K),le(r,"RID",n),le(r,"AID",t.V),bl(t,r),t.o&&t.s&&fv(r,t.o,t.s),n=new wl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=fS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cv(t.i,n),im(n,r,e)}function bl(t,e){t.na&&Jg(t.na,function(n,r){le(e,r,n)}),t.h&&Gb({},function(n,r){le(e,r,n)})}function fS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{bP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function dS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ha||Db(),Wa||(Ha(),Wa=!0),iv.add(e,t),t.A=0}}function pv(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=vl(st(t.Ma,t),gS(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,pS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=vl(st(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),Uh(this),pS(this))};function mv(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function pS(t){t.g=new wl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Gn(t.wa);le(e,"RID","rpc"),le(e,"SID",t.K),le(e,"AID",t.V),le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&le(e,"TO",t.qa),le(e,"TYPE","xmlhttp"),bl(t,e),t.o&&t.s&&fv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=$h(Gn(e)),n.s=null,n.S=!0,Hb(n,t)}R.ib=function(){this.v!=null&&(this.v=null,Uh(this),pv(this),mt(19))};function Lc(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function mS(t,e){var n=null;if(t.g==e){Lc(t),mv(t),t.g=null;var r=2}else if(om(t.i,e))n=e.F,nS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Ph(),Ge(r,new Ub(r,n)),zh(t)}else dS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&NP(t,e)||r==2&&pv(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}}function gS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function mi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new bi("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Pc(n,"https"),$h(n)),SP(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),vS(t),hS(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function vS(t){if(t.H=0,t.ma=[],t.h){const e=rS(t.i);(e.length!=0||t.j.length!=0)&&(I1(t.ma,e),I1(t.ma,t.j),t.i.i.length=0,Yg(t.j),t.j.length=0),t.h.ya()}}function yS(t,e,n){var r=n instanceof bi?Gn(n):new bi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Dc(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new bi(null);r&&Pc(s,r),e&&(s.g=e),i&&Dc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&le(r,n,e),le(r,"VER",t.ra),bl(t,r),r}function wS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ee(new _l({ob:!0})):new Ee(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function kS(){}R=kS.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function Mc(){if(Ws&&!(10<=Number(VO)))throw Error("Environmental error: no available transport.")}Mc.prototype.g=function(t,e){return new Lt(t,e)};function Lt(t,e){ze.call(this),this.g=new cS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ba(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ba(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vo(this)}Be(Lt,ze);Lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=yS(t,null,t.Y),zh(t)};Lt.prototype.close=function(){dv(this.g)};Lt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rv(t),t=n);e.j.push(new wP(e.fb++,t)),e.H==3&&zh(e)};Lt.prototype.N=function(){this.g.h=null,delete this.j,dv(this.g),delete this.g,Lt.$.N.call(this)};function _S(t){lv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(_S,lv);function ES(){uv.call(this),this.status=1}Be(ES,uv);function vo(t){this.g=t}Be(vo,kS);vo.prototype.Ba=function(){Ge(this.g,"a")};vo.prototype.Aa=function(t){Ge(this.g,new _S(t))};vo.prototype.za=function(t){Ge(this.g,new ES)};vo.prototype.ya=function(){Ge(this.g,"b")};function RP(){this.blockSize=-1}function ln(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(ln,RP);ln.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function hd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}ln.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)hd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){hd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){hd(this,r),i=0;break}}this.h=i,this.i+=e};ln.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var OP={};function gv(t){return-128<=t&&128>t?UO(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function gn(t){if(isNaN(t)||!isFinite(t))return Rs;if(0>t)return Ke(gn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=am;return new re(e,0)}function bS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(bS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(e,8)),r=Rs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=gn(Math.pow(e,s)),r=r.R(s).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var am=4294967296,Rs=gv(0),lm=gv(1),M1=gv(16777216);R=re.prototype;R.ea=function(){if(Vt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:am+r)*e,e*=am}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if($n(this))return"0";if(Vt(this))return"-"+Ke(this).toString(t);for(var e=gn(Math.pow(t,6)),n=this,r="";;){var i=jc(n,e).g;n=$c(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,$n(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function $n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Vt(t){return t.h==-1}R.X=function(t){return t=$c(this,t),Vt(t)?-1:$n(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(lm)}R.abs=function(){return Vt(this)?Ke(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new re(n,n[n.length-1]&-2147483648?-1:0)};function $c(t,e){return t.add(Ke(e))}R.R=function(t){if($n(this)||$n(t))return Rs;if(Vt(this))return Vt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Vt(t))return Ke(this.R(Ke(t)));if(0>this.X(M1)&&0>t.X(M1))return gn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,hu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,hu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,hu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,hu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function hu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Mo(t,e){this.g=t,this.h=e}function jc(t,e){if($n(e))throw Error("division by zero");if($n(t))return new Mo(Rs,Rs);if(Vt(t))return e=jc(Ke(t),e),new Mo(Ke(e.g),Ke(e.h));if(Vt(e))return e=jc(t,Ke(e)),new Mo(Ke(e.g),e.h);if(30<t.g.length){if(Vt(t)||Vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lm,r=e;0>=r.X(t);)n=$1(n),r=$1(r);var i=rs(n,1),s=rs(r,1);for(r=rs(r,2),n=rs(n,2);!$n(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=rs(r,1),n=rs(n,1)}return e=$c(t,i.R(e)),new Mo(i,e)}for(i=Rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=gn(n),o=s.R(e);Vt(o)||0<o.X(t);)n-=r,s=gn(n),o=s.R(e);$n(s)&&(s=lm),i=i.add(s),t=$c(t,o)}return new Mo(i,t)}R.gb=function(t){return jc(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function $1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new re(i,t.h)}Mc.prototype.createWebChannel=Mc.prototype.g;Lt.prototype.send=Lt.prototype.u;Lt.prototype.open=Lt.prototype.m;Lt.prototype.close=Lt.prototype.close;Dh.NO_ERROR=0;Dh.TIMEOUT=8;Dh.HTTP_ERROR=6;zb.COMPLETE="complete";Bb.EventType=yl;yl.OPEN="a";yl.CLOSE="b";yl.ERROR="c";yl.MESSAGE="d";ze.prototype.listen=ze.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;ln.prototype.digest=ln.prototype.l;ln.prototype.reset=ln.prototype.reset;ln.prototype.update=ln.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=gn;re.fromString=bS;var PP=function(){return new Mc},DP=function(){return Ph()},fd=Dh,LP=zb,MP=Qi,j1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$P=_l,fu=Bb,jP=Ee,FP=ln,Os=re;const F1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Kg("@firebase/firestore");function U1(){return Di.logLevel}function F(t,...e){if(Di.logLevel<=ee.DEBUG){const n=e.map(vv);Di.debug(`Firestore (${yo}): ${t}`,...n)}}function Qn(t,...e){if(Di.logLevel<=ee.ERROR){const n=e.map(vv);Di.error(`Firestore (${yo}): ${t}`,...n)}}function Ks(t,...e){if(Di.logLevel<=ee.WARN){const n=e.map(vv);Di.warn(`Firestore (${yo}): ${t}`,...n)}}function vv(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t="Unexpected state"){const e=`FIRESTORE (${yo}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function fe(t,e){t||H()}function q(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class zP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BP{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new SS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new tt(e)}}class VP{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class HP{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new VP(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KP{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.T=n.token,new WP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=qP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function qs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new De(0,0))}static max(){return new K(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ya.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ya?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ue extends Ya{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const GP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ya{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return GP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ue.fromString(e))}static fromName(e){return new U(ue.fromString(e).popFirst(5))}static empty(){return new U(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ue(e.slice()))}}function QP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Fr(i,U.empty(),e)}function YP(t){return new Fr(t.readTime,t.key,-1)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(K.min(),U.empty(),-1)}static max(){return new Fr(K.max(),U.empty(),-1)}}function XP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=U.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==JP)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Il(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}yv.ct=-1;function Bh(t){return t==null}function Fc(t){return t===0&&1/t==-1/0}function eD(t){return typeof t=="number"&&Number.isInteger(t)&&!Fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new du(this.root,e,this.comparator,!1)}getReverseIterator(){return new du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new du(this.root,e,this.comparator,!0)}}class du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,n,r,i){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B1(this.data.getIterator())}getIteratorFrom(e){return new B1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class B1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CS("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const tD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(fe(!!t),typeof t=="string"){let e=0;const n=tD.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Li(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kv(t){const e=t.mapValue.fields.__previous_value__;return wv(e)?kv(e):e}function Xa(t){const e=Ur(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ja{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wv(t)?4:rD(t)?9007199254740991:10:H()}function Cn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xa(t).isEqual(Xa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Ur(r.timestampValue),o=Ur(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Li(r.bytesValue).isEqual(Li(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ae(r.geoPointValue.latitude)===Ae(i.geoPointValue.latitude)&&Ae(r.geoPointValue.longitude)===Ae(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ae(r.integerValue)===Ae(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ae(r.doubleValue),o=Ae(i.doubleValue);return s===o?Fc(s)===Fc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return qs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(z1(s)!==z1(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Cn(s[a],o[a])))return!1;return!0}(t,e);default:return H()}}function Za(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ae(i.integerValue||i.doubleValue),a=Ae(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return V1(t.timestampValue,e.timestampValue);case 4:return V1(Xa(t),Xa(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Li(i),a=Li(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=te(o[l],a[l]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=te(Ae(i.latitude),Ae(s.latitude));return o!==0?o:te(Ae(i.longitude),Ae(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Gs(o[l],a[l]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===pu.mapValue&&s===pu.mapValue)return 0;if(i===pu.mapValue)return 1;if(s===pu.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=te(a[c],u[c]);if(h!==0)return h;const f=Gs(o[a[c]],l[u[c]]);if(f!==0)return f}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw H()}}function V1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Ur(t),r=Ur(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Qs(t){return um(t)}function um(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Ur(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Li(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=um(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${um(r.fields[a])}`;return s+"}"}(t.mapValue):H();var e,n}function H1(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cm(t){return!!t&&"integerValue"in t}function _v(t){return!!t&&"arrayValue"in t}function W1(t){return!!t&&"nullValue"in t}function K1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Hu(t){return!!t&&"mapValue"in t}function da(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=da(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Hu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=da(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=da(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Hu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Hu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new kt(da(this.value))}}function xS(t){const e=[];return Yi(t.fields,(n,r)=>{const i=new it([n]);if(Hu(r)){const s=xS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,K.min(),K.min(),K.min(),kt.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,K.min(),K.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,K.min(),K.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n){this.position=e,this.inclusive=n}}function q1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function G1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function iD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{}class Re extends AS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new oD(e,n,r):n==="array-contains"?new uD(e,r):n==="in"?new cD(e,r):n==="not-in"?new hD(e,r):n==="array-contains-any"?new fD(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aD(e,r):new lD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class un extends AS{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new un(e,n)}matches(e){return NS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function NS(t){return t.op==="and"}function RS(t){return sD(t)&&NS(t)}function sD(t){for(const e of t.filters)if(e instanceof un)return!1;return!0}function hm(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(RS(t))return t.filters.map(e=>hm(e)).join(",");{const e=t.filters.map(n=>hm(n)).join(",");return`${t.op}(${e})`}}function OS(t,e){return t instanceof Re?function(n,r){return r instanceof Re&&n.op===r.op&&n.field.isEqual(r.field)&&Cn(n.value,r.value)}(t,e):t instanceof un?function(n,r){return r instanceof un&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&OS(s,r.filters[o]),!0):!1}(t,e):void H()}function PS(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(t):t instanceof un?function(e){return e.op.toString()+" {"+e.getFilters().map(PS).join(" ,")+"}"}(t):"Filter"}class oD extends Re{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.matchesComparison(n)}}class aD extends Re{constructor(e,n){super(e,"in",n),this.keys=DS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lD extends Re{constructor(e,n){super(e,"not-in",n),this.keys=DS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class uD extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _v(n)&&Za(n.arrayValue,this.value)}}class cD extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Za(this.value.arrayValue,n)}}class hD extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Za(this.value.arrayValue,n)}}class fD extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_v(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Za(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Q1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dD(t,e,n,r,i,s,o)}function Ev(t){const e=q(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.dt=n}return e.dt}function bv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G1(t.startAt,e.startAt)&&G1(t.endAt,e.endAt)}function fm(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function pD(t,e,n,r,i,s,o,a){return new Tl(t,e,n,r,i,s,o,a)}function Vh(t){return new Tl(t)}function Y1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Sv(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function MS(t){return t.collectionGroup!==null}function Ps(t){const e=q(t);if(e.wt===null){e.wt=[];const n=Sv(e),r=LS(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new pa(n)),e.wt.push(new pa(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new pa(it.keyField(),s))}}}return e.wt}function Yn(t){const e=q(t);if(!e._t)if(e.limitType==="F")e._t=Q1(e.path,e.collectionGroup,Ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ps(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new pa(s.field,o))}const r=e.endAt?new Uc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Uc(e.startAt.position,e.startAt.inclusive):null;e._t=Q1(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function dm(t,e){e.getFirstInequalityField(),Sv(t);const n=t.filters.concat([e]);return new Tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pm(t,e,n){return new Tl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hh(t,e){return bv(Yn(t),Yn(e))&&t.limitType===e.limitType}function $S(t){return`${Ev(Yn(t))}|lt:${t.limitType}`}function mm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>PS(r)).join(", ")}]`),Bh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),`Target(${n})`}(Yn(t))}; limitType=${t.limitType})`}function Wh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ps(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=q1(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ps(n),r)||n.endAt&&!function(i,s,o){const a=q1(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ps(n),r))}(t,e)}function mD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jS(t){return(e,n)=>{let r=!1;for(const i of Ps(t)){const s=gD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gD(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Gs(a,l):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return TS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=new we(U.comparator);function Xn(){return vD}const FS=new we(U.comparator);function Qo(...t){let e=FS;for(const n of t)e=e.insert(n.key,n);return e}function US(t){let e=FS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gi(){return ma()}function zS(){return ma()}function ma(){return new wo(t=>t.toString(),(t,e)=>t.isEqual(e))}const yD=new we(U.comparator),wD=new at(U.comparator);function Y(...t){let e=wD;for(const n of t)e=e.add(n);return e}const kD=new at(te);function _D(){return kD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fc(e)?"-0":e}}function VS(t){return{integerValue:""+t}}function ED(t,e){return eD(e)?VS(e):BS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this._=void 0}}function bD(t,e,n){return t instanceof el?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&wv(i)&&(i=kv(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Ys?WS(t,e):t instanceof Xs?KS(t,e):function(r,i){const s=HS(r,i),o=X1(s)+X1(r.gt);return cm(s)&&cm(r.gt)?VS(o):BS(r.serializer,o)}(t,e)}function SD(t,e,n){return t instanceof Ys?WS(t,e):t instanceof Xs?KS(t,e):n}function HS(t,e){return t instanceof zc?cm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class el extends Kh{}class Ys extends Kh{constructor(e){super(),this.elements=e}}function WS(t,e){const n=qS(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xs extends Kh{constructor(e){super(),this.elements=e}}function KS(t,e){let n=qS(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class zc extends Kh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function X1(t){return Ae(t.integerValue||t.doubleValue)}function qS(t){return _v(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n){this.field=e,this.transform=n}}function ID(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ys&&r instanceof Ys||n instanceof Xs&&r instanceof Xs?qs(n.elements,r.elements,Cn):n instanceof zc&&r instanceof zc?Cn(n.gt,r.gt):n instanceof el&&r instanceof el}(t.transform,e.transform)}class TD{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qh{}function GS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new YS(t.key,rn.none()):new Cl(t.key,t.data,rn.none());{const n=t.data,r=kt.empty();let i=new at(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jr(t.key,r,new Nt(i.toArray()),rn.none())}}function CD(t,e,n){t instanceof Cl?function(r,i,s){const o=r.value.clone(),a=Z1(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Jr?function(r,i,s){if(!Wu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Z1(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(QS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ga(t,e,n,r){return t instanceof Cl?function(i,s,o,a){if(!Wu(i.precondition,s))return o;const l=i.value.clone(),u=ew(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jr?function(i,s,o,a){if(!Wu(i.precondition,s))return o;const l=ew(i.fieldTransforms,a,s),u=s.data;return u.setAll(QS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Wu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function xD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=HS(r.transform,i||null);s!=null&&(n===null&&(n=kt.empty()),n.set(r.field,s))}return n||null}function J1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&qs(n,r,(i,s)=>ID(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cl extends qh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends qh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function QS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Z1(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,SD(o,a,n[i]))}return r}function ew(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bD(s,o,e))}return r}class YS extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AD extends qh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&CD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ga(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ga(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&qs(this.mutations,e.mutations,(n,r)=>J1(n,r))&&qs(this.baseMutations,e.baseMutations,(n,r)=>J1(n,r))}}class Tv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=yD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Tv(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,J;function PD(t){switch(t){default:return H();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function XS(t){if(t===void 0)return Qn("GRPC error has no .code"),T.UNKNOWN;switch(t){case xe.OK:return T.OK;case xe.CANCELLED:return T.CANCELLED;case xe.UNKNOWN:return T.UNKNOWN;case xe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case xe.INTERNAL:return T.INTERNAL;case xe.UNAVAILABLE:return T.UNAVAILABLE;case xe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case xe.NOT_FOUND:return T.NOT_FOUND;case xe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case xe.ABORTED:return T.ABORTED;case xe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case xe.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(J=xe||(xe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return mu}static getOrCreateInstance(){return mu===null&&(mu=new Cv),mu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let mu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new Os([4294967295,4294967295],0);function tw(t){const e=DD().encode(t),n=new FP;return n.update(e),new Uint8Array(n.digest())}function nw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Os([n,r],0),new Os([i,s],0)]}class xv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Os.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Os.fromNumber(r)));return i.compare(LD)===1&&(i=new Os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=tw(e),[r,i]=nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new xv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=tw(e),[r,i]=nw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gh(K.min(),i,new we(te),Xn(),Y())}}class xl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xl(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class JS{constructor(e,n){this.targetId=e,this.Vt=n}}class ZS{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rw{constructor(){this.St=0,this.Dt=sw(),this.Ct=ht.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Y(),n=Y(),r=Y();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new xl(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=sw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class MD{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Xn(),this.zt=iw(),this.Wt=new we(te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(fm(o))if(i===0){const a=new U(o.path);this.Yt(r,a,rt.newNoDocument(a,K.min()))}else fe(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Cv.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,d,v,y,w,m;const p={localCacheCount:c,existenceFilterCount:h.count},g=h.unchangedNames;return g&&(p.bloomFilter={applied:u===0,hashCount:(f=g==null?void 0:g.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(y=(v=(d=g==null?void 0:g.bits)===null||d===void 0?void 0:d.bitmap)===null||v===void 0?void 0:v.length)!==null&&y!==void 0?y:0,padding:(m=(w=g==null?void 0:g.bits)===null||w===void 0?void 0:w.padding)!==null&&m!==void 0?m:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Li(s).toUint8Array()}catch(c){if(c instanceof CS)return Ks("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new xv(l,o,a)}catch(c){return Ks(c instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&fm(a.target)){const l=new U(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,rt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Y();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Gh(e,n,this.Wt,this.jt,r);return this.jt=Xn(),this.zt=iw(),this.Wt=new we(te),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new rw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new at(te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new rw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function iw(){return new we(U.comparator)}function sw(){return new we(U.comparator)}const $D=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),FD=(()=>({and:"AND",or:"OR"}))();class UD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gm(t,e){return t.useProto3Json||Bh(e)?e:{value:e}}function Bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function zD(t,e){return Bc(t,e.toTimestamp())}function _n(t){return fe(!!t),K.fromTimestamp(function(e){const n=Ur(e);return new De(n.seconds,n.nanos)}(t))}function Av(t,e){return function(n){return new ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function tI(t){const e=ue.fromString(t);return fe(sI(e)),e}function vm(t,e){return Av(t.databaseId,e.path)}function dd(t,e){const n=tI(e);if(n.get(1)!==t.databaseId.projectId)throw new D(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(nI(n))}function ym(t,e){return Av(t.databaseId,e)}function BD(t){const e=tI(t);return e.length===4?ue.emptyPath():nI(e)}function wm(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nI(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ow(t,e,n){return{name:vm(t,e),fields:n.value.mapValue.fields}}function VD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(fe(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:XS(l.code);return new D(u,l.message||"")}(o);n=new ZS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=dd(t,r.document.name),s=_n(r.document.updateTime),o=r.document.createTime?_n(r.document.createTime):K.min(),a=new kt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ku(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=dd(t,r.document),s=r.readTime?_n(r.readTime):K.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ku([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=dd(t,r.document),s=r.removedTargetIds||[];n=new Ku([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new OD(i,s),a=r.targetId;n=new JS(a,o)}}return n}function HD(t,e){let n;if(e instanceof Cl)n={update:ow(t,e.key,e.value)};else if(e instanceof YS)n={delete:vm(t,e.key)};else if(e instanceof Jr)n={update:ow(t,e.key,e.data),updateMask:ZD(e.fieldMask)};else{if(!(e instanceof AD))return H();n={verify:vm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof el)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ys)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Xs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:zD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function WD(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?_n(r.updateTime):_n(i);return s.isEqual(K.min())&&(s=_n(i)),new TD(s,r.transformResults||[])}(n,e))):[]}function KD(t,e){return{documents:[ym(t,e.path)]}}function qD(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ym(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ym(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return iI(un.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ss(c.field),direction:YD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=gm(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GD(t){let e=BD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=rI(c);return h instanceof un&&RS(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new pa(os(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Bh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new Uc(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new Uc(f,h)}(n.endAt)),pD(e,i,o,s,a,"F",l,u)}function QD(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function rI(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=os(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=os(e.unaryFilter.field);return Re.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=os(e.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=os(e.unaryFilter.field);return Re.create(s,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(os(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return un.create(e.compositeFilter.filters.map(n=>rI(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(t):H()}function YD(t){return $D[t]}function XD(t){return jD[t]}function JD(t){return FD[t]}function ss(t){return{fieldPath:t.canonicalString()}}function os(t){return it.fromServerFormat(t.fieldPath)}function iI(t){return t instanceof Re?function(e){if(e.op==="=="){if(K1(e.value))return{unaryFilter:{field:ss(e.field),op:"IS_NAN"}};if(W1(e.value))return{unaryFilter:{field:ss(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(K1(e.value))return{unaryFilter:{field:ss(e.field),op:"IS_NOT_NAN"}};if(W1(e.value))return{unaryFilter:{field:ss(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(e.field),op:XD(e.op),value:e.value}}}(t):t instanceof un?function(e){const n=e.getFilters().map(r=>iI(r));return n.length===1?n[0]:{compositeFilter:{op:JD(e.op),filters:n}}}(t):H()}function ZD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function sI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r,i,s=K.min(),o=K.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.fe=e}}function tL(t){const e=GD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(){this.rn=new rL}addToCollectionParentIndex(e,n){return this.rn.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Fr.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class rL{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Js(0)}static Mn(){return new Js(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.changes=new wo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ga(r.mutation,i,Nt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=gi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Qo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=ma(),a=ma();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Jr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ga(c.mutation,u,c.mutation.getFieldMask(),De.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new sL(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ma();let i=new we((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Nt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=zS();c.forEach(f=>{if(!s.has(f)){const d=GS(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(gi());let a=-1,l=s;return o.next(u=>N.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?N.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:US(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new U(n)).next(r=>{let i=Qo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Qo();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(u,c){return new Tl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,rt.newInvalidDocument(u)))});let o=Qo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ga(u.mutation,l,Nt.empty(),De.now()),Wh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return N.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:_n(r.createTime)}),N.resolve()}getNamedQuery(e,n){return N.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:tL(r.bundledQuery),readTime:_n(r.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(){this.overlays=new we(U.comparator),this.ls=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gi();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=gi(),s=n.length+1,o=new U(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=gi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=gi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return N.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RD(n,r));let s=this.ls.get(n);s===void 0&&(s=Y(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.fs=new at(je.ds),this.ws=new at(je._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new je(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new je(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new U(new ue([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new U(new ue([])),r=new je(n,e),i=new je(n,e+1);let s=Y();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return U.comparator(e.key,n.key)||te(e.As,n.As)}static _s(e,n){return te(e.As,n.As)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new at(je.ds)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ND(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(te);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),N.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new je(new U(s),0);let a=new at(te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),N.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return N.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new je(n,0),i=this.Rs.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.Ds=e,this.docs=new we(U.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||XP(YP(c),r)<=0||(i.has(c.key)||Wh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}Cs(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hL(this)}getSize(e){return N.resolve(this.size)}}class hL extends iL{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e){this.persistence=e,this.xs=new wo(n=>Ev(n),bv),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Nv,this.targetCount=0,this.Ms=Js.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),N.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Js(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.Fn(n),N.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n){this.$s={},this.overlays={},this.Os=new yv(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new fL(this),this.indexManager=new nL,this.remoteDocumentCache=function(r){return new cL(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new eL(n),this.qs=new aL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new uL(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new pL(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return N.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class pL extends ZP{constructor(e){super(),this.currentSequenceNumber=e}}class Rv{constructor(e){this.persistence=e,this.Qs=new Nv,this.js=null}static zs(e){return new Rv(e)}get Ws(){if(this.js)return this.js;throw H()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),N.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,r=>{const i=U.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return N.or([()=>N.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ov(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Y1(n))return N.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pm(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,pm(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Y1(n)||i.isEqual(K.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(U1()<=ee.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mm(n)),this.Wi(e,o,n,QP(i,-1)))})}ji(e,n){let r=new at(jS(e));return n.forEach((i,s)=>{Wh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return U1()<=ee.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",mm(n)),this.Ui.getDocumentsMatchingQuery(e,n,Fr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new we(te),this.Yi=new wo(s=>Ev(s),bv),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oL(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function vL(t,e,n,r){return new gL(t,e,n,r)}async function oI(t,e){const n=q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function yL(t,e){const n=q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=N.resolve();return h.forEach(d=>{f=f.next(()=>u.getEntry(a,d)).next(v=>{const y=l.docVersions.get(d);fe(y!==null),v.version.compareTo(y)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Y();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aI(t){const e=q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function wL(t,e){const n=q(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(ht.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):c.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(c.resumeToken,r)),i=i.insert(h,d),function(v,y,w){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,c)&&a.push(n.Bs.updateTargetData(s,d))});let l=Xn(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(kL(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(K.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function kL(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function _L(t,e){const n=q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function EL(t,e){const n=q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function km(t,e,n){const r=q(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Il(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function aw(t,e,n){const r=q(t);let i=K.min(),s=Y();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=q(a),h=c.Yi.get(u);return h!==void 0?N.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:Y())).next(a=>(bL(r,mD(e),a),{documents:a,ir:s})))}function bL(t,e,n){let r=t.Xi.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class lw{constructor(){this.activeTargetIds=_D()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class SL{constructor(){this.Hr=new lw,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new lw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gu=null;function pd(){return gu===null?gu=268435456+Math.round(2147483648*Math.random()):gu++,"0x"+gu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class xL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=pd(),a=this.To(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ks("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+yo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=TL[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=pd();return new Promise((o,a)=>{const l=new jP;l.setWithCredentials(!0),l.listenOnce(LP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case fd.NO_ERROR:const c=l.getResponseJson();F(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case fd.TIMEOUT:F(Ze,`RPC '${e}' ${s} timed out`),a(new D(T.DEADLINE_EXCEEDED,"Request time out"));break;case fd.HTTP_ERROR:const h=l.getStatus();if(F(Ze,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const v=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(w)>=0?w:T.UNKNOWN}(d.status);a(new D(v,d.message))}else a(new D(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{F(Ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(Ze,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=pd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=PP(),a=DP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new $P({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");F(Ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,d=!1;const v=new CL({ro:w=>{d?F(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(f||(F(Ze,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),F(Ze,`RPC '${e}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),y=(w,m,p)=>{w.listen(m,g=>{try{p(g)}catch(_){setTimeout(()=>{throw _},0)}})};return y(h,fu.EventType.OPEN,()=>{d||F(Ze,`RPC '${e}' stream ${i} transport opened.`)}),y(h,fu.EventType.CLOSE,()=>{d||(d=!0,F(Ze,`RPC '${e}' stream ${i} transport closed`),v.wo())}),y(h,fu.EventType.ERROR,w=>{d||(d=!0,Ks(Ze,`RPC '${e}' stream ${i} transport errored:`,w),v.wo(new D(T.UNAVAILABLE,"The operation could not be completed")))}),y(h,fu.EventType.MESSAGE,w=>{var m;if(!d){const p=w.data[0];fe(!!p);const g=p,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){F(Ze,`RPC '${e}' stream ${i} received error:`,_);const E=_.status;let b=function(I){const M=xe[I];if(M!==void 0)return XS(M)}(E),C=_.message;b===void 0&&(b=T.INTERNAL,C="Unknown error status: "+E+" with message "+_.message),d=!0,v.wo(new D(b,C)),h.close()}else F(Ze,`RPC '${e}' stream ${i} received:`,p),v._o(p)}}),y(a,MP.STAT_EVENT,w=>{w.stat===j1.PROXY?F(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===j1.NOPROXY&&F(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function md(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return new UD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new lI(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new D(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AL extends uI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=VD(this.serializer,e),r=function(i){if(!("targetChange"in i))return K.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?K.min():s.readTime?_n(s.readTime):K.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=wm(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=fm(a)?{documents:KD(i,a)}:{query:qD(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=eI(i,s.resumeToken);const l=gm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(K.min())>0){o.readTime=Bc(i,s.snapshotVersion.toTimestamp());const l=gm(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=QD(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=wm(this.serializer),n.removeTarget=e,this.Wo(n)}}class NL extends uI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=WD(e.writeResults,e.commitTime),r=_n(e.commitTime);return this.listener.cu(r,n)}return fe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=wm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HD(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new D(T.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(T.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(T.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class OL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Qn(n),this.mu=!1):F("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=q(a);l.vu.add(4),await Al(l),l.bu.set("Unknown"),l.vu.delete(4),await Yh(l)}(this))})}),this.bu=new OL(r,i)}}async function Yh(t){if(Xi(t))for(const e of t.Ru)await e(!0)}async function Al(t){for(const e of t.Ru)await e(!1)}function cI(t,e){const n=q(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Lv(n)?Dv(n):ko(n).Ko()&&Pv(n,e))}function hI(t,e){const n=q(t),r=ko(n);n.Au.delete(e),r.Ko()&&fI(n,e),n.Au.size===0&&(r.Ko()?r.jo():Xi(n)&&n.bu.set("Unknown"))}function Pv(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).su(e)}function fI(t,e){t.Vu.qt(e),ko(t).iu(e)}function Dv(t){t.Vu=new MD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.bu.gu()}function Lv(t){return Xi(t)&&!ko(t).Uo()&&t.Au.size>0}function Xi(t){return q(t).vu.size===0}function dI(t){t.Vu=void 0}async function DL(t){t.Au.forEach((e,n)=>{Pv(t,e)})}async function LL(t,e){dI(t),Lv(t)?(t.bu.Iu(e),Dv(t)):t.bu.set("Unknown")}async function ML(t,e,n){if(t.bu.set("Online"),e instanceof ZS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vc(t,r)}else if(e instanceof Ku?t.Vu.Ht(e):e instanceof JS?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(K.min()))try{const r=await aI(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),fI(i,a);const c=new _r(u.target,a,l,u.sequenceNumber);Pv(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Vc(t,r)}}async function Vc(t,e,n){if(!Il(e))throw e;t.vu.add(1),await Al(t),t.bu.set("Offline"),n||(n=()=>aI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yh(t)})}function pI(t,e){return e().catch(n=>Vc(t,n,e))}async function Xh(t){const e=q(t),n=zr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;$L(e);)try{const i=await _L(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,jL(e,i)}catch(i){await Vc(e,i)}mI(e)&&gI(e)}function $L(t){return Xi(t)&&t.Eu.length<10}function jL(t,e){t.Eu.push(e);const n=zr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function mI(t){return Xi(t)&&!zr(t).Uo()&&t.Eu.length>0}function gI(t){zr(t).start()}async function FL(t){zr(t).hu()}async function UL(t){const e=zr(t);for(const n of t.Eu)e.uu(n.mutations)}async function zL(t,e,n){const r=t.Eu.shift(),i=Tv.from(r,e,n);await pI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xh(t)}async function BL(t,e){e&&zr(t).ou&&await async function(n,r){if(i=r.code,PD(i)&&i!==T.ABORTED){const s=n.Eu.shift();zr(n).Qo(),await pI(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xh(n)}var i}(t,e),mI(t)&&gI(t)}async function cw(t,e){const n=q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Xi(n);n.vu.add(3),await Al(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yh(n)}async function VL(t,e){const n=q(t);e?(n.vu.delete(2),await Yh(n)):e||(n.vu.add(2),await Al(n),n.bu.set("Unknown"))}function ko(t){return t.Su||(t.Su=function(e,n,r){const i=q(e);return i.fu(),new AL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:DL.bind(null,t),ao:LL.bind(null,t),nu:ML.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Lv(t)?Dv(t):t.bu.set("Unknown")):(await t.Su.stop(),dI(t))})),t.Su}function zr(t){return t.Du||(t.Du=function(e,n,r){const i=q(e);return i.fu(),new NL(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:FL.bind(null,t),ao:BL.bind(null,t),au:UL.bind(null,t),cu:zL.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Xh(t)):(await t.Du.stop(),t.Eu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Mv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $v(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Il(t))return new D(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this.Cu=new we(U.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):H():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zs(e,n,Ds.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(){this.Nu=void 0,this.listeners=[]}}class WL{constructor(){this.queries=new wo(e=>$S(e),Hh),this.onlineState="Unknown",this.ku=new Set}}async function jv(t,e){const n=q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new HL),i)try{s.Nu=await n.onListen(r)}catch(o){const a=$v(o,`Initialization of query '${mm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Uv(n)}async function Fv(t,e){const n=q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function KL(t,e){const n=q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Uv(n)}function qL(t,e,n){const r=q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Uv(t){t.ku.forEach(e=>{e.next()})}class zv{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.key=e}}class yI{constructor(e){this.key=e}}class GL{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Y(),this.mutatedKeys=Y(),this.tc=jS(e),this.ec=new Ds(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new hw,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),d=Wh(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),y=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let w=!1;f&&d?f.data.isEqual(d.data)?v!==y&&(r.track({type:3,doc:d}),w=!0):this.rc(f,d)||(r.track({type:2,doc:d}),w=!0,(l&&this.tc(d,l)>0||u&&this.tc(d,u)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),w=!0):f&&!d&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(d?(o=o.add(d),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const d=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return d(h)-d(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Zs(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new hw,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Y(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new yI(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new vI(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Y();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Zs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class QL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YL{constructor(e){this.key=e,this.fc=!1}}class XL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new wo(a=>$S(a),Hh),this._c=new Map,this.mc=new Set,this.gc=new we(U.comparator),this.yc=new Map,this.Ic=new Nv,this.Tc={},this.Ec=new Map,this.Ac=Js.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function JL(t,e){const n=lM(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await EL(n.localStore,Yn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ZL(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&cI(n.remoteStore,o)}return i}async function ZL(t,e,n,r,i){t.Rc=(h,f,d)=>async function(v,y,w,m){let p=y.view.sc(w);p.zi&&(p=await aw(v.localStore,y.query,!1).then(({documents:E})=>y.view.sc(E,p)));const g=m&&m.targetChanges.get(y.targetId),_=y.view.applyChanges(p,v.isPrimaryClient,g);return dw(v,y.targetId,_.cc),_.snapshot}(t,h,f,d);const s=await aw(t.localStore,e,!0),o=new GL(e,s.ir),a=o.sc(s.documents),l=xl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dw(t,n,u.cc);const c=new QL(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function eM(t,e){const n=q(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Hh(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await km(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hI(n.remoteStore,r.targetId),_m(n,r.targetId)}).catch(Sl)):(_m(n,r.targetId),await km(n.localStore,r.targetId,!0))}async function tM(t,e,n){const r=uM(t);try{const i=await function(s,o){const a=q(s),l=De.now(),u=o.reduce((f,d)=>f.add(d.key),Y());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let d=Xn(),v=Y();return a.Zi.getEntries(f,u).next(y=>{d=y,d.forEach((w,m)=>{m.isValidDocument()||(v=v.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,d)).next(y=>{c=y;const w=[];for(const m of o){const p=xD(m,c.get(m.key).overlayedDocument);p!=null&&w.push(new Jr(m.key,p,xS(p.value.mapValue),rn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,w,o)}).next(y=>{h=y;const w=y.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(f,y.batchId,w)})}).then(()=>({batchId:h.batchId,changes:US(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new we(te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Nl(r,i.changes),await Xh(r.remoteStore)}catch(i){const s=$v(i,"Failed to persist write");n.reject(s)}}async function wI(t,e){const n=q(t);try{const r=await wL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?fe(o.fc):i.removedDocuments.size>0&&(fe(o.fc),o.fc=!1))}),await Nl(n,r,e)}catch(r){await Sl(r)}}function fw(t,e,n){const r=q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&Uv(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nM(t,e,n){const r=q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new we(U.comparator);o=o.insert(s,rt.newNoDocument(s,K.min()));const a=Y().add(s),l=new Gh(K.min(),new Map,new we(te),o,a);await wI(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Bv(r)}else await km(r.localStore,e,!1).then(()=>_m(r,e,n)).catch(Sl)}async function rM(t,e){const n=q(t),r=e.batch.batchId;try{const i=await yL(n.localStore,e);_I(n,r,null),kI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nl(n,i)}catch(i){await Sl(i)}}async function iM(t,e,n){const r=q(t);try{const i=await function(s,o){const a=q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(fe(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);_I(r,e,n),kI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Nl(r,i)}catch(i){await Sl(i)}}function kI(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function _I(t,e,n){const r=q(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function _m(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||EI(t,r)})}function EI(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(hI(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Bv(t))}function dw(t,e,n){for(const r of n)r instanceof vI?(t.Ic.addReference(r.key,e),sM(t,r)):r instanceof yI?(F("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||EI(t,r.key)):H()}function sM(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.mc.add(r),Bv(t))}function Bv(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new U(ue.fromString(e)),r=t.Ac.next();t.yc.set(r,new YL(n)),t.gc=t.gc.insert(n,r),cI(t.remoteStore,new _r(Yn(Vh(n.path)),r,"TargetPurposeLimboResolution",yv.ct))}}async function Nl(t,e,n){const r=q(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ov.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(l,h=>N.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>N.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Il(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),d=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(d);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function oM(t,e){const n=q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await oI(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new D(T.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Nl(n,r.er)}}function aM(t,e){const n=q(t),r=n.yc.get(e);if(r&&r.fc)return Y().add(r.key);{let i=Y();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function lM(t){const e=q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nM.bind(null,e),e.dc.nu=KL.bind(null,e.eventManager),e.dc.Pc=qL.bind(null,e.eventManager),e}function uM(t){const e=q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iM.bind(null,e),e}class pw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return vL(this.persistence,new mL,e.initialUser,this.serializer)}createPersistence(e){return new dL(Rv.zs,this.serializer)}createSharedClientState(e){return new SL}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oM.bind(null,this.syncEngine),await VL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WL}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new xL(i));var i;return function(s,o,a,l){return new RL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>fw(this.syncEngine,a,0),o=uw.D()?new uw:new IL,new PL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new XL(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=q(e);F("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Al(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=IS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$v(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gd(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dM(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cw(e.remoteStore,s)),t._onlineComponents=e}function fM(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!fM(n))throw n;Ks("Error using user provided cache. Falling back to memory cache: "+n),await gd(t,new pw)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await gd(t,new pw);return t._offlineComponents}async function bI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await mw(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await mw(t,new cM))),t._onlineComponents}function pM(t){return bI(t).then(e=>e.syncEngine)}async function Hc(t){const e=await bI(t),n=e.eventManager;return n.onListen=JL.bind(null,e.syncEngine),n.onUnlisten=eM.bind(null,e.syncEngine),n}function mM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Vv({next:h=>{s.enqueueAndForget(()=>Fv(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new D(T.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new D(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new zv(Vh(o.path),u,{includeMetadataChanges:!0,Ku:!0});return jv(i,c)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}function gM(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new Vv({next:h=>{s.enqueueAndForget(()=>Fv(i,c)),h.fromCache&&a.source==="server"?l.reject(new D(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new zv(o,u,{includeMetadataChanges:!0,Ku:!0});return jv(i,c)}(await Hc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t,e,n){if(!n)throw new D(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vM(t,e,n,r){if(e===!0&&r===!0)throw new D(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vw(t){if(!U.isDocumentKey(t))throw new D(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yw(t){if(U.isDocumentKey(t))throw new D(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Ot(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new D(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Zh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new UP;switch(n.type){case"firstParty":return new HP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gw.get(e);n&&(F("ComponentProvider","Removing Datastore"),gw.delete(e),n.terminate())}(this),Promise.resolve()}}function yM(t,e,n,r={}){var i;const s=(t=Ot(t,Zh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=tt.MOCK_USER;else{a=gb(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new tt(u)}t._authCredentials=new zP(new SS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class Ji{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ji(this.firestore,e,this._query)}}class Dr extends Ji{constructor(e,n,r){super(e,n,Vh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new U(e))}withConverter(e){return new Dr(this.firestore,e,this._path)}}function va(t,e,...n){if(t=ye(t),II("collection","path",e),t instanceof Zh){const r=ue.fromString(e,...n);return yw(r),new Dr(t,null,r)}{if(!(t instanceof lt||t instanceof Dr))throw new D(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return yw(r),new Dr(t.firestore,null,r)}}function sn(t,e,...n){if(t=ye(t),arguments.length===1&&(e=IS.A()),II("doc","path",e),t instanceof Zh){const r=ue.fromString(e,...n);return vw(r),new lt(t,null,new U(r))}{if(!(t instanceof lt||t instanceof Dr))throw new D(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return vw(r),new lt(t.firestore,t instanceof Dr?t.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new lI(this,"async_queue_retry"),this.Xc=()=>{const n=md();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=md();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=md();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Bn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Il(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Mv.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&H()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function kw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Br extends Zh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wM,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CI(this),this._firestoreClient.terminate()}}function TI(t,e){const n=typeof t=="object"?t:Gg(),r=typeof t=="string"?t:e||"(default)",i=mo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=db("firestore");s&&yM(i,...s)}return i}function ef(t){return t._firestoreClient||CI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CI(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new nD(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,SI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new eo(ht.fromBase64String(e))}catch(n){throw new D(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new eo(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kM=/^__.*__$/;class _M{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cl(e,this.data,n,this.fieldTransforms)}}class xI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function AI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class nf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Wc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(AI(this.ca)&&kM.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class EM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}ya(e,n,r,i=!1){return new nf({ca:e,methodName:n,ga:r,path:it.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new EM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function NI(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Kv("Data must be an object, but it was:",o,r);const a=OI(r,o);let l,u;if(s.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=Em(e,h,n);if(!o.contains(f))throw new D(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);DI(c,f)||c.push(f)}l=new Nt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new _M(new kt(a),l,u)}class sf extends _o{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sf}}function RI(t,e,n){return new nf({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Wv extends _o{_toFieldTransform(e){return new Iv(e.path,new el)}isEqual(e){return e instanceof Wv}}class bM extends _o{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=RI(this,e,!0),r=this.pa.map(s=>Zi(s,n)),i=new Ys(r);return new Iv(e.path,i)}isEqual(e){return this===e}}class SM extends _o{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=RI(this,e,!0),r=this.pa.map(s=>Zi(s,n)),i=new Xs(r);return new Iv(e.path,i)}isEqual(e){return this===e}}function IM(t,e,n,r){const i=t.ya(1,e,n);Kv("Data must be an object, but it was:",i,r);const s=[],o=kt.empty();Yi(r,(l,u)=>{const c=qv(e,l,n);u=ye(u);const h=i.da(c);if(u instanceof sf)s.push(c);else{const f=Zi(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new Nt(s);return new xI(o,a,i.fieldTransforms)}function TM(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Em(e,r,n)],l=[i];if(s.length%2!=0)throw new D(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Em(e,s[f])),l.push(s[f+1]);const u=[],c=kt.empty();for(let f=a.length-1;f>=0;--f)if(!DI(u,a[f])){const d=a[f];let v=l[f];v=ye(v);const y=o.da(d);if(v instanceof sf)u.push(d);else{const w=Zi(v,y);w!=null&&(u.push(d),c.set(d,w))}}const h=new Nt(u);return new xI(c,h,o.fieldTransforms)}function CM(t,e,n,r=!1){return Zi(n,t.ya(r?4:3,e))}function Zi(t,e){if(PI(t=ye(t)))return Kv("Unsupported field value:",e,t),OI(t,e);if(t instanceof _o)return function(n,r){if(!AI(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Zi(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ye(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ED(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Bc(r.serializer,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Bc(r.serializer,i)}}if(n instanceof Hv)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof eo)return{bytesValue:eI(r.serializer,n._byteString)};if(n instanceof lt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Av(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Jh(n)}`)}(t,e)}function OI(t,e){const n={};return TS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yi(t,(r,i)=>{const s=Zi(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function PI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Hv||t instanceof eo||t instanceof lt||t instanceof _o)}function Kv(t,e,n){if(!PI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Jh(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Em(t,e,n){if((e=ye(e))instanceof tf)return e._internalPath;if(typeof e=="string")return qv(t,e);throw Wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const xM=new RegExp("[~\\*/\\[\\]]");function qv(t,e,n){if(e.search(xM)>=0)throw Wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tf(...e.split("."))._internalPath}catch{throw Wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(T.INVALID_ARGUMENT,a+t+l)}function DI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AM extends LI{data(){return super.data()}}function Gv(t,e){return typeof e=="string"?qv(t,e):e instanceof tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qv{}class NM extends Qv{}function RM(t,e,...n){let r=[];e instanceof Qv&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Yv).length,o=i.filter(a=>a instanceof of).length;if(s>1||s>0&&o>0)throw new D(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class of extends NM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new of(e,n,r)}_apply(e){const n=this._parse(e);return $I(e._query,n),new Ji(e.firestore,e.converter,dm(e._query,n))}_parse(e){const n=rf(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new D(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ew(c,u);const f=[];for(const d of c)f.push(_w(a,i,d));h={arrayValue:{values:f}}}else h=_w(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ew(c,u),h=CM(o,s,c,u==="in"||u==="not-in");return Re.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function OM(t,e,n){const r=e,i=Gv("where",t);return of._create(i,r,n)}class Yv extends Qv{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Yv(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:un.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)$I(s,a),s=dm(s,a)}(e._query,n),new Ji(e.firestore,e.converter,dm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _w(t,e,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new D(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!MS(e)&&n.indexOf("/")!==-1)throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!U.isDocumentKey(r))throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return H1(t,new U(r))}if(n instanceof lt)return H1(t,n._key);throw new D(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function Ew(t,e){if(!Array.isArray(t)||t.length===0)throw new D(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $I(t,e){if(e.isInequality()){const r=Sv(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=LS(t);s!==null&&PM(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PM(t,e,n){if(!n.isEqual(e))throw new D(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class DM{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Hv(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);fe(sI(r));const i=new Ja(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class FI extends LI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends FI{data(e={}){return super.data(e)}}class UI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Xo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new Xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Xo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Xo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:LM(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){t=Ot(t,lt);const e=Ot(t.firestore,Br);return mM(ef(e),t._key).then(n=>zI(e,t,n))}class Xv extends DM{constructor(e){super(),this.firestore=e}convertBytes(e){return new eo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function MM(t){t=Ot(t,Ji);const e=Ot(t.firestore,Br),n=ef(e),r=new Xv(e);return MI(t._query),gM(n,t._query).then(i=>new UI(e,r,t,i))}function af(t,e,n){t=Ot(t,lt);const r=Ot(t.firestore,Br),i=jI(t.converter,e,n);return Zv(r,[NI(rf(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function Jv(t,e,n,...r){t=Ot(t,lt);const i=Ot(t.firestore,Br),s=rf(i);let o;return o=typeof(e=ye(e))=="string"||e instanceof tf?TM(s,"updateDoc",t._key,e,n,r):IM(s,"updateDoc",t._key,e),Zv(i,[o.toMutation(t._key,rn.exists(!0))])}function $M(t,e){const n=Ot(t.firestore,Br),r=sn(t),i=jI(t.converter,e);return Zv(n,[NI(rf(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function jM(t,...e){var n,r,i;t=ye(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||kw(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(kw(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof lt)u=Ot(t.firestore,Br),c=Vh(t._key.path),l={next:h=>{e[o]&&e[o](zI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ot(t,Ji);u=Ot(h.firestore,Br),c=h._query;const f=new Xv(u);l={next:d=>{e[o]&&e[o](new UI(u,f,h,d))},error:e[o+1],complete:e[o+2]},MI(t._query)}return function(h,f,d,v){const y=new Vv(v),w=new zv(f,y,d);return h.asyncQueue.enqueueAndForget(async()=>jv(await Hc(h),w)),()=>{y.Dc(),h.asyncQueue.enqueueAndForget(async()=>Fv(await Hc(h),w))}}(ef(u),c,a,l)}function Zv(t,e){return function(n,r){const i=new Bn;return n.asyncQueue.enqueueAndForget(async()=>tM(await pM(n),r,i)),i.promise}(ef(t),e)}function zI(t,e,n){const r=n.docs.get(e._key),i=new Xv(t);return new FI(t,i,e._key,r,new Xo(n.hasPendingWrites,n.fromCache),e.converter)}function BI(){return new Wv("serverTimestamp")}function FM(...t){return new bM("arrayUnion",t)}function VI(...t){return new SM("arrayRemove",t)}(function(t,e=!0){(function(n){yo=n})(Gi),an(new Gt("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Br(new BP(n.getProvider("auth-internal")),new KP(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Tt(F1,"3.13.0",t),Tt(F1,"3.13.0","esm2017")})();var UM="firebase",zM="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(UM,zM,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="firebasestorage.googleapis.com",WI="storageBucket",BM=2*60*1e3,VM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends cn{constructor(e,n,r=0){super(vd(e),`Firebase Storage: ${n} (${vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function vd(t){return"storage/"+t}function ey(){const t="An unknown error occurred, please check the error payload for server response.";return new Se(be.UNKNOWN,t)}function HM(t){return new Se(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function WM(t){return new Se(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se(be.UNAUTHENTICATED,t)}function qM(){return new Se(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function GM(t){return new Se(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function QM(){return new Se(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YM(){return new Se(be.CANCELED,"User canceled the upload/download.")}function XM(t){return new Se(be.INVALID_URL,"Invalid URL '"+t+"'.")}function JM(t){return new Se(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ZM(){return new Se(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+WI+"' property when initializing the app?")}function e$(){return new Se(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function t$(){return new Se(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function n$(t){return new Se(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bm(t){return new Se(be.INVALID_ARGUMENT,t)}function KI(){return new Se(be.APP_DELETED,"The Firebase app was deleted.")}function r$(t){return new Se(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ya(t,e){return new Se(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $o(t){throw new Se(be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=class Gu{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Gu.makeFromUrl(e,n)}catch{return new Gu(e,"")}if(r.path==="")return r;throw JM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},y=n===HI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:d,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const E=g[_],b=E.regex.exec(e);if(b){const C=b[E.indices.bucket];let I=b[E.indices.path];I||(I=""),r=new Gu(C,I),E.postModify(r);break}}if(r==null)throw XM(e);return r}};class i${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(d,l())},w)}function f(){s&&clearTimeout(s)}function d(w,...m){if(u){f();return}if(w){f(),c.call(null,w,...m);return}if(l()||o){f(),c.call(null,w,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function y(w){v||(v=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function o$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(t){return t!==void 0}function l$(t){return typeof t=="object"&&!Array.isArray(t)}function ty(t){return typeof t=="string"||t instanceof String}function bw(t){return ny()&&t instanceof Blob}function ny(){return typeof Blob<"u"&&!mR()}function Sw(t,e,n,r){if(r<e)throw bm(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bm(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function qI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Si;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Si||(Si={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u$(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c${constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,v)=>{this.resolve_=d,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new vu(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Si.NO_ERROR,l=s.getStatus();if(!a||u$(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Si.ABORT;r(!1,new vu(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new vu(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());a$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ey();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?KI():YM();o(l)}else{const l=QM();o(l)}};this.canceled_?n(!1,new vu(!1,null,!0)):this.backoffId_=s$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&o$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function h$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function f$(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function d$(t,e){e&&(t["X-Firebase-GMPID"]=e)}function p$(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function m$(t,e,n,r,i,s,o=!0){const a=qI(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return d$(u,e),h$(u,n),f$(u,s),p$(u,r),new c$(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g$(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function v$(...t){const e=g$();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ny())return new Blob(t);throw new Se(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function y$(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w$(t){if(typeof atob>"u")throw n$("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yd{constructor(e,n){this.data=e,this.contentType=n||null}}function k$(t,e){switch(t){case vn.RAW:return new yd(GI(e));case vn.BASE64:case vn.BASE64URL:return new yd(QI(t,e));case vn.DATA_URL:return new yd(E$(e),b$(e))}throw ey()}function GI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function _$(t){let e;try{e=decodeURIComponent(t)}catch{throw ya(vn.DATA_URL,"Malformed data URL.")}return GI(e)}function QI(t,e){switch(t){case vn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ya(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case vn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ya(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=w$(e)}catch(i){throw i.message.includes("polyfill")?i:ya(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class YI{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ya(vn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=S$(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function E$(t){const e=new YI(t);return e.base64?QI(vn.BASE64,e.rest):_$(e.rest)}function b$(t){return new YI(t).contentType}function S$(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n){let r=0,i="";bw(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(bw(this.data_)){const r=this.data_,i=y$(r,e,n);return i===null?null:new fr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fr(r,!0)}}static getBlob(...e){if(ny()){const n=e.map(r=>r instanceof fr?r.data_:r);return new fr(v$.apply(null,n))}else{const n=e.map(o=>ty(o)?k$(vn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new fr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){let e;try{e=JSON.parse(t)}catch{return null}return l$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I$(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function T$(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function JI(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C$(t,e){return e}class dt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||C$}}let yu=null;function x$(t){return!ty(t)||t.length<2?t:JI(t)}function ZI(){if(yu)return yu;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(s,o){return x$(o)}const n=new dt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new dt("size");return i.xform=r,t.push(i),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),yu=t,yu}function A$(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function N$(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return A$(r,t),r}function eT(t,e,n){const r=XI(e);return r===null?null:N$(t,r,n)}function R$(t,e,n,r){const i=XI(e);if(i===null||!ty(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),d=ry(f,n,r),v=qI({alt:"media",token:u});return d+v})[0]}function O$(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class tT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){if(!t)throw ey()}function P$(t,e){function n(r,i){const s=eT(t,i,e);return nT(s!==null),s}return n}function D$(t,e){function n(r,i){const s=eT(t,i,e);return nT(s!==null),R$(s,i,t.host,t._protocol)}return n}function rT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qM():i=KM():n.getStatus()===402?i=WM(t.bucket):n.getStatus()===403?i=GM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function L$(t){const e=rT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=HM(t.path)),s.serverResponse=i.serverResponse,s}return n}function M$(t,e,n){const r=e.fullServerUrl(),i=ry(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new tT(i,s,D$(t,n),o);return a.errorHandler=L$(e),a}function $$(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function j$(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$$(null,e)),r}function F$(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=j$(e,r,i),c=O$(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=fr.getBlob(h,r,f);if(d===null)throw e$();const v={name:u.fullPath},y=ry(s,t.host,t._protocol),w="POST",m=t.maxUploadRetryTime,p=new tT(y,w,P$(t,n),m);return p.urlParams=v,p.headers=o,p.body=d.uploadData(),p.errorHandler=rT(e),p}class U${constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Si.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Si.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Si.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw $o("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $o("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $o("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $o("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $o("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class z$ extends U${initXhr(){this.xhr_.responseType="text"}}function iT(){return new z$}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this._service=e,n instanceof jn?this._location=n:this._location=jn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new $i(e,n)}get root(){const e=new jn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return JI(this._location.path)}get storage(){return this._service}get parent(){const e=I$(this._location.path);if(e===null)return null;const n=new jn(this._location.bucket,e);return new $i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw r$(e)}}function B$(t,e,n){t._throwIfRoot("uploadBytes");const r=F$(t.storage,t._location,ZI(),new fr(e,!0),n);return t.storage.makeRequestWithTokens(r,iT).then(i=>({metadata:i,ref:t}))}function V$(t){t._throwIfRoot("getDownloadURL");const e=M$(t.storage,t._location,ZI());return t.storage.makeRequestWithTokens(e,iT).then(n=>{if(n===null)throw t$();return n})}function H$(t,e){const n=T$(t._location.path,e),r=new jn(t._location.bucket,n);return new $i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W$(t){return/^[A-Za-z]+:\/\//.test(t)}function K$(t,e){return new $i(t,e)}function sT(t,e){if(t instanceof iy){const n=t;if(n._bucket==null)throw ZM();const r=new $i(n,n._bucket);return e!=null?sT(r,e):r}else return e!==void 0?H$(t,e):t}function q$(t,e){if(e&&W$(e)){if(t instanceof iy)return K$(t,e);throw bm("To use ref(service, url), the first argument must be a Storage instance.")}else return sT(t,e)}function Iw(t,e){const n=e==null?void 0:e[WI];return n==null?null:jn.makeFromBucketSpec(n,t)}function G$(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:gb(i,t.app.options.projectId))}class iy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=HI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BM,this._maxUploadRetryTime=VM,this._requests=new Set,i!=null?this._bucket=jn.makeFromBucketSpec(i,this._host):this._bucket=Iw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jn.makeFromBucketSpec(this._url,e):this._bucket=Iw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Sw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Sw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $i(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new i$(KI());{const o=m$(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Tw="@firebase/storage",Cw="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="storage";function Q$(t,e,n){return t=ye(t),B$(t,e,n)}function Y$(t){return t=ye(t),V$(t)}function X$(t,e){return t=ye(t),q$(t,e)}function aT(t=Gg(),e){t=ye(t);const r=mo(t,oT).getImmediate({identifier:e}),i=db("storage");return i&&J$(r,...i),r}function J$(t,e,n,r={}){G$(t,e,n,r)}function Z$(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new iy(n,r,i,e,Gi)}function e4(){an(new Gt(oT,Z$,"PUBLIC").setMultipleInstances(!0)),Tt(Tw,Cw,""),Tt(Tw,Cw,"esm2017")}e4();const t4=(t,e)=>e.some(n=>t instanceof n);let xw,Aw;function n4(){return xw||(xw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function r4(){return Aw||(Aw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lT=new WeakMap,Sm=new WeakMap,uT=new WeakMap,wd=new WeakMap,sy=new WeakMap;function i4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lT.set(n,t)}).catch(()=>{}),sy.set(e,t),e}function s4(t){if(Sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sm.set(t,e)}let Im={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function o4(t){Im=t(Im)}function a4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kd(this),e,...n);return uT.set(r,e.sort?e.sort():[e]),Lr(r)}:r4().includes(t)?function(...e){return t.apply(kd(this),e),Lr(lT.get(this))}:function(...e){return Lr(t.apply(kd(this),e))}}function l4(t){return typeof t=="function"?a4(t):(t instanceof IDBTransaction&&s4(t),t4(t,n4())?new Proxy(t,Im):t)}function Lr(t){if(t instanceof IDBRequest)return i4(t);if(wd.has(t))return wd.get(t);const e=l4(t);return e!==t&&(wd.set(t,e),sy.set(e,t)),e}const kd=t=>sy.get(t);function u4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Lr(o.result),l.oldVersion,l.newVersion,Lr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const c4=["get","getKey","getAll","getAllKeys","count"],h4=["put","add","delete","clear"],_d=new Map;function Nw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_d.get(e))return _d.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=h4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||c4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _d.set(e,s),s}o4(t=>({...t,get:(e,n,r)=>Nw(e,n)||t.get(e,n,r),has:(e,n)=>!!Nw(e,n)||t.has(e,n)}));const cT="@firebase/installations",oy="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1e4,fT=`w:${oy}`,dT="FIS_v2",f4="https://firebaseinstallations.googleapis.com/v1",d4=60*60*1e3,p4="installations",m4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ji=new qi(p4,m4,g4);function pT(t){return t instanceof cn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT({projectId:t}){return`${f4}/projects/${t}/installations`}function gT(t){return{token:t.token,requestStatus:2,expiresIn:y4(t.expiresIn),creationTime:Date.now()}}async function vT(t,e){const r=(await e.json()).error;return ji.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function v4(t,{refreshToken:e}){const n=yT(t);return n.append("Authorization",w4(e)),n}async function wT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function y4(t){return Number(t.replace("s","000"))}function w4(t){return`${dT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k4({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mT(t),i=yT(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:dT,appId:t.appId,sdkVersion:fT},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await wT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:gT(u.authToken)}}else throw await vT("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _4(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E4=/^[cdef][\w-]{21}$/,Tm="";function b4(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=S4(t);return E4.test(n)?n:Tm}catch{return Tm}}function S4(t){return _4(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Map;function ET(t,e){const n=lf(t);bT(n,e),I4(n,e)}function bT(t,e){const n=_T.get(t);if(n)for(const r of n)r(e)}function I4(t,e){const n=T4();n&&n.postMessage({key:t,fid:e}),C4()}let vi=null;function T4(){return!vi&&"BroadcastChannel"in self&&(vi=new BroadcastChannel("[Firebase] FID Change"),vi.onmessage=t=>{bT(t.data.key,t.data.fid)}),vi}function C4(){_T.size===0&&vi&&(vi.close(),vi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4="firebase-installations-database",A4=1,Fi="firebase-installations-store";let Ed=null;function ay(){return Ed||(Ed=u4(x4,A4,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fi)}}})),Ed}async function Kc(t,e){const n=lf(t),i=(await ay()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&ET(t,e.fid),e}async function ST(t){const e=lf(t),r=(await ay()).transaction(Fi,"readwrite");await r.objectStore(Fi).delete(e),await r.done}async function uf(t,e){const n=lf(t),i=(await ay()).transaction(Fi,"readwrite"),s=i.objectStore(Fi),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&ET(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(t){let e;const n=await uf(t.appConfig,r=>{const i=N4(r),s=R4(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Tm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function N4(t){const e=t||{fid:b4(),registrationStatus:0};return IT(e)}function R4(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ji.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=O4(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:P4(t)}:{installationEntry:e}}async function O4(t,e){try{const n=await k4(t,e);return Kc(t.appConfig,n)}catch(n){throw pT(n)&&n.customData.serverCode===409?await ST(t.appConfig):await Kc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function P4(t){let e=await Rw(t.appConfig);for(;e.registrationStatus===1;)await kT(100),e=await Rw(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ly(t);return r||n}return e}function Rw(t){return uf(t,e=>{if(!e)throw ji.create("installation-not-found");return IT(e)})}function IT(t){return D4(t)?{fid:t.fid,registrationStatus:0}:t}function D4(t){return t.registrationStatus===1&&t.registrationTime+hT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L4({appConfig:t,heartbeatServiceProvider:e},n){const r=M4(t,n),i=v4(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:fT,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await wT(()=>fetch(r,a));if(l.ok){const u=await l.json();return gT(u)}else throw await vT("Generate Auth Token",l)}function M4(t,{fid:e}){return`${mT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e=!1){let n;const r=await uf(t.appConfig,s=>{if(!TT(s))throw ji.create("not-registered");const o=s.authToken;if(!e&&F4(o))return s;if(o.requestStatus===1)return n=$4(t,e),s;{if(!navigator.onLine)throw ji.create("app-offline");const a=z4(s);return n=j4(t,a),a}});return n?await n:r.authToken}async function $4(t,e){let n=await Ow(t.appConfig);for(;n.authToken.requestStatus===1;)await kT(100),n=await Ow(t.appConfig);const r=n.authToken;return r.requestStatus===0?uy(t,e):r}function Ow(t){return uf(t,e=>{if(!TT(e))throw ji.create("not-registered");const n=e.authToken;return B4(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function j4(t,e){try{const n=await L4(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Kc(t.appConfig,r),n}catch(n){if(pT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ST(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Kc(t.appConfig,r)}throw n}}function TT(t){return t!==void 0&&t.registrationStatus===2}function F4(t){return t.requestStatus===2&&!U4(t)}function U4(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d4}function z4(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function B4(t){return t.requestStatus===1&&t.requestTime+hT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V4(t){const e=t,{installationEntry:n,registrationPromise:r}=await ly(e);return r?r.catch(console.error):uy(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H4(t,e=!1){const n=t;return await W4(n),(await uy(n,e)).token}async function W4(t){const{registrationPromise:e}=await ly(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K4(t){if(!t||!t.options)throw bd("App Configuration");if(!t.name)throw bd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bd(t){return ji.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="installations",q4="installations-internal",G4=t=>{const e=t.getProvider("app").getImmediate(),n=K4(e),r=mo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Q4=t=>{const e=t.getProvider("app").getImmediate(),n=mo(e,CT).getImmediate();return{getId:()=>V4(n),getToken:i=>H4(n,i)}};function Y4(){an(new Gt(CT,G4,"PUBLIC")),an(new Gt(q4,Q4,"PRIVATE"))}Y4();Tt(cT,oy);Tt(cT,oy,"esm2017");const X4=(t,e)=>e.some(n=>t instanceof n);let Pw,Dw;function J4(){return Pw||(Pw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z4(){return Dw||(Dw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xT=new WeakMap,Cm=new WeakMap,AT=new WeakMap,Sd=new WeakMap,cy=new WeakMap;function ej(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xT.set(n,t)}).catch(()=>{}),cy.set(e,t),e}function tj(t){if(Cm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Cm.set(t,e)}let xm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nj(t){xm=t(xm)}function rj(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Id(this),e,...n);return AT.set(r,e.sort?e.sort():[e]),Vn(r)}:Z4().includes(t)?function(...e){return t.apply(Id(this),e),Vn(xT.get(this))}:function(...e){return Vn(t.apply(Id(this),e))}}function ij(t){return typeof t=="function"?rj(t):(t instanceof IDBTransaction&&tj(t),X4(t,J4())?new Proxy(t,xm):t)}function Vn(t){if(t instanceof IDBRequest)return ej(t);if(Sd.has(t))return Sd.get(t);const e=ij(t);return e!==t&&(Sd.set(t,e),cy.set(e,t)),e}const Id=t=>cy.get(t);function NT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Vn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Vn(o.result),l.oldVersion,l.newVersion,Vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}function Td(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Vn(n).then(()=>{})}const sj=["get","getKey","getAll","getAllKeys","count"],oj=["put","add","delete","clear"],Cd=new Map;function Lw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cd.get(e))return Cd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oj.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sj.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cd.set(e,s),s}nj(t=>({...t,get:(e,n,r)=>Lw(e,n)||t.get(e,n,r),has:(e,n)=>!!Lw(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aj="/firebase-messaging-sw.js",lj="/firebase-cloud-messaging-push-scope",RT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",uj="https://fcmregistrations.googleapis.com/v1",OT="google.c.a.c_id",cj="google.c.a.c_l",hj="google.c.a.ts",fj="google.c.a.e";var Mw;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mw||(Mw={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var tl;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(tl||(tl={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function dj(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="fcm_token_details_db",pj=5,$w="fcm_token_object_Store";async function mj(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(xd))return null;let e=null;return(await NT(xd,pj,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains($w))return;const l=o.objectStore($w),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(a=c.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:On(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:On(c.auth),p256dh:On(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:On(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:On(c.auth),p256dh:On(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:On(c.vapidKey)}}}}}})).close(),await Td(xd),await Td("fcm_vapid_details_db"),await Td("undefined"),gj(e)?e:null}function gj(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj="firebase-messaging-database",yj=1,Ui="firebase-messaging-store";let Ad=null;function hy(){return Ad||(Ad=NT(vj,yj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ui)}}})),Ad}async function PT(t){const e=dy(t),r=await(await hy()).transaction(Ui).objectStore(Ui).get(e);if(r)return r;{const i=await mj(t.appConfig.senderId);if(i)return await fy(t,i),i}}async function fy(t,e){const n=dy(t),i=(await hy()).transaction(Ui,"readwrite");return await i.objectStore(Ui).put(e,n),await i.done,e}async function wj(t){const e=dy(t),r=(await hy()).transaction(Ui,"readwrite");await r.objectStore(Ui).delete(e),await r.done}function dy({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kj={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pt=new qi("messaging","Messaging",kj);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _j(t,e){const n=await my(t),r=LT(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(py(t.appConfig),i)).json()}catch(o){throw Pt.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-subscribe-no-token");return s.token}async function Ej(t,e){const n=await my(t),r=LT(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${py(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Pt.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Pt.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Pt.create("token-update-no-token");return s.token}async function DT(t,e){const r={method:"DELETE",headers:await my(t)};try{const s=await(await fetch(`${py(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Pt.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Pt.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function py({projectId:t}){return`${uj}/projects/${t}/registrations`}async function my({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function LT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==RT&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bj=7*24*60*60*1e3;async function Sj(t){const e=await Cj(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:On(e.getKey("auth")),p256dh:On(e.getKey("p256dh"))},r=await PT(t.firebaseDependencies);if(r){if(xj(r.subscriptionOptions,n))return Date.now()>=r.createTime+bj?Tj(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await DT(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return jw(t.firebaseDependencies,n)}else return jw(t.firebaseDependencies,n)}async function Ij(t){const e=await PT(t.firebaseDependencies);e&&(await DT(t.firebaseDependencies,e.token),await wj(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Tj(t,e){try{const n=await Ej(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await fy(t.firebaseDependencies,r),n}catch(n){throw await Ij(t),n}}async function jw(t,e){const r={token:await _j(t,e),createTime:Date.now(),subscriptionOptions:e};return await fy(t,r),r.token}async function Cj(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:dj(e)})}function xj(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Aj(e,t),Nj(e,t),Rj(e,t),e}function Aj(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Nj(t,e){e.data&&(t.data=e.data)}function Rj(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oj(t){return typeof t=="object"&&!!t&&OT in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */MT("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");MT("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function MT(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pj(t){if(!t||!t.options)throw Nd("App Configuration Object");if(!t.name)throw Nd("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Nd(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Nd(t){return Pt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Pj(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lj(t){try{t.swRegistration=await navigator.serviceWorker.register(aj,{scope:lj}),t.swRegistration.update().catch(()=>{})}catch(e){throw Pt.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mj(t,e){if(!e&&!t.swRegistration&&await Lj(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pt.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $j(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=RT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jj(t,e){if(!navigator)throw Pt.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pt.create("permission-blocked");return await $j(t,e==null?void 0:e.vapidKey),await Mj(t,e==null?void 0:e.serviceWorkerRegistration),Sj(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fj(t,e,n){const r=Uj(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[OT],message_name:n[cj],message_time:n[hj],message_device_time:Math.floor(Date.now()/1e3)})}function Uj(t){switch(t){case tl.NOTIFICATION_CLICKED:return"notification_open";case tl.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zj(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===tl.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Fw(n)):t.onMessageHandler.next(Fw(n)));const r=n.data;Oj(r)&&r[fj]==="1"&&await Fj(t,n.messageType,r)}const Uw="@firebase/messaging",zw="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj=t=>{const e=new Dj(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>zj(e,n)),e},Vj=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>jj(e,r)}};function Hj(){an(new Gt("messaging",Bj,"PUBLIC")),an(new Gt("messaging-internal",Vj,"PRIVATE")),Tt(Uw,zw),Tt(Uw,zw,"esm2017")}Hj();const Wj={apiKey:"AIzaSyBlYQTn7ndntvXbd6ZuYo4gyPDJI77NxG8",authDomain:"uk-cliff-jumping-map.firebaseapp.com",projectId:"uk-cliff-jumping-map",storageBucket:"uk-cliff-jumping-map.appspot.com",messagingSenderId:"242535201985",appId:"1:242535201985:web:0e05d709e48e57d7716840"},qc=wb(Wj),En=TI(qc);aT(qc);function gy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $T(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kj=$T,jT=new qi("auth","Firebase",$T());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc=new Kg("@firebase/auth");function qj(t,...e){Gc.logLevel<=ee.WARN&&Gc.warn(`Auth (${Gi}): ${t}`,...e)}function Qu(t,...e){Gc.logLevel<=ee.ERROR&&Gc.error(`Auth (${Gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw vy(t,...e)}function bn(t,...e){return vy(t,...e)}function FT(t,e,n){const r=Object.assign(Object.assign({},Kj()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Gj(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Qt(t,"argument-error"),FT(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jT.create(t,...e)}function z(t,e,...n){if(!t)throw vy(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qu(e),new Error(e)}function Jn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qj(){return Bw()==="http:"||Bw()==="https:"}function Bw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yj(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qj()||gR()||"connection"in navigator)?navigator.onLine:!0}function Xj(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=pR()||vR()}get(){return Yj()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zj=new Rl(3e4,6e4);function es(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,i={}){return zT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),UT.fetch()(BT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function zT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jj),e);try{const i=new e3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw FT(t,c,u);Qt(t,c)}}catch(i){if(i instanceof cn)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Ol(t,e,n,r,i={}){const s=await Zr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function BT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yy(t.config,i):`${t.config.apiScheme}://${i}`}class e3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),Zj.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t3(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function n3(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r3(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=wy(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wa(Rd(i.auth_time)),issuedAtTime:wa(Rd(i.iat)),expirationTime:wa(Rd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rd(t){return Number(t)*1e3}function wy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qu("JWT malformed, contained fewer than 3 sections"),null;try{const i=hb(n);return i?JSON.parse(i):(Qu("Failed to decode base64 JWT payload"),null)}catch(i){return Qu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function i3(t){const e=wy(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function no(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&s3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function s3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wa(this.lastLoginAt),this.creationTime=wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await no(t,n3(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?u3(s.providerUserInfo):[],a=l3(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new VT(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function a3(t){const e=ye(t);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function u3(t){return t.map(e=>{var{providerId:n}=e,r=gy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c3(t,e){const n=await zT(t,{},async()=>{const r=pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=BT(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",UT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):i3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await c3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new nl;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new VT(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await no(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return r3(this,e)}reload(){return a3(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await no(this,t3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:E,providerData:b,stsTokenManager:C}=n;z(g&&C,e,"internal-error");const I=nl.fromJSON(this.name,C);z(typeof g=="string",e,"internal-error"),sr(h,e.name),sr(f,e.name),z(typeof _=="boolean",e,"internal-error"),z(typeof E=="boolean",e,"internal-error"),sr(d,e.name),sr(v,e.name),sr(y,e.name),sr(w,e.name),sr(m,e.name),sr(p,e.name);const M=new Ii({uid:g,auth:e,email:f,emailVerified:_,displayName:h,isAnonymous:E,photoURL:v,phoneNumber:d,tenantId:y,stsTokenManager:I,createdAt:m,lastLoginAt:p});return b&&Array.isArray(b)&&(M.providerData=b.map($=>Object.assign({},$))),w&&(M._redirectEventId=w),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new nl;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=new Map;function Un(t){Jn(t instanceof Function,"Expected a class definition");let e=Vw.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}HT.type="NONE";const Hw=HT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Un(Hw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(Hw);const o=Yu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Ii._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ls(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(QT(e))return"Blackberry";if(YT(e))return"Webos";if(ky(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(GT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(t=ct()){return/firefox\//i.test(t)}function ky(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=ct()){return/crios\//i.test(t)}function qT(t=ct()){return/iemobile/i.test(t)}function GT(t=ct()){return/android/i.test(t)}function QT(t=ct()){return/blackberry/i.test(t)}function YT(t=ct()){return/webos/i.test(t)}function cf(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function h3(t=ct()){var e;return cf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f3(){return yR()&&document.documentMode===10}function XT(t=ct()){return cf(t)||GT(t)||YT(t)||QT(t)||/windows phone/i.test(t)||qT(t)}function d3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(t,e=[]){let n;switch(t){case"Browser":n=Ww(ct());break;case"Worker":n=`${Ww(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}async function ZT(t,e){return Zr(t,"GET","/v2/recaptchaConfig",es(t,e))}function Kw(t){return t!==void 0&&t.enterprise!==void 0}class eC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function tC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",p3().appendChild(r)})}function m3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const g3="https://www.google.com/recaptcha/enterprise.js?render=",v3="recaptcha-enterprise",y3="NO_RECAPTCHA";class nC{constructor(e){this.type=v3,this.auth=ei(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ZT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Kw(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(y3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Kw(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}tC(g3+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ro(t,e,n,r=!1){const i=new nC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qw(this),this.idTokenSubscription=new qw(this),this.beforeStateQueue=new w3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xj()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ye(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}async initializeRecaptchaConfig(){const e=await ZT(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new eC(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new nC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=JT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qj(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ei(t){return ye(t)}class qw{constructor(e){this.auth=e,this.observer=null,this.addObserver=IR(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _3(t,e){const n=mo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nc(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function E3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function b3(t,e,n){const r=ei(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rC(e),{host:o,port:a}=S3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||I3()}function rC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S3(t){const e=rC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Gw(o)}}}function Gw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function T3(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Od(t,e){return Ol(t,"POST","/v1/accounts:signInWithPassword",es(t,e))}async function C3(t,e){return Zr(t,"POST","/v1/accounts:sendOobCode",es(t,e))}async function Pd(t,e){return C3(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x3(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}async function A3(t,e){return Ol(t,"POST","/v1/accounts:signInWithEmailLink",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends _y{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new rl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new rl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ro(e,r,"signInWithPassword");return Od(e,i)}else return Od(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ro(e,r,"signInWithPassword");return Od(e,s)}else return Promise.reject(i)});case"emailLink":return x3(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return T3(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return A3(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return Ol(t,"POST","/v1/accounts:signInWithIdp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3="http://localhost";class zi extends _y{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:N3,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R3(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function O3(t){const e=Wo(Ko(t)).link,n=e?Wo(Ko(e)).deep_link_id:null,r=Wo(Ko(t)).deep_link_id;return(r?Wo(Ko(r)).link:null)||r||n||e||t}class Ey{constructor(e){var n,r,i,s,o,a;const l=Wo(Ko(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=R3((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=O3(e);try{return new Ey(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,n){return rl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ey.parseLink(n);return z(r,"argument-error"),rl._fromEmailAndCode(e,r.code,r.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends by{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Pl{constructor(){super("facebook.com")}static credential(e){return zi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Pl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zi._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Pl{constructor(){super("github.com")}static credential(e){return zi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Pl{constructor(){super("twitter.com")}static credential(e,n){return zi._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,e){return Ol(t,"POST","/v1/accounts:signUp",es(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=Qw(r);return new Bi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qw(r);return new Bi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Yc(e,n,r,i)}}function iC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Yc._fromErrorAndOperation(t,s,e,r):s})}async function P3(t,e,n=!1){const r=await no(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D3(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await no(t,iC(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=wy(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e,n=!1){const r="signIn",i=await iC(t,r,e),s=await Bi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function L3(t,e){return sC(ei(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t,e,n){var r;z(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),z(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(z(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(z(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M3(t,e,n){var r;const i=ei(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await ro(i,s,"getOobCode",!0);n&&Ld(i,o,n),await Pd(i,o)}else n&&Ld(i,s,n),await Pd(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await ro(i,s,"getOobCode",!0);n&&Ld(i,a,n),await Pd(i,a)}else return Promise.reject(o)})}async function $3(t,e,n){var r;const i=ei(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await ro(i,s,"signUpPassword");o=Dd(i,u)}else o=Dd(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await ro(i,s,"signUpPassword");return Dd(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Bi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function j3(t,e,n){return L3(ye(t),Eo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F3(t,e){return Zr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U3(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ye(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await no(r,F3(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z3(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function B3(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function V3(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}const Xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(){const t=ct();return ky(t)||cf(t)}const W3=1e3,K3=10;class aC extends oC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H3()&&d3(),this.fallbackToPolling=XT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);f3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K3):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}aC.type="LOCAL";const q3=aC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC extends oC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}lC.type="SESSION";const uC=lC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await G3(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Sy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function Y3(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function X3(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J3(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z3(){return cC()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="firebaseLocalStorageDb",eF=1,Jc="firebaseLocalStorage",fC="fbase_key";class Dl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ff(t,e){return t.transaction([Jc],e?"readwrite":"readonly").objectStore(Jc)}function tF(){const t=indexedDB.deleteDatabase(hC);return new Dl(t).toPromise()}function Nm(){const t=indexedDB.open(hC,eF);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jc,{keyPath:fC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jc)?e(r):(r.close(),await tF(),e(await Nm()))})})}async function Yw(t,e,n){const r=ff(t,!0).put({[fC]:e,value:n});return new Dl(r).toPromise()}async function nF(t,e){const n=ff(t,!1).get(e),r=await new Dl(n).toPromise();return r===void 0?null:r.value}function Xw(t,e){const n=ff(t,!0).delete(e);return new Dl(n).toPromise()}const rF=800,iF=3;class dC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iF)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hf._getInstance(Z3()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X3(),!this.activeServiceWorker)return;this.sender=new Q3(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J3()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nm();return await Yw(e,Xc,"1"),await Xw(e,Xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nF(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ff(i,!1).getAll();return new Dl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rF)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dC.type="LOCAL";const sF=dC;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){return e?Un(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy extends _y{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oF(t){return sC(t.auth,new Iy(t),t.bypassAuthState)}function aF(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),D3(n,new Iy(t),t.bypassAuthState)}async function lF(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),P3(n,new Iy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oF;case"linkViaPopup":case"linkViaRedirect":return lF;case"reauthViaPopup":case"reauthViaRedirect":return aF;default:Qt(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF=new Rl(2e3,1e4);async function cF(t,e,n){const r=ei(t);Gj(t,e,by);const i=pC(r,n);return new yi(r,"signInViaPopup",e,i).executeNotNull()}class yi extends mC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Sy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uF.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF="pendingRedirect",Xu=new Map;class fF extends mC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xu.get(this.auth._key());if(!e){try{const r=await dF(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xu.set(this.auth._key(),e)}return this.bypassAuthState||Xu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dF(t,e){const n=gF(e),r=mF(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pF(t,e){Xu.set(t._key(),e)}function mF(t){return Un(t._redirectPersistence)}function gF(t){return Yu(hF,t.config.apiKey,t.name)}async function vF(t,e,n=!1){const r=ei(t),i=pC(r,e),o=await new fF(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yF=10*60*1e3;class wF{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kF(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yF&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jw(e))}saveEventToCache(e){this.cachedEventUids.add(Jw(e)),this.lastProcessedEventTime=Date.now()}}function Jw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kF(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _F(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EF=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bF=/^https?/;async function SF(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _F(t);for(const n of e)try{if(IF(n))return}catch{}Qt(t,"unauthorized-domain")}function IF(t){const e=Am(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bF.test(n))return!1;if(EF.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TF=new Rl(3e4,6e4);function Zw(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CF(t){return new Promise((e,n)=>{var r,i,s;function o(){Zw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zw(),n(bn(t,"network-request-failed"))},timeout:TF.get()})}if(!((i=(r=Sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Sn().gapi)===null||s===void 0)&&s.load)o();else{const a=m3("iframefcb");return Sn()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},tC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function xF(t){return Ju=Ju||CF(t),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF=new Rl(5e3,15e3),NF="__/auth/iframe",RF="emulator/auth/iframe",OF={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PF=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DF(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yy(e,RF):`https://${t.config.authDomain}/${NF}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=PF.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pl(r).slice(1)}`}async function LF(t){const e=await xF(t),n=Sn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:DF(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OF,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=Sn().setTimeout(()=>{s(o)},AF.get());function l(){Sn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MF={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$F=500,jF=600,FF="_blank",UF="http://localhost";class ek{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zF(t,e,n,r=$F,i=jF){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MF),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ct().toLowerCase();n&&(a=KT(u)?FF:n),WT(u)&&(e=e||UF,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[d,v])=>`${f}${d}=${v},`,"");if(h3(u)&&a!=="_self")return BF(e||"",a),new ek(null);const h=window.open(e||"",a,c);z(h,t,"popup-blocked");try{h.focus()}catch{}return new ek(h)}function BF(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VF="__/auth/handler",HF="emulator/auth/handler",WF=encodeURIComponent("fac");async function tk(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof by){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Pl){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${WF}=${encodeURIComponent(l)}`:"";return`${KF(t)}?${pl(a).slice(1)}${u}`}function KF({config:t}){return t.emulator?yy(t,HF):`https://${t.authDomain}/${VF}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="webStorageSupport";class qF{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uC,this._completeRedirectFn=vF,this._overrideRedirectResult=pF}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await tk(e,n,r,Am(),i);return zF(e,o,Sy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await tk(e,n,r,Am(),i);return Y3(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LF(e),r=new wF(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Md,{type:Md},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Md];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SF(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return XT()||ky()||cf()}}const GF=qF;var nk="@firebase/auth",rk="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XF(t){an(new Gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:JT(t)},u=new k3(r,i,s,l);return E3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Gt("auth-internal",e=>{const n=ei(e.getProvider("auth").getImmediate());return(r=>new QF(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(nk,rk,YF(t)),Tt(nk,rk,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JF=5*60,ZF=mb("authIdTokenMaxAge")||JF;let ik=null;const eU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZF)return;const i=n==null?void 0:n.token;ik!==i&&(ik=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function In(t=Gg()){const e=mo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_3(t,{popupRedirectResolver:GF,persistence:[sF,q3,uC]}),r=mb("authTokenSyncURL");if(r){const s=eU(r);B3(n,s,()=>s(n.currentUser)),z3(n,o=>s(o))}const i=fb("auth");return i&&b3(n,`http://${i}`),n}XF("Browser");const tU=({info:t})=>{const[e,n]=S.useState(!1),[r,i]=S.useState(!1);S.useEffect(()=>{(()=>{const u=In().currentUser;i(u!==null)})()},[]),S.useEffect(()=>{(async()=>{try{const u=In().currentUser;if(!u){console.error("No authenticated user found");return}const c=u.uid,h=sn(En,"users",c),d=(await to(h)).data(),{locationIds:v=[]}=d||{};n(v.includes(t.properties.Name))}catch(l){console.error("Error checking if location saved:",l)}})()},[t.properties.Name]);const s=async()=>{if(!r){console.error("No authenticated user found");return}try{const l=In().currentUser;if(!l){console.error("No authenticated user found");return}const u=l.uid,c=sn(En,"users",u),f=(await to(c)).data(),{locationIds:d=[]}=f||{};d.includes(t.properties.Name)?(await Jv(c,{locationIds:VI(t.properties.Name)}),console.log("Location ID removed from user document"),B.success("Location removed"),n(!1)):(await af(c,{locationIds:FM(t.properties.Name)},{merge:!0}),console.log("Location ID added to user document"),B.success("Location Saved"),n(!0))}catch{B.error("Could not toggle Location")}},o=()=>{const[a,l]=(t==null?void 0:t.geometry.coordinates)??[];if(l&&a){const u=`https://www.google.com/maps/search/?api=1&query=${l},${a}`;window.open(u,"_blank")}};return k.jsx("div",{className:"infoBox",children:t&&k.jsxs(k.Fragment,{children:[k.jsx("h2",{children:k.jsx("strong",{children:t.properties.Name?t.properties.Name.toUpperCase():""})}),k.jsx("ul",{children:k.jsx("li",{children:k.jsxs("strong",{children:[t.geometry.coordinates[0],", ",t.geometry.coordinates[1]]})})}),k.jsxs("div",{className:"buttonsContainer",children:[r&&(e?k.jsx("button",{onClick:s,className:"infoBox-button-unsave",children:k.jsx("p",{children:"Unsave"})}):k.jsx("button",{onClick:s,className:"infoBox-button-save",children:k.jsx("p",{children:"Save"})})),k.jsx(jr,{to:`/location/${t.properties.Name}`,children:k.jsx("button",{className:"infoBoxMore",children:k.jsx("p",{children:"Details"})})}),k.jsx("button",{className:"infoBoxMore",onClick:o,children:"Google pin"})]})]})})},nU=({eventData:t})=>{const[e,n]=S.useState(null),r=t.map((i,s)=>{const{geometry:o}=i,{coordinates:a}=o;return k.jsx(lb,{lat:a[1],lng:a[0],text:`${s+1}`,onClick:()=>n(i),highlighted:e===i},s)});return k.jsxs("div",{className:"map",children:[k.jsx(ha,{bootstrapURLKeys:{key:Bk},defaultCenter:{lat:51.5074,lng:-.1858},defaultZoom:7,children:r}),e&&k.jsx(tU,{info:e})]})};function sk(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sk(Object(n),!0).forEach(function(r){Le(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sk(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Zc(t){return Zc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Zc(t)}function rU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ok(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function iU(t,e,n){return e&&ok(t.prototype,e),n&&ok(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Le(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ty(t,e){return oU(t)||lU(t,e)||vC(t,e)||cU()}function Ll(t){return sU(t)||aU(t)||vC(t)||uU()}function sU(t){if(Array.isArray(t))return Rm(t)}function oU(t){if(Array.isArray(t))return t}function aU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function vC(t,e){if(t){if(typeof t=="string")return Rm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rm(t,e)}}function Rm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function uU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ak=function(){},Cy={},yC={},wC=null,kC={mark:ak,measure:ak};try{typeof window<"u"&&(Cy=window),typeof document<"u"&&(yC=document),typeof MutationObserver<"u"&&(wC=MutationObserver),typeof performance<"u"&&(kC=performance)}catch{}var hU=Cy.navigator||{},lk=hU.userAgent,uk=lk===void 0?"":lk,Vr=Cy,he=yC,ck=wC,ku=kC;Vr.document;var rr=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",_C=~uk.indexOf("MSIE")||~uk.indexOf("Trident/"),_u,Eu,bu,Su,Iu,Zn="___FONT_AWESOME___",Om=16,EC="fa",bC="svg-inline--fa",Vi="data-fa-i2svg",Pm="data-fa-pseudo-element",fU="data-fa-pseudo-element-pending",xy="data-prefix",Ay="data-icon",hk="fontawesome-i2svg",dU="async",pU=["HTML","HEAD","STYLE","SCRIPT"],SC=function(){try{return!0}catch{return!1}}(),ae="classic",_e="sharp",Ny=[ae,_e];function Ml(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ae]}})}var il=Ml((_u={},Le(_u,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Le(_u,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),_u)),sl=Ml((Eu={},Le(Eu,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Le(Eu,_e,{solid:"fass",regular:"fasr",light:"fasl"}),Eu)),ol=Ml((bu={},Le(bu,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Le(bu,_e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bu)),mU=Ml((Su={},Le(Su,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Le(Su,_e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Su)),gU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,IC="fa-layers-text",vU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,yU=Ml((Iu={},Le(Iu,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Le(Iu,_e,{900:"fass",400:"fasr",300:"fasl"}),Iu)),TC=[1,2,3,4,5,6,7,8,9,10],wU=TC.concat([11,12,13,14,15,16,17,18,19,20]),kU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],wi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},al=new Set;Object.keys(sl[ae]).map(al.add.bind(al));Object.keys(sl[_e]).map(al.add.bind(al));var _U=[].concat(Ny,Ll(al),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",wi.GROUP,wi.SWAP_OPACITY,wi.PRIMARY,wi.SECONDARY]).concat(TC.map(function(t){return"".concat(t,"x")})).concat(wU.map(function(t){return"w-".concat(t)})),ka=Vr.FontAwesomeConfig||{};function EU(t){var e=he.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function bU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(he&&typeof he.querySelector=="function"){var SU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];SU.forEach(function(t){var e=Ty(t,2),n=e[0],r=e[1],i=bU(EU(n));i!=null&&(ka[r]=i)})}var CC={styleDefault:"solid",familyDefault:"classic",cssPrefix:EC,replacementClass:bC,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ka.familyPrefix&&(ka.cssPrefix=ka.familyPrefix);var io=P(P({},CC),ka);io.autoReplaceSvg||(io.observeMutations=!1);var j={};Object.keys(CC).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){io[t]=n,_a.forEach(function(r){return r(j)})},get:function(){return io[t]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(e){io.cssPrefix=e,_a.forEach(function(n){return n(j)})},get:function(){return io.cssPrefix}});Vr.FontAwesomeConfig=j;var _a=[];function IU(t){return _a.push(t),function(){_a.splice(_a.indexOf(t),1)}}var or=Om,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function TU(t){if(!(!t||!rr)){var e=he.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=he.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return he.head.insertBefore(e,r),t}}var CU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ll(){for(var t=12,e="";t-- >0;)e+=CU[Math.random()*62|0];return e}function bo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ry(t){return t.classList?bo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function xC(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(xC(t[n]),'" ')},"").trim()}function df(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Oy(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function AU(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function NU(t){var e=t.transform,n=t.width,r=n===void 0?Om:n,i=t.height,s=i===void 0?Om:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&_C?l+="translate(".concat(e.x/or-r/2,"em, ").concat(e.y/or-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/or,"em), calc(-50% + ").concat(e.y/or,"em)) "):l+="translate(".concat(e.x/or,"em, ").concat(e.y/or,"em) "),l+="scale(".concat(e.size/or*(e.flipX?-1:1),", ").concat(e.size/or*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var RU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function AC(){var t=EC,e=bC,n=j.cssPrefix,r=j.replacementClass,i=RU;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var fk=!1;function $d(){j.autoAddCss&&!fk&&(TU(AC()),fk=!0)}var OU={mixout:function(){return{dom:{css:AC,insertCss:$d}}},hooks:function(){return{beforeDOMElementCreation:function(){$d()},beforeI2svg:function(){$d()}}}},er=Vr||{};er[Zn]||(er[Zn]={});er[Zn].styles||(er[Zn].styles={});er[Zn].hooks||(er[Zn].hooks={});er[Zn].shims||(er[Zn].shims=[]);var en=er[Zn],NC=[],PU=function t(){he.removeEventListener("DOMContentLoaded",t),eh=1,NC.map(function(e){return e()})},eh=!1;rr&&(eh=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),eh||he.addEventListener("DOMContentLoaded",PU));function DU(t){rr&&(eh?setTimeout(t,0):NC.push(t))}function $l(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?xC(t):"<".concat(e," ").concat(xU(r),">").concat(s.map($l).join(""),"</").concat(e,">")}function dk(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var LU=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},jd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?LU(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function MU(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Dm(t){var e=MU(t);return e.length===1?e[0].toString(16):null}function $U(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function pk(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Lm(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=pk(e);typeof en.hooks.addPack=="function"&&!i?en.hooks.addPack(t,pk(e)):en.styles[t]=P(P({},en.styles[t]||{}),s),t==="fas"&&Lm("fa",e)}var Tu,Cu,xu,_s=en.styles,jU=en.shims,FU=(Tu={},Le(Tu,ae,Object.values(ol[ae])),Le(Tu,_e,Object.values(ol[_e])),Tu),Py=null,RC={},OC={},PC={},DC={},LC={},UU=(Cu={},Le(Cu,ae,Object.keys(il[ae])),Le(Cu,_e,Object.keys(il[_e])),Cu);function zU(t){return~_U.indexOf(t)}function BU(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!zU(i)?i:null}var MC=function(){var e=function(s){return jd(_s,function(o,a,l){return o[l]=jd(a,s,{}),o},{})};RC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),OC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),LC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in _s||j.autoFetchSvg,r=jd(jU,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});PC=r.names,DC=r.unicodes,Py=pf(j.styleDefault,{family:j.familyDefault})};IU(function(t){Py=pf(t.styleDefault,{family:j.familyDefault})});MC();function Dy(t,e){return(RC[t]||{})[e]}function VU(t,e){return(OC[t]||{})[e]}function ki(t,e){return(LC[t]||{})[e]}function $C(t){return PC[t]||{prefix:null,iconName:null}}function HU(t){var e=DC[t],n=Dy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Hr(){return Py}var Ly=function(){return{prefix:null,iconName:null,rest:[]}};function pf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ae:n,i=il[r][t],s=sl[r][t]||sl[r][i],o=t in en.styles?t:null;return s||o||null}var mk=(xu={},Le(xu,ae,Object.keys(ol[ae])),Le(xu,_e,Object.keys(ol[_e])),xu);function mf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Le(e,ae,"".concat(j.cssPrefix,"-").concat(ae)),Le(e,_e,"".concat(j.cssPrefix,"-").concat(_e)),e),o=null,a=ae;(t.includes(s[ae])||t.some(function(u){return mk[ae].includes(u)}))&&(a=ae),(t.includes(s[_e])||t.some(function(u){return mk[_e].includes(u)}))&&(a=_e);var l=t.reduce(function(u,c){var h=BU(j.cssPrefix,c);if(_s[c]?(c=FU[a].includes(c)?mU[a][c]:c,o=c,u.prefix=c):UU[a].indexOf(c)>-1?(o=c,u.prefix=pf(c,{family:a})):h?u.iconName=h:c!==j.replacementClass&&c!==s[ae]&&c!==s[_e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?$C(u.iconName):{},d=ki(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||d||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!_s.far&&_s.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},Ly());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(_s.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=ki(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Hr()||"fas"),l}var WU=function(){function t(){rU(this,t),this.definitions={}}return iU(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=P(P({},n.definitions[a]||{}),o[a]),Lm(a,o[a]);var l=ol[ae][a];l&&Lm(l,o[a]),MC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),gk=[],Es={},$s={},KU=Object.keys($s);function qU(t,e){var n=e.mixoutsTo;return gk=t,Es={},Object.keys($s).forEach(function(r){KU.indexOf(r)===-1&&delete $s[r]}),gk.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Zc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Es[o]||(Es[o]=[]),Es[o].push(s[o])})}r.provides&&r.provides($s)}),n}function Mm(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Es[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Hi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Es[t]||[];i.forEach(function(s){s.apply(null,n)})}function tr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return $s[t]?$s[t].apply(null,e):void 0}function $m(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Hr();if(e)return e=ki(n,e)||e,dk(jC.definitions,n,e)||dk(en.styles,n,e)}var jC=new WU,GU=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,Hi("noAuto")},QU={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rr?(Hi("beforeI2svg",e),tr("pseudoElements2svg",e),tr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,DU(function(){XU({autoReplaceSvgRoot:n}),Hi("watch",e)})}},YU={icon:function(e){if(e===null)return null;if(Zc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ki(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=pf(e[0]);return{prefix:r,iconName:ki(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.cssPrefix,"-"))>-1||e.match(gU))){var i=mf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Hr(),iconName:ki(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Hr();return{prefix:s,iconName:ki(s,e)||e}}}},jt={noAuto:GU,config:j,dom:QU,parse:YU,library:jC,findIconDefinition:$m,toHtml:$l},XU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?he:n;(Object.keys(en.styles).length>0||j.autoFetchSvg)&&rr&&j.autoReplaceSvg&&jt.dom.i2svg({node:r})};function gf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return $l(r)})}}),Object.defineProperty(t,"node",{get:function(){if(rr){var r=he.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function JU(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Oy(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=df(P(P({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ZU(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:r}]}]}function My(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,d=f===void 0?!1:f,v=r.found?r:n,y=v.width,w=v.height,m=i==="fak",p=[j.replacementClass,s?"".concat(j.cssPrefix,"-").concat(s):""].filter(function(M){return h.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(h.classes).join(" "),g={children:[],attributes:P(P({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},_=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};d&&(g.attributes[Vi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||ll())},children:[l]}),delete g.attributes.title);var E=P(P({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:P(P({},_),h.styles)}),b=r.found&&n.found?tr("generateAbstractMask",E)||{children:[],attributes:{}}:tr("generateAbstractIcon",E)||{children:[],attributes:{}},C=b.children,I=b.attributes;return E.children=C,E.attributes=I,a?ZU(E):JU(E)}function vk(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=P(P(P({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Vi]="");var c=P({},o.styles);Oy(i)&&(c.transform=NU({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=df(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function e5(t){var e=t.content,n=t.title,r=t.extra,i=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=df(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Fd=en.styles;function jm(t){var e=t[0],n=t[1],r=t.slice(4),i=Ty(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(wi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(wi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(wi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var t5={found:!1,width:512,height:512};function n5(t,e){!SC&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fm(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=Hr()),new Promise(function(r,i){if(tr("missingIconAbstract"),n==="fa"){var s=$C(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Fd[e]&&Fd[e][t]){var o=Fd[e][t];return r(jm(o))}n5(t,e),r(P(P({},t5),{},{icon:j.showMissingIcons&&t?tr("missingIconAbstract")||{}:{}}))})}var yk=function(){},Um=j.measurePerformance&&ku&&ku.mark&&ku.measure?ku:{mark:yk,measure:yk},Jo='FA "6.4.0"',r5=function(e){return Um.mark("".concat(Jo," ").concat(e," begins")),function(){return FC(e)}},FC=function(e){Um.mark("".concat(Jo," ").concat(e," ends")),Um.measure("".concat(Jo," ").concat(e),"".concat(Jo," ").concat(e," begins"),"".concat(Jo," ").concat(e," ends"))},$y={begin:r5,end:FC},Zu=function(){};function wk(t){var e=t.getAttribute?t.getAttribute(Vi):null;return typeof e=="string"}function i5(t){var e=t.getAttribute?t.getAttribute(xy):null,n=t.getAttribute?t.getAttribute(Ay):null;return e&&n}function s5(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function o5(){if(j.autoReplaceSvg===!0)return ec.replace;var t=ec[j.autoReplaceSvg];return t||ec.replace}function a5(t){return he.createElementNS("http://www.w3.org/2000/svg",t)}function l5(t){return he.createElement(t)}function UC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?a5:l5:n;if(typeof t=="string")return he.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(UC(o,{ceFn:r}))}),i}function u5(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ec={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(UC(i),n)}),n.getAttribute(Vi)===null&&j.keepOriginalSource){var r=he.createComment(u5(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ry(n).indexOf(j.replacementClass))return ec.replace(e);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===j.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return $l(a)}).join(`
`);n.setAttribute(Vi,""),n.innerHTML=o}};function kk(t){t()}function zC(t,e){var n=typeof e=="function"?e:Zu;if(t.length===0)n();else{var r=kk;j.mutateApproach===dU&&(r=Vr.requestAnimationFrame||kk),r(function(){var i=o5(),s=$y.begin("mutate");t.map(i),s(),n()})}}var jy=!1;function BC(){jy=!0}function zm(){jy=!1}var th=null;function _k(t){if(ck&&j.observeMutations){var e=t.treeCallback,n=e===void 0?Zu:e,r=t.nodeCallback,i=r===void 0?Zu:r,s=t.pseudoElementsCallback,o=s===void 0?Zu:s,a=t.observeMutationsRoot,l=a===void 0?he:a;th=new ck(function(u){if(!jy){var c=Hr();bo(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!wk(h.addedNodes[0])&&(j.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&j.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&wk(h.target)&&~kU.indexOf(h.attributeName))if(h.attributeName==="class"&&i5(h.target)){var f=mf(Ry(h.target)),d=f.prefix,v=f.iconName;h.target.setAttribute(xy,d||c),v&&h.target.setAttribute(Ay,v)}else s5(h.target)&&i(h.target)})}}),rr&&th.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function c5(){th&&th.disconnect()}function h5(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function f5(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=mf(Ry(t));return i.prefix||(i.prefix=Hr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=VU(i.prefix,t.innerText)||Dy(i.prefix,Dm(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function d5(t){var e=bo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||ll()):(e["aria-hidden"]="true",e.focusable="false")),e}function p5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ek(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=f5(t),r=n.iconName,i=n.prefix,s=n.rest,o=d5(t),a=Mm("parseNodeAttributes",{},t),l=e.styleParser?h5(t):[];return P({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var m5=en.styles;function VC(t){var e=j.autoReplaceSvg==="nest"?Ek(t,{styleParser:!1}):Ek(t);return~e.extra.classes.indexOf(IC)?tr("generateLayersText",t,e):tr("generateSvgReplacementMutation",t,e)}var Wr=new Set;Ny.map(function(t){Wr.add("fa-".concat(t))});Object.keys(il[ae]).map(Wr.add.bind(Wr));Object.keys(il[_e]).map(Wr.add.bind(Wr));Wr=Ll(Wr);function bk(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rr)return Promise.resolve();var n=he.documentElement.classList,r=function(h){return n.add("".concat(hk,"-").concat(h))},i=function(h){return n.remove("".concat(hk,"-").concat(h))},s=j.autoFetchSvg?Wr:Ny.map(function(c){return"fa-".concat(c)}).concat(Object.keys(m5));s.includes("fa")||s.push("fa");var o=[".".concat(IC,":not([").concat(Vi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Vi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=bo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=$y.begin("onTree"),u=a.reduce(function(c,h){try{var f=VC(h);f&&c.push(f)}catch(d){SC||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){zC(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function g5(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;VC(t).then(function(n){n&&zC([n],e)})}function v5(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:$m(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:$m(i||{})),t(r,P(P({},n),{},{mask:i}))}}var y5=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?yn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,d=n.titleId,v=d===void 0?null:d,y=n.classes,w=y===void 0?[]:y,m=n.attributes,p=m===void 0?{}:m,g=n.styles,_=g===void 0?{}:g;if(e){var E=e.prefix,b=e.iconName,C=e.icon;return gf(P({type:"icon"},e),function(){return Hi("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(f?p["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(v||ll()):(p["aria-hidden"]="true",p.focusable="false")),My({icons:{main:jm(C),mask:l?jm(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:b,transform:P(P({},yn),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:p,styles:_,classes:w}})})}},w5={mixout:function(){return{icon:v5(y5)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=bk,n.nodeCallback=g5,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?he:r,s=n.callback,o=s===void 0?function(){}:s;return bk(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(d,v){Promise.all([Fm(i,a),c.iconName?Fm(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=Ty(y,2),m=w[0],p=w[1];d([n,My({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=df(a);l.length>0&&(i.style=l);var u;return Oy(o)&&(u=tr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},k5={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return gf({type:"layer"},function(){Hi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(Ll(s)).join(" ")},children:o}]})}}}},_5={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return gf({type:"counter",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:r}),e5({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(Ll(a))}})})}}}},E5={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?yn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,d=f===void 0?{}:f;return gf({type:"text",content:n},function(){return Hi("beforeDOMElementCreation",{content:n,params:r}),vk({content:n,transform:P(P({},yn),s),title:a,extra:{attributes:h,styles:d,classes:["".concat(j.cssPrefix,"-layers-text")].concat(Ll(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(_C){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,vk({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},b5=new RegExp('"',"ug"),Sk=[1105920,1112319];function S5(t){var e=t.replace(b5,""),n=$U(e,0),r=n>=Sk[0]&&n<=Sk[1],i=e.length===2?e[0]===e[1]:!1;return{value:Dm(i?e[0]:e),isSecondary:r||i}}function Ik(t,e){var n="".concat(fU).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=bo(t.children),o=s.filter(function(C){return C.getAttribute(Pm)===e})[0],a=Vr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(vU),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?_e:ae,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?sl[f][l[2].toLowerCase()]:yU[f][u],v=S5(h),y=v.value,w=v.isSecondary,m=l[0].startsWith("FontAwesome"),p=Dy(d,y),g=p;if(m){var _=HU(y);_.iconName&&_.prefix&&(p=_.iconName,d=_.prefix)}if(p&&!w&&(!o||o.getAttribute(xy)!==d||o.getAttribute(Ay)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var E=p5(),b=E.extra;b.attributes[Pm]=e,Fm(p,d).then(function(C){var I=My(P(P({},E),{},{icons:{main:C,mask:Ly()},prefix:d,iconName:g,extra:b,watchable:!0})),M=he.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=I.map(function($){return $l($)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function I5(t){return Promise.all([Ik(t,"::before"),Ik(t,"::after")])}function T5(t){return t.parentNode!==document.head&&!~pU.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Pm)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tk(t){if(rr)return new Promise(function(e,n){var r=bo(t.querySelectorAll("*")).filter(T5).map(I5),i=$y.begin("searchPseudoElements");BC(),Promise.all(r).then(function(){i(),zm(),e()}).catch(function(){i(),zm(),n()})})}var C5={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tk,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?he:r;j.searchPseudoElements&&Tk(i)}}},Ck=!1,x5={mixout:function(){return{dom:{unwatch:function(){BC(),Ck=!0}}}},hooks:function(){return{bootstrap:function(){_k(Mm("mutationObserverCallbacks",{}))},noAuto:function(){c5()},watch:function(n){var r=n.observeMutationsRoot;Ck?zm():_k(Mm("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xk=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},A5={mixout:function(){return{parse:{transform:function(n){return xk(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xk(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},d={outer:a,inner:h,path:f};return{tag:"g",attributes:P({},d.outer),children:[{tag:"g",attributes:P({},d.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),d.path)}]}]}}}},Ud={x:0,y:0,width:"100%",height:"100%"};function Ak(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function N5(t){return t.tag==="g"?t.children:[t]}var R5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?mf(i.split(" ").map(function(o){return o.trim()})):Ly();return s.prefix||(s.prefix=Hr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,d=AU({transform:l,containerWidth:h,iconWidth:u}),v={tag:"rect",attributes:P(P({},Ud),{},{fill:"white"})},y=c.children?{children:c.children.map(Ak)}:{},w={tag:"g",attributes:P({},d.inner),children:[Ak(P({tag:c.tag,attributes:P(P({},c.attributes),d.path)},y))]},m={tag:"g",attributes:P({},d.outer),children:[w]},p="mask-".concat(a||ll()),g="clip-".concat(a||ll()),_={tag:"mask",attributes:P(P({},Ud),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,m]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:N5(f)},_]};return r.push(E,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Ud)}),{children:r,attributes:i}}}},O5={provides:function(e){var n=!1;Vr.matchMedia&&(n=Vr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:P(P({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:P(P({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:P(P({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},P5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},D5=[OU,w5,k5,_5,E5,C5,x5,A5,R5,O5,P5];qU(D5,{mixoutsTo:jt});jt.noAuto;jt.config;jt.library;jt.dom;var Bm=jt.parse;jt.findIconDefinition;jt.toHtml;var L5=jt.icon;jt.layer;jt.text;jt.counter;function Nk(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Er(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nk(Object(n),!0).forEach(function(r){bs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nk(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nh(t){return nh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nh(t)}function bs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $5(t,e){if(t==null)return{};var n=M5(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vm(t){return j5(t)||F5(t)||U5(t)||z5()}function j5(t){if(Array.isArray(t))return Hm(t)}function F5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function U5(t,e){if(t){if(typeof t=="string")return Hm(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hm(t,e)}}function Hm(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function z5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,d=t.inverse,v=t.border,y=t.listItem,w=t.flip,m=t.size,p=t.rotation,g=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":d,"fa-border":v,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},bs(e,"fa-".concat(m),typeof m<"u"&&m!==null),bs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),bs(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),bs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function V5(t){return t=t-0,t===t}function HC(t){return V5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var H5=["style"];function W5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function K5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[W5(i)]=s:e[i]=s,e},{})}function WC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return WC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=K5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[HC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=$5(n,H5);return i.attrs.style=Er(Er({},i.attrs.style),o),t.apply(void 0,[e.tag,Er(Er({},i.attrs),a)].concat(Vm(r)))}var KC=!1;try{KC=!0}catch{}function q5(){if(!KC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rk(t){if(t&&nh(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Bm.icon)return Bm.icon(t);if(t===null)return null;if(t&&nh(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?bs({},t,e):{}}var Ti=G.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Rk(n),c=zd("classes",[].concat(Vm(B5(t)),Vm(s.split(" ")))),h=zd("transform",typeof t.transform=="string"?Bm.transform(t.transform):t.transform),f=zd("mask",Rk(r)),d=L5(u,Er(Er(Er(Er({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!d)return q5("Could not find icon",u),null;var v=d.abstract,y={ref:e};return Object.keys(t).forEach(function(w){Ti.defaultProps.hasOwnProperty(w)||(y[w]=t[w])}),G5(v[0],y)});Ti.displayName="FontAwesomeIcon";Ti.propTypes={beat:A.bool,border:A.bool,beatFade:A.bool,bounce:A.bool,className:A.string,fade:A.bool,flash:A.bool,mask:A.oneOfType([A.object,A.array,A.string]),maskId:A.string,fixedWidth:A.bool,inverse:A.bool,flip:A.oneOf([!0,!1,"horizontal","vertical","both"]),icon:A.oneOfType([A.object,A.array,A.string]),listItem:A.bool,pull:A.oneOf(["right","left"]),pulse:A.bool,rotation:A.oneOf([0,90,180,270]),shake:A.bool,size:A.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:A.bool,spinPulse:A.bool,spinReverse:A.bool,symbol:A.oneOfType([A.bool,A.string]),title:A.string,titleId:A.string,transform:A.oneOfType([A.string,A.object]),swapOpacity:A.bool};Ti.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var G5=WC.bind(null,G.createElement),Q5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Y5={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},X5={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},J5=X5,Z5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},e9=Z5;const t9=()=>{const t=Qr(),e=S.useRef(null),[n,r]=S.useState(!1),i=()=>{r(!n)},s=a=>{t(a),i()},o=[{label:"Home",route:"/home"},{label:"Map",route:"/"},{label:"Profile",route:"/profile",icon:Y5},{label:"Search",route:"/search-locations",icon:J5}];return k.jsxs("header",{children:[k.jsx("h3",{children:k.jsx(jr,{to:"/",className:"header-title",children:k.jsx("h1",{children:"UKCJ Map"})})}),k.jsxs("nav",{className:n?"responsive_nav":"",ref:e,children:[o.map((a,l)=>k.jsxs("p",{onClick:()=>s(a.route),children:[a.icon&&k.jsx(Ti,{icon:a.icon})," ",a.label]},l)),k.jsx("button",{className:"nav-btn nav-close-btn",onClick:i,children:k.jsx(Ti,{icon:e9})})]}),k.jsx("button",{className:"nav-btn",onClick:i,children:k.jsx(Ti,{icon:Q5})})]})},n9=()=>{const t="jakelewisorton@gmail.com",e=[{label:"Facebook group",url:"https://www.facebook.com/groups/ukcliffjumping"}];return k.jsx("footer",{className:"footer",children:k.jsxs("div",{className:"contain",children:[k.jsx("div",{className:"col",children:k.jsx("h1",{children:"UK cliff jumping map"})}),k.jsxs("div",{className:"col",children:[k.jsx("h1",{children:"Contact us"}),k.jsx("ul",{children:k.jsx("li",{children:k.jsx("a",{className:"f-a",href:`mailto:${t}`,children:t})})})]}),k.jsxs("div",{className:"col",children:[k.jsx("h1",{children:"Menu"}),k.jsx("nav",{children:k.jsx("ul",{children:e.map((n,r)=>k.jsx("li",{children:k.jsx("a",{className:"f-a",href:n.url,"aria-label":n.label,children:n.label})},r))})})]}),k.jsx("div",{className:"clearfix"})]})})},qC="/assets/visibilityIcon-95e415a2.svg",r9="/assets/googleIcon-ffc65569.svg";function GC(){const t=Qr(),e=po(),n=async()=>{try{const r=In(),i=new Dn,o=(await cF(r,i)).user,a=sn(En,"users",o.uid);(await to(a)).exists()||await af(sn(En,"users",o.uid),{name:o.displayName,email:o.email,timestamp:BI()}),t("/")}catch{B.error("Could not authorize with Google")}};return k.jsxs("div",{className:"socialLogin",children:[k.jsxs("p",{children:[e.pathname==="/log-in"?"Log In":"Register"," with"]}),k.jsx("button",{className:"socialIconDiv",onClick:n,children:k.jsx("img",{className:"socialIconImg",src:r9,alt:"google"})})]})}var QC={},so={};Object.defineProperty(so,"__esModule",{value:!0});so.cssValue=so.parseLengthAndUnit=void 0;var i9={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function YC(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return i9[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}so.parseLengthAndUnit=YC;function s9(t){var e=YC(t);return"".concat(e.value).concat(e.unit)}so.cssValue=s9;var vf={};Object.defineProperty(vf,"__esModule",{value:!0});vf.createAnimation=void 0;var o9=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r};vf.createAnimation=o9;var rh=Tn&&Tn.__assign||function(){return rh=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},rh.apply(this,arguments)},a9=Tn&&Tn.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),l9=Tn&&Tn.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u9=Tn&&Tn.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)&&a9(e,t,n);return l9(e,t),e},c9=Tn&&Tn.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};Object.defineProperty(QC,"__esModule",{value:!0});var ii=u9(S),jo=so,Wm=vf,h9=[(0,Wm.createAnimation)("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}","pacman-1"),(0,Wm.createAnimation)("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}","pacman-2")];function f9(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?25:u,h=t.margin,f=h===void 0?2:h,d=c9(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=(0,jo.parseLengthAndUnit)(c),y=v.value,w=v.unit,m=rh({display:"inherit",position:"relative",fontSize:0,height:"".concat(y*2).concat(w),width:"".concat(y*2).concat(w)},l),p=(0,Wm.createAnimation)("PacmanLoader",`75% {opacity: 0.7}
    100% {transform: translate(`.concat("".concat(-4*y).concat(w),", ").concat("".concat(-y/4).concat(w),")}"),"ball"),g=function(M){return{width:"".concat(y/3).concat(w),height:"".concat(y/3).concat(w),backgroundColor:i,margin:(0,jo.cssValue)(f),borderRadius:"100%",transform:"translate(0, ".concat("".concat(-y/4).concat(w),")"),position:"absolute",top:"".concat(y).concat(w),left:"".concat(y*4).concat(w),animation:"".concat(p," ").concat(1/o,"s ").concat(M*.25,"s infinite linear"),animationFillMode:"both"}},_="".concat((0,jo.cssValue)(c)," solid transparent"),E="".concat((0,jo.cssValue)(c)," solid ").concat(i),b=function(M){return{width:0,height:0,borderRight:_,borderTop:M===0?_:E,borderLeft:E,borderBottom:M===0?E:_,borderRadius:(0,jo.cssValue)(c),position:"absolute",animation:"".concat(h9[M]," ").concat(.8/o,"s infinite ease-in-out"),animationFillMode:"both"}},C=b(0),I=b(1);return n?ii.createElement("span",rh({style:m},d),ii.createElement("span",{style:C}),ii.createElement("span",{style:I}),ii.createElement("span",{style:g(2)}),ii.createElement("span",{style:g(3)}),ii.createElement("span",{style:g(4)}),ii.createElement("span",{style:g(5)})):null}var XC=QC.default=f9;function d9(){const[t,e]=S.useState(!1),[n,r]=S.useState({name:"",email:"",password:"",timestamp:null}),{email:i,password:s,name:o}=n,[a,l]=S.useState(!1),u=Qr(),c=f=>{const{id:d,value:v}=f.target;r(y=>({...y,[d]:v}))},h=async f=>{if(f.preventDefault(),!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)){B.error("Please enter a valid email address");return}try{const v=In(qc);l(!0);const y=TI(qc),w=va(y,"users");if(!(await MM(RM(w,OM("name","==",o)))).empty){B.error("Username is already in use"),l(!1);return}const g=(await $3(v,i,s)).user;v.currentUser!==null&&await U3(v.currentUser,{displayName:o});const{password:_,...E}=n;E.timestamp=BI(),await af(sn(y,"users",g.uid),E),l(!1),u("/profile")}catch(v){v.code==="auth/email-already-in-use"?B.error("Email address is already in use"):B.error("Something went wrong with registration"),l(!1)}};return k.jsxs("main",{className:"log-in-container",children:[k.jsx("header",{className:"log-in-header",children:k.jsx("p",{className:"log-in-title",children:"Register"})}),k.jsxs("form",{className:"log-in-form",onSubmit:h,children:[k.jsx("div",{className:"input-wrapper",children:k.jsx("input",{type:"text",className:"log-in-input",placeholder:"Username",id:"name",value:o,onChange:c})}),k.jsx("div",{className:"input-wrapper",children:k.jsx("input",{type:"email",className:"log-in-input",placeholder:"Email",id:"email",value:i,onChange:c})}),k.jsxs("div",{className:"log-in-password",children:[k.jsx("input",{type:t?"text":"password",className:"log-in-input",placeholder:"Password",id:"password",value:s,onChange:c}),k.jsx("img",{src:qC,alt:"show password",className:"log-in-show-password",onClick:()=>e(f=>!f)})]}),k.jsx(jr,{to:"/log-in",className:"log-in-register-link",children:"Already have an account ? Log In"}),k.jsx("div",{className:"log-in-bar",children:a?k.jsx(XC,{color:"black"}):k.jsx("button",{className:"log-in-button",children:"Register"})})]}),k.jsx(GC,{})]})}function p9(){const[t,e]=S.useState(!1),[n,r]=S.useState({email:"",password:""}),{email:i,password:s}=n,[o,a]=S.useState(!1),[l,u]=S.useState({emailError:"",passwordError:""}),c=()=>{let v=!0;const y={emailError:"",passwordError:""};return i?/\S+@\S+\.\S+/.test(i)||(v=!1,y.emailError="Email is invalid"):(v=!1,y.emailError="Email is required"),s||(v=!1,y.passwordError="Password is required"),u(y),v},h=Qr(),f=v=>{const{id:y,value:w}=v.target;r(m=>({...m,[y]:w}))},d=async v=>{if(v.preventDefault(),!!c())try{const y=In();a(!0),(await j3(y,i,s)).user&&h("/"),a(!1)}catch(y){y.code==="auth/user-not-found"?B.error("Email not registered"):B.error("Bad user credentials"),a(!1)}};return k.jsx(k.Fragment,{children:k.jsxs("div",{className:"log-in-container",children:[k.jsx("header",{className:"log-in-header",children:k.jsx("p",{className:"log-in-title",children:"Log In"})}),k.jsxs("form",{className:"log-in-form",onSubmit:d,children:[k.jsxs("div",{className:"input-wrapper",children:[k.jsx("input",{type:"email",className:"log-in-input",placeholder:"Email",id:"email",value:i,onChange:f}),l.emailError&&k.jsx("span",{className:"error-message",children:l.emailError})]}),k.jsxs("div",{className:"log-in-password",children:[k.jsx("input",{type:t?"text":"password",className:"log-in-input",placeholder:"Password",id:"password",value:s,onChange:f}),l.passwordError&&k.jsx("span",{className:"error-message",children:l.passwordError}),k.jsx("img",{src:qC,alt:"show password",className:"log-in-show-password",onClick:()=>e(v=>!v)})]}),k.jsx(jr,{to:"/forgot-password",className:"log-in-forgot-password",children:"Forgot Password"}),k.jsx(jr,{to:"/register",className:"log-in-register-link",children:"Register"}),k.jsx("div",{className:"log-in-bar",children:o?k.jsx(XC,{color:"black"}):k.jsx("button",{className:"log-in-button",children:"Log In"})})]}),k.jsx(GC,{})]})})}var m9={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function JC(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return m9[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function Au(t){var e=JC(t);return"".concat(e.value).concat(e.unit)}var Km=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},ih=globalThis&&globalThis.__assign||function(){return ih=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ih.apply(this,arguments)},g9=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},v9=[Km("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(-44deg)}","pacman-1"),Km("PacmanLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(44deg)}","pacman-2")];function ts(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?25:u,h=t.margin,f=h===void 0?2:h,d=g9(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=JC(c),y=v.value,w=v.unit,m=ih({display:"inherit",position:"relative",fontSize:0,height:"".concat(y*2).concat(w),width:"".concat(y*2).concat(w)},l),p=Km("PacmanLoader",`75% {opacity: 0.7}
    100% {transform: translate(`.concat("".concat(-4*y).concat(w),", ").concat("".concat(-y/4).concat(w),")}"),"ball"),g=function(M){return{width:"".concat(y/3).concat(w),height:"".concat(y/3).concat(w),backgroundColor:i,margin:Au(f),borderRadius:"100%",transform:"translate(0, ".concat("".concat(-y/4).concat(w),")"),position:"absolute",top:"".concat(y).concat(w),left:"".concat(y*4).concat(w),animation:"".concat(p," ").concat(1/o,"s ").concat(M*.25,"s infinite linear"),animationFillMode:"both"}},_="".concat(Au(c)," solid transparent"),E="".concat(Au(c)," solid ").concat(i),b=function(M){return{width:0,height:0,borderRight:_,borderTop:M===0?_:E,borderLeft:E,borderBottom:M===0?E:_,borderRadius:Au(c),position:"absolute",animation:"".concat(v9[M]," ").concat(.8/o,"s infinite ease-in-out"),animationFillMode:"both"}},C=b(0),I=b(1);return n?S.createElement("span",ih({style:m},d),S.createElement("span",{style:C}),S.createElement("span",{style:I}),S.createElement("span",{style:g(2)}),S.createElement("span",{style:g(3)}),S.createElement("span",{style:g(4)}),S.createElement("span",{style:g(5)})):null}function y9(){const[t,e]=S.useState(""),[n,r]=S.useState(!1),i=o=>e(o.target.value),s=async o=>{o.preventDefault();try{const a=In();r(!0),await M3(a,t),r(!1),B.success("Email was sent")}catch(a){r(!1),a.code==="auth/invalid-email"?B.error("Invalid email. Please provide a valid email address."):a.code==="auth/user-not-found"?B.error("User not found. Please check the provided email address."):B.error("Could not send reset email. Please try again later.")}};return k.jsx(k.Fragment,{children:k.jsxs("div",{className:"log-in-container",children:[k.jsx("header",{className:"log-in-header",children:k.jsx("p",{className:"log-in-title",children:"Password Reset"})}),k.jsxs("form",{className:"log-in-form",onSubmit:s,children:[k.jsx("div",{className:"input-wrapper",children:k.jsx("input",{type:"email",className:"log-in-input",placeholder:"Email",id:"email",value:t,onChange:i})}),k.jsx(jr,{to:"/log-in",className:"log-in-forgot-password",children:"Log In"}),k.jsx("div",{className:"log-in-bar",children:n?k.jsx(ts,{color:"black"}):k.jsx("button",{className:"log-in-button",children:"Send Reset Email"})})]})]})})}const w9=({center:t,zoom:e,text:n})=>{const r={mapTypeId:"satellite"};return k.jsx("div",{className:"LocationPageMap",children:k.jsx(ha,{bootstrapURLKeys:{key:Bk},defaultCenter:t,defaultZoom:e,options:r,children:k.jsx(lb,{lat:t.lat,lng:t.lng,text:n,onClick:()=>{},highlighted:!0})})})},k9=["ahole","anus","ash0le","ash0les","asholes","ass","Ass Monkey","Assface","assh0le","assh0lez","asshole","assholes","assholz","asswipe","azzhole","bassterds","bastard","bastards","bastardz","basterds","basterdz","Biatch","bitch","bitches","Blow Job","boffing","butthole","buttwipe","c0ck","c0cks","c0k","Carpet Muncher","cawk","cawks","Clit","cnts","cntz","cock","cockhead","cock-head","cocks","CockSucker","cock-sucker","crap","cum","cunt","cunts","cuntz","dick","dild0","dild0s","dildo","dildos","dilld0","dilld0s","dominatricks","dominatrics","dominatrix","dyke","enema","f u c k","f u c k e r","fag","fag1t","faget","fagg1t","faggit","faggot","fagg0t","fagit","fags","fagz","faig","faigs","fart","flipping the bird","fuck","fucker","fuckin","fucking","fucks","Fudge Packer","fuk","Fukah","Fuken","fuker","Fukin","Fukk","Fukkah","Fukken","Fukker","Fukkin","g00k","God-damned","h00r","h0ar","h0re","hells","hoar","hoor","hoore","jackoff","jap","japs","jerk-off","jisim","jiss","jizm","jizz","knob","knobs","knobz","kunt","kunts","kuntz","Lezzian","Lipshits","Lipshitz","masochist","masokist","massterbait","masstrbait","masstrbate","masterbaiter","masterbate","masterbates","Motha Fucker","Motha Fuker","Motha Fukkah","Motha Fukker","Mother Fucker","Mother Fukah","Mother Fuker","Mother Fukkah","Mother Fukker","mother-fucker","Mutha Fucker","Mutha Fukah","Mutha Fuker","Mutha Fukkah","Mutha Fukker","n1gr","nastt","nigger;","nigur;","niiger;","niigr;","orafis","orgasim;","orgasm","orgasum","oriface","orifice","orifiss","packi","packie","packy","paki","pakie","paky","pecker","peeenus","peeenusss","peenus","peinus","pen1s","penas","penis","penis-breath","penus","penuus","Phuc","Phuck","Phuk","Phuker","Phukker","polac","polack","polak","Poonani","pr1c","pr1ck","pr1k","pusse","pussee","pussy","puuke","puuker","qweir","recktum","rectum","retard","sadist","scank","schlong","screwing","semen","sex","sexy","Sh!t","sh1t","sh1ter","sh1ts","sh1tter","sh1tz","shit","shits","shitter","Shitty","Shity","shitz","Shyt","Shyte","Shytty","Shyty","skanck","skank","skankee","skankey","skanks","Skanky","slag","slut","sluts","Slutty","slutz","son-of-a-bitch","tit","turd","va1jina","vag1na","vagiina","vagina","vaj1na","vajina","vullva","vulva","w0p","wh00r","wh0re","whore","xrated","xxx","b!+ch","bitch","blowjob","clit","arschloch","fuck","shit","ass","asshole","b!tch","b17ch","b1tch","bastard","bi+ch","boiolas","buceta","c0ck","cawk","chink","cipa","clits","cock","cum","cunt","dildo","dirsa","ejakulate","fatass","fcuk","fuk","fux0r","hoer","hore","jism","kawk","l3itch","l3i+ch","masturbate","masterbat*","masterbat3","motherfucker","s.o.b.","mofo","nazi","nigga","nigger","nutsack","phuck","pimpis","pusse","pussy","scrotum","sh!t","shemale","shi+","sh!+","slut","smut","teets","tits","boobs","b00bs","teez","testical","testicle","titt","w00se","jackoff","wank","whoar","whore","*damn","*dyke","*fuck*","*shit*","@$$","amcik","andskota","arse*","assrammer","ayir","bi7ch","bitch*","bollock*","breasts","butt-pirate","cabron","cazzo","chraa","chuj","Cock*","cunt*","d4mn","daygo","dego","dick*","dike*","dupa","dziwka","ejackulate","Ekrem*","Ekto","enculer","faen","fag*","fanculo","fanny","feces","feg","Felcher","ficken","fitt*","Flikker","foreskin","Fotze","Fu(*","fuk*","futkretzn","gook","guiena","h0r","h4x0r","hell","helvete","hoer*","honkey","Huevon","hui","injun","jizz","kanker*","kike","klootzak","kraut","knulle","kuk","kuksuger","Kurac","kurwa","kusi*","kyrpa*","lesbo","mamhoon","masturbat*","merd*","mibun","monkleigh","mouliewop","muie","mulkku","muschi","nazis","nepesaurio","nigger*","orospu","paska*","perse","picka","pierdol*","pillu*","pimmel","piss*","pizda","poontsee","poop","porn","p0rn","pr0n","preteen","pula","pule","puta","puto","qahbeh","queef*","rautenberg","schaffer","scheiss*","schlampe","schmuck","screw","sh!t*","sharmuta","sharmute","shipal","shiz","skribz","skurwysyn","sphencter","spic","spierdalaj","splooge","suka","b00b*","testicle*","titt*","twat","vittu","wank*","wetback*","wichser","wop*","yed","zabourah"],_9={words:k9};var E9={"4r5e":1,"5h1t":1,"5hit":1,a55:1,anal:1,anus:1,ar5e:1,arrse:1,arse:1,ass:1,"ass-fucker":1,asses:1,assfucker:1,assfukka:1,asshole:1,assholes:1,asswhole:1,a_s_s:1,"b!tch":1,b00bs:1,b17ch:1,b1tch:1,ballbag:1,balls:1,ballsack:1,bastard:1,beastial:1,beastiality:1,bellend:1,bestial:1,bestiality:1,"bi+ch":1,biatch:1,bitch:1,bitcher:1,bitchers:1,bitches:1,bitchin:1,bitching:1,bloody:1,"blow job":1,blowjob:1,blowjobs:1,boiolas:1,bollock:1,bollok:1,boner:1,boob:1,boobs:1,booobs:1,boooobs:1,booooobs:1,booooooobs:1,breasts:1,buceta:1,bugger:1,bum:1,"bunny fucker":1,butt:1,butthole:1,buttmuch:1,buttplug:1,c0ck:1,c0cksucker:1,"carpet muncher":1,cawk:1,chink:1,cipa:1,cl1t:1,clit:1,clitoris:1,clits:1,cnut:1,cock:1,"cock-sucker":1,cockface:1,cockhead:1,cockmunch:1,cockmuncher:1,cocks:1,cocksuck:1,cocksucked:1,cocksucker:1,cocksucking:1,cocksucks:1,cocksuka:1,cocksukka:1,cok:1,cokmuncher:1,coksucka:1,coon:1,cox:1,crap:1,cum:1,cummer:1,cumming:1,cums:1,cumshot:1,cunilingus:1,cunillingus:1,cunnilingus:1,cunt:1,cuntlick:1,cuntlicker:1,cuntlicking:1,cunts:1,cyalis:1,cyberfuc:1,cyberfuck:1,cyberfucked:1,cyberfucker:1,cyberfuckers:1,cyberfucking:1,d1ck:1,damn:1,dick:1,dickhead:1,dildo:1,dildos:1,dink:1,dinks:1,dirsa:1,dlck:1,"dog-fucker":1,doggin:1,dogging:1,donkeyribber:1,doosh:1,duche:1,dyke:1,ejaculate:1,ejaculated:1,ejaculates:1,ejaculating:1,ejaculatings:1,ejaculation:1,ejakulate:1,"f u c k":1,"f u c k e r":1,f4nny:1,fag:1,fagging:1,faggitt:1,faggot:1,faggs:1,fagot:1,fagots:1,fags:1,fanny:1,fannyflaps:1,fannyfucker:1,fanyy:1,fatass:1,fcuk:1,fcuker:1,fcuking:1,feck:1,fecker:1,felching:1,fellate:1,fellatio:1,fingerfuck:1,fingerfucked:1,fingerfucker:1,fingerfuckers:1,fingerfucking:1,fingerfucks:1,fistfuck:1,fistfucked:1,fistfucker:1,fistfuckers:1,fistfucking:1,fistfuckings:1,fistfucks:1,flange:1,fook:1,fooker:1,fuck:1,fucka:1,fucked:1,fucker:1,fuckers:1,fuckhead:1,fuckheads:1,fuckin:1,fucking:1,fuckings:1,fuckingshitmotherfucker:1,fuckme:1,fucks:1,fuckwhit:1,fuckwit:1,"fudge packer":1,fudgepacker:1,fuk:1,fuker:1,fukker:1,fukkin:1,fuks:1,fukwhit:1,fukwit:1,fux:1,fux0r:1,f_u_c_k:1,gangbang:1,gangbanged:1,gangbangs:1,gaylord:1,gaysex:1,goatse:1,God:1,"god-dam":1,"god-damned":1,goddamn:1,goddamned:1,hardcoresex:1,hell:1,heshe:1,hoar:1,hoare:1,hoer:1,homo:1,hore:1,horniest:1,horny:1,hotsex:1,"jack-off":1,jackoff:1,jap:1,"jerk-off":1,jism:1,jiz:1,jizm:1,jizz:1,kawk:1,knob:1,knobead:1,knobed:1,knobend:1,knobhead:1,knobjocky:1,knobjokey:1,kock:1,kondum:1,kondums:1,kum:1,kummer:1,kumming:1,kums:1,kunilingus:1,"l3i+ch":1,l3itch:1,labia:1,lust:1,lusting:1,m0f0:1,m0fo:1,m45terbate:1,ma5terb8:1,ma5terbate:1,masochist:1,"master-bate":1,masterb8:1,"masterbat*":1,masterbat3:1,masterbate:1,masterbation:1,masterbations:1,masturbate:1,"mo-fo":1,mof0:1,mofo:1,mothafuck:1,mothafucka:1,mothafuckas:1,mothafuckaz:1,mothafucked:1,mothafucker:1,mothafuckers:1,mothafuckin:1,mothafucking:1,mothafuckings:1,mothafucks:1,"mother fucker":1,motherfuck:1,motherfucked:1,motherfucker:1,motherfuckers:1,motherfuckin:1,motherfucking:1,motherfuckings:1,motherfuckka:1,motherfucks:1,muff:1,mutha:1,muthafecker:1,muthafuckker:1,muther:1,mutherfucker:1,n1gga:1,n1gger:1,nazi:1,nigg3r:1,nigg4h:1,nigga:1,niggah:1,niggas:1,niggaz:1,nigger:1,niggers:1,nob:1,"nob jokey":1,nobhead:1,nobjocky:1,nobjokey:1,numbnuts:1,nutsack:1,orgasim:1,orgasims:1,orgasm:1,orgasms:1,p0rn:1,pawn:1,pecker:1,penis:1,penisfucker:1,phonesex:1,phuck:1,phuk:1,phuked:1,phuking:1,phukked:1,phukking:1,phuks:1,phuq:1,pigfucker:1,pimpis:1,piss:1,pissed:1,pisser:1,pissers:1,pisses:1,pissflaps:1,pissin:1,pissing:1,pissoff:1,poop:1,porn:1,porno:1,pornography:1,pornos:1,prick:1,pricks:1,pron:1,pube:1,pusse:1,pussi:1,pussies:1,pussy:1,pussys:1,rectum:1,retard:1,rimjaw:1,rimming:1,"s hit":1,"s.o.b.":1,sadist:1,schlong:1,screwing:1,scroat:1,scrote:1,scrotum:1,semen:1,sex:1,"sh!+":1,"sh!t":1,sh1t:1,shag:1,shagger:1,shaggin:1,shagging:1,shemale:1,"shi+":1,shit:1,shitdick:1,shite:1,shited:1,shitey:1,shitfuck:1,shitfull:1,shithead:1,shiting:1,shitings:1,shits:1,shitted:1,shitter:1,shitters:1,shitting:1,shittings:1,shitty:1,skank:1,slut:1,sluts:1,smegma:1,smut:1,snatch:1,"son-of-a-bitch":1,spac:1,spunk:1,s_h_i_t:1,t1tt1e5:1,t1tties:1,teets:1,teez:1,testical:1,testicle:1,tit:1,titfuck:1,tits:1,titt:1,tittie5:1,tittiefucker:1,titties:1,tittyfuck:1,tittywank:1,titwank:1,tosser:1,turd:1,tw4t:1,twat:1,twathead:1,twatty:1,twunt:1,twunter:1,v14gra:1,v1gra:1,vagina:1,viagra:1,vulva:1,w00se:1,wang:1,wank:1,wanker:1,wanky:1,whoar:1,whore:1,willies:1,willy:1,xrated:1,xxx:1},b9=["4r5e","5h1t","5hit","a55","anal","anus","ar5e","arrse","arse","ass","ass-fucker","asses","assfucker","assfukka","asshole","assholes","asswhole","a_s_s","b!tch","b00bs","b17ch","b1tch","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","bi+ch","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blow job","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","bunny fucker","butt","butthole","buttmuch","buttplug","c0ck","c0cksucker","carpet muncher","cawk","chink","cipa","cl1t","clit","clitoris","clits","cnut","cock","cock-sucker","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","d1ck","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","dog-fucker","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","f u c k","f u c k e r","f4nny","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudge packer","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","fux0r","f_u_c_k","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","God","god-dam","god-damned","goddamn","goddamned","hardcoresex","hell","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jack-off","jackoff","jap","jerk-off","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","l3i+ch","l3itch","labia","lust","lusting","m0f0","m0fo","m45terbate","ma5terb8","ma5terbate","masochist","master-bate","masterb8","masterbat*","masterbat3","masterbate","masterbation","masterbations","masturbate","mo-fo","mof0","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","mother fucker","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","n1gga","n1gger","nazi","nigg3r","nigg4h","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nob jokey","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","p0rn","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","s hit","s.o.b.","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","sh!+","sh!t","sh1t","shag","shagger","shaggin","shagging","shemale","shi+","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","son-of-a-bitch","spac","spunk","s_h_i_t","t1tt1e5","t1tties","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittie5","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","tw4t","twat","twathead","twatty","twunt","twunter","v14gra","v1gra","vagina","viagra","vulva","w00se","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"],S9=/\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi,I9={object:E9,array:b9,regex:S9};const T9=_9.words,C9=I9.array;class x9{constructor(e={}){Object.assign(this,{list:e.emptyList&&[]||Array.prototype.concat.apply(T9,[C9,e.list||[]]),exclude:e.exclude||[],splitRegex:e.splitRegex||/\b/,placeHolder:e.placeHolder||"*",regex:e.regex||/[^a-zA-Z0-9|\$|\@]|\^/g,replaceRegex:e.replaceRegex||/\w/g})}isProfane(e){return this.list.filter(n=>{const r=new RegExp(`\\b${n.replace(/(\W)/g,"\\$1")}\\b`,"gi");return!this.exclude.includes(n.toLowerCase())&&r.test(e)}).length>0||!1}replaceWord(e){return e.replace(this.regex,"").replace(this.replaceRegex,this.placeHolder)}clean(e){return e.split(this.splitRegex).map(n=>this.isProfane(n)?this.replaceWord(n):n).join(this.splitRegex.exec(e)[0])}addWords(){let e=Array.from(arguments);this.list.push(...e),e.map(n=>n.toLowerCase()).forEach(n=>{this.exclude.includes(n)&&this.exclude.splice(this.exclude.indexOf(n),1)})}removeWords(){this.exclude.push(...Array.from(arguments).map(e=>e.toLowerCase()))}}var A9=x9;const N9=oo(A9);function R9(){const[t,e]=S.useState(null),[n,r]=S.useState(!0),[i,s]=S.useState([]),[o,a]=S.useState(""),l=ZA(),u=In(),c=u.currentUser,h=va(En,"locations"),f=sn(h,l.locationId),d=new N9;S.useEffect(()=>{(async()=>{try{const g=l.locationId;if(!g)throw new Error("Location ID is undefined");const _=await fetch(oh);if(!_.ok)throw new Error("Failed to fetch location");const E=await _.json(),b=g,C=E.locations.find(I=>I.properties.Name===b);console.log(C),e(C)}catch{B.error("Error fetching location")}try{const g=va(En,"locations"),_=sn(g,l.locationId),E=await to(_);if(E.exists()){const b=E.data();console.log(b),s(b.comments||[])}}catch{B.error("Error fetching additional data:")}r(!1)})();const p=jM(f,g=>{if(g.exists()){const _=g.data();console.log(_),s(_.comments||[])}});return()=>{p()}},[l.locationId]);const v=async()=>{try{const m=u.currentUser;if(!m)throw new Error("User is not authenticated");const p=m.displayName,g=m.uid,_=va(En,"locations"),E=sn(_,l.locationId),b=await to(E);if(b.exists()){const C=b.data();let I;C.comments?I=[...C.comments,{comment:o,userId:m.uid,displayName:m.displayName??""}]:I=[{comment:o,userId:m.uid,displayName:m.displayName??""}],await Jv(E,{comments:I}),s(I),a("")}else await af(E,{comments:[{comment:o,userId:g,displayName:p}]}),s([{comment:o,userId:m.uid,displayName:m.displayName??""}]),a("")}catch{B.error("Error adding comment:")}},y=()=>{const[m,p]=(t==null?void 0:t.geometry.coordinates)??[];if(m&&p){const g=`https://www.google.com/maps/search/?api=1&query=${m},${p}`;window.open(g,"_blank")}},w={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"};return n?k.jsx(ts,{color:"black",cssOverride:w}):k.jsxs("div",{className:"container",children:[k.jsx("h1",{className:"title",children:t==null?void 0:t.properties.Name.toUpperCase()}),t?k.jsx(w9,{text:`${t.properties.Name+1}`,center:{lat:t.geometry.coordinates[1],lng:t.geometry.coordinates[0]},zoom:15}):k.jsx("h1",{children:"Could Not Load Location"}),k.jsx("div",{className:"button-container",children:k.jsx("button",{className:"go-to-google-button",onClick:y,children:"Open in Google Maps"})}),k.jsxs("div",{className:"location-details",children:[k.jsx("h2",{className:"subtitle",children:"Location Details"}),k.jsx("ul",{children:k.jsx("li",{children:t!=null&&t.properties.description?k.jsx("div",{className:"value",dangerouslySetInnerHTML:{__html:t.properties.description}}):k.jsx("h2",{className:"value",children:"?"})})})]}),k.jsxs("div",{className:"comments",children:[k.jsx("h2",{className:"subtitle",children:"Comments"}),k.jsx("ul",{children:i.map((m,p)=>k.jsxs("li",{children:[k.jsxs("strong",{children:[m.displayName,": "]}),k.jsx("span",{className:"value",children:m.comment?d.clean(m.comment):""})]},p))}),c&&k.jsxs("div",{className:"add-comment",children:[k.jsx("input",{type:"text",value:o,onChange:m=>a(m.target.value)}),k.jsx("button",{onClick:v,children:"Add Comment"})]})]})]})}const O9=({data:t,onDelete:e})=>k.jsx("div",{className:"location-cards",children:t.map(n=>k.jsxs("div",{className:"card",children:[k.jsx(jr,{to:`/location/${n.properties.Name}`,className:"locationLink",children:k.jsxs("div",{children:[k.jsx("h3",{children:n.properties.Name}),k.jsxs("p",{children:["Coordinates: ",n.geometry.coordinates.join(", ")]})]})}),k.jsx("button",{onClick:()=>e(n.properties.Name),className:"cardButton",children:k.jsx("p",{children:"Unsave"})})]},n.properties.Name))});function P9(){const t=In(),[e,n]=S.useState([]),[r,i]=S.useState([]),[s,o]=S.useState([]),[a,l]=S.useState(!0),u=Qr();S.useEffect(()=>{(async()=>{try{const v=t.currentUser;if(!v){B.error("No authenticated user found");return}const y=v.uid,w=sn(En,"users",y),p=(await to(w)).data(),g=(p==null?void 0:p.locationIds)||[];console.log("Location IDs:",g),o(g);const E=await(await fetch(oh)).json();i(E.locations),console.log("Fetched Data:",E)}catch{B.error("Could not get locations")}l(!1)})()},[]),S.useEffect(()=>{const d=r.filter(v=>s.includes(v.properties.Name));n(d)},[s,r]);const c=async d=>{try{const v=t.currentUser;if(!v){B.error("No authenticated user found");return}const y=v.uid,w=sn(En,"users",y);await Jv(w,{locationIds:VI(d)}),B.success("Location deleted successfully"),n(e.filter(m=>m.properties.Name!==d))}catch{B.error("Could not delete location:")}},h=()=>{t.signOut(),u("/log-in")};console.log("filtered locations:",e);const f={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"};return k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"profile",children:[k.jsx("p",{className:"page-header",children:"My Profile"}),k.jsx("button",{type:"button",className:"logOut",onClick:h,children:"Logout"})]}),k.jsx("h2",{className:"Saved-locations-h2",children:e.length>0?"Saved Locations":"Use the map to save locations"}),a?k.jsx(ts,{color:"black",cssOverride:f}):k.jsx(O9,{data:e,onDelete:c})]})}const D9=()=>{const[t,e]=S.useState({jumpName:"",height:"",access:"",notes:"",coordinates:"",openedby:"",email:"",video:""}),[n,r]=S.useState([]),[i,s]=S.useState(!1),o=aT(),a=c=>{e(h=>({...h,[c.target.name]:c.target.value}))},l=c=>{const h=c.target.files;if(h){const f=Array.from(h);r(f),B.success("File added")}},u=async c=>{c.preventDefault(),s(!0);try{const h=[];for(const v of n){const y=X$(o,`submissions/${v.name}`);await Q$(y,v);const w=await Y$(y);h.push(w)}const f={...t,imageURLs:h},d=await $M(va(En,"submits"),f);console.log("Document written with ID: ",d.id),B.success("Form submitted successfully!"),e({jumpName:"",height:"",access:"",notes:"",coordinates:"",openedby:"",email:"",video:""}),r([])}catch(h){B.error("Error adding document"),console.log("error with form submit: ",h)}finally{s(!1)}};return k.jsxs("div",{className:"submit-form-container",children:[k.jsx("h1",{children:"Submit A New Jump"}),k.jsxs("form",{onSubmit:u,children:[k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"jumpName",children:"Jump Name * :"}),k.jsx("input",{type:"text",id:"jumpName",name:"jumpName",value:t.jumpName,onChange:a,required:!0})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"height",children:"Height in feet:"}),k.jsx("input",{type:"number",id:"height",name:"height",value:t.height,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"access",children:"Access:"}),k.jsx("textarea",{id:"access",name:"access",value:t.access,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"notes",children:"Notes:"}),k.jsx("textarea",{id:"notes",name:"notes",value:t.notes,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"coordinates",children:"Precise GPS coordinates * :"}),k.jsx("input",{type:"text",id:"coordinates",name:"coordinates",value:t.coordinates,onChange:a,required:!0})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"video",children:"Video link:"}),k.jsx("input",{type:"text",id:"video",name:"video",value:t.video,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"openedby",children:"Opened by:"}),k.jsx("input",{type:"text",id:"openedby",name:"openedby",value:t.openedby,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"email",children:"Your email in case more info needed:"}),k.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:a})]}),k.jsxs("div",{className:"submit-form-group",children:[k.jsx("label",{htmlFor:"imageFiles",className:"image-input-label",children:"Upload Images"}),k.jsx("input",{type:"file",id:"imageFiles",name:"imageFiles",onChange:l,className:"image-input",multiple:!0})]}),k.jsx("div",{className:"submit-form-group",children:k.jsx("button",{type:"submit",children:i?k.jsx(ts,{}):"Submit"})})]})]})};function L9(){return k.jsxs("div",{className:"home-container",children:[k.jsxs("div",{className:"warning-div",children:[k.jsx("h3",{children:"WARNING"}),k.jsx("p",{children:"The infomation on this guide can be innacurate and mistaken, and is only meant to help jumpers choose a location - you must be prepared to make all measurements and decisions alone. Do not rely on any information given here. Rock drops and GPS locations have the potential to be dangerously innacurate."}),k.jsx("p",{children:"Directions unless stated otherwise will be given from jumpers perspective."}),k.jsx("p",{children:"Thanks to everyone who helped compile this information!"})]}),k.jsx(jr,{to:"/submit",className:"submit-link",children:k.jsx("h2",{children:"SUBMIT NEW JUMP"})})]})}const M9=()=>{const[t,e]=S.useState(!1),[n,r]=S.useState(!0),i=S.useRef(!0);return S.useEffect(()=>{if(i){const s=In();V3(s,o=>{o&&e(!0),r(!1)})}return()=>{i.current=!1}},[i]),{loggedIn:t,checkingStatus:n}};function is(){const{loggedIn:t,checkingStatus:e}=M9(),n={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"};return e?k.jsx(ts,{color:"black",cssOverride:n}):t?k.jsx(dN,{}):k.jsx(fN,{to:"/log-in",replace:!0})}const $9=({location:{Name:t}})=>{const e=Qr(),n=()=>{e(`/location/${t}`)};return k.jsx("div",{className:"searchResults",onClick:n,children:k.jsx("h4",{children:t})})};function j9(){const[t,e]=S.useState(""),[n,r]=S.useState([]),[i,s]=S.useState(!1),o=u=>{e(u.target.value)},a=async u=>{u.preventDefault();try{s(!0);const f=(await(await fetch(oh)).json()).locations,d=t.toLowerCase(),v=f.filter(y=>y.Name.toLowerCase().includes(d)).slice(0,5);r(v),e(""),s(!1)}catch(c){console.error("Error fetching search results:",c),s(!1)}},l={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"};return k.jsxs(k.Fragment,{children:[k.jsxs("form",{onSubmit:a,className:"searchBar",children:[k.jsx("input",{type:"text",value:t,onChange:o,placeholder:"Search locations"}),k.jsx("button",{type:"submit",children:"Search"})]}),i?k.jsx(ts,{color:"black",cssOverride:l}):k.jsx("div",{className:"resultsList",children:k.jsx("ul",{children:n.map(u=>k.jsx($9,{location:u},u.Name))})})]})}function F9(){return k.jsx(k.Fragment,{children:k.jsx(j9,{})})}const U9=async()=>{try{const t=await fetch(oh);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return(await t.json()).locations}catch(t){throw console.error("Error:",t),t}};function z9(){const[t,e]=S.useState([]),[n,r]=S.useState(!1);S.useEffect(()=>{(async()=>{r(!0);try{const o=await U9();e(o)}catch{B.error("Error fetching locations")}finally{r(!1)}})()},[]);const i={display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",width:"100vw"};return n?k.jsx(ts,{color:"black",cssOverride:i}):k.jsxs(k.Fragment,{children:[k.jsxs(kN,{children:[k.jsxs(mN,{children:[k.jsx(et,{path:"/log-in",element:k.jsx(p9,{})}),k.jsx(et,{path:"/register",element:k.jsx(d9,{})}),k.jsx(et,{path:"/forgot-password",element:k.jsx(y9,{})}),k.jsx(et,{path:"/",element:k.jsx(is,{}),children:k.jsx(et,{path:"/",element:k.jsx(nU,{eventData:t})})}),k.jsx(et,{path:"/profile",element:k.jsx(is,{}),children:k.jsx(et,{path:"/profile",element:k.jsx(P9,{})})}),k.jsx(et,{path:"/search-locations",element:k.jsx(is,{}),children:k.jsx(et,{path:"/search-locations",element:k.jsx(F9,{})})}),k.jsx(et,{path:"/location/:locationId",element:k.jsx(is,{}),children:k.jsx(et,{path:"/location/:locationId",element:k.jsx(R9,{})})}),k.jsx(et,{path:"/submit",element:k.jsx(is,{}),children:k.jsx(et,{path:"/submit",element:k.jsx(D9,{})})}),k.jsx(et,{path:"/home",element:k.jsx(is,{}),children:k.jsx(et,{path:"/home",element:k.jsx(L9,{})})})]}),k.jsx(t9,{})]}),k.jsx(Fp,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),k.jsx(n9,{})]})}Bd.createRoot(document.getElementById("root")).render(k.jsx(z9,{}));
