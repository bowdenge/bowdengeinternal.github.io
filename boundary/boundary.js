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
        // set when down in bounds stays true once mouse pressed
        //set false on mouse up
        this.mouseDown = false;

        //Within canvas rectangle
        this.rectBound = false;

        //Hard Coded variables to create the back canvas rectangle 
        this.x = 250;
        this.y = 50;
        this.w = 500;
        this.h = 500;
        
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
        //this.mouseDown = true;
        if (this.rectBound == true ){
            this.mouseDown = true;
        }
        else{
            this.mouseDown = false;
        }

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        console.log(this.rectBound);

    }

    mUp(e){
        //Calling Rectangle class
        if(this.mouseDown && this.rectBound){
            var ROne = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.fill);
            this.objectSet.push(ROne);
        }
        console.log("mouse up event");
        this.mouseDown = false;
    }

    update(){
        this.drawCanvasRect(this.x, this.y, this.w, this.h, colArray[0][6]);
        //Allowing multiple rectangles to be produced 
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }

        //Calculating the width and the height of the rectangle
        this.dx = this.xMouse - this.xMouseStart;
        this.dy = this.yMouse - this.yMouseStart;
        
        
        if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }
    }

    drawCanvasRect(x,y,w,h,col){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.fillStyle = col;
        ctx.fill();
    }

    draw(){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.col);

    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = this.col;
        ctx.stroke();

    }

    boundsCheck(xMouse,yMouse,x,y,w,h){
        
        if(xMouse>x && xMouse<x+w && yMouse>y && yMouse<y+h){
            console.log("true");
            return true;
        }
        else{
            return false;
        }


    }
}