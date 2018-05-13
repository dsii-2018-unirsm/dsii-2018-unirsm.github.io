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

var ogg = []; // < array di oggetti
var grid = 0;

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet, 'jsonp');
  colorMode(RGB);
  rectMode(CENTER);
}


function draw() {
  grid = width/(ogg.length+1);
  background(200);
  for (var i=0; i<ogg.length; i++) {
    ogg[i].mostra();
  }
}

function gotSpreadsheet(totale) { //(totale) indica il nome del foglio spreedsheet, poteva chiamarsi pippo
  for (var i = 0; i < totale.feed.entry[i].gsx$anno.$t; i++) {
    var c = {
                  // dati, nomi delle colonne, i parametri
                  "uomini": totale.feed.entry[i].gsx$uomini.$t,
                  "donne": totale.feed.entry[i].gsx$donne.$t,
                  "anno":totale.feed.entry[i].gsx$anno.$t
              }
    ogg.push(new Oggetto(i,c.uomini, c.donne, c.anno));
  }
}

// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _uomini,_donne,_anno) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
//this.totale = _totale;
this.uomini = Number(_uomini);
this.donne = Number(_donne);
this.anno = Number(_anno);


  // FUNZIONALITA

  this.mostra = function() {
    push();
    //centra rispetto alla pagina
    translate(grid + this.id * grid, height/2);
    for(var i = 0; i < this.donne; i++){
      fill(255,0,0);
      noStroke();
      ellipse(random(-25,25), random(200)-150, 3,3);
    }
    noLoop();
    for(var i = 0; i < this.uomini; i++){
      fill(0,0,255);
      noStroke();
      ellipse(random(-25,25), random(200)-150, 3,3);
    }

    //ellipseMode(CENTER);

    //testo
    noStroke();
    fill(0);
    textAlign(CENTER);
    translate(0,80);
    text(this.anno,0,0);
    text("donne: "+this.donne,0,20);
    text("uomini: "+ this.uomini,0,40);
    pop();
 }



// responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
}
