#!/usr/bin/env node
import { introducing } from "../src/index.js";
import readlineSync from 'readline-sync';

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
    const userAns = readlineSync.question('Your answer: ');
    if (userAns == correct) {
        console.log('Correct!');
        count += 1;
    } else {
        console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correct}'.`);
        console.log(`Let's try again, ${name}!`);
        break;
    }
}
if (count === 3) {
    console.log(`Congratulations, ${name}!`);
}

