// Function to change the background color of the header when the user clicks on it
const header = document.querySelector('header');
header.addEventListener('click', function() {
    header.style.backgroundColor = 'lightblue';
    header.style.transition = 'background-color 0.5s';
    header.style.color = 'yellowgreen';
    header.style.transition = 'color 0.5s';
    
});

// Function to toggle a dark mode for the website
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

// script function that prompts the user with  "Ok" or "Cancel" confirmation to view my website,
function confirmViewWebsite() {
    const userConfirmed = window.confirm("You are most welcome to Sabir's website, would you like to view it?");
    if (userConfirmed) {
        window.location.href = "https://sabirwalid.github.io/Sabir-Resume-Site/";
    } else {
        alert("Thank you for considering! Feel free to visit us later.");
    }
}

const viewButton = document.getElementById("viewButton");
viewButton.addEventListener("click", confirmViewWebsite);

