int num [] = {3, 4};
int i;
int n=0;


void setup() {
  fullScreen();
  frameRate(60);
  background (#f9fff9);
  
};

void draw(){
for (int arr=0; arr<2; arr++) {
    //println(num[arr]);
    int c = num[arr];
    int op= c%3; //int op=c%3
    println(op);//ok stampa modulo ricorrente, sempre 0,1
    /////////////////////////
    if (n<=width) {
      for (i=0; i<=width; i+=10) { //genera pattern
        noFill();  
        if (op==0) {
          stroke(random(100));
          line(n,i,n+10,i+10);
        // ellipse(i,n,10,10);
        } else {
            stroke(random(100));
          //rect(n,i,i+30,n+30);
                line(n+10,i,n,i+10);

           //ellipse(n,i,30,30);
        }//else
      }//for pattern
    }//if1
  }//for 1    
n+=10;

};
