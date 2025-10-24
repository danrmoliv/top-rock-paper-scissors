let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

let resultsDiv = document.querySelector('#results');
let roundsUl = document.querySelector('#rounds')

let humanScore = 0;
let computerScore = 0;
let rodadas = 0;

let computerChoice = '';
let humanChoice = '';
let round = '';
let result = '';

function appendResult(round) {
    if ((humanScore === 5) || (computerScore === 5)) {
        
        if (humanScore > computerScore) {
            result = "You Won!!!!";
        } else {
            result = "You Lost :(";
        }

        let textoRound = `Round: ${rodadas} - ${round} `
        let textoScoreboard = `|||||| Human Score: ${humanScore} |||||| Computer Score: ${computerScore} ||||||`
    
        let liNew = document.createElement('li');
        liNew.textContent = textoRound;
        roundsUl.appendChild(liNew);
        
        let liComp = document.createElement('p');
        liComp.textContent = textoScoreboard;
        liNew.appendChild(liComp);

        let paraNew = document.createElement('p');
        paraNew.textContent = result;
        resultsDiv.appendChild(paraNew);

        resultsDiv.appendChild(roundsUl);

        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;

    } else if ((humanScore < 5) && (computerScore < 5)) {

        let textoRound = `Round: ${rodadas} - ${round} `
        let textoScoreboard = `|||||| Human Score: ${humanScore} |||||| Computer Score: ${computerScore} ||||||`
    
        let liNew = document.createElement('li');
        liNew.textContent = textoRound;
        roundsUl.appendChild(liNew);
        
        let liComp = document.createElement('p');
        liComp.textContent = textoScoreboard;
        liNew.appendChild(liComp);

    };
};

btnRock.addEventListener('click', () => {
    //alert('Rock was clicked');
    humanChoice = 'rock';
    computerChoice = getComputerChoice();
    round = playRound(humanChoice, computerChoice);

    appendResult(round);


    console.log(round);
});

btnPaper.addEventListener('click', () => {
    humanChoice = 'paper';
    computerChoice = getComputerChoice();
    round = playRound(humanChoice, computerChoice);
    
    appendResult(round);

    console.log(round);
});

btnScissors.addEventListener('click', () => {
    humanChoice = 'scissors';
    computerChoice = getComputerChoice();
    round = playRound(humanChoice, computerChoice);

    appendResult(round);

    console.log(round);
});


function getComputerChoice() {
    gameOptions = ['rock', 'paper', 'scissors'];

    return gameOptions[Math.floor(Math.random() * 3)];
};


function playRound(humanChoice, computerChoice) {
    rodadas++

    if (humanChoice === 'paper'){
        if (computerChoice === 'rock') {
            humanScore++
            //rodadas++
            return 'You Win! Paper beats Rock';
        }
        else if (computerChoice === 'scissors') {
            computerScore++
            //rodadas++
            return 'You Lost! Scissors beats Paper';
        };
    } else if (humanChoice === 'rock'){
        if (computerChoice === 'paper') {
            computerScore++
            //rodadas++
            return 'You Lose! Paper beats Rock';
        }
        else if (computerChoice === 'scissors') {
            humanScore++
            //rodadas++
            return 'You Win! Rock beats Scissors';
        };
    } else if (humanChoice === 'scissors'){
        if (computerChoice === 'rock') {
            computerScore++
            //rodadas++
            return 'You Lose! Rock beats Scissors';
        }
        else if (computerChoice === 'paper') {
            humanScore++
            //rodadas++
            return 'You Win! Scissors beats Paper';
        };
    };

    if (humanChoice === computerChoice) {
        return 'Tie'
    } ;
};
