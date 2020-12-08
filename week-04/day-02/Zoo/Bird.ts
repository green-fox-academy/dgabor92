'use strict';

import Egglayer from './Egglayer';

export default class Bird extends Egglayer {
  constructor(name: string) {
    super();
    this._name = name;
  }
}
