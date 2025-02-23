let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let value = Math.random() * 3
    if (value < 1){
        return 'rock';
    } else if (value < 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
function getHumanChoice() {
    const choice = prompt('Rock, Paper or Scissors?').toLowerCase

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice
    } else {
        return null
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if ((humanChoice === 'rock' && computerChoice == 'scissors') || (humanChoice === 'paper' && computerChoice == 'rock') || (humanChoice === 'scissors' && computerChoice == 'paper')) {
        humanScore += 1
    } else if ((humanChoice === 'rock' && computerChoice == 'paper') || (humanChoice === 'paper' && computerChoice == 'scissors') || (humanChoice === 'scissors' && computerChoice == 'rock')) {
        computerScore += 1
    }

    return
}
