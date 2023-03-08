// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import t,{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ssumpw@esm/index.mjs";function s(r,n,s,i){var a,d,o,f,m,l,u;if(l=r-n,r<=0||l<=0)return NaN;if(1===r||0===i)return 0;for(a=t(r,s,i)/r,d=i<0?(1-r)*i:0,o=0,f=0,u=0;u<r;u++)m=e(s[d]-a),o=e(o+e(m*m)),f=e(f+m),d+=i;return e(e(o/l)-e(e(f/r)*e(f/l)))}function i(r,t,s,i,a){var d,o,f,m,l,u,p;if(u=r-t,r<=0||u<=0)return NaN;if(1===r||0===i)return 0;for(d=n(r,s,i,a)/r,o=a,f=0,m=0,p=0;p<r;p++)l=e(s[o]-d),f=e(f+e(l*l)),m=e(m+l),o+=i;return e(e(f/u)-e(e(m/r)*e(m/u)))}r(s,"ndarray",i);export{s as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
