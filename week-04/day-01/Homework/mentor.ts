'use strict';

class Mentor {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _level: string;

  constructor() {
    this._name = 'Jane Doe';
    this._age = 30;
    this._gender = 'female';
    this._level = 'intermediate';
  }

  introduce() {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor`;
  }
  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers`);
  }
}
