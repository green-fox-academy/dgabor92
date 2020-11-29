'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs:
//  - how many candies they have on average

function whosGotMoreCandies(arr: any[]): string {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].candies > 4 || arr[i].candies > 5) {
      return arr[i].name;
    }
  }
}
console.log(whosGotMoreCandies(students));

function candiesAverage(arr: any[]): number {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    average += arr[i].candies / arr.length;
  }
  return average;
}

console.log(candiesAverage(students));
