import readlineSync from 'readline-sync';
import { COUNTROUNDS } from './funcs.js';

const getResult = (question, generateResult) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log(question);
  let countRightAnswer = 0;
  for (let i = 0; i < COUNTROUNDS; i += 1) {
    const rightAnswer = generateResult();
    console.log(`Question: ${rightAnswer[0]}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === rightAnswer[1]) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer[1]}".`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
    if (countRightAnswer === COUNTROUNDS) {
      console.log(`Congratulations, ${nameUser}!`);
    }
  }
};

export default getResult;
