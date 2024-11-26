/********* create variables *********/
// Initialize variables
let day_cost = 35; // Default cost per day
let day_number = 0; // Default number of selected days
const DAYS = [
    document.getElementById('monday'),
    document.getElementById('tuesday'),
    document.getElementById('wednesday'),
    document.getElementById('thursday'),
    document.getElementById('friday'),
];
const CLEAR_BUTTON = document.getElementById('clear-button');
const HALF = document.getElementById('half');
const FULL = document.getElementById('full');
const CALCULATED_COST = document.getElementById('calculated-cost');

/********* Utility functions *********/
// Update the calculated total cost
function Calculate() {
    const total_cost = day_cost * day_number;
    CALCULATED_COST.textContent = total_cost;
}

// Toggle day selection and update count
function switchDay(day) {
    if (!day.classList.contains('clicked')) {
        day.classList.add('clicked');
        day_number += 1;
    } else {
        day.classList.remove('clicked');
        day_number -= 1;
    }
    Calculate();
}

/********* Event Listeners *********/
// Add event listeners for each day
DAYS.forEach(day => {
    day.addEventListener('click', () => switchDay(day));
});

// Clear all selections and reset variables
CLEAR_BUTTON.addEventListener('click', function () {
    DAYS.forEach(day => day.classList.remove('clicked'));
    day_number = 0;
    CALCULATED_COST.textContent = '0';
});

// Change rate to half-day
HALF.addEventListener('click', function () {
    day_cost = 20;
    HALF.classList.add('clicked');
    FULL.classList.remove('clicked');
    Calculate();
});

// Change rate to full-day
FULL.addEventListener('click', function () {
    day_cost = 35;
    FULL.classList.add('clicked');
    HALF.classList.remove('clicked');
    Calculate();
});

/********* Initial Setup *********/
// Set the default state
FULL.classList.add('clicked'); // Full-day is selected by default
CALCULATED_COST.textContent = '0';
