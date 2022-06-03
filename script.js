'use strict';

let score = 20;
let highscore = 0;
let secretNumer = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumer;
// let message  = document.querySelector('.message');
// let scoreMessage = document.querySelector('.score');
// let highScoreMessage = document.querySelector('.highscore');
// let guess = Number(document.querySelector('.guess').value);
// console.log(typeof guess)
// let check = document.querySelector('.check');

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
let scoreDecress = function () {
    score--
     document.querySelector('.score').textContent = score;
}
document.querySelector('.check').addEventListener('click' , function () {
    let guess = Number(document.querySelector('.guess').value);
    if (score >= 1) {
        if (!guess) {
             displayMessage('No Number')
        }
        else if (guess === secretNumer) {
            displayMessage("Correct Number...");
            document.querySelector('body').style.backgroundColor = '#60b416';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumer;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (guess > secretNumer) {
            displayMessage("Too High...");
            scoreDecress();
           
        } else if (guess < secretNumer) {
            displayMessage("Too Low...");
            scoreDecress();
        }
    
    } else {
        displayMessage("You loss the game...");

    }
    
})

document.querySelector('.again').addEventListener('click', function() {
    secretNumer = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';

})


