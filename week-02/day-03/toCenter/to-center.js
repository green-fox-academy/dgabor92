'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

// drawLine(20, 10);

for (let x = 0; x <= canvas.width; x += 20) {
  drawLine(x, 0);
  drawLine(x, canvas.height);
}

for (let y = 0; y <= canvas.height; y += 20) {
  drawLine(0, y);
  drawLine(canvas.width, y);
}
