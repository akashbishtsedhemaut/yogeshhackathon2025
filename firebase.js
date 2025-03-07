import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTWq2uZAw2GuMJBlMy-WjOBvvSp4Ukjo4",
  authDomain: "food-ordering-system-4522b.firebaseapp.com",
  projectId: "food-ordering-system-4522b",
  storageBucket: "food-ordering-system-4522b.firebasestorage.app",
  messagingSenderId: "485092980779",
  appId: "1:485092980779:web:590e58c9ee7a199771126e",
  measurementId: "G-4PWNHK25DK"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, doc, updateDoc };