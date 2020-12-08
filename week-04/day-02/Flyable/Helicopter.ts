'use strict';

import Flyable from './Flyable';
import Vehicle from './Vehicle';

export default class Helicopter extends Vehicle implements Flyable {
  land(): string {
    return `Leszáltunk!!!`;
  }
  fly(): string {
    return `Repülünk!!! Yohooo`;
  }
  takeOff(): string {
    return `Zökkenőmentesen felszálltunk!!`;
  }
}
