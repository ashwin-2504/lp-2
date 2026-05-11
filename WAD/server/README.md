# Server Project

This is a simple Node.js server using Express to serve static files.

## How to Run

1. Open a terminal in this folder (`server`).
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.
4. Open your browser and navigate to `http://localhost:3000/`.

## Code Explanation

- **`server.js`**: A simple Express server that listens on port 3000.
- It uses `express.static('public')` to serve any files in the `public` folder automatically.
