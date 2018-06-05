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
//creo un array in cui inserire di quadrati
var array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //dimensioni griglia
  a = 150;
  var highCount = (height/100)+2;
  var wideCount = (width/100)+2;
  count = int(highCount * wideCount);

  var i = 0;
  //xc cordinata x di count
  for (var xc = 0; xc < wideCount; xc++) {
    for (var yc = 0; yc < highCount; yc++) {
      array[i++] = new Module(int(xc)*a,int(yc)*a);
    }
   }
}

function draw() {
  noStroke();
  for (var i = 0; i <= count; i++) {
    array[i].drawShape();
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
  // k conta i click
  this.k = 0;
  //grandezza dei quadrati
  this.s = 75;
  this.r = 0;
  //colori di riempimento per ogni click "aggiuntivo"
  this.c1 = '#222222';
  this.c2 = '#D1D3D3';
  //scala di grigi
  // this.c3 = '#B2B2B2';
  // this.c4 = '#939393';


}

Module.prototype.Pressed = function() {
  //area dei quadrati
   if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
     //aumenta i click di uno
     this.k = this.k+1;
     //click no più di 5 volte
     if (this.k === 5) {
       this.k = 0;
     }
   }
}

Module.prototype.Typed = function() {
    if (mouseX>(this.x)-(this.s) && mouseX<(this.x)+(this.s) && mouseY>(this.y)-(this.s) && mouseY<(this.y)+(this.s)){
      //ruota di p greco mezzi
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


Module.prototype.drawShape = function() {
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
  // if (this.k === 2){
  //   fill(this.c1);
  //   rect(0,0,this.s*2,this.s*2);
  //   fill(this.c3);
  //   arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
  //   //triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
  // }
  if (this.k === 2){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
    arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
    //triangle(0,0,this.s,-this.s,this.s,this.s);
    //triangle(0,0,-this.s,-this.s,-this.s,this.s);
  }
  if (this.k === 3){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
  //   arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
  //   arc(-this.s, 0, this.s*2, this.s*2, -HALF_PI, HALF_PI);
  //   //triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
  //   //triangle(this.s,this.s,-this.s,this.s,-this.s,-this.s);
  triangle(0,0,this.s,-this.s,this.s,this.s);
  triangle(0,0,-this.s,-this.s,-this.s,this.s);
  }
  if (this.k === 4){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c2);
    // arc(this.s, this.s, this.s*4, this.s*4, PI, -HALF_PI);
    triangle(this.s,-this.s,this.s,this.s,-this.s,this.s);
  }
  // if (this.k === 4){
  //   fill(this.c1);
  //   rect(0,0,this.s*2,this.s*2);
  //   fill(this.c6);
  //   arc(this.s, 0, this.s*2, this.s*2, HALF_PI, -HALF_PI);
  //   //triangle(0,0,this.s,-this.s,this.s,this.s);
  // }
  if (this.k === 5){
    fill(this.c1);
    rect(0,0,this.s*2,this.s*2);
    fill(this.c1);
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


//adatta alla window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
