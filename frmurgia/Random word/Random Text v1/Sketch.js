
/*
<><><><><><><><><><><><><><><><><>
----------------------------------

Generatore random di testo in P5js
v2
by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

----------------------------------
<><><><><><><><><><><><><><><><><>
*/


 var parole;
 // creo una funzione in cui precarico il file con tutte le parole presenti nel dizionario inglese
 function preload() {
   parole = loadStrings('js/test.txt');
 }

function estrai(){
   var ind = floor(random(parole.length));
   return ind;
}

 function setup() {

   var ind = floor(random(parole.length)); // genero un numero casuale intero tra 0 e la dimensione massima dell'array
                                          // in cui sono contenute tutte le parole
   text(parole[ind], 10, 10, 80, 80);     // estraggo casualmente dall'array parole un numero casuale attraverso l'indice
 }
 'use strict';

 var x = 0;
 var y = 0;
 var stepSize = 5.0;

 var font = 'IBM Plex Mono';
 var fontSizeMin = 3;
 var angleDistortion = 0.0;

 var counter = 0;

 function setup() {
   createCanvas(displayWidth, displayHeight);
   background(255);
   cursor(CROSS);

   x = mouseX;
   y = mouseY;

   textFont(font);
   textAlign(LEFT);
   fill(0, 102);
 }

 function draw() {
console.log("x: "+x);
console.log("y: "+y);
   if (mouseIsPressed && mouseButton == LEFT) {
     var d = dist(x, y, mouseX, mouseY);
     textSize(fontSizeMin + d / 2);
     var newLetter =" "+parole[estrai()].charAt(counter);


     stepSize = textWidth(newLetter)

     if (d > stepSize) {
       var angle = atan2(mouseY - y, mouseX - x);

       push();
       translate(x, y);
       rotate(angle + random(angleDistortion));
       text(newLetter, 10, 0);
       pop();

       counter++;
       if (counter >= parole[estrai()].length) counter = 0;

       x = x + cos(angle) * stepSize;
       y = y + sin(angle) * stepSize;
     }
   }
 }
