
// FLU by legeinteukein [Speranzavita, decessiinfluenza]
// 2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical


var url = "https://spreadsheets.google.com/feeds/list/1dYj_UHjd_WXFqHBNzIAWvk8UhDTEQ-RuzU_cFr2fxBc/1/public/values?alt=json";
//var url = "https://spreadsheets.google.com/feeds/list/2PACX-1vQXBXKP9_a0jsq_GpOjSyjP1gI2LexMCMBWoqvaKynNJVd2mrsQZbas7ClWFBJawcCk6MKNh-by8OGN/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "2010datidati/data/values.json";
var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;




function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  rectMode(CORNER);
  textFont("Raleway");


} // setup()
function draw() {
// piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);
  background(0,0,10);

  text("2015", 200, 70);
  text("2010", 400, 70);
  text("2005", 600, 70);


  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
     ogg[i].mostra();
   }

} // draw()


function gotSpreadsheet(datiEsterni) {

  console.log(datiEsterni.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < datiEsterni.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  //età  -  anni2015
                  "anni2015": datiEsterni.feed.entry[i].gsx$anni2015.$t,
                  //speranza di vita -  speranzadivita2015
                  "speranzadivita2015": datiEsterni.feed.entry[i].gsx$speranzadivita2015.$t,
                  //morti -  morti2015
                  "morti2015": datiEsterni.feed.entry[i].gsx$morti2015.$t,
                   //età  -  anni2010
                  "anni2010": datiEsterni.feed.entry[i].gsx$anni2010.$t,
                  //speranza di vita -  speranzadivita2010
                  "speranzadivita2010": datiEsterni.feed.entry[i].gsx$speranzadivita2010.$t,
                  //morti -  morti2010
                  "morti2010": datiEsterni.feed.entry[i].gsx$morti2010.$t,
                   //età  -  anni2005
                  "anni2005": datiEsterni.feed.entry[i].gsx$anni2005.$t,
                  //speranza di vita -  speranzadivita2005
                  "speranzadivita2005": datiEsterni.feed.entry[i].gsx$speranzadivita2005.$t,
                  //morti -  morti2005
                  "morti2005": datiEsterni.feed.entry[i].gsx$morti2005.$t,

              }



    // e ora generiamo un nuovo oggetto classe "Oggetto"

  ogg.push(new Oggetto(i, c.anni2015, c.speranzadivita2015, c.morti2015, c.anni2010, c.speranzadivita2010, c.morti2010, c.anni2005, c.speranzadivita2005, c.morti2005,));
  //console.log(ogg);
  }
}
// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"


function Oggetto(_id, _anni, _speranzav, _morti, _anni10, _speranzav10, _morti10, _anni05, _speranzav05, _morti05) {
  // DATI E COSTRUTTORE
  var oid;
  var oanni;
  var osperanzav;
  var omorti;

  if (mouseX >=390 && mouseX<=440 && mouseY >=50 && mouseY<=100) {
  var oid = _id;
  var oanni = _anni10;
  var osperanzav = _speranzav10;
  var omorti = _morti10;

 this.id = Number(oid);
  this.anni2010 = oanni;
  this.speranzadivita2010 = osperanzav;
  this.morti2010 =omorti;


} if (mouseX >=590 && mouseX<=640 && mouseY >=50 && mouseY<=100) {
  var oid = _id;
  var oanni = _anni05;
  var osperanzav = _speranzav05;
  var omorti = _morti05;

  this.id = Number(oid);
  this.anni2005 = oanni;
  this.speranzadivita2005 = osperanzav;
  this.morti2005 =omorti;


} else{
  var oid = _id;
  var oanni = _anni;
  var osperanzav = _speranzav;
  var omorti = _morti;

  this.id = Number(oid);
  this.anni2015 = oanni;
  this.speranzadivita2015 = osperanzav;
  this.morti2015 =omorti;

}

this.mostra = function() {
  push();

    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    push();
    translate(grid + (oid * grid),height/3);


    text(oanni,-40,10,);

    rotate(PI/2);

    text(omorti,30,00);
    text(osperanzav,30,30);


    // disegna barrette
    rotate(3*PI/2);
    fill(25, 204, 100);
    rect(-38, 60, 10, osperanzav);


    fill(255, 24, 10);
    rect(-8, 60, 10, omorti);

    pop();

  }




}




// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
