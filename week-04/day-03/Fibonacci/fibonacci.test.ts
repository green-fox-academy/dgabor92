import * as test from 'tape';
import listFibonacci from './fibonacci';

test('should be return an array ', (t) => {
  let actual = listFibonacci(25);
  let expected = actual;
  t.equal(actual, expected);
  t.end();
});
