"use strict";var c=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var p=c(function(C,m){
var e=require('@stdlib/number-float64-base-to-float32/dist'),w=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function E(r,a,v,i,y){var d,o,u,n,t,s,q;if(s=r-a,r<=0||s<=0)return NaN;if(r===1||i===0)return 0;for(d=w(r,v,i,y)/r,o=y,u=0,n=0,q=0;q<r;q++)t=e(v[o]-d),u=e(u+e(t*t)),n=e(n+t),o+=i;return e(e(u/s)-e(e(n/r)*e(n/s)))}m.exports=E
});var x=c(function(D,l){
var F=require('@stdlib/strided-base-stride2offset/dist'),O=p();function T(r,a,v,i){return O(r,a,v,i,F(r,i))}l.exports=T
});var R=c(function(G,M){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),g=p();b(j,"ndarray",g);M.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),f,_=k(h(__dirname,"./native.js"));z(_)?f=A:f=_;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
