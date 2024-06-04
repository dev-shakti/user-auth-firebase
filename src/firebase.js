// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_3xJt1BBVowrnDZmPm24y9al4mEyDpqc",
  authDomain: "user-auth-firebase-7a8c2.firebaseapp.com",
  projectId: "user-auth-firebase-7a8c2",
  storageBucket: "user-auth-firebase-7a8c2.appspot.com",
  messagingSenderId: "33730248951",
  appId: "1:33730248951:web:2be95d7df59e9b7d3ad3f2",
  measurementId: "G-KVNXY2FS2E"
};

// Initialize Firebase
export const app=initializeApp(firebaseConfig)
