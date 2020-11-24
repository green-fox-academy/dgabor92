let map = {};

if (map === 0) {
  console.log(map);
}

map[0] = { Key: 97, Value: 'a' };
map[1] = { Key: 98, Value: 'b' };
map[2] = { Key: 99, Value: 'c' };
map[3] = { Key: 65, Value: 'A' };
map[4] = { Key: 66, Value: 'B' };
map[5] = { Key: 67, Value: 'C' };

// for (let i: number = 0; i < map[i]; i++) {
//   let size = Object.keys(map).length;
//   console.log(size);
// }
for (let i: number = 0; i < 6; i++) {
  console.log(map[i].Value);
  console.log(map[i].Key);
}

map[6] = { Key: 68, Value: 'D' };
console.log(map);

for (let i: number = 0; i < 10; i++) {
  delete map[i];
}
console.log(map);
