// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1zfop3D_PP7N2S0j4HmhSv4vICCX9eVM",
  authDomain: "sesstimator.firebaseapp.com",
  projectId: "sesstimator",
  storageBucket: "sesstimator.appspot.com",
  messagingSenderId: "60126708818",
  appId: "1:60126708818:web:41c9e5d7223a1c7e1d8b8b",
  measurementId: "G-4X5LW6YP2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);