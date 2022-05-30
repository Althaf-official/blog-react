// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm0vBvF_MZmnocqj3Dt-e4KFQI7efNkaA",
  authDomain: "blog-project-71d00.firebaseapp.com",
  projectId: "blog-project-71d00",
  storageBucket: "blog-project-71d00.appspot.com",
  messagingSenderId: "1049772736219",
  appId: "1:1049772736219:web:a63d2ce90a7fda44c856fe",
  measurementId: "G-N95EWRHDXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);