'use strict';

export default abstract class Animal {
  protected _name: string;
  protected _age: number;
  protected _gender: string;
  protected _legsNumber: number;
  protected _breed: string;

  getLegsNumber() {
    return this._legsNumber;
  }

  getName() {
    return this._name;
  }

  breed() {
    return this._breed;
  }
}
