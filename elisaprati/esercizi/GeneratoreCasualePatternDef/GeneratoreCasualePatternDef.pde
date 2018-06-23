// Generatore Casuale di Pattern by Nomestudente [modulo, colors]
// 2018 © Elisa Prati, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino

//Interazioni: la posizione del mouse determina la gamma cromatica dei rettangoli

void setup() {
  background(255);
  fullScreen();
  rectMode(CENTER);
}

int a = 0;
int b = 0;
int c = 0;
int d = 0;
int l = (int) random(width);

void draw() {

  //background(0);

  a = (a + l) % width;
  b = (b + l) % height;
  c = mouseX % 250;
  d = mouseY % 250;

  if (a>width/2) {
    fill(c,d,random(255),100);
    stroke(random(255), random(255), random(255));
    // rect(0, 0, a, b);
    rect (random(width), random(height), a, b);
  } 
  else {
    fill(c,d,d, 100);
    rect (width/2, height/2, a, b);
  }
}