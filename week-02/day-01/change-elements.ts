'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers: number[] = [1, 2, 3, 8, 5, 6];

console.log(numbers);

function change(): number[] {
  numbers.splice(3, 0);
  numbers[3] = 4;
  return;
}

change();

console.log(numbers[3]);
console.log(numbers);
