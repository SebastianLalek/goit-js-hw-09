function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form");function s(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{const i={position:e,delay:t};setTimeout((()=>{n?o(i):r(i)}),t)}))}l.addEventListener("submit",(t=>{t.preventDefault();const n=parseInt(l.elements.delay.value),o=parseInt(l.elements.step.value),r=parseInt(l.elements.amount.value);let a=n;for(let t=1;t<=r;t++)s(t,a).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),a+=o}));
//# sourceMappingURL=03-promises.1099a319.js.map
