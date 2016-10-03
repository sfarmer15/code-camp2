var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var circle1x=200;
setInterval(update, 100);



function update() {
    ctx.clearRect(0,0,c.width,c.height)
    drawCircle(circle1x, 300, 40, "black", "white");
    drawCircle();
    circle1x+=5;
}
function drawCircle(x, y, r, stroke, fill) {
    ctx.beginPath();
    ctx.arc(x||150,y||150,r||80,0,2*Math.PI);
    ctx.strokeStyle=stroke||"red";
    ctx.fillStyle=fill||"yellow";
    ctx.stroke();
    ctx.fill();
}
