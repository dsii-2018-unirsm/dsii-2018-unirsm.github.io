// Riccardo Frignani @erMaijettaro © 2017 MIT License
// P5js retrieve data from Google Spreadsheets/JSON & make OOP | San Marino, SxM | 4.2018
// Educational purpose, made for DSII2017 lab @UniRSM

// P5js gdoc example inspired on Gist https://gist.github.com/claytical/6a929f14964c867e07d8 by @claytical

var url = "https://spreadsheets.google.com/feeds/list/1BGZTkZMf7C6qU0fXkFbZh1ogeN9-176WSpj3sWKkNII/od6/public/values?alt=json";
var ogg = [];


function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  loadJSON(url, gotSpreadsheet);
  rectMode(CORNER);
  background(240);
  textFont('Helvetica');
}








function draw() {





stroke(200);
background(240);




strokeWeight(1);
//griglia
for (var i=0; i<220; i=i+10) {
  line(100,windowHeight/3+i,windowWidth-50,windowHeight/3+i);
 }



strokeWeight(2);
 for (var i=50; i<220; i=i+50) {
   line(100,windowHeight/3+i,windowWidth-50,windowHeight/3+i);
  }




  noStroke();

textAlign(CENTER);
textSize(20);
fill(150);
text("0",windowWidth/30,windowHeight/3);

text("50",windowWidth/30,windowHeight/3+50);

text("100",windowWidth/30,windowHeight/3+100);

text("150",windowWidth/30,windowHeight/3+150);

text("200",windowWidth/30,windowHeight/3+200);




textAlign(LEFT);





//scritteB
fill(255,0,0);
text("Tipo B", windowWidth/2+200,windowHeight/3-30);
//scritteA
fill(0,255,0);
text("Tipo A", windowWidth/2-200,windowHeight/3-30);

//titolo
fill(0);
textSize(30);
text("Influenza: campioni positivi 2015/16", 400, 50);
//sottotitolo
fill(0);
textSize(20);
text("Il grafico si basa su dati certificati dal Ministero della Salute italiano e raccolti, dal Centro Nazionale OMS per l'influenza dell'Istituto Superiore di Sanità, durante la sorveglianza virologica della stagione 2015/16. Settimana per settimana vengono confrontati i campioni positivi dei ceppi di tipo A e di tipo B.", 400, 90, 1100,500);

//menù
fill(0);
textSize(20);
text("settimana", 50, windowHeight-200);
textSize(20);


var d=28;
var dd=windowWidth/45

text("41", windowWidth/d-dd, windowHeight-100);
text("42", windowWidth/d*2-dd, windowHeight-100);
text("43", windowWidth/d*3-dd, windowHeight-100);
text("44", windowWidth/d*4-dd, windowHeight-100);
text("45", windowWidth/d*5-dd, windowHeight-100);
text("46", windowWidth/d*6-dd, windowHeight-100);
text("47", windowWidth/d*7-dd, windowHeight-100);
text("48", windowWidth/d*8-dd, windowHeight-100);
text("49", windowWidth/d*9-dd, windowHeight-100);
text("50", windowWidth/d*10-dd, windowHeight-100);
text("51", windowWidth/d*11-dd, windowHeight-100);
text("52", windowWidth/d*12-dd, windowHeight-100);
text("53", windowWidth/d*13-dd, windowHeight-100);
text("1", windowWidth/d*14-dd, windowHeight-100);
text("2", windowWidth/d*15-dd, windowHeight-100); //13
text("3", windowWidth/d*16-dd, windowHeight-100);
text("4", windowWidth/d*17-dd, windowHeight-100);
text("5", windowWidth/d*18-dd, windowHeight-100);
text("6", windowWidth/d*19-dd, windowHeight-100);
text("7", windowWidth/d*20-dd, windowHeight-100);
text("8", windowWidth/d*21-dd, windowHeight-100);
text("9", windowWidth/d*22-dd, windowHeight-100);
text("10", windowWidth/d*23-dd, windowHeight-100);//21
text("11", windowWidth/d*24-dd, windowHeight-100);
text("12", windowWidth/d*25-dd, windowHeight-100);
text("13", windowWidth/d*26-dd, windowHeight-100);
text("14", windowWidth/d*27-dd, windowHeight-100);
text("15", windowWidth/d*28-dd, windowHeight-100);
//mi fa vedere tutti i dati
/*for (var i=0; i<ogg.length; i++) {
   ogg[i].mostra();
 }

 function keyTyped() {
   if (value === 0) {
     for (var i=0; i<ogg.length; i++) {
        ogg[18].mostra();
      }
   } else {
     for (var i=0; i<ogg.length; i++) {
        ogg[i].mostra();
      }
   }
 }*/




//se il mouseY è più piccolo di un tot fa vedere tutto senò ti fa vedere settimana per settimana i 2 grafici a confronto
for (var i=0; i<ogg.length; i++) {
  if (mouseY>windowHeight/5*4){
var x2 = ceil(map(mouseX, 0, width, 0, 28, true));
ogg[x2].mostra();}
else{ogg[i].mostra();}
}


/*
//debug
var x1 = ceil(map(mouseX, 0, width, 0, 28, true));
textSize(20);
text(x1, mouseX, mouseY);
textSize(20);*/




var ddd=windowWidth/55
var x3 = ceil(map(mouseX, 0, width, 0, 28, true));
  if (mouseY>windowHeight/5*4){
fill('rgba(0,0,0, 0.25)');
ellipse(windowWidth/28*x3-ddd,windowHeight-105, 50,50 );}
else{
  noFill();
  ellipse(windowWidth/28*x3-ddd,windowHeight-105, 50,50 );} 



}  //gli ho provato a dire che se premo 'a' fammi diventare i=18 ma non funziona per come l'ho fatto io







//va su google a pescare dati
function gotSpreadsheet(tipoa) {
//console.log(tipoa.feed.entry.length); //debug




for (var i = 0; i < tipoa.feed.entry.length; i++) {
  var a = {
    "tipoa": tipoa.feed.entry[i].gsx$tipoa.$t,
      "tipob": tipoa.feed.entry[i].gsx$tipob.$t,
  }




//  console.log(a); //debug
  ogg.push(new Oggetto(i, a.tipoa, a.tipob));
}

}





function Oggetto(_id, _tipoa, _tipob) {





this.id = Number(_id);
this.tipoa = _tipoa;
this.tipob = _tipob;






this.mostra = function() {



  if (mouseY>windowHeight/5*4){
fill (0,255,0);
text (this.tipoa, windowWidth/2-200,windowHeight/5*3);
fill (255,0,0);
text (this.tipob, windowWidth/2+200,windowHeight/5*3);}
else{
noFill();
  text (this.tipoa, windowWidth/2-200,windowHeight/5*3);

  text (this.tipob, windowWidth/2+200,windowHeight/5*3);
}






  if (mouseY>windowHeight/5*4){
  fill (255,0,0);
  rect (windowWidth/2+200, windowHeight/3, 50, this.tipob);
  fill (0,255,0);
  rect (windowWidth/2-200, windowHeight/3, 50, this.tipoa);}

else {
  fill (255,0,0);
  rect (windowWidth/2+200+this.id*10, windowHeight/3, 10, this.tipob);
  fill (0,255,0);
  rect (windowWidth/2-200+this.id*10, windowHeight/3, 10, this.tipoa);

}
}
}










function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
