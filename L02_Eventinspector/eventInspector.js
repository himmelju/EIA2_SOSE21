"use strict";
var eventInspector;
(function (eventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", function () {
            handleLoad();
        });
        document.addEventListener("click", function () {
            handleLoad();
        });
        document.addEventListener("keyup", function () {
            handleLoad();
        });
    }
})(eventInspector || (eventInspector = {}));
//# sourceMappingURL=eventInspector.js.map