// SIN by legeinteukein [sin, circle]
// 2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino

// sketch modificato a partire da un modello Change over time by Allison Parrish

void setup() {
  size(700, 400);
}
void draw() {
  background(30);
  // disegna dei cerchi bianchi su sfondo grigio, 
  //che si muovono con modulo sinusoidale sull'asse delle ascisse
    noStroke();
  fill(255);
  for (int i = 0; i < 30; i++) {
    ellipse(
    //frameCount determina il tempo di "oscillazione"
    // il modulo è dato dall divisione (frameCount/(i+30) moltiplicata per il seno
    // il seno permette di oscillare a destra e a sinistra di un asse
    // ES.
            // sin(0) = 0
            //sin(0.39) = 0.38
            //sin(0.78) = 0.70
            //sin(1.17) = 0.92
            //sin(1.57) = 1
            //sin(1.96) = 0.92
            //sin(2.35) = 0.70
            //sin(2.74) = 0.38
            //sin(3.14) = 0
            //sin(3.53) = -0.38
            //sin(3.92) = -0.70
            //sin(4.31) = -0.92
            //sin(4.71) = -1
            //sin(5.10) = -0.92
            //sin(5.49) = -0.70
            //sin(5.89) = -0.38
            //sin(6.28) = 0
    // mentre se si fosse scelto un numero intero l'oscillazione sarebbe avvenuta
    // a partire da un punto (origine x)fino all'estremo (dx per es. x+23) e poi tornato all'origine.
       
