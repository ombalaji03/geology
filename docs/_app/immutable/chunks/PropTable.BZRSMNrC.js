import{s as H,n as g}from"./scheduler.BfJEPAwo.js";import{S as T,i as D,e as f,o as v,a as u,b as p,p as x,f as o,h as b,j as E,k as i,q as _,z as P,s as k,g as q}from"./index.BKh3IzZP.js";function A(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function S(a){let e,l,s;return{c(){e=f("div"),l=f("h1"),s=v(a[0]),this.h()},l(t){e=u(t,"DIV",{class:!0});var r=p(e);l=u(r,"H1",{class:!0});var n=p(l);s=x(n,a[0]),n.forEach(o),r.forEach(o),this.h()},h(){b(l,"class","p-4 bg-dark0 text-3xl font-bold border-[1px] border-dark1 svelte-1wyd1lr"),b(e,"class","mb-4 pl-2 bg-frost3 drop-shadow-lg")},m(t,r){E(t,e,r),i(e,l),i(l,s)},p(t,[r]){r&1&&_(s,t[0])},i:g,o:g,d(t){t&&o(e)}}}function V(a,e,l){let{text:s}=e;return a.$$set=t=>{"text"in t&&l(0,s=t.text)},[s]}class G extends T{constructor(e){super(),D(this,e,V,S,H,{text:0})}}function z(a){let e,l,s;return{c(){e=f("div"),l=f("h2"),s=v(a[0]),this.h()},l(t){e=u(t,"DIV",{class:!0});var r=p(e);l=u(r,"H2",{class:!0});var n=p(l);s=x(n,a[0]),n.forEach(o),r.forEach(o),this.h()},h(){b(l,"class","p-4 bg-dark0 text-2xl font-bold border-[1px] border-dark1 svelte-wibk9o"),b(e,"class","mb-4 pl-2 bg-green drop-shadow-lg")},m(t,r){E(t,e,r),i(e,l),i(l,s)},p(t,[r]){r&1&&_(s,t[0])},i:g,o:g,d(t){t&&o(e)}}}function B(a,e,l){let{text:s}=e;return a.$$set=t=>{"text"in t&&l(0,s=t.text)},[s]}class J extends T{constructor(e){super(),D(this,e,B,z,H,{text:0})}}function I(a,e,l){const s=a.slice();return s[1]=e[l][0],s[2]=e[l][1],s}function O(a){let e,l,s=a[1]+"",t,r,n,h=a[2]+"",m,w;return{c(){e=f("tr"),l=f("td"),t=v(s),r=k(),n=f("td"),m=v(h),w=k(),this.h()},l(d){e=u(d,"TR",{});var c=p(e);l=u(c,"TD",{class:!0});var $=p(l);t=x($,s),$.forEach(o),r=q(c),n=u(c,"TD",{class:!0});var j=p(n);m=x(j,h),j.forEach(o),w=q(c),c.forEach(o),this.h()},h(){b(l,"class","pe-4 text-yellow font-semibold align-top"),b(n,"class","align-top")},m(d,c){E(d,e,c),i(e,l),i(l,t),i(e,r),i(e,n),i(n,m),i(e,w)},p(d,c){c&1&&s!==(s=d[1]+"")&&_(t,s),c&1&&h!==(h=d[2]+"")&&_(m,h)},d(d){d&&o(e)}}}function C(a){let e,l=A(Object.entries(a[0])),s=[];for(let t=0;t<l.length;t+=1)s[t]=O(I(a,l,t));return{c(){e=f("table");for(let t=0;t<s.length;t+=1)s[t].c();this.h()},l(t){e=u(t,"TABLE",{class:!0});var r=p(e);for(let n=0;n<s.length;n+=1)s[n].l(r);r.forEach(o),this.h()},h(){b(e,"class","mb-4 table-auto border-separate")},m(t,r){E(t,e,r);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null)},p(t,[r]){if(r&1){l=A(Object.entries(t[0]));let n;for(n=0;n<l.length;n+=1){const h=I(t,l,n);s[n]?s[n].p(h,r):(s[n]=O(h),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}},i:g,o:g,d(t){t&&o(e),P(s,t)}}}function L(a,e,l){let{properties:s={}}=e;return a.$$set=t=>{"properties"in t&&l(0,s=t.properties)},[s]}class K extends T{constructor(e){super(),D(this,e,L,C,H,{properties:0})}}export{G as H,K as P,J as a};