// Global Variables


// Query Selectors
var boxes = document.querySelector('.game-board-container');
var gameBoardBoxes = document.querySelector('#boxes')



// Event Listeners
window.addEventListener('load', onPageLoad)
boxes.addEventListener('click', playerSelectsBox);



// Functions
function onPageLoad() {
  showPlayerTurn();
  displayWinCount();
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
