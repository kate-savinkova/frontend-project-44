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
    }
    let correct, count = 0;
    for (let i = 0; i < 3; i++) {
        const randomNum1 = Math.floor(Math.random() * 10) + 1;
        const randomNum2 = Math.floor(Math.random() * 10) + 1;
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