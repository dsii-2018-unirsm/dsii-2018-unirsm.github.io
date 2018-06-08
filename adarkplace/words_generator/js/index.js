var lexicon;
var lunghezza = 2;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background(240);
  fill (220);
  textSize(40);
  textAlign(CENTER);
  text("click for random words", width/2, height/2);
  lexicon = new RiLexicon();
}

function mousePressed() {
background(240);
fill (0);
var word = lexicon.randomWord('nn',lunghezza);
text(word, width/2, height/2);
push ();
textSize(16);
fill (210);
text("type A for shorter words or L for longer words", width/2, height-20);
pop ();
}

function keyTyped() {
  if (key === 'a') {
    if (lunghezza >1){
      lunghezza = lunghezza -1;
    }
  } else if (key === 'l') {
    if (lunghezza <6){
      lunghezza = lunghezza +1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
