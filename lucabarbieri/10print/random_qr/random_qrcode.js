// Luca Barbieri @lb © 2017-18 MIT License
// Random QR Code | San Marino, RSM | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

var x = 0; // set initial value of x
var y = 0; // set initial value of y

var x1 = 0;
var y1 = 0;

var x2 = 140; //20*7
var y2 = 140; //20*7

var d = 20; // dimension of a single side square
var d1 = 20 * 7;  // set "position square" dimension

function setup() {
  createCanvas(420, 420); // set dimension of html view box
  background(250); // set backgorund color
  noStroke(); // hide the square stroke
  frameRate(300);
}

function draw() {

  create_square();

  function create_square() {
    var rnd = random(1);
    if(rnd < 0.50){
      fill(255); // set fill of the squadre [white] - 50% probability
    } else{
      fill(0); // set fill of the squadre [black] - 20% probability
      }

    rect(x,y,d,d); // draw a single squadre
    x = x + d; // increase the posizione of x

    if (x >= 21*20){
      x = 0; // restart x position
      y = y + d; // move to the bottom line
    }

    if (y >= 21*20){
    y= 0; //continua a modificare il qr code
    }

    // Show QR Code example
    //draw the position
    // first serial of square
    fill(255);
    rect(x1,y1, d1+20, d1+20);

    fill(0);
    rect(x1,y1, d1, d1);

    fill(255);
    rect(x1+20, y1+20, d1-40, d1-40);

    fill(0);
    rect(x1+40, y1+40, d1-80, d1-80);

    // second serial of square
    fill(255);
    rect(x1+(13*20),y1, d1+20, d1+20);

    fill(0);
    rect(x1+(14*20),y1, d1, d1);

    fill(255);
    rect(x1+(15*20), y1+20, d1-40, d1-40);

    fill(0);
    rect(x1+(16*20), y1+40, d1-80, d1-80);

    // third serial of square
    fill(255);
    rect(x1,y1+(13*20), d1+20, d1+20);

    fill(0);
    rect(x1,y1+(14*20), d1, d1);

    fill(255);
    rect(x1+20, y1+(15*20), d1-40, d1-40);

    fill(0);
    rect(x1+40, y1+(16*20), d1-80, d1-80);
  }



}

// to do for the next level

/* Key square for detection
// draw decoding "timing" x
for (var i=0; i<7; i++){
if (i % 2 == 0){
  fill(255)
}else(fill(0))

rect(x2+(i*20),y2-20,d,d);
}

// draw decoding "timing" y
for (var u=0; u<7; u++){
if (u % 2 == 0){
  fill(255)
}else(fill(0))

rect(x2-20,y2+(u*20),d,d);
}

// draw "format string" pattern
// dx line

fill(255); // white
rect(8*d,0,d,d);
fill(0); // black
rect(8*d,20,d,d);
fill(255); // white
rect(8*d,40,d,d);
fill(0); // black
rect(8*d,60,d,d);
rect(8*d,80,d,d);
fill(255); // white
rect(8*d,100,d,d);
fill(0); // black
rect(8*d,120,d,d);
rect(8*d,140,d,d);

//bottom line
fill(255); // white
rect(0,8*d,d,d);
fill(0); // black
rect(20,8*d,d,d);
fill(255); // white
rect(40,8*d,d,d);
fill(0); // black
rect(60,8*d,d,d);
rect(80,8*d,d,d);
rect(100,8*d,d,d);
rect(120,8*d,d,d);
fill(255); // white
rect(140,8*d,d,d);

// dx line bottom
fill(0); // black
rect(8*d,13*d,d,d);
fill(255); // white
rect(8*d,14*d,d,d);
fill(0); // black
rect(8*d,15*d,d,d);
rect(8*d,16*d,d,d);
rect(8*d,17*d,d,d);
fill(255); // white
rect(8*d,18*d,d,d);
fill(0); // black
rect(8*d,19*d,d,d);
fill(255); // white
rect(8*d,20*d,d,d);

// dx line side
fill(0); // black
rect(13*d,8*d,d,d);
rect(14*d,8*d,d,d);
fill(255); // white
rect(15*d,8*d,d,d);
fill(0); // black
rect(16*d,8*d,d,d);
rect(17*d,8*d,d,d);
fill(255); // white
rect(18*d,8*d,d,d);
fill(0); // black
rect(19*d,8*d,d,d);
fill(255); // white
rect(20*d,8*d,d,d);
*/
