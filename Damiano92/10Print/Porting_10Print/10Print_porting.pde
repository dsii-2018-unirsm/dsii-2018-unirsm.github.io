int h = 26;
int index = 0;
void setup() {
//size(640, 384);
fullScreen();
background(#C1492A);
strokeWeight(3);
stroke(230);
smooth();
}
void draw() {
int x1 = w*index;
int x2 = x1 + w;
int y1 = h*23;
int y2 = h*24;
if (random(2) < 1) {
line(x2, y1, x1, y2);
} else {
line(x1, y1, x2, y2);
}
index++;
if (index == width/w) {
PImage p = get(0, h, width, h*28);
background(#C1492A);
set(0, 0, p);
index = 0;
}
}
