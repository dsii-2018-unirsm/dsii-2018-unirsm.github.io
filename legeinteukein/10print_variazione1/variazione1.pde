// Variazione 10 print by legeinteukein [blu, quadrati]
// 2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino



int w = 16;//dimensione quadrato 

int index = 0;//contatore

void setup() {
  size(640, 384);
  background(#0000ff);
  strokeWeight(3);
  stroke(224);
  smooth();
}

void draw() {
  int x1 = w*index;
  int x2 = x1 + w;
  int y1 = w*23;
  int y2 = w*24;
  
  // disegnare quadrati random colori diversi (sul blu e veerde)
  noStroke();
  rect(x1, y1, w, w);
  fill(0, random(0, 255), random(0, 255));

 
  index++;
  if (index == width/w) {
    PImage p = get(0, w, width, w*23); 
    background(#0000ff);
    set(0, 0, p);
    index = 0;
  }
}
