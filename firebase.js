import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1BtMBPWnxZtqoI0l7Blyhk2O33IlBBXM",
  authDomain: "employee-id-search.firebaseapp.com",
  projectId: "employee-id-search",
  storageBucket: "employee-id-search.firebasestorage.app",
  messagingSenderId: "130484524231",
  appId: "1:130484524231:web:892800a81a0a9a9c049ae2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
