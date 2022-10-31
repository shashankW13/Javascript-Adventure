let player = {
  name: "Shadow",
  chips: 500
};
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let newcard = 0;
let sum = 0;
let cards = [];
let startGameButton = document.querySelector(".start-game");
let msgEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("newCard").addEventListener("click", newCard);

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 11) {
    return 10;
  } else {
    return randomNumber;
  }
}

function renderGame() {
  sumEl.textContent = "Sum : " + sum;
  cardEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    msg = "";
    msg += "Do you want to draw a new card?";
  } else if (sum === 21) {
    msg = "";
    msg += "BlackJack";
    hasBlackJack = true;
  } else {
    msg = "";
    msg += "You are out!";
    isAlive = false;
  }

  msgEl.textContent = msg;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    newcard = getRandomCard();
    sum += newcard;
    cards.push(newcard);
    renderGame();
  }
}
