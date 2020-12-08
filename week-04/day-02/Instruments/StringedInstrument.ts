'use strict';

import Instrument from './Instrument';

export default abstract class SringedInstrument extends Instrument {
  protected _numberOfStrings: number;

  sound() {}
  //Electric Guitar, a 6-stringed instrument that goes Twang
  play() {
    console.log(
      this._name +
        ', a ' +
        this._numberOfStrings +
        '-stringed instrument that goes ' +
        this.sound()
    );
    // console.log(this.sound());
  }
}
