var mousevent = "empty";
var last_pos_x,last_pos_y;
var current_pos_x,current_pos_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 4;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown (e){
    mousevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup (e){
    mousevent="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave (e){
    mousevent="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);
function mymousemove (e){
    current_pos_x= e.clientX-canvas.offsetLeft;
    current_pos_y= e.clientY-canvas.offsetTop;
    
    if (mousevent=="mousedown")
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth=width_of_line;
    console.log("last position of X and Y coordinates=");
    console.log("X="+last_pos_x+"Y="+last_pos_y);
    ctx.moveTo(last_pos_x,last_pos_y);
    
    
    console.log("current position of X and Y coordinates=");
    console.log("X="+current_pos_x+"Y="+current_pos_y);
    ctx.lineTo(current_pos_x,current_pos_y);
    ctx.stroke;
}
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}