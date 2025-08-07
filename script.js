document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("registrationForm");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Validate username
    const usernameInput = document.getElementById("username");
    const usernameError = document.getElementById("usernameError");
    if (usernameInput.value.length < 3) {
      usernameError.textContent =
        "Username must be at least 3 characters long.";
      return;
    } else {
      usernameError.textContent = "";
    }
  });
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  let password = passwordInput.value;
  password = password.trim();
  let email = emailInput.value;
  email = email.trim();
  const useName = usernameInput.value.trim();

  console.log(password);
  console.log(email);
  console.log(useName);
});
