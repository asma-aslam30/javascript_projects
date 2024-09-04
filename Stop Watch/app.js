let timeInterval;
let timeValue = 0;
let running = false;

function setTimer() {
    if (!running) {
        running = true;
        timeInterval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(timeInterval);
    }
}

function resetTimer() {
    stopTimer();
    timeValue = 0;
    updateDisplay();
}

function updateTimer() {
    timeValue++;
    updateDisplay();
}

function updateDisplay() {
    const hours = String(Math.floor(timeValue / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((timeValue % 3600) / 60)).padStart(2, '0');
    const seconds = String(timeValue % 60).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.querySelector('.timer').textContent = formattedTime;
}