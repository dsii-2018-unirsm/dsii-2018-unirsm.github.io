// Stampa una delle quattro parole

void setup () {
  fullScreen();
}

void draw() {
  background(random(255));


  String [] lettera1 = {"B", "C", "D", "F", "G", "Q", "L", "N", "P", "R", "S", "T", "V", "Z", };
  int index = int (random (14));

  String [] lettera2 = {"a", "e", "i", "o", "u", };
  int index2 = int (random (5));

  String [] lettera3 = {"cc", "zz", "dd", "gg", "ff", "pp", "ss", "tt", "xx", "ll", };
  int index3 = int (random (10));

  String [] lettera4 = {"i", "u", "a", "e", "o", };
  int index4 = int (random (5));

  String [] lettera5 = {"l", "m", "n", "b", "c", "g", "d", "q", "r", "p", "s", "t", "z", "v", };
  int index5 = int (random (14));

  String [] lettera6 = {"are", "ere", "ire", "ing", };
  int index6 = int (random (4));

  PFont font;









  String [] parola1 = {"il vicino", "il traffico", "un prof.", "il telefono", "internet", "tua madre", "la tua persona", "lo sbirro", "il barista", "un amico", "il gatto", "la fidanzata", "un vip", "il tempo", "l'industria", };
  int index11 = int (random (14));

  String [] parola2 = {"spedisce", "vede", "cerca", "breveta", "inquina", "cade", "consuma", "spende", "condivide", "invidia", "mangia", "ruba", "intrattiene", "brucia", "distrugge", "sposta", "alza", "manda", "vende", "scrive", "indossa", "posta", "usa", "getta", "confeziona", };
  int index22 = int (random (25));

  String [] parola3 = {"pensieri", "cibo", "aria", "acqua", "follower", "emoji", "male", "vestiti", "neuroni", "messaggi", "vocali", "macchine", "scarpe", "storie", "video", "amici", "prodotti", "notizie", "barbarie", };
  int index33 = int (random (19));

  String [] parola4 = {"cinesi.", "americani.", "di stato.", "stupidi.", "manipolati.", "porno.", "industriali.", "rosa.", "alla moda.", "blasonati.", "sfuggenti.", "censurati.", "vegan.", "scadenti.", "zuccherati.", "ignoranti.", "fake.", "ad personam.", "pop.", "on line.", "su amazon.", "su facebook.", "su instagram.", "su youtube.", "della tua ex.", "a scuola.", "nerdando.", };
  int index44 = int (random (27));









  font = createFont("TypewalkMono1915-Medium.otf", 200);

  textFont(font);
  int a=width/2-600;
  int aa=height/2;
  int b=width/30;
  int c=height/10;

  text((lettera1 [index]), a, aa);
  text((lettera2 [index2]), a+120, aa);
  text((lettera3 [index3]), a+240, aa);
  text((lettera4 [index4]), a+480, aa);
  text((lettera5 [index5]), a+600, aa);
  text((lettera6 [index6]), a+720, aa);

  if (mousePressed) {

    background(200);
    text((lettera1 [index]), b, c);
    text((lettera2 [index2]), b+120, c);
    text((lettera3 [index3]), b+240, c);
    text((lettera4 [index4]), b+480, c);
    text((lettera5 [index5]), b+600, c);
    text((lettera6 [index6]), b+720, c);
    strokeWeight(8);
    line (b, c+80, b+1200, c+80);
    textSize(30);
    text("Dizionario del no sense", b, c+120);




    textSize(60);
    text("Dal flatlandese ", b, c+280);
    text((lettera1 [index]), b+570, c+280);
    text((lettera2 [index2]), b+605, c+280);
    text((lettera3 [index3]), b+640, c+280);
    text((lettera6 [index6]), b+710, c+280);
    text(".", b+815, c+280);

    text("Il verbo viene usato quando", b, c+350);
    text((parola1 [index11]), b+990, c+350);
    text("al momento giusto", b, c+420);
    text((parola2 [index22]), b+630, c+420);
    text("una serie di", b, c+490);
    text((parola3 [index33]), b+480, c+490);
     text((parola4 [index44]), b+800, c+490);





    noLoop();
  } 
}