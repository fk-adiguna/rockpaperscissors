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

