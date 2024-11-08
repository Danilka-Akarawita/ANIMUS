// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIYCN5_EcoQA2PstlvldwBV8Q1Un11JU8",
  authDomain: "animus-ed0a5.firebaseapp.com",
  projectId: "animus-ed0a5",
  storageBucket: "animus-ed0a5.appspot.com",
  messagingSenderId: "1020565805003",
  appId: "1:1020565805003:web:82886347ce8513a158084e",
  measurementId: "G-7QPRERGG0G"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);