// Federico Cortesi @adarkplace © 2018 MIT License
// JOURNEY - PROTO MAP | Ravenna, IT
// Educational purpose, made for DSII2018 lab @UniRSM

//------------------------------CREAZIONE MAPPA DA IMG

var bounds = [[-1200,-1200], [1200,1200]];
var imageURL = 'img/antarctica_3-02.jpg';

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

//------------------------------MARKER CUSTOM

var campicon = L.icon({
          iconUrl: 'img/marker_camp.png',
          iconSize: [40 , 40],
});
var boaticon = L.icon({
          iconUrl: 'img/marker_boat.png',
          iconSize: [44 , 44],
});

var poleicon = L.icon({
          iconUrl: 'img/marker_flag_2.png',
          iconSize: [90 , 90],
});

//------------------------------ARRAY POSIZIONI MARKER E INDICE

var markers2 = [
            [-534, -190, "<p><b>Framheim</b></p>78.37.60.S<br>163.40.0.O"],
            [-473, -170, "<p><b>Depot 1</b></p>80.00.00.S<br>163.40.00.O"],
            [-425, -155, "<p><b>Depot 2</b></p>80.59.00.S<br>163.40.00.O"],
            [-417, -150, "<p><b>Steershead Crevasses</b></p>81.10.00.S<br>164.00.00.O"],
            [-377, -140, "<p><b>Depot 3</b></p>"],
            [-361, -135, "<p><b>Discovery</b></p>"],
            [-330, -124, "<p><b>83S</b></p>"],
            [-230, -93, "<p><b>Betty's Knoll</b></p>"],
            [-221, -90, "<p><b>Axel Heiberg Glacier</b></p>"],
            [-215, -81,	"<p><b>Axel Heiberg Glacier</b></p>"],
            [-213, -77,	"<p><b>Axel Heiberg Glacier ice falls</b></p>"],
            [-211, -69,	"<p><b>Butcher's Shop</b></p>"],
            [-203, -67,	"<p><b>Plateau journey begins</b></p>"],
            [-178, -62, "<p><b>Devil's Glacier</b></p>"],
            [-151,	-55, "<p><b>Devil's dance floor</b><br>AKA Ballroom</p>"],
            [-75,	-37, "<p><b>Passed Shackleton's Farthest South</b></p>"],
            [3,	-18, "<p><b>The Pole</b></p>"]
          ];
var indice = 1;

//------------------------------POPUP

var popupcontent1 = "<img src='img/marker1.jpg' width='139px'/>";
var popupcontent2 = "<img src='img/marker2.jpg' width='139px'/>";
var popupcontent3 = "<img src='img/marker3.jpg' width='139px'/>";
var popupcontent4 = "<img src='img/marker4.jpg' width='139px'/>";
var popupcontent5 = "<img src='img/marker5.jpg' width='139px'/>";
var popupcontent6 = "<img src='img/marker6.jpg' width='139px'/>";
var popupcontent7 = "<img src='img/marker7.jpg' width='139px'/>";
var popupcontent8 = "<img src='img/marker8.jpg' width='139px'/>";
var popupcontent9 = "<img src='img/marker9.jpg' width='139px'/>";
var popupcontent10 = "<img src='img/marker10.jpg' width='139px'/>";
var popupcontent11 = "<img src='img/marker11.jpg' width='139px'/>";
var popupcontent12 = "<img src='img/marker12.jpg' width='139px'/>";
var popupcontent13 = "<img src='img/marker13.jpg' width='139px'/>";
var popupcontent14 = "<img src='img/marker14.jpg' width='139px'/>";
var popupcontent15 = "<img src='img/marker15.jpg' width='139px'/>";
var popupcontent16 = "<img src='img/marker16.jpg' width='139px'/>";
var popupcontent17 = "<img src='img/marker17.jpg' width='139px'/>";


var popup0 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[0][0],markers2[0][1]]);
var popup1 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[1][0]-12,markers2[1][1]+30]).setContent(popupcontent1);
var popup2 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[2][0]-12,markers2[2][1]+30]).setContent(popupcontent2);
var popup3 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[3][0]-12,markers2[3][1]+30]).setContent(popupcontent3);
var popup4 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[4][0]-12,markers2[4][1]+30]).setContent(popupcontent4);
var popup5 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[5][0]-12,markers2[5][1]+30]).setContent(popupcontent5);
var popup6 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[6][0]-12,markers2[6][1]+30]).setContent(popupcontent6);
var popup7 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[7][0]-12,markers2[7][1]+30]).setContent(popupcontent7);
var popup8 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[8][0]-12,markers2[8][1]+30]).setContent(popupcontent8);
var popup9 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[9][0]-12,markers2[9][1]+30]).setContent(popupcontent9);
var popup10 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[10][0]-12,markers2[10][1]+30]).setContent(popupcontent10);
var popup11 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[11][0]-12,markers2[11][1]+30]).setContent(popupcontent11);
var popup12 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[12][0]-12,markers2[12][1]+30]).setContent(popupcontent12);
var popup13 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[13][0]-12,markers2[13][1]+30]).setContent(popupcontent13);
var popup14 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[14][0]-12,markers2[14][1]+30]).setContent(popupcontent14);
var popup15 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[15][0]-12,markers2[15][1]+30]).setContent(popupcontent15);
var popup16 = L.popup({maxWidth: 100, closeButton: false, autoClose: true, closeOnClick:true}).setLatLng([markers2[16][0]-12,markers2[16][1]+30]).setContent(popupcontent16);

//------------------------------DISEGNO MARKER DA ARRAY MANUALE

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
L.marker([markers2[16][0], markers2[16][1]], {icon: poleicon,}).addTo(map).on('mouseover', nextmarker16).on('mouseout', nextmarkerclose16);

//------------------------------TIMELINE A DESTRA

document.getElementById('navigation').onclick = function(e) {
    e.preventDefault();
    var pos = e.target.getAttribute('data-position');
    if (pos) {
        var loc = pos.split(',');
        map.setView(loc, 11);
    }
}

//------------------------------FUNZIONI DA MARKER

function nextmarker0(){
  map.addLayer(popup0);
}
function nextmarkerclose0(){
  map.removeLayer(popup0);
}

function nextmarker1(){
  map.addLayer(popup1);
}
function nextmarkerclose1(){
  map.removeLayer(popup1);
}

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

//------------------------------LINEA TRATTEGGIATA DEL PERCORSO

L.polyline([
[markers2[0][0], markers2[0][1]],
[markers2[1][0], markers2[1][1]],
[markers2[2][0], markers2[2][1]],
[markers2[3][0], markers2[3][1]],
[markers2[4][0], markers2[4][1]],
[markers2[5][0], markers2[5][1]],
[markers2[6][0], markers2[6][1]],
[markers2[7][0], markers2[7][1]],
[markers2[8][0], markers2[8][1]],
[markers2[9][0], markers2[9][1]],
[markers2[10][0], markers2[10][1]],
[markers2[11][0], markers2[11][1]],
[markers2[12][0], markers2[12][1]],
[markers2[13][0], markers2[13][1]],
[markers2[14][0], markers2[14][1]],
[markers2[15][0], markers2[15][1]],
[markers2[16][0], markers2[16][1]]
],{ weight: 2, color: 'black', opacity: 0.4,dashArray: '4,8',lineJoin: 'round'}).addTo(map);
