// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(add: number[]): number {
  let sum = 0;
  for (let i: number = 0; i < add.length; i++) {
    sum += add[i];
  }
  return sum;
}

console.log(sum([3, 4, 5, 6, 7]));
