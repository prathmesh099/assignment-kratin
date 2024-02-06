document.addEventListener("DOMContentLoaded", function() {
  // Random number generation between 1 and 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  // Getting necessary elements from the DOM
  const guessField = document.getElementById('guessField');
  const guessSubmit = document.getElementById('guessSubmit');
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('.lowOrHi');

  // Counter for tracking number of guesses
  let guessCount = 1;
  let resetButton;

  // Function to check the guessed number
  function checkGuess() {
    // User's guessed number
    const userGuess = Number(guessField.value);

    // If the guessed number is correct
    if (userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.classList.remove('red');
      lastResult.classList.add('green');
      setGameOver();
    } 
    // If the guessed number is incorrect
    else {
      if (guessCount === 10) {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();
      } 
      else {
        lastResult.textContent = 'Wrong!';
        lastResult.classList.remove('green');
        lastResult.classList.add('red');
        if(userGuess < randomNumber) {
          lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Last guess was too high!';
        }
      }
    }

    // Increment the guess count
    guessCount++;
    // Clear the input field
    guessField.value = '';
    // Focus on input field for the next guess
    guessField.focus();
  }

  // Event listener for the submit button
  guessSubmit.addEventListener('click', checkGuess);

  // Function to set game over and disable the guess input
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  // Function to reset the game
  function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i++) {
      resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.classList.remove('green', 'red');
    // Generate new random number
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
});
