console.log("function js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

//Function for a rectangle 
function drawRectangle( x, y, w, h, fCol,sCol,lw){
    ctx.fillStyle = fCol;
    ctx.strokeStyle = sCol;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = sCol;
    ctx.beginPath();
    ctx.arc(x+w/2, y+h/2, h/2, 0, 2*Math.PI);
    ctx.fill();
}

//Function for circle
function drawCircle( x, y, R, fill, sCol, lw, fCol, stroke){
    ctx.beginPath()
    ctx.arc(x, y, R, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fCol;
        ctx.fill();
    }

    if(stroke == true){
        ctx.strokeStyle = sCol;
        ctx.lineWidth = lw;
        ctx.stroke();
    }

}

//Function line
function drawLine(x, y, x2, y2, sCol, lw){
    ctx.strokeStyle = sCol;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

drawCircle( 100, 200, 50, "rgb(255,102,102)", "rgb(255,255,153)", 1, true, true);
drawRectangle( 50, 50, 50, 50, "rgb(255,102,102)", "rgb(255,255,153)", 10);
drawLine(0, 250, 750, 250, "rgb(255,102,102)", 2);