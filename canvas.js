var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var circles=[];

setInterval(update, 100);

document.addEventListener("keydown", onKeyDown);


function update() {
    ctx.clearRect(0,0,c.width,c.height);
    for (var i=0; i<circles.length; i++){
        drawCircle(circles[i]);
        circles[i].x+=circles[i].dx;
        circles[i].y+=circles[i].dy;
    };
    //drawCircle();
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
function onKeyDown(event) {
    if(event.keyCode==32) {
        event.preventDefault();
        console.log("you pressed the spacebar")
        circles.push({
            x: Math.floor(Math.random()*c.width),
            y: Math.floor(Math.random()*c.height),
            radius: Math.floor(Math.random()*0.5*c.height),
            stroke: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
            fill: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
            dx: Math.floor(Math.random()*10)-5,
            dy: Math.floor(Math.random()*20)-10
        });
    }
}
