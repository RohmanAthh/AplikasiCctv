// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArVLG6lMnl4B8eB7M-ahYC1cTSSf2CJSQ",
  authDomain: "react-81acc.firebaseapp.com",
  projectId: "react-81acc",
  storageBucket: "react-81acc.firebasestorage.app",
  messagingSenderId: "959203350015",
  appId: "1:959203350015:web:453967869fe83ae0f383ca",
  measurementId: "G-JZ180KSJ7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);