import '../scss/styles.scss';
import '../scss/buttons.scss';
import {computerDesicion} from './computerDesicion.js'
//variables
const rock = document.querySelector('.rock-btn');
const paper = document.querySelector('.paper-btn');
const scissors = document.querySelector('.scissors-btn');
const roundInformation = document.querySelector('.round-information');
const finalWinner = document.querySelector('.final-winner');
const resetGame = document.querySelector('.reset-game');
let playerChoice;
let computerChoice;
let choices = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;
let round = 1;
let winner = '';
let getWinner;
let gameOver;

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