// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

'use strict';

const fs = require('fs');

function manipulateFile() {
  try {
    let fileContent = 'Deutsch Gábor';
    fs.writeFileSync('my-file2.txt', fileContent);
    let fileRead = fs.readFileSync('my-file2.txt', 'utf-8');
    return fileRead;
  } catch (err) {
    return 'Unable to write file: my-file2.txt';
  }
}
console.log(manipulateFile());
