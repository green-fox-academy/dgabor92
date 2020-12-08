'use strict';

import Egglayer from './Egglayer';

export default class Reptile extends Egglayer {
  constructor(name: string) {
    super();
    this._name = name;
  }
}
