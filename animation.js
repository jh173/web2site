let inactivityTimeout;
const node11 = document.querySelector('.node-11');  // The container of the logo and text
const hoverText = document.querySelector('.hover-text'); // The hover-text element

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(() => {
    hoverText.classList.add('active'); // Show the hover-text after 5 seconds
  }, 250); // 5 seconds of inactivity
}

// Listen for mouse movement or keypress to reset the inactivity timer
document.body.addEventListener('mousemove', resetInactivityTimer);
document.body.addEventListener('keypress', resetInactivityTimer);

// Initialize the timer when the page loads
resetInactivityTimer();
