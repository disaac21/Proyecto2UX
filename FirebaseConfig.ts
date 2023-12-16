// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtq2eygczL46bKWfL5DSCnvm7D1OPE6-E",
    authDomain: "proyecto2ux.firebaseapp.com",
    projectId: "proyecto2ux",
    storageBucket: "proyecto2ux.appspot.com",
    messagingSenderId: "439057779999",
    appId: "1:439057779999:web:08e9da0a52d7a79fadf42a",
    measurementId: "G-TZL5D67ZPX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);