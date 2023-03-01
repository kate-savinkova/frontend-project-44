#!/usr/bin/env node
import { introducing } from "../src/index.js";
import readlineSync from 'readline-sync';

const name = introducing('brain-prime');
let correct, count = 0;
for (let i = 0; i < 3; i++) {
    const randomNum1 = Math.floor(Math.random() * 100) + 1;
    correct = 'yes';
    console.log(`Question: ${randomNum1}`);
    for (let i = 2; i <= randomNum1 / 2; i++) {
        if (randomNum1 % i === 0) {
            correct = 'no';
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

