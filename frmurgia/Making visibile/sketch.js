/*
<><><><><><><><><><><><><><><><><>
----------------------------------

by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

----------------------------------
<><><><><><><><><><><><><><><><><>
*/


p5.disableFriendlyErrors = true;

var filtrati=[];
let myMap;
let myMap1;
var date = [];
var time = [];
var giorni = [];
var delta = 0;
let tripsCoordinates;
let allCoordinates = [];
var coordinate = 0;


const key = 'pk.eyJ1Ijoic2d0bXVyZ2lhIiwiYSI6ImNpeTFicWJpMDAwOGIzM3Bpanh3OGZvYTIifQ.hgbn3Hf9_BD-hO7p2TOH7A'
// Options per la mappa
const options = {

  lng: 12.447716,
  lat: 43.932500499999996,
  zoom: 16,
  studio: true,
  scrollZoom: false,


  style: 'mapbox://styles/sgtmurgia/cjhup6ps60ziv2sk251dck4nt', //mappa bianca
  // mapbox:'//styles/sgtmurgia/cjifmn1nu28i62qqp0tvkf5d7',
  interactive: false,
  scrollWheelZoom: 'disable'
};


const mappa = new Mappa('Mapbox', key);
//preload delle posizioni scaricate da google takeout https://takeout.google.com/settings/takeout
function preload() {
  posizioni = loadJSON('js/posizioni.json');
  console.log("preload OK!")


}

var ordinamento = [];


function finestra() {
  var canvas1 = createCanvas(500, 500);
  //  canvas1.background(255),
  canvas1.position(200, 200)
  canvas1.class('finestra');
}

function setup() {
  trip();
  filtro();
  var canvas = createCanvas(500, 500);
  myMap = mappa.tileMap(options);
  myMap1 = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap1.overlay(canvas);

  tripsCoordinates = (giorni);
  tripsCoordinates.forEach(function(trip) {
    trip.forEach(function(coordinate) {
      allCoordinates = giorni
    })
  });
}


var a = -1;

function trip() {
  if (posizioni.locations[1].accuracy > 1000) {
    for (var i = 0; i < posizioni.locations.length; i++) {
      date[i] = new Date(parseInt(posizioni.locations[i].timestampMs));
      time[i] = moment(date[i]).format("DD-MM-YYYY");
      if (((moment(date[i]).format("YYYY"))) == 2018 && ((moment(date[i]).format("MM"))) == 04&& ((moment(date[i]).format("DD"))) == 04) {
        // if ((posizioni.locations[i].accuracy > 150) && ((moment(date[i]).format("MM"))) == 05) {

        a++
        giorni[a] = [
          (posizioni.locations[i].longitudeE7 * 0.0000001),
          (posizioni.locations[i].latitudeE7 * 0.0000001)
        ]
      }
    }
  }
  console.log("giorni OK")
}
// fine funzione trip

function filtro() {
  for (i=0;i<giorni.length;i++){
    if (giorni[i][0]==12.447597499999999&&giorni[i][1]==43.9324084){

      }

    else { console.log("casa") ;
    filtrati[i]=giorni[i] }
}

}

function draw() {

}


function scoperta() {
  for (var i = 0; i < allCoordinates.length; i++) {
    point(allCoordinates[i][1], allCoordinates[i][0])
  }
  beginShape();
  //fill(255,0,0,10);
  for (var i = 0; i < allCoordinates.length; i++) {
    stroke(0, 0, 0, 80);
    noFill();
    var pos = myMap.latLngToPixel(allCoordinates[i][1], allCoordinates[i][0])
    curveVertex(pos.x + random(15), pos.y + random(15));
  }
  endShape();
}


function drawPoints() {
  clear();
  stroke(183, 48, 45);
  fill(255, 255, 255, 10);
  for (var i = 0; i < allCoordinates.length; i++) {
    var pos = myMap1.latLngToPixel(allCoordinates[i][1], allCoordinates[i][0])
    ellipse(pos.x, pos.y, 5, 5);
  }
}

function cancella() {
  clear();
}
