// ===========================
// FORM VALIDATION
// ===========================
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form submission until validated

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  // Basic validation
  if (username === "" || password === "" || email === "") {
    message.textContent = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Enter a valid email address!";
    message.style.color = "red";
    return;
  }

  // If passed validation
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// ===========================
// CLICK COUNTER FEATURE
// ===========================
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// ===========================
// TOGGLE INFORMATION FEATURE
// ===========================
document.getElementById("toggleBtn").addEventListener("click", function() {
  const info = document.getElementById("infoText");
  if (info.style.display === "none") {
    info.style.display = "block";
    this.textContent = "Hide Info";
  } else {
    info.style.display = "none";
    this.textContent = "Show Info";
  }
});