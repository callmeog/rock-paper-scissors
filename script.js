const myArray = ['Rock', 'Paper', 'Scissors'];
function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)]
}
const playerSelection = 'rock'
const computerSelection = myArray;
function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock' ) {
        return "You Lose, Paper beats rock"
    }else (computerSelection === '')
        return true

}

console.log(playRound(playerSelection,computerSelection))