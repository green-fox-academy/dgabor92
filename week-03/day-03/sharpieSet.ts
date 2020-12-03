// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

'use strict';

import { Sharpie } from './sharpie';

class SharpieSet {
  private _sharpie1: Sharpie[];

  countUsable() {
    let useable = 0;
    for (let i: number = 0; i < this._sharpie1.length; i++) {
      if (this._sharpie1[i].inkAmount === 0) {
        return "couldn't useable";
      } else {
        return useable++;
      }
    }
  }
}
