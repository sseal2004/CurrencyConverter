// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKFOrN1Pdvp6WNPB9b2wHjj0jWkP0Rr7s",
  authDomain: "currency-converter-seal.firebaseapp.com",
  projectId: "currency-converter-seal",
  storageBucket: "currency-converter-seal.firebasestorage.app",
  messagingSenderId: "71701932265",
  appId: "1:71701932265:web:160c7b28ef5a1ce9cd2878",
  measurementId: "G-XCM8H9B8KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);