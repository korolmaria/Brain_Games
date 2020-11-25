import getResult from '../src/index.js';
import { getArrNums } from '../src/funcs.js';

const question = 'Find the greatest common divisor of given numbers.';
const numbersCount = 2;

const generateString = (nums) => {
  const strGcd = nums.join(' ');
  return strGcd;
};

const generateResult = () => {
  const nums = getArrNums(numbersCount);
  const stringGcd = generateString(nums);
  const answerArr = [];
  const num1 = nums[0];
  const num2 = nums[1];

  const arrayNum = [];
  const numMax = num2 > num1 ? num2 : num1;

  for (let i = 0; i <= numMax; i += 1) {
    arrayNum.push(i);
  }

  let gcdNumber = 0;
  for (let i = 1; i < arrayNum.length; i += 1) {
    if (num1 % arrayNum[i] === 0 && num2 % arrayNum[i] === 0) {
      if (arrayNum[i] >= gcdNumber) {
        gcdNumber = arrayNum[i];
      }
    }
  }
  answerArr.push(stringGcd);
  answerArr.push(String(gcdNumber));
  return answerArr;
};

getResult(question, generateResult);
