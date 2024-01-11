import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxbyZMXVfzgP7sMo5o-xah_a-UYp7GCxE",
  authDomain: "pre-entregareact.firebaseapp.com",
  projectId: "pre-entregareact",
  storageBucket: "pre-entregareact.appspot.com",
  messagingSenderId: "458397475306",
  appId: "1:458397475306:web:691240b51d595ec2cf5293",
  measurementId: "G-1EZB4ZG3E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
