const form = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'admin' && password === 'password') {
    window.location.href = 'database.html';
  } else {
    errorMessage.textContent = 'Incorrect username or password.';
  }
});