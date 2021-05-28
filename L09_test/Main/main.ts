namespace Bienen {
    
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;
    let bienen: Bees[] = [];
    let flowers: Flowers[] = [];
    let clouds: Cloud[] = [];
    let imageData: ImageData;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createBees(10);
        createBackground();
        createFlowers();
        createCloud();
        imageData =  crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }   

    function createBackground(): void {
        let horizon: number = crc2.canvas.height * golden;
        drawBackground();
        drawSun({x: crc2.canvas.width / 2, y: crc2.canvas.height * 0.15});
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        drawBeeHive();
    }

    function createFlowers(): void {
        let xPos: number = 0;
        do {
            flowers.push(new Flowers(Math.floor(Math.random() * 2) + 1, xPos, 50 + (crc2.canvas.height * golden), crc2.canvas.height * 0.9));
            xPos += 10 + Math.random() * (50 - 10);
        }
        while (xPos < crc2.canvas.width);
    }

    function createBees (_nBee: number): void {
        for (let index: number = 0; index < _nBee; index++) {
            let randomScale: number = 0.5 + Math.random() * (2.5 - 1.3);
            let randomVelocityX: number = (Math.random() - 0.5) * 5;
            let randomVelocityY: number = (Math.random() - 0.5) * 5;

            bienen.push(new Bees({ x: crc2.canvas.width / 2, y: crc2.canvas.height * golden }, { x: randomVelocityX, y: randomVelocityY }, randomScale));
        }

        
        
    }

    function createCloud (): void {
        clouds.push(new Cloud({ x: crc2.canvas.width * .10, y: crc2.canvas.height * .10 }));
        clouds.push(new Cloud({ x: crc2.canvas.width * .5, y: crc2.canvas.height * .05 }));
    }

    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);
        for (let index: number = 0; index < bienen.length; index ++) {
            bienen[index].update();
            
        }
        for (let index: number = 0; index < clouds.length; index ++) {
            clouds[index].update();
        }
    }
}