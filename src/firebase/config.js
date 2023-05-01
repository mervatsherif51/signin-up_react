// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd1EB1vC1fN8Gvx5O_BVBbtfBanrD01_E",
  authDomain: "signinsignup-af69d.firebaseapp.com",
  projectId: "signinsignup-af69d",
  storageBucket: "signinsignup-af69d.appspot.com",
  messagingSenderId: "279222284351",
  appId: "1:279222284351:web:2361018b1bd1277504c88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);