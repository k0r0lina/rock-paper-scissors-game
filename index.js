let computerMove = "rock";
let playerMove = "paper";
printMessage(
  "I played " + computerMove + "! If you played " + playerMove + ", you win!"
);

// Messages functions
function printMessage(msg) {
  var div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
