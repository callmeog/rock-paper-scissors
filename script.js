const computerGameSelection = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    return computerGameSelection[Math.floor(Math.random() * computerGameSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === 'rock') {
        return "You Lose, Paper beats rock" ;
    }else (computerSelection === 'paper')
    return true;
}

const playerSelection = 'rock';
const computerSelection = myArray;
//console.log(playRound(playerSelection,computerSelection))

function game() {
    playRound(playerSelection, computerSelection)
        {
            for (let i = 0; i < 5; i++)  {
                prompt('enter')
                if(playerSelection === 'rock' ) {
                    console.log('player has one point')
                } else if(computerSelection === 'Rock') {
                    console.log('computer has one point')
                }
            }
        }
    }

 
    