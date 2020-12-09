'use strict';

let fibonacci: number[] = [0, 1];

export default function listFibonacci(num: number) {
  for (let i: number = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
// console.log(listFibonacci(10));
