const express = require('express');
const app = express();
const PORT = 3001; // Using 3001 to avoid conflict with the previous app if running

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (login form)
app.use(express.static('public'));

// Mock credentials
const validUser = "admin";
const validPass = "admin";

// Handle login POST request
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === validUser && password === validPass) {
        res.send("<h1>Login Successful!</h1><p>Welcome back, " + username + ".</p>");
    } else {
        res.send("<h1>Login Failed!</h1><p>Invalid username or password.</p><a href='/'>Try again</a>");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
