const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
let playerScore = 0;
let computerScore = 0;
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}



function    playRound(playerSelection,  computerSelection)  {
    if(playerSelection  === computerSelection) {
      

}


function    game()  {
    for(let i = 0; i < 5; i++)    {
        playRound(prompt('Play game'),  computerPlay());
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