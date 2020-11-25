import getResult from '../src/index.js';
import { getArrNums } from '../src/funcs.js';

const question = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const numbersCount = 1;

const generateResult = () => {
  const rightAnswer = [];
  const nums = getArrNums(numbersCount);
  const string = `${nums[0]}`;
  rightAnswer.push(string);
  const answer = (nums[0] % 2) === 0 ? 'yes' : 'no';
  rightAnswer.push(answer);
  return rightAnswer;
};

getResult(question, generateResult);
