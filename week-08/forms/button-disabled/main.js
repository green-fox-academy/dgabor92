'use strict';

let signupButton = document.querySelector('.sign');
let loveCatsButton = document.querySelector('.cats');

let dogRadioButton = document.querySelector('#dog');
let catRadioButton = document.querySelector('#cat');
let viktorRadioButton = document.querySelector('#goldfish');
let yesRadioButton = document.querySelector('#yes');
let noRadioButton = document.querySelector('#no');

dogRadioButton.addEventListener('click', () => {
  if (dogRadioButton.checked === true) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
});
catRadioButton.addEventListener('click', () => {
  if (catRadioButton.checked === true) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
});

yesRadioButton.addEventListener('click', () => {
  if (yesRadioButton.checked === true) {
    loveCatsButton.disabled = false;
  } else {
    loveCatsButton.disabled = false;
  }
});

signupButton.addEventListener('click', () => {
  alert(`Thank you, you've successfully signed up for cat facts`);
  if (viktorRadioButton.checked === true && noRadioButton.checked === true) {
    signupButton.disabled = false;
    alert(`Sigh, we still added you to the cat facts list`);
  }
});
