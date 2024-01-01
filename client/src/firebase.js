// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-a2071.firebaseapp.com",
  projectId: "auth-a2071",
  storageBucket: "auth-a2071.appspot.com",
  messagingSenderId: "948726555882",
  appId: "1:948726555882:web:ccf399e730988becd0a393",
  measurementId: "G-F0KN93M88H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);