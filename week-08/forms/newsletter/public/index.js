'use strict';

let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  console.log(name);
  console.log(email);
  const userData = { name: name, email: email };
  const requestBody = JSON.stringify(userData);
  if ((name, email)) {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: requestBody,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        responseAppend(data);
      });
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = (event) => {
    //   console.log(event);
    //   if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    //     const response = JSON.parse(xhr.responseText);
    //     responseAppend(response);
    //   }
    // };
    // xhr.open('POST', 'http://localhost:3000/signup');
    // xhr.setRequestHeader('content-type', 'application/json');
    // xhr.send(requestBody);
    console.log(requestBody);
  }
});

const responseAppend = (response) => {
  let div = document.createElement('div');
  div.innerHTML = response.message;
  div.style.color = 'white';
  let body = document.querySelector('body');
  body.appendChild(div);
};
