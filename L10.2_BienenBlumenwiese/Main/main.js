"use strict";
var Lektion10;
(function (Lektion10) {
    /*
Aufgabe: <L10.2 Blumenwies: Polymorphie >
Name: <Julian Himmel>
Matrikel: <266418>
Datum: <letzte Bearbeitung 09.06.2021>
Quellen: <Huu Thien (Inspo), Lektion 10.2 Asteroids>
*/
    Lektion10.golden = 0.62;
    let movables = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        Lektion10.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBackground();
        drawFlowers();
        multipleFlowers();
        createCloud();
        createBees(10);
        imageData = Lektion10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Lektion10.crc2.canvas.height * Lektion10.golden;
        Lektion10.drawBackground();
        Lektion10.drawSun({ x: Lektion10.crc2.canvas.width / 2, y: Lektion10.crc2.canvas.height * 0.15 });
        Lektion10.drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        Lektion10.drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        Lektion10.drawBeeHive();
        multipleFlowers();
        drawFlowers();
    }
    function multipleFlowers() {
        for (let i = 0; i < 10; i++) {
            let redFlower = new Lektion10.Flowers();
            flowers.push(redFlower);
        }
        for (let i = 0; i < 10; i++) {
            let orangeFlower = new Lektion10.Flowers();
            flowers.push(orangeFlower);
        }
    }
    function drawFlowers() {
        for (let redFlower of flowers) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            redFlower.drawRedFlowers(randomX + 280, randomY + 420);
        }
        for (let orangeFlower of flowers) {
            let randomX = Math.floor(Math.random() * 900);
            let randomY = Math.floor(Math.random() * 200);
            orangeFlower.drawOrangeFlowers(randomX + 100, randomY + 420);
        }
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScale = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX = (Math.random() - 0.5) * 5;
            let randomVelocityY = (Math.random() - 0.5) * 5;
            movables.push(new Lektion10.Bees({ x: Lektion10.crc2.canvas.width / 2, y: Lektion10.crc2.canvas.height * Lektion10.golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }
    }
    function createCloud() {
        movables.push(new Lektion10.Cloud({ x: Lektion10.crc2.canvas.width * .10, y: Lektion10.crc2.canvas.height * .10 }, { x: 0.5, y: 0.1 }));
        movables.push(new Lektion10.Cloud({ x: Lektion10.crc2.canvas.width * .5, y: Lektion10.crc2.canvas.height * .05 }, { x: 0.5, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Lektion10.crc2.clearRect(0, 0, Lektion10.crc2.canvas.width, Lektion10.crc2.canvas.height);
        Lektion10.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < movables.length; index++) {
            movables[index].update();
            movables[index].draw();
        }
    }
})(Lektion10 || (Lektion10 = {}));
//# sourceMappingURL=main.js.map