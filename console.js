


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function getHumanChoice() {
    const choice = prompt("select one of these : paper , rock , scissors")
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice();
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Both chose " + humanChoice)
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    }


    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!")
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!")
    } else {
        console.log("it's a tie! start again!")
    }
}

playGame()