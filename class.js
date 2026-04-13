// "CLASS" è una parola chiave riservata in JS che è stata introddot
// per uniformare la creazione di "fabbriche di oggetti", seguendo una formula più standard
// al pari delle classi di JAVA e C#
// Ma le classi sono semplicemente delle funzioni costruttori "con un altro nome"

class NamedPerson {
  constructor /*Questo nome della funzione è fisso ed è una parola riservata*/(
    _nome,
    _cognome,
    _età,
    _skill,
    _paese,
    _tel,
    _email,
  ) {
    // i parametri relativi ai valori che finiranno nelle proprietà dell'oggetto arriveranno qui
    // dentro il constructor si vanno a definire le proprietà dei futuri oggetti
    // che dipendono dai parametri dichiarati
    this.nome = _nome
    this.cognome = _cognome
    this.età = _età
    this.skill = _skill
    this.paese = _paese
    this.tel = _tel
    this.email = _email
    // tutte le proprietà inizializzate nel constructor DEVONO avere "this"
  }
  // Se abbiamo anche delle proprietà il cui valore è statico si possono inserire nella classe
  // e non nel constructor, non c'è differenza ma risulta più ordinato
  salutare = function () {
    return `Ciao, io mi chiamo ${this.nome} ${this.cognome} e sono un ${this.skill[0]}`
  }
  numeroDiGambe = 2 // Questa proprietà non cambiera mai e non ha bisogno del "this"
  // tutte le proprietà inizializzate fuori il constructor NON DEVONO avere "this"
}

// Le classi si richiamano esattamente come le funzioni costruttore

const np3 = new NamedPerson(
  "Marco",
  "Fanfoli",
  32,
  ["Panettiere", "Ingegnere"],
  "GE",
  "+393234567985",
  "marco@mail.net",
)

console.log("named person 3", np3)

// UN ULTIMO GRANDE ESEMPIO
// creare le funzioni tramite la parola class permette uno step in piu:
// permette di creare delle sotto classi di classi

// andiamo a creare la classe DEVELOPER essendo anche loro persone
// quindi per definire le loro proprietà PARTIRÒ dalla classe NamedPerson, aggiungendo le proprietà
// alle caratteristiche che mancano

class Developer extends NamedPerson {
  // Developer è una SOTTO-CLASSE di NamedPersone
  // riceverà in dote tutte le proprietà di name persone
  // e in aggiunta avrà delle caratteristiche che lo distinguono dalle persone normali
  // proprio perché un developer
  constructor(
    _nome, // Anche nelle sotto classi vanno ridichiarati tutti i parametri della classe superiore
    _cognome,
    _età,
    _skill,
    _paese,
    _tel,
    _email,
    _programmingLanguages,
    _yearsOfExperience,
    _currentCompany,
  ) {
    // Non c'è bisogno di riscrivere tutti i parametri di NamedPerson
    super(_nome, _cognome, _età, _skill, _paese, _tel, _email)

    // la parola "super" va a richiamare i parametri della classe principale NamedPerson
    // Che si occuperò delle prime sette caratteristiche, in questa sottoclasse andiamo ad aggiungere i this dei
    // due nuovi parametri
    this.programmingLanguages = _programmingLanguages
    this.yoe = _yearsOfExperience
    this.currentCompany = _currentCompany
    // Voglio creare poi un MEDOTO(funzione) dentro la classe developer che confronti currentCompany
    // dei vari sviluppatori per vedere se lavorano nella stessa azienda
  }
  areWeWorkingTogether = function (otherDev) {
    if (this.currentCompany === otherDev.currentCompany) {
      console.log("Colleghi")
    } else {
      console.log("Non Colleghi")
    }
  }
}

const dev1 = new Developer(
  "Giorgio",
  "Romagnoli",
  25,
  ["Cantante", "Pastore"],
  "IT",
  "+39323442434",
  "giorgio@mail.net",
  ["JS", "Typescript"],
  10,
  "Google",
)

const dev2 = new Developer(
  "Giorgio",
  "Romagnoli",
  25,
  ["Cantante", "Pastore"],
  "IT",
  "+39323442434",
  "giorgio@mail.net",
  ["python", "Typescript"],
  10,
  "Facebook",
)

dev1.areWeWorkingTogether(dev2)

const dev3 = new Developer(
  "Francesco",
  "Proietti",
  35,
  ["Programmatore", "Pastore"],
  "SP",
  "+39dadasda34",
  "proiettidev@mail.net",
  ["SQL", "Typescript"],
  10,
  "Facebook",
)
dev2.areWeWorkingTogether(dev3)
