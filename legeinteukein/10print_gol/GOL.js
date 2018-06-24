// GOL by legeinteukein [gol, 10print]
// 2018 © legeinteukein, Daniele @Fupete and the course DSII2018 @UniRSM
// github.com/fupete — github.com/dsii-2018-unirsm
// Educational purposes, MIT License, 2018, San Marino

 //@description A basic implementation of John Conway's Game of Life CA
 //(<a href="http://natureofcode.com">natureofcode.com</a>)


var w;
var columns;
var rows;
var board;
var next;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = 20;
  // calcolare colonne e righe
  columns = floor(width/w);
  rows = floor(height/w);
  //creazione array 2d
  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  }
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  background(255);
  generate();
  for ( var i = 0; i < columns;i++) {
    for ( var j = 0; j < rows;j++) {
      /* and now let's roll 10print style... */
      //@fupete based on original example Game of Life
      //educational purpose, just changed the "random" in draw...
      //to render a perpetual 'living'10print on screen

      if ((board[i][j] == 1))  // < the coin
        line(i/2*w, j*w, i/2*w +w-1, j*w+w-1); // < face
      else line(i*w+w-1, j/2*w, i*w, j/2*w+w-1);  // < cross
    }
  }

}

// resettare la schermata quando si clicca con il mouse
function mousePressed() {
  init();
}

// riempimento randomico tabella
function init() {
  for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
      // allineamento con velocità fotogrammi 5
      frameRate(5);
      if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      // riempi il resto a caso
      else board[i][j] = floor(random(2));
      next[i][j] = 0;
    }
  }
}

// processo che crea una nuova generazione
function generate() {

  // Loop di controllo vicini e creazione nuovo 2d array
  for (var x = 1; x < columns - 1; x++) {
    for (var y = 1; y < rows - 1; y++) {
      //controllo

      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }

      //conteggio vicini
      neighbors -= board[x][y];
      // regole
      if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // morte
      else if ((board[x][y] == 1) && (neighbors ==  3)) next[x][y] = 1;          //sissione binaria
      else if ((board[x][y] == 0) && (neighbors == 2 )) next[x][y] = 1;          // riproduzione
      else if ((board[x][y] == 1) && (neighbors >  4)) next[x][y] = 0;           // Sovrapopolazione
      else if ((board[x][y] == 0) && (neighbors == 4)) next[x][y] = 1;           // figlio tetrade
      else                                             next[x][y] = board[x][y]; // stasi
    }
  }


  var temp = board;
  board = next;
  next = temp;
}
