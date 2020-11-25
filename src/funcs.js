export const COUNTROUNDS = 3;
export const MIN = 0;
export const MAX = 30;

export const randomInteger = (minNum = MIN, maxNum = MAX) => {
  const rand = minNum + Math.random() * (maxNum + 1 - minNum);
  return Math.floor(rand);
};

export const getArray = (countNums) => {
  const arr = [];
  if (countNums === 1) {
    arr.push(randomInteger());
  }
  if (countNums === 2) {
    arr.push(randomInteger());
    arr.push(randomInteger());
  }
  if (countNums >= 5) {
    const minLength = 5;
    const maxLength = 10;
    const lengthArray = randomInteger(minLength, maxLength);
    const progresNumSum = randomInteger(MIN, MAX);
    const numStart = randomInteger(MIN, MAX);
    for (let i = 0; i < lengthArray; i += 1) {
      arr[i] = (i === 0) ? numStart : arr[i - 1] + progresNumSum;
    }
  }
  return arr;
};

export const getRandIndex = (arr) => {
  const randInd = randomInteger(0, arr.length);
  return randInd;
};
