//for the menu
var oFunc = document.querySelector(".function-area");
var oLis = oFunc.querySelectorAll("ul li");
var oFuncCurrent = oFunc.querySelector(".func-current");
Array.prototype.forEach.call(oLis, function(elem, i){
    (function(elem, i){
        elem.addEventListener("mouseover", function(e) {
            oFuncCurrent.style.top = (35*i+15) + "px";
        }, false);
    })(elem, i);
});