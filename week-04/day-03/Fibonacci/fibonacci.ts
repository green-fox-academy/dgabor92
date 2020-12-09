'use strict';

export default function listFibonacci(num: number) {
  let fibonacci: number[] = [0, 1];
  for (let i: number = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}
console.log(listFibonacci(10));
