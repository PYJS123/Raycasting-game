let player;

function setup() {
  createCanvas(400, 400);
  player = new Player(width / 2, height / 2, 0, 3, 10);
}

function draw() {
  background(51);

  // Basic
  player.update();
  player.show();
  // Updating with keys
  if (keyIsDown(UP_ARROW)) {
      player.spd = 1;
  } else if (keyIsDown(DOWN_ARROW)) {
      player.spd = -1;
  } else {
    player.spd = 0;
  }
  if (keyIsDown(LEFT_ARROW)) {
      player.rot -= 0.05;
  } else if (keyIsDown(RIGHT_ARROW)) {
      player.rot += 0.05;
  }
}
