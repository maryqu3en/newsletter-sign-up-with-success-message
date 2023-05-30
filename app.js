document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let successMessage = document.getElementById("success-message-block");
  let emailBox = document.getElementById("email-box");
  let userEmail = document.getElementById("user-email");
  let dismissButton = document.getElementById("dismiss-button");

  successMessage.style.display = "none";

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let email = emailBox.value;
    if (!validateEmail(email)) {
      emailBox.classList.add("invalid");
      emailBox.style.border = "2px solid red";
      return;
    }

    // Hide the sign-in block and display the success message
    document.getElementById("sign-in-block").style.display = "none";
    successMessage.style.display = "block";
    // Update user email in success message
    userEmail.textContent = email;
    userEmail.style.fontWeight = '700';

    // Reset email box value and remove error styling
    emailBox.value = "";
    emailBox.style.border = "1px solid grey";
  });

  dismissButton.addEventListener("click", function () {
    successMessage.style.display = "none";
    document.getElementById("sign-in-block").style.display = "block";
  });

  // Email validation function
  function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
