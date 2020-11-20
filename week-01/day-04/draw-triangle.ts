'use strict';

// let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

function generatePyramid() {
  var totalNumberofRows = 4;
  var output = '';
  for (let i = 1; i <= totalNumberofRows; i++) {
    for (let j = 1; j <= i; j++) {
      output += j + '  ';
    }
    console.log(output);
    output = '';
  }
}

generatePyramid();
