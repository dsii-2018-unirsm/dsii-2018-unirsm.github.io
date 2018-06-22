// -
// FLU 0.1 by Riccardo Frignani [virus, a, b]
// 2018 © Riccardo Frignani, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [key] action
// [key] action
// [mouse] action
//
// —

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//fonte di provenienza delle notizie
var fonte='ansa'


//argomenti da scrappare
var news1= 'arte'
var news2= 'calcio'
var news3= 'guerra'


//data di inizio scrappatura
var giorno='05'
var mese='06'
var anno='2018'



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//logistica variabili

var data1;
var data2;
var data3;

var lucedata1, lucedata2, lucedata3;
var titdata1, titdata2, titdata3;
var oradata1, oradata2, oradata3;
var descdata1, descdata2, descdata3;

var lucedata1_new, lucedata1_old;


function preload() {



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//il motore di tutto


  var url1 = 'https://newsapi.org/v2/everything?q='+news1+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';
  var url2 = 'https://newsapi.org/v2/everything?q='+news2+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';
  var url3 = 'https://newsapi.org/v2/everything?q='+news3+'&sources='+fonte+'&from='+anno+'-'+mese+'-'+giorno+'&apiKey=2a45165c1efc458eb2bb251e241f0b51';





  data1 = loadJSON(url1);
  data2 = loadJSON(url2);
  data3 = loadJSON(url3);






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}

function setup() {

  noLoop();
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  //quando il dato maggiore sta per andare fuori scala queste righe riadattano la scala
  var numArray = [data1.totalResults, data2.totalResults, data3.totalResults];
  var pippo = max(numArray);


//verifica errori
//fill(255,0,0);
//text(data1.totalResults, 200,200);
//text(data2.totalResults, 400,200);
//text(data3.totalResults, 600,200);




  fill(100);

  for (var j=0; j<3;j++){
    ellipse(windowWidth/3/2, -j*60+windowHeight/5*4, 50, 50)
    ellipse(windowWidth/3+windowWidth/3/2, -j*60+windowHeight/5*4, 50, 50)
    ellipse(windowWidth-windowWidth/3/2, -j*60+windowHeight/5*4, 50, 50)
  }

var numluce1= int (map(data1.totalResults, 0, pippo, 0, 2)); //x3
var numluce2= int (map(data2.totalResults, 0, pippo, 0, 2));
var numluce3= int (map(data3.totalResults, 0, pippo, 0, 2));
fill(250);

for (var i=0; i<=numluce1;i++){
ellipse(windowWidth/3/2, -i*60+windowHeight/5*4, 50, 50)
}

for (var i=0; i<=numluce2;i++){
ellipse(windowWidth/3+windowWidth/3/2, -i*60+windowHeight/5*4, 50, 50)
}

for (var i=0; i<=numluce3;i++){
ellipse(windowWidth-windowWidth/3/2, -i*60+windowHeight/5*4, 50, 50)
}





// /*  if (pippo>400){
//     var scala=2
//   } else if (pippo>300){
//     var scala=1
//   } else if (pippo>200){
//     var scala=0.5
//   }else if (pippo>100){
//     var scala=0.3
//   }else {var scala=0.1}
//
//
// //prende dal file JSON i dati relativi alle notizie trovate su un determinato argomento
//    lucedata1 = data1.totalResults/scala
//    lucedata2 = data2.totalResults/scala
//    lucedata3 = data3.totalResults/scala
//
//
//
//
// }
//
//
//
//
//
// function draw() {
//
// background(0);
// fill(100);
//
//
// /*
// //debug
// text(lucedata1,100,100);
// text(lucedata2,200,100);
// text(lucedata3,300,100);
// */
//
//
//
// // 1
// fill(100);
// ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
// ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
// ellipse(displayWidth/3/2,windowHeight/10*7,50,50);
// ellipse(displayWidth/3/2,windowHeight/10*6,50,50);
// ellipse(displayWidth/3/2,windowHeight/10*5,50,50);
// ellipse(displayWidth/3/2,windowHeight/10*4,50,50);
//
// if(lucedata1<50){
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
// }else if (lucedata1<300){
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
// }else if (lucedata1<550){
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*7,50,50);
// }else if (lucedata1<800){
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*6,50,50);
// }else if (lucedata1<1050){
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*5,50,50);
// }else if (lucedata1<1300) {
//   fill(255);
//   ellipse(displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*5,50,50);
//   ellipse(displayWidth/3/2,windowHeight/10*4,50,50);
// }
//
//
//
//
//
//
//
//
// // 2
// fill(100);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*7,50,50);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*6,50,50);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*5,50,50);
// ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*4,50,50);
//
// if(lucedata2<50){
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
// }else if (lucedata2<300){
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
// }else if (lucedata2<550){
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*7,50,50);
// }else if (lucedata2<800){
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*6,50,50);
// }else if (lucedata2<1050){
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*5,50,50);
// }else if (lucedata2<1300) {
//   fill(255);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*5,50,50);
//   ellipse(displayWidth/3+displayWidth/3/2,windowHeight/10*4,50,50);
// }
//
//
//
// // 3
// fill(100);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*7,50,50);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*6,50,50);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*5,50,50);
// ellipse(displayWidth-displayWidth/3/2,windowHeight/10*4,50,50);
//
// if(lucedata3<50){
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
// }else if (lucedata1<300){
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
// }else if (lucedata3<550){
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*7,50,50);
// }else if (lucedata3<800){
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*6,50,50);
// }else if (lucedata3<1050){
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*5,50,50);
// }else if (lucedata3<1300) {
//   fill(255);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*9,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*8,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*7,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*6,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*5,50,50);
//   ellipse(displayWidth-displayWidth/3/2,windowHeight/10*4,50,50);
// }



//scrive gli argomenti
  textAlign(CENTER);
  fill(255);
  textSize(50);
  text (news1, windowWidth/3/2,50);
  text (news2, windowWidth/3+windowWidth/3/2,50);
  text (news3, windowWidth-windowWidth/3/2,50);


  //testo introduttivo
  textAlign(LEFT);
  textSize(16);
  text("Questo è il Quadro della Situazione.\niQdS ispeziona tutte le notizie provenienti dal sito ufficiale "+fonte+" \ne conta le notizie trovate su determinati temi.\nIl confronto fra il numero di notizie dedicate ad ogni argomento \nevidenzia le tendenze della pubblica informazione.",50,150);

  //inizio scrapping
    text("inizio ispezione: "+giorno+"."+mese+"."+anno,50, 300);


    //riadatta la pagina
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }

}
