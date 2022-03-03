const myArray = ['Rock', 'Paper', 'Scissors'];
function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        return "You Lose, Paper beats rock" ;
    }else (computerSelection === 'paper')
    return true;
}

const playerSelection = 'rock';
const computerSelection = myArray;
console.log(playRound(playerSelection,computerSelection))