'use strict';

import Car from './car';

export default class Station {
  _gasAmountStation: number = 1000;

  getGasAmount() {
    return this._gasAmountStation;
  }
  refill(arr: Car) {}
}

let shell = new Station();

console.log(shell);
