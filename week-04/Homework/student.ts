'use strict';

class Student {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _previousOrganization: string;
  private _skippedDay: number;

  constructor() {
    this._name = 'Jane Doe';
    this._age = 30;
    this._gender = 'female';
    this._previousOrganization = 'The School of Life';
    this._skippedDay = 0;
  }

  introduce() {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from  ${this._previousOrganization} who skipped ${this._skippedDay} days from the course already.`;
  }
  getGoal() {
    console.log(`My goal is: Be a junior software developer.`);
  }
  skippedDay(arr: number) {
    this._skippedDay = arr;
  }
}
