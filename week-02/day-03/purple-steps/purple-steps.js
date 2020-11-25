'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// function drawTriangle(x, y) {
//   ctx.strokeStyle = 'blue';
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   ctx.lineTo(x + 50, y);
//   ctx.lineTo(x + 25, y + 40);
//   ctx.lineTo(x, y);
//   ctx.stroke();
// }

// // drawTriangle(30, 20);

// for (let i = 0; i < 6; i++) {
//   drawTriangle(i * 25, i * 40);
// }

function drawSteps(x, y) {
  ctx.fillStyle = 'purple';
  ctx.fillRect(x, y, 20, 20);
}

// drawSteps(25, 25);

for (let i = 0; i < 16; i++) {
  drawSteps(i * 20, i * 20);
}
