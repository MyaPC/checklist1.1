document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('click', function() {
            const rating = this.value;
            const labels = this.parentNode.querySelectorAll('label');
            labels.forEach((label, index) => {
                label.style.color = index < rating ? '#f5b301' : '#ccc';
            });
        });
    });
});

// Function to display the current date and time (hours and minutes only)
function displayDateTime() {
const now = new Date();
const dateString = now.toLocaleDateString(); // Get the date string
const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get the time string with hours and minutes
const dateTimeString = `${dateString} ${timeString}`; // Combine date and time strings
document.getElementById('dateTime').textContent = dateTimeString;
}

// Call the function to display the current date and time initially
displayDateTime();

// Call the function to display the current date and time on page load
window.onload = displayDateTime;