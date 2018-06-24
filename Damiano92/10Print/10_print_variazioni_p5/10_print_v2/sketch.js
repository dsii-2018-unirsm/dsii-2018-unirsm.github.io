var c = 0;



function setup() {
  createCanvas(windowWidth,windowHeight);
  wave = new p5.Oscillator();
  wave.setType('');
  wave.amp(3);
  wave.freq(1);

}

function draw() {
  background(195, 44, 60);

  for (var y = 0; y < height; y += 15) {

    for (var x = 0; x < width; x += 15) {
      wave.start();
      var c = int(random(2)) * 25;
      strokeWeight(2);
      stroke(0);
      line(x + c, y, x + 25 - c, y + 25);
      stroke(255);
      //line(x + c, y, x + 25 - c, y + 25);
      
    }
  }
}




