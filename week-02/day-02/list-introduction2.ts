let listA = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let listB = listA;

console.log(listB);

console.log(listA.indexOf('Durian'));
// let include = listA.includes('Durian');

// console.log(include);

console.log(listA.indexOf('Durian'));

listA[3] = '';
console.log(listA);

console.log(listA.indexOf('Avocado'));
console.log(listB.indexOf('Durian'));

console.log(listA[2]);
