// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKMHxziGLy8rVthFoTQSi2Sjfz1p44AYY",
  authDomain: "science-exhibition-2025.firebaseapp.com",
  projectId: "science-exhibition-2025",
  storageBucket: "science-exhibition-2025.firebasestorage.app",
  messagingSenderId: "40273564945",
  appId: "1:40273564945:web:b12156e91fc8894402e8b0",
  measurementId: "G-ERB918B2XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db};
