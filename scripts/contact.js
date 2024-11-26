// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Get the submit button element
const SUBMIT_BUTTON = document.getElementById('submit-button');

// Add event listener for the click event
SUBMIT_BUTTON.addEventListener('click', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the contact-page element
    const CONTACT_PAGE = document.getElementById('contact-page');

    // Create a new paragraph element
    const NEW_MESSAGE = document.createElement('p');

    // Set the text content of the paragraph
    NEW_MESSAGE.textContent = "Thank you for your message";

    // Apply styling to the paragraph
    NEW_MESSAGE.style.fontSize = '24px';

    // Replace the contents of the contact-page with the new paragraph
    CONTACT_PAGE.innerHTML = ''; // Clear existing content
    CONTACT_PAGE.appendChild(NEW_MESSAGE);
});