// Luca Barbieri @lb © 2017-18 MIT License
// animated cover book "le leggi della semplicità - John Maeda" | San Marino, RSM | 3.2018
// Educational purpose, made for DSII2018 lab @UniRSM

var x = 0; // set initial value of x
var y = 520; // set initial value of y
var spacing = 1; // set spacing value from a square to another

function setup() {
  createCanvas(500, 857); // set dimension of html view box
  background(255, 243, 224); // set backgorund beige
  textSize(31);
  textFont("Garamond");
  text("John Maeda", 35, 60);
  text("Le leggi della semplicità", 35, 140);
  text("Bruno Mondadori", 35, 500);
}

function draw() {
  var d = 20; // dimension of a single side square [pixel]
  noStroke(); // hide the squade stroke
  var rnd = random(1);
  if(rnd < 0.25){
    fill(255, 171, 0); // set fill of the squadre [orange] - 50% probability
  } else if (rnd > 0.5 && rnd < 0.7){
    fill(191, 54, 1); // set fill of the squadre [red] - 20% probability
  } else if (rnd > 0.7 && rnd < 0.9){
    fill(1, 87, 155); // set fill of the squadre [blu] - 20% probability
  } else if (rnd > 0.9){
    fill(255); // set fill of the squadre [white] - 10% probability
  }

  rect(x,y,d,d); // draw a single squadre
  x = x + d + spacing; // increase the posizione of x

  if (x > 800){
    x = 0; // restart x position
    y = y + d + spacing; // move to the bottom line
  }

  if (y > 857){
    noLoop(); // stop the loop
  }
}

// implementazioni future
// capire come evitare che le caselline bianche si affianchino
// quando appare una cella bianca allora quella seguente e quella rispettiva nel rigo sotto, non potranno essere bianche
// e al posto della bianca va inserito un altro colore, a caso fra rosso e blu

// centrare il libro all'interno della pagina website

// ripetere l'animazione in loop
