const myArray = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function gamePlay(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    return "tie Game";
  }
  if (
    (computerSelection === "Rock" && playerSelection === "Scissors") ||
    (computerSelection === "Paper" && playerSelection === "Rock") ||
    (computerSelection === "Scissors" && playerSelection === "Paper")
  ) {
    return "Computer wins";
  } else return "Player wins";
}
const computerData = computerPlay();
// const userData = prompt("Enter either Paper, rock or scissors");
console.log(gamePlay("paper", "rock"));
