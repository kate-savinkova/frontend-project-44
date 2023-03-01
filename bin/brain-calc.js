#!/usr/bin/env node
import { introducing, end } from '../src/index.js';

const name = introducing('brain-calc');
let correct;
let count = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNum1 = Math.floor(Math.random() * 10) + 1;
  const randomNum2 = Math.floor(Math.random() * 10) + 1;
  const rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      console.log(`Question: ${randomNum1} + ${randomNum2}`);
      correct = randomNum1 + randomNum2;
      break;
    case 1:
      console.log(`Question: ${randomNum1} - ${randomNum2}`);
      correct = randomNum1 - randomNum2;
      break;
    default:
      console.log(`Question: ${randomNum1} * ${randomNum2}`);
      correct = randomNum1 * randomNum2;
      break;
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
