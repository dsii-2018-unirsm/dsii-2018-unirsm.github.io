// elisa prati @elisaprati © 2018 MIT License
// 10 print porting to P5js
// Made for DSII2017 lab @UniRSM



var xf1=0;
var yf1=0;
var d=100;

var xf2=0;
var yf2=0;

var xf3=0;
var yf3=0;

var xf4=0;
var yf4=0;


function setup(){
  createCanvas(1400, 700);
  background(255);
  frameRate(40); //60 frame a secondo
}



function draw() {
  fforma1();
  fforma2();
  //fforma3();
  fforma4();
}


//------------------------------forma 1------------------------------
  function fforma1() {
    stroke(255);
    fill(random(100), random(100), 1100);
    rect(xf1, yf1, d, d);

    xf1 = xf1 + d;
    if (xf1 >= width) {
      xf1=0;
      yf1 = yf1+d;
    }
    if (yf1 >= height) {
      background(255);
      xf1=0;
      yf1=0;
    }
  }

//------------------------------forma 2 ------------------------------
  function fforma2() {

    stroke(255);
    fill(200,200,20);
    ellipse(xf2, yf2, d/2, d/2);

    xf2 = xf2 + d;
    if (xf2 >= width) {
      xf2=0;
      yf2 = yf2+d;
    }
    if (yf2 >= height) {
      background(255);
      xf2=0;
      yf2=0;
    }
  }

  //------------------------------forma 3 ------------------------------
    // function fforma3() {
    //
    //   stroke(255);
    //   noFill();
    //   rect(xf3, yf3, 80, 80);
    //
    //   xf3 = xf3 + d;
    //   if (xf3 >= width) {
    //     xf3=0;
    //     yf3 = yf2+d;
    //   }
    //   if (yf3 >= height) {
    //     background(255);
    //     xf3=0;
    //     yf3=0;
    //   }
    // }

//------------------------------forma 4 ------------------------------
    function fforma4() {
      stroke(200);
      noFill();
      ellipse(xf4, yf4, d, d);


      xf4 = xf4 + d;
      if (xf4 >= width) {
          xf4=0;
          yf4 = yf4+d;
      }
      if (yf4 >= height) {
          background(255);
          xf4=0;
          yf4=0;
      }
    }


//------------------------------utilizzo tastiera------------------------------
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
