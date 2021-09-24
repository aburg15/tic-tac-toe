class Game {
  constructor() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.playerTurn = this.player1;
    this.gameResult;
    this.resetGame;
    this.winningCombo =
    [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]];
  }
}
