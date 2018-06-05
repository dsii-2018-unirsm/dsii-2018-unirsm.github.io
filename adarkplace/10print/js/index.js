var unit = 0;
var count;
var mods = [];
var state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  unit = 40;
  state = 1;
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
      state = int(random(2));
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2, unit, state);
    }
  }
  for (var i = 0; i < count; i++) {
    mods[i].draw();
  }
}

function Module(_xOff, _yOff, _x, _y, _unit, _state) {
  this.xOff = _xOff;
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.unit = _unit;
  this.xDir = 1;
  this.yDir = 1;
  this.state = _state;
}

Module.prototype.draw = function() {
  noFill();
  strokeWeight(2);
  if (this.state) {
    arc(this.xOff, this.yOff, unit, unit, 0, HALF_PI);
    arc(this.xOff+unit, this.yOff+unit, unit, unit, PI, PI+HALF_PI);
  } else {
    arc(this.xOff+unit, this.yOff, unit, unit, HALF_PI, PI );
    arc(this.xOff, this.yOff+unit, unit, unit, PI+HALF_PI, 2*PI);
  }


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
