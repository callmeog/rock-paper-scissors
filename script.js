const   computerGameSelection   =   ['Rock',    'Paper',    'Scissors'];
function    computerPlay()  {
    return  computerGameSelection[Math.floor(Math.random()  *   computerGameSelection.length)];
}
let rock = /rock/i;
let paper = /paper/i;
let scissors = /scissors/i;

function    playRound(playerSelection,  computerSelection)  {
    if(rock.test(playerSelection)) {
        switch(true) {
            case playerSelection == 'rock':
                console.log("You Lose! Paper beats Rock");
        }
    }

}

const   playerSelection     =   prompt('Player turn');
const   computerSelection   =   computerPlay();
console.log(playRound(playerSelection,  computerSelection));

function    game()  {
   /* playRound(playerSelection,  computerSelection);
    for(let i = 0; i < 5; i)    {
        if(playerSelection > computerGameSelection) {
            console.log('Congratulations you won')
        }else if(computerSelection < playerSelection) {
            console.log('Sorry you Lose, computer won')
        }
    }*/
}