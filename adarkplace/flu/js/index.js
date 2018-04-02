// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1CR86l9J8QeS28C27IvnzCShiwfr4s9IujoF8gU0B-XQ/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;

var maxMalati = 0;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(RGB);
  rectMode(BOTTOM);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);

  background(0,0,21);

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].mostra();
  }

} // draw()


function gotSpreadsheet(chart) {
  for (var i = 0; i < chart.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "anno": chart.feed.entry[i].gsx$anno.$t,
                  "malati": chart.feed.entry[i].gsx$malati.$t,
                  "morti": chart.feed.entry[i].gsx$morti.$t,
              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.anno, c.malati, c.morti));
  }

} // gotSpreadsheet(colori)


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _anno, _malati, _morti) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.anno = Number(_anno);
  this.malati = Number(_malati);
  this.morti = Number(_morti);
  if (this.malati> maxMalati) maxMalati= this.malati;
  console.log(maxMalati);


  // FUNZIONALITA

  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    push();
    fill(40);
    translate(grid*(this.id+1),height-64);
    noStroke();
    rect(-10,0, 20, -height/6*this.malati*4/maxMalati);
    fill(255);
    rect(-10,0, 20, -height/6*this.morti*4/maxMalati);
    rect(-10,6, 20, 60);
    fill(0);
    textAlign(RIGHT, CENTER);
    rotate(-PI/2);
    textSize(16);
    textStyle(BOLD);
    text(this.anno,-18,0);
    pop();


  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
