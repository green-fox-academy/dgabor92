'use strict';

import Animal from './Animal';

export default abstract class Egglayer extends Animal {
  constructor() {
    super();
    this._breed = 'laying eggs';
  }
}
