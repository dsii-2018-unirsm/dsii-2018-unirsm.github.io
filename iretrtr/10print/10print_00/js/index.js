// Irene Trotta @iretrtr © 2018 MIT License
// 10print | Città San't Angelo, IT
// Educational purpose, made for DSII2018 lab @UniRSM

let x = 0;
let y = 0;
let move = 20;
let prob = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
}
 function draw() {
   stroke(255);
   if (random(1) < prob) {
     line (x, y, x + move, y + move);
   } else {
     line (x, y + move, x + move, y);
   }
   x = x + move;
   if (x > width){
     x = 0;
     y = y + move;
   }
   if (y > (height - move)) {
     background(0);
     x = 0;
     y = 0;
     move = random(10, 100);
     prob = random(1);
   }
 }
