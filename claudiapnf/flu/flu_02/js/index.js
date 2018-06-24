// Claudia Panfili @claudiapnf © 2018 MIT License
// Mortality by influence | Perugia, IT | 4.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json

// carica google spreadsheets
var url = "https://spreadsheets.google.com/feeds/list/1tYW41gVKEKVLqQqhA9fMm8k5c9b6fuaOfKrtQ0qxrLY/od6/public/values?alt=json";

var ogg = []; // array di oggetti
var grid = 0;
var testox = 0; // coordinate dei testi sotto ciascuna colonna
var testoy = 30;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet, 'jsonp');
  colorMode(RGB);
  rectMode(CENTER);
}


function draw() {
  push();
  background(220);
  pop();

  //titoli + legenda
  fill(90);
  textStyle (BOLD);
  textFont("Arial");
  textSize(14);
  text("MORTALITY BY INFLUENCE", 60, 60);
  textStyle (NORMAL);
  textSize(12);
  text("ITALY | 2006 - 2011", 60, 80);
  text("assis.it", 60, 100);
  text("   women", 60, 125);
  text("   men", 60, 145);

  noStroke();
  fill(255,0,0);
  ellipse (60, 120,5,5);

  noStroke();
  fill(0,0,255);
  ellipse (60, 140,5,5);

  textStyle (BOLD);
  textFont("Arial");
  textSize(11);

//griglia in proporzione allla lunghezza dell'array ogg + 1
  grid = width/(ogg.length+1);


  for (var i=0; i<ogg.length; i++) {
    ogg[i].mostra();

  }
}

function gotSpreadsheet(totale) { //(totale) indica il nome del foglio spreadsheet
  for (var i = 0; i < totale.feed.entry[i].gsx$anno.$t; i++) {
    var c = {
                  // dati in base ai nomi delle colonne nello spreadsheet
                  "uomini": totale.feed.entry[i].gsx$uomini.$t,
                  "donne": totale.feed.entry[i].gsx$donne.$t,
                  "anno":totale.feed.entry[i].gsx$anno.$t
              }
    ogg.push(new Oggetto(i,c.uomini, c.donne, c.anno));
  }
}

// definizione di oggetto
function Oggetto(_id, _uomini,_donne,_anno) {

// costruttore oggetto
  this.id = Number(_id); // Number() converte in numero intero la stringa
  this.uomini = Number(_uomini);
  this.donne = Number(_donne);
  this.anno = Number(_anno);


  // funzione mostra
  this.mostra = function() {
    push();
    //centra rispetto alla viewport
    translate(grid + this.id * grid, height/2);
    // disegna un cerchio rosso per ogni donna
      for(var i = 0; i < this.donne; i++){
        fill(255, 0, 80);
        noStroke();
        ellipse(random(-25,25), random(200)-150, 3,3);
    }
    noLoop();
    // disegna un cerchio blu per ogni uomo
      for(var i = 0; i < this.uomini; i++){
        fill(80, 0, 255);
        noStroke();
        ellipse(random(-25,25), random(200)-150, 3,3);
    }


    //testo per ciascuna colonna
    noStroke();
    fill(80);
    textStyle (NORMAL);
    textAlign(CENTER);
    translate(0,80);
    fill(80);
    text("women: " + this.donne,testox,testoy + 20);
    text("men: " + this.uomini,testox,testoy + 40);
    textStyle(BOLD);
    textSize(20);
    fill(50);
    text(this.anno,testox,testoy);
    pop();
 }

// resize window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}
