void setup() {
  background(0);
  fill(255);
  fullScreen();
  ;
}

String[] parole = {"queste", "sono", "parole", "random", "generate", "usando", "il", "modulo"};


void draw() {
  int numeroRandom = int(random(5));

  fill(random(255), random(255), random(255));
  textSize(random(8, 26));
  
  if (numeroRandom == 0) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 1) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 2) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 3) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 3) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 4) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 5) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 6) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  if (numeroRandom == 7) {
    text(parole[numeroRandom], mouseX+5, mouseY+5);
  }
  
  if (mousePressed) {
      background(0);
  }
}
