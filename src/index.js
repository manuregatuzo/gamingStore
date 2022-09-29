import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbl-S7_v5xApfJQ7oHxW8ZThmIx75fI5g",
  authDomain: "gamingstore-d2f90.firebaseapp.com",
  projectId: "gamingstore-d2f90",
  storageBucket: "gamingstore-d2f90.appspot.com",
  messagingSenderId: "727802445253",
  appId: "1:727802445253:web:9267c2d3215866f9f29fac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

