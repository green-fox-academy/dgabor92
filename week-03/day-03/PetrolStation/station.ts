'use strict';

import Car from './car';

export default class Station {
  private _gasAmountStation: number = 1000;

  getGasAmount() {
    return this._gasAmountStation;
  }
  refill(arr: Car) {
    return (this._gasAmountStation -= 100);
  }
}

let shell = new Station();
let audi = new Car(10, 10);

audi.getFilled();
console.log('Gas Station actual: ' + shell.refill(audi));
console.log(audi);
