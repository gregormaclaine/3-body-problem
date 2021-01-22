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

  textSize(32);
  textAlign(RIGHT, TOP);
  fill(0);
  console.log(frameRate().toString().slice(0,4));
  text(frameRate().toString().slice(0,4), width - bodies[0].pos.x, -bodies[0].pos.y);

  bodies.forEach((b, i) => b.show(bodies[0].pos));
  //bodies.forEach((b, i) => b.show(createVector(0, 0)));
}