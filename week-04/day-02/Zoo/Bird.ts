'use strict';

import Flyable from '../Flyable/Flyable';
import Egglayer from './Egglayer';

export default class Bird extends Egglayer implements Flyable {
  constructor(name: string) {
    super();
    this._name = name;
  }
  fly(): string {
    return 'repül';
  }
  land(): string {
    return 'leszáll';
  }
  takeOff(): string {
    return 'elrepül';
  }
}
