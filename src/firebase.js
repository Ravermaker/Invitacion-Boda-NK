import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIDhlo3EvjdXX6z1yTLJGgjoVav1eEBw8",
  authDomain: "la-boda-nyd.firebaseapp.com",
  projectId: "la-boda-nyd",
  storageBucket: "la-boda-nyd.firebasestorage.app",
  messagingSenderId: "293031882048",
  appId: "1:293031882048:web:a442e135ccf248234f5ea5",
  measurementId: "G-88TSDT4F63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
