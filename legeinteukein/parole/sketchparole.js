//GOL by legeinteukein [gol, 10print]
//2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
//github.com/fupete — github.com/dsii-2018-unirsm
//Educational purposes, MIT License, 2018, San Marino

//basato sullo sketch di @andreanico generatore poesie onomatopeiche


var x = 600;
var y = 80;

                                                                                // creazione Array

var vocali = ["a","e","i","o","u"];
var vocali2 = ["a","e","i","o","u"];
var vocali3 = ["a","e","i","o","u"];
var cons1 = ["b","c","d","f"];
var cons2 = ["p","q","r","s"];
var cons3 = ["g", "h", "l", "m","n","t"];
var cons4 = ["s","v","z","t"]
var desinenza = ["mente, ", "are, ", "ato, ", "bile, "];



var dimParola;
var pad = 1;
var dir = 1;



function setup() {
         createCanvas(windowWidth, windowHeight);                               // dimensioni del foglio
         frameRate(10);

         background(20,60,40);                                                  // setup colore di sfondo
         textAlign(LEFT);
}

 function draw() {                                                              // disegna area lavoro
          area ();
          spostaPuntatore();
 }


function area() {                                                               // attributi area lavoro
       noFill();
       noStroke();
                                                                                //rect(x, y, G, G);
                                                                                // estrazione casuale di uno degli 8 array
       var dado = int(random(8));
       var lettera;


       if (dado == 0) {                                                         // estrazione casuale lettera
           fill(255);
           lettera = random (vocali);
           textSize(20);
           textLeading(70);
           textFont("Helvetica");
       }
       else if (dado == 1) {
           fill (255);
           lettera = random (cons1);
           textSize(20);
           textLeading(70);
           textFont("Helvetica");

       }
       else if (dado == 2) {
           fill (255);
           lettera = random (cons2);
           textSize(20);
           textLeading(70);
           textFont("Helvetica");

       }
       else if (dado == 3) {
           fill (255);
           lettera = random (cons3);
           textSize(20);
           textLeading(20);
           textFont("Helvetica");

       }
       else if (dado == 4) {
           fill (255);
           lettera = random (cons4);
           textSize(20);
           textLeading(20);
           textFont("Helvetica");

       }
       else if (dado == 5) {
           fill (255);
           lettera = random (desinenza);
            textSize(20);
            textLeading(20);
            textFont("Helvetica");
            noLoop();
                                                                                 // fine loop quando viene estratta una desinenza

       }
       else if (dado == 6) {
           fill (255);
           lettera = random (vocali2);
            textSize(20);
            textLeading(20);
            textFont("Helvetica");



       }
       else if (dado == 7) {
           fill (255);
           lettera = random (vocali3);
            textSize(20);
            textLeading(20);
            textFont("Helvetica");



       }


       dimParola = textWidth(lettera);
       text(lettera, x, y);                                                      //, x+dimParola, y+30);
}


function spostaPuntatore() {

 var spazio = (dimParola + pad)*dir;

  x = x + spazio;

  if ( x > width-spazio) {                                                      // allora torna verso sinistra
    x = width;
    dir = dir;
    y = y+60;
  }

  if (x > 800) {                                                                // allora vai fino 800px
    x = 600;
    y = y+30;
    dir = dir;
  }

  if (y > height-30) {
    x = 600;
    y = 60;
    background(30,30,30);
  }

  if (dir == 1) textAlign(LEFT);
 }

                                                                                // tasto per far partire un nuovo loop
 function keyTyped() {

  if (key === 'n') {

    loop();

  } else if (key ==='r') {


  }
}
