'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function draw(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  // ctx.lineTo(x, y);
  ctx.lineTo(x + size / 2, y + size);
  ctx.lineTo(x - size / 2, y + size);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fillStyle = '#FFCC00';
  ctx.fill();
}

// y= i*50 + y
// size = 50
// x = x-25*i

function drawBigTriangle(startX, startY, smallTriangleSize) {
  for (let i = 0; i < canvas.height / smallTriangleSize; i++) {
    // draw(
    //   startX - (smallTriangleSize / 2) * i,
    //   i * smallTriangleSize + startY,
    //   smallTriangleSize
    // );
    for (let j = 0; j < i + 1; j++) {
      draw(
        startX - (smallTriangleSize / 2) * i + j * smallTriangleSize,
        startY + smallTriangleSize * i,
        smallTriangleSize
      );
    }
  }
}
drawBigTriangle(200, 0, 25);
// draw(200, 0, 50);
// draw(175, 50, 50);
// draw(225, 50, 50);
// draw(150, 100, 50);
// draw(200, 100, 50);
// draw(250, 100, 50);
// draw(125, 150, 50);
// draw(175, 150, 50);
// draw(225, 150, 50);
// draw(275, 150, 50);
// draw(100, 200, 50);
// draw(150, 200, 50);
// draw(200, 200, 50);
// draw(250, 200, 50);
// draw(300, 200, 50);
// draw(75, 250, 50);
// draw(125, 250, 50);
// draw(175, 250, 50);
// draw(225, 250, 50);
// draw(275, 250, 50);
// draw(325, 250, 50);
// draw(50, 300, 50);
// draw(100, 300, 50);
// draw(150, 300, 50);
// draw(200, 300, 50);
// draw(250, 300, 50);
// draw(300, 300, 50);
// draw(350, 300, 50);
// draw(25, 350, 50);
// draw(75, 350, 50);
// draw(125, 350, 50);
// draw(175, 350, 50);
// draw(225, 350, 50);
// draw(275, 350, 50);
// draw(325, 350, 50);
// draw(375, 350, 50);
