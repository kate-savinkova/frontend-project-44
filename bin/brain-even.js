#!/usr/bin/env node
import { introducing } from "../src/index.js";
import readlineSync from 'readline-sync';

const name = introducing('brain-even');
let correct, count = 0;
for (let i = 0; i < 3; i++) {
    const randomNum1 = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNum1}`);
    if (randomNum1 % 2 === 0) {
        correct = 'yes';
    } else {
        correct = 'no';
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