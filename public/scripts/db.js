const form = document.querySelector('#game-form')
const gameButton = form.querySelector('#game-button')
const gameName = form.querySelector('#game-name')
const gameCategory = form.querySelector('#game-category')
const gameQuantity = form.querySelector('#game-quantity')
const gameData = form.querySelector('#game-data')
const gameHour = form.querySelector('#game-hour')
const gameUrl = form.querySelector('#game-url')
const gameAdress = form.querySelector('#game-adress')

// function to verify if input is empty
function validateInput(input) {
  input.value.trim() === ''
    ? input.classList.add('is-invalid')
    : input.classList.remove('is-invalid')
}

function generateId() {
  let i
  localStorage.getItem('@rachaki/id')
    ? (i = parseInt(localStorage.getItem('@rachaki/id')) + 1)
    : (i = 1)
  localStorage.setItem('@rachaki/id', i)
  return i
}

gameButton.addEventListener('click', event => {
  event.preventDefault()

  validateInput(gameName)
  validateInput(gameCategory)
  validateInput(gameQuantity)
  validateInput(gameHour)
  validateInput(gameUrl)
  validateInput(gameAdress)

  document.querySelectorAll('.is-invalid').forEach(input => {
    alert(`O campo ${input.placeholder} não pode ser vazio`)
  })

  document.querySelectorAll('.is-invalid').length === 0 && saveGame()

  function saveGame() {
    gameObject = {
      id: generateId(),
      name: gameName.value,
      category: gameCategory.value,
      quantity: gameQuantity.value,
      data: gameData.value,
      hour: gameHour.value,
      url: gameUrl.value,
      adress: gameAdress.value
    }

    localStorage.setItem(
      `@rachaki/jogo${gameObject.id}`,
      JSON.stringify(gameObject)
    )

    alert('Jogo cadastrado com sucesso!')
    form.reset()
  }
})
