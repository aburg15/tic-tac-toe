// Global Variables
var game;

// Query Selectors
var boxes = document.querySelector('.game-board-container');
var gameBoardBoxes = document.querySelector('#boxes');
var currentTurnDisplay = document.querySelector('#currentTurnDisplay');
var playerOneWinTotal = document.querySelector('#playerOneWinsDisplay');
var playerTwoWinTotal = document.querySelector('#playerTwoWinsDisplay');

// Event Listeners
window.addEventListener('load', onPageLoad)
boxes.addEventListener('click', playerSelectsBox);



// Functions
function onPageLoad() {
  var player1 = new Player('player1', 'X');
  var player2 = new Player('player2', 'O');
  game = new Game(player1, player2);
  showPlayerTurn();
  showWinTotal();
}

function showPlayerTurn() {
  if (game.playerTurn === game.player1) {
    currentTurnDisplay.innerHTML += `<img src="assets/mario.png" class="mario-image"> MARIO'S TURN!`
  } else if (game.playerTurn === game.player2) {
    currentTurnDisplay.innerHTML += `<img src="assets/DK.png" class="DK-image"> DONKEY KONG'S TURN!`
  }
}

function showWinTotal() {
  playerOneWinTotal.innerHTML = game.player1.wins;
  playerTwoWinTotal.innerHTML = game.player2.wins;
}


function playerSelectsBox(event) {
  if(game.win === false) {
    showPlayerLogoInBox(event.target);
    game.boxSelected(event.target.id);
  }

}

function showPlayerLogoInBox(boxSelected) {
  if(boxSelected.innerText === '') {
    boxSelected.innerText = game.playerTurn.logo
  }
}
