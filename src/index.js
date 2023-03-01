import cli from './cli.js';
import readlineSync from 'readline-sync';

export const algorithm = (typeOfGame) => {
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
    let correct, count = 0;
    for (let i = 0; i < 3; i++) {
        const randomNum1 = Math.floor(Math.random() * 100) + 1;
        const randomNum2 = Math.floor(Math.random() * 100) + 1;
        let mi;
        if (randomNum1 > randomNum2) {
            mi = randomNum2;
        } else {
            mi = randomNum1;
        }
        switch (typeOfGame) {
            case 'brain-even':
                console.log(`Question: ${randomNum1}`);
                if (randomNum1 % 2 === 0) {
                    correct = 'yes';
                } else {
                    correct = 'no';
                }
                break;
            case 'brain-calc':
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
                break;
            case 'brain-gcd':
                console.log(`Question: ${randomNum1} ${randomNum2}`);
                for (mi; mi >= 1; mi--) {
                    if (randomNum1 % mi === 0 && randomNum2 % mi === 0) {
                        correct = mi;
                        break;
                    }
                }
                break;
            case 'brain-progression':
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
                break;
            case 'brain-prime':
                correct = 'yes';
                console.log(`Question: ${randomNum1}`);
                for (let i = 2; i <= randomNum1 / 2; i++) {
                    if (randomNum1 % i === 0) {
                        correct = 'no';
                        break;
                    }
                }
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
}
export default cli;