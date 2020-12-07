'use strict';

import Flower from './flower';
import Tree from './tree';

export default class Garden {
  private _folwers: Flower[];
  private _trees: Tree[];

  constructor() {
    this._folwers = [];
    this._trees = [];
  }
  watering(liter: number) {
    console.log(`Watering with ${liter}`);
  }
}
let park = new Garden();
let yellow = new Flower('yellow');
let blue = new Flower('blue');
let purple = new Tree('purple');
let orange = new Tree('orange');

console.log(yellow.needWater());
console.log(blue.needWater());
console.log(purple.needWater());
console.log(orange.needWater());
park.watering(40);
yellow.waterAmount(40);
blue.waterAmount(40);
purple.waterAmount(40);
orange.waterAmount(40);
console.log(yellow.needWater());
console.log(blue.needWater());
console.log(purple.needWater());
console.log(orange.needWater());

park.watering(70);
yellow.waterAmount(70);
blue.waterAmount(70);
purple.waterAmount(70);
orange.waterAmount(70);

console.log(yellow.needWater());
console.log(blue.needWater());
console.log(purple.needWater());
console.log(orange.needWater());
