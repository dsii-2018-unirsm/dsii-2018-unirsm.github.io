// Claudia Panfili @claudiapnf © 2018 MIT License
// 10 print | Perugia, IT | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM
//
// prototipo:
// generare tanti elementi quante sono le related query della keyword design
// associare ad ogni elemento un url di riferimento
// la velocità con cui si muove ciascun oggetto e il colore indicano il valore di interesse di quella query nel mondo

var datijson;
var valori = [];
//query sta per relatedquery ovvero le ricerche correlate della parola design
var query = [];
var a =0;
let bubbles = [];
var links = ["http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","https://processing.org/reference/","http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","http://www.wordreference.com/it/", "https://p5js.org/reference/#/p5/line", "https://processing.org/reference/","http://www.wordreference.com/it/"];
var geo = ["Pakistan", "Pakistan", "Stati Uniti", "Filippine", "Sri Lanka", "Nepal", "Lebanon", "Myanmar(Burma)", "Pakistan","St. Helena", "India", "Filippine","Sri Lanka", "Ghana", "Mauritius","Pakistan", "Pakistan","Filippine", "Filippine", "Zambia", "Myanmar(Burma)"];





function preload() {
    loadJSON("mv_01.json", gotData, 'json');
}

function gotData(data){
  console.log(data);
  datijson = data;
     for ( var i = 0; i < datijson.default.rankedList[0].rankedKeyword.length; i++ ){
   query[i] = datijson.default.rankedList[0].rankedKeyword[i].query;
   query[i] = bubbles[i];
   valori[i] = datijson.default.rankedList[0].rankedKeyword[i].value;
   }
 }

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (let i = 0; i < 24; i++){
  //coordinate per disegnare un elemento "geo" per ciascuna bubble
  let xg = random(10,80);
  let yg = random(20,80);
  let jg = random(40,80);
  let zg = random(50,80);
  //coordinate per disegnare la bubble
  let x = random(width);
  let y = random(height);
  let r = 20;
  // let u = random(height/4);
  let l = links[i];
  let v = valori[i];
  let red = 0;
  let green = 0;
  let blue = 255;
  red = map(valori[i], 100,0, 255, 0);
  green = map(valori[i], 100,0, 200, 0);
  blue = map(valori[i], 100,0, 0, 210);
  bubbles[i] = new Bubble(xg, yg, jg, zg, x, y, r, l, v, red, green, blue);
  bubbles.push(bubbles[i]);
  frameRate(30);
  }
}

function mousePressed(){
  for (let i = 0; i< bubbles.length; i++){
  bubbles[i].rollover(mouseX,mouseY);
  }
}

function draw() {
  var backg = color(239, 230, 208);
  background(backg);
  let col = color(247, 184, 45);
  fill (col);
  rect (width/2-40, height/2-20, 50,50);
  for (let i = 0; i< bubbles.length; i++){
    for (let i = 0; i< geo.length; i++){
    bubbles[i].show();
    bubbles[i].move();
    }
  }
}

//costruzione dell'oggetto
class Bubble {
constructor(xg, yg, jg, zg, x, y, r, l, v, red, green, blue){
  this.xg = xg;
  this.yg = yg;
  this.jg = jg;
  this.zg = zg;
  this.x = x;
  this.y = y;
  this.r = r;
  // this.u = u; // u di curva :)
  this.brighthness = 0;
  this.l = l;
  this.v = v;
  this.red = red;
  this.green = green;
  this.blue = blue;
}

rollover(px, py) { //px sta per pixel di x
  let d = dist(px, py, this.x,this.y);
  if (d < this.r) {
    for (var i = 0; i< bubbles.length; i++){
    cursor(HAND);
    this.brighthness = 255;
    window.location.href = this.l;
    }
  } else {
    this.brighthness = 0;
  }
}

move() {
  this.x += random(-this.v/100, this.v/100);
  this.y += random(-this.v/100, this.v/100);
}

show(){
  noStroke();
  strokeWeight(40);
  line(this.xg, this.yg, this.jg, this.zg);
  fill(this.red, this.green, this.blue);
  beginShape();
    vertex(this.x, this.y);
    vertex(this.x, this.y+this.r);
    vertex(this.x-this.r, this.y+this.r);
    vertex(this.x-this.r, this.y);
    vertex(this.x, this.y);
    // curveVertex(this.x/10, this.u/10);
    // curveVertex(this.y/10, this.u/10);
    curveVertex(this.u/100, this.x/100);
    curveVertex(this.u/100, this.y/100);

    endShape();
    // // curveVertex(this.x/10, this.u/10);
    // // curveVertex(this.y/10, this.u/10);
    // curveVertex(this.u/100, this.x/100);
    // curveVertex(this.u/100, this.y/100);
    // strokeWeight(5);
    // point(this.x, this.y);
    // strokeWeight(1);
    // beginShape();
    // curveVertex(84, 91);
    // curveVertex(68, 19);
    // curveVertex(21, 17);
    // curveVertex(32, 91);
    // curveVertex(32, 91);
    // endShape();
  }
}
