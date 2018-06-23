// Elisa Prati @elisaprati © 2018 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | Firenze, IT | 4.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical


// carica da online
var url = "https://spreadsheets.google.com/feeds/list/1V6yAC2xa9zfSRasEhHvOqPtNgi9Gj-pDCx8Xj306-e8/od6/public/values?alt=json";
// oppure carica da file locale File/Save As...
//var url = "data/values.json";

//-------------------------------------------------------------------------------------------------------

var dati = [];

var settimane;
var larghezza = 800;
var altezza= 500;
var maxValue = 0;
var margineLato;
var margineTop;
var indice;
var scostamento;





//-------------------------------------------------------------------------------------------------------
function preload (){
  loadJSON(url, gotSpreadsheet, 'jsonp');   // richiedi i dati formato JSON e poi chiama la funzione gotSpreadsheet
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);


}


//-------------------------------------------------------------------------------------------------------

function draw() {

  background(245);


  margineLato = (width-larghezza)/2;
  margineTop = (height-altezza)/2;
  scostamento = larghezza / (settimane-1);
  indice = altezza / maxValue;

  stroke(200);
  line (margineLato,height-(margineTop+(indice*5)),width-margineLato,height-(margineTop+(indice*5)));
  line (margineLato,height-(margineTop+(indice*10)),width-margineLato,height-(margineTop+(indice*10)));
  line (margineLato,height-(margineTop+(indice*15)),width-margineLato,height-(margineTop+(indice*15)));
  line (margineLato,height-(margineTop+(indice*20)),width-margineLato,height-(margineTop+(indice*20)));
  line (margineLato,height-(margineTop+(indice*25)),width-margineLato,height-(margineTop+(indice*25)));
  line (margineLato,height-(margineTop+(indice*30)),width-margineLato,height-(margineTop+(indice*30)));
  line (margineLato,height-(margineTop+(indice*35)),width-margineLato,height-(margineTop+(indice*35)));
  fill(200);
  noStroke();
  textStyle(NORMAL);
  textAlign (RIGHT);
  text('5', margineLato-7,height+4-(margineTop+(indice*5)));
  text('10', margineLato-7,height+4-(margineTop+(indice*10)));
  text('15', margineLato-7,height+4-(margineTop+(indice*15)));
  text('20', margineLato-7,height+4-(margineTop+(indice*20)));
  text('25', margineLato-7,height+4-(margineTop+(indice*25)));
  text('30', margineLato-7,height+4-(margineTop+(indice*30)));
  text('35', margineLato-7,height+4-(margineTop+(indice*35)));
  fill(200);

  //LEGENDA
  fill(255,0,0,170);
  rect (margineLato-278,height+33-(margineTop+(indice*5)), 12, 12);
  fill(186,12,232,170);
  rect (margineLato-278,height+53-(margineTop+(indice*5)), 12, 12);
  fill(97,120,204,170);
  rect (margineLato-278,height+73-(margineTop+(indice*5)), 12, 12);
  fill(200);
  noStroke();
  text("LEGENDA", margineLato-220,height+25-(margineTop+(indice*5)));
  text("2015-2016", margineLato-200,height+45-(margineTop+(indice*5)));
  text("2016-2017", margineLato-200,height+65-(margineTop+(indice*5)));
  text("2017-2018", margineLato-200,height+85-(margineTop+(indice*5)));
  text("Settimane", margineLato-50,height+85-(margineTop+(indice*5)));
  text("Morti", margineLato-50,height+4-(margineTop+(indice*35)));

  push ();
  noStroke ();

  fill(255,0,0,170);
  beginShape();
  vertex(margineLato, height-margineTop);
  vertex(margineLato, height-(margineTop+(indice*dati[0]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*1), height-(margineTop+(indice*dati[1]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*2), height-(margineTop+(indice*dati[2]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*3), height-(margineTop+(indice*dati[3]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*4), height-(margineTop+(indice*dati[4]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*5), height-(margineTop+(indice*dati[5]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*6), height-(margineTop+(indice*dati[6]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*7), height-(margineTop+(indice*dati[7]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*8), height-(margineTop+(indice*dati[8]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*9), height-(margineTop+(indice*dati[9]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*10), height-(margineTop+(indice*dati[10]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*11), height-(margineTop+(indice*dati[11]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*12), height-(margineTop+(indice*dati[12]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*13), height-(margineTop+(indice*dati[13]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*14), height-(margineTop+(indice*dati[14]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*15), height-(margineTop+(indice*dati[15]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*16), height-(margineTop+(indice*dati[16]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*17), height-(margineTop+(indice*dati[17]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*18), height-(margineTop+(indice*dati[18]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*19), height-(margineTop+(indice*dati[19]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*20), height-(margineTop+(indice*dati[20]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*21), height-(margineTop+(indice*dati[21]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*22), height-(margineTop+(indice*dati[22]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*23), height-(margineTop+(indice*dati[23]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*24), height-(margineTop+(indice*dati[24]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*25), height-(margineTop+(indice*dati[25]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*26), height-(margineTop+(indice*dati[26]['dato3'])));
  vertex(margineLato+((larghezza/settimane)*27), height-(margineTop+(indice*dati[27]['dato3'])));
  vertex(width-margineLato, height-margineTop);
  endShape(CLOSE);


  fill(186,12,232,170);
  beginShape();
  vertex(margineLato, height-margineTop);
  vertex(margineLato, height-(margineTop+(indice*dati[0]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*1), height-(margineTop+(indice*dati[1]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*2), height-(margineTop+(indice*dati[2]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*3), height-(margineTop+(indice*dati[3]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*4), height-(margineTop+(indice*dati[4]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*5), height-(margineTop+(indice*dati[5]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*6), height-(margineTop+(indice*dati[6]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*7), height-(margineTop+(indice*dati[7]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*8), height-(margineTop+(indice*dati[8]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*9), height-(margineTop+(indice*dati[9]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*10), height-(margineTop+(indice*dati[10]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*11), height-(margineTop+(indice*dati[11]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*12), height-(margineTop+(indice*dati[12]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*13), height-(margineTop+(indice*dati[13]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*14), height-(margineTop+(indice*dati[14]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*15), height-(margineTop+(indice*dati[15]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*16), height-(margineTop+(indice*dati[16]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*17), height-(margineTop+(indice*dati[17]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*18), height-(margineTop+(indice*dati[18]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*19), height-(margineTop+(indice*dati[19]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*20), height-(margineTop+(indice*dati[20]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*21), height-(margineTop+(indice*dati[21]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*22), height-(margineTop+(indice*dati[22]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*23), height-(margineTop+(indice*dati[23]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*24), height-(margineTop+(indice*dati[24]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*25), height-(margineTop+(indice*dati[25]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*26), height-(margineTop+(indice*dati[26]['dato2'])));
  vertex(margineLato+((larghezza/settimane)*27), height-(margineTop+(indice*dati[27]['dato2'])));
  vertex(width-margineLato, height-margineTop);
  endShape(CLOSE);



  fill(97,120,204,170);
  beginShape();
  vertex(margineLato, height-margineTop);
  vertex(margineLato, height-(margineTop+(indice*dati[0]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*1), height-(margineTop+(indice*dati[1]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*2), height-(margineTop+(indice*dati[2]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*3), height-(margineTop+(indice*dati[3]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*4), height-(margineTop+(indice*dati[4]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*5), height-(margineTop+(indice*dati[5]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*6), height-(margineTop+(indice*dati[6]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*7), height-(margineTop+(indice*dati[7]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*8), height-(margineTop+(indice*dati[8]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*9), height-(margineTop+(indice*dati[9]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*10), height-(margineTop+(indice*dati[10]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*11), height-(margineTop+(indice*dati[11]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*12), height-(margineTop+(indice*dati[12]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*13), height-(margineTop+(indice*dati[13]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*14), height-(margineTop+(indice*dati[14]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*15), height-(margineTop+(indice*dati[15]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*16), height-(margineTop+(indice*dati[16]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*17), height-(margineTop+(indice*dati[17]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*18), height-(margineTop+(indice*dati[18]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*19), height-(margineTop+(indice*dati[19]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*20), height-(margineTop+(indice*dati[20]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*21), height-(margineTop+(indice*dati[21]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*22), height-(margineTop+(indice*dati[22]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*23), height-(margineTop+(indice*dati[23]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*24), height-(margineTop+(indice*dati[24]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*25), height-(margineTop+(indice*dati[25]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*26), height-(margineTop+(indice*dati[26]['dato1'])));
  vertex(margineLato+((larghezza/settimane)*27), height-(margineTop+(indice*dati[27]['dato1'])));
  vertex(width-margineLato, height-margineTop);
  endShape(CLOSE);

  pop();


  textAlign(CENTER);
  textStyle(NORMAL);
  for (var i = 0; i <= settimane; i++){
    text(dati[i]['settimana'],margineLato+(scostamento*i),(height-margineTop)+20);
  }



}


//-------------------------------------------------------------------------------------------------------


function gotSpreadsheet(flu) {
  console.log(flu.feed.entry.length); // < debug, numero righe della tabella //stampa sulla consol la lunghezza dei valori inseriti degli imput di colori
  for (var i = 0; i < flu.feed.entry.length; i++) {
    // costruzione dell'oggetto singolo, la riga
    var f = {
                  // dati, nomi delle colonne, i parametri
                  "settimana" : flu.feed.entry[i].gsx$settimana.$t,
                  "dato1": flu.feed.entry[i].gsx$nmortiflu.$t,
                  "dato2": flu.feed.entry[i].gsx$cmortiflu.$t,
                  "dato3": flu.feed.entry[i].gsx$smortiflu.$t
              }

    //trasformo stringa in numeri interi
    f['dato1']=int(f['dato1']);
    f['dato2']=int(f['dato2']);
    f['dato3']=int(f['dato3']);

    if (maxValue<f['dato1']){
      maxValue = f['dato1'];
    }
    if (maxValue<f['dato2']){
      maxValue = f['dato2'];
    }
    if (maxValue<f['dato3']){
      maxValue = f['dato3'];
    }

    console.log(f); // < debug, verifica oggetto 1x1
    console.log(maxValue);
    dati.push(f);

  }
  settimane = flu.feed.entry.length;


}




// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
