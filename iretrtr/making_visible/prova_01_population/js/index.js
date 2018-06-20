// Irene Trotta @iretrtr © 2018 MIT License
// badlands population | Città San't Angelo, IT | 5.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// load JSON data from an URL
var subData;
var subreddit_subscribers;
var subreddit;
var topic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //gotData is a callback function
  loadJSON('https://www.reddit.com/r/Pricefield/.json', gotData);
}

//callback to load the data, la variabile "data" contiene loadJSON ma lo fa in maniera asincrona
function gotData (data){
  console.log(data);
  subData = data;
}

function draw() {
  background(0);
  if (subData) { // se subData è definito, quindi i dati sono stati caricati
    subreddit_subscribers = subData.data.children[0].data.subreddit_subscribers;
    subreddit = subData.data.children[0].data.subreddit;
    topic = subData.data.dist;
    noLoop();
    for (var i = 0; i < subreddit_subscribers; i++){ //per ogni subscriber
      fill(255);
      noStroke();
      var x = random(width); // posizione x random
      var y = random(height); // posizione y random
      ellipse(x, y, 2, 2); // disegna un pallino in x, y estratti prima
    }
    fill(255);
    text(subreddit + ' land', 50, 50)
    textSize(42);
    textAlign(CENTER);
    text('population: ' + subreddit_subscribers, width/2, height/2)
    //text(topic, width/2, height/2 + 30)
  }
}
