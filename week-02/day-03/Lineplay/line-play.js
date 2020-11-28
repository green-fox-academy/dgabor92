'use strict';

// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function drawLine(startX, startY, lineToX, lineToY, color) {
  ctx.strokeStyle = color;
  ctx.begintPath();
  ctx.movetTo(startX, startY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
}

drawLine(10, 10, 300, 200, 'blue');

// for (let i = 0; (lineCount = 14); i <= lineCount, i++) {
//   let startY =
//     (i * canvas.heigth) / (lineCount + 2) + (canvas.height / lineCount) * 2;
//   let lineToX = (i * canvas.width) / (lineCount + 1) + canvas.width / lineCount;

//   let startX =
//     (i * canvas.width) / (lineCount + 2) + (canvas.width / lineCount) * 2;
//   let lineToY =
//     (i * canvas.height) / (lineCount + 1) + canvas.height / lineCount;

//   let color = 'lime';
//   drawLine(0, startY, lineToX, canvas.height, color);
//   color = 'violet';
//   drawLine(startX, 0, canvas.width, lineToY, color);
// }
