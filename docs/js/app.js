(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-63759244":1,"chunk-096f09b0":1,"chunk-44bf21ae":1,"chunk-63c036a2":1,"chunk-d483c4ba":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){c=d[u],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],m.parentNode.removeChild(m),n(i)},m.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/dqw_monster_view/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./Additional.vue":["3755","chunk-63759244","chunk-44bf21ae","chunk-63c036a2"],"./Home.vue":["bb51","chunk-63759244","chunk-44bf21ae","chunk-d483c4ba"],"./Setting.vue":["4ef5","chunk-63759244","chunk-096f09b0"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="1a5d",e.exports=o},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("7496"),a=n("40dc"),i=n("8336"),u=n("132d"),s=n("f6c4"),c=n("2fa4"),l=n("2a7f"),d=function(){var e=this,t=e._self._c;return t(o["a"],[t(a["a"],{attrs:{app:"",color:"primary",dark:""}},[t(l["a"],[e._v("こころ所持数管理")]),t(c["a"]),t(i["a"],{attrs:{icon:"",to:"/"}},[t(u["a"],[e._v("mdi-bookmark")])],1),t(i["a"],{attrs:{icon:"",to:"/additional"}},[t(u["a"],[e._v("mdi-shape-circle-plus")])],1),t(i["a"],{attrs:{icon:"",to:"/setting"}},[t(u["a"],[e._v("mdi-cog")])],1)],1),t(s["a"],[t("router-view")],1)],1)},m=[],p={name:"App",data(){return{}},methods:{}},f=p,g=n("2877"),h=Object(g["a"])(f,d,m,!1,null,null,null),_=h.exports,v=n("8c4f");function y(e){return()=>n("1a5d")(`./${e}.vue`)}r["a"].use(v["a"]);const b=[{path:"/",name:"Home",component:y("Home")},{path:"/additional",name:"Additional",component:y("Additional")},{path:"/setting",name:"Setting",component:y("Setting")}],w=new v["a"]({routes:b});var k=w,O=n("2f62");r["a"].use(O["a"]);const S={setting:{api_url:null,user:null,default_user:null,prefecture:null,sort_asc:!1}},x={save_setting(e,{setting:t}){e.setting={...t},localStorage.setItem("dqw_monster_view_setting",JSON.stringify(t))},load_setting(e){const t=JSON.parse(localStorage.getItem("dqw_monster_view_setting"));t&&(e.setting=Object.assign(e.setting,t))}},j={save_setting({commit:e},{setting:t}){e("save_setting",{setting:t})},load_setting({commit:e}){e("load_setting")}},P={},T=new O["a"].Store({state:S,mutations:x,actions:j,getters:P});var N=T,E=n("f309");r["a"].use(E["a"]);var A=new E["a"]({});const C=JSON.parse(localStorage.getItem("dqw_monster_view_setting"));let J="";C&&(J=C.api_url);const q=async e=>{if(""==J)return;console.log(e);let t=null;return await fetch(J,{method:"POST","Content-Type":"application/x-www-form-urlencoded",body:JSON.stringify(e)}).then(async e=>{await e.json().then(e=>{t=e})}).catch(e=>{console.log("Fetch エラーです！"),console.log(e)}),t},L=e=>{""!=J&&(console.log(e),fetch(J,{method:"POST",mode:"no-cors","Content-Type":"application/x-www-form-urlencoded",body:JSON.stringify(e)}))},M=()=>{if(""==J)return;const e={method:"get_story",params:{}};return q(e)},D=()=>{if(""==J)return;const e={method:"get_monster",params:{}};return q(e)},H=(e,t)=>{if(""==J)return;const n={method:"update_story",params:{user:e,monster:t}};return L(n)},I=(e,t)=>{if(""==J)return;const n={method:"update_active_story",params:{user:e,story:t}};return L(n)},B=e=>{if(""==J)return;const t={method:"get_additional",params:{user:e}};return q(t)},F=(e,t)=>{if(""==J)return;const n={method:"delete_additional",params:{user:e,monster:t}};return L(n)},U=(e,t)=>{if(""==J)return;const n={method:"update_additional",params:{user:e,monster:t}};return L(n)},$=(e,t)=>{if(""==J)return;const n={method:"update_list_additional",params:{user:e,monsters:t}};return L(n)},K=()=>{if(""==J)return;const e={method:"get_region_monster",params:{}};return q(e)};var z={fetch_value:q,fetch_no_value:L,get_story:M,get_monster:D,update_story:H,update_active_story:I,get_additional:B,delete_additional:F,update_additional:U,update_list_additional:$,get_region_monster:K},G={methods:{get_current_value(e,t=!1){let n=0,r=0,o=0;return t?(n=4*e.num_s*3,r=3*e.num_a,o=e.num_b):(n=e.num_s*(e.max_a+1)*(e.max_b+1),r=e.num_a*(e.max_b+1),o=e.num_b),n+r+o},get_max_value(e,t=!1){return t?48:(e.max_b+1)*(e.max_a+1)*e.max_s}}};r["a"].config.productionTip=!1,r["a"].prototype.$gas=z,r["a"].mixin(G),new r["a"]({router:k,store:N,vuetify:A,render:e=>e(_)}).$mount("#app")}});