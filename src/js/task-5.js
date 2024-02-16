const textColor = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');

btnChangeColor.addEventListener('click', onChengColorBg);

function onChengColorBg() {
  textColor.textContent = getRandomHexColor();
  bodyElement.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
