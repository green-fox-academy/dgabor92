'use strict';

let button = document.querySelector('button');
let ul = document.querySelector('ul').children.length;

button.addEventListener('click', () => {
  let p = document.querySelector('p');
  p.innerHTML = ul;
});
