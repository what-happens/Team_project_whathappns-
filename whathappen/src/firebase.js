import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fu1LSz5QK-1JTYH9qfhR_7ngoBszsUg",
  authDomain: "what-happen-867b5.firebaseapp.com",
  projectId: "what-happen-867b5",
  storageBucket: "what-happen-867b5.firebasestorage.app",
  messagingSenderId: "775781696285",
  appId: "1:775781696285:web:a5b28dddabcfe40c0957f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
