import * as test from 'tape';
import countLetters from './countLetters';

test('should return object', (t) => {
  let newLetter = countLetters('node');
  const actual = newLetter;
  const expected = true;
  t.equal(actual, expected);
  t.end();
});

test('should return object', (t) => {
  let newLetter = countLetters('');
  const actual = newLetter;
  const expected = true;
  t.equal(actual, expected);
  t.end();
});
