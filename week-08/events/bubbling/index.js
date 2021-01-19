'use strict';

let img = document.querySelector('div');

let height = img.offsetHeight;
let width = img.offsetWidth;

let up = () => {
  height += 10;
};

let down = () => {
  height -= 10;
};

let right = () => {
  width += 10;
};

let left = () => {
  width -= 10;
};

let zoomIn = () => {
  height *= 1.2;
  width *= 1.2;
};

let zoomOut = () => {
  height /= 0.2;
  width /= 0.2;
};

let nav = document.querySelector('nav');

nav.addEventListener('click', (event) => {
  let action = event.target.getAttribute('data-action');
  let direction = event.target.getAttribute('data-direction');
  console.log(action);
  console.log(direction);

  if (action === 'move') {
    if (direction === 'up') {
      up();
      console.log(height);
    }
    if (direction === 'down') {
      down();
      console.log(height);
    }
    if (direction === 'left') {
      left();
      console.log(width);
    }
    if (direction === 'right') {
      right();
      console.log(width);
    }
  }
  if (action === 'zoom') {
    if (direction === 'in') {
      zoomIn();
      console.log(height);
      console.log(width);
    }
    if (direction === 'out') {
      zoomOut();
      console.log(height);
      console.log(width);
    }
  }
});
