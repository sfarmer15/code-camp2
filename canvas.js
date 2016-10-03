var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


drawCircle(200, 300, 40);
drawCircle();



function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x||150,y||150,r||80,0,2*Math.PI);
    ctx.strokeStyle="red";
    ctx.fillStyle="yellow";
    ctx.stroke();
    ctx.fill();
}