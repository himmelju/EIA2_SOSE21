"use strict";
var Bienen;
(function (Bienen) {
    class Flowers {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            let randomScale = 0.5 + Math.random() * (0.8 - 0.5);
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Bienen.crc2.save();
            Bienen.crc2.translate(this.xPos, y);
            Bienen.crc2.scale(randomScale, randomScale);
            Bienen.crc2.fillStyle = "green";
            Bienen.crc2.fillRect(0, 0, 5, 40);
            if (this.flowerType == 1) {
                for (let index = 0; index < 4; index++) {
                    Bienen.crc2.beginPath();
                    Bienen.crc2.rotate(Math.PI / 2);
                    Bienen.crc2.moveTo(0, 0);
                    Bienen.crc2.lineTo(-15, -15);
                    Bienen.crc2.lineTo(-5, -10);
                    Bienen.crc2.lineTo(0, -15);
                    Bienen.crc2.lineTo(5, -10);
                    Bienen.crc2.lineTo(15, -15);
                    Bienen.crc2.closePath();
                    Bienen.crc2.fillStyle = "blue";
                    Bienen.crc2.fill();
                }
                Bienen.crc2.restore();
            }
            else {
                Bienen.crc2.beginPath();
                Bienen.crc2.moveTo(0, 0);
                Bienen.crc2.lineTo(-15, -5);
                Bienen.crc2.lineTo(-25, -30);
                Bienen.crc2.lineTo(-10, -20);
                Bienen.crc2.lineTo(0, -40);
                Bienen.crc2.lineTo(10, -20);
                Bienen.crc2.lineTo(25, -30);
                Bienen.crc2.lineTo(15, -5);
                Bienen.crc2.closePath();
                Bienen.crc2.fillStyle = "pink";
                Bienen.crc2.fill();
                Bienen.crc2.restore();
            }
        }
    }
    Bienen.Flowers = Flowers;
})(Bienen || (Bienen = {}));
//# sourceMappingURL=flower.js.map