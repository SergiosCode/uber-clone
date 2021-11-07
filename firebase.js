// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-W3ycd-wxjCh0sZUlDuAO_3QhXBU6fVM",
  authDomain: "uber-clone-5d7ea.firebaseapp.com",
  projectId: "uber-clone-5d7ea",
  storageBucket: "uber-clone-5d7ea.appspot.com",
  messagingSenderId: "993622843056",
  appId: "1:993622843056:web:adb3fac448ed6a26a52575",
  measurementId: "G-M09TNGN3R5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
