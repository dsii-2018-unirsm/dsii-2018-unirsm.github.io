// elisa prati @elisaprati © 2018 MIT License
// 10 print porting to P5js
// Made for DSII2018 lab @UniRSM


//------------------------------ var immagini ------------------------------
var PATH = 'assets/';
var FILE1 = 'primo';
var FILE2 = 'secondo';
var FILE3 = 'terzo';
var EXT = '.png';
var IMAGES1 = 6;
var IMAGES2 = 6;
var IMAGES3 = 6;
var imgs1 = Array(IMAGES1);
var imgs2 = Array(IMAGES2);
var imgs3 = Array(IMAGES3);
var idx1 = 0;
var idx2 = 0;
var idx3 = 0;


//------------------------------ var posizioni ------------------------------
var d;

var xf1=0;
var yf1=0;

var xf2=0;
var yf2=0;

var xf3=0;
var yf3=0;


//------------------------------ carico immagini ------------------------------
function preload() {
 for (var i = 0; i != IMAGES1;
   imgs1[i] = loadImage(PATH + FILE1 + ++i + EXT));
 for (var i = 0; i != IMAGES2;
   imgs2[i] = loadImage(PATH + FILE2 + ++i + EXT));
 for (var i = 0; i != IMAGES3;
   imgs3[i] = loadImage(PATH + FILE3 + ++i + EXT));
}


//------------------------------ setup ------------------------------
function setup(){
 canvas = createCanvas(windowWidth, windowHeight);
 background(255);
 frameRate(40); //60 frame a secondo
 d = width/10;
}


//------------------------------ draw ------------------------------
function draw() {
 fforma1();
 fforma2();
 fforma3();
 d = width/10;
}


//------------------------------forma 1------------------------------
 function fforma1() {
   image(imgs1[idx1],xf1,yf1,d,d);

   xf1 = xf1 + d;
   if (xf1 >= width) {
     xf1=0;
     yf1 = yf1+d;
   }
   if (yf1 >= height) {
     background(255);
     xf1=0;
     yf1=0;
     idx1 = ~~random(IMAGES1);
     //d = width/random (5 , 20);
   }
 }


//------------------------------forma 2 ------------------------------
 function fforma2() {
   image(imgs2[idx2],xf2,yf2,d,d);

   xf2 = xf2 + d;
   if (xf2 >= width) {
     xf2=0;
     yf2 = yf2+d;
   }
   if (yf2 >= height) {
     background(255);
     xf2=0;
     yf2=0;
     idx2 = ~~random(IMAGES2);
   }
 }


 //------------------------------forma 3 ------------------------------
   function fforma3() {
     image(imgs3[idx3],xf3,yf3,d,d);

     xf3 = xf3 + d;
     if (xf3 >= width) {
       xf3=0;
       yf3 = yf3+d;
     }
     if (yf3 >= height) {
       background(255);
       xf3=0;
       yf3=0;
       idx3 = ~~random(IMAGES3);
     }
   }








//------------------------------ utilizzo tastiera ------------------------------
function keyTyped() {

 if (key == 'a') { // se premi "a" si blocca il loop
   noLoop();
 }
 if (key == 's') {  // se premi "s" fai uno screenshot del canvas
   saveCanvas('variazione', 'png'); //viene salvato nella cartella download col nome "variazione.png"
 }
 if (key == 'd') { // se premi "d" riparte il loop
   loop();
 }
 if (key == 'q') { // se premi "q" si pulisce il canvas
   background(255);
 }
}




//---------------------------- finestra browser --------------------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
