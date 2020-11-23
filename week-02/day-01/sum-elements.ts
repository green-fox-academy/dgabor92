// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

let numbers: number[] = [54, 23, 66, 12];

function sum(): number {
  let sumOfNumbers: number = numbers[2] + numbers[3];
  return sumOfNumbers;
}

let valami: number = sum();

console.log(valami);
