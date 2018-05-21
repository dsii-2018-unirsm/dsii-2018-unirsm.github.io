// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1DPekzed7yYhOclD2EdjfR9SwggtLG6jz3BMY3p4_-Ag/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var grid = 0;
var ruota = true;
var dati = [];


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(dati.length+1);

  background(0);
  text("totale morti : " + dati.length, width/2,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<dati.length; i++) {   // (muovi e) mostra tutti gli oggetti
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(dati[i].anno, dati[i].ics, 100);
    rectMode(CORNER);
    rect(dati[i].ics ,120, 10, dati[i].morti);
  }
} // draw()


function gotSpreadsheet(totali) {
  console.log(totali.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < totali.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var tot = {
                  // dati, nomi delle colonne, i parametri
                  "anno": totali.feed.entry[i].gsx$anno.$t,
                  "morti": totali.feed.entry[i].gsx$morti.$t,
                  "ics": totali.feed.entry[i].gsx$ics.$t,
              }
    console.log(tot); // < debug, verifica oggetto 1x1
    dati.push(tot);
  }
} // gotSpreadsheet(colori)

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
