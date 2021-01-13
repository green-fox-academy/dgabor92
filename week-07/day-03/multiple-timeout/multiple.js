'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function multipleTimeout() {
  console.log('apple');

  let pear = () => {
    console.log('pear');
  };
  setTimeout(pear, 1000);

  let melon = () => {
    console.log('melon');
  };
  setTimeout(melon, 3000);

  let grapes = () => {
    console.log('grapes');
  };
  setTimeout(grapes, 5000);
}

multipleTimeout();
