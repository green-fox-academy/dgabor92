'use strict';
import Person from './person';
export default class Sponsor extends Person {
  private _company: string;
  private _hiredStudents: number;

  constructor(
    name?: string,
    age?: number,
    gender?: string,
    company?: string,
    hiredStudents?: number
  ) {
    super(name, age, gender);
    this._company = company = 'Google';
    this._hiredStudents = hiredStudents = 0;
  }
  introduce(): string {
    return `Hi, I'm ${this._name}, a ${this._age} years old ${this._gender} who represent ${this._company} and hired ${this._hiredStudents} students so far`;
  }
  getGoal(): string {
    return `My goal is: Hire brilliant junior software developers`;
  }
  hire() {
    return this._hiredStudents++;
  }
}
