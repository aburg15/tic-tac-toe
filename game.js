class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.playerTurn = this.player1;
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.win = false;
    this.turnNumber = 0;
    this.winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8]
    ];
  }

  boxSelected(chosenBox) {
    if (this.player1.logo && this.player2.logo !== this.board[chosenBox]) {
      this.addPlayerLogo(chosenBox, this.playerTurn);
      this.changePlayerTurn();
    }
  }

  addPlayerLogo(chosenBox, playerTurn) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] === chosenBox) {
        this.board.splice(i, 1, this.playerTurn.logo);
        this.turnNumber += 1;
        playerTurn.boxesSelected.push(chosenBox)
      }
    }
    this.checkForWin(playerTurn);
  }

  changePlayerTurn() {
    if (this.playerTurn === this.player1) {
      this.playerTurn = this.player2
    } else {
      this.playerTurn = this.player1
    }
  }

  checkForWin(playerTurn) {
    for (var i = 0; i < this.winningCombo.length; i++) {
      if ((playerTurn.boxesSelected.includes(this.winningCombo[i][0])) &&
        (playerTurn.boxesSelected.includes(this.winningCombo[i][1])) &&
        (playerTurn.boxesSelected.includes(this.winningCombo[i][2]))) {
        this.win = true;
        this.playerTurn.wins += 1;
        this.clearGameBoard();
      }
    }
  }

  clearGameBoard() {
    showPlayerTurn();
    setTimeout(function() {
      window.location.reload(true)
    }, 3000);
  }
}
