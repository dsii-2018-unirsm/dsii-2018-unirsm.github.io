void setup() {
  background(0);
  fullScreen();
  rectMode(CENTER);
}

int a = 0;
int b = 0;
int l = (int) random(width);

void draw() {

  //background(0);


  a = (a + l) % width;
  b = (b + l) % height;

  // noFill();
  // stroke(255);
  // rect(a, 0, a, a);
  // rect(0, 0, a, b);
  // rect (0, b, a, b);

  if (a>width/2) {
    noFill();
    stroke(random(255), random(255), random(255));
    // rect(0, 0, a, b);
    rect (width/2, height/2, a, b);
  } 
  else {
    noFill();
    stroke(random(255), random(255), random(255));
    ellipse (width/2, height/2, a, b);
  }
}