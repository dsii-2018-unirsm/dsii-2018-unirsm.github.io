//PATTERN
//10 PRINT PORTING TO P5
//by @claudiapnf© 2018 MIT License
//DSII2018 Lab @UNIRSM website

//"The morphing of the maze from complex to simple (or at least understandable) is part of
//the Commodore 64 user's ideal encounter with 10print", but the user is more like the creator
//of the maze than its explorer" 10 PRINT, cap.20, p.37


var h, w;


function setup() {
	// createCanvas must be the first statement
  frameRate(10);
  createCanvas(500, 500);
  background(0);
  y = height / 10;
  x = width / 10;
}

function rotazione() {
  var a = [1/2, 1, 3/2];
  var gradi = random (a);
  rotate (gradi * PI);
  }

function draw() {
for (var z = 0 ; z <=450 ; z = z + 50) {
  for (var i = 0; i <= 450; i = i + 50) {
   triangle (i , z+y , i+x/2 , z , i+x , z+y);
    fill(255);
// fill FF1733

  }
 }
}

  //for ( var a = 0; a <= 450; a = a + 50) {
  //  for ( var b = 0; b <= 450; b = b + 50) {
        //  rect (a, b, 50, 50);
        //var pmouseX;
          //if (pmouseX > 0 && pmouseX < 50) {
            //rotazione (rect(0,0,50,50));
              //}
