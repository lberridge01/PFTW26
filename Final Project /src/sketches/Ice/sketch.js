const sketch = (p) => {
  let iceAudio;
  let points = [];
  let mult = 0.11;

  p.setup = async () => {
    p.createCanvas(1120,800);
    iceAudio = await p.loadSound("/icecracking.mp3");

    
    p.background(30);
    p.angleMode(p.DEGREES);
    p.noiseDetail(10);

    let density = 22;
    let space = p.width / density;

    for (let x = 0; x < p.width; x += space) {
      for (let y = 0; y < p.height; y += space) {
        let point = p.createVector(
          x + p.random(-10, 10),
          y + p.random(-10, 10)
        );

        points.push(point);
      }
    }
  };

p.mousePressed = () => {
    p.userStartAudio();

    if (iceAudio && !iceAudio.isPlaying()) {
      iceAudio.play();
    } else {
      iceAudio.stop();
    }
  };

  p.draw = () => {
    p.noStroke();

    for (let i = 0; i < points.length; i++) {
      let r = p.map(points[i].x, 0, p.width, 50, 250);
      let g = p.map(points[i].y, 0, p.height, 50, 250);
      let b = p.map(points[i].x, 0, p.width, 250, 50);

      let alpha = p.map(
        p.dist(p.width / 2, p.height / 2, points[i].x, points[i].y),
        0,
        400,
        255,
        20
      );

      p.fill(r, g, b, alpha);

      let angle = p.map(
        p.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720
      );

      points[i].add(
        p.createVector(
          p.cos(angle) * 2,
          p.sin(angle)
        )
      );

      p.ellipse(points[i].x, points[i].y, 2);
    }
  };
  p.cleanup = () => {
  if (iceAudio && iceAudio.isPlaying()) {
    iceAudio.stop();
  }

  points = [];
};
};

export default sketch;