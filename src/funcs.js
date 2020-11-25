export const COUNTROUNDS = 3;
export const MIN = 0;
export const MAX = 30;

export const generateRandNum = (minNum = MIN, maxNum = MAX) => {
  const rand = minNum + Math.random() * (maxNum + 1 - minNum);
  return Math.floor(rand);
};

export const getArrNums = (numbersCount) => {
  const arr = [];
  if (numbersCount === 1) {
    arr.push(generateRandNum());
  }
  if (numbersCount === 2) {
    arr.push(generateRandNum());
    arr.push(generateRandNum());
  }
  if (numbersCount >= 5) {
    const minLength = 5;
    const maxLength = 10;
    const lengthArray = generateRandNum(minLength, maxLength);
    const progresNumSum = generateRandNum(MIN, MAX);
    const numStart = generateRandNum(MIN, MAX);
    for (let i = 0; i < lengthArray; i += 1) {
      arr[i] = (i === 0) ? numStart : arr[i - 1] + progresNumSum;
    }
  }
  return arr;
};

export const getRandIndex = (arr) => {
  const randInd = generateRandNum(0, arr.length);
  return randInd;
};
