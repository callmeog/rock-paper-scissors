const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
let playerScore = 0;
let computerScore = 0;
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}



function    playRound(playerSelection,  computerSelection)  {
    
/*  let rock = /rock/i;
    let paper = /paper/i;
    let scissors = /scissors/i; 
*/

//    if(rock.test(playerSelection)) {
        switch (true) {
            case playerSelection == 'rock':
                computerScore++
                console.log('rock beat scissors');
                break;
            
            case computerSelection == 'paper':
                computerScore++
                console.log('scissors beat paper');
                break;

            case computerSelection == 'scissors':
                playerScore++
                console.log('scissors beat paper')
        }
    }

//}



function    game()  {
    for(let i = 0; i < 1; i++)    {
        playRound(prompt('Play game'), computerPlay());
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