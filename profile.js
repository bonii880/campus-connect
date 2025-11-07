import { auth, db, storage } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const profileForm = document.getElementById("profile-form");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html"; // redirect if not logged in
  }
});

profileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const user = auth.currentUser;
  if (!user) return alert("Please log in first.");

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const status = document.getElementById("status").value;
  const course = document.getElementById("course").value.trim();
  const preferredAge = document.getElementById("preferredAge").value;
  const hobbies = document.getElementById("hobbies").value.trim();
  const file = d
