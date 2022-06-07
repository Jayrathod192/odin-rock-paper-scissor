let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = "0";
  document.querySelector(".computerScore").textContent = "0";
  document.querySelector(".ties").textContent = "Ties : 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  //play the game until someone wins 5 times
  let imgs = document.querySelectorAll(".pImg");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.class) {
        return playRound(img.textContent);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 5) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 5) {
    //display end results
    //change the button to visible,
    //change the text to display winner
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;

  if (playerWins == 5) {
    document.querySelector(".winner").textContent =
      "You Won 5 Games, Congrats!";
  } else {
    document.querySelector(".winner").textContent =
      "Sorry, the computer won 5 times";
  }
  document.querySelector(".reset").style.display = "flex";
  document.querySelector(".reset").style.padding = '16px 32px';
  document.querySelector(".reset").style.borderRadius = '12px';
  document.querySelector(".reset").style.fontSize = '20px';
  document.querySelector(".reset").style.fontWeight = '700';
  document.querySelector(".reset").style.backgroundColor = '#343a40';
  document.querySelector(".reset").style.color = '#f1f3f5';
  document.querySelector(".reset").style.marginTop = '20px';
  document.querySelector(".reset").style.letterSpacing = '2px';
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `You Chose: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The Computer Chose: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "You won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The Computer won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

function tallyWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `${pWinCount}`;
  document.querySelector(".computerScore").textContent = `${cWinCount}`;
  document.querySelector(".ties").textContent = `Ties : ${ties}`;
}

function computerSelect() {
  //todo - update the dom with the computer selection
  const choice = choices[Math.floor(Math.random() * choices.length)];

  document.querySelector(`.${choice}`).classList.add("active");

  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active");
  }, 700);

  return choice;
}

function checkWins() {
  const pWinCount = winners.filter((item) => item == "Player").length;
  const cWinCount = winners.filter((item) => item == "Computer").length;
  return Math.max(pWinCount, cWinCount);
}

function checkWinner(choice1, choice2) {
    if(choice1 === choice2){
        return 'Tie'
    }
    
    if(choice1 === "rock")
    {
        if(choice2 === "scissors"){
            return "Player"
        }
        else{
            return "Computer"
        }
    }
    if(choice1 === "paper")
    {
        if(choice2 === "scissors"){
            return "Computer"
        }
        else{
            return "Player"
        } 
    }
    if(choice1 === "scissors")
    {
        if(choice2 === "rock"){
            return "Computer"
        }
        else{
            return "Player"
        }
    }
}

// function setWins() {
//   const pWinCount = winners.filter((item) => item == "Player").length;
//   const cWinCount = winners.filter((item) => item == "Computer").length;
//   const ties = winners.filter((item) => item == "Tie").length;
// }
startGame();