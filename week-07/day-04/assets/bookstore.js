'use strict';

const xhr = new XMLHttpRequest();

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  bookWithData();
});

function bookWithData() {
  let method = 'GET';
  let endpoint = 'http://localhost:3000/bookwithfulldata';

  xhr.open(method, endpoint);

  xhr.send();
  let body = document.querySelector('body');
  xhr.onload = () => {
    let result = JSON.parse(xhr.response);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = result[0].bookname;
      body.appendChild(li);
    }
  };
}
