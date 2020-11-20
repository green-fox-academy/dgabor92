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

function square() {
  let r = '';

  //Go about 6x6=36 counts
  // for (let i = 1; i <= lineCount * lineCount; i++) {
  //   if (i % lineCount === 0) {
  //     //Insert line break every 6 counts
  //     r += '\n';
  //   } else r += '%';
  // }
  for (let sor = 0; sor < lineCount; sor++) {
    if (sor === 0 || sor === lineCount - 1) {
      // vagy a legfelső vagy a legalsó sor
      for (
        let oszlop = 0;
        oszlop < lineCount;
        oszlop++ // egy sorban lévő karaktereket írom
      ) {
        r += '%';
      }
    } else {
      r += '%';
      for (let space = 0; space <= lineCount - 3; space++) {
        r += ' ';
      }
      r += '%';
    }

    r += '\n';
  }

  console.log(r);
}

square();
