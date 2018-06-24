// Luca Barbieri @lb © 2017-18 MIT License
// Resize img | San Marino, RSM | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

var img;
function preload(){
   img = loadImage("assets/0.jpg"); // Load the image
       console.log(img);
}

var orientation;
var ratio_landscape;
var ratio_portrait;

function setup() {

createCanvas(windowWidth, windowHeight);

// ladscape or portrait?
if (img.width > img.height ){
  orientation = "landscape";
}if(img.width <= img.height){
  orientation = "portrait";
}

// set the ratio of image
ratio_landscape = img.width / img.height;
ratio_portrait = img.height / img.width;

}

function draw() {
background(255);
imageMode(CENTER);

if (orientation == "landscape" && windowWidth*0.8*(ratio_portrait) < windowHeight){
// show landscape
image (img, windowWidth/2,windowHeight/2,windowWidth*0.8,windowWidth*0.8*(ratio_portrait));
  }
else{
image (img, windowWidth/2,windowHeight/2,windowHeight*0.8*ratio_landscape,windowHeight*0.8);
  }
}
