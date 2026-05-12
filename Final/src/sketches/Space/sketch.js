const sketch = (p) => {
  let spaceAudio;
  let points = [];
  let stars = [];

  let mult = 0.001;

  let r1, r2, g1, g2, b1, b2;

  p.setup = async () => {
    p.createCanvas(1125, 800);
    spaceAudio = await p.loadSound("/space.mp3");

    p.angleMode(p.DEGREES);
    p.noiseDetail(1);

    let density = 100;
    let space = p.width / density;

    for (let x = 0; x < p.width; x += space) {
      for (let y = 0; y < p.height; y += space) {
        let point = p.createVector(
          x + p.random(-10, 10),
          y + p.random(-10, 10),
        );

        points.push(point);
      }
    }

    p.shuffle(points, true);

    r1 = p.random(255);
    r2 = p.random(255);

    g1 = p.random(255);
    g2 = p.random(255);

    b1 = p.random(255);
    b2 = p.random(255);

    mult = p.random(0.002, 0.01);

    for (let i = 0; i < 300; i++) {
      stars.push({
        x: p.random(p.width),
        y: p.random(p.height),
        size: p.random(1, 3),
        brightness: p.random(150, 255),
      });
    }
  };

  p.mousePressed = () => {
    p.userStartAudio();

    if (spaceAudio && !spaceAudio.isPlaying()) {
      spaceAudio.play();
    } else {
      spaceAudio.stop();
    }
  };

  p.draw = () => {
    p.background(0, 5);

    drawStars();

    p.noStroke();

    let max;

    if (p.frameCount <= points.length) {
      max = p.frameCount;
    } else {
      max = points.length;
    }

    for (let i = 0; i < max; i++) {
      let r = p.map(points[i].x, 0, p.width, r1, r2);
      let g = p.map(points[i].y, 0, p.height, g1, g2);
      let b = p.map(points[i].x, 0, p.width, b1, b2);

      p.fill(r, g, b, 180);

      let angle = p.map(
        p.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720,
      );

      points[i].add(p.createVector(p.cos(angle), p.sin(angle)));

      if (p.dist(p.width / 2, p.height / 2, points[i].x, points[i].y) < 200) {
        p.ellipse(points[i].x, points[i].y, 1);
        p.ellipse(points[i].x / 0.5, points[i].y / 0.5, 1);
        p.ellipse(points[i].x / 2, points[i].y / 2, 1);
        p.ellipse(points[i].x / 3, points[i].y / 3, 1);
        p.ellipse(points[i].x / 4.5, points[i].y / 4.5, 1);
        p.ellipse(points[i].x / 7, points[i].y / 7, 1);
        p.ellipse(points[i].x / 9.6, points[i].y / 9.6, 1);
        p.ellipse(points[i].x / 14, points[i].y / 14, 1);
        p.ellipse(points[i].x / 24, points[i].y / 24, 1);
      }
    }
  };

  function drawStars() {
    p.noStroke();

    for (let s of stars) {
      let twinkle = p.sin(p.frameCount * 0.05 + s.x) * 50;

      p.fill(255, 255, 255, s.brightness + twinkle);
      p.ellipse(s.x, s.y, s.size);
    }
  }

  p.cleanup = () => {
    if (spaceAudio && spaceAudio.isPlaying()) {
      spaceAudio.stop();
    }

    points = [];
    stars = [];
  };
};

export default sketch;
