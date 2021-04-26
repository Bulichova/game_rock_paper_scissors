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
  showResults([value, compChoose])
  showWinner([value, compChoose])
}

// функия, которая показывает результат
function showResults(results) {
  console.log(refs.resultsDivs)
  refs.resultsDivs.forEach((div, index) => {
    setTimeout(() => {
      const item = document.createElement('div')
      item.classList.add('choice')
      // console.log(results[index])
      item.classList.add(`${results[index].name}`)
      const image = document.createElement('img')
      image.src = `./images/icon-${results[index].name}.svg`
      image.alt = 'icon'
      console.log(image)
      item.appendChild(image)
      div.appendChild(item)
    }, index * 1000)
  })
  refs.sectionGame.classList.toggle('hidden')
  refs.resultsDiv.classList.toggle('hidden')
}

// функция: кто победил!
function showWinner(results) {
  setTimeout(() => {
    const userWinn = results[0].bits === results[1].name
    const compWinn = results[1].bits === results[0].name
    if (userWinn) {
      refs.resultsText.innerText = 'Вы победили!'
      refs.resultsDivs[0].classList.toggle('winner')
      
    } else if (compWinn) {
      refs.resultsText.textContent = 'Вы проиграли'
      refs.resultsDivs[1].classList.toggle('winner')
    } else {
      refs.resultsText.textContent = 'Победила ДРУЖБА'
    }
    refs.resultsWinner.classList.toggle('hidden')
    refs.resultsDiv.classList.toggle('show-winner')
  }, 1000)
}

// функция рандомного выбора компьютера

function randomChoose() {
  let random = Math.random() * CHOICES.length
  // console.log(random)

  let floorRandom = Math.floor(random)
  // console.log(floorRandom)
  // console.log(CHOICES[floorRandom])
  return CHOICES[floorRandom]
}

refs.playAgain.addEventListener('click', () => {
  refs.sectionGame.classList.toggle('hidden')
  refs.resultsDiv.classList.toggle('hidden')
  refs.resultsDivs.forEach((div) => {
    div.innerHTML = ''
    div.classList.remove('winner')
  })
  refs.resultsText.innerText = ''
  refs.resultsWinner.classList.toggle('hidden')
  refs.resultsDiv.classList.toggle('show-winner')
})

refs.rulesBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('show-modal')
})

refs.closeBtn.addEventListener('click', () => {
  refs.modal.classList.toggle('show-modal')
})

setTimeout(() => {
  document.body.classList.remove(preload)
}, 1000)
