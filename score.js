// Iteration 5: Store the player score and display it on the game over screen
const retryButton = document.getElementById("play-again-button");
const scoreDisplay = document.getElementById("score-board");

if (retryButton)
  retryButton.onclick = function () {
    window.location.href = "./index.html";
  };
if (scoreDisplay) scoreDisplay.innerText = localStorage.getItem("score");

