'use strict';

export default class Car {
  _gasAmountCar: number;
  _capacity: number;

  constructor(gasAmount: number, capacity: number) {
    this._gasAmountCar = gasAmount = 0;
    this._capacity = capacity = 100;
  }
  getCapacity() {
    return this._capacity;
  }
}

let audi = new Car(10, 10);
console.log(audi);
