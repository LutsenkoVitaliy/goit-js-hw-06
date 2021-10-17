function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesRef = document.querySelector('#boxes')
const inputRef = document.querySelector('input')
const createButton = document.querySelector('button[data-create]')
const destroyButton = document.querySelector('button[data-destroy]')