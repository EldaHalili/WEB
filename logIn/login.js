document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // You can add your validation logic here
    if (username === "yourUsername" && password === "yourPassword") {
        alert("Login successful!");
        // Redirect to another page or do something else on successful login
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
