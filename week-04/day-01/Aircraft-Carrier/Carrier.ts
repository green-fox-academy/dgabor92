'use strict';

import Aircraft from './aircraft';

export default class Carrier {
  private _airCraftList: Aircraft[];
  private _storeOfAmmo: number;
  private _healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this._storeOfAmmo = storeOfAmmo;
    this._healthPoint = healthPoint;
  }

  add(plane: Aircraft): void {
    this._airCraftList.push(plane);
  }
  fill() {
    //visszadob egy Error-t ha nincs elegendő ammo az anyahajón
    if (this._storeOfAmmo === 0) {
      throw new Error('Nincs lőszer a hajón!!!');
    }
    //megnézi mennyi lőszer kell a repülőknek
    let planeAmmoNeed = 0;
    for (let j: number = 0; j < this._airCraftList.length; j++) {
      planeAmmoNeed += this._airCraftList[j].EnoughAmmo();
    }
    // ha az anyahajón van elegendő lőszer akkor feltölti a repülőket
    if (planeAmmoNeed < this._storeOfAmmo) {
      for (let i: number = 0; i < this._airCraftList.length; i++) {
        let remainingAmmo = this._airCraftList[i].refill(this._storeOfAmmo);
        this._storeOfAmmo = remainingAmmo;
      }
    } else {
      // ha nincs elegendő lőszer akkor prioritásként feltölti az F35-ket
      for (let t: number = 0; t < this._airCraftList.length; t++) {
        if (this._airCraftList[t].isPriority()) {
          let remainingAmmo = this._airCraftList[t].refill(this._storeOfAmmo);
          this._storeOfAmmo = remainingAmmo;
        }
      }
      // prioritásként feltölti a többit
      for (let airCraft of this._airCraftList) {
        if (airCraft.isPriority() === false) {
          let remainingAmmo = airCraft.refill(this._storeOfAmmo);
          this._storeOfAmmo = remainingAmmo;
        }
      }
    }
  }
}
