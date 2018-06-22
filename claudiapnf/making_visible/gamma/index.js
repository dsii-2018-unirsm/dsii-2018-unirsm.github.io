// Claudia Panfili @claudiapnf © 2018 MIT License
// Saltwater | Perugia, IT | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM
//
// Daniele Tabellini @fupete © 2018 MIT License
// Random images Unspash / test | Firenze, IT | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

//prototipo:
//ad ogni query è associata un'immagine presa dal sito di fotografie professionali unsplash.com
//La ricerca delle fotografie avviene in base alla ricerca di parole chiave sul sito unsplash.com (es:logo design)
//Le immagini sono disposte su una griglia composta da 5 righe e 5 colonne, con valore decrescente da sinistra verso destra
//muovendo il mouse sulla griglia si evidenziano le immagini e compare il nome della rispettiva query
//cliccando sulla griglia, le immagini cambiano casualmente ma continuano ad essere inerenti alla parola chiave
var img = [];
var imgsResolution = "750x500";
var query = [];
var valori = [];
var virgola = [];
var parola = "";
var incrementale;
var myFont;

function preload() {
    loadJSON("index.json", gotData, 'json');
     myFont = loadFont('Inconsolata-Bold.ttf');
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
  createCanvas(windowWidth, windowHeight);
  background(0);
  // se la lettera è uguale a uno spazio, metti la vorgola altrimenti tieni la lettera
  // virgola è l'array dove vanno le query con la virgola anziché con gli spazi
  // in questo modo, unsplash legge correttamente le parole chiave dell'array
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
    img[i] = carica(virgola[i]); // parole separate da virgola
  }
  textSize(16);
  textAlign(CENTER);
  textFont(myFont);
}

function carica(keywords) {
  var url = "https://source.unsplash.com/" + imgsResolution + "/?" + keywords + "," + random(200); // un random per caricarne sempre una nuova anche sugli stessi temi
  var img_Loading = loadImage(url);
  return img_Loading;
}

function draw() {
  //disponi le immagini in una griglia di immagini 5x5
  incrementale = 0;
  for (var i=0; i < img.length/5; i++) {
    for (var j=0; j < img.length/5; j++) {
      image(img[j + incrementale], j*(width/5), i*(height/5), [(img[i].width/img[i].height)*height/3.4], height/3.4); //3.4 indica il rapporto width x height delle immagini
  }
  incrementale = incrementale + 5;
}

//for per ogni riga della griglia
//ogni volta che il mouse va su un'immagine
//compare un rettangolo in opacità
//compare il nome della query cui è associata l'immagine
for (var i = 0; i < 5; i++){
  if (mouseX < width/5*(i + 1) && mouseX > width/5*i && mouseY < height/5) {

    //disegna un rettangolo sopra l'immagine
    noStroke();
    fill(0, 120);
    rect ((width/5)*(i - 0), height/5*1 - height/5,  width/5*(i - (-1)) - width/5*(i - 0), height/5*2 - height/10*2);
    //scrivi il nome della query
    fill(255);
    text(query[i], (width/5)*i + width/10, height/5*1 - height/10);
  }
}


for (var i = 5; i < 10; i++){
  if (mouseX < width/5*(i - 4) && mouseX > width/5*(i - 5) && mouseY < height/5*2 && mouseY > height/5) {
    noStroke();
    fill(0, 120);
    rect ((width/5)*(i - 5), height/5*2 - height/5,  width/5*(i - 4) - width/5*(i - 5), height/5*2 - height/10*2);
    fill(255);
    text(query[i], (width/5)*(i - 5) + width/10, height/5*2 - height/10);
  }
}


for (var i = 10; i < 15; i++){
  if (mouseX < width/5*(i - 9) && mouseX > width/5*(i - 10) && mouseY < height/5*3 && mouseY > height/5*2) {
    noStroke();
    fill(0, 120);
    rect ((width/5)*(i - 9), height/5*3 - height/5,  width/5*(i - 10) - width/5*(i - 9), height/5*2 - height/10*2);
    fill(255);
    text(query[i], (width/5)*(i - 10) + width/10, height/5*3 - height/10);
  }
}


for (var i = 15; i < 20; i++){
  if (mouseX < width/5*(i - 14) && mouseX > width/5*(i - 15) && mouseY < height/5*4 && mouseY > height/5*3) {
    noStroke();
    fill(0, 120);
    rect ((width/5)*(i - 14), height/5*4 - height/5,  width/5*(i - 15) - width/5*(i - 14), height/5*2 - height/10*2);
    fill(255);
    text(query[i], (width/5)*(i - 15) + width/10, height/5*4 - height/10);
  }
}

for (var i = 20; i < 25; i++){
  if (mouseX < width/5*(i - 19) && mouseX > width/5*(i - 20) && mouseY < height/5*5 && mouseY > height/5*4) {

    noStroke();
    fill(0, 120);
    rect ((width/5)*(i - 19), height/5*5 - height/5,  width/5*(i - 20) - width/5*(i - 19), height/5*2 - height/10*2);
    fill(255);
    text(query[i], (width/5)*(i - 20) + width/10, height/5*5 - height/10);
  }
 }
}

// se premi ricarica un nuovo cluster di immagini
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
