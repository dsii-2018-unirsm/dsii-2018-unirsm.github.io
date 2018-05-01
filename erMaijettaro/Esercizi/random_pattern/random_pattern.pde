void setup() {
  fullScreen();
background(0);
frameRate(200);
}

int n = 0;


void draw() {



int random = int(random(50));
  if (n<width) {
    
    for (int i = 0; i< height+100; i+=10) {
      int rand = int(random(2));
      if (rand == 0) {
        fill(0);
        rect(n, i, n+random, i+random);
      } else {
        fill(255,0,0);
        rect(n, i, n+random, i+random);
      }
      
    }
  }
  if (n<width) {
    n+=random;
  } else {
    n=0; 
    
  }
}








//PImage img;
//void setup() {
//fullScreen();}
//void draw() {
// PImage img;
//for (int i = 0; i < 4000; i = i+30) {
//  img=loadImage("e.jpg");
//  image(img, i, i);}}