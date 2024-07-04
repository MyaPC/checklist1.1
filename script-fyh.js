// Function to display the current date and time (hours and minutes only)
function displayDateTime() {
const now = new Date();
const dateString = now.toLocaleDateString(); // Get the date string
const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get the time string with hours and minutes
const dateTimeString = `${dateString}`; // Combine date and time strings
document.getElementById('dateTime').textContent = dateTimeString;
}

// Call the function to display the current date and time initially
displayDateTime();

// Call the function to display the current date and time on page load
window.onload = displayDateTime;