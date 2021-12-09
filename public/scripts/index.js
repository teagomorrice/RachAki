// select .jogos-box from document
const jogos = document.querySelector('.jogos')

// array to store all matches
const matches = []

// get local storage id
const id = localStorage.getItem('@rachaki/id')

// get local storage saved matches
for (let index = 1; index <= id; index++) {
  const match = JSON.parse(localStorage.getItem(`@rachaki/jogo${index}`))
  if (match) {
    matches.push(match)
  }
}

// insert all matches in jogos-box
matches.forEach(match => {
  // create 'jogo' element to insert in jogos-box
  const jogo = document.createElement('div')
  jogo.classList.add('jogo')

  // title of the game
  const gameName = document.createElement('span')
  gameName.classList.add('game-name')
  gameName.innerHTML = match.name

  // inserting game category in jogo
  const gamePropCategory = document.createElement('span')
  gamePropCategory.classList.add('game-props')

  // add fixed label
  const propName = document.createElement('span')
  propName.classList.add('prop-name')
  propName.innerHTML = 'Esporte'
  gamePropCategory.appendChild(propName)

  // add value
  const gameCategory = document.createElement('span')
  gameCategory.innerHTML = match.category
  gamePropCategory.appendChild(gameCategory)

  // inserting game quantity in jogo
  const gamePropQuantity = document.createElement('span')
  gamePropQuantity.classList.add('game-props')

  // add fixed label
  const propNameQuantity = document.createElement('span')
  propNameQuantity.classList.add('prop-name')
  propNameQuantity.innerHTML = 'Pessoas'
  gamePropQuantity.appendChild(propNameQuantity)

  // add value
  const gameQuantity = document.createElement('span')
  gameQuantity.innerHTML = match.quantity
  gamePropQuantity.appendChild(gameQuantity)

  // inserting game data in jogo
  const gamePropData = document.createElement('span')
  gamePropData.classList.add('game-props')

  // add fixed label
  const propNameData = document.createElement('span')
  propNameData.classList.add('prop-name')
  propNameData.innerHTML = 'Data'
  gamePropData.appendChild(propNameData)

  // add value
  const gameData = document.createElement('span')
  gameData.innerHTML = match.data
  gamePropData.appendChild(gameData)

  // inserting game hour in jogo

  const gamePropHour = document.createElement('span')
  gamePropHour.classList.add('game-props')

  // add fixed label
  const propNameHour = document.createElement('span')
  propNameHour.classList.add('prop-name')
  propNameHour.innerHTML = 'Horário'
  gamePropHour.appendChild(propNameHour)

  // add value
  const gameHour = document.createElement('span')
  gameHour.innerHTML = match.hour
  gamePropHour.appendChild(gameHour)

  // inserting game adress in jogo
  const gamePropAdress = document.createElement('span')
  gamePropAdress.classList.add('game-props')

  // add fixed label
  const propNameAdress = document.createElement('span')
  propNameAdress.classList.add('prop-name')
  propNameAdress.innerHTML = 'Local'
  gamePropAdress.appendChild(propNameAdress)

  // add value
  const gameAdress = document.createElement('span')
  gameAdress.innerHTML = match.adress
  gamePropAdress.appendChild(gameAdress)

  // create 'button' element to insert in jogo
  const gameButton = document.createElement('button')
  gameButton.classList.add('game-button')

  // insert url of game
  const gameUrl = document.createElement('a')
  gameUrl.classList.add('game-url')
  gameUrl.href = match.url
  gameUrl.target = '_blank'
  gameUrl.innerHTML = 'Entrar'
  gameButton.appendChild(gameUrl)

  // create 'delete' element to insert in jogo
  const gameDelete = document.createElement('button')
  gameDelete.classList.add('game-delete')
  gameDelete.innerHTML = 'Remover'

  gameDelete.addEventListener('click', event => {
    event.preventDefault()
    const index = matches.findIndex(match => match.id === match.id)
    matches.splice(index, 1)
    localStorage.setItem('@rachaki/id', matches.length)
    localStorage.removeItem(`@rachaki/jogo${index + 1}`)
    jogos.removeChild(jogo)
  })

  // insert all elements in jogo
  jogo.appendChild(gameName)
  jogo.appendChild(gamePropCategory)
  jogo.appendChild(gamePropQuantity)
  jogo.appendChild(gamePropData)
  jogo.appendChild(gamePropHour)
  jogo.appendChild(gamePropAdress)
  jogo.appendChild(gameButton)
  jogo.appendChild(gameDelete)

  // add jogo to jogos-box
  jogos.appendChild(jogo)
})
