'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

console.log(quote);
// console.log(quote.indexOf('It'));

let re = /It/gi;

let newQuote: string = quote.replace(re, 'It always takes longer than');

console.log(newQuote);
