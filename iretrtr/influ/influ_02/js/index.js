// Irene Trotta @iretrtr © 2018 MIT License
// influ | Città San't Angelo, IT
// Educational purpose, made for DSII2018 lab @UniRSM

// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1DPekzed7yYhOclD2EdjfR9SwggtLG6jz3BMY3p4_-Ag/od6/public/values?alt=json";
var grid = 0;
var spacing;
var ogg = [];
var totalDeaths = 0;


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  rectMode(CENTER);
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
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
   push();
   for (var i = 0; i < totalDeaths; i++){
     noStroke();
     fill('#ff0000');
     ellipse (int(random(width)), int(random(height)), 2,2);
   }
   pop();
   for (var i=0; i<ogg.length; i++){
     ogg[i].mostra();
   }
   fill(255);
   text(totalDeaths + " morti totali di influenza in Italia dal 2006 al 2011", width/2,height/2);
 }

 function Oggetto(_id, _year, _men, _women){
   this.id = Number(_id);
   this.year = Number(_year);
   this.men = Number(_men);
   this.women = Number(_women);
   this.dx = 0; // variazione delta Y relativa al presente, si parte da 0
   this.mostra = function(){
     push();
     noStroke();
     text(this.year, 5, grid + this.id * grid);
     translate(5, grid + this.id * grid);
     //textAlign(CENTER);
     rectMode(CORNER);
     fill(255);
     rect(0,0, this.women + this.men, 8)
     fill('#00BFFF');
     //rect(0,13, this.men, 5)
     pop();
   }
 }

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
