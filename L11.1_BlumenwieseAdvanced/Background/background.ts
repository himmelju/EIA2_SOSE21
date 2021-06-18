namespace Nektar {

    export interface Vector {
        x: number;
        y: number;
    }

    export function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    export function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 30;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    export function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        let stepMin: number = 50;
        let stepMax: number = 120;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


    export function drawBeeHive(): void {
        crc2.save();
        crc2.translate(crc2.canvas.width / 2 , crc2.canvas.height * 0.7);

        crc2.scale(8, 8);
        crc2.lineWidth = 0.5;
        crc2.strokeStyle = "#996633";

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-5.5, -1);
        crc2.quadraticCurveTo(-6, -6, -4, -8.5);
        crc2.quadraticCurveTo(-3.5, -10.5, -1.5, -11);
        crc2.quadraticCurveTo(0, -12, 1.5, -11);
        crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        crc2.quadraticCurveTo(3.5, -10.5, 4, -8.5);
        crc2.quadraticCurveTo(6, -6, 5.5, -1);
        crc2.fillStyle = "#FFB90F";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(0, -3, 1.5, 0, 2 * Math.PI);
        crc2.fillStyle = "#663300";
        crc2.fill();
        crc2.closePath();
       
        crc2.restore();
    }

    export function drawNektarProgress(): void {
    
        crc2.save();
        crc2.translate(crc2.canvas.width, crc2.canvas.height);  
    
        let amount: number[] = [];  // use it for Amount loaded color
        let startAmount: number[] = []; //number for Amount loaded
    
        let diff: number = (amount.length / 100) * Math.PI * 2;
    
        crc2.beginPath();
        crc2.arc(-100, -500, 50, 0, 2 * Math.PI, false);
        crc2.fillStyle = "yellow"; // for color of circle
        crc2.fill(); // fill function
        crc2.strokeStyle = "orange"; // for border color
        crc2.stroke(); // Stroke function
        crc2.fillStyle = "black"; // For text color
        crc2.strokeStyle = "yellow"; //For Stroke Color
        crc2.textAlign = "center"; //you know already for aligning text in center;
        crc2.lineWidth = 15; // for Stroke width
    
        crc2.beginPath(); // starting circle drawing function
        crc2.arc(-100, -500, 50, startAmount.length, diff + startAmount.length, false);
        crc2.stroke(); // Stroke function
    
        crc2.fillText(startAmount.length + "% Nektar", -100 + 2 , -500 + 6); //text value & text position

        function start(): void {
            setInterval(updateNectar, 1000);
        }
        
        function updateNectar(): void {
            if (startAmount.length < 100) {
                startAmount.push(1);
                amount.push(1);
                
            }
        }
        
        start();

        

    }
}