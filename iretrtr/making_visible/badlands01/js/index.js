// Irene Trotta @iretrtr © 2018 MIT License
// badlands 01 | Città San't Angelo, IT | 5.2018
// Educational purpose, made for DSII2018 lab @UniRSM

//create a map for online communities
//prototype > create a map from/with subreddit data


var timeline = [];
var input, button, greeting, subMapped, subMappedDist, positionP, positionF, name;
var mostPopular = 0;
var mostFamous = 0;
var maxSub = 21352277
var selected = '#EAECEE';
var water = 255;
var land = '#D4EFDF';
var height1 = '#CB4335';
var height2 = '#EB984E';
var height3 = '#F9E79F';
var neighbors = [];


function setup() {
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(start);

  greeting = createElement('h2', 'subreddit name');
  greeting.position(20, 5);
  setInterval(askReddit, 10000);

  textAlign(CENTER);
  textSize(50);

  createCanvas(windowWidth, windowHeight);
  //load JSON every 10seconds
  noSmooth();

  //Settings for drawing(these are the default values)

  //spessore linea del campo
  voronoiCellStrokeWeight(1);
  //grandezza pallino
  voronoiSiteStrokeWeight(0);
  //colore linea campo
  voronoiCellStroke(200);
  //colore pallino
  voronoiSiteStroke(0);
  //mostra palliino
  voronoiSiteFlag(false);
}

function start(){
  console.log(name);
  timeline = [];
  name = input.value();
  loadJSON('https://www.reddit.com/r/'+name+'/.json', gotData)
  greeting.html(name+' subreddit');
  input.value('');
}

function askReddit() {
  console.log(name);
  //gotData is a callback function
  loadJSON('https://www.reddit.com/r/'+name+'/.json', gotData)
}

//callback to load the data, the variable "data" has loadJSON
function gotData(data) {
  // console.log(data);
  subData_ = data;
  timeline.unshift(new sR(subData_));
  //remap values for subredditSubscribers to 2, 1500
  //it will draw a minimum of 2 voronoi cells and a max of 1500 v. cells
  subMapped = map(timeline[0].subredditSubscribers, 1, maxSub, 10, 1500, true);
  //remap subredditSubscribers values to determinate the distance of the v. cell
  //more subredditSubscribers less distance, less subredditSubscribers more distance
  subMappedDist = map(timeline[0].subredditSubscribers, 1, maxSub, 50, 10, true);
  if (timeline.length > 5) {
    timeline.pop();
  }
}

function mostCommented(){
  //the most popular topic is the most discussed one (the one with the most comments)
  for (var i = 0; i < timeline[0].numCommenti.length; i++){
     if (timeline[0].numCommenti[i] > mostPopular){
       mostPopular = timeline[0].numCommenti[i];
       //console.log(mostPopular);
     }
     if (mostPopular == timeline[0].numCommenti[i]){
     positionP = i;
     }
  }
  console.log(mostPopular + " corrisponde alla posizione " + "timeline[0].numCommenti["+positionP+"]");
}

function mostVoted(){
  //the most famous topic is the one with the highest score
  for (var i = 0; i < timeline[0].numCommenti.length; i++){
     if (timeline[0].score[i] > mostFamous){
       mostFamous = timeline[0].score[i];
       //console.log(mostPopular);
     }
     if (mostFamous == timeline[0].score[i]){
     positionF = i;
     }
  }
  console.log(mostFamous + " corrisponde alla posizione " + "timeline[0].score["+positionF+"]");
}

function draw() {
  if (timeline.length == 1){
    //clear
    voronoiClearSites();
    //compute voronoi diagram with size width by height
    voronoi(width, height);
    //add as many sites as the remapped subredditSubscribers value at the remapped distance
    voronoiRndSites(int(subMapped), int(subMappedDist));
    //draw voronoi
    voronoiDraw(0, 0);
  }
}

 function mouseMoved(){
   //Get info on voronoi cell that has coordinates mouseX mouseY
  var cellId = voronoiGetSite(mouseX, mouseY);
  //Get ids of voronoi cells neighboring cellId
  console.log(cellId +' ' + cellColors[cellId]);
  //for every cell, draw a new cell in the exact same place
  for (var i = 0; i < cellColors.length; i++){
    //if my mouse is on the cell change color to selected
    if(i == cellId){
      voronoiDrawCell(voronoiDiagram.cells[cellId].site.x, voronoiDiagram.cells[cellId].site.y, cellId, color(selected), VOR_CELLDRAW_SITE);
    }
    else {
      voronoiDrawCell(voronoiDiagram.cells[i].site.x, voronoiDiagram.cells[i].site.y, i, color(land), VOR_CELLDRAW_SITE);
    }
  }
}

function heightMap(){
  voronoiDrawCell(voronoiDiagram.cells[12].site.x, voronoiDiagram.cells[12].site.y, 12, color(height1), VOR_CELLDRAW_SITE);
  neighbors = voronoiNeighbors(12);
  for (var i=0; i<neighbors.length; i++){
    var nId = neighbors[i];
    voronoiDrawCell(voronoiDiagram.cells[nId].site.x, voronoiDiagram.cells[nId].site.y, nId, color(height2), VOR_CELLDRAW_SITE);
  }
}

function sR(subData_) {

  this.subData = subData_;
  this.autoreTopic = [];
  this.titoloTopic = [];
  this.nsfw = [];
  this.contenuto = [];
  this.downs = [];
  this.ups = [];
  this.score = [];
  this.numCommenti = [];
  this.urlTopic = [];
  this.timeOfCreation = [];
  this.testoTopic = [];

  this.subreddit = this.subData.data.children[0].data.subreddit;
  this.subredditSubscribers = this.subData.data.children[0].data.subreddit_subscribers;
  this.numTopics = this.subData.data.dist;
  for (var i = 0; i < this.subData.data.children.length; i++) {
    this.titoloTopic[i] = this.subData.data.children[i].data.title;
    this.autoreTopic[i] = this.subData.data.children[i].data.author;
    this.contenuto[i] = this.subData.data.children[i].data.link_flair_text;
    this.ups[i] = this.subData.data.children[i].data.ups;
    this.downs[i] = this.subData.data.children[i].data.downs;
    this.score[i] = this.subData.data.children[i].data.score;
    this.numCommenti[i] = this.subData.data.children[i].data.num_comments;
    this.nsfw[i] = this.subData.data.children[i].data.over_18;
    this.urlTopic[i] = this.subData.data.children[i].data.permalink;
    this.timeOfCreation[i] = this.subData.data.children[i].data.created;
    this.testoTopic[i] = this.subData.data.children[i].data.selftext;
  }
}
