export const question = 'What number is missing in the progression?';
export const countNums = 5;

export const getMathString = (arr, randomIndex) => {
  const arrNums = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i !== randomIndex) {
      arrNums.push(arr[i]);
    } else arrNums.push('..');
  }
  const newString = arrNums.join(' ');
  return newString;
};

export const getRightAnswer = (arr, randomIndex) => {
  const progressionNum = arr[randomIndex];
  return String(progressionNum);
};
