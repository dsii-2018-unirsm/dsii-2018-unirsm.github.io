// Luca Barbieri @lb © 2017-18 MIT License
// Social Mirror | San Marino, RSM | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// HELPER
// 1. This example works in Firefox (not Safari / not Chrome)
// 2. To run this example locally, you will need a JPG images file in "assets" folder, and a running local server.
// This is a little guide to create a local server, please visit: https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer
// 3. You need a internet connection for use Affectiva.

// Affectiva simple guide
// Affective is an algorithm that generates five different emotions [joy, sadness, disgust, anger, fear + "engagement" & "valence"] from the facial detection from the webcam.
// Engagement: A measure of facial muscle activation that illustrates the subject’s expressiveness. The range of values is from 0 to 100.
// Valence: A measure of the positive or negative nature of the recorded person’s experience. The range of values is from -100 to 100.
// Affective set a standard dimension for camera 640x480
// This software use Affectiva for Educational, for information please visit https://developer.affectiva.com/affectiva-student-sdk-license-agreement/

// Image gallery
// The image used for gallery are from @lilmiquela, Fake Instagram Model
// For information visit: https://www.instagram.com/lilmiquela/
// Miquela Sousa, better known as Lil Miquela or simply,
// Miquela is a fictional character created by Trevor McFedries & Sara Decou,
// a Spanish-Brazilian American as a Digital Art computer-generated
// model and music artist claiming to be from Downey, California.
// The Instagram account, @lilmiquela was activated in 2016;
// she has amassed more than a million followers as of April 2018.

var img = [];
var timing = 5000; // timing for appear images
var n_img = 11; // number of image in the "assets" folder

var img_count = 0;
var orientation = [];
var ratio_portrait = [];
var ratio_landscape = [];
var img_data = []; // array to put metadata from image
var time = true;
var start_time = 0;
var stop_time = 0;
var pixel = 0;

var x = 40;
var pixel_x = 1400;
var y = 20;

function preload(){
 for(var i =0; i<n_img;i++){
   img[i] = loadImage("assets/" + i + ".jpg"); // Load the image
       console.log(img[i]);
 }
}


function setup()
{
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  background(51);
  img = loadImage("assets/name.jpg");
  preload();

  // display instructions
  fill(255);
  noStroke();

  input = createInput();
  input.position(windowWidth/2, windowHeight/2);
  textFont('monospace');
  textSize(18);
  text("Social Mirror", input.x, input.y-120);
  textSize(12);
  text("Social mirror is a tool to manage the emotional component ", input.x, input.y-100);
  text("of users with the aim of making people aware of the contents", input.x, input.y-85);
  text("that are published online.", input.x, input.y-70);
  text('To start, you need to upload your images to the "assets" folder ', input.x, input.y-53);
  text('and rename them progressively with "0.jpg, 1.jpg, 2.jpg ..." ', input.x, input.y-38);
  text('and allow access to the webcam.', input.x, input.y-23);
  textSize(18);
  text("I'm", input.x - 50, input.y+10);

  button = createButton('START');
  button.position(input.x, input.y + input.height + 10);
  button.mousePressed(show_button);

}

function show_button(){
background(51);
$("#show_button").css('display', 'block');
button.remove();
input.remove();
var name = input.value();
//$('#name').text(name);
$("#name").css({'color' : 'white',
                'font-size' : '12',
                'font-family' : 'monospace'});
textSize(12);
text('Click for start', input.x-10, input.y-23);
}

function draw()
{
  if (disegna == true && img_count < n_img){

    if (time == true){
      start_time = millis();
      time = false;
    }

    imageMode(CENTER);

    background(51);
    // [url, position_width, position_height, dimension_x, dimension_y]

      // orientation array
    if (img[img_count].width >= img[img_count].height ){
        orientation[img_count] = "landscape";
    }else{
        orientation[img_count] = "portrait";
    }

    // set the ratio of image
    ratio_landscape[img_count] = img[img_count].width / img[img_count].height;
    ratio_portrait[img_count] = img[img_count].height / img[img_count].width;

    if (orientation[img_count] == "landscape" && windowWidth*0.8*(ratio_portrait[img_count]) < windowHeight){
    // show landscape
    image (img[img_count], windowWidth/2,windowHeight/2,windowWidth*0.8,windowWidth*0.8*(ratio_portrait[img_count]));
      }
    else{
      image (img[img_count], windowWidth/2,windowHeight/2,windowHeight*0.8*ratio_landscape[img_count],windowHeight*0.8);
    }

  // filter(GRAY); // it makes grayscale images

    var step = windowWidth * 0.8 / n_img;
    var time_for_pixel = timing / step;

    // incremental line
    stroke(255);
    for (var a=0; a<(n_img+1); a++){
    line(windowWidth*0.1+(step*a), windowHeight*0.94, windowWidth*0.1+(step*a), windowHeight*0.95);
    }

    // step by step line
    stroke(255);
      var end_step = windowWidth*0.1 + (img_count*step);
      line (windowWidth*0.1, height*0.945, end_step, windowHeight*0.945); // step line
      line (end_step, windowHeight*0.945, end_step + ((stop_time - start_time) / time_for_pixel), height*0.945); // parte da dove finisce quello sopra e disegna uno step (fluido)

    stop_time = millis();
    // show millis in console
    //console.log("start " + start_time);
    //console.log("stop " + stop_time);

    if ((stop_time - start_time) > timing ){
      time = true;
      img_count ++;
    }
  }if(img_count >= n_img){
    onStop();
    background(51);
    fill(255);
    // text("sample text", windowWidth/2, windowHeight/2);
    noStroke();
    ellipseMode(CENTER);

    var display_dot = 60;

    // show emotion circle
    fill('rgba(237,150,0, 0.25)');
    for (var i = 0; i<joy.length; i++){
      if (joy[i] < 3){
        joy[i] = 3;
      }
      if (x > pixel_x){
        x = 40;
        y += 20;
      }
      ellipse(x, y, joy[i], joy[i]);
      x+= 10;
    }

    fill('rgba(43,138,216, 0.25)');
    for (var i = 0; i<sadness.length; i++){
      if (sadness[i] < 3){
        sadness[i] = 3;
      }
      if (x > pixel_x){
        x = 40;
        y += 20;
        }
      ellipse(x, y, sadness[i], sadness[i]);
      x+= 10;
    }

    fill('rgba(46,133,56, 0.25)');
    for (var i = 0; i<disgust.length; i++){
      if (disgust[i] < 3){
        disgust[i] = 3;
      }
      if (x > pixel_x){
        x = 40;
        y += 20;
      }
      ellipse(x, y, disgust[i], disgust[i]);
      x+= 10;
    }

    fill('rgba(214,55,43, 0.25)');
    for (var i = 0; i<anger.length; i++){
      if (anger[i] < 3){
        anger[i] = 3;
      }
      if (x > pixel_x){
        x = 40;
        y += 20;
      }
      ellipse(x, y, anger[i], anger[i]);
      x+= 10;
    }

    fill('rgba(209,52,155, 0.25)');
    for (var i = 0; i<fear.length; i++){
      if (fear[i] < 3){
        fear[i] = 3;
      }
      if (x > pixel_x){
        x = 40;
        y += 20;
      }
      ellipse(x, y, fear[i], fear[i]);
      x+= 10;
    }

    // show description
    var emotion_text_y = 800;
    for (var i = 0; i<5; i++){
    var emotion_text = ["joy", "sadness", "disgust","anger", "fear"];
    var emotion_color = ["yellow", "blue", "green", "red", "violet"];
    textSize(12);
    fill(255);
    text(emotion_text[i] + " | " + emotion_color[i] , 40, emotion_text_y);
    emotion_text_y += 20;
    }

    noLoop();
  }
}

/*
// show example V1
fill('rgba(0, 255, 0, 0.25)');
for (var i = 0; i<sadness.length; i++){
  if (sadness[i] < 2){
    sadness[i] = 2;
  }
  ellipse(i*5, (windowHeight*0.1) + (windowHeight*0.8 - (engagement[i]*windowHeight*0.8)/100), sadness[i], sadness[i]);
}
*/

// se ridimensiona la finestra ricalcola width e height canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
