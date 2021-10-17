function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const nameColorEl = document.querySelector('.color');
buttonEl.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameColorEl.textContent = getRandomHexColor();
})