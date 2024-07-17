// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAcRWpUJMaYqzQKezhOgmef7eLoIV6oFE",
  authDomain: "quick-travel-b2a6b.firebaseapp.com",
  projectId: "quick-travel-b2a6b",
  storageBucket: "quick-travel-b2a6b.appspot.com",
  messagingSenderId: "201191799580",
  appId: "1:201191799580:web:35f63ba59f0e5272d5d8d9",
  measurementId: "G-F9HCZWKBJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);