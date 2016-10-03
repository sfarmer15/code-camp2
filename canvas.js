var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


ctx.beginPath();
ctx.arc(150,150,80,0,2*Math.PI);
ctx.strokeStyle="red";
ctx.fillStyle="yellow";
ctx.stroke();
ctx.fill();