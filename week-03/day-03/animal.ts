// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

'use strict';

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor(hunger: number, thirst: number) {
    this._hunger = hunger;
    this._thirst = thirst;

    this._hunger = 50;
    this._thirst = 50;
  }

  eat() {
    return this._hunger--;
  }
  drink() {
    return this._thirst--;
  }
  play() {
    return this._hunger++ && this._thirst++;
  }
}

let macska = new Animal(0, 0);
console.log(macska);

macska.eat();
console.log(macska);

macska.play();
console.log(macska);
