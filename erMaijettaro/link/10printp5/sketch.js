// -
// FLU 0.1 by Riccardo Frignani [virus, a, b]
// 2018 © Riccardo Frignani, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [key] action
// [key] action
// [mouse] action
//
// —
var canvas;
function  setup() {
 canvas = createCanvas(window.innerWidth, window.innerHeight);
frameRate(45); //bpm
  smooth();
     
}

var n = 0;
function  draw() {


  stroke(random(255),random(255),random(255)); //#ED5D5D
  strokeWeight((random(7)));

var random1 = (random(random(1000)));
  if (n<width) {
  
    for (var i = random(-200,height/2); i< random(height-height/2,height); i+=10) {
      var rand = (random(2));
      if (rand == 0) {
        line(n, i, n+random1, i+random1);
      } else {
        line(n+random1, i, n, i+random1);
      }
    }
  }
  if (n<width) {
    n+=random1;
  } else {
    n=0; 
    background((random(255)));
 
  }
}








//PImage img;
//void setup() {
//fullScreen();}
//void draw() {
// PImage img;
//for (var i = 0; i < 4000; i = i+30) {
//  img=loadImage("e.jpg");
//  image(img, i, i);}}
