#!/usr/bin/env node
import { introducing, end } from '../../src/index.js';

const name = introducing('brain-progression');
let correct;
let count = 0;
for (let i = 0; i < 3; i += 1) {
  const col = Math.floor(Math.random() * 10) + 5;
  const missing = Math.floor(Math.random() * col) + 1;
  let first = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 5) + 1;
  let s = '';
  for (let j = 1; j <= col; j += 1) {
    if (j !== missing) {
      s += `${first} `;
    } else {
      s += '.. ';
      correct = first;
    }
    first += step;
  }
  console.log(`Question: ${s}`);
  const res = end(correct, name, count);
  if (res === 0) {
    break;
  } else {
    count = res;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
