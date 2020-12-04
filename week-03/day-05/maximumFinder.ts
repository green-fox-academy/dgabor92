// Write a function that finds the largest element of an array using recursion.

'use strict';

let largest: number;

function findTheMaximumValueOfArray(arr: number[], i: number): number {
  // console.log(i);
  if (!largest) {
    largest = arr[0];
  }
  if (i < arr.length) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    findTheMaximumValueOfArray(arr, i + 1);
  }
  return largest;
}
console.log(findTheMaximumValueOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
