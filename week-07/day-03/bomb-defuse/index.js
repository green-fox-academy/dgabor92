'use strict';

let button = document.querySelector('button');
let count = document.querySelector('.count');

count.innerHTML = 10;

const timer = setTimeout(() => {
  console.log('Bomb exploded');
}, 10000);

let countdown = setInterval(() => {
  count.innerHTML--;
}, 1000);

button.onclick = () => {
  clearInterval(countdown);
  clearTimeout(timer);
  console.log('Bomb defused');
};
