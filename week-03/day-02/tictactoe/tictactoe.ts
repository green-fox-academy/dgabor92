'use strict';

const fs = require('fs');

function ticTacToeResult(filePath: string): string {
  try {
    let fileLines: string[] = fs
      .readFileSync(filePath, 'utf-8')
      .toString()
      .split('\n');
    let gameFields: string[] = [];
    for (let i: number = 0; i < fileLines.length; i++) {
      for (let j: number = 0; j < fileLines[i].length; j++) {
        gameFields.push(fileLines[i].charAt(j));
      }
    }

    for (let i: number = 0; i < gameFields.length; i++) {
      //oszlop
      if (
        gameFields[i] === gameFields[i + 3] &&
        gameFields[i] === gameFields[i + 6]
      ) {
        return gameFields[i];
        //atlo - [2 - 6]
      } else if (
        gameFields[2] === gameFields[4] &&
        gameFields[2] === gameFields[6]
      ) {
        return gameFields[2];
        //atlo - [0 - 8]
      } else if (
        gameFields[0] === gameFields[4] &&
        gameFields[0] === gameFields[8]
      ) {
        return gameFields[0];
        //sor
      } else if (
        (i === 0 || i === 3 || i === 6) &&
        gameFields[i] === gameFields[i + 1] &&
        gameFields[i] === gameFields[i + 2]
      ) {
        return gameFields[i];
        //dontetlen
      } else {
        return 'draw';
      }
    }
  } catch (e) {
    console.log(e);
  }
}

let stringArray: string[] = ['szia', 'hello'];

console.log(ticTacToeResult('win-o.txt'));

// console.log('ezt vajon kiirjuk-e?');
console.log(ticTacToeResult('draw.txt'));
console.log(ticTacToeResult('win-x.txt'));
