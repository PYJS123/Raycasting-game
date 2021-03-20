class Player {
  constructor(x, y, rot, spd, w) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.spd = spd;
    this.PERMspd = spd;
    this.w = w
  }

  show() {
    push();
    fill(255, 125, 51);
    noStroke();
    ellipse(this.x, this.y, 12, 12);
    strokeWeight(5);
    stroke(255, 125, 51);
    let x = cos(this.rot + (PI / 2)) * this.PERMspd * 10,
        y = sin(this.rot + (PI / 2)) * this.PERMspd * 10;
    line(this.x - x, this.y - y, this.x + x, this.y + y);
    pop();
  }

  update() {
    this.x += cos(this.rot) * this.spd;
    this.y += sin(this.rot) * this.spd;
  }
}
