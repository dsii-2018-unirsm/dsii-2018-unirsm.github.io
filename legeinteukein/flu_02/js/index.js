// Daniele Tabellini @fupete © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2017
// Educational purpose, made for DSII2017 lab @UniRSM
// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical
// link del doc google spreasheets, deve essere pubblico su web,
// va copiato la parte di indice nell'url nel formato sotto:
// https://spreadsheets.google.com/feeds/list/
// + KEY_URL + /od6/public/values?alt=json
// carica da online
//https://docs.google.com/spreadsheets/d/e/2PACX-1vS7dhImG_eMZCQCmziTDAlphP2lvsZQHtYwQIh_b1WCrWnvoGrGFFH3wi_sYYRP4zvozVaBZiLXJlHI/pubhtml
//https://docs.google.com/spreadsheets/d/e/2PACX-1vS7dhImG_eMZCQCmziTDAlphP2lvsZQHtYwQIh_b1WCrWnvoGrGFFH3wi_sYYRP4zvozVaBZiLXJlHI/pubhtml
//1dYj_UHjd_WXFqHBNzIAWvk8UhDTEQ-RuzU_cFr2fxBc


var url = "https://spreadsheets.google.com/feeds/list/1dYj_UHjd_WXFqHBNzIAWvk8UhDTEQ-RuzU_cFr2fxBc/1/public/values?alt=json";
//var url = "https://spreadsheets.google.com/feeds/list/2PACX-1vQXBXKP9_a0jsq_GpOjSyjP1gI2LexMCMBWoqvaKynNJVd2mrsQZbas7ClWFBJawcCk6MKNh-by8OGN/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "2010datidati/data/values.json";
var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;

var valueClick = 1;



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
  background(0,0,21);
  var co = color(0, 100, 80);

  text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx




 stroke('red');
noFill();
 rect(50, 50, 50, 50);
 fill(co);
 var t1 = text("2010", 60, 70);
 
stroke('red');
noFill();
 rect(110, 50, 50, 50); 
fill(co);
var t2 = text("2011", 120, 70);

  stroke('red');
  noFill();
 rect(170, 50, 50, 50);
  fill(co);
  var t3 = text("2012", 180, 70);




  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
   // ogg[i].muovi();,
    ogg[i].mostra();
   }







} // draw()










function gotSpreadsheet(datiEsterni) {
  console.log(datiEsterni.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < datiEsterni.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  //età  -  anni2010
                  "anni2010": datiEsterni.feed.entry[i].gsx$anni2010.$t,
                  //speranza di vita -  speranzadivita2010
                  "speranzadivita2010": datiEsterni.feed.entry[i].gsx$speranzadivita2010.$t,
                  //morti -  morti2010
                  "morti2010": datiEsterni.feed.entry[i].gsx$morti2010.$t,
                   //età  -  anni2010
                  "anni2011": datiEsterni.feed.entry[i].gsx$anni2011.$t,
                  //speranza di vita -  speranzadivita2011
                  "speranzadivita2011": datiEsterni.feed.entry[i].gsx$speranzadivita2011.$t,
                  //morti -  morti2011
                  "morti2011": datiEsterni.feed.entry[i].gsx$morti2011.$t,
                   //età  -  anni2010
                  "anni2012": datiEsterni.feed.entry[i].gsx$anni2012.$t,
                  //speranza di vita -  speranzadivita2012
                  "speranzadivita2012": datiEsterni.feed.entry[i].gsx$speranzadivita2012.$t,
                  //morti -  morti2012
                  "morti2012": datiEsterni.feed.entry[i].gsx$morti2010_2,
                
              }


             //printLn(c);


    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
  ogg.push(new Oggetto(i, c.anni2010, c.speranzadivita2010, c.morti2010,));
  // ogg.push(c);
  }
} // gotSpreadsheet(colori)
// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"





function Oggetto(_id, _anni, _speranzav, _morti,/* _saturation, _brightness, _morti, _forma*/) {
  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.anni2010 = _anni;
  // < Number() converte in numero intero la stringa
  this.speranzadivita2010 = _speranzav;
  this.morti2010 =_morti;

  this.mostra = function() {

    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    push();
    translate(grid + (this.id * grid),height/3);

    rotate(PI/2);
    text(this.anni2010,0,0);
    text(this.speranzadivita2010,30,0);
    text(this.morti2010,30,30);


    // disegna barrette
    rotate(3*PI/2);
    fill(255, 204, 100);
    rect(-38, 60, 10, this.speranzadivita2010);

    
    fill(255, 204, 100);
    rect(-8, 60, 10, this.morti2010);

    pop();
  
  }
} 

// prova funzione per cambiiare dati per anno
//NON FUNZIONA

function mouseClicked(){
  if (mouseX >= 50 && mouseX <= 100 && mouseY >=50  && mouseY <= 50) {
    push();


fill('red');
 rect(70, 70, 50, 50);
 



  }
}





// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}