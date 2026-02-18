console.log("password is: lasagna");

//when button clicked, get username and password. 

//pass an Immediately Invoked Function Expression: IIFE.
document.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values from the DOM 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  console.log("username + pwd:", username + ", " + password);

  // Store in session storage
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('password', password);
  // sessionStorage.setItem('loginTimestamp', new Date().toISOString());
  // sessionStorage.setItem('loginAttempts', (parseInt(sessionStorage.getItem('loginAttempts') || '0') + 1).toString());

  // Log to console
  console.log('session username:', username);
  console.log('session password:', password);

  window.location.assign("layout.html"); 
// This goes inside login-script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // 1. Always prevent the page from refreshing first
            event.preventDefault(); 
            
            // 2. Add your logic here
            console.log("Login form submitted!");
            
            // 3. Perform the redirect to layout.html
            window.location.href = 'layout.html'; 
        });
    }
});
});
