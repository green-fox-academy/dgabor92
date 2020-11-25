'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawSquare(x, y) {
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, y, x + 50, y + 50);
}

drawSquare(50, 50);

for (let i = 0; i < 4; i++) {
  drawSquare(i * 50, i * 40);
}
