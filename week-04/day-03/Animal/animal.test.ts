import * as test from 'tape';

import Animal from '../../../week-03/day-03/animal';

test('should return number the hunger field', (t) => {
  const medve = new Animal(10, 10);
  const actual = medve.hunger;
  const expected = 50;
  t.deepEqual(actual, expected);
  t.end();
});

test('should return string the thirst field', (t) => {
  const medve = new Animal(10, 10);
  const actual = medve.thirst;
  const expected = 50;
  t.deepEqual(actual, expected);
  t.end();
});

test('should return string the thirst field', (t) => {
  const medve = new Animal(10, 10);
  medve.play();
  medve.play();
  const actual = medve.thirst;
  const expected = 52;
  t.deepEqual(actual, expected);
  t.end();
});

test('should return string the thirst field', (t) => {
  const medve = new Animal(10, 10);
  medve.play();
  medve.play();
  const actual = medve.hunger;
  const expected = 52;
  t.deepEqual(actual, expected);
  t.end();
});
