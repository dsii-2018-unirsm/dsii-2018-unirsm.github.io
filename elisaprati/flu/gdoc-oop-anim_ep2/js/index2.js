// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1V6yAC2xa9zfSRasEhHvOqPtNgi9Gj-pDCx8Xj306-e8/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

//-------------------------------------------------------------------------------------------------------

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = false;



//-------------------------------------------------------------------------------------------------------

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()



//-------------------------------------------------------------------------------------------------------

function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);

  background(0,0,21);
  text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    //ogg[i].muovi(); //. per applicare la funzione
    ogg[i].mostra();
  }
  push();
  translate(grid, (height/4)*1); //translate sposta sempre il centro della tavola
  textAlign(RIGHT);
  text('NORD',-10,10);
  pop();
  push();
  translate(grid, (height/4)*2); //translate sposta sempre il centro della tavola
  textAlign(RIGHT);
  text('CENTRO',-10,10);
  pop();
  push();
  translate(grid, (height/4)*3); //translate sposta sempre il centro della tavola
  textAlign(RIGHT);
  text('SUD',-10,10);
  pop();

} // draw()


//-------------------------------------------------------------------------------------------------------


function gotSpreadsheet(flu) {
  console.log(flu.feed.entry.length); // < debug, numero righe della tabella //stampa sulla consol la lunghezza dei valori inseriti degli imput di colori
  for (var i = 0; i < flu.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var f = {
                  // dati, nomi delle colonne, i parametri
                  "nmortiflu": flu.feed.entry[i].gsx$nmortiflu.$t,
                  "cmortiflu": flu.feed.entry[i].gsx$cmortiflu.$t,
                  "smortiflu": flu.feed.entry[i].gsx$smortiflu.$t
              }
    console.log(f); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, f.nmortiflu, f.cmortiflu, f.smortiflu));
  }
} // gotSpreadsheet(colori)



//-------------------------------------------------------------------------------------------------------
// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"

function Oggetto(_id, _nmortiflu, _cmortiflu, _smortiflu) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.nmortiflu = Number(_nmortiflu);
  this.cmortiflu = Number(_cmortiflu);
  this.smortiflu = Number(_smortiflu);


  //-------------------------------------------------------------------------------------------------------

  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    fill(255);
    noStroke();

    push();
    rectMode(CORNER);
    translate(grid + (this.id * grid), (height/4)*1 + this.id); //translate sposta sempre il centro della tavola
    rect(0,0,_nmortiflu,height*0.01);
    pop();
    push();
    rectMode(CORNER);
    translate(grid + (this.id * grid), (height/4)*2 + this.id); //translate sposta sempre il centro della tavola
    rect(0,0,_cmortiflu,height*0.01);
    pop();
    push();
    rectMode(CORNER);
    translate(grid + (this.id * grid), (height/4)*3 + this.id); //translate sposta sempre il centro della tavola
    rect(0,0,_smortiflu,height*0.01);
    pop();

    push();
    textAlign(LEFT, CENTER);
    translate(grid + (this.id * grid), ((height/4)*1 + this.id)-20);
    text(this.id,0,0);

    pop();

    //riferito al testo
    // noStroke();
    // fill(255);
    // textAlign(LEFT, CENTER);
    // push();
    // translate(grid + (this.id * grid),height/3);
    // rotate(PI/2);
    // text(this.colore,0,0);
    // pop();

    //text(this.colore,grid + (this.id * grid),height/3);
  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
