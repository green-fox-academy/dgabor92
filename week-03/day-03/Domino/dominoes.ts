import { Domino } from './domino';

function initializeDominoes(): Domino[] {
  let dominoes = [];
  dominoes.push(new Domino(5, 2)); // (5,2)
  dominoes.push(new Domino(4, 6)); // (2,4)
  dominoes.push(new Domino(1, 5)); // (4,6)
  dominoes.push(new Domino(6, 7)); // (6,7)
  dominoes.push(new Domino(2, 4)); // (7,1)
  dominoes.push(new Domino(7, 1)); // (1,5)
  return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();

function shakeDominoes(inputDominoes: Domino[]): number[][] {
  let shake: number[][] = [];
  for (let i: number = 0; i < inputDominoes.length; i++) {
    for (let j: number = 0; j < inputDominoes.length; j++) {
      if (inputDominoes[i].values[1] === inputDominoes[j].values[0]) {
        shake.push(inputDominoes[j].values);
      }
    }
  }
  return shake;
}

// console.log(shakeDominoes(dominoes));

function nextDomino(domino: Domino, dominoList: Domino[]): Domino {
  let snake: Domino;
  for (let i: number = 0; i < dominoList.length; i++) {
    if (domino.values[1] === dominoList[i].values[0]) {
      snake = dominoList[i];
    }
  }

  return snake;
}

console.log(nextDomino(dominoes[0], dominoes));

function snakeDominoes(firstDomino: Domino, dominoes: Domino[]): Domino[] {
  let resultSnake: Domino[] = [];
  let nDomino: Domino = nextDomino(firstDomino, dominoes);
  resultSnake.push(nDomino);
  let index: number = dominoes.indexOf(nDomino);
  dominoes.splice(index, 1);
  console.log(dominoes);
  while (dominoes.length) {
    nDomino = nextDomino(nDomino, dominoes);
    resultSnake.push(nDomino);
    index = dominoes.indexOf(nDomino);
    dominoes.splice(index, 1);
  }

  return resultSnake;
}

console.log(snakeDominoes(dominoes[0], dominoes));

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

// console.log(dominoes[0].values[1]);
