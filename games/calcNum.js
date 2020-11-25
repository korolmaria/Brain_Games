import getResult from '../src/index.js';

export const question = 'What is the result of the expression?';
export const countNums = 2;

const signs = ['+', '-', '*'];
export const getMathString = (nums, randInd) => {
  const stringForCalc = nums.join(` ${signs[randInd]} `);
  return stringForCalc;
};

export function getRightAnswer(nums, randInd) {
  const mathString = getMathString(nums, randInd);
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
  resultArr.push(resultCalc);
  return resultArr;
}

getResult(question, countNums, getRightAnswer);
