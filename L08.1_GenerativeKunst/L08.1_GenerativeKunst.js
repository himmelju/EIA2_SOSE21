"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", createCanvas);
    let crc2;
    function createCanvas() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawArtDots();
    }
    function drawArtDots() {
        for (let i = 0; i < 50; i++) {
            let red = Math.floor(Math.random() * 300);
            let green = Math.floor(Math.random() * 300);
            let blue = Math.floor(Math.random() * 300);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=L08.1_GenerativeKunst.js.map