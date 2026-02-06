function setup() {
  createCanvas(200, 200);
}
function createTile() {
  translate(0,0);
  fill('blue');
  rect(0,0,200,200);
  stroke('white');
  strokeWeight(3);
  line(0,0,200,200);
  line(200,0,0,200);
  line(100, 0, 100, 200);
  line(0, 100, 200, 100);
  noStroke();
  fill('#00BCD4');
  circle(100,100,60);
  fill('lightblue');
  circle(100,100,50);
  circle(25,25,25);
  circle(65,65,25);
  circle(175,25,25);
  circle(135,65,25);
  circle(175,175,25);
  circle(135,135,25);
  circle(25,175,25);
  circle(65,135,25);
  fill('white');
  circle(100,100,40);
  fill('#E91E63');
  circle(100,100,20);
  fill('#00BCD4')
  triangle(0, 0, 40, 0, 0, 40);
  triangle(200, 0, 160, 0, 200, 40);
  triangle(0, 200, 0, 160, 40, 200);
  triangle(200, 200, 160, 200, 200, 160);

}
  
function draw(){
  createTile();
}