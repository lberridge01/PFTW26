let startingX = 50;
let startingY = 40;
let squareSize = 75;
let spacing = 110;

function setup () {
    createCanvas(500,500);
}

function draw() {
    background('grey'); 
    drawShape();
}

function drawShape() {
    fill('white');

    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {

            let x = startingX + col * spacing;
            let y = startingY + row * spacing;

            rect(x, y, squareSize, squareSize);
        }
    }
}