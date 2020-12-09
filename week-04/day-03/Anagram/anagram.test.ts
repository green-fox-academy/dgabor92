import * as test from 'tape';
import anagram from './anagram';

test('should be able to add a new plant', (t) => {
  let text1: string = 'node';
  let text2: string = 'deno';
  let result = anagram(text1, text2);
  let expected = true;

  t.equal(result, expected);
  t.end();
});

test('should be able to add a new plant', (t) => {
  let text1: string = 'node-module';
  let text2: string = 'deno';
  let result = anagram(text1, text2);
  let expected = false;

  t.equal(result, expected);
  t.end();
});
