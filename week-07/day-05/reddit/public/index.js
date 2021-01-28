'use strict';

let form = document.querySelector('.addform');
let main = document.querySelector('main');

window.onload = () => {
  fetch('http://localhost:3000/posts', {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        loadingPosts(data[i]);
      }
    });
};

function loadingPosts(data) {
  let a = document.createElement('a');
  a.setAttribute('href', data.url);
  a.innerHTML = data.title;
  let link = document.createElement('div');
  link.setAttribute('class', 'link');
  link.appendChild(a);
  let score = document.createElement('div');
  score.setAttribute('class', 'score');
  score.innerHTML = data.score;
  let vote = document.createElement('div');
  vote.setAttribute('class', 'vote');
  let upvote = document.createElement('img');
  upvote.setAttribute('src', './img/upvote.png');
  let downvote = document.createElement('img');
  downvote.setAttribute('src', './img/downvote.png');
  vote.appendChild(upvote);
  vote.appendChild(score);
  vote.appendChild(downvote);
  let singlepost = document.createElement('div');
  singlepost.setAttribute('class', 'single-post');
  singlepost.appendChild(vote);
  singlepost.appendChild(link);
  let mainpost = document.querySelector('.main-posts');
  mainpost.appendChild(singlepost);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('.title').value;
  const url = document.querySelector('.url').value;
  console.log(title);
  console.log(url);
  const postData = { title: title, url: url };
  const requestBody = JSON.stringify(postData);
  if ((title, url)) {
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: requestBody,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // add single post to main div
        console.log(data);
        appendPost(data);
        let title = document.querySelector('.title');
        title.value = '';
        let url = document.querySelector('.url');
        url.value = '';
      });
  }
});

function appendPost(data) {
  let a = document.createElement('a');
  a.setAttribute('href', data.url);
  a.innerHTML = data.title;
  let link = document.createElement('div');
  link.setAttribute('class', 'link');
  link.appendChild(a);
  let score = document.createElement('div');
  score.setAttribute('class', 'score');
  score.innerHTML = data.score;
  let vote = document.createElement('div');
  vote.setAttribute('class', 'vote');
  let upvote = document.createElement('img');
  upvote.setAttribute('src', './img/upvote.png');
  let downvote = document.createElement('img');
  downvote.setAttribute('src', './img/downvote.png');
  vote.appendChild(upvote);
  vote.appendChild(score);
  vote.appendChild(downvote);
  let singlepost = document.createElement('div');
  singlepost.setAttribute('class', 'single-post');
  singlepost.appendChild(vote);
  singlepost.appendChild(link);
  let mainpost = document.querySelector('.main-posts');
  mainpost.insertBefore(singlepost, mainpost.childNodes[0]);
  // main.insertBefore(mainpost, main.childNodes[0]);
}

// upvote.addEventListener('click', (e) => {
//   e.preventDefault();
//   fetch('http://localhost:3000/posts/:id/upvote', {
//     method: 'PUT',
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       data.score++;
//     });
// });
