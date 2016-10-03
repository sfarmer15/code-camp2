var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


drawCircle(200, 300, 40, "black", "white");
drawCircle();



function drawCircle(x, y, r, stroke, fill) {
    ctx.beginPath();
    ctx.arc(x||150,y||150,r||80,0,2*Math.PI);
    ctx.strokeStyle=stroke||"red";
    ctx.fillStyle=fill||"yellow";
    ctx.stroke();
    ctx.fill();
}