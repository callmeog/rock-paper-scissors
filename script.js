const   computerGameSelection   =   ['rock',    'paper',    'scissors'];
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
            case computerSelection == 'rock':
                computerScore++
                console.log('Rock');
                break;
            
            case computerSelection == 'paper':
                console.log('Paper');
                break;

            case computerSelection == 'scissors':
                playerScore++
                console.log('Scissors')
        }
     
        switch (true) {
            case playerSelection == 'paper':
            playerScore++
            console.log('Paper ');
            break;

            case playerSelection == 'rock':
                console.log('Rock');
                break;
            
            case playerSelection == 'scissors':
            computerScore++
                console.log('Scissors');
                break;
        }

        
    }
//}



function    game()  {
    for(let i = 0; i < 5; i++)    {
        playRound(prompt('Play game'), computerPlay());
    }
    if(playerScore > computerScore) {
        alert('Congrats, you won the game')
    }else if(playerScore < computerScore) {
        alert('Sorry computer won')
    }else {
        alert('Its a draw,  nobody won')
    }
}
game()