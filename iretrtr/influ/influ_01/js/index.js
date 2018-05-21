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
var grid = 0;
var spacing;
var ogg = [];
var totalDeaths = 0;


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  colorMode(RGB);
  rectMode(CENTER);
}

function gotSpreadsheet(grafico01) {
  console.log(grafico01.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < grafico01.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var tot = {
                  // dati, nomi delle colonne, i parametri
                  "year": grafico01.feed.entry[i].gsx$year.$t,
                  "men": grafico01.feed.entry[i].gsx$m.$t,
                  "women": grafico01.feed.entry[i].gsx$w.$t,
              }
    console.log(tot); // < debug, verifica oggetto 1x1
    ogg.push(new Oggetto(i, tot.year, tot.men, tot.women, totalDeaths));
  }
  console.log(ogg);
  for(var i = 0; i < ogg.length; i++){
    totalDeaths = totalDeaths + ogg[i].men + ogg[i].women;
  }
  console.log(totalDeaths);
}
 // gotSpreadsheet(colori)


 function draw() {
   grid = height/(ogg.length+1);
   spacing = grid/2-5;
   background(0);
   for (var i=0; i<ogg.length; i++){
     ogg[i].mostra();
   }
   fill(255);
   //text("OBJECTS : " + ogg.length, 10,20);
   text("influenza: " + totalDeaths + " morti", width/2,20);
 } // draw()

 function Oggetto(_id, _year, _men, _women){
   this.id = Number(_id);
   this.year = Number(_year);
   this.men = Number(_men);
   this.women = Number(_women);
   this.dx = 0; // variazione delta Y relativa al presente, si parte da 0
   this.mostra = function(){
     push();
     translate(0, grid + this.id * grid);
     noStroke();
     //textAlign(CENTER);
     text(this.year, 0, 0);
     rectMode(CORNER);
     fill('#fae');
     rect(0,0, this.women, spacing)
     fill('#00BFFF');
     rect(0,spacing, this.men, spacing)
     pop();
   }
 }

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
