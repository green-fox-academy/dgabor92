'use strict';

import StringedInstrument from './StringedInstrument';

export default class ElectricGuitar extends StringedInstrument {
  constructor(string: number = 6) {
    super();
    this._numberOfStrings = string;
    this._name = 'ElectricGuitar';
  }
  sound() {
    return 'Twang';
  }
}
