# IL QUADRO DELLA SITUAZIONE
## #riusabile #eclettico #modulabile
### CONCEPT
>Radio, televisore, telefono, social, vetrine, bollette, siamo costantemente immersi nella comunicazione. In un ambiente iper-informante, dove la prestanza atletica non è più rilevante per garantire l'autosopravvivenza, il senso critico diventa fondamentale. Più ci si allena, o meglio, più punti di vista si ascoltano su un argomento più la nostra percezione di esso tenderà alla realtà. Se la nostra conoscienza di un argomento è bassa la nostra opinione sarà facilmente manipolabile e alcuni contenuti censurabili da chi possiede la maggior parte della nostra attenzione.  
Il Quadro della Situazione è la fisicizzazione modulabile di un dato. Il modulo iQdS permette lo scraping di dati da Google Trends, Instagram, Google News e Twitter e un'assegnazione facile del tipo di dato rischiesto. Una tela nera, appesa al muro, intelaiata, retroilluminata da più strisce led disposte orizzontalmente una sopra l'altra e dotata di più motori a vibrazione collegati ad un Arduino, si illumina totalmente e vibra per 2 secondi quando lo scraper rileva un dato richiesto. Il contatore di dati viene aggiornato. Ogni tot dati viene accesa permanentemente una nuova striscia led che, progressivamente dal basso, retroillumina proporzionalmente il modulo. La composizione di più iQdS permette il confronto tra più dati. La vibrazione attira l'attenzione e le diverse porzioni di retroilluminazione dei vari quadri, accompagnate dalle parole chiave corrispondenti, raccontano un confronto fra interessi sociali, tra argomenti parlati (chi più chi meno), tra piattaforme, tra linguaggi.  
Il Quadro della Situazione non allena i nostri anticorpi a combattere le fake news, la fuffa e le manipolazioni ma ambisce a generare nell'utente un'analisi del proprio palinsesto informativo, dei propri interessi, e una propulsione alla fruizione di comunicati nuovi, stimolanti e vari per avere una visione, di quello che ci circonda, sempre più tendente alla realtà.

![Imgur](https://imgur.com/01ivCpX.jpg)

### REFERENZE
#### Garden of Eden - Thorsten Kiesl, Harald Moser, and Timm-Oliver Wilks (2007)
>Garden of Eden è un progetto composto da otto lattughe, ognuna delle quali è racchiusa nella sua scatola di plexiglas a tenuta d'aria e rappresenta una grande città. La concentrazione dell'ozono in ciascuna scatola è controllata in tempo reale per riflettere l'attuale livello di inquinamento nella città.

![Imgur](https://imgur.com/klqOLAD.png)
![Imgur](https://imgur.com/vcyNAR7.png)


#### Dynamic Physical Charts to Communicate Community Data - David Sweeney (2014)
>David Sweeney di Microsoft Research ha progettato Dynamic Physical Charts, dei diagrammi fisici guidati meccanicamente per comunicare i dati alle persone che vivono o lavorano a Tenison Road a Cambridge, nel Regno Unito. Le classifiche fanno parte di un progetto di ricerca  per esplorare la comprensione dei dati da parte del pubblico e come può essere utilizzato per migliorare la vita a livello stradale: un migliore accesso ai servizi, il miglioramento delle relazioni sociali, un migliore coinvolgimento con la governance locale, eccetera.

![Imgur](https://imgur.com/4YV4mHd.jpg)
![Imgur](https://imgur.com/UuHG6N1.jpg)


#### Participatory Representation of Happiness - Stefan Sagmeister (2015)
>Questa fisizzazione del 2015 faceva parte della [*mostra sulla felicità*](https://sagmeisterwalsh.com/work/all/the-happy-show/) del designer Stefan Sagmeister . Contiene una rappresentazione partecipativa della felicità del telespettatore, che richiama il [*sondaggio MOMA*](http://dataphys.org/list/moma-poll-haackes-participatory-bar-chart/) di  Hans Haacke  (1970) e  il [*grafico partecipativo*](http://dataphys.org/list/physical-bar-charts/) di Lucy Kimball  (2006). Le unità che costituiscono la rappresentazione sono gumballs, come  la [*rappresentazione partecipativa*](http://dataphys.org/list/physical-visual-sedimentation/) di Jennifer Payne  (2014). A differenza degli esempi citati in Participatory Representation of Happiness le gummball vengono lasciate all'utente come regalo (e non viene chiesto loro di spostarle da un'altra parte) e l'indicatore fisico ad istogramma funziona con i vuoti in quanto il progetto è pensato per sottrazione delle gummball.

![Imgur](https://imgur.com/VIYKCmJ.jpg)



### DATI
>I dati vengono prelevati con uno scraper messo a disposizione su Github, scritto in linguaggio [*Python*](https://www.python.org/about/apps/). Nell'idea dimostrativa del progetto viene scrappato, da Google Trend, l'andamento delle prescelte parole chiave; ma la flessibilità del progetto, oltre a rendere facile l'aggiornamento delle parole chiave da confrontare, permette di poter scegliere fra 4 piattaforme diverse dove fare scraping:  
[**Google Trends**](https://github.com/clintonboys/trendy-scraper)  
[**Instagram**](https://github.com/rarcega/instagram-scraper)  
[**Google News**](https://github.com/jm-contreras/google-news)  
[**Twitter**](https://github.com/taspinar/twitterscraper)  
Funzione php per il Web Scraping [+](https://www.lombardoandrea.com/funzione-php-per-il-web-scraping/)


### ELABORAZIONE
>I dati vengono consegnati ad [*Arduino*](https://www.arduino.cc/) che li converte in segnale per i [*led*](https://www.pannelloled.it/striscia-led-singola-rgb-5m-60led) e i [*motori a vibrazione*](https://www.cariatielettronica.eu/motori/2653-motore-a-vibrazione-vibratore-15v-arduino.html). Ogni volta che viene scrappata una parola chiave viene inviato un segnale ad Arduino che fa illuminare per 2 secondi tutti i led del quadro corrispondente e fa vibrare per 2 secondi i motori. Nel frattempo il corrispettivo contatore di parole chiave scrappate si incrementa proporzionalmente e ogni 100 parole chiave accumulate manda un segnale che fa illuminare permanentemente, partendo dal basso, una nuova striscia di led.  
Analizza XML per estrarre dati meteo dal Web con Arduino [+](http://forum.arduino.cc/index.php/topic,39023.0.html) [+](https://forum.arduino.cc/index.php?topic=224719.0)  
Funzione php per il web scraping [+](https://www.lombardoandrea.com/funzione-php-per-il-web-scraping/)  



### VISUALIZZAZIONE
>Più della metà delle ricerche su [*Google*](https://www.theverge.com/2015/10/8/9480779/google-search-mobile-vs-desktop-2015) vengono fatte da mobile. Il modulo iQdS è una sintesi geometrica dei telefoni che abbiamo in tasca: un parallelepipedo sottile, retroilluminato, che occasionalmente vibra. La ricerca di un utente su Google (o più genericamente, l'azione di un utente su una delle 4 piattaforme a disposizione), se corrispondente a quella scelta per l'iQdS, viene prelevata, elaborata in segnali per Arduino e quindi proposta ad un altro utente che la percepirà, attraverso l'iQdS, sotto forma di vibrazione e luminosità. Il dato viene quindi archiviato e trasformato in segnale per le strisce orizzontali di led, contenute nel modulo, che, progressivamente dal basso, si illuminano proporzionalmente ai dati archiviati dall'avvio.

![Imgur](https://imgur.com/khY9pE4.jpg)


### OUTPUT
>L'utente entra in una stanza, vede delle tele nere intelaiate e retroilluminate appese al muro come quadri. Sembrano quasi degli smart-phone dalla forma. La retroilluminazione varia d'intensità di quadro in quadro. Sopra ogni quadro ci sono scritte delle parole chiave, incorniciate in un rettangolo che ricorda quello di Google search (oppure le parole precedute dagli # per i social), e sopra di esse il titolo "il Quadro della Situazione". Uno di quei quadri improvvisamente vibra e si illumina per pochi secondi, poi un altro, poi un altro ancora per sei volte di fila. Quest'ultimo, dopo la serie di vibro-illuminazioni, diventa permanentemente più illuminato raggiungendo la stessa intensità di quello a fianco. L'utente capisce che c'è una corrispondenza tra hashtag e illuminazione. Quello che l'utente penserà dopo aver capito la metafora popolarità-argomento/illuminazione dipende dal curatore degli argomenti scelti per il confronto.



### CLOSE READING
#### Cos'è?
>Il Quadro della Situazione è un modulo comunicativo facilmente riprogrammabile, che rappresenta, tramite illuminazione e vibrazione, un dato trovato sul web.
#### Come funziona?
>Da Google News, Google Trends, Instagram e Twitter viene scrappata una tipologia di dati prescelti da un curatore che li ha assegnati a un determinato modulo iQdS. Questi dati vengono consegnati ad un Arduino che li converte in segnale per delle strisce di led e dei motori a vibrazione. Ogni volta che viene rilevato un dato Arduino fa illuminare tutti i led all'interno del modulo e fa vibrare i motori per 2 secondi. L'accumulazione dei dati raccolti dall'inizio dello scraping viene proporzionalmente tradotta in retroilluminazione permanente degli iQdS. Il tipo di dato assegnato è scritto sopra al modulo.
#### Cosa significa?
>L'associazione di più moduli crea una composizione che racconta le scelte e gli interessi degli utenti web. L'utente dentro di sè ricalibra la propria percezione dell'informazione pubblica: chi continuando con nuove riflessioni e chi continuando con la barzelletta interrotta poco prima.
#### E se fosse?!
>E se non venisse comunicato all'utente il tipo di dato assegnato ad ogni iQdS?! E se l'utente avesse un foglietto con elencati in modo sparso le parole chiave e dovesse provare a indovinare l'associazione giusta?! E se ci fosse alla fine del "gioco" la possibilità di confrontare la propria percezione con quella reale e con quella degli altri?! All'inizio dell'esperienza verrebbe consegnato un foglietto diviso in due parti: da un lato l'elenco sparso degli argomenti e dall'altro un'immagine a pattern di linee che lascia pochi bianchi apparentemente tutta in outline rosso. L'utente dopo aver formulato la sua associazione potrebbe andare col biglietto sotto una lente di film trasparente rosso, posta alla fine dell'esperienza, e verificare la propria percezione con la realtà in quanto il pattern si perderebbe diventando sfondo omogeneo che farebbe risaltare la soluzione scritta in celestino e quindi non visibile senza lente.

![Imgur](https://imgur.com/LRIYG5Q.jpg)


### DESIGN FICTION
>Nel 2050 il progetto, mantenendo lo stesso principio, consisterebbe nello scraping del pensiero di tutti e ogni volta che qualcuno pensa a noi verrebbe inviato un segnale che il nostro cervello tradurrebbe in fischio.
