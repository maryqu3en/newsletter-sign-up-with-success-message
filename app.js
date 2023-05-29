// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get the necessary elements
  var form = document.querySelector("form");
  var successMessage = document.getElementById("success-message-block");
  var emailBox = document.getElementById("email-box");
  var userEmail = document.getElementById("user-email");
  var dismissButton = document.getElementById("dismiss-button");

  // Initially hide the success message
  successMessage.style.display = "none";

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate email address
    var email = emailBox.value;
    if (!validateEmail(email)) {
      // Display error message for invalid email address
      emailBox.classList.add("invalid");
      emailBox.insertAdjacentHTML(
        "beforebegin",
        '<p class="error-msg">Invalid email address</p>'
      );
      return;
    }

    // Hide the sign-in block and display the success message
    document.getElementById("sign-in-block").style.display = "none";
    successMessage.style.display = "block";

    // Update user email in success message
    userEmail.textContent = email;

    // Reset email box value and remove error styling and message
    emailBox.value = "";
    emailBox.classList.remove("invalid");
    var errorMessage = emailBox.parentElement.querySelector(".error-msg");
    if (errorMessage) {
      errorMessage.remove();
    }
  });

  // Add click event listener to the dismiss button
  dismissButton.addEventListener("click", function () {
    // Hide the success message
    successMessage.style.display = "none";
    // Show the sign-in block again
    document.getElementById("sign-in-block").style.display = "block";
  });

  // Email validation function
  function validateEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
