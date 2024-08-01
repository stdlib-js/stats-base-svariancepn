"use strict";var l=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var x=l(function(C,y){
var n=require('@stdlib/number-float64-base-to-float32/dist'),_=require('@stdlib/blas-ext-base-ssumpw/dist');function d(r,t,p,i){var c,q,s,a,e,v,o;if(v=r-t,r<=0||v<=0)return NaN;if(r===1||i===0)return 0;for(c=_(r,p,i)/r,i<0?q=(1-r)*i:q=0,s=0,a=0,o=0;o<r;o++)e=n(p[q]-c),s=n(s+n(e*e)),a=n(a+e),q+=i;return n(n(s/v)-n(n(a/r)*n(a/v)))}y.exports=d
});var j=l(function(D,M){
var u=require('@stdlib/number-float64-base-to-float32/dist'),E=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function O(r,t,p,i,c){var q,s,a,e,v,o,f;if(o=r-t,r<=0||o<=0)return NaN;if(r===1||i===0)return 0;for(q=E(r,p,i,c)/r,s=c,a=0,e=0,f=0;f<r;f++)v=u(p[s]-q),a=u(a+u(v*v)),e=u(e+v),s+=i;return u(u(a/o)-u(u(e/r)*u(e/o)))}M.exports=O
});var R=l(function(G,F){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=x(),g=j();b(w,"ndarray",g);F.exports=w
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),m,T=k(h(__dirname,"./native.js"));z(T)?m=A:m=T;module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
