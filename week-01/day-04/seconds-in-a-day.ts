'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

function seconds() {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  let hours = Math.floor(time / 3600);
  let time = time - hours * 3600;
}
