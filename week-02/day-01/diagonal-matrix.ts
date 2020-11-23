// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let myMatrix: number[][] = [
  [0, 0, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];
console.table(myMatrix);

for (let i: number = 0; i < myMatrix.length; i++) {
  for (let j: number = 0; j < myMatrix.length; j++) {
    console.log(myMatrix[i][j]);
  }
}
