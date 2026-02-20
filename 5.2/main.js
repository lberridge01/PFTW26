let bubble = [];

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 10; i++){
        bubble.push(new Bubble());
    }
    
}

function draw() {
    background(175, 143, 233, 50);

    for (let i = 0; i < bubble.length; i++) {
        bubble[i].move();
        bubble[i].show();

    }
}

class Bubble {
    constructor() {
        this.x = 250;
        this.y = 150;
    }

    move() {
        this.x = this.x + random(-2,2);
        this.y = this.y + random(-2,2);
    }

    show() {
        stroke(255);
        fill('pink');
        ellipse(this.x, this.y, 25, 25);
    }
}