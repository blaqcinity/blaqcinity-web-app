document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var fullname = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Passwords do not match!';
        return;
    }

    // Prepare user data for submission
    const userData = {
        username: fullname,
        email: email,
        password: password
    };

    try {
        // Send user data to the backend server
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        // Handle server response
        if (response.ok) {
            const data = await response.text();
            document.getElementById('message').textContent = data;
            document.getElementById('message').classList.add('success'); // Add success class
        } else {
            throw new Error('Failed to sign up');
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'An error occurred. Please try again later.';
    }
});
