///////////////////
// Damiano Pluchino © 2018 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | San Marino, SM | 7.2018
// Educational purpose, made for DSII2018 lab @UniRSM
// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical


// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1PLp4YGWOfRabQfHXrlapqOjIIGpDScasxHEuF9mAfOs/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

var ogg = []; // < array di oggetti/classi
var grid = 0;
var ruota = true;


function setup() {
  frameRate(60);
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);

  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet

  colorMode(HSB);
  rectMode(CENTER);
} // setup()


function draw() {
  // piccolo loop per verificare di avere i dati, stampa su schermo cerchi con i colori presenti nel google doc
  grid = width/(ogg.length+1);

  background(90,0,21);
  text("OBJECTS : " + ogg.length, 10,20); // < stampa il numero oggetti in alto a sx

  for (var i=0; i<ogg.length; i++) {   // (muovi e) mostra tutti gli oggetti
    ogg[i].muovi();
    ogg[i].mostra();
  }
}  //draw()


function gotSpreadsheet(datiEgx) {
  console.log(datiEgx.feed.entry.length); // < debug, numero righe della tabella
  for (var i = 0; i < datiEgx.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var c = {
                  // dati, nomi delle colonne, i parametri
                  //colore
                  "anno": datiEgx.feed.entry[i].gsx$anno.$t,
                  //hue
                  "mortiuomo": datiEgx.feed.entry[i].gsx$mortiuomo.$t,
                  //saturation
                  "mortidonna": datiEgx.feed.entry[i].gsx$mortidonna.$t,
                  //brightness
                  "mortitotali": datiEgx.feed.entry[i].gsx$mortitotali.$t,

                  //"alpha": datiEgx.feed.entry[i].gsx$mortiuomo.$t,
                  //"forma": datiEgx.feed.entry[i].gsx$mortiuomo.$t
              }
    console.log(c); // < debug, verifica oggetto 1x1
    // e ora generiamo un nuovo oggetto classe "Oggetto"
    ogg.push(new Oggetto(i, c.anno, c.mortiuomo, c.mortidonna, c.mortitotali));
  }
}  //gotSpreadsheet(colori)


// DEFINIZIONE DELLA CLASSE OGGETTI "Oggetto"
function Oggetto(_id, _anno, _mortiuomo, _mortidonna, _mortitotali) {

  // DATI E COSTRUTTORE
  this.id = Number(_id); // < Number() converte in numero intero la stringa
  this.anno = _anno;
  this.mortiuomo = Number(_mortiuomo);
  this.mortidonna = Number(_mortidonna);
  this.mortitotali = Number(_mortitotali);

  //da qui in poi controllare
//  this.mortiuomo = Number(_mortiuomo)/100;
  //this.mortiuomo = _mortiuomo;


  //muovi
  this.speed = _mortiuomo/10; random(-10,10); // < velocità di variazione su asse y
  this.dy = 0; // variazione delta Y relativa al presente, si parte da 0
  this.speedRot = _mortiuomo;//mettere velocità movimento

  // FUNZIONALITA
/////*
  this.muovi = function() {
    // oscilla su asse y, velocità dipende dall'alpha
    this.dy += this.speed; random(-100,100);
    if (abs(this.dy) >= height/4) {
      this.speed *= -100;
    }
  } //move()




  this.mostra = function() {
    // disegna, cerchio o quadrato dipende dalla forma, colore dai dati passati
    fill(this.mortiuomo,this.mortidonna,this.mortitotali);
    push();
    translate(grid-30+ this.id * grid, height/3)+ this.dy





////////da qui controllare per movimento
    if (ruota) {
      //rotate(frameCount/this.speedRot);
    }
    if (this.mortiuomo == "quadrato") {

   } else if (this.mortidonna == "cerchio") {

    }
///////////////////////////////////////////



    ///MORTITOTLI



    //LINEEE
    //totali
    stroke(255);
    line(0, 390, 0, -50);

    //fill(50,10,40);MORTIUOMO
    fill(194,68,96);
    noStroke();
    //rect(15, this.mortiuomo/2, 10, this.mortiuomo); //grid * 1.2 ultimi due parametri
    ellipse(random(3),30  , this.mortiuomo/4, this.mortiuomo/4); //grid * 1.2 ultimi due parametri

                //  this.mortiuomo/2+random(4)

    //MORTIDONNA
    //fill(50,80,120);
    fill(21,43,96);
    noStroke();
    //rect(-15, this.mortidonna/2, 10, this.mortidonna);
    /////rotate(random(0.1),this.mortiuomo);
    ellipse(random(3),160, this.mortidonna/4, this.mortidonna/4);

    ///TOTALI
    fill(255);
    textAlign(LEFT, CENTER);
    //rect(0, this.mortitotali/2, 20, this.mortitotali);
    ellipse(random(3), 320, this.mortitotali/4, this.mortitotali/4);


    /////TESTO
    fill(255);
    text(this.mortitotali+" "+"Decessi Totali",-30,460);
    fill(194,68,96);
    text(this.mortiuomo+" "+"Uomini",-30,420);
    fill(21,43,96);
    text(this.mortidonna+" "+"Donne",-30,440);



    grid * 1.2
    pop();
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    push();
    translate(grid-30 + (this.id * grid),height/5);
    rotate(PI/2);
    text(this.anno,0,0);
    pop();




  } // display()

} // Oggetto()


// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
