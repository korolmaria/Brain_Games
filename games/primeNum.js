import getResult from '../src/index.js';
import { getArrNums } from '../src/funcs.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const numbersCount = 1;

const generateString = (nums) => {
  const string = `${nums[0]}`;
  return string;
};

const generateResult = () => {
  const nums = getArrNums(numbersCount);
  const mathString = generateString(nums);
  const answerArr = [];
  const primeArr = [];
  const num = nums[0];
  let countDivisors = 0;
  for (let i = 1; i <= num; i += 1) {
    primeArr.push(i);
  }
  for (let i = 0; i < primeArr.length; i += 1) {
    if (num % primeArr[i] === 0) {
      countDivisors += 1;
    }
  }
  const answer = (countDivisors === 2) ? 'yes' : 'no';
  answerArr.push(mathString);
  answerArr.push(answer);
  return answerArr;
};

getResult(question, generateResult);
