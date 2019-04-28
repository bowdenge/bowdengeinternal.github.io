console.log("main js called");

//Calling Dragging class
var myT = new Dragging(colArray[0][3], colArray[0][4], canvas);



function animate(){
    ctx.clearRect(0,0, width, height);
    myT.update();

    
    window.requestAnimationFrame(animate);
}
animate();
