import Ship from './ship';

class BattleApp {
  ship1: Ship;
  ship2: Ship;

  constructor() {
    this.ship1 = new Ship();
    this.ship2 = new Ship();
    this.ship1.fillShip();
    this.ship2.fillShip();
  }

  battle() {
    this.ship1.commandLog();
    this.ship2.commandLog();
    this.ship1.battle(this.ship2);
    this.ship1.commandLog();
    this.ship2.commandLog();
  }
}
