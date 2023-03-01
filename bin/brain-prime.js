#!/usr/bin/env node
import { introducing, end } from '../src/index.js';

const name = introducing('brain-prime');
let correct;
let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNum1 = Math.floor(Math.random() * 100) + 1;
  correct = 'yes';
  console.log(`Question: ${randomNum1}`);
  for (let j = 2; j <= randomNum1 / 2; j += 1) {
    if (randomNum1 % j === 0) {
      correct = 'no';
      break;
    }
  }
  let res = end(correct, name, count);
  if (res === 0) {
    break;
  } else {
    count = res;
  }
}
if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
