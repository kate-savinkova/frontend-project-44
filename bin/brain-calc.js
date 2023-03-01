#!/usr/bin/env node
import { introducing } from "../src/index.js";
import readlineSync from 'readline-sync';

const name = introducing('brain-calc');
let correct, count = 0;
for (let i = 0; i < 3; i++) {
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
        case 2:
            console.log(`Question: ${randomNum1} * ${randomNum2}`);
            correct = randomNum1 * randomNum2;
            break;
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

