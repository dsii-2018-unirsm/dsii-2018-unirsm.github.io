var timeline = [];

function setup() {

  createCanvas(windowWidth, windowHeight);
  //load JSON every 5seconds
  setInterval(askReddit, 10000);
  noSmooth();

  //Settings for drawing(these are the default values)

  //spessore linea del campo
  voronoiCellStrokeWeight(1);
  //grandezza pallino
  voronoiSiteStrokeWeight(3);
  //colore linea campo
  voronoiCellStroke(0);
  //colore pallino
  voronoiSiteStroke(0);
  //mostra palliino
  voronoiSiteFlag(true);
}

function askReddit() {
  //gotData is a callback function
  loadJSON('https://www.reddit.com/r/askLGBT/.json', gotData)
  //  loadJSON('https://www.reddit.com/r/Pricefield/.json', gotData)
}

//callback to load the data, la variabile "data" contiene loadJSON
function gotData(data) {
  // console.log(data);
  subData_ = data;
  timeline.unshift(new sR(subData_));
  //Add 50 random sites with 10 minimum distance to be
  voronoiRndSites(timeline[0].subredditSubscribers, 10);
  //Compute voronoi diagram with size width by height
  voronoi(width, height);
  if (timeline.length > 5) {
    timeline.pop();
  }
}

function draw() {
  if (timeline.length > 0) {
    background(0);
    //Draw diagram in coordinates 0, 0
    voronoiDraw(0, 0);
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
