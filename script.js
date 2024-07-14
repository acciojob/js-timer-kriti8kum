// write js code here if required
function updateTimer() {
    const now = new Date();

    // Format date and time
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Construct the formatted timer string
    const timerString = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

    // Display the timer in the <p> tag
    document.getElementById('timer').innerText = timerString;
}

// Update the timer immediately and then every second
updateTimer();
setInterval(updateTimer, 1000);
