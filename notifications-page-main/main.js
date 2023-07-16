const toggleText = document.getElementById('toggle-text');
const hiddenText = document.getElementById('hidden-text');

// Initially, remove the "hidden" class to show the #hidden-text
hiddenText.classList.remove('hidden');

// Add a click event listener to the element
toggleText.addEventListener('click', () => {
  // Toggle the 'hidden' class to show/hide the element
  hiddenText.classList.toggle('hidden');
});
