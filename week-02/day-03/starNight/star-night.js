'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let howManyStar = 1000;
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function drawStar(x, y) {
  let color = 'rgb(128,255,255)';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 2, 2);
}

drawStar(100, 100);

for (let i = 0; i <= howManyStar; i++) {
  let x = Math.floor(Math.random() * canvas.width);
  let y = Math.floor(Math.random() * canvas.height);
  drawStar(x, y);
}
console.log(x);
console.log(y);
