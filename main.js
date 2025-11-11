//getComputerChoice
function getComputerChoice() {
    const choice = [ "rock" , "paper" , "scissors" ];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
  }

//getHumanChoice
function getHumanChoice() {
    let humanChoice;
    let isValidChoice = false;

    // Loop until a valid choice is made
    while (!isValidChoice) {
        // Prompt for the user's input
        humanChoice = prompt("Choose Rock, Paper, or Scissors (or type 'cancel' to exit):");

        // Handle case where user clicks Cancel or enters nothing
        if (humanChoice === null || humanChoice.trim() === '') {
            console.log("Game cancelled.");
            return null;
        }

        // Standardize the input (lowercase and remove extra spaces)
        humanChoice = humanChoice.toLowerCase().trim();

        // Check if the choice is valid
        if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
            isValidChoice = true; // Exit the loop
            return humanChoice;
        } else {
            // Give feedback for invalid input
            console.log(`"${humanChoice}" is not a valid choice. Please try again.`);
        }
    }
}

//play game
function playgame() {
    let scores ={
        humanScore: 0,
        computerScore: 0
    };
    const roundsToPlay = 5;

    console.log("Start game Rock , Paper , Scissors 5 Rounds")

    //play a round

function playRound(humanSelection, computerSelection, scores) {
    let resultMessage = "";

    if (humanSelection === computerSelection)
        resultMessage = `Tie + ${humanSelection}`;
    else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') || 
        ( humanSelection === 'scissors' && computerSelection === 'paper') )
        {
        scores.humanScore++;
        resultMessage = `You win because + ${humanSelection} + Win + ${computerSelection}`;
    }
    else {
        scores.computerScore++;
        resultMessage = `You Lose because + ${computerSelection} + Win + ${computerSelection}`;
    }

    console.log(`result: ${resultMessage}`);
  }
    
    for (let i = 1; i <= roundsToPlay; i++) {
        console.log(`\n*** Round ${i} ***`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (humanChoice === null) {
            console.log("You Stop Game");
            return;
        }

        console.log(`You Choose ${humanChoice}`);
        console.log(`Computer Choose ${computerChoice}`);

        playRound(humanChoice, computerChoice, scores);

        console.log(`Score: You${scores.humanScore} - Computer${scores.computerScore}`);
    }

    console.log("\n--5 Rounds End--");
    if(scores.humanScore > scores.computerScore){
        console.log(`You win the game with ${scores.humanScore} ต่อ ${scores.computerScore} `)
    }
    else if(scores.humanScore < scores.computerScore){
        console.log(`You lose the game with ${scores.humanScore} ต่อ ${scores.computerScore} `)
    }
    else {
        console.log(`You tie with ${scores.humanScore} ต่อ ${scores.computerScore} `);
    }
}