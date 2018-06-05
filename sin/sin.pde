void setup() {
  size(700, 400);
}
void draw() {
  background(30);
  noStroke();
  fill(255);
  for (int i = 0; i < 30; i++) {
    ellipse(
     100+(sin(frameCount/(i+30))*(i+30)),
      0+(i*50),
      40,
      40);
    
      ellipse(
      200+(sin(frameCount/(i+20))*(i+25)),
      0+(i*40),
      40,
      40);
      
      ellipse(
      300+(sin(frameCount/(i+10))*(i+20)),
     0+(i*30),
      40,
      40);
     
    
      ellipse(
      600+(sin(frameCount/(i+20))*(i+25)),
      0+(i*40),
      40,
      40);
      
      ellipse(
      500+(sin(frameCount/(i+30))*(i+30)),
      0+(i*50),
      40,
      40);
      
       ellipse(
      400+(sin(frameCount/(i+10))*(i+20)),
      0+(i*30),
      40,
      40);
      
      
      
  }
}