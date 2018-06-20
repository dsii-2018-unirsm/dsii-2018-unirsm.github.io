// Irene Trotta @iretrtr © 2018 MIT License
// badlands 03 | Città San't Angelo, IT | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

//create a map for online communities
//prototype > create a map from/with subreddit data


var timeline = [];
var terra = [];
var mare = [];
var island = [];
var input, button, greeting, subMapped, subMappedDist, positionP, positionF, name;
var mostPopular = [];
var mostFamous = [];
var maxSub = 21352277
var selected = '#EAECEE';
var water = '#85C1E9';
var land = '#D4EFDF';
var height1 = '#CB4335';
var height2 = '#EB984E';
var height3 = '#F9E79F';
var neighbors = [];
var b = false;
var consonants;
var consonants = ['b','c','d','f','g','h','q','r','v','z','p','t','k','m','n','s','l','y','x'];
var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
var cityName;
var citiesNames = [];
var newConsonants = [];
var newVowels = [];



function setup() {
  input = createInput();
  input.position(20, 65);
  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(start);

  greeting = createElement('h2', 'subreddit name');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);

  createCanvas(windowWidth, windowHeight);
  //load JSON every 10seconds
  noSmooth();

  //Settings for drawing(these are the default values)
}

function start(){
  console.log(name);
  timeline = [];
  name = input.value();
  askReddit();
  setInterval(askReddit, 10000);
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
  island = [];
  //remap values for subredditSubscribers to 2, 1500
  //it will draw a minimum of 2 voronoi cells and a max of 1500 v. cells
  subMapped = map(timeline[0].subredditSubscribers, 1, maxSub, 36, 1500, true);
  //remap subredditSubscribers values to determinate the distance of the v. cell
  //more subredditSubscribers less distance, less subredditSubscribers more distance
  subMappedDist = map(timeline[0].subredditSubscribers, 1, maxSub, 50, 10, true);
  for (var i = 0; i < cellColors.length; i++){
    if (cellColors[i][3] == 'land'){
      island.push(cells[sites[i].voronoiId]);
    }
  }
  if (timeline.length == 1 || timeline[0].subredditSubscribers != timeline[1].subredditSubscribers){
    b = true;
    nameGenerator()
  }
  if (timeline.length > 1){
    b = false;
  }
  if (timeline.length > 2) {
    timeline.pop();
  }
}

function mostCommented(){
  //sort array elements from lowest to highest
  console.log(timeline[0].numCommenti);
  var count = timeline[0].numCommenti.length;
  //the most popular topic is the most discussed one (the one with the most comments)
  mostPopular = sort(timeline[0].numCommenti, count);
  console.log(mostPopular);
}

function mostVoted(){
  //sort array elements from lowest to highest
  console.log(timeline[0].score);
  var count = timeline[0].score.length;
  //the most famous topic is the one with the highest score
  mostFamous = sort(timeline[0].score, count);
  console.log(mostFamous);

}

function islandGenerator() {
  //spessore linea del campo
  voronoiCellStrokeWeight(0);
  //grandezza pallino
  voronoiSiteStrokeWeight(3);
  //colore linea campo
  voronoiCellStroke(200);
  //colore pallino
  voronoiSiteStroke(255);
  //mostra palliino
  voronoiSiteFlag(true);
  if (b==true){
    //clear
    voronoiClearSites();
    //compute voronoi diagram with size width by height
    voronoi(width, height);
    //add as many sites as the remapped subredditSubscribers value at the remapped distance
    //voronoiRndSites(int(subMapped), int(subMappedDist));
    voronoiRndSites(int(subMapped), int(subMappedDist));
    //draw voronoi
    voronoiDraw(0, 0);
    drawCities();
  }
}

function draw() {
  islandGenerator();
  //b = false;
}

function drawCities(){
  terra = [];
  mare = [];
  for (var i = 0; i < cellColors.length; i++){
    if (cellColors[i][3] == 'land'){
      terra.push(cellColors[i]);
    }
    else{
      mare.push(cellColors[i]);
    }
  }
  if(terra.length < timeline[0].numTopics){
    for (var i = 0; i < terra.length; i++){
      text(citiesNames[i].toUpperCase(), terra[i][0], terra[i][1]);
      rectMode(CENTER)
      noStroke();
      fill(0);
      rect(terra[i][0], terra[i][1], 5,5);
      }
    }else {
      for (var i = 0; i < timeline[0].numTopics; i++){
        text(citiesNames[i].toUpperCase(), terra[i][0], terra[i][1]);
        rectMode(CENTER)
        noStroke();
        fill(0);
        rect(terra[i][0], terra[i][1], 5,5);
        }
    }
}

function mouseMoved(){
   //Get info on voronoi cell that has coordinates mouseX mouseY
  var voronoiId = voronoiGetSite(mouseX, mouseY);
  //I find the cellId that corresponds to the voronoiId
  for (var i = 0; i < sites.length; i++){
      if(sites[i].voronoiId == voronoiId){
        var cellId = i;
    }
  }
  console.log(voronoiId + ' ' + cellId +' ' + cellColors[cellId]);
  //for every cell, draw a new cell in the exact same place
  for (var i = 0; i < cellColors.length; i++){
    //if my mouse is on the cell change color to selected
    if(i == cellId && cellColors[i][3] == 'land'){
      voronoiDrawCell(cellColors[cellId][0], cellColors[cellId][1], voronoiId, color(selected), VOR_CELLDRAW_SITE);
    }
    if (cellColors[i][3] == 'land' && i !=cellId){
       voronoiDrawCell(cellColors[i][0], cellColors[i][1], sites[i].voronoiId, color(land), VOR_CELLDRAW_SITE);
    }
    if (cellColors[i][3] == 'water' && i !=cellId) {
      voronoiDrawCell(cellColors[i][0],cellColors[i][1], sites[i].voronoiId, color(water), VOR_CELLDRAW_SITE);
    }
  }
  drawCities();
}

function heightMap(){
  // voronoiDrawCell(voronoiDiagram.cells[12].site.x, voronoiDiagram.cells[12].site.y, 12, color(height1), VOR_CELLDRAW_SITE);
  // neighbors = voronoiNeighbors(12);
  // for (var i=0; i<neighbors.length; i++){
  //   var nId = neighbors[i];
  //   voronoiDrawCell(voronoiDiagram.cells[nId].site.x, voronoiDiagram.cells[nId].site.y, nId, color(height2), VOR_CELLDRAW_SITE);
  // }
}

function nameGenerator(){
  citiesNames = [];
  //I check what's the title of every topic
  for (var z = 0; z < timeline[0].titoloTopic.length; z++){
    newConsonants = [];
    newVowels = [];
    cityName = '';
    //I check every letter of every title
    for (var i = 0; i < timeline[0].titoloTopic[z].length; i++){
      for (var d = 0; d < vowels.length; d++){
        //if that letter is a vowel I push it in my newVowels array
        if (vowels[d] == timeline[0].titoloTopic[z][i].toLowerCase()){
          newVowels.push(vowels[d]);
        }
      }
      for (var d = 0; d < consonants.length; d++){
        //if that letter is a consonant I push it in my newConsonants array
        if (consonants[d] == timeline[0].titoloTopic[z][i].toLowerCase()){
          newConsonants.push(consonants[d]);
        }
      }
    }
    //this way I use the vowels and the consonants of THAT title and I leave out punctuation marks
    //random cicle between 2,4 so my city name can be a 2 syllables word or a 3 syllables word and I have a bit of variation
    for (var i = 0; i < int(random(2,4)); i++){
      //I construct the syllable with 1 rnd consonant + 1 rnd vowel + 1 rnd consonant
      var c1 = newConsonants[int(random(newConsonants.length))];
      var v1 = newVowels[int(random(newVowels.length))];
      var c2 = newConsonants[int(random(newConsonants.length))];
      cityName = cityName + c1 + v1 +c2
    }
    //I push the name of the city
    citiesNames.push(cityName);
  }
  console.log(citiesNames);
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
