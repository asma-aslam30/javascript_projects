 // Set the date for the start of Ramadan
const ramadanStartDate = new Date('2025-02-28T00:00:00');

// Function to update the countdown
function updateCountdown() {
    const now = new Date();
    const timeDifference = ramadanStartDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<div>Ramadan has started!</div>';
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
