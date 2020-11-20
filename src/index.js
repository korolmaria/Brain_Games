import readlineSync from 'readline-sync';
import { questionEven, isEvenNumber } from '../games/evenNum.js';
import { questionPrime, isPrimeNum } from '../games/primeNum.js';
import { questionCalc, getCalcString, resultCalculate } from '../games/calcNum.js';
import { getGcdNum, getGcdString, questionGcd } from '../games/gcdNum.js';
import {
  randomInteger, MIN, MAX, COUNTROUNDS,
} from './cli.js';
import {
  questionProgression, getStringProgression, getProgressionAnswer, getArrayProgressive,
} from '../games/progressionNum.js';

const getQuestion = (nameGame) => {
  let question = '';
  switch (nameGame) {
    case 'brainEven':
      question += questionEven;
      break;
    case 'brainCalc':
      question += questionCalc;
      break;
    case 'brainGcd':
      question += questionGcd;
      break;
    case 'brainProgression':
      question += questionProgression;
      break;
    case 'brainPrime':
      question += questionPrime;
      break;
    default:
      break;
  }
  return question;
};

const getResult = (itemName) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log(getQuestion(itemName));
  let countRightAnswer = 0;
  for (let i = 0; i < COUNTROUNDS; i += 1) {
    let rightAnswer = '';
    let mathExpression = '';
    const randNum1 = randomInteger(MIN, MAX);
    const randNum2 = randomInteger(MIN, MAX);
    const randomIndex = randomInteger(MIN, COUNTROUNDS - 1);
    const arrProgression = getArrayProgressive();
    const randIndexProgression = randomInteger(MIN, arrProgression.length - 1);
    switch (itemName) {
      case 'brainEven':
        rightAnswer += isEvenNumber(randNum1);
        mathExpression += randNum1;
        break;
      case 'brainCalc':
        rightAnswer += resultCalculate(randNum1, randNum2, randomIndex);
        mathExpression += getCalcString(randNum1, randNum2, randomIndex);
        break;
      case 'brainGcd':
        rightAnswer += getGcdNum(randNum1, randNum2);
        mathExpression += getGcdString(randNum1, randNum2);
        break;
      case 'brainProgression':
        rightAnswer += getProgressionAnswer(arrProgression, randIndexProgression);
        mathExpression += getStringProgression(arrProgression, randIndexProgression);
        break;
      case 'brainPrime':
        rightAnswer += isPrimeNum(randNum1);
        mathExpression += randNum1;
        break;
      default:
        break;
    }
    console.log(`Question: ${mathExpression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
  }
  if (countRightAnswer === COUNTROUNDS) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};

export default getResult;
