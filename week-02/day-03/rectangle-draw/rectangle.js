'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 200, 100);

ctx.fillStyle = 'yellow';
ctx.fillRect(50, 150, 220, 100);

ctx.fillStyle = 'blue';
ctx.fillRect(250, 150, 220, 100);

ctx.fillStyle = 'green';
ctx.fillRect(250, 50, 220, 100);
