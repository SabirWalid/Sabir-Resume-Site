// JavaScript code for your website

// Function to change the background color of the header when the user clicks on it
const header = document.querySelector('header');
header.addEventListener('click', function() {
    header.style.backgroundColor = 'lightblue';
    header.style.transition = 'background-color 0.5s';
    header.style.color = 'yellowgreen';
    header.style.transition = 'color 0.5s';
    
});

// Function to toggle a dark mode for your website
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

// Get a reference to the image element
const clickableImage = document.getElementById('clickable-image');

// Define a function to apply an effect when the image is clicked
function applyImageEffect() {
    // Add your desired effect here; for example, change the opacity
    clickableImage.style.opacity = '0.5';
    clickableImage.style.filter = 'grayscale(100%)';
    clickableImage.style.transition = 'opacity 0.5s';
}

// Add a click event listener to trigger the effect
clickableImage.addEventListener('click', applyImageEffect);
clickableImage.addEventListener('mouseover', applyImageEffect);
clickableImage.addEventListener('mouseout', applyImageEffect);

