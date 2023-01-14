import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCWTypz165ZQZ0Zz-5qkx4HZ_TfCo-pRhU",
  authDomain: "chat-6d5e0.firebaseapp.com",
  projectId: "chat-6d5e0",
  storageBucket: "chat-6d5e0.appspot.com",
  messagingSenderId: "1038003273197",
  appId: "1:1038003273197:web:207852b18fd15dd9ffbbe4", 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
