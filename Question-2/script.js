document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const gender = document.getElementById("gender");
  const about = document.getElementById("about");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const genderError = document.getElementById("genderError");
  const aboutError = document.getElementById("aboutError");

  form.addEventListener("submit", function (event) {
    let isValid = true;

    // Validate name
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Validate email
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate phone
    if (phone.value.trim() === "") {
      phoneError.textContent = "Phone number is required.";
      isValid = false;
    } else if (!validatePhone(phone.value.trim())) {
      phoneError.textContent = "Please enter a valid phone number.";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Validate gender
    if (gender.value === "") {
      genderError.textContent = "Gender is required.";
      isValid = false;
    } else {
      genderError.textContent = "";
    }

    // Validate about
    if (about.value.trim() === "") {
      aboutError.textContent = "Please tell us about yourself.";
      isValid = false;
    } else {
      aboutError.textContent = "";
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }
});
