// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var data;

var news= 'calcio'










function preload() {
  // Get the most recent earthquake in the database
  var url =
      'https://newsapi.org/v2/everything?q=calcio&sources=ansa&apiKey=2a45165c1efc458eb2bb251e241f0b51';




  data = loadJSON(url);
}

function setup() {
  noLoop();
  createCanvas(displayWidth, displayHeight);
  background(100);


}

function draw() {




  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var lucedata = data.totalResults
  var titdata = data.articles[0].title
  var oradata = data.articles[0].publishedAt
  var descdata = data.articles[0].description



  textAlign(CENTER);
  //text(descdata, 0, height - 30, width, 30);

text ('pubblicato il: '+ oradata, 350,200);
text ('pubblicato il: '+ descdata, 350,300);
text ('sottotitolo: '+ titdata, 350,250);
text ('il numero delle notizie trovate è: '+ lucedata, 350,350);



}
