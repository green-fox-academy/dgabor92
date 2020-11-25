'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.fillRect(50, 10, 100, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(250, 10, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(450, 10, 100, 100);
