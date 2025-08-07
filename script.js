document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Validate username
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // const usernameError = document.getElementById("usernameError");

    // Trim input values
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    let isValidEmail = true;
    let isValidUser = true;
    let isValidPass = true;

    let messages = [];

    if (username.length < 3) {
      isValidUser = false;
      messages.push("Username must be at least 3 characters long.");
    } else {
      isValidUser = true;
    }
    if (email.includes("@")) {
      isValidEmail = true;
    } else {
      messages.push(`Email Must Include "@"`);
      isValidEmail = false;
    }
    if (password.length < 8) {
      isValidPass = false;
      messages.push("Password Must be longer than 8 characters");
    } else {
      isValidPass = true;
    }
    if (
      isValidUser === false ||
      isValidEmail === false ||
      isValidPass === false
    ) {
      feedbackDiv.style.display = "block";
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    } else {
      feedbackDiv.style.display = "block";
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    }

    // Log values
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
