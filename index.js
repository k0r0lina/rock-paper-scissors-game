// Messages functions
function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

let moveId, playerMove, computerMove, randomNumber, playerInput;

// Move function
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
playerInput = prompt("Choose your move! Pick a number between 1 - 3.");
playerMove = getMoveName(playerInput);
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
  } else if (playerMove === computerMove) {
    printMessage("Draw!");
  } else {
    printMessage("You lose!");
  }
}
console.log(playerMove + " - " + computerMove);
displayResults(playerMove, computerMove);
