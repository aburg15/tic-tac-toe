// Global Variables
var game;

// Query Selectors
var boxes = document.querySelector('.game-board-container');
var currentTurnDisplay = document.querySelector('#currentTurnDisplay');
var playerOneWinTotal = document.querySelector('#playerOneWinsDisplay');
var playerTwoWinTotal = document.querySelector('#playerTwoWinsDisplay');
var gameBoard = document.querySelectorAll('.box');

// Event Listeners
window.addEventListener('load', onPageLoad)
boxes.addEventListener('click', playerSelectsBox);



// Functions
function onPageLoad() {
  var player1 = new Player('player1', '🍄');
  var player2 = new Player('player2', '🍌');
  game = new Game(player1, player2);
  showPlayerTurn();
  showWinTotal();
}

function showPlayerTurn() {
  currentTurnDisplay.innerHTML = ``;
  if (!game.win) {
    if (game.playerTurn === game.player1) {
      currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/mario.png" class="mario-image">`
    } else if (game.playerTurn === game.player2) {
      currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/DK.png" class="DK-image">`
    }
  } else if (game.playerTurn.id === game.player1.id) {
    currentTurnDisplay.innerHTML += `<img src="assets/DK.png" class="DK-image"> WINS!`
    setTimeout(resetGame, 2000);
  } else if (game.playerTurn.id === game.player2.id) {
    currentTurnDisplay.innerHTML += `<img src="assets/mario.png" class="mario-image"> WINS!`
    setTimeout(resetGame, 2000);
  }
}

function showWinTotal() {
  playerOneWinTotal.innerHTML = `WINS: ${game.player1.retrieveWinsFromStorage()}`;
  playerTwoWinTotal.innerHTML = `WINS: ${game.player2.retrieveWinsFromStorage()}`;
}

function playerSelectsBox() {
  var chosenBox = Number(event.target.id)
  if (!game.win) {
    showPlayerLogoInBox(event.target);
    game.boxSelected(chosenBox);
  }
  showPlayerTurn();
  showWinTotal();
}

function showPlayerLogoInBox(boxSelected) {
  if (boxSelected.innerText === '') {
    boxSelected.innerText = game.playerTurn.logo
  }
}

function resetGame() {
  game.win = false;
  for (var i = 0; i < 8; i++) {
    gameBoard[i].innerText = '';
  }
  game.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  game.player1.boxesSelected = [];
  game.player2.boxesSelected = [];
  game.playerTurn = game.player1;
  showPlayerTurn();
}
