'use strict';

let button = document.querySelector('button');

function write() {
  let body = document.querySelector('body');
  let h1 = document.createElement('h1');
  h1.innerHTML = '2 seconds ellapsed';
  body.appendChild(h1);
}

button.onclick = () => {
  setTimeout(write, 2000);
};
