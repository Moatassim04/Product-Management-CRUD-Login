
// JavaScript for login functionality

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulated authentication (replace this with real authentication logic)
    if (email === 'admin@example.com' && password === 'password123') {
        alert('Login successful!');
        window.location.href = 'crud.html'; // Redirect to the main page
    } else {
        alert('Invalid email or password.');
    }
});
