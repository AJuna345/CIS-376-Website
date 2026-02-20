document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            // Stop the form from refreshing the page
            event.preventDefault(); 
            
            // Get values from the index.html inputs
            const password = document.getElementById('password').value;

            // Validate the password
            if (password === 'lasagna') {
                console.log("Password correct. Redirecting to News...");
                
                // Change the destination to news.html
                window.location.href = 'news.html'; 
            } else {
                // Handle incorrect password
                if (messageDiv) {
                    messageDiv.textContent = "Incorrect password. Access denied.";
                    messageDiv.style.color = "red";
                }
                console.log("Access denied: Incorrect password.");
            }
        });
    }
});
