import * as test from 'tape';
import Sharpie from '../../../week-03/day-03/sharpie';

test('New Sharpie first argument is a string', (t) => {
  let firstPen = new Sharpie('yellow', 200);
  const actual = firstPen.color;
  const expected = 'yellow';
  t.equal(actual, expected);
  t.end();
});

test('New Sharpie second argument is a number', (t) => {
  let firstPen = new Sharpie('yellow', 200);
  const actual = firstPen.width;
  const expected = 200;
  t.equal(actual, expected);
  t.end();
});
