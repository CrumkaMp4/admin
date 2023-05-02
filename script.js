const form = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const errorMessage = document.querySelector('#error-message');

// Define an array of objects containing the usernames and passwords
const users = [
  { username: 'nekroshaa', password: 'mIeKskFn' },
  { username: 'giraffe', password: '6ao2rw4d' },
  { username: 'nada', password: '86OQzx1h' },
  { username: 'zus', password: 'xuLbZk6z' },
  { username: 'dx', password: 'e5VqXaoZ' },
  { username: 'ded', password: 'oIagrBkw' },
  { username: 'd3pre', password: 'hcLQyyDe' },
  { username: 'stitch', password: 'l6PdLG8s'},
  { username: 'pavel', password: 'skfMyD6G'},
  { username: '1', password: '1'},
];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the entered username and password match any of the objects in the users array
  const foundUser = users.find(user => user.username === username && user.password === password);
  if (foundUser) {
    window.location.href = 'menu.html';
  } else {
    errorMessage.textContent = 'Incorrect username or password.';
  }
});
