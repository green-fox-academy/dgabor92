'use strict';

let button = document.querySelector('button');
let container = document.querySelector('.container');

button.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('http://api.icndb.com/jokes/random', {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('nincs válasz');
      }
      return response;
    })
    .then((response) => response.json())
    .then((result) => {
      let joke = result.value.joke;
      console.log(joke);
      p(joke);
    })
    .catch((err) => {
      console.log(err);
    });
});

let p = (result) => {
  let p = document.createElement('p');
  p.innerHTML = result;
  container.appendChild(p);
};
