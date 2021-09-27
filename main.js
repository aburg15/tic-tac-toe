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
  if (!game.win) {
    if (game.playerTurn === game.player1) {
      currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/mario.png" class="mario-image">`
    } else if (game.playerTurn === game.player2) {
      currentTurnDisplay.innerHTML += `PLAYER TURN:<img src="assets/DK.png" class="DK-image">`
    }
  } else if (game.playerTurn.id === game.player1.id) {
    currentTurnDisplay.innerHTML += `<img src="assets/DK.png" class="DK-image"> WINS!`
  } else {
    currentTurnDisplay.innerHTML += `<img src="assets/mario.png" class="mario-image"> WINS!`
  }
}

function showWinTotal() {
  playerOneWinTotal.innerHTML = `WINS: ${game.player1.wins}`;
  playerTwoWinTotal.innerHTML = `WINS: ${game.player2.wins}`;
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

function saveToLocalStorage() {

}
