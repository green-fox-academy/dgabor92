'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(400, 200);
ctx.stroke();
