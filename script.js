// Counters
let playerWins = 0;
let computerWins = 0;

// Buttons
const buttons = {
  rock: document.getElementById("button-rock"),
  paper: document.getElementById("button-paper"),
  scissors: document.getElementById("button-scissors"),
};

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + " was pressed");

  const getMoveName = (moveId) => ["rock", "paper", "scissors"][moveId - 1];

  const playerMove = buttonName;
  const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));

  document.getElementById("player-move").innerText = playerMove;
  document.getElementById("computer-move").innerText = computerMove;

  const displayResults = (playerMove, computerMove) => {
    if (playerMove === computerMove) {
      printMessage("Draw!");
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      playerWins++;
    } else {
      computerWins++;
    }
    updateResult();
    if (playerWins === 3 || computerWins === 3) {
      gameOver();
    }
  };

  displayResults(playerMove, computerMove);
}

Object.keys(buttons).forEach((key) => {
  buttons[key].addEventListener("click", () => buttonClicked(key));
});

// Messages functions
function printMessage(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

function updateResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = playerWins + " - " + computerWins;
}

// Reset counter
function gameOver() {
  let message = playerWins === 3 ? "You won!" : "Computer won!";
  printMessage(message);

  setTimeout(() => {
    playerWins = 0;
    computerWins = 0;
    updateResult();
    clearMessages();
    document.getElementById("player-move").innerText = "";
    document.getElementById("computer-move").innerText = "";
  }, 4000);
}
