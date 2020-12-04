'use strict';

function earCounter(bunnies: number) {
  if (bunnies < 1) {
    return 0;
  }
  return 2 + earCounter(bunnies - 1);
}

console.log(earCounter(10));
