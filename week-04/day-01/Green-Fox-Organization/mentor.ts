'use strict';
import Person from './person';
export default class Mentor extends Person {
  private _level: string;

  constructor(level: string, name?: string, age?: number, gender?: string) {
    super(name, age, gender);
    this._level = level = 'intermediate';
  }
  getGoal(): string {
    return `My goal is: Educate brilliant junior software developers.`;
  }
  introduce(): string {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor`;
  }
}
