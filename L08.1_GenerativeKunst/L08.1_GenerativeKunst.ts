namespace GenerativeKunst {

    window.addEventListener("load", createCanvas);

    let crc2: CanvasRenderingContext2D;
    let size: number = 320;
    let step: number = 80;

    function drawArtDots(): void {
        for (let i: number = 0; i < 50; i++) {
            let purple: number = Math.floor(Math.random() * 200);
            let yellow: number = Math.floor(Math.random() * 400);
            let blue: number = Math.floor(Math.random() * 600);
            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (2500) + 1), Math.floor(Math.random() * (1500) + 1), Math.floor(Math.random() * (100) + 10), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "rgb(" + purple + ", " + yellow + "," + blue + ")";
            crc2.fill();
            
        }
    }

    function backgroundLines(x: number, y: number, innerWidth: number, innerHeight: number): void {
        for (var x: number = 0; x < size; x += step) {
            for (var y: number = 0; y < size; y += step) {

                let white: number = Math.floor(Math.random() * 300);
                
                let leftToRight: boolean = Math.random() >= 0.5;
                
                if (leftToRight) {
                    crc2.moveTo(x, y);
                    crc2.lineTo(x + innerWidth, y + innerHeight);
                } else {
                    crc2.moveTo(x + innerWidth, y);
                    crc2.lineTo(x, y + innerHeight);
                }
                crc2.stroke();
                crc2.strokeStyle = "rgb(" + white + ")";
            }    
        }
    }    

    function createCanvas(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        crc2.lineCap = "square";
        crc2.lineWidth = 2;
        drawArtDots();
        backgroundLines(0, 0, innerWidth, innerHeight);
    }
}