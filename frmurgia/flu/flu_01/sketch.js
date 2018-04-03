
/*
<><><><><><><><><><><><><><><><><>><><>><><>
.-------------------------------------------.

by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

infografica che mostra, per ogni regione,
il rapporto tra il numero di morti causati
dall'influenza e la popolazione residente.

Basato sul codice scritto da:
https://www.openprocessing.org/sketch/390717

I dati sono stati prelevati dal database del
software HFA fornito dall’Organizzazione
Mondiale della Sanità
https://www.istat.it/it/archivio/14562

.------------------------------------------.
<><><><><><><><><><><><><><><><>><><>><><><>
*/


/*
::TO DO::

SOSTITUIRE IL NUMERO NELL'IF CON IL NUMERO DEI RESIDENTI
SOSTITUIRE NEL SECONDO IF IL NUMERO DI DECESSI
STAMPARE LA REGIONE PRESA IN ESAME
SELEZIONARE LE DIVERSE REGIONI

*/

var url = "https://spreadsheets.google.com/feeds/list/1qjn9GxEoreNCGPHDkobfhPoUYFyGY0llKDqGtfkPs0s/od6/public/values?alt=json";

var p = 0,
    d = 0,
    r = 0;
var fps=0;

var dati = []; // array contenente il numero di decessi per influenza
var vivi =[]; //array contente il numero di residenti della singola regione

function setup() {
createCanvas(windowWidth, windowHeight);
background(170);
fill(40);
noStroke();
rect(0,0,width,height/2) //rettangolo nero della parte superiore dello schermo
frameRate(60);
loadJSON(url,gotSpreadsheet);
loadJSON(url,gotSpreadsheet_1);


}

function draw() {

  textFont('IBM Plex Mono');
  textStyle(NORMAL);
  textSize(32);
  var s = 'Decessi per influenza';
  fill(190);
  text(s, 100, windowHeight/3, 500, 200);
  text('Lombardia',windowWidth/3+windowWidth/2, 300, 500, 200);
  textSize(32);
  var s = 'Persone residenti';
  fill(0);
  text(s, 100, (windowHeight/3)+(windowHeight/3), 500, 200);

  fps+=1;

    if (fps>166){ // condizione per cui sei il numero di pallini scritti sono maggiori dei cittadini residenti
                  // sono stampati tutti i pallini relativi alle persone vive
      print('ho stampato tutti i pallini dei vivi')
      noLoop();
      }

    else if (fps<166) { // se i pallini scritti sono minori del numero dei residenti allora scrivi 100 pallini per frame

      translate(width / 2, height / 2);
      //print('pallini: ',fps);
      for (var i = 0; i < 1000; i++) { // per ogni ciclo disegna un puntino ed in ciclo viene ripetuto n volte

      var radius =  random(380); //raggio che determina la grandezza del semicerchio
      var angle = random(random(p / 2), p);// mezzo cerchio
      var x = cos(angle) * radius; //posizione x dell'ellisse = coseno di angolo generato casualmente per il raggio che
      //ha come valore un numero casuale da 0 a 300
      var y = sin(angle) * radius;
      fill( 40);
      noStroke();
      ellipse(x, y, 1, 1);
      randomize(); // funzione che posiziona in modo casuale in un semicerchio i pallini
}
}



  // ciclo per i morti
  if (fps>2){

  //print('ho stampato tutti i pallini dei morti')
  }

  else if (fps<2) {

    //print('pallini: ',fps);
    for (var i = 0; i < 2300; i++) {
      // per ogni ciclo disegna un puntino ed in ciclo viene ripetuto n volte
      var radius =  random(380); //raggio che determina la grandezza delle due ellissi
      var angle = random(random(p / 2), p);// mezzo cerchio
      var x = cos(angle) * radius;
      var y = sin(angle) * radius;
      fill(255);
      noStroke();
      angle += PI;
      x = cos(angle) * radius;
      y = sin(angle) * radius;
      rect(x, y, 1, 1);
      randomize();
  }
  }

}


  // funzione in cui inserisco all'interno dell'oggetto regioni il numero di residenti
  function gotSpreadsheet_1(_residenti) {
   //print(_residenti.feed.entry.length); // < debug, numero righe della tabella
    for (var i = 0; i < _residenti.feed.entry.length; i++) {
      var residenti = {
        "residenti": _residenti.feed.entry[i].gsx$residenti.$t,
      }
      vivi.push(residenti);
    }
  }

  // funzione in cui inserisco all'interno dell'oggetto decessi il numero di decessi
  function gotSpreadsheet(_Decessi) {
   //print(_Decessi.feed.entry.length); // < debug, numero righe della tabella
    for (var i = 0; i < _Decessi.feed.entry.length; i++) {
      var decessi  = {
        "decessi": _Decessi.feed.entry[i].gsx$decessi.$t,
      }
      dati.push(decessi);

    }
  }






function mouseReleased() {
   noLoop();

}

function randomize() {
  p = random(PI *1, PI * 1);
  r =random(2, 200);
}
