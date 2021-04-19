import refs from './refs.js'
console.log(refs.choiceBtns)

// Перебираем кнопки и вешаем на них Слушатель событий

refs.choiceBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const choiceName = btn.dataset.choice
    console.log("я нажал на",choiceName)
  })
})
