var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var circle1x=200;
var circle1={
    x: 200,
    y: 300,
    radius: 40,
    stroke: "black",
    fill: "white"
};
var circle2={
    x: 250,
    y: 250,
    radius: 53,
    stroke: "green",
    fill: "pink"
};
setInterval(update, 100);



function update() {
    ctx.clearRect(0,0,c.width,c.height);
    drawCircle(circle1);
    drawCircle();
    drawCircle(circle2);
    circle1.x+=5;
}
function drawCircle(circle) {
    circle=circle||{};
    var x=circle.x||150;
    var y=circle.y||150;
    var radius=circle.radius||80;
    var fill=circle.fill||"red";
    var stroke=circle.stroke||"yellow";
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.strokeStyle=stroke;
    ctx.fillStyle=fill;
    ctx.stroke();
    ctx.fill();
}
