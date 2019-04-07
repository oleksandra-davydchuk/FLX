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
let computerDecision = () => {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}