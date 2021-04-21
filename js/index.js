import refs from './refs.js'
console.log(refs.choiceBtns)
const CHOICES = [
  { name: 'paper', bits: 'rock' },
  { name: 'scissors', bits: 'paper' },
  { name: 'rock', bits: 'scissors' },
]

// Перебираем кнопки и вешаем на них Слушатель событий

refs.choiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const choiceName = btn.dataset.choice
    console.log('я нажал на', choiceName)
    const userChoice = CHOICES.find((elem) => {
      return elem.name === choiceName
    })
    toChoose(userChoice)
  })
})

// функия, которая делает выбор

function toChoose(value) {
  const compChoose = randomChoose()
  console.log(`выбор компьютера`, compChoose)
  console.log(` выбор пользователя`, value)
}

// функия, которая показывает результат
function showResults() {
  console.log(refs.resultsDivs)
  refs.resultsDivs.forEach((div, index) => {
    console.log(div)
    console.log(index)
    const item = document.createElement('div')
    console.log(item)
    item.classList.add('choice')
    const image = document.createElement('img')
    console.log(image)
    item.appendChild(image)
  })
}
showResults()

// функция рандомного выбора компьютера

function randomChoose() {
  let random = Math.random() * CHOICES.length
  console.log(random)
  let floorRandom = Math.floor(random)
  console.log(floorRandom)
  console.log(CHOICES[floorRandom])
  return CHOICES[floorRandom]
}
toChoose()
