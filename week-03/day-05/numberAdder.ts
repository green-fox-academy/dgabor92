// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

'use strict';

function adderNumber(n: number): number {
  if (n < 1) {
    return 0;
  } else {
    return n + adderNumber(n - 1);
  }
}
console.log(adderNumber(10));
