let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

let humanScore = 0;
let computerScore = 0;

let computerChoice = '';
let humanChoice = '';
let rodada = '';

btnRock.addEventListener('click', (event) => {
    //alert('Rock was clicked');
    humanChoice = 'rock';
    computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
});

btnPaper.addEventListener('click', (event) => {
    humanChoice = 'paper';
    computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));;
});

btnScissors.addEventListener('click', (event) => {
    humanChoice = 'scissors';
    computerChoice = getComputerChoice();

    console.log(playRound(humanChoice, computerChoice));
});

function getComputerChoice() {
    gameOptions = ['rock', 'paper', 'scissors'];

    return gameOptions[Math.floor(Math.random() * 3)];
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

    if (humanChoice === computerChoice) {
        return 'Tie'
    } ;
};