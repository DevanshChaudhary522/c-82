var mouseEvent = "empty";
var last_position_x,last_position_y ;
canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="BLack";
width_line=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
     currentposition_x=e.clientX-canvas.offsetLeft;
     currentposition_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        console.log("lastposition of x and y =");
        console.log("x="+ last_position_x + "y=" +last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        console.log("currentposition of x and y =");
        console.log("x=" + currentposition_x + "y" +currentposition_y);
        ctx.lineTo(currentposition_x,currentposition_y);
        ctx.stroke();

    }
    last_position_x=currentposition_x;
    last_position_y=currentposition_y;
}