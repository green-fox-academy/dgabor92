'use strict';

let list: number[] = [500, 1000, 1250, 175, 800, 120];

function sumList(arr: number[]): number {
  let sum: number = arr.reduce((x, y) => x + y);
  return sum;
}
console.log(sumList(list));

function greatest(arr: number[]): number {
  let biggestNumber: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }
  return biggestNumber;
}

console.log(greatest(list));

function lowest(arr: number[]): number {
  let lowestNumber: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] <= lowestNumber) {
      lowestNumber = arr[i];
    }
  }
  return lowestNumber;
}

console.log(lowest(list));
