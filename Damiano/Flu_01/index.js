// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM


// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
//

var url = "https://spreadsheets.google.com/feeds/list/1PLp4YGWOfRabQfHXrlapqOjIIGpDScasxHEuF9mAfOs/od6/public/values?alt=json";

 // array per contenere i dati/oggetto
var dati = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
  loadJSON(url, gotSpreadsheet);
  //print("ciao");
  colorMode(HSB);
  //rectMode(CENTER);
} // setup()

function draw() {
  // piccolo loop per verificare di avere i dati,
  // stampa su schermo cerchi con i colori presenti nel google doc
  background(0,0,61);
  var padding = width/(dati.length+1);
  for (var i = 0; i < dati.length; i++) {
///questo era commentato
    fill(dati[i].anno,dati[i].mortiuomo,dati[i].mortidonna,dati[i].mortitotali/100);
    if (dati[i].mortiuomo == "quadrato") {
       rect(padding + i * padding, height/2, padding*1.2,padding*1.2);
     } else if (dati[i].mortidonna == "cerchio") {
       ellipse(padding + i * padding, height/2, padding*1.2,padding*1.2);
     }
////fin qui
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    text(dati[i].anno, padding + (i * padding),height/3);
    fill(5);
    ellipse(450,height/3,dati[i].mortiuomo/10,dati[i].mortiuomo/10);
    ellipse(750,padding+(i*padding),dati[i].mortidonna/10,dati[i].mortidonna/10);

  }
} // draw()

function gotSpreadsheet(datiEgx) {
  //println(colori.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < datiEgx.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var rigo = {
                  // dati, nomi delle colonne, i parametri
                  "anno": datiEgx.feed.entry[i].gsx$anno.$t,
                  //era hue
                 "mortiuomo": datiEgx.feed.entry[i].gsx$mortiuomo.$t,
                 //era saturation
                  "mortidonna": datiEgx.feed.entry[i].gsx$mortidonna.$t,
                  //era brightness
                   "mortitotali": datiEgx.feed.entry[i].gsx$mortitotali.$t,
                  //era alpha
                   //"mortitotali": datiEgx.feed.entry[i].gsx$mortitotali.$t,
                  //era forma
                  // "forma": datiEgx.feed.entry[i].gsx$forma.$t
              }
              console.log(rigo);
              //println(colore); // < debug, verifica oggetto 1x1
    dati.push(rigo); // < inserimento nell'array del dato
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
