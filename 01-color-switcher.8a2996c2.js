!function(){"use strict";var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=null;var r=function(){o=setTimeout((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),r()}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")};t.addEventListener("click",r),e.addEventListener("click",(function(){clearTimeout(o),t.removeAttribute("disabled"),e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.8a2996c2.js.map
