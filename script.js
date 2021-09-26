/// Generate a random choice for the computer
const computerPlay = () => {
    computerChoices = ['Rock', 'Paper', 'Scissors'];
    randomNum = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomNum];
};

/// Make sure player input has the first letter capitalized and the rest of the string lower case so that it wont break if else statements
const validatePlayerInput = (playerSelection) => {
    firstLetter = playerSelection.charAt(0);
    strNoFirstLetter = playerSelection.slice(1);
    const validatedInput = firstLetter.toUpperCase() + strNoFirstLetter.toLowerCase();
    return validatedInput;
};

/// play one round of rock paper scissors and return either true(win) false(lose) or draw for evaluation in game()
const playRound = (playerSelection, computerSelection) => {
    playerWon = true;

    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        return playerWon;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return !playerWon;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return playerWon;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        return !playerWon;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return !playerWon;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return playerWon;
    }
    ///Draws
    else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'draw';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'draw';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'draw';
    }
};

const game = () => {
    let gameOver = false;
    let playerScore = 0;
    let computerScore = 0;

    while (gameOver === false) {
        const computerSelection = computerPlay();
        let playerSelection = prompt('Enter your choice (Rock, Paper, Scissors)');
        // make player input case insensitive
        playerSelection = validatePlayerInput(playerSelection);
        const roundResults = playRound(playerSelection, computerSelection);

        //determine round results so that scores can be inciments and we can tell if the player or the computer has reached a score of 5 that will end the game
        if (roundResults) {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            console.log(`Current Score: You: ${playerScore} Computer: ${computerScore}`);
        } else if (!roundResults) {
            computerScore++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            console.log(`Current Score: You: ${playerScore} Computer: ${computerScore}`);
        } else console.log(`It's a draw ${playerSelection} is the same as ${computerSelection}`);

        // determine if game is over and announce winner
        if (playerScore === 5) {
            gameOver = true;
            console.log(`You won! Final score: You: ${playerScore} Computer: ${computerScore}`);
        } else if (computerScore === 5) {
            gameOver = true;
            console.log(`You lost! Final score: Computer: ${computerScore} You: ${playerScore}`);
        }
    }

    console.log;
};

game();
