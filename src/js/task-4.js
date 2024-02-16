const formSubmit = document.querySelector('.login-form');

formSubmit.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const emailValue = e.currentTarget.elements.email.value.trim();
  const passwordValue = e.currentTarget.elements.password.value.trim();
  let objectInputValues = {};

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
  } else {
    objectInputValues = {
      email: emailValue,
      password: passwordValue,
    };
    formSubmit.reset();
  }
  console.log(objectInputValues);
  return objectInputValues;
}
