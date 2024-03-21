// This JavaScript is responsible for the change of the sticky navbar during scrolling
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Function to toggle menu
const toggleMenu = () => {
  const menuToggle = document.querySelector(".menuToggle");
  const navigation = document.querySelector(".navigation");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Function to validate form
const validateForm = () => {
  const form = document.forms["myForm"];
  const fullname = form["usrnm"].value;
  const email = form["email"].value;
  const password = form["psw"].value;
  const phone = form["phone"].value;
  const gender = form["gender"].value;

  // Regular expressions for email and phone validation
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const phoneRegex = /^\d{11}$/;

  // Check if all fields are filled
  if (!fullname || !email || !password || !phone || !gender) {
    alert("Please fill out all required fields.");
    return false;
  }

  // Validate email format
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validate password length
  if (password.length < 4) {
    alert("Password must be at least 4 characters long.");
    return false;
  }

  // Validate phone number format
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 11-digit phone number.");
    return false;
  }

  // If all validations pass, show success message and reset form
  alert("Submission successful!");
  form.reset();
  return true;
}
