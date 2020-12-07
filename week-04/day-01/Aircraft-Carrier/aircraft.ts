'use strict';

export default class Aircraft {
  private _maxAmmo: number;
  private _baseDamage: number;

  constructor(maxAmmo: number, baseDamage: number) {
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
  }
  fight() {
    this._baseDamage = this._baseDamage * this._maxAmmo;
    this._maxAmmo = 0;
  }
  refill(num: number) {
    if (num >= 8) {
      F16._maxAmmo = 8;
    } else {
      console.log(`Remaining ammo: ${F16._maxAmmo - num}`);
    }
    if (num >= 12) {
      F35._maxAmmo = 12;
    } else {
      console.log(`Remaining ammo: ${F35._maxAmmo - num}`);
    }
  }
  getType() {
    return typeof Aircraft;
  }
  getStatus() {
    console.log(
      `Type: ${Aircraft.arguments} Ammo:${this._maxAmmo}, Base Damage: ${
        this._baseDamage
      }, All Damage:${this._baseDamage * this._maxAmmo}`
    );
  }
}

let F16 = new Aircraft(8, 30);
let F35 = new Aircraft(12, 50);
console.log(F16);
console.log(F35);

F16.fight();
console.log(F16);
F35.fight();
console.log(F35);

F16.refill(20);
F35.refill(50);
console.log(F16);
console.log(F35);

F16.getStatus();
