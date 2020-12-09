'use strict';

let text1: string = 'mode';
let text2: string = 'demo';

export default function anagram(text1: string, text2: string): boolean {
  if (text1.length !== text2.length) {
    return false;
  }
  if (text1 === text2) {
    return false;
  }
  let charString1 = text1.split('').sort().join('');
  let charString2 = text2.split('').sort().join('');

  return charString1 === charString2;
}

console.log(anagram(text1, text2));
