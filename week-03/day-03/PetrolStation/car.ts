'use strict';

export default class Car {
  private _gasAmountCar: number;
  private _capacity: number;

  constructor(gasAmountCar: number, capacity: number) {
    this._gasAmountCar = gasAmountCar = 0;
    this._capacity = capacity = 100;
  }
  getCapacity() {
    return this._capacity;
  }
}
