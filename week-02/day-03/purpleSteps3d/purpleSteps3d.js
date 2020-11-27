'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawBoxes(offset, size) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(offset * 1, offset * 1, size * 1, size * 1);
  ctx.fillRect(offset * 2, offset * 2, size * 1.5, size * 1.5); // size= size *i*1.5   offset*[i] = offset * [i-1] + size * [i-1]
  ctx.fillRect(offset * 3.5, offset * 3.5, size * 3, size * 3);
  ctx.fillRect(offset * 6.5, offset * 6.5, size * 4.5, size * 4.5);
  ctx.fillRect(offset * 11, offset * 11, size * 6, size * 6);
  ctx.fillRect(offset * 17, offset * 17, size * 7.5, size * 7.5);
}

// drawBoxes(10, 10);

let offset = 10;
let size = 10;

for (let i = 1; i < 8; i++) {
  ctx.fillStyle = ' purple';
  offset = offset + size;
  size = size + i * 1.5;
  ctx.fillRect(offset, offset, size, size);
}

console.log();
