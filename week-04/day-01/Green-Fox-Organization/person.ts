'use strict';

export default class Person {
  protected _name: string;
  protected _age: number;
  protected _gender: string;

  // person constructor-a
  constructor(
    name: string = 'Jane Doe',
    age: number = 30,
    gender: string = 'female'
  ) {
    this._name = name;
    this._age = age;
    this._gender = gender;
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
