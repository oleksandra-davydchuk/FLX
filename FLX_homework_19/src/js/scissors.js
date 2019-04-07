//scissors button
scissors.onclick = () => {
  playerChoice = 'Scissors';
  computerChoice = computerDecision();
  if (computerChoice === playerChoice) {
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, it's a tie!`;
  } else if (computerChoice === 'Paper') {
    playerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've WON!`;
  } else {
    computerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've LOST!`;
  }
  round++;
  gameOver();
}