//PATTERN GENERATOR
//10 PRINT PORTING TO P5
//by @claudiapnf© 2018 MIT License
//DSII2018 Lab @UNIRSM website
//fork from purin.co

//"The morphing of the maze from complex to simple (or at least understandable) is part of
//the Commodore 64 user's ideal encounter with 10print", but the user is more like the creator
//of the maze than its explorer" 10 PRINT, cap.20, p.37

//variabili in uso
var a;
var count;
var array = [];

//griglia
function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 150;
  var highCount = (height/150)+2;
  var wideCount = (width/150)+2;
  count = int(highCount * wideCount);

  var index = 0;
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      array[index++] = new Module(int(xc)*a,int(yc)*a);
    }
   }
}

function draw() {
  //background(200);
  noStroke();
  for (var i = 0; i <= count; i++) {
    array[i].draw2();
    array[i].Over();
  }
}

function mousePressed() {
  for (var i = 0; i <= count; i++) {
    array[i].Pressed();
  }
}

function keyTyped() {
  for (var i = 0; i <= count; i++) {
    array[i].Typed();
  }
}

function Module(_x, _y) {
  this.x = _x;
  this.y = _y;
  this.a = 0;
  this.b = false;
  this.c = 200;
  this.isOverRectangle = false;
  this.k = 0;
  this.s = 75;
  this.r = 0;
  this.c1 = '#222222';
  this.c2 = '#D1D3D3';
}

//Module.prototype.Pressed = function() {
//    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
//      this.k = this.k+1;
//      if (this.k === 8) {
//        this.k = 0;
//      }
//    }
//}

Module.prototype.Typed = function() {
    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
      this.r = this.r+HALF_PI;
    }
}

Module.prototype.Over = function() {
  if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
    this.isOverRectangle = true;
  } else {
    this.isOverRectangle = false;
  }
}


Module.prototype.draw2 = function() {
  push();
  translate(this.x, this.y);
  rectMode(CENTER);
  rotate(this.r);
  if (this.k === 0){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
  }
  if (this.k === 1){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    //triangle(0,0,this.s,-this.s,this.s,this.s);
  }
  if (this.k === 2){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
    //triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
  }
  if (this.k === 3){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
    //triangle(0,0,this.s,-this.s,this.s,this.s);
    //triangle(0,0,-this.s,-this.s,-this.s,this.s);
  }
  if (this.k === 4){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
    //triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
    //triangle(this.s,this.s,-this.s,this.s,-this.s,-this.s);
  }
  if (this.k === 5){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
    //triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
  }
  if (this.k === 6){
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    //triangle(0,0,this.s,-this.s,this.s,this.s);
  }
  if (this.k === 7){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    rect(0,0,this.s*2,this.s*2);
  }

  if(this.isOverRectangle === true)
  {
    fill('rgba(255, 255, 255, 0.1)');
  } else {
	  noFill();
  }
  rectMode(CENTER);
  rect(0,0,this.s*2,this.s*2);

  pop();
}


//responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
