import readlineSync from 'readline-sync';

const COUNTROUNDS = 3;
const MIN = 0;
const MAX = 30;

export const randomInteger = (minNum = 0, maxNum = 50) => {
  const rand = minNum + Math.random() * (maxNum + 1 - minNum);
  return Math.floor(rand);
};

const getArray = (countNums) => {
  const arr = [];
  if (countNums === 1) {
    arr.push(randomInteger());
  }
  if (countNums === 2) {
    arr.push(randomInteger());
    arr.push(randomInteger());
  }
  if (countNums >= 5) {
    const minLength = 5;
    const maxLength = 10;
    const lengthArray = randomInteger(minLength, maxLength);
    const progresNumSum = randomInteger(MIN, MAX);
    const numStart = randomInteger(MIN, MAX);
    for (let i = 0; i < lengthArray; i += 1) {
      arr[i] = (i === 0) ? numStart : arr[i - 1] + progresNumSum;
    }
  }
  return arr;
};

const getRandIndex = (arr) => {
  const randInd = randomInteger(0, arr.length);
  return randInd;
};

export const getResult = (question, countNums, mathString, rightResult) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  console.log(question);
  let countRightAnswer = 0;
  for (let i = 0; i < COUNTROUNDS; i += 1) {
    const arrNums = getArray(countNums);
    const randIndex = getRandIndex(arrNums);
    const rightAnswer = rightResult(arrNums, randIndex);
    const mathExpression = mathString(arrNums, randIndex);
    console.log(`Question: ${mathExpression}`);
    const answerUser = readlineSync.question('Your answer: ');
    if (answerUser === rightAnswer) {
      console.log('Correct!');
      countRightAnswer += 1;
    } else {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${nameUser}!`);
      break;
    }
    if (countRightAnswer === COUNTROUNDS) {
      console.log(`Congratulations, ${nameUser}!`);
    }
  }
};
