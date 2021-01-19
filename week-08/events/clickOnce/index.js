'use strict';

let button = document.querySelector('button');

button.addEventListener(
  'click',
  () => {
    let date = new Date();
    console.log(date);
  },
  { once: true }
);
