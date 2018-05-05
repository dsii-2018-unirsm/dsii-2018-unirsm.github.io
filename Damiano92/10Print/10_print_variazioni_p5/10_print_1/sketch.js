var wave;
var x = 0;
var y = 0;


function setup() {
  createCanvas(900, 900);
  wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.amp(0.5);
  wave.freq(432);
  wave.start();
}

  
function draw(){  
  if (random(1) > 0.5) {
    wave.freq(200)
    strokeWeight(3);
    line(x, y, x + 50, y + 50);//cambiare in ellipse per rendere stile codice morse
  } else {
    wave.freq(900)
    strokeWeight(3);
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
  
  
  
};



