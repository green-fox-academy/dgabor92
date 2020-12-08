'use strict';

import Aircraft from './aircraft';

export default class Carrier {
  private _airCraftList: Aircraft[] = [];
  private _storeOfAmmo: number;
  private _healthPoint: number;

  constructor(storeOfAmmo: number, healthPoint: number) {
    this._storeOfAmmo = storeOfAmmo;
    this._healthPoint = healthPoint;
  }
  set healthPoint(newHealth: number) {
    if (newHealth < 0) {
      newHealth = 0;
    }
    this._healthPoint = newHealth;
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
  fight(enemy: Carrier) {
    let allDmg = 0;
    for (let b: number = 0; b < this._airCraftList.length; b++) {
      let bigDmg =
        this._airCraftList[b].currentAmmo * this._airCraftList[b].baseDamage;
      this._airCraftList[b].currentAmmo = 0;
      allDmg += bigDmg;
    }
    enemy._healthPoint = enemy._healthPoint - allDmg;
  }
  getStatus() {
    if (this.healthPoint === 0) {
      return `It's dead Jim :(`;
    }
    let totalDamage = 0;
    for (let airCraft of this._airCraftList) {
      totalDamage += airCraft.currentAmmo * airCraft.baseDamage;
    }
    let ret = `HP: ${this._healthPoint}, Aircraft count: ${this._airCraftList.length}, Ammo Storage: ${this._storeOfAmmo}, Total damage: ${totalDamage}\n`;
    ret += 'AirCrafts: \n';
    for (let r: number = 0; r < this._airCraftList.length; r++) {
      ret += this._airCraftList[r].getStatus() + '\n';
    }
    return ret;
  }
}
