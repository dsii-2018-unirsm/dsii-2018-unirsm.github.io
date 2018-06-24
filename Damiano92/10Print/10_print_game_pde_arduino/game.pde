// !0_print game by Damiano Pluchino [keyword1, keyword2]
// 2018 © Damiano Plchino, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [potenziometro] movimento cerchio sx e dx per schivare barre



import processing.serial.*; //import the Serial library

int end = 10;    // the number 10 is ASCII for linefeed (end of serial.println), later we will look for this to break up individual messages
String serial;   // declare a new string called 'serial' . A string is a sequence of characters (data type know as "char")
Serial port;  // The serial port, this is a new instance of the Serial class (an Object)

/////mine
int w = 45;
int h = 45;
int index = 0;
/////




void setup() {
  //////mine
  background(69);
  strokeWeight(5);
  noFill();
  smooth();
  frameRate(96);
  //////
  size(800, 800);

  port = new Serial(this, Serial.list()[3], 9600); // initializing the object by assigning a port and baud rate (must match that of Arduino)

  println(Serial.list());

  port.clear();  // function from serial library that throws out the first reading, in case we started reading in the middle of a string from Arduino
  serial = port.readStringUntil(end); // function that reads the string from serial port until a println and then assigns string to our string variable (called 'serial')
  serial = null; // initially, the string will be null (empty)
}

void draw() {

  ////////mine
  // if (index == width/w) {  // 
  // PImage p = get(0, h, width, h*w); // cattura un immagine H=0 
  //background(69); 
  //set(0, (w+h), p); // rilascia l'immagine p alle coordinate 0, 0
  //index = 0;
  //}
  int x1 = w*index;  //0
  int y1 = h*1;    //20
  int x2 = x1 +w;  //20
  int y2 = h*2; //40



  // if (random(2) <1) {// genera un numero razionale tra 0 e 2
  // line(x1, y1, x1, y2);
  // line(x2,y2,x1,y1);
  // line(x1,y2,x2,y1);
  // for(int i = 0; i<=5; i++){
  //rect(0, y1,x2, y2); //se minore di 1 disegna un rect
  //stroke(255);
  //noFill();//}
  //} else {
  //line(x1, y1, x2, y2);
  //stroke(#3fff9f);
  //line(x2, y1, x1, y2);//se maggiore di 1 disegna una linea
  //stroke(#34ffff);
  //} 
  //index++;

  ///////



  while (port.available() > 0) { //as long as there is data coming from serial port, read it and store it 
    serial = port.readStringUntil(end);
  }
  if (serial != null) {  //if the string is not empty, print the following

    /*  Note: the split function used below is not necessary if sending only a single variable. However, it is useful for parsing (separating) messages when
     reading from multiple inputs in Arduino. Below is example code for an Arduino sketch
     */

    String[] a = split(serial, ',');  //a new array (called 'a') that stores values into separate cells (separated by commas specified in your Arduino program)
    println(a[0]); //print Value1 (in cell 1 of Array - remember that arrays are zero-indexed)
    println(a[1]); //print Value2 value

    // giocarci qui.... studiare reference map... nomi var che abbiano senso...
    // background(255);
    //float mappa= map(float(a[0]),0,1024,0,255);
    // fill(mappa,0,0);
    //ellipse(width/2, height/2,int(a[0]),int(a[0]));
    if (index == width/w) {  // 
      PImage p = get(0, h, width, h*w); // cattura un immagine H=0 
      background(69); 
      set(0, (w+h), p); // rilascia l'immagine p alle coordinate 0, 0
      index = 0;
    }

    if (random(2) <1) {// genera un numero razionale tra 0 e 2
      //////prova
      //line(int(a[0]), y1, int(a[1]), y2/height);
      //line(int(a[0]), y1, int(a[0]), y2);
            rect(int(a[1]),int(a[0]), 10, 10);

      ///////
      line(x1, y2, x1, y1);
      // line(x1,y2,x2,y1);
      // for(int i = 0; i<=5; i++){
      //rect(0, y1,x2, y2); //se minore di 1 disegna un rect
      stroke(255);
     // noFill();//}
    } else {
      line(x1, y2, x1, y2);

      //line(x1, y1, x2, y2);
      //stroke(#3fff9f);
      //line(x2, y1, x1, y2);//se maggiore di 1 disegna una linea
      stroke(#34ffff);
    } 
    index++;
  }
}

