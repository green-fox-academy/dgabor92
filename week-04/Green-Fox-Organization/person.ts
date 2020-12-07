'use strict';

export default class Person {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  // person constructor-a
  constructor(name?: string, age?: number, gender?: string) {
    this._name = name = 'Jane Doe';
    this._age = age = 30;
    this._gender = gender = 'female';
  }
  // person introduce-a
  introduce(): string {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}`;
  }
  // person getGoal-ja
  getGoal(): string {
    return `My goal is: Live for the moment!`;
  }
}
