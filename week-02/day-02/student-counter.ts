'use strict';

const students: any[] = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - How many candies are owned by students altogether

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

// function sumCandies(arr: any[]): number {}

// console.log(students[0].candies);

function sumCandies(arr: any[]): number {
  let sumAllCandies = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAllCandies += arr[i].candies;
  }
  return sumAllCandies;
}
console.log(sumCandies(students));

function ageOfPeople(arr: any[]): number {
  let age = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].candies < 5) {
      age += arr[i].age;
    }
  }
  return age;
}

console.log(ageOfPeople(students));
