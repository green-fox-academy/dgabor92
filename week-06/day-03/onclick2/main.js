'use strict';

let food = ['bread', 'milk', 'orange', 'tomato'];
let buttonUp = document.createElement('button');
buttonUp.innerText = 'UP';
let buttonRight = document.createElement('button');
buttonRight.innerText = '>';
let buttonX = document.createElement('button');
buttonX.innerText = 'X';
let buttonDown = document.createElement('button');
buttonDown.innerText = 'Down';

let gombok = [buttonUp, buttonRight, buttonX, buttonDown];
let ul = document.createElement('ul');

for (let i = 0; i < gombok.length; i++) {
  let li = document.createElement('li');
  li.append(gombok[i]);
  ul.append(li);
}

let body = document.querySelector('body');

let select1 = document.createElement('select');
let select2 = document.createElement('select');
select1.setAttribute('class', 'div1');
select2.setAttribute('class', 'div2');

let main = document.createElement('div');
let main2 = document.createElement('div');
let main3 = document.createElement('div');

main.append(select1);
main2.append(ul);
main3.append(select2);

body.append(main);
body.append(main2);
body.append(main3);

main.setAttribute('id', 'main');
for (let i = 0; i < food.length; i++) {
  let option = document.createElement('option');
  option.append(food[i]);
  select1.append(option);
}
select1.setAttribute('size', '4');
console.log(select1);
select2.setAttribute('size', '4');

buttonUp.onclick = () => {
  if (select1.selectedIndex > 0) {
    select1.options[select1.selectedIndex - 1].selected = 'selected';
  }
};
buttonDown.onclick = () => {
  if (select1.selectedIndex < 3) {
    select1.options[select1.selectedIndex + 1].selected = 'selected';
  }
};
buttonRight.onclick = () => {
  let i = select1.selectedIndex;
  select2.append(select1.options[i]);
};

buttonX.onclick = () => {
  let i = select1.selectedIndex;
  select1.options[i].remove();
};
