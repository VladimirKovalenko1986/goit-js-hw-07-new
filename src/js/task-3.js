const inputName = document.querySelector('#name-input');
const texInputName = document.querySelector('#name-output');

inputName.addEventListener('input', onInputValue);

function onInputValue(e) {
  const inputValue = e.currentTarget.value.trim();
  if (inputValue === '') {
    texInputName.textContent = 'Anonymous';
  } else {
    texInputName.textContent = inputValue;
  }
}
