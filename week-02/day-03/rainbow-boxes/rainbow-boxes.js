'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

function draw(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(200, 100, x, y);
}

draw(200, 200, 'blue');
draw(150, 150, 'red');
draw(100, 100, 'purple');
draw(50, 50, 'yellow');
