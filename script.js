const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
let playerScore = 1;
let computerScore = 1;
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}



function    playRound(playerSelection,  computerSelection)  {
    if(playerSelection  === 'rock') {
        console.log("You won, rock beats scissors");
        playerScore++
    }else if(playerSelection === 'paper') {
        console.log('It\'s a draw, nobody wins');
    }else if(playerSelection === 'scissors') {
        console.log('You lose computer won');
        computerScore++
    }else if (computerSelection === 'paper') {
        console.log('It\'s a draw, nobody wins')
    }else if(computerSelection === 'rock') {
        console.log('Computer lose, rock beats scissors')
        playerScore++
    }else if(computerSelection === 'scissors') {
        computerScore
        console.log('Computer won, you lose')
    }else {
        ''
    }

}

const   playerSelection     =   prompt('Player turn');
const   computerSelection   =   computerPlay();

function    game()  {
    for(let i = 0; i < 5; i++)    {
        playRound();
    }
    if(playerScore > computerScore) {
        alert('Congrats, you won the game')
    }else if(playerScore < computerScore) {
        alert('Sorry computer won')
    }else {
        alert('Its a draw')
    }
}
game()