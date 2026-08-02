# AuthApp

Welcome to my Auth App!

This is a full-stack web application built with the MERN (MongoDB, Express, React, Node.js) stack. It includes authentication features that allow users to sign up, log in, and log out, and provides access to protected routes only for authenticated users.

The front-end of the application is built with React and uses React Router for client-side routing. The back-end is built with Node.js and Express, and uses MongoDB as the database. Authentication is implemented using JSON Web Tokens (JWT), with Google OAuth (Firebase) supported as an additional sign-in method.

This application is intended as a starting point for building full-stack web applications with authentication using the MERN stack. Feel free to use it as a template for your own projects!

## Features

- Email/password sign up and sign in
- Google OAuth sign in (Firebase Authentication)
- JWT-based session handling via HTTP-only cookies
- Protected routes for authenticated users
- Profile update and account deletion (including linked Google account cleanup)

## Tech Stack

- **Frontend:** React, React Router, Redux Toolkit, Redux Persist, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JSON Web Tokens (JWT), bcryptjs, Firebase Authentication, Firebase Admin SDK

## Setup

1. Clone the repo:
   ```
   git clone https://github.com/deva10391/authApp
   cd authApp
   ```

2. Install dependencies:
   ```
   npm install
   cd client && npm install && cd ..
   ```

3. Create a `.env` file in the root directory:
   ```
   MONGO_URI=<your MongoDB connection string>
   JWT_SECRET=<any secret string>
   ```

4. Create `client/src/firebase.js` with your Firebase project config:
   ```js
   import { initializeApp } from "firebase/app";

   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "...",
   };

   const app = initializeApp(firebaseConfig);
   export default app;
   ```

5. Add `api/firebaseServiceAccount.json` — your Firebase Admin service account key (Firebase Console → Project Settings → Service Accounts → Generate new private key).

6. Run the app:
   ```
   npm run dev
   ```

   Backend runs on port 3000, frontend (Vite) on port 5173.

## Scripts

| Command | Location | Description |
|---|---|---|
| `npm run dev` | root | Runs backend (nodemon) and frontend (Vite) concurrently |
| `npm start` | root | Runs backend only |
| `npm run build` | root | Installs and builds frontend for production |