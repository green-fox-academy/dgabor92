'use strict';

let lineCount: number = 10;
const szelesseg: number = 10;
const magassag: number = 3;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %   0 1 3  sor = 1 lC = 6 - 2 = 4 - 1 = 3
// % %  %   1 1 2  sor = 2 lC = 6 - 2 = 4 - 2 = 2
// %  % %   2 1 1  sor = 3
// %   %%   3 1 0  sor = 4
// %%%%%%
//
// The square should have as many lines as lineCount is

function square() {
  let r = '';

  for (let sor = 0; sor < lineCount; sor++) {
    if (sor === 0 || sor === lineCount - 1) {
      // vagy a legfelső vagy a legalsó sor
      for (
        let oszlop = 0;
        oszlop < lineCount;
        oszlop++ // egy sorban lévő karaktereket írom
      ) {
        r += '%';
      }
    } else {
      // sor eleje
      r += '%';

      //átló előtti space-k
      for (let space = 0; space < sor - 1; space++) {
        r += ' ';
      }

      // átló %-a
      r += '%';

      // átló utáni space-k
      for (let space = 0; space < lineCount - 2 - sor; space++) {
        r += ' ';
      }
      // sor vége
      r += '%';
    }

    r += '\n';
  }

  console.log(r);
}

square();

/**
 * sor = 0
 *
 * +
 *
 * sor = 0 oszlop = 0
 * +o
 *
 * sor = 0 oszlop = 1
 * +oo
 *
 * sor = 0 oszlop = 2
 * +ooo
 *
 * sor = 0 oszlop = 3
 * +oooo
 *
 * sor = 0 oszlop = 4
 * +ooooo
 *
 * sor = 0 oszlop = 5
 * nem csinál semmit
 *
 * +ooooo
 *
 * sor = 1 oszlop = 0
 * +ooooo
 * +o
 *
 * sor = 1 oszlop = 1
 * +ooooo
 * +oo
 *
 * sor = 1 oszlop = 2
 * +ooooo
 * +ooo
 *
 * sor = 1 oszlop = 3
 * +ooooo
 * +oooo
 *
 * sor = 1 oszlop = 4
 * +ooooo
 * +ooooo
 *
 * sor = 1 oszlop = 5
 * nem csinál semmit
 *
 * sor = 2 oszlop = 0
 *
 *
 * ...
 *
 * sor = 4 oszlop = 4
 * +ooooo
 * +ooooo
 * +ooooo
 * +ooooo
 * +ooooo
 *
 * sor = 4 oszlop = 5
 * nem csinál semmit
 *
 * sor = 5
 * nem csinál semmit
 */
function forTest() {
  let r = '';

  // Sorok kirajzolása
  for (let sor = 0; sor < 5; sor++) {
    r += '+';

    // Soron belüli oszlopok kirajzolása
    for (let oszlop = 0; oszlop < 5; oszlop++) {
      r += 'o';

      r += '';
    }

    r += '\n';
  }

  for (let sor = 0; sor < magassag; sor++) {
    for (let oszlop = 0; oszlop < szelesseg; oszlop++) {
      r += '%';
    }
    r += '\n';
  }

  console.log(r);
}

forTest();
