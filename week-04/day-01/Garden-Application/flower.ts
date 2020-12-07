'use strict';

export default class Flower {
  private _color: string;
  private _waterAmount: number = 0;

  constructor(color: string) {
    this._color = color;
  }
  waterAmount(number: number) {
    return (this._waterAmount = number);
  }
  needWater(): string {
    if (this._waterAmount < 5) {
      return `The ${this._color} Flower needs water`;
    } else {
      return `The ${this._color} Flower doesnt need water`;
    }
  }
  watering(liter: number) {
    console.log(`Watering with ${liter}`);
    this._waterAmount = liter;
  }
}

// let orchid = new Flower('white');
// console.log(orchid.needWater());
// orchid.watering(50);
// console.log(orchid.needWater());
