//rock button
rock.onclick = () => {
  playerChoice = 'Rock';
  computerChoice = computerDecision();
  if (computerChoice === playerChoice) {
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, it's a tie!`;
  } else if (computerChoice === 'Paper') {
    computerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've LOST!`;
  } else {
    playerWins++;
    roundInformation.innerHTML = `Round ${round}. ${playerChoice} vs. ${computerChoice}, You've WON!`;
  }
  round++;
  gameOver();
};