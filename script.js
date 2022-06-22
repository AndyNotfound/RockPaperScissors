const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.innerText;
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResult ();
}))

function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 1: 
            computerChoice = 'Rock'
            return computerChoice;
        case 2:
            computerChoice = 'Scissors'
            return computerChoice;
        case 3:
            computerChoice = 'Paper'
            return computerChoice;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult (){
    if (computerChoice === userChoice){
        result = 'It is a draw';
    } else if (computerChoice === 'Rock' && userChoice === 'Paper'){
        result = 'You Win!'
    } else if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        result = 'You lose :|';
    } else if (computerChoice === 'Paper' && userChoice === 'Scissors'){
        result = 'You Win!';
    } else if (computerChoice === 'Paper' && userChoice === 'Rock'){
        result = 'You lose :|';
    } else if (computerChoice === 'Scissors' && userChoice === 'Rock'){
        result = 'You Win!';
    } else if (computerChoice === 'Scissors' && userChoice === 'Paper'){
        result = 'You lose :|';
    }
    resultDisplay.innerHTML = result;
}