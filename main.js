// Global Variables
var game;

// Query Selectors
var boxes = document.querySelector('.game-board-container');
var gameBoardBoxes = document.querySelector('#boxes')
var currentTurnDisplay = document.querySelector('#currentTurnDisplay')


// Event Listeners
window.addEventListener('load', onPageLoad)
boxes.addEventListener('click', playerSelectsBox);



// Functions
function onPageLoad() {
  showPlayerTurn();
  // displayWinTotal();
}

function showPlayerTurn() {
  game = new Game();
  if (game.playerTurn === game.player1) {
    console.log('hi')
    currentTurnDisplay.innerHTML += `<img src="assets/mario.jpeg" class"mario-image">`
  } else if (game.playerTurn === game.player2) {
    currentTurnDisplay.innerHTML += `<img src="assets/peach.png">`
  }
}



function playerSelectsBox(event) {
  // place x or o
  var selectBox = event.target;
  console.log(selectBox)
  displayGamePiece();
  // check for win
  // check for draw
  // if none of the above are met we need to switch turns
}

function displayGamePiece() {
  if (!gameBoardBoxes.innerHTML) {
    gameBoardBoxes.innerHTML =
      `<h1>X</h1>`
    changeTurns = false;
  }
}
