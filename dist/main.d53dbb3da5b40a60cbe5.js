(()=>{"use strict";var e,t,n,r={118:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(645),o=n.n(r),i=n(667),a=n.n(i),c=n(20),s=o()((function(e){return e[1]})),l=a()(c);s.push([e.id,'.element {\n  font-family: "Conv_BigShouldersStencilDisplay-Regular";\n  width: 500px;\n  height: 500px;\n  color: green;\n  background-image: url('+l+");\n}\n",""]);const u=s},55:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(645),o=n.n(r),i=n(667),a=n.n(i),c=n(350),s=n(144),l=n(365),u=n(716),f=o()((function(e){return e[1]})),d=a()(c),p=a()(s),h=a()(l),v=a()(u);f.push([e.id,'@charset "UTF-8";\n@font-face {\n  font-family: "Conv_BigShouldersStencilDisplay-Regular";\n  src: url('+d+');\n  src: local("☺"), url('+p+') format("woff"), url('+h+') format("truetype"), url('+v+') format("svg");\n  font-weight: normal;\n  font-style: normal;\n}\n',""]);const g=f},28:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(645),o=n.n(r),i=n(118),a=n(55),c=o()((function(e){return e[1]}));c.i(i.Z),c.i(a.Z),c.push([e.id,"\n",""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var f=a(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:v(d,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}},20:(e,t,n)=>{e.exports=n.p+"1fcab817090e78435061.svg"},350:(e,t,n)=>{e.exports=n.p+"ca11322c22162b2f1c65.eot"},716:(e,t,n)=>{e.exports=n.p+"7bb104f332759437af91.svg"},365:(e,t,n)=>{e.exports=n.p+"8927258be464baf0b799.ttf"},144:(e,t,n)=>{e.exports=n.p+"b193387e95e9efa9c0af.woff"}},o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={id:e,exports:{}};return r[e](t,t.exports,i),t.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),e=i(379),t=i.n(e),n=i(28),t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,console.log("Works!")})();