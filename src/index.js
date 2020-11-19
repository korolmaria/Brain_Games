import readlineSync from 'readline-sync';
import { questionEven, isEvenNumber } from '../games/evenNum.js';
import { questionCalc, getString, resultCalculate } from '../games/calcNum.js';
import { questionGcd, getGcdNum } from '../games/gcdNum.js';

import { randomInteger, MIN, MAX } from './cli.js';

export const COUNTROUNDS = 3;

const getResult = (itemName) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello! ${nameUser}`);
  let question = '';
  // eslint-disable-next-line default-case
  switch (itemName) {
    case 'brainEven':
      question += questionEven;
      break;
    case 'brainCalc':
      question += questionCalc;
      break;
    case 'brainGcd':
      question += questionGcd;
      break;
  }
  console.log(`${question}`);
  let countRightAnswer = 0;
  for (let i = 0; i < COUNTROUNDS; i += 1) {
    let rightAnswer = '';
    let mathExpression = '';
    const randNum1 = randomInteger(MIN, MAX);
    const randNum2 = randomInteger(MIN, MAX);
    const signs = ['+', '-', '*'];
    const randomIndex = randomInteger(MIN, COUNTROUNDS - 1);
    // eslint-disable-next-line default-case
    switch (itemName) {
      case 'brainEven':
        rightAnswer += isEvenNumber(randNum1);
        mathExpression += randNum1;
        break;
      case 'brainCalc':
        rightAnswer += resultCalculate(randNum1, randNum2, signs[randomIndex]);
        mathExpression += getString(randNum1, randNum2, signs[randomIndex]);
        break;
      case 'brainGcd':
        rightAnswer += getGcdNum(randNum1, randNum2);
        mathExpression += getString(randNum1, randNum2);
        break;
    }
    console.log(`Question: ${mathExpression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. 
      Let's try again, ${nameUser}!`);
    }
  }
  if (countRightAnswer === COUNTROUNDS) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};
export default getResult;
