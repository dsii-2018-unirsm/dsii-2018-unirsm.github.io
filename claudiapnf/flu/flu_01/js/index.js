// Claudia Panfili @claudiapnf © 2018 MIT License
// Mortality by influence | Perugia, IT | 4.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1tYW41gVKEKVLqQqhA9fMm8k5c9b6fuaOfKrtQ0qxrLY/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // array oggetti
var grid = 0;


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  colorMode(HSB);
}


function draw() {
  grid = width/(ogg.length+1);
  background(0,0,21);
  for (var i=0; i<ogg.length; i++) {   // mostra tutti gli oggetti
    ogg[i].mostra();
  }
}


function gotSpreadsheet(totale) { //(totale) indica il nome del foglio spreedsheet, poteva chiamarsi pippo
  console.log(totale.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < totale.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "totale": totale.feed.entry[i].gsx$totale.$t, // feed significa "prendi i dati nelle caselle"//
                  "donne": totale.feed.entry[i].gsx$donne.$t,
                  "uomini": totale.feed.entry[i].gsx$uomini.$t
              }
    console.log(c); // < debug, verifica in console
    // nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.totale, c.donne, c.uomini));
  }
}


// definizione di Oggetto
function Oggetto(_id, _totale, _donne, _uomini) {

  // dati e costruttore
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.totale = _totale;
  this.donne = Number(_donne)/10;
  this.uomini = _uomini/10;


  // funzionalità

  this.mostra = function() {
    noStroke();
    fill(0);
    push();
    translate(grid + this.id * grid, height/2);
    rect (0,0, 10, this.donne);
    fill(50);
    rect (0,this.donne, 10, this.uomini);

    //formattazione testo
    noStroke();
    fill(255);
    textAlign(CENTER);
    translate(0,80);
    text(this.totale,0,0);
    pop();

  }

}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
