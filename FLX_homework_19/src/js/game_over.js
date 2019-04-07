// game over 
gameOver = () => {
  if (round > 3) {
    roundInformation.innerHTML;
    getWinner();
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
}