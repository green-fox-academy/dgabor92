'use strict';

import Aircraft from './aircraft';
import Carrier from './Carrier';

let a = new Aircraft(8, 30, 'F16');
let b = new Aircraft(8, 30, 'F16');
let c = new Aircraft(12, 50, 'F35');
let d = new Aircraft(12, 50, 'F35');
let e = new Aircraft(12, 50, 'F35');

let péntek = new Carrier(2300, 5000);
péntek.add(a);
péntek.add(b);
péntek.add(c);
péntek.add(d);
péntek.add(e);
péntek.fill();
console.log(péntek.getStatus());
