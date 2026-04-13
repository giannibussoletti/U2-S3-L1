const nomeInput = document.getElementById("nome-input")
const cognomeInput = document.getElementById("cognome-input")
const ageInput = document.getElementById("age-input")
const locationInput = document.getElementById("location-input")
const formPerson = document.getElementById("form-age")
const rubrica = document.getElementById("rubrica")
const paragraphAge = document.createElement("p")
let oldUser = {
  nome: "default",
  cognome: "User",
  age: 0,
  location: "IT",
}

//

class UserData {
  constructor(_nome, _cognome, _age, _location) {
    this.nome = _nome
    this.cognome = _cognome
    this.age = _age
    this.location = _location
  }
  ageConfront = function (otherPerson) {
    if (this.age > otherPerson.age) {
      return (paragraphAge.innerText = `${this.nome} è più grande di ${otherPerson.nome}`)
    } else if (this.age < otherPerson.age) {
      return (paragraphAge.innerText = `${this.nome} è più piccolo di ${otherPerson.nome}`)
    } else if (otherPerson.nome === "default") {
      return (paragraphAge.innerText = ``)
    } else {
      return (paragraphAge.innerText = `${this.nome} e ${otherPerson.nome} hanno la stessa età`)
    }
  }
}

formPerson.addEventListener("submit", function (e) {
  e.preventDefault()
  const nome = nomeInput.value
  const cognome = cognomeInput.value
  const age = ageInput.value
  const location = locationInput.value
  const newUser = new UserData(nome, cognome, age, location)

  newUser.ageConfront(oldUser)

  const divCard = document.createElement("div")
  divCard.classList.add("card", "my-3")

  const divBody = document.createElement("div")
  divBody.classList.add("card-body")

  const h5 = document.createElement("h5")
  h5.classList.add("card-title")
  h5.innerText = `${newUser.nome} ${newUser.cognome}`

  const h6 = document.createElement("h6")
  h6.classList.add("card-subtitle", "mb-2", "text-body-secondary")
  h6.innerText = newUser.location

  const p = document.createElement("p")
  p.classList.add("card-text")
  p.innerText = `età: ${newUser.age}`

  divCard.appendChild(divBody)
  divBody.appendChild(h5)
  divBody.appendChild(h6)
  divBody.appendChild(p)
  divBody.appendChild(paragraphAge)
  rubrica.appendChild(divCard)

  oldUser = newUser
  formPerson.reset()
})
