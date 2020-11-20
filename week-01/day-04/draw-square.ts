'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

function rectangle() {
  let r = '';

  //Go about 10x6=60 counts
  for (let i = 1; i <= 60; i++) {
    if (i % 10 === 0)
      //Insert line break every 10 counts
      r += '\n';
    else r += '%';
  }

  console.log(r);
}

rectangle();
