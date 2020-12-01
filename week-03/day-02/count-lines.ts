//Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

// const fs = require('fs');
import * as fs from 'fs';

function linesNumber(fileName: string): number {
  try {
    let fileLines = fs.readFileSync(fileName, 'utf-8').split('\n');
    return fileLines.length;
  } catch (err) {
    return 0;
  }
}

console.log(linesNumber('szoveg.txt'));
