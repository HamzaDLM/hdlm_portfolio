(function(){"use strict";var e={2705:function(e,t,n){var o=n(9963),r=n(6252);function i(e,t,n,o,i,a){const u=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(u)}var a={name:"App",components:{},data(){return{}},watch:{$route:{immediate:!0,handler(e){document.title="Hamza Dellam",console.log(e)}}}},u=n(3744);const c=(0,u.Z)(a,[["render",i]]);var l=c,f=n(2119);const s=(0,f.p7)({history:(0,f.PO)(),routes:[{path:"/",name:"00.about me",component:()=>n.e(755).then(n.bind(n,558))},{path:"/hdlm_portfolio/",name:"00.about me",component:()=>n.e(755).then(n.bind(n,558))},{path:"/hdlm_portfolio/portfolio",name:"01.portfolio",component:()=>n.e(733).then(n.bind(n,7725))},{path:"/hdlm_portfolio//techstack",name:"02.tech stack",component:()=>n.e(379).then(n.bind(n,1379))},{path:"/hdlm_portfolio/coderepos",name:"03.code repos",component:()=>n.e(652).then(n.bind(n,3652))}]});var p=JSON.parse('{"about_me":"about me","portfolio":"portfolio","techstack":"techstack","playground":"playground","title1":"Hi, welcome to my ","homepage_text":"I am a software developer specializing in backend development, but have experience with all steps of the software development life-cycle and can be efficiently autonomous and work independently if required. With an overall experience of 5 years, I was an aeronautics engineer before deciding that software development is what I wish to pursue.","areas_of_interest_title":"Areas of interest:","areas_of_interest":"[IOT, Cyber Security, Game development, DevOps, Electronics, Real-time monitoring, ML, AI, CV, …]","worked_pro":"Worked professionally in these sectors:","worked_pro1":"[IOT, Health, Aeronautics, Rail, Automobile]"}'),d=JSON.parse('{"about_me":"나에 대해서","portfolio":"포트폴리오","techstack":"테크스택","playground":"운동장","title1":"안녕, 내 ","homepage_text":"저는 백엔드 개발을 전문으로 하는 소프트웨어 개발자이지만 소프트웨어 개발 수명 주기의 모든 단계에 대한 경험이 있으며 효율적으로 자율적이며 독립적으로 작업할 수 있습니다. 5년의 전반적인 경험을 가진 저는 항공 엔지니어였으며 소프트웨어 개발이 제가 추구하고 싶은 일이라고 결정했습니다.","areas_of_interest_title":"관심 분야:","areas_of_interest":"[IOT, 사이버 보안, 게임 개발, DevOps, 전자, 실시간 모니터링, ML, AI, CV, ...]","worked_pro":"다음 분야에서 전문적으로 일했습니다:","worked_pro1":"[IOT, 건강, 항공, 철도, 자동차]"}'),m=n(9150),h=(0,m.o)({locale:localStorage.getItem("lang"),messages:{en:p,kr:d},fallbackLocale:"kr"}),v=h,b=n(207);n(3734);(0,o.ri)(l).use(s).use(v).use(b["default"]).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{379:"fb058e82",652:"f30b9ca8",733:"f5bfaeea",755:"034c8f9f"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="hdlm:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var u,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==t+i){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=o),e[o]=[r];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/hdlm_portfolio/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),u=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],u=o[1],c=o[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var f=c(n)}for(t&&t(o);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},o=self["webpackChunkhdlm"]=self["webpackChunkhdlm"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2705)}));o=n.O(o)})();
//# sourceMappingURL=app.330e888c.js.map