# AuthApp
 
## Problem
 
Reusable starting point for authentication in a MERN app.
 
## Solution
 
Email/password sign-up and sign-in (bcrypt-hashed passwords) plus Google sign-in via Firebase. A signed JWT is stored in an `access_token` HTTP-only cookie and checked by middleware on protected routes. Signed-in users can update their profile or delete their account; deletion also removes the linked Firebase Google user.
 
## Speciality
 
Own JWT-cookie sessions with Firebase used only for Google identity and its cleanup on delete.
 
## Simplified Working
 
Sign up or log in, get a cookie that proves who you are, and use pages only logged-in users can reach.
 
## Utilities
 
Express, Mongoose, jsonwebtoken, bcryptjs, cookie-parser, Firebase Auth + Admin SDK, React, React Router, Redux Toolkit, Redux Persist, Vite, Tailwind CSS
 
## Setup
1. Install dependencies:
```
   npm install
   cd client && npm install && cd ..
```
 
2. Create a `.env` file in the root directory:
```
   MONGO_URI=<your MongoDB connection string>
   JWT_SECRET=<any secret string>
```
 
3. Create `client/src/firebase.js` with your Firebase project config:
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
 
4. Add `api/firebaseServiceAccount.json` — your Firebase Admin service account key (Firebase Console → Project Settings → Service Accounts → Generate new private key).
5. Run the app:
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