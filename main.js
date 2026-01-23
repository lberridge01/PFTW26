function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    if (mouseIsPressed) {
        fill(random(255), random(255), random(255));
    } else {
      fill(100,100,100);
    }
    rect(mouseX, mouseY, 80, 80);
  }