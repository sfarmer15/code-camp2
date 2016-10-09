var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var circles=[{
    x: 200,
    y: 300,
    radius: 40,
    stroke: "black",
    fill: "white"
}];

circles.push({
    x: 250,
    y: 250,
    radius: 53,
    stroke: "green",
    fill: "pink"
});
console.log('initialized circles', circles);

setInterval(update, 100);

document.addEventListener("keydown", onKeyDown);


function update() {
    ctx.clearRect(0,0,c.width,c.height);
    for (var i=0; i<circles.length; i++){
        drawCircle(circles[i]);
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
            fill: "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")"
        });
    }
}
