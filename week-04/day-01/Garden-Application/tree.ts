'use strict';

export default class Tree {
  private _color: string;
  private _waterAmount: number = 0;

  constructor(color: string) {
    this._color = color;
  }
  waterAmount(number: number) {
    if ((number = 10)) {
      return (this._waterAmount += 4);
    } else {
      return (this._waterAmount = number);
    }
  }
  needWater(): string {
    if (this._waterAmount < 10) {
      return `The ${this._color} Tree needs water`;
    } else {
      return `The ${this._color} Tree doesnt need water`;
    }
  }

  watering(liter: number) {
    console.log(`Watering with ${liter}`);
    this._waterAmount = liter;
  }
}
