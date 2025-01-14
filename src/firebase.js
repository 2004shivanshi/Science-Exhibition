// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhffBcliOhDkLiLP5fH4PXRifoDXsGLM4",
  authDomain: "science-exhibition-a4b53.firebaseapp.com",
  projectId: "science-exhibition-a4b53",
  storageBucket: "science-exhibition-a4b53.firebasestorage.app",
  messagingSenderId: "419806455750",
  appId: "1:419806455750:web:234ab1679d22a2e1efb4c7",
  measurementId: "G-ZT9Y4640W2"   
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db};