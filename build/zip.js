!function(e){var t=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){!function(e,t){if(!k[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(w[n]=t[n]);0==--v&&0===m&&O()}(e,n),t&&t(e,n)};var n,r=!0,i="5f6dba03621ff1a92e25",a=1e4,o={},s=[],d=[];function l(e){var t=B[e];if(!t)return A;var r=function(r){return t.hot.active?(B[r]?-1===B[r].parents.indexOf(e)&&B[r].parents.push(e):(s=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),A(r)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var a in A)Object.prototype.hasOwnProperty.call(A,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(r,a,i(a));return r.e=function(e){return"ready"===u&&h("prepare"),m++,A.e(e).then(t,function(e){throw t(),e});function t(){m--,"prepare"===u&&(g[e]||E(e),0===m&&0===v&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),A.t(e,-2&t)},r}function f(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:x,apply:S,status:function(e){if(!e)return u;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:o[e]};return n=void 0,t}var c=[],u="idle";function h(e){u=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}var p,w,b,v=0,m=0,g={},_={},k={};function y(e){return+e+""===e?+e:e}function x(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=a,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=A.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;_={},g={},k=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});w={};return E(1),"prepare"===u&&0===m&&0===v&&O(),t});var t}function E(e){k[e]?(_[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=A.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function O(){h("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return S(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in w)Object.prototype.hasOwnProperty.call(w,n)&&t.push(y(n));e.resolve(t)}}function S(t){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var n,r,a,d,l;function f(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),a=i.id,o=i.chain;if((d=B[a])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:a};if(d.hot._main)return{type:"unaccepted",chain:o,moduleId:a};for(var s=0;s<d.parents.length;s++){var l=d.parents[s],f=B[l];if(f){if(f.hot._declinedDependencies[a])return{type:"declined",chain:o.concat([l]),moduleId:a,parentId:l};-1===t.indexOf(l)&&(f.hot._acceptedDependencies[a]?(n[l]||(n[l]=[]),c(n[l],[a])):(delete n[l],t.push(l),r.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},v=[],m={},g=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var _ in w)if(Object.prototype.hasOwnProperty.call(w,_)){var x;l=y(_);var E=!1,O=!1,S=!1,D="";switch((x=w[_]?f(l):{type:"disposed",moduleId:_}).chain&&(D="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+x.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(x),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(x),t.ignoreUnaccepted||(E=new Error("Aborted because "+l+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(x),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(x),S=!0;break;default:throw new Error("Unexception type "+x.type)}if(E)return h("abort"),Promise.reject(E);if(O)for(l in m[l]=w[l],c(v,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,l)&&(p[l]||(p[l]=[]),c(p[l],x.outdatedDependencies[l]));S&&(c(v,[x.moduleId]),m[l]=g)}var R,U=[];for(r=0;r<v.length;r++)l=v[r],B[l]&&B[l].hot._selfAccepted&&U.push({module:l,errorHandler:B[l].hot._selfAccepted});h("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete installedChunks[e]}(e)});for(var j,T,Z=v.slice();Z.length>0;)if(l=Z.pop(),d=B[l]){var I={},H=d.hot._disposeHandlers;for(a=0;a<H.length;a++)(n=H[a])(I);for(o[l]=I,d.hot.active=!1,delete B[l],delete p[l],a=0;a<d.children.length;a++){var L=B[d.children[a]];L&&((R=L.parents.indexOf(l))>=0&&L.parents.splice(R,1))}}for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(d=B[l]))for(T=p[l],a=0;a<T.length;a++)j=T[a],(R=d.children.indexOf(j))>=0&&d.children.splice(R,1);for(l in h("apply"),i=b,m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);var C=null;for(l in p)if(Object.prototype.hasOwnProperty.call(p,l)&&(d=B[l])){T=p[l];var N=[];for(r=0;r<T.length;r++)if(j=T[r],n=d.hot._acceptedDependencies[j]){if(-1!==N.indexOf(n))continue;N.push(n)}for(r=0;r<N.length;r++){n=N[r];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:T[r],error:e}),t.ignoreErrored||C||(C=e)}}}for(r=0;r<U.length;r++){var P=U[r];l=P.module,s=[l];try{A(l)}catch(e){if("function"==typeof P.errorHandler)try{P.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||C||(C=n),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||C||(C=e)}}return C?(h("fail"),Promise.reject(C)):(h("idle"),new Promise(function(e){e(v)}))}var B={};function A(t){if(B[t])return B[t].exports;var n=B[t]={i:t,l:!1,exports:{},hot:f(t),parents:(d=s,s=[],d),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}A.m=e,A.c=B,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A.h=function(){return i},l(200)(A.s=200)}({200:function(e,t,n){"use strict";n.r(t);var r=
/*!
 * ZipLoader
 * (c) 2017 @yomotsu
 * Released under the MIT License.
 * 
 * ZipLoader uses the library pako released under the MIT license :
 * https://github.com/nodeca/pako/blob/master/LICENSE
 */
function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if("object"!=typeof n)throw new TypeError(n+"must be non-object");for(var i in n)r(n,i)&&(e[i]=n[i])}}return e},t.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(r=0,t=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),i=0,t=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};t.setTyped=function(e){e?(t.Buf8=Uint8Array,t.Buf16=Uint16Array,t.Buf32=Int32Array,t.assign(t,i)):(t.Buf8=Array,t.Buf16=Array,t.Buf32=Array,t.assign(t,a))},t.setTyped(n)});r.assign,r.shrinkBuf,r.setTyped,r.Buf8,r.Buf16,r.Buf32;var i=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;0!==n;){n-=o=n>2e3?2e3:n;do{a=a+(i=i+t[r++]|0)|0}while(--o);i%=65521,a%=65521}return i|a<<16|0};var a=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();var o=function(e,t,n,r){var i=a,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^i[255&(e^t[s])];return-1^e},s=function(e,t){var n,r,i,a,o,s,d,l,f,c,u,h,p,w,b,v,m,g,_,k,y,x,E,O,S;n=e.state,r=e.next_in,O=e.input,i=r+(e.avail_in-5),a=e.next_out,S=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),d=n.dmax,l=n.wsize,f=n.whave,c=n.wnext,u=n.window,h=n.hold,p=n.bits,w=n.lencode,b=n.distcode,v=(1<<n.lenbits)-1,m=(1<<n.distbits)-1;e:do{p<15&&(h+=O[r++]<<p,p+=8,h+=O[r++]<<p,p+=8),g=w[h&v];t:for(;;){if(h>>>=_=g>>>24,p-=_,0===(_=g>>>16&255))S[a++]=65535&g;else{if(!(16&_)){if(0==(64&_)){g=w[(65535&g)+(h&(1<<_)-1)];continue t}if(32&_){n.mode=12;break e}e.msg="invalid literal/length code",n.mode=30;break e}k=65535&g,(_&=15)&&(p<_&&(h+=O[r++]<<p,p+=8),k+=h&(1<<_)-1,h>>>=_,p-=_),p<15&&(h+=O[r++]<<p,p+=8,h+=O[r++]<<p,p+=8),g=b[h&m];n:for(;;){if(h>>>=_=g>>>24,p-=_,!(16&(_=g>>>16&255))){if(0==(64&_)){g=b[(65535&g)+(h&(1<<_)-1)];continue n}e.msg="invalid distance code",n.mode=30;break e}if(y=65535&g,p<(_&=15)&&(h+=O[r++]<<p,(p+=8)<_&&(h+=O[r++]<<p,p+=8)),(y+=h&(1<<_)-1)>d){e.msg="invalid distance too far back",n.mode=30;break e}if(h>>>=_,p-=_,y>(_=a-o)){if((_=y-_)>f&&n.sane){e.msg="invalid distance too far back",n.mode=30;break e}if(x=0,E=u,0===c){if(x+=l-_,_<k){k-=_;do{S[a++]=u[x++]}while(--_);x=a-y,E=S}}else if(c<_){if(x+=l+c-_,(_-=c)<k){k-=_;do{S[a++]=u[x++]}while(--_);if(x=0,c<k){k-=_=c;do{S[a++]=u[x++]}while(--_);x=a-y,E=S}}}else if(x+=c-_,_<k){k-=_;do{S[a++]=u[x++]}while(--_);x=a-y,E=S}for(;k>2;)S[a++]=E[x++],S[a++]=E[x++],S[a++]=E[x++],k-=3;k&&(S[a++]=E[x++],k>1&&(S[a++]=E[x++]))}else{x=a-y;do{S[a++]=S[x++],S[a++]=S[x++],S[a++]=S[x++],k-=3}while(k>2);k&&(S[a++]=S[x++],k>1&&(S[a++]=S[x++]))}break}}break}}while(r<i&&a<s);r-=k=p>>3,h&=(1<<(p-=k<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=h,n.bits=p},d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64],u=function(e,t,n,i,a,o,s,u){var h,p,w,b,v,m,g,_,k,y=u.bits,x=0,E=0,O=0,S=0,B=0,A=0,D=0,R=0,U=0,j=0,T=null,Z=0,I=new r.Buf16(16),H=new r.Buf16(16),L=null,C=0;for(x=0;x<=15;x++)I[x]=0;for(E=0;E<i;E++)I[t[n+E]]++;for(B=y,S=15;S>=1&&0===I[S];S--);if(B>S&&(B=S),0===S)return a[o++]=20971520,a[o++]=20971520,u.bits=1,0;for(O=1;O<S&&0===I[O];O++);for(B<O&&(B=O),R=1,x=1;x<=15;x++)if(R<<=1,(R-=I[x])<0)return-1;if(R>0&&(0===e||1!==S))return-1;for(H[1]=0,x=1;x<15;x++)H[x+1]=H[x]+I[x];for(E=0;E<i;E++)0!==t[n+E]&&(s[H[t[n+E]]++]=E);if(0===e?(T=L=s,m=19):1===e?(T=d,Z-=257,L=l,C-=257,m=256):(T=f,L=c,m=-1),j=0,E=0,x=O,v=o,A=B,D=0,w=-1,b=(U=1<<B)-1,1===e&&U>852||2===e&&U>592)return 1;for(;;){g=x-D,s[E]<m?(_=0,k=s[E]):s[E]>m?(_=L[C+s[E]],k=T[Z+s[E]]):(_=96,k=0),h=1<<x-D,O=p=1<<A;do{a[v+(j>>D)+(p-=h)]=g<<24|_<<16|k|0}while(0!==p);for(h=1<<x-1;j&h;)h>>=1;if(0!==h?(j&=h-1,j+=h):j=0,E++,0==--I[x]){if(x===S)break;x=t[n+s[E]]}if(x>B&&(j&b)!==w){for(0===D&&(D=B),v+=O,R=1<<(A=x-D);A+D<S&&!((R-=I[A+D])<=0);)A++,R<<=1;if(U+=1<<A,1===e&&U>852||2===e&&U>592)return 1;a[w=j&b]=B<<24|A<<16|v-o|0}}return 0!==j&&(a[v+j]=x-D<<24|64<<16|0),u.bits=B,0},h=0,p=1,w=2,b=4,v=5,m=6,g=0,_=1,k=2,y=-2,x=-3,E=-4,O=-5,S=8,B=1,A=2,D=3,R=4,U=5,j=6,T=7,Z=8,I=9,H=10,L=11,C=12,N=13,P=14,M=15,F=16,z=17,K=18,J=19,q=20,$=21,Y=22,G=23,X=24,W=25,V=26,Q=27,ee=28,te=29,ne=30,re=31,ie=32,ae=852,oe=592,se=15;function de(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function le(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function fe(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=B,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(ae),t.distcode=t.distdyn=new r.Buf32(oe),t.sane=1,t.back=-1,g):y}function ce(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,fe(e)):y}function ue(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?y:(null!==r.window&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,ce(e))):y}function he(e,t){var n,r;return e?(r=new le,e.state=r,r.window=null,(n=ue(e,t))!==g&&(e.state=null),n):y}var pe,we,be=!0;function ve(e){if(be){var t;for(pe=new r.Buf32(512),we=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(u(p,e.lens,0,288,pe,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;u(w,e.lens,0,32,we,0,e.work,{bits:5}),be=!1}e.lencode=pe,e.lenbits=9,e.distcode=we,e.distbits=5}function me(e,t,n,i){var a,o=e.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((a=o.wsize-o.wnext)>i&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}var ge={inflateReset:ce,inflateReset2:ue,inflateResetKeep:fe,inflateInit:function(e){return he(e,se)},inflateInit2:he,inflate:function(e,t){var n,a,d,l,f,c,ae,oe,se,le,fe,ce,ue,he,pe,we,be,ge,_e,ke,ye,xe,Ee,Oe,Se=0,Be=new r.Buf8(4),Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return y;(n=e.state).mode===C&&(n.mode=N),f=e.next_out,d=e.output,ae=e.avail_out,l=e.next_in,a=e.input,c=e.avail_in,oe=n.hold,se=n.bits,le=c,fe=ae,xe=g;e:for(;;)switch(n.mode){case B:if(0===n.wrap){n.mode=N;break}for(;se<16;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(2&n.wrap&&35615===oe){n.check=0,Be[0]=255&oe,Be[1]=oe>>>8&255,n.check=o(n.check,Be,2,0),oe=0,se=0,n.mode=A;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&oe)<<8)+(oe>>8))%31){e.msg="incorrect header check",n.mode=ne;break}if((15&oe)!==S){e.msg="unknown compression method",n.mode=ne;break}if(se-=4,ye=8+(15&(oe>>>=4)),0===n.wbits)n.wbits=ye;else if(ye>n.wbits){e.msg="invalid window size",n.mode=ne;break}n.dmax=1<<ye,e.adler=n.check=1,n.mode=512&oe?H:C,oe=0,se=0;break;case A:for(;se<16;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(n.flags=oe,(255&n.flags)!==S){e.msg="unknown compression method",n.mode=ne;break}if(57344&n.flags){e.msg="unknown header flags set",n.mode=ne;break}n.head&&(n.head.text=oe>>8&1),512&n.flags&&(Be[0]=255&oe,Be[1]=oe>>>8&255,n.check=o(n.check,Be,2,0)),oe=0,se=0,n.mode=D;case D:for(;se<32;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.head&&(n.head.time=oe),512&n.flags&&(Be[0]=255&oe,Be[1]=oe>>>8&255,Be[2]=oe>>>16&255,Be[3]=oe>>>24&255,n.check=o(n.check,Be,4,0)),oe=0,se=0,n.mode=R;case R:for(;se<16;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.head&&(n.head.xflags=255&oe,n.head.os=oe>>8),512&n.flags&&(Be[0]=255&oe,Be[1]=oe>>>8&255,n.check=o(n.check,Be,2,0)),oe=0,se=0,n.mode=U;case U:if(1024&n.flags){for(;se<16;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.length=oe,n.head&&(n.head.extra_len=oe),512&n.flags&&(Be[0]=255&oe,Be[1]=oe>>>8&255,n.check=o(n.check,Be,2,0)),oe=0,se=0}else n.head&&(n.head.extra=null);n.mode=j;case j:if(1024&n.flags&&((ce=n.length)>c&&(ce=c),ce&&(n.head&&(ye=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),r.arraySet(n.head.extra,a,l,ce,ye)),512&n.flags&&(n.check=o(n.check,a,ce,l)),c-=ce,l+=ce,n.length-=ce),n.length))break e;n.length=0,n.mode=T;case T:if(2048&n.flags){if(0===c)break e;ce=0;do{ye=a[l+ce++],n.head&&ye&&n.length<65536&&(n.head.name+=String.fromCharCode(ye))}while(ye&&ce<c);if(512&n.flags&&(n.check=o(n.check,a,ce,l)),c-=ce,l+=ce,ye)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=Z;case Z:if(4096&n.flags){if(0===c)break e;ce=0;do{ye=a[l+ce++],n.head&&ye&&n.length<65536&&(n.head.comment+=String.fromCharCode(ye))}while(ye&&ce<c);if(512&n.flags&&(n.check=o(n.check,a,ce,l)),c-=ce,l+=ce,ye)break e}else n.head&&(n.head.comment=null);n.mode=I;case I:if(512&n.flags){for(;se<16;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(oe!==(65535&n.check)){e.msg="header crc mismatch",n.mode=ne;break}oe=0,se=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=C;break;case H:for(;se<32;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}e.adler=n.check=de(oe),oe=0,se=0,n.mode=L;case L:if(0===n.havedict)return e.next_out=f,e.avail_out=ae,e.next_in=l,e.avail_in=c,n.hold=oe,n.bits=se,k;e.adler=n.check=1,n.mode=C;case C:if(t===v||t===m)break e;case N:if(n.last){oe>>>=7&se,se-=7&se,n.mode=Q;break}for(;se<3;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}switch(n.last=1&oe,se-=1,3&(oe>>>=1)){case 0:n.mode=P;break;case 1:if(ve(n),n.mode=q,t===m){oe>>>=2,se-=2;break e}break;case 2:n.mode=z;break;case 3:e.msg="invalid block type",n.mode=ne}oe>>>=2,se-=2;break;case P:for(oe>>>=7&se,se-=7&se;se<32;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if((65535&oe)!=(oe>>>16^65535)){e.msg="invalid stored block lengths",n.mode=ne;break}if(n.length=65535&oe,oe=0,se=0,n.mode=M,t===m)break e;case M:n.mode=F;case F:if(ce=n.length){if(ce>c&&(ce=c),ce>ae&&(ce=ae),0===ce)break e;r.arraySet(d,a,l,ce,f),c-=ce,l+=ce,ae-=ce,f+=ce,n.length-=ce;break}n.mode=C;break;case z:for(;se<14;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(n.nlen=257+(31&oe),oe>>>=5,se-=5,n.ndist=1+(31&oe),oe>>>=5,se-=5,n.ncode=4+(15&oe),oe>>>=4,se-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=ne;break}n.have=0,n.mode=K;case K:for(;n.have<n.ncode;){for(;se<3;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.lens[Ae[n.have++]]=7&oe,oe>>>=3,se-=3}for(;n.have<19;)n.lens[Ae[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,Ee={bits:n.lenbits},xe=u(h,n.lens,0,19,n.lencode,0,n.work,Ee),n.lenbits=Ee.bits,xe){e.msg="invalid code lengths set",n.mode=ne;break}n.have=0,n.mode=J;case J:for(;n.have<n.nlen+n.ndist;){for(;we=(Se=n.lencode[oe&(1<<n.lenbits)-1])>>>16&255,be=65535&Se,!((pe=Se>>>24)<=se);){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(be<16)oe>>>=pe,se-=pe,n.lens[n.have++]=be;else{if(16===be){for(Oe=pe+2;se<Oe;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(oe>>>=pe,se-=pe,0===n.have){e.msg="invalid bit length repeat",n.mode=ne;break}ye=n.lens[n.have-1],ce=3+(3&oe),oe>>>=2,se-=2}else if(17===be){for(Oe=pe+3;se<Oe;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}se-=pe,ye=0,ce=3+(7&(oe>>>=pe)),oe>>>=3,se-=3}else{for(Oe=pe+7;se<Oe;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}se-=pe,ye=0,ce=11+(127&(oe>>>=pe)),oe>>>=7,se-=7}if(n.have+ce>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=ne;break}for(;ce--;)n.lens[n.have++]=ye}}if(n.mode===ne)break;if(0===n.lens[256]){e.msg="invalid code -- missing end-of-block",n.mode=ne;break}if(n.lenbits=9,Ee={bits:n.lenbits},xe=u(p,n.lens,0,n.nlen,n.lencode,0,n.work,Ee),n.lenbits=Ee.bits,xe){e.msg="invalid literal/lengths set",n.mode=ne;break}if(n.distbits=6,n.distcode=n.distdyn,Ee={bits:n.distbits},xe=u(w,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,Ee),n.distbits=Ee.bits,xe){e.msg="invalid distances set",n.mode=ne;break}if(n.mode=q,t===m)break e;case q:n.mode=$;case $:if(c>=6&&ae>=258){e.next_out=f,e.avail_out=ae,e.next_in=l,e.avail_in=c,n.hold=oe,n.bits=se,s(e,fe),f=e.next_out,d=e.output,ae=e.avail_out,l=e.next_in,a=e.input,c=e.avail_in,oe=n.hold,se=n.bits,n.mode===C&&(n.back=-1);break}for(n.back=0;we=(Se=n.lencode[oe&(1<<n.lenbits)-1])>>>16&255,be=65535&Se,!((pe=Se>>>24)<=se);){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(we&&0==(240&we)){for(ge=pe,_e=we,ke=be;we=(Se=n.lencode[ke+((oe&(1<<ge+_e)-1)>>ge)])>>>16&255,be=65535&Se,!(ge+(pe=Se>>>24)<=se);){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}oe>>>=ge,se-=ge,n.back+=ge}if(oe>>>=pe,se-=pe,n.back+=pe,n.length=be,0===we){n.mode=V;break}if(32&we){n.back=-1,n.mode=C;break}if(64&we){e.msg="invalid literal/length code",n.mode=ne;break}n.extra=15&we,n.mode=Y;case Y:if(n.extra){for(Oe=n.extra;se<Oe;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.length+=oe&(1<<n.extra)-1,oe>>>=n.extra,se-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=G;case G:for(;we=(Se=n.distcode[oe&(1<<n.distbits)-1])>>>16&255,be=65535&Se,!((pe=Se>>>24)<=se);){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(0==(240&we)){for(ge=pe,_e=we,ke=be;we=(Se=n.distcode[ke+((oe&(1<<ge+_e)-1)>>ge)])>>>16&255,be=65535&Se,!(ge+(pe=Se>>>24)<=se);){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}oe>>>=ge,se-=ge,n.back+=ge}if(oe>>>=pe,se-=pe,n.back+=pe,64&we){e.msg="invalid distance code",n.mode=ne;break}n.offset=be,n.extra=15&we,n.mode=X;case X:if(n.extra){for(Oe=n.extra;se<Oe;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}n.offset+=oe&(1<<n.extra)-1,oe>>>=n.extra,se-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=ne;break}n.mode=W;case W:if(0===ae)break e;if(ce=fe-ae,n.offset>ce){if((ce=n.offset-ce)>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=ne;break}ce>n.wnext?(ce-=n.wnext,ue=n.wsize-ce):ue=n.wnext-ce,ce>n.length&&(ce=n.length),he=n.window}else he=d,ue=f-n.offset,ce=n.length;ce>ae&&(ce=ae),ae-=ce,n.length-=ce;do{d[f++]=he[ue++]}while(--ce);0===n.length&&(n.mode=$);break;case V:if(0===ae)break e;d[f++]=n.length,ae--,n.mode=$;break;case Q:if(n.wrap){for(;se<32;){if(0===c)break e;c--,oe|=a[l++]<<se,se+=8}if(fe-=ae,e.total_out+=fe,n.total+=fe,fe&&(e.adler=n.check=n.flags?o(n.check,d,fe,f-fe):i(n.check,d,fe,f-fe)),fe=ae,(n.flags?oe:de(oe))!==n.check){e.msg="incorrect data check",n.mode=ne;break}oe=0,se=0}n.mode=ee;case ee:if(n.wrap&&n.flags){for(;se<32;){if(0===c)break e;c--,oe+=a[l++]<<se,se+=8}if(oe!==(4294967295&n.total)){e.msg="incorrect length check",n.mode=ne;break}oe=0,se=0}n.mode=te;case te:xe=_;break e;case ne:xe=x;break e;case re:return E;case ie:default:return y}return e.next_out=f,e.avail_out=ae,e.next_in=l,e.avail_in=c,n.hold=oe,n.bits=se,(n.wsize||fe!==e.avail_out&&n.mode<ne&&(n.mode<Q||t!==b))&&me(e,e.output,e.next_out,fe-e.avail_out)?(n.mode=re,E):(le-=e.avail_in,fe-=e.avail_out,e.total_in+=le,e.total_out+=fe,n.total+=fe,n.wrap&&fe&&(e.adler=n.check=n.flags?o(n.check,d,fe,e.next_out-fe):i(n.check,d,fe,e.next_out-fe)),e.data_type=n.bits+(n.last?64:0)+(n.mode===C?128:0)+(n.mode===q||n.mode===M?256:0),(0===le&&0===fe||t===b)&&xe===g&&(xe=O),xe)},inflateEnd:function(e){if(!e||!e.state)return y;var t=e.state;return t.window&&(t.window=null),e.state=null,g},inflateGetHeader:function(e,t){var n;return e&&e.state?0==(2&(n=e.state).wrap)?y:(n.head=t,t.done=!1,g):y},inflateSetDictionary:function(e,t){var n,r=t.length;return e&&e.state?0!==(n=e.state).wrap&&n.mode!==L?y:n.mode===L&&i(1,t,r,0)!==n.check?x:me(e,t,r,r)?(n.mode=re,E):(n.havedict=1,g):y},inflateInfo:"pako inflate (from Nodeca project)"},_e=!0,ke=!0;try{String.fromCharCode.apply(null,[0])}catch(e){_e=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(e){ke=!1}for(var ye=new r.Buf8(256),xe=0;xe<256;xe++)ye[xe]=xe>=252?6:xe>=248?5:xe>=240?4:xe>=224?3:xe>=192?2:1;ye[254]=ye[254]=1;function Ee(e,t){if(t<65537&&(e.subarray&&ke||!e.subarray&&_e))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n="",i=0;i<t;i++)n+=String.fromCharCode(e[i]);return n}var Oe=function(e){var t,n,i,a,o,s=e.length,d=0;for(a=0;a<s;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(i=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(i-56320),a++),d+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(d),o=0,a=0;o<d;a++)55296==(64512&(n=e.charCodeAt(a)))&&a+1<s&&56320==(64512&(i=e.charCodeAt(a+1)))&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:n<2048?(t[o++]=192|n>>>6,t[o++]=128|63&n):n<65536?(t[o++]=224|n>>>12,t[o++]=128|n>>>6&63,t[o++]=128|63&n):(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63,t[o++]=128|n>>>6&63,t[o++]=128|63&n);return t},Se=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},Be=function(e,t){var n,r,i,a,o=t||e.length,s=new Array(2*o);for(r=0,n=0;n<o;)if((i=e[n++])<128)s[r++]=i;else if((a=ye[i])>4)s[r++]=65533,n+=a-1;else{for(i&=2===a?31:3===a?15:7;a>1&&n<o;)i=i<<6|63&e[n++],a--;a>1?s[r++]=65533:i<65536?s[r++]=i:(i-=65536,s[r++]=55296|i>>10&1023,s[r++]=56320|1023&i)}return Ee(s,r)},Ae=function(e,t){var n;for((t=t||e.length)>e.length&&(t=e.length),n=t-1;n>=0&&128==(192&e[n]);)n--;return n<0?t:0===n?t:n+ye[e[n]]>t?n:t},De={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8},Re={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var Ue=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};var je=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1},Te=Object.prototype.toString;function Ze(e){if(!(this instanceof Ze))return new Ze(e);this.options=r.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ue,this.strm.avail_out=0;var n=ge.inflateInit2(this.strm,t.windowBits);if(n!==De.Z_OK)throw new Error(Re[n]);this.header=new je,ge.inflateGetHeader(this.strm,this.header)}function Ie(e,t){var n=new Ze(t);if(n.push(e,!0),n.err)throw n.msg||Re[n.err];return n.result}Ze.prototype.push=function(e,t){var n,i,a,o,s,d,l=this.strm,f=this.options.chunkSize,c=this.options.dictionary,u=!1;if(this.ended)return!1;i=t===~~t?t:!0===t?De.Z_FINISH:De.Z_NO_FLUSH,"string"==typeof e?l.input=Se(e):"[object ArrayBuffer]"===Te.call(e)?l.input=new Uint8Array(e):l.input=e,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new r.Buf8(f),l.next_out=0,l.avail_out=f),(n=ge.inflate(l,De.Z_NO_FLUSH))===De.Z_NEED_DICT&&c&&(d="string"==typeof c?Oe(c):"[object ArrayBuffer]"===Te.call(c)?new Uint8Array(c):c,n=ge.inflateSetDictionary(this.strm,d)),n===De.Z_BUF_ERROR&&!0===u&&(n=De.Z_OK,u=!1),n!==De.Z_STREAM_END&&n!==De.Z_OK)return this.onEnd(n),this.ended=!0,!1;l.next_out&&(0!==l.avail_out&&n!==De.Z_STREAM_END&&(0!==l.avail_in||i!==De.Z_FINISH&&i!==De.Z_SYNC_FLUSH)||("string"===this.options.to?(a=Ae(l.output,l.next_out),o=l.next_out-a,s=Be(l.output,a),l.next_out=o,l.avail_out=f-o,o&&r.arraySet(l.output,l.output,a,o,0),this.onData(s)):this.onData(r.shrinkBuf(l.output,l.next_out)))),0===l.avail_in&&0===l.avail_out&&(u=!0)}while((l.avail_in>0||0===l.avail_out)&&n!==De.Z_STREAM_END);return n===De.Z_STREAM_END&&(i=De.Z_FINISH),i===De.Z_FINISH?(n=ge.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===De.Z_OK):i!==De.Z_SYNC_FLUSH||(this.onEnd(De.Z_OK),l.avail_out=0,!0)},Ze.prototype.onData=function(e){this.chunks.push(e)},Ze.prototype.onEnd=function(e){e===De.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=r.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};var He={Inflate:Ze,inflate:Ie,inflateRaw:function(e,t){return(t=t||{}).raw=!0,Ie(e,t)},ungzip:Ie};var Le=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dataView=new DataView(t),this.position=0}return e.prototype.skip=function(e){this.position+=e},e.prototype.readBytes=function(e){var t=4===e?"getUint32":2===e?"getUint16":"getUint8",n=this.position;return this.position+=e,this.dataView[t](n,!0)},e}(),Ce=function(e){for(var t=new Le(e),n={};;){var r=t.readBytes(4);if(67324752!==r){if(33639248!==r)break;Pe(t)}else{var i=Ne(t);n[i.name]={buffer:i.buffer}}}return n},Ne=function(e){var t=0,n=void 0;e.skip(4);var r=e.readBytes(2);e.skip(8);var i=e.readBytes(4);e.skip(4);var a=e.readBytes(2),o=e.readBytes(2),s=[],d=new Uint8Array(i);for(t=0;t<a;t++)s.push(String.fromCharCode(e.readBytes(1)));for(e.skip(o),t=0;t<i;t++)d[t]=e.readBytes(1);switch(r){case 0:n=d;break;case 8:n=new Uint8Array(He.inflate(d,{raw:!0}));break;default:console.log(s.join("")+": unsupported compression type"),n=d}return{name:s.join(""),buffer:n}},Pe=function(e){e.skip(24);var t=e.readBytes(2),n=e.readBytes(2),r=e.readBytes(2);e.skip(12),e.skip(t),e.skip(n),e.skip(r)};var Me="function"==typeof Promise?Promise:function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(){};return t(function(){n()}),{then:function(e){n=e}}};var Fe=0,ze=void 0,Ke=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=Fe,this._listeners={},this.xhr=null,this.url=t,this.files=null,Fe++}return e.unzip=function(t){return new Me(function(n){var r=new e,i=new FileReader;i.onload=function(e){var t=e.target.result;r.files=Ce(t),n(r)},t instanceof Blob&&i.readAsArrayBuffer(t)})},e.prototype.load=function(){var e=this;return new Me(function(t){var n=Date.now(),r=e.xhr=new XMLHttpRequest;r.open("GET",e.url,!0),r.responseType="arraybuffer",r.onprogress=function(t){e.dispatch({type:"progress",loaded:t.loaded,total:t.total,elapsedTime:Date.now()-n})},r.onload=function(){e.files=Ce(r.response),e.dispatch({type:"load",elapsedTime:Date.now()-n}),t()},r.onerror=function(t){e.dispatch({type:"error",error:t})},r.send()})},e.prototype.extractAsBlobUrl=function(e,t){if(this.files[e].url)return this.files[e].url;var n=new Blob([this.files[e].buffer],{type:t});return this.files[e].url=URL.createObjectURL(n),this.files[e].url},e.prototype.extractAsText=function(e){var t=this.files[e].buffer;if("undefined"!=typeof TextDecoder)return(new TextDecoder).decode(t);for(var n="",r=0,i=t.length;r<i;r++)n+=String.fromCharCode(t[r]);return decodeURIComponent(escape(n))},e.prototype.extractAsJSON=function(e){return JSON.parse(this.extractAsText(e))},e.prototype.loadThreeJSON=function(e){var t=this,n=this.extractAsJSON(e),r=e.replace(/\/.+\.json$/,"/"),i="__ziploader_"+this._id+"__",a=new RegExp(i);return-1!==!ze.Loader.Handlers.handlers.indexOf(a)&&ze.Loader.Handlers.add(a,{load:function(e){return t.loadThreeTexture(e.replace(a,""))}}),ze.JSONLoader.prototype.parse(n,i+r)},e.prototype.loadThreeTexture=function(e){var t=new ze.Texture,n=/\.jpg$/.test(e)?"image/jpeg":/\.png$/.test(e)?"image/png":/\.gif$/.test(e)?"image/gif":void 0,r=new Blob([this.files[e].buffer],{type:n});return t.image=new Image,t.image.addEventListener("load",function e(){t.needsUpdate=!0,t.image.removeEventListener("load",e),URL.revokeObjectURL(t.image.src)}),t.image.src=URL.createObjectURL(r),t},e.prototype.on=function(e,t){this._listeners[e]||(this._listeners[e]=[]),-1===this._listeners[e].indexOf(t)&&this._listeners[e].push(t)},e.prototype.off=function(e,t){var n=this._listeners[e];if(n){var r=n.indexOf(t);-1!==r&&n.splice(r,1)}},e.prototype.dispatch=function(e){var t=this._listeners[e.type];if(t){e.target=this;for(var n=t.length,r=0;r<n;r++)t[r].call(this,e)}},e.prototype.clear=function(e){if(e)return URL.revokeObjectURL(this.files[e].url),void delete this.files[e];for(var t in this.files)URL.revokeObjectURL(this.files[t].url);if(delete this.files,ze){var n="__ziploader_"+this._id+"__";ze.Loader.Handlers.handlers.some(function(e,t){if(e instanceof RegExp&&e.source===n)return ze.Loader.Handlers.handlers.splice(t,2),!0})}},e.install=function(e){e.THREE&&(ze=e.THREE)},e}();self;const Je=[],qe={};addEventListener("message",function(e){const t=e.data.version;if(e.data.abort&&qe[t])return void qe[t].abort();const[n]=t.split("-"),r=new Ke(`https://beatsaver.com/storage/songs/${n}/${t}.zip`);r.on("error",e=>{postMessage({message:"error"})}),r.on("progress",e=>{postMessage({message:"progress",progress:e.loaded/e.total})}),r.on("load",()=>{const e={audio:null,beats:{}};let n;Object.keys(r.files).forEach(e=>{e.endsWith("info.json")&&(n=r.extractAsJSON(e))}),Je.length=0;for(let e=0;e<n.difficultyLevels.length;e++)Je.push(n.difficultyLevels[e].difficulty);Object.keys(r.files).forEach(t=>{for(let n=0;n<Je.length;n++){let i=Je[n];t.endsWith(`${i}.json`)&&(e.beats[i]=r.extractAsJSON(t))}t.endsWith(".ogg")&&(e.audio=r.extractAsBlobUrl(t,"audio/ogg"))}),postMessage({message:"load",data:e,version:t})}),r.load(),qe[t]=r.xhr})}});