console.log("----------------------------------------------")
console.log("Rock, Paper Scissors battle")
console.log("----------------------------------------------\n")

let humanScore = 0;
let computerScore = 0;

// console.log("----------Scoreboard---------")
// console.log(`Human Score: ${humanScore}`)
// console.log(`Computer Score: ${computerScore}`)
// console.log("-----------------------------\n")


function getComputerChoice() {
    gameOptions = ['rock', 'paper', 'scissors'];

    return gameOptions[Math.floor(Math.random() * 3)];
};

function getHumanChoice() {
    return prompt("rock, paper or scissors?");
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'paper'){
        if (computerChoice === 'rock') {
            humanScore++
            return 'You Win! Paper beats Rock';
        }
        else if (computerChoice === 'scissors') {
            computerScore++
            return 'You Lost! Scissors beats Paper';
        };
    } else if (humanChoice === 'rock'){
        if (computerChoice === 'paper') {
            computerScore++
            return 'You Lose! Paper beats Rock';
        }
        else if (computerChoice === 'scissors') {
            humanScore++
            return 'You Win! Rock beats Scissors';
        };
    } else if (humanChoice === 'scissors'){
        if (computerChoice === 'rock') {
            computerScore++
            return 'You Lose! Rock beats Scissors';
        }
        else if (computerChoice === 'paper') {
            humanScore++
            return 'You Win! Scissors beats Paper';
        };
    };
};

function playGame() {

    for (let i = 1; i <= 5; i++) {

        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice().toLowerCase();

        let roundResult = playRound(humanChoice, computerChoice);

        console.log("\n----------------------------------------------\n")

        console.log(`Round ${i}:`)

        
        console.log(roundResult);

        console.log("\n----------------------------------------------\n")

        // console.log("----------Scoreboard---------")
        // console.log(`Human Score: ${humanScore}`)
        // console.log(`Computer Score: ${computerScore}`)
        // console.log("-----------------------------\n")

    }


}

playGame()

console.log("-----------------Final Scoreboard--------------");
console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);
console.log("----------------------------------------------\\n");

if (humanScore > computerScore) {
    console.log("You Won!!!!");
} else {
    console.log("You Lost :(");
}
