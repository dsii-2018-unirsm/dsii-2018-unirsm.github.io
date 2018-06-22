
/*
<><><><><><><><><><><><><><><><><>
----------------------------------

Generatore random di testo in P5js
by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

----------------------------------
<><><><><><><><><><><><><><><><><>
*/

 var parole;
  var ind;
 // creo una funzione in cui precarico il file con tutte le parole presenti nel dizionario inglese
 function preload() {
   parole = loadStrings('js/test.txt');
 }
 function random_word(){
   // genero un numero casuale intero tra 0 e la dimensione massima dell'array
     // in cui sono contenute tutte le parole
   var caso=floor(random(parole.length));// estraggo casualmente dall'array parole un numero casuale attraverso l'indice
   return caso;
 }

 function setup() {
   createCanvas(windowWidth, windowHeight);
   ind= random_word();
 }


 function draw() {
 background(255);
 textFont('IBM Plex Mono');
   textSize(16);
   text('la parola estratta è: '+parole[ind],windowWidth/2-150, windowHeight/2);     // prendo dall'array in cui sono contenute tutte le PAROLE
                                          // la parola nella posizione estratta casualmente
 }
