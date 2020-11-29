'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

// let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

// console.log(checkNums(listOfNumbers));

// export = checkNums;

const myArray: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
const elements: number[] = [4, 8, 12, 16];

function containsAll(arr: number[]) {
  return (
    arr.includes(elements[0]) &&
    arr.includes(elements[1]) &&
    arr.includes(elements[2]) &&
    arr.includes(elements[3])
  );
}

function c2(arr: number[]) {
  return elements.every((val: number) => arr.includes(val));
}
console.log(containsAll(myArray));
console.log(c2(myArray));
