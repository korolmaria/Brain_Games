import getResult from '../src/index.js';
import { getArrNums, getRandIndex } from '../src/funcs.js';

const question = 'What number is missing in the progression?';
const numbersCount = 5;

const generateString = (nums, randomIndex) => {
  const arrNums = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (i !== randomIndex) {
      arrNums.push(nums[i]);
    } else arrNums.push('..');
  }
  const newString = arrNums.join(' ');
  return newString;
};

const generateResult = () => {
  const nums = getArrNums(numbersCount);
  const randomIndex = getRandIndex(nums);
  const mathString = generateString(nums, randomIndex);
  const answerArr = [];
  const progressionNum = nums[randomIndex];
  answerArr.push(mathString);
  answerArr.push(String(progressionNum));
  return answerArr;
};

getResult(question, generateResult);
