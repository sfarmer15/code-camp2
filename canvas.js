var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var circles=[];

setInterval(update, 100);

document.addEventListener("keydown", onKeyDown);
document.addEventListener("click", onClick);


function update() {
    ctx.clearRect(0,0,c.width,c.height);
    for (var i=0, circle; i<circles.length; i++){
        circle=circles[i];
        drawCircle(circle);
        switch (true){
            case (circle.x-circle.radius)<=0 || (circle.x+circle.radius)>=c.width:
                circle.dx = -circle.dx;
                circle.dy = -circle.dy;
            case (circle.y-circle.radius)<=0 || (circle.y+circle.radius)>=c.height:
                circle.dy = -circle.dy;
        };
       
            circle.x+=circle.dx;
            circle.y+=circle.dy;
        };
        
    };


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
};
function onKeyDown(event) {
    if(event.keyCode==32) {
        event.preventDefault();
        console.log("you pressed the spacebar");
        circles.push({
            x: Math.floor(Math.random()*c.width),
            y: Math.floor(Math.random()*c.height),
            radius: r=Math.floor(Math.random()*40),
            stroke: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
            fill: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
            dx: Math.floor(Math.random())*r+5,
            dy: Math.floor(Math.random())*r-5,
        });
    }
};
function onClick(click){
    console.log(click);
    circles.push({
        x:click.layerX,
        y:click.layerY,
        radius: r=Math.floor(Math.random()*40),
        stroke: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
        fill: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")",
        dx: Math.floor(Math.random())*r+5,
        dy: Math.floor(Math.random())*r-5,
    })

}
