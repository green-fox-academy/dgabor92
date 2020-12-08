'use strict';

export default class Aircraft {
  private _maxAmmo: number;
  private _baseDamage: number;
  private _currentAmmo: number;
  private _type: string;

  constructor(maxAmmo: number, baseDamage: number, type: string) {
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
    this._type = type;
    this._currentAmmo = 0;
  }

  fight() {
    let dmg = this._baseDamage * this._currentAmmo;
    this._currentAmmo = 0;
    return dmg;
  }
  refill(ammoCount: number) {
    if (ammoCount >= this._maxAmmo) {
      this._currentAmmo = this._maxAmmo;
      return ammoCount - this._currentAmmo;
    } else {
      this._currentAmmo += ammoCount;
      return 0;
    }
  }
  EnoughAmmo() {
    return this._maxAmmo - this._currentAmmo;
  }

  getType() {
    return this._type;
  }
  getStatus() {
    console.log(
      `Type:${this._type}  Ammo:${this._currentAmmo}, Base Damage: ${
        this._baseDamage
      }, All Damage:${this._baseDamage * this._currentAmmo}`
    );
  }
  isPriority() {
    if (this._type === 'F35') {
      return true;
    } else {
      return false;
    }
  }
}
