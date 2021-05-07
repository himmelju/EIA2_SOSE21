namespace GenerativeKunst {

    window.addEventListener("load", createCanvas);

    let crc2: CanvasRenderingContext2D;

    function createCanvas(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D> canvas.getContext("2d");
        
        drawArtDots();
    }

    function drawArtDots(): void {
        for (let i: number = 0; i < 50; i++) {
            let red: number = Math.floor(Math.random() * 300);
            let green: number = Math.floor(Math.random() * 300);
            let blue: number = Math.floor(Math.random() * 300);
            crc2.beginPath();

            crc2.arc(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (700) + 1), Math.floor(Math.random() * (90) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();

            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }


}