let startGame = confirm('Do you want to play a game?');
let range = 5;
let randomNumber = Math.floor(Math.random() * range);
let prize = 0;
let allAttempts = 3;
let attempts = allAttempts;
let possiblemaxPrize = 10;
let possiblePrize = possiblemaxPrize;

if (startGame === true) {
    while (attempts > 0) {
        let guessedNumber = Number(prompt('Enter a number from 0 to ' + range + '\n' +
            'Attempts left: ' + attempts + '\n' +
            'Total prize: ' + prize + '$' + '\n' +
            'Possible prize on current attempt: ' + possiblePrize + '$'));
        if (guessedNumber === randomNumber) {
            prize = prize + possiblePrize;
            let newGame = confirm('Congratulation! Your prize is: ' + prize + ' Do you want to continue?');
            if (newGame === true) {
                attempts = allAttempts;
                range = range * 2;
                possiblemaxPrize = possiblemaxPrize * 3;
                possiblePrize = possiblemaxPrize;
            } else {
                alert('Thank you for a game. Your prize is: ' + prize);
            }
        }
        if (guessedNumber !== randomNumber) {
            possiblePrize = Math.floor(possiblePrize / 2);
            attempts--;
        }
    }
    if (attempts === 0) {
        alert('Thank you for a game. Your prize is: ' + prize);
    }
} else {
    alert('You did not become a millionaire, but can.');
}