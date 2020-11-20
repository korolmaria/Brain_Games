import { randomInteger, MIN, MAX } from '../src/cli.js';

export const questionProgression = 'What number is missing in the progression?';

export const getArrayProgressive = () => {
  const minLength = 5;
  const maxLength = 10;
  const lengthArray = randomInteger(minLength, maxLength);
  const progresNumSum = randomInteger(MIN, MAX);
  const numStart = randomInteger(MIN, MAX);
  const arr = [];
  for (let i = 0; i < lengthArray; i += 1) {
    arr[i] = (i === 0) ? numStart : arr[i - 1] + progresNumSum;
  }
  return arr;
};

export const getStringProgression = (arr, randomIndex) => {
  // eslint-disable-next-line no-param-reassign
  arr[randomIndex] = '..';
  const newString = arr.join(' ');
  return newString;
};

export const getProgressionAnswer = (arr, randomIndex) => {
  const progressionNum = arr[randomIndex];
  return progressionNum;
};
