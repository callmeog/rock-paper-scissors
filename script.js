const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}
/*let rock = /rock/i;
let paper = /paper/i;
let scissors = /scissors/i;*/

function    playRound(playerSelection,  computerSelection)  {
    if(playerSelection  === 'rock') {
        console.log("You Lose! Paper beats Rock")
    }else if(playerSelection === 'paper') {
        console.log('It\'s a draw, nobody wins')
    }

}

const   playerSelection     =   prompt('Player turn');
const   computerSelection   =   computerPlay();
console.log(playRound(playerSelection,  computerSelection));

function    game()  {
    playRound(playerSelection,  computerSelection);
    for(let i = 0; i < 5; i)    {
        
    }
}