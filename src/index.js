import cli from './cli.js';
import readlineSync from 'readline-sync';

export const introducing = (typeOfGame) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    switch (typeOfGame) {
        case 'brain-even':
            console.log('Answer "yes" if the number is even, otherwise answer "no".');
            break;
        case 'brain-calc':
            console.log('What is the result of the expression?');
            break;
        case 'brain-gcd':
            console.log('Find the greatest common divisor of given numbers.');
            break;
        case 'brain-progression':
            console.log('What number is missing in the progression?');
            break;
        case 'brain-prime':
            console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
            break;
    }
    return name;
}

export const end = (correct, name, count) => {
    const userAns = readlineSync.question('Your answer: ');
    if (userAns == correct) {
        console.log('Correct!');
        count += 1;
    } else {
        console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correct}'.`);
        console.log(`Let's try again, ${name}!`);
        count = 0;
    }
    return count;
}
export default cli;