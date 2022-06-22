const computerChoiceDisplay = document.getElementById('computerChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.innerText;
   userChoiceDisplay.innerHTML = userChoice;
}))