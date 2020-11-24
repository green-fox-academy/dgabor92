'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

console.log(todoText);

let myTodo = {
  thingsToDo: {
    first: 'Buy milk',
    second: 'Download games - \n Diablo',
  },
};

console.log(myTodo.thingsToDo.first);

console.log(myTodo.thingsToDo.second);
