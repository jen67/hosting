(function () {
  "use strict";

  const toggleText = document.getElementById("toggle-text");
  const hiddenText = document.getElementById("hidden-text");
  const hideRedDots = document.querySelector(".header div");
  const redDots = document.querySelectorAll(".red-circle");
  const notifNumber = document.querySelector(".header h1 span");
  const greybackground = document.querySelectorAll(".back_ground");

  //hide the red notifications
  hideRedDots.addEventListener("click", function () {
    redDots.forEach(function (dot) {
      dot.style.display = "none";
    });
    greybackground.forEach(function (background) {
      background.style.backgroundColor = "transparent";
    });
    notifNumber.style.display = "none";
  });

  // Initially, remove the "hidden" class to show the #hidden-text
  hiddenText.classList.remove("hidden");

  // Add a click event listener to the element
  toggleText.addEventListener("click", () => {
    // Toggle the 'hidden' class to show/hide the element
    hiddenText.classList.toggle("hidden");
  });
})();
