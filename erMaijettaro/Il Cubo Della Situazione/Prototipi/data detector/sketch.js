// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods






var data1;
var data2;
var data3;


var fonte='ansa'

var news1= 'arte'
var news2= 'calcio'
var news3= 'siria'

var giorno='22'
var mese='05'
var anno='2018'

var scala=0.1



var lucedata1, lucedata2, lucedata3;
var titdata1, titdata2, titdata3;
var oradata1, oradata2, oradata3;
var descdata1, descdata2, descdata3;

var lucedata1_new, lucedata1_old;

function preload() {

  var url1 = 'https://newsapi.org/v2/everything?q='+news1+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';
  var url2 = 'https://newsapi.org/v2/everything?q='+news2+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';
    var url3 = 'https://newsapi.org/v2/everything?q='+news3+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';

  data1 = loadJSON(url1);
  data2 = loadJSON(url2);
  data3 = loadJSON(url3);
}





function setup() {

  noLoop();
  createCanvas(displayWidth, displayHeight);
  background(100);


   lucedata1 = data1.totalResults
   titdata1 = data1.articles[0].title
  oradata1 = data1.articles[0].publishedAt
    descdata1 = data1.articles[0].description

    lucedata2 = data2.totalResults
    titdata2 = data2.articles[0].title
    oradata2 = data2.articles[0].publishedAt
    descdata2 = data2.articles[0].description

    lucedata3 = data3.totalResults
    titdata3 = data3.articles[0].title
    oradata3 = data3.articles[0].publishedAt
    descdata3 = data3.articles[0].description

}





function draw() {

background(200);



  textAlign(CENTER);
  //text(descdata, 0, height - 30, width, 30);
var a= 300;
var b=800;
var c=1200;


  text ('pubblicato il: '+ oradata1,  a,200);
  text ('sottotitolo: '+ descdata1, a,300);
  text ('titolo: '+ titdata1, a,250);
  text ('il numero delle notizie trovate è: '+ lucedata1, a,350);

  text ('pubblicato il: '+ oradata2, b,200);
  text ('sottotitolo: '+ descdata2, b,300);
  text ('titolo: '+ titdata2, b,250);
  text ('il numero delle notizie trovate è: '+ lucedata2, b,350);

  text ('pubblicato il: '+ oradata3, c,200);
  text ('sottotitolo: '+ descdata3, c,300);
  text ('titolo: '+ titdata3, c,250);
  text ('il numero delle notizie trovate è: '+ lucedata3, c,350);


  fill(0);
  rect (a-100,400, 200, 200);
  rect (b-100,400, 200, 200);
  rect (c-100,400, 200, 200);


  fill(255);
  rect (a-100,600, 200, -lucedata1/scala); // map(x, 0, 1000, 0, 100)
  rect (b-100,600, 200, -lucedata2/scala);
  rect (c-100,600, 200, -lucedata3/scala );





}
