namespace eventInspector {

    window.addEventListener("load", handleLoad);     
    
    function handleLoad(): void {

        document.addEventListener("mousemove", function (): void {
            handleLoad();
        });
        document.addEventListener("click", function (): void {
            handleLoad();
        });
        document.addEventListener("keyup", function (): void {
            handleLoad();
        });
    } 
}