// Generatore casuale di parole by Elisa Prati [random, testocanzone] //<>//
// 2018 © Elisa Prati, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino



String [] parole;
String [] combino;

void setup() {
  fullScreen();
  background(0);
  frameRate(10);
  parole = loadStrings("testo.txt"); //caricamento file delle parole
  
}

void draw(){
  background(0);
  
  String randomword = parole[int(random(parole.length))]; 
  String randomword2 = parole[int(random(parole.length)/2)]; 
  textSize(random(400)); 
  textAlign(CENTER); 
  fill(255);
  text(randomword, random(width), random(height)); 
  
  textSize(100);
  fill(random(255),random(255),random(255),70);
  text(randomword2, mouseX, mouseY); 
}