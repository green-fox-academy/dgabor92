'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyButton = document.querySelector('.create-candies');
let candy = 0;
let candies = document.querySelector('.candies');
let speed = document.querySelector('.speed');
let speedCount = 0;

candyButton.addEventListener('click', () => {
  candy += 1;
  candies.innerHTML = candy;
});

let lollipopButton = document.querySelector('.buy-lollypops');
let lollipop = document.querySelector('.lollypops');
let lolli = 0;

lollipopButton.addEventListener('click', () => {
  if (candy >= 100) {
    lolli += 1;
    lollipop.append('🍭');
  }
  candy -= 100;
  candies.innerHTML = candy;
});

let candyRainButton = document.querySelector('.candy-machine');
candyRainButton.addEventListener('click', () => {
  candy += 10;
  candies.innerHTML = candy;
});
