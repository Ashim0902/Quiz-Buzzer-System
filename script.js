const buzzers = document.querySelectorAll('.buzzer');
const winnerDisplay = document.getElementById('winner');
const resetButton = document.getElementById('reset');
const buzzerSound = document.getElementById('buzzerSound'); // Reference to the audio element

let buzzerLocked = false;

// Add click event to each buzzer
buzzers.forEach(buzzer => {
  buzzer.addEventListener('click', () => {
    if (!buzzerLocked) {
      buzzerSound.currentTime = 0; // Reset sound to the beginning
      buzzerSound.play();         // Play sound
      winnerDisplay.textContent = `${buzzer.textContent} buzzed first!`;
      buzzerLocked = true;
    }
  });
});

// Reset button functionality
resetButton.addEventListener('click', () => {
  buzzerLocked = false;
  winnerDisplay.textContent = 'Waiting for buzzer...';
});
