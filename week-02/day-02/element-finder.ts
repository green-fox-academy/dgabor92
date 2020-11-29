'use strict';

// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];
// console.log(containsSeven(numbers));
// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

// export = containsSeven;

// numbers.forEach((element) => {
//   if (element === 7) {
//     console.log('Hooray');
//   } else {
//     console.log('Nooooo');
//   }
// });

// if (numbers.includes(7)) {
//   console.log('Hoorray');
// } else {
//   console.log('Noooo');
// }

function isItIncluded(arr: number[]): string {
  if (arr.includes(7)) {
    return 'Hoorrayy';
  } else {
    return 'Noooo';
  }
}

console.log(isItIncluded(numbers));
