// Claudia Panfili @claudiapnf © 2018 MIT License
// Saltwater treemap | Perugia, IT | June.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This example is using the Treemap charting library
// from: https://github.com/imranghory/treemap-squared/


var nodes;
var datijson;
var valori = [];
//query sta per relatedquery ovvero le ricerche correlate della parola design
var query = [];
var a =0;
var dataset = [];
var labels = [];
//array di valori 1-0 per definire le sfumature
var lerpArray = [];

function preload() {
    loadJSON("index.json", gotData, 'json');
}

function gotData(data){
  console.log(data);
  datijson = data;
     for ( var i = 0; i < datijson.default.rankedList[0].rankedKeyword.length; i++ ){
   query[i] = datijson.default.rankedList[0].rankedKeyword[i].query;
   // query[i] = bubbles[i];
   valori[i] = datijson.default.rankedList[0].rankedKeyword[i].value;
   }
   for(var i = 0;i < query.length; i++){
     labels.push (query[i]);
    dataset.push (valori[i]*1000);
   }
   for(var i = 0;i < query.length; i++){
     //1 indica il primo colore del gradiente // 0 è l'ultimo colore del gradiente
     remap = map(valori[i], valori[0], valori[valori.length - 1], 1, 0);
     lerpArray.push(remap);

   }
 }

function setup() {
  createCanvas(windowWidth,windowHeight);
  // background(0);
  // Generate the nodes
  nodes = Treemap.generate(dataset, width, height);

  // Recursive drawing function
  drawTreemap(nodes, labels, []);
}

// some utility functions
function isArray(arr) {
  return arr && arr.constructor === Array;
}

function drawTreemap(boxes, labels, index) {
  var newindex; // the index to the next box to draw
  var label; // label of current box


  // If it's an array, recursively call this function
  if(isArray(boxes[0][0])) {
    for(var i=0; i<boxes.length; i++) {
      newindex = index.slice();
      newindex.push(i);
      drawTreemap(boxes[i],labels, newindex);
    }
  } else {

    // Now we have actual elements
    for(var i=0; i<boxes.length; i++) {

      // Push the number of this element into an array
      newindex = index.slice();
      newindex.push(i);

      // figure out the matching label using the index
      label = labels;
      for(var j=0; j<newindex.length; j++){
        label = label[newindex[j]];
      }

      // Get the coordinates of the box
      var x1=boxes[i][0], y1=boxes[i][1], x2=boxes[i][2], y2=boxes[i][3];

      // draw box
      to = color('#23009F');
      from = color('#C2022A');
      colore = lerpColor(from,to,lerpArray[i]);
      fill(colore);
      noStroke();
      rect(x1, y1, x2-x1, y2-y1);

      // Draw the box
      fill(255);
      textFont('Helvetica', [13]);
      textAlign(CENTER);
      text(label,(x1 + x2) / 2, (y1 + y2) / 2);
    }
  }
}
