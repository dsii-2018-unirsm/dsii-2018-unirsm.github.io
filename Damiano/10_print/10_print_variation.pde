/*
/////////////////////////////////////////////
.-------------------------------------------.
by damiano_pluchino © 2017-18 MIT License
DSII2018 Lab @UNIRSM
10 print_processing
.------------------------------------------.
////////////////////////////////////////////
*/


/*

//dichiaro variabili iniziali
int w = 45;
int h = 45;
int index = 0;




//setup
void setup() {
  fullScreen();
  //size(900, 900);
  background(69);
  strokeWeight(5);
  noFill();
  smooth();
  frameRate(90);
};

//disegno
void draw() {
  if (index == width/w) {  // 
    PImage p = get(0, h, width, h*w); // cattura un immagine H=0 
    background(69); 
    set(0, (w+h), p); // rilascia l'immagine p alle coordinate 0, 0
    index = 0;
  }


  if (keyPressed) {
    if (key == 'a' || key == 'A') {
      set1();
    }
  } else {

    if (key== 's' || key == 'S') {
      set2();
    }
  }
};





////////////////////////////////
void set1() {
  int x1 = w*index;  //0
  int y1 = h*1;    //20
  int x2 = x1 +w;  //20
  int y2 = h*2; //40



  if (random(2) <1) {// genera un numero razionale tra 0 e 2
    line(x1, y1, x1, y2);
    // for(int i = 0; i<=5; i++){
    //rect(0, y1,x2, y2); //se minore di 1 disegna un rect
    stroke(255);
    noFill();//}
  } else {
    //line(x1, y1, x2, y2);
    //stroke(#3fff9f);
    line(x2, y1, x1, y2);//se maggiore di 1 disegna una linea
    stroke(#34ffff);
  } 
  index++;
};

/////////////////////////////
void set2() {
  int r = 90;
  int h = 90;
  int index = 0;


  int x3 = r*index;  //0
  int y3 = h*1;    //20
  int x4 = x3 +r;  //20
  int y4 = h*2; //40



  if (random(2) <1) {// genera un numero razionale tra 0 e 2
    //line(x1, y1, x1, y2);
    // for(int i = 0; i<=5; i++){
    rect(0, y3, x4, y4); //se minore di 1 disegna un rect
    stroke(255);
    noFill();//}
  } else {
    line(x3, y3, x4, y4);
    //stroke(#3fff9f);
    //line(x2, y1, x1, y2);//se maggiore di 1 disegna una linea
    stroke(#34ffff);
  } 
  index++;
};
