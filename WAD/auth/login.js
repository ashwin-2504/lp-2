// login.js - Simple Mock Authentication
// NOTE: Hardcoding credentials in frontend JS is NOT secure for production.
// This is for demonstration purposes to show how logic works simply.

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page refresh

  // Get input values
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  const messageDiv = document.getElementById("message");

  // Mock credentials
  const validUsername = "admin";
  const validPassword = "admin";

  // Simple validation
  if (usernameInput === validUsername && passwordInput === validPassword) {
    // Success
    messageDiv.className = "text-center mt-3 text-success small";
    messageDiv.innerText = "Login successful! Loading...";

    // Simulate storing a token or session
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to success page after a short delay
    setTimeout(() => {
      window.location.href = "success.html";
    }, 1000);
  } else {
    // Failure
    messageDiv.className = "text-center mt-3 text-danger small";
    messageDiv.innerText = "Invalid username or password!";
  }
});
