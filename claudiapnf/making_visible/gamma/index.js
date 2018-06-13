// Daniele Tabellini @fupete © 2017 MIT License
// Random images Unspash / test | Firenze, IT | June.2018
// Educational purpose, made for DSII2018 lab @UniRSM

var img = [];
var imgsResolution = "750x500";
var query = [];
var valori = [];
var virgola = [];
var parola = "";

function preload() {
    loadJSON("mv_01.json", gotData, 'json');
}

function gotData(data){
  console.log(data);
  datijson = data;
     for ( var i = 0; i < datijson.default.rankedList[0].rankedKeyword.length; i++ ){
   query[i] = datijson.default.rankedList[0].rankedKeyword[i].query;
   valori[i] = datijson.default.rankedList[0].rankedKeyword[i].value;
   }
 }


function setup() {
// se la lettera è uguale a uno spazio, metti la vorgola altrimenti tieni la lettera
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (var i = 0; i< query.length; i++){
  parola = "";
    for (var j = 0; j < query[i].length; j++){
      if(query[i][j] == " "){
        console.log(query[i][j]);
      parola = parola + ",";
    } else {
      parola = parola + query[i][j];
    }
  }
virgola.push(parola);
}

  for (var i=0; i < virgola.length; i++) {
    img[i] = carica(virgola[i]); // separate da virgola
  }

} // setup()

function carica(keywords) {
  var url = "https://source.unsplash.com/" + imgsResolution + "/?" + keywords + "," + random(200); // < un random per caricarne sempre una nuova anche sugli stessi temi
  var img_Loading = loadImage(url);
  return img_Loading;
}

function draw() {
  for (var i=0; i < img.length; i++) {
    image(img[i], i*(width/query.length), 0, (img[i].width/img[i].height)*height, height);
  }
} // draw()

// se premi ricarica un nuovo cluster di immagini...
function mousePressed() {
  for (var i=0; i < query.length; i++) {
    img[i] = carica(virgola[i]);
  }
  return false;
}

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
