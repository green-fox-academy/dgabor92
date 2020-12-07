'use strict';

class Sponsor {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _company: string;
  private _hiredStudents: number = 0;

  constructor() {
    this._name = 'Jane Doe';
    this._age = 30;
    this._gender = 'female';
    this._company = 'Google';
  }

  introduce() {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represent ${this._company} and hired ${this._hiredStudents} student so far`;
  }
  getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
  hire() {
    return this._hiredStudents++;
  }
}
