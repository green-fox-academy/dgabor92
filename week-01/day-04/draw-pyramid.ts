'use strict';

// let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

function pyramid() {
  let n = 4;
  let output = '';
  for (let i = 0; i < n; i++) {
    let myspace = '';
    for (let s = 0; s < n - i - 1; s++) {
      myspace += ' ';
    }
    for (let j = 1; j <= 2 * i + 1; j++) {
      output += '*';
    }
    console.log(myspace + output);
    output = '';
  }
}
pyramid();
