#!/usr/bin/env node
import { introducing, end } from "../src/index.js";

const name = introducing('brain-gcd');
let correct, count = 0;
for (let i = 0; i < 3; i++) {
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    let mi;
    if (randomNum1 > randomNum2) {
        mi = randomNum2;
    } else {
        mi = randomNum1;
    }
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    for (mi; mi >= 1; mi--) {
        if (randomNum1 % mi === 0 && randomNum2 % mi === 0) {
            correct = mi;
            break;
        }
    }
    const res = end(correct, name, count);
    if (res === 0) {
        break;
    }
}
if (count === 3) {
    console.log(`Congratulations, ${name}!`);
}

