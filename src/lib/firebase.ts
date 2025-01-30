import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA4PrlUmImawoYQVcG5VUyK8ScvsRr2OzI",
  authDomain: "nbula-admin-panel.firebaseapp.com",
  projectId: "nbula-admin-panel",
  storageBucket: "nbula-admin-panel.firebasestorage.app",
  messagingSenderId: "803570008370",
  appId: "1:803570008370:web:568d196ccd8a0add44d72b",
  measurementId: "G-7X12RPKSQ6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);