//No sense dialogue 0.1 by Damiano Pluchino [keyword1, keyword2]
// 2018 © Damiano Pluchino, Daniele @Fupete and the course DSII2018 @UniRSM 
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino
// —
//
// Help:
// [mouse_Click] Genera parole/dialogo con computer
//
// 
float x=0; //dichiaro variabili
float y=0;

int a = 0; //dichiaro variabili
int b = 0;
//array di parole
String [] d = {"titolo", 
  "toccare", 
  "togliere", 
  "abbandonare", 
  "abbastanza", 
  "abitare", 
  "abito", 
  "accompagnare", 
  "appunto", 
  "cielo", 
  "cioè", 
  "corso", 
  "cortile", 
  "cosa", 
  "coscienza", 
  "costa", 
  "elettrico", 
  "elevare", 
  "energi", 
  "mio", 
  "misura", 
  "moderno", 
  "ricco", 
  "ricerca", 
  "treno", 
  "triste", 
  "troppo", 
  "zona"};
//array parole computer
String [] e = {"cioè?", "non ho capito...", "Puoi ripetere?"};

void setup() {
  //size (500, 500);
  fullScreen();
  //set the frame Rate
  frameRate(5);
};

void draw() {  
  for (x=0; x<10; x++) {
    while (x<width) {
      background(349, 6, 67); //bg
      fill(23, 45, 67);//riempimento
      textSize(30); //grandezza testo
      if (mousePressed) { //se mouse pressed metti testo a 100 e mostrami una parola casuale dell'array d
        textSize(100);
        text((d[b])+" ", width/2-400, 450);//parola casuale da array d
        break;
      };
      text((e[a])+" ", width/2-400, 450); //estrae parole a caso da array e
      x=x+500;
    }
  };
  //numero a caso tra 0 e 3
  a = int(random(0, 3));
  if (mousePressed) { //se click numero a caso tra 0 e 28
    b =int (random(0, 28));
  }
  //parola bianca che va a random
  textSize(10);
  fill(0, 5);
  fill(255);
  text((d[a]), random(width), random(height));
};
