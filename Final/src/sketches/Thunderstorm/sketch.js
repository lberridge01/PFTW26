const sketch = (p) => {
  let rains = [];
  let wind = 0;
  let flash = 0;
  let lightningTimer = 0;
  let thunderAudio;

  p.setup = async () => {
    p.createCanvas(1120, 800);
    thunderAudio = await p.loadSound("/thunderstorm.mp3");
  };

  p.draw = () => {
    p.background(10, 10, 30);

    wind = p.map(p.mouseX, 0, p.width, -1.5, 1.5);

    if (rains.length < 400) {
      rains.push(new Rain(p.random(p.width), p.random(-p.height, 0)));
    }

    for (let r of rains) {
      r.update();
      r.show();
    }

    if (p.random(1) < 0.005 && lightningTimer <= 0) {
      flash = 100;
      lightningTimer = 6;
    }

    if (flash > 0) {
      p.background(200, 200, 255, flash);
      drawLightning();
      flash -= 10;
    }
  };

  p.mousePressed = () => {
    p.userStartAudio();

    if (thunderAudio && !thunderAudio.isPlaying()) {
      thunderAudio.play();
    } else {
      thunderAudio.stop();
    }
  };
  function drawLightning() {
    p.stroke(255);
    p.strokeWeight(3);
    p.noFill();

    let x = p.random(p.width);
    let y = 0;

    p.beginShape();
    p.vertex(x, y);

    while (y < p.height) {
      x += p.random(-20, 20);
      y += p.random(10, 25);
      p.vertex(x, y);
    }

    p.endShape();
  }

  class Rain {
    constructor(x, y) {
      this.pos = p.createVector(x, y);
      this.z = p.random(0, 20);

      this.len = p.map(this.z, 0, 20, 10, 30);
      this.vel = p.createVector(0, p.map(this.z, 0, 20, 4, 10));
      this.acc = p.createVector(0, 0.15);
      this.alpha = p.map(this.z, 0, 20, 100, 255);
      this.weight = p.map(this.z, 0, 20, 1, 3);
    }

    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.pos.x += wind;

      if (this.pos.y > p.height) {
        this.pos.y = p.random(-200, 0);
        this.vel.y = p.map(this.z, 0, 20, 4, 10);
      }
    }

    show() {
      p.stroke(180, 200, 255, this.alpha);
      p.strokeWeight(this.weight);

      p.line(
        this.pos.x,
        this.pos.y,
        this.pos.x - wind * 2,
        this.pos.y - this.len,
      );
    }
  }
  p.cleanup = () => {
    if (thunderAudio && thunderAudio.isPlaying()) {
      thunderAudio.stop();
    }

    rains = [];
  };
};

export default sketch;
