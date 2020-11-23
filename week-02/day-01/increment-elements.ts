'use strict';
// -  Create a variable named `numbers` with the following content: `[1, 2, 3, 4, 5]`
// -  Increment the third element directly (without loops and without array methods: forEach, map, ...)
// -  Log the third element to the console

let numbers: number[] = [1, 2, 3, 4, 5];

function addNumbers(i: number): number {
  let sum: number = (numbers[i] += 1);
  // console.log(numbers[2]);

  return sum;
}

let add: number = addNumbers(2);

console.log(add);
