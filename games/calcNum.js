import getResult from '../src/index.js';
import { getArrNums, getRandIndex } from '../src/funcs.js';

const question = 'What is the result of the expression?';
const numbersCount = 2;

const signs = ['+', '-', '*'];

const generateString = (nums, randInd) => {
  const stringForCalc = nums.join(` ${signs[randInd]} `);
  return stringForCalc;
};

function generateResult() {
  const nums = getArrNums(numbersCount);
  const randInd = getRandIndex(nums);
  const mathString = generateString(nums, randInd);
  const sign = signs[randInd];
  const resultArr = [];
  let resultCalc = 0;
  switch (sign) {
    case '+':
      resultCalc = nums[0] + nums[1];
      break;
    case '-':
      resultCalc = nums[0] - nums[1];
      break;
    case '*':
      resultCalc = nums[0] * nums[1];
      break;
    default:
      break;
  }
  resultArr.push(mathString);
  resultArr.push(String(resultCalc));
  return resultArr;
}

getResult(question, generateResult);
