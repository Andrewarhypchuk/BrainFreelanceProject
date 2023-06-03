let timeForPopUp = 5000;
let popUp = document.querySelector('.popUp')
let dagger = document.querySelector('.container__dagger')
setTimeout(() => {
  popUp.classList.remove('none')
}, timeForPopUp)
dagger.addEventListener('click', () => {
  popUp.classList.add('none')
})
