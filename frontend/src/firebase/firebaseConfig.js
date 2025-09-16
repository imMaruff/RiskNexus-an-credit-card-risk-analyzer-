import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBQw9pxHTewjR_2bJrypEm3m-DBMmMer1o",
  authDomain: "credit-risk-analysis-c8cfe.firebaseapp.com",
  projectId: "credit-risk-analysis-c8cfe",
  storageBucket: "credit-risk-analysis-c8cfe.firebasestorage.app",
  messagingSenderId: "44076403096",
  appId: "1:44076403096:web:082caabcd6fb6b864c03ed",
  measurementId: "G-ZMZF285CED"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize and export db