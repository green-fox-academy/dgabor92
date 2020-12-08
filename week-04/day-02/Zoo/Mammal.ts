'use strict';

import Animal from './Animal';

export default class Mammal extends Animal {
  constructor(name: string) {
    super();
    this._name = name;
    this._breed = 'pushing miniature versions out';
  }
}
