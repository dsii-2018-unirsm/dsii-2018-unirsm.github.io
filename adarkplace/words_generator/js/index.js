var lexicon;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  background(240);
  textSize(20);
  textAlign(CENTER);
  text("Click for random words", width/2, height/2);
  lexicon = new RiLexicon();

}

function mousePressed() {
background(240);
var word = lexicon.randomWord('nn',2); //noun with two syllables
text(word, width/2, height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
