// Buttons
let buttonName, buttonRock, buttonPaper, buttonScissors, buttonTest;
buttonRock = document.getElementById("button-rock");
buttonPaper = document.getElementById("button-paper");
buttonScissors = document.getElementById("button-scissors");

function buttonClicked(buttonName) {
  clearMessages();
  console.log(buttonName + " was pressed");

  // Move function
  let moveId, playerMove, computerMove, randomNumber, playerInput;

  function getMoveName(moveId) {
    if (moveId == 1) {
      return "rock";
    } else if (moveId == 2) {
      return "paper";
    } else if (moveId == 3) {
      return "scissors";
    } else {
      return "Please insert number between 1 - 3.";
    }
  }

  playerMove = buttonName;
  randomNumber = Math.floor(Math.random() * 3 + 1);
  computerMove = getMoveName(randomNumber);

  // Display results
  function displayResults(playerMove, computerMove) {
    if (playerMove == "rock" && computerMove == "scissors") {
      printMessage("You win!");
    } else if (playerMove == "paper" && computerMove == "rock") {
      printMessage("You win!");
    } else if (playerMove == "scissors" && computerMove == "paper") {
      printMessage("You win!");
    } else if (playerMove == computerMove) {
      printMessage("Draw!");
    } else {
      printMessage("You lose!");
    }
  }
  printMessage(playerMove + " - " + computerMove);
  displayResults(playerMove, computerMove);
}

buttonRock.addEventListener("click", function () {
  buttonClicked("rock");
});
buttonPaper.addEventListener("click", function () {
  buttonClicked("paper");
});
buttonScissors.addEventListener("click", function () {
  buttonClicked("scissors");
});

// Messages functions
function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
