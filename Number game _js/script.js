function numberGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess;

  for (;;) {
    guess = prompt('Guess a number between 1 and 100:');

    guess = parseInt(guess);

    if (guess === randomNumber) {
      alert(
        `Congratulations!! You guessed the number ${randomNumber} correctly!`
      );
      break;
    } else if (guess < randomNumber) {
      alert('Too low! Try again!');
    } else {
      alert('Too high! Try again');
    }
  }
}

numberGuessingGame();
