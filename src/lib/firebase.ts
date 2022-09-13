// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW6RPI4HSzrhuUfEymVmBMmn_O__oavfA",
  authDomain: "koudaisai-app.firebaseapp.com",
  projectId: "koudaisai-app",
  storageBucket: "koudaisai-app.appspot.com",
  messagingSenderId: "790848432729",
  appId: "1:790848432729:web:5584a0200e508528799f48",
  measurementId: "G-PYDM6GXSF4",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
