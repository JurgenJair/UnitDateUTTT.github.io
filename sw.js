if(!self.define){let e,i={};const r=(r,f)=>(r=new URL(r+".js",f).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(f,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>r(e,s),o={module:{uri:s},exports:c,require:n};i[s]=Promise.all(f.map((e=>o[e]||n(e)))).then((e=>(l(...e),c)))}}define(["./workbox-c524eef9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"img/juli.jpeg",revision:"e16e387effa53c97687ec6132c76ec13"},{url:"img/perfil1.jpeg",revision:"3b5c2864e868d57a9c84e413b14ab747"},{url:"img/perfil2.jpeg",revision:"6bc3d229326aed89e982745ec6812086"},{url:"img/perfil3.jpeg",revision:"586fa0665433615936074725adaa7c37"},{url:"img/perfil4.jpeg",revision:"055c56b56d16ae6ae54d54c73d6f5cb9"},{url:"index.html",revision:"6855039dc5980b5930397454e230a7df"},{url:"logo.png",revision:"baae495203ba1a02bb0afe6e09cdb669"},{url:"manifest.json",revision:"c90d9955b8287042813a1d340c8911d9"},{url:"perfil2.html",revision:"feb0d60a8156125098c6452bb4eb12a9"},{url:"perfil3.html",revision:"603fd20e0862866775466fa7828ff63c"},{url:"perfil4.html",revision:"66a34a6980349fe87349577fb692ff92"},{url:"perfil5.html",revision:"e1fa4426bf62217c5add8d5530fd3081"},{url:"styles.css",revision:"406c08ff6fe2973982e5d17bfc5feac0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map