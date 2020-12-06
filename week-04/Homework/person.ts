'use strict';

class Person {
  private _name: string;
  private _age: number;
  private _gender: string;

  constructor(name: string, age: number, gender: string) {
    this._name = name;
    this._age = age;
    this._gender = gender = 'male' || 'female';
  }

  introduce() {
    return `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}`;
  }
  getGoal() {
    console.log(`My goal is: Live for the moment!`);
  }
}
