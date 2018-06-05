import processing.sound.*;
import controlP5.*;

ControlP5 cp5;

SoundFile kick;
SoundFile snare;
SoundFile hh;
SoundFile clap;

int myColor = color(255);
int c1, c2;
float n, n1;

int k=10;
int s=20;
int h=30;
int c=40;
int st=1;

void setup() {
  size(400, 400);
  noStroke();

  kick = new SoundFile(this, "kick.wav");
  snare = new SoundFile(this, "snare.wav");
  clap = new SoundFile(this, "clap.wav");
  hh = new SoundFile(this, "hh.wav");

  cp5 = new ControlP5(this);

  // create a new button with name 'buttonA'
  cp5.addButton("Tecno")
    .setValue(1)
    .setPosition(100, 100)
    .setSize(200, 19)
    ;

  // and add another 2 buttons
  cp5.addButton("Samba")
    .setValue(2)
    .setPosition(100, 120)
    .setSize(200, 19)
    ;

  cp5.addButton("Rock")
    .setPosition(100, 140)
    .setSize(200, 19)
    .setValue(3)
    ;

  cp5.addButton("STOP")
    .setValue(3)
    .setPosition(100, 300)
    .setSize(200, 19)
    ;
}     


void draw() {
  background(myColor);
  myColor = lerpColor(c1, c2, n);
  n += (1-n)* 0.1;
  if (st == 0) {
  } else {
    if (frameCount %k == 0) {
      kick.play();
    }
    if (frameCount %s == 0) {
      snare.play();
    }
    if (frameCount %h == 0) {
      hh.play();
    }
    if (frameCount %c == 0) {
      clap.play();
    }
  }
}

public void controlEvent(ControlEvent theEvent) {
  println(theEvent.getController().getName());
  n = 0;
}

public void Tecno(int theValue) {
  println("Tecno");
  c1 = c2;
  c2 = color(0, 160, 100);
  k=30;
  s=60;
  c=120;
  h=15;
  st=1;
}

public void Samba(int theValue) {
  println("Samba");
  c1 = c2;
  c2 = color(150, 0, 0);
  k=60;
  s=40;
  c=120;
  h=90;
  st=1;
}

public void Rock(int theValue) {
  println("Rock");
  c1 = c2;
  c2 = color(255, 255, 0);
  k=20;
  s=40;
  c=80;
  h=20;
  st=1;
}

public void STOP(int theValue) {
  println("STOP");
  c1 = c2;
  c2 = color(0, 0, 0);
  st=0;
}