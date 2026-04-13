//  in JS quando serve creare un OGGETTO è sufficiente usare la sua NOTAZIONE LETTERALE:
// Ovvero:
const divano = {
  posti: 3, // Proprietà = coppia chiave:valore che ne descrive una caratteristica
  colore: "rosso",
  feetSupport: true,
  pesante: true,
  massaging: function () {
    //un METODO è una FUNZIONE dentro un OGGETTO, che è intrinseca dell'oggetto stesso, cioè non ha
    // senso che questa proprietà esista al di fuori du questo OGGETTO.
    alert("Ti stai rilassando :)")
  },
}

divano.colore // -> rosso
divano.pesante // -> true
divano.massaging() // -> stampa l'alert con il messaggio

// Ricapitolando in JS non c'è bisogno di una "fabbrica" a monte, l'oggetto può essere creato dal nulla
// questa cosa può sembrare comoda, perché in altri linguaggi più OO ("object oriented") bisogna
// comunque, anche per creare un singolo oggetto, creare prima a monte la sua "fabbrica" che viene definita CLASSE

// questo modo però risulta scomodo e poco pratico quando invece di un singolo oggetto,
// dobbiamo crearne multipli dello stesso tipo

// quindi, come risolviamo questo problema in JS? come possiamo creare anche in JS un modo STRUTTURATO
// per creare gli oggetti, in modo da non dover ricorrere a copincolla, modifiche retroattive, etc.?

// JS possiede fin dai suoi inizio una struttura in grado di creare "in serie" degli
// oggetti dotati di caratteristiche simili -> FUNZIONE COSTRUTTORE (constructor function)

// -> constructor.js
