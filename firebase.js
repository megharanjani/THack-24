import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgfVdPLJ_03m6D4kk3-QyBsuwmVEjHy8U",
    authDomain: "bookhivethack.firebaseapp.com",
    projectId: "bookhivethack",
    storageBucket: "bookhivethack.appspot.com",
    messagingSenderId: "433746516917",
    appId: "1:433746516917:web:acca8a04d605f11f8cd7fc"
  };
  
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();