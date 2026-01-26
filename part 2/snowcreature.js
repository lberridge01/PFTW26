let stroke1 = prompt("enter a basic color name in lowercase to change the outline");
let stroke2 = prompt("enter another basic color lowercase to change the hat and scarf");
function setup() {
    createCanvas(1000,800);
    
}
function draw() {
    background(200, 230, 255);

    fill(245);
    noStroke();
    rect(0, 600, width, 200);
    //background(grid);
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    //left lef
    ellipse(350, 650, 200);
    //right leg
    ellipse(650, 650, 200);
    //body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);
    // scarf
    stroke(stroke2);
    strokeWeight(60);
    noFill();
    arc(500, 340, 260, 120, 0, PI);
    line(600, 360, 600, 450);
    // arms(sticks)
    stroke(120, 80, 40);
    strokeWeight(8);
    line(350, 430, 200, 350);
    line(650, 430, 800, 370);
    // fingers
    line(200, 350, 180, 320);
    line(200, 350, 220, 320);
    line(800, 370, 780, 340);
    line(800, 370, 820, 340);
    
}
