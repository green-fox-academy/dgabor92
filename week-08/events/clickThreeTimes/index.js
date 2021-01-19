'use strict';

function clickEvent() {
  let button = document.querySelector('button');
  button.disabled = false;
  let clickcount = 0;
  button.addEventListener('click', () => {
    clickcount += 1;
    console.log(clickcount);
    if (clickcount === 3) {
      let body = document.querySelector('body');
      let h1 = document.createElement('h1');
      h1.innerHTML = '5 seconds elapsed and clicked 3 times';
      body.appendChild(h1);
      button.disabled = true;
    }
  });
}

setTimeout(clickEvent, 5000);
