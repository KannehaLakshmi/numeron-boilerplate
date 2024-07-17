// Iteration 2: Generate 2 random number and display it on the screen
const firstNumElem = document.getElementById("number1");
const secondNumElem = document.getElementById("number2");

const countdownElem = document.getElementById("timer");

let firstNumber;
let secondNumber;
let playerScore = 0;
let countdownIntervalId;
let countdownTime;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

showRandomNumbers();

// Iteration 3: Make the options button functional
const buttonContainer = document.getElementById("buttons");
buttonContainer.addEventListener("click", (event) => checkNumberComparison(event.target.id));

// Iteration 4: Build a timer for the game
function startCountdown() {
  countdownIntervalId = setInterval(() => {
    countdownTime--;
    countdownElem.innerText = countdownTime;
    if (countdownTime === 0) endGame();
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownIntervalId);
  countdownTime = 5;
  countdownElem.innerText = countdownTime;
}

function endGame() {
  stopCountdown();
  window.location.href = "./gameover.html";
  localStorage.setItem("score", playerScore);
}

function showRandomNumbers() {
  stopCountdown();
  firstNumber = generateRandomNumber();
  secondNumber = generateRandomNumber();
  firstNumElem.innerText = firstNumber;
  secondNumElem.innerText = secondNumber;
  startCountdown();
}

function checkNumberComparison(operation) {
  if (
    (operation === "greater-than" && firstNumber > secondNumber) ||
    (operation === "lesser-than" && firstNumber < secondNumber) ||
    (operation === "equal-to" && firstNumber === secondNumber)
  ) {
    playerScore++;
    showRandomNumbers();
  } else {
    endGame();
  }
}
