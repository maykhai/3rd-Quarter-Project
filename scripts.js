
const loginForm = document.querySelector('.login-form');
const usernameInput = loginForm.querySelector('input[type="text"]');
const passwordInput = loginForm.querySelector('input[type="password"]');


const loginButton = loginForm.querySelector('button');


loginButton.addEventListener('click', function(event) {
 
  event.preventDefault();

  
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();


  if (usernameValue === '') {
   
    const usernameError = document.createElement('div');
    usernameError.classList.add('error-message');
    usernameError.textContent = 'Please enter your username.';
    usernameInput.parentNode.insertBefore(usernameError, usernameInput);

   
    console.log('Login error.');
  }

 
  if (passwordValue === '') {
   
    const passwordError = document.createElement('div');
    passwordError.classList.add('error-message');
    passwordError.textContent = 'Please enter your password.';
    passwordInput.parentNode.insertBefore(passwordError, passwordInput);

   
    console.log('Login error.');
  }

  
  if (usernameValue === '' && passwordValue === '') {
   
    const usernameError = document.createElement('div');
    usernameError.classList.add('error-message');
    usernameError.textContent = 'Please enter your username and password.';
    usernameInput.parentNode.insertBefore(usernameError, usernameInput);

  
    console.log('Login error.');
  }
});


usernameInput.addEventListener('click', function(event) {

  const usernameError = usernameInput.parentNode.querySelector('.error-message');
  if (usernameError) {
    usernameError.remove();
  }
});

passwordInput.addEventListener('click', function(event) {
 
  const passwordError = passwordInput.parentNode.querySelector('.error-message');
  if (passwordError) {
    passwordError.remove();
  }
});
