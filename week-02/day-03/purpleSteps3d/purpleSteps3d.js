'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawBoxes(offset, size) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(offset, offset, size, size);
  ctx.fillRect(offset * 2, offset * 2, size * 1.5, size * 1.5); // size= size *i*1.5   offset=
  ctx.fillRect(offset * 3.5, offset * 3.5, size * 3, size * 3);
  ctx.fillRect(offset * 6.5, offset * 6.5, size * 4.5, size * 4.5);
  ctx.fillRect(offset * 11, offset * 11, size * 6, size * 6);
  ctx.fillRect(offset * 17, offset * 17, size * 7.5, size * 7.5);
}

drawBoxes(10, 10);

// let offset = 20;
// let size = 20;
// for (let i = 0; i < 6; i++) {
//   drawBoxes(offset, size);
//   drawBoxes(offset * i * 2 + 1.5, size * i * 1.5);
// }
// console.log(offset);
// console.log(size);
