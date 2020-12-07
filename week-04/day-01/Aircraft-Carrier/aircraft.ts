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
  refill(number: number) {}
}

let F16 = new Aircraft(8, 30);
let F35 = new Aircraft(12, 50);
console.log(F16);
console.log(F35);

F16.fight();
console.log(F16);
F35.fight();
console.log(F35);
