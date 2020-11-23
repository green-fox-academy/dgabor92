// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(input: number): number {
  let fact = 1;
  for (let i: number = 1; i <= input; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorio(3));
