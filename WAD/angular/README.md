# Angular Project

This is a simple Student Management System built with Angular.

## How to Run

1. Open a terminal in this folder (`angular`).
2. Run `npm install` to install dependencies.
3. Run `npm start` or `ng serve` to start the development server.
4. Open your browser and navigate to `http://localhost:4200/`.

## Code Explanation

- **`app.ts`**: Contains the main component logic and template. It uses standalone components and template-driven forms (`ngModel`).
- It maintains a list of users in an array (default: `admin`/`admin`) and allows registration of new users and logging in.
- The view switches between Login and Register based on user interaction.
