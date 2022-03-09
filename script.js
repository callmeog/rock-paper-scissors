const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];

let computerScore    =   1;
let playerScore     =   1;
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}

function    playRound(playerSelection,  computerSelection)  {

    
    const   rock    =   /rock/i;
    const   Paper   =   /paper/i;
    const   Scissors    =   /scissors/i;

    if(rock.test(playerSelection))  {
        switch  (true)  {
            case    computerSelection   ===    'Rock':
                console.log('Draw, play again');
                break;

            case    computerSelection   ===    'paper':
                playerScore++
                console.log('Computer win you lose');
                break;
            
            case    computerSelection   ===    'scissors':
                computerScore++
                console.log('Oh no, computer win you lose');
                break;
        }
    }


}

const   playerSelection     =   prompt('Player turn');
const   computerSelection   =   computerPlay();
console.log(playRound(playerSelection,  computerSelection));

function    game()  {
    playRound();
    for(let i = 0; i < 5; i)    {
        if(playerSelection > computerGameSelection) {
            console.log('Congratulations you won')
        }else if(computerSelection < playerSelection) {
            console.log('Sorry you Lose, computer won')
        }
    }
}