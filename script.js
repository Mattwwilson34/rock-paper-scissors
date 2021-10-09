/// Generate a random choice for the computer
const computerPlay = () => {
    computerChoices = ['Rock', 'Paper', 'Scissors'];
    randomNum = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNum];
};
const playRound = (playerSelection, computerSelection) => {
    playerWon = true;
    const message = document.querySelector('.message');

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        message.textContent = 'Paper beats Rock you lost!';
        return !playerWon;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        message.textContent = 'Rock beats Scissors you won!';
        return playerWon;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        message.textContent = 'Paper beats Rock you won!';
        return playerWon;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        message.textContent = 'Scissors beats Paper you lost!';
        return !playerWon;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        message.textContent = 'Rock beats Scissors you lost!';
        return !playerWon;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        message.textContent = 'Scissors beats Paper you won!';
        return playerWon;
    }
    ///Draws
    else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        message.textContent = 'You both played Rock, its a draw!';
        return 'draw';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        message.textContent = 'You both played Paper, its a draw!';
        return 'draw';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        message.textContent = 'You both played Scissors, its a draw!';
        return 'draw';
    }
};
const updateScore = (roundResults) => {
    const playerScoreSpan = document.querySelector('.playerScore');
    const computerScoreSpan = document.querySelector('.computerScore');
    let pScore = playerScoreSpan.textContent;
    let cScore = computerScoreSpan.textContent;

    if (roundResults === 'draw') {
        return 'Draw!';
    } else if (roundResults) {
        pScore++;
    } else if (!roundResults) {
        cScore++;
    }
    playerScoreSpan.textContent = pScore;
    computerScoreSpan.textContent = cScore;
    determineWinner(pScore, cScore);
    return;
};
const resetGame = () => {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    const playerScoreSpan = document.querySelector('.playerScore');
    const computerScoreSpan = document.querySelector('.computerScore');
    const mainContainer = document.querySelector('.main-container');
    const newGameBtnWrapper = document.querySelector('.new-game-wrapper');
    const message = document.querySelector('.message');

    choiceBtns.forEach((btn) => {
        btn.disabled = false;
    });

    mainContainer.removeChild(newGameBtnWrapper);
    message.textContent = '';
    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
};
const determineWinner = (pScore, cScore) => {
    const message = document.querySelector('.message');
    const choiceBtns = document.querySelectorAll('.choice-btn');
    if (pScore > 4 || cScore > 4) {
        if (pScore > 4) {
            message.textContent = 'You won the game!';
        } else {
            message.textContent = 'The computer Won!';
        }
        console.log('Game Over');
        choiceBtns.forEach((btn) => {
            btn.disabled = true;
        });
        const mainContainer = document.querySelector('.main-container');
        const newGameBtnWrapper = document.createElement('div');
        newGameBtnWrapper.classList.add('new-game-wrapper');
        const newGameBtn = document.createElement('button');
        newGameBtn.classList.add('new-game-btn');
        newGameBtn.innerText = 'Play Again?';
        mainContainer.append(newGameBtnWrapper);
        newGameBtnWrapper.append(newGameBtn);

        newGameBtn.addEventListener('click', resetGame);
    }
};
const addPlayerChoiceBtnListeners = () => {
    const choiceBtns = document.querySelectorAll('.choice-btn');
    choiceBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const playerSelection = e.target.textContent;
            const computerSelection = computerPlay();
            const roundResults = playRound(playerSelection, computerSelection);
            updateScore(roundResults);
        });
    });
};
const game = () => {
    addPlayerChoiceBtnListeners();
};
game();
