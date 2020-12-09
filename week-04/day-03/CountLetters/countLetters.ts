'use strict';

export default function countLetters(text: string) {
  const countText = {};
  text.split('').forEach(function (s) {
    countText[s] ? countText[s]++ : (countText[s] = 1);
  });
  return countText;
}

console.log(countLetters('node-module'));
