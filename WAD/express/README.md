# Express Project

This is a simple Express.js server handling login.

## How to Run

1. Open a terminal in this folder (`express`).
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.
4. Open your browser and navigate to `http://localhost:3001/`.

## Code Explanation

- **`server.js`**: Sets up an Express server on port 3001.
- It handles a POST request to `/login` and checks if the username and password are "admin".
- It responds with a success message or failure message.
- It also serves static files from the `public` folder.
