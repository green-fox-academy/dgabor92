'use strict';

export default class Pirate {
  private _drinkCount: number = 0;
  private _isAlive: boolean = true;
  private _parrot: string;
  private _passOut: boolean = false;
  constructor(parrot?: string) {
    if (parrot) {
      this._parrot = parrot;
    }
  }
  // rum ivás
  drinkSomeRum() {
    if (this._isAlive === false) {
      return 'he is dead';
    }
    return this._drinkCount++;
  }
  // ivás utáni mondatok
  howIsItGoingMate(): string {
    if (this._isAlive === false) {
      return 'he is dead';
    }
    if (this._drinkCount <= 4) {
      return 'Pour me anudder!';
    } else {
      return "Arghh, I'ma Pirate. How d'ya d'ink its goin?";
    }
  }
  // ha meghal akkor mi történjen
  die() {
    return (this._isAlive = false);
  }
  // amikor kiütik mi történjen
  passOut() {
    return (this._passOut = true);
  }
  // ha harcolnak akkor a harcok végkimenetele
  brawl(enemy: Pirate) {
    if (enemy._isAlive === true) {
      let fight: number = Math.floor(Math.random() * 3);
      if (fight === 0) {
        enemy.die();
      } else if (fight === 1) {
        this.die();
      } else if (fight === 2) {
        enemy.passOut();
        this.passOut();
      }
    }
  }
  getDrinkCount(): number {
    return this._drinkCount;
  }
  getState(): string {
    if (this._isAlive === false) {
      return 'dead';
    } else if (this._passOut === true) {
      return 'PassedOut';
    }
    return '';
  }
  isAlive() {
    return this._isAlive;
  }
  isPassOut() {
    return this._passOut;
  }
}

// let jackSparrow = new Pirate();
// let edwardKenway = new Pirate();

// jackSparrow.drinkSomeRum();
// jackSparrow.drinkSomeRum();

// edwardKenway.drinkSomeRum();
// edwardKenway.drinkSomeRum();
// edwardKenway.drinkSomeRum();
// edwardKenway.drinkSomeRum();
// edwardKenway.drinkSomeRum();

// jackSparrow.brawl(edwardKenway);

// console.log('Jack Sparrow: ' + jackSparrow.howIsItGoingMate());
// console.log('Edward Kenway: ' + edwardKenway.howIsItGoingMate());
