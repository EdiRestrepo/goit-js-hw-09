!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var l=o("h6c0i"),r=document.querySelector("form"),i=document.querySelector('[name = "delay"]'),a=document.querySelector('[name = "step"]'),c=document.querySelector('[name = "amount"]');document.querySelector("button");function u(e,t){Math.random()>.3?Promise.resolve({position:e,delay:t}).then((function(e){var t=e.position,n=e.delay;l.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})):Promise.reject({position:e,delay:t}).catch((function(e){var t=e.position,n=e.delay;l.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}r.addEventListener("submit",(function(e){e.preventDefault();var t=Number(i.value),n=Number(a.value),o=Number(c.value),l=0;setTimeout((function(){u(++l,t);var e=setInterval((function(){u(++l,t+=n),l>=o&&clearInterval(e)}),n)}),t)})),i.style.display="block",a.style.display="block",c.style.display="block",r.style.display="flex",r.style.gap="10px",r.style.alignItems="flex-end"}();
//# sourceMappingURL=03-promises.9fd53515.js.map