const sketch = (p) => {
  let flowers = [];
  let numFlowers = 8;
  let flowerAudio;

  p.setup = async () => {
    p.createCanvas(1125, 800);
    flowerAudio = await p.loadSound("/flower.mp3");
    p.angleMode(p.DEGREES);

    for (let i = 0; i < numFlowers; i++) {
      flowers.push(
        new Flower(p.random(100, p.width - 100), p.random(100, p.height - 100)),
      );
    }

    let spacing = 200;

    for (let x = spacing; x < p.width; x += spacing) {
      for (let y = spacing; y < p.height; y += spacing) {
        flowers.push(new Flower(x, y));
      }
    }
  };

  p.mousePressed = () => {
    p.userStartAudio();

    if (flowerAudio && !flowerAudio.isPlaying()) {
      flowerAudio.play();
    } else {
      flowerAudio.stop();
    }
  };

  p.draw = () => {
    p.background(245, 235, 255);

    for (let f of flowers) {
      f.update();
      f.display();
    }
  };

  class Flower {
    constructor(x, y) {
      this.x = x;
      this.y = y;

      this.bloomAmount = 0;
      this.bloomSpeed = p.random(0.005, 0.009);
      this.maxPetals = p.int(p.random(10, 20));
      this.size = p.random(0.6, 1.2);

      this.petalColor = p.color(
        p.random(200, 255),
        p.random(100, 180),
        p.random(150, 220),
        200,
      );
    }

    update() {
      this.bloomAmount = p.lerp(this.bloomAmount, 1, this.bloomSpeed);
    }

    display() {
      p.push();
      p.translate(this.x, this.y);
      p.scale(this.size);

      this.drawPetals();
      this.drawCenter();

      p.pop();
    }

    drawPetals() {
      p.noStroke();

      for (let i = 0; i < this.maxPetals; i++) {
        p.push();
        p.rotate((360 / this.maxPetals) * i);

        let petalLength = 120 * this.bloomAmount;
        let petalWidth = 60 * this.bloomAmount;

        p.fill(this.petalColor);
        p.ellipse(0, -petalLength / 2, petalWidth, petalLength);

        p.pop();
      }
    }

    drawCenter() {
      p.fill(253, 253, 150);
      p.noStroke();
      p.ellipse(0, 0, 70 * this.bloomAmount);
    }
  }
  p.cleanup = () => {
    if (flowerAudio && flowerAudio.isPlaying()) {
      flowerAudio.stop();
    }

    flowers = [];
  };
};

export default sketch;
