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
      data.reverse(); // to see the latest post
      for (let i = 0; i < data.length; i++) {
        loadingPosts(data[i]);
      }
    });
};
//load the all post when you enter the homepage
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
  let upvoteBtn = document.createElement('button');
  upvoteBtn.setAttribute('class', 'upvoteBtn');
  upvoteBtn.setAttribute('postId', data.id);
  let downvoteBtn = document.createElement('button');
  downvoteBtn.setAttribute('class', 'downvoteBtn');
  downvoteBtn.setAttribute('postId', data.id);
  vote.appendChild(upvoteBtn);
  vote.appendChild(score);
  vote.appendChild(downvoteBtn);
  let deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'delete');
  deleteBtn.setAttribute('postId', data.id);
  deleteBtn.innerHTML = '❌';
  let singlepost = document.createElement('div');
  singlepost.setAttribute('class', 'single-post');
  singlepost.setAttribute('postId', data.id);
  singlepost.appendChild(vote);
  singlepost.appendChild(link);
  singlepost.appendChild(deleteBtn);
  let mainpost = document.querySelector('.main-posts');
  mainpost.appendChild(singlepost);

  // single post score ++
  upvoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let btnId = upvoteBtn.getAttribute('postId');
    console.log(btnId);
    fetch(`/posts/${btnId}/upvote`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        score.innerHTML++;
        upvoteBtn.style.backgroundImage = "url('./img/upvoted.png')";
        downvoteBtn.style.backgroundImage = "url('./img/downvote.png')";
      });
  });
  // single post score --
  downvoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let btnId = downvoteBtn.getAttribute('postId');
    fetch(`/posts/${btnId}/downvote`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        score.innerHTML--;
        downvoteBtn.style.backgroundImage = "url('./img/downvoted.png')";
        upvoteBtn.style.backgroundImage = "url('./img/upvote.png')";
      });
  });
  // single post delete
  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let deleteId = deleteBtn.getAttribute('postId');
    let postId = singlepost.getAttribute('postId');
    fetch(`/posts/${deleteId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (postId === deleteId) {
          singlepost.remove();
        }
      });
  });
}
// add new post
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('.title').value;
  const url = document.querySelector('.url').value;
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
        appendPost(data);
        let title = document.querySelector('.title');
        title.value = '';
        let url = document.querySelector('.url');
        url.value = '';
      })
      .then((data) => {
        // redirect the homepage again
        window.location.assign('http://localhost:3000/');
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
  let upvoteBtn = document.createElement('button');
  upvoteBtn.setAttribute('class', 'upvoteBtn');
  let downvoteBtn = document.createElement('button');
  downvoteBtn.setAttribute('class', 'downvoteBtn');
  vote.appendChild(upvoteBtn);
  vote.appendChild(score);
  vote.appendChild(downvoteBtn);
  let singlepost = document.createElement('div');
  singlepost.setAttribute('class', 'single-post');
  singlepost.appendChild(vote);
  singlepost.appendChild(link);
  let mainpost = document.querySelector('.main-posts');
  mainpost.insertBefore(singlepost, mainpost.childNodes[0]);
}
