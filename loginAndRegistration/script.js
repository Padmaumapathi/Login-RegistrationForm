// Select the toggle links
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Select the forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Event listeners for toggling
showRegisterLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  loginForm.classList.add('hidden'); // Hide login form
  registerForm.classList.remove('hidden'); // Show register form
});

showLoginLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent page reload
  registerForm.classList.add('hidden'); // Hide register form
  loginForm.classList.remove('hidden'); // Show login form
});
