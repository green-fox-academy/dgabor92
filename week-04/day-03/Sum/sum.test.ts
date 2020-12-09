import * as test from 'tape';
import Sum from './sum';

test('should be return the summ of all number[]', (t) => {
  const array = new Sum();
  const actual = array.sumAllNumber([1, 2, 3, 4]);
  const expected = 10;
  t.equal(actual, expected);
  t.end();
});

test('should be return empty array', (t) => {
  const array = new Sum();
  const actual = array.listAllNumber([]);
  const expected = [];
  t.deepEqual(actual, expected);
  t.end();
});

test('should be return one element ', (t) => {
  const array = new Sum();
  const actual = array.listAllNumber([1]);
  const expected = [1];
  t.deepEqual(actual, expected);
  t.end();
});

test('should be return multiple element', (t) => {
  const array = new Sum();
  const actual = array.listAllNumber([1, 2, 3, 4, 5, 6]);
  const expected = [1, 2, 3, 4, 5, 6];
  t.deepEqual(actual, expected);
  t.end();
});
