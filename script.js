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

    if (usernameInput.value.length < 3) {
      usernameError.textContent =
        "Username must be at least 3 characters long.";
      return;
    } else {
      // usernameError.textContent = "";
    }

    // Log values
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    feedbackDiv.textContent = "Form submitted successfully!";
  });
});
