
//generating the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// displaying the message(which is used multiple times)
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'βοΈ No number!';
        displayMessage('βοΈ No number!');


    }
    // When player wins
    else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'π Correct Number!';
        displayMessage('π Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // checking for high score
        if (score > highscore) {
            //updating the score to highscore
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        alert('hurrry you have WON the gameπ!!!! you can RESTART  the game agin ')


    }

    // When guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'π Too high!' : 'π Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        //when score becomes zero (loosing the game)
        else {
            // document.querySelector('.message').textContent = 'π₯ You lost the game!';
            displayMessage('π₯ You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});







//functionality   to resart the game again
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

