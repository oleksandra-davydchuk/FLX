//get winner - winner of the game
getWinner = () => {
  if (computerWins === playerWins) {
    winner = 'It`s a tie! Nobody';
    finalWinner.innerHTML = `Player vs. Computer. ${playerWins}:${computerWins} ${winner}'s WON!`;
  } else if (playerWins > computerWins) {
    winner = 'Player';
    finalWinner.innerHTML = `Player vs. Computer.  ${playerWins}:${computerWins} ${winner}'s WON!`;
  } else if (playerWins < computerWins) {
    winner = 'Computer';
    finalWinner.innerHTML = `Player vs. Computer.  ${playerWins}:${computerWins} ${winner}'s WON!`;
  }
}