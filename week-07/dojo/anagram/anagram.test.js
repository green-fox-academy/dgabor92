'use strict';

import { test } from 'tape';
// const test = require('tape');
// const anagram = require('./anagram');
import anagram from './anagram.js';

test('Should return true, if the two strings are anagram', (t) => {
  let string1 = 'node';
  let string2 = 'deno';
  const actual = anagram(string1, string2);
  const expected = true;

  t.equal(actual, expected);
  t.end();
});

test('Should return false, if the two strings are not anagram', (t) => {
  let string1 = 'node-server';
  let string2 = 'deno';
  const actual = anagram(string1, string2);
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('Should return false, if one string undefined', (t) => {
  let string1 = '';
  let string2 = 'deno';
  const actual = anagram(string1, string2);
  const expected = false;

  t.equal(actual, expected);
  t.end();
});

test('Should return false, if one string undefined', (t) => {
  let string1 = 'node';
  let string2 = '';
  const actual = anagram(string1, string2);
  const expected = false;

  t.equal(actual, expected);
  t.end();
});
