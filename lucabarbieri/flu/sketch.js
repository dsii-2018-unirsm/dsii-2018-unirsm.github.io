// Luca Barbieri @lb © 2017-18 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | San Marino, RSM | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// nella creazione dei dati in spreadsheets non utilizzare spazi o trattini perché durante la creazione del json verranno rimossi
// usare minuscole o maiuscole


// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1KnslfmMhYANBw8QaN2O1omywy-FRJPgKCGxbcetK7t0/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;
var anno = 0;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
}


function draw() {

  grid = width/((ogg.length)+1);
  grid_y = height/3;

  background(80);
  fill (0, 100, 60);
  text("INFLUENCE-ASSOCIATED PEDIATRIC MORTALITY : " + anno, grid, grid); // stampa il numero oggetti in alto a sx
  fill(0);
  text("About half of pediatric children died of flu every year because they had risky conditions, but which ones?", grid, grid+15);

  for (var i=0; i<(ogg.length); i++) {   // mostra tutti gli oggetti relativi al 2016
    ogg[i].mostra();
  }
}


function gotSpreadsheet(dati) {
  console.log(dati.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < dati.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "dimensione": dati.feed.entry[i].gsx$dimensione.$t,
                  "anno": dati.feed.entry[i].gsx$anno.$t,
                  "complicazione": dati.feed.entry[i].gsx$complicazione.$t,
              }
    console.log(c); // < debug, verifica oggetto 1x1
    //nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.dimensione, c.anno, c.complicazione));
    anno = c.anno; // segna la variabile dell'ultimo anno identificato
  }
  anno = anno - 1 + ogg.length/10;
}


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _dimensione, _anno, _complicazione) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.dimensione = Number(_dimensione);
  this.anno = _anno;
  this.complicazione = _complicazione;

  this.dy = 0; // variazione delta Y relativa al presente, si parte da 0
  this.speedRot = _dimensione;


  this.mostra = function() {
    push();
    translate(grid + (this.id * grid), height/2 + this.dy);

    if (ruota) {
      rotate((frameCount/200)* this.speedRot); // maggiore è il numero dei morti e maggiore sarà la velocità
    }

    fill (0, 100, 60); // red color
    rect(0, 0, grid * 0.02, grid * 0.2);
    pop();

    noStroke();
    fill(0);
    textAlign(LEFT, CENTER);

    push();
    translate(grid + (this.id * grid),height/3);
    rotate(PI/2);
    text(this.complicazione,0-grid_y/4,0);
    rotate(-PI/2);
    text(this.dimensione,-5,grid_y);
    pop();

  }

}


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// implementazioni future
// inserire un titolo OK
// rendere visibile l'anno di riferimento OK
// mettere un testo che spiega il numero totale di complicazioni rispetto quello generale di morti OK
// pulsante per visualizzare gli anni passati
