import Ship from './ship';

export default class Armada {
  private _ships: Ship[] = [];

  constructor() {
    let randomNumber = Math.floor(Math.random() * 10);
    for (let i: number = 0; i < randomNumber; i++) {
      let ship = new Ship();
      ship.fillShip();
      this._ships[i] = ship;
    }
  }

  getShips() {
    return this._ships;
  }
  war(enemy: Armada) {
    let enemyships = enemy.getShips();
    let index = 0;
    let enemyIndex = 0;
    while (true) {
      if (this._ships[index] === undefined) {
        return false;
      }
      if (enemyships[enemyIndex] === undefined) {
        return true;
      }
      if (this._ships[index].battle(enemyships[enemyIndex])) {
        enemyIndex++;
      } else {
        index++;
      }
    }
  }
}
