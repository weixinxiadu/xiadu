var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){n=""+n,t.data!==n&&(t.data=n)}let m;function p(t){m=t}function g(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const $=[],b=[],v=[],y=[],_=Promise.resolve();let x=!1;function k(t){v.push(t)}let w=!1;const j=new Set;function E(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];p(n),A(n.$$)}for($.length=0;b.length;)b.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];j.has(n)||(j.add(n),n())}v.length=0}while($.length);for(;y.length;)y.pop()();x=!1,w=!1,j.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const C=new Set;function M(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function N(c,l,u,i,f,s,d=[-1]){const h=m;p(c);const g=l.props||{},$=c.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d};let b=!1;if($.ctx=u?u(c,g,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&($.bound[t]&&$.bound[t](o),b&&M(c,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!i&&i($.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);$.fragment&&$.fragment.l(t),t.forEach(a)}else $.fragment&&$.fragment.c();l.intro&&((v=c.$$.fragment)&&v.i&&(C.delete(v),v.i(y))),function(t,e,c){const{fragment:l,on_mount:u,on_destroy:a,after_update:i}=t.$$;l&&l.m(e,c),k(()=>{const e=u.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(k)}(c,l.target,l.anchor),E()}var v,y;p(h)}function O(t,n,e){const o=t.slice();return o[1]=n[e],o}function S(t){let n,e,o,r,c,m,p,g,$,b,v,y,_,x,k=t[1].title+"",w=t[1].author+"";return{c(){n=i("div"),e=i("a"),o=i("img"),m=s(),p=i("p"),g=f(k),b=s(),v=i("p"),y=f("作者: "),_=f(w),x=s(),o.src!==(r=t[1].cover)&&d(o,"src",r),d(o,"alt",c=t[1].title),d(p,"class","title svelte-10um4kv"),d(e,"href",$=t[1].bookUrl),d(v,"class","author svelte-10um4kv"),d(n,"class","book svelte-10um4kv")},m(t,r){u(t,n,r),l(n,e),l(e,o),l(e,m),l(e,p),l(p,g),l(n,b),l(n,v),l(v,y),l(v,_),l(n,x)},p(t,n){1&n&&o.src!==(r=t[1].cover)&&d(o,"src",r),1&n&&c!==(c=t[1].title)&&d(o,"alt",c),1&n&&k!==(k=t[1].title+"")&&h(g,k),1&n&&$!==($=t[1].bookUrl)&&d(e,"href",$),1&n&&w!==(w=t[1].author+"")&&h(_,w)},d(t){t&&a(n)}}}function z(n){let e,o,r,c,f=n[0],h=[];for(let t=0;t<f.length;t+=1)h[t]=S(O(n,f,t));return{c(){e=i("main"),o=i("h1"),o.textContent="瞎读",r=s(),c=i("div");for(let t=0;t<h.length;t+=1)h[t].c();d(c,"class","content svelte-10um4kv"),d(e,"class","svelte-10um4kv")},m(t,n){u(t,e,n),l(e,o),l(e,r),l(e,c);for(let t=0;t<h.length;t+=1)h[t].m(c,null)},p(t,[n]){if(1&n){let e;for(f=t[0],e=0;e<f.length;e+=1){const o=O(t,f,e);h[e]?h[e].p(o,n):(h[e]=S(o),h[e].c(),h[e].m(c,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=f.length}},i:t,o:t,d(t){t&&a(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(h,t)}}}async function U(t){let n=await fetch(t);return await n.json()}function q(t,n,e){let o=[];return g(async()=>{let t=await U("data/meta.json"),n=Object.values(t).reduce((t,n)=>t+n),r=new Set;for(;r.size<9;)r.add(Math.floor(Math.random()*n));r=[...r].sort((t,n)=>t-n),console.log(r);let c=0;for(let n in t){let l=t[n];if(0==r.length)break;if(c+l>r[0]){let t=await U(`data/${n}.json`);for(;r.length>0&&c+l>r[0];)e(0,o=[...o,t[r[0]-c]]),r=r.slice(1)}c+=l}}),[o]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),N(this,t,q,z,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
