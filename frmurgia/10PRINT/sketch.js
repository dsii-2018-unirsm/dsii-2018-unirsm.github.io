
/*
<><><><><><><><><><><><><><><><><>><><>><><>
.-------------------------------------------.

by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

10 print

ispirato al lavoro audio/video minimalista
di Ryoji Ikeda

.------------------------------------------.
<><><><><><><><><><><><><><><><>><><>><><><>
*/


/*
::TO DO::


*/

function setup() {
  createCanvas(windowWidth, windowHeight);
 frameRate(20);
}

function draw() {
 background(0);
 fill(255);
 noStroke();
 translate((windowWidth/2)-50,(windowHeight/2)-100);
 rectMode(CENTER);

rect(0, random(200), 100, random(100));
rect(100, random(200), 100, random(100));

}
