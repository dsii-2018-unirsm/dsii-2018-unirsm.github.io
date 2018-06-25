// Federico Cortesi @adarkplace © 2018 MIT License
// 10print porting on p5 | Ravenna, IT
// Educational purpose, made for DSII2018 lab @UniRSM


var x = 0;
var y = 0;
var grid = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (random(1) < 0.5) {
    line(x, y, x+grid, y+grid);
  }
  else {
    line(x, y+grid, x+grid, y);
  }
  x = x + grid;
  if (x > width) {
    x = 0;
    y = y + grid;
  }
  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
