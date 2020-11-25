import getResult from '../src/index.js';

const question = "Answer 'yes' if the number is even, otherwise answer 'no'.";
const countNums = 1;

const getRightAnswer = (nums) => {
  const rightAnswer = [];
  const string = `${nums[0]}`;
  rightAnswer.push(string);
  const answer = (nums[0] % 2) === 0 ? 'yes' : 'no';
  rightAnswer.push(answer);
  return rightAnswer;
};

getResult(question, countNums, getRightAnswer);