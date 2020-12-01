// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

'use strict';

import fs from 'fs';

let fileContent = 'Hello ez egy másolt sor';
let message = fs.writeFileSync('message.txt', fileContent);

function copyContent(fileName: string, dest: string): boolean {
  try {
    fs.copyFileSync(fileName, dest);
    console.log(dest);
    return true;
  } catch (err) {
    return false;
  }
}

console.log(copyContent('message.txt', 'destination.txt'));
