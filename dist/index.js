"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var c=s(function(X,y){
var q=require('@stdlib/stats-base-dists-wald-cdf/dist'),A=require('@stdlib/constants-float64-pinf/dist'),N=1e4;function O(e,r,t){var i,u,o,n,a;if(e<=0)return 0;if(e>=1)return A;for(i=0,u=r,a=1;q(u,r,t)<e&&a<N;)i=u,u*=2,a+=1;for(a=1,n=(i+u)/2;a<N;){if(n=(i+u)/2,n<=i||n>=u)return n;o=q(n,r,t),e>o?i=n:u=n,a+=1}return n}y.exports=O
});var w=s(function(_,x){
var f=require('@stdlib/math-base-assert-is-nan/dist'),R=c();function T(e,r,t){return f(e)||f(r)||f(t)||r<=0||t<0||e<0||e>1?NaN:t===0?r:R(e,r,t)}x.exports=T
});var I=s(function(j,F){
var g=require('@stdlib/utils-constant-function/dist'),C=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,v=require('@stdlib/math-base-assert-is-nan/dist'),D=c();function E(e,r){if(v(e)||v(r)||e<=0||r<0)return g(NaN);if(r===0)return C(e);return t;function t(i){return v(i)||i<0||i>1?NaN:D(i,e,r)}}F.exports=E
});var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=w(),P=I();M(h,"factory",P);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
