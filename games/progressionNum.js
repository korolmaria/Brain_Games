import getResult from '../src/index.js';

const question = 'What number is missing in the progression?';
const countNums = 5;

const getMathString = (arr, randomIndex) => {
  const arrNums = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== randomIndex) {
      arrNums.push(arr[i]);
    } else arrNums.push('..');
  }
  const newString = arrNums.join(' ');
  return newString;
};

const getRightAnswer = (arr, randomIndex) => {
  const mathString = getMathString(arr, randomIndex);
  const answerArr = [];
  const progressionNum = arr[randomIndex];
  answerArr.push(mathString);
  answerArr.push(String(progressionNum));
  return answerArr;
};

getResult(question, countNums, getRightAnswer);
