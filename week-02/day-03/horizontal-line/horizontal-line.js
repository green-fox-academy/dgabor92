'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

let lineWidth = 33;
let totalWidth = canvas.width;
let middle = canvas.width / 2;

ctx.beginPath();
ctx.moveTo(0, middle);
ctx.lineTo(totalWidth, middle);
ctx.stroke();
