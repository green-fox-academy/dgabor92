import Pirate from './pirate';

export default class Ship {
  private _crew: Pirate[] = [];
  private _captain: Pirate;

  constructor() {}
  // feltöltjük a hajót kapitánnyal és legénységgel
  fillShip() {
    this._captain = new Pirate('Jago');
    let pirateCount: number = Math.floor(Math.random() * 10) + 1;

    for (let i: number = 0; i < pirateCount; i++) {
      this._crew.push(new Pirate());
    }
  }
  // megkapjuk mennyit ivott a kapitány és hány ember van a hajón
  commandLog() {
    console.log(
      'Captain: ' + this._captain.getDrinkCount(),
      this._captain.getState()
    );
    let aliveMember = 0;
    for (let i: number = 0; i < this._crew.length; i++) {
      if (this._crew[i].isAlive() === true) {
        aliveMember++;
      }
    }
    console.log(aliveMember);
  }
  // megkapjuk a legénységet
  getCrew() {
    return this._crew;
  }
  // megkapjuk a kapitányt
  getCaptain() {
    return this._captain;
  }
  // kiszámoljuk a hajó pontszámát
  calculateScore() {
    let member = 0;
    for (let i: number = 0; i < this._crew.length; i++) {
      if (this._crew[i].isAlive()) {
        member++;
      }
    }
    let captainRum = this._captain.getDrinkCount();

    return member - captainRum;
  }
  // hajók harca egymással
  battle(otherShip: Ship): boolean {
    for (let i: number = 0; i < this._crew.length; i++) {
      if (otherShip.getCrew()[i]) {
        this._crew[i].brawl(otherShip.getCrew()[i]);
      }
    }
    if (this.calculateScore() > otherShip.calculateScore()) {
      let rum = Math.floor(Math.random() * 10);
      while (rum) {
        this._captain.drinkSomeRum();
        let index = Math.floor(Math.random() * this._crew.length);
        let pirate = this._crew[index];
        if (pirate.isAlive() === true && pirate.isPassOut() === false) {
          pirate.drinkSomeRum();
        }
        rum--;
      }
      return true;
    }
  }
}

// let feketeGyöngy = new Ship();
// feketeGyöngy.fillShip();
// let bolygóHollandi = new Ship();
// bolygóHollandi.fillShip();
// feketeGyöngy.commandLog();
// bolygóHollandi.commandLog();
// feketeGyöngy.battle(bolygóHollandi);
// feketeGyöngy.commandLog();
// bolygóHollandi.commandLog();
