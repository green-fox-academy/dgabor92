'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

console.log(url);

let re = /https/gi;
let re2 = /nevertellmethebots/gi;

let newUrl: string = url.replace(re, 'https:');
console.log(newUrl);

let newUrl2: string = newUrl.replace(re2, 'nevetellmetheodds');
console.log(newUrl2);
