// Una FUNZIONE COSTRUTTORE in JS è una FABBRICA DI OGGETTI
// quando si ha la necessità di creare tanto oggetti in serie tutti uguali, ha senso spendere un po'
// più di tempo all'inizio impegnandosi a creare una FABBRICA per i nostri oggetti
// in modo da poi poterli creare con poco sforzo sfruttando la struttura che abbiamo creato a monte.

// NOTAZIONE LETTERALE
const person = {
  nome: "gianni",
  cognome: "rossi",
  età: 24,
  skill: ["cucina", "video"],
  paese: "IT",
  tel: "+39123456789",
  email: "gianni.rossi@mail.com",
  salutare: function () {
    console.log("questo è this", this)
    // this è una parola riservata in JS che punta sempre al contesto di esecuzione corrente
    // Es. adesso siamo dentro un metodo di un OGGETTO, quindi "this" proprio all'oggetto
    return `Ciao, io mi chiamo ${this.nome} ${this.cognome} e mi piace ${this.skill[0]}`
  },
}
// person.salutare()

// se invece avessi la necessità con questo "schema", cioè con le stesse chiavi invece che copia incollare 100 volte con il rischio di sbagliare
// posso valutare la creazione di una FUNZIONE COSTRUTTORE

// quando si creara una FUNZIONE COSTRUTTORE, la nomenclatura richiede il PascalCase
// che a differenza della camelCase, mette anche la prima lettera DEVE ESSERE IN MAIUSCOLO

const FabbricaDiPersone = function () {
  // questa sarà la nostra "fabbrica" (blueprint)
  this.nome = "" // dobbiamo comunque assegnare un valore alla proprietà
  this.cognome = ""
  this.età = 0
  this.skill = []
  this.paese = ""
  this.tel = ""
  this.email = ""
  this.salutare = function () {
    return `Ciao, io mi chiamo ${this.nome} ${this.cognome} e mi piace ${this.skill[0]}`
  }
}

// LA FABBRICA è COMPLETATA

// ora provviediamo ad "accendere" la fabbrica ed avviare il nastro trasportatore
const p1 = new FabbricaDiPersone()
// p1 è un oggetto, in maniera tecnica si dice che p1 è un ISTANZA di FabbricaDiPersone
console.log(p1)
p1.nome = "Gianni"
p1.cognome = "Rossi"
p1.età = "24"
p1.skill = ["danzare"]
p1.paese = "RU"
p1.tel = "+032656898"
p1.email = "Giannirossi.info@gmail.com"

// Come facciamo però a riempire il blueprint senza doverlo fare manualmente ogni singola proprietà?
// In questo caso si utilizza nella funzione costruttore dei PARAMETRI:

// creiamo un altra funzione costruttore in cui devono arrivare diversi parametri e possono essere identificati
const NamedPerson = function (
  _nome, // L'underscore davanti non è obbligatorio
  _cognome, // ma consigliato per rendere più chiara la differenza
  _età, //tra il nome del parametro e il nome della proprietà
  _skill, //
  _paese, //
  _tel, //
  _email, //
) {
  this.nome = _nome
  this.cognome = _cognome
  this.età = _età
  this.skill = _skill
  this.paese = _paese
  this.tel = _tel
  this.email = _email
  this.salutare = function () {
    return `Ciao, io mi chiamo ${this.nome} ${this.cognome} e mi piace ${this.skill[0]}`
  }
  //
}

const np1 = new NamedPerson(
  "Marco",
  "Fanfoli",
  32,
  ["Panettiere", "Ingegnere"],
  "GE",
  "+393234567985",
  "marco@mail.net",
)

console.log(np1)
