'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Uranus',
  'Neptune',
];
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn",  "Uranus", "Neptune"

// console.log(putSaturn(planetList));

// export = putSaturn;

for (let i: number = 0; i < planetList.length; i++) {
  console.log(i, planetList[i]);
}

let re = /Jupiter/gi;

let newPlanetList: string = planetList.toString();

console.log(newPlanetList);

let finalPlanetList: string = newPlanetList.replace(re, 'Jupiter,Saturn');

console.log(finalPlanetList);
let words: string[] = finalPlanetList.split(',');
console.log(words);
