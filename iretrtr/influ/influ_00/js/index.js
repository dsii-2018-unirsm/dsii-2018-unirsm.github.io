// Irene Trotta @iretrtr © 2018 MIT License
// influ | Città San't Angelo, IT
// Educational purpose, made for DSII2018 lab @UniRSM

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1DPekzed7yYhOclD2EdjfR9SwggtLG6jz3BMY3p4_-Ag/od6/public/values?alt=json";

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
