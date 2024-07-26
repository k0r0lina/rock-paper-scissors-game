// Messages functions
function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}

// Computer's Move
let computerMove = "";
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log("Computer's number: " + randomNumber);
if (randomNumber == "1") {
  computerMove = "rock";
} else if (randomNumber == "2") {
  computerMove = "paper";
} else if (randomNumber == "3") {
  computerMove = "scissors";
}
printMessage("My move: " + computerMove);

// Player's Move
let playerMove = "";
let playerInput = prompt("Choose your move! 1: rock, 2: paper, 3: scissors.");
console.log("Player's move: " + playerInput);
if (playerInput == "1") {
  playerMove = "rock";
} else if (playerInput == "2") {
  playerMove = "paper";
} else if (playerInput == "3") {
  playerMove = "scissors";
} else {
  alert("Please choose number between 1 and 3.");
}
printMessage("Your move: " + playerMove);
