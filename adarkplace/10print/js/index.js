var unit = 0;
var count;
var mods = [];
var rot;
var rots;

function setup() {
  createCanvas(windowWidth, windowHeight);
  unit = 30;
  rot = PI;
  noLoop();
}

function draw() {
  background(255);

  var wideCount = (width / unit)+1;
  var highCount = (height / unit)+1;
  count = wideCount * highCount;

  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      rots = [PI/2, -PI/2];
      rot = random (rots);
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2, unit, rot);
    }
  }
  for (var i = 0; i < count; i++) {
    mods[i].draw();
  }
}

function Module(_xOff, _yOff, _x, _y, _unit, _rot) {
  this.xOff = _xOff;
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.unit = _unit;
  this.xDir = 1;
  this.yDir = 1;
  this.rot = Number(_rot);
}

Module.prototype.draw = function() {
  noFill();
  strokeWeight(2);
  arc(this.xOff + this.x, this.yOff + this.y, unit, unit, this.rot-this.rot, this.rot);
  arc(this.xOff + this.x, this.yOff + this.y, unit, unit, -this.rot*2, -this.rot);
}

function mousePressed() {
    // unit = random(20,100);
    loop();
}

function mouseReleased() {
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
