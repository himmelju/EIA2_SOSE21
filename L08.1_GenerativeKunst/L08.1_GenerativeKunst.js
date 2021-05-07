"use strict";
var GenerativeKunst;
(function (GenerativeKunst) {
    window.addEventListener("load", createCanvas);
    let crc2;
    function createCanvas() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawArtDots();
    }
    function drawArtDots() {
        for (let i = 0; i < 50; i++) {
            let purple = Math.floor(Math.random() * 200);
            let yellow = Math.floor(Math.random() * 400);
            let blue = Math.floor(Math.random() * 600);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1), Math.floor(Math.random() * (100) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            crc2.fillStyle = "rgb(" + purple + ", " + yellow + "," + blue + ")";
            crc2.fill();
        }
    }
})(GenerativeKunst || (GenerativeKunst = {}));
//# sourceMappingURL=L08.1_GenerativeKunst.js.map