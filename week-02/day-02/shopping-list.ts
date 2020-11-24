let shoppingList: string[] = [
  'Eggs',
  'Milk',
  'Fish',
  'Apple',
  'Bread',
  'Chicken',
];

function isThere(arr: string[]): void {
  let there1: boolean = arr.indexOf('Milk') > -1;
  let there2: boolean = arr.indexOf('Banana') > -1;

  console.log(there1);
  console.log(there2);
}

isThere(shoppingList);
