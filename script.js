const numberToGuess = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('result');

  if (guess === numberToGuess) {
    result.textContent = "¡Correcto! Adivinaste el número.";
  } else if (guess < numberToGuess) {
    result.textContent = "Muy bajo. Intenta de nuevo.";
  } else {
    result.textContent = "Muy alto. Intenta de nuevo.";
  }
}
