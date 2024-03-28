document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    try {
        // Send login credentials to the backend server
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        // Handle server response
        if (response.ok) {
            // Redirect to main.html if login successful
            window.location.href = 'main.html';
        } else {
            const errorMessage = await response.text();
            document.getElementById('message').textContent = errorMessage;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred. Please try again later.';
    }
});

