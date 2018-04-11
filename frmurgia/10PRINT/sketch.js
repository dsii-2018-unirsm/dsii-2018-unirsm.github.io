
/*
<><><><><><><><><><><><><><><><><>
----------------------------------
10 print
generatore di glitch in P5js
by frmurgia © 2017-18 MIT License
DSII2018 Lab @UNIRSM

https://it.wikipedia.org/wiki/Glitch_(musica)



ispirato al lavoro audio/video minimalista
di Ryoji Ikeda

----------------------------------
<><><><><><><><><><><><><><><><><>
*/


/*
::TO DO::
diminuire la frequenza del random S/H controllandola con il BPM
aggiungere un bottone play/stop
*/

var monoSynth;
var osc; // creo un oscillatore
var playing = false; // condizione di play inizialmente falsa


function setup() {


createCanvas(windowWidth, windowHeight);

  monoSynth=new p5.MonoSynth();
  osc = new p5.Noise(); // tipo di oscillatore che genera un segnale audio
                        // composto da tutte le frequenze a stessa potenza
  osc.setType('pink');

 }

function draw(){
  background(0);
  //frameRate(60);

  // verifica la condizione di playing per attivare o meno l'oscillatore
  if (playing==true){
      sample_hold();
   visual();//
  }
else {osc.stop();}
}

function visual(){
  fill(255);
  noStroke();
  translate((windowWidth/2)-50,(windowHeight/2)-100);
  rectMode(CENTER);

 rect(0, random(200), 100, random(100));
 rect(100, random(200), 100, random(100));


}

function keyPressed(){ // freccia a destra== audio ON; freccia a sinistra== audio OFF
    if (keyCode === RIGHT_ARROW){
        playing=true;
    }
    else if (keyCode === LEFT_ARROW){
        playing=false;
    }

  }

// funzione sample & hold https://it.wikipedia.org/wiki/Sample_and_hold
// genera una sequenza random molto veloce di numeri 0 e 1, che corrispondono
// ad un acceso spento dell'oscillatore.
function sample_hold() {

var trigger=int(random(2)); //
  if (trigger==0){
    osc.start();
    var midiVal = round( random(50,72) );
    monoSynth.triggerAttack(midiVal, random(2) );

  }
  else{
      monoSynth.triggerRelease();
  osc.stop();

  }
}
