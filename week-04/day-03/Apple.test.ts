import * as test from 'tape';
import Apple from './Apple';

test('should return with string', (t) => {
  let apple = new Apple();
  const actual = apple.getApple();
  const expected = 'apple';

  t.equal(actual, expected);
  t.end();
});
