// Global Variables
var game;

// Query Selectors
var boxes = document.querySelector('.game-board-container');
var currentTurnDisplay = document.querySelector('#currentTurnDisplay');
var playerOneWinTotal = document.querySelector('#playerOneWinsDisplay');
var playerTwoWinTotal = document.querySelector('#playerTwoWinsDisplay');

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
  var chosenBox = Number(event.target.id)
  if(!game.win) {
    showPlayerLogoInBox(event.target);
    game.boxSelected(chosenBox);
  }
  showPlayerTurn();
  showWinTotal();
}

function showPlayerLogoInBox(boxSelected) {
  if(boxSelected.innerText === '') {
    boxSelected.innerText = game.playerTurn.logo
  }
}
