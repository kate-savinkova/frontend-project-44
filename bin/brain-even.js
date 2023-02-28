#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let rightAns = 0;
while (rightAns < 3) {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNum}`);
  const userAns = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0) {
    if (userAns === 'yes') {
      console.log('Correct!');
      rightAns += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  } else {
    if (userAns === 'no') {
      console.log('Correct!');
      rightAns += 1;
    } else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
}
if (rightAns === 3) {
  console.log(`Congratulations, ${name}!`);
}