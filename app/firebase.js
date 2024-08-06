// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOGDKbwwXYOFDtGXNeIDZu6avf2l9o9rg",
  authDomain: "learn-nxtjs-twind-fbase.firebaseapp.com",
  projectId: "learn-nxtjs-twind-fbase",
  storageBucket: "learn-nxtjs-twind-fbase.appspot.com",
  messagingSenderId: "497236594454",
  appId: "1:497236594454:web:51e95d451ee5c8171f0a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}