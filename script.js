let playerEl = document.getElementById("player-el");
let compEl = document.getElementById("comp-el");
let pEl = document.getElementById("p-el");
let h4El = document.getElementById("h4-el");
let playerPoints = document.getElementById("playerScore")
let computerPoints = document.getElementById("computerScore")
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('button')
const winners = []

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         alert(button.textContent)
//     });
// });

function computer(){

    let arr = ["rock","paper","scissors"];

    let randomIndex = Math.floor(Math.random()* 3 + 1);
    //check random value
    if(randomIndex === 1) {
        return "rock";
    } else if (randomIndex === 2){
        return "paper";
    }else if (randomIndex === 3){
        return "scissors";
    } else return "falty";

}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        pEl.textContent = "its tie"
        return 'tie'
    }
    
    if(playerSelection === "rock")
    {
        if(computerSelection === "scissors"){
            // pEl.textContent = 
            playerScore++
            return "player"
        }
        else{
            // pEl.textContent = 
            computerScore++
            // updateScore()
            return "player"
        }
    }
    if(playerSelection === "paper")
    {
        if(computerSelection === "scissors"){
            // pEl.textContent = 
            computerScore++
            // updateScore()
            return "computer"
        }
        else{
            // pEl.textContent = 
            playerScore++
            // updateScore()
            return "player"
        } 
    }
    if(playerSelection === "scissors")
    {
        if(computerSelection === "rock"){
            // pEl.textContent = 
            computerScore++
            // updateScore()
            return "computer"
        }
        else{
            // pEl.textContent = 
            playerScore++
            return "player"
        }
    }
    
  }


function game()
{
   
    // for(let i=0;i<5;i++)
    // {
    //     const playerSelection = prompt('Choose Rock , Paper or Scissors','Rock, Paper, Scissors').toLowerCase()

    //     const computerSelection = computer()
    //     pEl.textContent = playRound(playerSelection, computerSelection)

    // }
    // if(playerScore > computerScore){
    //     return 'You beat computer'
    // }
    // else if(computerScore > playerScore)
    // {
    //     return 'computer beats you'
    // }
    // else{
    //     return 'tie'
    // }

    playRound()
    
}

console.log(game())

function setWins(){
    const pWinCount = winners.filter((item) => item == 'player').length;
    const cWinCount = winners.filter((item) => item == 'computer').length;
    const tie =  winners.filter((item) => item == 'tie').length;
}





  