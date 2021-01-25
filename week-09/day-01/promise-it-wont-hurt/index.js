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
      let p = document.createElement('p');
      p.innerHTML = joke;
      container.appendChild(p);
    })
    .catch((err) => {
      console.log(err);
    });
});
