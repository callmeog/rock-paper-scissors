const options = [  
  {selected: 'Rock', beatenBy: 'Paper'},
  {selected: 'Paper', beatenBy: 'Scissors'},
  {selected: 'Scissors', beatenBy: 'Sock'}
];

const result = textContent = document.querySelector('#result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playerGame = document.querySelector('.player--game');
const computerGame = document.querySelector('.computer--game');

function choice() {  
  return Math.floor(Math.random() * options.length);
}

let playerPoint = 0;
let computerPoint = 0;
let WINNING_SCORE = 5;


function playRound(player) {
  let computer = choice();
  let playerOption = options[player];     
  let computerOption = options[computer]; 
  let textContent = "It's a tie"; 
  

  if (playerOption.beatenBy == computerOption.selected) {  
    computerPoint++;
    computerScore.textContent = computerPoint;
    textContent = `${computerOption.selected} beats ${playerOption.selected}`; 
  } else if (computerOption.beatenBy == playerOption.selected) { 
    playerPoint++;
    playerScore.textContent = playerPoint;
    textContent = `${playerOption.selected} beats ${computerOption.selected}`; 
  }
  
  //console.log({playerOption}, {computerOption});
  result.textContent = textContent;
  
if (checkWinningCondition(playerPoint, computerPoint, WINNING_SCORE)) {

  if(playerPoint < WINNING_SCORE) {
    result.textContent = 'Computer won, you lose!!!';
  }else if(computerPoint < WINNING_SCORE) {
   result.textContent = 'You won, computer lose!!!';
  }
}

}

function checkWinningCondition(playerPoint, computerPoint, WINNING_SCORE) {  
  return playerPoint >= WINNING_SCORE || computerPoint >= WINNING_SCORE;
}

const buttons = document.querySelectorAll('button'); 
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    let button = event.target;
    let noWinner = !checkWinningCondition(playerPoint, computerPoint, WINNING_SCORE);   
    
    if (noWinner) {
      playRound(button.dataset.value); 
    }
  })
})

const startBtn = document.querySelector('.restart-btn')
startBtn.addEventListener('click',() => location.reload());
