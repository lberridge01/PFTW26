const sketch = (p) => {
  let perlinAudio;
  let position = 0;
  let xpos = 0;
  let ypos = 0;
  let particles = [];

  const num = 100;
  const distAmount = 0.5;
  const loopLength = 100;

  let speed = 0.0022;
  let speedX = 0.0023;
  let speedY = 0.0024;

  p.setup = async () => {
    p.createCanvas(1120,800);
    perlinAudio = await p.loadSound("/uplifting.mp3");
    
    p.textSize(32);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB, 360, 100, 100, 255);

    for (let i = 0; i < num; i++) {
      let c = p.createVector(0, 0);
      let o = p.createVector(
        p.random(-distAmount, distAmount),
        p.random(-distAmount, distAmount)
      );
      let d = p.map(i, 0, num, 1, 2);
      let hue = p.color(p.map(o.x, -distAmount, distAmount, 360, 180), 100, 100, 255);

      particles[i] = new Particle(c, d, o, hue);
    }
  };

  p.mousePressed = () => {
    p.userStartAudio();

    if (perlinAudio && !perlinAudio.isPlaying()) {
      perlinAudio.play();
    } else {
      perlinAudio.stop();
    }
  };

  p.draw = () => {
    p.background(0, 5);
    p.noStroke();

    for (let i = 0; i < num; i++) {
      particles[i].display();
      particles[i].move();
    }

    if (position > loopLength || position < 0) {
      speed = -speed;
    }

    position += speed;
    xpos += speedX;
    ypos += speedY;
  };

  class Particle {
    constructor(coords, diameter, offset, col) {
      this.coords = coords;
      this.diam = diameter;
      this.offset = offset;
      this.col = col;
    }

    display() {
      p.circle(this.coords.x, this.coords.y, this.diam);
    }

    move() {
      this.coords.x =
        p.noise(this.offset.x + xpos * 2, this.offset.y + ypos) * p.width;

      this.coords.y =
        p.noise(this.offset.x + xpos, this.offset.y + ypos) * p.height;

      p.fill(
        p.map(
          p.noise(position + this.offset.x, position - this.offset.y),
          0,
          1,
          360,
          0
        ),
        100,
        100
      );
    }
  }
  p.cleanup = () => {
  if (perlinAudio && perlinAudio.isPlaying()) {
    perlinAudio.stop();
  }

  particles = [];
  };
};

export default sketch;