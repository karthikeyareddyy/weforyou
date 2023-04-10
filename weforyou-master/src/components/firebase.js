// import React from "react";
// import firebase from 'firebase';
import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBnmO9WXyNLrkkdFUnqpuQKA4WyDjRcy3o",
  authDomain: "dnate-44c83.firebaseapp.com",
  projectId: "dnate-44c83",
  storageBucket: "dnate-44c83.appspot.com",
  messagingSenderId: "908372735747",
  appId: "1:908372735747:web:d6043e685d3a36552d5b36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);