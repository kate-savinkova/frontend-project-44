#!/usr/bin/env node
import { introducing, end } from '../src/index.js';

const name = introducing('brain-even');
let correct;
let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNum1 = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNum1}`);
  if (randomNum1 % 2 === 0) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
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
