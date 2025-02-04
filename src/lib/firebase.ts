import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA4PrlUmImawoYQVcG5VUyK8ScvsRr2OzI",
  authDomain: "nbula-admin-panel.firebaseapp.com",
  projectId: "nbula-admin-panel",
  storageBucket: "nbula-admin-panel.firebasestorage.app",
  messagingSenderId: "803570008370",
  appId: "1:803570008370:web:568d196ccd8a0add44d72b",
  measurementId: "G-7X12RPKSQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);