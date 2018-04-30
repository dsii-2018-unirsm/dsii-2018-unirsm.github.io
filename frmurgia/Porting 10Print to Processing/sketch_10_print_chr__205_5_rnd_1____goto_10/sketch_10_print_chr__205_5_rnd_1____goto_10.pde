int w = 16;
    int h = 16;
    int index = 0;
    int rows = int(pow(2, int(random(1, 6))));
    int u = height / (rows + 4);
    int thickness = int(pow(2, int(random(1, 4))));
    int uth1 = u / thickness;
    int uth2 = u + uth1;
    int startX = int(-u * 0.75);
    int startY = height/2 - rows/2 * u;
    int endX = width+u;
    int endY = height/2 + rows/2 * u;
    void setup() {
      frameRate(1);
      size(1024, 680);
   
      noStroke();
      smooth();
}
    void draw() {
  noStroke();
    background(#F5C03E);
    int rows = int(pow(2, int(random(1, 6))));
    int u = height / (rows + 4);
    int thickness = int(pow(2, int(random(1, 4))));
    int uth1 = u / thickness;
    int uth2 = u + uth1;
    int startX = int(-u * 0.75);
    int startY = height/2 - rows/2 * u;
    int endX = width+u;
    int endY = height/2 + rows/2 * u;
    for (int x = startX; x < endX; x += u) {
      for (int y = startY; y < endY; y += u) {
        if (random(1) > 0.5) {
fill(#F5F5EB);
//#152A3B', '#158ca7', '#F5C03E', '#D63826', '#F5F5EB
          quad(x, y, x+u, y+u, x+uth2, y+u, x+uth1, y);
        }
        else {
          fill(#158ca7);
          quad(x, y+u, x+u, y, x+uth2, y, x+uth1, y+u);
        }
} }

 
}
void keyPressed(){
    if(key=='s'||key=='S'){
 
        // Saves each frame as line-000001.png, line-000002.png, etc.
        saveFrame("line-######.png");
 
    }
}

  
