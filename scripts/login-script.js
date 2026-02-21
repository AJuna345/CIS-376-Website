// Wait for the HTML to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the form and the message area by their IDs
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // Only run this if the login form actually exists on the page
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // 1. Prevent the page from refreshing
            event.preventDefault(); 
            
            // 2. Get the password typed by the user
            const passwordInput = document.getElementById('password');
            const passwordValue = passwordInput ? passwordInput.value : '';

            // 3. Validate the password
            if (passwordValue === 'lasagna') {
                console.log("Login successful! Redirecting...");
                
                // Clear any old error messages
                if (messageDiv) messageDiv.textContent = "";
                
                // 4. Redirect to your combined news dashboard
                window.location.href = 'pages/search.html'; 
            } else {
                // 5. Handle the wrong password
                console.log("Login failed: Incorrect password.");
                if (messageDiv) {
                    messageDiv.style.color = "red";
                    messageDiv.textContent = "Incorrect password. Access denied.";
                }
            }
        });
    } else {
        console.error("The form with id='loginForm' was not found on this page.");
    }
});
