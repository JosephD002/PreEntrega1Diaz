import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7qNTkCNJ_JORR2jpbTGbntrz07KcKXlM",
  authDomain: "proyecto-react-10b4e.firebaseapp.com",
  projectId: "proyecto-react-10b4e",
  storageBucket: "proyecto-react-10b4e.appspot.com",
  messagingSenderId: "738132704778",
  appId: "1:738132704778:web:ce201094cf968b066b69f3"
};

// Initialize Firebase
 initializeApp(firebaseConfig);



/*
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
 initializeApp(firebaseConfig);
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
