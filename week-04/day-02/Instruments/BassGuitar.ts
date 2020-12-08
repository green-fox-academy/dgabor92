'use strict';

import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument {
  constructor(string: number = 4) {
    super();
    this._numberOfStrings = string;
    this._name = 'BassGuitar';
  }
  sound() {
    return 'Duum-duum-duum';
  }
}
