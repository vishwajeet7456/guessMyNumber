"use strict";

var checkButton = document.querySelector(".check");
var againButton = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
var highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function clickHandler() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("🙁 No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");

      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}

function againClickHandler() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textcontent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}

checkButton.addEventListener("click", clickHandler);
againButton.addEventListener("click", againClickHandler);
