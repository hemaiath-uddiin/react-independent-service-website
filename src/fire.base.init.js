// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzf1JZDyBkhiNJqEXrf1b2809qq6OgPqY",
  authDomain: "travel-guide-82920.firebaseapp.com",
  projectId: "travel-guide-82920",
  storageBucket: "travel-guide-82920.appspot.com",
  messagingSenderId: "704882994594",
  appId: "1:704882994594:web:ce14f27b58c19313fd16fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app)  
export default auth; 