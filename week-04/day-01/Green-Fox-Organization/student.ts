'use strict';

import Person from './person';
export default class Student extends Person {
  private _previousOrganization: string;
  private _skippedDay: number;

  constructor(
    name?: string,
    age?: number,
    gender?: string,
    previousOrganization?: string
  ) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization = 'The School of Life';
    this._skippedDay = 0;
  }
  getGoal(): string {
    return `My goal is: Be a junior software developer`;
  }
  introduce(): string {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDay} days from the course already.`;
  }
  skipDays(numberOfDays: number) {
    this._skippedDay += numberOfDays;
  }
}
