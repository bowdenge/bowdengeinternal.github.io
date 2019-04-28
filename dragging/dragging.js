console.log("dragging js called");

class Dragging{
    constructor(col, fill, canvas){
        //List
        this.objectSet = [];
        //Colours
        this.col = col;
        this.fill = fill;
        //Mouse Positioning 
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;


        //Width and Height varibles made as integers to be calculated later
        this.w = 0;
        this.h = 0;

        //Canvas 
        this.element = canvas;

        //Listeners 
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        //Finding where the mouse begins
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;

    }

    mUp(e){
        this.mouseDown = false;
        //Calling Rectangle class
        var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.w, this.h, this.fill);
        this.objectSet.push(ROne);
        console.log("mouse up event");
    }

    update(){
        //Allowing multiple rectangles to be produced 
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }
        //Calculating the width and the height of the rectangle
        this.w = this.xMouse - this.xMouseStart;
        this.h = this.yMouse - this.yMouseStart;
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.w, this.h, this.col);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();


    }
}