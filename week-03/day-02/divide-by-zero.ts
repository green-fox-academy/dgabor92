// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

'use strict';

function divideNumber(arr: number): number {
  try {
    if (arr === 0) {
      throw 'ERROR';
    } else {
      return arr / 10;
    }
  } catch (err) {
    console.log('Fail');
  }
}

console.log(divideNumber(100));
