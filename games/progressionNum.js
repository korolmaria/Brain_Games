import { getString } from '../src/cli.js';

export const questionProgression = 'What number is missing in the progression?';

export const getStringProgression = (arr, randomIndex) => {
  // eslint-disable-next-line no-param-reassign
  arr[randomIndex] = '..';
  const newString = getString(arr);
  return newString;
};

export const getProgressionAnswer = (arr, randomIndex) => {
  const progressionNum = arr[randomIndex];
  return progressionNum;
};
