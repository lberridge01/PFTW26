let rotateBy = 5;

function setup(){
    createCanvas(600,600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy){
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(65,105,225);
    strokeWeight(1);
    ellipse(50, 50 + alt, 50 * alt);
}
function draw(){
    translate(300,300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 20;
}
function mousePressed() {
    noLoop();
}
function keyPressed() {
    loop();
}