
String[]testo={"aria", "moto", "casa", "animale","acqua"};
int a = int(random(6));
int i = 10;

void setup() {
size(300,300);
};

void draw() {

};

void mousePressed() {
  background(255, 0, 0);
  nuova();
   p_casual();
}

void mouseReleased() {
  background(255);
}

void p_casual()
{ 
 background(30, mouseX, mouseY);
PFont c; //dichiaro la variabile font
  c = createFont("AvenirNextLTPro_Bold_2.otf", 100);
  fill(#2fff00);
  textFont(c, 30);
  text((testo[a]), mouseX, mouseY);
};

void nuova(){
   a = int(random(0,4));
};
