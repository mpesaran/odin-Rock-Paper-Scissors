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

const container = document.getElementById('container')
let resultDiv = document.createElement('div')
let finalResult = document.createElement('div')

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie! Both chose " + humanChoice
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    finalResult.textContent = `Scores: Human - ${humanScore}, Computer - ${computerScore}`
    container.appendChild(resultDiv);
    container.appendChild(finalResult)

    if (humanScore == 5) {
        alert("You Won!!");
        setTimeout(clearResults, 1000); // Delay clearing the results so the alert is shown first
    } else if (computerScore == 5) {
        alert("Computer won!!");
        setTimeout(clearResults, 1000); // Delay clearing the results so the alert is shown first
    }
}

function clearResults() {
    resultDiv.textContent = '';
    finalResult.textContent = '';
    humanScore = 0;
    computerScore = 0;
}


const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});