// Riccardo Frignani @erMaijettaro © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | San Marino, SxM | 4.2018
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

var url = "https://spreadsheets.google.com/feeds/list/1BGZTkZMf7C6qU0fXkFbZh1ogeN9-176WSpj3sWKkNII/od6/public/values?alt=json";
var ogg = [];


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);
  rectMode(CORNER);
  background(240);
  textFont('Helvetica');
}




function draw() {
stroke(200);
background(240);

//griglia
for (var i=0; i<220; i=i+10) {
  line(50,windowHeight/3+i,windowWidth-50,windowHeight/3+i);
 }

noStroke();


//scritteB
fill(255,0,0);
text("Tipo B", windowWidth/2+200,windowHeight/3-30);
//scritteA
fill(0,255,0);
text("Tipo A", windowWidth/2-200,windowHeight/3-30);

//titolo
fill(0);
textSize(30);
text("Influenza: campioni positivi 2015/16", 400, 50);
//sottotitolo
fill(0);
textSize(20);
text("Il grafico si basa su dati certificati dal Ministero della Salute italiano e raccolti, dal Centro Nazionale OMS per l'influenza dell'Istituto Superiore di Sanità, durante la sorveglianza virologica della stagione 2015/16. Settimana per settimana vengono confrontati i campioni positivi dei ceppi di tipo A e di tipo B.", 400, 90, 1100,500);

//menù
fill(0);
textSize(20);
text("settimana", 50, windowHeight-200);
textSize(20);


//mi fa vedere tutti i dati
for (var i=0; i<ogg.length; i++) {
   ogg[i].mostra();
 }


}



//va su google a pescare dati
function gotSpreadsheet(tipoa) {
console.log(tipoa.feed.entry.length); //debug


for (var i = 0; i < tipoa.feed.entry.length; i++) {
  var a = {
    "tipoa": tipoa.feed.entry[i].gsx$tipoa.$t,
      "tipob": tipoa.feed.entry[i].gsx$tipob.$t,
  }
  console.log(a); //debug
  ogg.push(new Oggetto(i, a.tipoa, a.tipob));
}
}

function Oggetto(_id, _tipoa, _tipob) {
this.id = Number(_id);
this.tipoa = _tipoa;
this.tipob = _tipob;

this.mostra = function() {
  fill (255,0,0);
  rect (windowWidth/2+200+this.id*10, windowHeight/3, 10, this.tipob);
  fill (0,255,0);
  rect (windowWidth/2-200+this.id*10, windowHeight/3, 10, this.tipoa);
}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
