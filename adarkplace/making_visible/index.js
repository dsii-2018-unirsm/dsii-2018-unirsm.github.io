
//------------------------------CREAZIONE MAPPA DA IMG O URL

var bounds = [[-1200,-1200], [1200,1200]];
var imageURL = 'img/antarctica_3-02.jpg';
// var imageURL1 = 'img/map_base.jpg';
// var imageURL2 = 'img/map_labels.png';
// var imageURLonline = 'https://eoimages.gsfc.nasa.gov/images/imagerecords/78000/78592/antarctica_etm_2000001_lrg.jpg';

var map = L.map('mapid', {
  crs: L.CRS.Simple,
  center: [-550, -188],
  zoom:2,
  maxBounds: bounds,
  maxBoundsViscosity: 1,
  minZoom: -0.7,
  maxZoom: 2,
});

var image = L.imageOverlay(imageURL, bounds).addTo(map);
// var image1 = L.imageOverlay(imageURL1, bounds).addTo(map);
// var image2 = L.imageOverlay(imageURL2, bounds).addTo(map);

//------------------------------MARKER CUSTOM

var campicon = L.icon({
          iconUrl: 'img/marker_camp.png',
          iconSize: [40 , 40],
          tooltipAnchor: [30,0],
});
var boaticon = L.icon({
          iconUrl: 'img/marker_boat.png',
          iconSize: [44 , 44],
          tooltipAnchor: [30,0],
});

//------------------------------LETTURA SPREADSHEET E VARIABILI

// var url = "https://spreadsheets.google.com/feeds/list/1JDSbPNu-fHFAWMpIPzLiX_GG77CxRFYXaYVpT2_Fc-A/od6/public/values?alt=json";
// var markers = [];
var markers2 = [
            [-534, -190, "<p>Framheim</p>78.37.60.S<br>163.40.0.O"],
            [-473, -170, "<p>Depot 1</p>80.00.00.S<br>163.40.00.O"],
            [-425, -155, "<p>Depot 2</p>80.59.00.S<br>163.40.00.O"],
            [-417, -150, "<p>Steershead Crevasses</p>81.10.00.S<br>164.00.00.O"],
            [-377, -140, "<p>Depot 3</p>"],
            [-361, -135, "<p>Discovery</p>"],
            [-330, -124, "<p>83S</p>"],
            [-230, -93, "<p>Betty's Knoll</p>"],
            [-221, -90, "<p>Axel Heiberg Glacier</p>"],
            [-215, -81,	"<p>Axel Heiberg Glacier</p>"],
            [-213, -77,	"<p>Axel Heiberg Glacier ice falls</p>"],
            [-211, -69,	"<p>Butcher's Shop</p>"],
            [-203, -67,	"<p>Plateau journey begins</p>"],
            [-178, -62, "<p>Devil's Glacier</p>"],
            [-151,	-55, "<p>Devil's dance floor<br>AKA Ballroom</p>"],
            [-75,	-37, "<p>Passed Shackleton's Farthest South</p>"],
            [3,	-18, "<p>The Pole</p>"]
          ];
var indice = 1;

//------------------------------PRELOAD & SETUP

// function preload() {
//   loadJSON(url, gotSpreadsheet);
// }
// //
// //
// function setup() {
// }

//------------------------------POPUP

var popup0 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[0][0],markers2[0][1]]).setContent(markers2[0][2]);
var popup1 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[1][0]-20,markers2[1][1]+30]).setContent(markers2[1][2]);
var popup2 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[2][0]-20,markers2[2][1]+30]).setContent(markers2[2][2]);
var popup3 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[3][0]-20,markers2[3][1]+30]).setContent(markers2[3][2]);
var popup4 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[4][0]-20,markers2[4][1]+30]).setContent(markers2[4][2]);
var popup5 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[5][0]-20,markers2[5][1]+30]).setContent(markers2[5][2]);
var popup6 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[6][0]-20,markers2[6][1]+30]).setContent(markers2[6][2]);
var popup7 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[7][0]-20,markers2[7][1]+30]).setContent(markers2[7][2]);
var popup8 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[8][0]-20,markers2[8][1]+30]).setContent(markers2[8][2]);
var popup9 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[9][0]-20,markers2[9][1]+30]).setContent(markers2[9][2]);
var popup10 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[10][0]-20,markers2[10][1]+30]).setContent(markers2[10][2]);
var popup11 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[11][0]-20,markers2[11][1]+30]).setContent(markers2[11][2]);
var popup12 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[12][0]-20,markers2[12][1]+30]).setContent(markers2[12][2]);
var popup13 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[13][0]-20,markers2[13][1]+30]).setContent(markers2[13][2]);
var popup14 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[14][0]-20,markers2[14][1]+30]).setContent(markers2[14][2]);
var popup15 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[15][0]-20,markers2[15][1]+30]).setContent(markers2[15][2]);
var popup16 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[16][0]-20,markers2[16][1]+30]).setContent(markers2[16][2]);

var popupMain = L.popup({ closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([-564, -270]).setContent('<p><b>Welcome to Journey</b></p> Discover the map<br>and try to find all the checkpoint<br>like a true pioneer');

var popupWelcome = new L.FeatureGroup();
popupWelcome.addLayer(popupMain);
map.addLayer(popupMain);
map.on('zoomend', function() {
    if (map.getZoom() <2){
            map.removeLayer(popupMain);
    }
});

//------------------------------LETTURA SPREADSHEET

// function gotSpreadsheet(journey) {
//   for (var i = 0; i < journey.feed.entry.length; i++) {
//     var ma = {
//                   "XXX": journey.feed.entry[i].gsx$x.$t,
//                   "YYY": journey.feed.entry[i].gsx$y.$t,
//                   "Data": journey.feed.entry[i].gsx$data.$t,
//                   "Nome": journey.feed.entry[i].gsx$nome.$t,
//                   // "latitude": journey.feed.entry[i].gsx$latitude.$t
//                   // "longitude": journey.feed.entry[i].gsx$longitude.$t
//                   "barometer8am": journey.feed.entry[i].gsx$b8am.$t,
//                   "barometer2pm": journey.feed.entry[i].gsx$b2pm.$t
//
//               }
//     ma["XXX"] = int(ma["XXX"]);
//     ma["YYY"] = int(ma["YYY"]);
//     ma["barometer8am"] = int(ma["barometer8am"]);
//     ma["barometer2pm"] = int(ma["barometer2pm"]);
//     markers.push(ma);
//   }
// }

//------------------------------DISEGNO MARKER DA ARRAY SPREADSHEET

// L.marker([markers2[0][0], markers2[0][1]], {icon: boaticon}).bindTooltip(markers2[0][2]).addTo(map).on('click', nextmarker);
//
// function nextmarker() {
//   var lat = markers[indice]["XXX"];
//   var lon = markers[indice]["YYY"];
//   var popupText = markers[indice]["Nome"];
//   L.marker([lat, lon], {icon: campicon,}).bindTooltip(popupText, {direction: 'right'}).addTo(map).on('click', nextmarker);
//   indice = indice + 1;
// }

//------------------------------DISEGNO MARKER DA ARRAY MANUALE------OK-------

// L.marker([markers2[0][0], markers2[0][1]], {icon: boaticon}).bindTooltip(markers2[0][2]).addTo(map).on('click', nextmarker);
//
// function nextmarker() {
//   var lon = markers2[indice][1];
//   var lat = markers2[indice][0];
//   var popupText = markers2[indice][2];
//   L.marker([lat, lon], {icon: campicon,}).bindTooltip(popupText, {direction: 'right'}).addTo(map).on('click', nextmarker);
//   indice = indice + 1;
//   if (indice > 2){
//     map.addLayer(popup2);
//   }
//   console.log (indice);
// }

//------------------------------DISEGNO MARKER DA ARRAY MANUALE


// for (var i = 1; i < markers2.legth; i++){
//   var tempLat = markers2[i][0];
//   var tempLong = markers2[i][1];
//   L.marker([tempLat, tempLong], {icon: campicon}).addTo(map).on('mouseover', nextmarker[i]).on('mouseout', nextmarkerclose[i]);
// }

L.marker([markers2[0][0], markers2[0][1]], {icon: boaticon}).addTo(map).on('mouseover', nextmarker0).on('mouseout', nextmarkerclose0);

L.marker([markers2[1][0], markers2[1][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker1).on('mouseout', nextmarkerclose1);
L.marker([markers2[2][0], markers2[2][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker2).on('mouseout', nextmarkerclose2);
L.marker([markers2[3][0], markers2[3][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker3).on('mouseout', nextmarkerclose3);
L.marker([markers2[4][0], markers2[4][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker4).on('mouseout', nextmarkerclose4);
L.marker([markers2[5][0], markers2[5][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker5).on('mouseout', nextmarkerclose5);
L.marker([markers2[6][0], markers2[6][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker6).on('mouseout', nextmarkerclose6);
L.marker([markers2[7][0], markers2[7][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker7).on('mouseout', nextmarkerclose7);
L.marker([markers2[8][0], markers2[8][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker8).on('mouseout', nextmarkerclose8);
L.marker([markers2[9][0], markers2[9][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker9).on('mouseout', nextmarkerclose9);
L.marker([markers2[10][0], markers2[10][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker10).on('mouseout', nextmarkerclose10);
L.marker([markers2[11][0], markers2[11][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker11).on('mouseout', nextmarkerclose11);
L.marker([markers2[12][0], markers2[12][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker12).on('mouseout', nextmarkerclose12);
L.marker([markers2[13][0], markers2[13][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker13).on('mouseout', nextmarkerclose13);
L.marker([markers2[14][0], markers2[14][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker14).on('mouseout', nextmarkerclose14);
L.marker([markers2[15][0], markers2[15][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker15).on('mouseout', nextmarkerclose15);
L.marker([markers2[16][0], markers2[16][1]], {icon: campicon,}).addTo(map).on('mouseover', nextmarker16).on('mouseout', nextmarkerclose16);


//------------------------------FUNZIONI DA MARKER

function nextmarker0() {map.addLayer(popup0);}
function nextmarkerclose0() {map.removeLayer(popup0);}

function nextmarker1() {map.addLayer(popup1);}
function nextmarkerclose1() {map.removeLayer(popup1);}

function nextmarker2() {map.addLayer(popup2);}
function nextmarkerclose2() {map.removeLayer(popup2);}

function nextmarker3() {map.addLayer(popup3);}
function nextmarkerclose3() {map.removeLayer(popup3);}

function nextmarker4() {map.addLayer(popup4);}
function nextmarkerclose4() {map.removeLayer(popup4);}

function nextmarker5() {map.addLayer(popup5);}
function nextmarkerclose5() {map.removeLayer(popup5);}

function nextmarker6() {map.addLayer(popup6);}
function nextmarkerclose6() {map.removeLayer(popup6);}

function nextmarker7() {map.addLayer(popup7);}
function nextmarkerclose7() {map.removeLayer(popup7);}

function nextmarker8() {map.addLayer(popup8);}
function nextmarkerclose8() {map.removeLayer(popup8);}

function nextmarker9() {map.addLayer(popup9);}
function nextmarkerclose9() {map.removeLayer(popup9);}

function nextmarker10() {map.addLayer(popup10);}
function nextmarkerclose10() {map.removeLayer(popup10);}

function nextmarker11() {map.addLayer(popup11);}
function nextmarkerclose11() {map.removeLayer(popup11);}

function nextmarker12() {map.addLayer(popup12);}
function nextmarkerclose12() {map.removeLayer(popup12);}

function nextmarker13() {map.addLayer(popup13);}
function nextmarkerclose13() {map.removeLayer(popup13);}

function nextmarker14() {map.addLayer(popup14);}
function nextmarkerclose14() {map.removeLayer(popup14);}

function nextmarker15() {map.addLayer(popup15);}
function nextmarkerclose15() {map.removeLayer(popup15);}

function nextmarker16() {map.addLayer(popup16);}
function nextmarkerclose16() {map.removeLayer(popup16);}

// function nextmarker2() {
//   L.marker([markers2[2][0], markers2[2][1]], {icon: campicon,}).bindTooltip(markers2[2][2], {direction: 'right'}).addTo(map).on('click', nextmarker3);
//   map.addLayer(popup2);
// }
//
// function nextmarker3() {
//   L.marker([markers2[3][0], markers2[3][1]], {icon: campicon,}).bindTooltip(markers2[3][2], {direction: 'right'}).addTo(map).on('click', nextmarker4);
//   map.removeLayer(popup2);
//   map.addLayer(popup3);
// }
//
// function nextmarker4() {
//   L.marker([markers2[4][0], markers2[4][1]], {icon: campicon,}).bindTooltip(markers2[4][2], {direction: 'right'}).addTo(map).on('click', nextmarker5);
//   map.removeLayer(popup3);
// }

//------------------------------CREAZIONE IMMAGINI OVERLAY

// var imageUrl = 'img/marker_camp.png',
// imageBounds = [[-500, -160], [-490, -150]];
// L.imageOverlay(imageUrl, imageBounds).addTo(map);


//------------------------------AGGIUNTA DI UN ELEMENTO GRAFICO STATICO SU PAGINA

// L.Control.Watermark = L.Control.extend({
//     onAdd: function(map) {
//         var img = L.DomUtil.create('img');
//         img.src = 'img/marker_camp.png';
//         img.style.width = '50px';
//         return img;
//     },
//
//     onRemove: function(map) {
//         // Nothing to do here
//     }
// });
//
// L.control.watermark = function(opts) {
//     return new L.Control.Watermark(opts);
// }
//
// L.control.watermark({ position: 'topright' }).addTo(map);

//------------------------------POPUP DI DEBUG PER COORDINATE

// var popup = L.popup();
// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent(e.latlng.toString())
//         .openOn(map);
//         console.log(e.latlng);
// }
// map.on('click', onMapClick);

//------------------------------LINEA CON MOUSE OVER E POPUP

// L.polyline([
//   [-539, -191],
//   [-473, -170],
//   [-425, -155],
// ],{ weight: 30, color: '#fe57a1', opacity: 0.1,}).bindTooltip('Even polylines can have labels.', { direction: 'auto', sticky: 'true'}).addTo(map);

//------------------------------AREA CON MOUSE OVER E POPUP

// L.polygon([
//   [[-450, 126], [-388, 161], [-308, 115], [-284, 73], [-204, -18], [-266, -74]],
// ],{color: '#fe57a1', stroke:0})
//   .bindTooltip('MultiPolygon\'s have labels as well :)', { direction: 'auto', sticky: 'true'})
//   .addTo(map);
