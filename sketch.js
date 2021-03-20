let player;

function setup() {
  createCanvas(400, 400);
  player = new Player(width / 2, height / 2, 0, 1, 10);
}

function draw() {
  background(51);

  player.update();
  player.show();
  if (keyIsDown(UP_ARROW)) {
      player.spd = 1;
  } else if (keyIsDown(DOWN_ARROW)) {
      player.spd = -1;
  } else {
    player.spd = 0;
  }
}
