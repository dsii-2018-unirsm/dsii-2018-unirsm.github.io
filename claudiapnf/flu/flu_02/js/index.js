// Claudia Panfili @claudiapnf © 2018 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica google spreadsheets
var url = "https://spreadsheets.google.com/feeds/list/1tYW41gVKEKVLqQqhA9fMm8k5c9b6fuaOfKrtQ0qxrLY/od6/public/values?alt=json";

var ogg = []; // < array di oggetti/classi
var grid = 0;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet, 'jsonp');
  colorMode(RGB);
  rectMode(CENTER);
}


function draw() {
  grid = width/(ogg.length+1);
  background(200);
  //text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].mostra();
  }
}

function gotSpreadsheet(totale) { //(totale) indica il nome del foglio spreedsheet, poteva chiamarsi pippo
  console.log(totale.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < totale.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  // feed significa "prendi i dati nelle caselle"
                  //"totale": totale.feed.entry[i].gsx$totale.$t, //totale = pippo
                  //"donne": totale.feed.entry[i].gsx$donne.$t, //totale = pippo
                  "uomini": totale.feed.entry[i].gsx$uomini.$t //totale = pippo
              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i,c.uomini));
  }
}

// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _totale, _donne, _uomini) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
//this.totale = _totale;
//this.donne = Number(_donne)/10;
  this.uomini = Number(_uomini);


  // FUNZIONALITA

  this.mostra = function() {
    noStroke();
    fill(255);
    push();
    translate(grid + this.id * grid, height/2);
    fill(50);
    ellipse(0, 0, 10,10);
    ellipseMode(CENTER);
 }



// responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}
