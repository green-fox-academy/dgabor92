'use strict';

import StringedInstrument from './StringedInstrument';

export default class Violin extends StringedInstrument {
  constructor(string: number = 4) {
    super();
    this._numberOfStrings = string;
    this._name = 'Violin';
  }
  sound() {
    return 'Screech';
  }
}
