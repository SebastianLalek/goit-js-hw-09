!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");var n=null,r=function(t){return t.setAttribute("disabled","")},o=function(t){return t.removeAttribute("disabled")};r(e),t.addEventListener("click",(function(){var a=null;n=setInterval((function(){a="#".concat(Math.floor(16777215*Math.random()).toString(16)),document.body.style.backgroundColor=a}),1e3),o(e),r(t)})),e.addEventListener("click",(function(){clearInterval(n),o(t),r(e)}))}();
//# sourceMappingURL=01-color-switcher.bb71d742.js.map