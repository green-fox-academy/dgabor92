import * as test from 'tape';
import listFibonacci from './fibonacci';

test('should be return an array ', (t) => {
  let actual = listFibonacci(25);
  let expected = actual;
  t.equal(actual, expected);
  t.end();
});

test('should be return  [0,1] with negative number', (t) => {
  let actual = listFibonacci(-200);
  let expected = [0, 1];
  t.equal(actual.toString(), expected.toString());
  t.end();
});

test('should be return  [0,1] with null number', (t) => {
  let actual = listFibonacci(null);
  let expected = [0, 1];
  t.equal(actual.toString(), expected.toString());
  t.end();
});

test('should be return  [0,1] with undefined number', (t) => {
  let actual = listFibonacci(undefined);
  let expected = [0, 1];
  t.equal(actual.toString(), expected.toString());
  t.end();
});

test('should be return  [0,1] with NaN number', (t) => {
  let actual = listFibonacci(NaN);
  let expected = [0, 1];
  t.equal(actual.toString(), expected.toString());
  t.end();
});
