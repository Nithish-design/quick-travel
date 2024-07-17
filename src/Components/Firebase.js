
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

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
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};