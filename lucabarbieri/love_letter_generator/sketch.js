// Luca Barbieri @lb © 2017-18 MIT License
// Love Letter Generator M.U.C. | San Marino, RSM | 6.2018
// Educational purpose, made for DSII2018 lab @UniRSM

var intro1 = ["Beloved", "Darling", "Dear", "Dearest", "Fanciful", "Honey"];

var intro2 = ["Chickpea", "Dear", "Duck", "Jewel", "Love", "Moppet", "Sweetheart"];

var adjs = ["affectionate", "amorous", "anxious", "avid", "beautiful", "breathless", "burning", "covetous", "craving", "curious", "eager", "fervent", "fondest", "loveable", "lovesick", "loving", "passionate", "precious", "seductive", "sweet", "sympathetic", "tender", "unsatisfied", "winning", "wistful"];

var nouns = ["adoration", "affection", "ambition", "appetite", "ardour", "being", "burning", "charm", "craving", "desire", "devotion", "eagerness", "enchantment", "enthusiasm", "fancy", "fellow feeling", "fervour", "fondness", "heart", "hunger", "infatuation", "little liking", "longing", "love", "lust", "passion", "rapture", "sympathy", "thirst", "wish", "yearning"];

var advs = ["affectionately", "ardently", "anxiously", "beautifully", "burningly", "covetously", "curiously", "eagerly", "fervently", "fondly", "impatiently", "keenly", "lovingly", "passionately", "seductively", "tenderly", "wistfully"];

var verbs = ["adores", "attracts", "clings to", "holds dear", "hopes for", "hungers for", "likes", "longs for", "loves", "lusts after", "pants for", "pines for", "sighs for", "tempts", "thirsts for", "treasures", "yearns for", "woos"];

var spacing = 25; // set incremental spacing for text line

function setup() {
  textFont("Courier New");
  createCanvas(windowWidth, windowHeight); // set dimension of html view box
  background(241, 241, 241); // set backgorund beige

  textSize(20);
  text('CHRISTOPHER STRACHEY "LOVELETTERS" (1952)',100,100);
}

function draw() {

  // first line
  text(intro1[int(random(0,intro1.length))]
  + " " + intro2[int(random(0,intro2.length))]
  + ",", 100,(windowHeight/5)+spacing);
  // second line
  text("You are my " + nouns[int(random(0,nouns.length))]
  + ", my " + adjs[int(random(0,adjs.length))]
  + " " + nouns[int(random(0,nouns.length))]
  + ".", 100,(windowHeight/5)+spacing*2);

  // third line
  text("My " + adjs[int(random(0,adjs.length))]
  + " " + nouns[int(random(0,nouns.length))]
  + " " + verbs[int(random(0,verbs.length))]
  + " your " + nouns[int(random(0,nouns.length))]
  + ".", 100,(windowHeight/5)+spacing*3);

  // fourth line
  text("You are my " + adjs[int(random(0,adjs.length))]
  + " " + nouns[int(random(0,nouns.length))]
  + ", my " + adjs[int(random(0,adjs.length))]
  + " " + nouns[int(random(0,nouns.length))]
  + ".", 100,(windowHeight/5)+spacing*4);

  // fifth line
  text("Your " + advs[int(random(0,advs.length))]
  + ",", 100,(windowHeight/5)+spacing*5);

  // sixth line
  text("M.U.C.", 100,(windowHeight/5)+spacing*6);

  noLoop();
}

// sviluppi futuri
// 1_pulsante per generare una nuova lettera
// 2_sistema che generi lettere d'amore partendo da un'analisi di tag relativi alla parola "love" di twitter o instagram
// 3_è possibile creare una "love letter" contemporanea fatta di sole emoticon? 
