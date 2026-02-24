const DOWN = 'down';
const UP = 'up';
let startingX = 60;
let startingY = 180;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardBack;

function preload () {
    cardBack = loadImage('images/1.jpg');
    cardfaceArray = [
        loadImage('images/2.jpg'),
        loadImage('images/3.jpg'),
        loadImage('images/4.jpg'),
        loadImage('images/5.jpg'),
        loadImage('images/6.jpg'),
        loadImage('images/7.jpg'),
        loadImage('images/8.jpg'),
        loadImage('images/9.jpg')
    ]
};
function setup () {
    createCanvas(700,600);
    let selectedFaces = [];
    for(let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used cardface so no duplicates
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) { //moves Y and allows us to create a new row
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop(); //returning the item that gets removed
            cards.push(new Card(startingX,startingY, faceImage));
            startingX += 150;
            console.log(startingX);
        } //able to create a row
        startingY += 100;
        startingX = 60; //returns to starting position
    }
}
function draw() {

    background('#123456'); // redraw background every frame
    fill('white')
    textSize(30)
    textFont('Helvetica')
    text('Nick & Schmidt Moments', 170, 80)

    if (gameState.numMatched === gameState.totalPairs) {
        fill(100, 149, 237);
        textSize(50);
        text('You Win!', 230, 150);
        noLoop();
    }

    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch)  {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill('white');
    textSize(18);
    text('Attempts: ' + gameState.attempts, 500, 150);
    text('Matches: ' + gameState.numMatched, 70, 150);
}
function mousePressed() {
    if (gameState.waiting) {
        return; // stops the whole function
    }

    for (let k = 0; k < cards.length; k++){ //loops through all cards
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX,mouseY)) {
            //console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]); //makes it so only two cards can be flipped
        }
    } 

    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) { //checking to see if the two faces images match 
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0; //empties the array 
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }

}
class Card{
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 80;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show()
    
    }
    show(){
        if(this.face === UP || this.isMatch) {
            //fill('white');
            //rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y, this.width, this.height); 
        } else {
            image(cardBack, this.x, this.y, this.width, this.height); //makes picture the size of the car
        }
    }
    didHit (mouseX,mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
        }
    flip () {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }

}
function shuffleArray (array) {
        let counter = array.length;
        while (counter > 0) {
            //pick random index
            const idx = Math.floor(Math.random() * counter);
            counter--;
            const temp = array[counter];
            array[counter] = array[idx];
            array[idx] = temp;
        }
        return array; 
    }