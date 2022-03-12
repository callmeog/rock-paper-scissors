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
            case computerSelection == 'paper':
                playerScore++
                console.log(`computer: ${computerSelection} `);
                break;
            
            case computerSelection == 'rock':
                computerScore++
                console.log(`computer: ${computerSelection} `);
                break;

            case computerSelection == 'scissors':
                console.log(`computer: ${computerSelection}`);
                break
        }
     
        switch (true) {
            case playerSelection == 'rock':
            playerScore++
            console.log(`player: ${playerSelection}`);
            break;

            case playerSelection == 'paper':
                playerScore++
                console.log(`player: ${playerSelection}`);
                break;
            
            case playerSelection == 'scissors':
                console.log(`player: ${playerSelection}`);
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
        alert(`Sorry, computer won`)
    }else {
        alert('Draw  nobody won')
    }
}
game()