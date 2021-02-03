'use strict';

let form = document.querySelector('form');
let container = document.querySelector('.container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = document.querySelector('.title').value;
  let artist = document.querySelector('.artist').value;
  let duration = document.querySelector('.duration').value;

  console.log([title, artist, duration]);
  let postData = { title: title, artist: artist, duration: duration };
  let requestBody = JSON.stringify(postData);
  if ((title, artist, duration)) {
    fetch('http://localhost:3000/playlists', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: requestBody,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // let div = document.createElement('div');
        console.log(data);
        // div.innerHTML = data;
        // container.appendChild(div);
      })
      .catch((err) => {
        console.error(err);
      });
  }
});
