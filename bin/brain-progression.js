#!/usr/bin/env node
import { introducing } from "../src/index.js";
import readlineSync from 'readline-sync';

const name = introducing('brain-progression');
let correct, count = 0;
for (let i = 0; i < 3; i++) {
    let col = Math.floor(Math.random() * 10) + 5;
    let missing = Math.floor(Math.random() * col) + 1;
    let first = Math.floor(Math.random() * 100);
    let step = Math.floor(Math.random() * 5) + 1;
    let s = '';
    for (let i = 1; i <= col; i++) {
        if (i !== missing) {
            s += first + ' ';
        } else {
            s += '.. ';
            correct = first;
        }
        first += step;
    }
    console.log(`Question: ${s}`);
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

