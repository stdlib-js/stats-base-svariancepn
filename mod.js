// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,h,"e"),n=l.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=isNaN,E=Array.isArray;function A(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,s,l,p,g,d,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,y=void 0,(y=g-p.length)<0?p:p=d?p+m(y):m(y)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,P=Object.prototype,I=P.toString,V=P.__defineGetter__,N=P.__defineSetter__,$=P.__lookupGetter__,C=P.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&V&&V.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var R=T;function M(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B="function"==typeof Math.fround?Math.fround:null;var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function G(){return L&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var z,W="function"==typeof Symbol?Symbol:void 0,U="function"==typeof W?W.toStringTag:"";z=G()?function(r){var e,t,n,o,i;if(null==r)return Z.call(r);t=r[U],i=U,e=null!=(o=r)&&q.call(o,i);try{r[U]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[U]=t:delete r[U],n}:function(r){return Z.call(r)};var X=z,D="function"==typeof Float32Array;var J=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null;var H,K="function"==typeof Float32Array?Float32Array:void 0;H=function(){var r,e,t;if("function"!=typeof Y)return!1;try{e=new Y([1,3.14,-3.14,5e40]),t=e,r=(D&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===J}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=new H(1);var rr="function"==typeof B?B:function(r){return Q[0]=r,Q[0]};function er(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function tr(r,e){for(var t=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var nr=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,or=function(r){return nr.exec(r).slice(1)};function ir(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=tr(dr(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function ar(r){var e=ur(r),t="/"===yr(r,-1);return(r=tr(dr(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function ur(r){return"/"===r.charAt(0)}function cr(){return ar(dr(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function fr(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=ir(r).substr(1),e=ir(e).substr(1);for(var n=t(r.split("/")),o=t(e.split("/")),i=Math.min(n.length,o.length),a=i,u=0;u<i;u++)if(n[u]!==o[u]){a=u;break}var c=[];for(u=a;u<n.length;u++)c.push("..");return(c=c.concat(o.slice(a))).join("/")}function sr(r){var e=or(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function lr(r,e){var t=or(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function pr(r){return or(r)[3]}var gr={extname:pr,basename:lr,dirname:sr,sep:"/",delimiter:":",relative:fr,join:cr,isAbsolute:ur,normalize:ar,resolve:ir};function dr(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var yr="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},br=er(Object.freeze({__proto__:null,basename:lr,default:gr,delimiter:":",dirname:sr,extname:pr,isAbsolute:ur,join:cr,normalize:ar,relative:fr,resolve:ir,sep:"/"}));var hr=Object,vr=/./;function wr(r){return"boolean"==typeof r}var mr=Boolean,jr=Boolean.prototype.toString;var _r=G();function Er(r){return"object"==typeof r&&(r instanceof mr||(_r?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===X(r)))}function Ar(r){return wr(r)||Er(r)}M(Ar,"isPrimitive",wr),M(Ar,"isObject",Er);var Or="object"==typeof self?self:null,Sr="object"==typeof window?window:null,xr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},kr="object"==typeof xr?xr:null,Fr="object"==typeof globalThis?globalThis:null;var Tr=function(r){if(arguments.length){if(!wr(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Fr)return Fr;if(Or)return Or;if(Sr)return Sr;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Pr=Tr.document&&Tr.document.childNodes,Ir=Int8Array;function Vr(){return/^\s*function\s*([^(]*)/i}var Nr,$r=/^\s*function\s*([^(]*)/i;M(Vr,"REGEXP",$r),Nr=Array.isArray?Array.isArray:function(r){return"[object Array]"===X(r)};var Cr=Nr;function Rr(r){return null!==r&&"object"==typeof r}var Mr=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Rr);function Br(r){var e,t,n,o;if(("Object"===(t=X(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=$r.exec(n.toString()))return e[1]}return Rr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}M(Rr,"isObjectLikeArray",Mr);var Lr="function"==typeof vr||"object"==typeof Ir||"function"==typeof Pr?function(r){return Br(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Br(r).toLowerCase():e};var Gr,Zr,qr=Object.getPrototypeOf;Zr=Object.getPrototypeOf,Gr="function"===Lr(Zr)?qr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===X(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var zr=Gr;function Wr(r){return null==r?null:(r=hr(r),zr(r))}function Ur(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===X(r))return!0;r=Wr(r)}return!1}var Xr=Math.floor,Dr=128;function Jr(r,e,t,n){var o,i,a,u,c,f,s,l,p,g,d,y,b;if(r<=0)return 0;if(1===r||0===t)return e[n];if(o=n,r<8){for(d=0,b=0;b<r;b++)d=rr(d+e[o]),o+=t;return d}if(r<=Dr){for(i=e[o],a=e[o+t],u=e[o+2*t],c=e[o+3*t],f=e[o+4*t],s=e[o+5*t],l=e[o+6*t],p=e[o+7*t],o+=8*t,g=r%8,b=8;b<r-g;b+=8)i=rr(i+e[o]),a=rr(a+e[o+t]),u=rr(u+e[o+2*t]),c=rr(c+e[o+3*t]),f=rr(f+e[o+4*t]),s=rr(s+e[o+5*t]),l=rr(l+e[o+6*t]),p=rr(p+e[o+7*t]),o+=8*t;for(d=rr(rr(rr(i+a)+rr(u+c))+rr(rr(f+s)+rr(l+p)));b<r;b++)d=rr(d+e[o]),o+=t;return d}return y=Xr(r/2),rr(Jr(y-=y%8,e,t,o)+Jr(r-y,e,t,o+y*t))}function Yr(r,e,t){var n,o,i;if(r<=0)return 0;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(o=0,i=0;i<r;i++)o=rr(o+e[n]),n+=t;return o}return Jr(r,e,t,n)}M(Yr,"ndarray",Jr);var Hr,Kr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Ur(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,br.join)("/home/runner/work/stats-base-svariancepn/stats-base-svariancepn/node_modules/@stdlib/blas-ext-base-ssumpw/lib","./native.js")),Qr=Hr=Ur(Kr)?Yr:Kr;const{ndarray:re}=Hr;function ee(r,e,t,n){var o,i,a,u,c,f,s;if(f=r-e,r<=0||f<=0)return NaN;if(1===r||0===n)return 0;for(o=Qr(r,t,n)/r,i=n<0?(1-r)*n:0,a=0,u=0,s=0;s<r;s++)c=rr(t[i]-o),a=rr(a+rr(c*c)),u=rr(u+c),i+=n;return rr(rr(a/f)-rr(rr(u/r)*rr(u/f)))}function te(r,e,t,n,o){var i,a,u,c,f,s,l;if(s=r-e,r<=0||s<=0)return NaN;if(1===r||0===n)return 0;for(i=re(r,t,n,o)/r,a=o,u=0,c=0,l=0;l<r;l++)f=rr(t[a]-i),u=rr(u+rr(f*f)),c=rr(c+f),a+=n;return rr(rr(u/s)-rr(rr(c/r)*rr(c/s)))}M(ee,"ndarray",te);export{ee as default,te as ndarray};
//# sourceMappingURL=mod.js.map
