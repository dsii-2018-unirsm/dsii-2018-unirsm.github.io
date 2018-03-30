// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1tYW41gVKEKVLqQqhA9fMm8k5c9b6fuaOfKrtQ0qxrLY/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  //rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);

  background(0,0,21);
  text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].mostra();
  }
} // draw()


function gotSpreadsheet(totale) { //(totale) indica il nome del foglio spreedsheet, poteva chiamarsi pippo
  console.log(totale.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < totale.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "totale": totale.feed.entry[i].gsx$totale.$t, //totale = pippo
                  "donne": totale.feed.entry[i].gsx$donne.$t, //totale = pippo
                  "uomini": totale.feed.entry[i].gsx$uomini.$t //totale = pippo // feed significa "prendi i dati nelle caselle//
              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.totale, c.donne, c.uomini));
  }
} // gotSpreadsheet(colori)


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _totale, _donne, _uomini) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.totale = _totale;
  this.donne = Number(_donne)/10;
  this.uomini = _uomini/10;


  // FUNZIONALITA

  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    //area del cerchio, non il diametro
    noStroke();
    fill(0);
    push();
    translate(grid + this.id * grid, height/2);
    //ellipse(0, 0, this.donne, this.donne);
    //rectMode(CENTER);
    rect (0,0, 10, this.donne);
    fill(50);
    rect (0,this.donne, 10, this.uomini);
    //ellipseMode(CENTER);

    //formattazione testo infografica
    noStroke();
    fill(255);
    textAlign(CENTER);
    translate(0,80);
    text(this.totale,0,0);
    pop();

    //text(this.colore ,grid + (this.id * grid),height/3);
  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
