document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your login logic here, e.g., check if the username and password are valid.
        // For this example, we'll just display an alert message.

        if (username === "your_username" && password === "your_password") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
