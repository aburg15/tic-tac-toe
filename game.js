class Game {
  constructor() {
    this.player1 = new Player('MARIO', '🍄');
    this.player2 = new Player('DONKEY KONG', '🍌');
    this.playerTurn = this.player1;
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.tie = false;
    this.win = false;
    this.turnCount = 0;
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
    if (this.player1.logo !== this.board[chosenBox] &&
      this.player2.logo !== this.board[chosenBox]) {
      this.addPlayerLogo(chosenBox, this.playerTurn);
      if (!this.win) {
        this.changePlayerTurn();
      }
    }
  }

  addPlayerLogo(chosenBox, playerTurn) {
    for (var i = 0; i < this.board.length; i++) {
      if (this.board[i] === chosenBox) {
        this.board.splice(i, 1, this.playerTurn.logo);
        this.turnCount += 1;
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
        this.playerTurn.saveWinsToStorage();
        this.playerTurn.retrieveWinsFromStorage();
      }
    }
    this.checkForTie();
  }

  checkForTie() {
    if (this.turnCount === 9) {
      console.log('hi')
      this.tie = true;
    }
  }

  newGame() {
    this.playerTurn = this.player1;
    this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.tie = false;
    this.win = false;
    this.turnCount = 0;
    game.player1.boxesSelected = [];
    game.player2.boxesSelected = [];
  }


}
