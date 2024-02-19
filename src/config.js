// Import the functions you need from the SDKs you need


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa5Na64Tb-Ol4xCdzg6NXdUBCdCk95g4Y",
  authDomain: "chipsey-ecomerse-website.firebaseapp.com",
  projectId: "chipsey-ecomerse-website",
  storageBucket: "chipsey-ecomerse-website.appspot.com",
  messagingSenderId: "92154147353",
  appId: "1:92154147353:web:aed38418b332f16f507088",
  measurementId: "G-Z92GHC202W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default { app, analytics, firebaseConfig };