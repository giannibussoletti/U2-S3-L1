const nomeAnimaleInput = document.getElementById("nome-input")
const PadroneInput = document.getElementById("owner-input")
const specieInput = document.getElementById("specie-input")
const razzaInput = document.getElementById("razza-input")
const formAnimal = document.getElementById("form-animal")
const animalList = document.getElementById("rubrica")
const paragraphOwner = document.createElement("p")
let oldPet = {
  nomeAnimale: "GaRgAnTuEsCo",
  padrone: "Francesco",
  specie: "Cane",
  razza: "Dalmata",
}

class AnimalData {
  constructor(_nomeAnimale, _padrone, _specie, _razza) {
    this.nomeAnimale = _nomeAnimale
    this.padrone = _padrone
    this.specie = _specie
    this.razza = _razza
  }
  ownerConfront = function (otherPet) {
    if (this.padrone === otherPet.padrone) {
      return (paragraphOwner.innerText = `${this.nomeAnimale} e ${otherPet.nomeAnimale} hanno lo stesso padrone`)
    } else if (otherPet.nomeAnimale === "GaRgAnTuEsCo") {
      return (paragraphOwner.innerText = "")
    } else {
      return (paragraphOwner.innerText = `Padrone Unico`)
    }
  }
}

formAnimal.addEventListener("submit", function (e) {
  e.preventDefault()
  const nomeAnimale = nomeAnimaleInput.value
  const padrone = PadroneInput.value
  const specie = specieInput.value
  const razza = razzaInput.value
  const newAnimal = new AnimalData(nomeAnimale, padrone, specie, razza)

  const divCard = document.createElement("div")
  divCard.classList.add("card", "my-3")

  const divBody = document.createElement("div")
  divBody.classList.add("card-body")

  const h5 = document.createElement("h5")
  h5.classList.add("card-title")
  h5.innerText = newAnimal.nomeAnimale

  const h6 = document.createElement("h6")
  h6.classList.add("card-subtitle", "mb-2", "text-body-secondary")
  h6.innerText = newAnimal.padrone

  const parSpecie = document.createElement("p")
  parSpecie.classList.add("card-text", "m-0")
  parSpecie.innerText = `Specie: ${newAnimal.specie}`

  const parRazza = document.createElement("p")
  parRazza.classList.add("card-text")
  parRazza.innerText = `Razza: ${newAnimal.razza}`

  newAnimal.ownerConfront(oldPet)

  divCard.appendChild(divBody)
  divBody.appendChild(h5)
  divBody.appendChild(h6)
  divBody.appendChild(parSpecie)
  divBody.appendChild(parRazza)
  divBody.appendChild(paragraphOwner)
  animalList.appendChild(divCard)

  oldPet = newAnimal
  formAnimal.reset()
})
