import getResult from '../src/index.js';

const question = 'Find the greatest common divisor of given numbers.';
const countNums = 2;

const getMathString = (arr) => {
  const strGcd = arr.join(' ');
  return strGcd;
};

const getRightAnswer = (arr) => {
  const strGcd = getMathString(arr);
  const answerArr = [];
  const num1 = arr[0];
  const num2 = arr[1];

  const arrayNum = [];
  const numEnd = num2 > num1 ? num2 : num1;

  for (let i = 0; i <= numEnd; i += 1) {
    arrayNum.push(i);
  }

  let gcdNum = 0;
  for (let i = 1; i < arrayNum.length; i += 1) {
    if (num1 % arrayNum[i] === 0 && num2 % arrayNum[i] === 0) {
      if (arrayNum[i] >= gcdNum) {
        gcdNum = arrayNum[i];
      }
    }
  }
  answerArr.push(strGcd);
  answerArr.push(String(gcdNum));
  return answerArr;
};

getResult(question, countNums, getRightAnswer);