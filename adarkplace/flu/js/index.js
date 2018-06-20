// Federico Cortesi @adarkplace © 2018 MIT License
// FLU | Ravenna, IT
// Educational purpose, made for DSII2018 lab @UniRSM

var counter = 0;
var crossRotation = true;
var rot = 0;
var maxMalati = 0;

var url = "https://spreadsheets.google.com/feeds/list/1CR86l9J8QeS28C27IvnzCShiwfr4s9IujoF8gU0B-XQ/od6/public/values?alt=json";
var data = [];

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
  rectMode(CENTER);
  noStroke();
  loadJSON(url, gotSpreadsheet, 'jsonp');
}


function draw() {
  background(240);
  textAlign(RIGHT);
  textStyle(BOLD);
  textSize(height+ ((height/100)*40));
  fill(255);
  text(counter, width, height-5);

  cross();
  if (crossRotation == false){
    showMore ();
  } else {
    showLess();
  }
}

function gotSpreadsheet(chart) {
  for (var i = 0; i < chart.feed.entry.length; i++) {
    var c = {
                  "anno": chart.feed.entry[i].gsx$anno.$t,
                  "malati": chart.feed.entry[i].gsx$malati.$t,
                  "morti": chart.feed.entry[i].gsx$morti.$t,
              }
    data.push(c);
    if (data[i]['morti']> maxMalati) maxMalati= data[i]['morti'];
  }
  console.log(maxMalati);
}


function cross(){
  rectMode(CENTER);
  fill(255,000,000);
  if (crossRotation == true){
    push ();
    translate((width/2), (height/2));
    rot = lerp(rot,-PI/2, 0.1);
    rotate(rot);
    rect(0 ,0 ,40, 120);
    rect(0 ,0 ,120, 40);
    pop ();
  } else {
    push ();
    translate((width/2), (height/2));
    rot = lerp(rot,PI/4, 0.1);
    rotate(rot);
    rect(0 ,0 ,40, 120);
    rect(0 ,0 ,120, 40);
    pop ();
  }
}

function showMore(){
  textAlign(LEFT);
  fill(50);
  textSize(12);
  var disp = -92;
  var startY = (width/5);

  fill(0);
  text('anno', startY-100, (height/2)-108);
  fill(130);
  text('malati', startY-50, (height/2)-108);
  fill(255,000,000);
  text('morti', startY, (height/2)-108);

  for (var i = 0; i < data.length; i++) {
    fill(0);
    text(data[i]['anno'], startY-100, (height/2)+disp);
    fill(130);
    text(data[i]['malati'], startY-50, (height/2)+disp);
    fill(255,0,0);
    text(data[i]['morti'], startY, (height/2)+disp);
    push();
    rectMode(CORNER);
    var barraMax = width - (startY+50)-startY;
    var barra = map(data[i]['morti'], 0, maxMalati, startY+50, barraMax);
    rect(startY+50, (height/2)+disp-5, barra, 2);
    pop();
    disp = disp + 16;
  }
}

function showLess(){
  textAlign(LEFT);
  fill(50);
  textSize(12);
  text('Da quando sei entrato nella pagina\nquesto è il numero di morti\nper influenza in Italia.\n\nPremi + per scoprire', (width/4)-100, (height/2)-20);

}

function mouseClicked() {
  var d = dist(mouseX, mouseY, width/2, height/2);
  if (d < 60) {
      if (crossRotation == true) {
        crossRotation = false;
      } else {
        crossRotation = true;
      }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
