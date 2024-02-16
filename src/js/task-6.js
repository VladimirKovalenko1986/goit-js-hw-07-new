const list = document.querySelector('#boxes');
const controlsRenderingEl = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('#controls input[type="number');

createBtn.addEventListener('click', onCreateElements);
destroyBtn.addEventListener('click', onClearBoxEl);

function onCreateElements() {
  const inputValue = Number(input.value);

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
    return;
  }
}

function createBoxes(amount) {
  onClearBoxEl();

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    list.appendChild(box);

    size += 10;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClearBoxEl() {
  list.innerHTML = '';
}
