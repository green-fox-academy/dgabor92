let list = [];

console.log(list.length);

list.push('William');

if (list.length === 0) {
  console.log('empty');
} else {
  console.log('Got something');
}
list.push('John');
list.push('Amanda');

console.log(list.length);

console.log(list[2]);

list.map((name) => {
  console.log(name);
});

for (let i: number = 0; i < list.length; i++) {
  console.log(i + 1, list[i]);
}
list.splice(1, 1);

console.log(list);

list.splice(0, list.length);
console.log(list);
