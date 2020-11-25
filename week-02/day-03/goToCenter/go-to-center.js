'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function goToCenter(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 250, y + 170);
  ctx.lineTo(x + 170, y + 250);
  ctx.lineTo(x + 400, y + 300);
  ctx.stroke();
}
goToCenter(30, 30);

for (i = 0; i < 3; i++) {
  goToCenter(i * 50, y * 25);
}
