
/*
<><><><><><><><><><><><><><><><><>
----------------------------------

example in P5js
by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

----------------------------------
<><><><><><><><><><><><><><><><><>
*/

var DimCubo = 100; // grandezza dei quadrati
var countBorder = 3;

var modes = chain;
var currModeFn = chain;
var clrs = ['#152A3B', '#158ca7', '#F5C03E', '#D63826', '#F5F5EB'];
var numero;
var numero_1;
var variabile=4;
function setup() {
  frameRate(2);
var finestra= createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {

  numero_1=(variabile%random(500));
   background(255);
  for (var y = DimCubo / 2; y < height; y+=DimCubo) {
    for (var x = DimCubo / 2; x < width; x+=DimCubo) {
      queueNum = shuffleArray([ 0, 1, 2, 3, 4 ]); //Estraggo un valore casuale dall'array dei colori
      fill(clrs[queueNum[0]]);
      rect(x, y, DimCubo, DimCubo);
      push();
      translate(x, y);
      currModeFn(0, 0, clrs);
      pop();

    }
  }

  chain(x, y, clrs);

}

function chain(x, y, clrs) {
  rotate(radians(90 * Math.round(numero_1)));// sostituire
  fill(clrs[queueNum[1]]);
  arc(x - DimCubo / 2, y, DimCubo, DimCubo, radians(270), radians(450));
    noStroke();
  fill(clrs[queueNum[2]]);
  arc(x + DimCubo / 2, y, DimCubo, DimCubo, radians(90),  radians(270));
    noStroke();
  rotate(radians(90 * Math.round(numero_1)));// sostituire
  fill(clrs[queueNum[1]]);
  arc(x, y + DimCubo / 2, DimCubo, DimCubo, radians(180), radians(360));
    noStroke();
  fill(clrs[queueNum[2]]);
  arc(x, y - DimCubo / 2, DimCubo, DimCubo, radians(0),   radians(180));
    noStroke();
}


function shuffleArray(array) {
  var j, temp;
  for (var i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
