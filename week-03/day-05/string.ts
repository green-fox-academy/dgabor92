// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

'use strict';

function stringLowercase(arr: string): string {
  return arr.replace(/x/gi, 'y');
}
console.log(stringLowercase('XREWEWEWEFAFSXXxxxZZZXXX'));
