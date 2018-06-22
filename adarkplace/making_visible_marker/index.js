// Federico Cortesi @adarkplace © 2018 MIT License
// JOURNEY - PROTO MARKER | Ravenna, IT
// Educational purpose, made for DSII2018 lab @UniRSM

//------------------------------DEFINIZIONI VARIABILI

var url = "https://spreadsheets.google.com/feeds/list/1JDSbPNu-fHFAWMpIPzLiX_GG77CxRFYXaYVpT2_Fc-A/od6/public/values?alt=json";
var data = [];
var checkOver = true;
var iconBoat;
var iconCamp;
var iconFlag;
var arrowWind;
var counter = 0;
var windDirection;
var maxHum = 100;
var hum;
var snow, cloud_1, cloud_2, cloud_snow, cloud_sun;
var mappaimg;
var xpos, ypos;
var lerpX, lerpY, lerpWind,lerpHum, lerpTemp;

//------------------------------DEFINIZIONI COORDINATE

var coordinates = [
    [-103,984],
    [-64,817],
    [-25,657],
    [-10,598],
    [0,547],
    [4,528],
    [24,523],
    [28,517],
    [50,506],
    [55,488],
    [122,276],
    [144,210],
    [154,176],
    [176,90],
    [186,73],
    [219,-26],
    [260,-150],
];


function preload(){

  //------------------------------PRELETTURA SPREADSHEET

  loadJSON(url, gotSpreadsheet, 'jsonp');

  //------------------------------ICONE CUSTOM

  iconBoat = loadImage('img/marker_boat.png');
  iconCamp = loadImage('img/marker_camp.png');
  iconFlag = loadImage('img/marker_flag.png');
  arrowWind = loadImage('img/arrow_wind.png');
  snow = loadImage('img/snow.png');
  cloud_1 = loadImage('img/cloud_1.png');
  cloud_2 = loadImage('img/cloud_2.png');
  cloud_sun = loadImage('img/cloud_sun.png');
  cloud_snow = loadImage('img/cloud_snow.png');
  myFont= loadFont('src/FF_DIN_Pro_Medium_Italic.otf');

  //------------------------------MAPPA DI SFONDO

  mappaimg = loadImage('img/antarctica_3-02.png');
}

function setup() {
  pixelDensity(displayDensity());
  createCanvas(windowWidth, windowHeight);
  textFont(myFont);

  //------------------------------LERP E SISTEMA COORDINATE MAPPA DINAMICO X POSIZIONE INIZIALE

  xpos = coordinates[counter][0] + (width/2);
  ypos = coordinates[counter][1] + (height/2);
  lerpX = xpos;
  lerpY = ypos;
  lerpWind = 0;
  lerpHum = 10;
  lerpTemp = color(0, 113, 188);

}

function draw() {

  //------------------------------MOVIMENTO MAPPA

  xpos = coordinates[counter][0] + (width/2);
  ypos = coordinates[counter][1] + (height/2);

  lerpX = lerp (lerpX, xpos, 0.08);
  lerpY = lerp (lerpY, ypos, 0.08);

  push();
  imageMode(CENTER);
  image(mappaimg,lerpX,lerpY);
  pop();

  //------------------------------GRAFICA PULSANTI TONDI SOTTO IL MARKER

  translate( width/2, height/2);
  ellipseMode(RADIUS);

  push();
  noStroke();
  fill(255);
  ellipse(35, 80, 20, 20);
  ellipse(-35, 80, 20, 20);
  pop();

  push();
  noStroke();
  beginShape();
  vertex(55, -10);
  vertex(40, 0);
  vertex(55, 10);
  endShape();
  pop();

  push();
  beginShape();
  vertex(32, 73);
  vertex(40, 80);
  vertex(32, 87);
  endShape();
  beginShape();
  vertex(-32, 73);
  vertex(-40, 80);
  vertex(-32, 87);
  endShape();
  pop();

  //------------------------------DEFINIZIONE ICONA DEL MARKER

  if (counter == 0){
    image(iconFlag,-25,-25,50,50);
  } else if (counter < (data.length-1)){
    image(iconCamp,-25,-25,50,50);
  } else {
    image(iconBoat,-25,-25,50,50);
  }

  //------------------------------DEFINIZIONE VALORI INIZIALI DEL POPUP E REGOLE DI VISUALIZZAZIONE

  press = map (data[counter]['pressione8am'],28,30,0,10);
  if (data[counter]['pressione8am']== 0){
    press = 10;
  }

  hum = map (data[counter]['absoHumidity8am'],0,100,0,10);
  if (data[counter]['absoHumidity8am']== 0){
    hum = 10;
  }

  Rcolor = map (data[counter]['temp8am'], -19, 30, 0, 153);
  Gcolor = map (data[counter]['temp8am'], -19, 30, 57, 198);
  Bcolor = map (data[counter]['temp8am'], -19, 30, 94, 228);
  if (data[counter]['temp8am']== 0){
    Rcolor = 0;
    Gcolor = 113;
    Bcolor = 188;
  }

  if (data[counter]['windDir8am']== 'E'){
    windDirection = PI/2;
  }
  if (data[counter]['windDir8am']== 'W'){
    windDirection = -PI/2;
  }
  if (data[counter]['windDir8am']== 'N'){
    windDirection = 0;
  }
  if (data[counter]['windDir8am']== 'S'){
    windDirection = PI;
  }
  if (data[counter]['windDir8am']== 'SE'){
    windDirection = PI-(PI/4);
  }
  if (data[counter]['windDir8am']== 'SW'){
    windDirection = PI+(PI/4);
  }
  if (data[counter]['windDir8am']== 'NE'){
    windDirection = 0+(PI/4);
  }
  if (data[counter]['windDir8am']== 'NW'){
    windDirection = 0-(PI/4);
  }
  if (data[counter]['windDir8am']== '---'){
    windDirection = 0;
  }

  //------------------------------NOME E DATA

  push();
  rectMode (CORNER, BOTTOM);
  noStroke ();
  if (textWidth(data[counter]['nome']) < 90){
    rect (55,-180,200,207);
  } else if (textWidth(data[counter]['nome']) < 155 ) {
    rect (55,-210,200,237);
  } else {
    rect (55,-240,200,267);
  }
  pop();

  textAlign(LEFT, BOTTOM);

  textSize(22);
  text (data[counter]['nome'],75,-344,180,204);
  textSize(12);
  text (data[counter]['data'],75,-118);

  //------------------------------INDICATORE E VALORE TEMPERATURA

  textAlign(CENTER);

  push();
  text (data[counter]['temp8am']+'°',86,-55);
  noFill();
  ellipse(86, -92, 12, 12);
  tempTemp = color (Rcolor, Gcolor, Bcolor);
  lerpTemp = lerpColor (lerpTemp, tempTemp, 0.1);
  fill (lerpTemp);
  noStroke ();
  ellipse(86, -92, 10, 10);
  pop();

  //------------------------------INDICATORE E VALORE PRESSIONE

  push();
  text (data[counter]['pressione8am'],120,-55);
  noFill();
  ellipse(120, -92, 12, 12);
  noStroke ();
  fill (0,113,188);
  ellipse(120, -92, press, press);
  pop();

  //------------------------------INDICATORE E VALORE UMIDITA'

  push();
  text (data[counter]['absoHumidity8am']+'%',154,-49);
  text (data[counter]['relHumidity8am']+'%',154,-61);
  noFill();
  ellipse(154, -92, 12, 12);
  noStroke ();
  fill (0,113,188);
  lerpHum = lerp (lerpHum, hum, 0.1);
  ellipse(154, -92, lerpHum, lerpHum);
  pop();

  //------------------------------INDICATORE E VALORE NUVOLE

  push();
  translate(0,0);
  if (data[counter]['remarks'] == 'SNOW'){
    image(cloud_snow,75, -36, 22, 22);
    text (data[counter]['clouds8am']+'/10',86,8);
  } else if (counter == 16){
    image(cloud_1,75, -36, 22, 22);
    text ('---',86,8);
  } else if (data[counter]['clouds8am'] > 0, data[counter]['clouds8am'] < 5) {
    image(cloud_1,75, -36, 22, 22);
    text (data[counter]['clouds8am']+'/10',86,8);
  } else if (data[counter]['clouds8am'] >= 4, data[counter]['clouds8am'] <= 10) {
    image(cloud_2,75, -36, 22, 22);
    text (data[counter]['clouds8am']+'/10',86,8);
  } else {
    image(cloud_sun,75, -36, 22, 22);
    text (data[counter]['clouds8am']+'/10',86,8);
  }
  pop();

  //------------------------------INDICATORE E VALORE VENTO

  text (data[counter]['windDir8am'],120,8);
  push();
  translate(120,-25);
  lerpWind = lerp (lerpWind,windDirection, 0.1);
  rotate (lerpWind);
  image(arrowWind,-10, -10, 20, 20);
  pop();

  //------------------------------INDICATORE E VALORE NEVE

  push();
  if (data[counter]['remarks'] == '---'){
    tint(255, 255);
    text ('---',154,8);
  } else if (data[counter]['remarks'] == 'SNOW') {
    tint(255, 255);
    text (data[counter]['remarks'],154,8);
  } else {
    tint(255, 50);
  }
  translate(154,-25);
  image(snow,-10, -10, 20, 20);
  pop();
}

//------------------------------LETTURA SPREADSHEET E TRASCRIZIONE VALORI IN UN ARRAY 2D

function gotSpreadsheet(chart) {
  for (var i = 0; i < chart.feed.entry.length; i++) {
    var c = {
                  "data": chart.feed.entry[i].gsx$data.$t,
                  "nome": chart.feed.entry[i].gsx$nome.$t,

                  "pressione8am": chart.feed.entry[i].gsx$b8am.$t,
                  "pressione2pm": chart.feed.entry[i].gsx$b2pm.$t,
                  "pressione8pm": chart.feed.entry[i].gsx$b8pm.$t,

                  "temp8am": chart.feed.entry[i].gsx$t8am.$t,
                  "temp2pm": chart.feed.entry[i].gsx$t2pm.$t,
                  "temp8pm": chart.feed.entry[i].gsx$t8pm.$t,

                  "absoHumidity8am": chart.feed.entry[i].gsx$ah8am.$t,
                  "absoHumidity2pm": chart.feed.entry[i].gsx$ah2pm.$t,
                  "absoHumidity8pm": chart.feed.entry[i].gsx$ah8pm.$t,

                  "relHumidity8am": chart.feed.entry[i].gsx$rh8am.$t,
                  "relHumidity2pm": chart.feed.entry[i].gsx$rh2pm.$t,
                  "relHumidity8pm": chart.feed.entry[i].gsx$rh8pm.$t,

                  "windDir8am": chart.feed.entry[i].gsx$wd8am.$t,
                  "windDir2pm": chart.feed.entry[i].gsx$wd2pm.$t,
                  "windDir8pm": chart.feed.entry[i].gsx$wd8pm.$t,

                  "windSpeed8am": chart.feed.entry[i].gsx$ws8am.$t,
                  "windSpeed2pm": chart.feed.entry[i].gsx$ws2pm.$t,
                  "windSpeed8pm": chart.feed.entry[i].gsx$ws8pm.$t,

                  "clouds8am": chart.feed.entry[i].gsx$c8am.$t,
                  "clouds2pm": chart.feed.entry[i].gsx$c2pm.$t,
                  "clouds8pm": chart.feed.entry[i].gsx$c8pm.$t,

                  "remarks": chart.feed.entry[i].gsx$remarks.$t,

              }
    c["pressione8am"] = float(c["pressione8am"]);
    c["pressione2pm"] = float(c["pressione2pm"]);
    c["pressione8pm"] = float(c["pressione8pm"]);

    c["temp8am"] = int(c["temp8am"]);
    c["temp2pm"] = int(c["temp2pm"]);
    c["temp8pm"] = int(c["temp8pm"]);

    c["absoHumidity8am"] = int(c["absoHumidity8am"]);
    c["absoHumidity2pm"] = int(c["absoHumidity2pm"]);
    c["absoHumidity8pm"] = int(c["absoHumidity8pm"]);

    c["relHumidity8am"] = int(c["relHumidity8am"]);
    c["relHumidity2pm"] = int(c["relHumidity2pm"]);
    c["relHumidity8pm"] = int(c["relHumidity8pm"]);

    c["windSpeed8am"] = int(c["windSpeed8am"]);
    c["windSpeed2pm"] = int(c["windSpeed2pm"]);
    c["windSpeed8pm"] = int(c["windSpeed8pm"]);

    c["clouds8am"] = int(c["clouds8am"]);
    c["clouds2pm"] = int(c["clouds2pm"]);
    c["clouds8pm"] = int(c["clouds8pm"]);
    data.push(c);

  }
  counter = data.length-1;

}

//------------------------------DEFINIZIONE POSIZIONE MOUSE PER CLICK SULLE FRECCE PER CAMBIO MARKER

function mouseClicked() {
  var dDX = dist(mouseX, mouseY, width/2+35, height/2+80);
  var dSX = dist(mouseX, mouseY, width/2-35, height/2+80);
  if (dDX < 20) {
    if (counter < data.length){
      if (counter > 0){
        counter = counter - 1;
      }
    }
  }
  if (dSX < 20) {
    if (counter >= 0 ){
      if (counter < data.length-1){
        counter = counter + 1;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
