class Player {
  constructor(x, y, rot, spd, w) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.spd = spd;
    this.w = w
  }

  show() {
    ellipse(this.x, this.y, 5, 5);
  }

  update() {
    this.x += cos(this.rot) * this.spd;
    this.y += sin(this.rot) * this.spd;
  }
}
