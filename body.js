const GRAVITATIONAL_CONSTANT = 10;
const INITIAL_SPEED = 6;
const MAX_MASS = 6;
const PATH_LENGTH = 300;

class Body {
  constructor(x, y) {
    this.mass = max(random() * MAX_MASS, 0.5);
    this.pos = createVector(x, y);
    this.vel = createVector(random() * INITIAL_SPEED - INITIAL_SPEED / 2, random() * INITIAL_SPEED - INITIAL_SPEED / 2);
    this.acc = createVector(0, 0);

    this.path = [];
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0, 0);
  }

  applyForce(force) {
    // F = ma
    const newAcc = force.copy();
    newAcc.div(this.mass);
    this.acc.add(newAcc);
  }

  show(from, isRed) {
    strokeWeight(this.mass * 10);
    stroke(isRed ? 255 : 0, 0, 0);
    point(this.pos.x - from.x, this.pos.y - from.y);
    this.path.push(this.pos.copy());
    if (this.path.length > PATH_LENGTH) this.path.shift();
    this.drawPath(from);
  }

  drawPath(from) {
    for (const p of this.path) {
      stroke(0, 255, 0);
      strokeWeight(2);
      point(p.x - from.x, p.y - from.y);
    }
  }

  applyGravityFrom(body) {
    if (body.push) return body.forEach(b => this.applyGravityFrom(b));

    const dir = body.pos.copy();
    dir.sub(this.pos);
    const d = constrain(dir.mag(), 5, 25);
    dir.normalize();

    const scalar = (GRAVITATIONAL_CONSTANT * body.mass * this.mass) / (d * d);

    dir.mult(scalar);
    this.applyForce(dir);
  }
}