import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyARcZM2zSy4Xw5Q7Fn_XNX9zDh2LMAQvqw",
  authDomain: "campusconnect-44ec3.firebaseapp.com",
  projectId: "campusconnect-44ec3",
  storageBucket: "campusconnect-44ec3.appspot.com",
  messagingSenderId: "440410311105",
  appId: "1:440410311105:web:0bb84ca67f0407235d4740",
  measurementId: "G-JZ8R9VS9QC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
