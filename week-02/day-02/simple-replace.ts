'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example
// Please fix it for me!
// Expected ouput: In a galaxy far far away

console.log(example);

export = example;

let re = /dishwasher/gi;

let newExample: string = example.replace(re, 'galaxy');

console.log(newExample);
