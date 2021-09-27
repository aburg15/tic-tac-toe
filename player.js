class Player {
  constructor(id, logo) {
    this.id = id;
    this.logo = logo;
    this.boxesSelected = [];
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(`${this.id}`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`${this.id}`);
    var parsedWins = JSON.parse(retrievedWins) || 0;
    return parsedWins;
  }
}
