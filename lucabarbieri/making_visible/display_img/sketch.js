// Luca Barbieri @lb © 2017-18 MIT License
// Making visible | San Marino, RSM | 3.2018
// Educational purpose, made for DSII2018 lab @UniRSM

// To run this example locally, you will need an image file, and a running local server.
// For a little guide to create a local server visit: https://github.com/lmccart/itp-creative-js/wiki/SimpleHTTPServer

/*
loadImage array produce an object similar to:
Object {
  width: 800,
  height: 320,
  canvas: canvas,
  drawingContext: CanvasRenderingContext2D,
  _pixelDensity: 1,
  _modified: false,
  pixels: [],
  name: "p5.Image",
  modified: true
}
*/

var img = [];
var display_timing = [100,200,300,400,500,600,700,800,900,1000];
var img_count = 0;
var orientation = [];
var ratio = [];

function preload(){
 for(var i =0; i<10;i++){
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
  textAlign(CENTER);
  fill(100);
  noStroke();
  text("Emotional machine", width/2, height/2);

}

function draw()
{
  imageMode(CENTER);
  //console.log(frameCount);
  if (frameCount === display_timing[img_count]){
    background(51);
    // [url, position_width, position_height, dimension_x, dimension_y]

      // orientation array
      if (img[img_count].width >= img[img_count].height ){
        orientation[img_count] = "horizontal";
      }else{
        orientation[img_count] = "vertical";
      }

    // set the ratio of image
    ratio[img_count] = img[img_count].width / img[img_count].height;

  if (windowWidth < img[img_count].width) {
      img[img_count].height = img[img_count].width * ratio[img_count];
    }


  image(img[img_count], windowWidth/2, windowHeight/2, img[img_count].width, img[img_count].height);

        /*
        // pixel manipulation image
        noStroke();
        img[img_count].loadPixels();

        for (var y = 0; y < img[img_count].height; y += 8) { //x e y spaziatura
        for (var x = 0; x < img[img_count].width; x += 8) {
        // Simple but slow
        //var pix = img.get(x, y);
        // Fast but complicated
        var r = img[img_count].pixels[(y*img[img_count].width+x)*4];
        var g = img[img_count].pixels[(y*img[img_count].width+x)*4+1];
        var b = img[img_count].pixels[(y*img[img_count].width+x)*4+2];

        //fill(255);
        //text(pixel, x, y);

        fill(r, g, b);
        ellipse(x, y, 4, 4); // dimensione cerchi
          }
        }
    */

  filter(GRAY);

    //stroke(255);
    //line(frameCount, height*0.79, frameCount+1, height*0.79);

    img_count ++;

    stroke(255);
    for (var a=0; a<10; a++){
    line(display_timing[a], height*0.89, display_timing[a]+2, height*0.89);
    }
  }

    stroke(255);
    if (frameCount < 1100 && frameCount > 100){
    line(frameCount, height*0.9, frameCount, height*0.9);
  }
}

// implementazioni future
// Tool di creazione di immagini campioni, fake (un Lorem ipsum delle immagini)

/*
// NOTE:
Most useful dimension for digital image:
1600 x 1200
2048 x 1536
2272 x 1704
2560 x 1920
3264 x 2448
3872 x 2592
4288 x 2848
4536 x 3024
5196 x 3464
Facebook 1200 x 628
Twitter 1024 x 576
Instagram 1080 x 1080
Linkedln 552 x 368
Pinterest 600 x 900
Google+ 800 x 320

Horizontal (landscape) 1024 x 512
Vertical (portrait) 800 x 1200

*/
