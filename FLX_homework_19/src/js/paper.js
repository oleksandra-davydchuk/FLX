//paper button
paper.onclick = () => {
  playerChoice = 'Paper';
  computerChoice = computerDecision();
  if (computerChoice === playerChoice) {
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, it's a tie!`;
  } else if (computerChoice === 'Rock') {
    playerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've WON!`;
  } else {
    computerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've LOST!`;
  }
  round++;
  gameOver();
};