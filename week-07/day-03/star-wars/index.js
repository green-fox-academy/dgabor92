'use strict';

const xhr = new XMLHttpRequest();

// let method = 'GET';
// let endpoint = 'https://swapi.dev/api/';

// xhr.open(method, endpoint);
// xhr.send();

let people = [];
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); //megszakítom az újratöltést

  let input = document.querySelector('input');
  searchPeople(input.value);
});

function searchPeople(name) {
  let xhr = new XMLHttpRequest();

  let method = 'GET';
  let endpoint = `https://swapi.dev/api/people/?search=${name}`;

  xhr.open(method, endpoint);
  xhr.send(); //ha a linkbe benne van mire akarok keresni akkor a send method üres lesz!!!

  xhr.onload = () => {
    // console.log(xhr.status);

    let result = JSON.parse(xhr.response);

    for (let i = 0; i < result.results.length; i++) {
      let btnResult = result.results[i].name;
      let liFirst = document.createElement('li');

      let a = document.createElement('a'); // <a></a>
      a.innerHTML = btnResult;
      liFirst.appendChild(a);

      let ulFirst = document.querySelector('ul');
      ulFirst.appendChild(liFirst);

      a.onclick = (e) => {
        console.log(e);
        console.log(e.target.outerText);
        console.log(people);
        let character = people.find((p) => {
          return p.name === e.target.outerText;
        });
        for (let j = 0; j < character.films.length; j++) {
          searchMovie(character.films[j]);
        }
      };
    }

    people = result.results;
  };
}

function searchMovie(endpoint) {
  let xhr = new XMLHttpRequest();

  let method = 'GET';

  xhr.open(method, endpoint);
  xhr.send(); //ha a linkbe benne van mire akarok keresni akkor a send method üres lesz!!!

  xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    let movie = JSON.parse(xhr.response);
    let div = document.querySelector('.lista-2');
    let ul = document.querySelector('.lista-2 > ul');
    if (ul) {
      let li = document.createElement('li');
      li.innerHTML = movie.title;
      ul.appendChild(li);
    } else {
      let li = document.createElement('li');
      li.innerHTML = movie.title;
      let ul = document.createElement('ul');
      ul.appendChild(li);
      div.appendChild(ul);
    }
  };
}
