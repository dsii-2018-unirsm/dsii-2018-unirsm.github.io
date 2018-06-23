var c = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  wave = new p5.Oscillator();
  wave.setType('triangle');
  wave.amp(3);
  wave.freq(15);

}

function draw() {
  background(195, 44, 60);
  if (mouseIsPressed) {

    for (var y = 0; y < height; y += 25) {

      for (var x = 0; x < width; x += 25) {
        wave.start();
        var c = int(random(2)) * 25;
        strokeWeight(2);
        line(x + c, y, x + 25 - c, y + 25);

      }
    }
  }
}
