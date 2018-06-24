// Irene Trotta @iretrtr © 2018 MIT License
// 10print var | Città San't Angelo, IT
// Educational purpose, made for DSII2018 lab @UniRSM

let x = 0;
let y = 0;
let move = 40;
let prob = 40;
var sColor = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
}
 function draw() {
   strokeWeight(2);
   stroke(sColor);
   noFill();
   rnd = random(prob);
   console.log(rnd);
   if (rnd <= 10) {
     arc(x, y, move, move, PI, 0);
   }
   else if (rnd > 10 && rnd < 20) {
     arc(x, y, move, move,  HALF_PI, -HALF_PI);
   }
   else if (rnd > 40) {
   arc(x, y, move, move, 0, -HALF_PI, HALF_PI);
  }
   else {
     arc(x, y, move, move,  0, PI);
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
     prob = int(random(50));
     sColor = color('hsl('+int(random(360))+', 100%, 50%)');
   }
 }
