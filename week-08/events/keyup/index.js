'use strict';

let body = document.querySelector('body');

window.addEventListener('keyup', (event) => {
  event.preventDefault();
  let h1 = document.querySelector('h1');
  h1.innerHTML = 'Last pressed key code is:' + event.key;
});
