let humanScore = 0; // MODIFIED: Made global
let computerScore = 0; // MODIFIED: Made global
const MAX_SCORE = 5;

// ADDED: References to HTML elements
const buttons = document.querySelectorAll('#choices button'); 
const roundMessage = document.getElementById('round-message');
const scoreDisplay = document.querySelector('#results p:first-child');
const finalWinnerDisplay = document.getElementById('final-winner');

//getComputerChoice
function getComputerChoice() {
    const choice = [ "rock" , "paper" , "scissors" ];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
  }


//play a round
function playRound(humanSelection) {

    if (humanScore === MAX_SCORE || computerScore === MAX_SCORE ) {
        return;
    }
    
    const computerSelection = getComputerChoice();
    let resultMessage = "";

    // Normalize selection (if you're not doing it before calling, though button IDs are likely lowercase)
    const human = humanSelection.toLowerCase();

    if (human === computerSelection) {
        resultMessage = `It's a Tie Both choose ${human}`;
    }
    else if (
        (human === 'rock' && computerSelection === 'scissors') ||
        (human === 'paper' && computerSelection === 'rock') ||
        (human === 'scissors' && computerSelection === 'paper')
    )
    {
        humanScore++; //Use global score
        resultMessage = `You Win ${human} beats ${computerSelection}.`;   
    }
    else {
        computerScore++;
        resultMessage = `You lose ${computerSelection} beats ${human}.`;
    }
    //Use DOM Output
    roundMessage.textContent = resultMessage;
    scoreDisplay.textContent = `Current Score: Player ${humanScore} - Computer ${computerScore}`;
    
    //Add Win Check
    checkWinner(); 
}

function checkWinner() {
    if (humanScore === MAX_SCORE) {
        finalWinnerDisplay.textContent = "**GAME OVER: You are the GRAND WINNER!**";
        disableButtons();
    } else if (computerScore === MAX_SCORE) {
        finalWinnerDisplay.textContent = "**GAME OVER: The Computer wins!**";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // When a button is clicked, call playRound and pass the button's ID 
        // (which should be 'rock', 'paper', or 'scissors')
        playRound(button.id);
    });
});