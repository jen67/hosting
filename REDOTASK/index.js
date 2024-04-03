(function () {
  "use strict";

  const hLinks = document.querySelectorAll("header ul li a");
  const menuToggle = document.querySelector(".menuToggle");
  const submitBtn = document.querySelector(" form button");

  const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };

  const handleScroll = () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  };


  const validateForm = () => {
    let fullname = document.forms["myForm"]["usrnm"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["psw"].value;
    let phone = document.forms["myForm"]["tel"].value;
    let gender = document.forms["myForm"]["gender"].value;

    if (!fullname || !email || !password || !phone || !gender) {
      alert("Please fill out all required fields.");
      return false;
    }

    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return false;
    }

    let phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 11-digit phone number.");
      return false;
    }

    alert("Submission successful!");
    document.forms["myForm"].reset();
    return true;
  };

  const handleClick = (event) => {
    event.preventDefault();
    validateForm();
  };

  menuToggle.addEventListener("click", toggleMenu);
  hLinks.forEach((link) => link.addEventListener("click", toggleMenu));
  window.addEventListener("scroll", handleScroll);
  submitBtn.addEventListener("click", handleClick);
})();
