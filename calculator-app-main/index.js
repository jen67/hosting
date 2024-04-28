let switchSpan = document.querySelector(".switch span");
let pElements = document.querySelectorAll(".numbers p");
let switchContainer = document.querySelector(".switch");
let body = document.querySelector("body");


switchContainer.addEventListener("click", function(event) {
    // Calculate the width of a single segment
    let segmentWidth = switchContainer.offsetWidth / 3;

    // Determine which segment was clicked
    let clickedSegment = Math.floor((event.clientX - switchContainer.getBoundingClientRect().left) / segmentWidth);

    // Calculate the new position for the span
    let newPosition = pElements[clickedSegment].offsetLeft - switchSpan.parentElement.offsetLeft;
    
    // Set the position
    switchSpan.style.transform = `translateX(${newPosition}px)`;

    // Set the theme based on clicked segment
    switch (clickedSegment) {
        case 0:
            body.className = "";  // default theme
            break;
        case 1:
            body.className = "theme-2";
            break;
        case 2:
            body.className = "theme-3";
            break;
    }
});

// Displaying clicked number or symbol in the <h2> display screen
const display = document.getElementById('display');
const gridContainer = document.querySelector('.grid-container');

gridContainer.addEventListener('click', function(event) {
    if (event.target !== gridContainer) {
        const value = event.target.innerText;

        switch (value) {
            case 'DEL':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case 'RESET':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText.replace(/x/g, '*'));
                } catch (error) {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += value;
                break;
        }
    }
});
