

// Initialize Firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTfTqo1cssuT8Uzysi0ucWGWKJY4rlIpg",
  authDomain: "sips-and-juices.firebaseapp.com",
  projectId: "sips-and-juices",
  storageBucket: "sips-and-juices.firebasestorage.app",
  messagingSenderId: "422417512674",
  appId: "1:422417512674:web:ad929f08f75dd534b346bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);