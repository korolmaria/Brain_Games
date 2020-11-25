import readlineSync from 'readline-sync';
import { COUNTROUNDS, getRandIndex, getArray } from './funcs.js';

const getResult = (question, countNums, getRightResult) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log(question);
  let countRightAnswer = 0;
  for (let i = 0; i < COUNTROUNDS; i += 1) {
    const arrNums = getArray(countNums);
    const randIndex = getRandIndex(arrNums);
    const rightAnswer = getRightResult(arrNums, randIndex);
    console.log(`Question: ${rightAnswer[0]}`);
    const answerUser = Number(readlineSync.question('Your answer: '));
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
