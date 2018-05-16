// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods






//var data1;
var data2;
var data3;




//news1= 'arte'
var news2= 'calcio'
var news3= 'siria'




function preload() {




  //var url1 = 'https://newsapi.org/v2/everything?q='+news1+'&sources=ansa&apiKey=2a45165c1efc458eb2bb251e241f0b51';
  var url2 = 'https://newsapi.org/v2/everything?q='+news2+'&sources=ansa&apiKey=2a45165c1efc458eb2bb251e241f0b51';
  var url3 = 'https://newsapi.org/v2/everything?q='+news3+'&sources=ansa&apiKey=2a45165c1efc458eb2bb251e241f0b51';





  //data1 = loadJSON(url1);
  data2 = loadJSON(url2);
  data3 = loadJSON(url3);
}





function setup() {

  noLoop();
  createCanvas(displayWidth, displayHeight);
  background(100);

}




function draw() {

background(200);




/*
  var lucedata1 = data1.totalResults
  var titdata1 = data1.articles[0].title
  var oradata1 = data1.articles[0].publishedAt
  var descdata1 = data1.articles[0].description
*/

  var lucedata2 = data2.totalResults
  var titdata2 = data2.articles[0].title
  var oradata2 = data2.articles[0].publishedAt
  var descdata2 = data2.articles[0].description



  var lucedata3 = data3.totalResults
  var titdata3 = data3.articles[0].title
  var oradata3 = data3.articles[0].publishedAt
  var descdata3 = data3.articles[0].description





  textAlign(CENTER);
  //text(descdata, 0, height - 30, width, 30);


/*
text ('pubblicato il: '+ oradata1, 350,200);
text ('pubblicato il: '+ descdata1, 350,300);
text ('sottotitolo: '+ titdata1, 350,250);
text ('il numero delle notizie trovate è: '+ lucedata1, 350,350);
*/

text ('pubblicato il: '+ oradata2, 350,200);
text ('sottotitolo: '+ descdata2, 350,300);
text ('titolo: '+ titdata2, 350,250);
text ('il numero delle notizie trovate è: '+ lucedata2, 350,350);



text ('pubblicato il: '+ oradata3, 850,200);
text ('sottotitolo: '+ descdata3, 850,300);
text ('titolo: '+ titdata3, 850,250);
text ('il numero delle notizie trovate è: '+ lucedata3, 850,350);


fill(0);
rect (250,400, 200, 200);
rect (750,400, 200, 200);


fill(255);
//rect (250,400, 200, lucedata1/10);
rect (250,400, 200, lucedata2/10);
rect (750,400, 200, lucedata3/10 );





}

