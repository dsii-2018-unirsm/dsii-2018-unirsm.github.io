

var c = 0;



function setup() {
  createCanvas(displayWidth, displayHeight);
  wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.amp(3);
  wave.freq(10);

}

function draw() {
  background(195, 44, 60);

  for (var y = 0; y < height; y += 15+mouseX/3) {

    for (var x = 0; x < width; x += 15+mouseY/2) {
      wave.start();
      var c = int(random(2)) * 25;
      strokeWeight(3);
      stroke(0);
      point(x + c, y, x + 25 - c, y + 25);
      stroke(255);
      point(x + c, y, x + 25 - c, y + 25);
      
    }
    //rotate(mouseX);
    
  }
}
