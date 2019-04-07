//reset game/new game
resetGame.onclick = () => {
  playerWins = 0;
  computerWins = 0;
  round = 1;
  roundInformation.innerHTML = '';
  finalWinner.innerHTML = '';
  rock.disabled = false;
  paper.disabled = false;
  scissors.disabled = false;
}