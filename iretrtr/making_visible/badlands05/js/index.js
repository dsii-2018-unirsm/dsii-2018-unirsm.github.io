// Irene Trotta @iretrtr © 2018 MIT License
// badlands 05 | Città San't Angelo, IT | 6.2018
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
var selected = 'hsba(0, 0%, 100%, 0.5)';
var water = '#85C1E9';
var land = ' #c5d5c5';
var height1 = '#e6e2d3';
var height2 = '#dac292';
var height3 = '#b9936c';
var neighbors = [];
var b = false;
var consonants;
var consonants = ['b','c','d','f','g','h','q','r','v','z','p','t','k','m','n','s','l','y','x'];
var vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
var cityName;
var citiesNames = [];
var newConsonants = [];
var newVowels = [];
var heightMap = [];

function preload(){
  fontBold = loadFont('src/RobotoSlab-Bold.ttf');
  fontReg = loadFont('src/RobotoSlab-Regular.ttf');
  imgTree01 = loadImage('src/trees.png');
  imgTree02 = loadImage('src/trees01.png');
  imgMountain01 = loadImage('src/mountain.png');
  imgCapital = loadImage('src/capital.png');
}

function setup() {
  greetingh2 = createElement('h2', '(bad)lands');
  greetingp = createElement('p', 'type in subreddit name to generate community map');
  greetingh2.position(20, 20);
  greetingp.position(20, greetingh2.y + greetingh2.height);
  input = createInput();
  input.position(20, greetingp.y + greetingp.height);
  button = createButton('submit');
  button.position(input.x + input.width + 5, input.y);
  button.mousePressed(start);
  createCanvas(windowWidth, windowHeight);
  noSmooth();
}

function landBio(){
  y = input.y + input.height + 20;
  move = 20;
  fill(0)
  text('land name: '+ name.toUpperCase(), 20, y);
  text('population count: '+ timeline[0].subredditSubscribers, 20, y + move);
  text('capital city: '+ citiesNames[capitalCity()].toUpperCase(), 20, y + move*2);
  // bio = createDiv('<p id = landBio>land name: '+ name.toUpperCase() +
  //                 '<br>population count: '+ timeline[0].subredditSubscribers+
  //                 '<br>capital city: '+ citiesNames[capitalCity()].toUpperCase()+'</p>');
  // //bio.size(input.width + button.width);
  // bio.addClass('landInfo');
  // bio.position(20, input.y + input.height);
}

function start(){
  console.log(name);
  timeline = [];
  name = input.value();
  askReddit();
  //load JSON every 10seconds
  setInterval(askReddit, 10000);
  greetingh2.html('('+ name +')'+'land');
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
  //remap values for subredditSubscribers to 2, 1000
  //it will draw a minimum of 2 voronoi cells and a max of 1000 v. cells
  subMapped = map(timeline[0].subredditSubscribers, 1, maxSub, 30, 1000, true);
  //remap subredditSubscribers values to determinate the distance of the v. cell
  //more subredditSubscribers less distance, less subredditSubscribers more distance
  subMappedDist = map(timeline[0].subredditSubscribers, 1, maxSub, 30, 10, true);
  for (var i = 0; i < cellColors.length; i++){
    if (cellColors[i][3] == 'land'){
      island.push(cells[sites[i].voronoiId]);
    }
  }
  //if (timeline.length == 1 || timeline[0].subredditSubscribers != timeline[1].subredditSubscribers){
  if (timeline.length == 1){
    //b = true;
    capitalCity();
    nameGenerator();
  }
  if (timeline.length > 1){
    //b = false;
  }
  if (timeline.length > 2) {
    timeline.pop();
  }
}

function draw() {
  if (timeline.length > 0){
    randomSeed(9);
    islandGenerator();
    drawHeights();
    if (sites.length > 0){
      var voronoiId = voronoiGetSite(mouseX, mouseY);
      for (var i = 0; i < sites.length; i++){
          if(sites[i].voronoiId == voronoiId){
            var cellId = i;
        }
      }
      voronoiDrawCell(cellColors[cellId][0], cellColors[cellId][1], voronoiId, color(selected), VOR_CELLDRAW_SITE);
      console.log(voronoiId + ' ' + cellId +' ' + cellColors[cellId]);
      for (var j = 0; j < terra.length; j++){
        if(terra[j][0] == cellColors[cellId][0] && terra[j][1] == cellColors[cellId][1]){
          if(timeline[0].autoreTopic[j] != undefined){
            textFont(fontReg);
            text('city owner: ' +timeline[0].autoreTopic[j], terra[j][0]+2, terra[j][1]+15);
            text('comments: ' + timeline[0].numCommenti[j], terra[j][0]+2, terra[j][1]+30);
            text('score: ' + timeline[0].score[j], terra[j][0]+2, terra[j][1]+45);
            text('title: ' + timeline[0].titoloTopic[j], terra[j][0]+2, terra[j][1]+60, 150);
          }
        }
      }
    drawCities();
    icons();
    landBio();
    }
  }
  //b = false;
}

function icons() {
  //iconTree = [imgTree01, imgTree02];
  for (var i = 0; i < terra.length; i++){
    if(heightMap[i] == 0 && timeline[0].numCommenti[i] != mostPopular[mostPopular.length-1][0]){
      //image(iconTree[int(random(2))], terra[i][0]-30, terra[i][1]-10);
      image(imgTree02, terra[i][0]-30, terra[i][1]-10);
    }
    else if(heightMap[i] <= 20 && heightMap[i] != 0 && timeline[0].numCommenti[i] != mostPopular[mostPopular.length-1][0]){
      image(imgMountain01, terra[i][0]-40, terra[i][1]-10);
    }
  }
}

function capitalCity(){
  //sort array elements from lowest to highest
  //console.log(timeline[0].numCommenti);
  var count = timeline[0].numCommenti.length;
  //the most popular topic is the most discussed one (the one with the most comments)
  mostPopular = sort(timeline[0].numCommenti, count);
  for (var i = 0; i < timeline[0].numCommenti.length; i++){
    for (var j = 0; j < mostPopular.length; j ++){
      if (mostPopular[j] == timeline[0].numCommenti[i]){
        mostPopular[j] = [mostPopular[j], i];
      }
    }
  }
  var capital = mostPopular[mostPopular.length-1][1];
  return capital;
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
  voronoiSiteFlag(false);
    //clear
    voronoiClearSites();
    //compute voronoi diagram with size width by height
    voronoi(width, height);
    //add as many sites as the remapped subredditSubscribers value at the remapped distance
    //voronoiRndSites(int(subMapped), int(subMappedDist));
    voronoiRndSites(int(subMapped), int(subMappedDist));
    //draw voronoi
    voronoiDraw(0, 0);
    b = true;
}

function drawCities(){
  fill(0);
  textFont(fontBold);
  if(terra.length < timeline[0].numTopics){
    for (var i = 0; i < terra.length; i++){
      if (timeline[0].numCommenti[i] == mostPopular[mostPopular.length-1][0]){
        image(imgCapital, terra[i][0]-30, terra[i][1]-45);
        text(citiesNames[i].toUpperCase(), terra[i][0]+2, terra[i][1]-2);
      }
      else {
        ellipse(terra[i][0], terra[i][1], 3, 3);
        text(citiesNames[i].toUpperCase(), terra[i][0]+2, terra[i][1]-2);
      }
    }
  }
  else {
    for (var i = 0; i < timeline[0].numTopics; i++){
      if (timeline[0].numCommenti[i] == mostPopular[mostPopular.length-1][0]){
        image(imgCapital, terra[i][0]-30, terra[i][1]-45);
        text(citiesNames[i].toUpperCase(), terra[i][0]+2, terra[i][1]-2);
      }
      else{
        ellipse(terra[i][0], terra[i][1], 3, 3);
        text(citiesNames[i].toUpperCase(), terra[i][0]+2, terra[i][1]-2);
      }
    }
  }
}


// function mouseMoved(){
//    //Get info on voronoi cell that has coordinates mouseX mouseY
//   var voronoiId = voronoiGetSite(mouseX, mouseY);
//   //I find the cellId that corresponds to the voronoiId
//   for (var i = 0; i < sites.length; i++){
//       if(sites[i].voronoiId == voronoiId){
//         var cellId = i;
//     }
//   }
//   console.log(voronoiId + ' ' + cellId +' ' + cellColors[cellId]);
//   //for every cell, draw a new cell in the exact same place
//   for (var i = 0; i < cellColors.length; i++){
//     //if my mouse is on the cell change color to selected
//     if(i == cellId && cellColors[i][3] == 'land'){
//       voronoiDrawCell(cellColors[cellId][0], cellColors[cellId][1], voronoiId, color(selected), VOR_CELLDRAW_SITE);
//     }
//     if (cellColors[i][3] == 'land' && i !=cellId){
//        voronoiDrawCell(cellColors[i][0], cellColors[i][1], sites[i].voronoiId, color(land), VOR_CELLDRAW_SITE);
//     }
//     if (cellColors[i][3] == 'water' && i !=cellId) {
//       voronoiDrawCell(cellColors[i][0],cellColors[i][1], sites[i].voronoiId, color(water), VOR_CELLDRAW_SITE);
//     }
//   }
//   drawCities();
// }

function mostVoted(){
  heightMap = [];
  //sort array elements from lowest to highest
  //console.log(timeline[0].score);
  var count = timeline[0].score.length;
  //the most famous topic is the one with the highest score
  mostFamous = sort(timeline[0].score, count);
  //console.log(mostFamous);
  for (var i = 0; i < timeline[0].score.length; i++){
    famousMap = int(map(timeline[0].score[i] ,mostFamous[0], mostFamous[mostFamous.length-1], 0, 100, true));
    heightMap.push(famousMap);
  }
}

function drawHeights(){
  mostVoted();
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
  for(var i = 0; i < terra.length; i++){
    noStroke();
    if(timeline[0].nsfw[i]==true){
      if (heightMap[i] <= 20 && heightMap[i] != 0){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(255, 170, 170), VOR_CELLDRAW_SITE);
        pop();
      }
      else if (heightMap[i] > 20 && heightMap[i] < 70){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(255,185,185), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*2, terra[i][1]*2, voronoiId, color(238,114,114), VOR_CELLDRAW_SITE);
        pop();
      }
      else if (heightMap[i] >= 70){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(255,185,185), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*2, terra[i][1]*2, voronoiId, color(238,114,114), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*4, terra[i][1]*4, voronoiId, color(163,24,24), VOR_CELLDRAW_SITE);
        pop();
      }
      else {
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(255,185,185), VOR_CELLDRAW_SITE);
        pop();
      }
    }else{
      if (heightMap[i] <= 20 && heightMap[i] != 0){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(height1), VOR_CELLDRAW_SITE);
        pop();
      }
      else if (heightMap[i] > 20 && heightMap[i] < 70){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(height1), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*2, terra[i][1]*2, voronoiId, color(height2), VOR_CELLDRAW_SITE);
        pop();
      }
      else if (heightMap[i] >= 70){
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(height1), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*2, terra[i][1]*2, voronoiId, color(height2), VOR_CELLDRAW_SITE);
        scale(0.5);
        voronoiDrawCell(terra[i][0]*4, terra[i][1]*4, voronoiId, color(height3), VOR_CELLDRAW_SITE);
        pop();
      }
      else {
        var voronoiId = voronoiGetSite(terra[i][0], terra[i][1]);
        push();
        voronoiDrawCell(terra[i][0], terra[i][1], voronoiId, color(land), VOR_CELLDRAW_SITE);
        pop();
      }
    }
  }
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
    //no use of random so the same tipic will always have the same city name
    if(timeline[0].titoloTopic[z].length < 20){
      //if newVowels or newConsonants is empty assign a random vowel or consonant to generate city name
      if (newVowels.length == 0){
        //randomSeed(3);
        newVowels = vowels[int(random(vowels.length))];
      }
      if (newConsonants.length < 2){
        //randomSeed(3);
        newConsonants = [consonants[int(random(consonants.length))], consonants[int(random(consonants.length))]];
      }
      var c1 = newConsonants[0];
      var v1 = newVowels[0];
      var c2 = newConsonants[1];
      cityName = cityName + c1 + v1 +c2
    }
    //I construct one syllable with 1 consonant + 1 vowel + 1 consonant
      else {
          for (var i = 0; i < 2; i++){
            var c1 = newConsonants[int((newConsonants.length/2) + i)];
            var v1 = newVowels[i];
            var c2 = newConsonants[(int(newConsonants.length/4) + i)];
            cityName = cityName + c1 + v1 +c2
          }
        }
    //I push the name of the city
    citiesNames.push(cityName);
  }
  //console.log(citiesNames);
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
