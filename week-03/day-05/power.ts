// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

'use strict';

function powerCount(firstNumber: number, secondNumber: number): number {
  return firstNumber ** secondNumber;
}

console.log(powerCount(4, 2));
