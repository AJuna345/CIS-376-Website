document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            
            event.preventDefault(); 
            
      
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            
            if (password === 'lasagna') {
                console.log("Login successful!");
                // Clear any error messages
                if (messageDiv) messageDiv.textContent = "";
                
                // Redirect to the layout page
                window.location.href = 'layout.html'; 
            } else {
                // 4. Handle wrong password
                console.log("Login failed: Incorrect password.");
                if (messageDiv) {
                    messageDiv.style.color = "red";
                    messageDiv.textContent = "Invalid password. Try again!";
                }
            }
        });
    }
});
