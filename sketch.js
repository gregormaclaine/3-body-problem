const bodies = [];

function setup() {
  createCanvas(800, 800);


  bodies.push(new Body(0, -100));
  bodies.push(new Body(-100, 50));
  bodies.push(new Body(100, 50));
  //bodies.push(new Body(100, -100));
}

function draw() {
  background(250);
  translate(width / 2, height / 2);

  strokeWeight(5);
  stroke(0);
  point(400, 400);

  bodies.forEach(b => {
    b.applyGravityFrom(bodies);
    b.update();
  });

  bodies.forEach((b, i) => b.show(bodies[0].pos));
  //bodies.forEach((b, i) => b.show(createVector(0, 0)));
}