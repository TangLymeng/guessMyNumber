'use strict';

// Random the number between 1 to 20
let secretNumber = Math.floor(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('🚫Not number pls input only number');
    // When user input invalid number
  } else if (guess > 20 || guess < 1) {
    displayMessage('Please input the number between 1-20');
  } else if (guess !== secretNumber) {
    // When user input wrong number
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lose the game.');
    }
  } else if (guess === secretNumber) {
    // When user input the correct number
    displayMessage('🎉Correct Answer');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
