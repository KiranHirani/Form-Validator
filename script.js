const form = document.getElementById("form"),
  password1El = document.getElementById("password1"),
  password2El = document.getElementById("password2"),
  messageContainer = document.querySelector(".message-container"),
  message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using constraint API
  isValid = form.checkValidity();

  // Style main message for an error
  if (!isValid) {
    changeMessage("Please fill out all fields.", "red");
    return;
  }

  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    changePasswordStyling(true, "green");
  } else {
    changePasswordStyling(false, "red");
    changeMessage("Make sure passwords match!", "red");
    return;
  }

  // If form is valid, and passwords match
  if (isValid && passwordsMatch) {
    changeMessage("Successfully Registered", "green");
    storeFormData();
  }
}

// Helper Function for message styling abd textContent
function changeMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  messageContainer.style.borderColor = color;
}

function changePasswordStyling(matched, color) {
  passwordsMatch = matched;
  password1El.style.borderColor = color;
  password2El.style.borderColor = color;
}

// Store/Send user data
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data - Eg passing to server
}

function processFormData(event) {
  event.preventDefault();
  validateForm();
}

// Event Listeners
form.addEventListener("submit", processFormData);
