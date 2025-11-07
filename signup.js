// signup.js
import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const form = document.getElementById("signup-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Signup successful! Please log in.");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert("Signup failed: " + error.message);
    });
});
