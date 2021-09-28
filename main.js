var game;

var boxes = document.querySelector('#game-board-container');
var currentTurnDisplay = document.querySelector('#currentTurnDisplay');
var playerOneWinTotal = document.querySelector('#playerOneWinsDisplay');
var playerTwoWinTotal = document.querySelector('#playerTwoWinsDisplay');
var gameBoard = document.querySelectorAll('.box');

window.addEventListener('load', onPageLoad)
boxes.addEventListener('click', playerSelectsBox);

function onPageLoad() {
  // if (localStorage.length !== 0) {
    console.log('hi')
    game = new Game();
  // }
  showPlayerTurn();
  showWinTotal();
}

function showPlayerTurn() {
  currentTurnDisplay.innerHTML = ``;
  if (game.playerTurn === game.player1) {
    currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/mario.png" class="mario-image">`
  } else if (game.playerTurn === game.player2) {
    currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/DK.png" class="DK-image">`
  }
}

function determineGameOutcome() {
  if (game.win) {
    currentTurnDisplay.innerHTML = ``;
    currentTurnDisplay.innerHTML += `${game.playerTurn.id} WINS!`
    showWinTotal();
    setTimeout(resetGame, 2000);
  } else if (!game.win && game.tie) {
    currentTurnDisplay.innerHTML = `TIE GAME!`
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
  determineGameOutcome();
  showWinTotal();
}

function showPlayerLogoInBox(boxSelected) {
  if (boxSelected.innerText === '') {
    boxSelected.innerText = game.playerTurn.logo
  }
}

function resetGame() {
    for (var i = 0; i < 9; i++) {
      gameBoard[i].innerText = '';
    }
    game.newGame();
    showPlayerTurn();

}
