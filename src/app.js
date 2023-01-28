const theComputersChoice = document.getElementById('computerchoice');
const theUsersChoice = document.getElementById('userchoice');
const theResult = document.getElementById('result');
const possibleOutput = document.querySelectorAll('button');
let theUserChoice;
let theComputerChoice;
let theResults;

possibleOutput.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {

    theUserChoice = e.target.id;
    theUsersChoice.innerHTML = theUserChoice;
    compChoice();
    finalResult();
}))

function compChoice(){
    const random = Math.floor(Math.random() * possibleOutput.length) + 1;
    
    if(random === 1){
        theComputerChoice = 'Rock';}
    
    else if(random === 2){
        theComputerChoice = 'Paper';}

    else if(random === 3){
        theComputerChoice = 'Scissors';
    }
    theComputersChoice.innerHTML = theComputerChoice;
}

function finalResult(){
    if(theComputerChoice === 'Rock' && theUserChoice === 'Paper')
    theResults = 'You Win!'

    else if(theComputerChoice === 'Scissors' && theUserChoice === 'Rock')
    theResults = 'You Win!'

    else if(theComputerChoice === 'Rock' && theUserChoice === 'Scissors')
    theResults = 'You Lose!'

    else if(theComputerChoice === 'Scissors' && theUserChoice === 'Paper')
    theResults = 'You Lose!'

    else if(theComputerChoice === 'Rock' && theUserChoice === 'Rock')
    theResults = 'That\'s a draw!'
    
    else if(theComputerChoice === 'Paper' && theUserChoice === 'Paper')
    theResults = 'That\'s a draw!'

    else if(theComputerChoice === 'Scissors' && theUserChoice === 'Scissors')
    theResults = 'That\'s a draw!'

    theResult.innerHTML = theResults;
}