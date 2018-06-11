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
// let bubbles = [];
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
   // query[i] = bubbles[i];
   valori[i] = datijson.default.rankedList[0].rankedKeyword[i].value;
   }
 }

function setup() {
  createCanvas(windowWidth,windowHeight);

  // Some dummy dataset
  var dataset = [];
  var labels = [];
  var dataset = [ 10000, 10000, 5600, 4800, 4000, 3700,3200, 3000, 2900, 2800, 2700, 2600, 2600, 2600, 2300, 2100, 2100, 2000, 2000, 2000, 1700, 1600, 1500, 1400, 1300];
  var labels = ["mehndi design", "mehndi", "interior design", "house design", "home design", "blouse design", "porsche design", "logo design", 	"kurta design", "web design",	"suit design", 	"dress design", 	"mehandi design", "mehandi", 	"room design", "wall design", "neck design", "graphic design", 	"kitchen design", 	"kurti design", "mehndi design 2018", 	"shirt design", 	"tattoo design", 	"art design", 	"card design"];

  // The dataset can also be nested
  // var dataset = [[60000, 60000, 40000], [30000, 20000, 10000]];
  // var labels = [["Paris", "London", "New York"], ["Moscow", "Berlin", "Tokyo"]];
  background(0);

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
      fill(0);
      stroke(255);
      rect(x1, y1, x2-x1, y2-y1);

      // Draw the box
      fill(255);
      textFont('Helvetica', [13]);
      textAlign(CENTER);
      text(label,(x1 + x2) / 2, (y1 + y2) / 2);
    }
  }
}
