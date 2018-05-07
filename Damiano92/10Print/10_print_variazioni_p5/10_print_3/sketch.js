var wave;
var x = 0;
var y = 0;


function setup() {
  createCanvas(displayWidth, displayHeight);
  wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.amp(0.5);
  wave.freq(432);
  wave.start();
}

  
function draw(){  
  if (random(1) > 0.5) {
    wave.freq(200)
    strokeWeight(10);
    
    point(x, y, x + 50, y + 50);//cambiare in ellipse per rendere stile codice morse
    stroke(234);
  } else {
    wave.freq(432)
    strokeWeight(3);
    point(x, y + 20, x + 20, y);
    stroke('#445590');
  }

  x += 20;

  if (x > width) {
    x = 0;
    y += 20;
  }

  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
  
  
  
};


















/*var x = 0;
var y = 0;

var a = 1;
var b = 9;

function setup() {
  createCanvas(800, 600);
  background(255);
}

function draw() {
    if (random (1) < 0.5) {
      ten();
      strokeWeight(2);
      line(x + 20, y + 30, x + 20, y + 20);
      rect(x+20,y+30, 20, 20);
    } else {
      ten();
      strokeWeight(1);
      line(x + 20, y + 30, x + 20, y + 20);
      translate(PI / 3);

    }
}

function ten() {
  if (random(1) > 0.5) {
    line(x, y, x + 20, y + 20);
  } else {
    line(x, y + 20, x + 20, y);
    stroke('#445590');
  }

  x += 20;

  if (x > width) {
    x = 0;
    y += 20;
  }

  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}*/
