namespace eventInspector {

    window.addEventListener("load", handleLoad);     
    
    function handleLoad(_event: Event): void {

        document.addEventListener("mousemove", setInfoBox);
        let body: HTMLBodyElement = document.querySelector("body");
        body.addEventListener("keyup", logInfo);
        body.addEventListener("click", logInfo);

    } 

    function setInfoBox(_event: Event): void {
        let x: number = _event.pageX;
        let y: number = _event.pageY;
        let spanForMouseCursor: HTMLSpanElement = document.querySelector("span");
        spanForMouseCursor.style.left = x + "px";
        spanForMouseCursor.style.top = y + "px";
    }

    function logInfo(_event: Event): void {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);  
    }
}