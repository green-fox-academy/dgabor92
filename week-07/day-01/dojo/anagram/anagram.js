'use strict';

// Create a function that takes two strings, and returns a boolean that should be True if the strings are anagrams and False otherwise.

export default function anagram(string1, string2) {
  let charString1 = string1.split('').sort().join('');
  let charString2 = string2.split('').sort().join('');

  let arr = [1, 2, 3, 4];

  let a = arr.includes(2);
  console.log(a);
  if (charString1 === charString2) {
    return true;
  } else if (string1 === '') {
    return false;
  } else if (string2 === '') {
    return false;
  } else {
    return false;
  }
}

// module.exports = anagram;
